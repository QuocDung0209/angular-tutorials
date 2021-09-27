import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialProjectComponent } from './initial-project.component';

describe('InitialProjectComponent', () => {
  let component: InitialProjectComponent;
  let fixture: ComponentFixture<InitialProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
