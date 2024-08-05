"use client";
import SortBySelect from "./sort-by-select";
import { useState } from "react";
import FilterComponent from "@/app/test/filter-component";
import ProductCard from "./components/ProductCard";
const products = [
  {
    id: 1,
    image:
      "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_28_02_2024_700x933.jpg",
    hoverImage:
      "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_pocket_13_12_2023_400x533.jpg",
    title: "Stylish Jacket",
    type: "Men's Wear",
    price: "₹ 3,699",
    mrp: "₹ 7,699",
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    title: "Casual Shirt",
    type: "Men's Wear",
    price: "₹ 2,199",
    mrp: "₹ 4,499",
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    title: "Elegant Dress",
    type: "Women's Wear",
    price: "₹ 6,599",
    mrp: "₹ 11,999",
  },
  {
    id: 4,
    image: "/path/to/image4.jpg",
    title: "Trendy Sneakers",
    type: "Footwear",
    price: "₹ 5,699",
    mrp: "₹ 10,499",
  },
  {
    id: 5,
    image: "/path/to/image5.jpg",
    title: "Comfortable Jeans",
    type: "Men's Wear",
    price: "₹ 3,299",
    mrp: "₹ 6,399",
  },
  {
    id: 6,
    image: "/path/to/image6.jpg",
    title: "Stylish Sunglasses",
    type: "Accessories",
    price: "₹ 1,499",
    mrp: "₹ 2,999",
  },
  {
    id: 7,
    image: "/path/to/image7.jpg",
    title: "Warm Scarf",
    type: "Accessories",
    price: "₹ 1,199",
    mrp: "₹ 2,499",
  },
  {
    id: 8,
    image: "/path/to/image8.jpg",
    title: "Formal Suit",
    type: "Men's Wear",
    price: "₹ 12,499",
    mrp: "₹ 24,999",
  },
];

const MensClothing = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  return (
    <div className="my-10 md:mx-16 md:px-12">
      <section className="category-main-box flex justify-center items-start">
        <div
          className="left-side overflow-hidden overflow-y-auto"
          style={{
            maxHeight: "calc(100vh - 100px)",
            position: "sticky",
            // Webkit browsers (e.g., Chrome, Safari)
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For Internet Explorer and Edge
          }}
        >
          <FilterComponent />
        </div>

        <div
          className="right-side mx-10"
          style={{
            width: "70%",
          }}
        >
          <div className="clothing-details md:w-[56rem]">
            <p className="text-2xl mb-3 uppercase">Men's clothing</p>
            <p
              style={{
                fontSize: "0.9rem",
              }}
            >
              Explore our vast collection of clothing for men at Beyoung, where
              you will find Plain, Printed, & Oversized T-shirts, along with
              <a href="/" className="text-[#237bd2]">
                {" "}
                trendy Cargo Pants
              </a>
              , Joggers, and more. No matter what your style is, you will find
              something on our online shopping website for men. Enhance your
              wardrobe with us, where quality is blended with affordability in
              clothing for men. Shop your faves now at Beyoung's online clothing
              store for men.
            </p>
            <p
              className="mb-2"
              style={{
                fontSize: "0.9rem",
              }}
            >
              Discover our exclusive{" "}
              <a href="/" className="text-[#237bd2]">
                {" "}
                quality T shirts for men
              </a>
              range of, designed for ultimate comfort and style.
            </p>
          </div>

          {/* Dropdown */}
          <div className="flex justify-end items-center">
            <SortBySelect onChange={handleChange} />
            {selectedOption && (
              <p className="mt-4">Selected: {selectedOption.label}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MensClothing;
