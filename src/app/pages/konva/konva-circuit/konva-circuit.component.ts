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

class Node {
  isSeries: boolean
  seriesIndex?: number
  parallelIndex?: number
}

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

  private IO_CIRCLE_RADIUS = 25
  private IO_CIRCLE_STROKE_COLOR = 'black'
  private IO_CIRCLE_STROKE_WIDTH = 2

  private SERIES_RECT_WIDTH = 100
  private SERIES_RECT_HEIGHT = 60
  private SERIES_RECT_STROKE_COLOR = 'black'
  private SERIES_RECT_STROKE_WIDTH = 2
  private SERIES_LINE_LENGTH = 75
  private SERIES_LINE_STROKE_COLOR = 'black'
  private SERIES_LINE_STROKE_WIDTH = 2

  private PARALLEL_RECT_WIDTH = 50
  private PARALLEL_RECT_HEIGHT = 100
  private PARALLEL_RECT_STROKE_COLOR = 'black'
  private PARALLEL_RECT_STROKE_WIDTH = 2
  private PARALLEL_LINE_LENGTH = 50
  private PARALLEL_LINE_STROKE_COLOR = 'black'
  private PARALLEL_LINE_STROKE_WIDTH = 2

  private STAGE_PADDING_START = 20
  private STAGE_PADDING_END = 20
  private STAGE_PADDING_TOP = 20
  private STAGE_PADDING_BOTTOM = 20

  private MOCK_DATA = "ppssppps"

  private lastX = 0
  private INIT_Y = this.STAGE_PADDING_TOP + this.IO_CIRCLE_RADIUS
  private seriesIndex = 0
  private parallelIndex = 0

  @ViewChild('circuitScrollContainerRef', { read: ElementRef, static: false }) scrollContainerRef: ElementRef

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const nodes: Node[] = this.MOCK_DATA.split("").map((value, index) => {
      if (value == 's') {
        this.parallelIndex = 0
        return { isSeries: true, seriesIndex: this.seriesIndex++ }
      }
      return { isSeries: false, parallelIndex: this.parallelIndex++ }
    })

    const stage = new Konva.Stage({
      container: 'circuit-container',
      width: this.WIDTH + this.PADDING * 2,
      height: this.HEIGHT + this.PADDING * 2,
      draggable: true
    })

    const layer = new Konva.Layer()
    stage.add(layer)

    this.makeInput(layer)
    nodes.forEach(node => {
      if (node.isSeries)
        this.makeSeries(layer, node.seriesIndex)
      else
        this.makeParallel(layer, node.parallelIndex)
    })
    this.makeOutput(layer)
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

  private makeInput(layer: Konva.Layer) {
    const inputCircle = new Konva.Circle({
      x: this.STAGE_PADDING_START + this.IO_CIRCLE_RADIUS,
      y: this.INIT_Y,
      radius: this.IO_CIRCLE_RADIUS,
      stroke: this.IO_CIRCLE_STROKE_COLOR,
      strokeWidth: this.IO_CIRCLE_STROKE_WIDTH
    })

    layer.add(inputCircle)

    this.lastX = this.STAGE_PADDING_START + this.IO_CIRCLE_RADIUS * 2
  }

  private makeOutput(layer: Konva.Layer) {
    this.makeSeriesLine(layer)

    const outputCircle = new Konva.Circle({
      x: this.lastX + this.IO_CIRCLE_RADIUS,
      y: this.INIT_Y,
      radius: this.IO_CIRCLE_RADIUS,
      stroke: this.IO_CIRCLE_STROKE_COLOR,
      strokeWidth: this.IO_CIRCLE_STROKE_WIDTH
    })

    layer.add(outputCircle)

    this.lastX += this.SERIES_RECT_WIDTH
  }

  private makeSeriesLine(layer: Konva.Layer) {
    const x1 = this.lastX
    const y1 = this.INIT_Y
    const x2 = this.lastX + this.SERIES_LINE_LENGTH
    const y2 = y1
    const seriesLine = new Konva.Line({
      points: [x1, y1, x2, y2],
      stroke: this.SERIES_LINE_STROKE_COLOR,
      strokeWidth: this.SERIES_LINE_STROKE_WIDTH
    })

    layer.add(seriesLine)

    this.lastX += this.SERIES_LINE_LENGTH
  }

  /**
   * inputEndX = stagePaddingStart + ioCircleRaduis * 2 + seriesLineLength
   * lastX = inputEndX + (seriesLineLength + seriesRectWidth) * columIndex
   *
   * Series Rect
   * x = lastX + seriesLineLength
   * y = stagePaddingTop + ioCircleRadius - seriesRectHeight / 2
   *
   * Series Line
   * x1 = lastX
   * y1 = stagePaddingTop + ioCircleRadius
   * x2 = x1 + seriesLineLength
   * y2 = y1
   */
  private makeSeries(layer: Konva.Layer, seriesIndex: number) {
    this.makeSeriesLine(layer)

    const seriesRect = new Konva.Rect({
      x: this.lastX,
      y: this.INIT_Y - this.SERIES_RECT_HEIGHT / 2,
      width: this.SERIES_RECT_WIDTH,
      height: this.SERIES_RECT_HEIGHT,
      stroke: this.SERIES_RECT_STROKE_COLOR,
      strokeWidth: this.SERIES_RECT_STROKE_WIDTH
    })

    layer.add(seriesRect)

    this.lastX += this.SERIES_RECT_WIDTH
  }

  private makeParallel(layer: Konva.Layer, parallelIndex: number) {
    if (parallelIndex == 0)
      this.makeSeriesLine(layer)

    let lastY = this.INIT_Y + (this.PARALLEL_LINE_LENGTH + this.PARALLEL_RECT_HEIGHT) * parallelIndex
    const x1 = this.lastX
    const y1 = lastY
    const x2 = x1
    const y2 = lastY + this.PARALLEL_LINE_LENGTH
    const parallelLine = new Konva.Line({
      points: [x1, y1, x2, y2],
      stroke: this.PARALLEL_LINE_STROKE_COLOR,
      strokeWidth: this.PARALLEL_LINE_STROKE_WIDTH
    })

    layer.add(parallelLine)

    lastY = y2

    const parallelRect = new Konva.Rect({
      x: this.lastX - this.PARALLEL_RECT_WIDTH / 2,
      y: lastY,
      width: this.PARALLEL_RECT_WIDTH,
      height: this.PARALLEL_RECT_HEIGHT,
      stroke: this.PARALLEL_RECT_STROKE_COLOR,
      strokeWidth: this.PARALLEL_RECT_STROKE_WIDTH
    })

    layer.add(parallelRect)
  }
}