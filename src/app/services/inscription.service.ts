import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IndexService } from './index.service';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  mainUrl:String;

  constructor(private httpClient: HttpClient, private indexService : IndexService) {
    this.mainUrl = this.indexService.mainUrl;
   }

  inscription(formData: FormData):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  });
    return this.httpClient.post(this.mainUrl+"inscription",formData, { headers: headers });
  } 
}
