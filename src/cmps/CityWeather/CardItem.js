import React from "react";
import { getDayOfWeek } from "../../services/utils";

const CardItem = (props) => {
  const { card } = props;
  const todayDate = card.Date ? new Date(card.Date) : new Date();
  return (
    <div className="cardItem">
      <span>
        Day: {card?.Temperature.Maximum.Value}
        {card?.Temperature.Maximum.Unit}
      </span>
      <span>
        Night: {card?.Temperature.Minimum.Value}
        {card?.Temperature.Minimum.Unit}
      </span>
      <div
        className="weatherImgContainer"
        style={{ backgroundImage: `url('./images/${card?.Day.Icon}.png')` }}
      ></div>
      <span className="day">{getDayOfWeek(todayDate.getDay())}</span>
    </div>
  );
};

export default CardItem;
