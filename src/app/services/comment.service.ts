import { Injectable } from '@angular/core';
import { IndexService } from './index.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  mainUrl: String;


  constructor(private indexService : IndexService) { 
    this.mainUrl = this.indexService.mainUrl;
  }
}
