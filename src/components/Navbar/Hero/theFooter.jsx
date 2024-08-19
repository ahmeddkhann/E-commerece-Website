import React from "react";
const bgImage =
  "data:image/jpeg;base64,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";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const footerImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgU2G4SxkXtKK7GJVrfM61jv71AF_1VBThVA&s";
const BannerImg = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div data-aos="zoom-in" className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3
                           flex items-center gap-3"
            >
              <img className="w-28" src={footerImage} alt="" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              tempora asperiores incidunt dolorem mollitia, quibusdam fugiat
              exercitationem similique inventore repellendus.
            </p>
          </div>
          {/* Footer Links */}

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer
                        hover:text-secondary hover:translate-x-1
                         duration-300 text-white"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                   Links
                </h1>
                <ul>
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer
                        hover:text-secondary hover:translate-x-1
                         duration-300 text-white"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="ml-20">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6 ">
                <div className="flex">
                  <div>
                    <FaLocationArrow></FaLocationArrow>
                  </div>
                  <p>Abbottabad</p>
                </div>
                <div className="flex pt-2">
                  <div>
                    <FaMobileAlt />
                  </div>
                  <p>+92 1234567890</p>
                </div>


                <div className="flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
