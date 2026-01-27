import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination]}
    >
      <SwiperSlide>
        <div
          className="hero-slide w-11/12 mx-auto my-3 rounded-xl h-[800px] flex flex-col justify-start md:justify-center items-start px-16 pt-20 md:pt-0 text-left text-white font-semibold cursor-pointer"
          style={{
            background: "url('/slide1.png') center/cover no-repeat",
          }}
        >
          <h2 className="bg-black/40 backdrop-blur-md rounded-md max-w-lg">
            Keep Your Pets Cozy This Winter
          </h2>
          <p className="bg-black/40 backdrop-blur-md rounded-md max-w-lg mt-1">
            Warm, safe, and trusted winter pet care services.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="hero-slide w-11/12 mx-auto my-3 rounded-xl h-[800px] flex flex-col justify-start md:justify-center items-start px-16 pt-20 md:pt-0 text-left text-white font-semibold cursor-pointer"
          style={{
            background: "url('/slide2.png') center bottom /cover no-repeat",
          }}
        >
          <h2 className="bg-black/40 backdrop-blur-md rounded-md max-w-lg">
            Keep Your Pets Cozy This Winter
          </h2>
          <p className="bg-black/40 backdrop-blur-md rounded-md max-w-lg mt-1">
            Warm, safe, and trusted winter pet care services.
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="hero-slide w-11/12 mx-auto my-3 rounded-xl h-[800px] flex flex-col justify-start md:justify-center items-start px-16 pt-20 md:pt-0 text-left text-white font-semibold cursor-pointer"
          style={{
            background: "url('/slide3.png') center bottom /cover no-repeat",
          }}
        >
          <h2 className="bg-black/40 backdrop-blur-md rounded-md max-w-lg">
            Keep Your Pets Cozy This Winter
          </h2>
          <p className="bg-black/40 backdrop-blur-md rounded-md max-w-lg mt-1">
            Warm, safe, and trusted winter pet care services.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
