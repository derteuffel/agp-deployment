import{o as Ut,j as r,D as O,F as p,R as A,C as b,a4 as E,x as G,q as qt,r as fe,P as g,a as je,i as Pn,M as Cn,k as wn,l as Nn,G as Ee,S as dt,T as mt,d as En,b as On,a5 as In,z as Tn,y as Fn}from"./index-BBwNWda_.js";import{u as Oe,a as _n}from"./xlsx-BiIUQI8q.js";import{W as Ln}from"./file-waMg07mO.js";import{B as be}from"./Badge-BqNBbk6S.js";import{P as te}from"./Pagination-Dr02RiN_.js";import"./Anchor-B_1sJziF.js";function Mn({show:e,setShowPlainteNonSensible:t}){const n=()=>t(!1),{register:a,handleSubmit:s,formState:{errors:i},reset:o}=Ut(),l=c=>{n(),o()};return r.jsx(r.Fragment,{children:r.jsxs(O,{show:e,onHide:n,centered:!0,size:"lg",children:[r.jsx(O.Header,{closeButton:!0,children:r.jsx(O.Title,{children:"Création Plainte Non Sensible"})}),r.jsx(O.Body,{children:r.jsxs(p,{onSubmit:s(l),method:"POST",children:[r.jsxs(A,{className:"g-2 mt-2",children:[r.jsxs(b,{children:[r.jsx(p.Label,{children:"Nom"}),r.jsx(p.Control,{type:"number",placeholder:"",...a("amount",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Postnom"}),r.jsx(p.Control,{type:"number",placeholder:"",...a("percentage",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Prenom"}),r.jsx(p.Control,{type:"number",placeholder:"",...a("percentage",{required:!1})})]})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsxs(b,{children:[r.jsx(p.Label,{children:"Debut Date"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("amount",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Fin Date"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("percentage",{required:!1})})]})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Categorie",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Select categorie"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Type",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Select type"})})})})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Pays",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez pays"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Province",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez province"})})})})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Ville",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectioonez ville"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Secteur",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez secteur"})})})})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Village",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez village"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Secteur",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez secteur"})})})})]}),r.jsxs(A,{className:"g-2 mt-2",children:[r.jsx(b,{children:r.jsx(p.Check,{inline:!0,label:"Est-ce qu'il est sSensible",name:"group1"})}),r.jsx(b,{children:r.jsx(p.Check,{inline:!0,label:"Plainte Affecté",name:"group1"})})]}),r.jsxs(A,{className:"g-2 mt-2",children:[r.jsxs(b,{children:[r.jsx(p.Label,{children:"Pay Period Start"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("payPeriodStart",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Pay Period End"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("payPeriodEnd",{required:!1})})]})]}),r.jsx(A,{className:"g-3 mt-2",children:r.jsxs(p.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[r.jsx(p.Label,{children:"Description"}),r.jsx(p.Control,{as:"textarea",rows:4,style:{resize:"none"},...a("description",{required:!0})})]})}),r.jsxs(O.Footer,{className:"border-0 justify-content-between",children:[r.jsx(G,{variant:"",onClick:n,children:"Cancel"}),r.jsx(G,{variant:"primary",type:"submit",className:"px-4",children:"Save"})]})]})})]})})}function Rn({show:e,setShowPlainteGenerale:t}){const n=()=>t(!1),{register:a,handleSubmit:s,formState:{errors:i},reset:o}=Ut(),l=c=>{n(),o()};return r.jsx(r.Fragment,{children:r.jsxs(O,{show:e,onHide:n,centered:!0,size:"lg",children:[r.jsx(O.Header,{closeButton:!0,children:r.jsx(O.Title,{children:"Création Plainte Génerale"})}),r.jsx(O.Body,{children:r.jsxs(p,{onSubmit:s(l),method:"POST",children:[r.jsxs(A,{className:"g-2 mt-2",children:[r.jsxs(b,{children:[r.jsx(p.Label,{children:"Nom"}),r.jsx(p.Control,{type:"number",placeholder:"",...a("amount",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Postnom"}),r.jsx(p.Control,{type:"number",placeholder:"",...a("percentage",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Prenom"}),r.jsx(p.Control,{type:"number",placeholder:"",...a("percentage",{required:!1})})]})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsxs(b,{children:[r.jsx(p.Label,{children:"Debut Date"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("amount",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Fin Date"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("percentage",{required:!1})})]})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Categorie",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Select categorie"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Type",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Select type"})})})})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Pays",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez pays"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Province",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez province"})})})})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Ville",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectioonez ville"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Secteur",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez secteur"})})})})]}),r.jsxs(A,{className:"g-2 mt-4",children:[r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Village",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez village"})})})}),r.jsx(b,{children:r.jsx(E,{controlId:"floatingInputGrid",label:"Secteur",children:r.jsx(p.Select,{...a("deductionTypeResource",{required:!0}),children:r.jsx("option",{value:"",children:"Selectionnez secteur"})})})})]}),r.jsxs(A,{className:"g-2 mt-2",children:[r.jsx(b,{children:r.jsx(p.Check,{inline:!0,label:"Est-ce qu'il est sSensible",name:"group1"})}),r.jsx(b,{children:r.jsx(p.Check,{inline:!0,label:"Plainte Affecté",name:"group1"})})]}),r.jsxs(A,{className:"g-2 mt-2",children:[r.jsxs(b,{children:[r.jsx(p.Label,{children:"Pay Period Start"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("payPeriodStart",{required:!1})})]}),r.jsxs(b,{children:[r.jsx(p.Label,{children:"Pay Period End"}),r.jsx(p.Control,{type:"date",placeholder:"",...a("payPeriodEnd",{required:!1})})]})]}),r.jsx(A,{className:"g-3 mt-2",children:r.jsxs(p.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[r.jsx(p.Label,{children:"Description"}),r.jsx(p.Control,{as:"textarea",rows:4,style:{resize:"none"},...a("description",{required:!0})})]})}),r.jsxs(O.Footer,{className:"border-0 justify-content-between",children:[r.jsx(G,{variant:"",onClick:n,children:"Cancel"}),r.jsx(G,{variant:"primary",type:"submit",className:"px-4",children:"Save"})]})]})})]})})}function zn({show:e,setShowChooseOptions:t}){const n=()=>t(!1),a=qt(),[s,i]=fe.useState(!1),[o,l]=fe.useState(!1),c=()=>{t(!1),setTimeout(()=>{l(!0)},300)};return r.jsxs(r.Fragment,{children:[r.jsxs(O,{show:e,onHide:n,centered:!0,children:[r.jsx(O.Header,{closeButton:!0,children:r.jsx(O.Title,{children:"Création Plainte"})}),r.jsx(O.Body,{children:r.jsxs(A,{className:"g-3 p-3 justify-content-center",children:[r.jsx(G,{variant:"primary",className:"w-75",onClick:()=>a("/plainte-generale"),children:"Plainte Générale"}),r.jsx(G,{variant:"primary",className:"w-75",onClick:c,children:"Plainte non-sensible"})]})})]}),r.jsx(Mn,{show:o,setShowPlainteNonSensible:l}),r.jsx(Rn,{show:s,setShowPlainteGenerale:i})]})}const pt=()=>{};let et={},Yt={},Wt=null,Ht={mark:pt,measure:pt};try{typeof window<"u"&&(et=window),typeof document<"u"&&(Yt=document),typeof MutationObserver<"u"&&(Wt=MutationObserver),typeof performance<"u"&&(Ht=performance)}catch{}const{userAgent:ht=""}=et.navigator||{},$=et,j=Yt,gt=Wt,xe=Ht;$.document;const Y=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",Bt=~ht.indexOf("MSIE")||~ht.indexOf("Trident/");var S="classic",$t="duotone",I="sharp",T="sharp-duotone",Dn=[S,$t,I,T],Gn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},bt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Un=["kit"],qn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Yn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Wn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Hn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Bn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},$n={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Xn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Vn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Xt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Kn=["solid","regular","light","thin","duotone","brands"],Vt=[1,2,3,4,5,6,7,8,9,10],Jn=Vt.concat([11,12,13,14,15,16,17,18,19,20]),le={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qn=[...Object.keys($n),...Kn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",le.GROUP,le.SWAP_OPACITY,le.PRIMARY,le.SECONDARY].concat(Vt.map(e=>"".concat(e,"x"))).concat(Jn.map(e=>"w-".concat(e))),Zn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ea={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ta={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},xt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const U="___FONT_AWESOME___",Re=16,Kt="fa",Jt="svg-inline--fa",Z="data-fa-i2svg",ze="data-fa-pseudo-element",na="data-fa-pseudo-element-pending",tt="data-prefix",nt="data-icon",yt="fontawesome-i2svg",aa="async",ra=["HTML","HEAD","STYLE","SCRIPT"],Qt=(()=>{try{return!0}catch{return!1}})(),Zt=[S,I,T];function he(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[S]}})}const en={...Xt};en[S]={...Xt[S],...bt.kit,...bt["kit-duotone"]};const J=he(en),De={...Vn};De[S]={...De[S],...xt.kit,...xt["kit-duotone"]};const me=he(De),Ge={...Xn};Ge[S]={...Ge[S],...ta.kit};const Q=he(Ge),Ue={...Bn};Ue[S]={...Ue[S],...ea.kit};const sa=he(Ue),ia=qn,tn="fa-layers-text",oa=Yn,la={...Gn};he(la);const ca=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ie=le,se=new Set;Object.keys(me[S]).map(se.add.bind(se));Object.keys(me[I]).map(se.add.bind(se));Object.keys(me[T]).map(se.add.bind(se));const fa=[...Un,...Qn],ue=$.FontAwesomeConfig||{};function ua(e){var t=j.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function da(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}j&&typeof j.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const s=da(ua(n));s!=null&&(ue[a]=s)});const nn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Kt,replacementClass:Jt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ue.familyPrefix&&(ue.cssPrefix=ue.familyPrefix);const ie={...nn,...ue};ie.autoReplaceSvg||(ie.observeMutations=!1);const d={};Object.keys(nn).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(t){ie[e]=t,de.forEach(n=>n(d))},get:function(){return ie[e]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){ie.cssPrefix=e,de.forEach(t=>t(d))},get:function(){return ie.cssPrefix}});$.FontAwesomeConfig=d;const de=[];function ma(e){return de.push(e),()=>{de.splice(de.indexOf(e),1)}}const H=Re,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pa(e){if(!e||!Y)return;const t=j.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=j.head.childNodes;let a=null;for(let s=n.length-1;s>-1;s--){const i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return j.head.insertBefore(t,a),e}const ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pe(){let e=12,t="";for(;e-- >0;)t+=ha[Math.random()*62|0];return t}function oe(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function at(e){return e.classList?oe(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function an(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ga(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(an(e[n]),'" '),"").trim()}function Pe(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function rt(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function ba(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:c,path:f}}function xa(e){let{transform:t,width:n=Re,height:a=Re,startCentered:s=!1}=e,i="";return s&&Bt?i+="translate(".concat(t.x/H-n/2,"em, ").concat(t.y/H-a/2,"em) "):s?i+="translate(calc(-50% + ".concat(t.x/H,"em), calc(-50% + ").concat(t.y/H,"em)) "):i+="translate(".concat(t.x/H,"em, ").concat(t.y/H,"em) "),i+="scale(".concat(t.size/H*(t.flipX?-1:1),", ").concat(t.size/H*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var ya=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function rn(){const e=Kt,t=Jt,n=d.cssPrefix,a=d.replacementClass;let s=ya;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return s}let vt=!1;function Te(){d.autoAddCss&&!vt&&(pa(rn()),vt=!0)}var va={mixout(){return{dom:{css:rn,insertCss:Te}}},hooks(){return{beforeDOMElementCreation(){Te()},beforeI2svg(){Te()}}}};const q=$||{};q[U]||(q[U]={});q[U].styles||(q[U].styles={});q[U].hooks||(q[U].hooks={});q[U].shims||(q[U].shims=[]);var R=q[U];const sn=[],on=function(){j.removeEventListener("DOMContentLoaded",on),Se=1,sn.map(e=>e())};let Se=!1;Y&&(Se=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),Se||j.addEventListener("DOMContentLoaded",on));function ja(e){Y&&(Se?setTimeout(e,0):sn.push(e))}function ge(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?an(e):"<".concat(t," ").concat(ga(n),">").concat(a.map(ge).join(""),"</").concat(t,">")}function jt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fe=function(t,n,a,s){var i=Object.keys(t),o=i.length,l=n,c,f,m;for(a===void 0?(c=1,m=t[i[0]]):(c=0,m=a);c<o;c++)f=i[c],m=l(m,t[f],f,t);return m};function Sa(e){const t=[];let n=0;const a=e.length;for(;n<a;){const s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function qe(e){const t=Sa(e);return t.length===1?t[0].toString(16):null}function ka(e,t){const n=e.length;let a=e.charCodeAt(t),s;return a>=55296&&a<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function St(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function Ye(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,s=St(t);typeof R.hooks.addPack=="function"&&!a?R.hooks.addPack(e,St(t)):R.styles[e]={...R.styles[e]||{},...s},e==="fas"&&Ye("fa",t)}const{styles:K,shims:Aa}=R,Pa={[S]:Object.values(Q[S]),[I]:Object.values(Q[I]),[T]:Object.values(Q[T])};let st=null,ln={},cn={},fn={},un={},dn={};const Ca={[S]:Object.keys(J[S]),[I]:Object.keys(J[I]),[T]:Object.keys(J[T])};function wa(e){return~fa.indexOf(e)}function Na(e,t){const n=t.split("-"),a=n[0],s=n.slice(1).join("-");return a===e&&s!==""&&!wa(s)?s:null}const mn=()=>{const e=a=>Fe(K,(s,i,o)=>(s[o]=Fe(i,a,{}),s),{});ln=e((a,s,i)=>(s[3]&&(a[s[3]]=i),s[2]&&s[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),cn=e((a,s,i)=>(a[i]=i,s[2]&&s[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),dn=e((a,s,i)=>{const o=s[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const t="far"in K||d.autoFetchSvg,n=Fe(Aa,(a,s)=>{const i=s[0];let o=s[1];const l=s[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});fn=n.names,un=n.unicodes,st=Ce(d.styleDefault,{family:d.familyDefault})};ma(e=>{st=Ce(e.styleDefault,{family:d.familyDefault})});mn();function it(e,t){return(ln[e]||{})[t]}function Ea(e,t){return(cn[e]||{})[t]}function B(e,t){return(dn[e]||{})[t]}function pn(e){return fn[e]||{prefix:null,iconName:null}}function Oa(e){const t=un[e],n=it("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return st}const ot=()=>({prefix:null,iconName:null,rest:[]});function Ce(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=S}=t,a=J[n][e],s=me[n][e]||me[n][a],i=e in R.styles?e:null;return s||i||null}const Ia={[S]:Object.keys(Q[S]),[I]:Object.keys(Q[I]),[T]:Object.keys(Q[T])};function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,a={[S]:"".concat(d.cssPrefix,"-").concat(S),[I]:"".concat(d.cssPrefix,"-").concat(I),[T]:"".concat(d.cssPrefix,"-").concat(T)};let s=null,i=S;const o=Dn.filter(c=>c!==$t);o.forEach(c=>{(e.includes(a[c])||e.some(f=>Ia[c].includes(f)))&&(i=c)});const l=e.reduce((c,f)=>{const m=Na(d.cssPrefix,f);if(K[f]?(f=Pa[i].includes(f)?sa[i][f]:f,s=f,c.prefix=f):Ca[i].indexOf(f)>-1?(s=f,c.prefix=Ce(f,{family:i})):m?c.iconName=m:f!==d.replacementClass&&!o.some(x=>f===a[x])&&c.rest.push(f),!n&&c.prefix&&c.iconName){const x=s==="fa"?pn(c.iconName):{},h=B(c.prefix,c.iconName);x.prefix&&(s=null),c.iconName=x.iconName||h||c.iconName,c.prefix=x.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},ot());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===I&&(K.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=B(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===T&&(K.fasds||d.autoFetchSvg)&&(l.prefix="fasds",l.iconName=B(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=X()||"fas"),l}class Ta{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...s[i]},Ye(i,s[i]);const o=Q[S][i];o&&Ye(o,s[i]),mn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(s=>{const{prefix:i,iconName:o,icon:l}=a[s],c=l[2];t[i]||(t[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(t[i][f]=l)}),t[i][o]=l}),t}}let kt=[],ne={};const re={},Fa=Object.keys(re);function _a(e,t){let{mixoutsTo:n}=t;return kt=e,ne={},Object.keys(re).forEach(a=>{Fa.indexOf(a)===-1&&delete re[a]}),kt.forEach(a=>{const s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(i=>{typeof s[i]=="function"&&(n[i]=s[i]),typeof s[i]=="object"&&Object.keys(s[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=s[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{ne[o]||(ne[o]=[]),ne[o].push(i[o])})}a.provides&&a.provides(re)}),n}function We(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),s=2;s<n;s++)a[s-2]=arguments[s];return(ne[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ne[e]||[]).forEach(i=>{i.apply(null,n)})}function V(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return re[e]?re[e].apply(null,t):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||X();if(t)return t=B(n,t)||t,jt(hn.definitions,n,t)||jt(R.styles,n,t)}const hn=new Ta,La=()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,ee("noAuto")},Ma={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ee("beforeI2svg",e),V("pseudoElements2svg",e),V("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ja(()=>{za({autoReplaceSvgRoot:t}),ee("watch",e)})}},Ra={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=Ce(e[0]);return{prefix:n,iconName:B(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(ia))){const t=we(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||X(),iconName:B(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=X();return{prefix:t,iconName:B(t,e)||e}}}},F={noAuto:La,config:d,dom:Ma,parse:Ra,library:hn,findIconDefinition:He,toHtml:ge},za=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=j}=e;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&Y&&d.autoReplaceSvg&&F.dom.i2svg({node:t})};function Ne(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ge(n))}}),Object.defineProperty(e,"node",{get:function(){if(!Y)return;const n=j.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Da(e){let{children:t,main:n,mask:a,attributes:s,styles:i,transform:o}=e;if(rt(o)&&n.found&&!a.found){const{width:l,height:c}=n,f={x:l/c/2,y:.5};s.style=Pe({...i,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:s,children:t}]}function Ga(e){let{prefix:t,iconName:n,children:a,attributes:s,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...s,id:o},children:a}]}]}function lt(e){const{icons:{main:t,mask:n},prefix:a,iconName:s,transform:i,symbol:o,title:l,maskId:c,titleId:f,extra:m,watchable:x=!1}=e,{width:h,height:P}=n.found?n:t,N=a==="fak",u=[d.replacementClass,s?"".concat(d.cssPrefix,"-").concat(s):""].filter(C=>m.classes.indexOf(C)===-1).filter(C=>C!==""||!!C).concat(m.classes).join(" ");let v={children:[],attributes:{...m.attributes,"data-prefix":a,"data-icon":s,class:u,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(P)}};const y=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(h/P*16*.0625,"em")}:{};x&&(v.attributes[Z]=""),l&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||pe())},children:[l]}),delete v.attributes.title);const k={...v,prefix:a,iconName:s,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:{...y,...m.styles}},{children:w,attributes:_}=n.found&&t.found?V("generateAbstractMask",k)||{children:[],attributes:{}}:V("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=w,k.attributes=_,o?Ga(k):Da(k)}function At(e){const{content:t,width:n,height:a,transform:s,title:i,extra:o,watchable:l=!1}=e,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};l&&(c[Z]="");const f={...o.styles};rt(s)&&(f.transform=xa({transform:s,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=Pe(f);m.length>0&&(c.style=m);const x=[];return x.push({tag:"span",attributes:c,children:[t]}),i&&x.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),x}function Ua(e){const{content:t,title:n,extra:a}=e,s={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=Pe(a.styles);i.length>0&&(s.style=i);const o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:_e}=R;function Be(e){const t=e[0],n=e[1],[a]=e.slice(4);let s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ie.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ie.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}const qa={found:!1,width:512,height:512};function Ya(e,t){!Qt&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $e(e,t){let n=t;return t==="fa"&&d.styleDefault!==null&&(t=X()),new Promise((a,s)=>{if(n==="fa"){const i=pn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_e[t]&&_e[t][e]){const i=_e[t][e];return a(Be(i))}Ya(e,t),a({...qa,icon:d.showMissingIcons&&e?V("missingIconAbstract")||{}:{}})})}const Pt=()=>{},Xe=d.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:Pt,measure:Pt},ce='FA "6.6.0"',Wa=e=>(Xe.mark("".concat(ce," ").concat(e," begins")),()=>gn(e)),gn=e=>{Xe.mark("".concat(ce," ").concat(e," ends")),Xe.measure("".concat(ce," ").concat(e),"".concat(ce," ").concat(e," begins"),"".concat(ce," ").concat(e," ends"))};var ct={begin:Wa,end:gn};const ye=()=>{};function Ct(e){return typeof(e.getAttribute?e.getAttribute(Z):null)=="string"}function Ha(e){const t=e.getAttribute?e.getAttribute(tt):null,n=e.getAttribute?e.getAttribute(nt):null;return t&&n}function Ba(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function $a(){return d.autoReplaceSvg===!0?ve.replace:ve[d.autoReplaceSvg]||ve.replace}function Xa(e){return j.createElementNS("http://www.w3.org/2000/svg",e)}function Va(e){return j.createElement(e)}function bn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Xa:Va}=t;if(typeof e=="string")return j.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(bn(i,{ceFn:n}))}),a}function Ka(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const ve={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(bn(n),t)}),t.getAttribute(Z)===null&&d.keepOriginalSource){let n=j.createComment(Ka(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~at(t).indexOf(d.replacementClass))return ve.replace(e);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===d.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const s=n.map(i=>ge(i)).join(`
`);t.setAttribute(Z,""),t.innerHTML=s}};function wt(e){e()}function xn(e,t){const n=typeof t=="function"?t:ye;if(e.length===0)n();else{let a=wt;d.mutateApproach===aa&&(a=$.requestAnimationFrame||wt),a(()=>{const s=$a(),i=ct.begin("mutate");e.map(s),i(),n()})}}let ft=!1;function yn(){ft=!0}function Ve(){ft=!1}let ke=null;function Nt(e){if(!gt||!d.observeMutations)return;const{treeCallback:t=ye,nodeCallback:n=ye,pseudoElementsCallback:a=ye,observeMutationsRoot:s=j}=e;ke=new gt(i=>{if(ft)return;const o=X();oe(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!Ct(l.addedNodes[0])&&(d.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&d.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&Ct(l.target)&&~ca.indexOf(l.attributeName))if(l.attributeName==="class"&&Ha(l.target)){const{prefix:c,iconName:f}=we(at(l.target));l.target.setAttribute(tt,c||o),f&&l.target.setAttribute(nt,f)}else Ba(l.target)&&n(l.target)})}),Y&&ke.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ja(){ke&&ke.disconnect()}function Qa(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,s)=>{const i=s.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Za(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let s=we(at(e));return s.prefix||(s.prefix=X()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=Ea(s.prefix,e.innerText)||it(s.prefix,qe(e.innerText))),!s.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function er(e){const t=oe(e.attributes).reduce((s,i)=>(s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||pe()):(t["aria-hidden"]="true",t.focusable="false")),t}function tr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:s}=Za(e),i=er(e),o=We("parseNodeAttributes",{},e);let l=t.styleParser?Qa(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:i},...o}}const{styles:nr}=R;function vn(e){const t=d.autoReplaceSvg==="nest"?Et(e,{styleParser:!1}):Et(e);return~t.extra.classes.indexOf(tn)?V("generateLayersText",e,t):V("generateSvgReplacementMutation",e,t)}let z=new Set;Zt.map(e=>{z.add("fa-".concat(e))});Object.keys(J[S]).map(z.add.bind(z));Object.keys(J[I]).map(z.add.bind(z));Object.keys(J[T]).map(z.add.bind(z));z=[...z];function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();const n=j.documentElement.classList,a=m=>n.add("".concat(yt,"-").concat(m)),s=m=>n.remove("".concat(yt,"-").concat(m)),i=d.autoFetchSvg?z:Zt.map(m=>"fa-".concat(m)).concat(Object.keys(nr));i.includes("fa")||i.push("fa");const o=[".".concat(tn,":not([").concat(Z,"])")].concat(i.map(m=>".".concat(m,":not([").concat(Z,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=oe(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),s("complete");else return Promise.resolve();const c=ct.begin("onTree"),f=l.reduce((m,x)=>{try{const h=vn(x);h&&m.push(h)}catch(h){Qt||h.name==="MissingIcon"&&console.error(h)}return m},[]);return new Promise((m,x)=>{Promise.all(f).then(h=>{xn(h,()=>{a("active"),a("complete"),s("pending"),typeof t=="function"&&t(),c(),m()})}).catch(h=>{c(),x(h)})})}function ar(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vn(e).then(n=>{n&&xn([n],t)})}function rr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:He(t||{});let{mask:s}=n;return s&&(s=(s||{}).icon?s:He(s||{})),e(a,{...n,mask:s})}}const sr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,symbol:a=!1,mask:s=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:f={},styles:m={}}=t;if(!e)return;const{prefix:x,iconName:h,icon:P}=e;return Ne({type:"icon",...e},()=>(ee("beforeDOMElementCreation",{iconDefinition:e,params:t}),d.autoA11y&&(o?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(l||pe()):(f["aria-hidden"]="true",f.focusable="false")),lt({icons:{main:Be(P),mask:s?Be(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:h,transform:{...M,...n},symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:f,styles:m,classes:c}})))};var ir={mixout(){return{icon:rr(sr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Ot,e.nodeCallback=ar,e}}},provides(e){e.i2svg=function(t){const{node:n=j,callback:a=()=>{}}=t;return Ot(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:s,titleId:i,prefix:o,transform:l,symbol:c,mask:f,maskId:m,extra:x}=n;return new Promise((h,P)=>{Promise.all([$e(a,o),f.iconName?$e(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[u,v]=N;h([t,lt({icons:{main:u,mask:v},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:s,titleId:i,extra:x,watchable:!0})])}).catch(P)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:s,transform:i,styles:o}=t;const l=Pe(o);l.length>0&&(a.style=l);let c;return rt(i)&&(c=V("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),n.push(c||s.icon),{children:n,attributes:a}}}},or={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return Ne({type:"layer"},()=>{ee("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(s=>{Array.isArray(s)?s.map(i=>{a=a.concat(i.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},lr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:s={},styles:i={}}=t;return Ne({type:"counter",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),Ua({content:e.toString(),title:n,extra:{attributes:s,styles:i,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},cr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=M,title:a=null,classes:s=[],attributes:i={},styles:o={}}=t;return Ne({type:"text",content:e},()=>(ee("beforeDOMElementCreation",{content:e,params:t}),At({content:e,transform:{...M,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(d.cssPrefix,"-layers-text"),...s]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:s,extra:i}=n;let o=null,l=null;if(Bt){const c=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/c,l=f.height/c}return d.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,At({content:t.innerHTML,width:o,height:l,transform:s,title:a,extra:i,watchable:!0})])}}};const fr=new RegExp('"',"ug"),It=[1105920,1112319],Tt={FontAwesome:{normal:"fas",400:"fas"},...Hn,...Wn,...Zn},Ke=Object.keys(Tt).reduce((e,t)=>(e[t.toLowerCase()]=Tt[t],e),{}),ur=Object.keys(Ke).reduce((e,t)=>{const n=Ke[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function dr(e){const t=e.replace(fr,""),n=ka(t,0),a=n>=It[0]&&n<=It[1],s=t.length===2?t[0]===t[1]:!1;return{value:qe(s?t[0]:t),isSecondary:a||s}}function mr(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),s=isNaN(a)?"normal":a;return(Ke[n]||{})[s]||ur[n]}function Ft(e,t){const n="".concat(na).concat(t.replace(":","-"));return new Promise((a,s)=>{if(e.getAttribute(n)!==null)return a();const o=oe(e.children).filter(h=>h.getAttribute(ze)===t)[0],l=$.getComputedStyle(e,t),c=l.getPropertyValue("font-family"),f=c.match(oa),m=l.getPropertyValue("font-weight"),x=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&x!=="none"&&x!==""){const h=l.getPropertyValue("content");let P=mr(c,m);const{value:N,isSecondary:u}=dr(h),v=f[0].startsWith("FontAwesome");let y=it(P,N),k=y;if(v){const w=Oa(N);w.iconName&&w.prefix&&(y=w.iconName,P=w.prefix)}if(y&&!u&&(!o||o.getAttribute(tt)!==P||o.getAttribute(nt)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);const w=tr(),{extra:_}=w;_.attributes[ze]=t,$e(y,P).then(C=>{const W=lt({...w,icons:{main:C,mask:ot()},prefix:P,iconName:k,extra:_,watchable:!0}),D=j.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=W.map(An=>ge(An)).join(`
`),e.removeAttribute(n),a()}).catch(s)}else a()}else a()})}function pr(e){return Promise.all([Ft(e,"::before"),Ft(e,"::after")])}function hr(e){return e.parentNode!==document.head&&!~ra.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _t(e){if(Y)return new Promise((t,n)=>{const a=oe(e.querySelectorAll("*")).filter(hr).map(pr),s=ct.begin("searchPseudoElements");yn(),Promise.all(a).then(()=>{s(),Ve(),t()}).catch(()=>{s(),Ve(),n()})})}var gr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=_t,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=j}=t;d.searchPseudoElements&&_t(n)}}};let Lt=!1;var br={mixout(){return{dom:{unwatch(){yn(),Lt=!0}}}},hooks(){return{bootstrap(){Nt(We("mutationObserverCallbacks",{}))},noAuto(){Ja()},watch(e){const{observeMutationsRoot:t}=e;Lt?Ve():Nt(We("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const Mt=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const s=a.toLowerCase().split("-"),i=s[0];let o=s.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var xr={mixout(){return{parse:{transform:e=>Mt(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Mt(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:s,iconWidth:i}=t;const o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},x={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:m,path:x};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const Le={x:0,y:0,width:"100%",height:"100%"};function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function yr(e){return e.tag==="g"?e.children:[e]}var vr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?we(n.split(" ").map(s=>s.trim())):ot();return a.prefix||(a.prefix=X()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:s,mask:i,maskId:o,transform:l}=t;const{width:c,icon:f}=s,{width:m,icon:x}=i,h=ba({transform:l,containerWidth:m,iconWidth:c}),P={tag:"rect",attributes:{...Le,fill:"white"}},N=f.children?{children:f.children.map(Rt)}:{},u={tag:"g",attributes:{...h.inner},children:[Rt({tag:f.tag,attributes:{...f.attributes,...h.path},...N})]},v={tag:"g",attributes:{...h.outer},children:[u]},y="mask-".concat(o||pe()),k="clip-".concat(o||pe()),w={tag:"mask",attributes:{...Le,id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[P,v]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:yr(x)},w]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(y,")"),...Le}}),{children:n,attributes:a}}}},jr={provides(e){let t=!1;$.matchMedia&&(t=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...s,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...s,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Sr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},kr=[va,ir,or,lr,cr,gr,br,xr,vr,jr,Sr];_a(kr,{mixoutsTo:F});F.noAuto;F.config;F.library;F.dom;const Je=F.parse;F.findIconDefinition;F.toHtml;const Ar=F.icon;F.layer;F.text;F.counter;function zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zt(Object(n),!0).forEach(function(a){ae(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ae(e){"@babel/helpers - typeof";return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ae(e)}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pr(e,t){if(e==null)return{};var n={},a=Object.keys(e),s,i;for(i=0;i<a.length;i++)s=a[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function Cr(e,t){if(e==null)return{};var n=Pr(e,t),a,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Qe(e){return wr(e)||Nr(e)||Er(e)||Or()}function wr(e){if(Array.isArray(e))return Ze(e)}function Nr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Er(e,t){if(e){if(typeof e=="string")return Ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ze(e,t)}}function Ze(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ir(e){var t,n=e.beat,a=e.fade,s=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,c=e.spin,f=e.spinPulse,m=e.spinReverse,x=e.pulse,h=e.fixedWidth,P=e.inverse,N=e.border,u=e.listItem,v=e.flip,y=e.size,k=e.rotation,w=e.pull,_=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":s,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":x,"fa-fw":h,"fa-inverse":P,"fa-border":N,"fa-li":u,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},ae(t,"fa-".concat(y),typeof y<"u"&&y!==null),ae(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),ae(t,"fa-pull-".concat(w),typeof w<"u"&&w!==null),ae(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(C){return _[C]?C:null}).filter(function(C){return C})}function Tr(e){return e=e-0,e===e}function jn(e){return Tr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Fr=["style"];function _r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Lr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),s=jn(n.slice(0,a)),i=n.slice(a+1).trim();return s.startsWith("webkit")?t[_r(s)]=i:t[s]=i,t},{})}function Sn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return Sn(e,c)}),s=Object.keys(t.attributes||{}).reduce(function(c,f){var m=t.attributes[f];switch(f){case"class":c.attrs.className=m,delete t.attributes.class;break;case"style":c.attrs.style=Lr(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=m:c.attrs[jn(f)]=m}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Cr(n,Fr);return s.attrs.style=L(L({},s.attrs.style),o),e.apply(void 0,[t.tag,L(L({},s.attrs),l)].concat(Qe(a)))}var kn=!1;try{kn=!0}catch{}function Mr(){if(!kn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e){if(e&&Ae(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Je.icon)return Je.icon(e);if(e===null)return null;if(e&&Ae(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Me(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ae({},e,t):{}}var Gt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ut=je.forwardRef(function(e,t){var n=L(L({},Gt),e),a=n.icon,s=n.mask,i=n.symbol,o=n.className,l=n.title,c=n.titleId,f=n.maskId,m=Dt(a),x=Me("classes",[].concat(Qe(Ir(n)),Qe((o||"").split(" ")))),h=Me("transform",typeof n.transform=="string"?Je.transform(n.transform):n.transform),P=Me("mask",Dt(s)),N=Ar(m,L(L(L(L({},x),h),P),{},{symbol:i,title:l,titleId:c,maskId:f}));if(!N)return Mr("Could not find icon",m),null;var u=N.abstract,v={ref:t};return Object.keys(n).forEach(function(y){Gt.hasOwnProperty(y)||(v[y]=n[y])}),Rr(u[0],v)});ut.displayName="FontAwesomeIcon";ut.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Rr=Sn.bind(null,je.createElement);const zr={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]};function Dr(){const e=Pn();return r.jsx(Cn,{border:!1,sx:{color:"common.white",bgcolor:e.palette.mode===wn.DARK?"primary.400":"primary.darker","&:after":{content:'""',background:`url("${Nn}") 100% 100% / cover no-repeat`,position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:1,opacity:.5}},children:r.jsxs(Ee,{container:!0,children:[r.jsx(Ee,{item:!0,md:6,sm:6,xs:12,children:r.jsxs(dt,{spacing:2,sx:{padding:3},children:[r.jsx(mt,{variant:"h2",color:e.palette.background.paper,children:"Plaintes"}),r.jsx(mt,{variant:"h6",color:e.palette.background.paper,children:"Dans cette section, nous vous offrons la possibilité de soumettre vos plaintes ou préoccupations."})]})}),r.jsx(Ee,{item:!0,sm:6,xs:12,sx:{display:{xs:"none",sm:"initial"}},children:r.jsx(dt,{sx:{position:"relative",pr:{sm:3,md:8},zIndex:2},justifyContent:"center",alignItems:"flex-end",children:r.jsx("img",{src:Ln,alt:"Welcome",width:"500px",height:"200px"})})})]})})}const Br=()=>{var N;const e=qt(),t=En(),{complaints:n,isLoading:a}=On(u=>u.complaint),[s,i]=fe.useState(!1),[o,l]=fe.useState(""),[c,f]=fe.useState(0),m=12;je.useEffect(()=>{t(In({pageSize:m,currentPage:c,filter:o})),console.log("Complaints:",n)},[t,c,o]),je.useEffect(()=>{const v=new URLSearchParams(location.search).get("page");v&&f(Number(v))},[location.search]);const x=Math.ceil(n.totalItems/m),h=u=>{e(`?page=${u}`),f(u)},P=()=>{const u=Oe.json_to_sheet(n.data.map((y,k)=>({"#":k+1+m*c,"Nom plaignant":y.complainant?`${y.complainant.firstName} ${y.complainant.lastName}`:"",Téléphone:y.complainant?y.complainant.phone:"-",Date:y.createdAt?new Intl.DateTimeFormat("fr-FR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(y.createdAt)):"-",Village:y.villageName,Statut:y.isEligible===!1?"Rejeté":y.status==="In progress"?"En cours":y.status==="Closed"?"Clôturé":"En attente"}))),v=Oe.book_new();Oe.book_append_sheet(v,u,"Plaintes"),_n(v,"Plaintes.xlsx")};return r.jsxs(r.Fragment,{children:[r.jsx(A,{children:r.jsx(Dr,{})}),r.jsxs(A,{className:"align-items-center g-3 mt-3",children:[r.jsx(b,{xs:12,md:4,children:r.jsx(p.Control,{type:"text",placeholder:"Rechercher...",value:o,onChange:u=>l(u.target.value)})}),r.jsx(b,{xs:"auto",className:"ms-auto",children:r.jsx(G,{variant:"success",onClick:P,children:"Exporter vers Excel"})}),r.jsx(b,{xs:"auto",className:"ms-auto",children:r.jsxs(G,{variant:"primary",onClick:()=>e("plainte-generale"),children:[r.jsx(ut,{icon:zr,className:"me-2"})," Créer plainte"]})})]}),r.jsx(A,{className:"mt-4",children:a?r.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{height:"300px"},children:r.jsx(Tn,{animation:"border",variant:"primary"})}):r.jsxs(r.Fragment,{children:[r.jsxs(Fn,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm",children:[r.jsx("thead",{className:"table-dark",children:r.jsxs("tr",{children:[r.jsx("th",{children:"#"}),r.jsx("th",{children:"Nom plaignant"}),r.jsx("th",{children:"Téléphone"}),r.jsx("th",{children:"Date d'enregistrement"}),r.jsx("th",{children:"Village"}),r.jsx("th",{children:"Etape de traitement"}),r.jsx("th",{children:"Statut"}),r.jsx("th",{children:"Conclusion"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:(N=n==null?void 0:n.data)==null?void 0:N.map((u,v)=>{var _;const y=m*c,k=async C=>{const W=new FormData;W.append("file",C);try{(await fetch(`https://plaintes.celluleinfra.org/api/v1/uploads/${u.id}`,{method:"POST",body:W})).ok?alert("Fichier téléchargé avec succès"):alert("Échec du téléchargement du fichier")}catch(D){console.error("Erreur lors du téléchargement du fichier:",D),alert("Erreur lors du téléchargement du fichier")}},w=()=>{const C=document.createElement("input");C.type="file",C.accept="*/*",C.onchange=W=>{const D=W.target.files[0];D&&k(D)},C.click()};return r.jsxs("tr",{onClick:()=>e(`${u.id}`),style:{cursor:"pointer"},children:[r.jsx("td",{children:v+1+y}),r.jsx("td",{children:u!=null&&u.complainant?`${u.complainant.firstName} ${u.complainant.lastName}`:""}),r.jsx("td",{children:u!=null&&u.complainant?u.complainant.phone:"-"}),r.jsx("td",{children:u!=null&&u.createdAt?new Intl.DateTimeFormat("fr-FR",{year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(u==null?void 0:u.createdAt)):"-"}),r.jsx("td",{children:u==null?void 0:u.villageName}),r.jsx("td",{children:`${(_=u==null?void 0:u.currentStep)==null?void 0:_.name}`}),r.jsx("td",{className:"text-center",children:(u==null?void 0:u.isEligible)===!1?r.jsx(be,{bg:"danger",children:"Rejeté"}):(u==null?void 0:u.status)==="ENCOURS"?r.jsx(be,{bg:"secondary",children:"En cours"}):(u==null?void 0:u.status)==="FERMER"?r.jsx(be,{bg:"success",children:"Clôturé"}):r.jsx(be,{bg:"warning",children:"En attente"})}),r.jsx("td",{children:u.status==="FERMER"&&u.isComplaintSentToJustice?r.jsx("span",{children:" Plainte transmise en justice"}):u.status==="FERMER"&&u.isComplaintSentToJustice===!1?r.jsx("span",{children:"Plainte resolu au niveau du projet"}):r.jsx("span",{children:"Resolution en attente"})}),r.jsx("td",{children:Array.isArray(u==null?void 0:u.document)&&u.document.length>0?u.document.map((C,W)=>r.jsx("a",{href:C,target:"_blank",rel:"noopener noreferrer",children:"Voir le fichier"},W)):r.jsx(G,{variant:"info",size:"sm",onClick:w,children:"Charger un fichier"})})]},u.id)})})]}),r.jsxs(te,{className:"justify-content-end mt-3",children:[r.jsx(te.First,{onClick:()=>h(0),disabled:c===0}),r.jsx(te.Prev,{onClick:()=>h(c-1),disabled:c===0}),[...Array(x).keys()].map(u=>r.jsx(te.Item,{active:u===c,onClick:()=>h(u),children:u+1},u)),r.jsx(te.Next,{onClick:()=>h(c+1),disabled:c>=x-1}),r.jsx(te.Last,{onClick:()=>h(x-1),disabled:c>=x-1})]})]})}),r.jsx(zn,{show:s,setShowChooseOptions:i})]})};export{Br as default};
