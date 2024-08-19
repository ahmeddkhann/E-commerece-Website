import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    id: 1,
    img:
      "https://img.freepik.com/free-photo/woman-with-shopping-bags-jumping_23-2148883713.jpg",
    title: "Upto 50% off on all Women wear",
    description:
      "Grab the Opportunity! 50% off on all women's wear. Visit us and get the best possible outfits.",
  },
  {
    id: 2,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdYR9P9s5h1rpPm96h0RbjHJ8740fqjol7w&s",
    title: "BUY 3 GET 1 FREE",
    description:
      "Big Oppurtunity! By buying 3 you will get 1 for FREE",
  },
  {
    id: 3,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyBUHlf28sdgk_-zZfPEj8z7ZHPSDnW-L1g&s",
    title: "SUMMER STOCK SALE",
    description:
      "Big SALE on Summer Stock! Come and get on cheap Price.",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust autoplay speed as per your preference
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-blue-100">
      {/* Background Pattern */}
      <div className="h-[700px] w-[700px] bg-orange-300 absolute -top-1/2 right-40 rounded-3xl rotate-45 -z-9"></div>

      {/* Slider Section */}
      <Slider {...settings}>
        {images.map((data) => (
          <div key={data.id} className="relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Text content section */}
                <div className="order-2 sm:order-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4"
                  data-aos="zoom-out" data-aos-once="true"data-aos-duration="500">
                    {data.title}
                  </h1>
                  <p className="text-[20px] text-black mb-4 font-semibold]
                  " data-aos="fade-up" data-aos-delay="100"data-aos-duration="500" >{data.description}</p>
                  <div 
                  data-aos="fade-up" data-aos-delay="100"data-aos-duration="500"
                  >
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Order Now
                  </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2">
                <div
                data-aos = "zoom-in"
                data-aos-once="true"
                className="relative z-10"
                >
                  <img
                    src={data.img}
                    alt=""
                    className=" w-[240px] h-[300px] sm:w-[320px] sm:h-[400px] 
                                pb-[80px] sm:pl-[40px] lg:scale-120 object-contain"
                  />
                 </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
