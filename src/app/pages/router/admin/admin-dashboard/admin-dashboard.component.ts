import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId$: Observable<string>
  fragment$: Observable<string>

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sessionId$ = this.route.queryParamMap.pipe(
      map(param => param.get('session_id') || 'None')
    )

    this.fragment$ = this.route.fragment.pipe(
      map(fragment => fragment || 'None')
    )
  }
}
