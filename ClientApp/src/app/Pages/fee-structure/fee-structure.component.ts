import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CommonServiceService } from '../../core/services/common-service.service';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.scss']
})
export class FeeStructureComponent implements OnInit {
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
        } 
      })
    });

  }
}

