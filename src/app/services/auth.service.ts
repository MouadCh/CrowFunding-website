import { Injectable } from '@angular/core';
import { IndexService } from './index.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mainUrl:String;

  user = {
    username:'',
    password:''
  }
  

  jwt:String="d";

  constructor(private indexService:IndexService , private htpp:HttpClient) { 
    this.mainUrl = this.indexService.mainUrl;
  }

  

  SeConnecter(){
  }

}
