import React, { Component } from 'react';
import ArrayDisplay from '../../components/arrayDisplay';
import ArrayPrompt from '../../components/arrayPrompt';
import Button from '../../components/button';
import { Container } from './styles';

interface Props {}

interface State {
  initialArray: number[];
  arraySteps: number[][];
}

export default class MergeSort extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialArray: [],
      arraySteps: [[]],
    };
  }

  onInputChange = (value: string) => {
    let array: number[] = value
      .split(',')
      .map(x => parseInt(x))
      .filter(x => Boolean(x) || x === 0);
    this.setState({ initialArray: array });
  };

  sort = () => {
    console.log('SORT!');
  };

  render() {
    return (
      <Container>
        <h1>{'MERGE SORT'}</h1>
        <ArrayPrompt
          placeholder={'1, 2, 3, ... n'}
          onChange={this.onInputChange}
        />
        <Button onClick={this.sort} />
        <ArrayDisplay array={this.state.initialArray} />
      </Container>
    );
  }
}
