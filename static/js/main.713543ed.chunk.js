(this["webpackJsonpnote-app-react"]=this["webpackJsonpnote-app-react"]||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(6),i=n.n(c),r=n(22),o=n.n(r),u=n(13),s=n(21),l=n.n(s),d=n(12),j=n(23),p=n(8),m=(n(31),n(15));m.a.initializeApp({apiKey:"AIzaSyAXOJD-SmZVNl-Lh3xKbn1f39CZfFVgT-Y",authDomain:"note-app-f5b40.firebaseapp.com",projectId:"note-app-f5b40",storageBucket:"note-app-f5b40.appspot.com",messagingSenderId:"918555639509",appId:"1:918555639509:web:a382e47a5adaac5e9a6c5c",measurementId:"G-TKX5L9L6NH"});var b=m.a,f=(new m.a.auth.GoogleAuthProvider,m.a.auth()),h=n(24),g=n(16),O=n(10),v=n.n(O);var x=function(e){var t=Object(c.useState)(""),n=Object(p.a)(t,2),i=n[0],r=n[1];return Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"input-field",placeholder:"add list item",value:i,onChange:function(e){return r(e.target.value)},onKeyPress:function(t){return function(t){"Enter"===t.key&&""!==t.target.value&&(e.handleListInput(i),r(""))}(t)}})})};n(35);var N=function(e){var t=Object(c.useState)(e.display),n=Object(p.a)(t,2),i=n[0],r=n[1],o={id:v()(),title:"",note:"",list:[],date:"",project:""},s=Object(c.useState)(o),l=Object(p.a)(s,2),j=l[0],m=l[1],b=function(e){var t=e.target,n=t.name,a=t.value;m(Object(u.a)(Object(u.a)({},j),{},Object(g.a)({},n,a)))};return Object(a.jsx)("div",{className:"form-wrapper",children:Object(a.jsxs)("div",{className:"form",children:[i?Object(a.jsx)("input",{className:"input-field title-input",placeholder:"Title",name:"title",value:j.title,"aria-label":"title-input",onChange:function(e){return b(e)}}):null,Object(a.jsx)("textarea",{className:"input-field",id:"note-input",placeholder:"Take a note...",name:"note",value:j.note,"aria-label":"note-input",onClick:function(){return r(!0)},onChange:function(e){return b(e)}}),i?Object(a.jsx)(x,{handleListInput:function(e){return function(e){var t=Object(u.a)({},j);t.list=[].concat(Object(d.a)(t.list),[{name:e,completed:!1,id:v()()}]),m(t)}(e)}}):null,j.list.map((function(e){return Object(a.jsx)("li",{className:"temporary-form-list-item",children:e.name},v()())})),i?Object(a.jsxs)("div",{id:"form-bottom-input",children:[Object(a.jsx)("input",{type:"date",className:"input-field",id:"due-date-input","aria-label":"date-input",value:j.date,name:"date",onChange:function(e){return b(e)}})," ",Object(a.jsx)("input",{className:"input-field",id:"project-input",placeholder:"project","aria-label":"project-input",value:j.project,name:"project",onChange:function(e){return b(e)}})," ",Object(a.jsx)("button",{"aria-label":"add-button",id:"add-button",onClick:function(){r(!1),""===j.note&&0===j.list.length||e.handleForm(j),m(o)},children:"Close"})]}):null]})})};var k=function(e){var t=Object(c.useState)(e.edit),n=Object(p.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(!1),u=Object(p.a)(o,2),s=u[0],l=u[1];return Object(a.jsx)("div",{onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},children:Object(a.jsxs)("div",{className:"list-item",children:[Object(a.jsx)("input",{name:"checkbox",onChange:function(t){return e.changeListItem(t)},checked:e.completed,className:"checkbox",type:"checkbox"}),i?Object(a.jsx)("input",{autoFocus:!0,name:"list",spellCheck:"false",className:"change-input",onChange:function(t){return e.changeListItem(t)},onBlur:function(){return r(!i)},onKeyUp:function(e){return"Enter"===e.key?r(!i):null},value:e.item}):Object(a.jsx)("li",{onClick:function(){return r(!i)},className:"list-item-text ".concat(e.completed?"checked":void 0),children:e.item}),s?Object(a.jsx)("button",{className:"delete-checklist-button",onClick:e.deleteListItem,children:"x"}):null]})})};n(36);var C=function(e){var t=e.note,n=t.id,i=t.title,r=t.note,o=t.list,u=t.project,s=t.date,l=Object(c.useState)(e.edit),d=Object(p.a)(l,2),j=d[0],m=d[1],b=Object(c.useState)(e.edit),f=Object(p.a)(b,2),h=f[0],g=f[1],O=Object(c.useState)(e.edit),v=Object(p.a)(O,2),N=v[0],C=v[1],y=Object(c.useState)(e.edit),I=Object(p.a)(y,2),L=I[0],S=I[1],w=Object(c.useState)(!1),E=Object(p.a)(w,2),F=E[0],B=E[1],K=function(t){var a=t.target.name,c=t.target.value;e.changeNoteField(c,a,n)};return Object(a.jsxs)("div",{className:"note-wrapper",onMouseEnter:function(){return B(!0)},onMouseLeave:function(){return B(!1)},children:[F?Object(a.jsx)("button",{className:"delete-button",onClick:function(){return e.deleteNote(n)},children:"x"}):null,Object(a.jsx)("div",{children:!i||j?Object(a.jsx)("input",{autoFocus:!0,name:"title",placeholder:"Title",onChange:function(e){return K(e)},onBlur:function(){return m(!j)},onKeyUp:function(e){return"Enter"===e.key?m(!j):null},value:i,spellCheck:"false",className:"change-input title-edit"}):Object(a.jsx)("h2",{onClick:function(){return m(!j)},className:"note-title","data-testid":"title",children:i})}),h||!r?Object(a.jsx)("textarea",{autoFocus:!0,onFocus:function(e){var t=e.target.value;e.target.value="",e.target.value=t},name:"note",placeholder:"add a note...",value:r,onChange:function(e){return K(e)},onBlur:function(){return g(!h)},className:"change-input note-input",spellCheck:"false"}):Object(a.jsx)("div",{className:"",children:Object(a.jsx)("p",{className:"note-text","data-testid":"note",onClick:function(){return g(!h)},children:r})}),o&&o.map((function(t){return Object(a.jsx)(k,{deleteListItem:function(){return e.deleteListItem(n,t.id)},edit:!1,changeListItem:function(a){return e.changeListItem(a,n,t.id)},completed:t.completed,item:t.name},t.id)})),Object(a.jsx)(x,{handleListInput:function(t){return e.addListItem(t,n)}}),Object(a.jsxs)("div",{className:"note-bottom",children:[!u||N?Object(a.jsx)("input",{className:"project bottom-tag","data-testid":"project",placeholder:"project",name:"project",value:u,onBlur:function(){return C(!N)},onKeyDown:function(e){return"Enter"===e.key&&C(!N)},onChange:function(e){return K(e)}}):Object(a.jsx)("p",{className:"project bottom-tag","data-testid":"project",onClick:function(){return C(!N)},children:u}),!s||L?Object(a.jsx)("input",{className:"project bottom-tag","data-testid":"date",id:"due-date",type:"date",name:"date",value:s,onMouseLeave:function(){return S(!L)},onChange:function(e){return K(e)}}):Object(a.jsx)("p",{className:"project bottom-tag","data-testid":"date",id:"due-date",onClick:function(){return S(!L)},children:s})]})]})},y=[{id:0,src:n.p+"static/media/img0.6388ad41.jpg"},{id:1,src:n.p+"static/media/img1.df41b80b.jpg"},{id:2,src:n.p+"static/media/img2.35c99161.jpg"},{id:3,src:n.p+"static/media/img3.914923cf.jpg"},{id:4,src:n.p+"static/media/img4.028696c5.jpg"},{id:5,src:n.p+"static/media/img5.c4890551.jpg"},{id:6,src:n.p+"static/media/img6.541cb48e.jpg"},{id:7,src:n.p+"static/media/img7.8366e1fe.jpg"},{id:8,src:n.p+"static/media/img8.29ddd92a.jpg"}];var I=function(e){return Object(a.jsx)("ul",{id:"images-ul",children:y.map((function(t,n){return Object(a.jsx)("li",{id:t.id,children:Object(a.jsx)("img",{alt:n,className:"img",src:t.src,name:t.id,onClick:function(t){return e.changeBackground(t)}})},n)}))})};var L=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"sign-in",onClick:function(){var e=new b.auth.GoogleAuthProvider;f.signInWithPopup(e)},children:"Sign in"})})};var S=function(){return f.currentUser&&Object(a.jsx)("button",{className:"sign-out",onClick:function(){return f.signOut().then((function(){return window.location.reload()}))},children:"Sign Out"})},w=b.firestore();var E=function(e){var t=Object(h.a)(f),n=Object(p.a)(t,2),i=n[0],r=n[1],o=Object(c.useState)(e.sample),s=Object(p.a)(o,2),m=s[0],b=s[1],g=Object(c.useState)(y[5]),O=Object(p.a)(g,2),x=O[0],k=O[1],E=w.collection("users");Object(c.useEffect)((function(){document.body.style.backgroundImage="url(".concat(x.src,")"),document.body.style.backgroundSize="cover",i&&E.doc(i.uid).update({backgroundImg:x})}),[x]),Object(c.useEffect)((function(){i&&E.doc(i.uid).update({notes:m})}),[m]),Object(c.useEffect)((function(){i&&E.doc(i.uid).get().then((function(e){var t=e.data();e.exists?(b(t.notes),k(t.backgroundImg)):E.doc(i.uid).set({notes:m,backgroundImg:x})}))}),[i]);var F=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b([t].concat(Object(d.a)(m)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e,t){b(m.map((function(n){return n.id===t?Object(u.a)(Object(u.a)({},n),{},{list:[].concat(Object(d.a)(n.list),[{name:e,completed:!1,id:v()()}])}):n})))},K=function(e,t,n){var a=e.target.name,c=e.target.value,i=Object(d.a)(m);m.map((function(e){return t===e.id&&e.list.map((function(e){return e.id===n&&("checkbox"===a?e.completed=!e.completed:e.name=c),e})),e})),b(i)},M=function(e,t){var n=Object(d.a)(m);n.map((function(n){return e===n.id&&(console.log(e,t),n.list=n.list.filter((function(e){return e.id!==t}))),n})),b(n)},A=function(e,t,n){var a=Object(d.a)(m);a.map((function(a){return n===a.id?a[t]=e:a})),b(a)},P=function(e){var t=m.filter((function(t){return t.id!==e}));b(t)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("div",{className:"login",children:null!==i?Object(a.jsxs)("div",{className:"sign-in",children:[Object(a.jsx)("img",{className:"user-img",alt:"user-img",src:f.currentUser.photoURL}),Object(a.jsx)(S,{})]}):Object(a.jsx)(L,{})}),Object(a.jsx)(I,{changeBackground:function(e){k(y[e.target.name])}}),Object(a.jsx)("span",{className:"clear-all-button ".concat(0===m.length&&"hide"),onClick:function(){b([])},children:"Clear Notes"})]}),Object(a.jsx)(N,{display:!1,handleForm:function(e){return F(e)}}),r?Object(a.jsx)("div",{className:"loading",children:Object(a.jsx)("p",{style:{fontSize:"1.5rem"},children:"loading..."})}):Object(a.jsx)("div",{className:"notes-container",children:0!==m.length&&m.map((function(e){return Object(a.jsx)(C,{deleteListItem:M,deleteNote:P,edit:!1,changeNoteField:A,addListItem:B,changeListItem:K,note:e},e.id)}))})]})},F=[{id:v()(),title:"Dinner Planning",note:"Planning, preparing, and portioning your meals ahead of time is one of the most effective tools for keeping your food budget in check",list:[],project:"dinner",date:"2021-12-17"},{id:v()(),title:"My Shopping List",note:"need to go to that market",list:[{name:"way protein",completed:!0,id:v()()},{name:"paper towels",completed:!1,id:v()()},{name:"after shave",completed:!0,id:v()()},{name:"bread",completed:!1,id:v()()}],project:"to-buy",date:"2020-12-17"}];n(37);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(E,{sample:F})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.713543ed.chunk.js.map