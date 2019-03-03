import Tiles from './tiles';
import { canvasWidth, canvasHeight, canvasScale } from './configs';

export const generateEmptyGraph = (): Tiles[][] => {
  let graph: Tiles[][] = [];
  const width: number = Math.ceil(canvasWidth / canvasScale);
  const height: number = Math.ceil(canvasHeight / canvasScale);

  for (let i = 0; i < height; i++) {
    graph[i] = [];
    for (let j = 0; j < width; j++) {
      graph[i][j] = Tiles.UNVISITED;
    }
  }

  return graph;
};

export const copyGraph = (graph: Tiles[][]): Tiles[][] => {
  let newGraph: Tiles[][] = [];
  const width: number = graph.length > 0 ? graph[0].length : 0;
  const height: number = graph.length;

  for (let i = 0; i < height; i++) {
    newGraph[i] = [];
    for (let j = 0; j < width; j++) {
      newGraph[i][j] = graph[i][j]
    }
  }

  return newGraph;
};
