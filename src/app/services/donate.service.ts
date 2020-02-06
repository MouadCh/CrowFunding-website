import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexService } from './index.service';
import { ProjetService } from './projet.service';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  constructor(private http : HttpClient, private indexService:IndexService
                  ,private productService : ProductService, private dialog: MatDialog) { }

  donateToProject(id,montant){

    let headers = {
        "authorization" : "Bearer "+sessionStorage.getItem("jwt")
    }

    let data = {
        "montant" : montant,
        "projet" : {"id" : id}
    }

    this.http.post(this.indexService.mainUrl+"donation",data, {headers}).subscribe( obj =>{
        console.log("Added "+data.montant+" to project "+data.projet.id);
        //Get product(id) from BDD 
        this.productService.getProductId(id);    
        this.productService.ProgressAutoFill();
        this.dialog.closeAll();
    });
  }

}
