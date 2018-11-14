import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  oneWay: boolean = false;
   twoWay: boolean = true;
   TravelNumber: number = 1;
   arrayOfTravelers= [0];
   show: boolean = false;
   noTravlers = false;
   paris: boolean = false;
   travelway: string='';

   constructor() { }
   ngOnInit() {  }
  //  constructor() {
   //  this.arrayOfTravelers= Array(this.TravelNumber).fill().map((x,i)=>i);
  //  }
   getTrevelNumber(event: Event){
   this.noTravlers = true;

     //console.log(event);
     //this.arrayOfTravelers= Array(this.TravelNumber).fill().map((x,i)=>i);
     this.arrayOfTravelers= Array(this.TravelNumber);
     //this.TravelNumber = (<HTMLInputElement>event.target).value;
   }

   getColor(){
     //return this.noTravlers === 'false' ? 'red' : 'green';
     return this.TravelNumber === 0 ? 'red' : 'green';
   }
  changeForm(ev){
  this.travelway = (<HTMLInputElement>event.target).value;  

  }
}
