(this["webpackJsonpreact-bedpress"]=this["webpackJsonpreact-bedpress"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),l=(n(10),{height:"60px",width:"100vw",padding:"10px",textAlign:"center",fontSize:"30px"}),o=function(){return r.a.createElement("div",{style:l},r.a.createElement("header",null,"KART?"))},s=n(1),u=n(2),d=n.n(u),m=(n(11),{position:"absolute",background:"white",padding:10,zIndex:"1",display:"flex"}),p=[{id:"streets-v11",name:"Streets"},{id:"light-v10",name:"Light"},{id:"dark-v10",name:"Dark"},{id:"satellite-v9",name:"Satellite"}],b=function(e){return r.a.createElement("div",{style:m},p.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("input",{id:t.id,type:"radio",name:"rtoggle",value:t.id,onClick:function(){return e.setbackgroundLayerID(t.id)},defaultChecked:t.id===e.backgroundLayerID}),r.a.createElement("label",null,t.name))})))},f={position:"absolute",background:"white",padding:10,zIndex:"1",display:"flex"},h=[{center:[10.408773,63.422091],name:"Streets"},{center:[10.408773,63.422091],name:"Light"},{center:[10.408773,63.422091],name:"Dark"},{center:[10.408773,63.422091],name:"Satellite"}],y=function(e){return r.a.createElement("div",{style:f},h.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("input",{id:t.id,type:"radio",name:"rtoggle",value:t.id,onClick:function(){return e.setPlacesLayerID(t.id)},defaultChecked:t.id===e.placesLayerID}),r.a.createElement("label",null,t.name))})))},v={width:"100%",height:"calc(100vh - 80px)",position:"absolute"},g=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)("streets-v11"),l=Object(s.a)(c,2),o=l[0],u=l[1],m=Object(s.a)(a.useState[63.422091],2),p=m[0],f=m[1],h=Object(a.useRef)(null);return Object(a.useEffect)((function(){d.a.accessToken="pk.eyJ1Ijoia2Vpbm8iLCJhIjoiY2tnN2tuMnUyMDd5NDJ4b2Nlb2RhcTA4bSJ9._je8QOLR8ySMeHK4rOkTqA";n||function(e){var t=e.setMap,n=e.mapContainer,a=new d.a.Map({container:n.current,style:"mapbox://styles/mapbox/".concat(o),center:[10.408773,63.422091],zoom:10});a.on("load",(function(){t(a),a.resize()}))}({setMap:i,mapContainer:h}),n&&n.setStyle("mapbox://styles/mapbox/"+o)}),[o,n]),r.a.createElement("div",null,r.a.createElement(y,{setPlacesLayerID:f,PlacesLayerID:p}),r.a.createElement(b,{setbackgroundLayerID:u,backgroundLayerID:o}),r.a.createElement("div",{ref:function(e){return h.current=e},style:v}))},k={overflow:"hidden"};var E=function(){return r.a.createElement("div",{style:k},r.a.createElement(o,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.99510312.chunk.js.map