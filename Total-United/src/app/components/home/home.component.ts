import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-united-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sec2Inline ="Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim condimentum elit egestas sit amet. Phasellus faucibus pellentesque";
  b1Inline="Turnkey projects, Fa code works, Mechanical and electrical ";
  b2Inline="Sport Flooring, squash court, Padel Courts, Sport equipment";
  b3Inline="Lorem Ipsum is simply dummy text of the printing";
  sec5Inline="Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant morbi tristique";

  constructor() { }

  ngOnInit(): void {
  }

}
