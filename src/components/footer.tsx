"use client";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { Divider } from "@nextui-org/react";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import {
  FaPinterest,
  FaFacebook,
  FaTwitter,
  FaAngleDown,
  FaYoutube,
  FaGooglePay,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import PaymentFrame from "../../public/images/payment-frame.jpeg";
import { usePathname } from "next/navigation";
const sections = [
  {
    title: "NEED HELP",
    links: [
      { text: "Customer Support", href: "/support" },
      { text: "Returns", href: "/returns" },
      { text: "FAQ", href: "/faq" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Careers", href: "/careers" },
      { text: "Press", href: "/press" },
      { text: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "MORE INFO",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Shipping Information", href: "/shipping" },
      { text: "Discounts", href: "/discounts" },
      { text: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "LOCATION",
    links: [
      { text: "support@beyoung.in", href: "mailto:support@beyoung.in" },
      { text: "Eklingpura Chouraha, Ahmedabad Main Road", href: "#" },
      { text: "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002", href: "#" },
    ],
  },
];

const socialMediaLinks = [
  {
    href: "https://www.instagram.com/beyoung.in_official/",
    icon: <RiInstagramFill size={32} />,
    title: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/beyoung-in/",
    icon: <FaLinkedin size={32} />,
    title: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/beyoungfolks/",
    icon: <FaFacebook size={32} />,
    title: "Facebook",
  },
  {
    href: "https://twitter.com/Beyoung_in/",
    icon: <FaTwitter size={32} />,
    title: "Twitter",
  },
  {
    href: "https://in.pinterest.com/BeyoungFolks/",
    icon: <FaPinterest size={32} />,
    title: "Pinterest",
  },
  {
    href: "https://www.youtube.com/user/BeyoungFolks/",
    icon: <FaYoutube size={32} />,
    title: "YouTube",
  },
];

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <div className="main-footer">
      <footer className="bg-black text-white">
        {pathname !== "/products" && (
          <div className="email-subscription bg-[#EAEAEA] flex flex-row justify-around items-center p-7">
            <div className="email=description">
              <p className="italic text-[#767676] text-[16px]">
                Basic styles se latest fashion tak ki updates! Get extra
                savings, exclusive Coupons & hell lot of everyday deals
                DIRECT-TO-YOUR inbox
              </p>
            </div>
            <div className="email-input flex flex-row items-center ms-2">
              <input
                className="rounded h-8 p-2.5 m-1"
                type="email"
                name="user-email"
                id="user-email"
                placeholder="Enter your email address"
                style={{
                  width: "196px",
                  fontSize: "14px",
                }}
              />
              <button
                className="bg-[#FFDD00] text-[#000000] font-semibold rounded ms-1"
                style={{
                  padding: "8px 30px",
                  border: "1px solid black",
                }}
              >
                <span>I</span> <span>AM</span> <span>IN</span>
              </button>
            </div>
          </div>
        )}

        <section className="help-company-more-info-location">
          <div className="container mx-auto px-4 py-8 flex flex-row justify-center items-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
              {sections.map((section, index) => (
                <div key={index} className="mx-auto w-1/2">
                  <h3 className="text-[#F8EA54] text-lg font-semibold mb-4">
                    {section.title}
                  </h3>
                  <ul style={{ fontSize: "14px" }}>
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.href}>
                          <span className="hover:text-gray-400">
                            {link.text}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="md:flex md:flex-row md:justify-end md:items-end sm:flex sm:flex-row sm:justify-center sm:items-center">
          <div>
            <p
              className="text-2xl mb-2 me-32"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#e5d84d",
                textAlign: "right",
              }}
            >
              DOWNLOAD THE APP
            </p>

            <div className="flex flex-col items-end me-40">
              <img
                src="https://www.beyoung.in/api/catalog/footer/11Play-Store-footer.png"
                alt="play-store"
                width="180px"
                className="mb-1"
              />
              <img
                src="https://www.beyoung.in/api/catalog/footer/12App-Store-footer.png"
                alt="app-store"
                width="180px"
              />
            </div>
          </div>
        </div>

        <section className="accordion px-4 ms-8">
          {/* Accordion: Popular Categories */}
          <div className="mt-4">
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
                      Theme Based T-Shirts: Ipl T-Shirts | Men's Travel T-Shirts
                      | Gym T-Shirts | Quotes T-Shirts | Cartoon T-Shirts |
                      Biker T-Shirts | Work From Home T-Shirts | Student
                      T-Shirts | Funky T-Shirts
                    </p>
                    <p>
                      Winter Collection : Hoodies for Men | Sweatshirts for Men
                      | Jackets for Men
                    </p>
                  </div>
                  <div className="womens-clothing">
                    <p className="font-bold mb-2 text-[#F8EA54]">
                      WOMEN'S CLOTHING
                    </p>
                    <p className="text-white font-normal mb-2">
                      Topwear: Women Shirts | Half Sleeve T-Shirts | Full Sleeve
                      T-Shirts | T-Shirts for Women | Plain T-Shirts | Oversized
                      T-Shirts for Women | Summer T-Shirts | Crop Tops | Plus
                      Size T-Shirts | Kurti
                    </p>
                    <p className="text-white font-normal mb-2">
                      Theme Based T-Shirts: Women's Travel T-Shirts | Feminist
                      T-Shirts
                    </p>
                    <p className="text-white font-normal">
                      Winter Collection: Hoodies for Women | Sweatshirts for
                      Women | Long Coats for Women
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
            <p
              className="text-2xl my-4 ms-2 "
              style={{
                fontSize: "20px",
              }}
            >
              100% SECURE PAYMENT
            </p>
            <div className="icons flex justify-start">
              <Image
                src={PaymentFrame}
                alt="payment-frame"
                style={{
                  width: "35rem",
                  height: "auto",
                }}
              ></Image>
            </div>
          </div>
          <Divider orientation="vertical" className="border" />
          <div className="social-media font-semibold flex flex-col justify-start my-4">
            <div className="item-1">
              <p className="text-2xl mb-4 ms-2" style={{ fontSize: "20px" }}>
                LET'S BE FRIENDS
              </p>
            </div>
            <div className="icons flex justify-center">
              {socialMediaLinks.map((link, index) => (
                <Link href={link.href} key={index} className="mx-2">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <div className="copyright-statement">
          <p
            className="font-semibold text-center bg-black p-5"
            style={{ fontSize: "14px" }}
          >
            Copyright © 2024 BeYoung Folks Pvt Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
