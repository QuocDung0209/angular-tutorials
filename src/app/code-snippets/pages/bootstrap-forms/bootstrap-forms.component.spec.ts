import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFormsComponent } from './bootstrap-forms.component';

describe('BootstrapFormsComponent', () => {
  let component: BootstrapFormsComponent;
  let fixture: ComponentFixture<BootstrapFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
