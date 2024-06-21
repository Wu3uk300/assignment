import CityPageCard from "@/components/CityPageCard";
import React from "react";

const CityPage = async ({ params }: { params: { citiesId: string } }) => {
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
  const response = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/cities"
  );
  const data = await response.json();
  const bigCities = data.data.filter((city: City) => {
    let totalPopulation = 0;
    city.populationCounts.forEach((populationCount: PopulationCount) => {
      totalPopulation = parseInt(populationCount.value);
    });
    return totalPopulation > 4500000;
  });

  const city = bigCities[parseInt(params.citiesId) - 1];

  return (
    <div className="citypage">
      <CityPageCard city={city} />
    </div>
  );
};

export default CityPage;
