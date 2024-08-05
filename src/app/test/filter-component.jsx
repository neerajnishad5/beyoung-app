"use client";
import { VscSettings } from "react-icons/vsc";
import { Accordion, AccordionItem, useDisclosure } from "@nextui-org/react"; // Or any library you preferconst defaultContent =
import { useState } from "react";
const filters = [
  { title: "Types", options: ["Bottomwear", "Topwear"] },
  {
    title: "Color",
    options: [
      "Beige",
      "Red",
      "Blue",
      "Green",
      "Grey",
      "Maroon",
      "Orange",
      "Purple",
      "Pink",
    ],
  },
  { title: "Size", options: ["S", "M", "L", "XL"] },
  {
    title: "Categories",
    options: [
      "Boxers",
      "Cargo Joggers",
      "Cargo Pants",
      "Chinos",
      "Jeans",
      "Polo",
      "Shirts",
      "Shorts",
      "T-shirts",
    ],
  },
  { title: "Patterns", options: ["Solid", "Striped", "Checked"] },
  { title: "Fabric", options: ["Cotton", "Polyester", "Wool"] },
  { title: "Sleeve", options: ["Half Sleeves", "Full Sleeves"] },
  {
    title: "Neck/Collar",
    options: [
      "Button Down Collar",
      "Polo",
      "Round Neck",
      "Spread Neck",
      "Stand Neck",
      "Zipper Neck",
    ],
  },
  { title: "Fit", options: ["Slim", "Regular", "Loose"] },
  { title: "Occasions", options: ["Slim", "Regular", "Loose"] },
  {
    title: "Combos",
    options: [
      "Casual Wear",
      "Formal Wear",
      "Lounge Wear",
      "Semi Formal Wear ",
      "Street Wear",
    ],
  },
  {
    title: "Price Range",
    options: [
      "Rs.1000 - Rs.1499",
      "Rs.1500 - Rs.1999",
      "Rs.299 - Rs.499",
      "Rs.800 - Rs.999",
    ],
  },
];

const FilterComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  const handleOptionChange = (title, option) => {
    setSelectedOptions((prevState) => {
      const currentOptions = prevState[title] || [];
      if (currentOptions.includes(option)) {
        // Remove option if it's already selected
        return {
          ...prevState,
          [title]: currentOptions.filter((opt) => opt !== option),
        };
      } else {
        // Add option if it's not selected
        return {
          ...prevState,
          [title]: [...currentOptions, option],
        };
      }
    });
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:flex md:justify-center md:items-center sm:ml-10" style={{
        // position: 'sticky'
    }}>
      <div className="filter-component rounded" style={{
        // marginLeft: '10.5rem',

      }}>
        <Accordion
          variant="shadow"
          style={{
            padding: "0px",
          }}
          defaultExpandedKeys={["0"]}
        >
          <AccordionItem
            title="Filter"
            hideIndicator={true}
            variant="bordered"
            isDisabled={true}
            startContent={<VscSettings size="18" />}
            className="bg-[#f6f6f6] p-2 font-medium rounded-t-md text-lg"
          ></AccordionItem>

          {filters.map((filter, index) => (
            <AccordionItem
              key={index}
              aria-label={filter.title}
              title={filter.title}
              style={{
                marginBottom: "0.15rem",
                width: "14rem",
                
              }}
              className={`p-3  text-md transition-all ${
                openIndex === index ? "bg-white font-semibold" : "bg-[#f6f6f6]"
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className="py-2">
                {filter.options.map((option, idx) => (
                  <div key={idx} className="flex items-center py-2 border-b">
                    <input
                      type="checkbox"
                      id={`${filter.title}-${option}`}
                      value={option}
                      checked={
                        selectedOptions[filter.title]?.includes(option) || false
                      }
                      onChange={() => handleOptionChange(filter.title, option)}
                      className="h-4 w-4 border-gray-300 rounded-sm ms-2"
                    />
                    {filter.title === "Color" && (
                      <span
                        className={`h-4 w-4 rounded mx-2`}
                        style={{
                          backgroundColor: option,
                        }}
                      ></span>
                    )}
                    <label
                      htmlFor={`${filter.title}-${option}`}
                      className="ml-2 text-gray-800 cursor-pointer font-normal"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FilterComponent;
