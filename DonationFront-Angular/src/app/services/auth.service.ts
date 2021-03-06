import { Injectable } from '@angular/core';
import { IndexService } from './index.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
   mainUrl:String;

  userImage:String; 

   userAuth = {
    userName:'',
    password:''
  }
/*    user = {
    id:'',
    email:'',
   // imageUrl:'',
    nom:'',
    prenom:'',
    userName:'',
    password:'',
    idCart:'',
    role:''
  } */

  public setUser(userName: string, password:string){
    this.userAuth.userName = userName;
    this.userAuth.password = password;

  }
   
  public reset(){
   /*  this.jwt = undefined;
    this.userAuth.userName = '';
    this.userAuth.password = '';
    this.user.id = '';
    this.user.nom = '';
    this.user.prenom = '';
    this.user.userName = '';
    this.user.password = '';
    this.user.email = '';
    this.user.idCart ='';
    //this.user.imageUrl = '';
    this.user.role = '';  */
    sessionStorage.clear();
    this.userAuth.userName = '';
    this.userAuth.password = '';

  }
  

 

  constructor(private indexService:IndexService , private httpClient:HttpClient) { 
    this.mainUrl = this.indexService.mainUrl;
  }

  

  SeConnecter(){
    
    let data = {
      'userName' : this.userAuth.userName,
      'password' : this.userAuth.password
    }
     this.httpClient.post(this.mainUrl+"authenticate",data)
       .subscribe((res)=>{
       /* this.jwt = res; */
       sessionStorage.setItem('jwt',res['jwt']);
       
     }
     );
     this.httpClient.get(this.mainUrl+"userByUserName?userName="+this.userAuth.userName)
     .subscribe((res)=>{
       /* console.log(res);
       console.log(res['carte']['id']); */
    /*  this.user.id = res['id'];
     this.user.nom = res['nom'];
     this.user.prenom = res['prenom'];
     this.user.userName = res['userName'];
     this.user.password = res['password'];
     this.user.email = res['email'];
     this.user.idCart = res['carte']['id'];
     //this.user.imageUrl = res['imageUrl'];
     this.user.role = res['role'];  */
     ////////////////////////////////////////////////////////////

        sessionStorage.setItem('id', res['id']);
        sessionStorage.setItem('nom', res['nom']);
        sessionStorage.setItem('prenom', res['prenom']);
        sessionStorage.setItem('userName', res['userName']);
        sessionStorage.setItem('email', res['email']);
        sessionStorage.setItem('password', res['password']);
        sessionStorage.setItem('idCarte', res['carte']['id']);
        sessionStorage.setItem('role', res['role']);
        
    ///////////////////////////////////////////////////////////
     /* this.GetUserImage(res['id']); */
     });

 
  }
/* 
  GetUserImage(id){
    this.httpClient.get(this.mainUrl+"userImage?id="+id , {responseType : 'text'}).subscribe( (data:any) =>{
      this.userImage= data;
    }, err =>{
      console.log("not Found ");
    });  
  } */

  isConnecte():boolean{
   /*   if(this.jwt!=undefined){  */
    if(sessionStorage.getItem('id') != null){ 
      return true;
    } else {
      return false;
    }
  }
 
 

}
