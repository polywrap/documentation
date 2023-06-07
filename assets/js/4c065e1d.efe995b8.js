"use strict";(self.webpackChunk_polywrap_docs=self.webpackChunk_polywrap_docs||[]).push([[870],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)l=o[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(l),c=n,m=u["".concat(p,".").concat(c)]||u[c]||k[c]||o;return l?a.createElement(m,r(r({ref:t},d),{},{components:l})):a.createElement(m,r({ref:t},d))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=l.length,r=new Array(o);r[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,r[1]=i;for(var s=2;s<o;s++)r[s]=l[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}c.displayName="MDXCreateElement"},8633:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=l(7462),n=(l(7294),l(3905));const o={id:"fleek",title:"Deploying to Fleek"},r=void 0,i={unversionedId:"tutorials/build-and-deploy-wraps/deployment/fleek",id:"tutorials/build-and-deploy-wraps/deployment/fleek",title:"Deploying to Fleek",description:"Introduction",source:"@site/docs/tutorials/build-and-deploy-wraps/deployment/fleek.md",sourceDirName:"tutorials/build-and-deploy-wraps/deployment",slug:"/tutorials/build-and-deploy-wraps/deployment/fleek",permalink:"/tutorials/build-and-deploy-wraps/deployment/fleek",draft:!1,editUrl:"https://github.com/polywrap/documentation/tree/main/src/docs/tutorials/build-and-deploy-wraps/deployment/fleek.md",tags:[],version:"current",frontMatter:{id:"fleek",title:"Deploying to Fleek"}},p={},s=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Table of Contents</strong>",id:"table-of-contents",level:2},{value:"What is Fleek?",id:"what-is-fleek",level:3},{value:"What you need to get started:",id:"what-you-need-to-get-started",level:3},{value:"Step 1. Clone the polywrap demo project",id:"step-1-clone-the-polywrap-demo-project",level:3},{value:"Step 2. Git pull metadata",id:"step-2-git-pull-metadata",level:3},{value:"Step 3. Build the wrap",id:"step-3-build-the-wrap",level:3},{value:"Step 4.  <strong>Upload the build folder to Fleek</strong>",id:"step-4--upload-the-build-folder-to-fleek",level:3},{value:"Step 5.  <strong>Verifying the package on IPFS</strong>",id:"step-5--verifying-the-package-on-ipfs",level:3}],d={toc:s},u="wrapper";function k(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},(0,n.kt)("strong",{parentName:"h2"},"Introduction")),(0,n.kt)("p",null,"In this 5 step guide, we'll walk you through how to deploy your Polywrap wrap to ",(0,n.kt)("a",{parentName:"p",href:"https://fleek.co/"},"Fleek")," so that other apps could integrate it into their apps!"),(0,n.kt)("h2",{id:"table-of-contents"},(0,n.kt)("strong",{parentName:"h2"},"Table of Contents")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to expand"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#what-you-need-to-get-started"},"What you need to get started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#step-1-clone-the-polywrap-demo-project"},"Step 1. Clone the polywrap demo project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#step-2-git-pull-metadata"},"Step 2. Pull the polywrap metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#step-3-build-the-wrap"},"Step 3. Build the wrap ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#step-4-upload-the-build-folder-to-fleek"},"Step 4. Upload the build folder to Fleek")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#step-5-verifying-the-package-on-ipfs"},"Step 5. Verifying the package on IPFS ")))),(0,n.kt)("h3",{id:"what-is-fleek"},"What is Fleek?"),(0,n.kt)("p",null,"Fleek is the easiest way to build, deploy, and host websites & apps on ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS"),"\nFleek provides one seamless workflow with everything you need to build fast, modern sites & web apps hosted on IPFS."),(0,n.kt)("h3",{id:"what-you-need-to-get-started"},"What you need to get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We'll be using the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/polywrap/demos"},"Polywrap Demos")," repo for this guide. "),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc9a ",(0,n.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node. js")," "),(0,n.kt)("li",{parentName:"ul"},"\u26a1 ",(0,n.kt)("a",{parentName:"li",href:"https://fleek.co/"},"Fleek")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc33 ",(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,n.kt)("li",{parentName:"ul"},"\ud83e\uddf6",(0,n.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/"},"Yarn"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Versions:  ",(0,n.kt)("inlineCode",{parentName:"li"},"node >=10.0.0")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn >=1.0.0")))),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udd38 ",(0,n.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"Git"))),(0,n.kt)("h3",{id:"step-1-clone-the-polywrap-demo-project"},"Step 1. Clone the polywrap demo project"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/polywrap/demos.git\n")),(0,n.kt)("h3",{id:"step-2-git-pull-metadata"},"Step 2. Git pull metadata"),(0,n.kt)("p",null,"Then, we will check out the demo branch with the metafiles already set up:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git pull origin polywrap-metadata\n")),(0,n.kt)("h3",{id:"step-3-build-the-wrap"},"Step 3. Build the wrap"),(0,n.kt)("p",null,"Now, we can build the sample wrap with the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nvm use\nyarn\nyarn build\n")),(0,n.kt)("p",null,"Your ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder should be generated now. Copy and paste the ",(0,n.kt)("inlineCode",{parentName:"p"},"./polywrap.meta.yaml")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"./meta")," files into the ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,n.kt)("h3",{id:"step-4--upload-the-build-folder-to-fleek"},"Step 4.  ",(0,n.kt)("strong",{parentName:"h3"},"Upload the build folder to Fleek")),(0,n.kt)("p",null,"Make sure you signup for a Fleek account. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On the left-hand side menu of your ",(0,n.kt)("inlineCode",{parentName:"li"},"Fleek.")," "),(0,n.kt)("li",{parentName:"ul"},"Account page, click on the ",(0,n.kt)("inlineCode",{parentName:"li"},'"Storage"')," link.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fleek Step 1",src:l(6176).Z,width:"3580",height:"2088"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then, click ",(0,n.kt)("inlineCode",{parentName:"li"},'"Create Folder"'))),(0,n.kt)("p",null,"Example: ",(0,n.kt)("inlineCode",{parentName:"p"},"Gm-Polywrap")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fleek Step 2",src:l(4615).Z,width:"3584",height:"2092"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Confirm")," to create the folder ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fleek Step 3",src:l(4983).Z,width:"3584",height:"2092"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the Folder "),(0,n.kt)("li",{parentName:"ul"},"After that, click ",(0,n.kt)("inlineCode",{parentName:"li"},'"Upload"')," ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fleek Step 4",src:l(5463).Z,width:"3584",height:"2080"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Select the contents of your ",(0,n.kt)("inlineCode",{parentName:"li"},"build")," folder onto ",(0,n.kt)("inlineCode",{parentName:"li"},"Fleek."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fleek Step 5",src:l(9150).Z,width:"3584",height:"2020"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Confirm."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fleek Step 6",src:l(3682).Z,width:"3582",height:"2084"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Due to the current Filecoin deal size limitation, files are batched together across Fleek products and uploaded as one Filecoin"),(0,n.kt)("p",{parentName:"admonition"},"So it might take 24-48 hours, depending on Fleek usage, for content to appear in ipfs")),(0,n.kt)("h3",{id:"step-5--verifying-the-package-on-ipfs"},"Step 5.  ",(0,n.kt)("strong",{parentName:"h3"},"Verifying the package on IPFS")),(0,n.kt)("p",null,"Click the   ",(0,n.kt)("inlineCode",{parentName:"p"},'"Verify on IPFS"'),"   button. "),(0,n.kt)("p",null,"You will get an IPFS hash! "),(0,n.kt)("p",null,"For an example of what you should see, visit this ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.fleek.co/ipfs/QmQLsx7sxkLrXwh8dPmF2MTWJmgB5C2FmWYth11i7oL3vN"},"IPFS link"),"."),(0,n.kt)("p",null,"Now that you have the IPFS hash, you can use it as a value in the URI property of your Polywrap queries to access the functions in this wrap. "),(0,n.kt)("p",null,"You can also register an ENS domain and have it resolved to this IPFS content."),(0,n.kt)("p",null," \ud83c\udf89 Congratulations \ud83c\udf89 on deploying to Fleek!"))}k.isMDXComponent=!0},6176:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fleek-step-1-7aabb929589c649b02b21d27729b3ba6.png"},4615:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fleek-step-2-b0d955c79264480253bdf6e6d52b6e1e.png"},4983:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fleek-step-3-05845b81758eac442c0d3a993c74838c.png"},5463:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fleek-step-4-27309ed54eb46b799c4195952331549b.png"},9150:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fleek-step-5-48587509adba87afb1b5184384bb4cb9.png"},3682:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/fleek-step-6-cbf5eb170e8e515773c63be8639164ac.png"}}]);