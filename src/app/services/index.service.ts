import { Injectable } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  mainUrl:String = "http://192.168.1.107:8080/";

  // activePage:String="home";
  // activeProduct:String="d";

  

  constructor(private router : Router) { }

  ClickOnProduct(id:any){
    window.scroll(0,0);
    // this.activeProduct=id;
    window.location.href = "projet/"+id;
    // this.router.navigateByUrl("projet/"+id);
    // this.activePage="product";
    // console.log(title);   
  }

  

}
