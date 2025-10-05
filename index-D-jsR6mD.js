(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();var za={exports:{}},jl={},Ma={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),hd=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),jd=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),xs=Symbol.iterator;function Cd(e){return e===null||typeof e!="object"?null:(e=xs&&e[xs]||e["@@iterator"],typeof e=="function"?e:null)}var Da={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fa=Object.assign,Oa={};function gn(e,t,n){this.props=e,this.context=t,this.refs=Oa,this.updater=n||Da}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ia(){}Ia.prototype=gn.prototype;function gi(e,t,n){this.props=e,this.context=t,this.refs=Oa,this.updater=n||Da}var xi=gi.prototype=new Ia;xi.constructor=gi;Fa(xi,gn.prototype);xi.isPureReactComponent=!0;var ys=Array.isArray,$a=Object.prototype.hasOwnProperty,yi={current:null},Ua={key:!0,ref:!0,__self:!0,__source:!0};function Aa(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)$a.call(t,r)&&!Ua.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:ur,type:e,key:o,ref:i,props:l,_owner:yi.current}}function Ed(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Pd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vs=/\/+/g;function Ql(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pd(""+e.key):t.toString(36)}function Or(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ur:case hd:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Ql(i,0):r,ys(l)?(n="",e!=null&&(n=e.replace(vs,"$&/")+"/"),Or(l,t,n,"",function(c){return c})):l!=null&&(vi(l)&&(l=Ed(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(vs,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",ys(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+Ql(o,a);i+=Or(o,t,n,u,l)}else if(u=Cd(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+Ql(o,a++),i+=Or(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function vr(e,t,n){if(e==null)return e;var r=[],l=0;return Or(e,r,"","",function(o){return t.call(n,o,l++)}),r}function bd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Ir={transition:null},_d={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:yi};function Ba(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=gn;z.Fragment=gd;z.Profiler=yd;z.PureComponent=gi;z.StrictMode=xd;z.Suspense=Nd;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_d;z.act=Ba;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fa({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=yi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)$a.call(t,u)&&!Ua.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ur,type:e.type,key:l,ref:o,props:r,_owner:i}};z.createContext=function(e){return e={$$typeof:wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:vd,_context:e},e.Consumer=e};z.createElement=Aa;z.createFactory=function(e){var t=Aa.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:kd,render:e}};z.isValidElement=vi;z.lazy=function(e){return{$$typeof:Sd,_payload:{_status:-1,_result:e},_init:bd}};z.memo=function(e,t){return{$$typeof:jd,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};z.unstable_act=Ba;z.useCallback=function(e,t){return ce.current.useCallback(e,t)};z.useContext=function(e){return ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};z.useEffect=function(e,t){return ce.current.useEffect(e,t)};z.useId=function(){return ce.current.useId()};z.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return ce.current.useMemo(e,t)};z.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};z.useRef=function(e){return ce.current.useRef(e)};z.useState=function(e){return ce.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return ce.current.useTransition()};z.version="18.3.1";Ma.exports=z;var x=Ma.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=x,Ld=Symbol.for("react.element"),Td=Symbol.for("react.fragment"),zd=Object.prototype.hasOwnProperty,Md=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dd={key:!0,ref:!0,__self:!0,__source:!0};function Ha(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)zd.call(t,r)&&!Dd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Ld,type:e,key:o,ref:i,props:l,_owner:Md.current}}jl.Fragment=Td;jl.jsx=Ha;jl.jsxs=Ha;za.exports=jl;var s=za.exports,Va={exports:{}},Ne={},Wa={exports:{}},Qa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,L){var T=E.length;E.push(L);e:for(;0<T;){var Y=T-1>>>1,J=E[Y];if(0<l(J,L))E[Y]=L,E[T]=J,T=Y;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var L=E[0],T=E.pop();if(T!==L){E[0]=T;e:for(var Y=0,J=E.length,xr=J>>>1;Y<xr;){var St=2*(Y+1)-1,Wl=E[St],Ct=St+1,yr=E[Ct];if(0>l(Wl,T))Ct<J&&0>l(yr,Wl)?(E[Y]=yr,E[Ct]=T,Y=Ct):(E[Y]=Wl,E[St]=T,Y=St);else if(Ct<J&&0>l(yr,T))E[Y]=yr,E[Ct]=T,Y=Ct;else break e}}return L}function l(E,L){var T=E.sortIndex-L.sortIndex;return T!==0?T:E.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],p=1,g=null,h=3,w=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=E)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function k(E){if(v=!1,m(E),!y)if(n(u)!==null)y=!0,Hl(j);else{var L=n(c);L!==null&&Vl(k,L.startTime-E)}}function j(E,L){y=!1,v&&(v=!1,f(_),_=-1),w=!0;var T=h;try{for(m(L),g=n(u);g!==null&&(!(g.expirationTime>L)||E&&!fe());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,h=g.priorityLevel;var J=Y(g.expirationTime<=L);L=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(u)&&r(u),m(L)}else r(u);g=n(u)}if(g!==null)var xr=!0;else{var St=n(c);St!==null&&Vl(k,St.startTime-L),xr=!1}return xr}finally{g=null,h=T,w=!1}}var b=!1,P=null,_=-1,M=5,R=-1;function fe(){return!(e.unstable_now()-R<M)}function kn(){if(P!==null){var E=e.unstable_now();R=E;var L=!0;try{L=P(!0,E)}finally{L?Nn():(b=!1,P=null)}}else b=!1}var Nn;if(typeof d=="function")Nn=function(){d(kn)};else if(typeof MessageChannel<"u"){var gs=new MessageChannel,pd=gs.port2;gs.port1.onmessage=kn,Nn=function(){pd.postMessage(null)}}else Nn=function(){C(kn,0)};function Hl(E){P=E,b||(b=!0,Nn())}function Vl(E,L){_=C(function(){E(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Hl(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var T=h;h=L;try{return E()}finally{h=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var T=h;h=E;try{return L()}finally{h=T}},e.unstable_scheduleCallback=function(E,L,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,E){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=T+J,E={id:p++,callback:L,priorityLevel:E,startTime:T,expirationTime:J,sortIndex:-1},T>Y?(E.sortIndex=T,t(c,E),n(u)===null&&E===n(c)&&(v?(f(_),_=-1):v=!0,Vl(k,T-Y))):(E.sortIndex=J,t(u,E),y||w||(y=!0,Hl(j))),E},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(E){var L=h;return function(){var T=h;h=L;try{return E.apply(this,arguments)}finally{h=T}}}})(Qa);Wa.exports=Qa;var Fd=Wa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=x,ke=Fd;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ya=new Set,Wn={};function Ut(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Wn[e]=t,e=0;e<t.length;e++)Ya.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ko=Object.prototype.hasOwnProperty,Id=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ws={},ks={};function $d(e){return ko.call(ks,e)?!0:ko.call(ws,e)?!1:Id.test(e)?ks[e]=!0:(ws[e]=!0,!1)}function Ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ad(e,t,n,r){if(t===null||typeof t>"u"||Ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var wi=/[\-:]([a-z])/g;function ki(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wi,ki);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wi,ki);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wi,ki);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ni(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ad(t,n,l,r)&&(n=null),r||l===null?$d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tt=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wr=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Vt=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),No=Symbol.for("react.profiler"),Ka=Symbol.for("react.provider"),Ga=Symbol.for("react.context"),Si=Symbol.for("react.forward_ref"),jo=Symbol.for("react.suspense"),So=Symbol.for("react.suspense_list"),Ci=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),Xa=Symbol.for("react.offscreen"),Ns=Symbol.iterator;function jn(e){return e===null||typeof e!="object"?null:(e=Ns&&e[Ns]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Yl;function Tn(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Kl=!1;function Gl(e,t){if(!e||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,a=o.length-1;1<=i&&0<=a&&l[i]!==o[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==o[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==o[a]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function Bd(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Gl(e.type,!1),e;case 11:return e=Gl(e.type.render,!1),e;case 1:return e=Gl(e.type,!0),e;default:return""}}function Co(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vt:return"Fragment";case Ht:return"Portal";case No:return"Profiler";case ji:return"StrictMode";case jo:return"Suspense";case So:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ga:return(e.displayName||"Context")+".Consumer";case Ka:return(e._context.displayName||"Context")+".Provider";case Si:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ci:return t=e.displayName||null,t!==null?t:Co(e.type)||"Memo";case lt:t=e._payload,e=e._init;try{return Co(e(t))}catch{}}return null}function Hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Co(t);case 8:return t===ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Za(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vd(e){var t=Za(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){e._valueTracker||(e._valueTracker=Vd(e))}function Ja(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Za(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function js(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qa(e,t){t=t.checked,t!=null&&Ni(e,"checked",t,!1)}function Po(e,t){qa(e,t);var n=yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?bo(e,t.type,n):t.hasOwnProperty("defaultValue")&&bo(e,t.type,yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ss(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function bo(e,t,n){(t!=="number"||Jr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function _o(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(zn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yt(n)}}function eu(e,t){var n=yt(t.value),r=yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Es(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fn[t]=Fn[e]})});function ru(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+t).trim():t+"px"}function lu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ru(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Qd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(e,t){if(t){if(Qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function To(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zo=null;function Ei(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mo=null,rn=null,ln=null;function Ps(e){if(e=fr(e)){if(typeof Mo!="function")throw Error(N(280));var t=e.stateNode;t&&(t=bl(t),Mo(e.stateNode,e.type,t))}}function ou(e){rn?ln?ln.push(e):ln=[e]:rn=e}function iu(){if(rn){var e=rn,t=ln;if(ln=rn=null,Ps(e),t)for(e=0;e<t.length;e++)Ps(t[e])}}function su(e,t){return e(t)}function au(){}var Xl=!1;function uu(e,t,n){if(Xl)return e(t,n);Xl=!0;try{return su(e,t,n)}finally{Xl=!1,(rn!==null||ln!==null)&&(au(),iu())}}function Yn(e,t){var n=e.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Do=!1;if(Xe)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Do=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Do=!1}function Yd(e,t,n,r,l,o,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var On=!1,qr=null,el=!1,Fo=null,Kd={onError:function(e){On=!0,qr=e}};function Gd(e,t,n,r,l,o,i,a,u){On=!1,qr=null,Yd.apply(Kd,arguments)}function Xd(e,t,n,r,l,o,i,a,u){if(Gd.apply(this,arguments),On){if(On){var c=qr;On=!1,qr=null}else throw Error(N(198));el||(el=!0,Fo=c)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bs(e){if(At(e)!==e)throw Error(N(188))}function Zd(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return bs(l),e;if(o===r)return bs(l),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i){for(a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function du(e){return e=Zd(e),e!==null?fu(e):null}function fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=fu(e);if(t!==null)return t;e=e.sibling}return null}var mu=ke.unstable_scheduleCallback,_s=ke.unstable_cancelCallback,Jd=ke.unstable_shouldYield,qd=ke.unstable_requestPaint,K=ke.unstable_now,ef=ke.unstable_getCurrentPriorityLevel,Pi=ke.unstable_ImmediatePriority,pu=ke.unstable_UserBlockingPriority,tl=ke.unstable_NormalPriority,tf=ke.unstable_LowPriority,hu=ke.unstable_IdlePriority,Sl=null,Ue=null;function nf(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:of,rf=Math.log,lf=Math.LN2;function of(e){return e>>>=0,e===0?32:31-(rf(e)/lf|0)|0}var jr=64,Sr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~l;a!==0?r=Mn(a):(o&=i,o!==0&&(r=Mn(o)))}else i=n&~l,i!==0?r=Mn(i):o!==0&&(r=Mn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),l=1<<n,r|=e[n],t&=~l;return r}function sf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Me(o),a=1<<i,u=l[i];u===-1?(!(a&n)||a&r)&&(l[i]=sf(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Oo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gu(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Zl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Me(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function bi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var F=0;function xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yu,_i,vu,wu,ku,Io=!1,Cr=[],ct=null,dt=null,ft=null,Kn=new Map,Gn=new Map,it=[],cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rs(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Kn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function Cn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&_i(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function df(e,t,n,r,l){switch(t){case"focusin":return ct=Cn(ct,e,t,n,r,l),!0;case"dragenter":return dt=Cn(dt,e,t,n,r,l),!0;case"mouseover":return ft=Cn(ft,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Kn.set(o,Cn(Kn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Gn.set(o,Cn(Gn.get(o)||null,e,t,n,r,l)),!0}return!1}function Nu(e){var t=Rt(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=cu(n),t!==null){e.blockedOn=t,ku(e.priority,function(){vu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);zo=r,n.target.dispatchEvent(r),zo=null}else return t=fr(n),t!==null&&_i(t),e.blockedOn=n,!1;t.shift()}return!0}function Ls(e,t,n){$r(e)&&n.delete(t)}function ff(){Io=!1,ct!==null&&$r(ct)&&(ct=null),dt!==null&&$r(dt)&&(dt=null),ft!==null&&$r(ft)&&(ft=null),Kn.forEach(Ls),Gn.forEach(Ls)}function En(e,t){e.blockedOn===t&&(e.blockedOn=null,Io||(Io=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,ff)))}function Xn(e){function t(l){return En(l,e)}if(0<Cr.length){En(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&En(ct,e),dt!==null&&En(dt,e),ft!==null&&En(ft,e),Kn.forEach(t),Gn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Nu(n),n.blockedOn===null&&it.shift()}var on=tt.ReactCurrentBatchConfig,rl=!0;function mf(e,t,n,r){var l=F,o=on.transition;on.transition=null;try{F=1,Ri(e,t,n,r)}finally{F=l,on.transition=o}}function pf(e,t,n,r){var l=F,o=on.transition;on.transition=null;try{F=4,Ri(e,t,n,r)}finally{F=l,on.transition=o}}function Ri(e,t,n,r){if(rl){var l=$o(e,t,n,r);if(l===null)so(e,t,r,ll,n),Rs(e,r);else if(df(l,e,t,n,r))r.stopPropagation();else if(Rs(e,r),t&4&&-1<cf.indexOf(e)){for(;l!==null;){var o=fr(l);if(o!==null&&yu(o),o=$o(e,t,n,r),o===null&&so(e,t,r,ll,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else so(e,t,r,null,n)}}var ll=null;function $o(e,t,n,r){if(ll=null,e=Ei(r),e=Rt(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ll=e,null}function ju(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case Pi:return 1;case pu:return 4;case tl:case tf:return 16;case hu:return 536870912;default:return 16}default:return 16}}var at=null,Li=null,Ur=null;function Su(){if(Ur)return Ur;var e,t=Li,n=t.length,r,l="value"in at?at.value:at.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return Ur=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function Ts(){return!1}function je(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Er:Ts,this.isPropagationStopped=Ts,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=je(xn),dr=W({},xn,{view:0,detail:0}),hf=je(dr),Jl,ql,Pn,Cl=W({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Jl=e.screenX-Pn.screenX,ql=e.screenY-Pn.screenY):ql=Jl=0,Pn=e),Jl)},movementY:function(e){return"movementY"in e?e.movementY:ql}}),zs=je(Cl),gf=W({},Cl,{dataTransfer:0}),xf=je(gf),yf=W({},dr,{relatedTarget:0}),eo=je(yf),vf=W({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=je(vf),kf=W({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nf=je(kf),jf=W({},xn,{data:0}),Ms=je(jf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ef[e])?!!t[e]:!1}function zi(){return Pf}var bf=W({},dr,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zi,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=je(bf),Rf=W({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ds=je(Rf),Lf=W({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zi}),Tf=je(Lf),zf=W({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mf=je(zf),Df=W({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ff=je(Df),Of=[9,13,27,32],Mi=Xe&&"CompositionEvent"in window,In=null;Xe&&"documentMode"in document&&(In=document.documentMode);var If=Xe&&"TextEvent"in window&&!In,Cu=Xe&&(!Mi||In&&8<In&&11>=In),Fs=" ",Os=!1;function Eu(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wt=!1;function $f(e,t){switch(e){case"compositionend":return Pu(t);case"keypress":return t.which!==32?null:(Os=!0,Fs);case"textInput":return e=t.data,e===Fs&&Os?null:e;default:return null}}function Uf(e,t){if(Wt)return e==="compositionend"||!Mi&&Eu(e,t)?(e=Su(),Ur=Li=at=null,Wt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cu&&t.locale!=="ko"?null:t.data;default:return null}}var Af={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Af[e.type]:t==="textarea"}function bu(e,t,n,r){ou(r),t=ol(t,"onChange"),0<t.length&&(n=new Ti("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $n=null,Zn=null;function Bf(e){$u(e,0)}function El(e){var t=Kt(e);if(Ja(t))return e}function Hf(e,t){if(e==="change")return t}var _u=!1;if(Xe){var to;if(Xe){var no="oninput"in document;if(!no){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),no=typeof $s.oninput=="function"}to=no}else to=!1;_u=to&&(!document.documentMode||9<document.documentMode)}function Us(){$n&&($n.detachEvent("onpropertychange",Ru),Zn=$n=null)}function Ru(e){if(e.propertyName==="value"&&El(Zn)){var t=[];bu(t,Zn,e,Ei(e)),uu(Bf,t)}}function Vf(e,t,n){e==="focusin"?(Us(),$n=t,Zn=n,$n.attachEvent("onpropertychange",Ru)):e==="focusout"&&Us()}function Wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Zn)}function Qf(e,t){if(e==="click")return El(t)}function Yf(e,t){if(e==="input"||e==="change")return El(t)}function Kf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:Kf;function Jn(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ko.call(t,l)||!Fe(e[l],t[l]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bs(e,t){var n=As(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=As(n)}}function Lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tu(){for(var e=window,t=Jr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jr(e.document)}return t}function Di(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Gf(e){var t=Tu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Lu(n.ownerDocument.documentElement,n)){if(r!==null&&Di(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=Bs(n,o);var i=Bs(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xf=Xe&&"documentMode"in document&&11>=document.documentMode,Qt=null,Uo=null,Un=null,Ao=!1;function Hs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ao||Qt==null||Qt!==Jr(r)||(r=Qt,"selectionStart"in r&&Di(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Jn(Un,r)||(Un=r,r=ol(Uo,"onSelect"),0<r.length&&(t=new Ti("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionend:Pr("Transition","TransitionEnd")},ro={},zu={};Xe&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Pl(e){if(ro[e])return ro[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zu)return ro[e]=t[n];return e}var Mu=Pl("animationend"),Du=Pl("animationiteration"),Fu=Pl("animationstart"),Ou=Pl("transitionend"),Iu=new Map,Vs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,t){Iu.set(e,t),Ut(t,[e])}for(var lo=0;lo<Vs.length;lo++){var oo=Vs[lo],Zf=oo.toLowerCase(),Jf=oo[0].toUpperCase()+oo.slice(1);wt(Zf,"on"+Jf)}wt(Mu,"onAnimationEnd");wt(Du,"onAnimationIteration");wt(Fu,"onAnimationStart");wt("dblclick","onDoubleClick");wt("focusin","onFocus");wt("focusout","onBlur");wt(Ou,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function Ws(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function $u(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&l.isPropagationStopped())break e;Ws(l,a,c),o=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&l.isPropagationStopped())break e;Ws(l,a,c),o=u}}}if(el)throw e=Fo,el=!1,Fo=null,e}function $(e,t){var n=t[Qo];n===void 0&&(n=t[Qo]=new Set);var r=e+"__bubble";n.has(r)||(Uu(t,e,2,!1),n.add(r))}function io(e,t,n){var r=0;t&&(r|=4),Uu(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function qn(e){if(!e[br]){e[br]=!0,Ya.forEach(function(n){n!=="selectionchange"&&(qf.has(n)||io(n,!1,e),io(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,io("selectionchange",!1,t))}}function Uu(e,t,n,r){switch(ju(t)){case 1:var l=mf;break;case 4:l=pf;break;default:l=Ri}n=l.bind(null,t,n,e),l=void 0,!Do||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function so(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;i=i.return}for(;a!==null;){if(i=Rt(a),i===null)return;if(u=i.tag,u===5||u===6){r=o=i;continue e}a=a.parentNode}}r=r.return}uu(function(){var c=o,p=Ei(n),g=[];e:{var h=Iu.get(e);if(h!==void 0){var w=Ti,y=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":w=_f;break;case"focusin":y="focus",w=eo;break;case"focusout":y="blur",w=eo;break;case"beforeblur":case"afterblur":w=eo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tf;break;case Mu:case Du:case Fu:w=wf;break;case Ou:w=Mf;break;case"scroll":w=hf;break;case"wheel":w=Ff;break;case"copy":case"cut":case"paste":w=Nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ds}var v=(t&4)!==0,C=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var d=c,m;d!==null;){m=d;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,f!==null&&(k=Yn(d,f),k!=null&&v.push(er(d,k,m)))),C)break;d=d.return}0<v.length&&(h=new w(h,y,null,n,p),g.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==zo&&(y=n.relatedTarget||n.fromElement)&&(Rt(y)||y[Ze]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?Rt(y):null,y!==null&&(C=At(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(v=zs,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ds,k="onPointerLeave",f="onPointerEnter",d="pointer"),C=w==null?h:Kt(w),m=y==null?h:Kt(y),h=new v(k,d+"leave",w,n,p),h.target=C,h.relatedTarget=m,k=null,Rt(p)===c&&(v=new v(f,d+"enter",y,n,p),v.target=m,v.relatedTarget=C,k=v),C=k,w&&y)t:{for(v=w,f=y,d=0,m=v;m;m=Bt(m))d++;for(m=0,k=f;k;k=Bt(k))m++;for(;0<d-m;)v=Bt(v),d--;for(;0<m-d;)f=Bt(f),m--;for(;d--;){if(v===f||f!==null&&v===f.alternate)break t;v=Bt(v),f=Bt(f)}v=null}else v=null;w!==null&&Qs(g,h,w,v,!1),y!==null&&C!==null&&Qs(g,C,y,v,!0)}}e:{if(h=c?Kt(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var j=Hf;else if(Is(h))if(_u)j=Yf;else{j=Wf;var b=Vf}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=Qf);if(j&&(j=j(e,c))){bu(g,j,n,p);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&bo(h,"number",h.value)}switch(b=c?Kt(c):window,e){case"focusin":(Is(b)||b.contentEditable==="true")&&(Qt=b,Uo=c,Un=null);break;case"focusout":Un=Uo=Qt=null;break;case"mousedown":Ao=!0;break;case"contextmenu":case"mouseup":case"dragend":Ao=!1,Hs(g,n,p);break;case"selectionchange":if(Xf)break;case"keydown":case"keyup":Hs(g,n,p)}var P;if(Mi)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Wt?Eu(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Cu&&n.locale!=="ko"&&(Wt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Wt&&(P=Su()):(at=p,Li="value"in at?at.value:at.textContent,Wt=!0)),b=ol(c,_),0<b.length&&(_=new Ms(_,e,null,n,p),g.push({event:_,listeners:b}),P?_.data=P:(P=Pu(n),P!==null&&(_.data=P)))),(P=If?$f(e,n):Uf(e,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(p=new Ms("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:c}),p.data=P))}$u(g,t)})}function er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ol(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Yn(e,n),o!=null&&r.unshift(er(e,o,l)),o=Yn(e,t),o!=null&&r.push(er(e,o,l))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qs(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Yn(n,o),u!=null&&i.unshift(er(n,u,a))):l||(u=Yn(n,o),u!=null&&i.push(er(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Ys(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function _r(e,t,n){if(t=Ys(t),Ys(e)!==t&&n)throw Error(N(425))}function il(){}var Bo=null,Ho=null;function Vo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wo=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Ks=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ks<"u"?function(e){return Ks.resolve(null).then(e).catch(lm)}:Wo;function lm(e){setTimeout(function(){throw e})}function ao(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Xn(t)}function mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),$e="__reactFiber$"+yn,tr="__reactProps$"+yn,Ze="__reactContainer$"+yn,Qo="__reactEvents$"+yn,om="__reactListeners$"+yn,im="__reactHandles$"+yn;function Rt(e){var t=e[$e];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[$e]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gs(e);e!==null;){if(n=e[$e])return n;e=Gs(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[$e]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function bl(e){return e[tr]||null}var Yo=[],Gt=-1;function kt(e){return{current:e}}function U(e){0>Gt||(e.current=Yo[Gt],Yo[Gt]=null,Gt--)}function I(e,t){Gt++,Yo[Gt]=e.current,e.current=t}var vt={},se=kt(vt),he=kt(!1),Dt=vt;function cn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function sl(){U(he),U(se)}function Xs(e,t,n){if(se.current!==vt)throw Error(N(168));I(se,t),I(he,n)}function Au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(N(108,Hd(e)||"Unknown",l));return W({},n,r)}function al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Dt=se.current,I(se,e),I(he,he.current),!0}function Zs(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Au(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,U(he),U(se),I(se,e)):U(he),I(he,n)}var We=null,_l=!1,uo=!1;function Bu(e){We===null?We=[e]:We.push(e)}function sm(e){_l=!0,Bu(e)}function Nt(){if(!uo&&We!==null){uo=!0;var e=0,t=F;try{var n=We;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}We=null,_l=!1}catch(l){throw We!==null&&(We=We.slice(e+1)),mu(Pi,Nt),l}finally{F=t,uo=!1}}return null}var Xt=[],Zt=0,ul=null,cl=0,Se=[],Ce=0,Ft=null,Qe=1,Ye="";function Et(e,t){Xt[Zt++]=cl,Xt[Zt++]=ul,ul=e,cl=t}function Hu(e,t,n){Se[Ce++]=Qe,Se[Ce++]=Ye,Se[Ce++]=Ft,Ft=e;var r=Qe;e=Ye;var l=32-Me(r)-1;r&=~(1<<l),n+=1;var o=32-Me(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Qe=1<<32-Me(t)+l|n<<l|r,Ye=o+e}else Qe=1<<o|n<<l|r,Ye=e}function Fi(e){e.return!==null&&(Et(e,1),Hu(e,1,0))}function Oi(e){for(;e===ul;)ul=Xt[--Zt],Xt[Zt]=null,cl=Xt[--Zt],Xt[Zt]=null;for(;e===Ft;)Ft=Se[--Ce],Se[Ce]=null,Ye=Se[--Ce],Se[Ce]=null,Qe=Se[--Ce],Se[Ce]=null}var we=null,ve=null,A=!1,ze=null;function Vu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ve=mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ve=null,!0):!1;default:return!1}}function Ko(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Go(e){if(A){var t=ve;if(t){var n=t;if(!Js(e,t)){if(Ko(e))throw Error(N(418));t=mt(n.nextSibling);var r=we;t&&Js(e,t)?Vu(r,n):(e.flags=e.flags&-4097|2,A=!1,we=e)}}else{if(Ko(e))throw Error(N(418));e.flags=e.flags&-4097|2,A=!1,we=e}}}function qs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function Rr(e){if(e!==we)return!1;if(!A)return qs(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vo(e.type,e.memoizedProps)),t&&(t=ve)){if(Ko(e))throw Wu(),Error(N(418));for(;t;)Vu(e,t),t=mt(t.nextSibling)}if(qs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=we?mt(e.stateNode.nextSibling):null;return!0}function Wu(){for(var e=ve;e;)e=mt(e.nextSibling)}function dn(){ve=we=null,A=!1}function Ii(e){ze===null?ze=[e]:ze.push(e)}var am=tt.ReactCurrentBatchConfig;function bn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var a=l.refs;i===null?delete a[o]:a[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ea(e){var t=e._init;return t(e._payload)}function Qu(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=xt(f,d),f.index=0,f.sibling=null,f}function o(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function i(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,m,k){return d===null||d.tag!==6?(d=xo(m,f.mode,k),d.return=f,d):(d=l(d,m),d.return=f,d)}function u(f,d,m,k){var j=m.type;return j===Vt?p(f,d,m.props.children,k,m.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===lt&&ea(j)===d.type)?(k=l(d,m.props),k.ref=bn(f,d,m),k.return=f,k):(k=Kr(m.type,m.key,m.props,null,f.mode,k),k.ref=bn(f,d,m),k.return=f,k)}function c(f,d,m,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=yo(m,f.mode,k),d.return=f,d):(d=l(d,m.children||[]),d.return=f,d)}function p(f,d,m,k,j){return d===null||d.tag!==7?(d=Mt(m,f.mode,k,j),d.return=f,d):(d=l(d,m),d.return=f,d)}function g(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xo(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wr:return m=Kr(d.type,d.key,d.props,null,f.mode,m),m.ref=bn(f,null,d),m.return=f,m;case Ht:return d=yo(d,f.mode,m),d.return=f,d;case lt:var k=d._init;return g(f,k(d._payload),m)}if(zn(d)||jn(d))return d=Mt(d,f.mode,m,null),d.return=f,d;Lr(f,d)}return null}function h(f,d,m,k){var j=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:a(f,d,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:return m.key===j?u(f,d,m,k):null;case Ht:return m.key===j?c(f,d,m,k):null;case lt:return j=m._init,h(f,d,j(m._payload),k)}if(zn(m)||jn(m))return j!==null?null:p(f,d,m,k,null);Lr(f,m)}return null}function w(f,d,m,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(m)||null,a(d,f,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case wr:return f=f.get(k.key===null?m:k.key)||null,u(d,f,k,j);case Ht:return f=f.get(k.key===null?m:k.key)||null,c(d,f,k,j);case lt:var b=k._init;return w(f,d,m,b(k._payload),j)}if(zn(k)||jn(k))return f=f.get(m)||null,p(d,f,k,j,null);Lr(d,k)}return null}function y(f,d,m,k){for(var j=null,b=null,P=d,_=d=0,M=null;P!==null&&_<m.length;_++){P.index>_?(M=P,P=null):M=P.sibling;var R=h(f,P,m[_],k);if(R===null){P===null&&(P=M);break}e&&P&&R.alternate===null&&t(f,P),d=o(R,d,_),b===null?j=R:b.sibling=R,b=R,P=M}if(_===m.length)return n(f,P),A&&Et(f,_),j;if(P===null){for(;_<m.length;_++)P=g(f,m[_],k),P!==null&&(d=o(P,d,_),b===null?j=P:b.sibling=P,b=P);return A&&Et(f,_),j}for(P=r(f,P);_<m.length;_++)M=w(P,f,_,m[_],k),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?_:M.key),d=o(M,d,_),b===null?j=M:b.sibling=M,b=M);return e&&P.forEach(function(fe){return t(f,fe)}),A&&Et(f,_),j}function v(f,d,m,k){var j=jn(m);if(typeof j!="function")throw Error(N(150));if(m=j.call(m),m==null)throw Error(N(151));for(var b=j=null,P=d,_=d=0,M=null,R=m.next();P!==null&&!R.done;_++,R=m.next()){P.index>_?(M=P,P=null):M=P.sibling;var fe=h(f,P,R.value,k);if(fe===null){P===null&&(P=M);break}e&&P&&fe.alternate===null&&t(f,P),d=o(fe,d,_),b===null?j=fe:b.sibling=fe,b=fe,P=M}if(R.done)return n(f,P),A&&Et(f,_),j;if(P===null){for(;!R.done;_++,R=m.next())R=g(f,R.value,k),R!==null&&(d=o(R,d,_),b===null?j=R:b.sibling=R,b=R);return A&&Et(f,_),j}for(P=r(f,P);!R.done;_++,R=m.next())R=w(P,f,_,R.value,k),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?_:R.key),d=o(R,d,_),b===null?j=R:b.sibling=R,b=R);return e&&P.forEach(function(kn){return t(f,kn)}),A&&Et(f,_),j}function C(f,d,m,k){if(typeof m=="object"&&m!==null&&m.type===Vt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case wr:e:{for(var j=m.key,b=d;b!==null;){if(b.key===j){if(j=m.type,j===Vt){if(b.tag===7){n(f,b.sibling),d=l(b,m.props.children),d.return=f,f=d;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===lt&&ea(j)===b.type){n(f,b.sibling),d=l(b,m.props),d.ref=bn(f,b,m),d.return=f,f=d;break e}n(f,b);break}else t(f,b);b=b.sibling}m.type===Vt?(d=Mt(m.props.children,f.mode,k,m.key),d.return=f,f=d):(k=Kr(m.type,m.key,m.props,null,f.mode,k),k.ref=bn(f,d,m),k.return=f,f=k)}return i(f);case Ht:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=l(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=yo(m,f.mode,k),d.return=f,f=d}return i(f);case lt:return b=m._init,C(f,d,b(m._payload),k)}if(zn(m))return y(f,d,m,k);if(jn(m))return v(f,d,m,k);Lr(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,m),d.return=f,f=d):(n(f,d),d=xo(m,f.mode,k),d.return=f,f=d),i(f)):n(f,d)}return C}var fn=Qu(!0),Yu=Qu(!1),dl=kt(null),fl=null,Jt=null,$i=null;function Ui(){$i=Jt=fl=null}function Ai(e){var t=dl.current;U(dl),e._currentValue=t}function Xo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sn(e,t){fl=e,$i=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(fl===null)throw Error(N(308));Jt=e,fl.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Lt=null;function Bi(e){Lt===null?Lt=[e]:Lt.push(e)}function Ku(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ot=!1;function Hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,Bi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Br(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}function ta(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ml(e,t,n,r){var l=e.updateQueue;ot=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?o=c:i.next=c,i=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;i=0,p=c=u=null,a=o;do{var h=a.lane,w=a.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(h=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){g=y.call(w,g,h);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(w,g,h):y,h==null)break e;g=W({},g,h);break e;case 2:ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else w={eventTime:w,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=w,u=g):p=p.next=w,i|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(p===null&&(u=g),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);It|=i,e.lanes=i,e.memoizedState=g}}function na(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(N(191,l));l.call(r)}}}var mr={},Ae=kt(mr),nr=kt(mr),rr=kt(mr);function Tt(e){if(e===mr)throw Error(N(174));return e}function Vi(e,t){switch(I(rr,t),I(nr,e),I(Ae,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ro(t,e)}U(Ae),I(Ae,t)}function mn(){U(Ae),U(nr),U(rr)}function Xu(e){Tt(rr.current);var t=Tt(Ae.current),n=Ro(t,e.type);t!==n&&(I(nr,e),I(Ae,n))}function Wi(e){nr.current===e&&(U(Ae),U(nr))}var B=kt(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=[];function Qi(){for(var e=0;e<co.length;e++)co[e]._workInProgressVersionPrimary=null;co.length=0}var Hr=tt.ReactCurrentDispatcher,fo=tt.ReactCurrentBatchConfig,Ot=0,H=null,X=null,q=null,hl=!1,An=!1,lr=0,um=0;function le(){throw Error(N(321))}function Yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function Ki(e,t,n,r,l,o){if(Ot=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hr.current=e===null||e.memoizedState===null?mm:pm,e=n(r,l),An){o=0;do{if(An=!1,lr=0,25<=o)throw Error(N(301));o+=1,q=X=null,t.updateQueue=null,Hr.current=hm,e=n(r,l)}while(An)}if(Hr.current=gl,t=X!==null&&X.next!==null,Ot=0,q=X=H=null,hl=!1,t)throw Error(N(300));return e}function Gi(){var e=lr!==0;return lr=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?H.memoizedState=q=e:q=q.next=e,q}function _e(){if(X===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?H.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(N(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?H.memoizedState=q=e:q=q.next=e}return q}function or(e,t){return typeof t=="function"?t(e):t}function mo(e){var t=_e(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=i=null,u=null,c=o;do{var p=c.lane;if((Ot&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=g,i=r):u=u.next=g,H.lanes|=p,It|=p}c=c.next}while(c!==null&&c!==o);u===null?i=r:u.next=a,Fe(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,H.lanes|=o,It|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function po(e){var t=_e(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Fe(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Zu(){}function Ju(e,t){var n=H,r=_e(),l=t(),o=!Fe(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Xi(tc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,ir(9,ec.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(N(349));Ot&30||qu(n,t,l)}return l}function qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ec(e,t,n,r){t.value=n,t.getSnapshot=r,nc(t)&&rc(e)}function tc(e,t,n){return n(function(){nc(t)&&rc(e)})}function nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function rc(e){var t=Je(e,1);t!==null&&De(t,e,1,-1)}function ra(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=fm.bind(null,H,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lc(){return _e().memoizedState}function Vr(e,t,n,r){var l=Ie();H.flags|=e,l.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function Rl(e,t,n,r){var l=_e();r=r===void 0?null:r;var o=void 0;if(X!==null){var i=X.memoizedState;if(o=i.destroy,r!==null&&Yi(r,i.deps)){l.memoizedState=ir(t,n,o,r);return}}H.flags|=e,l.memoizedState=ir(1|t,n,o,r)}function la(e,t){return Vr(8390656,8,e,t)}function Xi(e,t){return Rl(2048,8,e,t)}function oc(e,t){return Rl(4,2,e,t)}function ic(e,t){return Rl(4,4,e,t)}function sc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4,4,sc.bind(null,t,e),n)}function Zi(){}function uc(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cc(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dc(e,t,n){return Ot&21?(Fe(n,t)||(n=gu(),H.lanes|=n,It|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function cm(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=fo.transition;fo.transition={};try{e(!1),t()}finally{F=n,fo.transition=r}}function fc(){return _e().memoizedState}function dm(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))pc(t,n);else if(n=Ku(e,t,n,r),n!==null){var l=ue();De(n,e,r,l),hc(n,t,r)}}function fm(e,t,n){var r=gt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))pc(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,a=o(i,n);if(l.hasEagerState=!0,l.eagerState=a,Fe(a,i)){var u=t.interleaved;u===null?(l.next=l,Bi(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=Ku(e,t,l,r),n!==null&&(l=ue(),De(n,e,r,l),hc(n,t,r))}}function mc(e){var t=e.alternate;return e===H||t!==null&&t===H}function pc(e,t){An=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bi(e,n)}}var gl={readContext:be,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},mm={readContext:be,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:la,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,sc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:ra,useDebugValue:Zi,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=ra(!1),t=e[0];return e=cm.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Ie();if(A){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),ee===null)throw Error(N(349));Ot&30||qu(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,la(tc.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,ec.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ie(),t=ee.identifierPrefix;if(A){var n=Ye,r=Qe;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pm={readContext:be,useCallback:uc,useContext:be,useEffect:Xi,useImperativeHandle:ac,useInsertionEffect:oc,useLayoutEffect:ic,useMemo:cc,useReducer:mo,useRef:lc,useState:function(){return mo(or)},useDebugValue:Zi,useDeferredValue:function(e){var t=_e();return dc(t,X.memoizedState,e)},useTransition:function(){var e=mo(or)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:Ju,useId:fc,unstable_isNewReconciler:!1},hm={readContext:be,useCallback:uc,useContext:be,useEffect:Xi,useImperativeHandle:ac,useInsertionEffect:oc,useLayoutEffect:ic,useMemo:cc,useReducer:po,useRef:lc,useState:function(){return po(or)},useDebugValue:Zi,useDeferredValue:function(e){var t=_e();return X===null?t.memoizedState=e:dc(t,X.memoizedState,e)},useTransition:function(){var e=po(or)[0],t=_e().memoizedState;return[e,t]},useMutableSource:Zu,useSyncExternalStore:Ju,useId:fc,unstable_isNewReconciler:!1};function Le(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Zo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ll={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=gt(e),o=Ke(r,l);o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,l),t!==null&&(De(t,e,l,r),Br(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=gt(e),o=Ke(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pt(e,o,l),t!==null&&(De(t,e,l,r),Br(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=gt(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=pt(e,l,r),t!==null&&(De(t,e,r,n),Br(t,e,r))}};function oa(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,o):!0}function gc(e,t,n){var r=!1,l=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=be(o):(l=ge(t)?Dt:se.current,r=t.contextTypes,o=(r=r!=null)?cn(e,l):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function ia(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ll.enqueueReplaceState(t,t.state,null)}function Jo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Hi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=be(o):(o=ge(t)?Dt:se.current,l.context=cn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Zo(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ll.enqueueReplaceState(l,l.state,null),ml(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function ho(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function xc(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yl||(yl=!0,ui=r),qo(e,t)},n}function yc(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){qo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){qo(e,t),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function sa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rm.bind(null,e,t,n),t.then(e,e))}function aa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ua(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,pt(n,t,1))),n.lanes|=1),e)}var xm=tt.ReactCurrentOwner,pe=!1;function ae(e,t,n,r){t.child=e===null?Yu(t,null,n,r):fn(t,e.child,n,r)}function ca(e,t,n,r,l){n=n.render;var o=t.ref;return sn(t,l),r=Ki(e,t,n,r,o,l),n=Gi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(A&&n&&Fi(t),t.flags|=1,ae(e,t,r,l),t.child)}function da(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!os(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vc(e,t,o,r,l)):(e=Kr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(i,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function vc(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Jn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,qe(e,t,l)}return ei(e,t,n,r,l)}function wc(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(en,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(en,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,I(en,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,I(en,ye),ye|=r;return ae(e,t,l,n),t.child}function kc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ei(e,t,n,r,l){var o=ge(n)?Dt:se.current;return o=cn(t,o),sn(t,l),n=Ki(e,t,n,r,o,l),r=Gi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(A&&r&&Fi(t),t.flags|=1,ae(e,t,n,l),t.child)}function fa(e,t,n,r,l){if(ge(n)){var o=!0;al(t)}else o=!1;if(sn(t,l),t.stateNode===null)Wr(e,t),gc(t,n,r),Jo(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=be(c):(c=ge(n)?Dt:se.current,c=cn(t,c));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ia(t,i,r,c),ot=!1;var h=t.memoizedState;i.state=h,ml(t,r,i,l),u=t.memoizedState,a!==r||h!==u||he.current||ot?(typeof p=="function"&&(Zo(t,n,p,r),u=t.memoizedState),(a=ot||oa(t,n,a,r,h,u,c))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Gu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Le(t.type,a),i.props=c,g=t.pendingProps,h=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=ge(n)?Dt:se.current,u=cn(t,u));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==g||h!==u)&&ia(t,i,r,u),ot=!1,h=t.memoizedState,i.state=h,ml(t,r,i,l);var y=t.memoizedState;a!==g||h!==y||he.current||ot?(typeof w=="function"&&(Zo(t,n,w,r),y=t.memoizedState),(c=ot||oa(t,n,c,r,h,y,u)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return ti(e,t,n,r,o,l)}function ti(e,t,n,r,l,o){kc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&Zs(t,n,!1),qe(e,t,o);r=t.stateNode,xm.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=fn(t,e.child,null,o),t.child=fn(t,null,a,o)):ae(e,t,a,o),t.memoizedState=r.state,l&&Zs(t,n,!0),t.child}function Nc(e){var t=e.stateNode;t.pendingContext?Xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xs(e,t.context,!1),Vi(e,t.containerInfo)}function ma(e,t,n,r,l){return dn(),Ii(l),t.flags|=256,ae(e,t,n,r),t.child}var ni={dehydrated:null,treeContext:null,retryLane:0};function ri(e){return{baseLanes:e,cachePool:null,transitions:null}}function jc(e,t,n){var r=t.pendingProps,l=B.current,o=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(B,l&1),e===null)return Go(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=Ml(i,r,0,null),e=Mt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ri(n),t.memoizedState=ni,e):Ji(t,i));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return ym(e,t,i,r,a,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=xt(a,o):(o=Mt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?ri(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=ni,r}return o=e.child,e=o.sibling,r=xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ji(e,t){return t=Ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Tr(e,t,n,r){return r!==null&&Ii(r),fn(t,e.child,null,n),e=Ji(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=ho(Error(N(422))),Tr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=Ml({mode:"visible",children:r.children},l,0,null),o=Mt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&fn(t,e.child,null,i),t.child.memoizedState=ri(i),t.memoizedState=ni,o);if(!(t.mode&1))return Tr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(N(419)),r=ho(o,r,void 0),Tr(e,t,i,r)}if(a=(i&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Je(e,l),De(r,e,l,-1))}return ls(),r=ho(Error(N(421))),Tr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lm.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=mt(l.nextSibling),we=t,A=!0,ze=null,e!==null&&(Se[Ce++]=Qe,Se[Ce++]=Ye,Se[Ce++]=Ft,Qe=e.id,Ye=e.overflow,Ft=t),t=Ji(t,r.children),t.flags|=4096,t)}function pa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Xo(e.return,t,n)}function go(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Sc(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ae(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pa(e,n,t);else if(e.tag===19)pa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),go(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}go(t,!0,n,null,o);break;case"together":go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),It|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t,n){switch(t.tag){case 3:Nc(t),dn();break;case 5:Xu(t);break;case 1:ge(t.type)&&al(t);break;case 4:Vi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(dl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?jc(e,t,n):(I(B,B.current&1),e=qe(e,t,n),e!==null?e.sibling:null);I(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,wc(e,t,n)}return qe(e,t,n)}var Cc,li,Ec,Pc;Cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};li=function(){};Ec=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Tt(Ae.current);var o=null;switch(n){case"input":l=Eo(e,l),r=Eo(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=_o(e,l),r=_o(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=il)}Lo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&$("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Pc=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wm(e,t,n){var r=t.pendingProps;switch(Oi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&sl(),oe(t),null;case 3:return r=t.stateNode,mn(),U(he),U(se),Qi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Rr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ze!==null&&(fi(ze),ze=null))),li(e,t),oe(t),null;case 5:Wi(t);var l=Tt(rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ec(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return oe(t),null}if(e=Tt(Ae.current),Rr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[$e]=t,r[tr]=o,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(l=0;l<Dn.length;l++)$(Dn[l],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":js(r,o),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},$("invalid",r);break;case"textarea":Cs(r,o),$("invalid",r)}Lo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&_r(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&_r(r.textContent,a,e),l=["children",""+a]):Wn.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&$("scroll",r)}switch(n){case"input":kr(r),Ss(r,o,!0);break;case"textarea":kr(r),Es(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=il)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[$e]=t,e[tr]=r,Cc(e,t,!1,!1),t.stateNode=e;e:{switch(i=To(n,r),n){case"dialog":$("cancel",e),$("close",e),l=r;break;case"iframe":case"object":case"embed":$("load",e),l=r;break;case"video":case"audio":for(l=0;l<Dn.length;l++)$(Dn[l],e);l=r;break;case"source":$("error",e),l=r;break;case"img":case"image":case"link":$("error",e),$("load",e),l=r;break;case"details":$("toggle",e),l=r;break;case"input":js(e,r),l=Eo(e,r),$("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),$("invalid",e);break;case"textarea":Cs(e,r),l=_o(e,r),$("invalid",e);break;default:l=r}Lo(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?lu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nu(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qn(e,u):typeof u=="number"&&Qn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&$("scroll",e):u!=null&&Ni(e,o,u,i))}switch(n){case"input":kr(e),Ss(e,r,!1);break;case"textarea":kr(e),Es(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Pc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Tt(rr.current),Tt(Ae.current),Rr(t)){if(r=t.stateNode,n=t.memoizedProps,r[$e]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:_r(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_r(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$e]=t,t.stateNode=r}return oe(t),null;case 13:if(U(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ve!==null&&t.mode&1&&!(t.flags&128))Wu(),dn(),t.flags|=98560,o=!1;else if(o=Rr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[$e]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else ze!==null&&(fi(ze),ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):ls())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return mn(),li(e,t),e===null&&qn(t.stateNode.containerInfo),oe(t),null;case 10:return Ai(t.type._context),oe(t),null;case 17:return ge(t.type)&&sl(),oe(t),null;case 19:if(U(B),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)_n(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=pl(e),i!==null){for(t.flags|=128,_n(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(B,B.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>hn&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304)}else{if(!r)if(e=pl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return oe(t),null}else 2*K()-o.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,_n(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=B.current,I(B,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function km(e,t){switch(Oi(t),t.tag){case 1:return ge(t.type)&&sl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),U(he),U(se),Qi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wi(t),null;case 13:if(U(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(B),null;case 4:return mn(),null;case 10:return Ai(t.type._context),null;case 22:case 23:return rs(),null;case 24:return null;default:return null}}var zr=!1,ie=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,S=null;function qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Q(e,t,r)}else n.current=null}function oi(e,t,n){try{n()}catch(r){Q(e,t,r)}}var ha=!1;function jm(e,t){if(Bo=rl,e=Tu(),Di(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,p=0,g=e,h=null;t:for(;;){for(var w;g!==n||l!==0&&g.nodeType!==3||(a=i+l),g!==o||r!==0&&g.nodeType!==3||(u=i+r),g.nodeType===3&&(i+=g.nodeValue.length),(w=g.firstChild)!==null;)h=g,g=w;for(;;){if(g===e)break t;if(h===n&&++c===l&&(a=i),h===o&&++p===r&&(u=i),(w=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ho={focusedElem:e,selectionRange:n},rl=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:Le(t.type,v),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){Q(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=ha,ha=!1,y}function Bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&oi(t,n,o)}l=l.next}while(l!==r)}}function Tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ii(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bc(e){var t=e.alternate;t!==null&&(e.alternate=null,bc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$e],delete t[tr],delete t[Qo],delete t[om],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _c(e){return e.tag===5||e.tag===3||e.tag===4}function ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=il));else if(r!==4&&(e=e.child,e!==null))for(si(e,t,n),e=e.sibling;e!==null;)si(e,t,n),e=e.sibling}function ai(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ai(e,t,n),e=e.sibling;e!==null;)ai(e,t,n),e=e.sibling}var te=null,Te=!1;function rt(e,t,n){for(n=n.child;n!==null;)Rc(e,t,n),n=n.sibling}function Rc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:ie||qt(n,t);case 6:var r=te,l=Te;te=null,rt(e,t,n),te=r,Te=l,te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Te?(e=te,n=n.stateNode,e.nodeType===8?ao(e.parentNode,n):e.nodeType===1&&ao(e,n),Xn(e)):ao(te,n.stateNode));break;case 4:r=te,l=Te,te=n.stateNode.containerInfo,Te=!0,rt(e,t,n),te=r,Te=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&oi(n,t,i),l=l.next}while(l!==r)}rt(e,t,n);break;case 1:if(!ie&&(qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Q(n,t,a)}rt(e,t,n);break;case 21:rt(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,rt(e,t,n),ie=r):rt(e,t,n);break;default:rt(e,t,n)}}function xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nm),t.forEach(function(r){var l=Tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Te=!1;break e;case 3:te=a.stateNode.containerInfo,Te=!0;break e;case 4:te=a.stateNode.containerInfo,Te=!0;break e}a=a.return}if(te===null)throw Error(N(160));Rc(o,i,l),te=null,Te=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){Q(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lc(t,e),t=t.sibling}function Lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),Oe(e),r&4){try{Bn(3,e,e.return),Tl(3,e)}catch(v){Q(e,e.return,v)}try{Bn(5,e,e.return)}catch(v){Q(e,e.return,v)}}break;case 1:Re(t,e),Oe(e),r&512&&n!==null&&qt(n,n.return);break;case 5:if(Re(t,e),Oe(e),r&512&&n!==null&&qt(n,n.return),e.flags&32){var l=e.stateNode;try{Qn(l,"")}catch(v){Q(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qa(l,o),To(a,i);var c=To(a,o);for(i=0;i<u.length;i+=2){var p=u[i],g=u[i+1];p==="style"?lu(l,g):p==="dangerouslySetInnerHTML"?nu(l,g):p==="children"?Qn(l,g):Ni(l,p,g,c)}switch(a){case"input":Po(l,o);break;case"textarea":eu(l,o);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?nn(l,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?nn(l,!!o.multiple,o.defaultValue,!0):nn(l,!!o.multiple,o.multiple?[]:"",!1))}l[tr]=o}catch(v){Q(e,e.return,v)}}break;case 6:if(Re(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(N(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(v){Q(e,e.return,v)}}break;case 3:if(Re(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(v){Q(e,e.return,v)}break;case 4:Re(t,e),Oe(e);break;case 13:Re(t,e),Oe(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(ts=K())),r&4&&xa(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||p,Re(t,e),ie=c):Re(t,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(S=e,p=e.child;p!==null;){for(g=S=p;S!==null;){switch(h=S,w=h.child,h.tag){case 0:case 11:case 14:case 15:Bn(4,h,h.return);break;case 1:qt(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Q(r,n,v)}}break;case 5:qt(h,h.return);break;case 22:if(h.memoizedState!==null){va(g);continue}}w!==null?(w.return=h,S=w):va(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,u=g.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ru("display",i))}catch(v){Q(e,e.return,v)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(v){Q(e,e.return,v)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Re(t,e),Oe(e),r&4&&xa(e);break;case 21:break;default:Re(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_c(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Qn(l,""),r.flags&=-33);var o=ga(e);ai(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,a=ga(e);si(e,a,i);break;default:throw Error(N(161))}}catch(u){Q(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sm(e,t,n){S=e,Tc(e)}function Tc(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||zr;if(!i){var a=l.alternate,u=a!==null&&a.memoizedState!==null||ie;a=zr;var c=ie;if(zr=i,(ie=u)&&!c)for(S=l;S!==null;)i=S,u=i.child,i.tag===22&&i.memoizedState!==null?wa(l):u!==null?(u.return=i,S=u):wa(l);for(;o!==null;)S=o,Tc(o),o=o.sibling;S=l,zr=a,ie=c}ya(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,S=o):ya(e)}}function ya(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||Tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Le(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&na(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}na(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Xn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ie||t.flags&512&&ii(t)}catch(h){Q(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function va(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function wa(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Tl(4,t)}catch(u){Q(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){Q(t,l,u)}}var o=t.return;try{ii(t)}catch(u){Q(t,o,u)}break;case 5:var i=t.return;try{ii(t)}catch(u){Q(t,i,u)}}}catch(u){Q(t,t.return,u)}if(t===e){S=null;break}var a=t.sibling;if(a!==null){a.return=t.return,S=a;break}S=t.return}}var Cm=Math.ceil,xl=tt.ReactCurrentDispatcher,qi=tt.ReactCurrentOwner,Pe=tt.ReactCurrentBatchConfig,D=0,ee=null,G=null,ne=0,ye=0,en=kt(0),Z=0,sr=null,It=0,zl=0,es=0,Hn=null,me=null,ts=0,hn=1/0,Ve=null,yl=!1,ui=null,ht=null,Mr=!1,ut=null,vl=0,Vn=0,ci=null,Qr=-1,Yr=0;function ue(){return D&6?K():Qr!==-1?Qr:Qr=K()}function gt(e){return e.mode&1?D&2&&ne!==0?ne&-ne:am.transition!==null?(Yr===0&&(Yr=gu()),Yr):(e=F,e!==0||(e=window.event,e=e===void 0?16:ju(e.type)),e):1}function De(e,t,n,r){if(50<Vn)throw Vn=0,ci=null,Error(N(185));cr(e,n,r),(!(D&2)||e!==ee)&&(e===ee&&(!(D&2)&&(zl|=n),Z===4&&st(e,ne)),xe(e,r),n===1&&D===0&&!(t.mode&1)&&(hn=K()+500,_l&&Nt()))}function xe(e,t){var n=e.callbackNode;af(e,t);var r=nl(e,e===ee?ne:0);if(r===0)n!==null&&_s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_s(n),t===1)e.tag===0?sm(ka.bind(null,e)):Bu(ka.bind(null,e)),rm(function(){!(D&6)&&Nt()}),n=null;else{switch(xu(r)){case 1:n=Pi;break;case 4:n=pu;break;case 16:n=tl;break;case 536870912:n=hu;break;default:n=tl}n=Uc(n,zc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function zc(e,t){if(Qr=-1,Yr=0,D&6)throw Error(N(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=nl(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=wl(e,r);else{t=r;var l=D;D|=2;var o=Dc();(ee!==e||ne!==t)&&(Ve=null,hn=K()+500,zt(e,t));do try{bm();break}catch(a){Mc(e,a)}while(!0);Ui(),xl.current=o,D=l,G!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=Oo(e),l!==0&&(r=l,t=di(e,l))),t===1)throw n=sr,zt(e,0),st(e,r),xe(e,K()),n;if(t===6)st(e,r);else{if(l=e.current.alternate,!(r&30)&&!Em(l)&&(t=wl(e,r),t===2&&(o=Oo(e),o!==0&&(r=o,t=di(e,o))),t===1))throw n=sr,zt(e,0),st(e,r),xe(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Pt(e,me,Ve);break;case 3:if(st(e,r),(r&130023424)===r&&(t=ts+500-K(),10<t)){if(nl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Wo(Pt.bind(null,e,me,Ve),t);break}Pt(e,me,Ve);break;case 4:if(st(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-Me(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cm(r/1960))-r,10<r){e.timeoutHandle=Wo(Pt.bind(null,e,me,Ve),r);break}Pt(e,me,Ve);break;case 5:Pt(e,me,Ve);break;default:throw Error(N(329))}}}return xe(e,K()),e.callbackNode===n?zc.bind(null,e):null}function di(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=wl(e,t),e!==2&&(t=me,me=n,t!==null&&fi(t)),e}function fi(e){me===null?me=e:me.push.apply(me,e)}function Em(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Fe(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function st(e,t){for(t&=~es,t&=~zl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function ka(e){if(D&6)throw Error(N(327));an();var t=nl(e,0);if(!(t&1))return xe(e,K()),null;var n=wl(e,t);if(e.tag!==0&&n===2){var r=Oo(e);r!==0&&(t=r,n=di(e,r))}if(n===1)throw n=sr,zt(e,0),st(e,t),xe(e,K()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pt(e,me,Ve),xe(e,K()),null}function ns(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=K()+500,_l&&Nt())}}function $t(e){ut!==null&&ut.tag===0&&!(D&6)&&an();var t=D;D|=1;var n=Pe.transition,r=F;try{if(Pe.transition=null,F=1,e)return e()}finally{F=r,Pe.transition=n,D=t,!(D&6)&&Nt()}}function rs(){ye=en.current,U(en)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Oi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:mn(),U(he),U(se),Qi();break;case 5:Wi(r);break;case 4:mn();break;case 13:U(B);break;case 19:U(B);break;case 10:Ai(r.type._context);break;case 22:case 23:rs()}n=n.return}if(ee=e,G=e=xt(e.current,null),ne=ye=t,Z=0,sr=null,es=zl=It=0,me=Hn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}Lt=null}return e}function Mc(e,t){do{var n=G;try{if(Ui(),Hr.current=gl,hl){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}hl=!1}if(Ot=0,q=X=H=null,An=!1,lr=0,qi.current=null,n===null||n.return===null){Z=1,sr=t,G=null;break}e:{var o=e,i=n.return,a=n,u=t;if(t=ne,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=aa(i);if(w!==null){w.flags&=-257,ua(w,i,a,o,t),w.mode&1&&sa(o,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){sa(o,c,t),ls();break e}u=Error(N(426))}}else if(A&&a.mode&1){var C=aa(i);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ua(C,i,a,o,t),Ii(pn(u,a));break e}}o=u=pn(u,a),Z!==4&&(Z=2),Hn===null?Hn=[o]:Hn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=xc(o,u,t);ta(o,f);break e;case 1:a=u;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ht===null||!ht.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=yc(o,a,t);ta(o,k);break e}}o=o.return}while(o!==null)}Oc(n)}catch(j){t=j,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function Dc(){var e=xl.current;return xl.current=gl,e===null?gl:e}function ls(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(It&268435455)&&!(zl&268435455)||st(ee,ne)}function wl(e,t){var n=D;D|=2;var r=Dc();(ee!==e||ne!==t)&&(Ve=null,zt(e,t));do try{Pm();break}catch(l){Mc(e,l)}while(!0);if(Ui(),D=n,xl.current=r,G!==null)throw Error(N(261));return ee=null,ne=0,Z}function Pm(){for(;G!==null;)Fc(G)}function bm(){for(;G!==null&&!Jd();)Fc(G)}function Fc(e){var t=$c(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Oc(e):G=t,qi.current=null}function Oc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=km(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,G=null;return}}else if(n=wm(n,t,ye),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);Z===0&&(Z=5)}function Pt(e,t,n){var r=F,l=Pe.transition;try{Pe.transition=null,F=1,_m(e,t,n,r)}finally{Pe.transition=l,F=r}return null}function _m(e,t,n,r){do an();while(ut!==null);if(D&6)throw Error(N(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(uf(e,o),e===ee&&(G=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Uc(tl,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=F;F=1;var a=D;D|=4,qi.current=null,jm(e,n),Lc(n,e),Gf(Ho),rl=!!Bo,Ho=Bo=null,e.current=n,Sm(n),qd(),D=a,F=i,Pe.transition=o}else e.current=n;if(Mr&&(Mr=!1,ut=e,vl=l),o=e.pendingLanes,o===0&&(ht=null),nf(n.stateNode),xe(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(yl)throw yl=!1,e=ui,ui=null,e;return vl&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===ci?Vn++:(Vn=0,ci=e):Vn=0,Nt(),null}function an(){if(ut!==null){var e=xu(vl),t=Pe.transition,n=F;try{if(Pe.transition=null,F=16>e?16:e,ut===null)var r=!1;else{if(e=ut,ut=null,vl=0,D&6)throw Error(N(331));var l=D;for(D|=4,S=e.current;S!==null;){var o=S,i=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(S=c;S!==null;){var p=S;switch(p.tag){case 0:case 11:case 15:Bn(8,p,o)}var g=p.child;if(g!==null)g.return=p,S=g;else for(;S!==null;){p=S;var h=p.sibling,w=p.return;if(bc(p),p===c){S=null;break}if(h!==null){h.return=w,S=h;break}S=w}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}S=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,S=i;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Bn(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,S=f;break e}S=o.return}}var d=e.current;for(S=d;S!==null;){i=S;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,S=m;else e:for(i=d;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tl(9,a)}}catch(j){Q(a,a.return,j)}if(a===i){S=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,S=k;break e}S=a.return}}if(D=l,Nt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{F=n,Pe.transition=t}}return!1}function Na(e,t,n){t=pn(n,t),t=xc(e,t,1),e=pt(e,t,1),t=ue(),e!==null&&(cr(e,1,t),xe(e,t))}function Q(e,t,n){if(e.tag===3)Na(e,e,n);else for(;t!==null;){if(t.tag===3){Na(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=pn(n,e),e=yc(t,e,1),t=pt(t,e,1),e=ue(),t!==null&&(cr(t,1,e),xe(t,e));break}}t=t.return}}function Rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>K()-ts?zt(e,0):es|=n),xe(e,t)}function Ic(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ue();e=Je(e,t),e!==null&&(cr(e,t,n),xe(e,n))}function Lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ic(e,n)}function Tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Ic(e,n)}var $c;$c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,vm(e,t,n);pe=!!(e.flags&131072)}else pe=!1,A&&t.flags&1048576&&Hu(t,cl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wr(e,t),e=t.pendingProps;var l=cn(t,se.current);sn(t,n),l=Ki(null,t,r,e,l,n);var o=Gi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(o=!0,al(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Hi(t),l.updater=Ll,t.stateNode=l,l._reactInternals=t,Jo(t,r,e,n),t=ti(null,t,r,!0,o,n)):(t.tag=0,A&&o&&Fi(t),ae(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Mm(r),e=Le(r,e),l){case 0:t=ei(null,t,r,e,n);break e;case 1:t=fa(null,t,r,e,n);break e;case 11:t=ca(null,t,r,e,n);break e;case 14:t=da(null,t,r,Le(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ei(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),fa(e,t,r,l,n);case 3:e:{if(Nc(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Gu(e,t),ml(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=pn(Error(N(423)),t),t=ma(e,t,r,n,l);break e}else if(r!==l){l=pn(Error(N(424)),t),t=ma(e,t,r,n,l);break e}else for(ve=mt(t.stateNode.containerInfo.firstChild),we=t,A=!0,ze=null,n=Yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=qe(e,t,n);break e}ae(e,t,r,n)}t=t.child}return t;case 5:return Xu(t),e===null&&Go(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Vo(r,l)?i=null:o!==null&&Vo(r,o)&&(t.flags|=32),kc(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&Go(t),null;case 13:return jc(e,t,n);case 4:return Vi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ae(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),ca(e,t,r,l,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,I(dl,r._currentValue),r._currentValue=i,o!==null)if(Fe(o.value,i)){if(o.children===l.children&&!he.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){i=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Ke(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Xo(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(N(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Xo(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,sn(t,n),l=be(l),r=r(l),t.flags|=1,ae(e,t,r,n),t.child;case 14:return r=t.type,l=Le(r,t.pendingProps),l=Le(r.type,l),da(e,t,r,l,n);case 15:return vc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Le(r,l),Wr(e,t),t.tag=1,ge(r)?(e=!0,al(t)):e=!1,sn(t,n),gc(t,r,l),Jo(t,r,l,n),ti(null,t,r,!0,e,n);case 19:return Sc(e,t,n);case 22:return wc(e,t,n)}throw Error(N(156,t.tag))};function Uc(e,t){return mu(e,t)}function zm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new zm(e,t,n,r)}function os(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mm(e){if(typeof e=="function")return os(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Si)return 11;if(e===Ci)return 14}return 2}function xt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")os(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Vt:return Mt(n.children,l,o,t);case ji:i=8,l|=8;break;case No:return e=Ee(12,n,t,l|2),e.elementType=No,e.lanes=o,e;case jo:return e=Ee(13,n,t,l),e.elementType=jo,e.lanes=o,e;case So:return e=Ee(19,n,t,l),e.elementType=So,e.lanes=o,e;case Xa:return Ml(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ka:i=10;break e;case Ga:i=9;break e;case Si:i=11;break e;case Ci:i=14;break e;case lt:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=Ee(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Mt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Ml(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=Xa,e.lanes=n,e.stateNode={isHidden:!1},e}function xo(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function yo(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function is(e,t,n,r,l,o,i,a,u){return e=new Dm(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ee(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hi(o),e}function Fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ht,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ac(e){if(!e)return vt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(ge(n))return Au(e,n,t)}return t}function Bc(e,t,n,r,l,o,i,a,u){return e=is(n,r,!0,e,l,o,i,a,u),e.context=Ac(null),n=e.current,r=ue(),l=gt(n),o=Ke(r,l),o.callback=t??null,pt(n,o,l),e.current.lanes=l,cr(e,l,r),xe(e,r),e}function Dl(e,t,n,r){var l=t.current,o=ue(),i=gt(l);return n=Ac(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pt(l,t,i),e!==null&&(De(e,l,i,o),Br(e,l,i)),i}function kl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ja(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ss(e,t){ja(e,t),(e=e.alternate)&&ja(e,t)}function Om(){return null}var Hc=typeof reportError=="function"?reportError:function(e){console.error(e)};function as(e){this._internalRoot=e}Fl.prototype.render=as.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Dl(e,t,null,null)};Fl.prototype.unmount=as.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$t(function(){Dl(null,e,null,null)}),t[Ze]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=wu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Nu(e)}};function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sa(){}function Im(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=kl(i);o.call(c)}}var i=Bc(t,r,e,0,null,!1,!1,"",Sa);return e._reactRootContainer=i,e[Ze]=i.current,qn(e.nodeType===8?e.parentNode:e),$t(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=kl(u);a.call(c)}}var u=is(e,0,!1,null,null,!1,!1,"",Sa);return e._reactRootContainer=u,e[Ze]=u.current,qn(e.nodeType===8?e.parentNode:e),$t(function(){Dl(t,u,n,r)}),u}function Il(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var a=l;l=function(){var u=kl(i);a.call(u)}}Dl(t,i,e,l)}else i=Im(n,t,e,l,r);return kl(i)}yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mn(t.pendingLanes);n!==0&&(bi(t,n|1),xe(t,K()),!(D&6)&&(hn=K()+500,Nt()))}break;case 13:$t(function(){var r=Je(e,1);if(r!==null){var l=ue();De(r,e,1,l)}}),ss(e,1)}};_i=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ue();De(t,e,134217728,n)}ss(e,134217728)}};vu=function(e){if(e.tag===13){var t=gt(e),n=Je(e,t);if(n!==null){var r=ue();De(n,e,t,r)}ss(e,t)}};wu=function(){return F};ku=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Mo=function(e,t,n){switch(t){case"input":if(Po(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=bl(r);if(!l)throw Error(N(90));Ja(r),Po(r,l)}}}break;case"textarea":eu(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};su=ns;au=$t;var $m={usingClientEntryPoint:!1,Events:[fr,Kt,bl,ou,iu,ns]},Rn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Um={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=du(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{Sl=Dr.inject(Um),Ue=Dr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$m;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!us(t))throw Error(N(200));return Fm(e,t,null,n)};Ne.createRoot=function(e,t){if(!us(e))throw Error(N(299));var n=!1,r="",l=Hc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=is(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,qn(e.nodeType===8?e.parentNode:e),new as(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=du(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return $t(e)};Ne.hydrate=function(e,t,n){if(!Ol(t))throw Error(N(200));return Il(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!us(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=Hc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Bc(t,null,e,1,n??null,l,!1,o,i),e[Ze]=t.current,qn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Fl(t)};Ne.render=function(e,t,n){if(!Ol(t))throw Error(N(200));return Il(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(N(40));return e._reactRootContainer?($t(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Ne.unstable_batchedUpdates=ns;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Il(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function Vc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vc)}catch(e){console.error(e)}}Vc(),Va.exports=Ne;var Am=Va.exports,Wc,Ca=Am;Wc=Ca.createRoot,Ca.hydrateRoot;/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ea="popstate";function Bm(e={}){function t(r,l){let{pathname:o,search:i,hash:a}=r.location;return mi("",{pathname:o,search:i,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:ar(l)}return Vm(t,n,null,e)}function V(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Be(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hm(){return Math.random().toString(36).substring(2,10)}function Pa(e,t){return{usr:e.state,key:e.key,idx:t}}function mi(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?vn(t):t,state:n,key:t&&t.key||r||Hm()}}function ar({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function vn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Vm(e,t,n,r={}){let{window:l=document.defaultView,v5Compat:o=!1}=r,i=l.history,a="POP",u=null,c=p();c==null&&(c=0,i.replaceState({...i.state,idx:c},""));function p(){return(i.state||{idx:null}).idx}function g(){a="POP";let C=p(),f=C==null?null:C-c;c=C,u&&u({action:a,location:v.location,delta:f})}function h(C,f){a="PUSH";let d=mi(v.location,C,f);c=p()+1;let m=Pa(d,c),k=v.createHref(d);try{i.pushState(m,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(k)}o&&u&&u({action:a,location:v.location,delta:1})}function w(C,f){a="REPLACE";let d=mi(v.location,C,f);c=p();let m=Pa(d,c),k=v.createHref(d);i.replaceState(m,"",k),o&&u&&u({action:a,location:v.location,delta:0})}function y(C){return Wm(C)}let v={get action(){return a},get location(){return e(l,i)},listen(C){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(Ea,g),u=C,()=>{l.removeEventListener(Ea,g),u=null}},createHref(C){return t(l,C)},createURL:y,encodeLocation(C){let f=y(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:w,go(C){return i.go(C)}};return v}function Wm(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),V(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:ar(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Qc(e,t,n="/"){return Qm(e,t,n,!1)}function Qm(e,t,n,r){let l=typeof t=="string"?vn(t):t,o=et(l.pathname||"/",n);if(o==null)return null;let i=Yc(e);Ym(i);let a=null;for(let u=0;a==null&&u<i.length;++u){let c=lp(o);a=np(i[u],c,r)}return a}function Yc(e,t=[],n=[],r=""){let l=(o,i,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};u.relativePath.startsWith("/")&&(V(u.relativePath.startsWith(r),`Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),u.relativePath=u.relativePath.slice(r.length));let c=Ge([r,u.relativePath]),p=n.concat(u);o.children&&o.children.length>0&&(V(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Yc(o.children,t,p,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:ep(c,o.index),routesMeta:p})};return e.forEach((o,i)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,i);else for(let u of Kc(o.path))l(o,i,u)}),t}function Kc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let i=Kc(r.join("/")),a=[];return a.push(...i.map(u=>u===""?o:[o,u].join("/"))),l&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ym(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Km=/^:[\w-]+$/,Gm=3,Xm=2,Zm=1,Jm=10,qm=-2,ba=e=>e==="*";function ep(e,t){let n=e.split("/"),r=n.length;return n.some(ba)&&(r+=qm),t&&(r+=Xm),n.filter(l=>!ba(l)).reduce((l,o)=>l+(Km.test(o)?Gm:o===""?Zm:Jm),r)}function tp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function np(e,t,n=!1){let{routesMeta:r}=e,l={},o="/",i=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",g=Nl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),h=u.route;if(!g&&c&&n&&!r[r.length-1].route.index&&(g=Nl({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!g)return null;Object.assign(l,g.params),i.push({params:l,pathname:Ge([o,g.pathname]),pathnameBase:ap(Ge([o,g.pathnameBase])),route:h}),g.pathnameBase!=="/"&&(o=Ge([o,g.pathnameBase]))}return i}function Nl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rp(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],i=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,{paramName:p,isOptional:g},h)=>{if(p==="*"){let y=a[h]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[h];return g&&!w?c[p]=void 0:c[p]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:i,pattern:e}}function rp(e,t=!1,n=!0){Be(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function lp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Be(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function et(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function op(e,t="/"){let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?vn(e):e;return{pathname:n?n.startsWith("/")?n:ip(n,t):t,search:up(r),hash:cp(l)}}function ip(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function vo(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gc(e){let t=sp(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Xc(e,t,n,r=!1){let l;typeof e=="string"?l=vn(e):(l={...e},V(!l.pathname||!l.pathname.includes("?"),vo("?","pathname","search",l)),V(!l.pathname||!l.pathname.includes("#"),vo("#","pathname","hash",l)),V(!l.search||!l.search.includes("#"),vo("#","search","hash",l)));let o=e===""||l.pathname==="",i=o?"/":l.pathname,a;if(i==null)a=n;else{let g=t.length-1;if(!r&&i.startsWith("..")){let h=i.split("/");for(;h[0]==="..";)h.shift(),g-=1;l.pathname=h.join("/")}a=g>=0?t[g]:"/"}let u=op(l,a),c=i&&i!=="/"&&i.endsWith("/"),p=(o||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}var Ge=e=>e.join("/").replace(/\/\/+/g,"/"),ap=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),up=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,cp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Zc=["POST","PUT","PATCH","DELETE"];new Set(Zc);var fp=["GET",...Zc];new Set(fp);var wn=x.createContext(null);wn.displayName="DataRouter";var $l=x.createContext(null);$l.displayName="DataRouterState";x.createContext(!1);var Jc=x.createContext({isTransitioning:!1});Jc.displayName="ViewTransition";var mp=x.createContext(new Map);mp.displayName="Fetchers";var pp=x.createContext(null);pp.displayName="Await";var He=x.createContext(null);He.displayName="Navigation";var pr=x.createContext(null);pr.displayName="Location";var nt=x.createContext({outlet:null,matches:[],isDataRoute:!1});nt.displayName="Route";var cs=x.createContext(null);cs.displayName="RouteError";function hp(e,{relative:t}={}){V(hr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(He),{hash:l,pathname:o,search:i}=gr(e,{relative:t}),a=o;return n!=="/"&&(a=o==="/"?n:Ge([n,o])),r.createHref({pathname:a,search:i,hash:l})}function hr(){return x.useContext(pr)!=null}function jt(){return V(hr(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(pr).location}var qc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ed(e){x.useContext(He).static||x.useLayoutEffect(e)}function gp(){let{isDataRoute:e}=x.useContext(nt);return e?_p():xp()}function xp(){V(hr(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(wn),{basename:t,navigator:n}=x.useContext(He),{matches:r}=x.useContext(nt),{pathname:l}=jt(),o=JSON.stringify(Gc(r)),i=x.useRef(!1);return ed(()=>{i.current=!0}),x.useCallback((u,c={})=>{if(Be(i.current,qc),!i.current)return;if(typeof u=="number"){n.go(u);return}let p=Xc(u,JSON.parse(o),l,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ge([t,p.pathname])),(c.replace?n.replace:n.push)(p,c.state,c)},[t,n,o,l,e])}x.createContext(null);function gr(e,{relative:t}={}){let{matches:n}=x.useContext(nt),{pathname:r}=jt(),l=JSON.stringify(Gc(n));return x.useMemo(()=>Xc(e,JSON.parse(l),r,t==="path"),[e,l,r,t])}function yp(e,t){return td(e,t)}function td(e,t,n,r){var f;V(hr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=x.useContext(He),{matches:o}=x.useContext(nt),i=o[o.length-1],a=i?i.params:{},u=i?i.pathname:"/",c=i?i.pathnameBase:"/",p=i&&i.route;{let d=p&&p.path||"";nd(u,!p||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let g=jt(),h;if(t){let d=typeof t=="string"?vn(t):t;V(c==="/"||((f=d.pathname)==null?void 0:f.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${d.pathname}" was given in the \`location\` prop.`),h=d}else h=g;let w=h.pathname||"/",y=w;if(c!=="/"){let d=c.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(d.length).join("/")}let v=Qc(e,{pathname:y});Be(p||v!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Be(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=jp(v&&v.map(d=>Object.assign({},d,{params:Object.assign({},a,d.params),pathname:Ge([c,l.encodeLocation?l.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:Ge([c,l.encodeLocation?l.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),o,n,r);return t&&C?x.createElement(pr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},C):C}function vp(){let e=bp(),t=dp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:o},"ErrorBoundary")," or"," ",x.createElement("code",{style:o},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,i)}var wp=x.createElement(vp,null),kp=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?x.createElement(nt.Provider,{value:this.props.routeContext},x.createElement(cs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Np({routeContext:e,match:t,children:n}){let r=x.useContext(wn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(nt.Provider,{value:e},n)}function jp(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,o=n==null?void 0:n.errors;if(o!=null){let u=l.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id])!==void 0);V(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),l=l.slice(0,Math.min(l.length,u+1))}let i=!1,a=-1;if(n)for(let u=0;u<l.length;u++){let c=l[u];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=u),c.route.id){let{loaderData:p,errors:g}=n,h=c.route.loader&&!p.hasOwnProperty(c.route.id)&&(!g||g[c.route.id]===void 0);if(c.route.lazy||h){i=!0,a>=0?l=l.slice(0,a+1):l=[l[0]];break}}}return l.reduceRight((u,c,p)=>{let g,h=!1,w=null,y=null;n&&(g=o&&c.route.id?o[c.route.id]:void 0,w=c.route.errorElement||wp,i&&(a<0&&p===0?(nd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,y=null):a===p&&(h=!0,y=c.route.hydrateFallbackElement||null)));let v=t.concat(l.slice(0,p+1)),C=()=>{let f;return g?f=w:h?f=y:c.route.Component?f=x.createElement(c.route.Component,null):c.route.element?f=c.route.element:f=u,x.createElement(Np,{match:c,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:f})};return n&&(c.route.ErrorBoundary||c.route.errorElement||p===0)?x.createElement(kp,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:C(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):C()},null)}function ds(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sp(e){let t=x.useContext(wn);return V(t,ds(e)),t}function Cp(e){let t=x.useContext($l);return V(t,ds(e)),t}function Ep(e){let t=x.useContext(nt);return V(t,ds(e)),t}function fs(e){let t=Ep(e),n=t.matches[t.matches.length-1];return V(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pp(){return fs("useRouteId")}function bp(){var r;let e=x.useContext(cs),t=Cp("useRouteError"),n=fs("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function _p(){let{router:e}=Sp("useNavigate"),t=fs("useNavigate"),n=x.useRef(!1);return ed(()=>{n.current=!0}),x.useCallback(async(l,o={})=>{Be(n.current,qc),n.current&&(typeof l=="number"?e.navigate(l):await e.navigate(l,{fromRouteId:t,...o}))},[e,t])}var _a={};function nd(e,t,n){!t&&!_a[e]&&(_a[e]=!0,Be(!1,n))}x.memo(Rp);function Rp({routes:e,future:t,state:n}){return td(e,void 0,n,t)}function Gr(e){V(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Lp({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:l,static:o=!1}){V(!hr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),a=x.useMemo(()=>({basename:i,navigator:l,static:o,future:{}}),[i,l,o]);typeof n=="string"&&(n=vn(n));let{pathname:u="/",search:c="",hash:p="",state:g=null,key:h="default"}=n,w=x.useMemo(()=>{let y=et(u,i);return y==null?null:{location:{pathname:y,search:c,hash:p,state:g,key:h},navigationType:r}},[i,u,c,p,g,h,r]);return Be(w!=null,`<Router basename="${i}"> is not able to match the URL "${u}${c}${p}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:x.createElement(He.Provider,{value:a},x.createElement(pr.Provider,{children:t,value:w}))}function Tp({children:e,location:t}){return yp(pi(e),t)}function pi(e,t=[]){let n=[];return x.Children.forEach(e,(r,l)=>{if(!x.isValidElement(r))return;let o=[...t,l];if(r.type===x.Fragment){n.push.apply(n,pi(r.props.children,o));return}V(r.type===Gr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),V(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=pi(r.props.children,o)),n.push(i)}),n}var Xr="get",Zr="application/x-www-form-urlencoded";function Ul(e){return e!=null&&typeof e.tagName=="string"}function zp(e){return Ul(e)&&e.tagName.toLowerCase()==="button"}function Mp(e){return Ul(e)&&e.tagName.toLowerCase()==="form"}function Dp(e){return Ul(e)&&e.tagName.toLowerCase()==="input"}function Fp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Op(e,t){return e.button===0&&(!t||t==="_self")&&!Fp(e)}var Fr=null;function Ip(){if(Fr===null)try{new FormData(document.createElement("form"),0),Fr=!1}catch{Fr=!0}return Fr}var $p=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function wo(e){return e!=null&&!$p.has(e)?(Be(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zr}"`),null):e}function Up(e,t){let n,r,l,o,i;if(Mp(e)){let a=e.getAttribute("action");r=a?et(a,t):null,n=e.getAttribute("method")||Xr,l=wo(e.getAttribute("enctype"))||Zr,o=new FormData(e)}else if(zp(e)||Dp(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||a.getAttribute("action");if(r=u?et(u,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Xr,l=wo(e.getAttribute("formenctype"))||wo(a.getAttribute("enctype"))||Zr,o=new FormData(a,e),!Ip()){let{name:c,type:p,value:g}=e;if(p==="image"){let h=c?`${c}.`:"";o.append(`${h}x`,"0"),o.append(`${h}y`,"0")}else c&&o.append(c,g)}}else{if(Ul(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Xr,r=null,l=Zr,i=e}return o&&l==="text/plain"&&(i=o,o=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ms(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ap(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&et(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Bp(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Hp(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Vp(e,t,n){let r=await Promise.all(e.map(async l=>{let o=t.routes[l.route.id];if(o){let i=await Bp(o,n);return i.links?i.links():[]}return[]}));return Kp(r.flat(1).filter(Hp).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Ra(e,t,n,r,l,o){let i=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var p;return n[c].pathname!==u.pathname||((p=n[c].route.path)==null?void 0:p.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return o==="assets"?t.filter((u,c)=>i(u,c)||a(u,c)):o==="data"?t.filter((u,c)=>{var g;let p=r.routes[u.route.id];if(!p||!p.hasLoader)return!1;if(i(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let h=u.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function Wp(e,t,{includeHydrateFallback:n}={}){return Qp(e.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let o=[l.module];return l.clientActionModule&&(o=o.concat(l.clientActionModule)),l.clientLoaderModule&&(o=o.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(o=o.concat(l.hydrateFallbackModule)),l.imports&&(o=o.concat(l.imports)),o}).flat(1))}function Qp(e){return[...new Set(e)]}function Yp(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Kp(e,t){let n=new Set;return new Set(t),e.reduce((r,l)=>{let o=JSON.stringify(Yp(l));return n.has(o)||(n.add(o),r.push({key:o,link:l})),r},[])}function rd(){let e=x.useContext(wn);return ms(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Gp(){let e=x.useContext($l);return ms(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ps=x.createContext(void 0);ps.displayName="FrameworkContext";function ld(){let e=x.useContext(ps);return ms(e,"You must render this element inside a <HydratedRouter> element"),e}function Xp(e,t){let n=x.useContext(ps),[r,l]=x.useState(!1),[o,i]=x.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:p,onTouchStart:g}=t,h=x.useRef(null);x.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let v=f=>{f.forEach(d=>{i(d.isIntersecting)})},C=new IntersectionObserver(v,{threshold:.5});return h.current&&C.observe(h.current),()=>{C.disconnect()}}},[e]),x.useEffect(()=>{if(r){let v=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(v)}}},[r]);let w=()=>{l(!0)},y=()=>{l(!1),i(!1)};return n?e!=="intent"?[o,h,{}]:[o,h,{onFocus:Ln(a,w),onBlur:Ln(u,y),onMouseEnter:Ln(c,w),onMouseLeave:Ln(p,y),onTouchStart:Ln(g,w)}]:[!1,h,{}]}function Ln(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Zp({page:e,...t}){let{router:n}=rd(),r=x.useMemo(()=>Qc(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement(qp,{page:e,matches:r,...t}):null}function Jp(e){let{manifest:t,routeModules:n}=ld(),[r,l]=x.useState([]);return x.useEffect(()=>{let o=!1;return Vp(e,t,n).then(i=>{o||l(i)}),()=>{o=!0}},[e,t,n]),r}function qp({page:e,matches:t,...n}){let r=jt(),{manifest:l,routeModules:o}=ld(),{basename:i}=rd(),{loaderData:a,matches:u}=Gp(),c=x.useMemo(()=>Ra(e,t,u,l,r,"data"),[e,t,u,l,r]),p=x.useMemo(()=>Ra(e,t,u,l,r,"assets"),[e,t,u,l,r]),g=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,v=!1;if(t.forEach(f=>{var m;let d=l.routes[f.route.id];!d||!d.hasLoader||(!c.some(k=>k.route.id===f.route.id)&&f.route.id in a&&((m=o[f.route.id])!=null&&m.shouldRevalidate)||d.hasClientLoader?v=!0:y.add(f.route.id))}),y.size===0)return[];let C=Ap(e,i,"data");return v&&y.size>0&&C.searchParams.set("_routes",t.filter(f=>y.has(f.route.id)).map(f=>f.route.id).join(",")),[C.pathname+C.search]},[i,a,r,l,c,t,e,o]),h=x.useMemo(()=>Wp(p,l),[p,l]),w=Jp(p);return x.createElement(x.Fragment,null,g.map(y=>x.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),h.map(y=>x.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),w.map(({key:y,link:v})=>x.createElement("link",{key:y,...v})))}function e0(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var od=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{od&&(window.__reactRouterVersion="7.7.1")}catch{}function t0({basename:e,children:t,window:n}){let r=x.useRef();r.current==null&&(r.current=Bm({window:n,v5Compat:!0}));let l=r.current,[o,i]=x.useState({action:l.action,location:l.location}),a=x.useCallback(u=>{x.startTransition(()=>i(u))},[i]);return x.useLayoutEffect(()=>l.listen(a),[l,a]),x.createElement(Lp,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:l})}var id=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tn=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:l,reloadDocument:o,replace:i,state:a,target:u,to:c,preventScrollReset:p,viewTransition:g,...h},w){let{basename:y}=x.useContext(He),v=typeof c=="string"&&id.test(c),C,f=!1;if(typeof c=="string"&&v&&(C=c,od))try{let M=new URL(window.location.href),R=c.startsWith("//")?new URL(M.protocol+c):new URL(c),fe=et(R.pathname,y);R.origin===M.origin&&fe!=null?c=fe+R.search+R.hash:f=!0}catch{Be(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let d=hp(c,{relative:l}),[m,k,j]=Xp(r,h),b=o0(c,{replace:i,state:a,target:u,preventScrollReset:p,relative:l,viewTransition:g});function P(M){t&&t(M),M.defaultPrevented||b(M)}let _=x.createElement("a",{...h,...j,href:C||d,onClick:f||o?t:P,ref:e0(w,k),target:u,"data-discover":!v&&n==="render"?"true":void 0});return m&&!v?x.createElement(x.Fragment,null,_,x.createElement(Zp,{page:d})):_});tn.displayName="Link";var n0=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:l=!1,style:o,to:i,viewTransition:a,children:u,...c},p){let g=gr(i,{relative:c.relative}),h=jt(),w=x.useContext($l),{navigator:y,basename:v}=x.useContext(He),C=w!=null&&c0(g)&&a===!0,f=y.encodeLocation?y.encodeLocation(g).pathname:g.pathname,d=h.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(d=d.toLowerCase(),m=m?m.toLowerCase():null,f=f.toLowerCase()),m&&v&&(m=et(m,v)||m);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let j=d===f||!l&&d.startsWith(f)&&d.charAt(k)==="/",b=m!=null&&(m===f||!l&&m.startsWith(f)&&m.charAt(f.length)==="/"),P={isActive:j,isPending:b,isTransitioning:C},_=j?t:void 0,M;typeof r=="function"?M=r(P):M=[r,j?"active":null,b?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let R=typeof o=="function"?o(P):o;return x.createElement(tn,{...c,"aria-current":_,className:M,ref:p,style:R,to:i,viewTransition:a},typeof u=="function"?u(P):u)});n0.displayName="NavLink";var r0=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:l,state:o,method:i=Xr,action:a,onSubmit:u,relative:c,preventScrollReset:p,viewTransition:g,...h},w)=>{let y=a0(),v=u0(a,{relative:c}),C=i.toLowerCase()==="get"?"get":"post",f=typeof a=="string"&&id.test(a),d=m=>{if(u&&u(m),m.defaultPrevented)return;m.preventDefault();let k=m.nativeEvent.submitter,j=(k==null?void 0:k.getAttribute("formmethod"))||i;y(k||m.currentTarget,{fetcherKey:t,method:j,navigate:n,replace:l,state:o,relative:c,preventScrollReset:p,viewTransition:g})};return x.createElement("form",{ref:w,method:C,action:v,onSubmit:r?u:d,...h,"data-discover":!f&&e==="render"?"true":void 0})});r0.displayName="Form";function l0(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sd(e){let t=x.useContext(wn);return V(t,l0(e)),t}function o0(e,{target:t,replace:n,state:r,preventScrollReset:l,relative:o,viewTransition:i}={}){let a=gp(),u=jt(),c=gr(e,{relative:o});return x.useCallback(p=>{if(Op(p,t)){p.preventDefault();let g=n!==void 0?n:ar(u)===ar(c);a(e,{replace:g,state:r,preventScrollReset:l,relative:o,viewTransition:i})}},[u,a,c,n,r,t,e,l,o,i])}var i0=0,s0=()=>`__${String(++i0)}__`;function a0(){let{router:e}=sd("useSubmit"),{basename:t}=x.useContext(He),n=Pp();return x.useCallback(async(r,l={})=>{let{action:o,method:i,encType:a,formData:u,body:c}=Up(r,t);if(l.navigate===!1){let p=l.fetcherKey||s0();await e.fetch(p,n,l.action||o,{preventScrollReset:l.preventScrollReset,formData:u,body:c,formMethod:l.method||i,formEncType:l.encType||a,flushSync:l.flushSync})}else await e.navigate(l.action||o,{preventScrollReset:l.preventScrollReset,formData:u,body:c,formMethod:l.method||i,formEncType:l.encType||a,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[e,t,n])}function u0(e,{relative:t}={}){let{basename:n}=x.useContext(He),r=x.useContext(nt);V(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),o={...gr(e||".",{relative:t})},i=jt();if(e==null){o.search=i.search;let a=new URLSearchParams(o.search),u=a.getAll("index");if(u.some(p=>p==="")){a.delete("index"),u.filter(g=>g).forEach(g=>a.append("index",g));let p=a.toString();o.search=p?`?${p}`:""}}return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:Ge([n,o.pathname])),ar(o)}function c0(e,{relative:t}={}){let n=x.useContext(Jc);V(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=sd("useViewTransitionState"),l=gr(e,{relative:t});if(!n.isTransitioning)return!1;let o=et(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=et(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Nl(l.pathname,i)!=null||Nl(l.pathname,o)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var d0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),O=(e,t)=>{const n=x.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:a="",children:u,...c},p)=>x.createElement("svg",{ref:p,...d0,width:l,height:l,stroke:r,strokeWidth:i?Number(o)*24/Number(l):o,className:["lucide",`lucide-${f0(e)}`,a].join(" "),...c},[...t.map(([g,h])=>x.createElement(g,h)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=O("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=O("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=O("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=O("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=O("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=O("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=O("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=O("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=O("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=O("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=O("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=O("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=O("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=O("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=O("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=O("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=O("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=O("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=O("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=O("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=O("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=O("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=O("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=O("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=O("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=O("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=O("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.

import React, { useState } from 'react';
import { createContext, useContext, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Route as Gr, Routes as Tp } from 'react-router-dom';
import { render as Wc } from 'react-dom';
import { Link as tn } from 'react-router-dom'; // Assuming this is used for navigation

const dd = createContext(void 0);
const R0 = ({ children: e }) => {
  const [t, n] = useState('light');
  useEffect(() => {
    (() => {
      const o = localStorage.getItem('theme');
      if (o && (o === 'light' || o === 'dark')) {
        n(o);
        return;
      }
      if (typeof window < 'u' && window.matchMedia) {
        const i = window.matchMedia('(prefers-color-scheme: dark)').matches;
        n(i ? 'dark' : 'light');
      }
    })();
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', t);
    const l = document.documentElement;
    l.classList.remove('light', 'dark');
    l.classList.add(t);
    t === 'dark' ? l.classList.add('dark') : l.classList.remove('dark');
    const o = document.querySelector('meta[name=theme-color]');
    o && o.setAttribute('content', t === 'dark' ? '#1f2937' : '#ffffff');
  }, [t]);
  const r = () => {
    n((l) => (l === 'light' ? 'dark' : 'light'));
  };
  return jsx(dd.Provider, { value: { theme: t, toggleTheme: r }, children: e });
};

const L0 = () => {
  const e = useContext(dd);
  if (e === void 0) throw new Error('useTheme must be used within a ThemeProvider');
  return e;
};

// Header component (update branding and links)
const T0 = () => {
  const { theme: e, toggleTheme: t } = L0();
  const n = jt(); // Assuming jt is a hook for getting current route (e.g., useLocation)
  const r = (l) => n.pathname === l;
  return jsx('header', {
    className:
      'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-all duration-300 shadow-sm dark:shadow-gray-800/20',
    children: jsx('div', {
      className: 'container mx-auto px-3 sm:px-4 py-3 sm:py-4',
      children: jsxs('div', {
        className: 'flex items-center justify-between',
        children: [
          jsxs(tn, {
            to: '/',
            className: 'flex items-center space-x-2 group',
            children: [
              jsx('div', {
                className:
                  'p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg',
                children: jsx(Al, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-white' }),
              }),
              jsxs('div', {
                className: 'hidden xs:block',
                children: [
                  jsx('h1', {
                    className:
                      'text-lg sm:text-xl font-bold text-gray-900 dark:text-white transition-colors duration-200',
                    children: 'Facebook Downloader',
                  }),
                  jsx('p', {
                    className: 'text-xs text-gray-500 dark:text-gray-400 transition-colors duration-200',
                    children: 'Professional Video Downloader',
                  }),
                ],
              }),
            ],
          }),
          jsxs('nav', {
            className: 'flex items-center space-x-1 sm:space-x-2 md:space-x-4',
            children: [
              jsxs(tn, {
                to: '/',
                className: `flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  r('/')
                    ? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`,
                children: [
                  jsx(v0, { className: 'h-4 w-4' }),
                  jsx('span', { className: 'hidden sm:inline text-sm', children: 'Home' }),
                ],
              }),
              jsxs(tn, {
                to: '/download',
                className: `flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  r('/download')
                    ? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`,
                children: [
                  jsx(ad, { className: 'h-4 w-4' }),
                  jsx('span', { className: 'hidden sm:inline text-sm', children: 'API' }),
                ],
              }),
              jsxs(tn, {
                to: '/about',
                className: `flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  r('/about')
                    ? 'bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`,
                children: [
                  jsx(hs, { className: 'h-4 w-4' }),
                  jsx('span', { className: 'hidden sm:inline text-sm', children: 'About' }),
                ],
              }),
              jsxs('button', {
                onClick: t,
                className:
                  'relative p-2.5 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-md hover:shadow-lg group',
                'aria-label': 'Toggle theme',
                children: [
                  jsx('div', {
                    className: 'relative',
                    children: e === 'light' ? jsx(N0, { className: 'h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-12' }) : jsx(E0, { className: 'h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-45' }),
                  }),
                  jsx('div', { className: 'absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300' }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
};

// Updated API call function
const F0 = async (url) => {
  try {
    if (!url) return { error: 'Invalid URL provided.' };
    const response = await fetch(`https://main.api.progmore.com/?url=${encodeURIComponent(url)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (!data.success) return { error: data.error_message || 'Failed to retrieve download links.' };
    return {
      file_name: 'facebook_video.mp4', // Since API doesn't provide file_name, use a default
      download_link: data.download_links[0],
      thumbnail: null, // API doesn't provide thumbnail
      file_size: 'Unknown', // API doesn't provide file size
      size_bytes: 0, // API doesn't provide size in bytes
      proxy_url: null, // No proxy URL in the provided API
    };
  } catch (error) {
    console.error('API call failed:', error);
    return { error: 'A generic error occurred. Please try again.' };
  }
};

// Updated FileInfo component (simplified, as some fields like thumbnail and proxy_url are not available)
const D0 = ({ fileInfo: e }) => {
  const [t, n] = useState(false);
  const i = async (u) => {
    try {
      await navigator.clipboard.writeText(u);
      n(true);
      setTimeout(() => n(false), 2000);
    } catch {
      const p = document.createElement('textarea');
      p.value = u;
      document.body.appendChild(p);
      p.select();
      document.execCommand('copy');
      document.body.removeChild(p);
      n(true);
      setTimeout(() => n(false), 2000);
    }
  };
  return jsx('div', {
    className:
      'animate-fade-in-up bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300',
    children: jsxs('div', {
      className: 'flex flex-col lg:flex-row gap-4 sm:gap-6',
      children: [
        jsx('div', {
          className: 'flex-shrink-0 mx-auto lg:mx-0',
          children: jsx('div', {
            className:
              'w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-md',
            children: jsx(P0, { className: 'h-8 w-8 text-red-500' }), // Assuming P0 is a video icon
          }),
        }),
        jsxs('div', {
          className: 'flex-1 space-y-4',
          children: [
            jsxs('div', {
              className: 'text-center lg:text-left',
              children: [
                jsx('h3', {
                  className: 'text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 break-all line-clamp-2',
                  children: e.file_name,
                }),
                jsxs('div', {
                  className: 'flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-600 dark:text-gray-400 justify-center lg:justify-start',
                  children: [
                    jsx('span', {
                      className: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg font-medium inline-block w-fit mx-auto sm:mx-0',
                      children: e.file_size,
                    }),
                  ],
                }),
              ],
            }),
            jsxs('div', {
              className: 'space-y-3',
              children: [
                jsx('button', {
                  onClick: () => window.open(e.download_link, '_blank'),
                  className:
                    'flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex-1 group',
                  children: [
                    jsx(Al, { className: 'h-5 w-5 group-hover:animate-bounce' }),
                    jsx('span', { children: 'Download' }),
                  ],
                }),
                jsxs('div', {
                  className: 'p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200',
                  children: [
                    jsxs('div', {
                      className: 'flex items-center justify-between mb-2',
                      children: [
                        jsx('span', {
                          className: 'text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide',
                          children: 'Download URL',
                        }),
                        jsxs('button', {
                          onClick: () => i(e.download_link),
                          className:
                            'flex items-center space-x-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-200 transform hover:scale-105',
                          children: [
                            t ? jsx(bt, { className: 'h-4 w-4' }) : jsx(_t, { className: 'h-4 w-4' }),
                            jsx('span', { children: t ? 'Copied!' : 'Copy' }),
                          ],
                        }),
                      ],
                    }),
                    jsx('span', {
                      className: 'text-sm text-gray-600 dark:text-gray-400 break-all block',
                      children: e.download_link,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

// Updated Home/Download component
const O0 = () => {
  const [l, o] = useState('');
  const [i, a] = useState(false);
  const [u, c] = useState(null);
  const [p, g] = useState('');
  const h = async () => {
    if (!l.trim()) {
      g('Please enter a Facebook URL');
      return;
    }
    a(true);
    g('');
    c(null);
    try {
      const y = await F0(l);
      y.error ? g(y.error) : c(y);
    } catch {
      g('Failed to process the download. Please try again.');
    } finally {
      a(false);
    }
  };
  const w = (y) => {
    if (y.key === 'Enter') h();
  };
  return jsx('div', {
    className:
      'min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-all duration-500',
    children: jsxs('div', {
      className: 'max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6',
      children: [
        jsx('div', {
          className: 'text-center mb-6 sm:mb-8 md:mb-12',
          children: jsxs('div', {
            className: 'animate-fade-in-up',
            children: [
              jsxs('h1', {
                className:
                  'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight',
                children: [
                  'Download from ',
                  jsxs('span', {
                    className: 'relative inline-block',
                    children: [
                      jsx('span', {
                        className:
                          'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x',
                        children: 'Facebook',
                      }),
                      jsx('span', {
                        className:
                          'absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full animate-pulse',
                      }),
                    ],
                  }),
                ],
              }),
              jsx('p', {
                className: 'text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed',
                children: 'Fast, secure, and reliable video downloads from Facebook. Get direct download links with no limits.',
              }),
              jsx('div', {
                className: 'absolute top-10 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60',
              }),
              jsx('div', {
                className: 'absolute top-20 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-40',
              }),
              jsx('div', {
                className: 'absolute top-32 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-float-slow opacity-50',
              }),
            ],
          }),
        }),
        jsx('div', {
          className:
            'animate-fade-in-up bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-4 sm:mb-6 md:mb-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]',
          children: jsxs('div', {
            className: 'max-w-3xl mx-auto',
            children: [
              jsx('h2', {
                className: 'text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center',
                children: 'Enter Facebook URL',
              }),
              jsxs('div', {
                className: 'space-y-4 sm:space-y-6',
                children: [
                  jsxs('div', {
                    className: 'relative group',
                    children: [
                      jsx('input', {
                        type: 'url',
                        value: l,
                        onChange: (y) => o(y.target.value),
                        onKeyPress: w,
                        placeholder: 'https://www.facebook.com/share/r/...',
                        className:
                          'w-full px-4 sm:px-5 py-3 sm:py-4 pl-12 sm:pl-14 pr-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 group-hover:shadow-lg focus:shadow-xl text-sm sm:text-base',
                        disabled: i,
                      }),
                      jsx(Bl, {
                        className:
                          'absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-focus-within:scale-110',
                      }),
                      jsx('div', {
                        className:
                          'absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10',
                      }),
                    ],
                  }),
                  jsxs('button', {
                    onClick: h,
                    disabled: i || !l.trim(),
                    className:
                      'relative overflow-hidden w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl disabled:scale-100 disabled:cursor-not-allowed disabled:shadow-none flex items-center justify-center space-x-2 sm:space-x-3 group text-sm sm:text-base',
                    children: [
                      i
                        ? jsxs(React.Fragment, {
                            children: [
                              jsx(k0, { className: 'h-5 w-5 sm:h-6 sm:w-6 animate-spin' }),
                              jsx('span', { children: 'Processing...' }),
                            ],
                          })
                        : jsxs(React.Fragment, {
                            children: [
                              jsx(Al, {
                                className: 'h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce transition-transform duration-300',
                              }),
                              jsx('span', { children: 'Get Download Link' }),
                            ],
                          }),
                      jsx('div', {
                        className:
                          'absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700',
                      }),
                    ],
                  }),
                ],
              }),
              p &&
                jsx('div', {
                  className:
                    'mt-4 sm:mt-6 p-4 sm:p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl sm:rounded-2xl animate-shake shadow-lg',
                  children: jsxs('div', {
                    className: 'flex items-center space-x-3',
                    children: [
                      jsxs('div', {
                        className: 'relative',
                        children: [
                          jsx(La, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-red-500 animate-pulse' }),
                          jsx('div', {
                            className: 'absolute inset-0 rounded-full bg-red-500 opacity-20 animate-ping',
                          }),
                        ],
                      }),
                      jsx('p', {
                        className: 'text-red-700 dark:text-red-400 text-sm sm:text-base font-medium',
                        children: p,
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
        u && jsx(D0, { fileInfo: u }),
      ],
    }),
  });
};

// Updated About component
const I0 = () =>
  jsxs('div', {
    className: 'max-w-4xl mx-auto',
    children: [
      jsxs('div', {
        className: 'text-center mb-12',
        children: [
          jsxs('h1', {
            className: 'text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4',
            children: [
              'About ',
              jsx('span', {
                className: 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent',
                children: 'Facebook Downloader',
              }),
            ],
          }),
          jsx('p', {
            className: 'text-lg md:text-xl text-gray-600 dark:text-gray-300 px-4',
            children: 'A professional, secure, and efficient way to download videos from Facebook',
          }),
        ],
      }),
      jsxs('div', {
        className: 'grid sm:grid-cols-1 md:grid-cols-2 gap-6 mb-12',
        children: [
          jsxs('div', {
            className: 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700',
            children: [
              jsxs('div', {
                className: 'flex items-center space-x-3 mb-4',
                children: [
                  jsx('div', {
                    className: 'p-2 bg-blue-100 dark:bg-blue-900 rounded-lg',
                    children: jsx(_0, { className: 'h-6 w-6 text-blue-600 dark:text-blue-400' }),
                  }),
                  jsx('h3', {
                    className: 'text-xl font-semibold text-gray-900 dark:text-white',
                    children: 'Fast Downloads',
                  }),
                ],
              }),
              jsx('p', {
                className: 'text-gray-600 dark:text-gray-300',
                children: 'Get direct download links instantly without waiting or speed limits.',
              }),
            ],
          }),
          jsxs('div', {
            className: 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700',
            children: [
              jsxs('div', {
                className: 'flex items-center space-x-3 mb-4',
                children: [
                  jsx('div', {
                    className: 'p-2 bg-green-100 dark:bg-green-900 rounded-lg',
                    children: jsx(cd, { className: 'h-6 w-6 text-green-600 dark:text-green-400' }),
                  }),
                  jsx('h3', {
                    className: 'text-xl font-semibold text-gray-900 dark:text-white',
                    children: 'Secure & Private',
                  }),
                ],
              }),
              jsx('p', {
                className: 'text-gray-600 dark:text-gray-300',
                children: 'No personal data or authentication required. Downloads are processed securely.',
              }),
            ],
          }),
          jsxs('div', {
            className: 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700',
            children: [
              jsxs('div', {
                className: 'flex items-center space-x-3 mb-4',
                children: [
                  jsx('div', {
                    className: 'p-2 bg-purple-100 dark:bg-purple-900 rounded-lg',
                    children: jsx(Al, { className: 'h-6 w-6 text-purple-600 dark:text-purple-400' }),
                  }),
                  jsx('h3', {
                    className: 'text-xl font-semibold text-gray-900 dark:text-white',
                    children: 'No Limits',
                  }),
                ],
              }),
              jsx('p', {
                className: 'text-gray-600 dark:text-gray-300',
                children: 'Download videos of any size without restrictions.',
              }),
            ],
          }),
          jsxs('div', {
            className: 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700',
            children: [
              jsxs('div', {
                className: 'flex items-center space-x-3 mb-4',
                children: [
                  jsx('div', {
                    className: 'p-2 bg-orange-100 dark:bg-orange-900 rounded-lg',
                    children: jsx(x0, { className: 'h-6 w-6 text-orange-600 dark:text-orange-400' }),
                  }),
                  jsx('h3', {
                    className: 'text-xl font-semibold text-gray-900 dark:text-white',
                    children: 'Cross-Platform',
                  }),
                ],
              }),
              jsx('p', {
                className: 'text-gray-600 dark:text-gray-300',
                children: 'Works on all devices and browsers with a responsive design.',
              }),
            ],
          }),
        ],
      }),
      jsxs('div', {
        className: 'bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-12',
        children: [
          jsx('h2', {
            className: 'text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center',
            children: 'How It Works',
          }),
          jsxs('div', {
            className: 'space-y-6',
            children: [
              jsxs('div', {
                className: 'flex items-start space-x-4',
                children: [
                  jsx('div', {
                    className: 'flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold',
                    children: '1',
                  }),
                  jsxs('div', {
                    children: [
                      jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 dark:text-white mb-2',
                        children: 'Find a Facebook Video',
                      }),
                      jsx('p', {
                        className: 'text-gray-600 dark:text-gray-300',
                        children: 'Locate the Facebook video you want to download and copy its share URL.',
                      }),
                    ],
                  }),
                ],
              }),
              jsxs('div', {
                className: 'flex items-start space-x-4',
                children: [
                  jsx('div', {
                    className: 'flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold',
                    children: '2',
                  }),
                  jsxs('div', {
                    children: [
                      jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 dark:text-white mb-2',
                        children: 'Paste the URL',
                      }),
                      jsx('p', {
                        className: 'text-gray-600 dark:text-gray-300',
                        children: 'Enter the copied URL into our download form.',
                      }),
                    ],
                  }),
                ],
              }),
              jsxs('div', {
                className: 'flex items-start space-x-4',
                children: [
                  jsx('div', {
                    className: 'flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold',
                    children: '3',
                  }),
                  jsxs('div', {
                    children: [
                      jsx('h3', {
                        className: 'text-lg font-semibold text-gray-900 dark:text-white mb-2',
                        children: 'Download',
                      }),
                      jsx('p', {
                        className: 'text-gray-600 dark:text-gray-300',
                        children: 'Get instant access to the direct download link for the video.',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      jsxs('div', {
        className:
          'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 text-center',
        children: [
          jsxs('div', {
            className: 'flex items-center justify-center space-x-2 mb-4',
            children: [
              jsx(y0, { className: 'h-6 w-6 text-red-500' }),
              jsx('h2', {
                className: 'text-2xl font-bold text-gray-900 dark:text-white',
                children: 'Made with Love',
              }),
            ],
          }),
          jsx('p', {
            className: 'text-gray-600 dark:text-gray-300 mb-4',
            children: 'This project is developed and maintained by the Ashlynn Repository.',
          }),
          jsxs('a', {
            href: 'https://t.me/Ashlynn_Repository',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200',
            children: [
              jsx(Bl, { className: 'h-5 w-5' }),
              jsx('span', { children: 'Visit Ashlynn Repository' }),
            ],
          }),
        ],
      }),
    ],
  });

// Updated API Documentation component
const $0 = () => {
  const [e, t] = useState(null);
  const n = async (c, p) => {
    try {
      await navigator.clipboard.writeText(c);
      t(p);
      setTimeout(() => t(null), 2000);
    } catch (g) {
      console.error('Failed to copy text: ', g);
    }
  };
  const r = 'https://main.api.progmore.com';
  const l = `curl "${r}/?url=https://www.facebook.com/share/r/1abc123def456"`;
  const o = `// JavaScript/Node.js Example
const response = await fetch('${r}/?url=' + encodeURIComponent('https://www.facebook.com/share/r/1abc123def456'), {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
});

const data = await response.json();
console.log(data);`;
  const i = `# Python Example
import requests

url = "${r}/?url=" + requests.utils.quote("https://www.facebook.com/share/r/1abc123def456")
response = requests.get(url)
data = response.json()
print(data)`;
  const a = `{
  "success": true,
  "download_links": [
    "https://video-sof1-2.xx.fbcdn.net/o1/v/t2/f2/m86/..."
  ],
  "error_message": "",
  "combain": null,
  "headers": null
}`;
  const u = `{
  "success": false,
  "error_message": "Invalid URL or video not found",
  "download_links": [],
  "combain": null,
  "headers": null
}`;
  return jsx('div', {
    className:
      'min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 transition-all duration-500',
    children: jsxs('div', {
      className: 'max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8',
      children: [
        jsx('div', {
          className: 'text-center mb-8 sm:mb-10 md:mb-12',
          children: jsxs('div', {
            className: 'animate-fade-in-up',
            children: [
              jsx('h1', {
                className:
                  'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4',
                children: jsx('span', {
                  className:
                    'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x',
                  children: 'API Documentation',
                }),
              }),
              jsx('p', {
                className:
                  'text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed',
                children: 'Learn how to integrate Facebook video downloading into your applications using our REST API',
              }),
              jsxs('div', {
                className:
                  'mt-4 sm:mt-6 inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 sm:px-4 py-2 rounded-full font-medium text-sm',
                children: [
                  jsx('div', {
                    className: 'w-2 h-2 bg-green-500 rounded-full animate-pulse',
                  }),
                  jsx('span', { children: 'API Status: Active' }),
                ],
              }),
            ],
          }),
        }),
        jsxs('div', {
          className:
            'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 mb-6 sm:mb-8 shadow-xl hover:shadow-2xl transition-all duration-300',
          children: [
            jsxs('div', {
              className: 'flex items-center space-x-3 mb-4 sm:mb-6',
              children: [
                jsx('div', {
                  className: 'p-2 bg-green-100 dark:bg-green-900 rounded-lg',
                  children: jsx(Ta, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400' }),
                }),
                jsx('h2', {
                  className: 'text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white',
                  children: 'Quick Start',
                }),
              ],
            }),
            jsxs('div', {
              className: 'grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
              children: [
                jsxs('div', {
                  className: 'space-y-3 sm:space-y-4',
                  children: [
                    jsx('h3', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white',
                      children: 'Base URL',
                    }),
                    jsx('div', {
                      className: 'bg-gray-100 dark:bg-gray-700 rounded-lg p-3 sm:p-4',
                      children: jsx('code', {
                        className: 'text-xs sm:text-sm text-gray-800 dark:text-gray-200 break-all block overflow-x-auto',
                        children: r,
                      }),
                    }),
                  ],
                }),
                jsxs('div', {
                  className: 'space-y-3 sm:space-y-4',
                  children: [
                    jsx('h3', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white',
                      children: 'Authentication',
                    }),
                    jsx('p', {
                      className: 'text-gray-600 dark:text-gray-300 text-xs sm:text-sm',
                      children: 'No authentication required. Simply provide the Facebook video URL.',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl',
          children: [
            jsxs('div', {
              className: 'flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-2 sm:gap-0',
              children: [
                jsxs('div', {
                  className: 'flex items-center space-x-2 sm:space-x-3',
                  children: [
                    jsx('span', {
                      className:
                        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 sm:px-3 py-1 rounded-lg font-mono text-xs sm:text-sm',
                      children: 'GET',
                    }),
                    jsx('h3', {
                      className: 'text-lg sm:text-xl font-bold text-gray-900 dark:text-white break-all',
                      children: '/?url={facebook_url}',
                    }),
                  ],
                }),
                jsx('p', {
                  className: 'text-gray-600 dark:text-gray-300 text-xs sm:text-sm',
                  children: 'Get video download links',
                }),
              ],
            }),
            jsxs('div', {
              className: 'space-y-4 sm:space-y-6',
              children: [
                jsxs('div', {
                  children: [
                    jsx('h4', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                      children: 'Request',
                    }),
                    jsxs('div', {
                      className: 'bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 relative overflow-hidden',
                      children: [
                        jsx('button', {
                          onClick: () => n(l, 'post'),
                          className:
                            'absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 z-10',
                          children: e === 'post' ? jsx(bt, { className: 'h-3 w-3 sm:h-4 sm:w-4' }) : jsx(_t, { className: 'h-3 w-3 sm:h-4 sm:w-4' }),
                        }),
                        jsx('div', {
                          className: 'overflow-x-auto',
                          children: jsx('pre', {
                            className: 'text-xs sm:text-sm text-gray-100 whitespace-pre',
                            children: jsx('code', { children: l }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs('div', {
                  className: 'grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
                  children: [
                    jsxs('div', {
                      children: [
                        jsx('h4', {
                          className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                          children: 'Parameters',
                        }),
                        jsxs('div', {
                          className: 'space-y-3',
                          children: [
                            jsxs('div', {
                              className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-3',
                              children: [
                                jsxs('div', {
                                  className: 'flex items-center justify-between mb-1',
                                  children: [
                                    jsx('code', {
                                      className: 'text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400',
                                      children: 'url',
                                    }),
                                    jsx('span', {
                                      className: 'text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded',
                                      children: 'required',
                                    }),
                                  ],
                                }),
                                jsx('p', {
                                  className: 'text-xs sm:text-sm text-gray-600 dark:text-gray-300',
                                  children: 'Facebook share URL',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxs('div', {
                      children: [
                        jsx('h4', {
                          className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                          children: 'Headers',
                        }),
                        jsx('div', {
                          className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-3',
                          children: jsx('code', {
                            className: 'text-xs sm:text-sm text-gray-800 dark:text-gray-200 break-all',
                            children: 'Content-Type: application/json',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl',
          children: [
            jsxs('div', {
              className: 'flex items-center space-x-3 mb-4 sm:mb-6',
              children: [
                jsx('div', {
                  className: 'p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg',
                  children: jsx(ad, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-yellow-600 dark:text-yellow-400' }),
                }),
                jsx('h3', {
                  className: 'text-lg sm:text-xl font-bold text-gray-900 dark:text-white',
                  children: 'Code Examples',
                }),
              ],
            }),
            jsxs('div', {
              className: 'grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6',
              children: [
                jsxs('div', {
                  children: [
                    jsx('h4', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                      children: 'JavaScript/Node.js',
                    }),
                    jsxs('div', {
                      className: 'bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 relative overflow-hidden',
                      children: [
                        jsx('button', {
                          onClick: () => n(o, 'js'),
                          className:
                            'absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 z-10',
                          children: e === 'js' ? jsx(bt, { className: 'h-3 w-3 sm:h-4 sm:w-4' }) : jsx(_t, { className: 'h-3 w-3 sm:h-4 sm:w-4' }),
                        }),
                        jsx('div', {
                          className: 'overflow-x-auto',
                          children: jsx('pre', {
                            className: 'text-xs sm:text-sm text-gray-100 whitespace-pre',
                            children: jsx('code', { children: o }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs('div', {
                  children: [
                    jsx('h4', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                      children: 'Python',
                    }),
                    jsxs('div', {
                      className: 'bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 relative overflow-hidden',
                      children: [
                        jsx('button', {
                          onClick: () => n(i, 'python'),
                          className:
                            'absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 z-10',
                          children: e === 'python' ? jsx(bt, { className: 'h-3 w-3 sm:h-4 sm:w-4' }) : jsx(_t, { className: 'h-3 w-3 sm:h-4 sm:w-4' }),
                        }),
                        jsx('div', {
                          className: 'overflow-x-auto',
                          children: jsx('pre', {
                            className: 'text-xs sm:text-sm text-gray-100 whitespace-pre',
                            children: jsx('code', { children: i }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl',
          children: [
            jsxs('div', {
              className: 'flex items-center space-x-3 mb-4 sm:mb-6',
              children: [
                jsx('div', {
                  className: 'p-2 bg-purple-100 dark:bg-purple-900 rounded-lg',
                  children: jsx(ud, { className: 'h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400' }),
                }),
                jsx('h3', {
                  className: 'text-lg sm:text-xl font-bold text-gray-900 dark:text-white',
                  children: 'Response Format',
                }),
              ],
            }),
            jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
              children: [
                jsxs('div', {
                  children: [
                    jsx('h4', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                      children: 'Success Response',
                    }),
                    jsxs('div', {
                      className: 'bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 relative overflow-hidden',
                      children: [
                        jsx('button', {
                          onClick: () => n(a, 'response'),
                          className:
                            'absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 z-10',
                          children: e === 'response' ? jsx(bt, { className: 'h-3 w-3 sm:h-4 sm:w-4' }) : jsx(_t, { className: 'h-3 w-3 sm:h-4 sm:w-4' }),
                        }),
                        jsx('div', {
                          className: 'overflow-x-auto',
                          children: jsx('pre', {
                            className: 'text-xs sm:text-sm text-gray-100 whitespace-pre',
                            children: jsx('code', { children: a }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs('div', {
                  children: [
                    jsx('h4', {
                      className: 'text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3',
                      children: 'Error Response',
                    }),
                    jsxs('div', {
                      className: 'bg-gray-900 dark:bg-gray-800 rounded-lg p-3 sm:p-4 relative overflow-hidden',
                      children: [
                        jsx('button', {
                          onClick: () => n(u, 'error'),
                          className:
                            'absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 z-10',
                          children: e === 'error' ? jsx(bt, { className: 'h-3 w-3 sm:h-4 sm:w-4' }) : jsx(_t, { className: 'h-3 w-3 sm:h-4 sm:w-4' }),
                        }),
                        jsx('div', {
                          className: 'overflow-x-auto',
                          children: jsx('pre', {
                            className: 'text-xs sm:text-sm text-gray-100 whitespace-pre',
                            children: jsx('code', { children: u }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl',
          children: [
            jsx('h3', {
              className: 'text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6',
              children: 'Response Fields',
            }),
            jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
              children: [
                jsxs('div', {
                  className: 'space-y-4',
                  children: [
                    jsxs('div', {
                      className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-4',
                      children: [
                        jsx('h4', {
                          className: 'font-semibold text-gray-900 dark:text-white mb-2',
                          children: 'success',
                        }),
                        jsx('p', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Boolean indicating if the request was successful',
                        }),
                      ],
                    }),
                    jsxs('div', {
                      className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-4',
                      children: [
                        jsx('h4', {
                          className: 'font-semibold text-gray-900 dark:text-white mb-2',
                          children: 'download_links',
                        }),
                        jsx('p', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Array of direct download URLs for the video',
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs('div', {
                  className: 'space-y-4',
                  children: [
                    jsxs('div', {
                      className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-4',
                      children: [
                        jsx('h4', {
                          className: 'font-semibold text-gray-900 dark:text-white mb-2',
                          children: 'error_message',
                        }),
                        jsx('p', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Error message if the request fails',
                        }),
                      ],
                    }),
                    jsxs('div', {
                      className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-4',
                      children: [
                        jsx('h4', {
                          className: 'font-semibold text-gray-900 dark:text-white mb-2',
                          children: 'combain',
                        }),
                        jsx('p', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Additional data (usually null)',
                        }),
                      ],
                    }),
                    jsxs('div', {
                      className: 'bg-gray-50 dark:bg-gray-700 rounded-lg p-4',
                      children: [
                        jsx('h4', {
                          className: 'font-semibold text-gray-900 dark:text-white mb-2',
                          children: 'headers',
                        }),
                        jsx('p', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Additional headers (usually null)',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl',
          children: [
            jsx('h3', {
              className: 'text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6',
              children: 'HTTP Status Codes',
            }),
            jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6',
              children: [
                jsxs('div', {
                  className: 'space-y-3',
                  children: [
                    jsxs('div', {
                      className: 'flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg',
                      children: [
                        jsx('span', { className: 'font-mono text-sm', children: '200' }),
                        jsx('span', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Success - Video information retrieved',
                        }),
                      ],
                    }),
                    jsxs('div', {
                      className: 'flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg',
                      children: [
                        jsx('span', { className: 'font-mono text-sm', children: '400' }),
                        jsx('span', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Bad Request - Invalid parameters',
                        }),
                      ],
                    }),
                  ],
                }),
                jsxs('div', {
                  className: 'space-y-3',
                  children: [
                    jsxs('div', {
                      className: 'flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg',
                      children: [
                        jsx('span', { className: 'font-mono text-sm', children: '404' }),
                        jsx('span', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Not Found - Endpoint not found',
                        }),
                      ],
                    }),
                    jsxs('div', {
                      className: 'flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg',
                      children: [
                        jsx('span', { className: 'font-mono text-sm', children: '500' }),
                        jsx('span', {
                          className: 'text-sm text-gray-600 dark:text-gray-300',
                          children: 'Server Error - Internal error occurred',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-green-200 dark:border-green-800 shadow-xl',
          children: [
            jsx('h3', {
              className: 'text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4',
              children: 'Test the API',
            }),
            jsx('p', {
              className: 'text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base',
              children: 'Use this endpoint to test the API functionality:',
            }),
            jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6',
              children: [
                jsxs('div', {
                  className: 'bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4',
                  children: [
                    jsx('h4', {
                      className: 'font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base',
                      children: 'Download Endpoint',
                    }),
                    jsx('code', {
                      className: 'text-xs sm:text-sm text-blue-600 dark:text-blue-400 break-all block overflow-x-auto',
                      children: `${r}/?url={facebook_url}`,
                    }),
                  ],
                }),
              ],
            }),
            jsxs('div', {
              className: 'flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center',
              children: [
                jsxs('a', {
                  href: '/',
                  className:
                    'inline-flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base',
                  children: [
                    jsx(Ta, { className: 'h-4 w-4 sm:h-5 sm:w-5' }),
                    jsx('span', { children: 'Try Web Interface' }),
                  ],
                }),
                jsxs('a', {
                  href: 'https://github.com/terawebar',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'inline-flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base',
                  children: [
                    jsx(Bl, { className: 'h-4 w-4 sm:h-5 sm:w-5' }),
                    jsx('span', { children: 'Documentation' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

// Main App component (remove CookieProvider)
function U0() {
  return jsx(R0, {
    children: jsx(t0, {
      children: jsxs('div', {
        className: 'min-h-screen transition-colors duration-300',
        children: [
          jsx(T0, {}),
          jsx('main', {
            children: jsxs(Tp, {
              children: [
                jsx(Gr, { path: '/', element: jsx(O0, {}) }),
                jsx(Gr, { path: '/about', element: jsx(I0, {}) }),
                jsx(Gr, { path: '/download', element: jsx($0, {}) }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}

Wc(document.getElementById('root')).render(jsx(React.StrictMode, { children: jsx(U0, {}) }));