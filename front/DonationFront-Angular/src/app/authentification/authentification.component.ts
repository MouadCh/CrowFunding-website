import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InscriptionComponent } from '../inscription/inscription.component';
import { AuthService } from '../services/auth.service';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  private formGroup: FormGroup;
  private valide: boolean =false;
  constructor(private formBuilder:FormBuilder, private dialog: MatDialog,private authService: AuthService) { }
  

  ngOnInit() {
    this.ngForm();
  }
  ngForm(){
    this.formGroup = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  onSubmit(){
    this.authService.setUser(this.formGroup.value.userName, this.formGroup.value.password);
     this.authService.SeConnecter();
   
    
     setTimeout(()=>{
       console.log(this.formGroup.value);
     if(this.authService.isConnecte()){
      this.dialog.closeAll();
      this.valide = false;
     } else {
      this.valide = true;
     }
    },2000);
   
    
    
    
  }
  oncreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(InscriptionComponent,dialogConfig);
  }

}
