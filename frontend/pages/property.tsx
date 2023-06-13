import React from 'react';
import { Container, Image, ImageContainer, ActionButton } from '../styles/pages/property';
import { Button } from "@taikai/rocket-kit";

export default function Property() {
  function buyProperty() { }
  function listProperty() { }
  function sellProperty() { }
  return (
    <Container>
      <ImageContainer>
        {/* <Image src="/sea_view.png" alt="" /> */}

      </ImageContainer>
      <Button
        ariaLabel="Buy"
        className="button"
        color="orange"
        value="Buy"
        variant="solid"
        action={() => buyProperty()}
      />
      <Button
        ariaLabel="List"
        className="button"
        color="green"
        value="List"
        variant="solid"
        action={() => listProperty()}
      />
      <Button
        ariaLabel="Sell"
        className="button"
        color="red"
        value="Sell"
        variant="solid"
        action={() => sellProperty()}

      />
      <ActionButton onClick={() => buyProperty()} >Buy</ActionButton>
      <ActionButton onClick={() => listProperty()}>List</ActionButton>
      <ActionButton onClick={() => sellProperty()}>Sell</ActionButton>
    </Container>
  );
}
