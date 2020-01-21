import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>

  constructor(
    private service: CrisisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.crises$ = this.service.getCrises()
  }

  goToDetail(id: string) {
    this.router.navigate([id], { relativeTo: this.route })
  }
}
