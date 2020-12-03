const API_KEY = "FM8dK4YJ8ogaN7NpHrCsugUzGniIr1Gg";

export const getCityWeatherInfoByKey = async (key) => {
  const path = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}&details=true`;
  try {
    const res = await fetch(path);
    const data = await res.json();
    return [...data];
  } catch (ex) {
    console.error(key, ex);
  }
};

export const getAutoComplete = async (value) => {
  const path = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value.toLowerCase()}`;

  try {
    const res = await fetch(path);
    const data = await res.json();
    return { ...data };
  } catch (ex) {
    console.error(value, ex);
  }
};

export const getCityDailyForecasts = async (key, isMetric) => {
  const path = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&metric=${isMetric}`;
  try {
    const res = await fetch(path);
    const data = await res.json();
    return { ...data };
  } catch (ex) {
    console.error(key, ex);
  }
};

export const getCityWeatherInfoByCoords = async (coords) => {
  const path = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${coords.lat},${coords.lng}&details=true`;
  try {
    const res = await fetch(path);
    const data = await res.json();
    return { ...data };
  } catch (ex) {
    console.error(coords, ex);
  }
};
