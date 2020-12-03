import { storageService } from "../services/utils";
import {
  getCityWeatherInfoByKey,
  getCityDailyForecasts,
  getCityWeatherInfoByCoords,
} from "../services/dataService";

const _SetCity = (city) => ({ type: "SET_CITY_WEATHER", city: city });
const _showModal = (modalInfo) => ({
  type: "SHOW_MODAL",
  modalInfo: modalInfo,
});
const _closeModal = () => ({ type: "CLOSE_MODAL" });
const _toggleTemperatureUnit = () => ({ type: "TOGGLE_TEMPERATURE_UNIT" });
const _toggleDarkMode= () => ({ type: "TOGGLE_DARK_MODE" });
const _updateFavoriteCities = (city) => {
  return {
    type: "UPDATE_FAVORITE_CITIES",
    city: city,
  };
};

const _loadFavoriteCities = (favoriteCities) => {
  return {
    type: "LOAD_FAVORITES_CITIES",
    favoriteCities: favoriteCities,
  };
};

export function toggleTemperatureUnit() {
  return (dispatch) => {
    dispatch(_toggleTemperatureUnit());
  };
}

export function toggleDarkMode() {
  return (dispatch) => {
    dispatch(_toggleDarkMode());
  };
}

export function updateFavoriteCities(city) {
  return async (dispatch) => {
    const cityWeather = await getCityWeatherInfoByKey(city.Key);

    const cityToSave = cityWeather
      ? {
          ...cityWeather[0],
          LocalizedName: city.LocalizedName,
          Key: city.Key,
        }
      : null;

    dispatch(_updateFavoriteCities(cityToSave));
  };
}

export function loadFavoriteCities() {
  const favoriteCityFromStorage =
    storageService.load("favoriteCities", []) || [];
  return async (dispatch) => {
    if (favoriteCityFromStorage && favoriteCityFromStorage[0]) {
      dispatch(_loadFavoriteCities(favoriteCityFromStorage));
    } else {
      dispatch(_loadFavoriteCities([]));
    }
  };
}

export function showModal(modalInfo) {
  return (dispatch) => dispatch(_showModal(modalInfo));
}

export function closeModal() {
  return (dispatch) => dispatch(_closeModal());
}



export function setCityByLocation(coords, temperatureUnit) {
  return async (dispatch) => {
    const cityLocation = await getCityWeatherInfoByCoords(coords);
    let [cityWeather, cityForecast] = await Promise.all([
      getCityWeatherInfoByKey(cityLocation?.Key || "123"),
      getCityDailyForecasts(
        cityLocation?.Key || "123",
        temperatureUnit === "Metric" ? true : false
      ),
    ]);

    const cityToSet =
      cityWeather && cityForecast
        ? {
            ...cityWeather[0],
            Key: cityLocation.Key,
            LocalizedName: cityLocation.LocalizedName,
            dailyForecasts: [...cityForecast.DailyForecasts],
          }
        : null;
    dispatch(_SetCity(cityToSet));
  };
}

export function setCity(city, temperatureUnit) {
  return async (dispatch) => {
    let [cityWeather, cityForecast] = await Promise.all([
      getCityWeatherInfoByKey(city.Key),
      getCityDailyForecasts(
        city.Key,
        temperatureUnit === "Metric" ? true : false
      ),
    ]);

    if (cityWeather && cityForecast) {
      const cityToSet = {
        ...cityWeather[0],
        LocalizedName: city.LocalizedName,
        Key: city.Key,
        dailyForecasts: cityForecast.DailyForecasts,
      };
      dispatch(_SetCity(cityToSet));
    } else {
      dispatch(
        _showModal({
          type: "Failed",
          msg: `Failed to Fetch Data for server`,
        })
      );
    }
  };
}
