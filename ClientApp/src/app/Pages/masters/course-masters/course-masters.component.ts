import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonServiceService } from '../../../core/services/common-service.service';

@Component({
  selector: 'app-course-masters',
  templateUrl: './course-masters.component.html',
  styleUrls: ['./course-masters.component.scss']
})
export class CourseMastersComponent implements OnInit,OnDestroy {

  progressValue=0;
  Coursedata:any[]=[];
  constructor(private CommService:CommonServiceService) { }

  ngOnInit() {
    var intrvl=interval(500)
    intrvl.subscribe(x=>{
      if(this.progressValue<500){
          this.progressValue +=25;      
      }   
  }); 
 
this.CommService.getData().subscribe(data=>{
  this.Coursedata = data.map(e => {
    return {
      id: e.payload.doc.id,
      ...e.payload.doc.data()
    } as CourseDetails
  })
});

  }
  ngOnDestroy(): void {
    //this.data.unsubscribe();
  }
}

export class CourseDetails {
  id: string;
  CourseFees: number;
  CourseName: string;
}