export const storageService = {
  save: (key, value) => {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
  },

  load: (key, defaultValue) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : defaultValue;
  },
};

export function checkIfExist(item, list) {
  let idx = -1;
  idx =
    list.length && item
      ? list.findIndex((listItem) => listItem.Key === item.Key)
      : -1;
  return idx >= 0 ? true : false;
}

export function getRandomId(length = 6) {
  var txt = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return txt;
}
export function getDayOfWeek(dayNum) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[dayNum];
}
