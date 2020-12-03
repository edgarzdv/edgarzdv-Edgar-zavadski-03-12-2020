import React from "react";
import "./toggleBtns.scss";
import { connect } from "react-redux";
import {
  toggleTemperatureUnit,
  toggleDarkMode,
  setCity,
} from "../../actions/dataActions";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const ToggleBtns = (props) => {
  const {
    temperatureUnit,
    toggleTemperatureUnit,
    city,
    setCity,
    isDarkMode,
    toggleDarkMode
  } = props;

  const handleToggle = () => {
    setCity(city, temperatureUnit === "Metric" ? "Imperial" : "Metric");
    toggleTemperatureUnit();
  };
  return (
    <div className="toggleButtons">
      <FormControlLabel
        control={
          <Switch
            checked={temperatureUnit === "Metric"}
            onChange={handleToggle}
            color="default"
          />
        }
        label={temperatureUnit}
      />
      <FormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            color="default"
          />
        }
        label={isDarkMode ? "Dark Mode" : "Default Mode"}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  temperatureUnit: state.temperatureUnit,
  isDarkMode: state.isDarkMode,
  city: state.city,
});
const mapDispatchToProps = {
  toggleTemperatureUnit,
  setCity,
  toggleDarkMode,
};
export default connect(mapStateToProps, mapDispatchToProps)(ToggleBtns);
