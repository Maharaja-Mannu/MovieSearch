(this.webpackJsonpreactjs=this.webpackJsonpreactjs||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l}));var a=n(5),r=n.n(a),o="http://localhost:3001",c=function(e,t,n){var a,c,s;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,r.a.awrap(fetch("".concat(o,"/signup"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}));case 2:if(!(a=i.sent).ok){i.next=8;break}return i.next=6,r.a.awrap(a.json());case 6:return c=i.sent,i.abrupt("return",c);case 8:return i.next=10,r.a.awrap(a.text());case 10:throw s=i.sent,new Error(s);case 12:case"end":return i.stop()}}))},s=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,r.a.awrap(fetch("".concat(o,"/signin"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})}));case 2:if(!(n=c.sent).ok){c.next=8;break}return c.next=6,r.a.awrap(n.json());case 6:return a=c.sent,c.abrupt("return",a);case 8:throw new Error("Invalid username and password");case 9:case"end":return c.stop()}}))},i=function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(fetch("".concat(o,"/logout"),{method:"POST",headers:{"content-type":"application/json",Authorization:e}}));case 2:if(!t.sent.ok){t.next=5;break}return t.abrupt("return","Successfully Logged out!");case 5:throw new Error("Something wrong!");case 6:case"end":return t.stop()}}))},l=function(e,t){var n,a,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.a.awrap(fetch("".concat(o,"/update-profile"),{method:"PATCH",headers:{"content-type":"application/json",Authorization:t},body:JSON.stringify({password:e})}));case 2:if(!(n=s.sent).ok){s.next=8;break}return s.next=6,r.a.awrap(n.json());case 6:return a=s.sent,s.abrupt("return",a);case 8:return s.next=10,r.a.awrap(n.text());case 10:throw c=s.sent,new Error("Unable to update! ".concat(c));case 12:case"end":return s.stop()}}))}},33:function(e,t,n){e.exports=n(52)},38:function(e,t,n){},39:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),s=(n(37),n(38),n(39),n(5)),i=n.n(s),l=n(14),u=n(12),d=n(11),p=n(60),m=n(10);function g(e,t){switch(t.type){case"LOGIN_INIT":return Object(m.a)({},e,{isLoading:!0,signInErr:""});case"LOGIN_SUCCESS":return Object(m.a)({},e,{isLoggedIn:!0,isLoading:!1,idToken:t.payload.idToken,user:t.payload.user,signInErr:""});case"LOGIN_FAILURE":return Object(m.a)({},e,{isLoading:!1,signInErr:t.payload});case"LOGOUT_INIT":return Object(m.a)({},e,{isLoading:!0});case"LOGOUT_SUCCESS":return Object(m.a)({},e,{isLoading:!1,isLoggedIn:!1,idToken:null});case"LOGOUT_FAILURE":return Object(m.a)({},e,{isLoading:!1});case"SIGNUP_INIT":return Object(m.a)({},e,{isLoading:!0,signUpErr:""});case"SIGNUP_SUCCESS":return Object(m.a)({},e,{isLoggedIn:!0,isLoading:!1,idToken:t.payload.idToken,user:t.payload.user,signUpErr:""});case"SIGNUP_FAILURE":return Object(m.a)({},e,{isLoading:!1,signUpErr:t.payload});default:throw new Error}}var E=n(17),b=n(53),h=n(54),f=n(55),I=n(56),L=n(57),S=n(58),y=n(59),O=function(e){var t=e.isLoggedIn,n=Object(a.useState)(!1),o=Object(l.a)(n,2),c=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement(b.a,{color:"light text-left",light:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,"React Intro"),r.a.createElement(f.a,{onClick:function(){return s(!c)}}),r.a.createElement(I.a,{isOpen:c,navbar:!0},r.a.createElement(L.a,{className:"mr-auto",navbar:!0},r.a.createElement(S.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/"},"Home"))),r.a.createElement(L.a,{className:"ml-auto",navbar:!0},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/dashboard"},e.user)),r.a.createElement(S.a,null,r.a.createElement(y.a,{onClick:e.onClickLogout,disabled:e.isLoading},e.isLoading?r.a.createElement(p.a,{size:"sm",color:"light"}):"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/signup"},"Sign Up")),r.a.createElement(S.a,null,r.a.createElement(u.c,{className:"nav-link",to:"/signin"},"Sign In"))))))))},w=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,77))})),k=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,76))})),v=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,78))})),x=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,79))})),U=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,68))})),j={user:localStorage.getItem("user"),isLoggedIn:!!localStorage.getItem("token"),idToken:localStorage.getItem("token"),isLoading:!1,signUpErr:"",signInErr:""},N=function(){var e=Object(a.useReducer)(g,j),t=Object(l.a)(e,2),n=t[0],o=t[1],c=n.isLoggedIn;return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,{isLoggedIn:c,isLoading:n.isLoading,onClickLogout:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o({type:"LOGOUT_INIT"}),e.next=4,i.a.awrap(Object(E.b)(n.idToken));case 4:localStorage.removeItem("token"),o({type:"LOGOUT_SUCCESS"}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),o({type:"LOGOUT_FAILURE"}),console.log("Logout failed!"),localStorage.removeItem("token");case 13:case"end":return e.stop()}}),null,null,[[0,8]])},user:n.user}),r.a.createElement(a.Suspense,{fallback:r.a.createElement(p.a,{className:"m-auto",type:"grow",color:"info"})},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/signin"},c?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(v,{isLoading:n.isLoading,errMsg:n.signInErr,onSubmitForm:function(e,t){var n,a,r;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,o({type:"LOGIN_INIT"}),c.next=4,i.a.awrap(Object(E.a)(e,t));case 4:n=c.sent,a=n.token,r=n.user,localStorage.setItem("token",a),localStorage.setItem("user",r.name),o({type:"LOGIN_SUCCESS",payload:{idToken:a,user:r.name}}),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),o({type:"LOGIN_FAILURE",payload:c.t0.message});case 15:case"end":return c.stop()}}),null,null,[[0,12]])}})),r.a.createElement(d.b,{exact:!0,path:"/dashboard"},c?r.a.createElement(x,{idToken:n.idToken,user:n.user}):r.a.createElement(d.a,{to:"/signin"})),r.a.createElement(d.b,{exact:!0,path:"/signup"},c?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(k,{isLoading:n.isLoading,errMsg:n.signUpErr,onSubmitForm:function(e,t,n){var a,r,c;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return console.log(e,t,n),s.prev=1,o({type:"SIGNUP_INIT"}),s.next=5,i.a.awrap(Object(E.c)(e,t,n));case 5:a=s.sent,r=a.token,c=a.user,localStorage.setItem("token",r),localStorage.setItem("user",c.name),o({type:"SIGNUP_SUCCESS",payload:{idToken:r,user:c.name}}),s.next=16;break;case 13:s.prev=13,s.t0=s.catch(1),o({type:"SIGNUP_FAILURE",payload:s.t0.message});case 16:case"end":return s.stop()}}),null,null,[[1,13]])}})),r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(d.b,{exact:!0,path:"/movie/:id"},r.a.createElement(w,null)),r.a.createElement(d.b,{path:"*"},r.a.createElement(U,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(N,null)}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.27930867.chunk.js.map