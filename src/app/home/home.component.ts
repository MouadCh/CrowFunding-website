import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor(private projetService:ProjetService) { }

  ngOnInit() {
  }

}