import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InscriptionComponent } from '../inscription/inscription.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  private formGroup: FormGroup;
 
  constructor(private formBuilder:FormBuilder, private dialog: MatDialog) { }
  

  ngOnInit() {
    this.ngForm();
  }
  ngForm(){
    this.formGroup = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });

  }
  onSubmit(){
    console.log(this.formGroup.value);
  }
  oncreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "100%";
    this.dialog.open(InscriptionComponent,dialogConfig);
    console.log("helooo");
  }

}
