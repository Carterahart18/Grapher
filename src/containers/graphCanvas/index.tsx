import React, { Component } from 'react';
import Tiles from '../../util/tiles';
import { drawTile, getCoordinates } from '../../util/canvasUtil';
import { Canvas } from './styles';
import { copyGraph } from '../../util/graphUtil';

const CANVAS_ID = 'Canvas';

export const getCanvas = (): HTMLCanvasElement =>
  document.getElementById(CANVAS_ID) as HTMLCanvasElement;

interface Props {
  width: number;
  height: number;
  graph: Tiles[][];
  setGraph: (graph: Tiles[][]) => void;
}

export default class GraphCanvas extends Component<Props> {
  componentDidMount() {
    const canvas: HTMLCanvasElement = this.drawGraph();
    canvas.addEventListener('click', event => this.toggleGraphTile(event));
    canvas.addEventListener('mousedown', event => this.mouseDown(event));
    canvas.addEventListener('mousemove', event => this.mouseMove(event));
    canvas.addEventListener('mouseup', event => this.mouseUp(event));
  }

  componentDidUpdate() {
    this.drawGraph();
  }

  drawGraph = () => {
    const canvas = getCanvas();
    const { graph } = this.props;

    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph[i].length; j++) {
        const tile: Tiles = graph[i][j];
        drawTile(canvas, tile, j, i);
      }
    }

    return canvas;
  };

  toggleGraphTile = (event: any) => {
    const coordinates = getCoordinates(event);
    let graph = this.props.graph;

    const type: Tiles = graph[coordinates.y][coordinates.x];
    let newType: Tiles = type === Tiles.WALLED ? Tiles.UNVISITED : Tiles.WALLED;
    graph[coordinates.y][coordinates.x] = newType;

    // console.log(`x: ${coordinates.x}, y: ${coordinates.y}`);
    this.props.setGraph(graph);
  };

  mouseDown = (event: any) => {
    console.log("Mouse Down");
  }

  mouseMove = (event: any) => {
    console.log("Move Mouse");
  }

  mouseUp = (event: any) => {
    console.log("Mouse Up");
  }

  render() {
    const { width, height } = this.props;
    return <Canvas id={CANVAS_ID} width={width} height={height} />;
  }
}
