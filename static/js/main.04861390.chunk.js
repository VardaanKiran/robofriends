(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n(7),o=n.n(c),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))}),i=n(2),h=n(3),l=n(5),b=n(4),u=function(e){var t=e.name,n=e.email,s=e.id;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(s,"?size=200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,t){return Object(r.jsx)(u,{name:e.name,email:e.email,id:e.id},t)}))})},j=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops, That is not Good"}):this.props.children}}]),n}(s.Component),p=(n(14),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(r.jsx)(j,{searchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(O,{children:Object(r.jsx)(d,{robots:t})})})]})}}]),n}(s.Component));n(15);o.a.render(Object(r.jsx)(p,{}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.04861390.chunk.js.map