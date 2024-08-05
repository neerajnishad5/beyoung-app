// import { SfButton, SfDropdown, useDisclosure } from '@storefront-ui/react';

// const SearchDropdown = () => {
//   const { isOpen, toggle, close } = useDisclosure();
//   return (
//     <SfDropdown trigger={<SfButton onClick={toggle}>Toggle</SfButton>} open={isOpen} onClose={close}>
//       <ul className="p-2 rounded bg-gray-100">
//         <li>More</li>
//         <li>About</li>
//         <li>Settings</li>
//       </ul>
//     </SfDropdown>
//   );
// }
// components/Dropdown.js
import { SfIconSearch } from "@storefront-ui/react";
import { useState } from "react";
import { IoMdTrendingUp } from "react-icons/io";

const chips = [
  "Men's Shirts",
  "Cargos",
  "Combos",
  "Joggers",
  "Oversized T-shirts",
  "Pyjamas",
  "Boxers",
  "Chino Pants",
  "T-shirts for Men",
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button onClick={handleToggle}>
        <SfIconSearch />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-4 bg-white border border-gray-300 shadow-lg z-10"
          style={{
            width: "24rem",
          }}
        >
          <div className="p-4">
            <span className="flex items-center mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search entire store here..."
                className="flex-grow border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
              />
              <button className="bg-black text-white py-1 px-4 focus:outline-none">
                Search
              </button>
            </span>
            <div className="flex flex-wrap gap-2">
              <p className="uppercase w-full font-medium flex flex-row items-center">
                <IoMdTrendingUp size={20} />
                <span className="ms-2 text-[0.9rem]">TRENDING SEARCHES</span>
              </p>
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-yellow-500 text-black rounded-md px-3 py-1 text-[0.75rem]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
