
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewpropertyComponent } from './viewproperty/viewproperty.component'
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'; 

import {Routes, RouterModule, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


import {ReactiveFormsModule} from '@angular/forms';
import { RgservletService } from './rgservlet.service';




const real : Routes =[


                          {path :'home' , component :HomeComponent , children:[{path : 'view' , component:ViewpropertyComponent }] },
                          {path:'viewpera/:view', component:ViewpropertyComponent},
                          {path :'about' , component :AboutusComponent},
                          {path :'contact' , component :ContactComponent},
                          {path :'project' , component :ProjectsComponent}, 

                          {path :'login' , component :LoginComponent},
                          {path :'register' , component:RegisterComponent},
                          {path :"admin" , component :AdminComponent },

                          {path :'**' , redirectTo:'home',pathMatch:'full'}  ,
                          {path :'' , component:PagenotfoundComponent}        ]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    ProjectsComponent,
    PagenotfoundComponent,
    ViewpropertyComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule , RouterModule.forRoot(real),
    FormsModule, ReactiveFormsModule , Ng2SearchPipeModule, HttpClientModule
  ],
  providers: [RgservletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  