import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTutorialComponent } from './pipes-tutorial.component';

describe('PipesTutorialComponent', () => {
  let component: PipesTutorialComponent;
  let fixture: ComponentFixture<PipesTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
