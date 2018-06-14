
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
                        <h3>Part at weekend</h3>
                        <p>Got boared from regular life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="slider" src="./images/item_First-headlinersannounced_16443.jpg" />
                    <Carousel.Caption>
                        <h3>Get Ready for Beach</h3>
                        <p>Relax anc chill.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="slider" src="./images/item_ostendbeach_36937.jpg" />
                    <Carousel.Caption>
                        <h3>Rock concert</h3>
                        <p>Want to have some musical fun.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}