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
    this.router.navigate([path]);
  }

}
