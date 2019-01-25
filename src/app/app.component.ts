import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private overlayContainer: OverlayContainer) {
    const classList = this.overlayContainer.getContainerElement().classList;
    classList.add('deeppurple-amber-theme');
  }
  title = 'MyAngularDemo';

  menuItems: string[] = ['lightblue', 'lightgreen', 'lightpink', '#DDBDF1'];
  themes: ThemeInfo[] = [
    { name: 'deeppurple-amber-theme', color: '#673AB7' },
    { name: 'indigo-pink-theme', color: '#3F51B5' },
    { name: 'pink-bluegrey-theme', color: '#E91E63' },
    { name: 'purple-green-theme', color: '#9C27B0' },
  ]
  choosenTheme: string = 'deeppurple-amber-theme';

  chooseTheme(theme: string) {
    this.choosenTheme = theme;
    const classList = this.overlayContainer.getContainerElement().classList;
    // classList.remove('deeppurple-amber-theme');
    // classList.add('candy-theme');
    console.log('<Theme>' + classList);
    // this.overlayContainer.getContainerElement().classList.remove('deeppurple-amber-theme');
    // this.overlayContainer.getContainerElement().classList.add('candy-theme');
    console.log('<Theme>' + classList.contains('deeppurple-amber-theme'));
  }

  titles: Title[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ]
}

export interface ThemeInfo {
  name: string;
  color: string;
}
export interface Title {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
