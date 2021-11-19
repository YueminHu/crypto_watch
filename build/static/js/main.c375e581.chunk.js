(this["webpackJsonpcrypto-watch"]=this["webpackJsonpcrypto-watch"]||[]).push([[0],{34:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var c,r,o,i,a,s=t(0),d=t.n(s),l=t(25),u=t.n(l),p=(t(34),t(29)),f=t(6),m=t(5),b=t(3),g=t(4),h=t(1),j=g.a.p(c||(c=Object(b.a)(["\n  position: fixed;\n  bottom: 0;\n  margin: 0px auto;\n  font-size: 0.8em;\n  padding: 8px 0px;\n  width: 100%;\n  background-color: var(--background-color);\n  border-top: 1px solid var(--border-color);\n  > a {\n    color: var(--text-color);\n  }\n"]))),v=function(){return Object(h.jsxs)(j,{children:["Data Provider:"," ",Object(h.jsx)("a",{href:"https://coinmarketcap.com/",target:"_blank",rel:"noreferrer",children:"CoinMarketCap"})]})},x=g.a.div(r||(r=Object(b.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px;\n  /* margin-top: 8px; */\n  width: calc(50% - 17px);\n  /* display: inline-block; */\n  /* border-left: 1px solid #fff; */\n  border-radius: 4px;\n  cursor: pointer;\n  box-sizing: border-box;\n  user-select: none;\n  &:hover {\n    transform: translateY(-2px);\n  }\n  @media screen and (max-width: 450px) {\n    white-space: nowrap;\n    width: 100%;\n    border-left: none;\n    /* overflow: hidden; */\n    >span:first-child {\n        max-width: 45vw;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n  }\n  img {\n    width: 1.5em;\n    margin-right: 0.5em;\n    vertical-align: middle;\n  }\n  span.price {\n    font-weight: bold;\n    font-size: 1.1em;\n    &.up {\n      color: var(--up-color);\n    }\n    &.down {\n      color: var(--down-color);\n    }\n  }\n  span.percentage {\n    padding: 8px 4px;\n    border-radius: 4px;\n    color: #fff;\n    margin-left: 12px;\n    display: inline-block;\n    text-align: center;\n    width: 4.5em;\n  }\n"]))),O=function(n){var e=n.id,t=n.price,c=n.p24h,r=n.name,o=n.onRemove,i=Object(s.useRef)(t),a=Object(s.useRef)(!0);return Object(s.useEffect)((function(){t!==i.current&&(a.current=i.current<t||void 0===t,i.current=t)}),[t]),Object(h.jsxs)(x,{onClick:function(){return o(e)},style:{},children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("img",{src:"https://s2.coinmarketcap.com/static/img/coins/64x64/".concat(e,".png"),alt:e}),r||"unknown"]}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("span",{className:"price ".concat(a.current?"up":"down"),children:[t?null===t||void 0===t?void 0:t.toFixed(4):"-",a.current?"\u2191":"\u2193"]}),Object(h.jsx)("span",{className:"percentage",style:{backgroundColor:c>0?"rgba(0, 255, 0, ".concat(Math.sqrt(Math.abs(c/10)),")"):"rgba(255, 0, 0, ".concat(Math.sqrt(Math.abs(c/10)),")")},children:c?"".concat(c.toFixed(2),"%"):""})]})]},e)},w=t(12),y=t.n(w),S=function(n){var e=Object(s.useState)((function(){return localStorage.getItem(n)?JSON.parse(String(localStorage.getItem(n))).data:{}})),t=Object(m.a)(e,2),c=t[0],r=t[1],o=Object(s.useCallback)((function(){return y.a.get("https://api.coinmarketcap.com/data-api/v3/map/all?cryptoAux=status&limit=10000&listing_status=active&start=1").then((function(e){var t=e.data.data.cryptoCurrencyMap.reduce((function(n,e){return n[e.id]=e,n}),{});r(t),localStorage.setItem(n,JSON.stringify({data:t,timeStamp:+new Date}))}))}),[n]);return Object(s.useEffect)((function(){localStorage.getItem(n)?JSON.parse(String(localStorage.getItem(n))).timeStamp+864e5<=+new Date&&(console.log("refetch!"),o()):(console.log("init fetch!"),o())}),[o,n]),c},k=g.a.div(o||(o=Object(b.a)(["\n  position: fixed;\n  bottom: 3em;\n  right: 12px;\n  max-width: 0.8em;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 1em;\n  transition: all 0.3s ease-in-out;\n  cursor: pointer;\n  &:focus-within {\n    max-width: 20em;\n  }\n  > span:first-child {\n    width: 0.8em;\n    height: 0.8em;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 0.5em;\n    vertical-align: middle;\n  }\n  > span.connecting {\n    background-color: yellow;\n  }\n  > span.connected {\n    background-color: var(--up-color);\n  }\n  > span.disconnected {\n    background-color: var(--down-color);\n  }\n"]))),C=function(n){var e,t=n.wsInstance,c=n.reconnect,r=null===(e=t.current)||void 0===e?void 0:e.readyState,o=0===r||void 0===r?"connecting":1===r?"connected":3===r?"disconnected":void 0;return Object(h.jsxs)(k,{tabIndex:-1,children:[Object(h.jsx)("span",{className:o}),"WS Status: ".concat(o),Object(h.jsx)("button",{onClick:c,style:{display:3===r?void 0:"none"},children:"Reconnect"})]})},L=g.a.div(i||(i=Object(b.a)(["\n  cursor: pointer;\n  margin: 4px auto;\n  > img {\n    width: 1.5em;\n    margin-right: 0.5em;\n    vertical-align: middle;\n  }\n"]))),I=function(n){var e=n.map,t=n.onAdd,c=Object(s.useState)(""),r=Object(m.a)(c,2),o=r[0],i=r[1],a=Object.values(e),d=Object(s.useRef)(null);Object(s.useEffect)((function(){var n;null===(n=d.current)||void 0===n||n.focus()}),[]);var l=o?a.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())||n.symbol.toLowerCase().includes(o.toLowerCase())})):[];return Object(h.jsxs)("div",{style:{marginTop:24},children:[Object(h.jsx)("input",{value:o,onChange:function(n){return i(n.target.value)},placeholder:a.length?"Type Something...":"Loading...",disabled:!a.length,ref:d}),Object(h.jsx)("div",{children:l.slice(0,10).map((function(n){return Object(h.jsxs)(L,{onClick:function(){t(n.id),i(""),setTimeout((function(){var n;null===(n=d.current)||void 0===n||n.focus()}),500)},children:[Object(h.jsx)("img",{src:"https://s2.coinmarketcap.com/static/img/coins/64x64/".concat(n.id,".png"),alt:n.id}),n.name]},n.id)}))})]})},N=function(n,e){Object(s.useEffect)((function(){y.a.get("https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?ids=".concat(n.join(","),"&aux=ath")).then((function(n){var t=n.data.data.cryptoCurrencyList;e((function(n){return n.map((function(n){var e,c,r,o,i=t.find((function(e){return e.id===n.id}));return i?Object(f.a)(Object(f.a)({},n),{},{price:(null===(e=i.quotes)||void 0===e||null===(c=e[0])||void 0===c?void 0:c.price)||0,p24h:(null===(r=i.quotes)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.percentChange24h)||0}):n}))}))}))}),[n.length,e])},R=g.a.div(a||(a=Object(b.a)(["\n  text-align: left;\n  padding: 0px 8px;\n"])));function E(){var n=Object(s.useState)(0),e=Object(m.a)(n,2),t=(e[0],e[1]),c=Object(s.useState)((function(){var n=new URL(window.location.href).searchParams.get("ids");return n?n.split("_").map((function(n){return{id:Number(n)}})):[]})),r=Object(m.a)(c,2),o=r[0],i=r[1],a=o.map((function(n){return n.id})),d=Object(s.useRef)(!1),l=S("LOCAL_KEY");N(a,i);var u=Object(s.useRef)(),b=function n(){var e;try{e=new WebSocket("wss://stream.coinmarketcap.com/price/latest"),u.current=e}catch(t){console.log(t),setTimeout((function(){n(),g(a)}),5e3)}},g=function n(e){if(u.current){var c=u.current;t(c.readyState),c.onopen=function(){console.log("ws connected!"),t(c.readyState),d.current&&(d.current=!1);var r={method:"subscribe",id:"price",data:{cryptoIds:e}};c.send(JSON.stringify(r)),c.onmessage=function(n){var e,t=JSON.parse(n.data);if(null===t||void 0===t||null===(e=t.d)||void 0===e?void 0:e.cr){var c=t.d.cr;i((function(n){return n.map((function(n){return n.id===c.id?Object(f.a)(Object(f.a)({},n),{},{price:c.p,p24h:c.p24h}):n}))}))}else console.log(t)},c.addEventListener("close",(function(r){console.log("ws closed!"),t(c.readyState),d.current||(console.log("reconnecting..."),setTimeout((function(){console.log(e),b(),n(e)}),5e3))}))}}},j=function(){console.log("reconnect!"),function(){var n;null===(n=u.current)||void 0===n||n.close()}(),b(),g(a)},x=function(n,e){a.includes(n)&&e||i((function(t){return e?[].concat(Object(p.a)(t),[{id:n}]):t.filter((function(e){return e.id!==n}))}))};return Object(s.useEffect)((function(){if(a.length){d.current=!0,j();var n=new URL(window.location.href);n.searchParams.set("ids",a.join("_")),window.history.replaceState("",document.title,n)}}),[a.length]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(R,{children:o.map((function(n){var e,t=n.id,c=n.p24h,r=n.price;return Object(h.jsx)(O,{id:t,p24h:c,price:r,name:null===(e=l[t])||void 0===e?void 0:e.name,onRemove:function(n){return x(n)}},t)}))}),Object(h.jsx)(C,{wsInstance:u,reconnect:j}),Object(h.jsx)(v,{}),Object(h.jsx)(I,{map:l,onAdd:function(n){return x(n,!0)}})]})}var J=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),o(n),i(n)}))};u.a.render(Object(h.jsx)(d.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),J()}},[[54,1,2]]]);
//# sourceMappingURL=main.c375e581.chunk.js.map