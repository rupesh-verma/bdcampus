import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { PagesModule } from './Pages/Pages.module';
import { CommonServiceService } from './core/services/common-service.service';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ComponentsComponent } from './components/components.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    FooterComponent, PageNotFoundComponent,
    
     
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    ComponentsModule,
    PagesModule,
    AppRoutingModule,
    
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
    

  ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
