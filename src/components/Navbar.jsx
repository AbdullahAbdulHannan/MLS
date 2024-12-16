import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 pt-5">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={'/'} className="flex items-center hover:bg-yellow-600 hover:text-blue-400 px-4 py-2 rounded-md">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={'/services'} className="flex items-center hover:bg-yellow-600 hover:text-blue-400 px-4 py-2 rounded-md">
        Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={'/contact'} className="flex items-center hover:bg-yellow-600 hover:text-blue-400 px-4 py-2 rounded-md">
          Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to={'/career'} className="flex items-center hover:bg-yellow-600 hover:text-blue-400 px-4 py-2 rounded-md">
          Career
        </Link>
      </Typography>
    </ul>
  );
 
  return (
    <div className="overflow-hidden">
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#0D47A1] border-[#0D47A1] text-white  shadow-md">
        <div className="flex items-center justify-between ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-extrabold text-3xl pt-5 px-5"
          >
            MLS
            {/* <div className="flex">

            <span>MLS</span>
            <div className=" border-l-4 border-l-white h-[20px] "></div>
            </div> */}
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          
        </Collapse>
      </Navbar>
      
    </div>
  );
}