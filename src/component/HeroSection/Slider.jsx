import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from "../../assests/newgen1.jpg";
import img2 from "../../assests/newgen2.jpg";
import img3 from "../../assests/newgen3.jpg";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="carousel-item"
    >
      <div className="carousel-item">
        <img src={img1} alt="Image 1" className="carousel-image w-full lg:h-full object-cover md:h-screen mt-[77px] h-[300px]" />
      </div>
      <div className="carousel-item">
        <img src={img2} alt="Image 2" className="carousel-image w-full lg:h-full object-cover md:h-screen mt-[77px] h-[300px]" />
      </div>
      <div className="carousel-item">
        <img src={img3} alt="Image 3" className="carousel-image w-full lg:h-full object-cover md:h-screen mt-[77px] h-[300px]" />
      </div>
    </Carousel>  );
}

export default Slider;
