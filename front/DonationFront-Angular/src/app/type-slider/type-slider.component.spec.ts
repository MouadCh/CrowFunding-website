import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSliderComponent } from './type-slider.component';

describe('TypeSliderComponent', () => {
  let component: TypeSliderComponent;
  let fixture: ComponentFixture<TypeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
