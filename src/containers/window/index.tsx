import React, { Component } from 'react';

import MergeSort from '../mergeSort';
import Grapher from '../grapher';
import { Container } from './styles';

enum Pages {
  MENU = 'MENU',
  GRAPHER = 'GRAPHER',
  MERGESORT = 'MERGESORT',
}

interface Props {}

interface State {
  page: Pages;
}

export default class Window extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      page: Pages.MERGESORT,
    };
  }

  getPage() {
    switch (this.state.page) {
      case Pages.MERGESORT:
        return <MergeSort />;
      case Pages.GRAPHER:
        return <Grapher />;
      default:
        break;
    }
    return <div />;
  }

  render() {
    return <Container>{this.getPage()}</Container>;
  }
}
