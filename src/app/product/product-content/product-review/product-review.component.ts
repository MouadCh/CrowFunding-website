import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'   ,   './product-review.css']
})
export class ProductReviewComponent implements OnInit {

  commentToAdd:String;
  email:String;
  anonymous:String;

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

submitComment(form){
  console.log("MM",form,this.email,this.anonymous);
}

}
