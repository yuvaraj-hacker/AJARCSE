import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent  {
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