import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CityWeather from "../../cmps/CityWeather/CityWeather";
import { connect } from "react-redux";
import {
  setCity,
  isDarkMode,
  setCityByLocation,
  updateFavoriteCities,
  loadFavoriteCities,
  toggleTemperatureUnit,
} from "../../actions/dataActions";

import Input from "../../cmps/Input/Input";
import "./weatherDetails.scss";
import useGeoLocation from "../../hooks/useGeoLocation";

const WeatherDetails = (props) => {
  const {
    city,
    setCity,
    isDarkMode,
    favoriteCities,
    temperatureUnit,
    setCityByLocation,
    loadFavoriteCities,
    updateFavoriteCities,
  } = props;
  const location = useGeoLocation();
  const { key } = useParams();

  useEffect(() => {
    !favoriteCities.length && loadFavoriteCities();
  }, []);

  useEffect(() => {
    if (key) {
      setCity({ Key: key }, temperatureUnit);
    } else if (location?.coordinates?.lat) {
      setCityByLocation(location.coordinates, temperatureUnit);
    } else {
      setCityByLocation(
        { lat: "32.109333", lng: "34.855499" },
        temperatureUnit
      );
    }
  }, []);

  const handleSetCity = (city) => {
    setCity(city, temperatureUnit);
  };
  return (
    <div
      className={`weatherDetails ${isDarkMode ? "darkMode" : "defaultMode"}`}
    >
      <Input setSearchResault={handleSetCity} />
      <CityWeather
        cityValue={city}
        favoriteCities={favoriteCities}
        updateFavoriteCities={updateFavoriteCities}
        temperatureUnit={temperatureUnit}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  city: state.city,
  isDarkMode: state.isDarkMode,
  favoriteCities: state.favoriteCities,
  temperatureUnit: state.temperatureUnit,
});
const mapDispatchToProps = {
  setCity,
  updateFavoriteCities,
  setCityByLocation,
  loadFavoriteCities,
  toggleTemperatureUnit,
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherDetails);
