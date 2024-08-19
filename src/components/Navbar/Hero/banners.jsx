import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
const bannerImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xWYf1z4pFuMlqaY84cwK-W9g2HqcHK3kjQ&s";

const Banners = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center items-center
                    py-12 sm:py-0"
    >
      <div className="container pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* items centre */}
          <div>
            <img
              src={bannerImage}
              alt=""
              className="max-w-[400px] h-[500px] w-full mx-auto
                               drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale upto 50% off
              </h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 pt-4 tracking-wide leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus sed tempora nemo quam pariatur reprehenderit.
            </p>
            <div className="flex flex-col pt-4 gap-4">
              <div className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                                      bg-violet-100" />
                <p>Quaity Products</p>
              </div>

              <div className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4
                                       rounded-full bg-orange-100"/>
                                       <p>
                                        Fast Delivery
                                       </p>
              </div>
              <div className="flex items-center gap-4" >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4
                                       rounded-full bg-green-100"/>
                                       <p>
                                        Easy Payment Method
                                       </p>
              </div>

              <div className="flex items-center gap-4" >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4
                                       rounded-full bg-yellow-100"/>
                                       <p>
                                        Get Offers
                                       </p>
              </div>
           
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
