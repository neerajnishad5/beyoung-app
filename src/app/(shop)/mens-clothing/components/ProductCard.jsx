// components/ProductCard.js
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="relative transform transition-transform hover:-translate-y-1 bg-white rounded-md overflow-hidden group sm:w-[17rem] mb-4 cursor-pointer">
      <Link href="#">
        <div
          className="relative w-full"
          style={{
            height: "22.5rem",
            width: '17rem',
          }}
        >
          <Image
            className="absolute transition-transform duration-300 group-hover:scale-100 object-cover sm:object-contain rounded-lg"
            src={product.image}
            alt={product.title}
            layout="fill"
          />
          <Image
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100 sm:object-contain"
            src={product.hoverImage}
            alt={`${product.title} hover`}
            layout="fill"
          />
        </div>
      </Link>
      <div className="p-4">
        <h5
          className="font-semibold"
          style={{
            fontSize: "0.875rem",
          }}
        >
          {product.title}
        </h5>
        <p
          className="text-gray-500"
          style={{
            fontSize: "0.813rem",
          }}
        >
          {product.type}
        </p>
        <div className="flex items-baseline ">
          <span
            className="font-bold text-gray-900"
            style={{
              fontSize: "0.875rem",
            }}
          >
            {product.price}
          </span>
          {product.mrp && (
            <span
              className="ml-2 text-gray-500 line-through"
              style={{
                fontSize: "0.875rem",
              }}
            >
              {product.mrp}
            </span>
          )}
          <span
            style={{
              fontSize: "0.813rem",
              color: "#04CE00",
            }}
          >
            (50% off)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;