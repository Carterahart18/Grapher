import React from 'react';

import { Container, Element } from './styles';

interface Props {
  array?: number[];
}

export default function ArrayDisplay(props: Props) {
  return (
    <Container>
      {props.array &&
        props.array.map((value, key) => <Element key={key}>{value}</Element>)}
    </Container>
  );
}
