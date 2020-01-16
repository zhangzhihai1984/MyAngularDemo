import { Directive, ElementRef, HostListener, Input, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
  // selector: 'div[highlight]' only div
  // selector: 'div[highlight],p[highlight]' only div and p
  // selector: ':not(a)[highlight]' except a
  // selector: ':not(a):not(area)[highlight]' except a and area
  //https://github.com/angular/angular/blob/master/packages/router/src/directives/router_link.ts

  exportAs: 'highlight'
  //https://github.com/angular/angular/blob/master/packages/router/src/directives/router_outlet.ts
  //https://netbasal.com/angular-2-take-advantage-of-the-exportas-property-81374ce24d26
})
export class HighlightDirective {
  @Input('highlight') highlightColor: string

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null)
  }

  @HostBinding('style.border') border: string
  @HostBinding('style.font-size') fontSize: string

  private highlight(color: string) {
    // this.el.nativeElement.style.color = color
    this.render.setStyle(this.el.nativeElement, 'color', color)
    this.border = color ? `2px solid ${color}` : null
    this.fontSize = color ? '150%' : '100%'
  }

  showLog = () => console.log("Higlight showLog")
  showAlert = () => window.alert('Directive exportAs works')
}