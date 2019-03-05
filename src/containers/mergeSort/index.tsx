import React, { Component } from 'react';
import Apps from '../../util/apps';

import ArrayDisplay from '../../components/arrayDisplay';
import ArrayPrompt from '../../components/arrayPrompt';
import Button from '../../components/button';
import { ArrayDisplayRow, Container, Header, InputContainer } from './styles';

interface Props {
  setApp: (app: Apps) => void;
}

interface State {
  initialArray: number[];
  arraySteps: number[][][];
}

export default class MergeSort extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialArray: [],
      arraySteps: [[[]]],
    };
  }

  /**
   * Reads array input, splits on commas, converts to ints and only accepts
   * valid numbers
   * @param value the value from the text field to parse
   */
  onInputChange = (value: string) => {
    let array: number[] = value
      .split(',')
      .map(x => parseInt(x))
      .filter(x => Boolean(x) || x === 0);
    this.setState({ initialArray: array, arraySteps: [[[]]] });
  };

  /**
   * @param arrayList the initial array divided into a list of subarrays
   * @return true is any array in the input is 2 or larger
   */
  canStillDivide = (arrayList: number[][]): boolean => {
    return arrayList
      .map(array => array.length > 1)
      .reduce(
        (prevArrayCanBeDivided, currArrayCanBeDivided) =>
          prevArrayCanBeDivided || currArrayCanBeDivided,
        false
      );
  };

  /**
   * @param arrayList the initial array divided into a list of subarrays
   * @return true if there is more than one array in the input list
   */
  canStillMerge = (arrayList: number[][]): boolean => {
    return arrayList.length > 1;
  };

  /**
   * @param arrayList the initial array divided into a list of subarrays
   * @return A list of arrays where each array in the input of size 2 or more has been divided
   */
  divideArrays = (arrayList: number[][]): number[][] => {
    let arrayState: number[][] = [];
    for (let array of arrayList) {
      const middleIndex = Math.floor(array.length / 2);
      if (middleIndex > 0) {
        arrayState.push(array.slice(0, middleIndex));
        arrayState.push(array.slice(middleIndex, array.length));
      } else {
        arrayState.push(array);
      }
    }

    return arrayState;
  };

  /**
   * @param array1 an array to merge
   * @param array2 an array to merge
   * @return A new array with array1 and array 2 sorted
   */
  mergeArrays = (array1: number[], array2: number[]): number[] => {
    if (array1 && !array2) {
      return array1;
    } else if (!array1 && array2) {
      return array2;
    }
    let result = [];
    let i = 0;
    let j = 0;
    while (i < array1.length || j < array2.length) {
      if (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
          result.push(array1[i]);
          i++;
        } else {
          result.push(array2[j]);
          j++;
        }
      } else if (i < array1.length) {
        result.push(array1[i]);
        i++;
      } else if (j < array2.length) {
        result.push(array2[j]);
        j++;
      }
    }
    return result;
  };

  /**
   * @param arrayList the initial array divided into a list of subarrays
   * @return a new arrayList where each pair of arrays have been merged
   */
  mergeArrayList = (arrayList: number[][]): number[][] => {
    let arrayState: number[][] = [];
    for (let i = 0; i < arrayList.length; i += 2) {
      let array1 = arrayList[i];
      let array2 = arrayList[i + 1];
      arrayState.push(this.mergeArrays(array1, array2));
    }
    return arrayState;
  };

  sortArray = () => {
    const { initialArray: init } = this.state;
    let arrayList: number[][] = [];
    arrayList[0] = init;
    this.setState({
      arraySteps: [[[]]],
    });

    while (this.canStillDivide(arrayList)) {
      arrayList = this.divideArrays(arrayList);
      let arraySteps = this.state.arraySteps;
      arraySteps.push(arrayList);
      this.setState({ arraySteps: arraySteps });
    }

    while (this.canStillMerge(arrayList)) {
      arrayList = this.mergeArrayList(arrayList);
      let arraySteps = this.state.arraySteps;
      arraySteps.push(arrayList);
      this.setState({ arraySteps: arraySteps });
    }
  };

  generateRandomArray = () => {
    let array: number[] = [];
    let length: number = Math.ceil(Math.random() * 4 + 4);
    for (let i = 0; i < length; i++) {
      array[i] = Math.ceil(Math.random() * 200 - 100);
    }
    this.setState({ initialArray: array, arraySteps: [[[]]] });
  };

  render() {
    const { initialArray, arraySteps } = this.state;
    return (
      <Container>
        <Header>{'MERGE SORT'}</Header>
        <InputContainer>
          <ArrayPrompt
            placeholder={'1, 2, 3, ... n'}
            onChange={this.onInputChange}
          />
          <Button onClick={this.sortArray} text={'Sort'} />
          <Button onClick={this.generateRandomArray} text={'Randomize'} />
        </InputContainer>

        <ArrayDisplay array={initialArray} />
        {arraySteps &&
          arraySteps.map((step, key) => {
            return (
              <ArrayDisplayRow key={key}>
                {step.map((array, innerKey) => (
                  <ArrayDisplay array={array} key={innerKey} />
                ))}
              </ArrayDisplayRow>
            );
          })}
      </Container>
    );
  }
}
