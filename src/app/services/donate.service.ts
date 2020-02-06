import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexService } from './index.service';
import { ProjetService } from './projet.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  constructor(private http : HttpClient, private indexService:IndexService
                  ,private productService : ProductService) { }

  donateToProject(id,montant){

    let headers = {
        "authorization" : "Bearer "+sessionStorage.getItem("jwt")
    }

    let data = {
        "montant" : montant,
        "projet" : {"id_projet" : id}
    }

    this.http.post(this.indexService.mainUrl+"donation",data, {headers}).subscribe( obj =>{
        console.log("Added "+data.montant+" to project "+data.projet.id_projet);
        //Get product(id) from BDD 
        this.productService.getProductId(id);    
    });
  }

}
