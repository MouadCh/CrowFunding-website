import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
import { ProjetService } from '../services/projet.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-almost-slider',
  templateUrl: './almost-slider.component.html',
  styleUrls: ['./almost-slider.component.scss']
})
export class AlmostSliderComponent implements OnInit {

  cards:any=[];
  slides: any = [[]];

  constructor(private indexService:IndexService, private projetService:ProjetService) { }

  ngOnInit() {
    this.projetService.getAlmostTheGoalProjects().subscribe( (data:any[])=>{
      this.cards=data;
      this.slides = this.chunk(this.cards, 4);
      console.log(data);

    });
  }

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  check(titre:String){
    console.log("Check");
    // titre.toLowerCase().includes(this.indexService.searchText); 
  }

}
