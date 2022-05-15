import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./swiperButton";
import useEmblaCarousel from "embla-carousel-react";
import "./swiper.css";
import Media from "./media";

type EmblaProps = {
    slides: Array<number>,
}
const EmblaCarousel = ({ slides } :EmblaProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
         
            <div className="embla__slide" >
              <div className="embla__slide__inner">
               <Media />
              </div>
            </div>
  
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
