import {
  Directive,
  ElementRef,
  Renderer2,
  Inject,
  Optional,
  Self,
  SkipSelf
} from '@angular/core';
import { CLASS_NAME_TOKEN } from './injection';

@Directive({
  selector: '[classInjection]',
  exportAs: 'classInjection',
  providers: [
    {
      provide: CLASS_NAME_TOKEN,
      useValue: ['app-primary-color']
    }
  ]
})
export class InjectionDirective {

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    @Optional() @SkipSelf() @Inject(CLASS_NAME_TOKEN) private classNames: string[]
  ) {
    if (classNames) {
      classNames.forEach(className => this.render.addClass(this.el.nativeElement, className))
    }
  }

  get injectedClass() {
    return this.classNames || 'null'
  }
}
