import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOveflowCssComponent } from './text-oveflow-css.component';

describe('TextOveflowCssComponent', () => {
  let component: TextOveflowCssComponent;
  let fixture: ComponentFixture<TextOveflowCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextOveflowCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextOveflowCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
