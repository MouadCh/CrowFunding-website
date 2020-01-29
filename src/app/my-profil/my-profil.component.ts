import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProfilService } from '../services/profil.service';
import { AuthService } from '../services/auth.service';
import { InscriptionService } from '../services/inscription.service';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss']
})
export class MyProfilComponent implements OnInit {

    private formGroup: FormGroup ;
  //  private filetoUpload: File = null;
     private userFile: any = File; 
    private imageUrl: string = "/assets/images/profil.jpg";
    private image:any;
    private userProfil = {
      id: '',
      nom: '',
      prenom: '',
      userName: '',
      email: '',
      password:''
  
    }
    private carte = {
      id: '',
      numeroCarte:'',
      dateExp:'',
      proprietaire:'',
  
    }
   /*  private user:any;
    private nom:string;
    private prenom:string;
    private userName:string;
    private email:string;
    private password:string;
    private id:string; */
    
  constructor(private formBuilder: FormBuilder,private profilService:ProfilService,
              private authService: AuthService, private datepipe: DatePipe) {}

  
  ngOnInit() {

    this.profilService.getImage(Number.parseInt(this.authService.user.id)).subscribe((res)=>{
      this.image = res;
      this.imageUrl = this.image;
      console.log(this.imageUrl);
    });
    this.profilService.getCarte(this.authService.user.idCart).subscribe((res)=>{
      console.log(res);
      this.carte.numeroCarte = res['numeroCarte'];
      this.carte.dateExp = this.datepipe.transform(res['dateExp'], 'yyyy-MM-dd');
      this.carte.proprietaire = res['proprietaire'];
      console.log("getCarte");
    });
    
    this.ngForm();

  }

  ngForm() {
    this.formGroup = this.formBuilder.group({
    
      nom: [this.authService.user.nom, Validators.required],
      prenom: [this.authService.user.prenom, Validators.required],
      userName: [this.authService.user.userName, Validators.required],
      email: new FormControl(this.authService.user.email, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: [this.authService.user.password, Validators.compose([Validators.required, Validators.minLength(8)])],
   
      numeroCarte: ['', Validators.required],
      dateExp: ['', Validators.required],
      proprietaire: ['', Validators.required]
    });
    console.log("ngForm");
    console.log("*****"+this.carte.numeroCarte);
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
   modifier(){
    console.log(this.formGroup.value);
    this.authService.user.userName = this.formGroup.value.userName;
    this.authService.user.password = this.formGroup.value.password;
    this.authService.user.nom = this.formGroup.value.nom;
    this.authService.user.prenom = this.formGroup.value.prenom;
    this.authService.user.email = this.formGroup.value.email;

    this.userProfil.nom = this.formGroup.value.nom;
    this.userProfil.prenom = this.formGroup.value.prenom;
    this.userProfil.userName = this.formGroup.value.userName;
    this.userProfil.email = this.formGroup.value.email;
    this.userProfil.password = this.formGroup.value.password;
    this.userProfil.id = this.authService.user.id;

    this.carte.id = this.authService.user.idCart;
    /* this.carte.dateExp = this.formGroup.value.dateExp;
    this.carte.numeroCarte = this.formGroup.value.numeroCarte;
    this.carte.proprietaire = this.formGroup.value.proprietaire; */

   // const user = this.formGroup.value;
    const formData = new FormData();
    formData.append('user',JSON.stringify(this.userProfil));
    formData.append('file',this.userFile);
    formData.append('carte',JSON.stringify(this.carte));
    console.log("**************************************");
    this.profilService.modifier(formData);
    console.log("**************************************");
    
    console.log("carte : "+this.carte);
    console.log("carte : "+this.userProfil);
    
  } 


}
