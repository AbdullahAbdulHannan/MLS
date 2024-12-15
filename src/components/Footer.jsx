import React from "react";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { SiWhatsapp } from "react-icons/si";
import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
//   const {pathname}=useLocation()
  const email = "abcd@gmail.com";

  const mailtoLink = `mailto:${email}`;
  return (
    <>
      <footer className="bg-blue-900 overflow-hidden">
        <div className="md:grid md:grid-cols-3 gap-16 mx-5 md:mx-20  md:mb-10  ">
          <div className=" md:ms-5 md:me-10 md:mt-5">
            <h3 className=" text-3xl text-blue-100">MLS</h3>
            <p className=" text-white mt-5">
            Thank You for Visiting MLS! <br />
             We’re here to help with professional interpretation and translation services tailored to your needs.{" "}
              
            </p>
          </div>
          <div className=" md:ms-5 md:me-10 mt-5">
            <h3 className=" text-3xl text-blue-100">Useful Links</h3>
            <ul className=" text-white text-xl mt-5">
            
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
              <a href="/contact" style={{textDecoration:'none'}}>
  About
</a>
              </li>
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
              <a href="/services"  style={{textDecoration:'none'}}>
  Work
</a>
              </li>
              <li className=" hover:text-yellow-500 hover:underline mb-2 cursor-pointer">
                <a href="/home">Why Choose mls?</a>
              </li>
            </ul>
          </div>
          <div className=" md:ms-5 md:me-10 mt-5">
            <h3 className=" text-3xl text-blue-100"> Connect </h3>
            <ul className=" text-white text-xl mt-5 leading-tight">
              {/* <a href="https://wa.me/923311351274">
                <li className=" hover:text-yellow-500 mb-4 flex">
                  <SiWhatsapp className="me-2 text-yellow-500" />
                  +923311351274
                </li>
              </a> */}
              <a href={mailtoLink} target="_blank">
                <li className=" mb-4 flex text-sm">
                  <IconContext.Provider
                    value={{ color: "white", size: "25px" }}
                  >
                    <div className=" me-2 ">
                      <IoIosMail />
                    </div>
                  </IconContext.Provider>
                  mls@gmail.com
                </li>
              </a>
              <li className=" hover:text-yellow-500 mb-4 flex">
                <FaLocationDot className=" text-white me-2" />
                Pakistan
              </li>
            </ul>

            <div className=" text-2xl flex md:mt-10 text-white mb-3">
            <a href="https://facebook.com/" target="_blank">
              <div className="md:me-10 me-3 hover:text-blue-300 hover:bg-yellow-500 hover:border-black border rounded-full border-slate-500 bg-slate-500 p-3 ">
                <BsFacebook />
              </div>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
              >
                <div className="md:me-10 me-3 hover:text-blue-900 hover:bg-yellow-500 hover:border-black border rounded-full border-slate-500 bg-slate-500 p-3 ">
                  <GrLinkedin />
                </div>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <div className="md:me-10 me-3 hover:text-blue-500 hover:bg-yellow-500 hover:border-black border rounded-full border-slate-500 bg-slate-500 p-3 ">
                  <BsTwitter />
                </div>
              </a>
            </div>
          </div>

        </div>
        <div className="container mx-auto text-center sm:mt-4 px-4 text-white mb-5">
          <p>&copy; 2024 MLS - Multinational Language Services | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;