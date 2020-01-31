import { Injectable } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  mainUrl:String = "http://localhost:8080/";

  searchText:string="";


  

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
