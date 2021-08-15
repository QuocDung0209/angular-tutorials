import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipCssComponent } from './tooltip-css.component';

describe('TooltipCssComponent', () => {
  let component: TooltipCssComponent;
  let fixture: ComponentFixture<TooltipCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
