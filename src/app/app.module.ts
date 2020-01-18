import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule,MatSelectModule} from '@angular/material';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { Routes, RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfilComponent } from './profil/profil.component';
import { NewProjectSliderComponent } from './new-project-slider/new-project-slider.component';
import { MostdonatedSliderComponent } from './mostdonated-slider/mostdonated-slider.component';
import { AlmostSliderComponent } from './almost-slider/almost-slider.component';
import { ProductComponent } from './product/product.component';
import { ProductHeaderComponent } from './product/product-header/product-header.component';
import { ProductContentComponent } from './product/product-content/product-content.component';
import { ProductCompaignComponent } from './product/product-content/product-compaign/product-compaign.component';
import { ProductReviewComponent } from './product/product-content/product-review/product-review.component';
import { ProductFundersComponent } from './product/product-content/product-funders/product-funders.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionService } from './services/inscription.service';

//import {MatDialog,MatDialogConfig} from '@angular/material';

const appRoutes: Routes = [
  {path:'authentification',component: AuthentificationComponent},
  {path: 'inscription',component: InscriptionComponent},
  {path: '',component: AuthentificationComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    HomeComponent,
    NavbarComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent,
    ProfilComponent,
    NewProjectSliderComponent,
    MostdonatedSliderComponent,
    AlmostSliderComponent,
    ProductComponent,
    ProductHeaderComponent,
    ProductContentComponent,
    ProductCompaignComponent,
    ProductReviewComponent,
    ProductFundersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    //MatDialog,
    //MatDialogConfig,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [InscriptionService],
  bootstrap: [AppComponent],
  entryComponents: [InscriptionComponent]
})
export class AppModule { }
