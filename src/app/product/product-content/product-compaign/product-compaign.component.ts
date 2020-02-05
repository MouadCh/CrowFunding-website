import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DonateComponent } from 'src/app/donate/donate.component';
import { AuthentificationComponent } from 'src/app/authentification/authentification.component';

@Component({
  selector: 'app-product-compaign',
  templateUrl: './product-compaign.component.html',
  styleUrls: ['./product-compaign.component.scss'   ,'./product-compaign.css']
})
export class ProductCompaignComponent implements OnInit {

  constructor(private productService:ProductService, private authService: AuthService, private dialog: MatDialog ) { }

  ngOnInit() {
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

}
