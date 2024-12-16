import React from "react";

const Slider = ({ slides, currentSlide }) => {
  return (
    <div className="container mx-auto text-center" >
      <h1 className={`text-xl md:text-2xl lg:text-3xl font-thin mb-4 text-[#7dbff5]`} data-aos='fade-right'>
        {slides[currentSlide].heading}
      </h1>
      <div className="flex items-center justify-center  text-center">
  <h1 className={`text-lg md:text-xl lg:text-xl font-light mb-4 text-white md:w-[50%]`} data-aos='fade-right'>
    {slides[currentSlide].text}
  </h1>
</div>
    </div>
  );
};

export default Slider;