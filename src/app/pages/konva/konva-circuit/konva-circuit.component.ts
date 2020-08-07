import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import Konva from 'konva';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-konva-circuit',
  templateUrl: './konva-circuit.component.html',
  styleUrls: ['./konva-circuit.component.scss']
})
export class KonvaCircuitComponent implements OnInit, AfterViewInit {

  private WIDTH = 2000
  private HEIGHT = 500
  private COUNT = 200
  /**
   * PADDING增加了stage的尺寸, 这样滑动会更流畅.
   */
  private PADDING = 500

  @ViewChild('circuitScrollContainerRef', { read: ElementRef, static: false }) scrollContainerRef: ElementRef

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const stage = new Konva.Stage({
      container: 'circuit-container',
      width: this.WIDTH + this.PADDING * 2,
      height: this.HEIGHT + this.PADDING * 2,
      draggable: false
    })

    const layer = new Konva.Layer()

    stage.add(layer)
    layer.add(this.makeNodeTest(50, 50))
    layer.add(this.makeNodeTest(50, this.HEIGHT - 50))
    layer.add(this.makeNodeTest(this.WIDTH - 50, 50))
    layer.add(this.makeNodeTest(this.WIDTH - 50, this.HEIGHT - 50))
    layer.draw()

    const scrollContainer = this.scrollContainerRef.nativeElement

    fromEvent(scrollContainer, 'scroll')
      .subscribe(_ => {
        const dx = scrollContainer.scrollLeft - this.PADDING
        const dy = scrollContainer.scrollTop - this.PADDING
        console.log(`dx: ${dx} dy: ${dy}`)

        this.render.setStyle(stage.container(), 'transform', `translate(${dx}px, ${dy}px)`)

        stage.x(-dx)
        stage.y(-dy)
        stage.batchDraw()
      })
  }

  private makeNodeTest = (x: number, y: number): Konva.Circle =>
    new Konva.Circle({
      x: x,
      y: y,
      radius: 50,
      fill: 'red',
      stroke: 'black'
    })
}
