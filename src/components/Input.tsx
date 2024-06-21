import "@/styles/Input.scss";
export const Input = ({ children }: any) => {
  return (
    <div className="input">
      <div className="cities__inputData">
        <input
          className="input__data"
          type="text"
          placeholder="Type in the city you want to find"
        />
      </div>

      <div className="cities__content">
        <div className="cities__content-filtration">{children}</div>
        <div className="cities__content-cards">{children}</div>
      </div>
    </div>
  );
};
