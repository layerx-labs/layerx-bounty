import React from 'react';
import styled from 'styled-components';

export const Container = styled.div<{ active: boolean }>`
  display: flex;
  height: 100vh;
  background: #rgba(15,54,106);
`;

export const Menu = styled.div`
  flex: 1;
  background: rgba(15,54,106);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
`;

export const MenuItem = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  /* transition: background 0.3s; */

  &:hover {
    /* background: #d1d1d1; */
  }
`;

export const ImageContainer = styled.div`
  /* flex: 2.5; */
  /* background: #ccc; */
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;