import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSCCourceComponent } from './ssccource/ssccource.component';
import { RailwayCourseComponent } from './railway-course/railway-course.component';
import { OtherCourseComponent } from './other-course/other-course.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',component: SSCCourceComponent  },
  { path: 'ssc-courses',component: SSCCourceComponent  },
  { path: 'railway-courses',component: RailwayCourseComponent },
  { path: 'other-courses',component: OtherCourseComponent },
// {
//   path:'**',

// }
];
@NgModule({
  declarations: [SSCCourceComponent, RailwayCourseComponent, OtherCourseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CourcesModule { }
