import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-mostvisited-slider',
  templateUrl: './mostvisited-slider.component.html',
  styleUrls: ['./mostvisited-slider.component.scss']
})
export class MostvisitedSliderComponent implements OnInit {

  // cards:any[];
  slides: any = [[]];
  cards = [];


  constructor(private indexService:IndexService, private projetService:ProjetService) { }

  ngOnInit() {
    this.projetService.getMostVisited().subscribe( (data:any[]) =>{
        this.cards = data;
        this.slides = this.chunk(this.cards, 4);
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
