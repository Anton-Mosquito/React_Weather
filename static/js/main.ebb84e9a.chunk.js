(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){e.exports={"list__description-item":"descriptionListItem_list__description-item__2210z",icon:"descriptionListItem_icon__3ymP9"}},function(e,t,c){e.exports={"list__description-item":"descriptionList_list__description-item__1C3e6",icon:"descriptionList_icon__3-Dg0",list__description:"descriptionList_list__description__1bx8j","list__description-title":"descriptionList_list__description-title__1fO4e"}},function(e,t,c){e.exports={"image-field":"ImageField_image-field__2il8x"}},function(e,t,c){e.exports={"content__description-header":"description__header_content__description-header__20Q8t"}},function(e,t,c){e.exports={content__header:"header_content__header__13A8l"}},function(e,t,c){e.exports={content__search:"search_content__search__WjBmI",search__box:"search_search__box__1xqUL","search__box-input":"search_search__box-input__1a1AM","search__box-button":"search_search__box-button__3nS-6","search__box-icon":"search_search__box-icon__cuEtG"}},function(e,t,c){e.exports={content__header:"currentWeather_content__header__2tZJ2",content__search:"currentWeather_content__search__1zfid",search__box:"currentWeather_search__box__3NnNn","search__box-input":"currentWeather_search__box-input__-gHKb","search__box-button":"currentWeather_search__box-button__1zQIm","search__box-icon":"currentWeather_search__box-icon__2lWqX","image-field":"currentWeather_image-field__3R0Za",temperature:"currentWeather_temperature__jpShy","list__description-item":"currentWeather_list__description-item__19oS-",icon:"currentWeather_icon__1s99H",list__description:"currentWeather_list__description__QUmeW","list__description-title":"currentWeather_list__description-title__1YSMk","content__description-card":"currentWeather_content__description-card__2lWh-",content__description:"currentWeather_content__description__1on7s","content__description-header":"currentWeather_content__description-header__1K6ct",content:"currentWeather_content__31XyG"}},function(e,t,c){e.exports={cards__image:"ImageField_cards__image__2NSYV"}},function(e,t,c){e.exports={cards__header:"dateField_cards__header__GMDsR"}},function(e,t,c){e.exports={"cards__list-item":"dataListField_cards__list-item__2Xt0y",icon:"dataListField_icon__3v8eI",cards__list:"dataListField_cards__list__3eEcS","cards__list-header":"dataListField_cards__list-header__HuQFe"}},function(e,t,c){e.exports={"cards__list-item":"dataListFieldItem_cards__list-item__38xe7",icon:"dataListFieldItem_icon__2EqQE"}},function(e,t,c){e.exports={cards__header:"forecastListItem_cards__header__1iLH5",cards__image:"forecastListItem_cards__image__9D89O","cards__list-item":"forecastListItem_cards__list-item__HjM0_",icon:"forecastListItem_icon__232AB",cards__list:"forecastListItem_cards__list__3nXwg","cards__list-header":"forecastListItem_cards__list-header__1kKXs",cards:"forecastListItem_cards__3U0aG"}},function(e,t,c){e.exports={cards__header:"forecastList_cards__header__2iCJG",cards__image:"forecastList_cards__image__GD6cO","cards__list-item":"forecastList_cards__list-item__2Lkro",icon:"forecastList_icon__CieI7",cards__list:"forecastList_cards__list__3qMXO","cards__list-header":"forecastList_cards__list-header__2ypZY",cards:"forecastList_cards__3C09m","content-cards-list":"forecastList_content-cards-list__1PwD_"}},function(e,t,c){e.exports={"cssload-wrap":"loader_cssload-wrap__1QlHq","cssload-circle":"loader_cssload-circle__3CEGS","cssload-spin":"loader_cssload-spin__2dui9"}},function(e,t,c){e.exports={cards__header:"hourlyForecast_cards__header__17rH2",cards__image:"hourlyForecast_cards__image__1_CrX","cards__list-item":"hourlyForecast_cards__list-item__1MaOy",icon:"hourlyForecast_icon__3m1qM",cards__list:"hourlyForecast_cards__list__1D1GK","cards__list-header":"hourlyForecast_cards__list-header__R5S9U",cards:"hourlyForecast_cards__EBtMS","content-cards-list":"hourlyForecast_content-cards-list__WemyM","content-cards-header":"hourlyForecast_content-cards-header__3o8CY","content-cards":"hourlyForecast_content-cards__25P2i"}},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c.n(n),s=c(6),i=c.n(s),o=(c(13),c(2)),_=function(e){var t=Object(n.useState)(),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(),i=Object(o.a)(s,2),_=i[0],d=i[1],l=function(e){var t=e.coords,c=t.latitude,r=t.longitude;a({lat:c,lon:r})},u=function(e){d(e.message)};return Object(n.useEffect)((function(){var t=navigator.geolocation;t?t.getCurrentPosition(l,u,e):d("Geolocation is not supported.")}),[e]),{location:r,error:_}},d=c(3),l=c.n(d),u=c(4),h="44b788430b6eae4f49d10064566fc911",j="http://api.openweathermap.org/data/2.5/weather?";function b(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(t){var c,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"lat=").concat(t.lat,"&lon=").concat(t.lon,"&units=metric&APPID=").concat(h));case 3:return r=e.sent,e.next=6,r.json();case 6:n=e.sent,c=n,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:return e.prev=13,e.abrupt("return",c);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}var p="44b788430b6eae4f49d10064566fc911",f="http://api.openweathermap.org/data/2.5/forecast?",x=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))};function O(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t){var c,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(3e3);case 3:return e.next=5,fetch("".concat(f,"q=").concat(t,"&units=metric&appid=").concat(p));case 5:return r=e.sent,e.next=8,r.json();case 8:n=e.sent,c=n,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:return e.prev=15,e.abrupt("return",c);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))).apply(this,arguments)}var g=a.a.createContext({dataCity:"Cherkassy",dataPosition:void 0,updateData:function(e){return console.warn("default")},loading:!1}),y=(c(15),c.p+"static/media/sprite.5c2fe8ce.svg"),C=function(e){var t,c,n,a=e.value;switch(a[0]){case"feels_like":t="Feels like",c="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"temp_min":t="Minimum",c="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"temp_max":t="Maximum",c="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"pressure":t="Pressure",c="".concat(a[1]," ")+String.fromCharCode(13169);break;case"humidity":t="Humidity",c="".concat(a[1]," ")+String.fromCharCode(37);break;case"speed":t="Speed",c="".concat(a[1]," (m/s)");break;case"sunrise":t="Sunrise",c=new Date(1e3*a[1]).toLocaleTimeString();break;case"sunset":t="Sunset",c=new Date(1e3*a[1]).toLocaleTimeString();break;case"deg":t="Direction",n="rotateZ(".concat(a[1],"deg)");break;case"all":t="Clouds",c="".concat(a[1]," ")+String.fromCharCode(37);break;case"visibility":t="Visibility",c="".concat(a[1]," (m)");break;default:t="Unknown status"}return Object(r.jsxs)("li",{className:"list__description-item",children:[Object(r.jsx)("span",{children:t}),Object(r.jsx)("span",{children:"Direction"===t?Object(r.jsx)("svg",{className:"icon",style:{transform:n},children:Object(r.jsx)("use",{href:y+"#arrow"})}):c})]})},w=(c(16),function(e){var t,c,a,s,i,o=e.title,_=Object(n.useContext)(g).dataPosition,d=[],l=[],u=[],h=[],j=[];if(_)switch(o){case"Temperature parameters":d=Object.entries(_.main).filter((function(e){return"temp"!==e[0]&&"sea_level"!==e[0]&&"grnd_level"!==e[0]&&"pressure"!==e[0]}));break;case"Sunrise & Sunset data":l=Object.entries(_.sys).filter((function(e){return"country"!==e[0]&&"id"!==e[0]&&"type"!==e[0]}));break;case"Visibility":h=Object.entries(_).filter((function(e){return"visibility"===e[0]}));break;case"Wind":u=Object.entries(_.wind);break;case"Cloudiness":j=Object.entries(_.clouds)}return Object(r.jsxs)("ul",{className:"list__description",children:[Object(r.jsx)("li",{className:"list__description-title",children:o}),null===(t=d)||void 0===t?void 0:t.map((function(e,t){return Object(r.jsx)(C,{value:e},t)})),null===(c=l)||void 0===c?void 0:c.map((function(e,t){return Object(r.jsx)(C,{value:e},t)})),null===(a=h)||void 0===a?void 0:a.map((function(e,t){return Object(r.jsx)(C,{value:e},t)})),null===(s=u)||void 0===s?void 0:s.map((function(e,t){return Object(r.jsx)(C,{value:e},t)})),null===(i=j)||void 0===i?void 0:i.map((function(e,t){return Object(r.jsx)(C,{value:e},t)}))]})}),N=(c(17),function(){var e=Object(n.useContext)(g).dataPosition,t=null===e||void 0===e?void 0:e.weather[0].icon,c=null===e||void 0===e?void 0:e.weather[0].main;return Object(r.jsxs)("div",{className:"image-field",children:[Object(r.jsx)("p",{children:c}),Object(r.jsx)("img",{src:t?"http://openweathermap.org/img/wn/".concat(t,"@2x.png"):"",alt:"icon"})]})}),S=function(){var e=Object(n.useContext)(g).dataPosition,t=null===e||void 0===e?void 0:e.main.temp;return Object(r.jsxs)("p",{className:"temperature",children:[null===t||void 0===t?void 0:t.toFixed(1),"\u2103"]})},k=function(){return Object(r.jsxs)("div",{className:"content__description-card",children:[Object(r.jsx)(N,{}),Object(r.jsx)(S,{}),["Temperature parameters","Sunrise & Sunset data","Visibility","Wind","Cloudiness"].map((function(e,t){return Object(r.jsx)(w,{title:e},t)}))]})},L=(c(18),function(){var e=Object(n.useContext)(g).dataPosition,t=null===e||void 0===e?void 0:e.dt;return Object(r.jsxs)("div",{className:"content__description-header",children:[Object(r.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),Object(r.jsx)("p",{children:t?new Date(1e3*t).toLocaleDateString():Date.now()})]})}),F=function(){return Object(r.jsxs)("div",{className:"content__description",children:[Object(r.jsx)(L,{}),Object(r.jsx)(k,{})]})},W=(c(19),function(){return Object(r.jsx)("h1",{className:"content__header","data-text":"Current Weather",children:"Current Weather"})}),D=(c(20),function(){var e=Object(n.useContext)(g).updateData,t=Object(n.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1];return Object(r.jsx)("form",{className:"content__search",onSubmit:function(t){t.preventDefault(),a.trim()&&(e(a),s(" "))},children:Object(r.jsxs)("p",{className:"search__box",children:[Object(r.jsx)("input",{type:"text",className:"search__box-input",placeholder:"Enter the city name...",onChange:function(e){return s(e.target.value)},value:a}),Object(r.jsx)("button",{className:"search__box-button",type:"submit",children:Object(r.jsx)("svg",{className:"search__box-icon",children:Object(r.jsx)("use",{href:y+"#search"})})})]})})}),I=(c(21),function(){return Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)(W,{}),Object(r.jsx)(D,{}),Object(r.jsx)(F,{})]})}),P=function(){return Object(r.jsx)("span",{})},E=function(){return Object(r.jsxs)("header",{className:"content-cards-header",children:[Object(r.jsx)("h2",{children:"Hourly forecast"}),Object(r.jsx)("div",{children:Object(r.jsx)("svg",{className:"icon",children:Object(r.jsx)("use",{href:y+"#lady"})})})]})},M=(c(22),function(e){var t=e.data,c=t.icon;return Object(r.jsxs)("figure",{className:"cards__image",children:[Object(r.jsx)("img",{src:c?"http://openweathermap.org/img/wn/".concat(c,"@2x.png"):"",alt:"icon"}),Object(r.jsx)("figcaption",{children:t.description})]})}),H=(c(23),function(e){var t=e.data,c=new Date(1e3*t[1]).toLocaleString();return Object(r.jsx)("h3",{className:"cards__header",children:Object(r.jsx)("time",{dateTime:c,children:c})})}),T=(c(24),c(25),function(e){var t=e.data,c="",n="",a="";switch(t[0]){case"temp":c="Temperature",n=t[1].toFixed(1)+String.fromCharCode(8451);break;case"feels_like":c="Feels like",n=t[1].toFixed(1)+String.fromCharCode(8451);break;case"speed":c="Speed",n=t[1].toFixed(1)+"(m/s)";break;case"deg":c="Direction",n=t[1].toFixed(1)+String.fromCharCode(37),a="rotateZ(".concat(t[1],"deg)")}return Object(r.jsxs)("li",{className:"cards__list-item",children:[Object(r.jsx)("span",{children:c}),Object(r.jsx)("span",{children:"Direction"===c?Object(r.jsx)("svg",{className:"icon",style:{transform:a},children:Object(r.jsx)("use",{href:y+"#arrow"})}):n})]})}),G=function(e){var t,c=e.data,n=[];switch(c[0]){case"main":t="Temperature",n=Object.entries(c[1]).filter((function(e){return"temp"===e[0]||"feels_like"===e[0]}));break;case"wind":t="Wind",n=Object.entries(c[1]);break;default:t="unknown"}return Object(r.jsxs)("ul",{className:"cards__list",children:[Object(r.jsx)("li",{className:"cards__list-header",children:Object(r.jsx)("h3",{children:t})}),n.map((function(e,t){return Object(r.jsx)(T,{data:e},t)}))]})},q=(c(26),function(e){var t=e.data,c=[],n=[],a=[],s=[];return t&&(c=Object.entries(t).filter((function(e){return"dt"===e[0]})),n=Object.values(t.weather),a=Object.entries(t).filter((function(e){return"main"===e[0]})),s=Object.entries(t).filter((function(e){return"wind"===e[0]}))),Object(r.jsxs)("div",{className:"cards",children:[c.map((function(e,t){return Object(r.jsx)(H,{data:e},t)})),n.map((function(e,t){return Object(r.jsx)(M,{data:e},t)})),a.map((function(e,t){return Object(r.jsx)(G,{data:e},t)})),s.map((function(e,t){return Object(r.jsx)(G,{data:e},t)}))]})}),X=(c(27),c(28),function(){return Object(r.jsxs)("div",{className:"cssload-wrap",children:[Object(r.jsx)("div",{className:"cssload-circle"}),Object(r.jsx)("div",{className:"cssload-circle"}),Object(r.jsx)("div",{className:"cssload-circle"}),Object(r.jsx)("div",{className:"cssload-circle"}),Object(r.jsx)("div",{className:"cssload-circle"})]})}),A=function(){var e=Object(n.useContext)(g),t=e.dataCity,c=e.loading,a=[];return t&&(a=t.list.slice(0,9)),Object(r.jsx)("div",{className:"content-cards-list",children:c?Object(r.jsx)(X,{}):a.map((function(e,t){return Object(r.jsx)(q,{data:e},t)}))})},Q=(c(29),function(){return Object(r.jsxs)("div",{className:"content-cards",children:[Object(r.jsx)(E,{}),Object(r.jsx)(A,{})]})}),B={enableHighAccuracy:!0,timeout:6e4,maximumAge:864e5},U={lat:50.45466,lon:30.5238},Z=function(){for(var e=[],t=0;t<=19;t++)e.push(t);return e},J=(c(30),function(){var e=_(B),t=e.location,c=e.error,s=a.a.useState(),i=Object(o.a)(s,2),d=i[0],l=i[1],u=a.a.useState(),h=Object(o.a)(u,2),j=h[0],m=h[1],p=a.a.useState(!0),f=Object(o.a)(p,2),x=f[0],v=f[1];Object(n.useEffect)((function(){t?b(t).then((function(e){200===e.cod?(l(e),O(e.name).then((function(e){m(e),v(!1)}))):console.log(c)})).catch((function(e){return console.log(e)})):b(U).then((function(e){200===e.cod?(l(e),O(e.name).then((function(e){m(e),v(!1)}))):console.log("Error")}))}),[t]);return Object(r.jsx)(g.Provider,{value:{dataPosition:d,updateData:function(e){v(!0),O(e).then((function(e){"200"===e.cod?(b(e.city.coord).then((function(e){l(e),v(!1)})),m(e)):console.log("Error")}))},dataCity:j,loading:x},children:Object(r.jsxs)("section",{className:"wrapper",children:[Object(r.jsx)("div",{className:"background",children:Z().map((function(e){return Object(r.jsx)(P,{},e)}))}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(Q,{}),Object(r.jsx)(I,{})]})]})})}),K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))},V=c(7);c.n(V).a.load({google:{families:["Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"]}}),i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),K()}],[[31,1,2]]]);
//# sourceMappingURL=main.ebb84e9a.chunk.js.map