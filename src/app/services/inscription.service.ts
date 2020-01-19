import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  mainUrl:String = "http://192.168.1.70:8080/";

  constructor(private httpClient: HttpClient) { }

  inscription(formData: FormData):Observable<any>{
    const headers = new HttpHeaders({
     
      
  });
    return this.httpClient.post(this.mainUrl+"inscription",formData, { headers: headers });
  } 
}
