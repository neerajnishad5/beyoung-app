"use client";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "trending", label: "Trending" },
  { value: "recommended", label: "Recommended" },
  { value: "newly-launched", label: "Newly Launched" },
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
];

const SortBySelect = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="parent">
      <div
        onMouseEnter={() => setMenuIsOpen(true)}
        onMouseLeave={() => setMenuIsOpen(false)}
        className="flex items-center me-20 "
      >
        <p
          className="me-2 sm:text-wrap md:text-nowrap"
          style={{
            fontSize: "0.875rem",
          }}
        >
          Sort By
        </p>
        <Select
          defaultValue={options[1]}
          options={options}
          menuIsOpen={menuIsOpen} // Control menu open state
          // onBlur={() => setMenuIsOpen(false)} // Optionally close menu on blur
          onInputChange={() => setMenuIsOpen(false)}
          className="w-[18rem] text-[0.875rem]"
        />
      </div>
    </div>
  );
};

export default SortBySelect;
