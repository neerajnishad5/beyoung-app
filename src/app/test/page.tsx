"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import "./embla.css";
const items = [
  {
    title: "Tab 1",
    content: (
      <div>
        <h1 className="text-white text-xl">Content for Tab 1</h1>
        <p className="text-gray-300">
          This is the content area for Tab 1. You can replace this with your
          actual content.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 2",
    content: (
      <div>
        <h1 className="text-white text-xl">Content for Tab 2</h1>
        <p className="text-gray-300">
          This is the content area for Tab 2. You can replace this with your
          actual content.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 3",
    content: (
      <div>
        <h1 className="text-white text-xl">Content for Tab 3</h1>
        <p className="text-gray-300">
          This is the content area for Tab 3. You can replace this with your
          actual content.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 4",
    content: (
      <div>
        <h1 className="text-white text-xl">Content for Tab 4</h1>
        <p className="text-gray-300">
          This is the content area for Tab 4. You can replace this with your
          actual content.
        </p>
      </div>
    ),
  },
  {
    title: "Tab 5",
    content: (
      <div>
        <h1 className="text-white text-xl">Content for Tab 5</h1>
        <p className="text-gray-300">
          This is the content area for Tab 5. You can replace this with your
          actual content.
        </p>
      </div>
    ),
  },
];
import FilterComponent from "./filter-component";

// export const metadata = {
//   title: "Test | India's Fashion Destination",
//   description: "Test page",
// };
// D:\Projects\beyoung-app\src\components\search-dropdown.jsx
import SearchDropdown from "../../components/search-dropdown";

const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
  "https://swiperjs.com/demos/images/nature-10.jpg",
];
import EmblaCarousel from "./EmblaCarousel";
const OPTIONS = {};
const SLIDES = [
  "https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/black_flat_knit_mens_polo_t-shirt_side_view_17_06_2024_700x933.jpg",
  "https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/black_flat_knit_mens_polo_t-shirt_neck_view_17_06_2024_700x933.jpg",
  "https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/black_flat_knit_mens_polo_t-shirt_neck_view_17_06_2024_700x933.jpg",
];
const chips = ["Cargos", "Men's Shirts", "Combos", "Joggers"];

const options = [
  { value: "trending", label: "Trending" },
  { value: "recommended", label: "Recommended" },
  { value: "newly-launched", label: "Newly Launched" },
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
];

import SortBySelect from "../(shop)/mens-clothing/sort-by-select";

const Test = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="parent">
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      {/* <div className="left-part"><FilterComponent /></div> */}
      <div className="sort-by-select">
        <SortBySelect />
      </div>
      <div className="breadcrumb"></div>
    </div>
  );
};

export default Test;
