import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsModule } from './Pages/contact-us/contact-us.module';
import { LandingModule } from './Pages/landing/landing.module';
import { CourcesModule } from './Pages/cources/cources.module';
import { FeeStructureModule } from './Pages/fee-structure/fee-structure.module';
import { MastersModule } from './Pages/masters/masters.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ComponentsModule } from './components/components.module';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },//4745101003421 cnrb0004745

    { path: 'home', 
    loadChildren:  'app/Pages/landing/landing.module#LandingModule' },
    { path: 'landing', 
    loadChildren:  'app/components/components.module#ComponentsModule' },   
     {      
      path: "contact",
      loadChildren:  'app/Pages/contact-us/contact-us.module#ContactUsModule'
     },
     {
       path:"cources",
       loadChildren:'app/Pages/cources/cources.module#CourcesModule'
     },
     {
       path:"fee-structure",
       loadChildren:'app/Pages/fee-structure/fee-structure.module#FeeStructureModule'
     },
     {
      path:"master",
      loadChildren:'app/Pages/masters/masters.module#MastersModule'
    },
    {
      path:"**",
      component:PageNotFoundComponent
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ContactUsModule,
    LandingModule,
    CourcesModule,
    FeeStructureModule,
    MastersModule,
    ComponentsModule,
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
