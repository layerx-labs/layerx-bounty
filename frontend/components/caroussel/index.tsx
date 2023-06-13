import React from 'react';
import { Slideshow } from "@taikai/rocket-kit";
import { CarousselWrapper } from './styles';

const Caroussel = () => {

  return (
    <CarousselWrapper>
      <Slideshow
        autoPlay
        dynamicHeight
        interval={5000}
        showArrows
        slideSelected={0}
        slidesNumber={3}
        stopOnHover
      >
        <img
          alt="img"
          src="/sea_view.png"
        // src="/images/sea_view.png"
        />
        <img
          alt="img"
          src="/living_room.png"
        // src="/images/living_room.png"
        />
        <img
          alt="img"
          src="/balcon.png"
        // src="/images/balcon.png"
        />
      </Slideshow>
    </CarousselWrapper>
  );
}

export default Caroussel;