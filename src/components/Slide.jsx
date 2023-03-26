import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as hi2 from 'react-icons/hi2'

  const CustomSlider = ({ children, settings }) => (
    <Slider {...settings}>
      {children}
    </Slider>
  );

  const rightArrow = ({ className, style, onClick }) => (
  <button onClick={onClick} className={className} style={{...style}}>
    <hi2.HiChevronRight />
  </button>
);

const leftArrow = ({ className, style, onClick }) => (
  <button onClick={onClick} className={className} style={{...style, backgroundColor: 'black'}}>
    <hi2.HiChevronLeft />
  </button>
);

export const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <rightArrow />,
    prevArrow: <leftArrow />,
  };
  
  const images = [
    "https://img.zoechip.cc/resize/1278x768/cd/73/cd73896af8d8e87473f38aa1c0bb1888/cd73896af8d8e87473f38aa1c0bb1888.jpg",
    "https://img.zoechip.cc/resize/1278x768/82/fb/82fb5fb5151d07be758eabfe4c20b70e/82fb5fb5151d07be758eabfe4c20b70e.jpg",
    "https://img.zoechip.cc/resize/1278x768/71/54/715407760baa697b9fe3bed477a2dfcc/715407760baa697b9fe3bed477a2dfcc.jpg",
  ];

  return (  
    <CustomSlider settings={settings}>
      {images.map((image, i) => (
        <div key={i} className=''>
          <img src={image} className='h-[70vh] w-full object-cover object-top' />
        </div>
      ))}  
    </CustomSlider>
);
};