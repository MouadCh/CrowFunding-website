import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjetService } from '../services/projet.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  private formGroup: FormGroup;
  private files: any = FileList ;

  toppings = new FormControl();

  toppingList: string[] = ['art', 'science', 'education', 'water'];
  constructor(private formBuilder: FormBuilder,private projectService: ProjetService,
              private authService: AuthService) { }

  ngOnInit() {
    this.ngForm();
  }
  ngForm(){
    this.formGroup = this.formBuilder.group({
      titre:['',Validators.required],
      story:['',Validators.required],
      description:['',Validators.required],
      dateLimite:['',Validators.required],
      rib:['',Validators.required],
      budget:['',Validators.required],
      
    });
  }

  onImageSelected(event){
    const file = event.target.files;
    //console.log(file);
    this.files = file;
    /* console.log(this.files); */
    /* var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(file); */
  }
  addProject(){
    let i =0;
let concatenation: string = '';
  while(this.toppings.value[i] != null){
    if(concatenation == ''){
      concatenation = this.toppings.value[0];
      i++;
    } else {
      concatenation = concatenation+" "+this.toppings.value[i];
      i++;
    }
   
  }
  console.log(concatenation);
  const project = this.formGroup.value;
  const formData = new FormData();
  //console.log(this.files);
  for (let index = 0; index < this.files.length; index++) {
    formData.append('files',this.files[index]);
    
  }
  console.log(formData.getAll('files'));
  formData.append('projet',JSON.stringify(project));
  formData.append('tags',concatenation);
  formData.append('id',this.authService.user.id);
  this.projectService.addProject(formData).subscribe((res)=>{
    console.log(res);
  }); 

  }

}
