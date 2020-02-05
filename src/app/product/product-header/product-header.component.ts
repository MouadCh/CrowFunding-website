import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IndexService } from 'src/app/services/index.service';
import { animate } from '@angular/animations';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DonateComponent } from 'src/app/donate/donate.component';
import { AuthentificationComponent } from 'src/app/authentification/authentification.component';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'  , './product-header.css' , './product-header-fonts.css']
})
export class ProductHeaderComponent implements OnInit {

    constructor(private productService : ProductService, private indexService:IndexService, 
      private authService: AuthService, private dialog: MatDialog) { 
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
      if (this.authService.isConnecte()) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.dialog.open(DonateComponent, dialogConfig);
      } else {
        this.auth();
      }
      
    }
    auth() {

      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(AuthentificationComponent, dialogConfig);
  
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
