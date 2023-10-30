import { CarCardProps } from "@/types";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src={generateCarImageUrl(car)}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <h2 className="car-card__content-title">
          {car.make} {car.model}, {car.year}
        </h2>
        <h2 className="car-card__content-title">{car.price}$</h2>
      </div>
    </div>
  );
};
