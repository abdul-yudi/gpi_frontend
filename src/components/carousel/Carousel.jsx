import React, { useState } from 'react';
import {
  Col,
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';

import './Carousel.css';

const CarouselSlider = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);
  
    const [animating, setAnimating] = useState(false);
  
    const items = [
        {
            caption: 'Slide One',
            src: '/assets/images/placeholder.jpg',
        },
        {
            caption: 'Slide Two',
            src: '/assets/images/placeholder2.jpg',
        },
        {
            caption: 'Slide One',
            src: '/assets/images/placeholder3.jpg',
        },
    ];
  
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img className='w-100' src={item.src} alt={item.caption} />
            </CarouselItem>
        );
    });
  
    return (
        <Col md="12" className="carousel-wrapper mb-5">
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </Col >
    );
}

export default CarouselSlider;