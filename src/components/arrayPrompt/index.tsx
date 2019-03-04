import React, { Component } from 'react';

import { Prompt } from './styles';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

export default function ArrayPrompt(props: Props) {
  const onChange = (event: any) => {
    props.onChange(event.target.value);
  };

  return <Prompt placeholder={props.placeholder} onChange={onChange} />;
}
