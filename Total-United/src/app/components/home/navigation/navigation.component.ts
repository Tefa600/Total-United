import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-united-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  showHideNavigation(e: any, myTopnav: HTMLDivElement) {
    e.preventDefault();
    if (myTopnav.className === "topnav") {
      myTopnav.className += " responsive";
    } else {
      myTopnav.className = "topnav";
    }
  }
}
