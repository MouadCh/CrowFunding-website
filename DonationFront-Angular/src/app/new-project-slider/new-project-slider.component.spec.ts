import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectSliderComponent } from './new-project-slider.component';

describe('NewProjectSliderComponent', () => {
  let component: NewProjectSliderComponent;
  let fixture: ComponentFixture<NewProjectSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjectSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
