import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pay-fees',
  standalone: true,
    imports: [RouterLink],
  templateUrl: './pay-fees.component.html',
  styleUrl: './pay-fees.component.css'
})
export class PayFeesComponent  {
  dsada:any="bg-primary-blue-color text-white";
  currentDate:any;
  currentDay: any;
  currentMonth: any;
  currentYear: any;

  ngOnInit() {
    this.currentDate = new Date();
    this.currentDay = this.currentDate.getDate();
    this.currentMonth = this.currentDate.getMonth() + 1; // Months are zero-based
    this.currentYear = this.currentDate.getFullYear();
    console.log(this.currentDate, this.currentDay,this.currentMonth,this.currentYear)
  }



  


}