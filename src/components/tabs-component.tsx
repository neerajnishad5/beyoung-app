"use client";
import { useState, useEffect, useRef } from "react";
import SliderSwiper from "./SliderSwiper"; // Import your SliderSwiper component

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-y-2 w-full">
        <div className="bg-white p-1 rounded-xl flex justify-center items-center text-black">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={` w-full p-2 hover:bg-gray-100 rounded-3xl text-center focus:ring-2 focus:bg-black focus:text-white ${
                selectedTab === index ? "ring-2 bg-black text-white" : ""
              }`}
              style={{
                width: "6.25rem",
                fontSize: "14px",
                border: "1px solid black",
                margin: "0px 1rem",
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-white">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
