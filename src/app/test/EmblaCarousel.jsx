import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./ThumbButton";

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
      <div className="">
        <div className="" ref={emblaThumbsRef}>
          <div
            className="embla-thumbs__container flex flex-col h-9 w-9"
            style={
              {
                // overflow: 'scroll'
              }
            }
          >
            {slides.map((img, index) => (
              <div className="images">
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
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((img, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <img src={img} alt="" srcset="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
