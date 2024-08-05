import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="main-container flex flex-row items-start justify-center">
      {/* thumbnails */}
      <div className="md:ms-64">
        <div className="" ref={emblaThumbsRef}>
          <div
            className="embla-thumbs__container"
            style={{
              // overflow: 'scroll'
              width: "8rem",
              height: "auto",
            }}
          >
            {slides.map((img, index) => (
              <div className="images p-1">
                <img
                  src={img}
                  alt={index + 1}
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* main image container */}
      <div className="parent">
        <div className="embla">
          <div className="" ref={emblaMainRef} style={{ overflow: "hidden" }}>
            <div className="embla__container">
              {slides.map((img, index) => (
                <div
                  className="embla__slide"
                  key={index}
                >
                  <img
                    src={img}
                    alt={index + "image"}
                    className="object-cover w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
                    style={
                      {
                        // maxWidth: '100%'
                      }
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
