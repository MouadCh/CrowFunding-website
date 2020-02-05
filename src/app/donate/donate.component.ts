import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  private checked: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  change(){
    
    console.log(this.checked);
  }

}
