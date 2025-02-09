"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import beyoung from "../public/icons/beyoung.svg";
import { IoLocationOutline } from "react-icons/io5";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <p className="bg-custom-yellow p-1.5 text-center font-medium">
        Free Shipping Sitewide on Every Order, Don't Miss Out!!
      </p>
      <div className="flex justify-around items-center bg-black text-white p-[0.7rem]">
        <div className="track-order flex">
          <span className="pr-1">
            <IoLocationOutline size={30} />
          </span>
          <span>TRACK YOUR ORDER</span>
        </div>
        <div className="login-sign-up">
          <span>LOG IN</span> | <span>SIGNUP</span>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="cursor-pointer">
            <Image src={beyoung} alt="be-young logo" width={100} height={50} />
          </span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {/* <Link href="/">
            <span className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
              Home
            </span>
          </Link> */}
          <Link href="/about">
            <span className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/services">
            <span className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/contact-us">
            <span className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
        <button
          className=" text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <Link href="/">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              About
            </span>
          </Link>

          <Link href="/contact-us">
            <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
