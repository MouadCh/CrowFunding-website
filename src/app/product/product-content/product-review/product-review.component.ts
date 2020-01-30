import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CommentService } from 'src/app/services/comment.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'   ,   './product-review.css']
})
export class ProductReviewComponent implements OnInit {

  comment:String="";
  imgPath:String="https://lh3.googleusercontent.com/-zn5UCGgmIeA/AAAAAAAAAAI/AAAAAAAAAAA/4b1SUl-mHI0/s128-c-k/photo.jpg";

  constructor(private commentService : CommentService, private authService:AuthService){  }

  ngOnInit() {
  }

  submitComment(){
    if(this.comment.length>0){
      this.commentService.AddComment(this.comment,this.authService.user.id);
      this.comment = "";
    }
  }

}
