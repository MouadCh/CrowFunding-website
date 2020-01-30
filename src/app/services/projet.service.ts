import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addProject(formData: FormData):Observable<any>{
    const headers = new HttpHeaders({

       });
    return this.http.post(this.mainUrl+"projet",formData, { headers: headers });
  } 

  userProjects(id: string):Observable<any>{
    return this.http.get(this.mainUrl+"userProjects?id="+id);
  }
  deleteProject(id: string){
    this.http.delete(this.mainUrl+"projet?id="+id).subscribe((res)=>{
      console.log(res);
    });
  }

}
