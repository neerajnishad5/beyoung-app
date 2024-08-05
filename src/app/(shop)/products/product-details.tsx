"use client";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QuantitySelector from "./components/quantity-selector";
import SizeSelector from "./components/size-selector";
import { FaStar } from "react-icons/fa";
import Pincode from "react-pincode";

import ProductDetailsAccordion from "./components/product-details-accordion";
// const product = {
//     id: 1,
//     title: "Men's Cargo Joggers",
//     type: "Cargo Joggers",
//     price: 499, // in INR or your currency
//     colorsAvailable: ["Black", "Navy Blue", "Olive Green"],
//     sizesAvailable: ["S", "M", "L", "XL", "XXL"],
//     specifications: [
//       { key: "Material", value: "100% Cotton" },
//       { key: "Fit", value: "Regular" },
//       { key: "Length", value: "Full Length" },
//       { key: "Wash Care", value: "Machine Wash" },
//     ],
//     description:
//       "Comfortable and stylish cargo joggers perfect for casual outings. Made from soft cotton fabric for all-day comfort. Features multiple pockets for utility and an adjustable waistband for a better fit.",
//     returnRefundPolicy:
//       "Returns are accepted within 30 days of purchase. The product must be in original condition with tags attached. Refunds will be processed within 5-7 business days after receiving the returned product.",
//     marketedBy: "BeYoung",
//   };

const ProductDetails = ({
  productTitle,
  productType,
  productPrice,
  productColors,
  productMrp,
}) => {
  // const router = useRouter();
  // const { id } = router.query;
  // const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);

  console.log("prod size: ", size);
  const [pincodeData, setPincodeData] = useState("");

  // useEffect(() => {
  //     if (id) {
  //       async function fetchProduct() {
  //         const data = await getProductById(id);
  //         setProduct(data);
  //       }
  //       fetchProduct();
  //     }
  //   }, [id]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  //   if (!product) {
  //     return <div>Loading...</div>;
  //   }

  const handleChange = (code) => {
    setPincodeData(code);
  };

  return (
    <div
      className="product-details-info right-part flex flex-col justify-start items-start md:mr-[8rem]"
      style={{
        width: "calc(40% + 52px)",
        // border: '2px solid red',
        // marginLeft: "2rem",
      }}
    >
      <div className="p-1">
        <p className="product-title my-1">{productTitle}</p>
        <p className="product-type my-1 text-[#a5a5a5]">{productType}</p>
        <p className="product-price my-1 font-semibold text-[1.375rem]">
          ₹ {productPrice}
          <span className="line-through text-[#a5a5a5] mx-2 text-[0.875rem]">
            ₹{productMrp}
          </span>
          <span className="text-[#2fb106] font-semibold text-[0.875rem]">
            (50% off)
          </span>
        </p>
        <p className="taxes-text my-1 flex items-center text-[#888888]">
          Inclusive of Taxes +
          <span className="flex flex-row items-center bg-[#e9fde2] text-[#2fb106] ms-1">
            <TbTruckDelivery color="#31b209" />
            Free Delivery
          </span>
        </p>
        <div className="product-rating p-2 inline-block mb-2">
          <span className="flex items-center border-2 rounded-[0.75rem] p-1">
            <FaStar className="text-yellow-500 mr-1" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              5.0 | 20
            </span>
          </span>
        </div>
        <div
          className="product-coupon-offer border bg-[#eaf7e6] rounded-[10px]"
          style={{
            //   width: "520px",
            //   height: "66px",
            margin: "1.5rem 0rem",
          }}
        >
          <div
            className="main-container flex flex-row justify-between items-center"
            style={{
              padding: "5px",
              // boxSizing: 'content-box',
            }}
          >
            <div className="coupon-text flex flex-row">
              <RiDiscountPercentFill
                size={24}
                color="#38b413"
                className="ms-2"
              />
              <p className="text-[#38b413] ms-2">
                Shop for ₹999 & Get ₹100 OFF
              </p>
            </div>
            <div className="coupon-code">
              <p className="text-[#38b413] text-[0.75rem]">Use Code</p>
              <p className="font-medium">BEYOUNG100</p>
            </div>
          </div>
        </div>
        <div className="product-color-selection">
          <p>Color: Dummy color</p>

          <div className="images flex flex-row">
            <img
              src="https://www.beyoung.in/api/cache/catalog/products/swatches_image/white_and_yellow_printed_cotton_shirt_swatches_16_07_2024_50x50.png"
              alt=""
              className="rounded-[100%]"
            />
            <img
              src="https://www.beyoung.in/api/cache/catalog/products/swatches_image/white_and_yellow_printed_cotton_shirt_swatches_16_07_2024_50x50.png"
              alt=""
              className="rounded-[100%]"
            />
            <img
              src="https://www.beyoung.in/api/cache/catalog/products/swatches_image/white_and_yellow_printed_cotton_shirt_swatches_16_07_2024_50x50.png"
              alt=""
              className="rounded-[100%]"
            />
          </div>
        </div>
        <div className="product-size-selection mt-6">
          <SizeSelector onSizeChange={handleSizeChange} />
        </div>
        <div className="product-qty-selection my-6">
          <QuantitySelector
            initialQuantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
        </div>
        <div className="action-buttons flex flex-row items-center justify-around">
          <div className="add-to-cart ">
            <button
              className="text-[#FFFFFF] flex flex-row items-center justify-center bg-[#51cccc]"
              style={{
                padding: "15px 12px",
                borderRadius: "8px",
                width: "13.5rem",
              }}
            >
              <span>
                <FaShoppingCart color="#FFFFFF" />
              </span>
              Add to Cart
            </button>
          </div>
          <div className="buy-now ">
            <button
              className="text-[#000000] bg-[#f9eb28] "
              style={{
                padding: "15px 12px",
                borderRadius: "8px",
                width: "13.5rem",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className="delivery-options bg-[#fafafa] p-2 mt-4">
          <p className="font-medium text-base mt-2 mb-1 font-semibold">
            Delivery Options
          </p>

          <div className="flex justify-between items-center border-2 bg-[#FFF] rounded-xl">
            <input
              type="text"
              name="pincode"
              id="pincode"
              className="w-full border-none outline-none px-3 py-2 appearance-none"
              placeholder="Enter your city pincode"
            />
            <button className="p-2 m-2 text-[#FFF] bg-[#555555] rounded-xl" style={{
              width: '30%'
            }}>
              Check
            </button>
          </div>

          <div className="delivery-details"></div>
        </div>
        <div className="product-bank-offers"></div>
        <div className="product-details">
          {/* this will contain the accordion for specs, description, return and refund policy and marketed accordions */}
          {/* <ProductDetailsAccordion /> */}
          <p className="mb-3 font-medium text-base">Product Details</p>
          <div className="product-accordion">
            <ProductDetailsAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
