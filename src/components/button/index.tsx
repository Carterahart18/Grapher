import React, { Component } from 'react';
import { Button } from './styles';

interface Props {
  text: string,
  onClick?: () => void;
}

export default function ButtonComponent(props: Props) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return <Button onClick={onClick}>{props.text}</Button>;
}
