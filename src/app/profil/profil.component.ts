import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  private filetoUpload: File = null;
  private formGroup:FormGroup;
  constructor(private formBuilder:FormBuilder) { }
  private imageUrl: string = "/assets/images/profil.jpg";
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


  onSubmit(){
    console.log(this.formGroup.value);
    console.log("imageUrl :"+this.imageUrl);
    console.log("filetoUpload :"+this.filetoUpload.name);
  }

  onImageSelected(file: FileList){
    this.filetoUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
 
  }

 

}
