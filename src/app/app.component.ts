import { Component } from '@angular/core';
import { NavbarService } from './service/navbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProjectFormComponent } from './project-form/project-form.component';
import { AuthService } from './services/auth.service';
import { AuthentificationComponent } from './authentification/authentification.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'donationFront';

  constructor(private dialog: MatDialog, private authService: AuthService){}

  addProject(){
    if (this.authService.isConnecte()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(ProjectFormComponent,dialogConfig);
    } else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(AuthentificationComponent, dialogConfig);
    }
   

  }

}
