import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseMastersComponent } from './course-masters/course-masters.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes =[
  { path: '', redirectTo: 'courses-master', pathMatch: 'full' },
  { path: 'courses-master', component: CourseMastersComponent }
]
@NgModule({
  declarations: [CourseMastersComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class MastersModule { }
