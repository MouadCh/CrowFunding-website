import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  private filetoUpload: File = null;
  private imageUrl: string = "/assets/images/profil.jpg";
  private formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ngForm();
  }

  ngForm(){
    this.formGroup = this.formBuilder.group({
      name: ['',Validators.required],
      lname: ['',Validators.required],
      email:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    });

  }


  onImageSelected(file: FileList){
    this.filetoUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
    
  }

  onSubmit(){
    console.log(this.formGroup.value);
    console.log("imageUrl :"+this.imageUrl);
    console.log("filetoUpload :"+this.filetoUpload.name);
  }

}
