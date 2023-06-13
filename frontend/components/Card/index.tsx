import React from 'react';
import {
  Container,
  Photo,
  Name,
  Price,
  ImageContainer,
  LastLine,
  Shares,
  Location,
  Image
} from './styles';
import { FaEthereum, FaHeart, FaCamera } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

interface IProps {
  image: string;
  name: string;
  price: number;
  location: string;
  shares: string;
}

export default function Card({
  image,
  name,
  price,
  location,
  shares,
}: IProps) {
  return (
    <Container>
      <ImageContainer image={image}>
        <Image src={image} alt="image" />
        {/* <Photo><FaCamera /> 18</Photo> */}
        <FaHeart />
      </ImageContainer>
      <Name>{name}</Name>
      <Location><MdLocationOn /> {location}</Location>
      <LastLine>
        <Price><FaEthereum /> {price}</Price>
        <Shares>{shares}</Shares>
      </LastLine>
    </Container>
  );
}
