import { CarCard } from "@/components/CarCard";
import { Main } from "@/components/Main";
import { SearchBar } from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fetchCars } from "@/utils";
import Link from "next/link";
import { CarProps, HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const limit = searchParams.limit;
  let allCars: CarProps[] = await fetchCars({
    limit: limit || 10,
    brand: searchParams.brand || '',
    model: searchParams.model || '',
    color: searchParams.color || '',
    sort: searchParams.sort || 'default',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Main limit={limit ? limit : 10} />
      <div className="mt-12 sm:px-16 px-6 py-4 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <>
            <section>
              <div className="home__cars-wrapper" id="cars-container">
                {allCars?.map((car) => (
                  <Link href={`/${car.id}`} key={car.id}>
                    <CarCard car={car} />
                  </Link>
                ))}
              </div>
            </section>
            <ShowMore
              pageNumber={(limit || 10) / 10}
              isNext={(limit || 10) > allCars.length}
            />
          </>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
