import Image from "next/image";
import "@/styles/CityPageCard.scss";
import CityPicture from "./CityPicture";
import Link from "next/link";
import Map from "@/components/Map";

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
interface CityPageCardProps {
  city: City;
}

const CityPageCard: React.FC<CityPageCardProps> = async ({ city }) => {
  const population = Math.round(parseInt(city.populationCounts[0].value));
  const accessKey = "YGgfJPTeefrt54Wu4JPqrU60DnlWl2cAeJgsq1CASC62GUu6BVCrJLNv";
  const query = encodeURIComponent(city.city);
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=1`,
    {
      headers: {
        Authorization: accessKey,
      },
    }
  );
  const data = await response.json();

  const responseGeo = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
  );
  const dataGeo = await responseGeo.json();
  const { lat, lon } = dataGeo[0];

  return (
    <div className="citypagecard">
      <div className="citypagecard__return">
        <Link href="/cities">&larr;</Link>
      </div>

      <div className="citypagecard__header">Welcome to {city.city}!</div>
      <div className="citypagecard__image">
        <CityPicture source={data.photos[0].src.medium} />
      </div>
      <div className="citypagecard__info">
        <p>
          The wonderful city of {city.city} is located in {city.country}.
          Population of {city.city} is {population} people. You should
          definitely visit this wonderful city!
          <br /> <br />
          Scroll down to check it on map!
          <br />
          &darr;
        </p>
      </div>

      <div className="citypagecard__map">
        <Map lat={lat} lon={lon} />
      </div>
    </div>
  );
};

export default CityPageCard;
