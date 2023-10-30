"use client";

import { CarProps } from "@/types";
import {
  formatString,
  formatTransmissionType,
  generateCarImageUrl,
} from "@/utils";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CarInfo = () => {
  const [carInfo, setCarInfo] = useState<CarProps | null>(null);
  const params = useParams();

  const fetchCarInfo = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/${params.id}`);
    setCarInfo(response.data);
  };

  useEffect(() => {
    fetchCarInfo();
  }, []);

  const isElectricity = !(
    carInfo?.fuel_type === "gas" || carInfo?.fuel_type === "diesel"
  );

  return (
    <>
      {carInfo && (
        <div className="flex-1 flex flex-col gap-3">
          <div className="relative h-96 bg-pattern bg-cover bg-center rounded-lg">
            <Image
              src={generateCarImageUrl(carInfo)}
              alt="car model"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col gap-2 mx-32 mb-20">
            <h2 className="font-semibold text-xl capitalize">
              {carInfo.make} {carInfo.model}
            </h2>

            <div className="mt-3 flex flex-wrap gap-4">
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Brand</h4>
                <p className="text-black-100 font-semibold">
                  {formatString(carInfo.make)}
                </p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Model</h4>
                <p className="text-black-100 font-semibold">
                  {formatString(carInfo.model)}
                </p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Color</h4>
                <p className="text-black-100 font-semibold">
                  {formatString(carInfo.color)}
                </p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Price</h4>
                <p className="text-black-100 font-semibold">{carInfo.price}$</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Year</h4>
                <p className="text-black-100 font-semibold">{carInfo.year}</p>
              </div>
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Engine type</h4>
                <p className="text-black-100 font-semibold">
                  {formatString(carInfo.fuel_type)}
                </p>
              </div>
              {!isElectricity && (
                <div className="flex justify-between gap-5 w-full text-right">
                  <h4 className="text-grey capitalize">Transmission</h4>
                  <p className="text-black-100 font-semibold">
                    {formatTransmissionType(carInfo.transmission)}
                  </p>
                </div>
              )}
              {isElectricity && (
                <div className="flex justify-between gap-5 w-full text-right">
                  <h4 className="text-grey capitalize">Range</h4>
                  <p className="text-black-100 font-semibold">
                    {carInfo.range} km
                  </p>
                </div>
              )}
              <div className="flex justify-between gap-5 w-full text-right">
                <h4 className="text-grey capitalize">Drive</h4>
                <p className="text-black-100 font-semibold">
                  {carInfo.drive.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative w-full h-48">
              <Image
                src={generateCarImageUrl(carInfo, "29")}
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative w-full h-48">
              <Image
                src={generateCarImageUrl(carInfo, "13")}
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex-1 relative w-full h-48">
              <Image
                src={generateCarImageUrl(carInfo, "33")}
                alt="car model"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarInfo;
