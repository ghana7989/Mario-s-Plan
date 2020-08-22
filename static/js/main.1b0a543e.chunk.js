(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{214:function(e,t,a){e.exports=a(413)},219:function(e,t,a){},413:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(87),i=a.n(c),o=(a(219),a(20)),l=a(21),s=a(23),u=a(22),m=a(6),d=a(3),h=a(5),p=function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",error:e})}))}},f=Object(h.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGN_OUT"})}))}))}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut,href:"/signin"},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.inits)))})),E=Object(h.b)(null,(function(e){return{signOut:function(){return e(p())}}}))((function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login")))})),b=Object(h.b)((function(e){return console.log(e),{auth:e.firebase.auth,inits:e.firebase.profile.initials}}))((function(e){var t=e.auth,a=e.inits,n=t.uid?r.a.createElement(f,{inits:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo"},"Mario Plan"),n))})),g=a(212),v=a.n(g),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user+" "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))))},j=function(e){var t=e.project;return r.a.createElement("div",{className:"project-list section"},r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName),r.a.createElement("p",{className:"grey-text"},t.createdAt))))},O=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(m.b,{key:e.id,to:"project/".concat(e.id)},r.a.createElement(j,{project:e,key:e.id}))})))},C=a(14),y=a(24),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(N,{notifications:n})))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),S=Object(C.d)(Object(h.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(y.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(w);var k=Object(C.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(y.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?(console.log(e.project.createdAt),r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted By The Author ",t.authorFirstName+" "+t.authorLastName),r.a.createElement("div",null,t.createdAt))))):r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Loading.....")):r.a.createElement(d.a,{to:"/signin"})})),F=a(28),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(F.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.signIn(n.state),n.props.authError||n.props.history.push("/")},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn lighten-1 pink z-depth-0"},"Login")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null)))}}]),a}(n.Component),P=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e,t){return{signIn:function(t){return e(p(t))}}}))(x),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(F.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.signUp(n.state)},n.state={email:"",password:"",firstName:"",lastName:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{autoComplete:"off",type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn lighten-1 pink z-depth-0"},"Sign Up")),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null)))}}]),a}(n.Component),I=Object(h.b)((function(e){return console.log(e),{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESSFUL"})})).catch((function(e){t({type:"SIGNUP_FAILED",err:e})}))}}(t))}}}))(R),U=a(15),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(F.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.createProject(n.state),n.props.history.push("/")},n.state={title:"",content:""},n}return Object(l.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{autoComplete:"off",onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{className:"materialize-textarea",type:"text",id:"content",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn lighten-1 pink z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),A=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=n.getFirestore,c=a().firebase.profile,i=a().firebase.auth.uid,o=r(),l=new Date,s=l.getDate()+"/"+(l.getMonth()+1)+"/"+l.getFullYear()+" @ "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds();o.collection("projects").add(Object(U.a)(Object(U.a)({},e),{},{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:s})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(L),_=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:S}),r.a.createElement(d.b,{exact:!0,component:k,path:"/project/:id"}),r.a.createElement(d.b,{path:"/signin",exact:!0,component:P}),r.a.createElement(d.b,{exact:!0,path:"/signup",component:I}),r.a.createElement(d.b,{exact:!0,path:"/create",component:A}))))}}]),a}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var G={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("Created Project",t.project),e;case"CREATE_PROJECT_ERROR":console.log("Create Project Errror",t.err);break;default:return e}},B={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(U.a)(Object(U.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{authError:null});case"SIGN_OUT":return{state:e};case"SIGNUP_SUCCESSFUL":return console.log("SignUp Success"),Object(U.a)(Object(U.a)({},e),{},{authError:null});case"SIGNUP_FAILED":return console.log("SignUp Failed",t.err.message),Object(U.a)(Object(U.a)({},e),{},{authError:t.err.message});default:return{state:e}}},J=a(46),M=Object(C.c)({auth:W,project:z,firestore:J.firestoreReducer,firebase:y.firebaseReducer}),Y=a(213),H=a(47),q=a.n(H);a(408),a(411);q.a.initializeApp({apiKey:"AIzaSyBsdlcPWPYHuh5uYBmeqmNUk0bpmv5Dupk",authDomain:"marioplan-ca3b1.firebaseapp.com",databaseURL:"https://marioplan-ca3b1.firebaseio.com",projectId:"marioplan-ca3b1",storageBucket:"marioplan-ca3b1.appspot.com",messagingSenderId:"910394154614",appId:"1:910394154614:web:3d0c9b3bf597c9889c4957"});var K=q.a,Q=Object(C.e)(M,Object(C.d)(Object(C.a)(Y.a.withExtraArgument({getFirebase:y.getFirebase,getFirestore:J.getFirestore})),Object(J.reduxFirestore)(q.a,K))),$={firebase:q.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:Q.dispatch,createFirestoreInstance:J.createFirestoreInstance};function V(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(y.isLoaded)(a)?t:null}i.a.render(r.a.createElement(h.a,{store:Q},r.a.createElement(y.ReactReduxFirebaseProvider,$,r.a.createElement(V,null,r.a.createElement(_,null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Mario-s-Plan",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Mario-s-Plan","/service-worker.js");T?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):D(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):D(e)}))}}()}},[[214,1,2]]]);
//# sourceMappingURL=main.1b0a543e.chunk.js.map