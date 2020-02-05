import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CommentService } from 'src/app/services/comment.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'   ,   './product-review.css']
})
export class ProductReviewComponent implements OnInit {

  comment:String="";
  imgPath:String="https://lh3.googleusercontent.com/-zn5UCGgmIeA/AAAAAAAAAAI/AAAAAAAAAAA/4b1SUl-mHI0/s128-c-k/photo.jpg";

  constructor(private commentService : CommentService, private authService:AuthService,private profService:ProfilService){  }

  jwt:any=sessionStorage.getItem('jwt') ;
  theCommenterImage:any;

  ngOnInit() {
    var id = parseInt(sessionStorage.getItem('id'));
    console.log("jwt"+sessionStorage.getItem('jwt')) ;
    this.profService.getImage(id).subscribe(data =>{
      this.theCommenterImage = data;
      console.log("done");
    });
  }

  submitComment(){
    if(this.comment.length>0){
      /* this.commentService.AddComment(this.comment,this.authService.user.id); */
      this.commentService.AddComment(this.comment,sessionStorage.getItem('id'));
      this.comment = "";
    }
  }

}
