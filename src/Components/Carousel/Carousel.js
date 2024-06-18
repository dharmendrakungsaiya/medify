import React from "react";
import "../Carousel/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image1 from "../../Images/Offerimage1.png";
import Image2 from "../../Images/Offerimage2.png";


const Carousel = () => {
    return(
        <div className="carousel">
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={Image1} alt="image1"/></SwiperSlide>
      <SwiperSlide><img src={Image1} alt="image1"/></SwiperSlide>
      <SwiperSlide><img src={Image2} alt="image2"/></SwiperSlide>
    </Swiper>
     
        </div>
    )
}

export default Carousel;