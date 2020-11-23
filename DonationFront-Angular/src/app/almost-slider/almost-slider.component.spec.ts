import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmostSliderComponent } from './almost-slider.component';

describe('AlmostSliderComponent', () => {
  let component: AlmostSliderComponent;
  let fixture: ComponentFixture<AlmostSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmostSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmostSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
