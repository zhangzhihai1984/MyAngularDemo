import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>

  constructor(
    private service: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap(param => this.service.getHero(param.get('id')))
    )
  }

  goToHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null
    this.router.navigate(['../', { id: heroId, foo: 'foo' }], { relativeTo: this.route })
  }
}
