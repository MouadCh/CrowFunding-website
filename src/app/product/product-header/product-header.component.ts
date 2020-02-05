import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IndexService } from 'src/app/services/index.service';
import { animate } from '@angular/animations';
import { timer } from 'rxjs';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'  , './product-header.css' , './product-header-fonts.css']
})
export class ProductHeaderComponent implements OnInit {

    constructor(private productService : ProductService, private indexService:IndexService) { 
      console.log("Ddddd",this.productService.date);
    }

    timeLeft: number = 60;
    interval;

    ngOnInit() {
      
      setTimeout(() => {
        var currenttime = 0;
        this.interval = setInterval(() => {
          if(currenttime <= this.productService.raised*100/this.productService.budget){
            document.getElementById("progress").style.width=currenttime+"%";   
            currenttime= currenttime + 1;
          }else{
            clearInterval(this.interval);
          }     
        },50);

      }, 1500);

      this.calculateDiff();
    }

    Donate(){
      console.log("Donate");
    }

    diffDays:number;
    calculateDiff(){
      // var date1:any = new Date(this.productService.date_limite) ;
      // var date2:any = new Date(this.productService.date) ;
      //  Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
      // this.diffDays = (Date.UTC(this.productService.date_limite.getFullYear(), this.productService.date_limite.getMonth(), this.productService.date_limite.getDate()) - Date.UTC(this.productService.date.getFullYear(), this.productService.date.getMonth(), this.productService.date.getDate()) ) /(1000 * 60 * 60 * 24);
      console.log("Ddddd",this.productService.date_limite);
    }

}
