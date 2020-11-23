import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { ProductHeaderComponent } from './product/product-header/product-header.component';

const routes: Routes = [

  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:IndexComponent},
  {path:"projet/:id",component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
