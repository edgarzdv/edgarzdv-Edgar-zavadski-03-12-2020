import React from "react";
import { useHistory } from "react-router";
const CardItem = (props) => {
  const { card, temperatureUnit, setCity } = props;
  const history = useHistory();

  const showWeather = () => {
    setCity(card);
    history.push(`/${card.Key}`);
  };

  const getTempValue = () => {
    if (temperatureUnit === "Metric") {
      return card?.Temperature?.Metric.Value + card?.Temperature?.Metric.Unit;
    } else {
      return card?.Temperature.Imperial.Value + card?.Temperature.Imperial.Unit;
    }
  };
  return (
    <div className="cardItem" onClick={showWeather}>
      <span className="cityName">{card?.LocalizedName}</span>
      <span className="temperature">{getTempValue()}</span>
      <div
        className="weatherImgContainer"
        style={{ backgroundImage: `url('./images/${card?.WeatherIcon}.png')` }}
      ></div>
      <span className="weatherTxt">{card?.WeatherText}</span>
    </div>
  );
};

export default CardItem;
