import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeeStructureComponent } from './fee-structure.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: '',component: FeeStructureComponent },
  { path: 'fee-structure',component: FeeStructureComponent }
];
@NgModule({
  declarations: [FeeStructureComponent],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FeeStructureModule { }
