import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-type-slider',
  templateUrl: './type-slider.component.html',
  styleUrls: ['./type-slider.component.scss']
})
export class TypeSliderComponent implements OnInit {

  // cards:any[];
  slides: any = [[]];
  cards = [];


  constructor(private indexService:IndexService, private projetService:ProjetService) { }

  ngOnInit() {
  }
}
