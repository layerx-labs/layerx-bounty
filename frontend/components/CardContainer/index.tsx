import React from 'react';
import { Container } from './styles';
import Card from '../Card';


export default function CardContainer() {
  return (
    <Container>
      <Card
        image='/sea_view.png'
        name='3 bedrooms in a beautiful house'
        price={10.3}
        location='Málaga - España'
        shares='1/10'
      />
      <Card
        image='/living_room.png'
        name='4 bedrooms in a luxury condominium'
        price={15.7}
        location='Mar Bella - España'
        shares='0/10'
      />
      <Card
        image='/balcon.png'
        name='4 bedrooms with paronamic view'
        price={22.8}
        location='Barcelona - España'
        shares='8/10'
      />
    </Container>
  );
}
