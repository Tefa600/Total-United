import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-united-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  headerItems= ["Careers", "subsidiares", "About us"]
  constructor() { }

  ngOnInit(): void {
  }

}
