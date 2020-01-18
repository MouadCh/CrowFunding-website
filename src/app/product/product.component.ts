import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss' ]
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService, private router : Router) {  }

  ngOnInit() {

    var txt = this.router.url;
    var id =  parseInt(txt.match(/\d/g)+"");
    console.log(id); 
    this.productService.getProductId(id);
  }

}
