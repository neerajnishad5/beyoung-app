import SliderSwiper from "@/components/swiper-slider";
import Image from "next/image";
// Example data with image links
const images = [
  {
    link: "https://beyoung.in/api/catalog/new-bb/mobile/banner/bhuvan-banner-desktop-view124357.jpg",
  },
  {
    link: "https://beyoung.in/api/catalog/new-bb/desktop/banner/cargo-banner-desktop-view.jpg",
  },
  {
    link: "https://beyoung.in/api/catalog/new-bb/desktop/banner/Plain-T-Shirts-banner-desktop-view-home-page.jpg",
  },
];
const stripImages = [
  {
    link: "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-beyoung-view.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktopview-freecharge.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-bajaj.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/strip-homepage/Desktop/Strip-desktop-view-mobikwik.jpg",
  },
];
export const metadata = {
  title: "BeYoung | India's Fashion Destination",
  description: "BeYoung homepage",
};

export default function Home() {
  return (
    <div className="parent">
      <div>
        <div className="swiper-slider">
          <SliderSwiper images={images} slidesPerView={1} isLoop={true} />
          <div className="pt-12 flex flex-row justify-items-center items-center px-44">
            <SliderSwiper
              images={stripImages}
              slidesPerView={2}
              isLoop={true}
            />
          </div>
          <div className="bb-exclusive-collection pt-12 px-44">
            <img
              src="https://beyoung.in/api/catalog/new-bb/mobile/BB-campaign-section-desktop-view.jpg"
              alt="bb-exclusive-collection"
            />
          </div>
          <p className="text-center text-2xl mt-12 font-medium">
            BIG SAVING ZONE
          </p>
          <p className="text-center text-xl font-medium mb-4">EVERYDAY CASUALS</p>
        </div>
      </div>
    </div>
  );
}
