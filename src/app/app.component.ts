import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  propertiesModel=[{
    key: "John",
    value: "Smith"
  }, {
    key: "Greg",
    value: "Koch"
  }];
}
