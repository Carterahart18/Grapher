import React, { Component } from 'react';
import { Button } from './styles';

interface Props {
  onClick?: () => void;
}

export default function ButtonComponent(props: Props) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return <Button onClick={onClick}>{'Sort'}</Button>;
}
