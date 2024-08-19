import React, { useState } from "react";
import { FaCartArrowDown, FaCaretDown } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const Navbar = () => {
  const [popup, setPopup] = useState(false); // useState hook inside the component

  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4, // Corrected id values to avoid duplicates
      name: "Mens Wear",
      link: "/#",
    },
    {
      id: 5, // Corrected id values to avoid duplicates
      name: "Electronics",
      link: "/#",
    },
  ];

  const DropDownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Sellings",
      link: "/#",
    },
    {
      id: 3,
      name: "Top-Rated",
      link: "/#",
    },
  ];


    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
    
    

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
      {/* Popup */}
      <div className="d-flex justify-contencot-center align-items-center vh-100">
  <Modal
    data-aos="zoom-out " 
   className="text-center border-2 bg-orange-400 p-10" 
  isOpen={popup} 
  toggle={() => setPopup(!popup)} centered>
    <ModalHeader toggle={() => setPopup(!popup)}>
      <div className="text-3xl text-white">
      Place Your Order
      </div>
    </ModalHeader>
    <ModalBody>
      <div>
        <div>
          <span className="text-white mr-3 text-2xl">Name:</span>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>

        <div className="mt-3 text-white ">
          <span className="mr-3 text-2xl">Email:</span>
          <input type="email" className="form-control" placeholder="Enter your Email" />
        </div>
        
        <div className="mt-3 text-white">
          <span className="mr-3 text-2xl">Address:</span>
          <input type="text" className="form-control" placeholder="Enter Address" />
        </div>
        
        <div className="mt-3">
          <input type="checkbox" className="form-check-input text-white mr-3 text-2xl" name="terms" id="terms" />
          <label className="form-check-label text-white text-2xl" htmlFor="terms">I agree to the terms and conditions</label>
        </div>
        <div>
      <button className="text-white bg-blue-400 p-2 rounded-xl text-2xl mb-2 mt-4" onClick={toggleVisibility}>
        Order
      </button>

      {isVisible && (
        <div className="text-2xl text-white">
          <h3>Your order has been placed</h3>
        </div>
      )}
    </div>

      </div>
    </ModalBody>
  </Modal>
</div>


      {/* Upper Navbar */}
      <div className="bg-orange-400 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-white text-2xl sm:text-3xl flex gap-2">
              <img
                className="w-28 uppercase"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgU2G4SxkXtKK7GJVrfM61jv71AF_1VBThVA&s"
                alt=""
              />
              Shopsy
            </a>
          </div>
          {/* Search and login button */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="search 🔍"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] justify-between transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
            />
          </div>
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => setPopup(true)}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartArrowDown className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 font-semibold duration-200 hover:text-white hover:bg-orange-400 hover:translate-x-3 hover:scale-10"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="cursor-pointer group relative">
            <a
              href="#"
              className="flex items-center font-semibold gap-[2px] hover:text-white hover:bg-orange-400 duration-200 hover:translate-x-3 hover:scale-10"
            >
              Trending Products
              <span>
                <FaCaretDown className="transition-all group-hover:rotate-180 hover:textbg-blue-600 duration-200 hover:translate-x-3 hover:scale-10" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-primary p-2 text-white font-semibold shadow-md">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="hover:bg-orange-400 inline-block rounded-md"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
