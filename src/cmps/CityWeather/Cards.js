import React from "react";
import CardItem from "./CardItem";
import { getRandomId } from "../../services/utils";

const Cards = (props) => {
  const { cardItems, temperatureUnit } = props;
  return (
    <div className="cards">
      {cardItems
        ? cardItems.map((item) => (
            <CardItem
              key={getRandomId()}
              card={item}
              temperatureUnit={temperatureUnit}
            />
          ))
        : ""}
    </div>
  );
};

export default Cards;
