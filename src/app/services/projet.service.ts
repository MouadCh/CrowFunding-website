import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  mainUrl:String = "http://192.168.1.142:8080/";

  constructor(private http: HttpClient) { }

  getAllProjects():Observable<any>{
    return this.http.get(this.mainUrl+"projet");
  }

  getMostDonatedProjects(){
    return this.http.get(this.mainUrl+"projetMostVisited");
  }

  getAlmostTheGoalProjects(){
    return this.http.get(this.mainUrl+"projetAlmost");
  }

}
