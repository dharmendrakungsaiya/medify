import React from "react";
import "../Carousel/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../../Images/Offerimage1.png";
import image2 from "../../Images/Offerimage2.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

// const Carousel = () => {
//   return (
//     <div className="carousel">
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={30}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[Pagination]}
//       allowTouchMove
//       className="mySwiper"
//     >
//       <SwiperSlide>
//         <img src={image1} alt="image1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image2} alt="image2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image1} alt="image1" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image2} alt="image2" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={image1} alt="image1" />
//       </SwiperSlide>
//     </Swiper>
//     </div>
//   );
// }

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        allowTouchMove
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} alt="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default Carousel;