import { Injectable } from '@angular/core';
//import { AngularFirestore } from '';
import {  Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class CommonServiceService {

  constructor(private http:HttpClient,
    private _database: AngularFirestore,
    ) {}

  public LoaderSubject = new Subject();
  getData(){
    return this._database.collection('Courses').snapshotChanges();
  }
}
