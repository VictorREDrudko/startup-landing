(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function c(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=c(s);fetch(s.href,d)}})();function Nx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _s={exports:{}},Ii={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function Ux(){if(vp)return Ii;vp=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(o,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var x in s)x!=="key"&&(d[x]=s[x])}else d=s;return s=d.ref,{$$typeof:n,type:o,key:m,ref:s!==void 0?s:null,props:d}}return Ii.Fragment=r,Ii.jsx=c,Ii.jsxs=c,Ii}var bp;function Hx(){return bp||(bp=1,_s.exports=Ux()),_s.exports}var p=Hx(),Cs={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Bx(){if(Sp)return xt;Sp=1;var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.iterator;function j(S){return S===null||typeof S!="object"?null:(S=R&&S[R]||S["@@iterator"],typeof S=="function"?S:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,G={};function X(S,q,J){this.props=S,this.context=q,this.refs=G,this.updater=J||V}X.prototype.isReactComponent={},X.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},X.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function W(){}W.prototype=X.prototype;function H(S,q,J){this.props=S,this.context=q,this.refs=G,this.updater=J||V}var $=H.prototype=new W;$.constructor=H,Y($,X.prototype),$.isPureReactComponent=!0;var at=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},ct=Object.prototype.hasOwnProperty;function et(S,q,J,I,ut,vt){return J=vt.ref,{$$typeof:n,type:S,key:q,ref:J!==void 0?J:null,props:vt}}function Dt(S,q){return et(S.type,q,void 0,void 0,void 0,S.props)}function St(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function Kt(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(J){return q[J]})}var $t=/\/+/g;function st(S,q){return typeof S=="object"&&S!==null&&S.key!=null?Kt(""+S.key):q.toString(36)}function Tt(){}function Mt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Tt,Tt):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Rt(S,q,J,I,ut){var vt=typeof S;(vt==="undefined"||vt==="boolean")&&(S=null);var ot=!1;if(S===null)ot=!0;else switch(vt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(S.$$typeof){case n:case r:ot=!0;break;case b:return ot=S._init,Rt(ot(S._payload),q,J,I,ut)}}if(ot)return ut=ut(S),ot=I===""?"."+st(S,0):I,at(ut)?(J="",ot!=null&&(J=ot.replace($t,"$&/")+"/"),Rt(ut,q,J,"",function(ne){return ne})):ut!=null&&(St(ut)&&(ut=Dt(ut,J+(ut.key==null||S&&S.key===ut.key?"":(""+ut.key).replace($t,"$&/")+"/")+ot)),q.push(ut)),1;ot=0;var Jt=I===""?".":I+":";if(at(S))for(var jt=0;jt<S.length;jt++)I=S[jt],vt=Jt+st(I,jt),ot+=Rt(I,q,J,vt,ut);else if(jt=j(S),typeof jt=="function")for(S=jt.call(S),jt=0;!(I=S.next()).done;)I=I.value,vt=Jt+st(I,jt++),ot+=Rt(I,q,J,vt,ut);else if(vt==="object"){if(typeof S.then=="function")return Rt(Mt(S),q,J,I,ut);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ot}function O(S,q,J){if(S==null)return S;var I=[],ut=0;return Rt(S,I,"","",function(vt){return q.call(J,vt,ut++)}),I}function K(S){if(S._status===-1){var q=S._result;q=q(),q.then(function(J){(S._status===0||S._status===-1)&&(S._status=1,S._result=J)},function(J){(S._status===0||S._status===-1)&&(S._status=2,S._result=J)}),S._status===-1&&(S._status=0,S._result=q)}if(S._status===1)return S._result.default;throw S._result}var it=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function mt(){}return xt.Children={map:O,forEach:function(S,q,J){O(S,function(){q.apply(this,arguments)},J)},count:function(S){var q=0;return O(S,function(){q++}),q},toArray:function(S){return O(S,function(q){return q})||[]},only:function(S){if(!St(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},xt.Component=X,xt.Fragment=c,xt.Profiler=s,xt.PureComponent=H,xt.StrictMode=o,xt.Suspense=v,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,xt.__COMPILER_RUNTIME={__proto__:null,c:function(S){return Q.H.useMemoCache(S)}},xt.cache=function(S){return function(){return S.apply(null,arguments)}},xt.cloneElement=function(S,q,J){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var I=Y({},S.props),ut=S.key,vt=void 0;if(q!=null)for(ot in q.ref!==void 0&&(vt=void 0),q.key!==void 0&&(ut=""+q.key),q)!ct.call(q,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&q.ref===void 0||(I[ot]=q[ot]);var ot=arguments.length-2;if(ot===1)I.children=J;else if(1<ot){for(var Jt=Array(ot),jt=0;jt<ot;jt++)Jt[jt]=arguments[jt+2];I.children=Jt}return et(S.type,ut,void 0,void 0,vt,I)},xt.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},xt.createElement=function(S,q,J){var I,ut={},vt=null;if(q!=null)for(I in q.key!==void 0&&(vt=""+q.key),q)ct.call(q,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ut[I]=q[I]);var ot=arguments.length-2;if(ot===1)ut.children=J;else if(1<ot){for(var Jt=Array(ot),jt=0;jt<ot;jt++)Jt[jt]=arguments[jt+2];ut.children=Jt}if(S&&S.defaultProps)for(I in ot=S.defaultProps,ot)ut[I]===void 0&&(ut[I]=ot[I]);return et(S,vt,void 0,void 0,null,ut)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(S){return{$$typeof:x,render:S}},xt.isValidElement=St,xt.lazy=function(S){return{$$typeof:b,_payload:{_status:-1,_result:S},_init:K}},xt.memo=function(S,q){return{$$typeof:g,type:S,compare:q===void 0?null:q}},xt.startTransition=function(S){var q=Q.T,J={};Q.T=J;try{var I=S(),ut=Q.S;ut!==null&&ut(J,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(mt,it)}catch(vt){it(vt)}finally{Q.T=q}},xt.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},xt.use=function(S){return Q.H.use(S)},xt.useActionState=function(S,q,J){return Q.H.useActionState(S,q,J)},xt.useCallback=function(S,q){return Q.H.useCallback(S,q)},xt.useContext=function(S){return Q.H.useContext(S)},xt.useDebugValue=function(){},xt.useDeferredValue=function(S,q){return Q.H.useDeferredValue(S,q)},xt.useEffect=function(S,q,J){var I=Q.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(S,q)},xt.useId=function(){return Q.H.useId()},xt.useImperativeHandle=function(S,q,J){return Q.H.useImperativeHandle(S,q,J)},xt.useInsertionEffect=function(S,q){return Q.H.useInsertionEffect(S,q)},xt.useLayoutEffect=function(S,q){return Q.H.useLayoutEffect(S,q)},xt.useMemo=function(S,q){return Q.H.useMemo(S,q)},xt.useOptimistic=function(S,q){return Q.H.useOptimistic(S,q)},xt.useReducer=function(S,q,J){return Q.H.useReducer(S,q,J)},xt.useRef=function(S){return Q.H.useRef(S)},xt.useState=function(S){return Q.H.useState(S)},xt.useSyncExternalStore=function(S,q,J){return Q.H.useSyncExternalStore(S,q,J)},xt.useTransition=function(){return Q.H.useTransition()},xt.version="19.1.1",xt}var Ep;function of(){return Ep||(Ep=1,Cs.exports=Bx()),Cs.exports}var L=of();const pt=Nx(L);var Rs={exports:{}},Pi={},zs={exports:{}},Ds={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Lx(){return Tp||(Tp=1,(function(n){function r(O,K){var it=O.length;O.push(K);t:for(;0<it;){var mt=it-1>>>1,S=O[mt];if(0<s(S,K))O[mt]=K,O[it]=S,it=mt;else break t}}function c(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var K=O[0],it=O.pop();if(it!==K){O[0]=it;t:for(var mt=0,S=O.length,q=S>>>1;mt<q;){var J=2*(mt+1)-1,I=O[J],ut=J+1,vt=O[ut];if(0>s(I,it))ut<S&&0>s(vt,I)?(O[mt]=vt,O[ut]=it,mt=ut):(O[mt]=I,O[J]=it,mt=J);else if(ut<S&&0>s(vt,it))O[mt]=vt,O[ut]=it,mt=ut;else break t}}return K}function s(O,K){var it=O.sortIndex-K.sortIndex;return it!==0?it:O.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var m=Date,x=m.now();n.unstable_now=function(){return m.now()-x}}var v=[],g=[],b=1,R=null,j=3,V=!1,Y=!1,G=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function at(O){for(var K=c(g);K!==null;){if(K.callback===null)o(g);else if(K.startTime<=O)o(g),K.sortIndex=K.expirationTime,r(v,K);else break;K=c(g)}}function Q(O){if(G=!1,at(O),!Y)if(c(v)!==null)Y=!0,ct||(ct=!0,st());else{var K=c(g);K!==null&&Rt(Q,K.startTime-O)}}var ct=!1,et=-1,Dt=5,St=-1;function Kt(){return X?!0:!(n.unstable_now()-St<Dt)}function $t(){if(X=!1,ct){var O=n.unstable_now();St=O;var K=!0;try{t:{Y=!1,G&&(G=!1,H(et),et=-1),V=!0;var it=j;try{e:{for(at(O),R=c(v);R!==null&&!(R.expirationTime>O&&Kt());){var mt=R.callback;if(typeof mt=="function"){R.callback=null,j=R.priorityLevel;var S=mt(R.expirationTime<=O);if(O=n.unstable_now(),typeof S=="function"){R.callback=S,at(O),K=!0;break e}R===c(v)&&o(v),at(O)}else o(v);R=c(v)}if(R!==null)K=!0;else{var q=c(g);q!==null&&Rt(Q,q.startTime-O),K=!1}}break t}finally{R=null,j=it,V=!1}K=void 0}}finally{K?st():ct=!1}}}var st;if(typeof $=="function")st=function(){$($t)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Mt=Tt.port2;Tt.port1.onmessage=$t,st=function(){Mt.postMessage(null)}}else st=function(){W($t,0)};function Rt(O,K){et=W(function(){O(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(O){O.callback=null},n.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dt=0<O?Math.floor(1e3/O):5},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_next=function(O){switch(j){case 1:case 2:case 3:var K=3;break;default:K=j}var it=j;j=K;try{return O()}finally{j=it}},n.unstable_requestPaint=function(){X=!0},n.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var it=j;j=O;try{return K()}finally{j=it}},n.unstable_scheduleCallback=function(O,K,it){var mt=n.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?mt+it:mt):it=mt,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=it+S,O={id:b++,callback:K,priorityLevel:O,startTime:it,expirationTime:S,sortIndex:-1},it>mt?(O.sortIndex=it,r(g,O),c(v)===null&&O===c(g)&&(G?(H(et),et=-1):G=!0,Rt(Q,it-mt))):(O.sortIndex=S,r(v,O),Y||V||(Y=!0,ct||(ct=!0,st()))),O},n.unstable_shouldYield=Kt,n.unstable_wrapCallback=function(O){var K=j;return function(){var it=j;j=K;try{return O.apply(this,arguments)}finally{j=it}}}})(Ds)),Ds}var Ap;function Vx(){return Ap||(Ap=1,zs.exports=Lx()),zs.exports}var js={exports:{}},we={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function kx(){if(wp)return we;wp=1;var n=of();function r(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(v,g,b){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:R==null?null:""+R,children:v,containerInfo:g,implementation:b}}var m=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,we.createPortal=function(v,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return d(v,g,null,b)},we.flushSync=function(v){var g=m.T,b=o.p;try{if(m.T=null,o.p=2,v)return v()}finally{m.T=g,o.p=b,o.d.f()}},we.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(v,g))},we.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},we.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var b=g.as,R=x(b,g.crossOrigin),j=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?o.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:R,integrity:j,fetchPriority:V}):b==="script"&&o.d.X(v,{crossOrigin:R,integrity:j,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},we.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=x(g.as,g.crossOrigin);o.d.M(v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(v)},we.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,R=x(b,g.crossOrigin);o.d.L(v,b,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},we.preloadModule=function(v,g){if(typeof v=="string")if(g){var b=x(g.as,g.crossOrigin);o.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(v)},we.requestFormReset=function(v){o.d.r(v)},we.unstable_batchedUpdates=function(v,g){return v(g)},we.useFormState=function(v,g,b){return m.H.useFormState(v,g,b)},we.useFormStatus=function(){return m.H.useHostTransitionStatus()},we.version="19.1.1",we}var _p;function qx(){if(_p)return js.exports;_p=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),js.exports=kx(),js.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function Gx(){if(Cp)return Pi;Cp=1;var n=Vx(),r=of(),c=qx();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(d(t)!==t)throw Error(o(188))}function v(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,l=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return x(i),t;if(u===l)return x(i),e;u=u.sibling}throw Error(o(188))}if(a.return!==l.return)a=i,l=u;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,l=u;break}if(h===l){f=!0,l=i,a=u;break}h=h.sibling}if(!f){for(h=u.child;h;){if(h===a){f=!0,a=u,l=i;break}if(h===l){f=!0,l=u,a=i;break}h=h.sibling}if(!f)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,R=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),$=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Kt=Symbol.for("react.memo_cache_sentinel"),$t=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=$t&&t[$t]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case X:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case ct:return"SuspenseList";case St:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case $:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case at:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case et:return e=t.displayName||null,e!==null?e:Mt(t.type)||"Memo";case Dt:e=t._payload,t=t._init;try{return Mt(t(e))}catch{}}return null}var Rt=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},mt=[],S=-1;function q(t){return{current:t}}function J(t){0>S||(t.current=mt[S],mt[S]=null,S--)}function I(t,e){S++,mt[S]=t.current,t.current=e}var ut=q(null),vt=q(null),ot=q(null),Jt=q(null);function jt(t,e){switch(I(ot,e),I(vt,t),I(ut,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Z0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Z0(e),t=K0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(ut),I(ut,t)}function ne(){J(ut),J(vt),J(ot)}function ra(t){t.memoizedState!==null&&I(Jt,t);var e=ut.current,a=K0(e,t.type);e!==a&&(I(vt,t),I(ut,a))}function ca(t){vt.current===t&&(J(ut),J(vt)),Jt.current===t&&(J(Jt),Zi._currentValue=it)}var Ce=Object.prototype.hasOwnProperty,ei=n.unstable_scheduleCallback,Wl=n.unstable_cancelCallback,Su=n.unstable_shouldYield,dc=n.unstable_requestPaint,We=n.unstable_now,zf=n.unstable_getCurrentPriorityLevel,ai=n.unstable_ImmediatePriority,E=n.unstable_UserBlockingPriority,C=n.unstable_NormalPriority,M=n.unstable_LowPriority,tt=n.unstable_IdlePriority,F=n.log,Z=n.unstable_setDisableYieldValue,nt=null,gt=null;function Ct(t){if(typeof F=="function"&&Z(t),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(nt,t)}catch{}}var Gt=Math.clz32?Math.clz32:hc,Fl=Math.log,xa=Math.LN2;function hc(t){return t>>>=0,t===0?32:31-(Fl(t)/xa|0)|0}var Fa=256,Ja=4194304;function Ra(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Al(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var i=0,u=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var h=l&134217727;return h!==0?(l=h&~u,l!==0?i=Ra(l):(f&=h,f!==0?i=Ra(f):a||(a=h&~t,a!==0&&(i=Ra(a))))):(h=l&~u,h!==0?i=Ra(h):f!==0?i=Ra(f):a||(a=l&~t,a!==0&&(i=Ra(a)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:i}function wl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Eu(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Df(){var t=Fa;return Fa<<=1,(Fa&4194048)===0&&(Fa=256),t}function jf(){var t=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),t}function pc(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function li(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Eg(t,e,a,l,i,u){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,y=t.expirationTimes,_=t.hiddenUpdates;for(a=f&~a;0<a;){var N=31-Gt(a),k=1<<N;h[N]=0,y[N]=-1;var z=_[N];if(z!==null)for(_[N]=null,N=0;N<z.length;N++){var D=z[N];D!==null&&(D.lane&=-536870913)}a&=~k}l!==0&&Of(t,l,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(f&~e))}function Of(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-Gt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function Mf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-Gt(a),i=1<<l;i&e|t[l]&e&&(t[l]|=e),a&=~i}}function mc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function gc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Nf(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:hp(t.type))}function Tg(t,e){var a=K.p;try{return K.p=t,e()}finally{K.p=a}}var Ia=Math.random().toString(36).slice(2),Te="__reactFiber$"+Ia,Oe="__reactProps$"+Ia,Jl="__reactContainer$"+Ia,xc="__reactEvents$"+Ia,Ag="__reactListeners$"+Ia,wg="__reactHandles$"+Ia,Uf="__reactResources$"+Ia,ni="__reactMarker$"+Ia;function yc(t){delete t[Te],delete t[Oe],delete t[xc],delete t[Ag],delete t[wg]}function Il(t){var e=t[Te];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Jl]||a[Te]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=I0(t);t!==null;){if(a=t[Te])return a;t=I0(t)}return e}t=a,a=t.parentNode}return null}function Pl(t){if(t=t[Te]||t[Jl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ii(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function tn(t){var e=t[Uf];return e||(e=t[Uf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function he(t){t[ni]=!0}var Hf=new Set,Bf={};function _l(t,e){en(t,e),en(t+"Capture",e)}function en(t,e){for(Bf[t]=e,t=0;t<e.length;t++)Hf.add(e[t])}var _g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lf={},Vf={};function Cg(t){return Ce.call(Vf,t)?!0:Ce.call(Lf,t)?!1:_g.test(t)?Vf[t]=!0:(Lf[t]=!0,!1)}function Tu(t,e,a){if(Cg(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Au(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function za(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var vc,kf;function an(t){if(vc===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||"",kf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vc+t+kf}var bc=!1;function Sc(t,e){if(!t||bc)return"";bc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(D){var z=D}Reflect.construct(t,[],k)}else{try{k.call()}catch(D){z=D}t.call(k.prototype)}}else{try{throw Error()}catch(D){z=D}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(D){if(D&&z&&typeof D.stack=="string")return[D.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),f=u[0],h=u[1];if(f&&h){var y=f.split(`
`),_=h.split(`
`);for(i=l=0;l<y.length&&!y[l].includes("DetermineComponentFrameRoot");)l++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(l===y.length||i===_.length)for(l=y.length-1,i=_.length-1;1<=l&&0<=i&&y[l]!==_[i];)i--;for(;1<=l&&0<=i;l--,i--)if(y[l]!==_[i]){if(l!==1||i!==1)do if(l--,i--,0>i||y[l]!==_[i]){var N=`
`+y[l].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=l&&0<=i);break}}}finally{bc=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?an(a):""}function Rg(t){switch(t.tag){case 26:case 27:case 5:return an(t.type);case 16:return an("Lazy");case 13:return an("Suspense");case 19:return an("SuspenseList");case 0:case 15:return Sc(t.type,!1);case 11:return Sc(t.type.render,!1);case 1:return Sc(t.type,!0);case 31:return an("Activity");default:return""}}function qf(t){try{var e="";do e+=Rg(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zg(t){var e=Gf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){l=""+f,u.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(f){l=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wu(t){t._valueTracker||(t._valueTracker=zg(t))}function Yf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=Gf(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function _u(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dg=/[\n"\\]/g;function Je(t){return t.replace(Dg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ec(t,e,a,l,i,u,f,h){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Fe(e)):t.value!==""+Fe(e)&&(t.value=""+Fe(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Tc(t,f,Fe(e)):a!=null?Tc(t,f,Fe(a)):l!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+Fe(h):t.removeAttribute("name")}function Xf(t,e,a,l,i,u,f,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Fe(a):"",e=e!=null?""+Fe(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=h?t.checked:!!l,t.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Tc(t,e,a){e==="number"&&_u(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,e,a,l){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Fe(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,l&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $f(t,e,a){if(e!=null&&(e=""+Fe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Fe(a):""}function Qf(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(o(92));if(Rt(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=Fe(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function nn(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var jg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zf(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||jg.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Kf(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var i in e)l=e[i],e.hasOwnProperty(i)&&a[i]!==l&&Zf(t,i,l)}else for(var u in e)e.hasOwnProperty(u)&&Zf(t,u,e[u])}function Ac(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Og=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cu(t){return Mg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var wc=null;function _c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var un=null,rn=null;function Wf(t){var e=Pl(t);if(e&&(t=e.stateNode)){var a=t[Oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Ec(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var i=l[Oe]||null;if(!i)throw Error(o(90));Ec(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Yf(l)}break t;case"textarea":$f(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ln(t,!!a.multiple,e,!1)}}}var Cc=!1;function Ff(t,e,a){if(Cc)return t(e,a);Cc=!0;try{var l=t(e);return l}finally{if(Cc=!1,(un!==null||rn!==null)&&(dr(),un&&(e=un,t=rn,rn=un=null,Wf(e),t)))for(e=0;e<t.length;e++)Wf(t[e])}}function ui(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Oe]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var Da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=!1;if(Da)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Rc=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Rc=!1}var Pa=null,zc=null,Ru=null;function Jf(){if(Ru)return Ru;var t,e=zc,a=e.length,l,i="value"in Pa?Pa.value:Pa.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var f=a-t;for(l=1;l<=f&&e[a-l]===i[u-l];l++);return Ru=i.slice(t,1<l?1-l:void 0)}function zu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Du(){return!0}function If(){return!1}function Me(t){function e(a,l,i,u,f){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Du:If,this.isPropagationStopped=If,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Du)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Du)},persist:function(){},isPersistent:Du}),e}var Cl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=Me(Cl),ci=b({},Cl,{view:0,detail:0}),Ng=Me(ci),Dc,jc,oi,Ou=b({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oi&&(oi&&t.type==="mousemove"?(Dc=t.screenX-oi.screenX,jc=t.screenY-oi.screenY):jc=Dc=0,oi=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:jc}}),Pf=Me(Ou),Ug=b({},Ou,{dataTransfer:0}),Hg=Me(Ug),Bg=b({},ci,{relatedTarget:0}),Oc=Me(Bg),Lg=b({},Cl,{animationName:0,elapsedTime:0,pseudoElement:0}),Vg=Me(Lg),kg=b({},Cl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qg=Me(kg),Gg=b({},Cl,{data:0}),td=Me(Gg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$g[t])?!!e[t]:!1}function Mc(){return Qg}var Zg=b({},ci,{key:function(t){if(t.key){var e=Yg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(t){return t.type==="keypress"?zu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kg=Me(Zg),Wg=b({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=Me(Wg),Fg=b({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),Jg=Me(Fg),Ig=b({},Cl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=Me(Ig),t1=b({},Ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=Me(t1),a1=b({},Cl,{newState:0,oldState:0}),l1=Me(a1),n1=[9,13,27,32],Nc=Da&&"CompositionEvent"in window,si=null;Da&&"documentMode"in document&&(si=document.documentMode);var i1=Da&&"TextEvent"in window&&!si,ad=Da&&(!Nc||si&&8<si&&11>=si),ld=" ",nd=!1;function id(t,e){switch(t){case"keyup":return n1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cn=!1;function u1(t,e){switch(t){case"compositionend":return ud(e);case"keypress":return e.which!==32?null:(nd=!0,ld);case"textInput":return t=e.data,t===ld&&nd?null:t;default:return null}}function r1(t,e){if(cn)return t==="compositionend"||!Nc&&id(t,e)?(t=Jf(),Ru=zc=Pa=null,cn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ad&&e.locale!=="ko"?null:e.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c1[t.type]:e==="textarea"}function cd(t,e,a,l){un?rn?rn.push(l):rn=[l]:un=l,e=yr(e,"onChange"),0<e.length&&(a=new ju("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var fi=null,di=null;function o1(t){G0(t,0)}function Mu(t){var e=ii(t);if(Yf(e))return t}function od(t,e){if(t==="change")return e}var sd=!1;if(Da){var Uc;if(Da){var Hc="oninput"in document;if(!Hc){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Hc=typeof fd.oninput=="function"}Uc=Hc}else Uc=!1;sd=Uc&&(!document.documentMode||9<document.documentMode)}function dd(){fi&&(fi.detachEvent("onpropertychange",hd),di=fi=null)}function hd(t){if(t.propertyName==="value"&&Mu(di)){var e=[];cd(e,di,t,_c(t)),Ff(o1,e)}}function s1(t,e,a){t==="focusin"?(dd(),fi=e,di=a,fi.attachEvent("onpropertychange",hd)):t==="focusout"&&dd()}function f1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(di)}function d1(t,e){if(t==="click")return Mu(e)}function h1(t,e){if(t==="input"||t==="change")return Mu(e)}function p1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Le=typeof Object.is=="function"?Object.is:p1;function hi(t,e){if(Le(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Ce.call(e,i)||!Le(t[i],e[i]))return!1}return!0}function pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function md(t,e){var a=pd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pd(a)}}function gd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=_u(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=_u(t.document)}return e}function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var m1=Da&&"documentMode"in document&&11>=document.documentMode,on=null,Lc=null,pi=null,Vc=!1;function yd(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vc||on==null||on!==_u(l)||(l=on,"selectionStart"in l&&Bc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),pi&&hi(pi,l)||(pi=l,l=yr(Lc,"onSelect"),0<l.length&&(e=new ju("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=on)))}function Rl(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var sn={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionrun:Rl("Transition","TransitionRun"),transitionstart:Rl("Transition","TransitionStart"),transitioncancel:Rl("Transition","TransitionCancel"),transitionend:Rl("Transition","TransitionEnd")},kc={},vd={};Da&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete sn.animationend.animation,delete sn.animationiteration.animation,delete sn.animationstart.animation),"TransitionEvent"in window||delete sn.transitionend.transition);function zl(t){if(kc[t])return kc[t];if(!sn[t])return t;var e=sn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in vd)return kc[t]=e[a];return t}var bd=zl("animationend"),Sd=zl("animationiteration"),Ed=zl("animationstart"),g1=zl("transitionrun"),x1=zl("transitionstart"),y1=zl("transitioncancel"),Td=zl("transitionend"),Ad=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function oa(t,e){Ad.set(t,e),_l(e,[t])}var wd=new WeakMap;function Ie(t,e){if(typeof t=="object"&&t!==null){var a=wd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:qf(e)},wd.set(t,e),e)}return{value:t,source:e,stack:qf(e)}}var Pe=[],fn=0,Gc=0;function Nu(){for(var t=fn,e=Gc=fn=0;e<t;){var a=Pe[e];Pe[e++]=null;var l=Pe[e];Pe[e++]=null;var i=Pe[e];Pe[e++]=null;var u=Pe[e];if(Pe[e++]=null,l!==null&&i!==null){var f=l.pending;f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i}u!==0&&_d(a,i,u)}}function Uu(t,e,a,l){Pe[fn++]=t,Pe[fn++]=e,Pe[fn++]=a,Pe[fn++]=l,Gc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Yc(t,e,a,l){return Uu(t,e,a,l),Hu(t)}function dn(t,e){return Uu(t,null,null,e),Hu(t)}function _d(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,l=u.alternate,l!==null&&(l.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Gt(a),t=u.hiddenUpdates,l=t[i],l===null?t[i]=[e]:l.push(e),e.lane=a|536870912),u):null}function Hu(t){if(50<Vi)throw Vi=0,Fo=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var hn={};function v1(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,a,l){return new v1(t,e,a,l)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ja(t,e){var a=t.alternate;return a===null?(a=Ve(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Cd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Bu(t,e,a,l,i,u){var f=0;if(l=t,typeof t=="function")Xc(t)&&(f=1);else if(typeof t=="string")f=Sx(t,a,ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case St:return t=Ve(31,a,e,i),t.elementType=St,t.lanes=u,t;case Y:return Dl(a.children,i,u,e);case G:f=8,i|=24;break;case X:return t=Ve(12,a,e,i|2),t.elementType=X,t.lanes=u,t;case Q:return t=Ve(13,a,e,i),t.elementType=Q,t.lanes=u,t;case ct:return t=Ve(19,a,e,i),t.elementType=ct,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case $:f=10;break t;case H:f=9;break t;case at:f=11;break t;case et:f=14;break t;case Dt:f=16,l=null;break t}f=29,a=Error(o(130,t===null?"null":typeof t,"")),l=null}return e=Ve(f,a,e,i),e.elementType=t,e.type=l,e.lanes=u,e}function Dl(t,e,a,l){return t=Ve(7,t,l,e),t.lanes=a,t}function $c(t,e,a){return t=Ve(6,t,null,e),t.lanes=a,t}function Qc(t,e,a){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pn=[],mn=0,Lu=null,Vu=0,ta=[],ea=0,jl=null,Oa=1,Ma="";function Ol(t,e){pn[mn++]=Vu,pn[mn++]=Lu,Lu=t,Vu=e}function Rd(t,e,a){ta[ea++]=Oa,ta[ea++]=Ma,ta[ea++]=jl,jl=t;var l=Oa;t=Ma;var i=32-Gt(l)-1;l&=~(1<<i),a+=1;var u=32-Gt(e)+i;if(30<u){var f=i-i%5;u=(l&(1<<f)-1).toString(32),l>>=f,i-=f,Oa=1<<32-Gt(e)+i|a<<i|l,Ma=u+t}else Oa=1<<u|a<<i|l,Ma=t}function Zc(t){t.return!==null&&(Ol(t,1),Rd(t,1,0))}function Kc(t){for(;t===Lu;)Lu=pn[--mn],pn[mn]=null,Vu=pn[--mn],pn[mn]=null;for(;t===jl;)jl=ta[--ea],ta[ea]=null,Ma=ta[--ea],ta[ea]=null,Oa=ta[--ea],ta[ea]=null}var Re=null,It=null,Nt=!1,Ml=null,ya=!1,Wc=Error(o(519));function Nl(t){var e=Error(o(418,""));throw xi(Ie(e,t)),Wc}function zd(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Te]=t,e[Oe]=l,a){case"dialog":_t("cancel",e),_t("close",e);break;case"iframe":case"object":case"embed":_t("load",e);break;case"video":case"audio":for(a=0;a<qi.length;a++)_t(qi[a],e);break;case"source":_t("error",e);break;case"img":case"image":case"link":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"input":_t("invalid",e),Xf(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),wu(e);break;case"select":_t("invalid",e);break;case"textarea":_t("invalid",e),Qf(e,l.value,l.defaultValue,l.children),wu(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Q0(e.textContent,a)?(l.popover!=null&&(_t("beforetoggle",e),_t("toggle",e)),l.onScroll!=null&&_t("scroll",e),l.onScrollEnd!=null&&_t("scrollend",e),l.onClick!=null&&(e.onclick=vr),e=!0):e=!1,e||Nl(t)}function Dd(t){for(Re=t.return;Re;)switch(Re.tag){case 5:case 13:ya=!1;return;case 27:case 3:ya=!0;return;default:Re=Re.return}}function mi(t){if(t!==Re)return!1;if(!Nt)return Dd(t),Nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||ds(t.type,t.memoizedProps)),a=!a),a&&It&&Nl(t),Dd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){It=fa(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}It=null}}else e===27?(e=It,ml(t.type)?(t=gs,gs=null,It=t):It=e):It=Re?fa(t.stateNode.nextSibling):null;return!0}function gi(){It=Re=null,Nt=!1}function jd(){var t=Ml;return t!==null&&(He===null?He=t:He.push.apply(He,t),Ml=null),t}function xi(t){Ml===null?Ml=[t]:Ml.push(t)}var Fc=q(null),Ul=null,Na=null;function tl(t,e,a){I(Fc,e._currentValue),e._currentValue=a}function Ua(t){t._currentValue=Fc.current,J(Fc)}function Jc(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function Ic(t,e,a,l){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var f=i.child;u=u.firstContext;t:for(;u!==null;){var h=u;u=i;for(var y=0;y<e.length;y++)if(h.context===e[y]){u.lanes|=a,h=u.alternate,h!==null&&(h.lanes|=a),Jc(u.return,a,t),l||(f=null);break t}u=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(o(341));f.lanes|=a,u=f.alternate,u!==null&&(u.lanes|=a),Jc(f,a,t),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===t){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function yi(t,e,a,l){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var h=i.type;Le(i.pendingProps.value,f.value)||(t!==null?t.push(h):t=[h])}}else if(i===Jt.current){if(f=i.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Zi):t=[Zi])}i=i.return}t!==null&&Ic(e,t,a,l),e.flags|=262144}function ku(t){for(t=t.firstContext;t!==null;){if(!Le(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Hl(t){Ul=t,Na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ae(t){return Od(Ul,t)}function qu(t,e){return Ul===null&&Hl(t),Od(t,e)}function Od(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Na===null){if(t===null)throw Error(o(308));Na=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Na=Na.next=e;return a}var b1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},S1=n.unstable_scheduleCallback,E1=n.unstable_NormalPriority,se={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pc(){return{controller:new b1,data:new Map,refCount:0}}function vi(t){t.refCount--,t.refCount===0&&S1(E1,function(){t.controller.abort()})}var bi=null,to=0,gn=0,xn=null;function T1(t,e){if(bi===null){var a=bi=[];to=0,gn=ls(),xn={status:"pending",value:void 0,then:function(l){a.push(l)}}}return to++,e.then(Md,Md),e}function Md(){if(--to===0&&bi!==null){xn!==null&&(xn.status="fulfilled");var t=bi;bi=null,gn=0,xn=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function A1(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var Nd=O.S;O.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&T1(t,e),Nd!==null&&Nd(t,e)};var Bl=q(null);function eo(){var t=Bl.current;return t!==null?t:Yt.pooledCache}function Gu(t,e){e===null?I(Bl,Bl.current):I(Bl,e.pool)}function Ud(){var t=eo();return t===null?null:{parent:se._currentValue,pool:t}}var Si=Error(o(460)),Hd=Error(o(474)),Yu=Error(o(542)),ao={then:function(){}};function Bd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xu(){}function Ld(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Xu,Xu),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kd(t),t;default:if(typeof e.status=="string")e.then(Xu,Xu);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=l}},function(l){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,kd(t),t}throw Ei=e,Si}}var Ei=null;function Vd(){if(Ei===null)throw Error(o(459));var t=Ei;return Ei=null,t}function kd(t){if(t===Si||t===Yu)throw Error(o(483))}var el=!1;function lo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function no(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function al(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ll(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var i=l.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),l.pending=e,e=Hu(t),_d(t,null,a),e}return Uu(t,l,e,a),Hu(t)}function Ti(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Mf(t,a)}}function io(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=f:u=u.next=f,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var uo=!1;function Ai(){if(uo){var t=xn;if(t!==null)throw t}}function wi(t,e,a,l){uo=!1;var i=t.updateQueue;el=!1;var u=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var y=h,_=y.next;y.next=null,f===null?u=_:f.next=_,f=y;var N=t.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==f&&(h===null?N.firstBaseUpdate=_:h.next=_,N.lastBaseUpdate=y))}if(u!==null){var k=i.baseState;f=0,N=_=y=null,h=u;do{var z=h.lane&-536870913,D=z!==h.lane;if(D?(zt&z)===z:(l&z)===z){z!==0&&z===gn&&(uo=!0),N!==null&&(N=N.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var ht=t,ft=h;z=e;var kt=a;switch(ft.tag){case 1:if(ht=ft.payload,typeof ht=="function"){k=ht.call(kt,k,z);break t}k=ht;break t;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=ft.payload,z=typeof ht=="function"?ht.call(kt,k,z):ht,z==null)break t;k=b({},k,z);break t;case 2:el=!0}}z=h.callback,z!==null&&(t.flags|=64,D&&(t.flags|=8192),D=i.callbacks,D===null?i.callbacks=[z]:D.push(z))}else D={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(_=N=D,y=k):N=N.next=D,f|=z;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;D=h,h=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);N===null&&(y=k),i.baseState=y,i.firstBaseUpdate=_,i.lastBaseUpdate=N,u===null&&(i.shared.lanes=0),fl|=f,t.lanes=f,t.memoizedState=k}}function qd(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Gd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)qd(a[t],e)}var yn=q(null),$u=q(0);function Yd(t,e){t=Ga,I($u,t),I(yn,e),Ga=t|e.baseLanes}function ro(){I($u,Ga),I(yn,yn.current)}function co(){Ga=$u.current,J(yn),J($u)}var nl=0,Et=null,Lt=null,ie=null,Qu=!1,vn=!1,Ll=!1,Zu=0,_i=0,bn=null,w1=0;function te(){throw Error(o(321))}function oo(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Le(t[a],e[a]))return!1;return!0}function so(t,e,a,l,i,u){return nl=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?_h:Ch,Ll=!1,u=a(l,i),Ll=!1,vn&&(u=$d(e,a,l,i)),Xd(t),u}function Xd(t){O.H=Pu;var e=Lt!==null&&Lt.next!==null;if(nl=0,ie=Lt=Et=null,Qu=!1,_i=0,bn=null,e)throw Error(o(300));t===null||pe||(t=t.dependencies,t!==null&&ku(t)&&(pe=!0))}function $d(t,e,a,l){Et=t;var i=0;do{if(vn&&(bn=null),_i=0,vn=!1,25<=i)throw Error(o(301));if(i+=1,ie=Lt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=O1,u=e(a,l)}while(vn);return u}function _1(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?Ci(e):e,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(Et.flags|=1024),e}function fo(){var t=Zu!==0;return Zu=0,t}function ho(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function po(t){if(Qu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Qu=!1}nl=0,ie=Lt=Et=null,vn=!1,_i=Zu=0,bn=null}function Ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Et.memoizedState=ie=t:ie=ie.next=t,ie}function ue(){if(Lt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=ie===null?Et.memoizedState:ie.next;if(e!==null)ie=e,Lt=t;else{if(t===null)throw Et.alternate===null?Error(o(467)):Error(o(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},ie===null?Et.memoizedState=ie=t:ie=ie.next=t}return ie}function mo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ci(t){var e=_i;return _i+=1,bn===null&&(bn=[]),t=Ld(bn,t,e),e=Et,(ie===null?e.memoizedState:ie.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?_h:Ch),t}function Ku(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ci(t);if(t.$$typeof===$)return Ae(t)}throw Error(o(438,String(t)))}function go(t){var e=null,a=Et.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=Et.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=mo(),Et.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Kt;return e.index++,a}function Ha(t,e){return typeof e=="function"?e(t):e}function Wu(t){var e=ue();return xo(e,Lt,t)}function xo(t,e,a){var l=t.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var i=t.baseQueue,u=l.pending;if(u!==null){if(i!==null){var f=i.next;i.next=u.next,u.next=f}e.baseQueue=i=u,l.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var h=f=null,y=null,_=e,N=!1;do{var k=_.lane&-536870913;if(k!==_.lane?(zt&k)===k:(nl&k)===k){var z=_.revertLane;if(z===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),k===gn&&(N=!0);else if((nl&z)===z){_=_.next,z===gn&&(N=!0);continue}else k={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},y===null?(h=y=k,f=u):y=y.next=k,Et.lanes|=z,fl|=z;k=_.action,Ll&&a(u,k),u=_.hasEagerState?_.eagerState:a(u,k)}else z={lane:k,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},y===null?(h=y=z,f=u):y=y.next=z,Et.lanes|=k,fl|=k;_=_.next}while(_!==null&&_!==e);if(y===null?f=u:y.next=h,!Le(u,t.memoizedState)&&(pe=!0,N&&(a=xn,a!==null)))throw a;t.memoizedState=u,t.baseState=f,t.baseQueue=y,l.lastRenderedState=u}return i===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function yo(t){var e=ue(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var l=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do u=t(u,f.action),f=f.next;while(f!==i);Le(u,e.memoizedState)||(pe=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,l]}function Qd(t,e,a){var l=Et,i=ue(),u=Nt;if(u){if(a===void 0)throw Error(o(407));a=a()}else a=e();var f=!Le((Lt||i).memoizedState,a);f&&(i.memoizedState=a,pe=!0),i=i.queue;var h=Wd.bind(null,l,i,t);if(Ri(2048,8,h,[t]),i.getSnapshot!==e||f||ie!==null&&ie.memoizedState.tag&1){if(l.flags|=2048,Sn(9,Fu(),Kd.bind(null,l,i,a,e),null),Yt===null)throw Error(o(349));u||(nl&124)!==0||Zd(l,e,a)}return a}function Zd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Et.updateQueue,e===null?(e=mo(),Et.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Kd(t,e,a,l){e.value=a,e.getSnapshot=l,Fd(e)&&Jd(t)}function Wd(t,e,a){return a(function(){Fd(e)&&Jd(t)})}function Fd(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Le(t,a)}catch{return!0}}function Jd(t){var e=dn(t,2);e!==null&&Xe(e,t,2)}function vo(t){var e=Ne();if(typeof t=="function"){var a=t;if(t=a(),Ll){Ct(!0);try{a()}finally{Ct(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e}function Id(t,e,a,l){return t.baseState=a,xo(t,Lt,typeof l=="function"?l:Ha)}function C1(t,e,a,l,i){if(Iu(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};O.T!==null?a(!0):u.isTransition=!1,l(u),a=e.pending,a===null?(u.next=e.pending=u,Pd(e,u)):(u.next=a.next,e.pending=a.next=u)}}function Pd(t,e){var a=e.action,l=e.payload,i=t.state;if(e.isTransition){var u=O.T,f={};O.T=f;try{var h=a(i,l),y=O.S;y!==null&&y(f,h),th(t,e,h)}catch(_){bo(t,e,_)}finally{O.T=u}}else try{u=a(i,l),th(t,e,u)}catch(_){bo(t,e,_)}}function th(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){eh(t,e,l)},function(l){return bo(t,e,l)}):eh(t,e,a)}function eh(t,e,a){e.status="fulfilled",e.value=a,ah(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,Pd(t,a)))}function bo(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,ah(e),e=e.next;while(e!==l)}t.action=null}function ah(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function lh(t,e){return e}function nh(t,e){if(Nt){var a=Yt.formState;if(a!==null){t:{var l=Et;if(Nt){if(It){e:{for(var i=It,u=ya;i.nodeType!==8;){if(!u){i=null;break e}if(i=fa(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){It=fa(i.nextSibling),l=i.data==="F!";break t}}Nl(l)}l=!1}l&&(e=a[0])}}return a=Ne(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lh,lastRenderedState:e},a.queue=l,a=Th.bind(null,Et,l),l.dispatch=a,l=vo(!1),u=wo.bind(null,Et,!1,l.queue),l=Ne(),i={state:e,dispatch:null,action:t,pending:null},l.queue=i,a=C1.bind(null,Et,i,u,a),i.dispatch=a,l.memoizedState=t,[e,a,!1]}function ih(t){var e=ue();return uh(e,Lt,t)}function uh(t,e,a){if(e=xo(t,e,lh)[0],t=Wu(Ha)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Ci(e)}catch(f){throw f===Si?Yu:f}else l=e;e=ue();var i=e.queue,u=i.dispatch;return a!==e.memoizedState&&(Et.flags|=2048,Sn(9,Fu(),R1.bind(null,i,a),null)),[l,u,t]}function R1(t,e){t.action=e}function rh(t){var e=ue(),a=Lt;if(a!==null)return uh(e,a,t);ue(),e=e.memoizedState,a=ue();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function Sn(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=Et.updateQueue,e===null&&(e=mo(),Et.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Fu(){return{destroy:void 0,resource:void 0}}function ch(){return ue().memoizedState}function Ju(t,e,a,l){var i=Ne();l=l===void 0?null:l,Et.flags|=t,i.memoizedState=Sn(1|e,Fu(),a,l)}function Ri(t,e,a,l){var i=ue();l=l===void 0?null:l;var u=i.memoizedState.inst;Lt!==null&&l!==null&&oo(l,Lt.memoizedState.deps)?i.memoizedState=Sn(e,u,a,l):(Et.flags|=t,i.memoizedState=Sn(1|e,u,a,l))}function oh(t,e){Ju(8390656,8,t,e)}function sh(t,e){Ri(2048,8,t,e)}function fh(t,e){return Ri(4,2,t,e)}function dh(t,e){return Ri(4,4,t,e)}function hh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ph(t,e,a){a=a!=null?a.concat([t]):null,Ri(4,4,hh.bind(null,e,t),a)}function So(){}function mh(t,e){var a=ue();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&oo(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function gh(t,e){var a=ue();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&oo(e,l[1]))return l[0];if(l=t(),Ll){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[l,e],l}function Eo(t,e,a){return a===void 0||(nl&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=v0(),Et.lanes|=t,fl|=t,a)}function xh(t,e,a,l){return Le(a,e)?a:yn.current!==null?(t=Eo(t,a,l),Le(t,e)||(pe=!0),t):(nl&42)===0?(pe=!0,t.memoizedState=a):(t=v0(),Et.lanes|=t,fl|=t,e)}function yh(t,e,a,l,i){var u=K.p;K.p=u!==0&&8>u?u:8;var f=O.T,h={};O.T=h,wo(t,!1,e,a);try{var y=i(),_=O.S;if(_!==null&&_(h,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var N=A1(y,l);zi(t,e,N,Ye(t))}else zi(t,e,l,Ye(t))}catch(k){zi(t,e,{then:function(){},status:"rejected",reason:k},Ye())}finally{K.p=u,O.T=f}}function z1(){}function To(t,e,a,l){if(t.tag!==5)throw Error(o(476));var i=vh(t).queue;yh(t,i,e,it,a===null?z1:function(){return bh(t),a(l)})}function vh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:it},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bh(t){var e=vh(t).next.queue;zi(t,e,{},Ye())}function Ao(){return Ae(Zi)}function Sh(){return ue().memoizedState}function Eh(){return ue().memoizedState}function D1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ye();t=al(a);var l=ll(e,t,a);l!==null&&(Xe(l,e,a),Ti(l,e,a)),e={cache:Pc()},t.payload=e;return}e=e.return}}function j1(t,e,a){var l=Ye();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Iu(t)?Ah(e,a):(a=Yc(t,e,a,l),a!==null&&(Xe(a,t,l),wh(a,e,l)))}function Th(t,e,a){var l=Ye();zi(t,e,a,l)}function zi(t,e,a,l){var i={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Iu(t))Ah(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var f=e.lastRenderedState,h=u(f,a);if(i.hasEagerState=!0,i.eagerState=h,Le(h,f))return Uu(t,e,i,0),Yt===null&&Nu(),!1}catch{}finally{}if(a=Yc(t,e,i,l),a!==null)return Xe(a,t,l),wh(a,e,l),!0}return!1}function wo(t,e,a,l){if(l={lane:2,revertLane:ls(),action:l,hasEagerState:!1,eagerState:null,next:null},Iu(t)){if(e)throw Error(o(479))}else e=Yc(t,a,l,2),e!==null&&Xe(e,t,2)}function Iu(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Ah(t,e){vn=Qu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function wh(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,Mf(t,a)}}var Pu={readContext:Ae,use:Ku,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useLayoutEffect:te,useInsertionEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useSyncExternalStore:te,useId:te,useHostTransitionStatus:te,useFormState:te,useActionState:te,useOptimistic:te,useMemoCache:te,useCacheRefresh:te},_h={readContext:Ae,use:Ku,useCallback:function(t,e){return Ne().memoizedState=[t,e===void 0?null:e],t},useContext:Ae,useEffect:oh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ju(4194308,4,hh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ju(4194308,4,t,e)},useInsertionEffect:function(t,e){Ju(4,2,t,e)},useMemo:function(t,e){var a=Ne();e=e===void 0?null:e;var l=t();if(Ll){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Ne();if(a!==void 0){var i=a(e);if(Ll){Ct(!0);try{a(e)}finally{Ct(!1)}}}else i=e;return l.memoizedState=l.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=j1.bind(null,Et,t),[l.memoizedState,t]},useRef:function(t){var e=Ne();return t={current:t},e.memoizedState=t},useState:function(t){t=vo(t);var e=t.queue,a=Th.bind(null,Et,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:So,useDeferredValue:function(t,e){var a=Ne();return Eo(a,t,e)},useTransition:function(){var t=vo(!1);return t=yh.bind(null,Et,t.queue,!0,!1),Ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=Et,i=Ne();if(Nt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Yt===null)throw Error(o(349));(zt&124)!==0||Zd(l,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,oh(Wd.bind(null,l,u,t),[t]),l.flags|=2048,Sn(9,Fu(),Kd.bind(null,l,u,a,e),null),a},useId:function(){var t=Ne(),e=Yt.identifierPrefix;if(Nt){var a=Ma,l=Oa;a=(l&~(1<<32-Gt(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=Zu++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=w1++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ao,useFormState:nh,useActionState:nh,useOptimistic:function(t){var e=Ne();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=wo.bind(null,Et,!0,a),a.dispatch=e,[t,e]},useMemoCache:go,useCacheRefresh:function(){return Ne().memoizedState=D1.bind(null,Et)}},Ch={readContext:Ae,use:Ku,useCallback:mh,useContext:Ae,useEffect:sh,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:Wu,useRef:ch,useState:function(){return Wu(Ha)},useDebugValue:So,useDeferredValue:function(t,e){var a=ue();return xh(a,Lt.memoizedState,t,e)},useTransition:function(){var t=Wu(Ha)[0],e=ue().memoizedState;return[typeof t=="boolean"?t:Ci(t),e]},useSyncExternalStore:Qd,useId:Sh,useHostTransitionStatus:Ao,useFormState:ih,useActionState:ih,useOptimistic:function(t,e){var a=ue();return Id(a,Lt,t,e)},useMemoCache:go,useCacheRefresh:Eh},O1={readContext:Ae,use:Ku,useCallback:mh,useContext:Ae,useEffect:sh,useImperativeHandle:ph,useInsertionEffect:fh,useLayoutEffect:dh,useMemo:gh,useReducer:yo,useRef:ch,useState:function(){return yo(Ha)},useDebugValue:So,useDeferredValue:function(t,e){var a=ue();return Lt===null?Eo(a,t,e):xh(a,Lt.memoizedState,t,e)},useTransition:function(){var t=yo(Ha)[0],e=ue().memoizedState;return[typeof t=="boolean"?t:Ci(t),e]},useSyncExternalStore:Qd,useId:Sh,useHostTransitionStatus:Ao,useFormState:rh,useActionState:rh,useOptimistic:function(t,e){var a=ue();return Lt!==null?Id(a,Lt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:go,useCacheRefresh:Eh},En=null,Di=0;function tr(t){var e=Di;return Di+=1,En===null&&(En=[]),Ld(En,t,e)}function ji(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function er(t,e){throw e.$$typeof===R?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Rh(t){var e=t._init;return e(t._payload)}function zh(t){function e(A,T){if(t){var w=A.deletions;w===null?(A.deletions=[T],A.flags|=16):w.push(T)}}function a(A,T){if(!t)return null;for(;T!==null;)e(A,T),T=T.sibling;return null}function l(A){for(var T=new Map;A!==null;)A.key!==null?T.set(A.key,A):T.set(A.index,A),A=A.sibling;return T}function i(A,T){return A=ja(A,T),A.index=0,A.sibling=null,A}function u(A,T,w){return A.index=w,t?(w=A.alternate,w!==null?(w=w.index,w<T?(A.flags|=67108866,T):w):(A.flags|=67108866,T)):(A.flags|=1048576,T)}function f(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function h(A,T,w,B){return T===null||T.tag!==6?(T=$c(w,A.mode,B),T.return=A,T):(T=i(T,w),T.return=A,T)}function y(A,T,w,B){var lt=w.type;return lt===Y?N(A,T,w.props.children,B,w.key):T!==null&&(T.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Dt&&Rh(lt)===T.type)?(T=i(T,w.props),ji(T,w),T.return=A,T):(T=Bu(w.type,w.key,w.props,null,A.mode,B),ji(T,w),T.return=A,T)}function _(A,T,w,B){return T===null||T.tag!==4||T.stateNode.containerInfo!==w.containerInfo||T.stateNode.implementation!==w.implementation?(T=Qc(w,A.mode,B),T.return=A,T):(T=i(T,w.children||[]),T.return=A,T)}function N(A,T,w,B,lt){return T===null||T.tag!==7?(T=Dl(w,A.mode,B,lt),T.return=A,T):(T=i(T,w),T.return=A,T)}function k(A,T,w){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=$c(""+T,A.mode,w),T.return=A,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return w=Bu(T.type,T.key,T.props,null,A.mode,w),ji(w,T),w.return=A,w;case V:return T=Qc(T,A.mode,w),T.return=A,T;case Dt:var B=T._init;return T=B(T._payload),k(A,T,w)}if(Rt(T)||st(T))return T=Dl(T,A.mode,w,null),T.return=A,T;if(typeof T.then=="function")return k(A,tr(T),w);if(T.$$typeof===$)return k(A,qu(A,T),w);er(A,T)}return null}function z(A,T,w,B){var lt=T!==null?T.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return lt!==null?null:h(A,T,""+w,B);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case j:return w.key===lt?y(A,T,w,B):null;case V:return w.key===lt?_(A,T,w,B):null;case Dt:return lt=w._init,w=lt(w._payload),z(A,T,w,B)}if(Rt(w)||st(w))return lt!==null?null:N(A,T,w,B,null);if(typeof w.then=="function")return z(A,T,tr(w),B);if(w.$$typeof===$)return z(A,T,qu(A,w),B);er(A,w)}return null}function D(A,T,w,B,lt){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return A=A.get(w)||null,h(T,A,""+B,lt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case j:return A=A.get(B.key===null?w:B.key)||null,y(T,A,B,lt);case V:return A=A.get(B.key===null?w:B.key)||null,_(T,A,B,lt);case Dt:var At=B._init;return B=At(B._payload),D(A,T,w,B,lt)}if(Rt(B)||st(B))return A=A.get(w)||null,N(T,A,B,lt,null);if(typeof B.then=="function")return D(A,T,w,tr(B),lt);if(B.$$typeof===$)return D(A,T,w,qu(T,B),lt);er(T,B)}return null}function ht(A,T,w,B){for(var lt=null,At=null,rt=T,dt=T=0,ge=null;rt!==null&&dt<w.length;dt++){rt.index>dt?(ge=rt,rt=null):ge=rt.sibling;var Ot=z(A,rt,w[dt],B);if(Ot===null){rt===null&&(rt=ge);break}t&&rt&&Ot.alternate===null&&e(A,rt),T=u(Ot,T,dt),At===null?lt=Ot:At.sibling=Ot,At=Ot,rt=ge}if(dt===w.length)return a(A,rt),Nt&&Ol(A,dt),lt;if(rt===null){for(;dt<w.length;dt++)rt=k(A,w[dt],B),rt!==null&&(T=u(rt,T,dt),At===null?lt=rt:At.sibling=rt,At=rt);return Nt&&Ol(A,dt),lt}for(rt=l(rt);dt<w.length;dt++)ge=D(rt,A,dt,w[dt],B),ge!==null&&(t&&ge.alternate!==null&&rt.delete(ge.key===null?dt:ge.key),T=u(ge,T,dt),At===null?lt=ge:At.sibling=ge,At=ge);return t&&rt.forEach(function(bl){return e(A,bl)}),Nt&&Ol(A,dt),lt}function ft(A,T,w,B){if(w==null)throw Error(o(151));for(var lt=null,At=null,rt=T,dt=T=0,ge=null,Ot=w.next();rt!==null&&!Ot.done;dt++,Ot=w.next()){rt.index>dt?(ge=rt,rt=null):ge=rt.sibling;var bl=z(A,rt,Ot.value,B);if(bl===null){rt===null&&(rt=ge);break}t&&rt&&bl.alternate===null&&e(A,rt),T=u(bl,T,dt),At===null?lt=bl:At.sibling=bl,At=bl,rt=ge}if(Ot.done)return a(A,rt),Nt&&Ol(A,dt),lt;if(rt===null){for(;!Ot.done;dt++,Ot=w.next())Ot=k(A,Ot.value,B),Ot!==null&&(T=u(Ot,T,dt),At===null?lt=Ot:At.sibling=Ot,At=Ot);return Nt&&Ol(A,dt),lt}for(rt=l(rt);!Ot.done;dt++,Ot=w.next())Ot=D(rt,A,dt,Ot.value,B),Ot!==null&&(t&&Ot.alternate!==null&&rt.delete(Ot.key===null?dt:Ot.key),T=u(Ot,T,dt),At===null?lt=Ot:At.sibling=Ot,At=Ot);return t&&rt.forEach(function(Mx){return e(A,Mx)}),Nt&&Ol(A,dt),lt}function kt(A,T,w,B){if(typeof w=="object"&&w!==null&&w.type===Y&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case j:t:{for(var lt=w.key;T!==null;){if(T.key===lt){if(lt=w.type,lt===Y){if(T.tag===7){a(A,T.sibling),B=i(T,w.props.children),B.return=A,A=B;break t}}else if(T.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===Dt&&Rh(lt)===T.type){a(A,T.sibling),B=i(T,w.props),ji(B,w),B.return=A,A=B;break t}a(A,T);break}else e(A,T);T=T.sibling}w.type===Y?(B=Dl(w.props.children,A.mode,B,w.key),B.return=A,A=B):(B=Bu(w.type,w.key,w.props,null,A.mode,B),ji(B,w),B.return=A,A=B)}return f(A);case V:t:{for(lt=w.key;T!==null;){if(T.key===lt)if(T.tag===4&&T.stateNode.containerInfo===w.containerInfo&&T.stateNode.implementation===w.implementation){a(A,T.sibling),B=i(T,w.children||[]),B.return=A,A=B;break t}else{a(A,T);break}else e(A,T);T=T.sibling}B=Qc(w,A.mode,B),B.return=A,A=B}return f(A);case Dt:return lt=w._init,w=lt(w._payload),kt(A,T,w,B)}if(Rt(w))return ht(A,T,w,B);if(st(w)){if(lt=st(w),typeof lt!="function")throw Error(o(150));return w=lt.call(w),ft(A,T,w,B)}if(typeof w.then=="function")return kt(A,T,tr(w),B);if(w.$$typeof===$)return kt(A,T,qu(A,w),B);er(A,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,T!==null&&T.tag===6?(a(A,T.sibling),B=i(T,w),B.return=A,A=B):(a(A,T),B=$c(w,A.mode,B),B.return=A,A=B),f(A)):a(A,T)}return function(A,T,w,B){try{Di=0;var lt=kt(A,T,w,B);return En=null,lt}catch(rt){if(rt===Si||rt===Yu)throw rt;var At=Ve(29,rt,null,A.mode);return At.lanes=B,At.return=A,At}finally{}}}var Tn=zh(!0),Dh=zh(!1),aa=q(null),va=null;function il(t){var e=t.alternate;I(fe,fe.current&1),I(aa,t),va===null&&(e===null||yn.current!==null||e.memoizedState!==null)&&(va=t)}function jh(t){if(t.tag===22){if(I(fe,fe.current),I(aa,t),va===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(va=t)}}else ul()}function ul(){I(fe,fe.current),I(aa,aa.current)}function Ba(t){J(aa),va===t&&(va=null),J(fe)}var fe=q(0);function ar(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ms(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function _o(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:b({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Co={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=Ye(),i=al(l);i.payload=e,a!=null&&(i.callback=a),e=ll(t,i,l),e!==null&&(Xe(e,t,l),Ti(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=Ye(),i=al(l);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=ll(t,i,l),e!==null&&(Xe(e,t,l),Ti(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ye(),l=al(a);l.tag=2,e!=null&&(l.callback=e),e=ll(t,l,a),e!==null&&(Xe(e,t,a),Ti(e,t,a))}};function Oh(t,e,a,l,i,u,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,u,f):e.prototype&&e.prototype.isPureReactComponent?!hi(a,l)||!hi(i,u):!0}function Mh(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Co.enqueueReplaceState(e,e.state,null)}function Vl(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=b({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var lr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Nh(t){lr(t)}function Uh(t){console.error(t)}function Hh(t){lr(t)}function nr(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function Bh(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ro(t,e,a){return a=al(a),a.tag=3,a.payload={element:null},a.callback=function(){nr(t,e)},a}function Lh(t){return t=al(t),t.tag=3,t}function Vh(t,e,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=l.value;t.payload=function(){return i(u)},t.callback=function(){Bh(e,a,l)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Bh(e,a,l),typeof i!="function"&&(dl===null?dl=new Set([this]):dl.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function M1(t,e,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&yi(e,a,i,!0),a=aa.current,a!==null){switch(a.tag){case 13:return va===null?Io():a.alternate===null&&Pt===0&&(Pt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===ao?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),ts(t,l,i)),!1;case 22:return a.flags|=65536,l===ao?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),ts(t,l,i)),!1}throw Error(o(435,a.tag))}return ts(t,l,i),Io(),!1}if(Nt)return e=aa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,l!==Wc&&(t=Error(o(422),{cause:l}),xi(Ie(t,a)))):(l!==Wc&&(e=Error(o(423),{cause:l}),xi(Ie(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,l=Ie(l,a),i=Ro(t.stateNode,l,i),io(t,i),Pt!==4&&(Pt=2)),!1;var u=Error(o(520),{cause:l});if(u=Ie(u,a),Li===null?Li=[u]:Li.push(u),Pt!==4&&(Pt=2),e===null)return!0;l=Ie(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=Ro(a.stateNode,l,t),io(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(dl===null||!dl.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Lh(i),Vh(i,t,a,l),io(a,i),!1}a=a.return}while(a!==null);return!1}var kh=Error(o(461)),pe=!1;function be(t,e,a,l){e.child=t===null?Dh(e,null,a,l):Tn(e,t.child,a,l)}function qh(t,e,a,l,i){a=a.render;var u=e.ref;if("ref"in l){var f={};for(var h in l)h!=="ref"&&(f[h]=l[h])}else f=l;return Hl(e),l=so(t,e,a,f,u,i),h=fo(),t!==null&&!pe?(ho(t,e,i),La(t,e,i)):(Nt&&h&&Zc(e),e.flags|=1,be(t,e,l,i),e.child)}function Gh(t,e,a,l,i){if(t===null){var u=a.type;return typeof u=="function"&&!Xc(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,Yh(t,e,u,l,i)):(t=Bu(a.type,null,l,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Ho(t,i)){var f=u.memoizedProps;if(a=a.compare,a=a!==null?a:hi,a(f,l)&&t.ref===e.ref)return La(t,e,i)}return e.flags|=1,t=ja(u,l),t.ref=e.ref,t.return=e,e.child=t}function Yh(t,e,a,l,i){if(t!==null){var u=t.memoizedProps;if(hi(u,l)&&t.ref===e.ref)if(pe=!1,e.pendingProps=l=u,Ho(t,i))(t.flags&131072)!==0&&(pe=!0);else return e.lanes=t.lanes,La(t,e,i)}return zo(t,e,a,l,i)}function Xh(t,e,a){var l=e.pendingProps,i=l.children,u=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=u!==null?u.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~l}else e.childLanes=0,e.child=null;return $h(t,e,l,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gu(e,u!==null?u.cachePool:null),u!==null?Yd(e,u):ro(),jh(e);else return e.lanes=e.childLanes=536870912,$h(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Gu(e,u.cachePool),Yd(e,u),ul(),e.memoizedState=null):(t!==null&&Gu(e,null),ro(),ul());return be(t,e,i,a),e.child}function $h(t,e,a,l){var i=eo();return i=i===null?null:{parent:se._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Gu(e,null),ro(),jh(e),t!==null&&yi(t,e,l,!0),null}function ir(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function zo(t,e,a,l,i){return Hl(e),a=so(t,e,a,l,void 0,i),l=fo(),t!==null&&!pe?(ho(t,e,i),La(t,e,i)):(Nt&&l&&Zc(e),e.flags|=1,be(t,e,a,i),e.child)}function Qh(t,e,a,l,i,u){return Hl(e),e.updateQueue=null,a=$d(e,l,a,i),Xd(t),l=fo(),t!==null&&!pe?(ho(t,e,u),La(t,e,u)):(Nt&&l&&Zc(e),e.flags|=1,be(t,e,a,u),e.child)}function Zh(t,e,a,l,i){if(Hl(e),e.stateNode===null){var u=hn,f=a.contextType;typeof f=="object"&&f!==null&&(u=Ae(f)),u=new a(l,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Co,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=l,u.state=e.memoizedState,u.refs={},lo(e),f=a.contextType,u.context=typeof f=="object"&&f!==null?Ae(f):hn,u.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(_o(e,a,f,l),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Co.enqueueReplaceState(u,u.state,null),wi(e,l,u,i),Ai(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){u=e.stateNode;var h=e.memoizedProps,y=Vl(a,h);u.props=y;var _=u.context,N=a.contextType;f=hn,typeof N=="object"&&N!==null&&(f=Ae(N));var k=a.getDerivedStateFromProps;N=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||_!==f)&&Mh(e,u,l,f),el=!1;var z=e.memoizedState;u.state=z,wi(e,l,u,i),Ai(),_=e.memoizedState,h||z!==_||el?(typeof k=="function"&&(_o(e,a,k,l),_=e.memoizedState),(y=el||Oh(e,a,y,l,z,_,f))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=_),u.props=l,u.state=_,u.context=f,l=y):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{u=e.stateNode,no(t,e),f=e.memoizedProps,N=Vl(a,f),u.props=N,k=e.pendingProps,z=u.context,_=a.contextType,y=hn,typeof _=="object"&&_!==null&&(y=Ae(_)),h=a.getDerivedStateFromProps,(_=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==k||z!==y)&&Mh(e,u,l,y),el=!1,z=e.memoizedState,u.state=z,wi(e,l,u,i),Ai();var D=e.memoizedState;f!==k||z!==D||el||t!==null&&t.dependencies!==null&&ku(t.dependencies)?(typeof h=="function"&&(_o(e,a,h,l),D=e.memoizedState),(N=el||Oh(e,a,N,l,z,D,y)||t!==null&&t.dependencies!==null&&ku(t.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,D,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,D,y)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=D),u.props=l,u.state=D,u.context=y,l=N):(typeof u.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),l=!1)}return u=l,ir(t,e),l=(e.flags&128)!==0,u||l?(u=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&l?(e.child=Tn(e,t.child,null,i),e.child=Tn(e,null,a,i)):be(t,e,a,i),e.memoizedState=u.state,t=e.child):t=La(t,e,i),t}function Kh(t,e,a,l){return gi(),e.flags|=256,be(t,e,a,l),e.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jo(t){return{baseLanes:t,cachePool:Ud()}}function Oo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=la),t}function Wh(t,e,a){var l=e.pendingProps,i=!1,u=(e.flags&128)!==0,f;if((f=u)||(f=t!==null&&t.memoizedState===null?!1:(fe.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(i?il(e):ul(),Nt){var h=It,y;if(y=h){t:{for(y=h,h=ya;y.nodeType!==8;){if(!h){h=null;break t}if(y=fa(y.nextSibling),y===null){h=null;break t}}h=y}h!==null?(e.memoizedState={dehydrated:h,treeContext:jl!==null?{id:Oa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},y=Ve(18,null,null,0),y.stateNode=h,y.return=e,e.child=y,Re=e,It=null,y=!0):y=!1}y||Nl(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return ms(h)?e.lanes=32:e.lanes=536870912,null;Ba(e)}return h=l.children,l=l.fallback,i?(ul(),i=e.mode,h=ur({mode:"hidden",children:h},i),l=Dl(l,i,a,null),h.return=e,l.return=e,h.sibling=l,e.child=h,i=e.child,i.memoizedState=jo(a),i.childLanes=Oo(t,f,a),e.memoizedState=Do,l):(il(e),Mo(e,h))}if(y=t.memoizedState,y!==null&&(h=y.dehydrated,h!==null)){if(u)e.flags&256?(il(e),e.flags&=-257,e=No(t,e,a)):e.memoizedState!==null?(ul(),e.child=t.child,e.flags|=128,e=null):(ul(),i=l.fallback,h=e.mode,l=ur({mode:"visible",children:l.children},h),i=Dl(i,h,a,null),i.flags|=2,l.return=e,i.return=e,l.sibling=i,e.child=l,Tn(e,t.child,null,a),l=e.child,l.memoizedState=jo(a),l.childLanes=Oo(t,f,a),e.memoizedState=Do,e=i);else if(il(e),ms(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var _=f.dgst;f=_,l=Error(o(419)),l.stack="",l.digest=f,xi({value:l,source:null,stack:null}),e=No(t,e,a)}else if(pe||yi(t,e,a,!1),f=(a&t.childLanes)!==0,pe||f){if(f=Yt,f!==null&&(l=a&-a,l=(l&42)!==0?1:mc(l),l=(l&(f.suspendedLanes|a))!==0?0:l,l!==0&&l!==y.retryLane))throw y.retryLane=l,dn(t,l),Xe(f,t,l),kh;h.data==="$?"||Io(),e=No(t,e,a)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=y.treeContext,It=fa(h.nextSibling),Re=e,Nt=!0,Ml=null,ya=!1,t!==null&&(ta[ea++]=Oa,ta[ea++]=Ma,ta[ea++]=jl,Oa=t.id,Ma=t.overflow,jl=e),e=Mo(e,l.children),e.flags|=4096);return e}return i?(ul(),i=l.fallback,h=e.mode,y=t.child,_=y.sibling,l=ja(y,{mode:"hidden",children:l.children}),l.subtreeFlags=y.subtreeFlags&65011712,_!==null?i=ja(_,i):(i=Dl(i,h,a,null),i.flags|=2),i.return=e,l.return=e,l.sibling=i,e.child=l,l=i,i=e.child,h=t.child.memoizedState,h===null?h=jo(a):(y=h.cachePool,y!==null?(_=se._currentValue,y=y.parent!==_?{parent:_,pool:_}:y):y=Ud(),h={baseLanes:h.baseLanes|a,cachePool:y}),i.memoizedState=h,i.childLanes=Oo(t,f,a),e.memoizedState=Do,l):(il(e),a=t.child,t=a.sibling,a=ja(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function Mo(t,e){return e=ur({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function ur(t,e){return t=Ve(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function No(t,e,a){return Tn(e,t.child,null,a),t=Mo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Fh(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Jc(t.return,e,a)}function Uo(t,e,a,l,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=i)}function Jh(t,e,a){var l=e.pendingProps,i=l.revealOrder,u=l.tail;if(be(t,e,l.children,a),l=fe.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fh(t,a,e);else if(t.tag===19)Fh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(I(fe,l),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&ar(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Uo(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ar(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Uo(e,!0,a,null,u);break;case"together":Uo(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),fl|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(yi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=ja(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ja(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Ho(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ku(t)))}function N1(t,e,a){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),tl(e,se,t.memoizedState.cache),gi();break;case 27:case 5:ra(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:tl(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(il(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Wh(t,e,a):(il(e),t=La(t,e,a),t!==null?t.sibling:null);il(e);break;case 19:var i=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(yi(t,e,a,!1),l=(a&e.childLanes)!==0),i){if(l)return Jh(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(fe,fe.current),l)break;return null;case 22:case 23:return e.lanes=0,Xh(t,e,a);case 24:tl(e,se,t.memoizedState.cache)}return La(t,e,a)}function Ih(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)pe=!0;else{if(!Ho(t,a)&&(e.flags&128)===0)return pe=!1,N1(t,e,a);pe=(t.flags&131072)!==0}else pe=!1,Nt&&(e.flags&1048576)!==0&&Rd(e,Vu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,i=l._init;if(l=i(l._payload),e.type=l,typeof l=="function")Xc(l)?(t=Vl(l,t),e.tag=1,e=Zh(null,e,l,t,a)):(e.tag=0,e=zo(null,e,l,t,a));else{if(l!=null){if(i=l.$$typeof,i===at){e.tag=11,e=qh(null,e,l,t,a);break t}else if(i===et){e.tag=14,e=Gh(null,e,l,t,a);break t}}throw e=Mt(l)||l,Error(o(306,e,""))}}return e;case 0:return zo(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,i=Vl(l,e.pendingProps),Zh(t,e,l,i,a);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));l=e.pendingProps;var u=e.memoizedState;i=u.element,no(t,e),wi(e,l,null,a);var f=e.memoizedState;if(l=f.cache,tl(e,se,l),l!==u.cache&&Ic(e,[se],a,!0),Ai(),l=f.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Kh(t,e,l,a);break t}else if(l!==i){i=Ie(Error(o(424)),e),xi(i),e=Kh(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(It=fa(t.firstChild),Re=e,Nt=!0,Ml=null,ya=!0,a=Dh(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(gi(),l===i){e=La(t,e,a);break t}be(t,e,l,a)}e=e.child}return e;case 26:return ir(t,e),t===null?(a=ap(e.type,null,e.pendingProps,null))?e.memoizedState=a:Nt||(a=e.type,t=e.pendingProps,l=br(ot.current).createElement(a),l[Te]=e,l[Oe]=t,Ee(l,a,t),he(l),e.stateNode=l):e.memoizedState=ap(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ra(e),t===null&&Nt&&(l=e.stateNode=P0(e.type,e.pendingProps,ot.current),Re=e,ya=!0,i=It,ml(e.type)?(gs=i,It=fa(l.firstChild)):It=i),be(t,e,e.pendingProps.children,a),ir(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((i=l=It)&&(l=cx(l,e.type,e.pendingProps,ya),l!==null?(e.stateNode=l,Re=e,It=fa(l.firstChild),ya=!1,i=!0):i=!1),i||Nl(e)),ra(e),i=e.type,u=e.pendingProps,f=t!==null?t.memoizedProps:null,l=u.children,ds(i,u)?l=null:f!==null&&ds(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=so(t,e,_1,null,null,a),Zi._currentValue=i),ir(t,e),be(t,e,l,a),e.child;case 6:return t===null&&Nt&&((t=a=It)&&(a=ox(a,e.pendingProps,ya),a!==null?(e.stateNode=a,Re=e,It=null,t=!0):t=!1),t||Nl(e)),null;case 13:return Wh(t,e,a);case 4:return jt(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=Tn(e,null,l,a):be(t,e,l,a),e.child;case 11:return qh(t,e,e.type,e.pendingProps,a);case 7:return be(t,e,e.pendingProps,a),e.child;case 8:return be(t,e,e.pendingProps.children,a),e.child;case 12:return be(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,tl(e,e.type,l.value),be(t,e,l.children,a),e.child;case 9:return i=e.type._context,l=e.pendingProps.children,Hl(e),i=Ae(i),l=l(i),e.flags|=1,be(t,e,l,a),e.child;case 14:return Gh(t,e,e.type,e.pendingProps,a);case 15:return Yh(t,e,e.type,e.pendingProps,a);case 19:return Jh(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=ur(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=ja(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return Xh(t,e,a);case 24:return Hl(e),l=Ae(se),t===null?(i=eo(),i===null&&(i=Yt,u=Pc(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:l,cache:i},lo(e),tl(e,se,i)):((t.lanes&a)!==0&&(no(t,e),wi(e,null,null,a),Ai()),i=t.memoizedState,u=e.memoizedState,i.parent!==l?(i={parent:l,cache:l},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),tl(e,se,l)):(l=u.cache,tl(e,se,l),l!==i.cache&&Ic(e,[se],a,!0))),be(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Va(t){t.flags|=4}function Ph(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rp(e)){if(e=aa.current,e!==null&&((zt&4194048)===zt?va!==null:(zt&62914560)!==zt&&(zt&536870912)===0||e!==va))throw Ei=ao,Hd;t.flags|=8192}}function rr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?jf():536870912,t.lanes|=e,Cn|=e)}function Oi(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function U1(t,e,a){var l=e.pendingProps;switch(Kc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return Wt(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ua(se),ne(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(mi(e)?Va(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,jd())),Wt(e),null;case 26:return a=e.memoizedState,t===null?(Va(e),a!==null?(Wt(e),Ph(e,a)):(Wt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Va(e),Wt(e),Ph(e,a)):(Wt(e),e.flags&=-16777217):(t.memoizedProps!==l&&Va(e),Wt(e),e.flags&=-16777217),null;case 27:ca(e),a=ot.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Va(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Wt(e),null}t=ut.current,mi(e)?zd(e):(t=P0(i,l,a),e.stateNode=t,Va(e))}return Wt(e),null;case 5:if(ca(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&Va(e);else{if(!l){if(e.stateNode===null)throw Error(o(166));return Wt(e),null}if(t=ut.current,mi(e))zd(e);else{switch(i=br(ot.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?i.createElement("select",{is:l.is}):i.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?i.createElement(a,{is:l.is}):i.createElement(a)}}t[Te]=e,t[Oe]=l;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Ee(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Va(e)}}return Wt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&Va(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(o(166));if(t=ot.current,mi(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,i=Re,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}t[Te]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Q0(t.nodeValue,a)),t||Nl(e)}else t=br(t).createTextNode(l),t[Te]=e,e.stateNode=t}return Wt(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=mi(e),l!==null&&l.dehydrated!==null){if(t===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Te]=e}else gi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Wt(e),i=!1}else i=jd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ba(e),e):(Ba(e),null)}if(Ba(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==i&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),rr(e,e.updateQueue),Wt(e),null;case 4:return ne(),t===null&&rs(e.stateNode.containerInfo),Wt(e),null;case 10:return Ua(e.type),Wt(e),null;case 19:if(J(fe),i=e.memoizedState,i===null)return Wt(e),null;if(l=(e.flags&128)!==0,u=i.rendering,u===null)if(l)Oi(i,!1);else{if(Pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=ar(t),u!==null){for(e.flags|=128,Oi(i,!1),t=u.updateQueue,e.updateQueue=t,rr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Cd(a,t),a=a.sibling;return I(fe,fe.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>sr&&(e.flags|=128,l=!0,Oi(i,!1),e.lanes=4194304)}else{if(!l)if(t=ar(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,rr(e,t),Oi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Nt)return Wt(e),null}else 2*We()-i.renderingStartTime>sr&&a!==536870912&&(e.flags|=128,l=!0,Oi(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,t=fe.current,I(fe,l?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return Ba(e),co(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),a=e.updateQueue,a!==null&&rr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&J(Bl),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ua(se),Wt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function H1(t,e){switch(Kc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ua(se),ne(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ca(e),null;case 13:if(Ba(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(fe),null;case 4:return ne(),null;case 10:return Ua(e.type),null;case 22:case 23:return Ba(e),co(),t!==null&&J(Bl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ua(se),null;case 25:return null;default:return null}}function t0(t,e){switch(Kc(e),e.tag){case 3:Ua(se),ne();break;case 26:case 27:case 5:ca(e);break;case 4:ne();break;case 13:Ba(e);break;case 19:J(fe);break;case 10:Ua(e.type);break;case 22:case 23:Ba(e),co(),t!==null&&J(Bl);break;case 24:Ua(se)}}function Mi(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){l=void 0;var u=a.create,f=a.inst;l=u(),f.destroy=l}a=a.next}while(a!==i)}}catch(h){qt(e,e.return,h)}}function rl(t,e,a){try{var l=e.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var u=i.next;l=u;do{if((l.tag&t)===t){var f=l.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var y=a,_=h;try{_()}catch(N){qt(i,y,N)}}}l=l.next}while(l!==u)}}catch(N){qt(e,e.return,N)}}function e0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Gd(e,a)}catch(l){qt(t,t.return,l)}}}function a0(t,e,a){a.props=Vl(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){qt(t,e,l)}}function Ni(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(i){qt(t,e,i)}}function ba(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){qt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){qt(t,e,i)}else a.current=null}function l0(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){qt(t,t.return,i)}}function Bo(t,e,a){try{var l=t.stateNode;lx(l,t.type,a,e),l[Oe]=e}catch(i){qt(t,t.return,i)}}function n0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ml(t.type)||t.tag===4}function Lo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||n0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ml(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vo(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=vr));else if(l!==4&&(l===27&&ml(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Vo(t,e,a),t=t.sibling;t!==null;)Vo(t,e,a),t=t.sibling}function cr(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&ml(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(cr(t,e,a),t=t.sibling;t!==null;)cr(t,e,a),t=t.sibling}function i0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ee(e,l,a),e[Te]=t,e[Oe]=a}catch(u){qt(t,t.return,u)}}var ka=!1,ee=!1,ko=!1,u0=typeof WeakSet=="function"?WeakSet:Set,me=null;function B1(t,e){if(t=t.containerInfo,ss=_r,t=xd(t),Bc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var f=0,h=-1,y=-1,_=0,N=0,k=t,z=null;e:for(;;){for(var D;k!==a||i!==0&&k.nodeType!==3||(h=f+i),k!==u||l!==0&&k.nodeType!==3||(y=f+l),k.nodeType===3&&(f+=k.nodeValue.length),(D=k.firstChild)!==null;)z=k,k=D;for(;;){if(k===t)break e;if(z===a&&++_===i&&(h=f),z===u&&++N===l&&(y=f),(D=k.nextSibling)!==null)break;k=z,z=k.parentNode}k=D}a=h===-1||y===-1?null:{start:h,end:y}}else a=null}a=a||{start:0,end:0}}else a=null;for(fs={focusedElem:t,selectionRange:a},_r=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){switch(e=me,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,l=a.stateNode;try{var ht=Vl(a.type,i,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(ht,u),l.__reactInternalSnapshotBeforeUpdate=t}catch(ft){qt(a,a.return,ft)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ps(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ps(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function r0(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:cl(t,a),l&4&&Mi(5,a);break;case 1:if(cl(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){qt(a,a.return,f)}else{var i=Vl(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){qt(a,a.return,f)}}l&64&&e0(a),l&512&&Ni(a,a.return);break;case 3:if(cl(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Gd(t,e)}catch(f){qt(a,a.return,f)}}break;case 27:e===null&&l&4&&i0(a);case 26:case 5:cl(t,a),e===null&&l&4&&l0(a),l&512&&Ni(a,a.return);break;case 12:cl(t,a);break;case 13:cl(t,a),l&4&&s0(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Q1.bind(null,a),sx(t,a))));break;case 22:if(l=a.memoizedState!==null||ka,!l){e=e!==null&&e.memoizedState!==null||ee,i=ka;var u=ee;ka=l,(ee=e)&&!u?ol(t,a,(a.subtreeFlags&8772)!==0):cl(t,a),ka=i,ee=u}break;case 30:break;default:cl(t,a)}}function c0(t){var e=t.alternate;e!==null&&(t.alternate=null,c0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&yc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Ue=!1;function qa(t,e,a){for(a=a.child;a!==null;)o0(t,e,a),a=a.sibling}function o0(t,e,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(nt,a)}catch{}switch(a.tag){case 26:ee||ba(a,e),qa(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ee||ba(a,e);var l=Zt,i=Ue;ml(a.type)&&(Zt=a.stateNode,Ue=!1),qa(t,e,a),Yi(a.stateNode),Zt=l,Ue=i;break;case 5:ee||ba(a,e);case 6:if(l=Zt,i=Ue,Zt=null,qa(t,e,a),Zt=l,Ue=i,Zt!==null)if(Ue)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(u){qt(a,e,u)}else try{Zt.removeChild(a.stateNode)}catch(u){qt(a,e,u)}break;case 18:Zt!==null&&(Ue?(t=Zt,J0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ji(t)):J0(Zt,a.stateNode));break;case 4:l=Zt,i=Ue,Zt=a.stateNode.containerInfo,Ue=!0,qa(t,e,a),Zt=l,Ue=i;break;case 0:case 11:case 14:case 15:ee||rl(2,a,e),ee||rl(4,a,e),qa(t,e,a);break;case 1:ee||(ba(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&a0(a,e,l)),qa(t,e,a);break;case 21:qa(t,e,a);break;case 22:ee=(l=ee)||a.memoizedState!==null,qa(t,e,a),ee=l;break;default:qa(t,e,a)}}function s0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ji(t)}catch(a){qt(e,e.return,a)}}function L1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new u0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new u0),e;default:throw Error(o(435,t.tag))}}function qo(t,e){var a=L1(t);e.forEach(function(l){var i=Z1.bind(null,t,l);a.has(l)||(a.add(l),l.then(i,i))})}function ke(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],u=t,f=e,h=f;t:for(;h!==null;){switch(h.tag){case 27:if(ml(h.type)){Zt=h.stateNode,Ue=!1;break t}break;case 5:Zt=h.stateNode,Ue=!1;break t;case 3:case 4:Zt=h.stateNode.containerInfo,Ue=!0;break t}h=h.return}if(Zt===null)throw Error(o(160));o0(u,f,i),Zt=null,Ue=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)f0(e,t),e=e.sibling}var sa=null;function f0(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ke(e,t),qe(t),l&4&&(rl(3,t,t.return),Mi(3,t),rl(5,t,t.return));break;case 1:ke(e,t),qe(t),l&512&&(ee||a===null||ba(a,a.return)),l&64&&ka&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=sa;if(ke(e,t),qe(t),l&512&&(ee||a===null||ba(a,a.return)),l&4){var u=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(l){case"title":u=i.getElementsByTagName("title")[0],(!u||u[ni]||u[Te]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(l),i.head.insertBefore(u,i.querySelector("head > title"))),Ee(u,l,a),u[Te]=t,he(u),l=u;break t;case"link":var f=ip("link","href",i).get(l+(a.href||""));if(f){for(var h=0;h<f.length;h++)if(u=f[h],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(h,1);break e}}u=i.createElement(l),Ee(u,l,a),i.head.appendChild(u);break;case"meta":if(f=ip("meta","content",i).get(l+(a.content||""))){for(h=0;h<f.length;h++)if(u=f[h],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(h,1);break e}}u=i.createElement(l),Ee(u,l,a),i.head.appendChild(u);break;default:throw Error(o(468,l))}u[Te]=t,he(u),l=u}t.stateNode=l}else up(i,t.type,t.stateNode);else t.stateNode=np(i,l,t.memoizedProps);else u!==l?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,l===null?up(i,t.type,t.stateNode):np(i,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Bo(t,t.memoizedProps,a.memoizedProps)}break;case 27:ke(e,t),qe(t),l&512&&(ee||a===null||ba(a,a.return)),a!==null&&l&4&&Bo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ke(e,t),qe(t),l&512&&(ee||a===null||ba(a,a.return)),t.flags&32){i=t.stateNode;try{nn(i,"")}catch(D){qt(t,t.return,D)}}l&4&&t.stateNode!=null&&(i=t.memoizedProps,Bo(t,i,a!==null?a.memoizedProps:i)),l&1024&&(ko=!0);break;case 6:if(ke(e,t),qe(t),l&4){if(t.stateNode===null)throw Error(o(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(D){qt(t,t.return,D)}}break;case 3:if(Tr=null,i=sa,sa=Sr(e.containerInfo),ke(e,t),sa=i,qe(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ji(e.containerInfo)}catch(D){qt(t,t.return,D)}ko&&(ko=!1,d0(t));break;case 4:l=sa,sa=Sr(t.stateNode.containerInfo),ke(e,t),qe(t),sa=l;break;case 12:ke(e,t),qe(t);break;case 13:ke(e,t),qe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zo=We()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,qo(t,l)));break;case 22:i=t.memoizedState!==null;var y=a!==null&&a.memoizedState!==null,_=ka,N=ee;if(ka=_||i,ee=N||y,ke(e,t),ee=N,ka=_,qe(t),l&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||y||ka||ee||kl(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){y=a=e;try{if(u=y.stateNode,i)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=y.stateNode;var k=y.memoizedProps.style,z=k!=null&&k.hasOwnProperty("display")?k.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(D){qt(y,y.return,D)}}}else if(e.tag===6){if(a===null){y=e;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(D){qt(y,y.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,qo(t,a))));break;case 19:ke(e,t),qe(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,qo(t,l)));break;case 30:break;case 21:break;default:ke(e,t),qe(t)}}function qe(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(n0(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,u=Lo(t);cr(t,u,i);break;case 5:var f=a.stateNode;a.flags&32&&(nn(f,""),a.flags&=-33);var h=Lo(t);cr(t,h,f);break;case 3:case 4:var y=a.stateNode.containerInfo,_=Lo(t);Vo(t,_,y);break;default:throw Error(o(161))}}catch(N){qt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function d0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;d0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function cl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)r0(t,e.alternate,e),e=e.sibling}function kl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:rl(4,e,e.return),kl(e);break;case 1:ba(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&a0(e,e.return,a),kl(e);break;case 27:Yi(e.stateNode);case 26:case 5:ba(e,e.return),kl(e);break;case 22:e.memoizedState===null&&kl(e);break;case 30:kl(e);break;default:kl(e)}t=t.sibling}}function ol(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,i=t,u=e,f=u.flags;switch(u.tag){case 0:case 11:case 15:ol(i,u,a),Mi(4,u);break;case 1:if(ol(i,u,a),l=u,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){qt(l,l.return,_)}if(l=u,i=l.updateQueue,i!==null){var h=l.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)qd(y[i],h)}catch(_){qt(l,l.return,_)}}a&&f&64&&e0(u),Ni(u,u.return);break;case 27:i0(u);case 26:case 5:ol(i,u,a),a&&l===null&&f&4&&l0(u),Ni(u,u.return);break;case 12:ol(i,u,a);break;case 13:ol(i,u,a),a&&f&4&&s0(i,u);break;case 22:u.memoizedState===null&&ol(i,u,a),Ni(u,u.return);break;case 30:break;default:ol(i,u,a)}e=e.sibling}}function Go(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&vi(a))}function Yo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vi(t))}function Sa(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h0(t,e,a,l),e=e.sibling}function h0(t,e,a,l){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Sa(t,e,a,l),i&2048&&Mi(9,e);break;case 1:Sa(t,e,a,l);break;case 3:Sa(t,e,a,l),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&vi(t)));break;case 12:if(i&2048){Sa(t,e,a,l),t=e.stateNode;try{var u=e.memoizedProps,f=u.id,h=u.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){qt(e,e.return,y)}}else Sa(t,e,a,l);break;case 13:Sa(t,e,a,l);break;case 23:break;case 22:u=e.stateNode,f=e.alternate,e.memoizedState!==null?u._visibility&2?Sa(t,e,a,l):Ui(t,e):u._visibility&2?Sa(t,e,a,l):(u._visibility|=2,An(t,e,a,l,(e.subtreeFlags&10256)!==0)),i&2048&&Go(f,e);break;case 24:Sa(t,e,a,l),i&2048&&Yo(e.alternate,e);break;default:Sa(t,e,a,l)}}function An(t,e,a,l,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,f=e,h=a,y=l,_=f.flags;switch(f.tag){case 0:case 11:case 15:An(u,f,h,y,i),Mi(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?An(u,f,h,y,i):Ui(u,f):(N._visibility|=2,An(u,f,h,y,i)),i&&_&2048&&Go(f.alternate,f);break;case 24:An(u,f,h,y,i),i&&_&2048&&Yo(f.alternate,f);break;default:An(u,f,h,y,i)}e=e.sibling}}function Ui(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,i=l.flags;switch(l.tag){case 22:Ui(a,l),i&2048&&Go(l.alternate,l);break;case 24:Ui(a,l),i&2048&&Yo(l.alternate,l);break;default:Ui(a,l)}e=e.sibling}}var Hi=8192;function wn(t){if(t.subtreeFlags&Hi)for(t=t.child;t!==null;)p0(t),t=t.sibling}function p0(t){switch(t.tag){case 26:wn(t),t.flags&Hi&&t.memoizedState!==null&&Tx(sa,t.memoizedState,t.memoizedProps);break;case 5:wn(t);break;case 3:case 4:var e=sa;sa=Sr(t.stateNode.containerInfo),wn(t),sa=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Hi,Hi=16777216,wn(t),Hi=e):wn(t));break;default:wn(t)}}function m0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Bi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];me=l,x0(l,t)}m0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)g0(t),t=t.sibling}function g0(t){switch(t.tag){case 0:case 11:case 15:Bi(t),t.flags&2048&&rl(9,t,t.return);break;case 3:Bi(t);break;case 12:Bi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,or(t)):Bi(t);break;default:Bi(t)}}function or(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];me=l,x0(l,t)}m0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:rl(8,e,e.return),or(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,or(e));break;default:or(e)}t=t.sibling}}function x0(t,e){for(;me!==null;){var a=me;switch(a.tag){case 0:case 11:case 15:rl(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vi(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,me=l;else t:for(a=t;me!==null;){l=me;var i=l.sibling,u=l.return;if(c0(l),l===a){me=null;break t}if(i!==null){i.return=u,me=i;break t}me=u}}}var V1={getCacheForType:function(t){var e=Ae(se),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},k1=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Yt=null,wt=null,zt=0,Bt=0,Ge=null,sl=!1,_n=!1,Xo=!1,Ga=0,Pt=0,fl=0,ql=0,$o=0,la=0,Cn=0,Li=null,He=null,Qo=!1,Zo=0,sr=1/0,fr=null,dl=null,Se=0,hl=null,Rn=null,zn=0,Ko=0,Wo=null,y0=null,Vi=0,Fo=null;function Ye(){if((Ht&2)!==0&&zt!==0)return zt&-zt;if(O.T!==null){var t=gn;return t!==0?t:ls()}return Nf()}function v0(){la===0&&(la=(zt&536870912)===0||Nt?Df():536870912);var t=aa.current;return t!==null&&(t.flags|=32),la}function Xe(t,e,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Dn(t,0),pl(t,zt,la,!1)),li(t,a),((Ht&2)===0||t!==Yt)&&(t===Yt&&((Ht&2)===0&&(ql|=a),Pt===4&&pl(t,zt,la,!1)),Ea(t))}function b0(t,e,a){if((Ht&6)!==0)throw Error(o(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||wl(t,e),i=l?Y1(t,e):Po(t,e,!0),u=l;do{if(i===0){_n&&!l&&pl(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!q1(a)){i=Po(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var h=t;i=Li;var y=h.current.memoizedState.isDehydrated;if(y&&(Dn(h,f).flags|=256),f=Po(h,f,!1),f!==2){if(Xo&&!y){h.errorRecoveryDisabledLanes|=u,ql|=u,i=4;break t}u=He,He=i,u!==null&&(He===null?He=u:He.push.apply(He,u))}i=f}if(u=!1,i!==2)continue}}if(i===1){Dn(t,0),pl(t,e,0,!0);break}t:{switch(l=t,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:pl(l,e,la,!sl);break t;case 2:He=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=Zo+300-We(),10<i)){if(pl(l,e,la,!sl),Al(l,0,!0)!==0)break t;l.timeoutHandle=W0(S0.bind(null,l,a,He,fr,Qo,e,la,ql,Cn,sl,u,2,-0,0),i);break t}S0(l,a,He,fr,Qo,e,la,ql,Cn,sl,u,0,-0,0)}}break}while(!0);Ea(t)}function S0(t,e,a,l,i,u,f,h,y,_,N,k,z,D){if(t.timeoutHandle=-1,k=e.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(Qi={stylesheets:null,count:0,unsuspend:Ex},p0(e),k=Ax(),k!==null)){t.cancelPendingCommit=k(R0.bind(null,t,e,u,a,l,i,f,h,y,N,1,z,D)),pl(t,u,f,!_);return}R0(t,e,u,a,l,i,f,h,y)}function q1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],u=i.getSnapshot;i=i.value;try{if(!Le(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pl(t,e,a,l){e&=~$o,e&=~ql,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var i=e;0<i;){var u=31-Gt(i),f=1<<u;l[u]=-1,i&=~f}a!==0&&Of(t,a,e)}function dr(){return(Ht&6)===0?(ki(0),!1):!0}function Jo(){if(wt!==null){if(Bt===0)var t=wt.return;else t=wt,Na=Ul=null,po(t),En=null,Di=0,t=wt;for(;t!==null;)t0(t.alternate,t),t=t.return;wt=null}}function Dn(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ix(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Jo(),Yt=t,wt=a=ja(t.current,null),zt=e,Bt=0,Ge=null,sl=!1,_n=wl(t,e),Xo=!1,Cn=la=$o=ql=fl=Pt=0,He=Li=null,Qo=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var i=31-Gt(l),u=1<<i;e|=t[i],l&=~u}return Ga=e,Nu(),a}function E0(t,e){Et=null,O.H=Pu,e===Si||e===Yu?(e=Vd(),Bt=3):e===Hd?(e=Vd(),Bt=4):Bt=e===kh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ge=e,wt===null&&(Pt=1,nr(t,Ie(e,t.current)))}function T0(){var t=O.H;return O.H=Pu,t===null?Pu:t}function A0(){var t=O.A;return O.A=V1,t}function Io(){Pt=4,sl||(zt&4194048)!==zt&&aa.current!==null||(_n=!0),(fl&134217727)===0&&(ql&134217727)===0||Yt===null||pl(Yt,zt,la,!1)}function Po(t,e,a){var l=Ht;Ht|=2;var i=T0(),u=A0();(Yt!==t||zt!==e)&&(fr=null,Dn(t,e)),e=!1;var f=Pt;t:do try{if(Bt!==0&&wt!==null){var h=wt,y=Ge;switch(Bt){case 8:Jo(),f=6;break t;case 3:case 2:case 9:case 6:aa.current===null&&(e=!0);var _=Bt;if(Bt=0,Ge=null,jn(t,h,y,_),a&&_n){f=0;break t}break;default:_=Bt,Bt=0,Ge=null,jn(t,h,y,_)}}G1(),f=Pt;break}catch(N){E0(t,N)}while(!0);return e&&t.shellSuspendCounter++,Na=Ul=null,Ht=l,O.H=i,O.A=u,wt===null&&(Yt=null,zt=0,Nu()),f}function G1(){for(;wt!==null;)w0(wt)}function Y1(t,e){var a=Ht;Ht|=2;var l=T0(),i=A0();Yt!==t||zt!==e?(fr=null,sr=We()+500,Dn(t,e)):_n=wl(t,e);t:do try{if(Bt!==0&&wt!==null){e=wt;var u=Ge;e:switch(Bt){case 1:Bt=0,Ge=null,jn(t,e,u,1);break;case 2:case 9:if(Bd(u)){Bt=0,Ge=null,_0(e);break}e=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Ea(t)},u.then(e,e);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:Bd(u)?(Bt=0,Ge=null,_0(e)):(Bt=0,Ge=null,jn(t,e,u,7));break;case 5:var f=null;switch(wt.tag){case 26:f=wt.memoizedState;case 5:case 27:var h=wt;if(!f||rp(f)){Bt=0,Ge=null;var y=h.sibling;if(y!==null)wt=y;else{var _=h.return;_!==null?(wt=_,hr(_)):wt=null}break e}}Bt=0,Ge=null,jn(t,e,u,5);break;case 6:Bt=0,Ge=null,jn(t,e,u,6);break;case 8:Jo(),Pt=6;break t;default:throw Error(o(462))}}X1();break}catch(N){E0(t,N)}while(!0);return Na=Ul=null,O.H=l,O.A=i,Ht=a,wt!==null?0:(Yt=null,zt=0,Nu(),Pt)}function X1(){for(;wt!==null&&!Su();)w0(wt)}function w0(t){var e=Ih(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,e===null?hr(t):wt=e}function _0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Qh(a,e,e.pendingProps,e.type,void 0,zt);break;case 11:e=Qh(a,e,e.pendingProps,e.type.render,e.ref,zt);break;case 5:po(e);default:t0(a,e),e=wt=Cd(e,Ga),e=Ih(a,e,Ga)}t.memoizedProps=t.pendingProps,e===null?hr(t):wt=e}function jn(t,e,a,l){Na=Ul=null,po(e),En=null,Di=0;var i=e.return;try{if(M1(t,i,e,a,zt)){Pt=1,nr(t,Ie(a,t.current)),wt=null;return}}catch(u){if(i!==null)throw wt=i,u;Pt=1,nr(t,Ie(a,t.current)),wt=null;return}e.flags&32768?(Nt||l===1?t=!0:_n||(zt&536870912)!==0?t=!1:(sl=t=!0,(l===2||l===9||l===3||l===6)&&(l=aa.current,l!==null&&l.tag===13&&(l.flags|=16384))),C0(e,t)):hr(e)}function hr(t){var e=t;do{if((e.flags&32768)!==0){C0(e,sl);return}t=e.return;var a=U1(e.alternate,e,Ga);if(a!==null){wt=a;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Pt===0&&(Pt=5)}function C0(t,e){do{var a=H1(t.alternate,t);if(a!==null){a.flags&=32767,wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){wt=t;return}wt=t=a}while(t!==null);Pt=6,wt=null}function R0(t,e,a,l,i,u,f,h,y){t.cancelPendingCommit=null;do pr();while(Se!==0);if((Ht&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=Gc,Eg(t,a,u,f,h,y),t===Yt&&(wt=Yt=null,zt=0),Rn=e,hl=t,zn=a,Ko=u,Wo=i,y0=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,K1(C,function(){return M0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,i=K.p,K.p=2,f=Ht,Ht|=4;try{B1(t,e,a)}finally{Ht=f,K.p=i,O.T=l}}Se=1,z0(),D0(),j0()}}function z0(){if(Se===1){Se=0;var t=hl,e=Rn,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var l=K.p;K.p=2;var i=Ht;Ht|=4;try{f0(e,t);var u=fs,f=xd(t.containerInfo),h=u.focusedElem,y=u.selectionRange;if(f!==h&&h&&h.ownerDocument&&gd(h.ownerDocument.documentElement,h)){if(y!==null&&Bc(h)){var _=y.start,N=y.end;if(N===void 0&&(N=_),"selectionStart"in h)h.selectionStart=_,h.selectionEnd=Math.min(N,h.value.length);else{var k=h.ownerDocument||document,z=k&&k.defaultView||window;if(z.getSelection){var D=z.getSelection(),ht=h.textContent.length,ft=Math.min(y.start,ht),kt=y.end===void 0?ft:Math.min(y.end,ht);!D.extend&&ft>kt&&(f=kt,kt=ft,ft=f);var A=md(h,ft),T=md(h,kt);if(A&&T&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==T.node||D.focusOffset!==T.offset)){var w=k.createRange();w.setStart(A.node,A.offset),D.removeAllRanges(),ft>kt?(D.addRange(w),D.extend(T.node,T.offset)):(w.setEnd(T.node,T.offset),D.addRange(w))}}}}for(k=[],D=h;D=D.parentNode;)D.nodeType===1&&k.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<k.length;h++){var B=k[h];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}_r=!!ss,fs=ss=null}finally{Ht=i,K.p=l,O.T=a}}t.current=e,Se=2}}function D0(){if(Se===2){Se=0;var t=hl,e=Rn,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var l=K.p;K.p=2;var i=Ht;Ht|=4;try{r0(t,e.alternate,e)}finally{Ht=i,K.p=l,O.T=a}}Se=3}}function j0(){if(Se===4||Se===3){Se=0,dc();var t=hl,e=Rn,a=zn,l=y0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Se=5:(Se=0,Rn=hl=null,O0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(dl=null),gc(a),e=e.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(nt,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=O.T,i=K.p,K.p=2,O.T=null;try{for(var u=t.onRecoverableError,f=0;f<l.length;f++){var h=l[f];u(h.value,{componentStack:h.stack})}}finally{O.T=e,K.p=i}}(zn&3)!==0&&pr(),Ea(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Fo?Vi++:(Vi=0,Fo=t):Vi=0,ki(0)}}function O0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,vi(e)))}function pr(t){return z0(),D0(),j0(),M0()}function M0(){if(Se!==5)return!1;var t=hl,e=Ko;Ko=0;var a=gc(zn),l=O.T,i=K.p;try{K.p=32>a?32:a,O.T=null,a=Wo,Wo=null;var u=hl,f=zn;if(Se=0,Rn=hl=null,zn=0,(Ht&6)!==0)throw Error(o(331));var h=Ht;if(Ht|=4,g0(u.current),h0(u,u.current,f,a),Ht=h,ki(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(nt,u)}catch{}return!0}finally{K.p=i,O.T=l,O0(t,e)}}function N0(t,e,a){e=Ie(a,e),e=Ro(t.stateNode,e,2),t=ll(t,e,2),t!==null&&(li(t,2),Ea(t))}function qt(t,e,a){if(t.tag===3)N0(t,t,a);else for(;e!==null;){if(e.tag===3){N0(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(dl===null||!dl.has(l))){t=Ie(a,t),a=Lh(2),l=ll(e,a,2),l!==null&&(Vh(a,l,e,t),li(l,2),Ea(l));break}}e=e.return}}function ts(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new k1;var i=new Set;l.set(e,i)}else i=l.get(e),i===void 0&&(i=new Set,l.set(e,i));i.has(a)||(Xo=!0,i.add(a),t=$1.bind(null,t,e,a),e.then(t,t))}function $1(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(zt&a)===a&&(Pt===4||Pt===3&&(zt&62914560)===zt&&300>We()-Zo?(Ht&2)===0&&Dn(t,0):$o|=a,Cn===zt&&(Cn=0)),Ea(t)}function U0(t,e){e===0&&(e=jf()),t=dn(t,e),t!==null&&(li(t,e),Ea(t))}function Q1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),U0(t,a)}function Z1(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(e),U0(t,a)}function K1(t,e){return ei(t,e)}var mr=null,On=null,es=!1,gr=!1,as=!1,Gl=0;function Ea(t){t!==On&&t.next===null&&(On===null?mr=On=t:On=On.next=t),gr=!0,es||(es=!0,F1())}function ki(t,e){if(!as&&gr){as=!0;do for(var a=!1,l=mr;l!==null;){if(t!==0){var i=l.pendingLanes;if(i===0)var u=0;else{var f=l.suspendedLanes,h=l.pingedLanes;u=(1<<31-Gt(42|t)+1)-1,u&=i&~(f&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,V0(l,u))}else u=zt,u=Al(l,l===Yt?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||wl(l,u)||(a=!0,V0(l,u));l=l.next}while(a);as=!1}}function W1(){H0()}function H0(){gr=es=!1;var t=0;Gl!==0&&(nx()&&(t=Gl),Gl=0);for(var e=We(),a=null,l=mr;l!==null;){var i=l.next,u=B0(l,e);u===0?(l.next=null,a===null?mr=i:a.next=i,i===null&&(On=a)):(a=l,(t!==0||(u&3)!==0)&&(gr=!0)),l=i}ki(t)}function B0(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var f=31-Gt(u),h=1<<f,y=i[f];y===-1?((h&a)===0||(h&l)!==0)&&(i[f]=Eu(h,e)):y<=e&&(t.expiredLanes|=h),u&=~h}if(e=Yt,a=zt,a=Al(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Wl(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Wl(l),gc(a)){case 2:case 8:a=E;break;case 32:a=C;break;case 268435456:a=tt;break;default:a=C}return l=L0.bind(null,t),a=ei(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Wl(l),t.callbackPriority=2,t.callbackNode=null,2}function L0(t,e){if(Se!==0&&Se!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(pr()&&t.callbackNode!==a)return null;var l=zt;return l=Al(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(b0(t,l,e),B0(t,We()),t.callbackNode!=null&&t.callbackNode===a?L0.bind(null,t):null)}function V0(t,e){if(pr())return null;b0(t,e,!0)}function F1(){ux(function(){(Ht&6)!==0?ei(ai,W1):H0()})}function ls(){return Gl===0&&(Gl=Df()),Gl}function k0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cu(""+t)}function q0(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function J1(t,e,a,l,i){if(e==="submit"&&a&&a.stateNode===i){var u=k0((i[Oe]||null).action),f=l.submitter;f&&(e=(e=f[Oe]||null)?k0(e.formAction):f.getAttribute("formAction"),e!==null&&(u=e,f=null));var h=new ju("action","action",null,l,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Gl!==0){var y=f?q0(i,f):new FormData(i);To(a,{pending:!0,data:y,method:i.method,action:u},null,y)}}else typeof u=="function"&&(h.preventDefault(),y=f?q0(i,f):new FormData(i),To(a,{pending:!0,data:y,method:i.method,action:u},u,y))},currentTarget:i}]})}}for(var ns=0;ns<qc.length;ns++){var is=qc[ns],I1=is.toLowerCase(),P1=is[0].toUpperCase()+is.slice(1);oa(I1,"on"+P1)}oa(bd,"onAnimationEnd"),oa(Sd,"onAnimationIteration"),oa(Ed,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(g1,"onTransitionRun"),oa(x1,"onTransitionStart"),oa(y1,"onTransitionCancel"),oa(Td,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi));function G0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],i=l.event;l=l.listeners;t:{var u=void 0;if(e)for(var f=l.length-1;0<=f;f--){var h=l[f],y=h.instance,_=h.currentTarget;if(h=h.listener,y!==u&&i.isPropagationStopped())break t;u=h,i.currentTarget=_;try{u(i)}catch(N){lr(N)}i.currentTarget=null,u=y}else for(f=0;f<l.length;f++){if(h=l[f],y=h.instance,_=h.currentTarget,h=h.listener,y!==u&&i.isPropagationStopped())break t;u=h,i.currentTarget=_;try{u(i)}catch(N){lr(N)}i.currentTarget=null,u=y}}}}function _t(t,e){var a=e[xc];a===void 0&&(a=e[xc]=new Set);var l=t+"__bubble";a.has(l)||(Y0(e,t,2,!1),a.add(l))}function us(t,e,a){var l=0;e&&(l|=4),Y0(a,t,l,e)}var xr="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[xr]){t[xr]=!0,Hf.forEach(function(a){a!=="selectionchange"&&(tx.has(a)||us(a,!1,t),us(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xr]||(e[xr]=!0,us("selectionchange",!1,e))}}function Y0(t,e,a,l){switch(hp(e)){case 2:var i=Cx;break;case 8:i=Rx;break;default:i=Ss}a=i.bind(null,e,a,t),i=void 0,!Rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),l?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function cs(t,e,a,l,i){var u=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var h=l.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=l.return;f!==null;){var y=f.tag;if((y===3||y===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=Il(h),f===null)return;if(y=f.tag,y===5||y===6||y===26||y===27){l=u=f;continue t}h=h.parentNode}}l=l.return}Ff(function(){var _=u,N=_c(a),k=[];t:{var z=Ad.get(t);if(z!==void 0){var D=ju,ht=t;switch(t){case"keypress":if(zu(a)===0)break t;case"keydown":case"keyup":D=Kg;break;case"focusin":ht="focus",D=Oc;break;case"focusout":ht="blur",D=Oc;break;case"beforeblur":case"afterblur":D=Oc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Jg;break;case bd:case Sd:case Ed:D=Vg;break;case Td:D=Pg;break;case"scroll":case"scrollend":D=Ng;break;case"wheel":D=e1;break;case"copy":case"cut":case"paste":D=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ed;break;case"toggle":case"beforetoggle":D=l1}var ft=(e&4)!==0,kt=!ft&&(t==="scroll"||t==="scrollend"),A=ft?z!==null?z+"Capture":null:z;ft=[];for(var T=_,w;T!==null;){var B=T;if(w=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||w===null||A===null||(B=ui(T,A),B!=null&&ft.push(Gi(T,B,w))),kt)break;T=T.return}0<ft.length&&(z=new D(z,ht,null,a,N),k.push({event:z,listeners:ft}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",z&&a!==wc&&(ht=a.relatedTarget||a.fromElement)&&(Il(ht)||ht[Jl]))break t;if((D||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,D?(ht=a.relatedTarget||a.toElement,D=_,ht=ht?Il(ht):null,ht!==null&&(kt=d(ht),ft=ht.tag,ht!==kt||ft!==5&&ft!==27&&ft!==6)&&(ht=null)):(D=null,ht=_),D!==ht)){if(ft=Pf,B="onMouseLeave",A="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(ft=ed,B="onPointerLeave",A="onPointerEnter",T="pointer"),kt=D==null?z:ii(D),w=ht==null?z:ii(ht),z=new ft(B,T+"leave",D,a,N),z.target=kt,z.relatedTarget=w,B=null,Il(N)===_&&(ft=new ft(A,T+"enter",ht,a,N),ft.target=w,ft.relatedTarget=kt,B=ft),kt=B,D&&ht)e:{for(ft=D,A=ht,T=0,w=ft;w;w=Mn(w))T++;for(w=0,B=A;B;B=Mn(B))w++;for(;0<T-w;)ft=Mn(ft),T--;for(;0<w-T;)A=Mn(A),w--;for(;T--;){if(ft===A||A!==null&&ft===A.alternate)break e;ft=Mn(ft),A=Mn(A)}ft=null}else ft=null;D!==null&&X0(k,z,D,ft,!1),ht!==null&&kt!==null&&X0(k,kt,ht,ft,!0)}}t:{if(z=_?ii(_):window,D=z.nodeName&&z.nodeName.toLowerCase(),D==="select"||D==="input"&&z.type==="file")var lt=od;else if(rd(z))if(sd)lt=h1;else{lt=f1;var At=s1}else D=z.nodeName,!D||D.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?_&&Ac(_.elementType)&&(lt=od):lt=d1;if(lt&&(lt=lt(t,_))){cd(k,lt,a,N);break t}At&&At(t,z,_),t==="focusout"&&_&&z.type==="number"&&_.memoizedProps.value!=null&&Tc(z,"number",z.value)}switch(At=_?ii(_):window,t){case"focusin":(rd(At)||At.contentEditable==="true")&&(on=At,Lc=_,pi=null);break;case"focusout":pi=Lc=on=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,yd(k,a,N);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":yd(k,a,N)}var rt;if(Nc)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else cn?id(t,a)&&(dt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(ad&&a.locale!=="ko"&&(cn||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&cn&&(rt=Jf()):(Pa=N,zc="value"in Pa?Pa.value:Pa.textContent,cn=!0)),At=yr(_,dt),0<At.length&&(dt=new td(dt,t,null,a,N),k.push({event:dt,listeners:At}),rt?dt.data=rt:(rt=ud(a),rt!==null&&(dt.data=rt)))),(rt=i1?u1(t,a):r1(t,a))&&(dt=yr(_,"onBeforeInput"),0<dt.length&&(At=new td("onBeforeInput","beforeinput",null,a,N),k.push({event:At,listeners:dt}),At.data=rt)),J1(k,t,_,a,N)}G0(k,e)})}function Gi(t,e,a){return{instance:t,listener:e,currentTarget:a}}function yr(t,e){for(var a=e+"Capture",l=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=ui(t,a),i!=null&&l.unshift(Gi(t,i,u)),i=ui(t,e),i!=null&&l.push(Gi(t,i,u))),t.tag===3)return l;t=t.return}return[]}function Mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function X0(t,e,a,l,i){for(var u=e._reactName,f=[];a!==null&&a!==l;){var h=a,y=h.alternate,_=h.stateNode;if(h=h.tag,y!==null&&y===l)break;h!==5&&h!==26&&h!==27||_===null||(y=_,i?(_=ui(a,u),_!=null&&f.unshift(Gi(a,_,y))):i||(_=ui(a,u),_!=null&&f.push(Gi(a,_,y)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var ex=/\r\n?/g,ax=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(ex,`
`).replace(ax,"")}function Q0(t,e){return e=$0(e),$0(t)===e}function vr(){}function Vt(t,e,a,l,i,u){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||nn(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&nn(t,""+l);break;case"className":Au(t,"class",l);break;case"tabIndex":Au(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Au(t,a,l);break;case"style":Kf(t,l,u);break;case"data":if(e!=="object"){Au(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Cu(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Vt(t,e,"name",i.name,i,null),Vt(t,e,"formEncType",i.formEncType,i,null),Vt(t,e,"formMethod",i.formMethod,i,null),Vt(t,e,"formTarget",i.formTarget,i,null)):(Vt(t,e,"encType",i.encType,i,null),Vt(t,e,"method",i.method,i,null),Vt(t,e,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Cu(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=vr);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Cu(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Tu(t,"popover",l);break;case"xlinkActuate":za(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":za(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":za(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":za(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":za(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":za(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":za(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Tu(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Og.get(a)||a,Tu(t,a,l))}}function os(t,e,a,l,i,u){switch(a){case"style":Kf(t,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof l=="string"?nn(t,l):(typeof l=="number"||typeof l=="bigint")&&nn(t,""+l);break;case"onScroll":l!=null&&_t("scroll",t);break;case"onScrollEnd":l!=null&&_t("scrollend",t);break;case"onClick":l!=null&&(t.onclick=vr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[Oe]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof l=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,i);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Tu(t,a,l)}}}function Ee(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var l=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var f=a[u];if(f!=null)switch(u){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Vt(t,e,u,f,a,null)}}i&&Vt(t,e,"srcSet",a.srcSet,a,null),l&&Vt(t,e,"src",a.src,a,null);return;case"input":_t("invalid",t);var h=u=f=i=null,y=null,_=null;for(l in a)if(a.hasOwnProperty(l)){var N=a[l];if(N!=null)switch(l){case"name":i=N;break;case"type":f=N;break;case"checked":y=N;break;case"defaultChecked":_=N;break;case"value":u=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:Vt(t,e,l,N,a,null)}}Xf(t,u,h,y,_,f,i,!1),wu(t);return;case"select":_t("invalid",t),l=f=u=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":u=h;break;case"defaultValue":f=h;break;case"multiple":l=h;default:Vt(t,e,i,h,a,null)}e=u,a=f,t.multiple=!!l,e!=null?ln(t,!!l,e,!1):a!=null&&ln(t,!!l,a,!0);return;case"textarea":_t("invalid",t),u=i=l=null;for(f in a)if(a.hasOwnProperty(f)&&(h=a[f],h!=null))switch(f){case"value":l=h;break;case"defaultValue":i=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Vt(t,e,f,h,a,null)}Qf(t,l,i,u),wu(t);return;case"option":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Vt(t,e,y,l,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(l=0;l<qi.length;l++)_t(qi[l],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(l=a[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Vt(t,e,_,l,a,null)}return;default:if(Ac(e)){for(N in a)a.hasOwnProperty(N)&&(l=a[N],l!==void 0&&os(t,e,N,l,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(l=a[h],l!=null&&Vt(t,e,h,l,a,null))}function lx(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,f=null,h=null,y=null,_=null,N=null;for(D in a){var k=a[D];if(a.hasOwnProperty(D)&&k!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":y=k;default:l.hasOwnProperty(D)||Vt(t,e,D,null,l,k)}}for(var z in l){var D=l[z];if(k=a[z],l.hasOwnProperty(z)&&(D!=null||k!=null))switch(z){case"type":u=D;break;case"name":i=D;break;case"checked":_=D;break;case"defaultChecked":N=D;break;case"value":f=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:D!==k&&Vt(t,e,z,D,l,k)}}Ec(t,f,h,y,_,N,u,i);return;case"select":D=f=h=z=null;for(u in a)if(y=a[u],a.hasOwnProperty(u)&&y!=null)switch(u){case"value":break;case"multiple":D=y;default:l.hasOwnProperty(u)||Vt(t,e,u,null,l,y)}for(i in l)if(u=l[i],y=a[i],l.hasOwnProperty(i)&&(u!=null||y!=null))switch(i){case"value":z=u;break;case"defaultValue":h=u;break;case"multiple":f=u;default:u!==y&&Vt(t,e,i,u,l,y)}e=h,a=f,l=D,z!=null?ln(t,!!a,z,!1):!!l!=!!a&&(e!=null?ln(t,!!a,e,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":D=z=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Vt(t,e,h,null,l,i)}for(f in l)if(i=l[f],u=a[f],l.hasOwnProperty(f)&&(i!=null||u!=null))switch(f){case"value":z=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&Vt(t,e,f,i,l,u)}$f(t,z,D);return;case"option":for(var ht in a)if(z=a[ht],a.hasOwnProperty(ht)&&z!=null&&!l.hasOwnProperty(ht))switch(ht){case"selected":t.selected=!1;break;default:Vt(t,e,ht,null,l,z)}for(y in l)if(z=l[y],D=a[y],l.hasOwnProperty(y)&&z!==D&&(z!=null||D!=null))switch(y){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Vt(t,e,y,z,l,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!l.hasOwnProperty(ft)&&Vt(t,e,ft,null,l,z);for(_ in l)if(z=l[_],D=a[_],l.hasOwnProperty(_)&&z!==D&&(z!=null||D!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:Vt(t,e,_,z,l,D)}return;default:if(Ac(e)){for(var kt in a)z=a[kt],a.hasOwnProperty(kt)&&z!==void 0&&!l.hasOwnProperty(kt)&&os(t,e,kt,void 0,l,z);for(N in l)z=l[N],D=a[N],!l.hasOwnProperty(N)||z===D||z===void 0&&D===void 0||os(t,e,N,z,l,D);return}}for(var A in a)z=a[A],a.hasOwnProperty(A)&&z!=null&&!l.hasOwnProperty(A)&&Vt(t,e,A,null,l,z);for(k in l)z=l[k],D=a[k],!l.hasOwnProperty(k)||z===D||z==null&&D==null||Vt(t,e,k,z,l,D)}var ss=null,fs=null;function br(t){return t.nodeType===9?t:t.ownerDocument}function Z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ds(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hs=null;function nx(){var t=window.event;return t&&t.type==="popstate"?t===hs?!1:(hs=t,!0):(hs=null,!1)}var W0=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(t){return F0.resolve(null).then(t).catch(rx)}:W0;function rx(t){setTimeout(function(){throw t})}function ml(t){return t==="head"}function J0(t,e){var a=e,l=0,i=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<l&&8>l){a=l;var f=t.ownerDocument;if(a&1&&Yi(f.documentElement),a&2&&Yi(f.body),a&4)for(a=f.head,Yi(a),f=a.firstChild;f;){var h=f.nextSibling,y=f.nodeName;f[ni]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=h}}if(i===0){t.removeChild(u),Ji(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:l=a.charCodeAt(0)-48;else l=0;a=u}while(a);Ji(e)}function ps(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ps(a),yc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cx(t,e,a,l){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ni])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=fa(t.nextSibling),t===null)break}return null}function ox(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fa(t.nextSibling),t===null))return null;return t}function ms(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function sx(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function fa(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var gs=null;function I0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function P0(t,e,a){switch(e=br(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Yi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);yc(t)}var na=new Map,tp=new Set;function Sr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ya=K.d;K.d={f:fx,r:dx,D:hx,C:px,L:mx,m:gx,X:yx,S:xx,M:vx};function fx(){var t=Ya.f(),e=dr();return t||e}function dx(t){var e=Pl(t);e!==null&&e.tag===5&&e.type==="form"?bh(e):Ya.r(t)}var Nn=typeof document>"u"?null:document;function ep(t,e,a){var l=Nn;if(l&&typeof e=="string"&&e){var i=Je(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),tp.has(i)||(tp.add(i),t={rel:t,crossOrigin:a,href:e},l.querySelector(i)===null&&(e=l.createElement("link"),Ee(e,"link",t),he(e),l.head.appendChild(e)))}}function hx(t){Ya.D(t),ep("dns-prefetch",t,null)}function px(t,e){Ya.C(t,e),ep("preconnect",t,e)}function mx(t,e,a){Ya.L(t,e,a);var l=Nn;if(l&&t&&e){var i='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Je(a.imageSizes)+'"]')):i+='[href="'+Je(t)+'"]';var u=i;switch(e){case"style":u=Un(t);break;case"script":u=Hn(t)}na.has(u)||(t=b({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),na.set(u,t),l.querySelector(i)!==null||e==="style"&&l.querySelector(Xi(u))||e==="script"&&l.querySelector($i(u))||(e=l.createElement("link"),Ee(e,"link",t),he(e),l.head.appendChild(e)))}}function gx(t,e){Ya.m(t,e);var a=Nn;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Je(l)+'"][href="'+Je(t)+'"]',u=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Hn(t)}if(!na.has(u)&&(t=b({rel:"modulepreload",href:t},e),na.set(u,t),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector($i(u)))return}l=a.createElement("link"),Ee(l,"link",t),he(l),a.head.appendChild(l)}}}function xx(t,e,a){Ya.S(t,e,a);var l=Nn;if(l&&t){var i=tn(l).hoistableStyles,u=Un(t);e=e||"default";var f=i.get(u);if(!f){var h={loading:0,preload:null};if(f=l.querySelector(Xi(u)))h.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},a),(a=na.get(u))&&xs(t,a);var y=f=l.createElement("link");he(y),Ee(y,"link",t),y._p=new Promise(function(_,N){y.onload=_,y.onerror=N}),y.addEventListener("load",function(){h.loading|=1}),y.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Er(f,e,l)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(u,f)}}}function yx(t,e){Ya.X(t,e);var a=Nn;if(a&&t){var l=tn(a).hoistableScripts,i=Hn(t),u=l.get(i);u||(u=a.querySelector($i(i)),u||(t=b({src:t,async:!0},e),(e=na.get(i))&&ys(t,e),u=a.createElement("script"),he(u),Ee(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function vx(t,e){Ya.M(t,e);var a=Nn;if(a&&t){var l=tn(a).hoistableScripts,i=Hn(t),u=l.get(i);u||(u=a.querySelector($i(i)),u||(t=b({src:t,async:!0,type:"module"},e),(e=na.get(i))&&ys(t,e),u=a.createElement("script"),he(u),Ee(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(i,u))}}function ap(t,e,a,l){var i=(i=ot.current)?Sr(i):null;if(!i)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Un(a.href),a=tn(i).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Un(a.href);var u=tn(i).hoistableStyles,f=u.get(t);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,f),(u=i.querySelector(Xi(t)))&&!u._p&&(f.instance=u,f.state.loading=5),na.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},na.set(t,a),u||bx(i,t,a,f.state))),e&&l===null)throw Error(o(528,""));return f}if(e&&l!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Hn(a),a=tn(i).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Un(t){return'href="'+Je(t)+'"'}function Xi(t){return'link[rel="stylesheet"]['+t+"]"}function lp(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function bx(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Ee(e,"link",a),he(e),t.head.appendChild(e))}function Hn(t){return'[src="'+Je(t)+'"]'}function $i(t){return"script[async]"+t}function np(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+Je(a.href)+'"]');if(l)return e.instance=l,he(l),l;var i=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),he(l),Ee(l,"style",i),Er(l,a.precedence,t),e.instance=l;case"stylesheet":i=Un(a.href);var u=t.querySelector(Xi(i));if(u)return e.state.loading|=4,e.instance=u,he(u),u;l=lp(a),(i=na.get(i))&&xs(l,i),u=(t.ownerDocument||t).createElement("link"),he(u);var f=u;return f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),Ee(u,"link",l),e.state.loading|=4,Er(u,a.precedence,t),e.instance=u;case"script":return u=Hn(a.src),(i=t.querySelector($i(u)))?(e.instance=i,he(i),i):(l=a,(i=na.get(u))&&(l=b({},a),ys(l,i)),t=t.ownerDocument||t,i=t.createElement("script"),he(i),Ee(i,"link",l),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Er(l,a.precedence,t));return e.instance}function Er(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,u=i,f=0;f<l.length;f++){var h=l[f];if(h.dataset.precedence===e)u=h;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function xs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ys(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Tr=null;function ip(t,e,a){if(Tr===null){var l=new Map,i=Tr=new Map;i.set(a,l)}else i=Tr,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[ni]||u[Te]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(e)||"";f=t+f;var h=l.get(f);h?h.push(u):l.set(f,[u])}}return l}function up(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Sx(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function rp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Qi=null;function Ex(){}function Tx(t,e,a){if(Qi===null)throw Error(o(475));var l=Qi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Un(a.href),u=t.querySelector(Xi(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Ar.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=u,he(u);return}u=t.ownerDocument||t,a=lp(a),(i=na.get(i))&&xs(a,i),u=u.createElement("link"),he(u);var f=u;f._p=new Promise(function(h,y){f.onload=h,f.onerror=y}),Ee(u,"link",a),e.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=Ar.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function Ax(){if(Qi===null)throw Error(o(475));var t=Qi;return t.stylesheets&&t.count===0&&vs(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&vs(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ar(){if(this.count--,this.count===0){if(this.stylesheets)vs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wr=null;function vs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wr=new Map,e.forEach(wx,t),wr=null,Ar.call(t))}function wx(t,e){if(!(e.state.loading&4)){var a=wr.get(t);if(a)var l=a.get(null);else{a=new Map,wr.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var f=i[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),l=f)}l&&a.set(null,l)}i=e.instance,f=i.getAttribute("data-precedence"),u=a.get(f)||l,u===l&&a.set(null,i),a.set(f,i),this.count++,l=Ar.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Zi={$$typeof:$,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function _x(t,e,a,l,i,u,f,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.hiddenUpdates=pc(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function cp(t,e,a,l,i,u,f,h,y,_,N,k){return t=new _x(t,e,a,f,h,y,_,k),e=1,u===!0&&(e|=24),u=Ve(3,null,null,e),t.current=u,u.stateNode=t,e=Pc(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:l,isDehydrated:a,cache:e},lo(u),t}function op(t){return t?(t=hn,t):hn}function sp(t,e,a,l,i,u){i=op(i),l.context===null?l.context=i:l.pendingContext=i,l=al(e),l.payload={element:a},u=u===void 0?null:u,u!==null&&(l.callback=u),a=ll(t,l,e),a!==null&&(Xe(a,t,e),Ti(a,t,e))}function fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function bs(t,e){fp(t,e),(t=t.alternate)&&fp(t,e)}function dp(t){if(t.tag===13){var e=dn(t,67108864);e!==null&&Xe(e,t,67108864),bs(t,67108864)}}var _r=!0;function Cx(t,e,a,l){var i=O.T;O.T=null;var u=K.p;try{K.p=2,Ss(t,e,a,l)}finally{K.p=u,O.T=i}}function Rx(t,e,a,l){var i=O.T;O.T=null;var u=K.p;try{K.p=8,Ss(t,e,a,l)}finally{K.p=u,O.T=i}}function Ss(t,e,a,l){if(_r){var i=Es(l);if(i===null)cs(t,e,l,Cr,a),pp(t,l);else if(Dx(i,t,e,a,l))l.stopPropagation();else if(pp(t,l),e&4&&-1<zx.indexOf(t)){for(;i!==null;){var u=Pl(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Ra(u.pendingLanes);if(f!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var y=1<<31-Gt(f);h.entanglements[1]|=y,f&=~y}Ea(u),(Ht&6)===0&&(sr=We()+500,ki(0))}}break;case 13:h=dn(u,2),h!==null&&Xe(h,u,2),dr(),bs(u,2)}if(u=Es(l),u===null&&cs(t,e,l,Cr,a),u===i)break;i=u}i!==null&&l.stopPropagation()}else cs(t,e,l,null,a)}}function Es(t){return t=_c(t),Ts(t)}var Cr=null;function Ts(t){if(Cr=null,t=Il(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=m(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Cr=t,null}function hp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zf()){case ai:return 2;case E:return 8;case C:case M:return 32;case tt:return 268435456;default:return 32}default:return 32}}var As=!1,gl=null,xl=null,yl=null,Ki=new Map,Wi=new Map,vl=[],zx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pp(t,e){switch(t){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":xl=null;break;case"mouseover":case"mouseout":yl=null;break;case"pointerover":case"pointerout":Ki.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(e.pointerId)}}function Fi(t,e,a,l,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:u,targetContainers:[i]},e!==null&&(e=Pl(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Dx(t,e,a,l,i){switch(e){case"focusin":return gl=Fi(gl,t,e,a,l,i),!0;case"dragenter":return xl=Fi(xl,t,e,a,l,i),!0;case"mouseover":return yl=Fi(yl,t,e,a,l,i),!0;case"pointerover":var u=i.pointerId;return Ki.set(u,Fi(Ki.get(u)||null,t,e,a,l,i)),!0;case"gotpointercapture":return u=i.pointerId,Wi.set(u,Fi(Wi.get(u)||null,t,e,a,l,i)),!0}return!1}function mp(t){var e=Il(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=m(a),e!==null){t.blockedOn=e,Tg(t.priority,function(){if(a.tag===13){var l=Ye();l=mc(l);var i=dn(a,l);i!==null&&Xe(i,a,l),bs(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Es(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);wc=l,a.target.dispatchEvent(l),wc=null}else return e=Pl(a),e!==null&&dp(e),t.blockedOn=a,!1;e.shift()}return!0}function gp(t,e,a){Rr(t)&&a.delete(e)}function jx(){As=!1,gl!==null&&Rr(gl)&&(gl=null),xl!==null&&Rr(xl)&&(xl=null),yl!==null&&Rr(yl)&&(yl=null),Ki.forEach(gp),Wi.forEach(gp)}function zr(t,e){t.blockedOn===e&&(t.blockedOn=null,As||(As=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,jx)))}var Dr=null;function xp(t){Dr!==t&&(Dr=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Dr===t&&(Dr=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],i=t[e+2];if(typeof l!="function"){if(Ts(l||a)===null)continue;break}var u=Pl(a);u!==null&&(t.splice(e,3),e-=3,To(u,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Ji(t){function e(y){return zr(y,t)}gl!==null&&zr(gl,t),xl!==null&&zr(xl,t),yl!==null&&zr(yl,t),Ki.forEach(e),Wi.forEach(e);for(var a=0;a<vl.length;a++){var l=vl[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<vl.length&&(a=vl[0],a.blockedOn===null);)mp(a),a.blockedOn===null&&vl.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],u=a[l+1],f=i[Oe]||null;if(typeof u=="function")f||xp(a);else if(f){var h=null;if(u&&u.hasAttribute("formAction")){if(i=u,f=u[Oe]||null)h=f.formAction;else if(Ts(i)!==null)continue}else h=f.action;typeof h=="function"?a[l+1]=h:(a.splice(l,3),l-=3),xp(a)}}}function ws(t){this._internalRoot=t}jr.prototype.render=ws.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,l=Ye();sp(a,l,t,e,null,null)},jr.prototype.unmount=ws.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sp(t.current,2,null,t,null,null),dr(),e[Jl]=null}};function jr(t){this._internalRoot=t}jr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<vl.length&&e!==0&&e<vl[a].priority;a++);vl.splice(a,0,t),a===0&&mp(t)}};var yp=r.version;if(yp!=="19.1.1")throw Error(o(527,yp,"19.1.1"));K.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=v(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Ox={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{nt=Or.inject(Ox),gt=Or}catch{}}return Pi.createRoot=function(t,e){if(!s(t))throw Error(o(299));var a=!1,l="",i=Nh,u=Uh,f=Hh,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=cp(t,1,!1,null,null,a,l,i,u,f,h,null),t[Jl]=e.current,rs(t),new ws(e)},Pi.hydrateRoot=function(t,e,a){if(!s(t))throw Error(o(299));var l=!1,i="",u=Nh,f=Uh,h=Hh,y=null,_=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(y=a.unstable_transitionCallbacks),a.formState!==void 0&&(_=a.formState)),e=cp(t,1,!0,e,a??null,l,i,u,f,h,y,_),e.context=op(null),a=e.current,l=Ye(),l=mc(l),i=al(l),i.callback=null,ll(a,i,l),a=l,e.current.lanes=a,li(e,a),Ea(e),t[Jl]=e.current,rs(t),new jr(e)},Pi.version="19.1.1",Pi}var Rp;function Yx(){if(Rp)return Rs.exports;Rp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Rs.exports=Gx(),Rs.exports}var Xx=Yx();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var zp="popstate";function $x(n={}){function r(o,s){let{pathname:d,search:m,hash:x}=o.location;return $s("",{pathname:d,search:m,hash:x},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function c(o,s){return typeof s=="string"?s:hu(s)}return Zx(r,c,null,n)}function Ft(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function _a(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Qx(){return Math.random().toString(36).substring(2,10)}function Dp(n,r){return{usr:n.state,key:n.key,idx:r}}function $s(n,r,c=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?In(r):r,state:c,key:r&&r.key||o||Qx()}}function hu({pathname:n="/",search:r="",hash:c=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(n+=c.charAt(0)==="#"?c:"#"+c),n}function In(n){let r={};if(n){let c=n.indexOf("#");c>=0&&(r.hash=n.substring(c),n=n.substring(0,c));let o=n.indexOf("?");o>=0&&(r.search=n.substring(o),n=n.substring(0,o)),n&&(r.pathname=n)}return r}function Zx(n,r,c,o={}){let{window:s=document.defaultView,v5Compat:d=!1}=o,m=s.history,x="POP",v=null,g=b();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function b(){return(m.state||{idx:null}).idx}function R(){x="POP";let X=b(),W=X==null?null:X-g;g=X,v&&v({action:x,location:G.location,delta:W})}function j(X,W){x="PUSH";let H=$s(G.location,X,W);g=b()+1;let $=Dp(H,g),at=G.createHref(H);try{m.pushState($,"",at)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;s.location.assign(at)}d&&v&&v({action:x,location:G.location,delta:1})}function V(X,W){x="REPLACE";let H=$s(G.location,X,W);g=b();let $=Dp(H,g),at=G.createHref(H);m.replaceState($,"",at),d&&v&&v({action:x,location:G.location,delta:0})}function Y(X){return Kx(X)}let G={get action(){return x},get location(){return n(s,m)},listen(X){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(zp,R),v=X,()=>{s.removeEventListener(zp,R),v=null}},createHref(X){return r(s,X)},createURL:Y,encodeLocation(X){let W=Y(X);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:j,replace:V,go(X){return m.go(X)}};return G}function Kx(n,r=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ft(c,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:hu(n);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function gm(n,r,c="/"){return Wx(n,r,c,!1)}function Wx(n,r,c,o){let s=typeof r=="string"?In(r):r,d=Ka(s.pathname||"/",c);if(d==null)return null;let m=xm(n);Fx(m);let x=null;for(let v=0;x==null&&v<m.length;++v){let g=ry(d);x=iy(m[v],g,o)}return x}function xm(n,r=[],c=[],o="",s=!1){let d=(m,x,v=s,g)=>{let b={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:x,route:m};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&v)return;Ft(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let R=Za([o,b.relativePath]),j=c.concat(b);m.children&&m.children.length>0&&(Ft(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),xm(m.children,r,j,R,v)),!(m.path==null&&!m.index)&&r.push({path:R,score:ly(R,m.index),routesMeta:j})};return n.forEach((m,x)=>{if(m.path===""||!m.path?.includes("?"))d(m,x);else for(let v of ym(m.path))d(m,x,!0,v)}),r}function ym(n){let r=n.split("/");if(r.length===0)return[];let[c,...o]=r,s=c.endsWith("?"),d=c.replace(/\?$/,"");if(o.length===0)return s?[d,""]:[d];let m=ym(o.join("/")),x=[];return x.push(...m.map(v=>v===""?d:[d,v].join("/"))),s&&x.push(...m),x.map(v=>n.startsWith("/")&&v===""?"/":v)}function Fx(n){n.sort((r,c)=>r.score!==c.score?c.score-r.score:ny(r.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var Jx=/^:[\w-]+$/,Ix=3,Px=2,ty=1,ey=10,ay=-2,jp=n=>n==="*";function ly(n,r){let c=n.split("/"),o=c.length;return c.some(jp)&&(o+=ay),r&&(o+=Px),c.filter(s=>!jp(s)).reduce((s,d)=>s+(Jx.test(d)?Ix:d===""?ty:ey),o)}function ny(n,r){return n.length===r.length&&n.slice(0,-1).every((o,s)=>o===r[s])?n[n.length-1]-r[r.length-1]:0}function iy(n,r,c=!1){let{routesMeta:o}=n,s={},d="/",m=[];for(let x=0;x<o.length;++x){let v=o[x],g=x===o.length-1,b=d==="/"?r:r.slice(d.length)||"/",R=Kr({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},b),j=v.route;if(!R&&g&&c&&!o[o.length-1].route.index&&(R=Kr({path:v.relativePath,caseSensitive:v.caseSensitive,end:!1},b)),!R)return null;Object.assign(s,R.params),m.push({params:s,pathname:Za([d,R.pathname]),pathnameBase:fy(Za([d,R.pathnameBase])),route:j}),R.pathnameBase!=="/"&&(d=Za([d,R.pathnameBase]))}return m}function Kr(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[c,o]=uy(n.path,n.caseSensitive,n.end),s=r.match(c);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),x=s.slice(1);return{params:o.reduce((g,{paramName:b,isOptional:R},j)=>{if(b==="*"){let Y=x[j]||"";m=d.slice(0,d.length-Y.length).replace(/(.)\/+$/,"$1")}const V=x[j];return R&&!V?g[b]=void 0:g[b]=(V||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:m,pattern:n}}function uy(n,r=!1,c=!0){_a(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,v)=>(o.push({paramName:x,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function ry(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return _a(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Ka(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,o=n.charAt(c);return o&&o!=="/"?null:n.slice(c)||"/"}function cy(n,r="/"){let{pathname:c,search:o="",hash:s=""}=typeof n=="string"?In(n):n;return{pathname:c?c.startsWith("/")?c:oy(c,r):r,search:dy(o),hash:hy(s)}}function oy(n,r){let c=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?c.length>1&&c.pop():s!=="."&&c.push(s)}),c.length>1?c.join("/"):"/"}function Os(n,r,c,o){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sy(n){return n.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function vm(n){let r=sy(n);return r.map((c,o)=>o===r.length-1?c.pathname:c.pathnameBase)}function bm(n,r,c,o=!1){let s;typeof n=="string"?s=In(n):(s={...n},Ft(!s.pathname||!s.pathname.includes("?"),Os("?","pathname","search",s)),Ft(!s.pathname||!s.pathname.includes("#"),Os("#","pathname","hash",s)),Ft(!s.search||!s.search.includes("#"),Os("#","search","hash",s)));let d=n===""||s.pathname==="",m=d?"/":s.pathname,x;if(m==null)x=c;else{let R=r.length-1;if(!o&&m.startsWith("..")){let j=m.split("/");for(;j[0]==="..";)j.shift(),R-=1;s.pathname=j.join("/")}x=R>=0?r[R]:"/"}let v=cy(s,x),g=m&&m!=="/"&&m.endsWith("/"),b=(d||m===".")&&c.endsWith("/");return!v.pathname.endsWith("/")&&(g||b)&&(v.pathname+="/"),v}var Za=n=>n.join("/").replace(/\/\/+/g,"/"),fy=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),dy=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,hy=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function py(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Sm=["POST","PUT","PATCH","DELETE"];new Set(Sm);var my=["GET",...Sm];new Set(my);var Pn=L.createContext(null);Pn.displayName="DataRouter";var ac=L.createContext(null);ac.displayName="DataRouterState";L.createContext(!1);var Em=L.createContext({isTransitioning:!1});Em.displayName="ViewTransition";var gy=L.createContext(new Map);gy.displayName="Fetchers";var xy=L.createContext(null);xy.displayName="Await";var Ca=L.createContext(null);Ca.displayName="Navigation";var gu=L.createContext(null);gu.displayName="Location";var Wa=L.createContext({outlet:null,matches:[],isDataRoute:!1});Wa.displayName="Route";var sf=L.createContext(null);sf.displayName="RouteError";function yy(n,{relative:r}={}){Ft(xu(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=L.useContext(Ca),{hash:s,pathname:d,search:m}=yu(n,{relative:r}),x=d;return c!=="/"&&(x=d==="/"?c:Za([c,d])),o.createHref({pathname:x,search:m,hash:s})}function xu(){return L.useContext(gu)!=null}function Kl(){return Ft(xu(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(gu).location}var Tm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(n){L.useContext(Ca).static||L.useLayoutEffect(n)}function vy(){let{isDataRoute:n}=L.useContext(Wa);return n?Oy():by()}function by(){Ft(xu(),"useNavigate() may be used only in the context of a <Router> component.");let n=L.useContext(Pn),{basename:r,navigator:c}=L.useContext(Ca),{matches:o}=L.useContext(Wa),{pathname:s}=Kl(),d=JSON.stringify(vm(o)),m=L.useRef(!1);return Am(()=>{m.current=!0}),L.useCallback((v,g={})=>{if(_a(m.current,Tm),!m.current)return;if(typeof v=="number"){c.go(v);return}let b=bm(v,JSON.parse(d),s,g.relative==="path");n==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:Za([r,b.pathname])),(g.replace?c.replace:c.push)(b,g.state,g)},[r,c,d,s,n])}L.createContext(null);function yu(n,{relative:r}={}){let{matches:c}=L.useContext(Wa),{pathname:o}=Kl(),s=JSON.stringify(vm(c));return L.useMemo(()=>bm(n,JSON.parse(s),o,r==="path"),[n,s,o,r])}function Sy(n,r){return wm(n,r)}function wm(n,r,c,o,s){Ft(xu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=L.useContext(Ca),{matches:m}=L.useContext(Wa),x=m[m.length-1],v=x?x.params:{},g=x?x.pathname:"/",b=x?x.pathnameBase:"/",R=x&&x.route;{let H=R&&R.path||"";_m(g,!R||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let j=Kl(),V;if(r){let H=typeof r=="string"?In(r):r;Ft(b==="/"||H.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${H.pathname}" was given in the \`location\` prop.`),V=H}else V=j;let Y=V.pathname||"/",G=Y;if(b!=="/"){let H=b.replace(/^\//,"").split("/");G="/"+Y.replace(/^\//,"").split("/").slice(H.length).join("/")}let X=gm(n,{pathname:G});_a(R||X!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),_a(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let W=_y(X&&X.map(H=>Object.assign({},H,{params:Object.assign({},v,H.params),pathname:Za([b,d.encodeLocation?d.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?b:Za([b,d.encodeLocation?d.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),m,c,o,s);return r&&W?L.createElement(gu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...V},navigationType:"POP"}},W):W}function Ey(){let n=jy(),r=py(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),c=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",n),m=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:d},"ErrorBoundary")," or"," ",L.createElement("code",{style:d},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},r),c?L.createElement("pre",{style:s},c):null,m)}var Ty=L.createElement(Ey,null),Ay=class extends L.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){this.props.unstable_onError?this.props.unstable_onError(n,r):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?L.createElement(Wa.Provider,{value:this.props.routeContext},L.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wy({routeContext:n,match:r,children:c}){let o=L.useContext(Pn);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),L.createElement(Wa.Provider,{value:n},c)}function _y(n,r=[],c=null,o=null,s=null){if(n==null){if(!c)return null;if(c.errors)n=c.matches;else if(r.length===0&&!c.initialized&&c.matches.length>0)n=c.matches;else return null}let d=n,m=c?.errors;if(m!=null){let g=d.findIndex(b=>b.route.id&&m?.[b.route.id]!==void 0);Ft(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let x=!1,v=-1;if(c)for(let g=0;g<d.length;g++){let b=d[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(v=g),b.route.id){let{loaderData:R,errors:j}=c,V=b.route.loader&&!R.hasOwnProperty(b.route.id)&&(!j||j[b.route.id]===void 0);if(b.route.lazy||V){x=!0,v>=0?d=d.slice(0,v+1):d=[d[0]];break}}}return d.reduceRight((g,b,R)=>{let j,V=!1,Y=null,G=null;c&&(j=m&&b.route.id?m[b.route.id]:void 0,Y=b.route.errorElement||Ty,x&&(v<0&&R===0?(_m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,G=null):v===R&&(V=!0,G=b.route.hydrateFallbackElement||null)));let X=r.concat(d.slice(0,R+1)),W=()=>{let H;return j?H=Y:V?H=G:b.route.Component?H=L.createElement(b.route.Component,null):b.route.element?H=b.route.element:H=g,L.createElement(wy,{match:b,routeContext:{outlet:g,matches:X,isDataRoute:c!=null},children:H})};return c&&(b.route.ErrorBoundary||b.route.errorElement||R===0)?L.createElement(Ay,{location:c.location,revalidation:c.revalidation,component:Y,error:j,children:W(),routeContext:{outlet:null,matches:X,isDataRoute:!0},unstable_onError:o}):W()},null)}function ff(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Cy(n){let r=L.useContext(Pn);return Ft(r,ff(n)),r}function Ry(n){let r=L.useContext(ac);return Ft(r,ff(n)),r}function zy(n){let r=L.useContext(Wa);return Ft(r,ff(n)),r}function df(n){let r=zy(n),c=r.matches[r.matches.length-1];return Ft(c.route.id,`${n} can only be used on routes that contain a unique "id"`),c.route.id}function Dy(){return df("useRouteId")}function jy(){let n=L.useContext(sf),r=Ry("useRouteError"),c=df("useRouteError");return n!==void 0?n:r.errors?.[c]}function Oy(){let{router:n}=Cy("useNavigate"),r=df("useNavigate"),c=L.useRef(!1);return Am(()=>{c.current=!0}),L.useCallback(async(s,d={})=>{_a(c.current,Tm),c.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:r,...d}))},[n,r])}var Op={};function _m(n,r,c){!r&&!Op[n]&&(Op[n]=!0,_a(!1,c))}L.memo(My);function My({routes:n,future:r,state:c,unstable_onError:o}){return wm(n,void 0,c,o,r)}function Qs(n){Ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ny({basename:n="/",children:r=null,location:c,navigationType:o="POP",navigator:s,static:d=!1}){Ft(!xu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=n.replace(/^\/*/,"/"),x=L.useMemo(()=>({basename:m,navigator:s,static:d,future:{}}),[m,s,d]);typeof c=="string"&&(c=In(c));let{pathname:v="/",search:g="",hash:b="",state:R=null,key:j="default"}=c,V=L.useMemo(()=>{let Y=Ka(v,m);return Y==null?null:{location:{pathname:Y,search:g,hash:b,state:R,key:j},navigationType:o}},[m,v,g,b,R,j,o]);return _a(V!=null,`<Router basename="${m}"> is not able to match the URL "${v}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:L.createElement(Ca.Provider,{value:x},L.createElement(gu.Provider,{children:r,value:V}))}function Uy({children:n,location:r}){return Sy(Zs(n),r)}function Zs(n,r=[]){let c=[];return L.Children.forEach(n,(o,s)=>{if(!L.isValidElement(o))return;let d=[...r,s];if(o.type===L.Fragment){c.push.apply(c,Zs(o.props.children,d));return}Ft(o.type===Qs,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ft(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=Zs(o.props.children,d)),c.push(m)}),c}var qr="get",Gr="application/x-www-form-urlencoded";function lc(n){return n!=null&&typeof n.tagName=="string"}function Hy(n){return lc(n)&&n.tagName.toLowerCase()==="button"}function By(n){return lc(n)&&n.tagName.toLowerCase()==="form"}function Ly(n){return lc(n)&&n.tagName.toLowerCase()==="input"}function Vy(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ky(n,r){return n.button===0&&(!r||r==="_self")&&!Vy(n)}var Mr=null;function qy(){if(Mr===null)try{new FormData(document.createElement("form"),0),Mr=!1}catch{Mr=!0}return Mr}var Gy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ms(n){return n!=null&&!Gy.has(n)?(_a(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gr}"`),null):n}function Yy(n,r){let c,o,s,d,m;if(By(n)){let x=n.getAttribute("action");o=x?Ka(x,r):null,c=n.getAttribute("method")||qr,s=Ms(n.getAttribute("enctype"))||Gr,d=new FormData(n)}else if(Hy(n)||Ly(n)&&(n.type==="submit"||n.type==="image")){let x=n.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let v=n.getAttribute("formaction")||x.getAttribute("action");if(o=v?Ka(v,r):null,c=n.getAttribute("formmethod")||x.getAttribute("method")||qr,s=Ms(n.getAttribute("formenctype"))||Ms(x.getAttribute("enctype"))||Gr,d=new FormData(x,n),!qy()){let{name:g,type:b,value:R}=n;if(b==="image"){let j=g?`${g}.`:"";d.append(`${j}x`,"0"),d.append(`${j}y`,"0")}else g&&d.append(g,R)}}else{if(lc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=qr,o=null,s=Gr,m=n}return d&&s==="text/plain"&&(m=d,d=void 0),{action:o,method:c.toLowerCase(),encType:s,formData:d,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hf(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Xy(n,r,c){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${c}`:r&&Ka(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${c}`,o}async function $y(n,r){if(n.id in r)return r[n.id];try{let c=await import(n.module);return r[n.id]=c,c}catch(c){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qy(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Zy(n,r,c){let o=await Promise.all(n.map(async s=>{let d=r.routes[s.route.id];if(d){let m=await $y(d,c);return m.links?m.links():[]}return[]}));return Jy(o.flat(1).filter(Qy).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Mp(n,r,c,o,s,d){let m=(v,g)=>c[g]?v.route.id!==c[g].route.id:!0,x=(v,g)=>c[g].pathname!==v.pathname||c[g].route.path?.endsWith("*")&&c[g].params["*"]!==v.params["*"];return d==="assets"?r.filter((v,g)=>m(v,g)||x(v,g)):d==="data"?r.filter((v,g)=>{let b=o.routes[v.route.id];if(!b||!b.hasLoader)return!1;if(m(v,g)||x(v,g))return!0;if(v.route.shouldRevalidate){let R=v.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:v.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Ky(n,r,{includeHydrateFallback:c}={}){return Wy(n.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),c&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function Wy(n){return[...new Set(n)]}function Fy(n){let r={},c=Object.keys(n).sort();for(let o of c)r[o]=n[o];return r}function Jy(n,r){let c=new Set;return new Set(r),n.reduce((o,s)=>{let d=JSON.stringify(Fy(s));return c.has(d)||(c.add(d),o.push({key:d,link:s})),o},[])}function Cm(){let n=L.useContext(Pn);return hf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Iy(){let n=L.useContext(ac);return hf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var pf=L.createContext(void 0);pf.displayName="FrameworkContext";function Rm(){let n=L.useContext(pf);return hf(n,"You must render this element inside a <HydratedRouter> element"),n}function Py(n,r){let c=L.useContext(pf),[o,s]=L.useState(!1),[d,m]=L.useState(!1),{onFocus:x,onBlur:v,onMouseEnter:g,onMouseLeave:b,onTouchStart:R}=r,j=L.useRef(null);L.useEffect(()=>{if(n==="render"&&m(!0),n==="viewport"){let G=W=>{W.forEach(H=>{m(H.isIntersecting)})},X=new IntersectionObserver(G,{threshold:.5});return j.current&&X.observe(j.current),()=>{X.disconnect()}}},[n]),L.useEffect(()=>{if(o){let G=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(G)}}},[o]);let V=()=>{s(!0)},Y=()=>{s(!1),m(!1)};return c?n!=="intent"?[d,j,{}]:[d,j,{onFocus:tu(x,V),onBlur:tu(v,Y),onMouseEnter:tu(g,V),onMouseLeave:tu(b,Y),onTouchStart:tu(R,V)}]:[!1,j,{}]}function tu(n,r){return c=>{n&&n(c),c.defaultPrevented||r(c)}}function t2({page:n,...r}){let{router:c}=Cm(),o=L.useMemo(()=>gm(c.routes,n,c.basename),[c.routes,n,c.basename]);return o?L.createElement(a2,{page:n,matches:o,...r}):null}function e2(n){let{manifest:r,routeModules:c}=Rm(),[o,s]=L.useState([]);return L.useEffect(()=>{let d=!1;return Zy(n,r,c).then(m=>{d||s(m)}),()=>{d=!0}},[n,r,c]),o}function a2({page:n,matches:r,...c}){let o=Kl(),{manifest:s,routeModules:d}=Rm(),{basename:m}=Cm(),{loaderData:x,matches:v}=Iy(),g=L.useMemo(()=>Mp(n,r,v,s,o,"data"),[n,r,v,s,o]),b=L.useMemo(()=>Mp(n,r,v,s,o,"assets"),[n,r,v,s,o]),R=L.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let Y=new Set,G=!1;if(r.forEach(W=>{let H=s.routes[W.route.id];!H||!H.hasLoader||(!g.some($=>$.route.id===W.route.id)&&W.route.id in x&&d[W.route.id]?.shouldRevalidate||H.hasClientLoader?G=!0:Y.add(W.route.id))}),Y.size===0)return[];let X=Xy(n,m,"data");return G&&Y.size>0&&X.searchParams.set("_routes",r.filter(W=>Y.has(W.route.id)).map(W=>W.route.id).join(",")),[X.pathname+X.search]},[m,x,o,s,g,r,n,d]),j=L.useMemo(()=>Ky(b,s),[b,s]),V=e2(b);return L.createElement(L.Fragment,null,R.map(Y=>L.createElement("link",{key:Y,rel:"prefetch",as:"fetch",href:Y,...c})),j.map(Y=>L.createElement("link",{key:Y,rel:"modulepreload",href:Y,...c})),V.map(({key:Y,link:G})=>L.createElement("link",{key:Y,nonce:c.nonce,...G})))}function l2(...n){return r=>{n.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var zm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{zm&&(window.__reactRouterVersion="7.9.3")}catch{}function n2({basename:n,children:r,window:c}){let o=L.useRef();o.current==null&&(o.current=$x({window:c,v5Compat:!0}));let s=o.current,[d,m]=L.useState({action:s.action,location:s.location}),x=L.useCallback(v=>{L.startTransition(()=>m(v))},[m]);return L.useLayoutEffect(()=>s.listen(x),[s,x]),L.createElement(Ny,{basename:n,children:r,location:d.location,navigationType:d.action,navigator:s})}var Dm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jm=L.forwardRef(function({onClick:r,discover:c="render",prefetch:o="none",relative:s,reloadDocument:d,replace:m,state:x,target:v,to:g,preventScrollReset:b,viewTransition:R,...j},V){let{basename:Y}=L.useContext(Ca),G=typeof g=="string"&&Dm.test(g),X,W=!1;if(typeof g=="string"&&G&&(X=g,zm))try{let St=new URL(window.location.href),Kt=g.startsWith("//")?new URL(St.protocol+g):new URL(g),$t=Ka(Kt.pathname,Y);Kt.origin===St.origin&&$t!=null?g=$t+Kt.search+Kt.hash:W=!0}catch{_a(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=yy(g,{relative:s}),[$,at,Q]=Py(o,j),ct=c2(g,{replace:m,state:x,target:v,preventScrollReset:b,relative:s,viewTransition:R});function et(St){r&&r(St),St.defaultPrevented||ct(St)}let Dt=L.createElement("a",{...j,...Q,href:X||H,onClick:W||d?r:et,ref:l2(V,at),target:v,"data-discover":!G&&c==="render"?"true":void 0});return $&&!G?L.createElement(L.Fragment,null,Dt,L.createElement(t2,{page:H})):Dt});jm.displayName="Link";var i2=L.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:o="",end:s=!1,style:d,to:m,viewTransition:x,children:v,...g},b){let R=yu(m,{relative:g.relative}),j=Kl(),V=L.useContext(ac),{navigator:Y,basename:G}=L.useContext(Ca),X=V!=null&&h2(R)&&x===!0,W=Y.encodeLocation?Y.encodeLocation(R).pathname:R.pathname,H=j.pathname,$=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;c||(H=H.toLowerCase(),$=$?$.toLowerCase():null,W=W.toLowerCase()),$&&G&&($=Ka($,G)||$);const at=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Q=H===W||!s&&H.startsWith(W)&&H.charAt(at)==="/",ct=$!=null&&($===W||!s&&$.startsWith(W)&&$.charAt(W.length)==="/"),et={isActive:Q,isPending:ct,isTransitioning:X},Dt=Q?r:void 0,St;typeof o=="function"?St=o(et):St=[o,Q?"active":null,ct?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Kt=typeof d=="function"?d(et):d;return L.createElement(jm,{...g,"aria-current":Dt,className:St,ref:b,style:Kt,to:m,viewTransition:x},typeof v=="function"?v(et):v)});i2.displayName="NavLink";var u2=L.forwardRef(({discover:n="render",fetcherKey:r,navigate:c,reloadDocument:o,replace:s,state:d,method:m=qr,action:x,onSubmit:v,relative:g,preventScrollReset:b,viewTransition:R,...j},V)=>{let Y=f2(),G=d2(x,{relative:g}),X=m.toLowerCase()==="get"?"get":"post",W=typeof x=="string"&&Dm.test(x),H=$=>{if(v&&v($),$.defaultPrevented)return;$.preventDefault();let at=$.nativeEvent.submitter,Q=at?.getAttribute("formmethod")||m;Y(at||$.currentTarget,{fetcherKey:r,method:Q,navigate:c,replace:s,state:d,relative:g,preventScrollReset:b,viewTransition:R})};return L.createElement("form",{ref:V,method:X,action:G,onSubmit:o?v:H,...j,"data-discover":!W&&n==="render"?"true":void 0})});u2.displayName="Form";function r2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Om(n){let r=L.useContext(Pn);return Ft(r,r2(n)),r}function c2(n,{target:r,replace:c,state:o,preventScrollReset:s,relative:d,viewTransition:m}={}){let x=vy(),v=Kl(),g=yu(n,{relative:d});return L.useCallback(b=>{if(ky(b,r)){b.preventDefault();let R=c!==void 0?c:hu(v)===hu(g);x(n,{replace:R,state:o,preventScrollReset:s,relative:d,viewTransition:m})}},[v,x,g,c,o,r,n,s,d,m])}var o2=0,s2=()=>`__${String(++o2)}__`;function f2(){let{router:n}=Om("useSubmit"),{basename:r}=L.useContext(Ca),c=Dy();return L.useCallback(async(o,s={})=>{let{action:d,method:m,encType:x,formData:v,body:g}=Yy(o,r);if(s.navigate===!1){let b=s.fetcherKey||s2();await n.fetch(b,c,s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:g,formMethod:s.method||m,formEncType:s.encType||x,flushSync:s.flushSync})}else await n.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:v,body:g,formMethod:s.method||m,formEncType:s.encType||x,replace:s.replace,state:s.state,fromRouteId:c,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,r,c])}function d2(n,{relative:r}={}){let{basename:c}=L.useContext(Ca),o=L.useContext(Wa);Ft(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),d={...yu(n||".",{relative:r})},m=Kl();if(n==null){d.search=m.search;let x=new URLSearchParams(d.search),v=x.getAll("index");if(v.some(b=>b==="")){x.delete("index"),v.filter(R=>R).forEach(R=>x.append("index",R));let b=x.toString();d.search=b?`?${b}`:""}}return(!n||n===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:Za([c,d.pathname])),hu(d)}function h2(n,{relative:r}={}){let c=L.useContext(Em);Ft(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Om("useViewTransitionState"),s=yu(n,{relative:r});if(!c.isTransitioning)return!1;let d=Ka(c.currentLocation.pathname,o)||c.currentLocation.pathname,m=Ka(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Kr(s.pathname,m)!=null||Kr(s.pathname,d)!=null}var _e=function(){return _e=Object.assign||function(r){for(var c,o=1,s=arguments.length;o<s;o++){c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(r[d]=c[d])}return r},_e.apply(this,arguments)};function pu(n,r,c){if(c||arguments.length===2)for(var o=0,s=r.length,d;o<s;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return n.concat(d||Array.prototype.slice.call(r))}var Qt="-ms-",su="-moz-",Ut="-webkit-",Mm="comm",nc="rule",mf="decl",p2="@import",Nm="@keyframes",m2="@layer",Um=Math.abs,gf=String.fromCharCode,Ks=Object.assign;function g2(n,r){return ve(n,0)^45?(((r<<2^ve(n,0))<<2^ve(n,1))<<2^ve(n,2))<<2^ve(n,3):0}function Hm(n){return n.trim()}function $a(n,r){return(n=r.exec(n))?n[0]:n}function bt(n,r,c){return n.replace(r,c)}function Yr(n,r,c){return n.indexOf(r,c)}function ve(n,r){return n.charCodeAt(r)|0}function Zn(n,r,c){return n.slice(r,c)}function Aa(n){return n.length}function Bm(n){return n.length}function cu(n,r){return r.push(n),n}function x2(n,r){return n.map(r).join("")}function Np(n,r){return n.filter(function(c){return!$a(c,r)})}var ic=1,Kn=1,Lm=0,ua=0,ce=0,ti="";function uc(n,r,c,o,s,d,m,x){return{value:n,root:r,parent:c,type:o,props:s,children:d,line:ic,column:Kn,length:m,return:"",siblings:x}}function El(n,r){return Ks(uc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function Bn(n){for(;n.root;)n=El(n.root,{children:[n]});cu(n,n.siblings)}function y2(){return ce}function v2(){return ce=ua>0?ve(ti,--ua):0,Kn--,ce===10&&(Kn=1,ic--),ce}function ma(){return ce=ua<Lm?ve(ti,ua++):0,Kn++,ce===10&&(Kn=1,ic++),ce}function Ql(){return ve(ti,ua)}function Xr(){return ua}function rc(n,r){return Zn(ti,n,r)}function Ws(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function b2(n){return ic=Kn=1,Lm=Aa(ti=n),ua=0,[]}function S2(n){return ti="",n}function Ns(n){return Hm(rc(ua-1,Fs(n===91?n+2:n===40?n+1:n)))}function E2(n){for(;(ce=Ql())&&ce<33;)ma();return Ws(n)>2||Ws(ce)>3?"":" "}function T2(n,r){for(;--r&&ma()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return rc(n,Xr()+(r<6&&Ql()==32&&ma()==32))}function Fs(n){for(;ma();)switch(ce){case n:return ua;case 34:case 39:n!==34&&n!==39&&Fs(ce);break;case 40:n===41&&Fs(n);break;case 92:ma();break}return ua}function A2(n,r){for(;ma()&&n+ce!==57;)if(n+ce===84&&Ql()===47)break;return"/*"+rc(r,ua-1)+"*"+gf(n===47?n:ma())}function w2(n){for(;!Ws(Ql());)ma();return rc(n,ua)}function _2(n){return S2($r("",null,null,null,[""],n=b2(n),0,[0],n))}function $r(n,r,c,o,s,d,m,x,v){for(var g=0,b=0,R=m,j=0,V=0,Y=0,G=1,X=1,W=1,H=0,$="",at=s,Q=d,ct=o,et=$;X;)switch(Y=H,H=ma()){case 40:if(Y!=108&&ve(et,R-1)==58){Yr(et+=bt(Ns(H),"&","&\f"),"&\f",Um(g?x[g-1]:0))!=-1&&(W=-1);break}case 34:case 39:case 91:et+=Ns(H);break;case 9:case 10:case 13:case 32:et+=E2(Y);break;case 92:et+=T2(Xr()-1,7);continue;case 47:switch(Ql()){case 42:case 47:cu(C2(A2(ma(),Xr()),r,c,v),v);break;default:et+="/"}break;case 123*G:x[g++]=Aa(et)*W;case 125*G:case 59:case 0:switch(H){case 0:case 125:X=0;case 59+b:W==-1&&(et=bt(et,/\f/g,"")),V>0&&Aa(et)-R&&cu(V>32?Hp(et+";",o,c,R-1,v):Hp(bt(et," ","")+";",o,c,R-2,v),v);break;case 59:et+=";";default:if(cu(ct=Up(et,r,c,g,b,s,x,$,at=[],Q=[],R,d),d),H===123)if(b===0)$r(et,r,ct,ct,at,d,R,x,Q);else switch(j===99&&ve(et,3)===110?100:j){case 100:case 108:case 109:case 115:$r(n,ct,ct,o&&cu(Up(n,ct,ct,0,0,s,x,$,s,at=[],R,Q),Q),s,Q,R,x,o?at:Q);break;default:$r(et,ct,ct,ct,[""],Q,0,x,Q)}}g=b=V=0,G=W=1,$=et="",R=m;break;case 58:R=1+Aa(et),V=Y;default:if(G<1){if(H==123)--G;else if(H==125&&G++==0&&v2()==125)continue}switch(et+=gf(H),H*G){case 38:W=b>0?1:(et+="\f",-1);break;case 44:x[g++]=(Aa(et)-1)*W,W=1;break;case 64:Ql()===45&&(et+=Ns(ma())),j=Ql(),b=R=Aa($=et+=w2(Xr())),H++;break;case 45:Y===45&&Aa(et)==2&&(G=0)}}return d}function Up(n,r,c,o,s,d,m,x,v,g,b,R){for(var j=s-1,V=s===0?d:[""],Y=Bm(V),G=0,X=0,W=0;G<o;++G)for(var H=0,$=Zn(n,j+1,j=Um(X=m[G])),at=n;H<Y;++H)(at=Hm(X>0?V[H]+" "+$:bt($,/&\f/g,V[H])))&&(v[W++]=at);return uc(n,r,c,s===0?nc:x,v,g,b,R)}function C2(n,r,c,o){return uc(n,r,c,Mm,gf(y2()),Zn(n,2,-2),0,o)}function Hp(n,r,c,o,s){return uc(n,r,c,mf,Zn(n,0,o),Zn(n,o+1,-1),o,s)}function Vm(n,r,c){switch(g2(n,r)){case 5103:return Ut+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ut+n+n;case 4789:return su+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ut+n+su+n+Qt+n+n;case 5936:switch(ve(n,r+11)){case 114:return Ut+n+Qt+bt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ut+n+Qt+bt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ut+n+Qt+bt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ut+n+Qt+n+n;case 6165:return Ut+n+Qt+"flex-"+n+n;case 5187:return Ut+n+bt(n,/(\w+).+(:[^]+)/,Ut+"box-$1$2"+Qt+"flex-$1$2")+n;case 5443:return Ut+n+Qt+"flex-item-"+bt(n,/flex-|-self/g,"")+($a(n,/flex-|baseline/)?"":Qt+"grid-row-"+bt(n,/flex-|-self/g,""))+n;case 4675:return Ut+n+Qt+"flex-line-pack"+bt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ut+n+Qt+bt(n,"shrink","negative")+n;case 5292:return Ut+n+Qt+bt(n,"basis","preferred-size")+n;case 6060:return Ut+"box-"+bt(n,"-grow","")+Ut+n+Qt+bt(n,"grow","positive")+n;case 4554:return Ut+bt(n,/([^-])(transform)/g,"$1"+Ut+"$2")+n;case 6187:return bt(bt(bt(n,/(zoom-|grab)/,Ut+"$1"),/(image-set)/,Ut+"$1"),n,"")+n;case 5495:case 3959:return bt(n,/(image-set\([^]*)/,Ut+"$1$`$1");case 4968:return bt(bt(n,/(.+:)(flex-)?(.*)/,Ut+"box-pack:$3"+Qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ut+n+n;case 4200:if(!$a(n,/flex-|baseline/))return Qt+"grid-column-align"+Zn(n,r)+n;break;case 2592:case 3360:return Qt+bt(n,"template-","")+n;case 4384:case 3616:return c&&c.some(function(o,s){return r=s,$a(o.props,/grid-\w+-end/)})?~Yr(n+(c=c[r].value),"span",0)?n:Qt+bt(n,"-start","")+n+Qt+"grid-row-span:"+(~Yr(c,"span",0)?$a(c,/\d+/):+$a(c,/\d+/)-+$a(n,/\d+/))+";":Qt+bt(n,"-start","")+n;case 4896:case 4128:return c&&c.some(function(o){return $a(o.props,/grid-\w+-start/)})?n:Qt+bt(bt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return bt(n,/(.+)-inline(.+)/,Ut+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Aa(n)-1-r>6)switch(ve(n,r+1)){case 109:if(ve(n,r+4)!==45)break;case 102:return bt(n,/(.+:)(.+)-([^]+)/,"$1"+Ut+"$2-$3$1"+su+(ve(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Yr(n,"stretch",0)?Vm(bt(n,"stretch","fill-available"),r,c)+n:n}break;case 5152:case 5920:return bt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,d,m,x,v,g){return Qt+s+":"+d+g+(m?Qt+s+"-span:"+(x?v:+v-+d)+g:"")+n});case 4949:if(ve(n,r+6)===121)return bt(n,":",":"+Ut)+n;break;case 6444:switch(ve(n,ve(n,14)===45?18:11)){case 120:return bt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ut+(ve(n,14)===45?"inline-":"")+"box$3$1"+Ut+"$2$3$1"+Qt+"$2box$3")+n;case 100:return bt(n,":",":"+Qt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(n,"scroll-","scroll-snap-")+n}return n}function Wr(n,r){for(var c="",o=0;o<n.length;o++)c+=r(n[o],o,n,r)||"";return c}function R2(n,r,c,o){switch(n.type){case m2:if(n.children.length)break;case p2:case mf:return n.return=n.return||n.value;case Mm:return"";case Nm:return n.return=n.value+"{"+Wr(n.children,o)+"}";case nc:if(!Aa(n.value=n.props.join(",")))return""}return Aa(c=Wr(n.children,o))?n.return=n.value+"{"+c+"}":""}function z2(n){var r=Bm(n);return function(c,o,s,d){for(var m="",x=0;x<r;x++)m+=n[x](c,o,s,d)||"";return m}}function D2(n){return function(r){r.root||(r=r.return)&&n(r)}}function j2(n,r,c,o){if(n.length>-1&&!n.return)switch(n.type){case mf:n.return=Vm(n.value,n.length,c);return;case Nm:return Wr([El(n,{value:bt(n.value,"@","@"+Ut)})],o);case nc:if(n.length)return x2(c=n.props,function(s){switch($a(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bn(El(n,{props:[bt(s,/:(read-\w+)/,":"+su+"$1")]})),Bn(El(n,{props:[s]})),Ks(n,{props:Np(c,o)});break;case"::placeholder":Bn(El(n,{props:[bt(s,/:(plac\w+)/,":"+Ut+"input-$1")]})),Bn(El(n,{props:[bt(s,/:(plac\w+)/,":"+su+"$1")]})),Bn(El(n,{props:[bt(s,/:(plac\w+)/,Qt+"input-$1")]})),Bn(El(n,{props:[s]})),Ks(n,{props:Np(c,o)});break}return""})}}var O2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},Wn=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",km="active",qm="data-styled-version",cc="6.1.19",xf=`/*!sc*/
`,Fr=typeof window<"u"&&typeof document<"u",M2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),N2={},oc=Object.freeze([]),Fn=Object.freeze({});function Gm(n,r,c){return c===void 0&&(c=Fn),n.theme!==c.theme&&n.theme||r||c.theme}var Ym=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),U2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H2=/(^-|-$)/g;function Bp(n){return n.replace(U2,"-").replace(H2,"")}var B2=/(a)(d)/gi,Nr=52,Lp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Js(n){var r,c="";for(r=Math.abs(n);r>Nr;r=r/Nr|0)c=Lp(r%Nr)+c;return(Lp(r%Nr)+c).replace(B2,"$1-$2")}var Us,Xm=5381,Xn=function(n,r){for(var c=r.length;c;)n=33*n^r.charCodeAt(--c);return n},$m=function(n){return Xn(Xm,n)};function Qm(n){return Js($m(n)>>>0)}function L2(n){return n.displayName||n.name||"Component"}function Hs(n){return typeof n=="string"&&!0}var Zm=typeof Symbol=="function"&&Symbol.for,Km=Zm?Symbol.for("react.memo"):60115,V2=Zm?Symbol.for("react.forward_ref"):60112,k2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Wm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G2=((Us={})[V2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Us[Km]=Wm,Us);function Vp(n){return("type"in(r=n)&&r.type.$$typeof)===Km?Wm:"$$typeof"in n?G2[n.$$typeof]:k2;var r}var Y2=Object.defineProperty,X2=Object.getOwnPropertyNames,kp=Object.getOwnPropertySymbols,$2=Object.getOwnPropertyDescriptor,Q2=Object.getPrototypeOf,qp=Object.prototype;function Fm(n,r,c){if(typeof r!="string"){if(qp){var o=Q2(r);o&&o!==qp&&Fm(n,o,c)}var s=X2(r);kp&&(s=s.concat(kp(r)));for(var d=Vp(n),m=Vp(r),x=0;x<s.length;++x){var v=s[x];if(!(v in q2||c&&c[v]||m&&v in m||d&&v in d)){var g=$2(r,v);try{Y2(n,v,g)}catch{}}}}return n}function Jn(n){return typeof n=="function"}function yf(n){return typeof n=="object"&&"styledComponentId"in n}function Yl(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function Is(n,r){if(n.length===0)return"";for(var c=n[0],o=1;o<n.length;o++)c+=n[o];return c}function mu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ps(n,r,c){if(c===void 0&&(c=!1),!c&&!mu(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)n[o]=Ps(n[o],r[o]);else if(mu(r))for(var o in r)n[o]=Ps(n[o],r[o]);return n}function vf(n,r){Object.defineProperty(n,"toString",{value:r})}function vu(n){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Z2=(function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var c=0,o=0;o<r;o++)c+=this.groupSizes[o];return c},n.prototype.insertRules=function(r,c){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,d=s;r>=d;)if((d<<=1)<0)throw vu(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var m=s;m<d;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(r+1),v=(m=0,c.length);m<v;m++)this.tag.insertRule(x,c[m])&&(this.groupSizes[r]++,x++)},n.prototype.clearGroup=function(r){if(r<this.length){var c=this.groupSizes[r],o=this.indexOfGroup(r),s=o+c;this.groupSizes[r]=0;for(var d=o;d<s;d++)this.tag.deleteRule(o)}},n.prototype.getGroup=function(r){var c="";if(r>=this.length||this.groupSizes[r]===0)return c;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),d=s+o,m=s;m<d;m++)c+="".concat(this.tag.getRule(m)).concat(xf);return c},n})(),Qr=new Map,Jr=new Map,Zr=1,Ur=function(n){if(Qr.has(n))return Qr.get(n);for(;Jr.has(Zr);)Zr++;var r=Zr++;return Qr.set(n,r),Jr.set(r,n),r},K2=function(n,r){Zr=r+1,Qr.set(n,r),Jr.set(r,n)},W2="style[".concat(Wn,"][").concat(qm,'="').concat(cc,'"]'),F2=new RegExp("^".concat(Wn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),J2=function(n,r,c){for(var o,s=c.split(","),d=0,m=s.length;d<m;d++)(o=s[d])&&n.registerName(r,o)},I2=function(n,r){for(var c,o=((c=r.textContent)!==null&&c!==void 0?c:"").split(xf),s=[],d=0,m=o.length;d<m;d++){var x=o[d].trim();if(x){var v=x.match(F2);if(v){var g=0|parseInt(v[1],10),b=v[2];g!==0&&(K2(b,g),J2(n,b,v[3]),n.getTag().insertRules(g,s)),s.length=0}else s.push(x)}}},Gp=function(n){for(var r=document.querySelectorAll(W2),c=0,o=r.length;c<o;c++){var s=r[c];s&&s.getAttribute(Wn)!==km&&(I2(n,s),s.parentNode&&s.parentNode.removeChild(s))}};function P2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Jm=function(n){var r=document.head,c=n||r,o=document.createElement("style"),s=(function(x){var v=Array.from(x.querySelectorAll("style[".concat(Wn,"]")));return v[v.length-1]})(c),d=s!==void 0?s.nextSibling:null;o.setAttribute(Wn,km),o.setAttribute(qm,cc);var m=P2();return m&&o.setAttribute("nonce",m),c.insertBefore(o,d),o},tv=(function(){function n(r){this.element=Jm(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,s=0,d=o.length;s<d;s++){var m=o[s];if(m.ownerNode===c)return m}throw vu(17)})(this.element),this.length=0}return n.prototype.insertRule=function(r,c){try{return this.sheet.insertRule(c,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var c=this.sheet.cssRules[r];return c&&c.cssText?c.cssText:""},n})(),ev=(function(){function n(r){this.element=Jm(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,c){if(r<=this.length&&r>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n})(),av=(function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,c){return r<=this.length&&(this.rules.splice(r,0,c),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n})(),Yp=Fr,lv={isServer:!Fr,useCSSOMInjection:!M2},Ir=(function(){function n(r,c,o){r===void 0&&(r=Fn),c===void 0&&(c={});var s=this;this.options=_e(_e({},lv),r),this.gs=c,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Fr&&Yp&&(Yp=!1,Gp(this)),vf(this,function(){return(function(d){for(var m=d.getTag(),x=m.length,v="",g=function(R){var j=(function(W){return Jr.get(W)})(R);if(j===void 0)return"continue";var V=d.names.get(j),Y=m.getGroup(R);if(V===void 0||!V.size||Y.length===0)return"continue";var G="".concat(Wn,".g").concat(R,'[id="').concat(j,'"]'),X="";V!==void 0&&V.forEach(function(W){W.length>0&&(X+="".concat(W,","))}),v+="".concat(Y).concat(G,'{content:"').concat(X,'"}').concat(xf)},b=0;b<x;b++)g(b);return v})(s)})}return n.registerId=function(r){return Ur(r)},n.prototype.rehydrate=function(){!this.server&&Fr&&Gp(this)},n.prototype.reconstructWithOptions=function(r,c){return c===void 0&&(c=!0),new n(_e(_e({},this.options),r),this.gs,c&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(c){var o=c.useCSSOMInjection,s=c.target;return c.isServer?new av(s):o?new tv(s):new ev(s)})(this.options),new Z2(r)));var r},n.prototype.hasNameForId=function(r,c){return this.names.has(r)&&this.names.get(r).has(c)},n.prototype.registerName=function(r,c){if(Ur(r),this.names.has(r))this.names.get(r).add(c);else{var o=new Set;o.add(c),this.names.set(r,o)}},n.prototype.insertRules=function(r,c,o){this.registerName(r,c),this.getTag().insertRules(Ur(r),o)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(Ur(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n})(),nv=/&/g,iv=/^\s*\/\/.*$/gm;function Im(n,r){return n.map(function(c){return c.type==="rule"&&(c.value="".concat(r," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(r," ")),c.props=c.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Im(c.children,r)),c})}function uv(n){var r,c,o,s=Fn,d=s.options,m=d===void 0?Fn:d,x=s.plugins,v=x===void 0?oc:x,g=function(j,V,Y){return Y.startsWith(c)&&Y.endsWith(c)&&Y.replaceAll(c,"").length>0?".".concat(r):j},b=v.slice();b.push(function(j){j.type===nc&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(nv,c).replace(o,g))}),m.prefix&&b.push(j2),b.push(R2);var R=function(j,V,Y,G){V===void 0&&(V=""),Y===void 0&&(Y=""),G===void 0&&(G="&"),r=G,c=V,o=new RegExp("\\".concat(c,"\\b"),"g");var X=j.replace(iv,""),W=_2(Y||V?"".concat(Y," ").concat(V," { ").concat(X," }"):X);m.namespace&&(W=Im(W,m.namespace));var H=[];return Wr(W,z2(b.concat(D2(function($){return H.push($)})))),H};return R.hash=v.length?v.reduce(function(j,V){return V.name||vu(15),Xn(j,V.name)},Xm).toString():"",R}var rv=new Ir,tf=uv(),Pm=pt.createContext({shouldForwardProp:void 0,styleSheet:rv,stylis:tf});Pm.Consumer;pt.createContext(void 0);function ef(){return L.useContext(Pm)}var cv=(function(){function n(r,c){var o=this;this.inject=function(s,d){d===void 0&&(d=tf);var m=o.name+d.hash;s.hasNameForId(o.id,m)||s.insertRules(o.id,m,d(o.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=c,vf(this,function(){throw vu(12,String(o.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=tf),this.name+r.hash},n})(),ov=function(n){return n>="A"&&n<="Z"};function Xp(n){for(var r="",c=0;c<n.length;c++){var o=n[c];if(c===1&&o==="-"&&n[0]==="-")return n;ov(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var tg=function(n){return n==null||n===!1||n===""},eg=function(n){var r,c,o=[];for(var s in n){var d=n[s];n.hasOwnProperty(s)&&!tg(d)&&(Array.isArray(d)&&d.isCss||Jn(d)?o.push("".concat(Xp(s),":"),d,";"):mu(d)?o.push.apply(o,pu(pu(["".concat(s," {")],eg(d),!1),["}"],!1)):o.push("".concat(Xp(s),": ").concat((r=s,(c=d)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||r in O2||r.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function Tl(n,r,c,o){if(tg(n))return[];if(yf(n))return[".".concat(n.styledComponentId)];if(Jn(n)){if(!Jn(d=n)||d.prototype&&d.prototype.isReactComponent||!r)return[n];var s=n(r);return Tl(s,r,c,o)}var d;return n instanceof cv?c?(n.inject(c,o),[n.getName(o)]):[n]:mu(n)?eg(n):Array.isArray(n)?Array.prototype.concat.apply(oc,n.map(function(m){return Tl(m,r,c,o)})):[n.toString()]}function ag(n){for(var r=0;r<n.length;r+=1){var c=n[r];if(Jn(c)&&!yf(c))return!1}return!0}var sv=$m(cc),fv=(function(){function n(r,c,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&ag(r),this.componentId=c,this.baseHash=Xn(sv,c),this.baseStyle=o,Ir.registerId(c)}return n.prototype.generateAndInjectStyles=function(r,c,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))s=Yl(s,this.staticRulesId);else{var d=Is(Tl(this.rules,r,c,o)),m=Js(Xn(this.baseHash,d)>>>0);if(!c.hasNameForId(this.componentId,m)){var x=o(d,".".concat(m),void 0,this.componentId);c.insertRules(this.componentId,m,x)}s=Yl(s,m),this.staticRulesId=m}else{for(var v=Xn(this.baseHash,o.hash),g="",b=0;b<this.rules.length;b++){var R=this.rules[b];if(typeof R=="string")g+=R;else if(R){var j=Is(Tl(R,r,c,o));v=Xn(v,j+b),g+=j}}if(g){var V=Js(v>>>0);c.hasNameForId(this.componentId,V)||c.insertRules(this.componentId,V,o(g,".".concat(V),void 0,this.componentId)),s=Yl(s,V)}}return s},n})(),bf=pt.createContext(void 0);bf.Consumer;var Bs={};function dv(n,r,c){var o=yf(n),s=n,d=!Hs(n),m=r.attrs,x=m===void 0?oc:m,v=r.componentId,g=v===void 0?(function(at,Q){var ct=typeof at!="string"?"sc":Bp(at);Bs[ct]=(Bs[ct]||0)+1;var et="".concat(ct,"-").concat(Qm(cc+ct+Bs[ct]));return Q?"".concat(Q,"-").concat(et):et})(r.displayName,r.parentComponentId):v,b=r.displayName,R=b===void 0?(function(at){return Hs(at)?"styled.".concat(at):"Styled(".concat(L2(at),")")})(n):b,j=r.displayName&&r.componentId?"".concat(Bp(r.displayName),"-").concat(r.componentId):r.componentId||g,V=o&&s.attrs?s.attrs.concat(x).filter(Boolean):x,Y=r.shouldForwardProp;if(o&&s.shouldForwardProp){var G=s.shouldForwardProp;if(r.shouldForwardProp){var X=r.shouldForwardProp;Y=function(at,Q){return G(at,Q)&&X(at,Q)}}else Y=G}var W=new fv(c,j,o?s.componentStyle:void 0);function H(at,Q){return(function(ct,et,Dt){var St=ct.attrs,Kt=ct.componentStyle,$t=ct.defaultProps,st=ct.foldedComponentIds,Tt=ct.styledComponentId,Mt=ct.target,Rt=pt.useContext(bf),O=ef(),K=ct.shouldForwardProp||O.shouldForwardProp,it=Gm(et,Rt,$t)||Fn,mt=(function(vt,ot,Jt){for(var jt,ne=_e(_e({},ot),{className:void 0,theme:Jt}),ra=0;ra<vt.length;ra+=1){var ca=Jn(jt=vt[ra])?jt(ne):jt;for(var Ce in ca)ne[Ce]=Ce==="className"?Yl(ne[Ce],ca[Ce]):Ce==="style"?_e(_e({},ne[Ce]),ca[Ce]):ca[Ce]}return ot.className&&(ne.className=Yl(ne.className,ot.className)),ne})(St,et,it),S=mt.as||Mt,q={};for(var J in mt)mt[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&mt.theme===it||(J==="forwardedAs"?q.as=mt.forwardedAs:K&&!K(J,S)||(q[J]=mt[J]));var I=(function(vt,ot){var Jt=ef(),jt=vt.generateAndInjectStyles(ot,Jt.styleSheet,Jt.stylis);return jt})(Kt,mt),ut=Yl(st,Tt);return I&&(ut+=" "+I),mt.className&&(ut+=" "+mt.className),q[Hs(S)&&!Ym.has(S)?"class":"className"]=ut,Dt&&(q.ref=Dt),L.createElement(S,q)})($,at,Q)}H.displayName=R;var $=pt.forwardRef(H);return $.attrs=V,$.componentStyle=W,$.displayName=R,$.shouldForwardProp=Y,$.foldedComponentIds=o?Yl(s.foldedComponentIds,s.styledComponentId):"",$.styledComponentId=j,$.target=o?s.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(at){this._foldedDefaultProps=o?(function(Q){for(var ct=[],et=1;et<arguments.length;et++)ct[et-1]=arguments[et];for(var Dt=0,St=ct;Dt<St.length;Dt++)Ps(Q,St[Dt],!0);return Q})({},s.defaultProps,at):at}}),vf($,function(){return".".concat($.styledComponentId)}),d&&Fm($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function $p(n,r){for(var c=[n[0]],o=0,s=r.length;o<s;o+=1)c.push(r[o],n[o+1]);return c}var Qp=function(n){return Object.assign(n,{isCss:!0})};function Zl(n){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];if(Jn(n)||mu(n))return Qp(Tl($p(oc,pu([n],r,!0))));var o=n;return r.length===0&&o.length===1&&typeof o[0]=="string"?Tl(o):Qp(Tl($p(o,r)))}function af(n,r,c){if(c===void 0&&(c=Fn),!r)throw vu(1,r);var o=function(s){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return n(r,c,Zl.apply(void 0,pu([s],d,!1)))};return o.attrs=function(s){return af(n,r,_e(_e({},c),{attrs:Array.prototype.concat(c.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return af(n,r,_e(_e({},c),s))},o}var lg=function(n){return af(dv,n)},U=lg;Ym.forEach(function(n){U[n]=lg(n)});var hv=(function(){function n(r,c){this.rules=r,this.componentId=c,this.isStatic=ag(r),Ir.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,c,o,s){var d=s(Is(Tl(this.rules,c,o,s)),""),m=this.componentId+r;o.insertRules(m,m,d)},n.prototype.removeStyles=function(r,c){c.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,c,o,s){r>2&&Ir.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,c,o,s)},n})();function pv(n){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];var o=Zl.apply(void 0,pu([n],r,!1)),s="sc-global-".concat(Qm(JSON.stringify(o))),d=new hv(o,s),m=function(v){var g=ef(),b=pt.useContext(bf),R=pt.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&x(R,v,g.styleSheet,b,g.stylis),pt.useLayoutEffect(function(){if(!g.styleSheet.server)return x(R,v,g.styleSheet,b,g.stylis),function(){return d.removeStyles(R,g.styleSheet)}},[R,v,g.styleSheet,b,g.stylis]),null};function x(v,g,b,R,j){if(d.isStatic)d.renderStyles(v,N2,b,j);else{var V=_e(_e({},g),{theme:Gm(g,R,m.defaultProps)});d.renderStyles(v,V,b,j)}}return pt.memo(m)}const je=Zl`
  ${n=>n.fontWeight&&`font-weight: ${n.fontWeight};`}
  color: ${n=>n.color?n.color.startsWith("--")?`var(${n.color})`:n.color:"var(--primary-color-text-grey)"};
  user-select: ${n=>n.nonSelect?"none":"auto"};
  text-align: ${n=>n.textAlign?n.textAlign:"initial"};
  white-space: ${n=>n.nowrap?"nowrap":"normal"};
  line-height: ${n=>n.lineHeight?`${n.lineHeight}px`:"normal"};
  text-transform: ${n=>n.textTransform?n.textTransform:"none"};
  word-break: ${n=>n.wordBreak?n.wordBreak:"normal"};
  overflow: ${n=>n.overflow||"visible"};
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  ${n=>n.letterSpacing&&`letter-spacing: ${n.letterSpacing}px;`}

  ${n=>n.withEllipsis?Zl`
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        `:""}
`,sc=U.h1`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 60px;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 1125px) {
    font-size: 42px;
  }

  @media (max-width: 520px) {
    font-size: 34px;
  }
`,ga=U.h2`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  line-height: 1.1;
  font-weight: 400;

  @media (max-width: 780px) {
    font-size: 34px;
  }

  @media (max-width: 490px) {
    font-size: 30px;
    text-align: center;
  }
`,Zp=U.h2`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  line-height: 1.1;
  font-weight: 400;
  text-align: center;

  @media (max-width: 780px) {
    font-size: 34px;
  }

  @media (max-width: 490px) {
    font-size: 24px;
  }
`,Kp=U.h3`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 1.1;

  @media (max-width: 780px) {
    font-size: 34px;
  }
`,$n=U.h3`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.84px;
`,ou=U.h4`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.84px;
`,eu=U.h6`
  ${je}
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;

  @media (max-width: 780px) {
    font-size: 20px;
  }
`;U.h6`
  ${je}
  font-size: 18px;
  line-height: 27px;
`;const mv=U.p`
  ${je}
  font-size: 36px;
  line-height: 1.1;
  font-weight: 300;

  @media (max-width: 1125px) {
    font-size: 34px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`,lf=U.p`
  ${je}
  font-size: 24px;
  line-height: 1.3;

  @media (max-width: 1125px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,gv=U.p`
  ${je}
  font-size: 22px;
  line-height: 1.1;

  @media (max-width: 1125px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Hr=U.p`
  ${je}
  font-size: 22px;
  line-height: 1.3;
  font-weight: 400;

  @media (max-width: 780px) {
    font-size: 20px;
  }
`,nf=U.p`
  ${je}
  font-size: 24px;
  line-height: 1.3;
  font-weight: 400;

  @media (max-width: 780px) {
    font-size: 22px;
  }
`,yt=U.p`
  ${je}
  font-size: ${n=>n.fontSize||16}px;
  line-height: ${n=>n.lineHeight||1.3};
`,uf=U.p`
  ${je}
  font-size: ${n=>n.fontSize||14}px;
  line-height: ${n=>n.lineHeight||"18px"};
  letter-spacing: ${n=>n.letterSpacing||.2}px;
`,xv="/startup-landing/assets/background-about-DnCb4yId.png",yv=U.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 50px 95px;
  /* border: 1px solid red; */

  background-image: url(${xv});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1200px) {
    background-position: -150px center;
    padding: 50px;
  }

  @media (max-width: 930px) {
    gap: 50px;
    padding: 30px 20px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px 60px 20px;
    gap: 25px;
  }
`,vv=U.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 20px;

  @media (max-width: 930px) {
    gap: 10px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,bv=U.div`
  padding: 30px 25px;
  display: flex;
  max-width: 270px;
  width: 100%;
  min-height: 160px;
  background-color: var(--primary-color-super-light-beige);
  border-radius: 10px;

  @media (max-width: 930px) {
    padding: 15px;
    max-width: 140px;
    min-height: 145px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`,Sv=U.div`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 282px;
  width: 100%;
  min-height: 230px;
  background-color: var(--primary-color-light-rose);
  border-radius: 10px;

  ${ga} {
    text-align: left;
  }

  @media (max-width: 930px) {
    padding: 15px;
    min-height: 180px;
    max-width: 145px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`,Ev=U.div`
  padding: 30px 25px;
  display: flex;
  max-width: 305px;
  width: 100%;
  min-height: 205px;
  background-color: var(--primary-color-super-light-rose);
  border-radius: 10px;

  @media (max-width: 930px) {
    padding: 15px;
    max-width: 155px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`,Tv=U.div`
  padding: 30px 25px;
  display: flex;
  max-width: 325px;
  width: 100%;
  min-height: 225px;
  background-color: var(--primary-color-beige);
  border-radius: 10px;

  @media (max-width: 930px) {
    padding: 15px;
    min-height: 220px;

    > p {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    max-width: 400px;
    min-height: 100px;

    > p {
      font-size: 18px;
    }
  }
`,Ln={Container:yv,Content:vv,Block1Wrapper:bv,Block2Wrapper:Sv,Block3Wrapper:Ev,Block4Wrapper:Tv},Av="Обо мне",wv="20+",Br={block1:"Психолог, фасилитатор, преподаватель гештальт-подхода",block2:"лет опыта — в индивидуальной работе, в команде, в бизнесе",block3:`Мой метод — это комбинация гештальт-подхода, фасилитации,
    системного мышления и стратегического видения.`,block4:`Метод Азидеса — один из ориентиров в моей работе.
    Он помогает глубже понимать, как формируются смыслы, и как выстраиваются зрелые,
    живые системы — от команды до всей организации.`},_v=()=>p.jsxs(Ln.Container,{id:"about",children:[p.jsx(ga,{lineHeight:1.1,children:Av}),p.jsxs(Ln.Content,{children:[p.jsx(Ln.Block1Wrapper,{children:p.jsx(yt,{children:Br.block1})}),p.jsxs(Ln.Block2Wrapper,{children:[p.jsx(ga,{lineHeight:1.1,children:wv}),p.jsx(yt,{children:Br.block2})]}),p.jsx(Ln.Block3Wrapper,{children:p.jsx(yt,{children:Br.block3})}),p.jsx(Ln.Block4Wrapper,{children:p.jsx(yt,{children:Br.block4})})]})]}),Cv=U.div`
  padding: ${n=>n.$padding||"15px 20px"};
  border-radius: 10px;
  background: ${n=>n.$backgroundColor?n.$backgroundColor.startsWith("--")?`var(${n.$backgroundColor})`:n.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${n=>n.$maxWidth&&`
    max-width: ${n.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`,ng={WidgetContainer:Cv},Ke=({text:n,backgroundColor:r,fontSize:c=16,maxWidth:o,padding:s,lineHeight:d,letterSpacing:m})=>p.jsx(ng.WidgetContainer,{$backgroundColor:r,$padding:s,$maxWidth:o,children:p.jsx(yt,{fontSize:c,lineHeight:d,letterSpacing:m,children:n})}),Rv=U.div`
  padding: 40px;
  border-radius: 10px;
  background: ${n=>n.$backgroundColor?n.$backgroundColor.startsWith("--")?`var(${n.$backgroundColor})`:n.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${n=>n.$maxWidth&&`
    max-width: ${n.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;

  @media (max-width: 1150px) {
    padding: 35px;
  }

  @media (max-width: 490px) {
    padding: 25px;
  }
`,zv={WidgetContainer:Rv},Vn=({text:n,backgroundColor:r,maxWidth:c})=>p.jsx(zv.WidgetContainer,{$backgroundColor:r,$maxWidth:c,children:p.jsx(lf,{children:n})}),Dv="/startup-landing/assets/4-CNYjYSST.png",jv="/startup-landing/assets/iryna-1-8KFXe4Zb.png",Ov=U.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 120px;

  @media (max-width: 780px) {
    margin-bottom: 70px;
  }
`,Mv=U.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`,Nv=U.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  min-height: 285px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 680px) {
    min-height: 190px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,Uv=U.div`
  max-width: 368px;
  width: 100%;

  > div {
    min-height: 285px;
    height: 100%;
  }

  @media (max-width: 1024px) {
    max-width: 700px;

    > div {
      min-height: 240px;
    }
  }

  @media (max-width: 780px) {
    max-width: 340px;
  }

  @media (max-width: 680px) {
    max-width: 680px;

    > div {
      min-height: 100px;
    }
  }

  @media (max-width: 490px) {
    > div {
      min-height: 190px;
    }
  }
`,Hv=U.div`
  max-width: 390px;
  width: 100%;
  min-height: 285px;
  border-radius: 10px;
  background-image: url(${jv});
  background-size: cover;
  background-repeat: no-repeat;
  align-self: stretch;

  @media (max-width: 780px) {
    max-width: 340px;
  }

  @media (max-width: 680px) {
    max-width: 680px;
  }

  @media (max-width: 490px) {
    min-height: 240px;
  }
`,Bv=U.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 10px;
  border-radius: 10px;
  background: var(--primary-color-super-light-beige);
  box-sizing: border-box;

  @media (max-width: 1150px) {
    padding: 35px;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    min-height: 250px;
  }

  @media (max-width: 780px) {
    max-width: 460px;

    > div > div p {
      font-size: 22px;
    }
  }

  @media (max-width: 680px) {
    order: 1;
    padding: 25px;
    max-width: 680px;
    min-height: 150px;
    height: 100%;

    > div > div p {
      font-size: 20px;
    }

    > div > div {
      max-width: 100%;
    }
  }
`,Lv=U.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  min-height: 205px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,Vv=U.div`
  max-width: 190px;
  width: 100%;
  min-height: 205px;
  border-radius: 10px;
  background-image: url(${Dv});
  background-size: cover;
  background-position: center;

  @media (max-width: 1024px) {
    max-width: 280px;
    min-height: 250px;
  }

  @media (max-width: 780px) {
    max-width: 220px;
  }

  @media (max-width: 680px) {
    order: 2;
    min-height: 250px;
    max-width: 680px;
    background-repeat: no-repeat;
    background-position: center -180px;
  }

  @media (max-width: 590px) {
    max-width: 490px;
    min-height: 165px;
    background-position: center -160px;
  }

  @media (max-width: 490px) {
    background-position: center -120px;
  }
`,kv=U.div`
  max-width: 600px;
  width: 100%;

  > div {
    min-height: 205px;
    height: 100%;
  }

  @media (max-width: 780px) {
    max-width: 340px;

    > div {
      min-height: 250px;
    }
  }

  @media (max-width: 680px) {
    max-width: 680px;

    > div {
      min-height: 100px;
    }
  }

  @media (max-width: 490px) {
    > div {
      min-height: 180px;
    }
  }
`,qv=U.div`
  max-width: 470px;
  width: 100%;

  > div {
    min-height: 180px;
    height: 100%;
  }

  @media (max-width: 780px) {
    max-width: 340px;

    > div {
      min-height: 280px;
    }
  }

  @media (max-width: 680px) {
    max-width: 680px;

    > div {
      min-height: 100px;
    }
  }

  @media (max-width: 490px) {
    > div {
      min-height: 180px;
    }
  }
`,Gv=U.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  min-height: 205px;
  height: 100%;

  @media (max-width: 1024px) {
    justify-content: center;
    gap: 15px;
  }

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,Yv=U.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ae={Container:Ov,ContentWrapper:Mv,FirstRow:Nv,SecondRow:Lv,FirstWidgetWrapper:Uv,Iryna1:Hv,MixWidgetContainer:Bv,Image4:Vv,SecondWidgetWrapper:kv,LastWidgetWrapper:qv,ThirdRow:Gv,WidgetWrapper:Yv},Xv="О моем подходе",Wp=`Я помогаю собственникам бизнеса и командам выстраивать
  культуру взаимодействия, в которой энергия людей направлена на общее движение вперёд.`,Fp="Работа строится не на «чинить» и не на «учить жить»,",Jp=`Это не классический консалтинг и не терапия — это архитектура трансформаций,
  в которых сохраняется уникальность, а изменения происходят изнутри.`,Ip=`Подход основан на гештальт-методе, системном мышлении и принципах Адизеса — для
  тех, кто ищет не шаблоны, а живые решения.`,$v=()=>{const[n,r]=L.useState(!1);return L.useEffect(()=>{const c=()=>{r(window.innerWidth<=1024)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),p.jsxs(ae.Container,{id:"approach",children:[p.jsx(ga,{children:Xv}),p.jsx(ae.ContentWrapper,{children:n?p.jsxs(p.Fragment,{children:[p.jsxs(ae.FirstRow,{children:[p.jsx(ae.FirstWidgetWrapper,{children:p.jsx(Vn,{text:Wp,maxWidth:"100%"})}),p.jsx(ae.Iryna1,{})]}),p.jsxs(ae.SecondRow,{children:[p.jsx(ae.Image4,{}),p.jsxs(ae.MixWidgetContainer,{children:[p.jsx(lf,{fontSize:24,children:Fp}),p.jsxs(ae.WidgetWrapper,{children:[p.jsx(Ke,{text:"а на уважении к опыту, к процессу",fontSize:24,padding:"10px 15px",maxWidth:"fit-content"}),p.jsx(Ke,{text:"и к реальности бизнеса.",fontSize:24,padding:"10px 15px",backgroundColor:"--primary-color-medium-rose",maxWidth:"fit-content"})]})]})]}),p.jsxs(ae.ThirdRow,{children:[p.jsx(ae.SecondWidgetWrapper,{children:p.jsx(Vn,{text:Jp,fontSize:24,backgroundColor:"--primary-color-super-light-beige",maxWidth:"100%"})}),p.jsx(ae.LastWidgetWrapper,{children:p.jsx(Vn,{text:Ip,fontSize:24,backgroundColor:"linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)",maxWidth:"100%"})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs(ae.FirstRow,{children:[p.jsx(ae.FirstWidgetWrapper,{children:p.jsx(Vn,{text:Wp,maxWidth:"100%"})}),p.jsx(ae.Iryna1,{}),p.jsxs(ae.MixWidgetContainer,{children:[p.jsx(lf,{fontSize:24,children:Fp}),p.jsxs(ae.WidgetWrapper,{children:[p.jsx(Ke,{text:"а на уважении к опыту, к процессу",fontSize:24,padding:"10px 15px",maxWidth:"fit-content"}),p.jsx(Ke,{text:"и к реальности бизнеса.",fontSize:24,padding:"10px 15px",backgroundColor:"--primary-color-medium-rose",maxWidth:"fit-content"})]})]})]}),p.jsxs(ae.SecondRow,{children:[p.jsx(ae.Image4,{}),p.jsx(ae.SecondWidgetWrapper,{children:p.jsx(Vn,{text:Jp,fontSize:24,backgroundColor:"--primary-color-super-light-beige",maxWidth:"100%"})}),p.jsx(ae.LastWidgetWrapper,{children:p.jsx(Vn,{text:Ip,fontSize:24,backgroundColor:"linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)",maxWidth:"100%"})})]})]})})]})},Qv="data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='41.59'%20height='41.59'%20rx='7'%20fill='white'/%3e%3cpath%20d='M24.6748%2021.8H22.3311V28.8H19.2061V21.8H16.6436V18.925H19.2061V16.7063C19.2061%2014.2063%2020.7061%2012.8%2022.9873%2012.8C24.0811%2012.8%2025.2373%2013.0188%2025.2373%2013.0188V15.4875H23.9561C22.7061%2015.4875%2022.3311%2016.2375%2022.3311%2017.05V18.925H25.1123L24.6748%2021.8Z'%20fill='%232D2D2D'/%3e%3ca%20href='https://www.figma.com/design/aXUfYSl5s2MZJU0GcGxzrX?node-id=47-451'%3e%3crect%20fill='black'%20fill-opacity='0'%20x='0.15625'%20y='-1.2'%20width='10'%20height='18.4'/%3e%3c/a%3e%3c/svg%3e",Zv="data:image/svg+xml,%3csvg%20width='43'%20height='42'%20viewBox='0%200%2043%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.859863'%20width='41.59'%20height='41.59'%20rx='7'%20fill='white'/%3e%3cpath%20d='M21.8409%2017.2063C23.8097%2017.2063%2025.4347%2018.8313%2025.4347%2020.8C25.4347%2022.8%2023.8097%2024.3938%2021.8409%2024.3938C19.8409%2024.3938%2018.2472%2022.8%2018.2472%2020.8C18.2472%2018.8313%2019.8409%2017.2063%2021.8409%2017.2063ZM21.8409%2023.1438C23.1222%2023.1438%2024.1534%2022.1125%2024.1534%2020.8C24.1534%2019.5188%2023.1222%2018.4875%2021.8409%2018.4875C20.5284%2018.4875%2019.4972%2019.5188%2019.4972%2020.8C19.4972%2022.1125%2020.5597%2023.1438%2021.8409%2023.1438ZM26.4034%2017.0813C26.4034%2017.55%2026.0284%2017.925%2025.5597%2017.925C25.0909%2017.925%2024.7159%2017.55%2024.7159%2017.0813C24.7159%2016.6125%2025.0909%2016.2375%2025.5597%2016.2375C26.0284%2016.2375%2026.4034%2016.6125%2026.4034%2017.0813ZM28.7784%2017.925C28.8409%2019.0813%2028.8409%2022.55%2028.7784%2023.7063C28.7159%2024.8313%2028.4659%2025.8%2027.6534%2026.6438C26.8409%2027.4563%2025.8409%2027.7063%2024.7159%2027.7688C23.5597%2027.8313%2020.0909%2027.8313%2018.9347%2027.7688C17.8097%2027.7063%2016.8409%2027.4563%2015.9972%2026.6438C15.1847%2025.8%2014.9347%2024.8313%2014.8722%2023.7063C14.8097%2022.55%2014.8097%2019.0813%2014.8722%2017.925C14.9347%2016.8%2015.1847%2015.8%2015.9972%2014.9875C16.8409%2014.175%2017.8097%2013.925%2018.9347%2013.8625C20.0909%2013.8%2023.5597%2013.8%2024.7159%2013.8625C25.8409%2013.925%2026.8409%2014.175%2027.6534%2014.9875C28.4659%2015.8%2028.7159%2016.8%2028.7784%2017.925ZM27.2784%2024.925C27.6534%2024.0188%2027.5597%2021.8313%2027.5597%2020.8C27.5597%2019.8%2027.6534%2017.6125%2027.2784%2016.675C27.0284%2016.0813%2026.5597%2015.5813%2025.9659%2015.3625C25.0284%2014.9875%2022.8409%2015.0813%2021.8409%2015.0813C20.8097%2015.0813%2018.6222%2014.9875%2017.7159%2015.3625C17.0909%2015.6125%2016.6222%2016.0813%2016.3722%2016.675C15.9972%2017.6125%2016.0909%2019.8%2016.0909%2020.8C16.0909%2021.8313%2015.9972%2024.0188%2016.3722%2024.925C16.6222%2025.55%2017.0909%2026.0188%2017.7159%2026.2688C18.6222%2026.6438%2020.8097%2026.55%2021.8409%2026.55C22.8409%2026.55%2025.0284%2026.6438%2025.9659%2026.2688C26.5597%2026.0188%2027.0597%2025.55%2027.2784%2024.925Z'%20fill='%232D2D2D'/%3e%3ca%20href='https://www.figma.com/design/aXUfYSl5s2MZJU0GcGxzrX?node-id=47-451'%3e%3crect%20fill='black'%20fill-opacity='0'%20x='0.18125'%20y='-1.2'%20width='14'%20height='18.4'/%3e%3c/a%3e%3c/svg%3e",Kv="data:image/svg+xml,%3csvg%20width='26'%20height='22'%20viewBox='0%200%2026%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.63053%2010.1169C1.68565%2010.0891%201.74079%2010.0628%201.79453%2010.0378C2.72874%209.60212%203.67535%209.19419%204.62058%208.78627C4.67156%208.78627%204.75697%208.72661%204.80519%208.70718C4.87822%208.67527%204.95126%208.64475%205.02429%208.61283L5.44455%208.43107C5.72564%208.31036%206.00534%208.18965%206.28642%208.06893C6.84723%207.82751%207.40802%207.58609%207.96882%207.34327C9.09042%206.86043%2010.2134%206.37619%2011.335%205.89334C12.4566%205.41049%2013.5796%204.92626%2014.7012%204.44341C15.8228%203.96056%2016.9458%203.47632%2018.0674%202.99348C19.189%202.51063%2020.312%202.02639%2021.4336%201.54354C21.683%201.43532%2021.953%201.27437%2022.2203%201.22719C22.4449%201.18696%2022.664%201.10926%2022.89%201.06625C23.3185%200.984383%2023.7911%200.951083%2024.2017%201.13007C24.3437%201.19251%2024.4746%201.27992%2024.5834%201.38953C25.1043%201.90845%2025.0312%202.76038%2024.921%203.4902C24.1535%208.57676%2023.386%2013.6647%2022.6172%2018.7513C22.5124%2019.4492%2022.3691%2020.2151%2021.8221%2020.6563C21.3591%2021.0295%2020.7005%2021.0712%2020.1287%2020.913C19.5569%2020.7534%2019.0526%2020.419%2018.5579%2020.0902C16.5062%2018.7221%2014.4532%2017.3541%2012.4015%2015.986C11.9137%2015.6613%2011.3709%2015.2367%2011.3764%2014.6471C11.3791%2014.2919%2011.5899%2013.9755%2011.8049%2013.6938C13.5879%2011.3518%2016.1604%209.74225%2018.0743%207.50839C18.3443%207.19343%2018.5565%206.62455%2018.1859%206.44279C17.9654%206.33457%2017.7119%206.48164%2017.5107%206.62178C14.9809%208.39083%2012.4525%2010.1613%209.92269%2011.9303C9.09734%2012.5075%208.23202%2013.1014%207.23719%2013.2429C6.34707%2013.3706%205.45145%2013.1208%204.59027%2012.8655C3.86826%2012.6518%203.1476%2012.4326%202.42972%2012.2064C2.04804%2012.0871%201.65396%2011.9581%201.35909%2011.6875C1.06423%2011.417%200.894768%2010.9619%201.07252%2010.6011C1.18412%2010.375%201.40046%2010.232%201.62781%2010.1155L1.63053%2010.1169Z'%20stroke='%232D2D2D'%20stroke-width='1.2'/%3e%3c/svg%3e",ig="/startup-landing/assets/logo-BMqYXokQ.png",Wv=U.a`
  display: flex;
  align-items: center;
  gap: ${n=>n.$hasText?"10px":"0"};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`,Fv=U.img`
  width: ${n=>n.$hasText?"24px":"41px"};
  height: ${n=>n.$hasText?"20px":"41px"};
  object-fit: contain;
  ${n=>n.$hasText&&`
    color: var(--primary-color-text-grey);
    fill: currentColor;
  `}
`,Jv=U.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: var(--primary-color-text-grey);
`,Ls={IconLink:Wv,Icon:Fv,LinkText:Jv},Vs=({icon:n,text:r,url:c})=>{const o=!!r,s=L.useCallback(d=>{d.preventDefault(),window.open(c,"_blank","noopener,noreferrer")},[c]);return p.jsxs(Ls.IconLink,{href:c,onClick:s,$hasText:o,children:[p.jsx(Ls.Icon,{src:n,$hasText:o,alt:r||"Иконка"}),r&&p.jsx(Ls.LinkText,{children:r})]})},ug=U.a`
  font-size: 14px;
  color: var(--primary-color-text-grey);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-80);
  }
`,Iv={ScrollLink:ug},Qn=({text:n,targetId:r,onClick:c,externalUrl:o})=>{const s=d=>{o?(d.preventDefault(),window.open(o,"_blank","noopener,noreferrer")):c&&(d.preventDefault(),c())};return p.jsx(Iv.ScrollLink,{href:o||(r?`#${r}`:"#"),onClick:s,children:n})},ze=n=>{const r=n.split(":");return r.length>1?p.jsxs(p.Fragment,{children:[p.jsxs("span",{style:{fontWeight:700},children:[r[0],":"]}),r.slice(1).join(":")]}):n},Pv=["services","about","approach","contacts","myWork"],wa=n=>{if(Pv.includes(n)){const r=document.getElementById(n);r&&(r.scrollIntoView({behavior:"smooth"}),window.history.pushState(null,"",`/startup-landing/#${n}`))}},tb=()=>window.location.pathname.includes("/startup-landing/")?"/startup-landing":"",rg=(n,r=!1)=>{const o=`${tb()}${n}`;r?window.open(o,"_blank"):window.location.href=o},eb=U.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 130px;
  width: 100%;
  padding: 41px 70px;
  background: var(--primary-color-medium-rose);

  @media (max-width: 1175px) {
    padding: 41px;
  }
  @media (max-width: 815px) {
    padding: 38px;
  }
  @media (max-width: 778px) {
    padding: 20px;
  }
  @media (max-width: 700px) {
    padding: 35px 22px;
  }
`,ab=U.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 107px;

  > a {
    max-width: 180px;
    line-height: 1.2;
    letter-spacing: 0;
  }

  @media (max-width: 1175px) {
    gap: 50px;
  }
  @media (max-width: 815px) {
    gap: 40px;
  }
  @media (max-width: 778px) {
    gap: 30px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  }
`,lb=U.div`
  display: flex;
  align-items: center;
  gap: 124px;

  @media (max-width: 1175px) {
    gap: 50px;
  }
  @media (max-width: 815px) {
    gap: 40px;
  }
  @media (max-width: 778px) {
    gap: 30px;
  }
  @media (max-width: 700px) {
    gap: 50px;
    margin-bottom: 35px;
  }
`,nb=U.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,ib=U.div`
  margin-right: 20px;

  @media (max-width: 1175px) {
    margin-right: 0;
  }
`,ub=U.img`
  width: 223px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 1175px) {
    width: 190px;
    height: 34px;
  }
`,kn={Container:eb,Content:ab,Links:lb,LinksWrapper:nb,LinksWithTextWrapper:ib,Logo:ub},rb="Политика обработки персональных данных",cg=()=>{const n=()=>{rg("/privacy-policy",!0)};return p.jsx(kn.Container,{children:p.jsxs(kn.Content,{children:[p.jsx(kn.Logo,{src:ig,alt:"Логотип"}),p.jsxs(kn.Links,{children:[p.jsxs(kn.LinksWrapper,{children:[p.jsx(Vs,{icon:Qv,url:"https://facebook.com/******"}),p.jsx(Vs,{icon:Zv,url:"https://instagram.com/*****"})]}),p.jsx(kn.LinksWithTextWrapper,{children:p.jsx(Vs,{icon:Kv,text:"telegram",url:"https://t.me/****"})})]}),p.jsx(Qn,{text:rb,targetId:"privacy-policy",onClick:n})]})})},cb="/startup-landing/assets/elegantnyi-fon-evkalipta-BTey4mXO.png",ob=U.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 120px;
  padding: 65px 0;
  border-radius: 10px;
  background: var(--primary-color-super-light-beige);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1200px) {
    justify-content: center;
  }

  @media (max-width: 780px) {
    padding: 45px;
  }

  @media (max-width: 720px) {
    padding: 30px 20px;
  }

  @media (max-width: 490px) {
    width: calc(100% + 40px);
  }
`,sb=U.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-left: 45px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 490px) {
    ${ga} {
      width: 100%;
      text-align: center;
    }
  }
`,fb=U.div`
  display: grid;
  grid-template-columns: 370px 370px;
  grid-template-rows: 260px 260px;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 290px 290px;
    grid-template-rows: 240px 240px;
    gap: 30px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 190px;
    gap: 20px;
  }

  @media (max-width: 490px) {
    gap: 12px;
  }
`,db=U.img`
  display: inline-block;
  max-width: 355px;
  width: 100%;
  max-height: 665px;
  height: 100%;
  position: relative;
  bottom: -65px;

  object-fit: cover;
  object-position: center;
  flex-shrink: 1;
  min-width: 0;

  @media (max-width: 1200px) {
    display: none;
  }
`,Sf=U.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
  padding: 35px 30px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  background: var(--primary-color-beige);
  overflow: hidden;

  @media (max-width: 490px) {
    padding: 25px;
    min-height: 190px;
  }
`,hb=U(Sf)`
  background: var(--primary-color-super-light-rose);
`,pb=U(Sf)`
  background: linear-gradient(0deg, #e8d6e3 0%, #edebe6 87%, #edebe6 100%);
`,Sl={Container:ob,Content:sb,InfoWrapper:fb,Img:db,Info:Sf,InfoLightBeige:hb,InfoGradient:pb},mb="Для кого",gb="Собственники и управленцы",xb="которые уже вышли из фазы выживания и готовы к новому уровню зрелости",yb="Организации",vb=`стремящиеся к живой культуре,
  ясной коммуникации и долгосрочной устойчивости`,Pp=["Партнёрские команды","(2-4 человека)"],bb="особенно в случаях, когда есть сложные связи (семья, дружба, история)",Sb="Специалисты",Eb=`которые хотят освоить гештальт-подход в работе c бизнесом и
  изучить метод глубоко, осознанно`,Tb=()=>p.jsxs(Sl.Container,{children:[p.jsxs(Sl.Content,{children:[p.jsx(ga,{children:mb}),p.jsxs(Sl.InfoWrapper,{children:[p.jsxs(Sl.Info,{children:[p.jsx(eu,{children:gb}),p.jsx(Hr,{fontSize:22,children:xb})]}),p.jsxs(Sl.InfoGradient,{children:[p.jsx(eu,{children:yb}),p.jsx(Hr,{fontSize:22,children:vb})]}),p.jsxs(Sl.InfoLightBeige,{children:[p.jsxs("div",{children:[p.jsx(eu,{children:Pp[0]}),p.jsx(eu,{children:Pp[1]})]}),p.jsx(Hr,{fontSize:22,children:bb})]}),p.jsxs(Sl.Info,{children:[p.jsx(eu,{children:Sb}),p.jsx(Hr,{fontSize:22,children:Eb})]})]})]}),p.jsx(Sl.Img,{src:cb,alt:"Фон с эвкалиптом"})]});var bu=n=>n.type==="checkbox",Xl=n=>n instanceof Date,De=n=>n==null;const og=n=>typeof n=="object";var oe=n=>!De(n)&&!Array.isArray(n)&&og(n)&&!Xl(n),sg=n=>oe(n)&&n.target?bu(n.target)?n.target.checked:n.target.value:n,Ab=n=>n.substring(0,n.search(/\.\d+(\.|$)/))||n,fg=(n,r)=>n.has(Ab(r)),wb=n=>{const r=n.constructor&&n.constructor.prototype;return oe(r)&&r.hasOwnProperty("isPrototypeOf")},Ef=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function de(n){let r;const c=Array.isArray(n),o=typeof FileList<"u"?n instanceof FileList:!1;if(n instanceof Date)r=new Date(n);else if(!(Ef&&(n instanceof Blob||o))&&(c||oe(n)))if(r=c?[]:Object.create(Object.getPrototypeOf(n)),!c&&!wb(n))r=n;else for(const s in n)n.hasOwnProperty(s)&&(r[s]=de(n[s]));else return n;return r}var fc=n=>/^\w*$/.test(n),le=n=>n===void 0,Tf=n=>Array.isArray(n)?n.filter(Boolean):[],Af=n=>Tf(n.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(n,r,c)=>{if(!r||!oe(n))return c;const o=(fc(r)?[r]:Af(r)).reduce((s,d)=>De(s)?s:s[d],n);return le(o)||o===n?le(n[r])?c:n[r]:o},Qe=n=>typeof n=="boolean",Xt=(n,r,c)=>{let o=-1;const s=fc(r)?[r]:Af(r),d=s.length,m=d-1;for(;++o<d;){const x=s[o];let v=c;if(o!==m){const g=n[x];v=oe(g)||Array.isArray(g)?g:isNaN(+s[o+1])?{}:[]}if(x==="__proto__"||x==="constructor"||x==="prototype")return;n[x]=v,n=n[x]}};const Pr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ha={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Xa={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},dg=pt.createContext(null);dg.displayName="HookFormContext";const wf=()=>pt.useContext(dg);var hg=(n,r,c,o=!0)=>{const s={defaultValues:r._defaultValues};for(const d in n)Object.defineProperty(s,d,{get:()=>{const m=d;return r._proxyFormState[m]!==ha.all&&(r._proxyFormState[m]=!o||ha.all),c&&(c[m]=!0),n[m]}});return s};const _f=typeof window<"u"?pt.useLayoutEffect:pt.useEffect;function _b(n){const r=wf(),{control:c=r.control,disabled:o,name:s,exact:d}=n||{},[m,x]=pt.useState(c._formState),v=pt.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return _f(()=>c._subscribe({name:s,formState:v.current,exact:d,callback:g=>{!o&&x({...c._formState,...g})}}),[s,o,d]),pt.useEffect(()=>{v.current.isValid&&c._setValid(!0)},[c]),pt.useMemo(()=>hg(m,c,v.current,!1),[m,c])}var Ze=n=>typeof n=="string",pg=(n,r,c,o,s)=>Ze(n)?(o&&r.watch.add(n),P(c,n,s)):Array.isArray(n)?n.map(d=>(o&&r.watch.add(d),P(c,d))):(o&&(r.watchAll=!0),c),rf=n=>De(n)||!og(n);function Qa(n,r,c=new WeakSet){if(rf(n)||rf(r))return n===r;if(Xl(n)&&Xl(r))return n.getTime()===r.getTime();const o=Object.keys(n),s=Object.keys(r);if(o.length!==s.length)return!1;if(c.has(n)||c.has(r))return!0;c.add(n),c.add(r);for(const d of o){const m=n[d];if(!s.includes(d))return!1;if(d!=="ref"){const x=r[d];if(Xl(m)&&Xl(x)||oe(m)&&oe(x)||Array.isArray(m)&&Array.isArray(x)?!Qa(m,x,c):m!==x)return!1}}return!0}function Cb(n){const r=wf(),{control:c=r.control,name:o,defaultValue:s,disabled:d,exact:m,compute:x}=n||{},v=pt.useRef(s),g=pt.useRef(x),b=pt.useRef(void 0);g.current=x;const R=pt.useMemo(()=>c._getWatch(o,v.current),[c,o]),[j,V]=pt.useState(g.current?g.current(R):R);return _f(()=>c._subscribe({name:o,formState:{values:!0},exact:m,callback:Y=>{if(!d){const G=pg(o,c._names,Y.values||c._formValues,!1,v.current);if(g.current){const X=g.current(G);Qa(X,b.current)||(V(X),b.current=X)}else V(G)}}}),[c,d,o,m]),pt.useEffect(()=>c._removeUnmounted()),j}function Rb(n){const r=wf(),{name:c,disabled:o,control:s=r.control,shouldUnregister:d,defaultValue:m}=n,x=fg(s._names.array,c),v=pt.useMemo(()=>P(s._formValues,c,P(s._defaultValues,c,m)),[s,c,m]),g=Cb({control:s,name:c,defaultValue:v,exact:!0}),b=_b({control:s,name:c,exact:!0}),R=pt.useRef(n),j=pt.useRef(void 0),V=pt.useRef(s.register(c,{...n.rules,value:g,...Qe(n.disabled)?{disabled:n.disabled}:{}}));R.current=n;const Y=pt.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!P(b.errors,c)},isDirty:{enumerable:!0,get:()=>!!P(b.dirtyFields,c)},isTouched:{enumerable:!0,get:()=>!!P(b.touchedFields,c)},isValidating:{enumerable:!0,get:()=>!!P(b.validatingFields,c)},error:{enumerable:!0,get:()=>P(b.errors,c)}}),[b,c]),G=pt.useCallback($=>V.current.onChange({target:{value:sg($),name:c},type:Pr.CHANGE}),[c]),X=pt.useCallback(()=>V.current.onBlur({target:{value:P(s._formValues,c),name:c},type:Pr.BLUR}),[c,s._formValues]),W=pt.useCallback($=>{const at=P(s._fields,c);at&&$&&(at._f.ref={focus:()=>$.focus&&$.focus(),select:()=>$.select&&$.select(),setCustomValidity:Q=>$.setCustomValidity(Q),reportValidity:()=>$.reportValidity()})},[s._fields,c]),H=pt.useMemo(()=>({name:c,value:g,...Qe(o)||b.disabled?{disabled:b.disabled||o}:{},onChange:G,onBlur:X,ref:W}),[c,o,b.disabled,G,X,W,g]);return pt.useEffect(()=>{const $=s._options.shouldUnregister||d,at=j.current;at&&at!==c&&!x&&s.unregister(at),s.register(c,{...R.current.rules,...Qe(R.current.disabled)?{disabled:R.current.disabled}:{}});const Q=(ct,et)=>{const Dt=P(s._fields,ct);Dt&&Dt._f&&(Dt._f.mount=et)};if(Q(c,!0),$){const ct=de(P(s._options.defaultValues,c));Xt(s._defaultValues,c,ct),le(P(s._formValues,c))&&Xt(s._formValues,c,ct)}return!x&&s.register(c),j.current=c,()=>{(x?$&&!s._state.action:$)?s.unregister(c):Q(c,!1)}},[c,s,x,d]),pt.useEffect(()=>{s._setDisabledField({disabled:o,name:c})},[o,c,s]),pt.useMemo(()=>({field:H,formState:b,fieldState:Y}),[H,b,Y])}const ks=n=>n.render(Rb(n));var zb=(n,r,c,o,s)=>r?{...c[n],types:{...c[n]&&c[n].types?c[n].types:{},[o]:s||!0}}:{},fu=n=>Array.isArray(n)?n:[n],tm=()=>{let n=[];return{get observers(){return n},next:s=>{for(const d of n)d.next&&d.next(s)},subscribe:s=>(n.push(s),{unsubscribe:()=>{n=n.filter(d=>d!==s)}}),unsubscribe:()=>{n=[]}}};function mg(n,r){const c={};for(const o in n)if(n.hasOwnProperty(o)){const s=n[o],d=r[o];if(s&&oe(s)&&d){const m=mg(s,d);oe(m)&&(c[o]=m)}else n[o]&&(c[o]=d)}return c}var Be=n=>oe(n)&&!Object.keys(n).length,Cf=n=>n.type==="file",pa=n=>typeof n=="function",tc=n=>{if(!Ef)return!1;const r=n?n.ownerDocument:0;return n instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},gg=n=>n.type==="select-multiple",Rf=n=>n.type==="radio",Db=n=>Rf(n)||bu(n),qs=n=>tc(n)&&n.isConnected;function jb(n,r){const c=r.slice(0,-1).length;let o=0;for(;o<c;)n=le(n)?o++:n[r[o++]];return n}function Ob(n){for(const r in n)if(n.hasOwnProperty(r)&&!le(n[r]))return!1;return!0}function re(n,r){const c=Array.isArray(r)?r:fc(r)?[r]:Af(r),o=c.length===1?n:jb(n,c),s=c.length-1,d=c[s];return o&&delete o[d],s!==0&&(oe(o)&&Be(o)||Array.isArray(o)&&Ob(o))&&re(n,c.slice(0,-1)),n}var Mb=n=>{for(const r in n)if(pa(n[r]))return!0;return!1};function xg(n){return Array.isArray(n)||oe(n)&&!Mb(n)}function cf(n,r={}){for(const c in n)xg(n[c])?(r[c]=Array.isArray(n[c])?[]:{},cf(n[c],r[c])):De(n[c])||(r[c]=!0);return r}function Yn(n,r,c){c||(c=cf(r));for(const o in n)xg(n[o])?le(r)||rf(c[o])?c[o]=cf(n[o],Array.isArray(n[o])?[]:{}):Yn(n[o],De(r)?{}:r[o],c[o]):c[o]=!Qa(n[o],r[o]);return c}const em={value:!1,isValid:!1},am={value:!0,isValid:!0};var yg=n=>{if(Array.isArray(n)){if(n.length>1){const r=n.filter(c=>c&&c.checked&&!c.disabled).map(c=>c.value);return{value:r,isValid:!!r.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!le(n[0].attributes.value)?le(n[0].value)||n[0].value===""?am:{value:n[0].value,isValid:!0}:am:em}return em},vg=(n,{valueAsNumber:r,valueAsDate:c,setValueAs:o})=>le(n)?n:r?n===""?NaN:n&&+n:c&&Ze(n)?new Date(n):o?o(n):n;const lm={isValid:!1,value:null};var bg=n=>Array.isArray(n)?n.reduce((r,c)=>c&&c.checked&&!c.disabled?{isValid:!0,value:c.value}:r,lm):lm;function nm(n){const r=n.ref;return Cf(r)?r.files:Rf(r)?bg(n.refs).value:gg(r)?[...r.selectedOptions].map(({value:c})=>c):bu(r)?yg(n.refs).value:vg(le(r.value)?n.ref.value:r.value,n)}var Nb=(n,r,c,o)=>{const s={};for(const d of n){const m=P(r,d);m&&Xt(s,d,m._f)}return{criteriaMode:c,names:[...n],fields:s,shouldUseNativeValidation:o}},ec=n=>n instanceof RegExp,au=n=>le(n)?n:ec(n)?n.source:oe(n)?ec(n.value)?n.value.source:n.value:n,im=n=>({isOnSubmit:!n||n===ha.onSubmit,isOnBlur:n===ha.onBlur,isOnChange:n===ha.onChange,isOnAll:n===ha.all,isOnTouch:n===ha.onTouched});const um="AsyncFunction";var Ub=n=>!!n&&!!n.validate&&!!(pa(n.validate)&&n.validate.constructor.name===um||oe(n.validate)&&Object.values(n.validate).find(r=>r.constructor.name===um)),Hb=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate),rm=(n,r,c)=>!c&&(r.watchAll||r.watch.has(n)||[...r.watch].some(o=>n.startsWith(o)&&/^\.\w+/.test(n.slice(o.length))));const du=(n,r,c,o)=>{for(const s of c||Object.keys(n)){const d=P(n,s);if(d){const{_f:m,...x}=d;if(m){if(m.refs&&m.refs[0]&&r(m.refs[0],s)&&!o)return!0;if(m.ref&&r(m.ref,m.name)&&!o)return!0;if(du(x,r))break}else if(oe(x)&&du(x,r))break}}};function cm(n,r,c){const o=P(n,c);if(o||fc(c))return{error:o,name:c};const s=c.split(".");for(;s.length;){const d=s.join("."),m=P(r,d),x=P(n,d);if(m&&!Array.isArray(m)&&c!==d)return{name:c};if(x&&x.type)return{name:d,error:x};if(x&&x.root&&x.root.type)return{name:`${d}.root`,error:x.root};s.pop()}return{name:c}}var Bb=(n,r,c,o)=>{c(n);const{name:s,...d}=n;return Be(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(m=>r[m]===(!o||ha.all))},Lb=(n,r,c)=>!n||!r||n===r||fu(n).some(o=>o&&(c?o===r:o.startsWith(r)||r.startsWith(o))),Vb=(n,r,c,o,s)=>s.isOnAll?!1:!c&&s.isOnTouch?!(r||n):(c?o.isOnBlur:s.isOnBlur)?!n:(c?o.isOnChange:s.isOnChange)?n:!0,kb=(n,r)=>!Tf(P(n,r)).length&&re(n,r),qb=(n,r,c)=>{const o=fu(P(n,c));return Xt(o,"root",r[c]),Xt(n,c,o),n};function om(n,r,c="validate"){if(Ze(n)||Array.isArray(n)&&n.every(Ze)||Qe(n)&&!n)return{type:c,message:Ze(n)?n:"",ref:r}}var qn=n=>oe(n)&&!ec(n)?n:{value:n,message:""},sm=async(n,r,c,o,s,d)=>{const{ref:m,refs:x,required:v,maxLength:g,minLength:b,min:R,max:j,pattern:V,validate:Y,name:G,valueAsNumber:X,mount:W}=n._f,H=P(c,G);if(!W||r.has(G))return{};const $=x?x[0]:m,at=st=>{s&&$.reportValidity&&($.setCustomValidity(Qe(st)?"":st||""),$.reportValidity())},Q={},ct=Rf(m),et=bu(m),Dt=ct||et,St=(X||Cf(m))&&le(m.value)&&le(H)||tc(m)&&m.value===""||H===""||Array.isArray(H)&&!H.length,Kt=zb.bind(null,G,o,Q),$t=(st,Tt,Mt,Rt=Xa.maxLength,O=Xa.minLength)=>{const K=st?Tt:Mt;Q[G]={type:st?Rt:O,message:K,ref:m,...Kt(st?Rt:O,K)}};if(d?!Array.isArray(H)||!H.length:v&&(!Dt&&(St||De(H))||Qe(H)&&!H||et&&!yg(x).isValid||ct&&!bg(x).isValid)){const{value:st,message:Tt}=Ze(v)?{value:!!v,message:v}:qn(v);if(st&&(Q[G]={type:Xa.required,message:Tt,ref:$,...Kt(Xa.required,Tt)},!o))return at(Tt),Q}if(!St&&(!De(R)||!De(j))){let st,Tt;const Mt=qn(j),Rt=qn(R);if(!De(H)&&!isNaN(H)){const O=m.valueAsNumber||H&&+H;De(Mt.value)||(st=O>Mt.value),De(Rt.value)||(Tt=O<Rt.value)}else{const O=m.valueAsDate||new Date(H),K=S=>new Date(new Date().toDateString()+" "+S),it=m.type=="time",mt=m.type=="week";Ze(Mt.value)&&H&&(st=it?K(H)>K(Mt.value):mt?H>Mt.value:O>new Date(Mt.value)),Ze(Rt.value)&&H&&(Tt=it?K(H)<K(Rt.value):mt?H<Rt.value:O<new Date(Rt.value))}if((st||Tt)&&($t(!!st,Mt.message,Rt.message,Xa.max,Xa.min),!o))return at(Q[G].message),Q}if((g||b)&&!St&&(Ze(H)||d&&Array.isArray(H))){const st=qn(g),Tt=qn(b),Mt=!De(st.value)&&H.length>+st.value,Rt=!De(Tt.value)&&H.length<+Tt.value;if((Mt||Rt)&&($t(Mt,st.message,Tt.message),!o))return at(Q[G].message),Q}if(V&&!St&&Ze(H)){const{value:st,message:Tt}=qn(V);if(ec(st)&&!H.match(st)&&(Q[G]={type:Xa.pattern,message:Tt,ref:m,...Kt(Xa.pattern,Tt)},!o))return at(Tt),Q}if(Y){if(pa(Y)){const st=await Y(H,c),Tt=om(st,$);if(Tt&&(Q[G]={...Tt,...Kt(Xa.validate,Tt.message)},!o))return at(Tt.message),Q}else if(oe(Y)){let st={};for(const Tt in Y){if(!Be(st)&&!o)break;const Mt=om(await Y[Tt](H,c),$,Tt);Mt&&(st={...Mt,...Kt(Tt,Mt.message)},at(Mt.message),o&&(Q[G]=st))}if(!Be(st)&&(Q[G]={ref:$,...st},!o))return Q}}return at(!0),Q};const Gb={mode:ha.onSubmit,reValidateMode:ha.onChange,shouldFocusError:!0};function Yb(n={}){let r={...Gb,...n},c={submitCount:0,isDirty:!1,isReady:!1,isLoading:pa(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},s=oe(r.defaultValues)||oe(r.values)?de(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:de(s),m={action:!1,mount:!1,watch:!1},x={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},v,g=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let R={...b};const j={array:tm(),state:tm()},V=r.criteriaMode===ha.all,Y=E=>C=>{clearTimeout(g),g=setTimeout(E,C)},G=async E=>{if(!r.disabled&&(b.isValid||R.isValid||E)){const C=r.resolver?Be((await et()).errors):await St(o,!0);C!==c.isValid&&j.state.next({isValid:C})}},X=(E,C)=>{!r.disabled&&(b.isValidating||b.validatingFields||R.isValidating||R.validatingFields)&&((E||Array.from(x.mount)).forEach(M=>{M&&(C?Xt(c.validatingFields,M,C):re(c.validatingFields,M))}),j.state.next({validatingFields:c.validatingFields,isValidating:!Be(c.validatingFields)}))},W=(E,C=[],M,tt,F=!0,Z=!0)=>{if(tt&&M&&!r.disabled){if(m.action=!0,Z&&Array.isArray(P(o,E))){const nt=M(P(o,E),tt.argA,tt.argB);F&&Xt(o,E,nt)}if(Z&&Array.isArray(P(c.errors,E))){const nt=M(P(c.errors,E),tt.argA,tt.argB);F&&Xt(c.errors,E,nt),kb(c.errors,E)}if((b.touchedFields||R.touchedFields)&&Z&&Array.isArray(P(c.touchedFields,E))){const nt=M(P(c.touchedFields,E),tt.argA,tt.argB);F&&Xt(c.touchedFields,E,nt)}(b.dirtyFields||R.dirtyFields)&&(c.dirtyFields=Yn(s,d)),j.state.next({name:E,isDirty:$t(E,C),dirtyFields:c.dirtyFields,errors:c.errors,isValid:c.isValid})}else Xt(d,E,C)},H=(E,C)=>{Xt(c.errors,E,C),j.state.next({errors:c.errors})},$=E=>{c.errors=E,j.state.next({errors:c.errors,isValid:!1})},at=(E,C,M,tt)=>{const F=P(o,E);if(F){const Z=P(d,E,le(M)?P(s,E):M);le(Z)||tt&&tt.defaultChecked||C?Xt(d,E,C?Z:nm(F._f)):Mt(E,Z),m.mount&&G()}},Q=(E,C,M,tt,F)=>{let Z=!1,nt=!1;const gt={name:E};if(!r.disabled){if(!M||tt){(b.isDirty||R.isDirty)&&(nt=c.isDirty,c.isDirty=gt.isDirty=$t(),Z=nt!==gt.isDirty);const Ct=Qa(P(s,E),C);nt=!!P(c.dirtyFields,E),Ct?re(c.dirtyFields,E):Xt(c.dirtyFields,E,!0),gt.dirtyFields=c.dirtyFields,Z=Z||(b.dirtyFields||R.dirtyFields)&&nt!==!Ct}if(M){const Ct=P(c.touchedFields,E);Ct||(Xt(c.touchedFields,E,M),gt.touchedFields=c.touchedFields,Z=Z||(b.touchedFields||R.touchedFields)&&Ct!==M)}Z&&F&&j.state.next(gt)}return Z?gt:{}},ct=(E,C,M,tt)=>{const F=P(c.errors,E),Z=(b.isValid||R.isValid)&&Qe(C)&&c.isValid!==C;if(r.delayError&&M?(v=Y(()=>H(E,M)),v(r.delayError)):(clearTimeout(g),v=null,M?Xt(c.errors,E,M):re(c.errors,E)),(M?!Qa(F,M):F)||!Be(tt)||Z){const nt={...tt,...Z&&Qe(C)?{isValid:C}:{},errors:c.errors,name:E};c={...c,...nt},j.state.next(nt)}},et=async E=>{X(E,!0);const C=await r.resolver(d,r.context,Nb(E||x.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return X(E),C},Dt=async E=>{const{errors:C}=await et(E);if(E)for(const M of E){const tt=P(C,M);tt?Xt(c.errors,M,tt):re(c.errors,M)}else c.errors=C;return C},St=async(E,C,M={valid:!0})=>{for(const tt in E){const F=E[tt];if(F){const{_f:Z,...nt}=F;if(Z){const gt=x.array.has(Z.name),Ct=F._f&&Ub(F._f);Ct&&b.validatingFields&&X([Z.name],!0);const Gt=await sm(F,x.disabled,d,V,r.shouldUseNativeValidation&&!C,gt);if(Ct&&b.validatingFields&&X([Z.name]),Gt[Z.name]&&(M.valid=!1,C))break;!C&&(P(Gt,Z.name)?gt?qb(c.errors,Gt,Z.name):Xt(c.errors,Z.name,Gt[Z.name]):re(c.errors,Z.name))}!Be(nt)&&await St(nt,C,M)}}return M.valid},Kt=()=>{for(const E of x.unMount){const C=P(o,E);C&&(C._f.refs?C._f.refs.every(M=>!qs(M)):!qs(C._f.ref))&&Jt(E)}x.unMount=new Set},$t=(E,C)=>!r.disabled&&(E&&C&&Xt(d,E,C),!Qa(S(),s)),st=(E,C,M)=>pg(E,x,{...m.mount?d:le(C)?s:Ze(E)?{[E]:C}:C},M,C),Tt=E=>Tf(P(m.mount?d:s,E,r.shouldUnregister?P(s,E,[]):[])),Mt=(E,C,M={})=>{const tt=P(o,E);let F=C;if(tt){const Z=tt._f;Z&&(!Z.disabled&&Xt(d,E,vg(C,Z)),F=tc(Z.ref)&&De(C)?"":C,gg(Z.ref)?[...Z.ref.options].forEach(nt=>nt.selected=F.includes(nt.value)):Z.refs?bu(Z.ref)?Z.refs.forEach(nt=>{(!nt.defaultChecked||!nt.disabled)&&(Array.isArray(F)?nt.checked=!!F.find(gt=>gt===nt.value):nt.checked=F===nt.value||!!F)}):Z.refs.forEach(nt=>nt.checked=nt.value===F):Cf(Z.ref)?Z.ref.value="":(Z.ref.value=F,Z.ref.type||j.state.next({name:E,values:de(d)})))}(M.shouldDirty||M.shouldTouch)&&Q(E,F,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&mt(E)},Rt=(E,C,M)=>{for(const tt in C){if(!C.hasOwnProperty(tt))return;const F=C[tt],Z=E+"."+tt,nt=P(o,Z);(x.array.has(E)||oe(F)||nt&&!nt._f)&&!Xl(F)?Rt(Z,F,M):Mt(Z,F,M)}},O=(E,C,M={})=>{const tt=P(o,E),F=x.array.has(E),Z=de(C);Xt(d,E,Z),F?(j.array.next({name:E,values:de(d)}),(b.isDirty||b.dirtyFields||R.isDirty||R.dirtyFields)&&M.shouldDirty&&j.state.next({name:E,dirtyFields:Yn(s,d),isDirty:$t(E,Z)})):tt&&!tt._f&&!De(Z)?Rt(E,Z,M):Mt(E,Z,M),rm(E,x)&&j.state.next({...c,name:E}),j.state.next({name:m.mount?E:void 0,values:de(d)})},K=async E=>{m.mount=!0;const C=E.target;let M=C.name,tt=!0;const F=P(o,M),Z=Ct=>{tt=Number.isNaN(Ct)||Xl(Ct)&&isNaN(Ct.getTime())||Qa(Ct,P(d,M,Ct))},nt=im(r.mode),gt=im(r.reValidateMode);if(F){let Ct,Gt;const Fl=C.type?nm(F._f):sg(E),xa=E.type===Pr.BLUR||E.type===Pr.FOCUS_OUT,hc=!Hb(F._f)&&!r.resolver&&!P(c.errors,M)&&!F._f.deps||Vb(xa,P(c.touchedFields,M),c.isSubmitted,gt,nt),Fa=rm(M,x,xa);Xt(d,M,Fl),xa?(!C||!C.readOnly)&&(F._f.onBlur&&F._f.onBlur(E),v&&v(0)):F._f.onChange&&F._f.onChange(E);const Ja=Q(M,Fl,xa),Ra=!Be(Ja)||Fa;if(!xa&&j.state.next({name:M,type:E.type,values:de(d)}),hc)return(b.isValid||R.isValid)&&(r.mode==="onBlur"?xa&&G():xa||G()),Ra&&j.state.next({name:M,...Fa?{}:Ja});if(!xa&&Fa&&j.state.next({...c}),r.resolver){const{errors:Al}=await et([M]);if(Z(Fl),tt){const wl=cm(c.errors,o,M),Eu=cm(Al,o,wl.name||M);Ct=Eu.error,M=Eu.name,Gt=Be(Al)}}else X([M],!0),Ct=(await sm(F,x.disabled,d,V,r.shouldUseNativeValidation))[M],X([M]),Z(Fl),tt&&(Ct?Gt=!1:(b.isValid||R.isValid)&&(Gt=await St(o,!0)));tt&&(F._f.deps&&(!Array.isArray(F._f.deps)||F._f.deps.length>0)&&mt(F._f.deps),ct(M,Gt,Ct,Ja))}},it=(E,C)=>{if(P(c.errors,C)&&E.focus)return E.focus(),1},mt=async(E,C={})=>{let M,tt;const F=fu(E);if(r.resolver){const Z=await Dt(le(E)?E:F);M=Be(Z),tt=E?!F.some(nt=>P(Z,nt)):M}else E?(tt=(await Promise.all(F.map(async Z=>{const nt=P(o,Z);return await St(nt&&nt._f?{[Z]:nt}:nt)}))).every(Boolean),!(!tt&&!c.isValid)&&G()):tt=M=await St(o);return j.state.next({...!Ze(E)||(b.isValid||R.isValid)&&M!==c.isValid?{}:{name:E},...r.resolver||!E?{isValid:M}:{},errors:c.errors}),C.shouldFocus&&!tt&&du(o,it,E?F:x.mount),tt},S=(E,C)=>{let M={...m.mount?d:s};return C&&(M=mg(C.dirtyFields?c.dirtyFields:c.touchedFields,M)),le(E)?M:Ze(E)?P(M,E):E.map(tt=>P(M,tt))},q=(E,C)=>({invalid:!!P((C||c).errors,E),isDirty:!!P((C||c).dirtyFields,E),error:P((C||c).errors,E),isValidating:!!P(c.validatingFields,E),isTouched:!!P((C||c).touchedFields,E)}),J=E=>{E&&fu(E).forEach(C=>re(c.errors,C)),j.state.next({errors:E?c.errors:{}})},I=(E,C,M)=>{const tt=(P(o,E,{_f:{}})._f||{}).ref,F=P(c.errors,E)||{},{ref:Z,message:nt,type:gt,...Ct}=F;Xt(c.errors,E,{...Ct,...C,ref:tt}),j.state.next({name:E,errors:c.errors,isValid:!1}),M&&M.shouldFocus&&tt&&tt.focus&&tt.focus()},ut=(E,C)=>pa(E)?j.state.subscribe({next:M=>"values"in M&&E(st(void 0,C),M)}):st(E,C,!0),vt=E=>j.state.subscribe({next:C=>{Lb(E.name,C.name,E.exact)&&Bb(C,E.formState||b,We,E.reRenderRoot)&&E.callback({values:{...d},...c,...C,defaultValues:s})}}).unsubscribe,ot=E=>(m.mount=!0,R={...R,...E.formState},vt({...E,formState:R})),Jt=(E,C={})=>{for(const M of E?fu(E):x.mount)x.mount.delete(M),x.array.delete(M),C.keepValue||(re(o,M),re(d,M)),!C.keepError&&re(c.errors,M),!C.keepDirty&&re(c.dirtyFields,M),!C.keepTouched&&re(c.touchedFields,M),!C.keepIsValidating&&re(c.validatingFields,M),!r.shouldUnregister&&!C.keepDefaultValue&&re(s,M);j.state.next({values:de(d)}),j.state.next({...c,...C.keepDirty?{isDirty:$t()}:{}}),!C.keepIsValid&&G()},jt=({disabled:E,name:C})=>{(Qe(E)&&m.mount||E||x.disabled.has(C))&&(E?x.disabled.add(C):x.disabled.delete(C))},ne=(E,C={})=>{let M=P(o,E);const tt=Qe(C.disabled)||Qe(r.disabled);return Xt(o,E,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:E}},name:E,mount:!0,...C}}),x.mount.add(E),M?jt({disabled:Qe(C.disabled)?C.disabled:r.disabled,name:E}):at(E,!0,C.value),{...tt?{disabled:C.disabled||r.disabled}:{},...r.progressive?{required:!!C.required,min:au(C.min),max:au(C.max),minLength:au(C.minLength),maxLength:au(C.maxLength),pattern:au(C.pattern)}:{},name:E,onChange:K,onBlur:K,ref:F=>{if(F){ne(E,C),M=P(o,E);const Z=le(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,nt=Db(Z),gt=M._f.refs||[];if(nt?gt.find(Ct=>Ct===Z):Z===M._f.ref)return;Xt(o,E,{_f:{...M._f,...nt?{refs:[...gt.filter(qs),Z,...Array.isArray(P(s,E))?[{}]:[]],ref:{type:Z.type,name:E}}:{ref:Z}}}),at(E,!1,void 0,Z)}else M=P(o,E,{}),M._f&&(M._f.mount=!1),(r.shouldUnregister||C.shouldUnregister)&&!(fg(x.array,E)&&m.action)&&x.unMount.add(E)}}},ra=()=>r.shouldFocusError&&du(o,it,x.mount),ca=E=>{Qe(E)&&(j.state.next({disabled:E}),du(o,(C,M)=>{const tt=P(o,M);tt&&(C.disabled=tt._f.disabled||E,Array.isArray(tt._f.refs)&&tt._f.refs.forEach(F=>{F.disabled=tt._f.disabled||E}))},0,!1))},Ce=(E,C)=>async M=>{let tt;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let F=de(d);if(j.state.next({isSubmitting:!0}),r.resolver){const{errors:Z,values:nt}=await et();c.errors=Z,F=de(nt)}else await St(o);if(x.disabled.size)for(const Z of x.disabled)re(F,Z);if(re(c.errors,"root"),Be(c.errors)){j.state.next({errors:{}});try{await E(F,M)}catch(Z){tt=Z}}else C&&await C({...c.errors},M),ra(),setTimeout(ra);if(j.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Be(c.errors)&&!tt,submitCount:c.submitCount+1,errors:c.errors}),tt)throw tt},ei=(E,C={})=>{P(o,E)&&(le(C.defaultValue)?O(E,de(P(s,E))):(O(E,C.defaultValue),Xt(s,E,de(C.defaultValue))),C.keepTouched||re(c.touchedFields,E),C.keepDirty||(re(c.dirtyFields,E),c.isDirty=C.defaultValue?$t(E,de(P(s,E))):$t()),C.keepError||(re(c.errors,E),b.isValid&&G()),j.state.next({...c}))},Wl=(E,C={})=>{const M=E?de(E):s,tt=de(M),F=Be(E),Z=F?s:tt;if(C.keepDefaultValues||(s=M),!C.keepValues){if(C.keepDirtyValues){const nt=new Set([...x.mount,...Object.keys(Yn(s,d))]);for(const gt of Array.from(nt))P(c.dirtyFields,gt)?Xt(Z,gt,P(d,gt)):O(gt,P(Z,gt))}else{if(Ef&&le(E))for(const nt of x.mount){const gt=P(o,nt);if(gt&&gt._f){const Ct=Array.isArray(gt._f.refs)?gt._f.refs[0]:gt._f.ref;if(tc(Ct)){const Gt=Ct.closest("form");if(Gt){Gt.reset();break}}}}if(C.keepFieldsRef)for(const nt of x.mount)O(nt,P(Z,nt));else o={}}d=r.shouldUnregister?C.keepDefaultValues?de(s):{}:de(Z),j.array.next({values:{...Z}}),j.state.next({values:{...Z}})}x={mount:C.keepDirtyValues?x.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},m.mount=!b.isValid||!!C.keepIsValid||!!C.keepDirtyValues,m.watch=!!r.shouldUnregister,j.state.next({submitCount:C.keepSubmitCount?c.submitCount:0,isDirty:F?!1:C.keepDirty?c.isDirty:!!(C.keepDefaultValues&&!Qa(E,s)),isSubmitted:C.keepIsSubmitted?c.isSubmitted:!1,dirtyFields:F?{}:C.keepDirtyValues?C.keepDefaultValues&&d?Yn(s,d):c.dirtyFields:C.keepDefaultValues&&E?Yn(s,E):C.keepDirty?c.dirtyFields:{},touchedFields:C.keepTouched?c.touchedFields:{},errors:C.keepErrors?c.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?c.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},Su=(E,C)=>Wl(pa(E)?E(d):E,C),dc=(E,C={})=>{const M=P(o,E),tt=M&&M._f;if(tt){const F=tt.refs?tt.refs[0]:tt.ref;F.focus&&(F.focus(),C.shouldSelect&&pa(F.select)&&F.select())}},We=E=>{c={...c,...E}},ai={control:{register:ne,unregister:Jt,getFieldState:q,handleSubmit:Ce,setError:I,_subscribe:vt,_runSchema:et,_focusError:ra,_getWatch:st,_getDirty:$t,_setValid:G,_setFieldArray:W,_setDisabledField:jt,_setErrors:$,_getFieldArray:Tt,_reset:Wl,_resetDefaultValues:()=>pa(r.defaultValues)&&r.defaultValues().then(E=>{Su(E,r.resetOptions),j.state.next({isLoading:!1})}),_removeUnmounted:Kt,_disableForm:ca,_subjects:j,_proxyFormState:b,get _fields(){return o},get _formValues(){return d},get _state(){return m},set _state(E){m=E},get _defaultValues(){return s},get _names(){return x},set _names(E){x=E},get _formState(){return c},get _options(){return r},set _options(E){r={...r,...E}}},subscribe:ot,trigger:mt,register:ne,handleSubmit:Ce,watch:ut,setValue:O,getValues:S,reset:Su,resetField:ei,clearErrors:J,unregister:Jt,setError:I,setFocus:dc,getFieldState:q};return{...ai,formControl:ai}}function Xb(n={}){const r=pt.useRef(void 0),c=pt.useRef(void 0),[o,s]=pt.useState({isDirty:!1,isValidating:!1,isLoading:pa(n.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1,isReady:!1,defaultValues:pa(n.defaultValues)?void 0:n.defaultValues});if(!r.current)if(n.formControl)r.current={...n.formControl,formState:o},n.defaultValues&&!pa(n.defaultValues)&&n.formControl.reset(n.defaultValues,n.resetOptions);else{const{formControl:m,...x}=Yb(n);r.current={...x,formState:o}}const d=r.current.control;return d._options=n,_f(()=>{const m=d._subscribe({formState:d._proxyFormState,callback:()=>s({...d._formState}),reRenderRoot:!0});return s(x=>({...x,isReady:!0})),d._formState.isReady=!0,m},[d]),pt.useEffect(()=>d._disableForm(n.disabled),[d,n.disabled]),pt.useEffect(()=>{n.mode&&(d._options.mode=n.mode),n.reValidateMode&&(d._options.reValidateMode=n.reValidateMode)},[d,n.mode,n.reValidateMode]),pt.useEffect(()=>{n.errors&&(d._setErrors(n.errors),d._focusError())},[d,n.errors]),pt.useEffect(()=>{n.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,n.shouldUnregister]),pt.useEffect(()=>{if(d._proxyFormState.isDirty){const m=d._getDirty();m!==o.isDirty&&d._subjects.state.next({isDirty:m})}},[d,o.isDirty]),pt.useEffect(()=>{n.values&&!Qa(n.values,c.current)?(d._reset(n.values,{keepFieldsRef:!0,...d._options.resetOptions}),c.current=n.values,s(m=>({...m}))):d._resetDefaultValues()},[d,n.values]),pt.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=hg(o,d),r.current}function $b({disabled:n,$isTransparent:r}){return n?Zl`
      background-color: var(--primary-color-80);
      color: #FFFFFF;
      cursor: not-allowed;
      opacity: 0.7;
    `:r?Zl`
      background-color: transparent;
      border: 1px solid var(--primary-color-button);
      color: var(--primary-color-button);
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(135, 169, 208, 0.2);
      }
      
      &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: 0 2px 6px rgba(135, 169, 208, 0.3);
        transition: all 0.1s ease;
      }
    `:Zl`
      background-color: var(--primary-color-button);
      color: #FFFFFF;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(135, 169, 208, 0.3);
      }
      
      &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: 0 2px 6px rgba(135, 169, 208, 0.4);
        transition: all 0.1s ease;
      }
    `}const Qb=U.button`
  width: 210px;
  height: 50px;
  padding: 0;
  border-radius: 68px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  transform: translateY(0) scale(1);

  ${n=>$b(n)}
`,Zb={StyledButton:Qb},$l=({text:n,isTransparent:r=!1,disabled:c=!1,type:o="button",onClick:s})=>p.jsx(Zb.StyledButton,{type:o,$isTransparent:r,disabled:c,onClick:c?void 0:s,children:n}),Kb=U.input`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border-radius: 10px;
  background: #FFFCFC;
  border: 1px solid ${n=>n.$hasError?"#ff4444":"#DBDBDB"};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: var(--primary-color-text-grey);
  transition: all 0.3s ease;

  &::placeholder {
    color: #A3A3A3;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-medium-rose);
    box-shadow: 0 0 0 2px rgba(213, 181, 205, 0.2);
  }

  &:hover {
    border-color: var(--primary-color-60);
  }

  @media (max-width: 390px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`,Wb=U.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,fm={Input:Kb,ErrorText:Wb},Lr=({error:n,...r})=>p.jsxs("div",{children:[p.jsx(fm.Input,{$hasError:!!n,...r}),n&&p.jsx(fm.ErrorText,{children:n})]}),Fb=U.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`,Jb=U.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Ib=U.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${n=>n.$checked&&`
    border-color: var(--primary-color-medium-rose);
  `}

  &::after {
    content: '';
    width: 17.56px;
    height: 17px;
    border-radius: 50%;
    background: var(--primary-color-medium-rose);
    opacity: ${n=>n.$checked?1:0};
    transform: ${n=>n.$checked?"scale(1)":"scale(0)"};
    transition: all 0.3s ease;
  }

  @media (max-width: 390px) {
    width: 26px;
    height: 24px;

    &::after {
      width: 19px;
      height: 18px;
    }
  }
`,Pb=U.span`
  font-size: 14px;
  color: var(--primary-color-text-grey);
`,Vr={RadioContainer:Fb,HiddenRadio:Jb,Radio:Ib,RadioLabel:Pb},Gs=({name:n,value:r,checked:c,onChange:o,label:s})=>p.jsxs(Vr.RadioContainer,{children:[p.jsx(Vr.HiddenRadio,{name:n,value:r,checked:c,onChange:o}),p.jsx(Vr.Radio,{$checked:c}),p.jsx(Vr.RadioLabel,{children:s})]}),tS=U.textarea`
  width: 100%;
  height: 90px;
  min-height: 90px;
  max-height: 120px; /* примерно 6 строк */
  padding: 12px 15px;
  border-radius: 10px;
  background: #FFFFFF;
  border: 1px solid ${n=>n.$hasError?"#ff4444":"#DBDBDB"};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: var(--primary-color-text-grey);
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: #A3A3A3;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-medium-rose);
    box-shadow: 0 0 0 2px rgba(213, 181, 205, 0.2);
  }

  &:hover {
    border-color: var(--primary-color-60);
  }

  @media (max-width: 390px) {
    &::placeholder {
      font-size: 16px;
    }
  }
`,eS=U.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,dm={Textarea:tS,ErrorText:eS},aS=({error:n,...r})=>p.jsxs("div",{children:[p.jsx(dm.Textarea,{$hasError:!!n,...r}),n&&p.jsx(dm.ErrorText,{children:n})]}),lS=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color-beige);
  width: 100%;
  padding: 50px 20px;
  box-sizing: border-box;

  @media (max-width: 390px) {
    padding: 47px 20px;
  }
`,nS=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  max-width: 572px;

  > ${yt} {
    text-align: center;
  }
`,iS=U.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,uS=U.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45px 45px;
  row-gap: 20px;
  column-gap: 12px;
`,rS=U.div`
  margin-top: 8px;
`,cS=U.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;

  @media (max-width: 370px) {
    gap: 5px;
  }
`,oS=U.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,sS=U.div`
  width: 100%;
  border-radius: 10px;

  ${uf} {
    font-size: 12px;
  }
  ${ug} {
    text-decoration: underline;
  } 
`,fS=U.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,da={Container:lS,Form:nS,DataFields:iS,Inputs:uS,LabelFormWrapper:rS,Massagers:cS,MassagerContainer:oS,InputMassage:sS,ButtonContainer:fS},dS="Хочу обсудить задачу",hS="Оставьте свои контакты и запрос и я вернусь к вам с предложением",pS="Свяжитесь со мной через",mS=`* Нажимая кнопку «Отправить», я даю согласие на обработку
  персональных данных и получение рекламных материалов. `,gS="Ознакомиться с политикой конфиденциальности.",xS=async n=>{const r=new FormData;return r.append("Имя",n.name),r.append("Telegram",n.telegram||"не указал"),r.append("Телефон",n.phone||"не указал"),r.append("E-mail",n.email||"не указал"),r.append("Метод для контакта",n.contactMethod||"не указал"),r.append("Сообщение",n.message),fetch("https://formsubmit.co/ajax/evgeny.chausov@kreo.net",{method:"POST",body:r})},yS=()=>{const{register:n,handleSubmit:r,control:c,watch:o,formState:{errors:s,isSubmitting:d},reset:m}=Xb({mode:"onChange"}),x=o(),v=!x.name||!x.email&&!x.phone&&!x.telegram||d,g=async V=>{try{if((await xS(V)).ok)alert("Сообщение отправлено! Я свяжусь с вами в ближайшее время."),m();else throw new Error("Ошибка отправки")}catch{alert(`Произошла ошибка при отправке сообщения.
        Пожалуйста, попробуйте еще раз или свяжитесь другим способом.`)}},b=()=>{rg("/privacy-policy",!0)},R={pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Введите корректный email"}},j={pattern:{value:/^\+?[\d\s\-()]+$/,message:"Введите корректный номер телефона"}};return p.jsx(da.Container,{id:"contacts",children:p.jsxs(da.Form,{as:"form",onSubmit:r(g),children:[p.jsx(ga,{children:dS}),p.jsx(yt,{fontSize:18,letterSpacing:.2,lineHeight:1.2,children:hS}),p.jsxs(da.DataFields,{children:[p.jsxs(da.Inputs,{children:[p.jsx(Lr,{placeholder:"Имя",...n("name",{required:"Имя обязательно"}),error:s.name?.message}),p.jsx(Lr,{placeholder:"Ник в Telegram",...n("telegram"),error:s.telegram?.message}),p.jsx(Lr,{placeholder:"Телефон",...n("phone",j),error:s.phone?.message}),p.jsx(Lr,{placeholder:"E-mail",...n("email",R),error:s.email?.message})]}),p.jsx(da.LabelFormWrapper,{children:p.jsx(uf,{children:pS})}),p.jsxs(da.Massagers,{children:[p.jsx(da.MassagerContainer,{children:p.jsx(ks,{name:"contactMethod",control:c,render:({field:V})=>p.jsx(Gs,{name:"contactMethod",value:"email",checked:V.value==="email",onChange:V.onChange,label:"e-mail"})})},"email-radio"),p.jsx(da.MassagerContainer,{children:p.jsx(ks,{name:"contactMethod",control:c,render:({field:V})=>p.jsx(Gs,{name:"contactMethod",value:"whatsapp",checked:V.value==="whatsapp",onChange:V.onChange,label:"whatsapp"})})},"whatsapp-radio"),p.jsx(da.MassagerContainer,{children:p.jsx(ks,{name:"contactMethod",control:c,render:({field:V})=>p.jsx(Gs,{name:"contactMethod",value:"telegram",checked:V.value==="telegram",onChange:V.onChange,label:"telegram"})})},"telegram-radio")]})]}),p.jsxs(da.InputMassage,{children:[p.jsx(aS,{placeholder:"Как я могу быть Вам полезна?",...n("message"),error:s.message?.message,rows:4}),p.jsxs(uf,{fontSize:12,lineHeight:1.3,letterSpacing:0,children:[mS,p.jsx(Qn,{text:gS,targetId:"privacy-policy",onClick:b})]})]}),p.jsx(da.ButtonContainer,{children:p.jsx($l,{text:d?"отправка...":"отправить",isTransparent:!0,disabled:v,type:"submit"})})]})})},vS=U.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 70px;
  margin-bottom: 25px;
  width: 100%;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`,bS=U.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 632px;
  width: 100%;
  height: 40px;

  @media (max-width: 630px) {
    justify-content: center;
  }
`,SS=U.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 630px) {
    display: none;
  }
`,ES=U.img`
  width: 223px;
  height: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 165px;
  }
`,lu={Container:vS,Content:bS,LinksWrapper:SS,Logo:ES},Sg=()=>p.jsx(lu.Container,{children:p.jsxs(lu.Content,{children:[p.jsxs(lu.LinksWrapper,{children:[p.jsx(Qn,{text:"услуги",targetId:"services",onClick:()=>wa("services")}),p.jsx(Qn,{text:"обо мне",targetId:"about",onClick:()=>wa("about")})]}),p.jsx(lu.Logo,{src:ig,alt:"Логотип"}),p.jsxs(lu.LinksWrapper,{children:[p.jsx(Qn,{text:"мой подход",targetId:"approach",onClick:()=>wa("approach")}),p.jsx(Qn,{text:"контакты",targetId:"contacts",onClick:()=>wa("contacts")})]})]})}),TS="/startup-landing/assets/plant-2-CMRYYjsu.png",hm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwSURBVHgB7ZTPDYIwFIcfUm4cGKFHLhBX6ASyghPgCDiBbIAj6AQ4QhMSwpERHIA/vprKwUhp0nIxfEnzmpD3+x7QFGBDlziOU1wnsMzusxnHMRmG4QCW2cHKGAuiKErCMKSwlgApPM8r5yTGgr7vGZZgTmIsqOuaqyRE1UwpDXzf34MGjuNkeBJzKWFN07SLAgzPsDEFDTB8mgslBVa2KCCE5F3X3UADHIRiueB6uq57nDJUTZzzFksLC4jvLqcW4Uz2vTH+yTK8FPvvcCsCVbiAgDlnDH/8CrciqKrqqnq++mU3vQEeszte17Dxf7wAZ2RM1AKStooAAAAASUVORK5CYII=",AS=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 70px;

  @media (max-width: 390px) {
    padding: 0 10px;
  }
`,wS=U.div`
  width: 100%;

  @media (min-width: 391px) {
    overflow-x: auto;
    padding-bottom: 10px;
  }

  @media (max-width: 390px) {
    height: 800px;
    overflow-y: auto;
    
    /* Скрываем скроллбар */
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`,_S=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 160px;
  background: ${n=>n.$background?.includes(".png")?`url(${n.$background})`:n.$background||"var(--primary-color-super-light-beige)"};
  background-size: ${n=>n.$background?.includes(".png")?"cover":"auto"};
  background-position: center;
  border-radius: 121px;
  position: relative;
  flex-shrink: 0;

  /* Стрелка для десктопа */
  @media (min-width: 391px) {
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      background-image: url(${hm});
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      z-index: 2;
    }
  }

  @media (max-width: 390px) {
    width: 100%;
    max-width: 300px;
    border-radius: 121px;
    margin: 0 auto;
    
    /* Стрелка для мобилки */
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%) rotate(90deg);
      width: 24px;
      height: 24px;
      background-image: url(${hm});
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      z-index: 2;
    }
  }
`,CS=U.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
  overflow-x: auto;

  @media (min-width: 391px) {
    width: max-content;
    min-width: 100%;
    padding: 0 calc(50% - 650px);
  }

  @media (max-width: 390px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    min-height: 800px;
  }
`,RS=U.div`
  display: none;
`,ia={Container:AS,TabsWrapper:wS,Tabs:CS,Tab:_S,ArrowIcon:RS},zS="Как устроена работа",DS=()=>p.jsxs(ia.Container,{children:[p.jsx(ga,{children:zS}),p.jsx(ia.TabsWrapper,{children:p.jsxs(ia.Tabs,{children:[p.jsxs(ia.Tab,{$background:"var(--primary-color-super-light-beige)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Встреча"}),p.jsx(ia.ArrowIcon,{})]}),p.jsxs(ia.Tab,{$background:"var(--primary-color-beige)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Диагностика"}),p.jsx(ia.ArrowIcon,{})]}),p.jsxs(ia.Tab,{$background:"var(--primary-color-super-light-rose)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Карта"}),p.jsx(ia.ArrowIcon,{})]}),p.jsxs(ia.Tab,{$background:"var(--primary-color-light-rose)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Предложение"}),p.jsx(ia.ArrowIcon,{})]}),p.jsx(ia.Tab,{$background:TS,children:p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Запуск"})})]})})]}),jS="/startup-landing/assets/main-DOflBkP0.png",OS=U.div`
  width: 100%;
  padding: 110px 0 100px 85px;
  position: relative;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  background: var(--primary-color-super-light-beige);
  overflow: hidden;

  @media (max-width: 1290px) {
    padding: 110px 0 80px 35px;
  }

  @media (max-width: 720px) {
    height: 630px;
    padding: 0 20px 40px 20px;
    align-items: end;
  }

  @media (max-width: 400px) {
    width: calc(100% + 40px);
  }
`,MS=U.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  width: 100%;
  position: relative;
  z-index: 2;

  ${sc} {
    margin-bottom: 25px;

    @media (max-width: 720px) {
      margin-bottom: 20px;
    }

    @media (max-width: 520px) {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 1125px) {
    max-width: 432px;
  }
`,NS=U.div`
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1125px) {
    gap: 50px;
  }

  @media (max-width: 720px) {
    gap: 25px;
  }
`,US=U.div`
  margin-top: 25px;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 520px) {
    > button {
      font-size: 16px;
    }
  }
`,HS=U.div`
  position: absolute;
  right: 0;
  top: -50px;
  height: 100%;
  width: auto;

  @media (max-width: 1250px) {
    right: -100px;
  }

  @media (max-width: 860px) {
    right: -140px;
    top: -65px;
  }

  @media (max-width: 720px) {
    right: 0;
    top: -70px;

    mask-image: linear-gradient(
      to top,
      rgba(247, 244, 241, 0) 0%,
      rgba(247, 244, 241, 0.43) 45%,
      rgba(247, 244, 241, 1) 56%
    );
  }

  @media (max-width: 520px) {
    right: -50px;
    top: -50px;
  }
`,BS=U.img`
  height: 150%;
  width: auto;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (max-width: 720px) {
    height: 110%;
  }
`,Gn={Container:OS,Content:MS,TextWrapper:NS,Buttons:US,ImageContainer:HS,Image:BS},nu={title:"СТРАТЕГИЧЕСКИЕ ИЗМЕНЕНИЯ",subtitle:"с уважением к людям",description:`Архитектор изменений для собственников и команд,
    которые выбирают путь осознанного роста.`,button1:"смотреть подробнее",button2:"запросить встречу"},LS=()=>p.jsxs(Gn.Container,{children:[p.jsxs(Gn.Content,{children:[p.jsx(sc,{children:nu.title}),p.jsxs(Gn.TextWrapper,{children:[p.jsx(mv,{children:nu.subtitle}),p.jsx(gv,{children:nu.description})]}),p.jsxs(Gn.Buttons,{children:[p.jsx($l,{text:nu.button1,isTransparent:!0,onClick:()=>wa("myWork")}),p.jsx($l,{text:nu.button2,onClick:()=>wa("contacts")})]})]}),p.jsx(Gn.ImageContainer,{children:p.jsx(Gn.Image,{src:jS,alt:"Стратегические изменения"})})]}),VS=U.div`
  padding: ${n=>n.$padding||"6px 15px"};
  border-radius: 10px;
  background: ${n=>n.$backgroundColor?n.$backgroundColor.startsWith("--")?`var(${n.$backgroundColor})`:n.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${n=>n.$maxWidth&&`
    max-width: ${n.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`,kS={WidgetContainer:VS},Ys=({text:n,backgroundColor:r,maxWidth:c,padding:o})=>p.jsx(kS.WidgetContainer,{$backgroundColor:r,$padding:o,$maxWidth:c,children:p.jsx(nf,{children:n})}),qS="/startup-landing/assets/iryna-2--ce0Vviq.png",GS=U.div`
  max-width: 1210px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 90px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 780px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }

  /* @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 25px;
  } */
`,YS=U.div`
  display: flex;
  flex-direction: column;
  max-width: 382px;
  width: 100%;
  min-height: 254px;
  gap: 12px;

  H3 {
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    order: 2;
    max-width: 340px;
    min-height: 235px;

    H3 {
      margin-bottom: 18px;
    }
  }

  @media (max-width: 779px) {
    margin-bottom: 25px;
  }
`,XS=U.div`
  display: flex;
  flex-direction: column;
  max-width: 382px;
  width: 100%;
  min-height: 254px;
  gap: 12px;

  H3 {
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    order: 3;
    max-width: 340px;
    min-height: 235px;

    H3 {
      margin-bottom: 18px;
    }
  }
`,$S=U.div`
  max-width: 340px;
  width: 100%;
  height: 390px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    order: 1;
    margin: 0 150px;
  }

  /* @media (max-width: 1000px) {
    max-width: 700px;
  } */
`,QS=U.div`
  width: 100%;
  height: 100%;
  background-image: url(${qS});
  background-size: cover;
  background-position: center;
`,iu={Container:GS,Iryna:QS,MePhotoWrapper:$S,Block1Wrapper:YS,Block2Wrapper:XS},ZS="Мой подход",KS="Ключевая идея",uu={block1:{text1:"Не чиню — раскрываю",text2:"Не навязываю — синхронизирую",text3:"Не выстраиваю сверху — слушаю, замечаю, показываю"},block2:{text1:"синергия вместо соперничества",text2:"Именно это даёт команде силу. Когда нет внутренней войны — появляется энергия для движения."}},WS=()=>p.jsxs(iu.Container,{children:[p.jsxs(iu.Block1Wrapper,{children:[p.jsx(Kp,{children:ZS}),p.jsx(nf,{children:uu.block1.text1}),p.jsx(Ys,{text:uu.block1.text2,backgroundColor:"--primary-color-super-light-rose"}),p.jsx(Ys,{text:uu.block1.text3,backgroundColor:"--primary-color-light-rose"})]}),p.jsx(iu.MePhotoWrapper,{children:p.jsx(iu.Iryna,{})}),p.jsxs(iu.Block2Wrapper,{children:[p.jsx(Kp,{children:KS}),p.jsx(Ys,{text:uu.block2.text1,backgroundColor:"--primary-color-light-rose"}),p.jsx(nf,{children:uu.block2.text2})]})]}),FS=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 70px;
  box-sizing: border-box;

  @media (max-width: 1235px) {
    h2 {
      font-size: 34px;
    }
  }
`,JS=U.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 20px;
  row-gap: 25px;
  width: 100%;

  @media (max-width: 1235px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`,IS=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 2px var(--primary-color-light-rose);
  overflow: hidden;
`,PS=U.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 50px;
  width: 100%;
  background: var(--primary-color-medium-rose);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  max-height: 220px;
  height: 100%;

  @media (max-width: 1235px) {
    max-height: 230px;
  }

  @media (max-width: 500px) {
    max-height: 350px;
    padding: 25px;

    ${$n} {
      font-size: 30px;
    }
  }

  ${$n} {
    width: 100%;
  }
  div {
    width: 100%;
  }
`,t4=U.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 50px 20px;
  width: 100%;

  @media (max-width: 1235px) {
    padding: 40px 50px 30px;
  }

  @media (max-width: 500px) {
    padding: 35px 25px 45px;

    /* Button становится как isTransparent = false */
    button {
      background-color: var(--primary-color-button) !important;
      color: #FFFFFF !important;
      border: none !important;
    }
  }
`,e4=U.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 500px) {
    div > p {
      font-size: 18px;
    }
  }
`,xe={Container:FS,ServiceWrapper:JS,Service:IS,ServiceHeader:PS,ServiceContent:t4,Description:e4},a4="Мои услуги",kr="записаться",l4="Анализ и диагностика",n4="1-2 сессии → карта состояния системы",i4=`Формат: 1-2 индивидуальные встречи с собственником
  или ключевыми фигурами.`,u4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,r4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,c4="Диагностика команды",o4="Интервью, наблюдение → отчёт и направления развития",s4=`Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`,f4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,d4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,h4="Архитектура изменений",p4="Проект 2-3 месяца → новая культура взаимодействия",m4=`Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`,g4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,x4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,y4="Сопровождение",v4="Контракты на 1-6 месяцев → устойчивость и автономия",b4=`Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`,S4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,E4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,T4=()=>p.jsxs(xe.Container,{id:"services",children:[p.jsx(ga,{children:a4}),p.jsxs(xe.ServiceWrapper,{children:[p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx($n,{fontWeight:400,children:l4}),p.jsx(Ke,{text:n4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(i4)}),p.jsx(yt,{fontSize:18,children:ze(u4)}),p.jsx(yt,{fontSize:18,children:ze(r4)})]}),p.jsx($l,{text:kr,isTransparent:!0,onClick:()=>wa("contacts")})]})]}),p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx($n,{fontWeight:400,children:c4}),p.jsx(Ke,{text:o4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(s4)}),p.jsx(yt,{fontSize:18,children:ze(f4)}),p.jsx(yt,{fontSize:18,children:ze(d4)})]}),p.jsx($l,{text:kr,isTransparent:!0,onClick:()=>wa("contacts")})]})]}),p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx($n,{fontWeight:400,children:h4}),p.jsx(Ke,{text:p4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(m4)}),p.jsx(yt,{fontSize:18,children:ze(g4)}),p.jsx(yt,{fontSize:18,children:ze(x4)})]}),p.jsx($l,{text:kr,isTransparent:!0,onClick:()=>wa("contacts")})]})]}),p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx($n,{fontWeight:400,children:y4}),p.jsx(Ke,{text:v4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(b4)}),p.jsx(yt,{fontSize:18,children:ze(S4)}),p.jsx(yt,{fontSize:18,children:ze(E4)})]}),p.jsx($l,{text:kr,isTransparent:!0,onClick:()=>wa("contacts")})]})]})]})]}),A4=U.div`
  width: 100%;
  max-width: 970px;
  margin: 50px auto 90px;
  box-sizing: border-box;
`,w4=U.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  ${sc} {
    max-width: 780px;
  }
`,_4=U.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,C4=U.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color-text-grey);
  margin: 0;
  line-height: 1.3;
`,ye={Container:A4,Content:w4,Section:_4,SectionTitle:C4},R4=()=>p.jsxs(p.Fragment,{children:[p.jsx(Sg,{}),p.jsx(ye.Container,{children:p.jsxs(ye.Content,{children:[p.jsx(sc,{children:"Политика конфиденциальности"}),p.jsx(yt,{fontSize:18,lineHeight:1.3,children:"Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных, которые вы оставляете на этом сайте."}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"1. Какие данные собираются"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Мы можем собирать и обрабатывать следующие данные: — имя, адрес электронной почты и телефон — если вы заполняете форму обратной связи; — данные cookies и техническую информацию (IP-адрес, тип устройства, браузер, время посещения) для аналитики и улучшения работы сайта."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"2. Для чего используются данные"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Собранные данные мы используем исключительно для: — обратной связи по вашему запросу; — отправки информации о продуктах, услугах и событиях (только с вашего согласия); — анализа посещаемости сайта и улучшения качества материалов."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"3. Дети"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Наш сайт и услуги не предназначены для лиц младше 13 лет. Мы сознательно не собираем их данные. Если вы считаете, что ребёнок предоставил нам свои данные, пожалуйста, свяжитесь с нами — мы удалим их."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"4. Передача данных третьим лицам"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Мы не продаём и не передаём ваши данные третьим лицам, за исключением случаев, когда это требуется по закону. Для аналитики мы можем использовать внешние сервисы (например, Google Analytics), которые обрабатывают обезличенные данные."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"5. Хранение и защита данных"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Все персональные данные обрабатываются в соответствии с действующим законодательством. Мы принимаем разумные технические и организационные меры для защиты информации от несанкционированного доступа. Данные хранятся только столько времени, сколько это необходимо для целей, ради которых они были собраны."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"6. Ваши права"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Вы имеете право: — запросить копию своих персональных данных; — потребовать исправления или удаления данных; — отозвать согласие на их обработку. Для этого напишите нам на e-mail, указанный в разделе «Контакты»."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"7. Cookies"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Наш сайт может использовать cookies для корректной работы и анализа посещаемости. Вы можете отключить cookies в настройках браузера, однако это может повлиять на корректность работы некоторых функций."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"8. Контакты"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами: info@irynaharelik.com"})]})]})}),p.jsx(cg,{})]}),z4=U.div`
  max-width: 1050px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  margin: 90px 0;
  box-sizing: border-box;

  > div > p {
    text-align: center;
  }

  @media (max-width: 780px) {
    margin: 70px 0;
  }

  @media (max-width: 420px) {
    > div {
      padding: 15px 9px;
    }
  }
`,D4={Container:z4},pm=({title:n,text1:r,text2:c})=>p.jsxs(D4.Container,{children:[p.jsx(Ke,{text:n,fontSize:22,lineHeight:1.1}),p.jsxs("div",{children:[p.jsx(Zp,{children:r}),p.jsx(Zp,{children:c})]})]}),j4="/startup-landing/assets/office-desk-essentials-1-C0YbiFX2.png",O4="/startup-landing/assets/office-desk-essentials-2-DzgV0y1y.png",M4="/startup-landing/assets/office-desk-essentials-3-C-YPx4ek.png",N4="/startup-landing/assets/office-desk-essentials-4-prGep6h3.png";U.a`
  font-size: 14px;
  color: var(--primary-color-text-grey);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-80);
  }
`;const U4=U.a`
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--primary-color-button);
  text-decoration: underline;
  text-decoration-color: var(--primary-color-button);
  text-underline-offset: 2px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`,H4=U.span`
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 400;
  color: var(--primary-color-80);
  text-decoration: underline;
  text-decoration-color: var(--primary-color-80);
  text-underline-offset: 2px;
  cursor: not-allowed;
  opacity: 0.6;
`,mm={ExternalLink:U4,ExternalLinkDisabled:H4},Xs=({url:n})=>n?p.jsx(mm.ExternalLink,{href:n,target:"_blank",rel:"noopener noreferrer",children:"Подробнее"}):p.jsx(mm.ExternalLinkDisabled,{children:"Подробнее"}),B4=U.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 70px;
  box-sizing: border-box;

  @media (max-width: 1235px) {
    h2 {
      font-size: 34px;
    }
  }
`,L4=U.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 620px;
  gap: 12px;
  width: 100%;

  @media (max-width: 1235px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 620px;
    gap: 20px;
  }

  @media (max-width: 545px) {
    display: flex;
    overflow-x: auto;
    gap: 12px;
    padding: 10px 0;
  }
`,V4=U.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 25px 22px 34px;
  background-image: ${n=>`url(${n.$background})`};
  background-size: cover, cover;
  background-position: center bottom, center center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  overflow: hidden;
  height: 620px;

  ${ou} {
    height: 76px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }
  ${ng.WidgetContainer} {
    margin-bottom: auto;
  }

  @media (max-width: 545px) {
    flex-shrink: 1;
    min-width: 316px; /* Фиксированная ширина для скролла */
  }
`;U.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 25px;
`;const k4=U.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 45px;
  height: 100%;
  justify-content: flex-end;
`;U.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;const q4=U.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;

  p {
    white-space: pre-line; /* Сохраняет переносы строк */
  }
`,Ta={Container:B4,TrainingWrapper:L4,Training:V4,DescriptionEnd:k4,DescriptionWithLineBreaks:q4},G4="Обучение",Y4="Специализация",X4="→ 1,5 года",$4=`Онлайн-программа по организационному консультированию.
  Глубокое погружение в гештальт-подход в работе с бизнесом, командами и лидерами.`,Q4=`Формат: организации как живые системы, построение эффективных отношений,
  управление энергией внутри структур.`,Z4="http://psysevents.tilda.ws/gpo",K4="Очный семинар",W4="→ 14-21.102025, Стамбул",F4=`Практика применения гештальт-подхода в
  организационной среде.`,J4=`Формат: проживание, групповая динамика, разбор кейсов,
  обучение через опыт и наблюдение.`,I4="http://orgconsalting-istanbul2025.tilda.ws/",P4="Супервизорская группа",t3="→ старт: ноябрь 2025",e3=`Программа профессиональной поддержки для практикующих
  консультантов и фасилитаторов.`,a3=`Формат: регулярные встречи, разбор случаев,
  развитие профессиональной позиции.`,l3="",n3="Новые программы",i3="→ старт: осень 2026",u3=`Готовятся новые курсы по гештальт-коучингу:
  — в работе с собственниками,
  — в построении командных практик.`,r3=()=>p.jsxs(Ta.Container,{children:[p.jsx(ga,{children:G4}),p.jsxs(Ta.TrainingWrapper,{children:[p.jsxs(Ta.Training,{$background:j4,children:[p.jsx(ou,{fontWeight:400,children:Y4}),p.jsx(Ke,{text:X4,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsxs(Ta.DescriptionEnd,{children:[p.jsx(yt,{fontSize:18,children:$4}),p.jsx(yt,{fontSize:18,children:ze(Q4)})]}),p.jsx(Xs,{url:Z4})]}),p.jsxs(Ta.Training,{$background:O4,children:[p.jsx(ou,{fontWeight:400,children:K4}),p.jsx(Ke,{text:W4,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsxs(Ta.DescriptionEnd,{children:[p.jsx(yt,{fontSize:18,children:F4}),p.jsx(yt,{fontSize:18,children:ze(J4)})]}),p.jsx(Xs,{url:I4})]}),p.jsxs(Ta.Training,{$background:M4,children:[p.jsx(ou,{fontWeight:400,children:P4}),p.jsx(Ke,{text:t3,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsxs(Ta.DescriptionEnd,{children:[p.jsx(yt,{fontSize:18,children:e3}),p.jsx(yt,{fontSize:18,children:ze(a3)})]}),p.jsx(Xs,{url:l3})]}),p.jsxs(Ta.Training,{$background:N4,children:[p.jsx(ou,{fontWeight:400,children:n3}),p.jsx(Ke,{text:i3,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsx(Ta.DescriptionWithLineBreaks,{children:p.jsx(yt,{fontSize:18,children:u3})})]})]})]}),c3=U.div`
  padding: ${n=>n.$padding||"15px 20px"};
  border-radius: 10px;
  background: ${n=>n.$backgroundColor?n.$backgroundColor.startsWith("--")?`var(${n.$backgroundColor})`:n.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${n=>n.$maxWidth&&`
    max-width: ${n.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`,o3={WidgetContainer:c3},s3=({text:n,backgroundColor:r,fontSize:c=18,maxWidth:o,padding:s})=>p.jsx(o3.WidgetContainer,{$backgroundColor:r,$padding:s,$maxWidth:o,children:p.jsx(yt,{fontSize:c,lineHeight:1.1,children:n})}),f3="/startup-landing/assets/iryna-3-CZjkOX-M.png",d3=U.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 120px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 25px;
  }
`,h3=U.div`
  max-width: 570px;
  width: 100%;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`,p3=U.div`
  width: 100%;
  height: 100%;
  background-image: url(${f3});
  background-size: cover;
  background-position: center;
`,m3=U.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 495px;
  width: 100%;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`,g3=U.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 780px) {
    gap: 12px;
  }
`,ru={Container:d3,ContentWrapper:m3,Iryna:p3,WidgetWrapper:g3,MePhotoWrapper:h3},x3="Что я делаю",y3=["Синхронизирую ключевых людей и «архитекторов» бизнеса","Строю стратегическую картину взаимодействия и будущего","Помогаю пройти трансформационные этапы без потери субъектности","Показываю, как команда может быть не источником выгорания, а источником роста","Поддерживаю так, чтобы клиент не зависел от меня — а укреплялся"],v3=()=>{const n=y3.map(r=>p.jsx(s3,{text:r,fontSize:18,padding:"15px 20px"}));return p.jsxs(ru.Container,{id:"myWork",children:[p.jsx(ru.MePhotoWrapper,{children:p.jsx(ru.Iryna,{})}),p.jsxs(ru.ContentWrapper,{children:[p.jsx(ga,{lineHeight:1.1,children:x3}),p.jsx(ru.WidgetWrapper,{children:n})]})]})},b3=pv`
  :root {
    --primary-color-base: #b4cbe6;
    --primary-color-100: #24292e;
    --primary-color-90: #3c444d;
    --primary-color-80: #5a6673;
    --primary-color-70: #788799;
    --primary-color-60: #96a9c0;
    --primary-color-50: #c1d4ea;
    --primary-color-40: #cddcee;
    --primary-color-30: #dae5f3;
    --primary-color-20: #e6eef7;
    --primary-color-10: #f0f5fa;
    --primary-color-button: #87a9d0;
    --primary-color-text-grey: #2d2d2d;
    --primary-color-super-light-rose: #ebe1e5;
    --primary-color-light-rose: #e6d2e1;
    --primary-color-super-light-beige: #f7f4f1;
    --primary-color-medium-rose: #d5b5cd;
    --primary-color-beige: #edebe6;

    --secondary-color-base: #cda6c3;
    --secondary-color-100: #292127;
    --secondary-color-90: #443741;
    --secondary-color-80: #675362;
    --secondary-color-70: #896f82;
    --secondary-color-60: #ab8aa3;
    --secondary-color-50: #d5b5cd;
    --secondary-color-40: #dec4d7;
    --secondary-color-30: #e6d3e1;
    --secondary-color-20: #eee1eb;
    --secondary-color-10: #f5edf3;
  }
`,S3="БИЗНЕС С ЧЕЛОВЕЧЕСКИМ ЛИЦОМ",E3="Когда в центре — не контроль, а смыслы.",T3="И не борьба, а согласованность.",A3="С УВАЖЕНИЕМ К УЖЕ СУЩЕСТВУЮЩЕЙ СИСТЕМЕ",w3="Всегда начинается с понимания контекста.",_3="Не «внедрение», а выстраивание вместе с вами.";function C3(){return p.jsxs(p.Fragment,{children:[p.jsx(Sg,{}),p.jsx(LS,{}),p.jsx(pm,{title:S3,text1:E3,text2:T3}),p.jsx($v,{}),p.jsx(Tb,{}),p.jsx(v3,{}),p.jsx(T4,{}),p.jsx(r3,{}),p.jsx(DS,{}),p.jsx(pm,{title:A3,text1:w3,text2:_3}),p.jsx(WS,{}),p.jsx(_v,{}),p.jsx(yS,{}),p.jsx(cg,{})]})}function R3(){return p.jsxs(n2,{basename:"/startup-landing/",children:[p.jsx(b3,{}),p.jsxs(Uy,{children:[p.jsx(Qs,{path:"/",element:p.jsx(C3,{})}),p.jsx(Qs,{path:"/privacy-policy",element:p.jsx(R4,{})})]})]})}Xx.createRoot(document.getElementById("root")).render(p.jsx(L.StrictMode,{children:p.jsx(R3,{})}));
