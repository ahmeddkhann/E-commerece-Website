import React from "react";
import { FaStar } from "react-icons/fa6";

const image1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ln1k1k8wqgk75GzIwFED1CTEPJxnGePyVw&s";
const image2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_BfdKvsrApXyK5Mwdl3Y5mI6WymkvKqM8A&s";
const image3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8xGCBTG_HIDSoTEXV4kE4Xd7O3eOrXR-Iw&s";

const ProductsData = [
  {
    id: 1,
    title: "Casual Wear",
    img: image1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laboriosam reiciendis. ",
  },
  {
    id: 2,
    title: "Printed Shirts",
    img: image2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laboriosam reiciendis. ",
  },
  {
    id: 3,
    title: "Women Shirts",
    img: image3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laboriosam reiciendis.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}

        <div
          data-aos="zoom-in"
          className="text-center mb-10 max-w-[600px] mx-auto data"
        >
          <p className="text-3xl text-secondary">Top Rated Products for you</p>
          <h1 className="text-2xl font-bold sm:text-black text-white">
            Best Products
          </h1>
          <p className="text-xs text-white sm:text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            similique minima adipisci?
          </p>
        </div>

        {/* body section */}
        <div className="flex flex-wrap justify-center gap-20">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col bg-white hover:bg-black/80 items-center space-y-3
       text-black hover:text-white max-w-xs rounded-lg shadow-lg p-4"
              data-aos="fade-up "
              data-aos-delay={data.aosDelay}
            >
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md transform "
              />
              <div className="text-center ">
                <div className="w-full justify-center items-center gap-1 flex">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>
                <h3 className="font-semibold pt-3 ">{data.title}</h3>
                <p className="text-sm pt-1">{data.description}</p>
                <button
                  className="bg-secondary hover:scale-105 duration-300 text-white
                              py-1 px-4 rounded-full mt-4 group-hoer:bg-white
                              group-hover:text-secondary"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
