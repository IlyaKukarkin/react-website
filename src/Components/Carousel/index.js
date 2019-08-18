import React from 'react';
import { arrayOf, string, exact, number } from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import Button from 'react-bootstrap/Button';

import back1 from 'Data/images/back1.jpg';
import back2 from 'Data/images/back2.jpg';
import back3 from 'Data/images/back3.jpg';

const getImage = imageName => {
    switch (imageName) {
        case "back1":
            return back1;
        case "back2":
            return back2;
        case "back3":
            return back3;
        default:
            return back1;
    }
}

const MyCarousel = props => (
    <Carousel>
        {props.data.map((item) =>
            <CarouselItem key={item.id}>
                <img
                    className="d-block w-100"
                    src={getImage(item.image)}
                    alt=""
                />
                <CarouselCaption>
                    <h3>{item.header}</h3>
                    <p>{item.text}</p>
                    <Button variant="outline">{item.buttonText}</Button>
                </CarouselCaption>
            </CarouselItem>
        )}
    </Carousel>
);

MyCarousel.propTypes = {
    data: arrayOf(exact({
        id: number.isRequired,
        image: string.isRequired,
        header: string.isRequired,
        text: string.isRequired,
        buttonText: string.isRequired
    })).isRequired
}

export default MyCarousel