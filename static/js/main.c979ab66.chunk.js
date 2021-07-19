(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r,c,o,i,a,s,u,l,j=n(1),b=n.n(j),h=n(9),d=n.n(h),x=(n(17),n(3)),O=n(2),f=O.b.header(r||(r=Object(x.a)(["\n    font-size: 25px;\n    font-weight: 700;\n    color: ",";\n    text-transform: uppercase;\n    padding: 60px;\n"])),(function(e){return e.theme.colors.violet})),p=n(0),m=function(e){var t=e.title;return Object(p.jsx)(f,{children:t})},g=O.b.footer(c||(c=Object(x.a)(["\n    text-align: center;\n    padding: 10px;\n    font-weight: 700;\n"]))),v=function(e){var t=e.author;return Object(p.jsx)(g,{children:t})},y=O.b.main(o||(o=Object(x.a)(["\n    border: 10px solid ",";\n    max-width: 500px;\n    padding: 20px;\n    margin: 50px 0;\n    text-align: center;\n    background-color: ",";\n    border-radius: 15px;\n    box-shadow: 10px 10px ",";\n    display: inline-block;\n"])),(function(e){return e.theme.colors.violet}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.white})),w=O.b.a(i||(i=Object(x.a)(["\n    color: ",";\n    text-decoration: none;\n\n    &:hover {\n        color: ",";   \n    }\n\n"])),(function(e){return e.theme.colors.violet}),(function(e){return e.theme.colors.black})),k=function(e){var t=e.children;return Object(p.jsxs)(y,{children:[t,Object(p.jsx)(w,{rel:"noreferrer noopener",target:"_blank",href:"https://www.nbp.pl/home.aspx?f=/statystyka/kursy.html",children:"Aktualne kursy walut NBP "})]})},z=n(4),S=[{short:"EUR",rate:4.55},{short:"USD",rate:3.78}],F=function(e){var t=e.result;return Object(p.jsx)("p",{children:void 0!==t&&Object(p.jsxs)(p.Fragment,{children:["Otrzymasz : \xa0",Object(p.jsxs)("strong",{children:[t.targetAmount.toFixed(2),"\xa0",t.currency]})]})})},P=O.b.fieldset(a||(a=Object(x.a)(["\n    border: none;  \n"]))),C=O.b.p(s||(s=Object(x.a)(["\n    font-size: 12px; \n"]))),D=O.b.button(u||(u=Object(x.a)(["\n    margin: 7px;\n    cursor: pointer;\n"]))),L=function(){var e=Object(j.useState)(S[0].short),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(j.useState)(),o=Object(z.a)(c,2),i=o[0],a=o[1],s=Object(j.useState)(""),u=Object(z.a)(s,2),l=u[0],b=u[1];return Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){var n=S.find((function(t){return t.short===e})).rate;a({targetAmount:t/n,currency:e})}(n,l)},children:Object(p.jsxs)(P,{children:[Object(p.jsx)("p",{children:Object(p.jsxs)("label",{children:["Podaj kwot\u0119 w PLN *",Object(p.jsx)("input",{type:"number",name:"currencyPLN",min:"1",step:"any",autoFocus:!0,required:!0,value:l,onChange:function(e){var t=e.target;return b(t.value)}})]})}),Object(p.jsx)("p",{children:Object(p.jsxs)("label",{children:[Object(p.jsx)("span",{children:"Wybierz walut\u0119: "}),Object(p.jsx)("select",{value:n,onChange:function(e){var t=e.target;return r(t.value)},children:S.map((function(e){return Object(p.jsx)("option",{value:e.short,children:e.short},e.short)}))})]})}),Object(p.jsx)(C,{children:"Pole oznaczone * s\u0105 wymagane"}),Object(p.jsxs)("p",{children:[Object(p.jsx)(D,{type:"submit",children:"Przelicz"}),Object(p.jsx)(D,{onClick:function(){b(""),r(S[0].short),a(void 0)},type:"reset",children:"Wyczy\u015b\u0107"})]}),Object(p.jsx)(F,{result:i})]})})},A=O.b.p(l||(l=Object(x.a)(["\n    font-family: monospace;\n"]))),I=function(){var e=Object(j.useState)(new Date),t=Object(z.a)(e,2),n=t[0],r=t[1],c=n.toLocaleString(void 0,{day:"numeric",weekday:"long",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"});return Object(j.useEffect)((function(){var e=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(p.jsxs)(A,{children:["Dzisiaj jest"," ",c]})};var B=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(m,{title:"kalkulator walutowy"}),Object(p.jsxs)(k,{children:[Object(p.jsx)(I,{}),Object(p.jsx)(L,{})]}),Object(p.jsx)(v,{author:"\xa9 Anna \u015aniegu\u0142a 2021"})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};d.a.render(Object(p.jsx)(b.a.StrictMode,{children:Object(p.jsx)(O.a,{theme:{colors:{violet:"hsla(299, 51% 36% 0.922)",black:"hsl(0, 0%, 0%)",white:"hsl(0, 0%, 100%)"}},children:Object(p.jsx)(B,{})})}),document.getElementById("root")),E()}},[[21,1,2]]]);
//# sourceMappingURL=main.c979ab66.chunk.js.map