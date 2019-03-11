import { Component, OnInit, HostBinding, Input, TemplateRef } from '@angular/core';
import { detailRowAnimation } from '../awesome-table/awesome-table.animation';

@Component({
  selector: 'app-awesome-detail-row',
  templateUrl: './awesome-detail-row.component.html',
  styleUrls: ['./awesome-detail-row.component.scss'],
  animations: [detailRowAnimation]
})
export class AwesomeDetailRowComponent implements OnInit {

  state = 'collapsed';

  // @HostBinding('@detailRowAnimation') detailRowState = this.state;

  @Input('row') row: any;
  @Input('detailRowTpl') detailRowTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
