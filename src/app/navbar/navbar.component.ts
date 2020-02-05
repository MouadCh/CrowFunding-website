import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { IndexService } from '../services/index.service';
import { Router, Scroll } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { MyProfilComponent } from '../my-profil/my-profil.component';
import { AuthService } from '../services/auth.service';
import { ProjetService } from '../services/projet.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
    './navbar.css']
})


export class NavbarComponent implements OnInit {


  constructor(private navBarService: NavbarService, private indexService: IndexService,
    private router: Router, private dialog: MatDialog, private authService: AuthService, private projetService : ProjetService) {
  }

  ngOnInit() {
  }
  auth() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AuthentificationComponent, dialogConfig);

  }

  profil() {
    if (this.authService.isConnecte()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      dialogConfig.height = "100%";
      this.dialog.open(MyProfilComponent, dialogConfig);
    } else {
      this.auth();
    }


  }
  logOut() {
    this.authService.reset();
    window.location.href = "http://localhost:4200/Home";

  }
  myprojects(){
    
    if (this.authService.isConnecte()) {
      console.log(this.authService.isConnecte());
    this.router.navigate(['myProjects']);
    } else {
      this.auth();
    }
  }
 
  
  Contact(){
    console.log("Cntct");
  }


  All(){
    this.projetService.projetsType = "All" ;
  }
  Education(){
    window.scroll(0,1100);

    this.projetService.projetsType = "Education" ;
    this.projetService.getEducationProjet();
  }
  Science(){
    window.scroll(0,1100);

    this.projetService.projetsType = "Science" ;
    this.projetService.getScienceProjet();
  }
  Water(){
    window.scroll(0,1100);

    this.projetService.projetsType = "Water" ;
    this.projetService.getWaterProjet();
  }
  Art(){
    window.scroll(0,1100);

    this.projetService.projetsType = "Art" ;
    this.projetService.getArtProjet();
  }

}
