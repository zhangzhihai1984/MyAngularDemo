import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/shared/dialog';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis: Crisis
  editName: string

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.crisis = data.crisis
      this.editName = data.crisis.name
    })
  }

  cancel() {
    this.dialogService.confirm('Discard changes?').subscribe(v=> console.log(`<> ${v}`))
  }

  save() {
    this.crisis.name = this.editName
    this.goToCrises()
  }

  goToCrises() {
    let crisisId = this.crisis ? this.crisis.id : null
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route })
  }
}
