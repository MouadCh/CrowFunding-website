import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProfilService } from '../services/profil.service';
import { AuthService } from '../services/auth.service';

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
              private authService: AuthService) { }

  
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
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      userName: ['', Validators.required],

      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
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

  /* const user = this.formGroup.value;
    const formData = new FormData();
    formData.append('user',JSON.stringify(user));
    formData.append('file',this.userFile);
    formData.append('id',this.id);
    this.profilService.modifierProfile(formData).subscribe((res)=>{
      console.log(res);
    });*/
   
  } 


}
