(function(L,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],p):(L=typeof globalThis<"u"?globalThis:L||self,p(L.ReactReceipts={},L.React))})(this,(function(L,p){"use strict";var V={exports:{}},M={};var Q;function de(){if(Q)return M;Q=1;var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(r,a,i){var d=null;if(i!==void 0&&(d=""+i),a.key!==void 0&&(d=""+a.key),"key"in a){i={};for(var x in a)x!=="key"&&(i[x]=a[x])}else i=a;return a=i.ref,{$$typeof:t,type:r,key:d,ref:a!==void 0?a:null,props:i}}return M.Fragment=s,M.jsx=l,M.jsxs=l,M}var W={};var ee;function ce(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&(function(){function t(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Y?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case D:return"Profiler";case I:return"StrictMode";case _:return"Suspense";case H:return"SuspenseList";case F:return"Activity"}if(typeof n=="object")switch(typeof n.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),n.$$typeof){case O:return"Portal";case m:return n.displayName||"Context";case h:return(n._context.displayName||"Context")+".Consumer";case T:var c=n.render;return n=n.displayName,n||(n=c.displayName||c.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case U:return c=n.displayName||null,c!==null?c:t(n.type)||"Memo";case C:c=n._payload,n=n._init;try{return t(n(c))}catch{}}return null}function s(n){return""+n}function l(n){try{s(n);var c=!1}catch{c=!0}if(c){c=console;var b=c.error,u=typeof Symbol=="function"&&Symbol.toStringTag&&n[Symbol.toStringTag]||n.constructor.name||"Object";return b.call(c,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",u),s(n)}}function r(n){if(n===S)return"<>";if(typeof n=="object"&&n!==null&&n.$$typeof===C)return"<...>";try{var c=t(n);return c?"<"+c+">":"<...>"}catch{return"<...>"}}function a(){var n=y.A;return n===null?null:n.getOwner()}function i(){return Error("react-stack-top-frame")}function d(n){if(k.call(n,"key")){var c=Object.getOwnPropertyDescriptor(n,"key").get;if(c&&c.isReactWarning)return!1}return n.key!==void 0}function x(n,c){function b(){R||(R=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",c))}b.isReactWarning=!0,Object.defineProperty(n,"key",{get:b,configurable:!0})}function w(){var n=t(this.type);return le[n]||(le[n]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),n=this.props.ref,n!==void 0?n:null}function E(n,c,b,u,K,X){var j=b.ref;return n={$$typeof:g,type:n,key:c,props:b,_owner:u},(j!==void 0?j:null)!==null?Object.defineProperty(n,"ref",{enumerable:!1,get:w}):Object.defineProperty(n,"ref",{enumerable:!1,value:null}),n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(n,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(n,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:K}),Object.defineProperty(n,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:X}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n}function v(n,c,b,u,K,X){var j=c.children;if(j!==void 0)if(u)if(P(j)){for(u=0;u<j.length;u++)z(j[u]);Object.freeze&&Object.freeze(j)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else z(j);if(k.call(c,"key")){j=t(n);var B=Object.keys(c).filter(function(We){return We!=="key"});u=0<B.length?"{key: someKey, "+B.join(": ..., ")+": ...}":"{key: someKey}",oe[j+u]||(B=0<B.length?"{"+B.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,u,j,B,j),oe[j+u]=!0)}if(j=null,b!==void 0&&(l(b),j=""+b),d(c)&&(l(c.key),j=""+c.key),"key"in c){b={};for(var Z in c)Z!=="key"&&(b[Z]=c[Z])}else b=c;return j&&x(b,typeof n=="function"?n.displayName||n.name||"Unknown":n),E(n,j,b,a(),K,X)}function z(n){f(n)?n._store&&(n._store.validated=1):typeof n=="object"&&n!==null&&n.$$typeof===C&&(n._payload.status==="fulfilled"?f(n._payload.value)&&n._payload.value._store&&(n._payload.value._store.validated=1):n._store&&(n._store.validated=1))}function f(n){return typeof n=="object"&&n!==null&&n.$$typeof===g}var $=p,g=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Y=Symbol.for("react.client.reference"),y=$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=Object.prototype.hasOwnProperty,P=Array.isArray,q=console.createTask?console.createTask:function(){return null};$={react_stack_bottom_frame:function(n){return n()}};var R,le={},ie=$.react_stack_bottom_frame.bind($,i)(),re=q(r(i)),oe={};W.Fragment=S,W.jsx=function(n,c,b){var u=1e4>y.recentlyCreatedOwnerStacks++;return v(n,c,b,!1,u?Error("react-stack-top-frame"):ie,u?q(r(n)):re)},W.jsxs=function(n,c,b){var u=1e4>y.recentlyCreatedOwnerStacks++;return v(n,c,b,!0,u?Error("react-stack-top-frame"):ie,u?q(r(n)):re)}})()),W}var te;function xe(){return te||(te=1,process.env.NODE_ENV==="production"?V.exports=de():V.exports=ce()),V.exports}var e=xe();const G={"58mm":{width:"58mm",name:"POS (58mm)"}},N=p.memo(({items:t,formatItemTotal:s,borderColor:l,hidePrice:r=!1})=>e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",marginBottom:"10px",fontSize:"inherit"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderTop:`1px dashed ${l}`,borderBottom:`1px dashed ${l}`},children:[e.jsx("th",{style:{textAlign:"left",padding:"3px 0",width:"15%"},children:"QTY"}),e.jsx("th",{style:{textAlign:"left",padding:"3px 0",width:r?"85%":"60%"},children:"ITEM"}),!r&&e.jsx("th",{style:{textAlign:"right",padding:"3px 0",width:"25%"},children:"TOTAL"})]})}),e.jsx("tbody",{children:t.map((a,i)=>e.jsxs("tr",{children:[e.jsx("td",{style:{textAlign:"left",padding:"2px 0"},children:a.quantity}),e.jsx("td",{style:{textAlign:"left",padding:"2px 0"},children:a.name}),!r&&e.jsx("td",{style:{textAlign:"right",padding:"2px 0"},children:s(a)})]},i))})]})),pe=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i,alignStyle:d})=>e.jsxs(e.Fragment,{children:[e.jsxs("header",{style:{backgroundColor:"transparent",padding:"5px 0"},children:[e.jsx("h1",{style:{fontSize:"1.4em",margin:"5px 0",color:s,textTransform:"uppercase"},children:r||"The React Store"}),e.jsxs("p",{style:{margin:"2px 0"},children:["Order #: ",t.id]}),e.jsxs("p",{style:{margin:"5px 0 10px 0",borderBottom:`1px dashed ${l}`,paddingBottom:"5px"},children:["Date: ",new Date(t.date).toLocaleDateString()]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),i&&e.jsxs("footer",{style:{borderTop:`1px dashed ${l}`,paddingTop:"5px",textAlign:d},children:[e.jsxs("p",{style:{margin:"2px 0",display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{style:{fontWeight:"bold"},children:o(t.subtotal)})]}),e.jsxs("p",{style:{margin:"2px 0",display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{style:{fontWeight:"bold"},children:o(t.tax)})]})]})]})),me=p.memo(({order:t,primaryColor:s,headerText:l,borderColor:r,headerBgColor:a,formatItemTotal:i,sellerName:d,showSignature:x,textColor:w})=>e.jsxs("div",{style:{padding:"15mm 10mm",fontSize:"12px",minHeight:"270mm",border:`1px solid ${r}`,boxSizing:"border-box",color:w},children:[e.jsxs("header",{style:{borderBottom:`3px solid ${s}`,paddingBottom:"10px",marginBottom:"20px",display:"flex",justifyContent:"space-between",backgroundColor:a},children:[e.jsx("h1",{style:{fontSize:"24px",margin:0,color:s},children:"INVOICE"}),e.jsxs("div",{style:{textAlign:"right"},children:[e.jsx("p",{style:{margin:"2px 0",fontWeight:"bold"},children:l||"React Solutions Ltd."}),e.jsx("p",{style:{margin:"2px 0",fontSize:"10px"},children:t.customer.address}),e.jsxs("p",{style:{margin:"2px 0",fontSize:"10px"},children:["Invoice ID: ",t.id]})]})]}),e.jsxs("section",{style:{marginBottom:"20px"},children:[e.jsx("h2",{style:{fontSize:"16px",borderBottom:`1px solid ${r}`,paddingBottom:"5px",marginBottom:"10px",color:s},children:"Bill To:"}),e.jsx("p",{style:{margin:"2px 0",fontWeight:"bold"},children:t.customer.name}),e.jsx("p",{style:{margin:"2px 0"},children:t.customer.address}),e.jsx("p",{style:{margin:"2px 0"},children:t.customer.phone})]}),e.jsx(N,{items:t.items,formatItemTotal:i,borderColor:r}),x&&e.jsxs("div",{style:{marginTop:"30px",borderTop:"1px dashed #ccc",paddingTop:"10px",display:"flex",justifyContent:"space-around",fontSize:"10px"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{height:"30px",borderBottom:"1px solid #000",marginBottom:"5px",width:"150px"}}),e.jsx("p",{children:"Customer Signature"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{height:"30px",borderBottom:"1px solid #000",marginBottom:"5px",width:"150px"}}),e.jsxs("p",{children:["Authorized by: ",d]})]})]})]})),he=p.memo(({order:t,primaryColor:s,borderColor:l})=>e.jsxs(e.Fragment,{children:[e.jsxs("header",{style:{borderBottom:`2px solid ${s}`,paddingBottom:"5px",marginBottom:"10px"},children:[e.jsx("h1",{style:{fontSize:"1.6em",margin:"5px 0",color:s},children:"KITCHEN ORDER TICKET"}),e.jsxs("p",{style:{margin:"2px 0"},children:["Order #:"," ",e.jsx("span",{style:{fontWeight:"bold",fontSize:"1.2em"},children:t.id})]}),e.jsxs("p",{style:{margin:"2px 0"},children:["Time: ",new Date().toLocaleTimeString()]})]}),e.jsx(N,{items:t.items,formatItemTotal:()=>"",borderColor:l,hidePrice:!0}),e.jsxs("p",{style:{fontSize:"1.2em",marginTop:"20px",borderTop:`1px solid ${s}`,paddingTop:"5px"},children:[e.jsx("span",{style:{fontWeight:"bold",color:"red"},children:"NOTES:"})," COOK WELL"]})]})),fe=p.memo(({layoutNum:t,order:s,primaryColor:l,borderColor:r,headerBgColor:a,showTaxBreakdown:i,alignStyle:d})=>e.jsxs("div",{style:{padding:"10px",border:`1px dashed ${r}`,textAlign:"center",margin:"10px 0",backgroundColor:a},children:[e.jsx("h3",{style:{margin:"5px 0",color:l},children:`Layout ${t} - Modern POS Style`}),e.jsx("p",{style:{margin:"2px 0",fontSize:"0.8em"},children:`Description for Layout ${t} goes here...`}),e.jsx(N,{items:s.items.slice(0,2),formatItemTotal:x=>o(x.price*x.quantity),borderColor:r}),i&&e.jsx("footer",{style:{borderTop:`1px dashed ${r}`,paddingTop:"5px",textAlign:d},children:e.jsxs("p",{style:{margin:"2px 0",display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{style:{fontWeight:"bold"},children:o(s.subtotal)})]})})]})),be=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i})=>e.jsxs("div",{className:"p-6 space-y-4 font-sans text-gray-800 text-left",children:[e.jsxs("header",{className:`pb-4 border-b-4 ${s.replace("text-","border-")}`,children:[e.jsx("h1",{className:`text-3xl font-extrabold ${s}`,children:r||"Modern Retail Co."}),e.jsxs("div",{className:"text-sm mt-1 flex justify-between",children:[e.jsxs("p",{children:["Order ID: ",e.jsx("span",{className:"font-medium",children:t.id})]}),e.jsxs("p",{children:["Date: ",new Date(t.date).toLocaleDateString()]})]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),i&&e.jsxs("footer",{className:"grid grid-cols-2 gap-4 pt-4 border-t border-solid border-gray-200",children:[e.jsxs("div",{className:"col-span-1 p-2 bg-gray-50 rounded-lg text-sm space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]})]}),e.jsxs("div",{className:`col-span-1 p-3 rounded-lg ${s.replace("text-","bg-")} text-white font-bold flex flex-col items-center justify-center`,children:[e.jsx("p",{className:"text-xs opacity-80",children:"TOTAL DUE"}),e.jsx("p",{className:"text-2xl",children:o(t.total)})]})]}),e.jsx("div",{className:"text-xs pt-4 text-center text-gray-500",children:"Thank you for choosing us! Visit us at example.com"})]}));const ge=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ue=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,l,r)=>r?r.toUpperCase():l.toLowerCase()),se=t=>{const s=ue(t);return s.charAt(0).toUpperCase()+s.slice(1)},ae=(...t)=>t.filter((s,l,r)=>!!s&&s.trim()!==""&&r.indexOf(s)===l).join(" ").trim(),je=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var ye={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const $e=p.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:d,...x},w)=>p.createElement("svg",{ref:w,...ye,width:s,height:s,stroke:t,strokeWidth:r?Number(l)*24/Number(s):l,className:ae("lucide",a),...!i&&!je(x)&&{"aria-hidden":"true"},...x},[...d.map(([E,v])=>p.createElement(E,v)),...Array.isArray(i)?i:[i]]));const ne=(t,s)=>{const l=p.forwardRef(({className:r,...a},i)=>p.createElement($e,{ref:i,iconNode:s,className:ae(`lucide-${ge(se(t))}`,`lucide-${t}`,r),...a}));return l.displayName=se(t),l};const Ne=ne("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);const we=ne("shopping-cart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]),ve=p.memo(({order:t,primaryColor:s,headerText:l,formatItemTotal:r,showTaxBreakdown:a,borderColor:i,alignStyle:d})=>e.jsxs("div",{className:"max-w-md w-full mx-auto p-6 space-y-5 font-mono text-gray-100 bg-gray-900/90 border border-gray-700/50 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-sm transition duration-300 hover:shadow-emerald-900/50",children:[e.jsxs("header",{className:"pb-4 border-b-2 border-gray-700",children:[e.jsxs("h1",{className:`text-2xl font-black text-center tracking-wider ${s} drop-shadow-lg`,children:[e.jsx(we,{className:"inline w-6 h-6 mr-2 mb-1"}),"-- ",l||"SYNTHETIC RECEIPT"," --"]}),e.jsxs("div",{className:"flex justify-between text-xs mt-3 text-gray-400",children:[e.jsxs("span",{className:"flex items-center",children:["ID:"," ",e.jsx("span",{className:"ml-1 font-semibold text-gray-200",children:t.id})]}),e.jsxs("span",{className:"flex items-center",children:[e.jsx(Ne,{className:"inline w-3 h-3 mr-1"}),new Date(t.date).toLocaleDateString()]})]})]}),e.jsx(N,{items:t.items,formatItemTotal:r,borderColor:"border-gray-700"}),a&&e.jsxs("footer",{className:"pt-4 border-t-2 border-gray-700",children:[e.jsxs("div",{className:"space-y-1 text-sm text-gray-300",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium text-gray-100",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium text-gray-100",children:o(t.tax)})]})]}),e.jsxs("div",{className:`flex justify-between mt-3 text-2xl font-extrabold ${s} pt-3 border-t border-gray-700`,children:[e.jsx("span",{children:"TOTAL:"}),e.jsx("span",{children:o(t.total)})]})]}),e.jsx("div",{className:`text-center text-xs pt-3 border-t border-dashed border-gray-700 ${s} uppercase tracking-widest`,children:"*** transaction complete ***"})]})),Te=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i,alignStyle:d})=>e.jsxs("div",{className:"p-6 space-y-4 font-serif text-gray-700 text-left border-2 border-gray-100",children:[e.jsxs("header",{className:"pb-4",children:[e.jsx("h1",{className:`text-3xl font-light ${s} uppercase`,children:r||"Invoice Copy"}),e.jsxs("p",{className:`text-sm mt-1 pb-3 border-b-4 ${s.replace("text-","border-")}`,children:["Order Reference: ",e.jsx("span",{className:"font-semibold",children:t.id})]})]}),i&&e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-200",children:[e.jsx("h2",{className:"text-base font-semibold mb-2 border-b pb-1",children:"Payment Summary"}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between text-sm mt-1",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]}),e.jsxs("div",{className:`flex justify-between text-xl font-bold mt-3 pt-2 border-t-2 ${s.replace("text-","border-")}`,children:[e.jsx("span",{children:"TOTAL DUE:"}),e.jsx("span",{className:s,children:o(t.total)})]})]}),e.jsxs("h2",{className:"text-lg font-semibold pt-2",children:["Order Details (",t.items.length," items)"]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),e.jsxs("footer",{className:"text-sm pt-4 text-center italic text-gray-500",children:["Processed on: ",new Date(t.date).toLocaleString()]})]})),Se=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i,alignStyle:d})=>e.jsxs("div",{className:"p-6 space-y-3 font-sans text-gray-800 text-left",children:[e.jsxs("header",{className:`pb-3 border-b-2 ${s.replace("text-","border-")}`,children:[e.jsx("h1",{className:`text-4xl font-black ${s} text-center`,children:r||"Flash Sale Receipt"}),e.jsxs("p",{className:"mt-1 text-sm text-center",children:["Order #: ",t.id," | ",new Date(t.date).toLocaleDateString()]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),i&&e.jsxs("footer",{className:"pt-3 text-sm",children:[e.jsxs("div",{className:"flex justify-end items-center mt-1",children:[e.jsx("span",{className:"w-1/4 text-right",children:"Subtotal:"}),e.jsx("span",{className:"font-medium w-1/4 text-right",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-end items-center mt-1",children:[e.jsx("span",{className:"w-1/4 text-right",children:"Tax:"}),e.jsx("span",{className:"font-medium w-1/4 text-right",children:o(t.tax)})]}),e.jsxs("div",{className:`flex justify-end items-center mt-3 text-xl font-extrabold pt-2 border-t-4 border-double ${s.replace("text-","border-")} space-x-4`,children:[e.jsx("span",{className:"w-1/4 text-right",children:"TOTAL PAID:"}),e.jsx("span",{className:"w-1/4 text-right",children:o(t.total)})]})]}),e.jsxs("div",{className:"mt-5 p-3 text-center bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800",children:[e.jsx("p",{className:"font-bold text-lg",children:"20% OFF YOUR NEXT ORDER!"}),e.jsx("p",{className:"text-sm",children:"Use code: SAVE20NOW"})]})]})),ke=p.memo(({order:t,primaryColor:s,headerText:l,formatItemTotal:r,showTaxBreakdown:a,borderColor:i,alignStyle:d})=>{const x=t.subtotal>0?(t.tax/t.subtotal*100).toFixed(1):"0.0";return e.jsxs("div",{className:"p-8 space-y-4 font-serif text-gray-900 text-right bg-white border border-gray-300 shadow-md",children:[e.jsxs("header",{className:"pb-4",children:[e.jsx("h1",{className:`text-4xl font-bold ${s}`,children:l||"PURCHASE INVOICE"}),e.jsxs("div",{className:"text-sm mt-1",children:[e.jsxs("p",{className:"font-semibold",children:["ID: ",t.id]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Issued: ",new Date(t.date).toLocaleDateString()]})]})]}),e.jsx(N,{items:t.items,formatItemTotal:r,borderColor:"border-gray-300"}),a&&e.jsxs("footer",{className:"pt-4 text-base",children:[e.jsxs("div",{className:"flex justify-end mt-1 space-x-12",children:[e.jsx("span",{className:"font-normal w-1/4 text-left",children:"Subtotal:"}),e.jsx("span",{className:"font-medium w-1/4",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-end mt-1 space-x-12",children:[e.jsxs("span",{className:"font-normal w-1/4 text-left",children:["Tax (",x,"%):"]}),e.jsx("span",{className:"font-medium w-1/4",children:o(t.tax)})]}),e.jsxs("div",{className:"flex justify-end mt-3 text-2xl font-extrabold pt-3 border-t-8 border-b-2 border-gray-900 space-x-12",children:[e.jsx("span",{className:"w-1/4 text-left",children:"AMOUNT DUE:"}),e.jsx("span",{className:"w-1/4",children:o(t.total)})]})]})]})}),A=(t,s="border")=>t.replace("text-",`${s}-`),J=t=>t.replace("text-","bg-"),Ee=p.memo(({order:t,primaryColor:s,headerText:l,formatItemTotal:r,showTaxBreakdown:a,alignStyle:i})=>{const d=i==="left"?"text-left":i==="right"?"text-right":"text-center";return e.jsxs("div",{className:`p-6 space-y-5 font-sans text-gray-800 ${d}`,children:[e.jsxs("header",{className:`pb-3 ${A(s,"border-b-4")} border-solid`,children:[e.jsx("h1",{className:`text-3xl font-bold ${s} tracking-tight uppercase`,children:l||"Modern Commerce"}),e.jsxs("div",{className:"text-sm mt-1 flex justify-between font-medium text-gray-500",children:[e.jsxs("span",{className:"text-left",children:["Order #: ",t.id]}),e.jsx("span",{className:"text-right",children:new Date(t.date).toLocaleDateString()})]})]}),e.jsx(N,{items:t.items,formatItemTotal:r,borderColor:"border-gray-200"}),e.jsxs("div",{className:`pt-4 border-t border-dashed border-gray-300 text-base flex flex-col items-${i}`,children:[a&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between w-full max-w-xs space-x-4",children:[e.jsx("span",{className:"text-left",children:"Subtotal:"}),e.jsx("span",{className:"font-medium text-right",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between w-full max-w-xs space-x-4 mt-1",children:[e.jsx("span",{className:"text-left",children:"Tax:"}),e.jsx("span",{className:"font-medium text-right",children:o(t.tax)})]})]}),e.jsxs("div",{className:`flex justify-between w-full max-w-xs mt-3 text-2xl font-bold pt-3 ${A(s,"border-t-2")}`,children:[e.jsx("span",{className:"text-left",children:"TOTAL:"}),e.jsx("span",{className:`text-right ${s}`,children:o(t.total)})]})]})]})}),Ae=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i,alignStyle:d})=>{const x=d==="left"?"text-left":d==="right"?"text-right":"text-center";return e.jsxs("div",{className:`p-4 space-y-4 font-sans text-gray-800 ${x}`,children:[e.jsx("div",{className:`inline-block px-6 py-2 text-xl font-bold uppercase rounded-full ${J(s)} text-white shadow-md mb-4`,children:r||"Checkout Receipt"}),e.jsxs("header",{className:"pb-4 space-y-1 border-b border-dashed",children:[e.jsxs("p",{className:"font-semibold text-lg",children:["Transaction ID: ",e.jsxs("span",{className:s,children:["#",t.id]})]}),e.jsxs("p",{className:"text-xs text-gray-500",children:["Date: ",new Date(t.date).toLocaleDateString()]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),i&&e.jsxs("div",{className:`pt-4 border-t border-solid ${l} text-sm flex flex-col items-${d} w-full`,children:[e.jsxs("div",{className:"flex justify-between w-full max-w-xs space-x-8",children:[e.jsx("span",{className:"text-left",children:"Subtotal:"}),e.jsx("span",{className:"font-medium text-right",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between w-full max-w-xs space-x-8 mt-1",children:[e.jsx("span",{className:"text-left",children:"Tax:"}),e.jsx("span",{className:"font-medium text-right",children:o(t.tax)})]})]}),e.jsxs("div",{className:`pt-3 mt-3 text-2xl font-extrabold ${A(s,"border-t-4")} border-double flex justify-between w-full max-w-xs mx-auto`,children:[e.jsx("span",{className:"text-left",children:"AMOUNT:"}),e.jsx("span",{className:`text-right ${s}`,children:o(t.total)})]})]})}),Oe=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i})=>e.jsxs("div",{className:"p-4 space-y-4 font-sans text-gray-800 text-left",children:[e.jsxs("header",{className:"pb-4 border-b border-gray-300",children:[e.jsx("h1",{className:`text-2xl font-extrabold ${s} uppercase mb-2`,children:r||"Purchase Order"}),e.jsxs("div",{className:`grid grid-cols-2 gap-4 text-sm font-medium border-t-2 border-b-2 ${A(s)} py-2`,children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold",children:"Ref:"})," ",t.id]}),e.jsxs("div",{className:"text-right",children:[e.jsx("span",{className:"font-bold",children:"Date:"})," ",new Date(t.date).toLocaleDateString()]})]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),e.jsx("div",{className:`pt-4 border-t-2 ${l} text-base flex justify-end`,children:e.jsxs("div",{className:"w-full max-w-md space-y-2",children:[i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]})]}),e.jsxs("div",{className:`flex justify-between pt-2 mt-2 text-2xl font-bold border-t ${A(s)}`,children:[e.jsx("span",{children:"TOTAL:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})})]})),_e=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i,alignStyle:d})=>e.jsxs("div",{className:`p-4 space-y-4 font-sans text-gray-800 text-${d}`,children:[e.jsxs("header",{className:"pb-4 border-b border-dashed border-gray-400",children:[e.jsx("h1",{className:`text-xl font-bold ${s} uppercase`,children:r||"SALES RECEIPT"}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Invoice: ",t.id]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),e.jsxs("div",{className:`mt-6 p-4 rounded-lg shadow-inner ${J(s).replace("text-","bg-")} bg-opacity-10 border ${A(s)}`,children:[e.jsx("p",{className:"text-sm font-medium text-gray-600 mb-2",children:"SUMMARY"}),i&&e.jsxs("div",{className:"space-y-1 border-b pb-2 mb-2 border-gray-300",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]})]}),e.jsxs("div",{className:"flex justify-between pt-1 text-2xl font-extrabold",children:[e.jsx("span",{children:"AMOUNT DUE:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})]})),Re=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i})=>e.jsxs("div",{className:"p-4 space-y-5 font-sans text-gray-800 text-left",children:[e.jsxs("header",{className:"pb-2 border-b-2 border-dashed border-gray-400",children:[e.jsx("h1",{className:`text-2xl font-extrabold ${s} uppercase`,children:r||"Order Confirmation"}),e.jsxs("div",{className:"text-sm mt-1 flex justify-between",children:[e.jsxs("p",{children:["Customer:"," ",e.jsx("span",{className:"font-semibold",children:t.customer.name})]}),e.jsxs("p",{children:["Ref: ",e.jsx("span",{className:"font-semibold",children:t.id})]})]})]}),e.jsx("div",{className:"space-y-2",children:t.items.map((d,x)=>e.jsxs("div",{className:`py-2 border-b border-dashed ${l}`,children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("span",{className:"text-base font-bold w-1/2",children:d.name}),e.jsxs("span",{className:"text-base font-bold w-1/4 text-right",children:[d.quantity,"x"]}),e.jsx("span",{className:"text-base font-bold w-1/4 text-right",children:a(d)})]}),e.jsxs("p",{className:"text-xs text-gray-500 italic",children:["@ ",o(d.price)," each"]})]},x))}),e.jsxs("div",{className:"pt-2",children:[i&&e.jsxs("div",{className:"text-base space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]})]}),e.jsxs("div",{className:`mt-3 pt-3 flex justify-between text-3xl font-extrabold ${A(s,"border-t-4")}`,children:[e.jsx("span",{children:"FINAL:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})]})),Le=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i})=>e.jsxs("div",{className:"p-4 space-y-5 font-sans text-gray-800 text-left",children:[e.jsxs("header",{className:`py-3 px-4 ${J(s)} text-white rounded-t-lg`,children:[e.jsx("h1",{className:"text-xl font-extrabold",children:r||"Online Order Invoice"}),e.jsxs("p",{className:"text-sm font-light mt-1",children:["Order Date: ",new Date(t.date).toLocaleDateString()]})]}),e.jsxs("div",{className:"p-3 border border-gray-300 rounded-md bg-gray-50 text-sm",children:[e.jsx("p",{className:"font-bold mb-1 border-b border-gray-200 pb-1",children:"Shipping Details"}),e.jsxs("p",{children:["Recipient: ",t.customer.name]}),e.jsxs("p",{children:["Address: ",t.customer.address]}),e.jsxs("p",{className:"font-medium",children:["Tracking ID:"," ",e.jsx("span",{className:s,children:t.id.slice(0,8).toUpperCase()})]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),e.jsxs("div",{className:"pt-2",children:[i&&e.jsxs("div",{className:"text-base space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]})]}),e.jsxs("div",{className:"mt-3 pt-3 flex justify-between text-2xl font-extrabold border-t-2 border-gray-400",children:[e.jsx("span",{children:"TOTAL CHARGED:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})]})),ze=p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i})=>e.jsxs("div",{className:"p-4 space-y-5 font-sans text-gray-800 text-left",children:[e.jsxs("header",{className:"pb-4 border-b border-gray-300",children:[e.jsx("h1",{className:`text-xl font-normal ${s}`,children:r||"Receipt"}),e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Date: ",new Date(t.date).toLocaleDateString()," | Ref: ",t.id]})]}),e.jsx(N,{items:t.items,formatItemTotal:a,borderColor:l}),e.jsxs("div",{className:"pt-2",children:[i&&e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-normal",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-normal",children:o(t.tax)})]})]}),e.jsxs("div",{className:"mt-3 pt-3 flex justify-between text-xl font-bold border-t-2 border-gray-400",children:[e.jsx("span",{children:"Total:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})]})),Ie=p.memo(({order:t,primaryColor:s,headerText:l,formatItemTotal:r,showTaxBreakdown:a})=>{const i="text-amber-500";return e.jsxs("div",{className:"p-4 space-y-5 font-sans text-gray-900 text-center",children:[e.jsxs("header",{className:`py-4 px-4 ${J(s)} text-white shadow-lg rounded-b-xl`,children:[e.jsx("h1",{className:"text-3xl font-black uppercase tracking-wider",children:l||"Tropical Sales"}),e.jsxs("p",{className:`text-sm mt-1 font-bold ${i.replace("text-","text-")}`,children:["Order ID: ",t.id]})]}),e.jsx("div",{className:"space-y-3 pt-4 border-t-4 border-double border-gray-300",children:t.items.map((d,x)=>e.jsxs("div",{className:"flex justify-between items-center bg-white p-2 rounded-md shadow-sm border border-gray-200",children:[e.jsxs("span",{className:"text-base font-bold text-left w-1/2",children:[d.quantity,"x ",d.name]}),e.jsx("span",{className:`text-lg font-extrabold w-1/2 text-right ${s}`,children:r(d)})]},x))}),e.jsxs("div",{className:"pt-2",children:[a&&e.jsxs("div",{className:`text-base space-y-1 border-t pt-2 border-dashed ${i.replace("text-","border-")}`,children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-medium",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-medium",children:o(t.tax)})]})]}),e.jsxs("div",{className:`mt-3 pt-3 flex justify-between text-3xl font-black ${A(s,"border-t-8")} border-double`,children:[e.jsx("span",{children:"TOTAL:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})]})});p.memo(({order:t,primaryColor:s,borderColor:l,headerText:r,formatItemTotal:a,showTaxBreakdown:i})=>e.jsxs("div",{className:"p-2 space-y-2 font-mono text-gray-900 text-center text-sm",children:[e.jsxs("header",{className:"pb-2 border-b-2 border-dashed border-gray-400",children:[e.jsx("h1",{className:`text-lg font-extrabold ${s} uppercase`,children:r||"Quick Receipt"}),e.jsxs("p",{className:"text-xs mt-1",children:["TID: ",t.id," | ",new Date(t.date).toLocaleDateString()]})]}),e.jsx("div",{className:"space-y-1",children:t.items.map((d,x)=>e.jsxs("div",{className:`flex justify-between border-b border-dashed ${l}`,children:[e.jsxs("span",{className:"w-1/2 text-left",children:[d.quantity,"x ",d.name]}),e.jsx("span",{className:"w-1/2 text-right font-medium",children:a(d)})]},x))}),e.jsxs("div",{className:"pt-2",children:[i&&e.jsxs("div",{className:"text-xs space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Subtotal:"}),e.jsx("span",{className:"font-normal",children:o(t.subtotal)})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{children:"Tax:"}),e.jsx("span",{className:"font-normal",children:o(t.tax)})]})]}),e.jsxs("div",{className:`mt-2 pt-2 flex justify-between text-base font-bold border-t border-solid ${A(s)}`,children:[e.jsx("span",{children:"TOTAL PAID:"}),e.jsx("span",{className:s,children:o(t.total)})]})]})]}));const Ce=({order:t,layout:s=1,alignment:l="center",primaryColor:r="#007BFF",textColor:a="#000000",borderColor:i="#CCCCCC",headerBgColor:d="transparent",baseFontSize:x=9,paperSize:w="58mm",fontFamily:E="Consolas, monospace",logoUrl:v="",headerText:z="",footerText:f="",sellerName:$="",showSignature:g=!1,showTaxBreakdown:O=!1})=>{const S=l==="start"?"left":l==="end"?"right":"center",I=G["58mm"]||G["58mm"],D=p.useCallback(_=>o(_.price*_.quantity),[]),h={order:t,alignStyle:S,primaryColor:r,borderColor:i,headerBgColor:d,formatItemTotal:D,headerText:z,footerText:f,sellerName:$,showSignature:g,textColor:a,layout:s,alignment:l,baseFontSize:x,paperSize:w,fontFamily:E,logoUrl:v,showTaxBreakdown:O,customCss:""};let m;switch(s){case 1:m=e.jsx(pe,{...h});break;case 2:m=e.jsx(be,{...h});break;case 3:m=e.jsx(ve,{...h});break;case 4:m=e.jsx(me,{...h});break;case 5:m=e.jsx(Te,{...h});break;case 6:m=e.jsx(he,{...h});break;case 7:m=e.jsx(Se,{...h});break;case 8:m=e.jsx(ke,{...h});break;case 9:m=e.jsx(Ee,{...h});break;case 10:m=e.jsx(Ae,{...h});break;case 11:m=e.jsx(Oe,{...h});break;case 12:m=e.jsx(_e,{...h});break;case 13:m=e.jsx(Re,{...h});break;case 14:m=e.jsx(Le,{...h});break;case 15:m=e.jsx(ze,{...h});break;case 16:m=e.jsx(Ie,{...h});break;default:m=e.jsx(fe,{layoutNum:s,...h});break}const T=s===4?m:e.jsxs("div",{style:{...I,fontFamily:E,fontSize:`${x}px`,color:a,lineHeight:"1.2",padding:"5px",margin:"0 auto",textAlign:S,boxSizing:"content-box"},children:[v&&e.jsx("img",{src:v,alt:"Logo",style:{maxWidth:"100%",maxHeight:"50px",margin:"5px auto",display:"block"},onError:_=>_.currentTarget.style.display="none"}),m,s!==4&&s!==6&&e.jsxs("h2",{style:{fontSize:"1.222em",margin:"5px 0",display:"flex",justifyContent:"space-between",borderTop:`1px solid ${r}`,borderBottom:`1px solid ${r}`,padding:"4px 0",color:r},children:[e.jsx("span",{children:"GRAND TOTAL:"}),e.jsx("span",{style:{fontWeight:"900"},children:o(t.total)})]}),s!==4&&e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{marginTop:"10px"},children:f||"Thank you for shopping!"}),g&&e.jsxs("div",{style:{marginTop:"20px",borderTop:"1px dashed #ccc",paddingTop:"10px",textAlign:"center",fontSize:"0.8em"},children:[e.jsx("div",{style:{height:"15px",borderBottom:"1px solid #000",marginBottom:"5px",width:"80%",margin:"0 auto"}}),e.jsxs("p",{children:["Authorized: ",$||"N/A"]})]}),e.jsx("p",{style:{fontSize:"0.777em",margin:"5px 0"},children:new Date().toLocaleString()})]})]});return e.jsx("div",{id:"receipt-content-target-wrapper",style:{minWidth:"58mm",margin:"0 auto"},children:T})},o=(t,s)=>{const l=t/100,r=s?.currency??"USD",a=s?.locale??"en-US",i=s?.currencyDisplay??"symbol";try{return new Intl.NumberFormat(a,{style:"currency",currency:r,currencyDisplay:i,minimumFractionDigits:2,maximumFractionDigits:2}).format(l)}catch{return`${r} ${l.toFixed(2)}`}},Pe=p.memo(Ce),De=(t,s,l)=>{const r=l?"":'<th style="text-align: right; padding: 3px 0; width: 25%;">TOTAL</th>',a=t.map(i=>`
    <tr>
        <td style="text-align: left; padding: 2px 0;">${i.quantity}</td>
        <td style="text-align: left; padding: 2px 0;">${i.name}</td>
        ${l?"":`<td style="text-align: right; padding: 2px 0;">${o(i.price*i.quantity)}</td>`}
    </tr>
  `).join("");return`
    <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: inherit; color: inherit;">
        <thead>
            <tr style="border-top: 1px dashed ${s}; border-bottom: 1px dashed ${s};">
                <th style="text-align: left; padding: 3px 0; width: 15%;">QTY</th>
                <th style="text-align: left; padding: 3px 0; width: ${l?"85%":"60%"};">ITEM</th>
                ${r}
            </tr>
        </thead>
        <tbody>${a}</tbody>
    </table>
  `},Fe=(t,s,l)=>{const{layout:r,primaryColor:a,borderColor:i,headerText:d,headerBgColor:x,sellerName:w,showSignature:E,showTaxBreakdown:v}=s,z=r===6,f=De(t.items,i,z),$=(O,S)=>`
    <h1 style="font-size: 1.4em; margin: 5px 0; color: ${S}; text-transform: uppercase;">${O||"The Store Name"}</h1>
  `,g=v?`
    <footer style="border-top: 1px dashed ${i}; padding-top: 5px; text-align: ${l};">
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Subtotal:</span><span style="font-weight: bold;">${o(t.subtotal)}</span></p>
      <p style="margin: 2px 0; display: flex; justify-content: space-between;"><span>Tax:</span><span style="font-weight: bold;">${o(t.tax)}</span></p>
    </footer>
  `:"";switch(r){case 1:case 2:case 3:const O=r===2?t.customFields.map(y=>`<p style="font-size: 0.9em;">${y.key}: ${y.value}</p>`).join(""):"";return`
        <header style="background-color: ${x}; padding: 5px 0;">
          ${$(d,a)}
          <p style="margin: 2px 0;">Order #: ${t.id}</p>
          <p style="margin: 5px 0 10px 0; border-bottom: 1px dashed ${i}; padding-bottom: 5px;">Date: ${new Date(t.date).toLocaleDateString()}</p>
          ${O}
        </header>
        ${f}
        ${g}
      `;case 4:{const y=`
        <section style="margin-bottom: 20px;">
          <h2 style="font-size: 16px; border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 10px; color: ${a};">Bill To:</h2>
          <p style="margin: 2px 0; font-weight: bold;">${t.customer.name}</p>
          <p style="margin: 2px 0;">${t.customer.address}</p>
        </section>
      `,k=`
        <div style="margin-top: 50px; text-align: right; border-top: 1px solid ${i}; padding-top: 10px;">
          <p style="margin: 2px 0;">Subtotal: ${o(t.subtotal)}</p>
          <p style="margin: 2px 0;">Tax: ${o(t.tax)}</p>
          <h3 style="margin: 5px 0; color: ${a};">GRAND TOTAL: ${o(t.total)}</h3>
        </div>
      `,P=E?`
        <div style="margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 10px; display: flex; justify-content: space-around; font-size: 10px;">
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Customer Signature</p>
          </div>
          <div style="text-align: center;">
            <div style="height: 30px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 150px;"></div>
            <p>Authorized by: ${w||"N/A"}</p>
          </div>
        </div>
      `:"";return`
        <div style="padding: 15mm 10mm; font-size: 12px; min-height: 270mm; box-sizing: border-box; text-align: left;">
          <header style="border-bottom: 3px solid ${a}; padding-bottom: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; background-color: ${x}; color: ${a};">
            <h1 style="font-size: 24px; margin: 0;">INVOICE</h1>
            <div style="text-align: right; color: #000;">
                <p style="margin: 2px 0; font-weight: bold;">${d||"React Solutions Ltd."}</p>
                <p style="margin: 2px 0; font-size: 10px;">${t.customer.address}</p>
                <p style="margin: 2px 0; font-size: 10px;">Invoice ID: ${t.id}</p>
            </div>
          </header>
          ${y}
          ${f}
          ${k}
          ${P}
        </div>
      `}case 5:const S=`
        <div style="border: 2px solid ${a}; padding: 10px; margin: 10px 0; text-align: ${l};">
            <h2 style="margin: 0 0 5px 0; font-size: 1.1em; color: ${a};">ORDER SUMMARY</h2>
            ${g}
        </div>
      `,I=`
        <h2 
          style="font-size: 1.6em; margin: 10px 0; padding: 5px 0; border-top: 3px double ${a}; text-align: ${l}; color: ${a}; font-weight: 900;"
        >
            TOTAL: ${o(t.total)}
        </h2>
      `;return`
        <header style="padding: 10px 0; background-color: ${x};">
          ${$(d,a)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction ID: ${t.id}</p>
          <p style="margin: 2px 0; font-size: 0.9em;">Customer: ${t.customer.name}</p>
        </header>
        ${S}
        ${f}
        ${I}
      `;case 6:{const y=t.items.map(k=>`
        <tr style="border-bottom: 1px dashed ${i};">
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em; width: 10%;">${k.quantity}X</td>
          <td style="text-align: left; padding: 5px 0; font-weight: bold; font-size: 1.2em;">${k.name}</td>
        </tr>
      `).join("");return`
        <header style="border-bottom: 2px solid ${a}; padding-bottom: 5px; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 5px 0; color: ${a};">KITCHEN ORDER TICKET</h1>
          <p style="margin: 2px 0;">Order #: <span style="font-weight: bold; font-size: 1.2em;">${t.id}</span></p>
        </header>
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; font-size: 1em;">
          <tbody>${y}</tbody>
        </table>
        <p style="font-size: 1.2em; margin-top: 20px; border-top: 1px solid ${a}; padding-top: 5px;">
          <span style="font-weight: bold; color: red;">NOTES:</span> COOK WELL
        </p>
      `}case 7:const D=`
        <div style="background-color: #F0FFF0; border: 1px solid ${a}; padding: 8px; margin-bottom: 10px;">
            <h3 style="margin: 0; font-size: 1.1em; color: green;">🎉 SPECIAL OFFER! 🎉</h3>
            <p style="margin: 2px 0; font-size: 0.9em;">You saved ${o(t.tax/2)} today!</p>
        </div>
      `;return`
        <header style="padding: 5px 0; border-bottom: 1px solid ${i}; margin-bottom: 10px;">
            ${$(d,a)}
            <p style="margin: 2px 0; font-size: 0.9em;">Date: ${new Date(t.date).toLocaleDateString()}</p>
        </header>
        ${D}
        ${f}
        ${g}
        <h2 style="font-size: 1.5em; margin: 10px 0; color: ${a};">TOTAL: ${o(t.total)}</h2>
        <p style="font-size: 0.8em; margin-top: 10px;">Visit us online at example.com!</p>
      `;case 8:const h=`
        <div style="display: flex; justify-content: space-between; margin: 10px 0; font-size: 0.9em; border-bottom: 1px dashed ${i}; padding-bottom: 5px;">
            <div style="text-align: left;">
                <p style="margin: 2px 0;">Customer: ${t.customer.name}</p>
                <p style="margin: 2px 0;">Date: ${new Date(t.date).toLocaleDateString()}</p>
            </div>
            <div style="text-align: right; font-weight: bold;">
                <p style="margin: 2px 0; color: ${a};">Order Ref: ${t.id}</p>
            </div>
        </div>
      `;return`
        <header style="background-color: ${x}; padding: 10px 5px; border-bottom: 3px solid ${a};">
          <p style="margin: 0; font-size: 0.9em; text-transform: uppercase; color: ${a};">${d||"INVOICE"}</p>
          <h1 style="font-size: 1.8em; margin: 5px 0 0 0; color: #000;">${w||"Finance Tracker"}</h1>
        </header>
        ${h}
        ${f}
        ${g}
      `;case 9:const m=`
        <h2 style="font-size: 1.5em; margin: 10px 0; padding-bottom: 5px; border-bottom: 3px double ${a}; color: ${a};">
            GRAND TOTAL: ${o(t.total)}
        </h2>
      `;return`
        <header style="padding: 10px 0; border-bottom: 3px solid ${a}; margin-bottom: 15px;">
            ${$(d,a)}
            <p style="margin: 2px 0; font-size: 0.9em;">Ref: ${t.id}</p>
        </header>
        <section style="margin-bottom: 15px;">
            <h3 style="font-size: 1em; border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 5px;">ITEMS</h3>
            ${f}
        </section>
        <section style="margin-top: 15px; border-top: 1px solid ${i}; padding-top: 5px;">
            ${g}
        </section>
        ${m}
      `;case 10:return`
        ${`
        <div style="padding: 10px; background-color: ${a}; border-radius: 10px 10px 0 0; text-align: ${l};">
          <p style="margin: 0; font-size: 0.8em; color: #fff;">TICKET NUMBER:</p>
          <h1 style="font-size: 1.6em; margin: 5px 0 0 0; color: #fff;">#${t.id}</h1>
        </div>
      `}
        <header style="padding: 10px 0; border-bottom: 2px solid ${i}; margin-bottom: 10px; text-align: ${l};">
          ${$(d,a)}
          <p style="margin: 2px 0;">Date: ${new Date(t.date).toLocaleDateString()}</p>
        </header>
        ${f}
        ${g}
      `;case 11:return`
        ${`
        <header style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid ${a}; margin-bottom: 10px;">
            <div style="text-align: left;">
                <h1 style="font-size: 1.2em; margin: 0; color: ${a};">${d||"The Shop"}</h1>
                <p style="margin: 2px 0; font-size: 0.8em;">Receipt</p>
            </div>
            <div style="text-align: right;">
                <p style="margin: 2px 0; font-weight: bold;">Order: ${t.id}</p>
                <p style="margin: 2px 0; font-size: 0.8em;">${new Date(t.date).toLocaleTimeString()}</p>
            </div>
        </header>
      `}
        ${f}
        ${g}
      `;case 12:const H=`
        <div style="border: 1px solid ${a}; padding: 8px; margin: 10px 0; background-color: ${x};">
            ${g}
        </div>
        <h2 style="font-size: 1.5em; margin: 5px 0; color: ${a}; text-align: ${l};">TOTAL: ${o(t.total)}</h2>
      `;return`
        <header style="padding: 5px 0; margin-bottom: 10px; border-bottom: 1px dashed ${i};">
          ${$(d,a)}
          <p style="margin: 2px 0; font-size: 0.9em;">Transaction: ${t.id}</p>
        </header>
        ${f}
        ${H}
      `;case 13:const U=`
        <div style="margin-top: 10px; padding: 5px 0; border-top: 1px solid ${i}; text-align: ${l};">
          <p style="font-weight: bold; font-size: 1.1em; color: ${a};">Total Payable:</p>
          <h2 style="font-size: 2em; margin: 2px 0; color: ${a};">${o(t.total)}</h2>
        </div>
      `;return`
        <header style="padding: 10px 0; border-bottom: 5px double ${a}; margin-bottom: 10px;">
          <h1 style="font-size: 1.6em; margin: 0; color: ${a};">${d||"Item Focus Receipt"}</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.8em;">Order: ${t.id} | Date: ${new Date(t.date).toLocaleDateString()}</p>
        </header>
        <p style="margin: 5px 0; font-weight: bold; text-align: left;">Items Purchased:</p>
        ${f}
        ${g}
        ${U}
      `;case 14:const C=`
        <section style="margin-bottom: 15px; border: 1px dashed ${i}; padding: 8px; text-align: left;">
            <p style="margin: 2px 0; font-weight: bold;">Shipping To:</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${t.customer.name}</p>
            <p style="margin: 2px 0; font-size: 0.9em;">${t.customer.address}</p>
            <p style="margin: 2px 0; font-size: 0.9em;">Tracking ID: ${t.id.slice(0,8).toUpperCase()}</p>
        </section>
      `;return`
        <header style="padding: 10px 0; background-color: ${a}; color: #fff; margin-bottom: 15px; text-align: ${l};">
          <h1 style="font-size: 1.5em; margin: 0;">${d||"Online Order Receipt"}</h1>
          <p style="margin: 2px 0; font-size: 0.9em;">Order placed: ${new Date(t.date).toLocaleDateString()}</p>
        </header>
        ${C}
        ${f}
        ${g}
      `;case 15:const F=`
        <header style="padding: 10px 0; margin-bottom: 15px; text-align: ${l};">
          <h1 style="font-size: 1.2em; margin: 0; text-transform: none;">${d||"Receipt"}</h1>
          <p style="margin: 5px 0; border-top: 1px dashed ${i}; padding-top: 5px; font-size: 0.9em;">
            TID: ${t.id} | ${new Date(t.date).toLocaleDateString()}
          </p>
        </header>
      `,Y=`
        <h2 style="font-size: 1.4em; margin: 5px 0; border-top: 1px dashed ${i}; padding-top: 5px; text-align: ${l};">
            Total: ${o(t.total)}
        </h2>
      `;return`
        ${F}
        ${f}
        <section style="margin-top: 10px; border-top: 1px dashed ${i}; padding-top: 5px;">
            ${g}
        </section>
        ${Y}
      `;case 16:{const y="#FF9800",k=`
        <header style="padding: 15px 0; background-color: ${a}; color: #fff; border-bottom: 3px solid ${y}; text-align: ${l};">
          <h1 style="font-size: 1.6em; margin: 0; text-transform: uppercase; letter-spacing: 2px;">${d||"TROPICAL SALES"}</h1>
          <p style="margin: 5px 0 0 0; font-size: 0.9em; font-weight: bold;">Order: ${t.id}</p>
        </header>
        <div style="background-color: ${y}20; padding: 5px; margin: 10px 0; text-align: ${l};">
            <p style="margin: 0; font-size: 0.9em; color: ${y}; font-weight: bold;">Thank You, ${t.customer.name}!</p>
        </div>
      `,P=`
        <div style="margin-top: 10px; padding: 8px; background-color: ${y}; color: #fff;">
            <h2 style="font-size: 1.8em; margin: 0; display: flex; justify-content: space-between;">
                <span>GRAND TOTAL</span>
                <span>${o(t.total)}</span>
            </h2>
        </div>
      `;return`
        ${k}
        ${f}
        ${g}
        ${P}
      `}default:return`
        <header style="border-bottom: 1px solid ${i}; padding-bottom: 5px; margin-bottom: 10px; background-color: ${x}; text-align: ${l};">
          <h1 style="font-size: 1.4em; margin: 5px 0; color: ${a};">Layout ${r} - Custom Type</h1>
          <p style="margin: 2px 0;">(Fallback: No specific HTML structure defined.)</p>
        </header>
        ${f}
        ${g}
      `}},Be=(t,s)=>{const{layout:l,alignment:r,primaryColor:a,textColor:i,borderColor:d,baseFontSize:x,paperSize:w,fontFamily:E,logoUrl:v,footerText:z,sellerName:f,showSignature:$,customCss:g,currency:O,locale:S,currencyDisplay:I}=s;return{printReceipt:p.useCallback(()=>{if(!t||!t.items.length){console.error("Cannot print: Order data is missing or empty.");return}const h=r==="start"?"left":r==="end"?"right":"center",m=G["58mm"]||G["58mm"],T=w==="a4"||w==="letter",_=window.screen.width,H=window.screen.height,U=Math.max(700,Math.floor(_*.5)),C=Math.max(600,Math.floor(H*.7)),F=Fe(t,s,h),Y=v&&!T?`<img src="${v}" alt="Logo" style="max-width: 100%; max-height: 50px; margin: 5px auto; display: block;" onerror="this.style.display='none';">`:"",y=!T&&l!==6?`
        <!-- Consistent Total -->
        <h2 class="grand-total-style">
            <span>GRAND TOTAL:</span>
        </h2<span style="font-weight: 900;">${o(t.total,{currency:O,locale:S,currencyDisplay:I})}</span>>
    `:"",k=T?"":`
      <p style="margin-top: 10px;">${z||"Thank you for shopping!"}</p>
      ${$?`
        <div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 10px; text-align: center; font-size: 0.8em;">
          <div style="height: 15px; border-bottom: 1px solid #000; margin-bottom: 5px; width: 80%; margin: 0 auto;"></div>
          <p>Authorized: ${f||"N/A"}</p>
        </div>
      `:""}
      <p style="font-size: 0.777em; margin: 5px 0;">${new Date().toLocaleString()}</p>
    `,P=T?F:`
        <div id="receipt-content-target">
            ${Y}
            ${F}
            ${y}
            ${k}
        </div>
    `,q=`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Receipt Print</title>
          <style>
              @page {
                size: ${T?w:"auto"};
                margin: ${T?"15mm":"0"};
              }
              body {
                margin: 0;
                padding: 0;
                font-family: ${E};
                color: ${i}; /* Global text color */
              }
              #receipt-content-target {
                  width: ${m.width};
                  max-width: ${m.width}; /* Crucial fix for big window stretching on POS sizes */
                  font-size: ${x}px;
                  line-height: 1.2;
                  padding: 5px;
                  margin: 0 auto;
                  text-align: ${h};
                  box-sizing: content-box;
              }
              /* Ensure A4/Letter size uses 100% width and default document margins */
              ${T?`
                #receipt-content-target {
                    width: 100%;
                    max-width: 100%;
                    padding: 0;
                    margin: 0;
                    text-align: left; /* Default for documents */
                }
              `:""}

              table { width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 10px; }
              th, td { padding: 2px 0; }

              /* Apply dynamic color to the Grand Total section */
              .grand-total-style {
                font-size: 1.222em;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
                border-top: 1px solid ${a};
                border-bottom: 1px solid ${a};
                padding: 4px 0;
                color: ${a};
              }

              @media print {
                  html, body { height: auto; overflow: hidden; }
              }

              /* --- Custom CSS Injection --- */
              ${g}
          </style>
      </head>
      <body>
        ${P}
      </body>
      </html>
    `,R=window.open("","_blank",`height=${C},width=${U}`);R?(R.document.write(q),R.document.close(),R.onload=()=>{R.print(),T||setTimeout(()=>R.close(),1e3)}):console.warn("Could not open print window. Check pop-up blocker settings.")},[t,s]),ReceiptContent:Pe}},Me={"58mm":{width:"58mm",name:"POS (58mm)"},"80mm":{width:"80mm",name:"POS (80mm)"},"100mm":{width:"100mm",name:"Wide POS (100mm)"},a4:{width:"210mm",name:"Standard (A4)"},letter:{width:"216mm",name:"Letter (8.5in)"}};L.PAPER_SIZES=Me,L.useReceiptPrint=Be,Object.defineProperty(L,Symbol.toStringTag,{value:"Module"})}));
