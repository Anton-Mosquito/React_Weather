(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){},,function(e,t,r){e.exports={"list__description-item":"descriptionListItem_list__description-item__2210z",icon:"descriptionListItem_icon__3ymP9"}},function(e,t,r){e.exports={"list__description-item":"descriptionList_list__description-item__1C3e6",icon:"descriptionList_icon__3-Dg0",list__description:"descriptionList_list__description__1bx8j","list__description-title":"descriptionList_list__description-title__1fO4e"}},function(e,t,r){e.exports={"image-field":"ImageField_image-field__2il8x"}},function(e,t,r){e.exports={"content__description-header":"description__header_content__description-header__20Q8t"}},function(e,t,r){e.exports={content__header:"header_content__header__13A8l"}},function(e,t,r){e.exports={search__box:"searchBox_search__box__3r0c_","search__box-input":"searchBox_search__box-input__18QqZ","search__box-button":"searchBox_search__box-button__2TxxS","search__box-icon":"searchBox_search__box-icon__3s0Qx"}},function(e,t,r){e.exports={"search__choise-text":"radioItems_search__choise-text__35zCV"}},function(e,t,r){e.exports={"search__choise-text":"radioBox_search__choise-text__3D_j5",search__choise:"radioBox_search__choise__1uFpF"}},function(e,t,r){e.exports={search__box:"search_search__box__1xqUL","search__box-input":"search_search__box-input__1a1AM","search__box-button":"search_search__box-button__3nS-6","search__box-icon":"search_search__box-icon__cuEtG","search__choise-text":"search_search__choise-text__1yTaQ",search__choise:"search_search__choise__1SX0W",content__search:"search_content__search__WjBmI"}},function(e,t,r){e.exports={content__header:"currentWeather_content__header__2tZJ2",search__box:"currentWeather_search__box__3NnNn","search__box-input":"currentWeather_search__box-input__-gHKb","search__box-button":"currentWeather_search__box-button__1zQIm","search__box-icon":"currentWeather_search__box-icon__2lWqX","search__choise-text":"currentWeather_search__choise-text__3aPmr",search__choise:"currentWeather_search__choise__IrVou",content__search:"currentWeather_content__search__1zfid","image-field":"currentWeather_image-field__3R0Za",temperature:"currentWeather_temperature__jpShy","list__description-item":"currentWeather_list__description-item__19oS-",icon:"currentWeather_icon__1s99H",list__description:"currentWeather_list__description__QUmeW","list__description-title":"currentWeather_list__description-title__1YSMk","content__description-card":"currentWeather_content__description-card__2lWh-",content__description:"currentWeather_content__description__1on7s","content__description-header":"currentWeather_content__description-header__1K6ct",content:"currentWeather_content__31XyG"}},function(e,t,r){e.exports={spinner:"spinner_spinner__3zcAD",loader:"spinner_loader__gPkfN"}},function(e,t,r){e.exports={cards__image:"ImageField_cards__image__2NSYV"}},function(e,t,r){e.exports={cards__header:"dateField_cards__header__GMDsR"}},function(e,t,r){e.exports={"cards__list-item":"dataListField_cards__list-item__2Xt0y",icon:"dataListField_icon__3v8eI",cards__list:"dataListField_cards__list__3eEcS","cards__list-header":"dataListField_cards__list-header__HuQFe"}},function(e,t,r){e.exports={"cards__list-item":"dataListFieldItem_cards__list-item__38xe7",icon:"dataListFieldItem_icon__2EqQE"}},function(e,t,r){e.exports={cards__header:"forecastListItem_cards__header__1iLH5",cards__image:"forecastListItem_cards__image__9D89O","cards__list-item":"forecastListItem_cards__list-item__HjM0_",icon:"forecastListItem_icon__232AB",cards__list:"forecastListItem_cards__list__3nXwg","cards__list-header":"forecastListItem_cards__list-header__1kKXs",cards:"forecastListItem_cards__3U0aG"}},function(e,t,r){e.exports={cards__header:"forecastList_cards__header__2iCJG",cards__image:"forecastList_cards__image__GD6cO","cards__list-item":"forecastList_cards__list-item__2Lkro",icon:"forecastList_icon__CieI7",cards__list:"forecastList_cards__list__3qMXO","cards__list-header":"forecastList_cards__list-header__2ypZY",cards:"forecastList_cards__3C09m","content-cards-list":"forecastList_content-cards-list__1PwD_"}},function(e,t,r){e.exports={"cssload-wrap":"loader_cssload-wrap__1QlHq","cssload-circle":"loader_cssload-circle__3CEGS","cssload-spin":"loader_cssload-spin__2dui9"}},function(e,t,r){e.exports={cards__header:"hourlyForecast_cards__header__17rH2",cards__image:"hourlyForecast_cards__image__1_CrX","cards__list-item":"hourlyForecast_cards__list-item__1MaOy",icon:"hourlyForecast_icon__3m1qM",cards__list:"hourlyForecast_cards__list__1D1GK","cards__list-header":"hourlyForecast_cards__list-header__R5S9U",cards:"hourlyForecast_cards__EBtMS","content-cards-list":"hourlyForecast_content-cards-list__WemyM","content-cards-header":"hourlyForecast_content-cards-header__3o8CY","content-cards":"hourlyForecast_content-cards__25P2i"}},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(1),a=r.n(n),s=r(6),i=r.n(s),o=(r(14),r(2)),_=function(e){var t=Object(n.useState)(),r=Object(o.a)(t,2),c=r[0],a=r[1],s=Object(n.useState)(),i=Object(o.a)(s,2),_=i[0],d=i[1],u=function(e){var t=e.coords,r=t.latitude,c=t.longitude;a({lat:r,lon:c})},l=function(e){d(e.message)};return Object(n.useEffect)((function(){var t=navigator.geolocation;t?t.getCurrentPosition(u,l,e):d("Geolocation is not supported.")}),[e]),{location:c,error:_}},d=r(3),u=r.n(d),l=r(4),h="44b788430b6eae4f49d10064566fc911",j="http://api.openweathermap.org/data/2.5/weather?",b=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))};function f(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(u.a.mark((function e(t){var r,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(3e3);case 3:return e.next=5,fetch("".concat(j,"lat=").concat(t.lat,"&lon=").concat(t.lon,"&units=metric&APPID=").concat(h));case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,r=n,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:return e.prev=15,e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))).apply(this,arguments)}var x="44b788430b6eae4f49d10064566fc911",m="http://api.openweathermap.org/data/2.5/forecast?",O=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))};function v(e){return g.apply(this,arguments)}function g(){return(g=Object(l.a)(u.a.mark((function e(t){var r,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(3e3);case 3:return e.next=5,fetch("".concat(m,"q=").concat(t,"&units=metric&appid=").concat(x));case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,r=n,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:return e.prev=15,e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))).apply(this,arguments)}var y=a.a.createContext({dataCity:void 0,dataPosition:void 0,updateData:function(e){return console.warn("default")},loadingCards:!1,updateWeatherCards:function(e){return console.warn("default")},loadingMain:!1,typeRequset:""}),C=(r(16),r.p+"static/media/sprite.990562bc.svg"),w=function(e){var t,r,n,a=e.value;switch(a[0]){case"feels_like":t="Feels like",r="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"temp_min":t="Minimum",r="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"temp_max":t="Maximum",r="".concat(a[1].toFixed(1)," ")+String.fromCharCode(8451);break;case"pressure":t="Pressure",r="".concat(a[1]," ")+String.fromCharCode(13169);break;case"humidity":t="Humidity",r="".concat(a[1]," ")+String.fromCharCode(37);break;case"speed":t="Speed",r="".concat(a[1]," (m/s)");break;case"sunrise":t="Sunrise",r=new Date(1e3*a[1]).toLocaleTimeString();break;case"sunset":t="Sunset",r=new Date(1e3*a[1]).toLocaleTimeString();break;case"deg":t="Direction",n="rotateZ(".concat(a[1],"deg)");break;case"all":t="Clouds",r="".concat(a[1]," ")+String.fromCharCode(37);break;case"visibility":t="Visibility",r="".concat(a[1]," (m)");break;default:t="Unknown status"}return Object(c.jsxs)("li",{className:"list__description-item",children:[Object(c.jsx)("span",{children:t}),Object(c.jsx)("span",{children:"Direction"===t?Object(c.jsx)("svg",{className:"icon",style:{transform:n},children:Object(c.jsx)("use",{href:C+"#arrow"})}):r})]})},N=(r(17),function(e){var t,r,a,s,i,o=e.title,_=Object(n.useContext)(y).dataPosition;console.log(_);var d=[],u=[],l=[],h=[],j=[];if(_)switch(o){case"Temperature parameters":d=Object.entries(_.main).filter((function(e){return"temp"!==e[0]&&"sea_level"!==e[0]&&"grnd_level"!==e[0]&&"pressure"!==e[0]}));break;case"Sunrise & Sunset data":u=Object.entries(_.sys).filter((function(e){return"country"!==e[0]&&"id"!==e[0]&&"type"!==e[0]}));break;case"Visibility":h=Object.entries(_).filter((function(e){return"visibility"===e[0]}));break;case"Wind":l=Object.entries(_.wind).filter((function(e){return"gust"!==e[0]}));break;case"Cloudiness":j=Object.entries(_.clouds)}return Object(c.jsxs)("ul",{className:"list__description",children:[Object(c.jsx)("li",{className:"list__description-title",children:o}),null===(t=d)||void 0===t?void 0:t.map((function(e,t){return Object(c.jsx)(w,{value:e},t)})),null===(r=u)||void 0===r?void 0:r.map((function(e,t){return Object(c.jsx)(w,{value:e},t)})),null===(a=h)||void 0===a?void 0:a.map((function(e,t){return Object(c.jsx)(w,{value:e},t)})),null===(s=l)||void 0===s?void 0:s.map((function(e,t){return Object(c.jsx)(w,{value:e},t)})),null===(i=j)||void 0===i?void 0:i.map((function(e,t){return Object(c.jsx)(w,{value:e},t)}))]})}),k=(r(18),function(){var e=Object(n.useContext)(y).dataPosition,t=null===e||void 0===e?void 0:e.weather[0].icon,r=null===e||void 0===e?void 0:e.weather[0].main;return Object(c.jsxs)("div",{className:"image-field",children:[Object(c.jsx)("p",{children:r}),Object(c.jsx)("img",{src:t?"http://openweathermap.org/img/wn/".concat(t,"@2x.png"):"",alt:"icon"})]})}),S=function(){var e=Object(n.useContext)(y).dataPosition,t=null===e||void 0===e?void 0:e.main.temp;return Object(c.jsxs)("p",{className:"temperature",children:[null===t||void 0===t?void 0:t.toFixed(1),"\u2103"]})},F=function(){return Object(c.jsxs)("div",{className:"content__description-card",children:[Object(c.jsx)(k,{}),Object(c.jsx)(S,{}),["Temperature parameters","Sunrise & Sunset data","Visibility","Wind","Cloudiness"].map((function(e,t){return Object(c.jsx)(N,{title:e},t)}))]})},L=(r(19),function(){var e=Object(n.useContext)(y).dataPosition,t=null===e||void 0===e?void 0:e.dt;return Object(c.jsxs)("div",{className:"content__description-header",children:[Object(c.jsx)("p",{children:null===e||void 0===e?void 0:e.name}),Object(c.jsx)("p",{children:t?new Date(1e3*t).toLocaleDateString():Date.now()})]})}),W=function(){return Object(c.jsxs)("div",{className:"content__description",children:[Object(c.jsx)(L,{}),Object(c.jsx)(F,{})]})},I=(r(20),function(){return Object(c.jsx)("h1",{className:"content__header","data-text":"Current Weather",children:"Current Weather"})}),D=(r(21),function(e){var t=e.valueOfField,r=e.changeValue;return Object(c.jsxs)("p",{className:"search__box",children:[Object(c.jsx)("input",{type:"text",className:"search__box-input",placeholder:"Enter the city name...",onChange:function(e){return r(e.target.value)},value:t}),Object(c.jsx)("button",{className:"search__box-button",type:"submit",children:Object(c.jsx)("svg",{className:"search__box-icon",children:Object(c.jsx)("use",{href:C+"#search"})})})]})}),P=r(8),E=(r(22),function(e){var t=e.forLabel,r=e.forId,n=e.text,a=e.id,s=e.check,i=e.onChange;return Object(c.jsxs)("label",{htmlFor:t,children:[Object(c.jsx)("input",{type:"radio",name:"choiseCard",id:r,value:n,checked:s,onChange:i.bind(null,a,n)}),Object(c.jsx)("span",{className:"search__choise-text",children:n})]})}),H=(r(23),function(e){var t=e.info,r=e.change;return Object(c.jsx)("p",{className:"search__choise",children:t.map((function(e){return Object(c.jsx)(E,Object(P.a)({onChange:r},e),e.id)}))})}),M=(r(24),function(){var e=Object(n.useContext)(y),t=e.updateData,r=e.updateWeatherCards,a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],_=s[1],d=Object(n.useState)([{id:1,forLabel:"Hourly",forId:"Hourly",text:"Hourly",check:!0},{id:2,forLabel:"Nearby",forId:"Nearby",text:"Nearby",check:!1}]),u=Object(o.a)(d,2),l=u[0],h=u[1];return Object(c.jsxs)("form",{className:"content__search",onSubmit:function(e){e.preventDefault(),i.trim()&&(t(i),_(" "))},children:[Object(c.jsx)(D,{valueOfField:i,changeValue:_}),Object(c.jsx)(H,{info:l,change:function(e,t){h(l.map((function(e){return e.id,e.check=!e.check,e}))),r(t)}})]})}),T=(r(25),r(26),function(){return Object(c.jsx)("div",{className:"spinner"})}),q=function(){var e=Object(n.useContext)(y).loadingMain;return Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(I,{}),Object(c.jsx)(M,{}),e?Object(c.jsx)(T,{}):Object(c.jsx)(W,{})]})},B=function(){return Object(c.jsx)("span",{})},G=function(){var e=Object(n.useContext)(y).typeRequset;return Object(c.jsxs)("header",{className:"content-cards-header",children:[Object(c.jsxs)("h2",{children:[e," forecast"]}),Object(c.jsx)("div",{children:Object(c.jsx)("svg",{className:"icon",children:Object(c.jsx)("use",{href:C+"#lady"})})})]})},Q=function(e){var t=e.data[1];return Object(c.jsx)("h3",{className:"cards__header",children:t})},R=(r(27),function(e){var t=e.data,r=t.icon;return Object(c.jsxs)("figure",{className:"cards__image",children:[Object(c.jsx)("img",{src:r?"http://openweathermap.org/img/wn/".concat(r,"@2x.png"):"",alt:"icon"}),Object(c.jsx)("figcaption",{children:t.description})]})}),V=(r(28),function(e){var t=e.data,r=new Date(1e3*t[1]).toLocaleString();return Object(c.jsx)("h3",{className:"cards__header",children:Object(c.jsx)("time",{dateTime:r,children:r})})}),X=(r(29),r(30),function(e){var t=e.data,r="",n="",a="";switch(t[0]){case"temp":r="Temperature",n=t[1].toFixed(1)+String.fromCharCode(8451);break;case"feels_like":r="Feels like",n=t[1].toFixed(1)+String.fromCharCode(8451);break;case"speed":r="Speed",n=t[1].toFixed(1)+"(m/s)";break;case"deg":r="Direction",n=t[1].toFixed(1)+String.fromCharCode(37),a="rotateZ(".concat(t[1],"deg)")}return Object(c.jsxs)("li",{className:"cards__list-item",children:[Object(c.jsx)("span",{children:r}),Object(c.jsx)("span",{children:"Direction"===r?Object(c.jsx)("svg",{className:"icon",style:{transform:a},children:Object(c.jsx)("use",{href:C+"#arrow"})}):n})]})}),A=function(e){var t,r=e.data,n=[];switch(r[0]){case"main":t="Temperature",n=Object.entries(r[1]).filter((function(e){return"temp"===e[0]||"feels_like"===e[0]}));break;case"wind":t="Wind",n=Object.entries(r[1]);break;default:t="unknown"}return Object(c.jsxs)("ul",{className:"cards__list",children:[Object(c.jsx)("li",{className:"cards__list-header",children:Object(c.jsx)("h3",{children:t})}),n.map((function(e,t){return Object(c.jsx)(X,{data:e},t)}))]})},Z=(r(31),function(e){var t=e.data,r=[],n=[],a=[],s=[],i=[];return t&&(r=Object.entries(t).filter((function(e){return"name"===e[0]})),n=Object.entries(t).filter((function(e){return"dt"===e[0]})),a=Object.values(t.weather),s=Object.entries(t).filter((function(e){return"main"===e[0]})),i=Object.entries(t).filter((function(e){return"wind"===e[0]}))),Object(c.jsxs)("div",{className:"cards",children:[r.length>0?r.map((function(e,t){return Object(c.jsx)(Q,{data:e},t)})):n.map((function(e,t){return Object(c.jsx)(V,{data:e},t)})),a.map((function(e,t){return Object(c.jsx)(R,{data:e},t)})),s.map((function(e,t){return Object(c.jsx)(A,{data:e},t)})),i.map((function(e,t){return Object(c.jsx)(A,{data:e},t)}))]})}),z=(r(32),r(33),function(){return Object(c.jsxs)("div",{className:"cssload-wrap",children:[Object(c.jsx)("div",{className:"cssload-circle"}),Object(c.jsx)("div",{className:"cssload-circle"}),Object(c.jsx)("div",{className:"cssload-circle"}),Object(c.jsx)("div",{className:"cssload-circle"}),Object(c.jsx)("div",{className:"cssload-circle"})]})}),U=function(){var e=Object(n.useContext)(y),t=e.dataCity,r=e.loadingCards,a=[];return t&&(a=t.list.slice(0,9)),Object(c.jsx)("div",{className:"content-cards-list",children:r?Object(c.jsx)(z,{}):a.map((function(e,t){return Object(c.jsx)(Z,{data:e},t)}))})},J=(r(34),function(){return Object(c.jsxs)("div",{className:"content-cards",children:[Object(c.jsx)(G,{}),Object(c.jsx)(U,{})]})}),K={enableHighAccuracy:!0,timeout:6e4,maximumAge:864e5},Y={lat:50.45466,lon:30.5238},$=function(){for(var e=[],t=0;t<=19;t++)e.push(t);return e},ee=(r(35),"44b788430b6eae4f49d10064566fc911"),te="http://api.openweathermap.org/data/2.5/find?",re=function(e){return new Promise((function(t){return setTimeout((function(){return t()}),e)}))};function ce(){return(ce=Object(l.a)(u.a.mark((function e(t){var r,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re(3e3);case 3:return e.next=5,fetch("".concat(te,"lat=").concat(t.lat,"&lon=").concat(t.lon,"&cnt=",9,"&units=metric&appid=").concat(ee));case 5:return c=e.sent,e.next=8,c.json();case 8:n=e.sent,r=n,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:return e.prev=15,e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})))).apply(this,arguments)}var ne=function(){var e=_(K),t=e.location,r=(e.error,a.a.useState()),s=Object(o.a)(r,2),i=s[0],d=s[1],u=a.a.useState(),l=Object(o.a)(u,2),h=l[0],j=l[1],b=a.a.useState(!0),p=Object(o.a)(b,2),x=p[0],m=p[1],O=a.a.useState(!0),g=Object(o.a)(O,2),C=g[0],w=g[1],N=a.a.useState("Hourly"),k=Object(o.a)(N,2),S=k[0],F=k[1],L=Object(n.useRef)(Y),W=Object(n.useRef)("");Object(n.useEffect)((function(){t?(f(t).then((function(e){200===e.cod?(d(e),w(!1),W.current=e.name,v(e.name).then((function(e){j(e),m(!1)}))):console.log("Error",t)})).catch((function(e){return console.log("Error behind promise!",e)})),L.current=t):(f(Y).then((function(e){200===e.cod?(d(e),w(!1),W.current=e.name,v(e.name).then((function(e){j(e),m(!1)}))):console.log("Error",e.message)})),L.current=Y)}),[t]);var I=function(e){switch(e){case"Hourly":F("Hourly"),m(!0),v(W.current).then((function(e){"200"===e.cod?(j(e),m(!1)):console.log("Error")}));break;case"Nearby":F("Nearby"),m(!0),function(e){return ce.apply(this,arguments)}(L.current).then((function(e){"200"===e.cod?(j(e),m(!1)):console.log("Error")}))}};return Object(c.jsx)(y.Provider,{value:{dataPosition:i,updateData:function(e){switch(m(!0),w(!0),S){case"Hourly":v(e).then((function(e){if("200"===e.cod){var t=e.city.coord;L.current=t,W.current=e.city.name,f(t).then((function(e){d(e),w(!1),m(!1)})),j(e)}else console.log("Error")}));break;case"Nearby":v(e).then((function(e){if("200"===e.cod){var t=e.city.coord;L.current=t,W.current=e.city.name,f(t).then((function(e){d(e),w(!1)}))}else console.log("Error");I("Nearby")}))}},dataCity:h,loadingCards:x,updateWeatherCards:I,loadingMain:C,typeRequset:S},children:Object(c.jsxs)("section",{className:"wrapper",children:[Object(c.jsx)("div",{className:"background",children:$().map((function(e){return Object(c.jsx)(B,{},e)}))}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(J,{}),Object(c.jsx)(q,{})]})]})})},ae=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,37)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),a(e),s(e)}))},se=r(7);r.n(se).a.load({google:{families:["Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"]}}),i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ne,{})}),document.getElementById("root")),ae()}],[[36,1,2]]]);
//# sourceMappingURL=main.7a288d2e.chunk.js.map