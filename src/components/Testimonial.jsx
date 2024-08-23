import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const testimonials = [
  {
    quote:
      "To be honest, they are brilliant, and the team is perfect. The way they present the work is great. We are totally happy with them. We have been very successful with what we have done since the rebranding so it has been a plus for us.",
    name: "Anandpreet Singh",
    title: "Co-Owner, Giani's, India",
    rating: 5,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia voluptate veritatis sint ut nisi velit mollitia libero, maiores numquam quas quibusdam harum minus tempora totam voluptatibus qui magni illum.",
    name: "Anandpreet Singh",
    title: "Co-Owner, Giani's, India",
    rating: 5,
  },
  {
    quote:
      "To be honest, they are brilliant, and the team is perfect. The way they present the work is great. We are totally happy with them. We have been very successful with what we have done since the rebranding so it has been a plus for us.",
    name: "Anandpreet Singh",
    title: "Co-Owner, Giani's, India",
    rating: 5,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia voluptate veritatis sint ut nisi velit mollitia libero, maiores numquam quas quibusdam harum minus tempora totam voluptatibus qui magni illum.",
    name: "Anandpreet Singh",
    title: "Co-Owner, Giani's, India",
    rating: 5,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-[1170px] mx-auto">
      {/* Arrow Container on Top */}
      <div className="mb-[20px] flex justify-end pr-16">
        <button onClick={prevSlide} className="p-[8px] text-gray-400 ">
          <IoIosArrowRoundBack size={38} />
        </button>

        <button
          onClick={nextSlide}
          className="p-[8px] text-gray-500 hover:text-gray-700"
        >
          <IoIosArrowRoundForward size={50} />
        </button>
      </div>

      <div className="relative w-full p-[48px] bg-white shadow-sm">
        {/* Testimonial */}
        <div className="relative">
          <p className="mb-[12px]">{testimonials[currentIndex].quote}</p>

          <div className="mt-[26px]">
            <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
            <p className="text-[#8a8a8f]">{testimonials[currentIndex].title}</p>
            <div className="flex items-center mt-[12px]">
              {Array(testimonials[currentIndex].rating)
                .fill()
                .map((_, index) => (
                  <span
                    key={index}
                    className="text-yellow-500 text-[25px] mr-[4px] max-w-full"
                  >
                    ★
                  </span>
                ))}
            </div>
          </div>
          {/* Quotation Mark */}
          <div className="absolute top-auto -bottom-[64%] left-auto right-[15%] text-[#e34234] text-6xl">
            <img
              className="w-[132px] h-[132px]"
              src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/60361cc79149d53ea1486f77_Quote%20Red.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
