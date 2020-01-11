import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IndexService } from 'src/app/services/index.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'  , './product-header.css' , './product-header-fonts.css']
})
export class ProductHeaderComponent implements OnInit {

    // titre:String="amwa cookbook 01: potluck";
    // // sous_titre:String="this is a bid to connect to our roots—diaspora dreaming through a warm meal and a reclaiming of our stories past, present, and future";
    // description:String="  brought to you with love from seo yun son, sara chao, sarah waldorf, michelle cho, and the amwa community. recipes by amrit and narinder kaur, angela lin, chisa hughes, elena yu, ellie lee, jing niu, sai tripathi, mitsuko brooks, samantha ayson, sarah waldorf, seo yun son, and yunyi li.  ";
    // image:String="https://ksr-ugc.imgix.net/assets/027/454/076/1ae084c5767533596a0256106d8606ce_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1575850721&auto=format&gif-q=50&q=92&s=72bd7d50714612308ce1d1b8d349f423";
    
    // budget:number=10000;
    // raised:number=1640;

    // date:String="21/04/2019";
    // date_limite:number=16;

    constructor(private productService : ProductService, private indexService:IndexService) { }

    ngOnInit() {
        this.productService.titre=this.indexService.activeProduct;
        document.getElementById("progress").style.width=this.productService.raised*100/this.productService.budget+"%";
    }

    Donate(){
      console.log("Donate");
    }

}
