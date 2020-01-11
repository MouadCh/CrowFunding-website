import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss'  ,   './product-content.css']
})
export class ProductContentComponent implements OnInit {

  activePanel:String = "compaign";

  constructor() { }

  ngOnInit() {
  }

  setCompaign(){
    this.activePanel="compaign";
  }
  setReview(){
    this.activePanel="review";
  }
  setFunders(){
    this.activePanel="funders";
  }

}
