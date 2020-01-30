import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexService } from './index.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  mainUrl:String ;

  slidesType: any = [[]];
  cardsType = [];
  projetsType="All";

  constructor(private http: HttpClient , private indexService : IndexService) { 
    this.mainUrl = this.indexService.mainUrl;
  }

  getAllProjects():Observable<any>{
    return this.http.get(this.mainUrl+"projet");
  }

  getMostDonatedProjects(){
    return this.http.get(this.mainUrl+"projetMostDonated");
  }

  getAlmostTheGoalProjects(){
    return this.http.get(this.mainUrl+"projetAlmost");
  }

  getMostVisited(){
    return this.http.get(this.mainUrl+"projetMostVisited");
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



  
  getArtProjet(){
    console.log("Art");
    this.http.get(this.mainUrl+"Artprojet").subscribe( (data:any[]) =>{
      this.cardsType = data;
      this.slidesType = this.chunk(this.cardsType, 4);
      console.log(data);
    });
  }
  getEducationProjet(){
    this.http.get(this.mainUrl+"Educationprojet").subscribe( (data:any[]) =>{
      this.cardsType = data;
      this.slidesType = this.chunk(this.cardsType, 4);
    });
  }
  getScienceProjet(){
    this.http.get(this.mainUrl+"Scienceprojet").subscribe( (data:any[]) =>{
      this.cardsType = data;
      this.slidesType = this.chunk(this.cardsType, 4);
    });
  }
  getWaterProjet(){
    this.http.get(this.mainUrl+"Waterprojet").subscribe( (data:any[]) =>{
      this.cardsType = data;
      this.slidesType = this.chunk(this.cardsType, 4);
    });
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
}
