"use client";

import { useState } from "react";
import { SearchBrand } from "./SearchBrand";
import Image from "next/image";
import { SearchColor } from "./SearchColor";
import { useRouter } from "next/navigation";
import { SortBar } from "./SortBar";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

export const SearchBar = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [sort, setSort] = useState("Default");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearchParams(
      brand.toLowerCase(),
      model.toLowerCase(),
      color.toLowerCase(),
      sort.toLowerCase()
    );
  };

  const updateSearchParams = (
    brand: string,
    model: string,
    color: string,
    sort: string,
  ) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (brand || brand === "") {
      searchParams.set("brand", brand);
    } else {
      searchParams.delete("brand", brand);
    }
    if (model || model === "") {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model", model);
    }
    if (color || color === "") {
      searchParams.set("color", color);
    } else {
      searchParams.delete("color", color);
    }
    if (sort || sort === "default") {
      searchParams.set("sort", sort);
    } else {
      searchParams.delete("sort", sort);
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBrand brand={brand} setBrand={setBrand} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20] ml-4"
          alt="car-model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Car model"
          className="search-model__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <SearchColor color={color} setColor={setColor} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <SortBar sort={sort} setSort={setSort} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
