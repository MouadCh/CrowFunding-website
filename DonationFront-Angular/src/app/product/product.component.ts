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

    //Get id from url
    var txt = this.router.url;
    var id =  parseInt(txt.match(/\d+/g)+"");
    console.log(id); 

    //Add View to projet
    this.productService.AddViewsToPtojet(id);

    //Get product(id) from BDD 
    this.productService.getProductId(id);

    //Get product Images from BDD 
    this.productService.GetProductImages(id);


  }

}
