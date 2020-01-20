import { Injectable } from '@angular/core';
import { IndexService } from './index.service';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import { TryCatchStmt } from '@angular/compiler';
import { Mock } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommentService {
  mainUrl: String;
  // currentProjetId;

  comments:any[];
  commentsSize:number=3;

  currentProjetId: any;

  commentImage:any[];

  constructor(private indexService : IndexService , private http:HttpClient) { 
    this.mainUrl = this.indexService.mainUrl;
  }
  obj:Promise<any>; 

  getAllComments(currentProjetId){
    this.currentProjetId = currentProjetId;
    this.http.get(this.mainUrl+"commentaire?id="+currentProjetId).subscribe( (data:any[]) =>{
      this.comments = data;
    }, err =>{
    });
    
    
    
    // console.log("Commmmmmmmtns size = "+this.commentsSize);
  }

  GetCommentsImages(currentProjetId){

    this.http.get(this.mainUrl+"commentaire?id="+currentProjetId).forEach( (el:any) => {
      this.http.get(this.mainUrl+"userImage?id="+el.user.id , {responseType : 'text'}).subscribe( (data:any) =>{
        this.commentImage.push(data);
        console.log("Here");
      }, err =>{
        console.log("not Found ");
      });  
    });
  }

  AddComment(comment){
    let data={
        commentaire : comment,
        projet : {
              id : this.currentProjetId
            },
        user :  {
              id : 1
        }
    }
    this.http.post(this.mainUrl+"commentaire",data).subscribe( data =>{
      console.log("sended");
      console.log(data);
      this.getAllComments(this.currentProjetId);
    });
  }

}
