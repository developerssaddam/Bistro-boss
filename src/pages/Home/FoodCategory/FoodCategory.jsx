import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import "./FoodCategory.css";

const FoodCategory = () => {
  return (
    <div className="my-14">
      <SectionTitle
        subtitle={"From 11:00am to 10:00pm"}
        title={"ORDER ONLINE"}
      />

      <div className="food_category max-w-5xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="relative" src={slide1} alt="" />
            <p className="text-sm absolute bottom-3 left-1 md:left-1/3 md:bottom-6 md:text-lg lg:bottom-10 lg:left-1/3 lg:text-xl uppercase text-white font-medium">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="relative" src={slide2} alt="" />
            <p className="text-sm absolute bottom-3 left-1 md:left-1/3 md:bottom-6 md:text-lg lg:bottom-10 lg:left-1/3 lg:text-xl uppercase text-white font-medium">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="relative" src={slide3} alt="" />
            <p className="text-sm absolute bottom-3 left-1 md:left-1/3 md:bottom-6 md:text-lg lg:bottom-10 lg:left-1/3 lg:text-xl uppercase text-white font-medium">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="relative" src={slide4} alt="" />
            <p className="text-sm absolute bottom-3 left-1 md:left-1/3 md:bottom-6 md:text-lg lg:bottom-10 lg:left-1/3 lg:text-xl uppercase text-white font-medium">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img className="relative" src={slide1} alt="" />
            <p className="text-sm absolute bottom-3 left-1 md:left-1/3 md:bottom-6 md:text-lg lg:bottom-10 lg:left-1/3 lg:text-xl uppercase text-white font-medium">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FoodCategory;
