import React from 'react';
import Apps from '../../util/apps';

import { Container, Text } from './styles';

interface Props {
  text: string;
  onClick?: () => void;
}

export default function ArrayDisplay(props: Props) {
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const disabled = !props.onClick;

  return (
    <Container onClick={onClick} disabled={disabled}>
      <Text>{props.text}</Text>
    </Container>
  );
}
