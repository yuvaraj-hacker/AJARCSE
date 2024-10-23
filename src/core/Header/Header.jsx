import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Reset dropdown and menu when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white  p-4">
      <div className="container mx-auto flex justify-between text-black items-center">
        <Link to='/'>
          <div className="flex items-center">
            <p className="text-3xl ">IJDIII</p>
          </div>
        </Link>

        {/* Hamburger Menu for mobile */}
        <div className="block lg:hidden">
          <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={handleMenuClick}
            width={28}
            height={20}
            strokeWidth={3}
            rotate={0}

            borderRadius={2}
            animationDuration={0.5}
          />
        </div>

      
        <nav
          className={`lg:flex lg:space-x-4 ${menuOpen ? 'block ' : 'hidden '}
          flex-col lg:py-0 py-5  lg:flex-row  bg-[#70a2db] lg:bg-transparent lg:text-[#70a2db]  lg:border-none border  text-white absolute lg:static top-16 left-0 w-full text-center lg:w-auto z-50`}
        >
          <Link
            to="/"
            className={` py-2 px-4 block lg:inline-block ${isActive("/") ? "underline underline-offset-4 text-black" : ""}`}
          >
            Home
          </Link>

          {/* Dropdown for Journal Overview */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="  inline-flex py-2  px-4 gap-2 focus:outline-none"
            >
              Journal Overview
              <IoMdArrowDropdown className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} text-2xl duration-300`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute lg:left-0 md:left-96 left-28  lg:text-[#70a2db]  bg-[#70a2db] lg:bg-white  text-white  mt-2 rounded shadow-lg w-56">
                <Link
                  to="/aboutus"
                  className={`block px-4 py-2  ${isActive("/aboutus") ? "underline underline-offset-4 text-black " : ""}`}
                >
                  About
                </Link>
                <Link
                  to="/editorial-board"
                  className={`block px-4 py-2  ${isActive("/editorial-board") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Editorial Board
                </Link>
                <Link
                  to="/peerreview"
                  className={`block px-4 py-2  ${isActive("/peerreview") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Peer Review Process
                </Link>
                <Link
                  to="/publicationethic"
                  className={`block px-4 py-2  ${isActive("/publicationethic") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Publication Ethics
                </Link>
                <Link
                  to="/abstracting"
                  className={`block px-4 py-2  ${isActive("/abstracting") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Abstracting and Indexing
                </Link>
                <Link
                  to="/articleprocess"
                  className={`block px-4 py-2  ${isActive("/articleprocess") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Article Processing Charges
                </Link>
                <Link
                  to="/aim-nd-scope"
                  className={`block px-4 py-2  ${isActive("/aim-nd-scope") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Aim and Scope
                </Link>
                <Link
                  to="/issues"
                  className={`block px-4 py-2  ${isActive("/issues") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Issues
                </Link>
                <Link
                  to="/author-guidelines"
                  className={`block px-4 py-2  ${isActive("/author-guidelines") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Author Guidelines
                </Link>
                <Link
                  to="/copyrights-form"
                  className={`block px-4 py-2  ${isActive("/copyrights-form") ? "underline underline-offset-4 text-black" : ""}`}
                >
                  Copyright Form
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contactus"
            className={`  py-2 px-4 block lg:inline-block ${isActive("/contactus") ? "underline underline-offset-4 text-black" : ""}`}
          >
            Contact
          </Link>


          {/* 
          <Link
            to="/submit"
            className="  rounded-tr-md rounded-bl-md hover:rounded-br-md hover:rounded-tl-md hover:rounded-tr-none hover:rounded-bl-none hover:border-[#E4B1F0]  py-2 px-4 block lg:inline-block border"
          >
            Submit New Manuscript
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
