import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../core/services/common-service.service';
import { interval } from 'rxjs';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;
  progressValue=0;
  constructor(private _commService:CommonServiceService,
    ) { }

  ngOnInit() {
    var intrvl=interval(500)
    intrvl.subscribe(x=>{
      if(this.progressValue<500){
          this.progressValue +=25;      
      }   
  }); 
  }
  
}
