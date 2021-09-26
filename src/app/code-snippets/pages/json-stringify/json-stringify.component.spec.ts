import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonStringifyComponent } from './json-stringify.component';

describe('JsonStringifyComponent', () => {
  let component: JsonStringifyComponent;
  let fixture: ComponentFixture<JsonStringifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonStringifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonStringifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
