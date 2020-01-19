import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder,) { }

  
  ngOnInit() {
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
   /*  this.filetoUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
    this.userFile = this.filetoUpload;
    console.log(this.filetoUpload); */
  }
  inscrire(){
   
  }

}
