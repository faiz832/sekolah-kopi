import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Img1 from "../assets/images/img14.jpg";
import Img2 from "../assets/images/img15.png";
import Img3 from "../assets/images/img16.png";
import Img4 from "../assets/images/img11.png";

const images = [Img1, Img2, Img3, Img4];

export default function Slider() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        className="w-full"
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile
          640: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[500px] aspect-square mx-auto">
              <img src={img} alt={`slider-${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
