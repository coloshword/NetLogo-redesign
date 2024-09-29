const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/header-expanded.DjkNmcOP.js","_astro/index.B52nOzfP.js","_astro/index.BhV1UDdu.css"])))=>i.map(i=>d[i]);
import{r as l,R as C}from"./index.B52nOzfP.js";/* empty css                       */var L={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=l,D=Symbol.for("react.element"),P=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,T=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function E(s,t,n){var o,r={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)k.call(t,o)&&!O.hasOwnProperty(o)&&(r[o]=t[o]);if(s&&s.defaultProps)for(o in t=s.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:D,type:s,key:a,ref:i,props:r,_owner:T.current}}f.Fragment=P;f.jsx=E;f.jsxs=E;L.exports=f;var e=L.exports;const R="modulepreload",z=function(s){return"/foundation-website-frontend/"+s},b={},A=function(t,n,o){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");r=Promise.allSettled(n.map(d=>{if(d=z(d),d in b)return;b[d]=!0;const h=d.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const x=document.createElement("link");if(x.rel=h?"stylesheet":R,h||(x.as="script"),x.crossOrigin="",x.href=d,c&&x.setAttribute("nonce",c),document.head.appendChild(x),h)return new Promise((S,I)=>{x.addEventListener("load",S),x.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return r.then(i=>{for(const c of i||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},B={src:"/foundation-website-frontend/_astro/search-icon.APHpxcbc.svg",width:25,height:24,format:"svg"},$=({})=>e.jsxs("div",{className:"search-bar",children:[e.jsx("img",{className:"search-bar-icon",src:B.src,alt:"search-icon"}),e.jsx("input",{className:"search-bar-input",type:"text",placeholder:"SEARCH"})]}),F={src:"/foundation-website-frontend/_astro/blue-ellipse.DvODqTp4.svg",width:30,height:30,format:"svg"},M={src:"/foundation-website-frontend/_astro/netlogo.C0jtWmPo.svg",width:24,height:24,format:"svg"},G={src:"/foundation-website-frontend/_astro/dropdown-icon.or0YmpcX.svg",width:17,height:16,format:"svg"},U={src:"/foundation-website-frontend/_astro/hover-dropdown-icon.DqY7ZXhQ.svg",width:17,height:16,format:"svg"},W=C.lazy(()=>A(()=>import("./header-expanded.DjkNmcOP.js"),__vite__mapDeps([0,1,2]))),H=["Products","Learning","Docs","Models","News","Community","About"],J=C.memo(({title:s,isHovered:t,onMouseEnter:n})=>e.jsxs("div",{className:"header-action-cont",onMouseEnter:n,children:[e.jsx("div",{className:`header-action ${t?"header-action-hovered":""}`,children:s}),e.jsx("img",{className:"dropdown-icon",src:t?U.src:G.src,alt:"dropdown"})]})),V=()=>{const[s,t]=l.useState(null),n=l.useCallback(a=>{t(a)},[]),o=l.useCallback(()=>{t(-1)},[]),r=l.useMemo(()=>H.map((a,i)=>e.jsx(J,{title:a,isHovered:s===i,onMouseEnter:()=>n(i)},i)),[s,n]);return e.jsxs("div",{className:"netlogo-header",onMouseLeave:o,children:[e.jsxs("div",{className:"header-action-bar",children:[e.jsxs("div",{className:"header-action-cont",children:[e.jsxs("div",{className:"netlogo-icon-cont",children:[e.jsx("img",{className:"icon",src:F.src,alt:"Blue Ellipse"}),e.jsx("img",{className:"icon",src:M.src,alt:"NetLogo Icon"})]}),e.jsx("div",{id:"netlogo-title",className:"header-action",children:"NetLogo"})]}),r,e.jsx($,{})]}),e.jsx(W,{headerIndex:s!==null?s:-1})]})},q={src:"/foundation-website-frontend/_astro/more-icon.C3hdnv3t.svg",width:20,height:21,format:"svg"},m=s=>{const{colorClass:t,padding:n,fontSize:o,text:r,hasIcon:a=!1,onClick:i=()=>console.log(`${r} pressed`),style:c={}}=s,[d,h]=l.useState(!1),u={padding:n,fontSize:o};return e.jsxs("button",{className:`button ${t}`,style:{...u,...c},onClick:i,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[e.jsxs("span",{children:[" ",r," "]}),a&&e.jsx("img",{src:q.src,className:"button-icon",style:{filter:d?"invert(1)":"invert(34%) sepia(93%) saturate(3432%) hue-rotate(202deg) brightness(94%) contrast(98%)"}})]})},Y=({announcement:s,setShowAnnouncement:t})=>e.jsx("div",{className:"aCont",children:e.jsxs("div",{className:"aTextButtonCont",children:[e.jsxs("div",{className:"aTextCont",children:[e.jsxs("span",{className:"aTitle",children:[" ",s.title," "]}),e.jsxs("span",{className:"aContent",children:[" ",s.content," "]})]}),e.jsxs("div",{className:"a-button-cont",children:[e.jsx(m,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"LEARN MORE"}),e.jsx(m,{colorClass:"light-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"CLOSE",onClick:()=>t(!1)})]})]})}),Q=({demo:s,descript:t})=>{const[n,o]=l.useState(!1),[r,a]=l.useState(s),[i,c]=l.useState(t);return l.useEffect(()=>{if(s!==r||t!==i){o(!0);const d=setTimeout(()=>{a(s),c(t),o(!1)},150);return()=>clearTimeout(d)}},[s,t]),e.jsx("div",{className:"demo-display",children:e.jsxs("div",{className:`demo-content ${n?"fade-out":""}`,children:[r,e.jsx("span",{className:"demo-display-text",children:i})]})})},X={src:"/foundation-website-frontend/_astro/visual.CvOcwzml.svg",width:25,height:24,format:"svg"},K={src:"/foundation-website-frontend/_astro/easy-learn.CJPJmL7N.svg",width:25,height:24,format:"svg"},Z={src:"/foundation-website-frontend/_astro/power-extensible.SCI4TO-7.svg",width:25,height:24,format:"svg"},ee={src:"/foundation-website-frontend/_astro/cross-platform.Bs9SB9uW.svg",width:25,height:24,format:"svg"},se={src:"/foundation-website-frontend/_astro/visualization-demo.DgfpN9Qn.svg",width:740,height:270,format:"svg"},te={src:"/foundation-website-frontend/_astro/cross-platform.82kl3XjJ.png",width:1276,height:622,format:"png"},ne={src:"/foundation-website-frontend/_astro/fire.zK0ZhBi3.gif",width:340,height:340,format:"gif"},oe={src:"/foundation-website-frontend/_astro/visualization.Cvff7MfG.png",width:1408,height:674,format:"png"},ie={src:"/foundation-website-frontend/_astro/powerful-extensible.BjC9U6mw.png",width:1388,height:630,format:"png"},re=()=>{const[s,t]=l.useState(0);l.useEffect(()=>{const i=setTimeout(()=>{t(c=>(c+1)%4)},4e3);return()=>{clearTimeout(i)}},[s]);const n=i=>{t(i)},o=i=>{switch(i){case 0:return{demo:e.jsx("div",{className:"intro-demo",children:e.jsx("img",{className:"demo-img",src:oe.src,alt:"Visualization Demo"})}),descript:"NetLogo visualizes agent-based models as they run in real time, which is very important both for learning from existing models and for debugging models as you code them. Above is the visualization of a model of birds following a few simple rules from which flocking behavior emerges."};case 1:return{demo:e.jsxs("div",{className:"intro-demo",children:[e.jsx("img",{src:se.src,alt:"Visualization Demo"}),e.jsx("img",{src:ne.src,className:"visualization-inner-img",alt:"Visualization 1"})]}),descript:"NetLogo code is designed to read similarly to English, making it easy for English speakers to understand even as novices. In the above forest fire model, the code asks the fire agents (red patches) to ask their neighboring trees (green patches) to light on fire (turn red) and then burn out (darken color). "};case 2:return{demo:e.jsx("div",{className:"intro-demo",children:e.jsx("img",{className:"demo-img",src:ie.src,alt:"Visualization Demo"})}),descript:"NetLogo models can run simulations with tens of thousands of agents and has many extensions to expand its capabilities, including being able to run Python code within a NetLogo model."};case 3:return{demo:e.jsx("div",{className:"intro-demo",children:e.jsx("img",{className:"demo-img",src:te.src,alt:"Visualization Demo"})}),descript:"NetLogo Web runs in any web browser and traditional NetLogo runs on all major operating systems so anyone with a computer can use it. "};default:return{demo:null,descript:""}}},{demo:r,descript:a}=o(s);return e.jsxs("div",{className:"intro-anim-cont",children:[e.jsxs("div",{className:"intro-anim-options",children:[e.jsx("div",{className:`intro-anim-option ${s===0?"current-tab":""}`,onClick:()=>n(0),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===0?"current-tab-icon":""}`,children:e.jsx("img",{src:X.src,alt:"Visual Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===0?"current-tab-text":""}`,children:"Real-time Visualization"})]})}),e.jsx("div",{className:`intro-anim-option ${s===1?"current-tab":""}`,onClick:()=>n(1),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===1?"current-tab-icon":""}`,children:e.jsx("img",{src:K.src,alt:"Easy Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===1?"current-tab-text":""}`,children:"Easy to Learn"})]})}),e.jsx("div",{className:`intro-anim-option ${s===2?"current-tab":""}`,onClick:()=>n(2),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===2?"current-tab-icon":""}`,children:e.jsx("img",{src:Z.src,alt:"Power Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===2?"current-tab-text":""}`,children:"Powerful & Extensible"})]})}),e.jsx("div",{className:`intro-anim-option ${s===3?"current-tab":""}`,onClick:()=>n(3),style:{animationDelay:"1500ms",animationTimingFunction:"ease-out",animationDuration:"300ms"},children:e.jsxs("div",{className:"intro-anim-text-icon",children:[e.jsx("div",{className:`intro-anim-icon ${s===3?"current-tab-icon":""}`,children:e.jsx("img",{src:ee.src,alt:"Cross-Platform Icon"})}),e.jsx("span",{className:`intro-anim-text ${s===3?"current-tab-text":""}`,children:"Cross-Platform"})]})})]}),e.jsx(Q,{demo:r,descript:a})]})},ae=({})=>e.jsxs("div",{className:"intro",children:[e.jsxs("div",{className:"intro-title-text-cont",children:[e.jsx("div",{className:"intro-title",children:e.jsxs("pre",{children:["Understanding Complex Systems with",`
`,"Agent-Based Modeling"]})}),e.jsx("div",{className:"intro-text",children:e.jsxs("p",{children:["NetLogo is a multi-agent programmable modeling environment. It is used by many hundreds of thousands of students, teachers, and",`
`,"researchers worldwide. It also powers HubNet participatory simulations. It is authored by Uri Wilensky and developed at the CCL."]})})]}),e.jsx(re,{}),e.jsxs("div",{className:"intro-btn-cont",children:[e.jsx(m,{colorClass:"blue-button",padding:"1rem 3rem",fontSize:"1.125rem",text:"GET NETLOGO"}),e.jsx(m,{colorClass:"light-button",padding:"1rem 3rem",fontSize:"1.125rem",text:"LEARN MORE"})]})]}),ce={src:"/foundation-website-frontend/_astro/news-dropdown.OSwEjMO4.svg",width:20,height:20,format:"svg"},le={src:"/foundation-website-frontend/_astro/news-dropdown-up.B0mvirmm.svg",width:20,height:20,format:"svg"},j=({title:s,events:t})=>{const[n,o]=l.useState(!0),[r,a]=l.useState(!1);function i(h){const u=h.split("-");return`${u[1]}/${u[2]}/${u[0]}`}const c=r?t:t.slice(0,3),d=()=>{n&&a(!1),o(!n)};return e.jsxs("div",{className:"event-display-cont",children:[e.jsxs("div",{className:n&&t.length>0?"event-display-header event-display-opened":"event-display-header",onClick:d,children:[e.jsx("span",{className:"event-display-title",children:s}),e.jsx("img",{src:n?le.src:ce.src,alt:"dropdown icon"})]}),n&&e.jsxs("div",{children:[c.map((h,u)=>e.jsxs("div",{className:"event-cont",children:[e.jsx("span",{className:"event-date",children:i(h.date)}),e.jsx("span",{className:"event-title",children:h.event_title})]},u)),!r&&t.length>3&&e.jsx("div",{className:"event-cont event-more",onClick:()=>a(!0),children:e.jsx("span",{children:"More"})})]})]})},p=({sectionTitle:s,sectionDescript:t,sectionGap:n,sectionPaddingBot:o,backgroundColor:r="transparent",borderRadius:a=0,moreButton:i=!1,body:c})=>e.jsx("div",{className:"page-section-cont",style:{backgroundColor:`${r}`,borderRadius:`${a}rem`},children:e.jsxs("div",{className:"page-section",style:{gap:`${n}rem`,paddingBottom:`${o}rem`},children:[e.jsxs("div",{className:"section-header",children:[e.jsxs("span",{className:"section-title",children:[" ",s," "]}),e.jsxs("span",{className:"section-descript",children:[" ",t," "]})]}),c,i&&e.jsx("div",{className:"more-btn-cont",children:e.jsx(m,{colorClass:"light-button",padding:"1rem 3rem",fontSize:"1.125rem",text:"MORE",hasIcon:!0})})]})}),de=({upcomingEvents:s,competitions:t,upcomingWorkshops:n,publications:o})=>e.jsx("div",{className:"news-section",children:e.jsx(p,{sectionTitle:"News",sectionDescript:"Learn about latest news and upcoming events in NetLogo community.",sectionGap:2.5,sectionPaddingBot:2.5,backgroundColor:"#F2F2F5",borderRadius:0,moreButton:!0,body:e.jsxs("div",{className:"news-event-cont",children:[e.jsxs("div",{className:"news-event-inner-cont",children:[e.jsx(j,{title:"Upcoming Events",events:s}),e.jsx(j,{title:"Competitions",events:t})]}),e.jsxs("div",{className:"news-event-inner-cont",children:[e.jsx(j,{title:"Upcoming Workshops",events:n}),e.jsx(j,{title:"Publications",events:o})]})]})})}),w={src:"/foundation-website-frontend/_astro/student.ClphuC82.svg",width:34,height:43,format:"svg"},me={src:"/foundation-website-frontend/_astro/researcher.DPIeDtas.svg",width:35,height:44,format:"svg"},N=({title:s,content:t,imagePath:n})=>e.jsx("div",{className:"for-tab",children:e.jsx("div",{className:"for-tab-inner",children:e.jsxs("div",{className:"for-tab-content",children:[e.jsxs("div",{className:"for-tab-title-cont",children:[e.jsx("div",{className:"for-tab-icon",children:e.jsx("img",{className:"for-tab-icon-image",src:n.src,alt:`${s} icon`})}),e.jsx("span",{className:"for-tab-title",children:s})]}),e.jsx("span",{className:"for-tab-text",children:t}),e.jsx(m,{colorClass:"blue-button",padding:"0.875rem 2rem",fontSize:"1rem",text:"LEARN MORE"})]})})}),he=()=>e.jsx("div",{className:"why-section",children:e.jsx(p,{sectionTitle:"Why NetLogo?",sectionDescript:"NetLogo powers everyone to learn and create.",sectionGap:1.88,sectionPaddingBot:7.5,backgroundColor:"#F2F2F5",borderRadius:0,moreButton:!1,body:e.jsxs("div",{className:"why-netlogo-content",children:[e.jsx(N,{title:"For Students",content:"NetLogo provides students with many pre-made models of scientific phenomena they can explore. For those who want to learn to program or create models themselves, NetLogo is very easy to get started with.",imagePath:w}),e.jsx(N,{title:"For Researchers",content:"NetLogo is easy to learn but still very powerful. It is has been used in over 20,000 scientific publications in fields including sociology, ecology, cognitive science, business, and more.",imagePath:me}),e.jsx(N,{title:"For Educators",content:"NetLogo provides educators with an easy-to-use modeling platform that includes many built-in models to engage students in learning science.",imagePath:w})]})})}),ue={src:"/foundation-website-frontend/_astro/get-netlogo.CW7j6lP9.svg",width:65,height:65,format:"svg"},xe={src:"/foundation-website-frontend/_astro/netlogo-web.Dbo-Pn1i.svg",width:64,height:65,format:"svg"},ge={src:"/foundation-website-frontend/_astro/turtle-universe.BbgqC7xB.svg",width:64,height:64,format:"svg"},ve=()=>e.jsx("div",{className:"get-section",children:e.jsx(p,{sectionTitle:"Get NetLogo",sectionDescript:"There are over xxx products in NetLogo. Find the one that suits your need.",sectionGap:2.5,sectionPaddingBot:3.75,backgroundColor:"white",borderRadius:5,moreButton:!0,body:e.jsxs("div",{className:"get-netlogo-content",children:[e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:ue.src}),e.jsx(m,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"GET"})]}),e.jsx("span",{className:"get-item-title",children:" NetLogo Desktop "}),e.jsx("span",{className:"get-item-descript",children:" A  programmable modeling environment for simulating natural and social phenomena that runs on Mac, Windows, and Linux. This is the most powerful version of NetLogo. "})]}),e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:xe.src}),e.jsx(m,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"GET"})]}),e.jsx("span",{className:"get-item-title",children:" NetLogo Web "}),e.jsx("span",{className:"get-item-descript",children:" A version of NetLogo that runs in all modern web browsers, without any need for installation. Very useful for embedding in online educational materials.  "})]}),e.jsxs("div",{className:"get-item",children:[e.jsxs("div",{className:"get-item-header",children:[e.jsx("img",{className:"get-item-img",src:ge.src}),e.jsx(m,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"GET"})]}),e.jsx("span",{className:"get-item-title",children:" Turtle Universe "}),e.jsx("span",{className:"get-item-descript",children:" Powered by the NetLogo engine but with its own unique interface, Turtle Universe brings the limitless power of computational modeling to smartphones and tablets of young students and educators. "})]})]})})}),pe={src:"/foundation-website-frontend/_astro/community-icon.B1D0uEdd.svg",width:24,height:24,format:"svg"},je=({communityPosts:s})=>{const[t,n]=l.useState(s.length>0?s[0].image:null);return e.jsx("div",{className:"community-section",children:e.jsx(p,{sectionTitle:"Community",sectionDescript:"Join NetLogo community and start contributing today.",sectionGap:1.88,sectionPaddingBot:3.75,backgroundColor:"#F2F2F5",borderRadius:0,moreButton:!1,body:e.jsxs("div",{className:"community-content",children:[e.jsxs("div",{className:"preview-content",children:[e.jsx("div",{className:"preview-display",children:t?e.jsx("img",{className:"community-preview-image",src:t,alt:"Preview"}):"No preview available"}),e.jsx(m,{colorClass:"blue-button",padding:"1rem 3rem",fontSize:"1.125rem",text:"JOIN DISCOURSE",style:{alignSelf:"stretch"}})]}),e.jsx("div",{className:"community-models",children:s.map((o,r)=>e.jsxs("div",{className:"community-post-cont",onClick:()=>n(o.image),children:[e.jsx("div",{className:"community-post-icon",children:e.jsx("img",{src:pe.src,className:"community-post-icon-image"})}),e.jsxs("div",{className:"community-post-descript",children:[e.jsxs("div",{className:"community-post-user-date-cont",children:[e.jsxs("span",{children:[" ",o.author," "]}),e.jsxs("span",{children:[" ",o.date," "]})]}),e.jsxs("span",{className:"community-post-title",children:[" New model: ",e.jsx("a",{href:o.link,className:"community-post-link",children:o.project})]})," "]})]},r))})]})})})},g={src:"/foundation-website-frontend/_astro/partner-logo.Dq46v3-l.svg",width:64,height:64,format:"svg"},v=({partnerName:s,partnerImage:t})=>e.jsxs("div",{className:"partner",children:[e.jsx("div",{className:"partner-image",children:e.jsx("img",{className:"partner-image-image",src:t.src})}),e.jsx("span",{className:"partner-name",children:s})]}),fe=()=>e.jsx("div",{className:"featured-partners-section",children:e.jsx(p,{sectionTitle:"Featured Partners",sectionDescript:"Trusted by the world’s leading universities and research institutes",sectionGap:2.5,sectionPaddingBot:6,backgroundColor:"white",borderRadius:0,moreButton:!1,body:e.jsxs("div",{className:"partners-cont",children:[e.jsxs("div",{className:"partners-row",children:[e.jsx(v,{partnerName:"Partner Name",partnerImage:g}),e.jsx(v,{partnerName:"Partner Name",partnerImage:g}),e.jsx(v,{partnerName:"Partner Name",partnerImage:g})]}),e.jsxs("div",{className:"partners-row",children:[e.jsx(v,{partnerName:"Partner Name",partnerImage:g}),e.jsx(v,{partnerName:"Partner Name",partnerImage:g}),e.jsx(v,{partnerName:"Partner Name",partnerImage:g})]})]})})}),Ne=()=>{const[s,t]=l.useState(""),n=()=>{t("")};return e.jsx("div",{className:"mailing-list-section",children:e.jsx("div",{className:"mailing-list-body",children:e.jsxs("div",{className:"mailing-list-content",children:[e.jsxs("div",{className:"mailing-list-text-cont",children:[e.jsx("span",{className:"mailing-list-title",children:"Join our mailing list!"}),e.jsx("span",{className:"mailing-list-descript",children:"Join the NetLogo mailing list to keep up-to-date with what’s happening in the NetLogo Community!"})]}),e.jsxs("div",{className:"mailing-list-input-cont",children:[e.jsx("span",{className:"mailing-list-input-text",children:"YOUR EMAIL"}),e.jsx("input",{className:"mailing-list-input-input",value:s,onChange:o=>t(o.target.value)}),e.jsx(m,{colorClass:"blue-button",padding:"0.75rem 1.5rem",fontSize:"0.875rem",text:"JOIN",onClick:n})]})]})})})},be={src:"/foundation-website-frontend/_astro/lofi-text-l.CLkCIwpY.svg",width:247,height:12,format:"svg"},y={src:"/foundation-website-frontend/_astro/lofi-text-m.YRCni6sA.svg",width:247,height:12,format:"svg"},we={src:"/foundation-website-frontend/_astro/lofi-text-s.KS4NP1bh.svg",width:247,height:12,format:"svg"},ye=()=>e.jsx("div",{className:"footer-section",children:e.jsxs("div",{className:"footer-body",children:[e.jsxs("div",{className:"footer-get-cont",children:[e.jsx("span",{className:"footer-get-text",children:"Get NetLogo and start learning today"}),e.jsx(m,{colorClass:"blue-button",padding:"0.875rem 2rem",fontSize:"1rem",text:"GET NETLOGO"}),e.jsx(m,{colorClass:"light-button",padding:"0.875rem 2rem",fontSize:"1rem",text:"DONATE"})]}),e.jsx("div",{className:"footer-line"}),e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-content-row",children:[e.jsxs("div",{className:"footer-row-front",children:[e.jsx("div",{className:"footer-row-front-title",children:"LOGO"}),e.jsxs("div",{className:"footer-row-front-logo",children:[e.jsx("img",{src:be.src}),e.jsx("img",{src:y.src}),e.jsx("img",{src:we.src})]})]}),e.jsxs("div",{className:"footer-content-row-back",children:[e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" About "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" Visions "}),e.jsx("span",{children:" Governance "}),e.jsx("span",{children:" History "}),e.jsx("span",{children:" In Press "}),e.jsx("span",{children:" Annual Report "})]})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Products "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" NetLogo Web "}),e.jsx("span",{children:" NetLogo APP "}),e.jsx("span",{children:" Turtle Universe "}),e.jsx("span",{children:" Others "})]})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Learning "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" Courses & Tutorials "}),e.jsx("span",{children:" Beginners’ Dictionary "}),e.jsx("span",{children:" Learning Websites "}),e.jsx("span",{children:" FAQ "})]})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Docs "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" User Guides "}),e.jsx("span",{children:" Dictionary "}),e.jsx("span",{children:" Extensions "}),e.jsx("span",{children:" Contributor Guides "})]})]})]})]}),e.jsxs("div",{className:"footer-content-row",children:[e.jsx("div",{className:"footer-row-front"}),e.jsxs("div",{className:"footer-content-row-back",children:[e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Models "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" Models Library "}),e.jsx("span",{children:" Modeling Commons "}),e.jsx("span",{children:" Community Models "}),e.jsx("span",{children:" Websites "})]})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" Community "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" Discourse "}),e.jsx("span",{children:" Feedback "}),e.jsx("span",{children:" Bug Report "}),e.jsx("span",{children:" GitHub "})]})]}),e.jsxs("div",{className:"footer-content-row-vert-cont",children:[e.jsx("div",{className:"footer-content-row-vert-header",children:e.jsx("span",{children:" News "})}),e.jsxs("div",{className:"footer-content-row-vert-content",children:[e.jsx("span",{children:" Competitions "}),e.jsx("span",{children:" Upcopming Conferences "}),e.jsx("span",{children:" Workshops "}),e.jsx("span",{children:" Publications "})]})]}),e.jsx("div",{className:"footer-content-row-vert-cont"})]})]}),e.jsx("div",{className:"footer-content-end-cont",children:e.jsx("img",{src:y.src})})]})]})});function Ee({announcement:s,upcomingEvents:t,upcomingWorkshops:n,competitions:o,publications:r,communityContent:a}){const[i,c]=l.useState(!!s);return e.jsxs("div",{className:"body",children:[e.jsx(V,{}),i&&s&&e.jsx(Y,{announcement:s,setShowAnnouncement:c}),e.jsx(ae,{}),e.jsx(he,{}),e.jsx(ve,{}),e.jsx(je,{communityPosts:a}),e.jsx(de,{upcomingEvents:t,upcomingWorkshops:n,competitions:o,publications:r}),e.jsx(fe,{}),e.jsx(Ne,{}),e.jsx(ye,{})]})}export{Ee as B,e as j};
