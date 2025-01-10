import React from "react";
import { BsFacebook,  BsTwitterX } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
//   const {pathname}=useLocation()
  const email = "khalidahmadzai@multinationallanguage.services";

  const mailtoLink = `mailto:${email}`;
  return (
    <>
      <footer className="bg-blue-900 overflow-hidden">
        <div className="md:grid md:grid-cols-3 gap-16 mx-5 md:mx-20  md:mb-10 mt-5 ">
          <div className=" md:ms-5 md:me-10 md:mt-5">
            <h3 className=" text-3xl text-blue-100">MLS</h3>
            <p className=" text-white mt-5">
            Thank You for Visiting MLS! <br />
             We’re here to help with professional interpretation and translation services tailored to your needs.{" "}
              
            </p>
          </div>
          <div className=" md:ms-5 md:me-10 mt-5">
            <h3 className=" text-3xl text-blue-100">Useful Links</h3>
            <ul className=" text-white text-lg mt-5">
            
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
              <Link to={"/"}>Home</Link>
              </li>
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
              <Link to={"/services"}>Our Services</Link>
              </li>
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
              <Link to={"/career"}>Career Oppurtunities</Link>
              </li>
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
              <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className=" md:-ms-8 md:me-10 mt-5">
            <h3 className=" text-3xl text-blue-100"> Connect </h3>
            <ul className="text-white space-y-4 mt-5">
              {/* Phone */}
              <li>
                <a 
                  href="tel:+447443132008" 
                  className="flex items-center hover:text-yellow-500 transition-colors duration-200"
                >
                  <MdPhone className="flex-shrink-0 mr-2 text-xl" />
                  <span>+447443132008</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a 
                  href={mailtoLink}
                  className="group flex items-start hover:text-yellow-500 transition-colors duration-200"
                >
                  <IoIosMail className="flex-shrink-0 mr-2 text-xl mt-1" />
                  <span className="break-all">{email}</span>
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start">
                <FaLocationDot className="flex-shrink-0 mr-2 text-xl mt-1" />
                <span className="break-words">
                  14 Wheelers Close, Nazeing, Waltham Abbey, England, EN9 2RA
                </span>
              </li>
            </ul>

            <div className=" text-2xl flex md:mt-10 text-white mb-3">
            <a href="https://www.facebook.com/share/152mbM8ppg/?mibextid=wwXIfr" target="_blank" aria-label="Facebook">
              <div className="md:me-10 me-3 hover:text-blue-800 hover:bg-white hover:border-white border rounded-full border-slate-500 bg-slate-500 p-3 ">
                <BsFacebook />
              </div>
              </a>
              <a
                href="https://www.linkedin.com/company/multinational-language-services/"
                target="_blank"
               aria-label="Linkedin"
              >
                <div className="md:me-10 me-3 hover:text-blue-900 hover:bg-white hover:border-white border rounded-full border-slate-500 bg-slate-500 p-3 ">
                  <GrLinkedin />
                </div>
              </a>
              <a href="https://x.com/services171781?s=11&t=FBwD9YDuHkTei23BlI4ycA" target="_blank" aria-label="Twitter">
                <div className="md:me-10 me-3 hover:text-black hover:bg-white hover:border-white border rounded-full border-slate-500 bg-slate-500 p-3 ">
                  <BsTwitterX />
                </div>
              </a>
            </div>
          </div>

        </div>
        <div className="container mx-auto text-center sm:mt-4 px-4 text-white mb-5">
          <p>&copy; {new Date().getFullYear()} MLS - Multinational Language Services | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;