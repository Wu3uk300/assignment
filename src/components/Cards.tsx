import CardShape from "./CardShape";
import "@/styles/Cards.scss";
export default async function Cards() {
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

  const names = [""];
  bigCities.map((item: City) => names.push(item.city));

  return (
    <div className="cards">
      {bigCities.map((item: City, index: number) => (
        <div className="cards__card" key={item.city}>
          <CardShape index={index + 1} city={item} />
        </div>
      ))}
    </div>
  );
}
