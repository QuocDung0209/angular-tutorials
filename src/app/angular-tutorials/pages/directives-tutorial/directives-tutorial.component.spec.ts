import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTutorialComponent } from './directives-tutorial.component';

describe('DirectivesTutorialComponent', () => {
  let component: DirectivesTutorialComponent;
  let fixture: ComponentFixture<DirectivesTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
