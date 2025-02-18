import { Link } from "react-router-dom";
import { navitem } from "./navbarItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:pr-4 sm:py-5 flex  w-full sm:w-[100%] md:h-[100px] items-center justify-between mx-auto">
      <div className="md:flex-1 flex py-3 sm:py-0 w-full sm:mr-8 justify-between z-50 items-center">
        <div className="md:bg-[#f2f3f6] sm:w-[80%] sm:py-8 items-center text-center">
          <h2 className="sm:text-3xl uppercase">Renover</h2>
        </div>
        <div className="sm:hidden">
          {!open ? (
            <GiHamburgerMenu onClick={() => setOpen(!open)} />
          ) : (
            <RiCloseLargeLine onClick={() => setOpen(!open)} />
          )}
        </div>
      </div>
      <div
        className={`${
          open
            ? "translate-x-0 top-4"
            : "-translate-x-full sm:-translate-x-0 top-4"
        } sm:block absolute sm:static transition-transform duration-500 w-full sm:w-auto`}
      >
        <div className="flex flex-col md:flex-1 bg-gray-300 sm:bg-white px-5 sm:static lg:z-50 mt-10 sm:flex-row gap-7 sm:items-center sm:mt-0 justify-start sm:justify-center items-start w-full">
          {navitem.map((nav, index) => (
            <div
              className="text-start uppercase font-bold md:border-0 sm:border-0 w-full relative"
              key={index}
            >
              <div className="flex sm:hover:text-black text-[#969595] items-center border-b-2 sm:border-0 justify-center gap-1 group relative w-full">
                <div className="w-full">
                  <Link to={nav?.path || "#"}>{nav?.Route}</Link>
                  <div className="h-[1px] mt-2 w-full"></div>
                </div>

                {(index === 0 || index === 4) && (
                  <IoIosArrowDown className="cursor-pointer" />
                )}

                {(index === 0 || index === 4) && (
                  <div className="absolute top-6 left-0 w-[120px] sm:z-50 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-5 group-hover:translate-y-0">
                    <div className="flex flex-col p-2 space-y-2 bg-gray-400">
                      <Link to="#">Home</Link>
                      <Link to="#">About</Link>
                      <Link to="#">Services</Link>
                      <Link to="#">Contact</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex sm:flex-1 mx-auto">
        <div className="hidden sm:block md:block justify-center text-center w-full">
          <div className="flex justify-end items-center space-x-7 text-xl text-[#a4a8b3] hover:text-black">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
