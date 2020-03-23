import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { pageAnimation } from './home-page.animation';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [pageAnimation]
})
export class HomePageComponent implements OnInit {
  pageConfigs: PageConfig[]

  constructor(private router: Router) { }

  ngOnInit() {
    this.pageConfigs = [
      new PageConfig('Rx', '/rx'),
      new PageConfig('Animation', '/animation'),
      new PageConfig('Grid Lists', '/grid'),
      new PageConfig('Dialog', '/dialog'),
      new PageConfig('Menu', '/menu'),
      new PageConfig('Table', '/table'),
      new PageConfig('Dependency Injection', '/di'),
      new PageConfig('Other', '/other'),
      new PageConfig('Router', '/router'),
      new PageConfig('Form', '/form')
    ]
  }

  @HostBinding('@pageAnimation') animatePage = true;

  onItemClicked(path: string) {
    if (path.includes('other'))
      this.router.navigate([path, Math.round(Math.random() * 100), { foo: 'foo' }])
    else
      this.router.navigate([path])
  }
}

class PageConfig {
  constructor(public title: string, public path: string) { }
}
