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
    <header className="bg-[#388883] z-50 p-4">
      <div className="container mx-auto flex justify-between text-black items-center">
        <Link to='/'>
          <div className="flex items-center text-white">
            <p className="text-3xl ">AJARCSE</p>
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
            color="white"
            borderRadius={2}
            animationDuration={0.5}
          />
        </div>


        <nav
          className={`lg:flex lg:space-x-4 ${menuOpen
            ? 'block animate-slideIn lg:animate-none'
            : 'hidden lg:block animate-slideOut lg:animate-none'
            } flex-col lg:py-0 py-5 lg:flex-row bg-[#dbecea] lg:bg-transparent  lg:text-white lg:border-none border text-[#388883] absolute lg:static top-16 left-0 w-full rounded-b-3xl text-center lg:w-auto z-50`}
        >
          <Link
            to="/"
            className={` py-2 px-4 block lg:inline-block ${isActive("/") ? "underline underline-offset-4 lg:text-white" : ""}`}
          >
            Home
          </Link>

          {/* Dropdown for Journal Overview */}
          <div className="relative lg:text-white" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="  inline-flex py-2  px-4 gap-2 focus:outline-none lg:hover:text-white hover:text-[#388883]"
            >
              Journal Overview
              <IoMdArrowDropdown className={`${isDropdownOpen ? 'rotate-180' : 'rotate-0'} text-2xl duration-300`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute lg:left-0 md:left-96 left-28 flex flex-col  lg:text-[#388883]  bg-[#388883] lg:bg-white  text-white  mt-2 rounded shadow-lg w-56">
                <Link
                  to="/aboutus"
                  className={`px-4 py-2   ${isActive("/aboutus") ? "underline underline-offset-4 lg:text-[#388883] text-white " : ""}`}
                >
                  About
                </Link>
                <Link
                  to="/editorial-board"
                  className={` px-4 py-2   ${isActive("/editorial-board") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Editorial Board
                </Link>
                <Link
                  to="/peerreview"
                  className={`block px-4 py-2  ${isActive("/peerreview") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Peer Review Process
                </Link>
                <Link
                  to="/publicationethic"
                  className={`block px-4 py-2  ${isActive("/publicationethic") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Publication Ethics
                </Link>
                <Link
                  to="/abstracting"
                  className={`block px-4 py-2  ${isActive("/abstracting") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Abstracting and Indexing
                </Link>
                <Link
                  to="/articleprocess"
                  className={`block px-4 py-2  ${isActive("/articleprocess") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Article Processing Charges
                </Link>
                <Link
                  to="/aim-nd-scope"
                  className={` px-4 py-2    ${isActive("/aim-nd-scope") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Aim and Scope
                </Link>
                <Link
                  to="/issues"
                  className={` px-4 py-2    ${isActive("/issues") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Issues
                </Link>
                <Link
                  to="/author-guidelines"
                  className={` px-4 py-2     ${isActive("/author-guidelines") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Author Guidelines
                </Link>
                <Link
                  to="/copyrights-form"
                  className={` px-4 py-2     ${isActive("/copyrights-form") ? "underline underline-offset-4 lg:text-[#388883] text-white" : ""}`}
                >
                  Copyright Form
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contactus"
            className={`  py-2 px-4 block lg:text-white lg:inline-block ${isActive("/contactus") ? "underline underline-offset-4 text-white" : ""}`}
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
