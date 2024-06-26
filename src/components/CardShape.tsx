import "@/styles/CardShape.scss";
import CardInfo from "./CardInfo";
import Link from "next/link";
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

interface CardShapeProps {
  city: City;
  index: number;
}

const CardShape: React.FC<CardShapeProps> = async ({ city, index }) => {
  const accessKey = "DfRX8EoMTOmfvVv8p8DXrwXygHUJThjH0C23W3QMgc09IHMPpqcthceP";
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
  console.log(data.data);

  return (
    <Link href={`/cities/${index}`}>
      <div className="card">
        <CardInfo source={data.photos[0].src.medium} city={city} />
      </div>
    </Link>
  );
};

export default CardShape;
