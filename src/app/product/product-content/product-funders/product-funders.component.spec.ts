import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFundersComponent } from './product-funders.component';

describe('ProductFundersComponent', () => {
  let component: ProductFundersComponent;
  let fixture: ComponentFixture<ProductFundersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFundersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
