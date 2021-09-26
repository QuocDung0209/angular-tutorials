import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerContainerComponent } from './docker-container.component';

describe('DockerContainerComponent', () => {
  let component: DockerContainerComponent;
  let fixture: ComponentFixture<DockerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
