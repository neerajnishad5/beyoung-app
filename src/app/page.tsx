import SliderSwiper from "@/components/swiper-slider";
import TabsComponent from "@/components/tabs-component";
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
const bigSaving = [
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Full-Sleeves-T-shirts-banner.jpg",
    style: "bg-green-500",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Plain-T-Shirts-banner.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Oversized-T-shirts-banner.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Polo-T-shirts-banner.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Boxers-banner.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Jeans-banner.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Chino-Pants-banner.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/new-bb/mobile/big-saving/Pyjama-banner.jpg",
  },
];
export const metadata = {
  title: "BeYoung | India's Fashion Destination",
  description: "BeYoung homepage",
};

const items = [
  {
    title: "Cargos",
    content: (
      <div
        style={{
          borderRadius: "11px",
        }}
      >
        <SliderSwiper
          images={bigSaving}
          slidesPerView={4}
          isLoop={true}
          spaceBetween={53}
          className={""}
          imageStyles={``}
          showNavigation={true}
        />
      </div>
    ),
  },
  {
    title: "Jeans",
    content: (
      <div
        style={{
          borderRadius: "11px",
        }}
      >
        <SliderSwiper
          images={bigSaving}
          slidesPerView={4}
          isLoop={true}
          spaceBetween={53}
          className={""}
          imageStyles={``}
          showNavigation={true}
        />
      </div>
    ),
  },
  {
    title: "Pyjamas",
    content: (
      <div
        style={{
          borderRadius: "11px",
        }}
      >
        <SliderSwiper
          images={bigSaving}
          slidesPerView={4}
          isLoop={true}
          spaceBetween={53}
          className={""}
          imageStyles={``}
          showNavigation={true}
        />
      </div>
    ),
  },
];

const featuredOnImages = [
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Deccan-Herald.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/ET-Retail.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/Mid-Day.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/VCCircle.jpg",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/1.png",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/2.png",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/3.png",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/5.png",
  },
  {
    link: "https://www.beyoung.in/api/catalog/homepage-3-10/logos-new/4.png",
  },
];

const  Home = () => {
  return (
    <div className="parent">
      <div className="relative">
        <SliderSwiper
          images={images}
          slidesPerView={1}
          isLoop={true}
          spaceBetween={53}
          // className={""}
          // imageStyles={``}
          showNavigation={false}
        />
        <div className="pt-12 flex flex-row justify-items-center items-center px-44">
          <SliderSwiper
            images={stripImages}
            slidesPerView={1}
            isLoop={true}
            spaceBetween={53}
            // className={""}
            // imageStyles={``}
            showNavigation={false}
          />
        </div>
        <div className="bb-exclusive-collection pt-12 px-44">
          <img
            src="https://beyoung.in/api/catalog/new-bb/mobile/BB-campaign-section-desktop-view.jpg"
            alt="bb-exclusive-collection"
          />
        </div>
        <div className="big-saving">
          <p
            className="text-center mt-12 font-medium"
            style={{
              fontSize: "26px",
            }}
          >
            BIG SAVING ZONE
          </p>
          <p
            className="text-center font-medium mb-4"
            style={{
              fontSize: "18px",
            }}
          >
            EVERYDAY CASUALS
          </p>
          <div className="big-saving-slider">
            <SliderSwiper
              images={bigSaving}
              slidesPerView={4}
              isLoop={true}
              className={"rounded"}
              spaceBetween={45}
              imageStyles={"rounded"}
              showNavigation={true}
            />
          </div>
          <div className="new-drops text-center m-5 font-medium">
            <p
              style={{
                fontSize: "26px",
              }}
            >
              NEW DROPS
            </p>
            <p
              style={{
                fontSize: "18px",
              }}
            >
              MUST HAVE TRENDZZZ
            </p>
            <div className="new-drops mt-2">
              <TabsComponent items={items} />
            </div>
            {/* <div className="test my-10 flex flex-row justify-center h-[10px]">
              <div className="line  bg-yellow-400 w-1/4"></div>
              <div className="text uppercase">
                <span className="mx-auto w-[5rem] text-[1.625rem]">Featured on</span>
              </div>
              <div className="line  bg-yellow-400 w-1/4"></div>
            </div> */}

            <div className="featured-on p-10 my-10">
              <div className="relative text-center p-4">
                {/*   Line  */}
                <div className="absolute top-1/2 left-0 w-full z-0">
                  <hr className="border-t-4 border-[#ffdd00]" />
                </div>

                {/*   Text  */}
                <p className="font-medium bg-white uppercase relative z-10 inline-block px-4 text-3xl">
                  Featured on
                </p>
              </div>
              <div className="carousel hover:cursor-grab p-5">
                <SliderSwiper
                  images={featuredOnImages}
                  slidesPerView={5}
                  isLoop={true}
                  spaceBetween={53}
                  className={""}
                  imageStyles={``}
                  showNavigation={false}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;