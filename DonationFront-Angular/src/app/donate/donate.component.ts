import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DonateService } from '../services/donate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  private formGroup: FormGroup;
  private projectId:number;

  private checked: boolean = true;
  constructor(private formBuilder:FormBuilder,  private donateService : DonateService
              ,private router : Router) { }

  ngOnInit() {

    var txt = this.router.url;
    this.projectId =  parseInt(txt.match(/\d+/g)+"");

    this.ngForm();
  }
  ngForm(){
    this.formGroup = this.formBuilder.group({
      montant: ['',Validators.required]
    });
  }

  change(){
    
    console.log(this.checked);
  }

  donate(){
        this.donateService.donateToProject(this.projectId,this.formGroup.value.montant);
  }

}
