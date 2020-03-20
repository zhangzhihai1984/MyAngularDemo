import { Component, OnInit, Inject } from '@angular/core';
import {
  DI,
  DI_VALUE_PROVIDER,
  DI_VALUE_TOKEN,
  DI_CLASS_PROVIDER,
  DI_CLASS_TOKEN,
  DI_EXISTING_PROVIDER,
  DI_EXISTING_TOKEN,
  CLASS_NAME_TOKEN,
} from './injection';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss'],
  providers: [
    DI,
    DI_VALUE_PROVIDER,
    DI_CLASS_PROVIDER,
    DI_EXISTING_PROVIDER,
    {
      provide: CLASS_NAME_TOKEN,
      useValue: ['app-primary-color', 'app-primary-outline']
    },
  ]
})
export class InjectionComponent implements OnInit {

  constructor(
    private DI: DI,
    @Inject(DI_VALUE_TOKEN) private useValue: DI,
    @Inject(DI_CLASS_TOKEN) private useClass: DI,
    @Inject(DI_EXISTING_TOKEN) private useExisting: DI,
  ) {
    console.log(`<DI> ${DI.content}`)
    console.log(`<DI_VALUE_TOKEN> ${useValue.content}`)
    console.log(`<DI_CLASS_TOKEN> ${useClass.content}`)
    console.log(`<DI_EXISTING_TOKEN> ${useExisting.content}`)
  }

  ngOnInit(): void {
  }

}


