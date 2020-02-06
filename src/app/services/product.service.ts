import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { IndexService } from './index.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommentService } from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  mainUrl:String ;

  currentProjetId:number;
  titre:String;
  story:String="potluck is the first in a series of cookbooks called off menu comprised of personal recipes, photos, and narratives from amwa.with potluck, amwa hopes to preserve recipes built on a seed of memory, recipes made to close the gap between homes, and recipes born from the challenge to figure out a way to provide more with less. we celebrate the culinary ingenuity of our families, both the caretakers who substitute standard ingredients with ones considered out-of-place, as well as those who trek across city lines to find imports at specialty stores. for potluck, in particular, we’ve included recipes that you can't possibly learn to make without the guidance of others, recipes that yield too much to be eaten by just one person, recipes that become flavored by the touch of skilled, loving hands. rather than participating in a debate about a recipe's cultural authenticity or pretending to wrestle with the tragedy of longing to belong, we are offering the off menu series as a form of communal memory-making.brought to you with love from seo yun son, sara chao, sarah waldorf, michelle cho, and the amwa community. recipes by amrit and narinder kaur, angela lin, chisa hughes, elena yu, ellie lee, jing niu, sai tripathi, mitsuko brooks, samantha ayson, sarah waldorf, seo yun son, and yunyi li.";
  // sous_titre:String="this is a bid to connect to our roots—diaspora dreaming through a warm meal and a reclaiming of our stories past, present, and future";
  description:String;
  
  images:String[]=[];
              
  compaignImages:String[]=[];


  budget:number;
  raised:number;

  visitorsNb:number;
  fundersNb:number;

  date:Date;
  date_limite:Date;

  date_diff:number;

  constructor(private indexService:IndexService, private http: HttpClient, private router:Router,
                    private commentService : CommentService) { 
    this.mainUrl = this.indexService.mainUrl;
  }

  getProductId(id){
    this.currentProjetId = id;
    this.http.get(this.mainUrl+"projetbyid?id="+id).subscribe((data:any)=>{
      if(data != null){
        // console.log(data);
        this.titre = data.titre;
        this.description = data.description;
        this.date = data.dateCreation;
        this.date_limite = data.dateLimite;
        this.story = data.story;
        this.fundersNb = data.fundersNmb;
        this.visitorsNb = data.nbrVues;
        this.raised = data.total;
        this.budget = data.budget;

        //Diff Between les date en jours
        let date1 = new Date(this.date_limite)  ;
        var date2 = new Date( this.date );
        
        this.date_diff = ( date1.getTime() - date2.getTime() ) / (1000 * 3600 * 24);
        console.log("Diff "+this.date_diff)
        
        //To Get All comments associated
        this.commentService.getAllComments(id);
        //To Associate each pict with a comment
        this.commentService.GetCommentsImages(id);
        
      }else{
        this.router.navigateByUrl("");
      }
    }, err=>{
      this.router.navigateByUrl("Home");
    });
  }

  GetProductImages(id){
    this.http.get(this.mainUrl+"detail?id="+id).subscribe( (data : String[])=>{

      //Remplir les images du header
      for (let i = 0; i < 3; i++) {
        this.images.push(data[i]);      
      }

      for (let j = 0; j < data.length; j++) {
        this.compaignImages.push(data[j]);
        
      }

    });
  }

  AddViewsToPtojet(id){

    const  params = new  HttpParams().set('str', id+"")

    this.http.get(this.mainUrl+"projetAddView",{params}).subscribe(data =>{
      console.log("Done +1");
    });
  }



  timeLeft: number = 60;
  interval;

  //ProgressBar
  ProgressAutoFill(){
    setTimeout(() => {
      var currenttime = 0;
      this.interval = setInterval(() => {
        if(currenttime <= this.raised*100/this.budget){
          document.getElementById("progress").style.width=currenttime+"%";   
          currenttime= currenttime + 1;
        }else if(this.raised >= this.budget){
          document.getElementById("progress").style.backgroundColor="#dcfb7c";   
          // currenttime= currenttime + 1;
        }else{
          clearInterval(this.interval);
        }     
      },50);

    }, 1500);
  }

}
