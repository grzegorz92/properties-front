import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  properties = [{
    key: "John",
    value: "Smith"
  },
    {
      key: "Greg",
      value: "Koch"
    },
    {
      key: "Richard",
      value: "Pumpkin"
    },
    {
      key: "Timothy",
      value: "Lawrence"
    },
    {
      key: "Johann",
      value: "Wuerzburger"
    },
  ];


}
