import { colors, colorIds } from "@/constants";
import { CarProps, FilterProps } from "@/types";
import axios from "axios";

export async function fetchCars({
  limit,
  brand,
  model,
  color,
  sort,
}: FilterProps) {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}?limit=${limit}&brand=${brand}&model=${model}&color=${color}&sort=${sort}`,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year, color } = car;

  let colorId;
  for (let i = 0; i < colors.length; i++) {
    if (color === colors[i].toLowerCase()) colorId = colorIds[i];
  }

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("paintId", `${colorId}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};

export const formatString = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const formatTransmissionType = (value: string) => {
  if (value === "a") return "Automatic";
  if (value === "m") return "Mechanical";
  if (value === "am") return "Robotic";
};
