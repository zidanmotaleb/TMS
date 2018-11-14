import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {
  oneWay: boolean = false;
   twoWay: boolean = true;
   TravelNumber: number = 1;
   arrayOfTravelers= [0];
   show: boolean = false;
   noTravlers = false;


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


}
