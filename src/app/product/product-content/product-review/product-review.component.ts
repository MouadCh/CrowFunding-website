import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'   ,   './product-review.css']
})
export class ProductReviewComponent implements OnInit {

  commentToAdd:String;
  email:String;
  anonymous:String;

  constructor(private productService : ProductService, private commentService : CommentService) { }

  ngOnInit() {
  }

submitComment(form){
  console.log("MM",form,this.email,this.anonymous);
}

}
