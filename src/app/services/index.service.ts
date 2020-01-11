import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  activePage:String="home";
  activeProduct:String="";

  constructor() { }

  ClickOnProduct(title:String){
    window.scroll(0,0);
    this.activeProduct=title;
    this.activePage="product";
  }

}
