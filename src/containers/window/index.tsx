import React, { Component } from 'react';
import Apps from '../../util/apps';

import MergeSort from '../mergeSort';
import Grapher from '../grapher';
import AppMenu from '../appMenu';
import { Container } from './styles';

interface Props {}

interface State {
  app: Apps;
}

export default class Window extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      app: Apps.MENU,
    };
  }

  getApp() {
    const defaultProps = {
      setApp: this.setApp,
    };

    switch (this.state.app) {
      case Apps.MERGESORT:
        return <MergeSort {...defaultProps} />;
      case Apps.GRAPHER:
        return <Grapher {...defaultProps} />;
      default:
        return <AppMenu {...defaultProps} />;
    }
  }

  setApp = (app: Apps) => {
    this.setState({ app: app });
  };

  render() {
    return <Container>{this.getApp()}</Container>;
  }
}
