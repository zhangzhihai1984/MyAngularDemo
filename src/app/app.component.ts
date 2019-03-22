import { Component } from '@angular/core';
import { routeAnimation } from './core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  choosenTheme: string = 'indigo-pink-theme';

  constructor() {
  }
  title = 'MyAngularDemo';

  titles: Title[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ]

  chooseTheme(theme: string) {
    this.choosenTheme = theme;
  }

  prepareRoute(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      // console.log('<Outlet>', window.location.pathname);
    }
    // console.log('<Outlet>', outlet && outlet.activatedRouteData && outlet.activatedRouteData['animState']);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animState'];
  }
}

export interface Title {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
