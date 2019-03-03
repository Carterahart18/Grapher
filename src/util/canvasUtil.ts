import Tiles from './tiles';
import { canvasScale as SCALE } from './configs';
import {
  alto,
  charade,
  greenMist,
  white,
  yellowGreen,
} from '../emotion/colors';
import { getCanvas } from '../containers/graphCanvas';

export const drawTile = (
  canvas: HTMLCanvasElement,
  type: Tiles,
  x: number,
  y: number
) => {
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
  if (context != null) {
    let color = white;
    switch (type) {
      case Tiles.MARKED:
        color = yellowGreen;
        break;
      case Tiles.UNVISITED:
        color = white;
        break;
      case Tiles.VISITED:
        color = greenMist;
        break;
      case Tiles.WALLED:
        color = charade;
        break;
      default:
        break;
    }

    context.fillStyle = color;
    context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
    context.fillStyle = alto;
    context.fillRect(x * SCALE, y * SCALE, 1, SCALE);
    context.fillRect(x * SCALE, y * SCALE, SCALE, 1);
    context.fillRect((x + 1) * SCALE - 1, y * SCALE, 1, SCALE);
    context.fillRect(x * SCALE, (y + 1) * SCALE - 1, SCALE, 1);
  }
};

export const getCoordinates = (
  event: React.MouseEvent<HTMLElement>
): { x: number; y: number } => {
  const canvas = getCanvas();

  let x = (event.pageX - canvas.offsetLeft) / SCALE;
  let y = (event.pageY - canvas.offsetTop) / SCALE;
  return { x: Math.floor(x), y: Math.floor(y) };
};

// canvas.addEventListener('click', function(event) {
//   let x = event.pageX - canvas.offsetLeft;
//   let y = event.pageY - canvas.offsetTop;

//   const xPos = Math.floor(x / SCALE);
//   const yPos = Math.floor(y / SCALE);
//   if (!grid[xPos]) {
//     grid[xPos] = [];
//   }

//   if (isPixelSet(canvas, xPos, yPos)) {
//     clearPixel(canvas, xPos, yPos);
//     grid[xPos][yPos] = false;
//   } else {
//     drawPixel(canvas, xPos, yPos);
//     grid[xPos][yPos] = true;
//   }
// });
