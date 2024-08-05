"use client";
import Link from "next/link";
import { useState } from "react";

const CustomerShipmentTracking = () => {
  const [searchBy, setSearchBy] = useState("tracking-id");

  return (
    <section className="order-shipment-box box-content px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <Link href="/">
          <img
            src="https://www.beyoung.in/api/cache/catalog/track/Track-2Or2der-Plain-T-Shirt-Strip-Desktop-view_1920x250.jpg"
            alt="combo-offer"
            className="max-w-7xl"
            style={{
              height: "8rem",
              minHeight: "100%",
            }}
          />
        </Link>
        <p className="text-3xl bg-[#f8eb26] text-[#000] p-2 mt-8 font-medium">
          Track your Order or Shipment
        </p>
        <div className="tracking-order-details bg-[#f1f1f1] flex flex-col items-center justify-center py-10 px-20 sm:px-6 lg:px-8 w-full max-w-6xl">
          <p className="font-medium text-center mb-4">
            Enter your Tracking ID or Order ID to track the status of your
            order. You can find the Tracking ID and Order ID in the Email/SMS
            confirming that your order has been shipped.
          </p>
          <div className="parent">
            <div className="order-checkbox flex flex-col justify-center items-center sm:flex-row sm:items-center w-full rounded-lg">
              <div className="order-select border-b sm:border-b-0 sm:border-r border-gray-300 pr-4 flex flex-col justify-center sm:flex-row items-start sm:items-center text-[0.9rem]">
                <p className="p-4">Search By: </p>
                <div className="radio-input flex flex-row sm:flex-row">
                  <div className="tracking-id flex flex-row justify-center mr-4">
                    <input
                      type="radio"
                      name="search-by"
                      value="tracking-id"
                      checked={searchBy === "tracking-id"}
                      onChange={() => setSearchBy("tracking-id")}
                      className="mr-2"
                    />
                    <label className="flex items-center mr-4">
                      Tracking ID
                    </label>
                  </div>
                  <div className="order-id flex flex-row justify-center mr-4">
                    <input
                      type="radio"
                      name="search-by"
                      value="order-id"
                      checked={searchBy === "order-id"}
                      onChange={() => setSearchBy("order-id")}
                      className="mr-2"
                    />
                    <label className="flex items-center mr-4">Order ID</label>
                  </div>
                </div>
              </div>
              <div className="order-select p-4 flex flex-col w-full">
                <strong className="mb-2">Enter Details</strong>
                <div className="input-submit">
                  <input
                    type="text"
                    name="tracking-id"
                    id="tracking-id"
                    placeholder={
                      searchBy === "order-id"
                        ? "Enter Order #ID"
                        : "Enter Tracking #ID"
                    }
                    className="rounded-md p-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300"
                  />
                  {searchBy === "order-id" && (
                    <input
                      type="email"
                      name="email-id"
                      id="email-id"
                      placeholder="Enter Email ID"
                      className="rounded-md p-2 mb-2 sm:mb-0 sm:mr-2 border border-gray-300"
                    />
                  )}
                  <button
                    type="submit"
                    className="text-[#fff] bg-[#51cccc] rounded-xl py-2 px-6 mt-2 sm:mt-0"
                    style={{
                      marginTop: searchBy === "order-id" ? "0.5rem" : "",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="love-support bg-[#000]  mx-auto py-7 px-40 max-w-6xl my-10">
        <p className="text-[#fff] flex flex-row justify-center items-center text-3xl font-medium px-4">
          <img
            src="https://www.beyoung.in/desktop/images/customer-shipment-track/heart-svgrepo-com.svg"
            alt="love-icon"
            width="24px"
            height="24px"
            className="mr-2"
          />
          Thank you for shopping at Beyoung, keep loving!
          <img
            src="https://www.beyoung.in/desktop/images/customer-shipment-track/heart-svgrepo-com.svg"
            alt="love-icon"
            width="24px"
            height="24px"
            className="ml-2"
          />
        </p>
      </div>
    </section>
  );
};

export default CustomerShipmentTracking;
