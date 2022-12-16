(this["webpackJsonpAccounting-of-employees"]=this["webpackJsonpAccounting-of-employees"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),l=n(5),i=n(4),s=n(10),u=n(2),m=n(26),j=(n(15),n(0)),b=function(e){var t=e.countOfEmployees,n=e.employeesWithPremia;return Object(j.jsxs)("div",{className:"app-info",children:[Object(j.jsx)("h1",{children:"Accounting of employees in the company N"}),Object(j.jsxs)("h2",{children:["Total number of employees: ",t]}),Object(j.jsxs)("h2",{children:["The premium will be received: ",n]})]})},d=(n(17),function(e){var t=e.onChangeSearch,n=e.query;return Object(j.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"Find an employee",value:n,onChange:t})}),p=n(7),f=n.n(p),O=(n(18),function(e){var t=e.filterOption,n=e.onFilterOption;return Object(j.jsx)("div",{className:"btn-group",children:[{id:1,name:"all",label:"All Employees"},{id:2,name:"toRise",label:"To rise"},{id:3,name:"salaryMoreThen1000",label:"Salary mory then $1000"}].map((function(e){var a=e.id,c=e.name,o=e.label;return Object(j.jsx)("button",{type:"button",onClick:function(){return n("".concat(c))},className:f()("btn",{"btn-light":t==="".concat(c),"btn-outline-light":t!=="".concat(c)}),children:o},a)}))})}),h=(n(19),function(e){var t=e.employee,n=e.onDeleteEmployee,a=e.onToggleProp,c=e.onChangeSalary,o=t.name,r=t.salary,l=t.increased,i=t.liked;return Object(j.jsxs)("li",{className:f()("list-group-item d-flex justify-content-between",{increase:l,like:i}),children:[Object(j.jsx)("span",{className:"list-group-item-label","data-toggle":"liked",onClick:a,children:o}),Object(j.jsx)("input",{type:"text",className:"list-group-item-input",value:r,onChange:c}),Object(j.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(j.jsx)("button",{type:"button",className:"btn-cookie btn-sm","data-toggle":"increased",onClick:a,children:Object(j.jsx)("i",{className:"fas fa-cookie"})}),Object(j.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(j.jsx)("i",{className:"fas fa-trash"})}),Object(j.jsx)("i",{className:"fas fa-star"})]})]})}),y=(n(20),c.a.memo((function(e){var t=e.employees,n=e.onDeleteEmployee,a=e.onToggleProp,c=e.onChangeSalary;return console.log("render"),Object(j.jsx)("ul",{className:"app-list list-group",children:t.map((function(e){return Object(j.jsx)(h,{employee:e,onDeleteEmployee:function(){return n(e.id)},onToggleProp:function(t){a(e.id,t.currentTarget.getAttribute("data-toggle"))},onChangeSalary:function(t){return c(t,e.id)}},e.id)}))})}))),g=(n(21),function(e){var t=e.onAddEmployee,n=e.onSetName,a=e.onSetSalary,c=e.salary,o=e.name;return Object(j.jsxs)("div",{className:"app-add-form",children:[Object(j.jsx)("h3",{children:"Add new employee"}),Object(j.jsxs)("form",{className:"add-form d-flex",onSubmit:function(e){e.preventDefault(),t()},children:[Object(j.jsx)("input",{required:!0,type:"text",className:"form-control new-post-label",placeholder:"Name ?",name:"name",value:o,onChange:n}),Object(j.jsx)("input",{required:!0,type:"number",className:"form-control new-post-label",placeholder:"Salary in $ ?",name:"salary",value:c,onChange:a}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"Add employee"})]})]})}),x=[{id:1,name:"Illia",salary:1200,increased:!1,liked:!1},{id:2,name:"Dima",salary:1e3,increased:!1,liked:!1},{id:3,name:"Vova",salary:1500,increased:!1,liked:!1}];n(22);var v=function(){var e=Object(a.useState)(x),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(u.a)(o,2),p=r[0],f=r[1],h=Object(a.useState)(""),v=Object(u.a)(h,2),N=v[0],S=v[1],k=Object(a.useState)(""),C=Object(u.a)(k,2),T=C[0],w=C[1],A=Object(a.useState)(""),E=Object(u.a)(A,2),D=E[0],P=E[1],q=Object(a.useState)("all"),M=Object(u.a)(q,2),F=M[0],I=M[1],J=Object(a.useCallback)(function(e,t){var n;return function(){clearTimeout(n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];n=setTimeout.apply(void 0,[e,t].concat(c))}}(P,500),[]),L=n.length,R=n.filter((function(e){return e.liked})).length,W=Object(a.useMemo)((function(){return n.filter((function(e){switch(F){case"toRise":return e.liked;case"salaryMoreThen1000":return e.salary>1e3;default:return e}})).filter((function(e){return e.name.toLowerCase().includes(D.trim().toLowerCase())}))}),[D,F,n]);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{countOfEmployees:L,employeesWithPremia:R}),Object(j.jsxs)("div",{className:"search-panel",children:[Object(j.jsx)(d,{onChangeSearch:function(e){w(e.target.value),J(e.target.value)},query:T}),Object(j.jsx)(O,{filterOption:F,onFilterOption:function(e){I(e)}})]}),Object(j.jsx)(y,{employees:W,onDeleteEmployee:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},onToggleProp:function(e,t){c((function(n){return n.map((function(n){return n.id===e?Object(i.a)(Object(i.a)({},n),{},Object(l.a)({},t,!n[t])):n}))}))},onChangeSalary:function(e,t){c((function(n){return n.map((function(n){return n.id===t?Object(i.a)(Object(i.a)({},n),{},{salary:e.target.value}):n}))}))}}),Object(j.jsx)(g,{onAddEmployee:function(){var e={id:Object(m.a)(),name:p,salary:N,increased:!1,liked:!1};c((function(t){return[].concat(Object(s.a)(t),[e])})),f(""),S("")},onSetName:function(e){f(e.target.value)},onSetSalary:function(e){S(e.target.value)},name:p,salary:N})]})};n(23);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.829a74b1.chunk.js.map