import React from "react";
import Button from "../ui/Button";
import FruitsSlider from "./FruitsSlider";

function Hero() {
  return (
    <section className="w-full bg-sectionBg overflow-x-hidden" id="home">
      <div className="w-full bg-white px-5 pt-16 max-w-[1200px] flex flex-col items-center mx-auto">
        <div className="w-full max-w-[800px]">
          <div className="flex flex-col items-center">
            <Button className="outline py-3 px-3 h-6 flex items-center justify-center">
              Natures Best, Exported
            </Button>
            <h1 className="text-textTitle font-semibold text-2xl md:text-3xl lg:text-5xl py-2 text-center">
              From <span className="text-[#036D2B]">Nigerian Farmlands</span> to
              Tables Around the World.
            </h1>
            <p className="text-textContent py-2 text-center">
              Sumogo Ltd is a trusted Nigerian agro-processing and export
              company turning Africas harvest into premium fresh, dried, and
              frozen foods, spices, and nuts from tropical fruits to essential
              ingredients like onions and ginger for global markets
            </p>
            <div className="py-2 flex flex-col md:flex-row gap-3">
              <Button
                varient="green"
                className="p-6 h-12 flex items-center justify-center"
              >
                Explore Our Products
              </Button>
              <Button className="p-6 h-12 flex items-center justify-center text-[#474747]">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>

        {/* FruitsSlider with full width */}
        <div className="w-screen relative mt-8">
          <FruitsSlider />
        </div>
      </div>
      <div className="bg-darkGreen md:w-[80%] rounded-2xl mx-5 md:mx-auto p-6  -mt-16 relative z-10">
        <p className="text-white text-center">
          Our commitment to quality, sustainability, and traceability ensures
          that every product fresh or dried meets international standards and
          nourishes homes across continents.
        </p>
      </div>
    </section>
  );
}

export default Hero;
