import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>
  selectedId: number

  constructor(
    private service: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(param => {
        this.selectedId = +param.get('id')
        return this.service.getHeroes()
      })
    )
  }

  goToDetail(id: string) {
    this.router.navigate([id], { relativeTo: this.route })
  }
}
