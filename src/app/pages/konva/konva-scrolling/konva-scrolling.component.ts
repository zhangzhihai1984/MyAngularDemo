import { Component, OnInit } from '@angular/core';
import Konva from 'konva';

@Component({
  selector: 'app-konva-scrolling',
  templateUrl: './konva-scrolling.component.html',
  styleUrls: ['./konva-scrolling.component.scss']
})
export class KonvaScrollingComponent implements OnInit {
  private WIDTH = 2000
  private HEIGHT = 500
  private COUNT = 200

  constructor() { }

  ngOnInit(): void {
    const stage = new Konva.Stage({
      container: 'container',
      width: this.WIDTH,
      height: this.HEIGHT
    })

    const layer = new Konva.Layer()

    stage.add(layer)
    Array.from(Array(this.COUNT).keys()).forEach(_ => layer.add(this.makeNode()))
    layer.draw()
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
