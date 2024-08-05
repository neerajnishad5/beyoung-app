"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const accordionData = [
  {
    title: "Specifications",
    accordionSubtitle: "Technical details and features",
    type: "grid",
    content: [
      { subtitle: "Fabric", subtitleType: "Cotton Blend" },
      { subtitle: "Color", subtitleType: "Blue" },
      { subtitle: "Size", subtitleType: "Medium" },
      { subtitle: "Pattern", subtitleType: "Striped" },
      { subtitle: "Fit", subtitleType: "Slim Fit" },
      { subtitle: "Occasion", subtitleType: "Casual" },
    ],
  },
  {
    title: "Description",
    accordionSubtitle: "Product overview and details",
    type: "paragraph",
    content:
      "Are you sick of basic tees that can't keep up? Of course, you are! Then you definitely need this amazing MELANGE EFFECT POLO! The pique cotton blend fabric DEFIES SWEAT with maximum BREATHABILITY. But that's not all! It comes in an ideal REGULAR-FIT and the tape detailing on the side adds more to a sharp appearance. The structured fibre of the t-shirt allows for UNRESTRICTED MOVEMENT so you can say goodbye to your old restrictive tees. It STAYS AWAY from PILLING so you can rely on it for LONG-LASTING wear. Rest assured, you can wear this t-shirt for seasons to come and SLAY like a pro! Happy Shopping!",
  },
  {
    title: "Return & Refund Policy",
    accordionSubtitle: "Return and refund policies",
    type: "paragraph",
    content:
      "We provide free shipping on all orders. Pay online to avoid charges of Rs 50/product applicable on COD orders. The return or exchange can be done within 15 days after delivery. Every delivery from Beyoung is processed under excellent condition and in the fastest time possible. For our beloved customers care, we give contactless delivery. Refer to FAQ for more information.",
  },
  {
    title: "Marketed By",
    accordionSubtitle: "Company and distributor information",
    type: "paragraph",
    content:
      "Beyoung Folks Pvt. Ltd.Eklingpura Chouraha, Ahmedabad Main Road (NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
  },
];

const ProductDetailsAccordion = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  return (
    <div
      className="accordion-container rounded-md p-3 "
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Accordion
        className="rounded-lg dark:border-gray-700"
        aria-label="Product Details"
        selectedKeys={selectedKeys}
        showDivider={true}
        onSelectionChange={setSelectedKeys}
      >
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={`Accordion ${index + 1}`}
            title={item.title}
            subtitle={
              <span className="text-[#898888]">{item.accordionSubtitle}</span>
            }
            className="my-2 dark:border-gray-700 font-bold"
          >
            <div className="p-4">
              {item.description && (
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
              )}
              {item.type === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.content.map((subItem, subIndex) => (
                    <div key={subIndex} className="p-4 border-b-2">
                      <p className="text-gray-700 dark:text-gray-300 sub-title font-medium text-[13px]">
                        {subItem.subtitle}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 sub-title-type font-medium text-[13px]">
                        {subItem.subtitleType}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {item.type === "paragraph" && (
                <p className="text-gray-700 dark:text-gray-300">
                  {item.content}
                </p>
              )}
              {item.type === "reviews" && (
                <div className="space-y-4">
                  {item.content.map((review, reviewIndex) => (
                    <div
                      key={reviewIndex}
                      className="p-4 border rounded-lg shadow-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>{review.reviewer}</strong>: {review.comment}
                      </p>
                      <p className="text-yellow-500 dark:text-yellow-400">
                        Rating: {review.rating} / 5
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductDetailsAccordion;
