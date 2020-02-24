import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>

  constructor(
    private service: CrisisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => console.log(`data ${JSON.stringify(data)}`)
    )
    this.crisis$ = this.route.paramMap.pipe(
      switchMap(param => this.service.getCrisis(param.get('id')))
    )
  }

}
