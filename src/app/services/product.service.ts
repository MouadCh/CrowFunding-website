import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { IndexService } from './index.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  mainUrl:String = "http://192.168.1.70:8080/";

  currentProjetId:number;
  titre:String;
  story:String="potluck is the first in a series of cookbooks called off menu comprised of personal recipes, photos, and narratives from amwa.with potluck, amwa hopes to preserve recipes built on a seed of memory, recipes made to close the gap between homes, and recipes born from the challenge to figure out a way to provide more with less. we celebrate the culinary ingenuity of our families, both the caretakers who substitute standard ingredients with ones considered out-of-place, as well as those who trek across city lines to find imports at specialty stores. for potluck, in particular, we’ve included recipes that you can't possibly learn to make without the guidance of others, recipes that yield too much to be eaten by just one person, recipes that become flavored by the touch of skilled, loving hands. rather than participating in a debate about a recipe's cultural authenticity or pretending to wrestle with the tragedy of longing to belong, we are offering the off menu series as a form of communal memory-making.brought to you with love from seo yun son, sara chao, sarah waldorf, michelle cho, and the amwa community. recipes by amrit and narinder kaur, angela lin, chisa hughes, elena yu, ellie lee, jing niu, sai tripathi, mitsuko brooks, samantha ayson, sarah waldorf, seo yun son, and yunyi li.";
  // sous_titre:String="this is a bid to connect to our roots—diaspora dreaming through a warm meal and a reclaiming of our stories past, present, and future";
  description:String;
  
  images:String[]=[
                "https://ksr-ugc.imgix.net/assets/027/454/076/1ae084c5767533596a0256106d8606ce_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1575850721&auto=format&gif-q=50&q=92&s=72bd7d50714612308ce1d1b8d349f423",
                "https://ksr-ugc.imgix.net/assets/027/454/120/06713a416a02ab83c33ceb23ca6600e1_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1575851141&auto=format&gif-q=50&q=92&s=7b2fb9ecbaffea1c18ee68ae3f94136d",
                "https://ksr-ugc.imgix.net/assets/027/454/021/59cd2517f841bb36875b452499da0650_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1575849741&auto=format&gif-q=50&q=92&s=19826dcd17b916997bb0f51ab5a76a72"
              ];
              
  compaignImages:String[]=[
                "https://ksr-ugc.imgix.net/assets/027/532/694/4a3ac747326e0699ce4bfd29d074f629_original.gif?ixlib=rb-2.1.0&w=680&fit=max&v=1576621926&auto=format&gif-q=50&q=92&s=a244283e1387f5e2ea93569978891b3c",
                "https://ksr-ugc.imgix.net/assets/027/503/632/c1d82b926646ea609ebfc51d15bdd13b_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1576306917&auto=format&gif-q=50&q=92&s=85585d31b6c83778db133b1e9ab621d3",
                "https://ksr-ugc.imgix.net/assets/027/532/581/d060a52bdec729b8839d05c71110b34f_original.gif?ixlib=rb-2.1.0&w=680&fit=max&v=1576621125&auto=format&gif-q=50&q=92&s=99c6cc009f7f91f0613ab635d5972edf",
                "https://ksr-ugc.imgix.net/assets/027/557/596/2cb36a68c02ccc569925882f6a9f596f_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1576873947&auto=format&gif-q=50&q=92&s=0b0c63e5471d88fcca85863c42086247"
              ];


  budget:number;
  raised:number;

  visitorsNb:number;
  fundersNb:number;

  date:Date;
  date_limite:Date;

  comments:any[]=[
                {
                  comment:"KHAAADAMAAAA mnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?",
                  date:"05/11/2018",
                  user: {
                        username:"Mouad",
                        image:"https://lh3.googleusercontent.com/-zn5UCGgmIeA/AAAAAAAAAAI/AAAAAAAAAAA/4b1SUl-mHI0/s128-c-k/photo.jpg"  
                      }       
                },
                {
                  comment:"Ok Great :) ",
                  date:"10/07/2019",
                  user: {
                        username:"Lmekkaoui",
                        image:"http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg"  
                      }               
                }
            ];

  constructor(private indexService:IndexService, private http: HttpClient, private router:Router) { 
  }

  getProductId(id){
    this.currentProjetId = id;
    this.http.get(this.mainUrl+"projetbyid?id="+id).subscribe((data:any)=>{
      if(data != null){
        console.log(data);
        this.titre = data.titre;
        this.description = data.description;
        this.date = data.dateCreation;
        this.date_limite = data.dateLimite;
        this.story = data.story;
        this.fundersNb = data.fundersNmb;
        this.visitorsNb = data.nbrVues;
        this.raised = data.total;
        this.budget = data.budget;
      }else{
        this.router.navigateByUrl("");
      }
    });
  }

}
