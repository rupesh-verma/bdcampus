import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactUSComponent } from './contact-us.component';

const routes: Routes = [
  { path: '', component: ContactUSComponent },
  { path: 'contactUs',component: ContactUSComponent }
];
@NgModule({
  declarations: [ContactUSComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class ContactUsModule { }
