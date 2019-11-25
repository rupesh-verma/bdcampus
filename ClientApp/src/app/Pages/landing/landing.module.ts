import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
//import { ComponentsModule } from '../../components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  { path: '',component: LandingComponent  },
  { path: 'home',component: LandingComponent }
];
@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    //ComponentsModule
    NgbModule
  ]
})
export class LandingModule { }
