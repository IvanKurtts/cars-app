"use client";

import Image from "next/image";
import { CustomButton } from "./CustomButton";
import { useEffect } from "react";

export const Main = ({ limit }: { limit: number }) => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const nextSection = document.getElementById("cars-container");
    const element = nextSection?.children[nextSection?.childNodes.length - 10];
    if (element && limit > 10) {
      element.scrollIntoView();
    }
  }, [limit]);

  return (
    <div className="main">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="main__title">
          This is an Application for cars presentation!
        </h1>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="main__image-container">
        <div className="main__image">
          <Image src="/main.png" alt="main" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};
