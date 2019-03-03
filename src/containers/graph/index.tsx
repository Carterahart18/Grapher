import React from 'react';
import { Canvas } from './styles';

interface Props {
  width: number;
  height: number;
}

export default function Graph({ width, height }: Props) {
  return <Canvas width={width} height={height} />;
}
