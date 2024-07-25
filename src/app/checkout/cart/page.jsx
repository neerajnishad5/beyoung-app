"use client";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import ProductCard from "./product-card";
const cartSummary = [
  {
    description: "Total MRP (Inc. of Taxes)",
    value: "₹9097",
  },
  {
    description: "BeYoung Discount",
    value: "- ₹5101",
  },
  {
    description: "Shipping",
    value: "₹49 Free",
  },
  {
    description: "Cart Total",
    value: "₹3996",
  },
];

console.log(cartSummary);

export default function Cart() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }
  return (
    <div className="parent">
      <div className="stepper border-8 text-center">
        <p>Stepper here</p>
      </div>
      <div className="items-checkout-details flex flex-row justify-around bg-[#F8F8F8]">
        <div className="items flex flex-col justify-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="checkout-details flex flex-col justify-center">
          <div className="offers-benefits bg-white p-5 m-2">
            <span className="flex justify-start flex-row items-center">
              <img
                src="https://www.beyoung.in/desktop/images/home/coupon.svg"
                alt="coupon"
                className="mr-2"
              />
              <span className="font-medium ">Offers & Benefits</span>
            </span>
            <form
              onSubmit={onSubmit}
              className="flex flex-row justify-between items-center mt-2"
            >
              <input
                type="text"
                placeholder="Enter code"
                name="name"
                className="bg-[#F4F4F6] p-1"
              />
              <button className="p-1 bg-green-300" type="submit">
                APPLY
              </button>
              <Divider className="my-4" />
            </form>
            <Divider className="my-4" />
            <div className="flex flex-row justify-between items-center text-xs">
              <div className="item-1">
                <ul>
                  <li>Flat ₹100 off on orders above ₹999 -</li>
                </ul>
              </div>
              <div className="item-2 bg-[#FFFBD9] p-2">
                <span>BEYOUNG100</span>
              </div>
            </div>
          </div>
          <div className="price-details p-2 border bg-white m-2">
            <p className="font-semibold text-start m-1">PRICE DETAILS</p>
            <Divider />

            {cartSummary.map((item, index) => (
              <div
                className="amount-breakup flex flex-row justify-between items-center text-sm"
                key={index}
              >
                <div>
                  <p className="desc p-1">{item.description}</p>
                </div>
                <div>
                  <p className="value p-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="amount-summary flex flex-col justify-center items-center">
            <div className="total-amount flex flex-row w-full justify-between p-2 items-center">
              <div className="desc">
                <p>Total amount here</p>
              </div>
              <div className="amoun">
                <p>₹xxxx</p>
              </div>
            </div>
            <p className="p-1 mt-1 w-full text-sm bg-[#4CAF50] text-center">
              You Saved ₹xxxx on this order
            </p>
            <Button
              className="p-2 w-full font-semibold bg-[#51CBCC] mt-2"
              color="primary"
            >
              CHECKOUT SECURELY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}