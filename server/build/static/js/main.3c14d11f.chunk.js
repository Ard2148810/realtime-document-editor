(this["webpackJsonprealtime-document-editor-client"]=this["webpackJsonprealtime-document-editor-client"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),c=n.n(r),i=n(1),l=n(2),s=n(4),u=n(3);var m=function(){return a.a.createElement("header",null,"Realtime document editor")},d=n(7),h=n.n(d),p=(n(17),n(18),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(h.a,{className:"text-editor",text:this.props.text,onChange:this.props.setContent,options:{placeholder:{text:"You can start typing here..."}}})}}]),n}(o.Component));var f=function(e){return a.a.createElement("main",null,a.a.createElement(p,{content:e.content,setContent:e.setContent}))};var v=function(){return a.a.createElement("footer",null,a.a.createElement("div",null,"Adrian A\u0142aszewski \xa9 ",(new Date).getFullYear()))},E=(n(19),new WebSocket("ws://".concat("localhost",":").concat("5005")));E.onopen=function(e){console.log(e)};var b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).setContent=function(e){o.setState({content:e}),o.sendContent(e)},o.state={content:"<p><br/></p>"},o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){E.onmessage=function(e){console.log(e.data)}}},{key:"sendContent",value:function(e){var t={author:"AuthorPlaceholder",content:e};E.send(JSON.stringify(t))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,null),a.a.createElement(f,{content:this.state.content,setContent:this.setContent}),a.a.createElement(v,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(20)}},[[8,1,2]]]);
//# sourceMappingURL=main.3c14d11f.chunk.js.map