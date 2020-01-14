import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myIf][myIfRef]'
})
export class MyIfDirective<T = unknown> {

  constructor(private templateRef: TemplateRef<MyIfContext>, private viewContainerRef: ViewContainerRef) { }

  @Input()
  set myIf(condition: boolean) {
    this.viewContainerRef.clear()
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, new MyIfContext())
    }
  }

  @Input()
  set myIfRef(ref: TemplateRef<any>) {
    this.viewContainerRef.createEmbeddedView(ref, { $implicit: 'ref-a', another: 'ref-b' })
  }

  @Input()
  set myIfFn(fn: () => void) {
    fn()
  }
}

export class MyIfContext {
  public $implicit: string = 'a'
  public another: string = 'b'
}