"use client";
import "@/styles/CardInfo.scss";

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
interface CardInfoProps {
  city: City;
  source: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ city, source }) => {
  const cityBig = city.city.toUpperCase();
  const countryBig = city.country.toLocaleUpperCase();
  return (
    <div className="cardinfo">
      <div className="cardinfo__inner">
        <div
          style={{ backgroundImage: `url(${source})` }}
          className="cardinfo__face cardinfo__front"
        >
          <div className="cardinfo__text">{city.city}</div>
        </div>
        <div className="cardinfo__face cardinfo__back">
          <p className="cardinfo__back-text">
            City {cityBig} is located in {countryBig}. This is faboulous city!
            Click for more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
