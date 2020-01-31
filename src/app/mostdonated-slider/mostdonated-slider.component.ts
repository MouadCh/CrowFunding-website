import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
import { ProjetService } from '../services/projet.service';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-mostdonated-slider',
  templateUrl: './mostdonated-slider.component.html',
  styleUrls: ['./mostdonated-slider.component.scss']
})
export class MostdonatedSliderComponent implements OnInit {

  // cards:any[];
  slides: any = [[]];
  cards = [];

  constructor(private indexService:IndexService, private projetService:ProjetService) { }

  ngOnInit() {
    this.projetService.getMostDonatedProjects().subscribe( (data:any[]) =>{
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
