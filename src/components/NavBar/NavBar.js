import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#00001e');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('#000000');
      } else {
        setShadow(false);
        setNavBg('#000010');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-lg shadow-gray-700 z-[100] ease-in-out duration-300 '
          : 'fixed w-full h-20 z-[100] '
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <a href="/">
          <div className="text-white flex">
            <h3 className="text-xl">Front-End-Task</h3>
          </div>
        </a>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-7 text-sm uppercase text-white  hover:border-b">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-7 text-sm uppercase text-white hover:border-b">
              <Link to="/product">Product</Link>
            </li>
            <li className="ml-7 text-sm uppercase text-white hover:border-b">
              <Link to="/update">Update</Link>
            </li>
            <li className="ml-5 lg:ml-64 2xl:ml-[33rem]  text-sm uppercase text-white hover:text-white">
              <a
                href="https://www.linkedin.com/in/md-tanvir-hassan-490253240/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-blue-500 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://www.facebook.com/tanvirhassanmim"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-blue-500 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaFacebook />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-black hover:text-black">
              <a
                href="https://github.com/MdTanvirHassan"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-purple-100 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="mailto:tanvirtamim72@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-red-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
              </a>
            </li>
            <li className="ml-5 text-sm uppercase text-white hover:text-white">
              <a
                href="https://personal-portfolio-next-7ny3rhpx1-mdtanvirhassan.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full bg-green-400 p-3 -mt-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <TfiWorld />
                </div>
              </a>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="md:hidden rounded-full bg-gray-600 p-2"
          >
            <AiOutlineMenu size={25} className="text-white" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      
        
    </div>
  );
};

export default Navbar;
