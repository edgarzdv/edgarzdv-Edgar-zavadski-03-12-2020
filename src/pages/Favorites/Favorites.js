import React from "react";
import { connect } from "react-redux";
import "./favorites.scss";
import { loadFavoriteCities, setCity } from "../../actions/dataActions";
import Cards from "./Cards";

const Favorites = (props) => {
  const { favoriteCities, temperatureUnit,isDarkMode, setCity } = props;

  return (
    <div className={`favorites ${isDarkMode ? "darkMode" : "defaultMode"}`}>
      <Cards
        cardItems={favoriteCities}
        temperatureUnit={temperatureUnit}
        setCity={setCity}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isDarkMode: state.isDarkMode,
  favoriteCities: state.favoriteCities,
  temperatureUnit: state.temperatureUnit,
});
const mapDispatchToProps = {
  loadFavoriteCities,
  setCity,
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
