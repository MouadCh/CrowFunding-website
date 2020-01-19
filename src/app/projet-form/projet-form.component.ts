import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projet-form',
  templateUrl: './projet-form.component.html',
  styleUrls: ['./projet-form.component.scss']
})
export class ProjetFormComponent implements OnInit {

  private userFile: any = File;
  private imageUrl: string = "/assets/images/profil.jpg";
  private formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ngForm();
  }
  ngForm(){
    this.formGroup = this.formBuilder.group({
      titre: ['',Validators.required],
      description: ['',Validators.required],
      story: ['',Validators.required],
      budget: ['',Validators.required],
      rib: ['',Validators.required],
      dateLimite: ['',Validators.required]
    })
  }
  addProject(){
    console.log(this.formGroup.value);
  }

  onImageSelected(event){
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
   
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    
   
  }


}
