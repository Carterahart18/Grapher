import React, { Component } from 'react';

import { Prompt } from './styles';

interface Props {
  id: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export default function ArrayPrompt(props: Props) {
  const onChange = (event: any) => {
    props.onChange(event.target.value);
  };

  return <Prompt id={props.id} placeholder={props.placeholder} onChange={onChange} />;
}
