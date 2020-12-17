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

  commentsImage:any=[];

  // 1 Pour afficher comments 
  // -1 Pour afficher message d'aucune comment est trouvé 
  showComment:number;

  constructor(private indexService : IndexService , private http:HttpClient) { 
    this.mainUrl = this.indexService.mainUrl;
  }
  obj:Promise<any>; 

  getAllComments(currentProjetId){
    this.currentProjetId = currentProjetId;
    this.http.get(this.mainUrl+"commentaire?id="+currentProjetId).subscribe( (data:any[]) =>{
      if(data != null){
        this.comments = data;
        this.showComment = 1;
      }else{
        this.showComment = -1;        
      }
    }, err =>{
      this.showComment = -1;        
    });

  }

  GetCommentsImages(currentProjetId){

    //Parcourir chaque comment et associer l'image associe aux utilisateur
    this.http.get(this.mainUrl+"commentaire?id="+currentProjetId).forEach( (comments:any) => {
      
      comments.forEach(comment => {
        var exist=false;

        this.commentsImage.forEach( (el:any) => {
          if(el.id == comment.user.id) {
                exist = true;
              }     
        });

        //---------------- Pour eviter la duplication des utilisateurs-------------------------
        if(exist == false){
            this.commentsImage.push( { id : comment.user.id , img : '1'} );
          }
        });

        this.commentsImage.forEach( (el:any) => {
            this.http.get(this.mainUrl+"userImage?id="+el.id , {responseType : 'text'}).subscribe( (data:any) =>{
              el.img = data;
              // console.log("data"+data);
              console.log("Id: "+el.id+" Img: "+el.img);
            }, err =>{
              console.log("not Found ");
            });  
        });
        //-----------------------------------------------------------------------------------------
    });
  }

  AddComment(comment,idUser){
    let data={
        commentaire : comment,
        projet : {
              id : this.currentProjetId
            },
        user :  {
              id : idUser
        }
    }
    this.http.post(this.mainUrl+"commentaire",data).subscribe( data =>{
      this.getAllComments(this.currentProjetId);
      this.GetCommentsImages(this.currentProjetId);
    });
  }

}
