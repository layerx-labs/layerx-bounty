import React from 'react';
import { Container, Line } from './styles';

export default function CloseButton() {
  return (
    <Container>
      <Line rotate={45} />
      <Line rotate={-45} />
    </Container>
  );
}