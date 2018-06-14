
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "../../assets/images/item_Brand-newsite-live_32007.jpg";
import "../../assets/images/item_First-headlinersannounced_16443.jpg";
import "../../assets/images/item_ostendbeach_36937.jpg";

export const Slider = (props) => {

    return (
        <div className="screen-slider container">
            <Carousel>
                <Carousel.Item>
                    <img alt="slider" src="./images/item_Brand-newsite-live_32007.jpg" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="slider" src="./images/item_First-headlinersannounced_16443.jpg" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="slider" src="./images/item_ostendbeach_36937.jpg" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}