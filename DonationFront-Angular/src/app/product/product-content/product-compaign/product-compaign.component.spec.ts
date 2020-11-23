import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCompaignComponent } from './product-compaign.component';

describe('ProductCompaignComponent', () => {
  let component: ProductCompaignComponent;
  let fixture: ComponentFixture<ProductCompaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCompaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
