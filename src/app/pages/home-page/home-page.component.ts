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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostBinding('@pageAnimation') animatePage = true;

  onItemClicked(path: string) {
    if (path.includes('other'))
      this.router.navigate([path, Math.round(Math.random() * 100), {foo: 'foo'}])
    else
      this.router.navigate([path])
  }

}
