import React, { useState } from 'react';
import {
  Container,
  Menu,
  MenuItem,
  ImageContainer,
  Image
} from './styles';

interface IProps {
  active: boolean;
}

export default function MenuSection({ active }: IProps) {
  const [selectedOption, setSelectedOption] = useState('image1.png');


  const handleMenuOptionHover = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Container id="section2" active={active} >
      <Menu>
        <MenuItem
          onMouseEnter={() => handleMenuOptionHover('image1.png')}
        // onMouseLeave={() => handleMenuOptionHover('')}
        >
          Option 1
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleMenuOptionHover('image2.png')}
        // onMouseLeave={() => handleMenuOptionHover('')}
        >
          Option 1
        </MenuItem>
        <MenuItem
          onMouseEnter={() => handleMenuOptionHover('image3.png')}
        // onMouseLeave={() => handleMenuOptionHover('')}
        >
          Option 1
        </MenuItem>
      </Menu>

      <ImageContainer>
        <Image src={`/${selectedOption}`} alt="Menu Image" />
      </ImageContainer>

    </Container>
  );
}