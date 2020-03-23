import { Component, OnInit, Inject, InjectionToken, Injector, inject } from '@angular/core';
import {
  DI,
  DI_VALUE_PROVIDER,
  DI_VALUE_TOKEN,
  DI_CLASS_PROVIDER,
  DI_CLASS_TOKEN,
  DI_EXISTING_PROVIDER,
  DI_EXISTING_TOKEN,
  CLASS_NAME_TOKEN,
  DI_FACTORY_PROVIDER,
  DI_FACTORY_TOKEN,
  DI_FACTORY_PARAM_PROVIDER,
  DI_FACTORY_PARAM_TOKEN,
  Dep,
} from './di';

class MyDep { }

class MyService {
  constructor(readonly myDep: MyDep) { }
}

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss'],
  providers: [
    // Dep,
    DI,
    DI_VALUE_PROVIDER,
    DI_CLASS_PROVIDER,
    DI_EXISTING_PROVIDER,
    DI_FACTORY_PROVIDER,
    DI_FACTORY_PARAM_PROVIDER,
    {
      provide: CLASS_NAME_TOKEN,
      useValue: ['app-primary-color', 'app-primary-outline']
    },
  ]
})
export class DIComponent implements OnInit {

  constructor(
    private di: DI,
    @Inject(DI_VALUE_TOKEN) private useValue: DI,
    @Inject(DI_CLASS_TOKEN) private useClass: DI,
    @Inject(DI_EXISTING_TOKEN) private useExisting: DI,
    @Inject(DI_FACTORY_TOKEN) private useFactory: DI,
    @Inject(DI_FACTORY_PARAM_TOKEN) private useFactoryWithParam: DI,
  ) {
    console.log(`<DI> ${this.di.content}`)
    console.log(`<DI_VALUE_TOKEN> ${this.useValue.content}`)
    console.log(`<DI_CLASS_TOKEN> ${this.useClass.content}`)
    console.log(`<DI_EXISTING_TOKEN> ${this.useExisting.content}`)
    console.log(`<DI_FACTORY_TOKEN> ${this.useFactory.content}`)
    console.log(`<DI_FACTORY_WITH_PARAM_TOKEN> ${this.useFactoryWithParam.content}`)
  }

  ngOnInit(): void {
    // const BASE = new InjectionToken<string>('Url')
    // const injector = Injector.create({
    //   providers: [{
    //     provide: BASE,
    //     useValue: 'http'
    //   }]
    // })
    // const url = injector.get(BASE)
    // console.log(`<url> ${url}`)

    // const MY_SERVICE_TOKEN = new InjectionToken<MyService>('MyService', {
    //   providedIn: 'root',
    //   factory: () => new MyService(inject(MyDep))
    // })

    // const myService = injector.get(MY_SERVICE_TOKEN)
    // console.log(`<service> ${myService instanceof MyService}`)
  }

}


