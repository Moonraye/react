import React from "react";
import projectsData from './data/projects-data.json';

export default function Carousel({ currentIndex, setCurrentIndex }) {
  const length = projectsData.length;
  let visibleItems;

  if (window.innerWidth < 768) {
    visibleItems = 1;
  } else {
    visibleItems = 3;
  }
  const nextSlide = () => {
    if (currentIndex < length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < length - visibleItems;
  return (
    <>
      <button
        id="prev"
        className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full 
        shadow-md hover:bg-white
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={prevSlide}
        disabled={!canGoPrev}
      >
         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
      </button>
      <button
        id="next"
        className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full 
        shadow-md hover:bg-white
           disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={nextSlide}
        disabled={!canGoNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </>
  );
}
