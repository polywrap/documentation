(window.webpackJsonp=window.webpackJsonp||[]).push([[99,16],{195:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(196),o=t.n(c),l=t(22),i=t(16);t(59);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),s=Object(l.useHistory)(),u=Object(i.default)().siteConfig,h=(void 0===u?{}:u).baseUrl,d=function(){a.current||(Promise.all([fetch(h+"search-doc.json").then((function(e){return e.json()})),fetch(h+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(96),t.e(100)]).then(t.bind(null,214)),t.e(63).then(t.t.bind(null,213,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=h+t.url;document.createElement("a").href=n,s.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},p=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:c}))}},219:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(198),o=t(177);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(o.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(o.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(o.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);