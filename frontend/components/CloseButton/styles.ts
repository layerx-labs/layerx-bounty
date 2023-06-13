import React from 'react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
`;

export const Line = styled.span<{ rotate: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: black;
  transform-origin: center center;
  transition: transform 0.3s;

  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(${props.rotate}deg);
    `}
`;

