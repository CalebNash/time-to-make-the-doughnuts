(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),i=n(12),o=n.n(i),c=(n(18),n(19),n(4)),l=n.n(c),h=n(10),u=n(5),d=n(6),b=n(2),j=n(8),m=n(7),g=n(9),p=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.props.handleRegistration(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"email"}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password1"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password1",name:"password1",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password2"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password2",name:"password2",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})}}]),n}(r.a.Component),f=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",register:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.props.handleLogin(t,e.state,e.state.register)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password",name:"password",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e.setState({register:!0})},children:"Register"})]})]})}}]),n}(r.a.Component),O=n(3),v=n.n(O),x=(n(21),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={articles:[],page:"home",loggedIn:!!v.a.get("Authorization"),profile:[]},a.handleRegistration=a.handleRegistration.bind(Object(b.a)(a)),a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleRegistration",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var a,s,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:(i=e.sent).key&&(v.a.set("Authorization","Token ".concat(i.key)),localStorage.setItem("is_staff",i.is_staff),this.setState({page:"posts"}),this.setState({loggedIN:!0}));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n,a){var s,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a){e.next=5;break}this.setState({page:"register"}),e.next=14;break;case 5:return s={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")},body:JSON.stringify(n)},r=function(e){return console.warn(e)},e.next=9,fetch("/api/v1/rest-auth/login/",s);case 9:return i=e.sent,e.next=12,i.json().catch(r);case 12:(o=e.sent).key&&(v.a.set("Authorization","Token ".concat(o.key)),this.setState({loggedIn:!0}),localStorage.setItem("is_staff",o.is_staff),this.setState({page:"posts"}),this.getProfile(o.user_id));case 14:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":v.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/logout/",n);case 5:return s=e.sent,e.next=8,s.json().catch(a);case 8:"Successfully logged out."===e.sent.detail&&(v.a.remove("Authorization"),this.setState({page:"home"}),this.setState({loggedIn:!1}),localStorage.removeItem("is_staff"));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("nav",{className:"navbar navbar-dark",children:Object(a.jsxs)("div",{className:"pages",children:[Object(a.jsx)("div",{className:"nav-buttons",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",onClick:function(){return e.handleClick("home")},children:"Home"})}),Object(a.jsx)("div",{className:"log-status",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",onClick:this.handleLogout,children:"Logout"})}),Object(a.jsx)("div",{className:"log-status",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",onClick:function(){return e.handleClick("login")},children:"Login"})})]})}),Object(a.jsxs)("div",{className:"container fullpage",children:[Object(a.jsx)(p,{handleRegistration:this.handleRegistration}),Object(a.jsx)(f,{handleLogin:this.handleLogin})]})]})}}]),n}(r.a.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),y()}},[[22,1,2]]]);
//# sourceMappingURL=main.4b117d11.chunk.js.map