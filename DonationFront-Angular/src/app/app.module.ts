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
import { ProjetFormComponent } from './projet-form/projet-form.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { ProfilService } from './services/profil.service';
import { IndexService } from './services/index.service';
import { DatePipe } from '@angular/common';
import { ProjectFormComponent } from './project-form/project-form.component';
import {MatInputModule} from '@angular/material/input';
import { MostvisitedSliderComponent } from './mostvisited-slider/mostvisited-slider.component';
import { TypeSliderComponent } from './type-slider/type-slider.component';
//import {MatDialog,MatDialogConfig} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { DonateComponent } from './donate/donate.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
const appRoutes: Routes = [
  {path:'authentification',component: AuthentificationComponent},
  {path: 'inscription',component: InscriptionComponent},
  {path: '',component: AuthentificationComponent},
  {path: 'profil',component: MyProfilComponent},
  {path: 'addProject',component: ProjectFormComponent},
  {path: 'myProjects',component: MyProjectsComponent},
  {path: 'donate',component: DonateComponent}
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
    NewProjectSliderComponent,
    MostdonatedSliderComponent,
    AlmostSliderComponent,
    ProductComponent,
    ProductHeaderComponent,
    ProductContentComponent,
    ProductCompaignComponent,
    ProductReviewComponent,
    ProductFundersComponent,
    ProjetFormComponent,
    MyProjectsComponent,
    MyProfilComponent,
    ProjectFormComponent,
    MostvisitedSliderComponent,
    TypeSliderComponent,
    DonateComponent,
    
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
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    //MatDialog,
    //MatDialogConfig,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [InscriptionService, ProfilService,IndexService,DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [InscriptionComponent]
})
export class AppModule { }
