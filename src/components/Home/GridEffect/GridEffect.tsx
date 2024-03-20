import React from "react";
import anime from "animejs";

const GridEffect = () => {
  return (
    <div className="-z-5 absolute right-0 top-10 sm:right-12">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 35;
const GRID_HEIGHT = 25;

const DotGrid = () => {
  const handleDotClick = (e: React.MouseEvent<HTMLElement> ) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  let dots = [];

  dots = Array.from({ length: GRID_WIDTH * GRID_HEIGHT }, (_, index) => {
    const i = Math.floor(index / GRID_HEIGHT);
    const j = index % GRID_HEIGHT;
    return (
      <div
        className="group  rounded-full p-2 transition-colors hover:bg-slate-600"
        data-index={index}
        key={`${i}-${j}`}
      >
        <div
          className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          data-index={index}
        />
      </div>
    );
  });

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default GridEffect;
