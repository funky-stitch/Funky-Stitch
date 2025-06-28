import React, { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import '../assets/styles/HeroSection.css';
import hero1 from '../assets/hero-1.jpg'; 
import hero2 from '../assets/hero-2.jpg'; 

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Summer Collection 2025',
      subtitle: 'Discover our new arrivals',
      description: 'Up to  10% off on selected items',
      buttonText: 'Shop Now',
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero1})`,

    },
    {
      title: 'Limited Edition',
      subtitle: 'Exclusive designs for you',
      description: 'Only available this season',
      buttonText: 'Explore',
background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero2})`,    },
    {
      title: 'Premium Quality',
      subtitle: 'Crafted with perfection',
      description: 'Experience luxury like never before',
      buttonText: 'Discover',
      background:
        "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className='hero-section'>
      {/* Main Slides */}
      <div className='hero-slides'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: slide.background }}
          >
            <Container className='hero-content'>
              <div className='slide-text'>
                <h2 className='slide-title'>{slide.title}</h2>
                <h3 className='slide-subtitle'>{slide.subtitle}</h3>
                <p className='slide-description'>{slide.description}</p>
                <Button variant='light' size='lg' className='slide-button'>
                  {slide.buttonText}
                </Button>
              </div>
            </Container>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className='slide-indicators'>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className='slide-nav prev'
        onClick={() =>
          setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        aria-label='Previous slide'
      >
        ❮
      </button>
      <button
        className='slide-nav next'
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        aria-label='Next slide'
      >
        ❯
      </button>
    </section>
  );
};

export default HeroSection;
