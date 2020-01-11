import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-compaign',
  templateUrl: './product-compaign.component.html',
  styleUrls: ['./product-compaign.component.scss'   ,'./product-compaign.css']
})
export class ProductCompaignComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  Donate(){
    
  }

}
