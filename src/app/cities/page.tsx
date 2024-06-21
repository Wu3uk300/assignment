import Cards from "@/components/Cards";
import Filtration from "@/components/Filtration";
import "@/styles/CitiesPage.scss";

const CitiesPage = () => {
  return (
    <div className="cities">
      <div className="cities__header">Know Your City</div>

      <div className="cities__inputData">
        <input type="text" placeholder="Type in the city you want to find" />
      </div>

      <div className="cities__content">
        <div className="cities__content-filtration">
          <Filtration />
        </div>
        <div className="cities__content-cards">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default CitiesPage;
