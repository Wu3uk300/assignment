import React from "react";
import Cards from "@/components/Cards";
import Filtration from "@/components/Filtration";
import "@/styles/CitiesPage.scss";

interface PopulationCount {
  year: string;
  value: string;
  sex: string;
  reliability: string;
}

interface City {
  city: string;
  country: string;
  populationCounts: PopulationCount[];
}

interface CitiesPageProps {
  searchParams: { content: string };
}

const fetchCitiesData = async () => {
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities"
  );
  const data = await response.json();
  const bigCities = data.data.filter((city: City) => {
    let totalPopulation = 0;
    city.populationCounts.forEach((populationCount: PopulationCount) => {
      totalPopulation = parseInt(populationCount.value, 10);
    });
    return totalPopulation > 4500000;
  });

  return bigCities;
};

const CitiesPage = async ({ searchParams }: CitiesPageProps) => {
  const query = searchParams.content || "";
  const bigCities = await fetchCitiesData();
  const filteredCities = bigCities.filter((city: City) =>
    city.city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="cities">
      <div className="cities__header">Know Your City</div>

      <div className="cities__inputData">
        <form action="/cities" method="get">
          <input
            className="input__data"
            type="text"
            placeholder="Type in the city you want to find"
            name="content"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="cities__content">
        <div className="cities__content-filtration">
          <Filtration />
        </div>
        <div className="cities__content-cards">
          <Cards value={filteredCities} />
        </div>
      </div>
    </div>
  );
};

export default CitiesPage;
