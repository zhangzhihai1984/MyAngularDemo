import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myIf2] [myIf2Condition]'
})
export class MyIf2Directive {

  constructor(private templateRef: TemplateRef<MyIfContext>, private viewContainerRef: ViewContainerRef) { }

  @Input()
  set myIf2Condition(condition: boolean) {
    this.viewContainerRef.clear()
    this.viewContainerRef.createEmbeddedView(this.templateRef, new MyIfContext(condition))
  }
}

export class MyIfContext {
  constructor(public $implicit: boolean = false) { }
}
