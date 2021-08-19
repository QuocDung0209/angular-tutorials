import { Component, Output, EventEmitter, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { EMPTY_STRING } from 'src/app/constants/common.constant';

export const FILE_INPUT = {
  NO_FILE_CHOSEN: 'No File Chosen',
  MAX_FILE_SIZE_MB: 5,
  KB_TO_BYTES: 1024,
  MB_TO_KB: 1024,
  UPLOAD_ICON_CLASS: 'fa fa-arrow-down',
  ERROR_ICON_CLASS: 'fa fa-times-circle',
  UPLOAD_INSTRUCTION: 'Drag and Drop to UpLoad or',
  CLICKABLE_UPLOAD_INSTRUCTION: 'Browse for a File',
  DEFAULT_HEIGHT: '100',
  DEFAULT_WIDTH: '30',
  VALID_FILE_TYPE_DEFAULT: 'text/plain'
};

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('fileInput') fileInput!: ElementRef;

  @Output() fileUploadChange = new EventEmitter<File>();

  @Input() fileUpload!: File;
  @Input() uploadIconClass = FILE_INPUT.UPLOAD_ICON_CLASS;
  @Input() uploadInstruction = FILE_INPUT.UPLOAD_INSTRUCTION;
  @Input() clickableUploadInstruction = FILE_INPUT.CLICKABLE_UPLOAD_INSTRUCTION;
  @Input() exceedingIconClass = FILE_INPUT.ERROR_ICON_CLASS;
  @Input() exceedingContent!: string;
  @Input() maxFileSizeMB = FILE_INPUT.MAX_FILE_SIZE_MB;
  @Input() maxFileSizeInstruction!: string;
  @Input() fileInputInstruction: string;
  @Input() height: string;
  @Input() width: string;
  noFileChosenString = FILE_INPUT.NO_FILE_CHOSEN;
  fileSizeInMB!: number;
  fileToUpload!: File | undefined;
  isValidFile: boolean;

  private isExceedingContentBinding: boolean;
  private validFileType = FILE_INPUT.VALID_FILE_TYPE_DEFAULT;

  constructor() {
    this.fileInputInstruction = EMPTY_STRING;
    this.isExceedingContentBinding = false;
    this.isValidFile = true;
    this.height = FILE_INPUT.DEFAULT_HEIGHT;
    this.width = FILE_INPUT.DEFAULT_WIDTH;
  }

  ngOnInit() {
    this.maxFileSizeInstruction = this.getmaxFileSizeInstruction();
    if (this.exceedingContent !== undefined) {
      this.isExceedingContentBinding = true;
    }
  }

  handleFileInput(event: any, isDragDrop: boolean) {
    const files = isDragDrop ? event : event.target.files;
    if (files && files.length > 0) {
      this.validateFileType(files[0]);
      if (this.isValidFile === false) {
        this.fileToUpload = undefined;
        this.noFileChosenString = files[0].name;
        this.exceedingContent = this.getInvalidFileTypeIntruction();
        this.fileUploadChange.emit(this.fileToUpload);
        return;
      }

      this.checkFileSize(files[0]);
      if (this.isValidFile) {
        this.fileToUpload = files[0];
      } else {
        this.fileToUpload = undefined;
      }
      this.fileUploadChange.emit(this.fileToUpload);
    }
    return;
  }

  clearBrowseFile() {
    this.fileSizeInMB = 0;
    this.isValidFile = true;
    this.fileToUpload = undefined;
    this.noFileChosenString = FILE_INPUT.NO_FILE_CHOSEN;
    this.fileInput.nativeElement.value = null;
    this.fileUploadChange.emit(this.fileToUpload);
  }

  private getmaxFileSizeInstruction() {
    if (this.maxFileSizeInstruction !== undefined) {
      return this.maxFileSizeInstruction;
    }
    return this.getDefaultMaxFileSizeIntruction();
  }

  private checkFileSize(file: File) {
    if (file) {
      const fileSize = +file.size;
      this.getFileSizeInMB(fileSize);
      this.getExceedingContent();
      this.noFileChosenString = file.name;
      this.isValidFile = this.fileSizeInMB < this.maxFileSizeMB
      return;
    }
    return;
  }

  private validateFileType(file: File) {
    if (file) {
      this.isValidFile = file.type === this.validFileType;
    }
  }

  private getExceedingContent() {
    if (!this.isExceedingContentBinding) {
      this.exceedingContent = this.getDefaultExceedingContent();
    }
    return;
  }

  private getFileSizeInMB(size: number) {
    const sizeInMb = size / FILE_INPUT.KB_TO_BYTES / FILE_INPUT.MB_TO_KB;
    this.fileSizeInMB = + sizeInMb.toFixed(1);
    return;
  }

  private getDefaultMaxFileSizeIntruction() {
    return `Maximum upload file size: ${this.maxFileSizeMB}MB`
  }

  private getInvalidFileTypeIntruction() {
    return `Invalid file type. Only accept text file.`;
  }

  private getDefaultExceedingContent() {
    return `The file is ${this.fileSizeInMB} MB exceeding the maximum file size of ${this.maxFileSizeMB}MB`;
  }

}
