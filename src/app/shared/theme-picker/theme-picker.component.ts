import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {
  @Output() themeChoosen = new EventEmitter<string>();
  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit() {
  }

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
    const toRemove = Array.from(classList).filter((item: string) => item.endsWith('-theme'));
    if (toRemove.length) {
      classList.remove(...toRemove);
    }
    classList.add(theme);
    this.themeChoosen.emit(theme);
  }
}

export interface ThemeInfo {
  name: string;
  color: string;
}
