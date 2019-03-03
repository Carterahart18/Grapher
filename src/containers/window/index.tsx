import React, { Component } from 'react';
import { canvasWidth, canvasHeight } from '../../util/configs';
import Tiles from '../../util/tiles';

import GraphCanvas from '../graphCanvas';
import { Container } from './styles';
import { generateEmptyGraph } from '../../util/graphUtil';

interface Props {}

interface State {
  graph: Tiles[][];
}

export default class SideBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      graph: generateEmptyGraph(),
    };
  }

  setGraph = (newGraph: Tiles[][]) => {
    this.setState({ graph: newGraph });
  };

  render() {
    return (
      <Container>
        <GraphCanvas
          width={canvasWidth}
          height={canvasHeight}
          graph={this.state.graph}
          setGraph={this.setGraph}
        />
      </Container>
    );
  }
}
