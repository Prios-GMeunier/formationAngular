import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';

  btnState = true;

  total: number = 0;

  toggle() {
    console.log('toto');
  }

  handle() {
    console.log('');
  }
}
