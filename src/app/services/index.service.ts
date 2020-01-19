import { Injectable } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  mainUrl:String = "http://192.168.1.70:8080/";

  activePage:String="home";
  activeProduct:String="";

  constructor(private router : Router) { }

  ClickOnProduct(id:any){
    window.scroll(0,0);
    this.activeProduct=id;
    window.location.href = "projet/"+id;
    // this.router.navigateByUrl("projet/"+id);
    // this.activePage="product";
    // console.log(title);
  }

}
