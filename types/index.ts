import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchBrandProps {
  brand: string;
  setBrand: (brand: string) => void;
}

export interface SearchColorProps {
  color: string;
  setColor: (color: string) => void;
}

export interface SortProps {
  sort: string;
  setSort: (sort: string) => void;
}

export interface CarProps {
  id: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
  color: string;
  price: number;
  range: number;
}

export interface CarCardProps {
  car: CarProps;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface FilterProps {
  limit?: number;
  brand?: string;
  model?: string;
  color?: string;
  sort?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

