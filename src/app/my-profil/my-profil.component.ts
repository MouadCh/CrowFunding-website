import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProfilService } from '../services/profil.service';
import { AuthService } from '../services/auth.service';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss']
})
export class MyProfilComponent implements OnInit {

    private formGroup: FormGroup;
  //  private filetoUpload: File = null;
     private userFile: any = File; 
    private imageUrl: string = "/assets/images/profil.jpg";
    private image:any;
   /*  private user:any;
    private nom:string;
    private prenom:string;
    private userName:string;
    private email:string;
    private password:string;
    private id:string; */
    
  constructor(private formBuilder: FormBuilder,private profilService:ProfilService,
              private authService: AuthService,private inscriptionService:InscriptionService) { }

  
  ngOnInit() {
   
/*     this.profilService.getUser(5).subscribe((res)=>{
      this.user = res;
      this.nom = this.user['nom'];
      this.prenom = this.user['prenom'];
      this.userName = this.user['userName'];
      this.email = this.user['email'];
      this.password = this.user['password'];
      console.log(this.user);

    }); */
    
    this.profilService.getImage(Number.parseInt(this.authService.user.id)).subscribe((res)=>{
      this.image = res;
      this.imageUrl = this.image;
      console.log(this.imageUrl);
    });
    this.ngForm();

  }

  ngForm() {
    this.formGroup = this.formBuilder.group({
      nom: [this.authService.user.nom, Validators.required],
      prenom: [this.authService.user.prenom, Validators.required],
      userName: [this.authService.user.userName, Validators.required],

      email: new FormControl(this.authService.user.email, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: [this.authService.user.password, Validators.compose([Validators.required, Validators.minLength(8)])]
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
   modifier(){
    console.log(this.formGroup.value);
    this.authService.user.userName = this.formGroup.value.userName;
    this.authService.user.password = this.formGroup.value.password;
    this.authService.user.nom = this.formGroup.value.nom;
    this.authService.user.prenom = this.formGroup.value.prenom;
    this.authService.user.email = this.formGroup.value.email;

    const user = this.formGroup.value;
    const formData = new FormData();
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile);
    formData.append('id',this.authService.user.id);
    console.log("**************************************");
    this.inscriptionService.modifier(formData);
    console.log("**************************************");
    
   
  } 


}
