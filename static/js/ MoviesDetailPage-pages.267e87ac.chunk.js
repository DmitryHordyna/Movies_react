(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[1],{38:function(t,e,a){"use strict";a.d(e,"e",(function(){return u})),a.d(e,"b",(function(){return m})),a.d(e,"c",(function(){return p})),a.d(e,"a",(function(){return d})),a.d(e,"d",(function(){return j}));var n=a(39),c=a.n(n),r=a(40),i=a(43),o=a.n(i),s="465ec2c2104ee0fc99609fab2f518357",l="https://api.themoviedb.org/3";function u(){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o()({method:"GET",url:"".concat(l,"/trending/movie/week?api_key=").concat(s)});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return o()({method:"GET",url:"".concat(l,"/movie/").concat(t,"?api_key=").concat(s)})}function p(t){return o()({method:"GET",url:"".concat(l,"/search/movie?api_key=").concat(s,"&query=")+t})}function d(t){return o.a.get("".concat(l,"/movie/").concat(t,"/credits?api_key=").concat(s))}function j(t){return o.a.get("".concat(l,"/movie/").concat(t,"/reviews?api_key=").concat(s))}},72:function(t,e,a){t.exports={container:"Reviews_container__2sL1h",item:"Reviews_item__1QTAK",box:"Reviews_box__E4gvS",img:"Reviews_img__3Fl5F",author:"Reviews_author__27ISI",content:"Reviews_content__WETnt"}},73:function(t,e,a){t.exports={container:"MoviesDetailPage_container__1IcfA",button:"MoviesDetailPage_button__17Eo7",content:"MoviesDetailPage_content__3LO13",title:"MoviesDetailPage_title__9oH11",img:"MoviesDetailPage_img__3XRbM",overview:"MoviesDetailPage_overview__3dkfC",more:"MoviesDetailPage_more__3sh74",item:"MoviesDetailPage_item__AUIrK",t:"MoviesDetailPage_t__IzZXx"}},75:function(t,e,a){"use strict";a.r(e);var n=a(39),c=a.n(n),r=a(40),i=a(16),o=a(17),s=a(19),l=a(18),u=a(0),h=a(9),m=a(1),p=a(38);function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,c=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!e||a.length!==e);n=!0);}catch(s){c=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}return a}}(t,e)||function(t,e){if(t){if("string"===typeof t)return d(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=a(72),v=a.n(b),f=a(2),_=function(){var t=Object(m.g)(),e=j(Object(u.useState)([]),2),a=e[0],n=e[1];Object(u.useEffect)((function(){Object(p.d)(t.location.state.id).then((function(t){return n(t.data.results)}))}),[t.location.state.id]);var c=a.map((function(t){var e=t.id,a=t.author,n=t.content,c=t.author_details,r=c.avatar_path.includes("http")?c.avatar_path.slice(1,c.avatar_path.length-1):"https://image.tmdb.org/t/p/w500/"+c.avatar_path;return Object(f.jsxs)("li",{className:v.a.item,children:[Object(f.jsxs)("div",{className:v.a.box,children:[Object(f.jsx)("img",{className:v.a.img,src:r,alt:a}),Object(f.jsx)("h4",{className:v.a.author,children:a})]}),Object(f.jsx)("p",{className:v.a.content,children:n})]},e)})),r=Object(f.jsx)("li",{children:"Not found any reviews"});return Object(f.jsxs)("div",{className:v.a.container,children:[Object(f.jsx)("h3",{className:v.a.title,children:"Reviews"}),Object(f.jsx)("ul",{className:v.a.reviews,children:a.length>0?c:r})]})},O=a(21),x=a.n(O),g=function(){var t=Object(m.g)(),e=j(Object(u.useState)([]),2),a=e[0],n=e[1];Object(u.useEffect)((function(){Object(p.a)(t.location.state.id).then((function(t){return n(t.data.cast)}))}),[t.location.state.id]);var c=a.map((function(t){var e=t.id,a=t.name,n=t.profile_path,c=null!==n?"https://image.tmdb.org/t/p/w500/"+n:"https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png";return Object(f.jsxs)("li",{className:x.a.item,children:[Object(f.jsx)("img",{className:x.a.img,src:c,alt:a}),Object(f.jsx)("h4",{className:x.a.name,children:a})]},e)})),r=Object(f.jsx)("li",{children:"Not found any cast"});return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:x.a.title,children:"Cast"}),Object(f.jsx)("ul",{className:x.a.list,children:a.length>0?c:r})]})},y=a(7),w=a(73),N=a.n(w),k=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={film:{}},t.handleGoBack=function(){var e=t.props,a=e.location;e.history.push(a.state.from,{query:a.state.query})},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=Object(r.a)(c.a.mark((function t(){var e,a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.location,a=e.state.id,t.next=4,Object(p.b)(a);case 4:n=t.sent,this.setState({film:n.data});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.film,e=this.props,a=e.match,n=e.location;return Object(f.jsxs)("div",{className:N.a.container,children:[Object(f.jsx)("button",{className:N.a.button,type:"button",onClick:this.handleGoBack,children:Object(f.jsx)("span",{children:"Go Back"})}),Object(f.jsxs)("div",{className:N.a.content,children:[Object(f.jsx)("h3",{className:N.a.title,children:t.title}),Object(f.jsx)("img",{className:N.a.img,src:void 0!==t.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(t.poster_path):"https://media.comicbook.com/files/img/default-movie.png",alt:t.title,style:{width:"350px",heigth:"250px"}}),Object(f.jsx)("p",{className:N.a.overview,children:t.overview})]}),Object(f.jsxs)("ul",{className:N.a.more,children:[Object(f.jsx)("li",{className:N.a.item,children:Object(f.jsx)(h.b,{className:N.a.t,to:{pathname:"".concat(a.url).concat(y.a.cast),state:n.state},children:Object(f.jsx)("span",{children:"Cast"})})}),Object(f.jsx)("li",{className:N.a.item,children:Object(f.jsx)(h.b,{className:N.a.t,to:{pathname:"".concat(a.url).concat(y.a.reviews),state:n.state},children:Object(f.jsx)("span",{children:"Reviews"})})})]}),Object(f.jsx)(m.b,{path:"".concat(a.path).concat(y.a.cast),component:g}),Object(f.jsx)(m.b,{path:"".concat(a.path).concat(y.a.reviews),component:_})]})}}]),a}(u.Component);e.default=k}}]);
//# sourceMappingURL= MoviesDetailPage-pages.267e87ac.chunk.js.map