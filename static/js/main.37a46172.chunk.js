(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(27),i=a.n(n),r=a(16),s=a(10),c=a(67),o=(a(96),a(0)),l=a(157),d=a(154),u=a(153),m=a(160),j=a(151),b=a(155),h=a(158),O=a(76),f=a.n(O),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],x=a(72),v=a.n(x),y=a(2),S=function(e){var t=e.user;return Object(y.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},I=function(e){var t=e.todo;return Object(y.jsxs)("article",{"data-id":t.id,className:v()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(y.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(y.jsx)(S,{user:t.user},t.userId)]})},g=function(e){var t=e.todos;return Object(y.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(y.jsx)(I,{todo:e},e.id)}))})};function N(e){return p.find((function(t){return t.id===e}))||null}var C=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:N(e.userId)})})),_=function(){var e=Object(o.useState)(C),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),O=c[0],x=c[1],v=Object(o.useState)(0),S=Object(s.a)(v,2),I=S[0],_=S[1],k=Object(o.useState)(!1),B=Object(s.a)(k,2),D=B[0],w=B[1],M=Object(o.useState)(!1),T=Object(s.a)(M,2),L=T[0],P=T[1],A=function(e){if(e.preventDefault(),!O||!I)return w(!O),void P(!I);I?(n((function(e){var t,n={id:(t=e,Math.max.apply(Math,Object(r.a)(t.map((function(e){return e.id}))))+1),title:O,userId:I,completed:!1,user:N(I)};return[].concat(Object(r.a)(a),[n])})),x(""),_(0)):P(!0)};return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{className:"title",children:"Add todo form"}),Object(y.jsx)(l.a,{children:Object(y.jsxs)("form",{onSubmit:A,children:[Object(y.jsxs)(m.a,{fullWidth:!0,onSubmit:A,children:[Object(y.jsx)(d.a,{id:"demo-simple-select-label",children:"User"}),Object(y.jsxs)(j.a,{sx:{marginBottom:2},"data-cy":"userSelect",value:I,onChange:function(e){return t=+e.target.value,_(t),void P(!1);var t},label:"User",children:[Object(y.jsx)(u.a,{value:0,children:"Choose a user"}),p.map((function(e){return Object(y.jsx)(u.a,{value:e.id,children:e.name},e.id)}))]}),L&&Object(y.jsx)("span",{className:"error",children:"Please choose a user"}),Object(y.jsx)(b.a,{sx:{marginBottom:2},placeholder:"Please enter a title","data-cy":"titleInput",id:"outlined-basic",label:"Title",variant:"outlined",value:O,onChange:function(e){return t=e.target.value,x(t),void w(!1);var t}}),D&&Object(y.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(y.jsx)(h.a,{type:"submit","data-cy":"submitButton",variant:"contained",endIcon:Object(y.jsx)(f.a,{}),children:"Add task"})]})}),Object(y.jsx)(g,{todos:a})]})};i.a.render(Object(y.jsx)(_,{}),document.getElementById("root"))},96:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.37a46172.chunk.js.map