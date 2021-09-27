import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FileExtension } from 'src/app/core/types/enums';
import { Popover } from 'bootstrap';

const fileType = {
  txt: {
    type: 'text/plain',
    fileExtension: '.txt',
  },
  jpg: {
    type: 'image/jpeg',
    fileExtension: '.jpg',
  },
  png: {
    type: 'image/png',
    fileExtension: '.png',
  },
  pdf: {
    type: 'application/pdf',
    fileExtension: '.pdf',
  },
  excel: {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    fileExtension: '.xlxs',
  },
  mp3: {
    type: 'audio/mpeg',
    fileExtension: '.mp3',
  },
  mp4: {
    type: 'video/mp4',
    fileExtension: '.mp4',
  },
}

const defaultConfig = {
  uploadIconClass: 'fa fa-upload',
  dropZoneInstruction: 'Drag and Drop here',
  browseButtonText: 'Browse files',
  invalidIconClass: 'fa fa-ban',
  invalidMessage: 'Invalid file type! Folder is not accepted!',
};

@Component({
  selector: 'app-upload-files-dropzone',
  templateUrl: './upload-files-dropzone.component.html',
  styleUrls: ['./upload-files-dropzone.component.scss']
})
export class UploadFilesDropzoneComponent implements OnInit {
  @Input() filesUploaded: any = new Array<File>();
  @Output() filesUploadedChange = new EventEmitter<Array<File>>();
  @Output() onError = new EventEmitter<string>();

  @Input() maxFiles!: number;
  @Input() maxFileSizeMB!: number;
  @Input() height: number = 200; // px
  @Input() width: number = 50; // %

  /** Validate files types */
  @Input() acceptedType: FileExtension = 'all';
  invalidFiles: any[] = [];

  public config = defaultConfig;
  public isValidFile: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * on file drop handler
  */
  handleFileDropped(files: Array<File>) {
    const validFiles: Array<File> = this.validateFileType(files);
    this.prepareFilesList(validFiles);
  }

  handleFileError(event: string) {
    this.onError.emit(event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
    const files = event.target && event.target.files;
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.filesUploaded.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.filesUploaded.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.filesUploaded[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.filesUploaded[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const file of files) {
      file.progress = 0;
      this.filesUploaded.push(file);
    }
    this.filesUploadedChange.emit(this.filesUploaded);
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals: number = 0) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const kb = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    // The Math.floor() function returns the largest integer less than or equal to a given number. E.g: 5,.. -> 5
    // Math.log() function is equivalent to ln(x) in mathematics.
    const i = Math.floor(Math.log(bytes) / Math.log(kb));
    // Converts a string to a floating-point number.
    // Math.pow(base, exponent) function returns the base to the exponent power, as in base^exponent.
    return parseFloat((bytes / Math.pow(kb, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /** Validate files types */
  private validateFileType(files: Array<any>) {
    if (this.acceptedType === 'all') {
      return files;
    } else {
      const validFiles: Array<File> = [];
      const accept = fileType[this.acceptedType].type;
      files && files.forEach((file: File) => {
        if (file.type === accept) {
          validFiles.push(file);
        } else {
          this.invalidFiles.push({ name: file.name, type: file.type, reason: this.getErrorType(this.acceptedType) });
        }
      });
      return validFiles;
    }
  }

  private getErrorType(type: any) {
    return `Invalid file type! Only except file ${type}`;
  }

}
