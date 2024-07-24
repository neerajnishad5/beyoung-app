"use client";
import { SiPhonepe } from "react-icons/si";
import { Divider } from "@nextui-org/react";
import { FaGooglePay } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { SiPaytm } from "react-icons/si";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="bg-black text-white">
      <section className="help-company-more-info-location">
        <div className="container  mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* NEED HELP */}
            <div>
              <h3 className="text-[#F8EA54] text-lg font-semibold mb-4">
                NEED HELP
              </h3>
              <ul>
                <li>
                  <Link href="/support">
                    <span className="hover:text-gray-400">
                      Customer Support
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/returns">
                    <span className="hover:text-gray-400">Returns</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="hover:text-gray-400">FAQ</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="hover:text-gray-400">Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-[#F8EA54] text-lg font-semibold mb-4">
                COMPANY
              </h3>
              <ul>
                <li>
                  <Link href="/about">
                    <span className="hover:text-gray-400">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/careers">
                    <span className="hover:text-gray-400">Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/press">
                    <span className="hover:text-gray-400">Press</span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <span className="hover:text-gray-400">
                      Terms & Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* MORE INFO */}
            <div>
              <h3 className="text-[#F8EA54] text-lg font-semibold mb-4">
                MORE INFO
              </h3>
              <ul>
                <li>
                  <Link href="/privacy">
                    <span className="hover:text-gray-400">Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/shipping">
                    <span className="hover:text-gray-400">
                      Shipping Information
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/discounts">
                    <span className="hover:text-gray-400">Discounts</span>
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter">
                    <span className="hover:text-gray-400">Newsletter</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* LOCATION */}
            <div>
              <h3 className="text-[#F8EA54] text-lg font-semibold mb-4">
                LOCATION
              </h3>
              <ul>
                <li>
                  <span className="hover:text-gray-400">
                    123 Fashion St, New York, NY
                  </span>
                </li>
                <li>
                  <span className="hover:text-gray-400">
                    456 Style Ave, Los Angeles, CA
                  </span>
                </li>
                <li>
                  <span className="hover:text-gray-400">
                    789 Trendy Blvd, Chicago, IL
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="accordion px-4 ms-8">
        {/* Accordion: Popular Categories */}
        <div className="mt-8">
          <Accordion>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="POPULAR CATEGORIES"
              className="text-[#F8EA54] font-bold"
            >
              <div>
                <div className="mens-clothing text-white font-normal">
                  <p className="font-bold mb-2 text-[#F8EA54]">
                    MEN'S CLOTHING
                  </p>
                  <p className="mb-1">
                    Topwear: T-Shirts for Men | Half Sleeve T-Shirts | Full
                    Sleeve T-Shirts | Men's Shirts | Printed T-Shirts | Plain
                    T-Shirts | Polo T-Shirts | Plus Size T-Shirts | Combos |
                    Tshirts
                  </p>
                  <p className="mb-1">
                    Theme Based T-Shirts: Ipl T-Shirts | Men's Travel T-Shirts |
                    Gym T-Shirts | Quotes T-Shirts | Cartoon T-Shirts | Biker
                    T-Shirts | Work From Home T-Shirts | Student T-Shirts |
                    Funky T-Shirts
                  </p>
                  <p>
                    Winter Collection : Hoodies for Men | Sweatshirts for Men |
                    Jackets for Men
                  </p>
                </div>
                <div className="womens-clothing">
                  <p className="font-bold mb-2 text-[#F8EA54]">
                    WOMEN'S CLOTHING
                  </p>
                  <p className="text-white font-normal mb-2">
                    Topwear: Women Shirts | Half Sleeve T-Shirts | Full Sleeve
                    T-Shirts | T-Shirts for Women | Plain T-Shirts | Oversized
                    T-Shirts for Women | Summer T-Shirts | Crop Tops | Plus Size
                    T-Shirts | Kurti
                  </p>
                  <p className="text-white font-normal mb-2">
                    Theme Based T-Shirts: Women's Travel T-Shirts | Feminist
                    T-Shirts
                  </p>
                  <p className="text-white font-normal">
                    Winter Collection: Hoodies for Women | Sweatshirts for Women
                    | Long Coats for Women
                  </p>
                </div>
                <div className="couple-wear">
                  <p className="font-bold mb-2 text-[#F8EA54]">COUPLE WEAR</p>
                  <p className="font-normal  text-white">
                    Couple Boxers | Couple T-Shirts
                  </p>
                </div>
                <div className="bottom-wear">
                  <p>BOTTOM WEAR</p>
                  <p className="font-normal text-white">
                    Mens Boxers | Women's Boxers | Leggings | Men Sweatpants |
                    Mens Cargo Pants | Shorts for Men | Mens Joggers | Chino
                    Pants | Mens Jeans | Mens Pyjamas
                  </p>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Divider
        orientation="horizontal"
        style={{ color: "" }}
        className="w-full mb-1"
      />

      <section className="payment-social-media-section flex justify-around">
        <div className="payment font-semibold">
          <p className="text-2xl my-4 ms-2 " style={{
            fontSize: '20px'
          }}>100% SECURE PAYMENT</p>
          <div className="icons flex justify-start">
            <span className="mx-2">
              <SiPaytm size={32} />
            </span>
            <span className="mx-2">
              <SiPhonepe size={32} />
            </span>
            <span className="mx-2">
              <FaGooglePay size={32} />
            </span>
            <span className="mx-2">
              <TbTruckDelivery size={32} />
            </span>
          </div>
        </div>
        <Divider orientation="vertical" className="border" />
        <div className="social-media font-semibold flex flex-col justify-start my-4">
          <div className="item-1">
            <p className="text-2xl mb-4 ms-2"  style={{
            fontSize: '20px'
          }}>LET'S BE FRIENDS</p>
          </div>
          <div className="icons flex justify-center ">
            <span className="mx-2">
              <RiInstagramFill size={32} />
            </span>
            <span className="mx-2">
              <FaLinkedin size={32} />
            </span>
            <span className="mx-2">
              <FaFacebook size={32} />
            </span>
            <span className="mx-2">
              <FaTwitter size={32} />
            </span>
            <span className="mx-2">
              <FaPinterest size={32} />
            </span>
            <span className="mx-2">
              <FaYoutube size={32} />
            </span>
          </div>
        </div>
      </section>
      <div className="copyright-statement">
        <p
          className="font-semibold text-center bg-black p-5"
          style={{ fontSize: "14px" }}
        >
          Copyright © 2024 Beyoung Folks Pvt Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
