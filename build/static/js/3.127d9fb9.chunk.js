(this["webpackJsonpcrypto-watch"]=this["webpackJsonpcrypto-watch"]||[]).push([[3],{61:function(t,e,r){"use strict";r.r(e);var n,a,i=r(4),c=r(2),o=r(59),u=r(1),l=r(3),s=r(18),b=r(11),h=r(7),f=r.n(h),d=r(27),p={"1D":300,"7D":300,"1M":3600,"3M":3600,"1Y":86400},g=function(t,e){var r=Object(u.useState)([]),n=Object(i.a)(r,2),a=n[0],c=n[1],o=Object(u.useState)(!0),l=Object(i.a)(o,2),s=l[0],h=l[1],g=Object(u.useCallback)((function(){return h(!0),f.a.get("https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?id=".concat(t,"&range=").concat(e)).then((function(t){var e=t.data,r=Object.entries(e.data.points).map((function(t){var e=Object(i.a)(t,2),r=e[0],n=e[1];return{time:Number(r),value:n.v[0]}}));return c(r),r})).catch((function(t){return[]})).finally((function(){h(!1)}))}),[t,e]);return Object(u.useEffect)((function(){g();var r=d.a.subscribe("WS-".concat(t),(function(t){c((function(r){if(!r.length)return r;var n=r[r.length-1],a=1e3*n.time;return Number(new Date)-a>=1e3*p[e]?[].concat(Object(b.a)(r),[{time:Math.floor(Number(new Date)/1e3),value:t.p}]):(n.value=t.p,Object(b.a)(r))}))}));return function(){console.log("unsubscribe!"),d.a.unsubscribe("WS-".concat(t),r)}}),[t,e,g]),[a,s]},j=r(0),v={chart:{layout:{backgroundColor:"transparent",lineColor:"#2B2B43",textColor:"#D9D9D9"},watermark:{color:"rgba(0, 0, 0, 0)"},crosshair:{color:"#758696"},grid:{vertLines:{color:"transparent"},horzLines:{color:"transparent"}}},series:{topColor:"rgba(32, 226, 47, 0.56)",bottomColor:"rgba(32, 226, 47, 0.04)",lineColor:"rgba(32, 226, 47, 1)"}},m=l.a.div(n||(n=Object(c.a)(["\n  height: 100%;\n  width: 100%;\n"]))),O=l.a.div(a||(a=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  &.loading {\n    div.tv-lightweight-charts {\n      filter: blur(4px);\n    }\n  }\n  > span {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"])));e.default=function(t){var e=t.id,r=void 0===e?1:e,n=t.period,a=void 0===n?"1D":n,c=Object(u.useRef)(null),l=Object(u.useRef)(null),b=Object(u.useRef)(null),h=g(r,a),f=Object(i.a)(h,2),d=f[0],p=f[1];return Object(u.useEffect)((function(){if(c.current){if(l.current&&b.current)return b.current.setData(d),void l.current.timeScale().fitContent();var t=c.current.getBoundingClientRect(),e=t.width,r=t.height,n=Object(o.a)(c.current,{width:e,height:r,handleScale:{mouseWheel:!1,pinch:!1,axisPressedMouseMove:!1},rightPriceScale:{borderVisible:!1},timeScale:{borderVisible:!1,timeVisible:!0,fixLeftEdge:!0,fixRightEdge:!0,tickMarkFormatter:function(t,e,r){return new Date(1e3*Number(t)).toLocaleDateString()}},localization:{timeFormatter:function(t){return new Date(1e3*Number(t)).toLocaleString()}}});l.current=n,b.current=n.addAreaSeries({topColor:"rgba(33, 150, 243, 0.56)",bottomColor:"rgba(33, 150, 243, 0.04)",lineColor:"rgba(33, 150, 243, 1)",lineWidth:1}),n.applyOptions(v.chart),b.current.applyOptions(v.series),n.timeScale().fitContent(),b.current.setData(d)}}),[r,d]),Object(j.jsxs)(O,{className:p?"loading":void 0,children:[Object(j.jsx)(m,{ref:c}),p&&Object(j.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=3.127d9fb9.chunk.js.map