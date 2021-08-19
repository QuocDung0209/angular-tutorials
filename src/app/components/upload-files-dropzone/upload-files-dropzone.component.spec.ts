import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFilesDropzoneComponent } from './upload-files-dropzone.component';

describe('UploadFilesDropzoneComponent', () => {
  let component: UploadFilesDropzoneComponent;
  let fixture: ComponentFixture<UploadFilesDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFilesDropzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFilesDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
