import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProjetService } from '../services/projet.service';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { setTimeout } from 'timers';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MyProjectsComponent implements OnInit {
  dataSource : PeriodicElement[] =[]; 
  obs: Observable<any>;
  tmp: PeriodicElement[] =[];
    columnsNames = ['Title', 'Creation Date', 'Goal budget', 'Total', 'Funders numbers','Delete']; 
    columnsToDisplay = ['titre','dateCreation', 'budget', 'total', 'fundersNmb','Delete']; 

  expandedElement: PeriodicElement | null;
  constructor(private projetService: ProjetService, private authService: AuthService, private datepipe: DatePipe) { }

  ngOnInit() {

    this.obs = this.projetService.userProjects(this.authService.user.id);
    this.obs.subscribe((res)=>{
     console.log(res);
     
     
          for (let i = 0; i < res.length; i++) {
            this.tmp.push(res[i]);
            this.tmp[i].dateCreation = this.datepipe.transform(this.tmp[i].dateCreation, 'yyyy-MM-dd');
           
            console.log("****"+ this.tmp[i].titre);
      }   
    
    }); 

     setTimeout(() => {
           this.dataSource = this.tmp; 
   }, 1000);  
  }

  delete(id: string){
    console.log("id"+id);
    this.projetService.deleteProject(id);
  }

}

  export interface PeriodicElement {
  id:number;
  titre: string;
  description: string;
  dateCreation: string;
  dateLimite: string;
  budget: number;
  rib: string;
  story: string;
  fundersNmb: number;
  nbrVues: number;
  total: number;
} 
 



 