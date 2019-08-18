import React from 'react';

import Carousel from 'Components/Carousel';

import CarouselData from 'Data/mock-data/carousel.json'

const CarouselBlock = () => (
    <Carousel data={CarouselData.data}/>
);

export default CarouselBlock