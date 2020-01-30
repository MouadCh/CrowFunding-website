import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { IndexService } from '../services/index.service';

  // declare const scrollFooter:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'  , './index.css']
})
export class IndexComponent implements OnInit {

  constructor(private navBarService :NavbarService, private indexService:IndexService) { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true); //third parameter
  }

  scrollEvent = (event): void => {
    // console.log(window.scrollY);
    var scroll = window.scrollY;
			if (scroll >= 550) 
        this.navBarService.className="scroll-on";
      else
        this.navBarService.className="start-style";
    }
};


