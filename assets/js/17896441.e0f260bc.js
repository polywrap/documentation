(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{179:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(271),r=t(272),s=t(242),i=t(273),d=t(329),m=t(330),o=t(181),u=t(79),E=t.n(u),v=t(196),f=t(7),b=(t(80),function(e){var a=e.label,t=e.haveVoted,n=e.changeHaveVoted;if(!f.a.canUseDOM)return null;var c=function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventLabel:"docs/"+a,eventValue:e}),n(!0)};return l.a.createElement("div",{className:"feedbackWidget"},t?"Thanks for letting us know!":l.a.createElement(l.a.Fragment,null,"Is this page useful?",l.a.createElement("p",{className:"feedbackEmoji thumbsup",onClick:function(){return c(1)}},"\ud83d\udc4d"),l.a.createElement("p",{className:"feedbackEmoji thumbsdown",onClick:function(){return c(0)}},"\ud83d\udc4e")))}),g=t(274),p=t(360);a.default=function(e){var a,t=e.content,u=t.metadata,f=t.frontMatter,w=f.image,h=f.keywords,N=f.hide_title,k=f.hide_table_of_contents,j=u.description,U=u.title,V=u.editUrl,y=u.lastUpdatedAt,O=u.formattedLastUpdatedAt,A=u.lastUpdatedBy,C=u.unversionedId,I=Object(v.useActivePlugin)({failfast:!0}).pluginId,_=Object(v.useVersions)(I),L=Object(v.useActiveVersion)(I),S=_.length>1,T=Object(n.useState)(!1),B=T[0],F=T[1],H=Object(n.useState)(!1),J=H[0],M=H[1],x=Object(n.useState)(!1);return x[0],x[1],l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{title:U,description:j,keywords:h,image:w}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(o.a)("col",(a={},a[E.a.docItemCol]=!k,a))},l.a.createElement(r.a,null),l.a.createElement("div",{className:E.a.docItemContainer},l.a.createElement("article",null,S&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",L.label)),!N&&l.a.createElement("header",null,l.a.createElement("h1",{className:E.a.docTitle},U)),l.a.createElement("div",{className:"markdown"},l.a.createElement(t,null))),l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(g.a,{onChange:function(e){!e&&B&&M(!0)}},(function(e){var a=e.inView,t=e.ref;e.entry;return l.a.createElement(p.a,{timeout:3e3,in:a&&!J},l.a.createElement("div",{ref:t},l.a.createElement(b,{changeHaveVoted:function(e){return F(e)},haveVoted:B,label:C})))})),(V||y||A)&&l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},V&&l.a.createElement(m.a,{editUrl:V})),(y||A)&&l.a.createElement(i.a,{lastUpdatedAt:y,formattedLastUpdatedAt:O,lastUpdatedBy:A}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(c.a,{metadata:u})))),!k&&t.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(d.a,{toc:t.toc}))))}}}]);