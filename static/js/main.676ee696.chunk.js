(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),o=(n(9),n(10),n(0)),u=function(e){var t=e.title;return Object(o.jsx)("header",{className:"header",children:t})},i=(n(12),function(e){var t=e.author;return Object(o.jsx)("footer",{className:"footer",children:t})}),l=(n(13),function(e){var t=e.children;return Object(o.jsxs)("main",{className:"container",children:[t,Object(o.jsx)("a",{className:"container__link",rel:"noreferrer noopener",target:"_blank",href:"https://www.nbp.pl/home.aspx?f=/statystyka/kursy.html",children:"Aktualne kursy walut NBP "})]})}),j=n(2),b=(n(14),[{short:"EUR",rate:4.55},{short:"USD",rate:3.78}]),h=function(e){var t=e.result;return Object(o.jsx)("p",{children:void 0!==t&&Object(o.jsxs)(o.Fragment,{children:["Otrzymasz : \xa0",Object(o.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})},d=function(){var e=Object(r.useState)(b[0].short),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(),s=Object(j.a)(a,2),u=s[0],i=s[1],l=Object(r.useState)(""),d=Object(j.a)(l,2),f=d[0],m=d[1];return Object(o.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),function(e,t){var n=b.find((function(t){return t.short===e})).rate;i({targetAmount:t/n,currency:e})}(n,f)},children:Object(o.jsxs)("fieldset",{className:"form__fieldset",children:[Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:["Podaj kwot\u0119 w PLN *",Object(o.jsx)("input",{type:"number",name:"currencyPLN",min:"1",step:"any",autoFocus:!0,required:!0,value:f,onChange:function(e){var t=e.target;return m(t.value)}})]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Wybierz walut\u0119: "}),Object(o.jsx)("select",{value:n,onChange:function(e){var t=e.target;return c(t.value)},children:b.map((function(e){return Object(o.jsx)("option",{value:e.short,children:e.short},e.short)}))})]})}),Object(o.jsx)("p",{className:"form__comment",children:"Pole oznaczone * s\u0105 wymagane"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("button",{className:"form__button",type:"submit",children:"Przelicz"}),Object(o.jsx)("button",{className:"form__button",onClick:function(){m(""),c(b[0].short),i(void 0)},type:"reset",children:"Wyczy\u015b\u0107"})]}),Object(o.jsx)(h,{result:u})]})})},f=(n(15),function(){var e=Object(r.useState)(new Date),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=setInterval((function(){c(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(o.jsxs)("p",{className:"date",children:["Dzisiaj jest",function(){return n.toLocalDateString(void 0,{day:"numeric",weekday:"long",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})}]})});var m=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{title:"kalkulator walutowy"}),Object(o.jsxs)(l,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(d,{})]}),Object(o.jsx)(i,{author:"\xa9 Anna \u015aniegu\u0142a 2021"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),O()}],[[16,1,2]]]);
//# sourceMappingURL=main.676ee696.chunk.js.map