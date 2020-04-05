import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  header = [
    'S no',
    'Name',
    'Roll no'
  ];

  data = [
    {
      'S no': 1,
      'Name': 'A',
      'Roll no': 100
    },
    {
      'S no': 2,
      'Name': 'B',
      'Roll no': 101
    }
  ];
}
