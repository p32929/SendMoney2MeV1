(this["webpackJsonpreactjs-p32929"]=this["webpackJsonpreactjs-p32929"]||[]).push([[0],{42:function(e,t,n){e.exports=n(51)},47:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c);n(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(13),l=n(89),s=n(86),m=n(91),u=n(92),h=n(93),d=Object(s.a)((function(e){return{}})),f=function(e){d();var t=e.path,n=e.color,a=void 0===n?"#FFF":n,c=e.size,r=void 0===c?24:c;return o.a.createElement("svg",{style:{width:r,height:r},viewBox:"0 0 24 24"},o.a.createElement("path",{fill:a,d:t}))},p=n(94),g=n(52),j=n(31),b=function e(){Object(j.a)(this,e)};b.github_icon="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",b.gift_icon="M9.06,1.93C7.17,1.92 5.33,3.74 6.17,6H3A2,2 0 0,0 1,8V10A1,1 0 0,0 2,11H11V8H13V11H22A1,1 0 0,0 23,10V8A2,2 0 0,0 21,6H17.83C19,2.73 14.6,0.42 12.57,3.24L12,4L11.43,3.22C10.8,2.33 9.93,1.94 9.06,1.93M9,4C9.89,4 10.34,5.08 9.71,5.71C9.08,6.34 8,5.89 8,5A1,1 0 0,1 9,4M15,4C15.89,4 16.34,5.08 15.71,5.71C15.08,6.34 14,5.89 14,5A1,1 0 0,1 15,4M2,12V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V12H13V20H11V12H2Z",b.menu_icon="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z";var C=n(96),y=n(97),E=n(11),O=function e(){Object(j.a)(this,e)};O.get=function(e,t,n,a){t&&(e=e+"?"+(t=new URLSearchParams(t))),fetch(e,{method:"GET",headers:new Headers(Object(E.a)(Object(E.a)({},n),{},{"Content-Type":"application/json"}))}).then((function(e){return Promise.all([e.status,e.json()])})).then((function(e){var t=Object(i.a)(e,2),n=t[0],o=t[1];console.log(o),console.log(n),a(n,o)}))},O.post=function(e,t,n,a,o){t&&(e=e+"?"+(t=new URLSearchParams(t))),fetch(e,{method:"POST",headers:new Headers(Object(E.a)(Object(E.a)({},n),{},{"Content-Type":"application/json"})),body:JSON.stringify(Object(E.a)({},a))}).then((function(e){return Promise.all([e.status,e.json()])})).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];console.log(a),console.log(n),o(n,a)}))},O.put=function(e,t,n,a,o){t&&(e=e+"?"+(t=new URLSearchParams(t))),fetch(e,{method:"PUT",headers:new Headers(Object(E.a)(Object(E.a)({},n),{},{"Content-Type":"application/json"})),body:JSON.stringify(Object(E.a)({},a))}).then((function(e){return Promise.all([e.status,e.json()])})).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];console.log(a),console.log(n),o(n,a)}))},O.deletee=function(e,t,n,a){t&&(e=e+"?"+(t=new URLSearchParams(t))),fetch(e,{method:"DELETE",headers:new Headers(Object(E.a)(Object(E.a)({},n),{},{"Content-Type":"application/json"}))}).then((function(e){return Promise.all([e.status,e.json()])})).then((function(e){var t=Object(i.a)(e,2),n=t[0],o=t[1];console.log(o),console.log(n),a(n,o)}))},O.upload=function(e,t,n,a,o){t&&(e=e+"?"+(t=new URLSearchParams(t)));var c=new FormData;c.append("type","file"),c.append(n,a),fetch(e,{method:"POST",headers:{Accept:"application/json"},body:c}).then((function(e){return Promise.all([e.status,e.json()])})).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];console.log(a),console.log(n),o(n,a)})).catch((function(e){o(500,{error:e})}))};var v=n(95),w=Object(s.a)((function(e){return{}})),S=function(e){w();var t,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1],d=Object(a.useState)(-1),j=Object(i.a)(d,2),E=j[0],S=j[1],H=Object(a.useState)(!1),V=Object(i.a)(H,2),P=V[0],A=V[1];Object(a.useEffect)((function(){O.get("https://api.npoint.io/ce98bec29331617dc4a1",null,null,(function(e,t){s(t),A(!0)}))}),[]);return o.a.createElement(l.a,{container:!0,direction:"column"},o.a.createElement(m.a,{position:"sticky"},o.a.createElement(u.a,{style:{backgroundColor:"#2196F3"}},o.a.createElement(h.a,{variant:"h6",style:{flexGrow:1}},"Send Money"),o.a.createElement(p.a,{size:"small",target:"_blank",href:"https://github.com/p32929/SendMoney2Me"},o.a.createElement(f,{path:b.github_icon})))),o.a.createElement(g.a,{style:{margin:16,padding:16}},o.a.createElement(l.a,{item:!0,xs:!0,container:!0,direction:"column"},o.a.createElement(h.a,{style:{color:"#212121",fontSize:16}},"Welcome"),o.a.createElement(h.a,{style:{color:"#757575",fontSize:14}},"Send money directly to "),o.a.createElement(h.a,{style:{color:"#757575",fontSize:14}},o.a.createElement("b",null,"Fayaz Bin Salam")))),o.a.createElement(g.a,{style:{marginBottom:16,marginLeft:16,marginRight:16,padding:16}},o.a.createElement(l.a,{item:!0,xs:!0,container:!0,direction:"column"},o.a.createElement(h.a,{style:{color:"#212121",fontSize:16}},"You are sending money from"),0===r.length&&o.a.createElement(l.a,{container:!0,direction:"row",justify:"center"},o.a.createElement(v.a,{style:{color:"#4CAF50",marginTop:16}})),r.length>0&&o.a.createElement(C.a,{open:r.length>0&&P,onOpen:function(){A(!0)},onClose:function(){A(!1)},onChange:function(e){S(parseInt(e.target.value))},style:{marginTop:16,marginRight:16}},null===r||void 0===r?void 0:r.map((function(e,t){return o.a.createElement(y.a,{value:t},null===e||void 0===e?void 0:e.country)}))))),null===(t=r[E])||void 0===t?void 0:t.options.map((function(e,t){return o.a.createElement(g.a,{style:{marginBottom:16,marginLeft:16,marginRight:16,padding:16}},o.a.createElement(l.a,{container:!0,direction:"row"},o.a.createElement(l.a,{item:!0},o.a.createElement("img",{style:{height:36,width:36,marginRight:16,objectFit:"cover"},src:r[E].options[t].logo})),o.a.createElement(l.a,{item:!0,xs:!0,container:!0,direction:"column"},o.a.createElement(h.a,{style:{color:"#212121",fontSize:16}},r[E].options[t].title),o.a.createElement(h.a,{style:{color:"#757575",fontSize:14,whiteSpace:"pre-line"}},r[E].options[t].description))))})))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.fbde98e4.chunk.js.map