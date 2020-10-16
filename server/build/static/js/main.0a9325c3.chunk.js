(this["webpackJsonprealtime-document-editor-client"]=this["webpackJsonprealtime-document-editor-client"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(7),o=n.n(s),c=n(8),l=n(2),i=n(3),u=n(5),m=n(4);var h=function(){return r.a.createElement("header",null,"Realtime document editor")},d=n(9),p=n.n(d),v=(n(21),n(22),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,{className:"text-editor",text:this.props.content,onChange:this.props.setContent,options:{placeholder:{text:""}}})}}]),n}(a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"user".concat(this.props.show?"":" user-folded"),style:{borderLeft:"5px solid ".concat(this.props.color)}},r.a.createElement("span",{style:{transform:this.props.show?"translateX(0)":"translateX(-100%)"},className:"name-label"},this.props.name))}}]),n}(a.Component),f=n(10),E=n(0),y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggleVisibility=function(){a.setState((function(e){return{visible:!e.visible}}))},a.state={visible:!0},a.colors=["#1E90FF","#DAA520","#CD5C5C","#9370DB","#FF4500","#8B4513","#40E0D0","#708090","#000000"],a}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.users.map((function(t,n){return r.a.createElement(b,{key:t,name:t,color:e.colors[n%e.colors.length],show:e.state.visible})}));return r.a.createElement("div",{className:"users"},r.a.createElement(E.b.Provider,{value:{color:"white"}},r.a.createElement("button",{onClick:this.toggleVisibility,className:"btn-switch-users-show",style:{transition:"all 0.5s",boxShadow:this.state.visible?"none":"0 0 10px 3px lightgreen"}},r.a.createElement(f.b,null)),t))}}]),n}(a.Component),g=n(11),O=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setInputValue=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.onEnterClicked=function(e){e.preventDefault(),a.props.setUserName(a.state.name)},a.state={name:""},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login"},r.a.createElement(E.b.Provider,{value:{color:"darkgrey"}},r.a.createElement(f.a,{size:"100"}),r.a.createElement("p",null,r.a.createElement("h4",null,"Type your username")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",placeholder:"Username",value:this.state.name,onChange:this.setInputValue,style:{margin:"10px"}})),r.a.createElement("button",{onClick:this.onEnterClicked,className:"button-green"},"Enter"))))}}]),n}(r.a.Component);var k=function(e){return r.a.createElement("main",null,r.a.createElement(y,{users:e.users}),e.userNameSelected?r.a.createElement(v,{content:e.content,setContent:e.setContent}):r.a.createElement(O,{setUserName:e.setUserName}))};var C=function(){return r.a.createElement("footer",null,r.a.createElement("div",null,"Adrian A\u0142aszewski \xa9 ",(new Date).getFullYear()))},j=(n(23),new WebSocket("ws://".concat("localhost",":").concat("5005"))),w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onContentChanged=function(e){a.setState({content:e}),a.sendContent(e)},a.setUserName=function(e){a.setState((function(t){return{users:[].concat(Object(c.a)(t.users),[e]),userNameSelected:!0}}));var t={type:"newUser",name:e};j.send(JSON.stringify(t))},a.state={content:"",users:[],userNameSelected:!1},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.onmessage=function(t){var n=JSON.parse(t.data);switch(n.type){case"content":e.setState({content:n.content});break;case"newUser":e.setState((function(e){return{users:[].concat(Object(c.a)(e.users),[n.name])}}));break;case"startValues":e.setState((function(e){return{users:e.users.concat(n.users),content:n.content}}));break;case"userDisconnected":e.setState((function(e){return{users:e.users.filter((function(e){return e!==n.name}))}}));break;default:console.log("Unknown message type: ".concat(t.type))}}}},{key:"sendContent",value:function(e){var t={type:"content",author:"AuthorPlaceholder",content:e};j.send(JSON.stringify(t))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(k,{content:this.state.content,setContent:this.onContentChanged,users:this.state.users,userNameSelected:this.state.userNameSelected,setUserName:this.setUserName}),r.a.createElement(C,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.0a9325c3.chunk.js.map