import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostvisitedSliderComponent } from './mostvisited-slider.component';

describe('MostvisitedSliderComponent', () => {
  let component: MostvisitedSliderComponent;
  let fixture: ComponentFixture<MostvisitedSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostvisitedSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostvisitedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
