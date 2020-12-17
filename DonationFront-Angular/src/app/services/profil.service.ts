import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexService } from './index.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  mainUrl:String ;

  constructor(private httpClient: HttpClient, private indexService : IndexService, private authService: AuthService) {
    this.mainUrl = this.indexService.mainUrl;
   }

  getImage(id:number):Observable<any>{
    return this.httpClient.get(this.mainUrl+"userImage?id="+id,{responseType: 'text'});
  }
  getUser(id:number):Observable<any>{
    return this.httpClient.get(this.mainUrl+"user?id="+id);

  }
  
  modifier(formData: FormData){
    console.log("aaaaa");
    const headers = new HttpHeaders({

       });
    this.httpClient.put(this.mainUrl+"modifierProfile",formData, { headers: headers }).subscribe((res)=>{
      console.log(res);
    });
    console.log("bbbbb");
  } 

  getCarte(idCarte: string):Observable<any>{
    
    /* let str: string = this.authService.jwt; */
    let str: string = sessionStorage.getItem('jwt');
    let head: string = 'Bearer '+str
    console.log(head);
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+str

    });
    
    return this.httpClient.get(this.mainUrl+"carteById?id="+idCarte,{headers: headers});
  
  }



}
