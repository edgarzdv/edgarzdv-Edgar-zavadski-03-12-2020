import React from "react";
import Cards from "./Cards";
import "./cityWeather.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { checkIfExist } from "../../services/utils";

const CityWeather = (props) => {
  const {
    cityValue,
    updateFavoriteCities,
    temperatureUnit,
    favoriteCities,
  } = props;
  const getTempValue = () => {
    if (temperatureUnit === "Metric") {
      return (
        cityValue?.ApparentTemperature?.Metric?.Value +
        cityValue?.ApparentTemperature?.Metric?.Unit
      );
    } else {
      return (
        cityValue?.ApparentTemperature?.Imperial?.Value +
        cityValue?.ApparentTemperature?.Imperial?.Unit
      );
    }
  };

  return (
    <div className="cityWeather">
      {cityValue ? (
        <React.Fragment>
          <div className="topSection">
            <div className="left">
              <div>
                <div
                  className="weatherImgContainer"
                  style={{
                    backgroundImage: `url('./images/${cityValue?.WeatherIcon}.png')`,
                  }}
                ></div>
              </div>
              <div>
                <span>{cityValue?.LocalizedName}</span>
                <span>{getTempValue()}</span>
              </div>
            </div>
            <div className="right">
              {checkIfExist(cityValue, favoriteCities) ? (
                <FavoriteIcon
                  style={{ fill: "red" ,cursor:'pointer'}}
                  onClick={() => updateFavoriteCities(cityValue)}
                />
              ) : (
                <FavoriteBorderIcon
                  style={{ fill: "red",cursor:'pointer' }}
                  onClick={() => updateFavoriteCities(cityValue)}
                />
              )}
            </div>
          </div>
          <h2 className="weatherDescription">{cityValue?.WeatherText}</h2>
          <Cards
            cardItems={cityValue?.dailyForecasts}
            temperatureUnit={temperatureUnit}
          />
        </React.Fragment>
      ) : (
        <span>There is no cities to show</span>
      )}
    </div>
  );
};

export default CityWeather;
