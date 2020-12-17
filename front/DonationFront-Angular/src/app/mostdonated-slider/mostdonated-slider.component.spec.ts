import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostdonatedSliderComponent } from './mostdonated-slider.component';

describe('MostdonatedSliderComponent', () => {
  let component: MostdonatedSliderComponent;
  let fixture: ComponentFixture<MostdonatedSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostdonatedSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostdonatedSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
