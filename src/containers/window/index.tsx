import React from 'react';
import { canvasWidth, canvasHeight } from '../../util/configs';

import Graph from '../graph';
import { Container } from './styles';

export default function SideBar() {
  return (
    <Container>
      <Graph width={canvasWidth} height={canvasHeight} />
    </Container>
  );
}
