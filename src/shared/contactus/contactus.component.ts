import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contactus',
  standalone: true,
    imports: [RouterLink],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
email:any='eic.IJDIII@gmail.com';
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
