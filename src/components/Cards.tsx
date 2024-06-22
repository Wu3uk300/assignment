import React from "react";
import CardShape from "./CardShape";
import "@/styles/Cards.scss";

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

interface CardsProps {
  value: City[];
}

const Cards = ({ value }: CardsProps) => {
  return (
    <div className="cards">
      {value.map((item: City, index: number) => (
        <div className="cards__card" key={item.city}>
          <CardShape index={index + 1} city={item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
