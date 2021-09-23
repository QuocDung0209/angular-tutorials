import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncLoadingTutorialsComponent } from './async-loading-tutorials.component';

describe('AsyncLoadingTutorialsComponent', () => {
  let component: AsyncLoadingTutorialsComponent;
  let fixture: ComponentFixture<AsyncLoadingTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncLoadingTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncLoadingTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
