import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  private formGroup: FormGroup;
  private filetoUpload: File = null;
  private userFile: any = File;
  private imageUrl: string = "/assets/images/profil.jpg";

  constructor(private formBuilder: FormBuilder, private inscriptionService: InscriptionService) { }

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


  onImageSelected(file: FileList){

    this.filetoUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
    this.userFile = this.filetoUpload;
    console.log(this.filetoUpload);
  }

  onSubmit() {
    console.log(this.formGroup.value);
    var user =this.formGroup.value;
    console.log("imageUrl :" + this.imageUrl);
    console.log("filetoUpload :" + this.filetoUpload.name);
    var formData = new FormData();
    formData.append('file', this.userFile);
    formData.append('user', JSON.stringify(this.formGroup.value)); 
    this.inscriptionService.inscription(formData).subscribe((res) => {
      console.log(res);
    });

   


  }

}
