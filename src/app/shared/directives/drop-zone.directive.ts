import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

// Get all dropped files from webkit DataTransferItem
const getFilesAndDirectory = (dataTransferItems: any) => {
  function traverseFileTreePromise(item: any, path = '') {
    return new Promise(resolve => {
      if (item.isFile) {
        item.file((file: any) => {
          file.filepath = path + file.name //save full path
          files.push(file)
          resolve(file)
        })
      } else if (item.isDirectory) {
        let directoryReader = item.createReader()
        directoryReader.readEntries((entries: any) => {
          let entriesPromises = []
          for (let entr of entries)
            entriesPromises.push(traverseFileTreePromise(entr, path + item.name + "/"))
          resolve(Promise.all(entriesPromises))
        })
      }
    })
  }

  let files: any = []
  return new Promise((resolve, reject) => {
    let entriesPromises = []
    for (let it of dataTransferItems)
      // webkitGetAsEntry() returns a FileSystemFileEntry or FileSystemDirectoryEntry representing it.
      entriesPromises.push(traverseFileTreePromise(it.webkitGetAsEntry()))
    Promise.all(entriesPromises)
      .then(entries => {
        // console.log(entries)
        resolve(files)
      })
  })
}

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {
  // The directive emits a `fileDrop` event
  // with the list of files dropped on the element
  // as an JS array of `File` objects.
  @Output() fileDropped = new EventEmitter<Array<File>>();

  // Disable dropping on the body of the document. 
  // This prevents the browser from loading the dropped files
  // using it's default behaviour if the user misses the drop zone.
  // Set this input to false if you want the browser default behaviour.
  @Input() preventBodyDrop = true;

  // The `drop-zone-active` class is applied to the host
  // element when a drag is currently over the target.
  @HostBinding('class.dropzone-active') active = false;

  // Allow reading files from folder
  @Input() allowDirectory: boolean = true;

  // Catch error when dropping a folder if allowDirectory is false
  @Output() onError = new EventEmitter<string>();

  constructor() { }

  // Get all dropped files
  private getFiles(dataTransfer: DataTransfer) {
    if (dataTransfer?.items.length) {
      const files: Array<File> = [];
      for (let i = 0; i < dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (!dataTransfer.items[i].webkitGetAsEntry().isDirectory && dataTransfer.items[i].kind === 'file') {
          const file = dataTransfer.items[i].getAsFile();
          file && file.type !== "" && files.push(file);
        } else {
          this.onError.emit("Invalid file type. Folder is not accepted!");
        }
      }
      // Clear any remaining drag data
      dataTransfer.items.clear();
      this.fileDropped.emit(files);
    } else {
      const files = dataTransfer?.files ?? [];
      dataTransfer?.clearData();
      this.fileDropped.emit(Array.from(files));
    }
  }

  //Dragover listener
  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.active = true;
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.active = false;

    const dataTransfer = event.dataTransfer;

    if (this.allowDirectory) {
      getFilesAndDirectory(dataTransfer?.items)
        .then((files: any) => {
          this.fileDropped.emit(files);
        });
    } else {
      dataTransfer && this.getFiles(dataTransfer);
    }
  }

  // Prevent the browser default behaviour when dropping on the body of the document
  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
    }
  }

}
