import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-funders',
  templateUrl: './product-funders.component.html',
  styleUrls: ['./product-funders.component.scss']
})
export class ProductFundersComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

}
