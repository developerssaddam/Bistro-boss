import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto mb-14">
      <SectionTitle subtitle={"What Our Clients Say"} title={"TESTIMONIALS"} />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="text-center px-16">
              <div className="flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 180, marginBottom: "15px" }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-5xl mb-5" />
              </div>
              <p className="text-sm font-medium text-gray-500 mb-2">
                {review.details}
              </p>
              <h2 className="text-xl font-semibold uppercase text-[#BB8506]">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
