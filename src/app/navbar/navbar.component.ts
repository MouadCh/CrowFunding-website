import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { IndexService } from '../services/index.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
               './navbar.css']
})


export class NavbarComponent implements OnInit {
  constructor(private navBarService:NavbarService, private indexService:IndexService,
     private router:Router, private dialog: MatDialog) {
   }

  ngOnInit() {
  }

  goHome(){
    // this.router.dispose();
    this.indexService.activePage="home";
    this.indexService.activeProduct="";
  }

  auth() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    this.dialog.open(AuthentificationComponent, dialogConfig);
  }
  inscrire(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "100%";
    this.dialog.open(InscriptionComponent,dialogConfig);
    console.log("helooo");
  }
  
}
