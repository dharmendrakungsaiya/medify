import React from "react";
import "../Team/Team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ahmad from "../../Images/ahmad.png";
import heena from "../../Images/heena.png";
import ankur from "../../Images/ankur.png";


const Team = () => {
    return(
        <>
    <div className="team">
      <h1>Our Medical Specialist</h1>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: 1200 }}
      >
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ahmad} alt="ahmad" />
            </div>
            <div className="data">
              <h1>Dr. Ahemad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ankur} alt="ankur"/>
            </div>
            <div className="data">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={heena} alt="heena" />
            </div>
            <div className="data">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopadics</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ahmad} alt="ahmad" />
            </div>
            <div className="data">
              <h1>Dr. Ahemad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ankur} alt="ankur"/>
            </div>
            <div className="data">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={heena} alt="heena" />
            </div>
            <div className="data">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopadics</p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    {/* <div className="OurTeam-sm">
      <h1>Our Medical Specialist</h1>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: 320 }}
      >
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ahmad} alt="ahmad"/>
            </div>
            <div className="data">
              <h1>Dr. Ahemad Khan</h1>
              <p>Neurologist</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={ankur} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Ankur Sharma</h1>
              <p>Medicine</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="profile-data">
            <div className="profile">
              <img className="image" src={heena} alt="" srcset="" />
            </div>
            <div className="data">
              <h1>Dr. Heena Sachdeva</h1>
              <p>Orthopadics</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div> */}
    </>
    )
}

export default Team;