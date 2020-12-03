import { storageService } from "../services/utils";
let initialState = {
  city: null,
  favoriteCities: [],
  modalState: { modalMsg: "", isModalShowen: false },
  temperatureUnit: "Metric",
  isDarkMode: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SET_CITY_WEATHER":
      let idx;
      let existInFavorites;
      let cityToSave;
      if (state.favoriteCityIds?.length) {
        idx = state.favoriteCityIds.findIndex(
          (city) => city.Key === action?.city?.Key
        );
        existInFavorites = idx >= 0 ? true : false;
      }
      if (action.city) {
        cityToSave = {
          city: { ...action.city, isExistInFavorites: existInFavorites },
        };
      } else {
        cityToSave = null;
      }
      return {
        ...state,
        ...cityToSave,
      };
    case "TOGGLE_TEMPERATURE_UNIT":
      const unitToSave =
        state.temperatureUnit === "Metric" ? "Imperial" : "Metric";
      return {
        ...state,
        temperatureUnit: unitToSave,
      };
    case "TOGGLE_DARK_MODE":
      const modeToSave = !state.isDarkMode;
      return {
        ...state,
        isDarkMode: modeToSave,
      };
    case "SHOW_MODAL":
      const modalToSave = {
        modalMsg: action.modalInfo.msg,
        type: action.modalInfo.type,
        isModalShowen: !state.isModalShowen,
      };
      return {
        ...state,
        modalState: modalToSave,
      };
    case "CLOSE_MODAL":
      let modalStateCopy = { ...state.modalState };
      modalStateCopy = {
        modalMsg: "",
        type: "",
        isModalShowen: false,
      };
      return {
        ...state,
        modalState: modalStateCopy,
      };

    case "UPDATE_FAVORITE_CITIES":
      let favoriteCitiesCopy = [...state.favoriteCities];
      let cityCopyToUpdate = { ...state.city };
      if (favoriteCitiesCopy.length && favoriteCitiesCopy[0] !== null) {
        const idxIfFind = favoriteCitiesCopy?.findIndex(
          (favorite) => favorite?.Key === action.city?.Key
        );

        if (idxIfFind >= 0) {
          favoriteCitiesCopy.splice(idxIfFind, 1);
          cityCopyToUpdate.isExistInFavorites = false;
        } else {
          favoriteCitiesCopy = [...favoriteCitiesCopy, action.city];
          cityCopyToUpdate.isExistInFavorites = true;
        }
        favoriteCitiesCopy = favoriteCitiesCopy.filter(
          (value) => Object.keys(value).length !== 0
        );
        storageService.save("favoriteCities", favoriteCitiesCopy);
      } else {
        favoriteCitiesCopy = [action.city];
        cityCopyToUpdate.isExistInFavorites = true;
        favoriteCitiesCopy = favoriteCitiesCopy.filter(
          (value) => Object.keys(value).length !== 0
        );
        storageService.save("favoriteCities", [action.city]);
      }

      return {
        ...state,
        favoriteCities: favoriteCitiesCopy,
        city: cityCopyToUpdate,
      };

    case "LOAD_FAVORITES_CITIES":
      return {
        ...state,
        favoriteCities: action.favoriteCities,
      };
    default:
      break;
  }
  return state;
}
