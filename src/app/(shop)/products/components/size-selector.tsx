import { useState } from "react";
import Link from "next/link";

const sizes = ["S", "M", "L", "XL", "XXL"];

const SizeSelector = ({ onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    if (onSizeChange) {
      onSizeChange(size);
    }
  };
  console.log("selector: ", selectedSize);

  return (
    <div className="flex items-center mt-4">
      <span className="mr-4 text-gray-700">Size:</span>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`px-4 py-2 border rounded ${
              selectedSize === size ? "border-black" : "border-gray-300"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <Link href="/size-guide">
        <span className="ml-4 text-teal-500 hover:underline">Size Guide</span>
      </Link>
    </div>
  );
};

export default SizeSelector;
