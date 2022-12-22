import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-united-subsidiaries',
  templateUrl: './subsidiaries.component.html',
  styleUrls: ['./subsidiaries.component.css']
})
export class SubsidiariesComponent implements OnInit {
  sec2Inline: any ="Success Through Superior Performance. The Elevators Division of Ahmadiah Contracting & Trading Company KCSC is the leading supplier of elevator and escalator products, and building maintenance units in Kuwait. The Division was established in 1976 in order to focus the special skills relating to conveying systems in one autonomous business within Ahmadiah Group.\n" +
    "\n" +
    "In Kuwait, our Division represents two of the most advanced producers in these fields: Hitachi Elevators & Escalators and Mannesmann Demag AG (Manntech). Due to Hitachi's use of cutting-edge technology in design and manufacture, its elevators and escalators are recognized for their quality, safety and ride comfort.\n" +
    "\n" +
    "Manntech's façade access systems, in which prime importance is attached to design quality and reliability, can fit the external features of any shape of building, allowing the unreachable areas to be maintained. The contemporaneous visual design of both manufacturer's products ensure that they blend in harmoniously with the architectural environment in which they are installed.\n" +
    "\n" +
    "For more information please visit: \n" +
    "www.hitachi.com";

  constructor() { }

  ngOnInit(): void {
  }

}
