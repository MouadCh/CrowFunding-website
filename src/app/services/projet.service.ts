import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexService } from './index.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  mainUrl:String ;

  constructor(private http: HttpClient , private indexService : IndexService) { 
    this.mainUrl = this.indexService.mainUrl;
  }

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
