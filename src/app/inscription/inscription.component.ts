import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  private formGroup: FormGroup;
  private userFile: any = File;
  private imageUrl: string = "/assets/images/profil.jpg";
  private userInsc = {
    nom: '',
    prenom: '',
    userName: '',
    email: '',
    password:''

  }
  private carte = {
    numeroCarte:'',
    dateExp:'',
    proprietaire:'',

  }

  constructor(private formBuilder: FormBuilder, private inscriptionService: InscriptionService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.ngForm();
  }

  ngForm() {
    this.formGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      userName: ['', Validators.required],
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
 
      numeroCarte: ['', Validators.required],
      dateExp: ['', Validators.required],
      proprietaire: ['', Validators.required],
    });

  }


  onImageSelected(event){
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(file);
  }
 
   inscrire(){
     this.userInsc.nom = this.formGroup.value.nom;
     this.userInsc.prenom = this.formGroup.value.prenom;
     this.userInsc.userName = this.formGroup.value.userName;
     this.userInsc.email = this.formGroup.value.email;
     this.userInsc.password = this.formGroup.value.password;

     this.carte.dateExp = this.formGroup.value.dateExp;
     this.carte.numeroCarte = this.formGroup.value.numeroCarte;
     this.carte.proprietaire = this.formGroup.value.proprietaire;
   

    //const user = this.formGroup.value;
    const formData = new FormData();
    formData.append('user',JSON.stringify(this.userInsc));
    formData.append('carte',JSON.stringify(this.carte));
    formData.append('file',this.userFile);
    
    this.inscriptionService.inscription(formData).subscribe((res)=>{
      console.log(res);
    });
    this.dialog.closeAll();
  } 


 


 

}
