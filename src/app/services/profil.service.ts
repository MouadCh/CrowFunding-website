import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndexService } from './index.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  mainUrl:String ;

  constructor(private httpClient: HttpClient, private indexService : IndexService) {
    this.mainUrl = this.indexService.mainUrl;
   }

  getImage(id:number):Observable<any>{
    return this.httpClient.get(this.mainUrl+"userImage?id="+id,{responseType: 'text'});
  }
  getUser(id:number):Observable<any>{
    return this.httpClient.get(this.mainUrl+"user?id="+id);

  }
  modifierProfile(formData: FormData):Observable<any>{
    const headers = new HttpHeaders({

       });
    return this.httpClient.put(this.mainUrl+"modifierProfile",formData, { headers: headers });
  } 



}
