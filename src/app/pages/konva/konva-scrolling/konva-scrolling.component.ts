import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core'
import Konva from 'konva'
import { fromEvent } from 'rxjs'

/**
 * 我们在最外层定义一个名为"scroll-container"的div, 它的尺寸为用户的可视区域的尺寸, 比如500*500.
 * 在它的内部定义一个名为"large-container"的div, 它的尺寸为绘制区域的尺寸, 也就是stage的尺寸, 比如3000*3000.
 * 最内部为名为"container"的div, 真正用于绘制的区域.
 *
 * 其中, 外层scroll-container的overflow为auto, 内层large-container的overflow为hidden, 这样
 * 外层的scrollbar可见, 用户可以通过滑动外层的scroll-container看到内层large-container完整的内容.
 *
 */
@Component({
  selector: 'app-konva-scrolling',
  templateUrl: './konva-scrolling.component.html',
  styleUrls: ['./konva-scrolling.component.scss']
})
export class KonvaScrollingComponent implements OnInit, AfterViewInit {
  private WIDTH = 2000
  private HEIGHT = 500
  private COUNT = 200
  private PADDING = 0

  @ViewChild('scrollContainerRef', { read: ElementRef, static: false }) scrollContainerRef: ElementRef

  constructor(private render: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const stage = new Konva.Stage({
      container: 'container',
      width: this.WIDTH + this.PADDING * 2,
      height: this.HEIGHT + this.PADDING * 2,
      draggable: false
    })

    const layer = new Konva.Layer()

    stage.add(layer)
    Array.from(Array(this.COUNT).keys()).forEach(_ => layer.add(this.makeNode()))
    layer.draw()

    // const scrollContainer = document.getElementById('scroll-container')
    const scrollContainer = this.scrollContainerRef.nativeElement

    fromEvent(scrollContainer, 'scroll')
      .subscribe(_ => {
        const dx = scrollContainer.scrollLeft - this.PADDING
        const dy = scrollContainer.scrollTop - this.PADDING
        console.log(`dx: ${dx} dy: ${dy}`)

        /**
         
         *
         * 当用户滑动时, 对"container"这个div向相反方向移动对应的距离
         * 注: scrollTop大于等于0,
         */
        // stage.container().style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
        this.render.setStyle(stage.container(), 'transform', `translate(${dx}px, ${dy}px)`)

        stage.x(-dx)
        stage.y(-dy)
        stage.batchDraw()
      })
  }

  private makeNode = (): Konva.Circle =>
    new Konva.Circle({
      x: this.WIDTH * Math.random(),
      y: this.HEIGHT * Math.random(),
      radius: 50,
      fill: 'red',
      stroke: 'black'
    })
}
