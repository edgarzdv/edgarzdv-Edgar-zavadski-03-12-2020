import React from "react";
import CardItem from "./CardItem";
import { getRandomId } from "../../services/utils";

const Cards = (props) => {
  const { cardItems, temperatureUnit, setCity } = props;
  return (
    <div className="cardsContainer">
      {cardItems?.length ? (
        cardItems.map(
          (item) =>
            item && (
              <CardItem
                key={getRandomId()}
                temperatureUnit={temperatureUnit}
                setCity={setCity}
                card={item}
              />
            )
        )
      ) : (
        <span>No favorite cities yet</span>
      )}
    </div>
  );
};

export default Cards;
