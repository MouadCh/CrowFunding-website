import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { IndexService } from '../services/index.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { MyProfilComponent } from '../my-profil/my-profil.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',
    './navbar.css']
})


export class NavbarComponent implements OnInit {
  constructor(private navBarService: NavbarService, private indexService: IndexService,
    private router: Router, private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit() {
  }

  goHome() {
    // this.router.dispose();
    this.indexService.activePage = "home";
    this.indexService.activeProduct = "";
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

  }

}
