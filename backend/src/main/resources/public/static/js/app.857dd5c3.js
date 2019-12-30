(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],c=0,m=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var u=r[o];0!==s[u]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function o(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-2d0d7c65":"70b63885","chunk-2d0efcba":"9f4b2b9e","chunk-2d20f022":"6e1acf52","chunk-2d217357":"fb09b732"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=a);var n,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var l=new Error;n=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=s[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}s[e]=void 0}};var c=setTimeout((function(){n({type:"timeout",target:u})}),12e4);u.onerror=u.onload=n,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1f57":function(e,t,r){"use strict";var a=r("d4ec"),s=r("bee2"),n=r("bc3a"),o=r.n(n);function i(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer_"+e.accessToken}:{}}var u="http://localhost:8080/api/test/",l=function(){function e(){Object(a["a"])(this,e)}return Object(s["a"])(e,[{key:"getPublicContent",value:function(){return o.a.get(u+"all")}},{key:"getUserBoard",value:function(){return o.a.get(u+"user",{headers:i()})}},{key:"getModeratorBoard",value:function(){return o.a.get(u+"mod",{headers:i()})}},{key:"getAdminBoard",value:function(){return o.a.get(u+"admin",{headers:i()})}}]),e}();t["a"]=new l},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Vue JWT Spring Security")]),r("div",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[r("font-awesome-icon",{attrs:{icon:"home"}}),e._v(" Home ")],1)],1),e.showAdminBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v("Admin Board")])],1):e._e(),e.showModeratorBoard?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[e._v("Moderator Board")])],1):e._e(),r("li",{staticClass:"nav-item"},[e.currentUser?r("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[e._v("User")]):e._e()],1)]),e.currentUser?e._e():r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[r("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v(" SignUp ")],1)],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[r("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v(" LogIn ")],1)],1)]),e.currentUser?r("div",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[r("font-awesome-icon",{attrs:{icon:"user"}}),e._v(" "+e._s(e.currentUser.username)+" ")],1)],1),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:""},on:{click:e.logOut}},[r("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v(" LogOut ")],1)])]):e._e()]),r("div",{staticClass:"container"},[r("router-view")],1)])},n=[],o=(r("caad"),r("2532"),{computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!!this.currentUser&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!!this.currentUser&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}}),i=o,u=r("2877"),l=Object(u["a"])(i,s,n,!1,null,null,null),c=l.exports,d=(r("d3b7"),r("8c4f")),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("header",{staticClass:"jumbotron"},[r("h3",[e._v(e._s(e.content))])])])},f=[],p=r("1f57"),v={name:"home",data:function(){return{content:""}},mounted:function(){var e=this;p["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response.data.message}))}},g=v,h=Object(u["a"])(g,m,f,!1,null,null,null),b=h.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.errors.has("username")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.errors.has("password")?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[r("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),r("span",[e._v("Login")])])]),r("div",{staticClass:"form-group"},[e.message?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},_=[],C=r("d4ec"),k=function e(t,r,a){Object(C["a"])(this,e),this.username=t,this.email=r,this.password=a},y={name:"login",computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},data:function(){return{user:new k("",""),loading:!1,message:""}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll(),this.errors.any()?this.loading=!1:this.user.username&&this.user.password&&this.$store.dispatch("auth/login",this.user).then((function(){e.$router.push("/profile")}),(function(t){e.loading=!1,e.message=t.message}))}}},x=y,O=(r("d937"),Object(u["a"])(x,w,_,!1,null,"60eb57ac",null)),P=O.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card card-container"},[r("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),r("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():r("div",[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e.submitted&&e.errors.has("username")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.submitted&&e.errors.has("email")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.submitted&&e.errors.has("password")?r("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._m(0)])]),e.message?r("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},$=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block"},[e._v("Sign Up")])])}],S={name:"register",computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},data:function(){return{user:new k("","",""),submitted:!1,successful:!1,message:""}},mounted:function(){console.log("inside Register"),this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then((function(t){t&&e.$store.dispatch("auth/register",e.user).then((function(t){e.message=t.message,e.successful=!0}),(function(t){e.message=t.message,e.successful=!1}))}))}}},U=S,I=(r("5ba6"),Object(u["a"])(U,j,$,!1,null,"574e25ae",null)),N=I.exports;a["a"].use(d["a"]);var q=new d["a"]({mode:"history",routes:[{path:"/",component:b},{path:"/home",component:b},{path:"/login",name:"login",component:P},{path:"/register",name:"register",component:N,mounted:console.log("router")},{path:"/profile",name:"profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))}},{path:"/admin",name:"admin",component:function(){return r.e("chunk-2d20f022").then(r.bind(null,"b295"))}},{path:"/mod",name:"moderator",component:function(){return r.e("chunk-2d0d7c65").then(r.bind(null,"77f5"))}},{path:"/user",name:"user",component:function(){return r.e("chunk-2d0efcba").then(r.bind(null,"9a40"))}}]});q.beforeEach((function(e,t,r){var a=["/login","/home","/register"],s=!a.includes(e.path),n=localStorage.getItem("user");if(s&&!n)return r("/login");r()}));var E=r("2f62"),B=r("bee2"),M=r("bc3a"),T=r.n(M),A="http://localhost:8080/api/auth/",L=function(){function e(){Object(C["a"])(this,e)}return Object(B["a"])(e,[{key:"login",value:function(e){return T.a.post(A+"signin",{username:e.username,password:e.password}).then(this.handleResponse).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return T.a.post(A+"signup",{username:e.username,email:e.email,password:e.password})}},{key:"handleResponse",value:function(e){if(401===e.status){this.logout(),location.reload(!0);var t=e.data&&e.data.message;return Promise.reject(t)}return Promise.resolve(e)}}]),e}(),R=new L,J=JSON.parse(localStorage.getItem("user")),D=J?{status:{loggedIn:!0},user:J}:{status:{},user:null},F={namespaced:!0,state:D,actions:{login:function(e,t){var r=e.commit;return R.login(t).then((function(e){return r("loginSuccess",e),Promise.resolve(e)}),(function(e){return r("loginFailure"),Promise.reject(e.response.data)}))},logout:function(e){var t=e.commit;R.logout(),t("logout")},register:function(e,t){var r=e.commit;return R.register(t).then((function(e){return r("registerSuccess"),Promise.resolve(e.data)}),(function(e){return r("registerFailure"),Promise.reject(e.response.data)}))}},mutations:{loginSuccess:function(e,t){e.status={loggedIn:!0},e.user=t},loginFailure:function(e){e.status={},e.user=null},logout:function(e){e.status={},e.user=null},registerSuccess:function(e){e.status={}},registerFailure:function(e){e.status={}}}};a["a"].use(E["a"]);var z=new E["a"].Store({modules:{auth:F}}),H=(r("4989"),r("ab8b"),r("7bb1")),V=r("ecee"),W=r("ad3d"),G=r("c074");V["c"].add(G["a"],G["d"],G["e"],G["b"],G["c"]),a["a"].config.productionTip=!1,a["a"].use(H["a"]),a["a"].component("font-awesome-icon",W["a"]),new a["a"]({router:q,store:z,render:function(e){return e(c)}}).$mount("#app")},"5ba6":function(e,t,r){"use strict";var a=r("e3b2"),s=r.n(a);s.a},a7f7:function(e,t,r){},d937:function(e,t,r){"use strict";var a=r("a7f7"),s=r.n(a);s.a},e3b2:function(e,t,r){}});
//# sourceMappingURL=app.857dd5c3.js.map