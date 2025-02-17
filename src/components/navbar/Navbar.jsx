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
    <div className="md:p-4 sm:py-5 flex w-full sm:w-[95%] md:h-[100px] items-center justify-between mx-auto">
      <div className="md:flex-1 flex py-3 sm:py-0 w-full justify-between z-50">
        <h2 className="text-3xl uppercase">Renover</h2>
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
            ? "translate-x-0 top-20"
            : "-translate-x-full sm:translate-x-0 -left-36"
        } sm:block absolute sm:static transition-transform duration-500 w-full sm:w-auto`}
      >
        <div className="flex flex-col md:flex-1 px-5 sm:static lg:z-50 mt-10 sm:flex-row gap-7 sm:items-center sm:mt-0 justify-center">
          {navitem.map((nav, index) => (
            <div
              className="border-b-2 text-[#a4a8b3] hover:text-black uppercase font-bold md:border-0 sm:border-0 w-full flex items-center justify-center mx-auto relative"
              key={index}
            >
              <div className="flex items-center justify-center gap-1 group relative">
                <Link to={nav?.path || "#"}>{nav?.Route}</Link>

                {/* Dropdown Icon */}
                {index === 0 || index === 4 ? (
                  <IoIosArrowDown className="cursor-pointer" />
                ) : null}

                {/* Dropdown Menu */}
                {index === 0 || index === 4 ? (
                  <div className="absolute top-6 left-0 w-[120px] bg-gray-400 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-5 group-hover:translate-y-0">
                    <div className="flex flex-col  p-2 space-y-2">
                      <Link to="#">Home</Link>
                      <Link to="#">About</Link>
                      <Link to="#">Services</Link>
                      <Link to="#">Contact</Link>
                    </div>
                  </div>
                ) : null}
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
