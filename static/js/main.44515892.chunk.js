(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},111:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),i=n.n(a),c=n(12),o=n.n(c),s=(n(104),n(105),n(32)),u=n(13),l=n(161),d=n(164),j=n(166),v=n(122),p=n(82),f=n.n(p),O=n(63),b=n.n(O),m=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},toolBar:{display:"flex",justifyContent:"space-between"},right:{minWidth:"150px",display:"flex",justifyContent:"space-between"},linkWrapper:{display:"flex",flexDirection:"column",color:"inherit",textDecoration:"unset",alignItems:"center"}}})),h=function(){var e=m();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(d.a,{position:"static",children:Object(r.jsxs)(j.a,{className:e.toolBar,children:[Object(r.jsx)(v.a,{variant:"h6",className:e.title,children:Object(r.jsx)(s.c,{to:"/",className:e.linkWrapper,children:"Weather"})}),Object(r.jsxs)(v.a,{className:e.right,children:[Object(r.jsxs)(s.d,{to:"/favorites",className:e.linkWrapper,children:[Object(r.jsx)(b.a,{}),"Favorites"]}),Object(r.jsxs)(s.d,{to:"/",className:e.linkWrapper,children:[Object(r.jsx)(f.a,{}),"Weather"]})]})]})})})},y=function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},x=function(e,t){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):t};function g(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var C=function(e){var t,n=e.card,a=n.Date?new Date(n.Date):new Date;return Object(r.jsxs)("div",{className:"cardItem",children:[Object(r.jsxs)("span",{children:["Day: ",null===n||void 0===n?void 0:n.Temperature.Maximum.Value,null===n||void 0===n?void 0:n.Temperature.Maximum.Unit]}),Object(r.jsxs)("span",{children:["Night: ",null===n||void 0===n?void 0:n.Temperature.Minimum.Value,null===n||void 0===n?void 0:n.Temperature.Minimum.Unit]}),Object(r.jsx)("div",{className:"weatherImgContainer",style:{backgroundImage:"url('./images/".concat(null===n||void 0===n?void 0:n.Day.Icon,".png')")}}),Object(r.jsx)("span",{className:"day",children:(t=a.getDay(),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t])})]})},M=function(e){var t=e.cardItems,n=e.temperatureUnit;return Object(r.jsx)("div",{className:"cards",children:t?t.map((function(e){return Object(r.jsx)(C,{card:e,temperatureUnit:n},g())})):""})},I=(n(111),n(83)),k=n.n(I),T=function(e){var t,n,a=e.cityValue,c=e.updateFavoriteCities,o=e.temperatureUnit,s=e.favoriteCities;return Object(r.jsx)("div",{className:"cityWeather",children:a?Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsxs)("div",{className:"topSection",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"weatherImgContainer",style:{backgroundImage:"url('./images/".concat(null===a||void 0===a?void 0:a.WeatherIcon,".png')")}})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:null===a||void 0===a?void 0:a.LocalizedName}),Object(r.jsx)("span",{children:function(){var e,t,n,r,i,c,s,u;return"Metric"===o?(null===a||void 0===a||null===(e=a.ApparentTemperature)||void 0===e||null===(t=e.Metric)||void 0===t?void 0:t.Value)+(null===a||void 0===a||null===(n=a.ApparentTemperature)||void 0===n||null===(r=n.Metric)||void 0===r?void 0:r.Unit):(null===a||void 0===a||null===(i=a.ApparentTemperature)||void 0===i||null===(c=i.Imperial)||void 0===c?void 0:c.Value)+(null===a||void 0===a||null===(s=a.ApparentTemperature)||void 0===s||null===(u=s.Imperial)||void 0===u?void 0:u.Unit)}()})]})]}),Object(r.jsx)("div",{className:"right",children:(t=a,n=s,(n.length&&t?n.findIndex((function(e){return e.Key===t.Key})):-1)>=0?Object(r.jsx)(b.a,{style:{fill:"red",cursor:"pointer"},onClick:function(){return c(a)}}):Object(r.jsx)(k.a,{style:{fill:"red",cursor:"pointer"},onClick:function(){return c(a)}}))})]}),Object(r.jsx)("h2",{className:"weatherDescription",children:null===a||void 0===a?void 0:a.WeatherText}),Object(r.jsx)(M,{cardItems:null===a||void 0===a?void 0:a.dailyForecasts,temperatureUnit:o})]}):Object(r.jsx)("span",{children:"There is no cities to show"})})},w=n(31),S=n(36),N=n(28),E=n(15),D=n.n(E),U=n(8),F=n(25),_="FM8dK4YJ8ogaN7NpHrCsugUzGniIr1Gg",L=function(){var e=Object(F.a)(D.a.mark((function e(t){var n,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat(_,"&details=true"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",Object(S.a)(a));case 11:e.prev=11,e.t0=e.catch(1),console.error(t,e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(F.a)(D.a.mark((function e(t){var n,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(_,"&q=").concat(t.toLowerCase()),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",Object(S.a)(a));case 11:e.prev=11,e.t0=e.catch(1),console.error(t,e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(F.a)(D.a.mark((function e(t,n){var r,a,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat(_,"&metric=").concat(n),e.prev=1,e.next=4,fetch(r);case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,e.abrupt("return",Object(U.a)({},i));case 11:e.prev=11,e.t0=e.catch(1),console.error(t,e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}(),W=function(){var e=Object(F.a)(D.a.mark((function e(t){var n,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(_,"&q=").concat(t.lat,",").concat(t.lng,"&details=true"),e.prev=1,e.next=4,fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:return a=e.sent,e.abrupt("return",Object(U.a)({},a));case 11:e.prev=11,e.t0=e.catch(1),console.error(t,e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),R=function(e){return{type:"SET_CITY_WEATHER",city:e}},P=function(e){return{type:"SHOW_MODAL",modalInfo:e}},V=function(e){return{type:"UPDATE_FAVORITE_CITIES",city:e}},z=function(e){return{type:"LOAD_FAVORITES_CITIES",favoriteCities:e}};function G(){return function(e){e({type:"TOGGLE_TEMPERATURE_UNIT"})}}function B(){var e=x("favoriteCities",[])||[];return function(){var t=Object(F.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e&&e[0]?n(z(e)):n(z([]));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function H(e,t){return function(){var n=Object(F.a)(D.a.mark((function n(r){var a,i,c,o,s;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([L(e.Key),K(e.Key,"Metric"===t)]);case 2:a=n.sent,i=Object(N.a)(a,2),c=i[0],o=i[1],c&&o?(s=Object(U.a)(Object(U.a)({},c[0]),{},{LocalizedName:e.LocalizedName,Key:e.Key,dailyForecasts:o.DailyForecasts}),r(R(s))):r(P({type:"Failed",msg:"Failed to Fetch Data for server"}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}var J=n(173),Y=n(174),q=n(88),X=n(167),Z=n(170),Q=Object(q.a)({overrides:{MuiInputBase:{root:{backgroundColor:"#fff"}}}}),$=function(e){var t=e.setSearchResault,n=i.a.useState(!1),c=Object(N.a)(n,2),o=c[0],s=c[1],u=i.a.useState([]),l=Object(N.a)(u,2),d=l[0],j=l[1],v=i.a.useState(!1),p=Object(N.a)(v,2),f=p[0],O=p[1],b=o&&0===(null===d||void 0===d?void 0:d.length);Object(a.useEffect)((function(){o||j([])}),[o]);var m=function(e){var t=e.target.value;if(t.match(/^[a-zA-Z]*$/)?f&&O(!1):O(!0),b){var n=!0;return Object(F.a)(D.a.mark((function e(){var r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:r=e.sent,n&&r.length&&!f&&j(r.map((function(e){return Object(U.a)(Object(U.a)({},e),{},{name:null===e||void 0===e?void 0:e.LocalizedName})})));case 4:case"end":return e.stop()}}),e)})))(),function(){n=!1}}};return Object(r.jsx)(X.a,{theme:Q,children:Object(r.jsx)(Y.a,{id:"asynchronous-demo",style:{width:300},open:o,onChange:function(e,n){return t(n)},onOpen:function(){s(!0)},onClose:function(){s(!1)},getOptionSelected:function(e,t){return e.name===t.name},getOptionLabel:function(e){return e.name},options:d,loading:b,renderInput:function(e){return Object(r.jsx)(J.a,Object(U.a)(Object(U.a)({},e),{},{label:f?"English Only!":"Search City",variant:"outlined",onChange:m,error:f,InputProps:Object(U.a)(Object(U.a)({},e.InputProps),{},{endAdornment:Object(r.jsxs)(i.a.Fragment,{children:[b?Object(r.jsx)(Z.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})})},ee=(n(115),function(){var e=Object(a.useState)({loaded:!1,coordinates:{lat:"",lng:""}}),t=Object(N.a)(e,2),n=t[0],r=t[1],i=function(e){r({loaded:!0,coordinates:{lat:e.coords.latitude,lng:e.coords.longitude}})},c=function(e){r({loaded:!0,error:e})};return Object(a.useEffect)((function(){"geoLocation"in navigator||c({code:0,message:"Geolocation not supported"}),navigator.geolocation.getCurrentPosition(i,c)}),[]),n}),te={setCity:H,updateFavoriteCities:function(e){return function(){var t=Object(F.a)(D.a.mark((function t(n){var r,a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e.Key);case 2:r=t.sent,a=r?Object(U.a)(Object(U.a)({},r[0]),{},{LocalizedName:e.LocalizedName,Key:e.Key}):null,n(V(a));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCityByLocation:function(e,t){return function(){var n=Object(F.a)(D.a.mark((function n(r){var a,i,c,o,s,u;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,W(e);case 2:return a=n.sent,n.next=5,Promise.all([L((null===a||void 0===a?void 0:a.Key)||"123"),K((null===a||void 0===a?void 0:a.Key)||"123","Metric"===t)]);case 5:i=n.sent,c=Object(N.a)(i,2),o=c[0],s=c[1],u=o&&s?Object(U.a)(Object(U.a)({},o[0]),{},{Key:a.Key,LocalizedName:a.LocalizedName,dailyForecasts:Object(S.a)(s.DailyForecasts)}):null,r(R(u));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},loadFavoriteCities:B,toggleTemperatureUnit:G},ne=Object(w.b)((function(e){return{city:e.city,isDarkMode:e.isDarkMode,favoriteCities:e.favoriteCities,temperatureUnit:e.temperatureUnit}}),te)((function(e){var t=e.city,n=e.setCity,i=e.isDarkMode,c=e.favoriteCities,o=e.temperatureUnit,s=e.setCityByLocation,l=e.loadFavoriteCities,d=e.updateFavoriteCities,j=ee(),v=Object(u.g)().key;Object(a.useEffect)((function(){!c.length&&l()}),[]),Object(a.useEffect)((function(){var e;v?n({Key:v},o):(null===j||void 0===j||null===(e=j.coordinates)||void 0===e?void 0:e.lat)?s(j.coordinates,o):s({lat:"32.109333",lng:"34.855499"},o)}),[]);return Object(r.jsxs)("div",{className:"weatherDetails ".concat(i?"darkMode":"defaultMode"),children:[Object(r.jsx)($,{setSearchResault:function(e){n(e,o)}}),Object(r.jsx)(T,{cityValue:t,favoriteCities:c,updateFavoriteCities:d,temperatureUnit:o})]})})),re=(n(116),function(e){var t=e.card,n=e.temperatureUnit,a=e.setCity,i=Object(u.f)();return Object(r.jsxs)("div",{className:"cardItem",onClick:function(){a(t),i.push("/".concat(t.Key))},children:[Object(r.jsx)("span",{className:"cityName",children:null===t||void 0===t?void 0:t.LocalizedName}),Object(r.jsx)("span",{className:"temperature",children:function(){var e,r;return"Metric"===n?(null===t||void 0===t||null===(e=t.Temperature)||void 0===e?void 0:e.Metric.Value)+(null===t||void 0===t||null===(r=t.Temperature)||void 0===r?void 0:r.Metric.Unit):(null===t||void 0===t?void 0:t.Temperature.Imperial.Value)+(null===t||void 0===t?void 0:t.Temperature.Imperial.Unit)}()}),Object(r.jsx)("div",{className:"weatherImgContainer",style:{backgroundImage:"url('./images/".concat(null===t||void 0===t?void 0:t.WeatherIcon,".png')")}}),Object(r.jsx)("span",{className:"weatherTxt",children:null===t||void 0===t?void 0:t.WeatherText})]})}),ae=function(e){var t=e.cardItems,n=e.temperatureUnit,a=e.setCity;return Object(r.jsx)("div",{className:"cardsContainer",children:(null===t||void 0===t?void 0:t.length)?t.map((function(e){return e&&Object(r.jsx)(re,{temperatureUnit:n,setCity:a,card:e},g())})):Object(r.jsx)("span",{children:"No favorite cities yet"})})},ie={loadFavoriteCities:B,setCity:H},ce=Object(w.b)((function(e){return{isDarkMode:e.isDarkMode,favoriteCities:e.favoriteCities,temperatureUnit:e.temperatureUnit}}),ie)((function(e){var t=e.favoriteCities,n=e.temperatureUnit,a=e.isDarkMode,i=e.setCity;return Object(r.jsx)("div",{className:"favorites ".concat(a?"darkMode":"defaultMode"),children:Object(r.jsx)(ae,{cardItems:t,temperatureUnit:n,setCity:i})})})),oe=(n(117),{closeModal:function(){return function(e){return e({type:"CLOSE_MODAL"})}}}),se=Object(w.b)((function(e){return{modalState:e.modalState}}),oe)((function(e){var t,n=e.modalState,c=e.closeModal;Object(a.useEffect)((function(){(null===n||void 0===n?void 0:n.isModalShowen)&&setTimeout(c,3e3)}),[null===n||void 0===n?void 0:n.isModalShowen,c]);return Object(r.jsx)(i.a.Fragment,{children:(null===(t=e.modalState)||void 0===t?void 0:t.isModalShowen)&&Object(r.jsx)("div",{className:"modal",style:{borderColor:"success"===(null===n||void 0===n?void 0:n.type)?"rgb(154, 255, 2)":"red"},children:Object(r.jsx)("span",{children:null===n||void 0===n?void 0:n.modalMsg})})})})),ue=n(65),le=(n(118),n(176)),de=n(172),je=(n(119),n(171)),ve=n(177),pe={toggleTemperatureUnit:G,setCity:H,toggleDarkMode:function(){return function(e){e({type:"TOGGLE_DARK_MODE"})}}},fe=Object(w.b)((function(e){return{temperatureUnit:e.temperatureUnit,isDarkMode:e.isDarkMode,city:e.city}}),pe)((function(e){var t=e.temperatureUnit,n=e.toggleTemperatureUnit,a=e.city,i=e.setCity,c=e.isDarkMode,o=e.toggleDarkMode;return Object(r.jsxs)("div",{className:"toggleButtons",children:[Object(r.jsx)(je.a,{control:Object(r.jsx)(ve.a,{checked:"Metric"===t,onChange:function(){i(a,"Metric"===t?"Imperial":"Metric"),n()},color:"default"}),label:t}),Object(r.jsx)(je.a,{control:Object(r.jsx)(ve.a,{checked:c,onChange:o,color:"default"}),label:c?"Dark Mode":"Default Mode"})]})})),Oe=n(86),be=n.n(Oe),me=function(){var e=Object(a.useState)({right:!1}),t=Object(N.a)(e,2),n=t[0],i=t[1],c=function(e,t){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&i(Object(U.a)(Object(U.a)({},n),{},Object(ue.a)({},e,t)))}};return Object(r.jsxs)("div",{className:"sideBar",children:[Object(r.jsx)(de.a,{onClick:c("right",!0),children:Object(r.jsx)(be.a,{})}),Object(r.jsx)(le.a,{anchor:"right",open:n.right,onClose:c("right",!1),children:Object(r.jsx)(fe,{})})]})};var he=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(s.b,{children:[Object(r.jsx)(h,{}),Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/favorites",component:ce,exact:!0}),Object(r.jsx)(u.a,{path:"/:key?",component:ne}),Object(r.jsx)(u.a,{path:"/",component:ne,exact:!0})]})]}),Object(r.jsx)(se,{}),Object(r.jsx)(me,{})]})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,179)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},xe={city:null,favoriteCities:[],modalState:{modalMsg:"",isModalShowen:!1},temperatureUnit:"Metric",isDarkMode:!1};var ge=n(87),Ce=n(45),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ce.c,Ie=Object(Ce.d)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"SET_CITY_WEATHER":var r,a;return(null===(e=t.favoriteCityIds)||void 0===e?void 0:e.length)&&(r=t.favoriteCityIds.findIndex((function(e){var t;return e.Key===(null===n||void 0===n||null===(t=n.city)||void 0===t?void 0:t.Key)}))>=0),a=n.city?{city:Object(U.a)(Object(U.a)({},n.city),{},{isExistInFavorites:r})}:null,Object(U.a)(Object(U.a)({},t),a);case"TOGGLE_TEMPERATURE_UNIT":var i="Metric"===t.temperatureUnit?"Imperial":"Metric";return Object(U.a)(Object(U.a)({},t),{},{temperatureUnit:i});case"TOGGLE_DARK_MODE":var c=!t.isDarkMode;return Object(U.a)(Object(U.a)({},t),{},{isDarkMode:c});case"SHOW_MODAL":var o={modalMsg:n.modalInfo.msg,type:n.modalInfo.type,isModalShowen:!t.isModalShowen};return Object(U.a)(Object(U.a)({},t),{},{modalState:o});case"CLOSE_MODAL":var s=Object(U.a)({},t.modalState);return s={modalMsg:"",type:"",isModalShowen:!1},Object(U.a)(Object(U.a)({},t),{},{modalState:s});case"UPDATE_FAVORITE_CITIES":var u=Object(S.a)(t.favoriteCities),l=Object(U.a)({},t.city);if(u.length&&null!==u[0]){var d,j=null===(d=u)||void 0===d?void 0:d.findIndex((function(e){var t;return(null===e||void 0===e?void 0:e.Key)===(null===(t=n.city)||void 0===t?void 0:t.Key)}));j>=0?(u.splice(j,1),l.isExistInFavorites=!1):(u=[].concat(Object(S.a)(u),[n.city]),l.isExistInFavorites=!0),u=u.filter((function(e){return 0!==Object.keys(e).length})),y("favoriteCities",u)}else u=[n.city],l.isExistInFavorites=!0,u=u.filter((function(e){return 0!==Object.keys(e).length})),y("favoriteCities",[n.city]);return Object(U.a)(Object(U.a)({},t),{},{favoriteCities:u,city:l});case"LOAD_FAVORITES_CITIES":return Object(U.a)(Object(U.a)({},t),{},{favoriteCities:n.favoriteCities})}return t}),Me(Object(Ce.a)(ge.a)));o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(w.a,{store:Ie,children:Object(r.jsx)(he,{})}),","]})}),document.getElementById("root")),ye()}},[[120,1,2]]]);
//# sourceMappingURL=main.44515892.chunk.js.map