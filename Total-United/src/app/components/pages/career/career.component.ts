import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-united-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  sec2Lorem: any="Welcome to the Total United family. We believe in the value and potential of each and every one of our employees and strive to create a healthy and safe working environment that encourages teamwork, personal growth and dedication.\n" +
    "\n" +
    "If you have passion for hard work and are result oriented with a proactive approach, then join our dynamic team and you will find a wealth of opportunities to learn, grow and expand your horizons.";
  sec3Lorem: any= "Being an ISO Company, we understand the importance of Safety, Quality & Productivity. To serve our customers, our HR Department ensures that all levels of our employees are trained to meet today’s as well other tomorrow’s challenges in the industry. Training on a range of technical, financial, commercial as well as management subjects are offered apart from necessary soft / behavioural skills training.";

  constructor() { }

  ngOnInit(): void {
  }

}
