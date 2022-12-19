import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'total-united-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  sec2Inline = "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\n" +
    " printer took a galley of type and scrambled it to make a type specimen book. " +
    "";
  sec3Inline ="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\n" +
    " printer took a galley of type and scrambled it to make a type specimen book. ";
  sec4Inline ="Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown\n" +
    " printer took a galley of type and scrambled it to make a type specimen book. ";

  constructor() { }

  ngOnInit(): void {
  }

}
