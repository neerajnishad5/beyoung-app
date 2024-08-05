"use client";
import { RiDiscountPercentFill } from "react-icons/ri";
const productDetailItem = {
  images: [
    {
      original:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      original:
        "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      original:
        "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/2697787/pexels-photo-2697787.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      original:
        "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      thumbnail:
        "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      original:
        "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
      thumbnail:
        "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ],
  id: 11,
  title: "BIG ITALIAN SOFA",
  reviews: "150",
  availability: true,
  brand: "apex",
  category: "Sofa",
  price: 998,
  mrpPrice: 2199,
  previousPrice: 599,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
  size: ["XS", "S", "M", "L", "XL"],
  color: ["gray", "violet", "red"],
};
import { useState } from "react";
import { getProducts } from "../../../services/api";
import ProductDetails from "./product-details";
import EmblaCarousel from "../../(shop)/products/components/product-image-gallery-embla-carousel";
const product = {
  id: 1,
  title: "Men's Cargo Joggers",
  type: "Cargo Joggers",
  price: 499,
  mrpPrice: 499 * 2,
  colorsAvailable: ["Black", "Navy Blue", "Olive Green"],
  sizesAvailable: ["S", "M", "L", "XL", "XXL"],
  specifications: [
    { key: "Material", value: "100% Cotton" },
    { key: "Fit", value: "Regular" },
    { key: "Length", value: "Full Length" },
    { key: "Wash Care", value: "Machine Wash" },
  ],
  description:
    "Comfortable and stylish cargo joggers perfect for casual outings. Made from soft cotton fabric for all-day comfort. Features multiple pockets for utility and an adjustable waistband for a better fit.",
  returnRefundPolicy:
    "Returns are accepted within 30 days of purchase. The product must be in original condition with tags attached. Refunds will be processed within 5-7 business days after receiving the returned product.",
  marketedBy: "BeYoung",
};
import './embla.css'

const beYoungIcons = [
  {
    src: "https://www.beyoung.in/desktop/images/product-details-2/homegrown.png",
    alt: "homegrown-brand-icon",
    width: 60,
    height: 60,
    text: "Homegrown Brand",
    className: "homegrown-brand",
  },
  {
    src: "https://www.beyoung.in/desktop/images/product-details-2/homegrown.png",
    alt: "happy-icon",
    width: 60,
    height: 60,
    text: "3M+ Happy Beyoungsters",
    className: "happy-icon",
  },
  {
    src: "https://www.beyoung.in/desktop/images/product-details-2/homegrown.png",
    alt: "packed-icon",
    width: 60,
    height: 60,
    text: "Packed with safety",
    className: "packed-icon",
  },
];
const SLIDES = [
  "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_base_28_02_2024_700x933.jpg",
  "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_pocket_13_12_2023_700x933.jpg",
  "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_full_2_13_12_2023_700x933.jpg",
  "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_feature_image_13_12_2023_700x933.jpg",
  "https://www.beyoung.in/api/cache/catalog/products/dual_pocket_jogger_3_12_2022/crocodile_green_dual_pocket_cargo_joggers_full_1_13_12_2023_700x933.jpg",

];
const OPTIONS = {};

const Products = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-page-main-div mt-3">
      <div className="container breadcrumbs-main"></div>
      <section className="container shirt-product-main">
        <div className="product-details-new flex flex-row justify-center items-start">
          <div className="left-part">
            
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>

          <ProductDetails
            productTitle={product.title}
            productType={product.type}
            productPrice={product.price}
            productColors={product.colorsAvailable}
            productMrp={product.mrpPrice}
          />
        </div>
      </section>
      <section className="beyoung-icons-container  container mx-auto">
        <div className="flex flex-row justify-around items-center">
          {beYoungIcons.map((byIcons, index) => (
            <div
              key={index}
              className={`${byIcons.className} border border-[#EBEBEB80] flex flex-col justify-center items-center p-[30px]  w-[24%]`}
            >
              <img
                src={byIcons.src}
                alt={byIcons.alt}
                width={byIcons.width}
                height={byIcons.height}
                className="rounded-[50%]"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 0px 12px 0px",
                }}
              />
              <p className="text-center font-semibold">{byIcons.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
