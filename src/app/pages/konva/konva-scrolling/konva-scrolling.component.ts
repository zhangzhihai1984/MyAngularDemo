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
         * 
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
