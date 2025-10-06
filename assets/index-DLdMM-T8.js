(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function c(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(s){if(s.ep)return;s.ep=!0;const d=c(s);fetch(s.href,d)}})();function Ux(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Cs={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function Hx(){if(bp)return Pi;bp=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(o,s,d){var m=null;if(d!==void 0&&(m=""+d),s.key!==void 0&&(m=""+s.key),"key"in s){d={};for(var x in s)x!=="key"&&(d[x]=s[x])}else d=s;return s=d.ref,{$$typeof:l,type:o,key:m,ref:s!==void 0?s:null,props:d}}return Pi.Fragment=r,Pi.jsx=c,Pi.jsxs=c,Pi}var Sp;function Bx(){return Sp||(Sp=1,Cs.exports=Hx()),Cs.exports}var p=Bx(),Rs={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function Lx(){if(Ep)return xt;Ep=1;var l=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.iterator;function j(S){return S===null||typeof S!="object"?null:(S=R&&S[R]||S["@@iterator"],typeof S=="function"?S:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Y={};function X(S,q,J){this.props=S,this.context=q,this.refs=Y,this.updater=J||V}X.prototype.isReactComponent={},X.prototype.setState=function(S,q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,q,"setState")},X.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function W(){}W.prototype=X.prototype;function U(S,q,J){this.props=S,this.context=q,this.refs=Y,this.updater=J||V}var $=U.prototype=new W;$.constructor=U,G($,X.prototype),$.isPureReactComponent=!0;var at=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},ct=Object.prototype.hasOwnProperty;function et(S,q,J,I,ut,vt){return J=vt.ref,{$$typeof:l,type:S,key:q,ref:J!==void 0?J:null,props:vt}}function Dt(S,q){return et(S.type,q,void 0,void 0,void 0,S.props)}function St(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Kt(S){var q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(J){return q[J]})}var $t=/\/+/g;function st(S,q){return typeof S=="object"&&S!==null&&S.key!=null?Kt(""+S.key):q.toString(36)}function Tt(){}function Mt(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Tt,Tt):(S.status="pending",S.then(function(q){S.status==="pending"&&(S.status="fulfilled",S.value=q)},function(q){S.status==="pending"&&(S.status="rejected",S.reason=q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function Rt(S,q,J,I,ut){var vt=typeof S;(vt==="undefined"||vt==="boolean")&&(S=null);var ot=!1;if(S===null)ot=!0;else switch(vt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(S.$$typeof){case l:case r:ot=!0;break;case b:return ot=S._init,Rt(ot(S._payload),q,J,I,ut)}}if(ot)return ut=ut(S),ot=I===""?"."+st(S,0):I,at(ut)?(J="",ot!=null&&(J=ot.replace($t,"$&/")+"/"),Rt(ut,q,J,"",function(le){return le})):ut!=null&&(St(ut)&&(ut=Dt(ut,J+(ut.key==null||S&&S.key===ut.key?"":(""+ut.key).replace($t,"$&/")+"/")+ot)),q.push(ut)),1;ot=0;var Jt=I===""?".":I+":";if(at(S))for(var jt=0;jt<S.length;jt++)I=S[jt],vt=Jt+st(I,jt),ot+=Rt(I,q,J,vt,ut);else if(jt=j(S),typeof jt=="function")for(S=jt.call(S),jt=0;!(I=S.next()).done;)I=I.value,vt=Jt+st(I,jt++),ot+=Rt(I,q,J,vt,ut);else if(vt==="object"){if(typeof S.then=="function")return Rt(Mt(S),q,J,I,ut);throw q=String(S),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ot}function O(S,q,J){if(S==null)return S;var I=[],ut=0;return Rt(S,I,"","",function(vt){return q.call(J,vt,ut++)}),I}function K(S){if(S._status===-1){var q=S._result;q=q(),q.then(function(J){(S._status===0||S._status===-1)&&(S._status=1,S._result=J)},function(J){(S._status===0||S._status===-1)&&(S._status=2,S._result=J)}),S._status===-1&&(S._status=0,S._result=q)}if(S._status===1)return S._result.default;throw S._result}var it=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function mt(){}return xt.Children={map:O,forEach:function(S,q,J){O(S,function(){q.apply(this,arguments)},J)},count:function(S){var q=0;return O(S,function(){q++}),q},toArray:function(S){return O(S,function(q){return q})||[]},only:function(S){if(!St(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},xt.Component=X,xt.Fragment=c,xt.Profiler=s,xt.PureComponent=U,xt.StrictMode=o,xt.Suspense=y,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,xt.__COMPILER_RUNTIME={__proto__:null,c:function(S){return Q.H.useMemoCache(S)}},xt.cache=function(S){return function(){return S.apply(null,arguments)}},xt.cloneElement=function(S,q,J){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var I=G({},S.props),ut=S.key,vt=void 0;if(q!=null)for(ot in q.ref!==void 0&&(vt=void 0),q.key!==void 0&&(ut=""+q.key),q)!ct.call(q,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&q.ref===void 0||(I[ot]=q[ot]);var ot=arguments.length-2;if(ot===1)I.children=J;else if(1<ot){for(var Jt=Array(ot),jt=0;jt<ot;jt++)Jt[jt]=arguments[jt+2];I.children=Jt}return et(S.type,ut,void 0,void 0,vt,I)},xt.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:d,_context:S},S},xt.createElement=function(S,q,J){var I,ut={},vt=null;if(q!=null)for(I in q.key!==void 0&&(vt=""+q.key),q)ct.call(q,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(ut[I]=q[I]);var ot=arguments.length-2;if(ot===1)ut.children=J;else if(1<ot){for(var Jt=Array(ot),jt=0;jt<ot;jt++)Jt[jt]=arguments[jt+2];ut.children=Jt}if(S&&S.defaultProps)for(I in ot=S.defaultProps,ot)ut[I]===void 0&&(ut[I]=ot[I]);return et(S,vt,void 0,void 0,null,ut)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(S){return{$$typeof:x,render:S}},xt.isValidElement=St,xt.lazy=function(S){return{$$typeof:b,_payload:{_status:-1,_result:S},_init:K}},xt.memo=function(S,q){return{$$typeof:g,type:S,compare:q===void 0?null:q}},xt.startTransition=function(S){var q=Q.T,J={};Q.T=J;try{var I=S(),ut=Q.S;ut!==null&&ut(J,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(mt,it)}catch(vt){it(vt)}finally{Q.T=q}},xt.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},xt.use=function(S){return Q.H.use(S)},xt.useActionState=function(S,q,J){return Q.H.useActionState(S,q,J)},xt.useCallback=function(S,q){return Q.H.useCallback(S,q)},xt.useContext=function(S){return Q.H.useContext(S)},xt.useDebugValue=function(){},xt.useDeferredValue=function(S,q){return Q.H.useDeferredValue(S,q)},xt.useEffect=function(S,q,J){var I=Q.H;if(typeof J=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return I.useEffect(S,q)},xt.useId=function(){return Q.H.useId()},xt.useImperativeHandle=function(S,q,J){return Q.H.useImperativeHandle(S,q,J)},xt.useInsertionEffect=function(S,q){return Q.H.useInsertionEffect(S,q)},xt.useLayoutEffect=function(S,q){return Q.H.useLayoutEffect(S,q)},xt.useMemo=function(S,q){return Q.H.useMemo(S,q)},xt.useOptimistic=function(S,q){return Q.H.useOptimistic(S,q)},xt.useReducer=function(S,q,J){return Q.H.useReducer(S,q,J)},xt.useRef=function(S){return Q.H.useRef(S)},xt.useState=function(S){return Q.H.useState(S)},xt.useSyncExternalStore=function(S,q,J){return Q.H.useSyncExternalStore(S,q,J)},xt.useTransition=function(){return Q.H.useTransition()},xt.version="19.1.1",xt}var Tp;function sf(){return Tp||(Tp=1,Rs.exports=Lx()),Rs.exports}var L=sf();const pt=Ux(L);var zs={exports:{}},tu={},Ds={exports:{}},js={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Vx(){return Ap||(Ap=1,(function(l){function r(O,K){var it=O.length;O.push(K);t:for(;0<it;){var mt=it-1>>>1,S=O[mt];if(0<s(S,K))O[mt]=K,O[it]=S,it=mt;else break t}}function c(O){return O.length===0?null:O[0]}function o(O){if(O.length===0)return null;var K=O[0],it=O.pop();if(it!==K){O[0]=it;t:for(var mt=0,S=O.length,q=S>>>1;mt<q;){var J=2*(mt+1)-1,I=O[J],ut=J+1,vt=O[ut];if(0>s(I,it))ut<S&&0>s(vt,I)?(O[mt]=vt,O[ut]=it,mt=ut):(O[mt]=I,O[J]=it,mt=J);else if(ut<S&&0>s(vt,it))O[mt]=vt,O[ut]=it,mt=ut;else break t}}return K}function s(O,K){var it=O.sortIndex-K.sortIndex;return it!==0?it:O.id-K.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;l.unstable_now=function(){return d.now()}}else{var m=Date,x=m.now();l.unstable_now=function(){return m.now()-x}}var y=[],g=[],b=1,R=null,j=3,V=!1,G=!1,Y=!1,X=!1,W=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function at(O){for(var K=c(g);K!==null;){if(K.callback===null)o(g);else if(K.startTime<=O)o(g),K.sortIndex=K.expirationTime,r(y,K);else break;K=c(g)}}function Q(O){if(Y=!1,at(O),!G)if(c(y)!==null)G=!0,ct||(ct=!0,st());else{var K=c(g);K!==null&&Rt(Q,K.startTime-O)}}var ct=!1,et=-1,Dt=5,St=-1;function Kt(){return X?!0:!(l.unstable_now()-St<Dt)}function $t(){if(X=!1,ct){var O=l.unstable_now();St=O;var K=!0;try{t:{G=!1,Y&&(Y=!1,U(et),et=-1),V=!0;var it=j;try{e:{for(at(O),R=c(y);R!==null&&!(R.expirationTime>O&&Kt());){var mt=R.callback;if(typeof mt=="function"){R.callback=null,j=R.priorityLevel;var S=mt(R.expirationTime<=O);if(O=l.unstable_now(),typeof S=="function"){R.callback=S,at(O),K=!0;break e}R===c(y)&&o(y),at(O)}else o(y);R=c(y)}if(R!==null)K=!0;else{var q=c(g);q!==null&&Rt(Q,q.startTime-O),K=!1}}break t}finally{R=null,j=it,V=!1}K=void 0}}finally{K?st():ct=!1}}}var st;if(typeof $=="function")st=function(){$($t)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Mt=Tt.port2;Tt.port1.onmessage=$t,st=function(){Mt.postMessage(null)}}else st=function(){W($t,0)};function Rt(O,K){et=W(function(){O(l.unstable_now())},K)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(O){O.callback=null},l.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dt=0<O?Math.floor(1e3/O):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_next=function(O){switch(j){case 1:case 2:case 3:var K=3;break;default:K=j}var it=j;j=K;try{return O()}finally{j=it}},l.unstable_requestPaint=function(){X=!0},l.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var it=j;j=O;try{return K()}finally{j=it}},l.unstable_scheduleCallback=function(O,K,it){var mt=l.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?mt+it:mt):it=mt,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=it+S,O={id:b++,callback:K,priorityLevel:O,startTime:it,expirationTime:S,sortIndex:-1},it>mt?(O.sortIndex=it,r(g,O),c(y)===null&&O===c(g)&&(Y?(U(et),et=-1):Y=!0,Rt(Q,it-mt))):(O.sortIndex=S,r(y,O),G||V||(G=!0,ct||(ct=!0,st()))),O},l.unstable_shouldYield=Kt,l.unstable_wrapCallback=function(O){var K=j;return function(){var it=j;j=K;try{return O.apply(this,arguments)}finally{j=it}}}})(js)),js}var wp;function kx(){return wp||(wp=1,Ds.exports=Vx()),Ds.exports}var Os={exports:{}},we={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function qx(){if(_p)return we;_p=1;var l=sf();function r(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},s=Symbol.for("react.portal");function d(y,g,b){var R=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:R==null?null:""+R,children:y,containerInfo:g,implementation:b}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,we.createPortal=function(y,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(r(299));return d(y,g,null,b)},we.flushSync=function(y){var g=m.T,b=o.p;try{if(m.T=null,o.p=2,y)return y()}finally{m.T=g,o.p=b,o.d.f()}},we.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(y,g))},we.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},we.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var b=g.as,R=x(b,g.crossOrigin),j=typeof g.integrity=="string"?g.integrity:void 0,V=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?o.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:R,integrity:j,fetchPriority:V}):b==="script"&&o.d.X(y,{crossOrigin:R,integrity:j,fetchPriority:V,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},we.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=x(g.as,g.crossOrigin);o.d.M(y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(y)},we.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,R=x(b,g.crossOrigin);o.d.L(y,b,{crossOrigin:R,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},we.preloadModule=function(y,g){if(typeof y=="string")if(g){var b=x(g.as,g.crossOrigin);o.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(y)},we.requestFormReset=function(y){o.d.r(y)},we.unstable_batchedUpdates=function(y,g){return y(g)},we.useFormState=function(y,g,b){return m.H.useFormState(y,g,b)},we.useFormStatus=function(){return m.H.useHostTransitionStatus()},we.version="19.1.1",we}var Cp;function Gx(){if(Cp)return Os.exports;Cp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),Os.exports=qx(),Os.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function Yx(){if(Rp)return tu;Rp=1;var l=kx(),r=sf(),c=Gx();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function m(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(d(t)!==t)throw Error(o(188))}function y(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var u=i.alternate;if(u===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===u.child){for(u=i.child;u;){if(u===a)return x(i),t;if(u===n)return x(i),e;u=u.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=u;else{for(var f=!1,h=i.child;h;){if(h===a){f=!0,a=i,n=u;break}if(h===n){f=!0,n=i,a=u;break}h=h.sibling}if(!f){for(h=u.child;h;){if(h===a){f=!0,a=u,n=i;break}if(h===n){f=!0,n=u,a=i;break}h=h.sibling}if(!f)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function g(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=g(t),e!==null)return e;t=t.sibling}return null}var b=Object.assign,R=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),$=Symbol.for("react.context"),at=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),St=Symbol.for("react.activity"),Kt=Symbol.for("react.memo_cache_sentinel"),$t=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=$t&&t[$t]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case X:return"Profiler";case Y:return"StrictMode";case Q:return"Suspense";case ct:return"SuspenseList";case St:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case V:return"Portal";case $:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case at:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case et:return e=t.displayName||null,e!==null?e:Mt(t.type)||"Memo";case Dt:e=t._payload,t=t._init;try{return Mt(t(e))}catch{}}return null}var Rt=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},mt=[],S=-1;function q(t){return{current:t}}function J(t){0>S||(t.current=mt[S],mt[S]=null,S--)}function I(t,e){S++,mt[S]=t.current,t.current=e}var ut=q(null),vt=q(null),ot=q(null),Jt=q(null);function jt(t,e){switch(I(ot,e),I(vt,t),I(ut,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?K0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=K0(e),t=W0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(ut),I(ut,t)}function le(){J(ut),J(vt),J(ot)}function ra(t){t.memoizedState!==null&&I(Jt,t);var e=ut.current,a=W0(e,t.type);e!==a&&(I(vt,t),I(ut,a))}function ca(t){vt.current===t&&(J(ut),J(vt)),Jt.current===t&&(J(Jt),Ki._currentValue=it)}var Ce=Object.prototype.hasOwnProperty,ai=l.unstable_scheduleCallback,Jn=l.unstable_cancelCallback,Eu=l.unstable_shouldYield,hc=l.unstable_requestPaint,We=l.unstable_now,Df=l.unstable_getCurrentPriorityLevel,ni=l.unstable_ImmediatePriority,E=l.unstable_UserBlockingPriority,C=l.unstable_NormalPriority,M=l.unstable_LowPriority,tt=l.unstable_IdlePriority,F=l.log,Z=l.unstable_setDisableYieldValue,lt=null,gt=null;function Ct(t){if(typeof F=="function"&&Z(t),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(lt,t)}catch{}}var Gt=Math.clz32?Math.clz32:pc,In=Math.log,ya=Math.LN2;function pc(t){return t>>>=0,t===0?32:31-(In(t)/ya|0)|0}var Fa=256,Ja=4194304;function Ra(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function wn(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,u=t.suspendedLanes,f=t.pingedLanes;t=t.warmLanes;var h=n&134217727;return h!==0?(n=h&~u,n!==0?i=Ra(n):(f&=h,f!==0?i=Ra(f):a||(a=h&~t,a!==0&&(i=Ra(a))))):(h=n&~u,h!==0?i=Ra(h):f!==0?i=Ra(f):a||(a=n&~t,a!==0&&(i=Ra(a)))),i===0?0:e!==0&&e!==i&&(e&u)===0&&(u=i&-i,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:i}function _n(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Tu(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jf(){var t=Fa;return Fa<<=1,(Fa&4194048)===0&&(Fa=256),t}function Of(){var t=Ja;return Ja<<=1,(Ja&62914560)===0&&(Ja=4194304),t}function mc(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function li(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Tg(t,e,a,n,i,u){var f=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var h=t.entanglements,v=t.expirationTimes,_=t.hiddenUpdates;for(a=f&~a;0<a;){var N=31-Gt(a),k=1<<N;h[N]=0,v[N]=-1;var z=_[N];if(z!==null)for(_[N]=null,N=0;N<z.length;N++){var D=z[N];D!==null&&(D.lane&=-536870913)}a&=~k}n!==0&&Mf(t,n,0),u!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=u&~(f&~e))}function Mf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-Gt(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&4194090}function Nf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-Gt(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function gc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function xc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Uf(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:pp(t.type))}function Ag(t,e){var a=K.p;try{return K.p=t,e()}finally{K.p=a}}var Ia=Math.random().toString(36).slice(2),Te="__reactFiber$"+Ia,Oe="__reactProps$"+Ia,Pn="__reactContainer$"+Ia,yc="__reactEvents$"+Ia,wg="__reactListeners$"+Ia,_g="__reactHandles$"+Ia,Hf="__reactResources$"+Ia,ii="__reactMarker$"+Ia;function vc(t){delete t[Te],delete t[Oe],delete t[yc],delete t[wg],delete t[_g]}function tl(t){var e=t[Te];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Pn]||a[Te]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=P0(t);t!==null;){if(a=t[Te])return a;t=P0(t)}return e}t=a,a=t.parentNode}return null}function el(t){if(t=t[Te]||t[Pn]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ui(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function al(t){var e=t[Hf];return e||(e=t[Hf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function he(t){t[ii]=!0}var Bf=new Set,Lf={};function Cn(t,e){nl(t,e),nl(t+"Capture",e)}function nl(t,e){for(Lf[t]=e,t=0;t<e.length;t++)Bf.add(e[t])}var Cg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vf={},kf={};function Rg(t){return Ce.call(kf,t)?!0:Ce.call(Vf,t)?!1:Cg.test(t)?kf[t]=!0:(Vf[t]=!0,!1)}function Au(t,e,a){if(Rg(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function wu(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function za(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}var bc,qf;function ll(t){if(bc===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||"",qf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bc+t+qf}var Sc=!1;function Ec(t,e){if(!t||Sc)return"";Sc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(D){var z=D}Reflect.construct(t,[],k)}else{try{k.call()}catch(D){z=D}t.call(k.prototype)}}else{try{throw Error()}catch(D){z=D}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(D){if(D&&z&&typeof D.stack=="string")return[D.stack,z.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=n.DetermineComponentFrameRoot(),f=u[0],h=u[1];if(f&&h){var v=f.split(`
`),_=h.split(`
`);for(i=n=0;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(n===v.length||i===_.length)for(n=v.length-1,i=_.length-1;1<=n&&0<=i&&v[n]!==_[i];)i--;for(;1<=n&&0<=i;n--,i--)if(v[n]!==_[i]){if(n!==1||i!==1)do if(n--,i--,0>i||v[n]!==_[i]){var N=`
`+v[n].replace(" at new "," at ");return t.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",t.displayName)),N}while(1<=n&&0<=i);break}}}finally{Sc=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ll(a):""}function zg(t){switch(t.tag){case 26:case 27:case 5:return ll(t.type);case 16:return ll("Lazy");case 13:return ll("Suspense");case 19:return ll("SuspenseList");case 0:case 15:return Ec(t.type,!1);case 11:return Ec(t.type.render,!1);case 1:return Ec(t.type,!0);case 31:return ll("Activity");default:return""}}function Gf(t){try{var e="";do e+=zg(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dg(t){var e=Yf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(f){n=""+f,u.call(this,f)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(f){n=""+f},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _u(t){t._valueTracker||(t._valueTracker=Dg(t))}function Xf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=Yf(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var jg=/[\n"\\]/g;function Je(t){return t.replace(jg,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Tc(t,e,a,n,i,u,f,h){t.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.type=f:t.removeAttribute("type"),e!=null?f==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Fe(e)):t.value!==""+Fe(e)&&(t.value=""+Fe(e)):f!=="submit"&&f!=="reset"||t.removeAttribute("value"),e!=null?Ac(t,f,Fe(e)):a!=null?Ac(t,f,Fe(a)):n!=null&&t.removeAttribute("value"),i==null&&u!=null&&(t.defaultChecked=!!u),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+Fe(h):t.removeAttribute("name")}function $f(t,e,a,n,i,u,f,h){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Fe(a):"",e=e!=null?""+Fe(e):a,h||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=h?t.checked:!!n,t.defaultChecked=!!n,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.name=f)}function Ac(t,e,a){e==="number"&&Cu(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function il(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+Fe(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qf(t,e,a){if(e!=null&&(e=""+Fe(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Fe(a):""}function Zf(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(o(92));if(Rt(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=Fe(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n)}function ul(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Og=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kf(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||Og.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Wf(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&Kf(t,i,n)}else for(var u in e)e.hasOwnProperty(u)&&Kf(t,u,e[u])}function wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ng=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ru(t){return Ng.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _c=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rl=null,cl=null;function Ff(t){var e=el(t);if(e&&(t=e.stateNode)){var a=t[Oe]||null;t:switch(t=e.stateNode,e.type){case"input":if(Tc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[Oe]||null;if(!i)throw Error(o(90));Tc(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&Xf(n)}break t;case"textarea":Qf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&il(t,!!a.multiple,e,!1)}}}var Rc=!1;function Jf(t,e,a){if(Rc)return t(e,a);Rc=!0;try{var n=t(e);return n}finally{if(Rc=!1,(rl!==null||cl!==null)&&(hr(),rl&&(e=rl,t=cl,cl=rl=null,Ff(e),t)))for(e=0;e<t.length;e++)Ff(t[e])}}function ri(t,e){var a=t.stateNode;if(a===null)return null;var n=a[Oe]||null;if(n===null)return null;a=n[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var Da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Da)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){zc=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{zc=!1}var Pa=null,Dc=null,zu=null;function If(){if(zu)return zu;var t,e=Dc,a=e.length,n,i="value"in Pa?Pa.value:Pa.textContent,u=i.length;for(t=0;t<a&&e[t]===i[t];t++);var f=a-t;for(n=1;n<=f&&e[a-n]===i[u-n];n++);return zu=i.slice(t,1<n?1-n:void 0)}function Du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ju(){return!0}function Pf(){return!1}function Me(t){function e(a,n,i,u,f){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=u,this.target=f,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(a=t[h],this[h]=a?a(u):u[h]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ju:Pf,this.isPropagationStopped=Pf,this}return b(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ju)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ju)},persist:function(){},isPersistent:ju}),e}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ou=Me(Rn),oi=b({},Rn,{view:0,detail:0}),Ug=Me(oi),jc,Oc,si,Mu=b({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(jc=t.screenX-si.screenX,Oc=t.screenY-si.screenY):Oc=jc=0,si=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),td=Me(Mu),Hg=b({},Mu,{dataTransfer:0}),Bg=Me(Hg),Lg=b({},oi,{relatedTarget:0}),Mc=Me(Lg),Vg=b({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=Me(Vg),qg=b({},Rn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gg=Me(qg),Yg=b({},Rn,{data:0}),ed=Me(Yg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Qg[t])?!!e[t]:!1}function Nc(){return Zg}var Kg=b({},oi,{key:function(t){if(t.key){var e=Xg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(t){return t.type==="keypress"?Du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wg=Me(Kg),Fg=b({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ad=Me(Fg),Jg=b({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Ig=Me(Jg),Pg=b({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=Me(Pg),e1=b({},Mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=Me(e1),n1=b({},Rn,{newState:0,oldState:0}),l1=Me(n1),i1=[9,13,27,32],Uc=Da&&"CompositionEvent"in window,fi=null;Da&&"documentMode"in document&&(fi=document.documentMode);var u1=Da&&"TextEvent"in window&&!fi,nd=Da&&(!Uc||fi&&8<fi&&11>=fi),ld=" ",id=!1;function ud(t,e){switch(t){case"keyup":return i1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ol=!1;function r1(t,e){switch(t){case"compositionend":return rd(e);case"keypress":return e.which!==32?null:(id=!0,ld);case"textInput":return t=e.data,t===ld&&id?null:t;default:return null}}function c1(t,e){if(ol)return t==="compositionend"||!Uc&&ud(t,e)?(t=If(),zu=Dc=Pa=null,ol=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nd&&e.locale!=="ko"?null:e.data;default:return null}}var o1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!o1[t.type]:e==="textarea"}function od(t,e,a,n){rl?cl?cl.push(n):cl=[n]:rl=n,e=vr(e,"onChange"),0<e.length&&(a=new Ou("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var di=null,hi=null;function s1(t){Y0(t,0)}function Nu(t){var e=ui(t);if(Xf(e))return t}function sd(t,e){if(t==="change")return e}var fd=!1;if(Da){var Hc;if(Da){var Bc="oninput"in document;if(!Bc){var dd=document.createElement("div");dd.setAttribute("oninput","return;"),Bc=typeof dd.oninput=="function"}Hc=Bc}else Hc=!1;fd=Hc&&(!document.documentMode||9<document.documentMode)}function hd(){di&&(di.detachEvent("onpropertychange",pd),hi=di=null)}function pd(t){if(t.propertyName==="value"&&Nu(hi)){var e=[];od(e,hi,t,Cc(t)),Jf(s1,e)}}function f1(t,e,a){t==="focusin"?(hd(),di=e,hi=a,di.attachEvent("onpropertychange",pd)):t==="focusout"&&hd()}function d1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nu(hi)}function h1(t,e){if(t==="click")return Nu(e)}function p1(t,e){if(t==="input"||t==="change")return Nu(e)}function m1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Le=typeof Object.is=="function"?Object.is:m1;function pi(t,e){if(Le(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Ce.call(e,i)||!Le(t[i],e[i]))return!1}return!0}function md(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gd(t,e){var a=md(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=md(a)}}function xd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Cu(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Cu(t.document)}return e}function Lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var g1=Da&&"documentMode"in document&&11>=document.documentMode,sl=null,Vc=null,mi=null,kc=!1;function vd(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||sl==null||sl!==Cu(n)||(n=sl,"selectionStart"in n&&Lc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mi&&pi(mi,n)||(mi=n,n=vr(Vc,"onSelect"),0<n.length&&(e=new Ou("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=sl)))}function zn(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var fl={animationend:zn("Animation","AnimationEnd"),animationiteration:zn("Animation","AnimationIteration"),animationstart:zn("Animation","AnimationStart"),transitionrun:zn("Transition","TransitionRun"),transitionstart:zn("Transition","TransitionStart"),transitioncancel:zn("Transition","TransitionCancel"),transitionend:zn("Transition","TransitionEnd")},qc={},bd={};Da&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete fl.animationend.animation,delete fl.animationiteration.animation,delete fl.animationstart.animation),"TransitionEvent"in window||delete fl.transitionend.transition);function Dn(t){if(qc[t])return qc[t];if(!fl[t])return t;var e=fl[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in bd)return qc[t]=e[a];return t}var Sd=Dn("animationend"),Ed=Dn("animationiteration"),Td=Dn("animationstart"),x1=Dn("transitionrun"),y1=Dn("transitionstart"),v1=Dn("transitioncancel"),Ad=Dn("transitionend"),wd=new Map,Gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gc.push("scrollEnd");function oa(t,e){wd.set(t,e),Cn(e,[t])}var _d=new WeakMap;function Ie(t,e){if(typeof t=="object"&&t!==null){var a=_d.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Gf(e)},_d.set(t,e),e)}return{value:t,source:e,stack:Gf(e)}}var Pe=[],dl=0,Yc=0;function Uu(){for(var t=dl,e=Yc=dl=0;e<t;){var a=Pe[e];Pe[e++]=null;var n=Pe[e];Pe[e++]=null;var i=Pe[e];Pe[e++]=null;var u=Pe[e];if(Pe[e++]=null,n!==null&&i!==null){var f=n.pending;f===null?i.next=i:(i.next=f.next,f.next=i),n.pending=i}u!==0&&Cd(a,i,u)}}function Hu(t,e,a,n){Pe[dl++]=t,Pe[dl++]=e,Pe[dl++]=a,Pe[dl++]=n,Yc|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Xc(t,e,a,n){return Hu(t,e,a,n),Bu(t)}function hl(t,e){return Hu(t,null,null,e),Bu(t)}function Cd(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,u=t.return;u!==null;)u.childLanes|=a,n=u.alternate,n!==null&&(n.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(i=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,i&&e!==null&&(i=31-Gt(a),t=u.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),u):null}function Bu(t){if(50<ki)throw ki=0,Jo=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var pl={};function b1(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ve(t,e,a,n){return new b1(t,e,a,n)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ja(t,e){var a=t.alternate;return a===null?(a=Ve(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Rd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Lu(t,e,a,n,i,u){var f=0;if(n=t,typeof t=="function")$c(t)&&(f=1);else if(typeof t=="string")f=Ex(t,a,ut.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case St:return t=Ve(31,a,e,i),t.elementType=St,t.lanes=u,t;case G:return jn(a.children,i,u,e);case Y:f=8,i|=24;break;case X:return t=Ve(12,a,e,i|2),t.elementType=X,t.lanes=u,t;case Q:return t=Ve(13,a,e,i),t.elementType=Q,t.lanes=u,t;case ct:return t=Ve(19,a,e,i),t.elementType=ct,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W:case $:f=10;break t;case U:f=9;break t;case at:f=11;break t;case et:f=14;break t;case Dt:f=16,n=null;break t}f=29,a=Error(o(130,t===null?"null":typeof t,"")),n=null}return e=Ve(f,a,e,i),e.elementType=t,e.type=n,e.lanes=u,e}function jn(t,e,a,n){return t=Ve(7,t,n,e),t.lanes=a,t}function Qc(t,e,a){return t=Ve(6,t,null,e),t.lanes=a,t}function Zc(t,e,a){return e=Ve(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ml=[],gl=0,Vu=null,ku=0,ta=[],ea=0,On=null,Oa=1,Ma="";function Mn(t,e){ml[gl++]=ku,ml[gl++]=Vu,Vu=t,ku=e}function zd(t,e,a){ta[ea++]=Oa,ta[ea++]=Ma,ta[ea++]=On,On=t;var n=Oa;t=Ma;var i=32-Gt(n)-1;n&=~(1<<i),a+=1;var u=32-Gt(e)+i;if(30<u){var f=i-i%5;u=(n&(1<<f)-1).toString(32),n>>=f,i-=f,Oa=1<<32-Gt(e)+i|a<<i|n,Ma=u+t}else Oa=1<<u|a<<i|n,Ma=t}function Kc(t){t.return!==null&&(Mn(t,1),zd(t,1,0))}function Wc(t){for(;t===Vu;)Vu=ml[--gl],ml[gl]=null,ku=ml[--gl],ml[gl]=null;for(;t===On;)On=ta[--ea],ta[ea]=null,Ma=ta[--ea],ta[ea]=null,Oa=ta[--ea],ta[ea]=null}var Re=null,It=null,Nt=!1,Nn=null,va=!1,Fc=Error(o(519));function Un(t){var e=Error(o(418,""));throw yi(Ie(e,t)),Fc}function Dd(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Te]=t,e[Oe]=n,a){case"dialog":_t("cancel",e),_t("close",e);break;case"iframe":case"object":case"embed":_t("load",e);break;case"video":case"audio":for(a=0;a<Gi.length;a++)_t(Gi[a],e);break;case"source":_t("error",e);break;case"img":case"image":case"link":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"input":_t("invalid",e),$f(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),_u(e);break;case"select":_t("invalid",e);break;case"textarea":_t("invalid",e),Zf(e,n.value,n.defaultValue,n.children),_u(e)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||Z0(e.textContent,a)?(n.popover!=null&&(_t("beforetoggle",e),_t("toggle",e)),n.onScroll!=null&&_t("scroll",e),n.onScrollEnd!=null&&_t("scrollend",e),n.onClick!=null&&(e.onclick=br),e=!0):e=!1,e||Un(t)}function jd(t){for(Re=t.return;Re;)switch(Re.tag){case 5:case 13:va=!1;return;case 27:case 3:va=!0;return;default:Re=Re.return}}function gi(t){if(t!==Re)return!1;if(!Nt)return jd(t),Nt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||hs(t.type,t.memoizedProps)),a=!a),a&&It&&Un(t),jd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){It=fa(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}It=null}}else e===27?(e=It,gn(t.type)?(t=xs,xs=null,It=t):It=e):It=Re?fa(t.stateNode.nextSibling):null;return!0}function xi(){It=Re=null,Nt=!1}function Od(){var t=Nn;return t!==null&&(He===null?He=t:He.push.apply(He,t),Nn=null),t}function yi(t){Nn===null?Nn=[t]:Nn.push(t)}var Jc=q(null),Hn=null,Na=null;function tn(t,e,a){I(Jc,e._currentValue),e._currentValue=a}function Ua(t){t._currentValue=Jc.current,J(Jc)}function Ic(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function Pc(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){var f=i.child;u=u.firstContext;t:for(;u!==null;){var h=u;u=i;for(var v=0;v<e.length;v++)if(h.context===e[v]){u.lanes|=a,h=u.alternate,h!==null&&(h.lanes|=a),Ic(u.return,a,t),n||(f=null);break t}u=h.next}}else if(i.tag===18){if(f=i.return,f===null)throw Error(o(341));f.lanes|=a,u=f.alternate,u!==null&&(u.lanes|=a),Ic(f,a,t),f=null}else f=i.child;if(f!==null)f.return=i;else for(f=i;f!==null;){if(f===t){f=null;break}if(i=f.sibling,i!==null){i.return=f.return,f=i;break}f=f.return}i=f}}function vi(t,e,a,n){t=null;for(var i=e,u=!1;i!==null;){if(!u){if((i.flags&524288)!==0)u=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var f=i.alternate;if(f===null)throw Error(o(387));if(f=f.memoizedProps,f!==null){var h=i.type;Le(i.pendingProps.value,f.value)||(t!==null?t.push(h):t=[h])}}else if(i===Jt.current){if(f=i.alternate,f===null)throw Error(o(387));f.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ki):t=[Ki])}i=i.return}t!==null&&Pc(e,t,a,n),e.flags|=262144}function qu(t){for(t=t.firstContext;t!==null;){if(!Le(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bn(t){Hn=t,Na=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ae(t){return Md(Hn,t)}function Gu(t,e){return Hn===null&&Bn(t),Md(t,e)}function Md(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Na===null){if(t===null)throw Error(o(308));Na=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Na=Na.next=e;return a}var S1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},E1=l.unstable_scheduleCallback,T1=l.unstable_NormalPriority,se={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new S1,data:new Map,refCount:0}}function bi(t){t.refCount--,t.refCount===0&&E1(T1,function(){t.controller.abort()})}var Si=null,eo=0,xl=0,yl=null;function A1(t,e){if(Si===null){var a=Si=[];eo=0,xl=ls(),yl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return eo++,e.then(Nd,Nd),e}function Nd(){if(--eo===0&&Si!==null){yl!==null&&(yl.status="fulfilled");var t=Si;Si=null,xl=0,yl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function w1(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Ud=O.S;O.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&A1(t,e),Ud!==null&&Ud(t,e)};var Ln=q(null);function ao(){var t=Ln.current;return t!==null?t:Yt.pooledCache}function Yu(t,e){e===null?I(Ln,Ln.current):I(Ln,e.pool)}function Hd(){var t=ao();return t===null?null:{parent:se._currentValue,pool:t}}var Ei=Error(o(460)),Bd=Error(o(474)),Xu=Error(o(542)),no={then:function(){}};function Ld(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $u(){}function Vd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then($u,$u),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qd(t),t;default:if(typeof e.status=="string")e.then($u,$u);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qd(t),t}throw Ti=e,Ei}}var Ti=null;function kd(){if(Ti===null)throw Error(o(459));var t=Ti;return Ti=null,t}function qd(t){if(t===Ei||t===Xu)throw Error(o(483))}var en=!1;function lo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function io(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function an(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function nn(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(Ht&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Bu(t),Cd(t,null,a),e}return Hu(t,n,e,a),Bu(t)}function Ai(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Nf(t,a)}}function uo(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var f={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?i=u=f:u=u.next=f,a=a.next}while(a!==null);u===null?i=u=e:u=u.next=e}else i=u=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:u,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var ro=!1;function wi(){if(ro){var t=yl;if(t!==null)throw t}}function _i(t,e,a,n){ro=!1;var i=t.updateQueue;en=!1;var u=i.firstBaseUpdate,f=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var v=h,_=v.next;v.next=null,f===null?u=_:f.next=_,f=v;var N=t.alternate;N!==null&&(N=N.updateQueue,h=N.lastBaseUpdate,h!==f&&(h===null?N.firstBaseUpdate=_:h.next=_,N.lastBaseUpdate=v))}if(u!==null){var k=i.baseState;f=0,N=_=v=null,h=u;do{var z=h.lane&-536870913,D=z!==h.lane;if(D?(zt&z)===z:(n&z)===z){z!==0&&z===xl&&(ro=!0),N!==null&&(N=N.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var ht=t,ft=h;z=e;var kt=a;switch(ft.tag){case 1:if(ht=ft.payload,typeof ht=="function"){k=ht.call(kt,k,z);break t}k=ht;break t;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=ft.payload,z=typeof ht=="function"?ht.call(kt,k,z):ht,z==null)break t;k=b({},k,z);break t;case 2:en=!0}}z=h.callback,z!==null&&(t.flags|=64,D&&(t.flags|=8192),D=i.callbacks,D===null?i.callbacks=[z]:D.push(z))}else D={lane:z,tag:h.tag,payload:h.payload,callback:h.callback,next:null},N===null?(_=N=D,v=k):N=N.next=D,f|=z;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;D=h,h=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);N===null&&(v=k),i.baseState=v,i.firstBaseUpdate=_,i.lastBaseUpdate=N,u===null&&(i.shared.lanes=0),dn|=f,t.lanes=f,t.memoizedState=k}}function Gd(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Yd(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Gd(a[t],e)}var vl=q(null),Qu=q(0);function Xd(t,e){t=Ga,I(Qu,t),I(vl,e),Ga=t|e.baseLanes}function co(){I(Qu,Ga),I(vl,vl.current)}function oo(){Ga=Qu.current,J(vl),J(Qu)}var ln=0,Et=null,Lt=null,ie=null,Zu=!1,bl=!1,Vn=!1,Ku=0,Ci=0,Sl=null,_1=0;function te(){throw Error(o(321))}function so(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Le(t[a],e[a]))return!1;return!0}function fo(t,e,a,n,i,u){return ln=u,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=t===null||t.memoizedState===null?Ch:Rh,Vn=!1,u=a(n,i),Vn=!1,bl&&(u=Qd(e,a,n,i)),$d(t),u}function $d(t){O.H=tr;var e=Lt!==null&&Lt.next!==null;if(ln=0,ie=Lt=Et=null,Zu=!1,Ci=0,Sl=null,e)throw Error(o(300));t===null||pe||(t=t.dependencies,t!==null&&qu(t)&&(pe=!0))}function Qd(t,e,a,n){Et=t;var i=0;do{if(bl&&(Sl=null),Ci=0,bl=!1,25<=i)throw Error(o(301));if(i+=1,ie=Lt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}O.H=M1,u=e(a,n)}while(bl);return u}function C1(){var t=O.H,e=t.useState()[0];return e=typeof e.then=="function"?Ri(e):e,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(Et.flags|=1024),e}function ho(){var t=Ku!==0;return Ku=0,t}function po(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function mo(t){if(Zu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zu=!1}ln=0,ie=Lt=Et=null,bl=!1,Ci=Ku=0,Sl=null}function Ne(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Et.memoizedState=ie=t:ie=ie.next=t,ie}function ue(){if(Lt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=ie===null?Et.memoizedState:ie.next;if(e!==null)ie=e,Lt=t;else{if(t===null)throw Et.alternate===null?Error(o(467)):Error(o(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},ie===null?Et.memoizedState=ie=t:ie=ie.next=t}return ie}function go(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ri(t){var e=Ci;return Ci+=1,Sl===null&&(Sl=[]),t=Vd(Sl,t,e),e=Et,(ie===null?e.memoizedState:ie.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?Ch:Rh),t}function Wu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ri(t);if(t.$$typeof===$)return Ae(t)}throw Error(o(438,String(t)))}function xo(t){var e=null,a=Et.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=Et.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=go(),Et.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=Kt;return e.index++,a}function Ha(t,e){return typeof e=="function"?e(t):e}function Fu(t){var e=ue();return yo(e,Lt,t)}function yo(t,e,a){var n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=t.baseQueue,u=n.pending;if(u!==null){if(i!==null){var f=i.next;i.next=u.next,u.next=f}e.baseQueue=i=u,n.pending=null}if(u=t.baseState,i===null)t.memoizedState=u;else{e=i.next;var h=f=null,v=null,_=e,N=!1;do{var k=_.lane&-536870913;if(k!==_.lane?(zt&k)===k:(ln&k)===k){var z=_.revertLane;if(z===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),k===xl&&(N=!0);else if((ln&z)===z){_=_.next,z===xl&&(N=!0);continue}else k={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(h=v=k,f=u):v=v.next=k,Et.lanes|=z,dn|=z;k=_.action,Vn&&a(u,k),u=_.hasEagerState?_.eagerState:a(u,k)}else z={lane:k,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},v===null?(h=v=z,f=u):v=v.next=z,Et.lanes|=k,dn|=k;_=_.next}while(_!==null&&_!==e);if(v===null?f=u:v.next=h,!Le(u,t.memoizedState)&&(pe=!0,N&&(a=yl,a!==null)))throw a;t.memoizedState=u,t.baseState=f,t.baseQueue=v,n.lastRenderedState=u}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function vo(t){var e=ue(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,u=e.memoizedState;if(i!==null){a.pending=null;var f=i=i.next;do u=t(u,f.action),f=f.next;while(f!==i);Le(u,e.memoizedState)||(pe=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,n]}function Zd(t,e,a){var n=Et,i=ue(),u=Nt;if(u){if(a===void 0)throw Error(o(407));a=a()}else a=e();var f=!Le((Lt||i).memoizedState,a);f&&(i.memoizedState=a,pe=!0),i=i.queue;var h=Fd.bind(null,n,i,t);if(zi(2048,8,h,[t]),i.getSnapshot!==e||f||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,El(9,Ju(),Wd.bind(null,n,i,a,e),null),Yt===null)throw Error(o(349));u||(ln&124)!==0||Kd(n,e,a)}return a}function Kd(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=Et.updateQueue,e===null?(e=go(),Et.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function Wd(t,e,a,n){e.value=a,e.getSnapshot=n,Jd(e)&&Id(t)}function Fd(t,e,a){return a(function(){Jd(e)&&Id(t)})}function Jd(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Le(t,a)}catch{return!0}}function Id(t){var e=hl(t,2);e!==null&&Xe(e,t,2)}function bo(t){var e=Ne();if(typeof t=="function"){var a=t;if(t=a(),Vn){Ct(!0);try{a()}finally{Ct(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:t},e}function Pd(t,e,a,n){return t.baseState=a,yo(t,Lt,typeof n=="function"?n:Ha)}function R1(t,e,a,n,i){if(Pu(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){u.listeners.push(f)}};O.T!==null?a(!0):u.isTransition=!1,n(u),a=e.pending,a===null?(u.next=e.pending=u,th(e,u)):(u.next=a.next,e.pending=a.next=u)}}function th(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var u=O.T,f={};O.T=f;try{var h=a(i,n),v=O.S;v!==null&&v(f,h),eh(t,e,h)}catch(_){So(t,e,_)}finally{O.T=u}}else try{u=a(i,n),eh(t,e,u)}catch(_){So(t,e,_)}}function eh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){ah(t,e,n)},function(n){return So(t,e,n)}):ah(t,e,a)}function ah(t,e,a){e.status="fulfilled",e.value=a,nh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,th(t,a)))}function So(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,nh(e),e=e.next;while(e!==n)}t.action=null}function nh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function lh(t,e){return e}function ih(t,e){if(Nt){var a=Yt.formState;if(a!==null){t:{var n=Et;if(Nt){if(It){e:{for(var i=It,u=va;i.nodeType!==8;){if(!u){i=null;break e}if(i=fa(i.nextSibling),i===null){i=null;break e}}u=i.data,i=u==="F!"||u==="F"?i:null}if(i){It=fa(i.nextSibling),n=i.data==="F!";break t}}Un(n)}n=!1}n&&(e=a[0])}}return a=Ne(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lh,lastRenderedState:e},a.queue=n,a=Ah.bind(null,Et,n),n.dispatch=a,n=bo(!1),u=_o.bind(null,Et,!1,n.queue),n=Ne(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=R1.bind(null,Et,i,u,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function uh(t){var e=ue();return rh(e,Lt,t)}function rh(t,e,a){if(e=yo(t,e,lh)[0],t=Fu(Ha)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=Ri(e)}catch(f){throw f===Ei?Xu:f}else n=e;e=ue();var i=e.queue,u=i.dispatch;return a!==e.memoizedState&&(Et.flags|=2048,El(9,Ju(),z1.bind(null,i,a),null)),[n,u,t]}function z1(t,e){t.action=e}function ch(t){var e=ue(),a=Lt;if(a!==null)return rh(e,a,t);ue(),e=e.memoizedState,a=ue();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function El(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=Et.updateQueue,e===null&&(e=go(),Et.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function Ju(){return{destroy:void 0,resource:void 0}}function oh(){return ue().memoizedState}function Iu(t,e,a,n){var i=Ne();n=n===void 0?null:n,Et.flags|=t,i.memoizedState=El(1|e,Ju(),a,n)}function zi(t,e,a,n){var i=ue();n=n===void 0?null:n;var u=i.memoizedState.inst;Lt!==null&&n!==null&&so(n,Lt.memoizedState.deps)?i.memoizedState=El(e,u,a,n):(Et.flags|=t,i.memoizedState=El(1|e,u,a,n))}function sh(t,e){Iu(8390656,8,t,e)}function fh(t,e){zi(2048,8,t,e)}function dh(t,e){return zi(4,2,t,e)}function hh(t,e){return zi(4,4,t,e)}function ph(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mh(t,e,a){a=a!=null?a.concat([t]):null,zi(4,4,ph.bind(null,e,t),a)}function Eo(){}function gh(t,e){var a=ue();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&so(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function xh(t,e){var a=ue();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&so(e,n[1]))return n[0];if(n=t(),Vn){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[n,e],n}function To(t,e,a){return a===void 0||(ln&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=b0(),Et.lanes|=t,dn|=t,a)}function yh(t,e,a,n){return Le(a,e)?a:vl.current!==null?(t=To(t,a,n),Le(t,e)||(pe=!0),t):(ln&42)===0?(pe=!0,t.memoizedState=a):(t=b0(),Et.lanes|=t,dn|=t,e)}function vh(t,e,a,n,i){var u=K.p;K.p=u!==0&&8>u?u:8;var f=O.T,h={};O.T=h,_o(t,!1,e,a);try{var v=i(),_=O.S;if(_!==null&&_(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var N=w1(v,n);Di(t,e,N,Ye(t))}else Di(t,e,n,Ye(t))}catch(k){Di(t,e,{then:function(){},status:"rejected",reason:k},Ye())}finally{K.p=u,O.T=f}}function D1(){}function Ao(t,e,a,n){if(t.tag!==5)throw Error(o(476));var i=bh(t).queue;vh(t,i,e,it,a===null?D1:function(){return Sh(t),a(n)})}function bh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:it},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sh(t){var e=bh(t).next.queue;Di(t,e,{},Ye())}function wo(){return Ae(Ki)}function Eh(){return ue().memoizedState}function Th(){return ue().memoizedState}function j1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ye();t=an(a);var n=nn(e,t,a);n!==null&&(Xe(n,e,a),Ai(n,e,a)),e={cache:to()},t.payload=e;return}e=e.return}}function O1(t,e,a){var n=Ye();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pu(t)?wh(e,a):(a=Xc(t,e,a,n),a!==null&&(Xe(a,t,n),_h(a,e,n)))}function Ah(t,e,a){var n=Ye();Di(t,e,a,n)}function Di(t,e,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pu(t))wh(e,i);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var f=e.lastRenderedState,h=u(f,a);if(i.hasEagerState=!0,i.eagerState=h,Le(h,f))return Hu(t,e,i,0),Yt===null&&Uu(),!1}catch{}finally{}if(a=Xc(t,e,i,n),a!==null)return Xe(a,t,n),_h(a,e,n),!0}return!1}function _o(t,e,a,n){if(n={lane:2,revertLane:ls(),action:n,hasEagerState:!1,eagerState:null,next:null},Pu(t)){if(e)throw Error(o(479))}else e=Xc(t,a,n,2),e!==null&&Xe(e,t,2)}function Pu(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function wh(t,e){bl=Zu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function _h(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,Nf(t,a)}}var tr={readContext:Ae,use:Wu,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useLayoutEffect:te,useInsertionEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useSyncExternalStore:te,useId:te,useHostTransitionStatus:te,useFormState:te,useActionState:te,useOptimistic:te,useMemoCache:te,useCacheRefresh:te},Ch={readContext:Ae,use:Wu,useCallback:function(t,e){return Ne().memoizedState=[t,e===void 0?null:e],t},useContext:Ae,useEffect:sh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Iu(4194308,4,ph.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Iu(4194308,4,t,e)},useInsertionEffect:function(t,e){Iu(4,2,t,e)},useMemo:function(t,e){var a=Ne();e=e===void 0?null:e;var n=t();if(Vn){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=Ne();if(a!==void 0){var i=a(e);if(Vn){Ct(!0);try{a(e)}finally{Ct(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=O1.bind(null,Et,t),[n.memoizedState,t]},useRef:function(t){var e=Ne();return t={current:t},e.memoizedState=t},useState:function(t){t=bo(t);var e=t.queue,a=Ah.bind(null,Et,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Eo,useDeferredValue:function(t,e){var a=Ne();return To(a,t,e)},useTransition:function(){var t=bo(!1);return t=vh.bind(null,Et,t.queue,!0,!1),Ne().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=Et,i=Ne();if(Nt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Yt===null)throw Error(o(349));(zt&124)!==0||Kd(n,e,a)}i.memoizedState=a;var u={value:a,getSnapshot:e};return i.queue=u,sh(Fd.bind(null,n,u,t),[t]),n.flags|=2048,El(9,Ju(),Wd.bind(null,n,u,a,e),null),a},useId:function(){var t=Ne(),e=Yt.identifierPrefix;if(Nt){var a=Ma,n=Oa;a=(n&~(1<<32-Gt(n)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ku++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=_1++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:wo,useFormState:ih,useActionState:ih,useOptimistic:function(t){var e=Ne();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=_o.bind(null,Et,!0,a),a.dispatch=e,[t,e]},useMemoCache:xo,useCacheRefresh:function(){return Ne().memoizedState=j1.bind(null,Et)}},Rh={readContext:Ae,use:Wu,useCallback:gh,useContext:Ae,useEffect:fh,useImperativeHandle:mh,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:xh,useReducer:Fu,useRef:oh,useState:function(){return Fu(Ha)},useDebugValue:Eo,useDeferredValue:function(t,e){var a=ue();return yh(a,Lt.memoizedState,t,e)},useTransition:function(){var t=Fu(Ha)[0],e=ue().memoizedState;return[typeof t=="boolean"?t:Ri(t),e]},useSyncExternalStore:Zd,useId:Eh,useHostTransitionStatus:wo,useFormState:uh,useActionState:uh,useOptimistic:function(t,e){var a=ue();return Pd(a,Lt,t,e)},useMemoCache:xo,useCacheRefresh:Th},M1={readContext:Ae,use:Wu,useCallback:gh,useContext:Ae,useEffect:fh,useImperativeHandle:mh,useInsertionEffect:dh,useLayoutEffect:hh,useMemo:xh,useReducer:vo,useRef:oh,useState:function(){return vo(Ha)},useDebugValue:Eo,useDeferredValue:function(t,e){var a=ue();return Lt===null?To(a,t,e):yh(a,Lt.memoizedState,t,e)},useTransition:function(){var t=vo(Ha)[0],e=ue().memoizedState;return[typeof t=="boolean"?t:Ri(t),e]},useSyncExternalStore:Zd,useId:Eh,useHostTransitionStatus:wo,useFormState:ch,useActionState:ch,useOptimistic:function(t,e){var a=ue();return Lt!==null?Pd(a,Lt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:xo,useCacheRefresh:Th},Tl=null,ji=0;function er(t){var e=ji;return ji+=1,Tl===null&&(Tl=[]),Vd(Tl,t,e)}function Oi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function ar(t,e){throw e.$$typeof===R?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function zh(t){var e=t._init;return e(t._payload)}function Dh(t){function e(A,T){if(t){var w=A.deletions;w===null?(A.deletions=[T],A.flags|=16):w.push(T)}}function a(A,T){if(!t)return null;for(;T!==null;)e(A,T),T=T.sibling;return null}function n(A){for(var T=new Map;A!==null;)A.key!==null?T.set(A.key,A):T.set(A.index,A),A=A.sibling;return T}function i(A,T){return A=ja(A,T),A.index=0,A.sibling=null,A}function u(A,T,w){return A.index=w,t?(w=A.alternate,w!==null?(w=w.index,w<T?(A.flags|=67108866,T):w):(A.flags|=67108866,T)):(A.flags|=1048576,T)}function f(A){return t&&A.alternate===null&&(A.flags|=67108866),A}function h(A,T,w,B){return T===null||T.tag!==6?(T=Qc(w,A.mode,B),T.return=A,T):(T=i(T,w),T.return=A,T)}function v(A,T,w,B){var nt=w.type;return nt===G?N(A,T,w.props.children,B,w.key):T!==null&&(T.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Dt&&zh(nt)===T.type)?(T=i(T,w.props),Oi(T,w),T.return=A,T):(T=Lu(w.type,w.key,w.props,null,A.mode,B),Oi(T,w),T.return=A,T)}function _(A,T,w,B){return T===null||T.tag!==4||T.stateNode.containerInfo!==w.containerInfo||T.stateNode.implementation!==w.implementation?(T=Zc(w,A.mode,B),T.return=A,T):(T=i(T,w.children||[]),T.return=A,T)}function N(A,T,w,B,nt){return T===null||T.tag!==7?(T=jn(w,A.mode,B,nt),T.return=A,T):(T=i(T,w),T.return=A,T)}function k(A,T,w){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Qc(""+T,A.mode,w),T.return=A,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return w=Lu(T.type,T.key,T.props,null,A.mode,w),Oi(w,T),w.return=A,w;case V:return T=Zc(T,A.mode,w),T.return=A,T;case Dt:var B=T._init;return T=B(T._payload),k(A,T,w)}if(Rt(T)||st(T))return T=jn(T,A.mode,w,null),T.return=A,T;if(typeof T.then=="function")return k(A,er(T),w);if(T.$$typeof===$)return k(A,Gu(A,T),w);ar(A,T)}return null}function z(A,T,w,B){var nt=T!==null?T.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return nt!==null?null:h(A,T,""+w,B);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case j:return w.key===nt?v(A,T,w,B):null;case V:return w.key===nt?_(A,T,w,B):null;case Dt:return nt=w._init,w=nt(w._payload),z(A,T,w,B)}if(Rt(w)||st(w))return nt!==null?null:N(A,T,w,B,null);if(typeof w.then=="function")return z(A,T,er(w),B);if(w.$$typeof===$)return z(A,T,Gu(A,w),B);ar(A,w)}return null}function D(A,T,w,B,nt){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return A=A.get(w)||null,h(T,A,""+B,nt);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case j:return A=A.get(B.key===null?w:B.key)||null,v(T,A,B,nt);case V:return A=A.get(B.key===null?w:B.key)||null,_(T,A,B,nt);case Dt:var At=B._init;return B=At(B._payload),D(A,T,w,B,nt)}if(Rt(B)||st(B))return A=A.get(w)||null,N(T,A,B,nt,null);if(typeof B.then=="function")return D(A,T,w,er(B),nt);if(B.$$typeof===$)return D(A,T,w,Gu(T,B),nt);ar(T,B)}return null}function ht(A,T,w,B){for(var nt=null,At=null,rt=T,dt=T=0,ge=null;rt!==null&&dt<w.length;dt++){rt.index>dt?(ge=rt,rt=null):ge=rt.sibling;var Ot=z(A,rt,w[dt],B);if(Ot===null){rt===null&&(rt=ge);break}t&&rt&&Ot.alternate===null&&e(A,rt),T=u(Ot,T,dt),At===null?nt=Ot:At.sibling=Ot,At=Ot,rt=ge}if(dt===w.length)return a(A,rt),Nt&&Mn(A,dt),nt;if(rt===null){for(;dt<w.length;dt++)rt=k(A,w[dt],B),rt!==null&&(T=u(rt,T,dt),At===null?nt=rt:At.sibling=rt,At=rt);return Nt&&Mn(A,dt),nt}for(rt=n(rt);dt<w.length;dt++)ge=D(rt,A,dt,w[dt],B),ge!==null&&(t&&ge.alternate!==null&&rt.delete(ge.key===null?dt:ge.key),T=u(ge,T,dt),At===null?nt=ge:At.sibling=ge,At=ge);return t&&rt.forEach(function(Sn){return e(A,Sn)}),Nt&&Mn(A,dt),nt}function ft(A,T,w,B){if(w==null)throw Error(o(151));for(var nt=null,At=null,rt=T,dt=T=0,ge=null,Ot=w.next();rt!==null&&!Ot.done;dt++,Ot=w.next()){rt.index>dt?(ge=rt,rt=null):ge=rt.sibling;var Sn=z(A,rt,Ot.value,B);if(Sn===null){rt===null&&(rt=ge);break}t&&rt&&Sn.alternate===null&&e(A,rt),T=u(Sn,T,dt),At===null?nt=Sn:At.sibling=Sn,At=Sn,rt=ge}if(Ot.done)return a(A,rt),Nt&&Mn(A,dt),nt;if(rt===null){for(;!Ot.done;dt++,Ot=w.next())Ot=k(A,Ot.value,B),Ot!==null&&(T=u(Ot,T,dt),At===null?nt=Ot:At.sibling=Ot,At=Ot);return Nt&&Mn(A,dt),nt}for(rt=n(rt);!Ot.done;dt++,Ot=w.next())Ot=D(rt,A,dt,Ot.value,B),Ot!==null&&(t&&Ot.alternate!==null&&rt.delete(Ot.key===null?dt:Ot.key),T=u(Ot,T,dt),At===null?nt=Ot:At.sibling=Ot,At=Ot);return t&&rt.forEach(function(Nx){return e(A,Nx)}),Nt&&Mn(A,dt),nt}function kt(A,T,w,B){if(typeof w=="object"&&w!==null&&w.type===G&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case j:t:{for(var nt=w.key;T!==null;){if(T.key===nt){if(nt=w.type,nt===G){if(T.tag===7){a(A,T.sibling),B=i(T,w.props.children),B.return=A,A=B;break t}}else if(T.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Dt&&zh(nt)===T.type){a(A,T.sibling),B=i(T,w.props),Oi(B,w),B.return=A,A=B;break t}a(A,T);break}else e(A,T);T=T.sibling}w.type===G?(B=jn(w.props.children,A.mode,B,w.key),B.return=A,A=B):(B=Lu(w.type,w.key,w.props,null,A.mode,B),Oi(B,w),B.return=A,A=B)}return f(A);case V:t:{for(nt=w.key;T!==null;){if(T.key===nt)if(T.tag===4&&T.stateNode.containerInfo===w.containerInfo&&T.stateNode.implementation===w.implementation){a(A,T.sibling),B=i(T,w.children||[]),B.return=A,A=B;break t}else{a(A,T);break}else e(A,T);T=T.sibling}B=Zc(w,A.mode,B),B.return=A,A=B}return f(A);case Dt:return nt=w._init,w=nt(w._payload),kt(A,T,w,B)}if(Rt(w))return ht(A,T,w,B);if(st(w)){if(nt=st(w),typeof nt!="function")throw Error(o(150));return w=nt.call(w),ft(A,T,w,B)}if(typeof w.then=="function")return kt(A,T,er(w),B);if(w.$$typeof===$)return kt(A,T,Gu(A,w),B);ar(A,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,T!==null&&T.tag===6?(a(A,T.sibling),B=i(T,w),B.return=A,A=B):(a(A,T),B=Qc(w,A.mode,B),B.return=A,A=B),f(A)):a(A,T)}return function(A,T,w,B){try{ji=0;var nt=kt(A,T,w,B);return Tl=null,nt}catch(rt){if(rt===Ei||rt===Xu)throw rt;var At=Ve(29,rt,null,A.mode);return At.lanes=B,At.return=A,At}finally{}}}var Al=Dh(!0),jh=Dh(!1),aa=q(null),ba=null;function un(t){var e=t.alternate;I(fe,fe.current&1),I(aa,t),ba===null&&(e===null||vl.current!==null||e.memoizedState!==null)&&(ba=t)}function Oh(t){if(t.tag===22){if(I(fe,fe.current),I(aa,t),ba===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(ba=t)}}else rn()}function rn(){I(fe,fe.current),I(aa,aa.current)}function Ba(t){J(aa),ba===t&&(ba=null),J(fe)}var fe=q(0);function nr(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||gs(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Co(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:b({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ro={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=Ye(),i=an(n);i.payload=e,a!=null&&(i.callback=a),e=nn(t,i,n),e!==null&&(Xe(e,t,n),Ai(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=Ye(),i=an(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=nn(t,i,n),e!==null&&(Xe(e,t,n),Ai(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ye(),n=an(a);n.tag=2,e!=null&&(n.callback=e),e=nn(t,n,a),e!==null&&(Xe(e,t,a),Ai(e,t,a))}};function Mh(t,e,a,n,i,u,f){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,u,f):e.prototype&&e.prototype.isPureReactComponent?!pi(a,n)||!pi(i,u):!0}function Nh(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&Ro.enqueueReplaceState(e,e.state,null)}function kn(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=b({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}var lr=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Uh(t){lr(t)}function Hh(t){console.error(t)}function Bh(t){lr(t)}function ir(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function Lh(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function zo(t,e,a){return a=an(a),a.tag=3,a.payload={element:null},a.callback=function(){ir(t,e)},a}function Vh(t){return t=an(t),t.tag=3,t}function kh(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var u=n.value;t.payload=function(){return i(u)},t.callback=function(){Lh(e,a,n)}}var f=a.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(t.callback=function(){Lh(e,a,n),typeof i!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function N1(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&vi(e,a,i,!0),a=aa.current,a!==null){switch(a.tag){case 13:return ba===null?Po():a.alternate===null&&Pt===0&&(Pt=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===no?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),es(t,n,i)),!1;case 22:return a.flags|=65536,n===no?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),es(t,n,i)),!1}throw Error(o(435,a.tag))}return es(t,n,i),Po(),!1}if(Nt)return e=aa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Fc&&(t=Error(o(422),{cause:n}),yi(Ie(t,a)))):(n!==Fc&&(e=Error(o(423),{cause:n}),yi(Ie(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=Ie(n,a),i=zo(t.stateNode,n,i),uo(t,i),Pt!==4&&(Pt=2)),!1;var u=Error(o(520),{cause:n});if(u=Ie(u,a),Vi===null?Vi=[u]:Vi.push(u),Pt!==4&&(Pt=2),e===null)return!0;n=Ie(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=zo(a.stateNode,n,t),uo(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(hn===null||!hn.has(u))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Vh(i),kh(i,t,a,n),uo(a,i),!1}a=a.return}while(a!==null);return!1}var qh=Error(o(461)),pe=!1;function be(t,e,a,n){e.child=t===null?jh(e,null,a,n):Al(e,t.child,a,n)}function Gh(t,e,a,n,i){a=a.render;var u=e.ref;if("ref"in n){var f={};for(var h in n)h!=="ref"&&(f[h]=n[h])}else f=n;return Bn(e),n=fo(t,e,a,f,u,i),h=ho(),t!==null&&!pe?(po(t,e,i),La(t,e,i)):(Nt&&h&&Kc(e),e.flags|=1,be(t,e,n,i),e.child)}function Yh(t,e,a,n,i){if(t===null){var u=a.type;return typeof u=="function"&&!$c(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,Xh(t,e,u,n,i)):(t=Lu(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Bo(t,i)){var f=u.memoizedProps;if(a=a.compare,a=a!==null?a:pi,a(f,n)&&t.ref===e.ref)return La(t,e,i)}return e.flags|=1,t=ja(u,n),t.ref=e.ref,t.return=e,e.child=t}function Xh(t,e,a,n,i){if(t!==null){var u=t.memoizedProps;if(pi(u,n)&&t.ref===e.ref)if(pe=!1,e.pendingProps=n=u,Bo(t,i))(t.flags&131072)!==0&&(pe=!0);else return e.lanes=t.lanes,La(t,e,i)}return Do(t,e,a,n,i)}function $h(t,e,a){var n=e.pendingProps,i=n.children,u=t!==null?t.memoizedState:null;if(n.mode==="hidden"){if((e.flags&128)!==0){if(n=u!==null?u.baseLanes|a:a,t!==null){for(i=e.child=t.child,u=0;i!==null;)u=u|i.lanes|i.childLanes,i=i.sibling;e.childLanes=u&~n}else e.childLanes=0,e.child=null;return Qh(t,e,n,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yu(e,u!==null?u.cachePool:null),u!==null?Xd(e,u):co(),Oh(e);else return e.lanes=e.childLanes=536870912,Qh(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Yu(e,u.cachePool),Xd(e,u),rn(),e.memoizedState=null):(t!==null&&Yu(e,null),co(),rn());return be(t,e,i,a),e.child}function Qh(t,e,a,n){var i=ao();return i=i===null?null:{parent:se._currentValue,pool:i},e.memoizedState={baseLanes:a,cachePool:i},t!==null&&Yu(e,null),co(),Oh(e),t!==null&&vi(t,e,n,!0),null}function ur(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Do(t,e,a,n,i){return Bn(e),a=fo(t,e,a,n,void 0,i),n=ho(),t!==null&&!pe?(po(t,e,i),La(t,e,i)):(Nt&&n&&Kc(e),e.flags|=1,be(t,e,a,i),e.child)}function Zh(t,e,a,n,i,u){return Bn(e),e.updateQueue=null,a=Qd(e,n,a,i),$d(t),n=ho(),t!==null&&!pe?(po(t,e,u),La(t,e,u)):(Nt&&n&&Kc(e),e.flags|=1,be(t,e,a,u),e.child)}function Kh(t,e,a,n,i){if(Bn(e),e.stateNode===null){var u=pl,f=a.contextType;typeof f=="object"&&f!==null&&(u=Ae(f)),u=new a(n,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ro,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=n,u.state=e.memoizedState,u.refs={},lo(e),f=a.contextType,u.context=typeof f=="object"&&f!==null?Ae(f):pl,u.state=e.memoizedState,f=a.getDerivedStateFromProps,typeof f=="function"&&(Co(e,a,f,n),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(f=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),f!==u.state&&Ro.enqueueReplaceState(u,u.state,null),_i(e,n,u,i),wi(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){u=e.stateNode;var h=e.memoizedProps,v=kn(a,h);u.props=v;var _=u.context,N=a.contextType;f=pl,typeof N=="object"&&N!==null&&(f=Ae(N));var k=a.getDerivedStateFromProps;N=typeof k=="function"||typeof u.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,N||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h||_!==f)&&Nh(e,u,n,f),en=!1;var z=e.memoizedState;u.state=z,_i(e,n,u,i),wi(),_=e.memoizedState,h||z!==_||en?(typeof k=="function"&&(Co(e,a,k,n),_=e.memoizedState),(v=en||Mh(e,a,v,n,z,_,f))?(N||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=_),u.props=n,u.state=_,u.context=f,n=v):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{u=e.stateNode,io(t,e),f=e.memoizedProps,N=kn(a,f),u.props=N,k=e.pendingProps,z=u.context,_=a.contextType,v=pl,typeof _=="object"&&_!==null&&(v=Ae(_)),h=a.getDerivedStateFromProps,(_=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==k||z!==v)&&Nh(e,u,n,v),en=!1,z=e.memoizedState,u.state=z,_i(e,n,u,i),wi();var D=e.memoizedState;f!==k||z!==D||en||t!==null&&t.dependencies!==null&&qu(t.dependencies)?(typeof h=="function"&&(Co(e,a,h,n),D=e.memoizedState),(N=en||Mh(e,a,N,n,z,D,v)||t!==null&&t.dependencies!==null&&qu(t.dependencies))?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,D,v),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,D,v)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=D),u.props=n,u.state=D,u.context=v,n=N):(typeof u.componentDidUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&z===t.memoizedState||(e.flags|=1024),n=!1)}return u=n,ur(t,e),n=(e.flags&128)!==0,u||n?(u=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&n?(e.child=Al(e,t.child,null,i),e.child=Al(e,null,a,i)):be(t,e,a,i),e.memoizedState=u.state,t=e.child):t=La(t,e,i),t}function Wh(t,e,a,n){return xi(),e.flags|=256,be(t,e,a,n),e.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(t){return{baseLanes:t,cachePool:Hd()}}function Mo(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=na),t}function Fh(t,e,a){var n=e.pendingProps,i=!1,u=(e.flags&128)!==0,f;if((f=u)||(f=t!==null&&t.memoizedState===null?!1:(fe.current&2)!==0),f&&(i=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,t===null){if(Nt){if(i?un(e):rn(),Nt){var h=It,v;if(v=h){t:{for(v=h,h=va;v.nodeType!==8;){if(!h){h=null;break t}if(v=fa(v.nextSibling),v===null){h=null;break t}}h=v}h!==null?(e.memoizedState={dehydrated:h,treeContext:On!==null?{id:Oa,overflow:Ma}:null,retryLane:536870912,hydrationErrors:null},v=Ve(18,null,null,0),v.stateNode=h,v.return=e,e.child=v,Re=e,It=null,v=!0):v=!1}v||Un(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return gs(h)?e.lanes=32:e.lanes=536870912,null;Ba(e)}return h=n.children,n=n.fallback,i?(rn(),i=e.mode,h=rr({mode:"hidden",children:h},i),n=jn(n,i,a,null),h.return=e,n.return=e,h.sibling=n,e.child=h,i=e.child,i.memoizedState=Oo(a),i.childLanes=Mo(t,f,a),e.memoizedState=jo,n):(un(e),No(e,h))}if(v=t.memoizedState,v!==null&&(h=v.dehydrated,h!==null)){if(u)e.flags&256?(un(e),e.flags&=-257,e=Uo(t,e,a)):e.memoizedState!==null?(rn(),e.child=t.child,e.flags|=128,e=null):(rn(),i=n.fallback,h=e.mode,n=rr({mode:"visible",children:n.children},h),i=jn(i,h,a,null),i.flags|=2,n.return=e,i.return=e,n.sibling=i,e.child=n,Al(e,t.child,null,a),n=e.child,n.memoizedState=Oo(a),n.childLanes=Mo(t,f,a),e.memoizedState=jo,e=i);else if(un(e),gs(h)){if(f=h.nextSibling&&h.nextSibling.dataset,f)var _=f.dgst;f=_,n=Error(o(419)),n.stack="",n.digest=f,yi({value:n,source:null,stack:null}),e=Uo(t,e,a)}else if(pe||vi(t,e,a,!1),f=(a&t.childLanes)!==0,pe||f){if(f=Yt,f!==null&&(n=a&-a,n=(n&42)!==0?1:gc(n),n=(n&(f.suspendedLanes|a))!==0?0:n,n!==0&&n!==v.retryLane))throw v.retryLane=n,hl(t,n),Xe(f,t,n),qh;h.data==="$?"||Po(),e=Uo(t,e,a)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,It=fa(h.nextSibling),Re=e,Nt=!0,Nn=null,va=!1,t!==null&&(ta[ea++]=Oa,ta[ea++]=Ma,ta[ea++]=On,Oa=t.id,Ma=t.overflow,On=e),e=No(e,n.children),e.flags|=4096);return e}return i?(rn(),i=n.fallback,h=e.mode,v=t.child,_=v.sibling,n=ja(v,{mode:"hidden",children:n.children}),n.subtreeFlags=v.subtreeFlags&65011712,_!==null?i=ja(_,i):(i=jn(i,h,a,null),i.flags|=2),i.return=e,n.return=e,n.sibling=i,e.child=n,n=i,i=e.child,h=t.child.memoizedState,h===null?h=Oo(a):(v=h.cachePool,v!==null?(_=se._currentValue,v=v.parent!==_?{parent:_,pool:_}:v):v=Hd(),h={baseLanes:h.baseLanes|a,cachePool:v}),i.memoizedState=h,i.childLanes=Mo(t,f,a),e.memoizedState=jo,n):(un(e),a=t.child,t=a.sibling,a=ja(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(f=e.deletions,f===null?(e.deletions=[t],e.flags|=16):f.push(t)),e.child=a,e.memoizedState=null,a)}function No(t,e){return e=rr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function rr(t,e){return t=Ve(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Uo(t,e,a){return Al(e,t.child,null,a),t=No(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jh(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Ic(t.return,e,a)}function Ho(t,e,a,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i)}function Ih(t,e,a){var n=e.pendingProps,i=n.revealOrder,u=n.tail;if(be(t,e,n.children,a),n=fe.current,(n&2)!==0)n=n&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,a,e);else if(t.tag===19)Jh(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}switch(I(fe,n),i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&nr(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Ho(e,!1,i,a,u);break;case"backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nr(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Ho(e,!0,a,null,u);break;case"together":Ho(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function La(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),dn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(vi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=ja(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=ja(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Bo(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&qu(t)))}function U1(t,e,a){switch(e.tag){case 3:jt(e,e.stateNode.containerInfo),tn(e,se,t.memoizedState.cache),xi();break;case 27:case 5:ra(e);break;case 4:jt(e,e.stateNode.containerInfo);break;case 10:tn(e,e.type,e.memoizedProps.value);break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(un(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Fh(t,e,a):(un(e),t=La(t,e,a),t!==null?t.sibling:null);un(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(vi(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return Ih(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(fe,fe.current),n)break;return null;case 22:case 23:return e.lanes=0,$h(t,e,a);case 24:tn(e,se,t.memoizedState.cache)}return La(t,e,a)}function Ph(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)pe=!0;else{if(!Bo(t,a)&&(e.flags&128)===0)return pe=!1,U1(t,e,a);pe=(t.flags&131072)!==0}else pe=!1,Nt&&(e.flags&1048576)!==0&&zd(e,ku,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var n=e.elementType,i=n._init;if(n=i(n._payload),e.type=n,typeof n=="function")$c(n)?(t=kn(n,t),e.tag=1,e=Kh(null,e,n,t,a)):(e.tag=0,e=Do(null,e,n,t,a));else{if(n!=null){if(i=n.$$typeof,i===at){e.tag=11,e=Gh(null,e,n,t,a);break t}else if(i===et){e.tag=14,e=Yh(null,e,n,t,a);break t}}throw e=Mt(n)||n,Error(o(306,e,""))}}return e;case 0:return Do(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=kn(n,e.pendingProps),Kh(t,e,n,i,a);case 3:t:{if(jt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));n=e.pendingProps;var u=e.memoizedState;i=u.element,io(t,e),_i(e,n,null,a);var f=e.memoizedState;if(n=f.cache,tn(e,se,n),n!==u.cache&&Pc(e,[se],a,!0),wi(),n=f.element,u.isDehydrated)if(u={element:n,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Wh(t,e,n,a);break t}else if(n!==i){i=Ie(Error(o(424)),e),yi(i),e=Wh(t,e,n,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(It=fa(t.firstChild),Re=e,Nt=!0,Nn=null,va=!0,a=jh(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xi(),n===i){e=La(t,e,a);break t}be(t,e,n,a)}e=e.child}return e;case 26:return ur(t,e),t===null?(a=np(e.type,null,e.pendingProps,null))?e.memoizedState=a:Nt||(a=e.type,t=e.pendingProps,n=Sr(ot.current).createElement(a),n[Te]=e,n[Oe]=t,Ee(n,a,t),he(n),e.stateNode=n):e.memoizedState=np(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ra(e),t===null&&Nt&&(n=e.stateNode=tp(e.type,e.pendingProps,ot.current),Re=e,va=!0,i=It,gn(e.type)?(xs=i,It=fa(n.firstChild)):It=i),be(t,e,e.pendingProps.children,a),ur(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Nt&&((i=n=It)&&(n=ox(n,e.type,e.pendingProps,va),n!==null?(e.stateNode=n,Re=e,It=fa(n.firstChild),va=!1,i=!0):i=!1),i||Un(e)),ra(e),i=e.type,u=e.pendingProps,f=t!==null?t.memoizedProps:null,n=u.children,hs(i,u)?n=null:f!==null&&hs(i,f)&&(e.flags|=32),e.memoizedState!==null&&(i=fo(t,e,C1,null,null,a),Ki._currentValue=i),ur(t,e),be(t,e,n,a),e.child;case 6:return t===null&&Nt&&((t=a=It)&&(a=sx(a,e.pendingProps,va),a!==null?(e.stateNode=a,Re=e,It=null,t=!0):t=!1),t||Un(e)),null;case 13:return Fh(t,e,a);case 4:return jt(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Al(e,null,n,a):be(t,e,n,a),e.child;case 11:return Gh(t,e,e.type,e.pendingProps,a);case 7:return be(t,e,e.pendingProps,a),e.child;case 8:return be(t,e,e.pendingProps.children,a),e.child;case 12:return be(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,tn(e,e.type,n.value),be(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,Bn(e),i=Ae(i),n=n(i),e.flags|=1,be(t,e,n,a),e.child;case 14:return Yh(t,e,e.type,e.pendingProps,a);case 15:return Xh(t,e,e.type,e.pendingProps,a);case 19:return Ih(t,e,a);case 31:return n=e.pendingProps,a=e.mode,n={mode:n.mode,children:n.children},t===null?(a=rr(n,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=ja(t.child,n),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return $h(t,e,a);case 24:return Bn(e),n=Ae(se),t===null?(i=ao(),i===null&&(i=Yt,u=to(),i.pooledCache=u,u.refCount++,u!==null&&(i.pooledCacheLanes|=a),i=u),e.memoizedState={parent:n,cache:i},lo(e),tn(e,se,i)):((t.lanes&a)!==0&&(io(t,e),_i(e,null,null,a),wi()),i=t.memoizedState,u=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),tn(e,se,n)):(n=u.cache,tn(e,se,n),n!==i.cache&&Pc(e,[se],a,!0))),be(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Va(t){t.flags|=4}function t0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!cp(e)){if(e=aa.current,e!==null&&((zt&4194048)===zt?ba!==null:(zt&62914560)!==zt&&(zt&536870912)===0||e!==ba))throw Ti=no,Bd;t.flags|=8192}}function cr(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Of():536870912,t.lanes|=e,Rl|=e)}function Mi(t,e){if(!Nt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function H1(t,e,a){var n=e.pendingProps;switch(Wc(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return Wt(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ua(se),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(gi(e)?Va(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Od())),Wt(e),null;case 26:return a=e.memoizedState,t===null?(Va(e),a!==null?(Wt(e),t0(e,a)):(Wt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(Va(e),Wt(e),t0(e,a)):(Wt(e),e.flags&=-16777217):(t.memoizedProps!==n&&Va(e),Wt(e),e.flags&=-16777217),null;case 27:ca(e),a=ot.current;var i=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Va(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Wt(e),null}t=ut.current,gi(e)?Dd(e):(t=tp(i,n,a),e.stateNode=t,Va(e))}return Wt(e),null;case 5:if(ca(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Va(e);else{if(!n){if(e.stateNode===null)throw Error(o(166));return Wt(e),null}if(t=ut.current,gi(e))Dd(e);else{switch(i=Sr(ot.current),t){case 1:t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=i.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?t.multiple=!0:n.size&&(t.size=n.size);break;default:t=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}t[Te]=e,t[Oe]=n;t:for(i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}e.stateNode=t;t:switch(Ee(t,a,n),a){case"button":case"input":case"select":case"textarea":t=!!n.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Va(e)}}return Wt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Va(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(o(166));if(t=ot.current,gi(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=Re,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[Te]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Z0(t.nodeValue,a)),t||Un(e)}else t=Sr(t).createTextNode(n),t[Te]=e,e.stateNode=t}return Wt(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=gi(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(o(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Te]=e}else xi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Wt(e),i=!1}else i=Od(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ba(e),e):(Ba(e),null)}if(Ba(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=n!==null,t=t!==null&&t.memoizedState!==null,a){n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var u=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(u=n.memoizedState.cachePool.pool),u!==i&&(n.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),cr(e,e.updateQueue),Wt(e),null;case 4:return le(),t===null&&cs(e.stateNode.containerInfo),Wt(e),null;case 10:return Ua(e.type),Wt(e),null;case 19:if(J(fe),i=e.memoizedState,i===null)return Wt(e),null;if(n=(e.flags&128)!==0,u=i.rendering,u===null)if(n)Mi(i,!1);else{if(Pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=nr(t),u!==null){for(e.flags|=128,Mi(i,!1),t=u.updateQueue,e.updateQueue=t,cr(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Rd(a,t),a=a.sibling;return I(fe,fe.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>fr&&(e.flags|=128,n=!0,Mi(i,!1),e.lanes=4194304)}else{if(!n)if(t=nr(u),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,cr(e,t),Mi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!u.alternate&&!Nt)return Wt(e),null}else 2*We()-i.renderingStartTime>fr&&a!==536870912&&(e.flags|=128,n=!0,Mi(i,!1),e.lanes=4194304);i.isBackwards?(u.sibling=e.child,e.child=u):(t=i.last,t!==null?t.sibling=u:e.child=u,i.last=u)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,t=fe.current,I(fe,n?t&1|2:t&1),e):(Wt(e),null);case 22:case 23:return Ba(e),oo(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),a=e.updateQueue,a!==null&&cr(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&J(Ln),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ua(se),Wt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function B1(t,e){switch(Wc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ua(se),le(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ca(e),null;case 13:if(Ba(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(fe),null;case 4:return le(),null;case 10:return Ua(e.type),null;case 22:case 23:return Ba(e),oo(),t!==null&&J(Ln),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ua(se),null;case 25:return null;default:return null}}function e0(t,e){switch(Wc(e),e.tag){case 3:Ua(se),le();break;case 26:case 27:case 5:ca(e);break;case 4:le();break;case 13:Ba(e);break;case 19:J(fe);break;case 10:Ua(e.type);break;case 22:case 23:Ba(e),oo(),t!==null&&J(Ln);break;case 24:Ua(se)}}function Ni(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var u=a.create,f=a.inst;n=u(),f.destroy=n}a=a.next}while(a!==i)}}catch(h){qt(e,e.return,h)}}function cn(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&t)===t){var f=n.inst,h=f.destroy;if(h!==void 0){f.destroy=void 0,i=e;var v=a,_=h;try{_()}catch(N){qt(i,v,N)}}}n=n.next}while(n!==u)}}catch(N){qt(e,e.return,N)}}function a0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Yd(e,a)}catch(n){qt(t,t.return,n)}}}function n0(t,e,a){a.props=kn(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){qt(t,e,n)}}function Ui(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){qt(t,e,i)}}function Sa(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){qt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){qt(t,e,i)}else a.current=null}function l0(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break t;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){qt(t,t.return,i)}}function Lo(t,e,a){try{var n=t.stateNode;lx(n,t.type,a,e),n[Oe]=e}catch(i){qt(t,t.return,i)}}function i0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gn(t.type)||t.tag===4}function Vo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||i0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ko(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=br));else if(n!==4&&(n===27&&gn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(ko(t,e,a),t=t.sibling;t!==null;)ko(t,e,a),t=t.sibling}function or(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&gn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(or(t,e,a),t=t.sibling;t!==null;)or(t,e,a),t=t.sibling}function u0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Ee(e,n,a),e[Te]=t,e[Oe]=a}catch(u){qt(t,t.return,u)}}var ka=!1,ee=!1,qo=!1,r0=typeof WeakSet=="function"?WeakSet:Set,me=null;function L1(t,e){if(t=t.containerInfo,fs=Cr,t=yd(t),Lc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,u=n.focusNode;n=n.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var f=0,h=-1,v=-1,_=0,N=0,k=t,z=null;e:for(;;){for(var D;k!==a||i!==0&&k.nodeType!==3||(h=f+i),k!==u||n!==0&&k.nodeType!==3||(v=f+n),k.nodeType===3&&(f+=k.nodeValue.length),(D=k.firstChild)!==null;)z=k,k=D;for(;;){if(k===t)break e;if(z===a&&++_===i&&(h=f),z===u&&++N===n&&(v=f),(D=k.nextSibling)!==null)break;k=z,z=k.parentNode}k=D}a=h===-1||v===-1?null:{start:h,end:v}}else a=null}a=a||{start:0,end:0}}else a=null;for(ds={focusedElem:t,selectionRange:a},Cr=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){switch(e=me,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,i=u.memoizedProps,u=u.memoizedState,n=a.stateNode;try{var ht=kn(a.type,i,a.elementType===a.type);t=n.getSnapshotBeforeUpdate(ht,u),n.__reactInternalSnapshotBeforeUpdate=t}catch(ft){qt(a,a.return,ft)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)ms(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ms(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function c0(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:on(t,a),n&4&&Ni(5,a);break;case 1:if(on(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(f){qt(a,a.return,f)}else{var i=kn(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(f){qt(a,a.return,f)}}n&64&&a0(a),n&512&&Ui(a,a.return);break;case 3:if(on(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Yd(t,e)}catch(f){qt(a,a.return,f)}}break;case 27:e===null&&n&4&&u0(a);case 26:case 5:on(t,a),e===null&&n&4&&l0(a),n&512&&Ui(a,a.return);break;case 12:on(t,a);break;case 13:on(t,a),n&4&&f0(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Z1.bind(null,a),fx(t,a))));break;case 22:if(n=a.memoizedState!==null||ka,!n){e=e!==null&&e.memoizedState!==null||ee,i=ka;var u=ee;ka=n,(ee=e)&&!u?sn(t,a,(a.subtreeFlags&8772)!==0):on(t,a),ka=i,ee=u}break;case 30:break;default:on(t,a)}}function o0(t){var e=t.alternate;e!==null&&(t.alternate=null,o0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Zt=null,Ue=!1;function qa(t,e,a){for(a=a.child;a!==null;)s0(t,e,a),a=a.sibling}function s0(t,e,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 26:ee||Sa(a,e),qa(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ee||Sa(a,e);var n=Zt,i=Ue;gn(a.type)&&(Zt=a.stateNode,Ue=!1),qa(t,e,a),Xi(a.stateNode),Zt=n,Ue=i;break;case 5:ee||Sa(a,e);case 6:if(n=Zt,i=Ue,Zt=null,qa(t,e,a),Zt=n,Ue=i,Zt!==null)if(Ue)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(u){qt(a,e,u)}else try{Zt.removeChild(a.stateNode)}catch(u){qt(a,e,u)}break;case 18:Zt!==null&&(Ue?(t=Zt,I0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ii(t)):I0(Zt,a.stateNode));break;case 4:n=Zt,i=Ue,Zt=a.stateNode.containerInfo,Ue=!0,qa(t,e,a),Zt=n,Ue=i;break;case 0:case 11:case 14:case 15:ee||cn(2,a,e),ee||cn(4,a,e),qa(t,e,a);break;case 1:ee||(Sa(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&n0(a,e,n)),qa(t,e,a);break;case 21:qa(t,e,a);break;case 22:ee=(n=ee)||a.memoizedState!==null,qa(t,e,a),ee=n;break;default:qa(t,e,a)}}function f0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ii(t)}catch(a){qt(e,e.return,a)}}function V1(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new r0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new r0),e;default:throw Error(o(435,t.tag))}}function Go(t,e){var a=V1(t);e.forEach(function(n){var i=K1.bind(null,t,n);a.has(n)||(a.add(n),n.then(i,i))})}function ke(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],u=t,f=e,h=f;t:for(;h!==null;){switch(h.tag){case 27:if(gn(h.type)){Zt=h.stateNode,Ue=!1;break t}break;case 5:Zt=h.stateNode,Ue=!1;break t;case 3:case 4:Zt=h.stateNode.containerInfo,Ue=!0;break t}h=h.return}if(Zt===null)throw Error(o(160));s0(u,f,i),Zt=null,Ue=!1,u=i.alternate,u!==null&&(u.return=null),i.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)d0(e,t),e=e.sibling}var sa=null;function d0(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ke(e,t),qe(t),n&4&&(cn(3,t,t.return),Ni(3,t),cn(5,t,t.return));break;case 1:ke(e,t),qe(t),n&512&&(ee||a===null||Sa(a,a.return)),n&64&&ka&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=sa;if(ke(e,t),qe(t),n&512&&(ee||a===null||Sa(a,a.return)),n&4){var u=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){t:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;e:switch(n){case"title":u=i.getElementsByTagName("title")[0],(!u||u[ii]||u[Te]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=i.createElement(n),i.head.insertBefore(u,i.querySelector("head > title"))),Ee(u,n,a),u[Te]=t,he(u),n=u;break t;case"link":var f=up("link","href",i).get(n+(a.href||""));if(f){for(var h=0;h<f.length;h++)if(u=f[h],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(h,1);break e}}u=i.createElement(n),Ee(u,n,a),i.head.appendChild(u);break;case"meta":if(f=up("meta","content",i).get(n+(a.content||""))){for(h=0;h<f.length;h++)if(u=f[h],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(h,1);break e}}u=i.createElement(n),Ee(u,n,a),i.head.appendChild(u);break;default:throw Error(o(468,n))}u[Te]=t,he(u),n=u}t.stateNode=n}else rp(i,t.type,t.stateNode);else t.stateNode=ip(i,n,t.memoizedProps);else u!==n?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,n===null?rp(i,t.type,t.stateNode):ip(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Lo(t,t.memoizedProps,a.memoizedProps)}break;case 27:ke(e,t),qe(t),n&512&&(ee||a===null||Sa(a,a.return)),a!==null&&n&4&&Lo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ke(e,t),qe(t),n&512&&(ee||a===null||Sa(a,a.return)),t.flags&32){i=t.stateNode;try{ul(i,"")}catch(D){qt(t,t.return,D)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Lo(t,i,a!==null?a.memoizedProps:i)),n&1024&&(qo=!0);break;case 6:if(ke(e,t),qe(t),n&4){if(t.stateNode===null)throw Error(o(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(D){qt(t,t.return,D)}}break;case 3:if(Ar=null,i=sa,sa=Er(e.containerInfo),ke(e,t),sa=i,qe(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ii(e.containerInfo)}catch(D){qt(t,t.return,D)}qo&&(qo=!1,h0(t));break;case 4:n=sa,sa=Er(t.stateNode.containerInfo),ke(e,t),qe(t),sa=n;break;case 12:ke(e,t),qe(t);break;case 13:ke(e,t),qe(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ko=We()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Go(t,n)));break;case 22:i=t.memoizedState!==null;var v=a!==null&&a.memoizedState!==null,_=ka,N=ee;if(ka=_||i,ee=N||v,ke(e,t),ee=N,ka=_,qe(t),n&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||v||ka||ee||qn(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){v=a=e;try{if(u=v.stateNode,i)f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{h=v.stateNode;var k=v.memoizedProps.style,z=k!=null&&k.hasOwnProperty("display")?k.display:null;h.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(D){qt(v,v.return,D)}}}else if(e.tag===6){if(a===null){v=e;try{v.stateNode.nodeValue=i?"":v.memoizedProps}catch(D){qt(v,v.return,D)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Go(t,a))));break;case 19:ke(e,t),qe(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Go(t,n)));break;case 30:break;case 21:break;default:ke(e,t),qe(t)}}function qe(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(i0(n)){a=n;break}n=n.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var i=a.stateNode,u=Vo(t);or(t,u,i);break;case 5:var f=a.stateNode;a.flags&32&&(ul(f,""),a.flags&=-33);var h=Vo(t);or(t,h,f);break;case 3:case 4:var v=a.stateNode.containerInfo,_=Vo(t);ko(t,_,v);break;default:throw Error(o(161))}}catch(N){qt(t,t.return,N)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function h0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;h0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function on(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)c0(t,e.alternate,e),e=e.sibling}function qn(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:cn(4,e,e.return),qn(e);break;case 1:Sa(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&n0(e,e.return,a),qn(e);break;case 27:Xi(e.stateNode);case 26:case 5:Sa(e,e.return),qn(e);break;case 22:e.memoizedState===null&&qn(e);break;case 30:qn(e);break;default:qn(e)}t=t.sibling}}function sn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,u=e,f=u.flags;switch(u.tag){case 0:case 11:case 15:sn(i,u,a),Ni(4,u);break;case 1:if(sn(i,u,a),n=u,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){qt(n,n.return,_)}if(n=u,i=n.updateQueue,i!==null){var h=n.stateNode;try{var v=i.shared.hiddenCallbacks;if(v!==null)for(i.shared.hiddenCallbacks=null,i=0;i<v.length;i++)Gd(v[i],h)}catch(_){qt(n,n.return,_)}}a&&f&64&&a0(u),Ui(u,u.return);break;case 27:u0(u);case 26:case 5:sn(i,u,a),a&&n===null&&f&4&&l0(u),Ui(u,u.return);break;case 12:sn(i,u,a);break;case 13:sn(i,u,a),a&&f&4&&f0(i,u);break;case 22:u.memoizedState===null&&sn(i,u,a),Ui(u,u.return);break;case 30:break;default:sn(i,u,a)}e=e.sibling}}function Yo(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&bi(a))}function Xo(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bi(t))}function Ea(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)p0(t,e,a,n),e=e.sibling}function p0(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Ea(t,e,a,n),i&2048&&Ni(9,e);break;case 1:Ea(t,e,a,n);break;case 3:Ea(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&bi(t)));break;case 12:if(i&2048){Ea(t,e,a,n),t=e.stateNode;try{var u=e.memoizedProps,f=u.id,h=u.onPostCommit;typeof h=="function"&&h(f,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){qt(e,e.return,v)}}else Ea(t,e,a,n);break;case 13:Ea(t,e,a,n);break;case 23:break;case 22:u=e.stateNode,f=e.alternate,e.memoizedState!==null?u._visibility&2?Ea(t,e,a,n):Hi(t,e):u._visibility&2?Ea(t,e,a,n):(u._visibility|=2,wl(t,e,a,n,(e.subtreeFlags&10256)!==0)),i&2048&&Yo(f,e);break;case 24:Ea(t,e,a,n),i&2048&&Xo(e.alternate,e);break;default:Ea(t,e,a,n)}}function wl(t,e,a,n,i){for(i=i&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,f=e,h=a,v=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:wl(u,f,h,v,i),Ni(8,f);break;case 23:break;case 22:var N=f.stateNode;f.memoizedState!==null?N._visibility&2?wl(u,f,h,v,i):Hi(u,f):(N._visibility|=2,wl(u,f,h,v,i)),i&&_&2048&&Yo(f.alternate,f);break;case 24:wl(u,f,h,v,i),i&&_&2048&&Xo(f.alternate,f);break;default:wl(u,f,h,v,i)}e=e.sibling}}function Hi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:Hi(a,n),i&2048&&Yo(n.alternate,n);break;case 24:Hi(a,n),i&2048&&Xo(n.alternate,n);break;default:Hi(a,n)}e=e.sibling}}var Bi=8192;function _l(t){if(t.subtreeFlags&Bi)for(t=t.child;t!==null;)m0(t),t=t.sibling}function m0(t){switch(t.tag){case 26:_l(t),t.flags&Bi&&t.memoizedState!==null&&Ax(sa,t.memoizedState,t.memoizedProps);break;case 5:_l(t);break;case 3:case 4:var e=sa;sa=Er(t.stateNode.containerInfo),_l(t),sa=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Bi,Bi=16777216,_l(t),Bi=e):_l(t));break;default:_l(t)}}function g0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Li(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];me=n,y0(n,t)}g0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x0(t),t=t.sibling}function x0(t){switch(t.tag){case 0:case 11:case 15:Li(t),t.flags&2048&&cn(9,t,t.return);break;case 3:Li(t);break;case 12:Li(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,sr(t)):Li(t);break;default:Li(t)}}function sr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];me=n,y0(n,t)}g0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:cn(8,e,e.return),sr(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,sr(e));break;default:sr(e)}t=t.sibling}}function y0(t,e){for(;me!==null;){var a=me;switch(a.tag){case 0:case 11:case 15:cn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:bi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,me=n;else t:for(a=t;me!==null;){n=me;var i=n.sibling,u=n.return;if(o0(n),n===a){me=null;break t}if(i!==null){i.return=u,me=i;break t}me=u}}}var k1={getCacheForType:function(t){var e=Ae(se),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},q1=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Yt=null,wt=null,zt=0,Bt=0,Ge=null,fn=!1,Cl=!1,$o=!1,Ga=0,Pt=0,dn=0,Gn=0,Qo=0,na=0,Rl=0,Vi=null,He=null,Zo=!1,Ko=0,fr=1/0,dr=null,hn=null,Se=0,pn=null,zl=null,Dl=0,Wo=0,Fo=null,v0=null,ki=0,Jo=null;function Ye(){if((Ht&2)!==0&&zt!==0)return zt&-zt;if(O.T!==null){var t=xl;return t!==0?t:ls()}return Uf()}function b0(){na===0&&(na=(zt&536870912)===0||Nt?jf():536870912);var t=aa.current;return t!==null&&(t.flags|=32),na}function Xe(t,e,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(jl(t,0),mn(t,zt,na,!1)),li(t,a),((Ht&2)===0||t!==Yt)&&(t===Yt&&((Ht&2)===0&&(Gn|=a),Pt===4&&mn(t,zt,na,!1)),Ta(t))}function S0(t,e,a){if((Ht&6)!==0)throw Error(o(327));var n=!a&&(e&124)===0&&(e&t.expiredLanes)===0||_n(t,e),i=n?X1(t,e):ts(t,e,!0),u=n;do{if(i===0){Cl&&!n&&mn(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!G1(a)){i=ts(t,e,!1),u=!1;continue}if(i===2){if(u=e,t.errorRecoveryDisabledLanes&u)var f=0;else f=t.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;t:{var h=t;i=Vi;var v=h.current.memoizedState.isDehydrated;if(v&&(jl(h,f).flags|=256),f=ts(h,f,!1),f!==2){if($o&&!v){h.errorRecoveryDisabledLanes|=u,Gn|=u,i=4;break t}u=He,He=i,u!==null&&(He===null?He=u:He.push.apply(He,u))}i=f}if(u=!1,i!==2)continue}}if(i===1){jl(t,0),mn(t,e,0,!0);break}t:{switch(n=t,u=i,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:mn(n,e,na,!fn);break t;case 2:He=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(i=Ko+300-We(),10<i)){if(mn(n,e,na,!fn),wn(n,0,!0)!==0)break t;n.timeoutHandle=F0(E0.bind(null,n,a,He,dr,Zo,e,na,Gn,Rl,fn,u,2,-0,0),i);break t}E0(n,a,He,dr,Zo,e,na,Gn,Rl,fn,u,0,-0,0)}}break}while(!0);Ta(t)}function E0(t,e,a,n,i,u,f,h,v,_,N,k,z,D){if(t.timeoutHandle=-1,k=e.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(Zi={stylesheets:null,count:0,unsuspend:Tx},m0(e),k=wx(),k!==null)){t.cancelPendingCommit=k(z0.bind(null,t,e,u,a,n,i,f,h,v,N,1,z,D)),mn(t,u,f,!_);return}z0(t,e,u,a,n,i,f,h,v)}function G1(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],u=i.getSnapshot;i=i.value;try{if(!Le(u(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mn(t,e,a,n){e&=~Qo,e&=~Gn,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var u=31-Gt(i),f=1<<u;n[u]=-1,i&=~f}a!==0&&Mf(t,a,e)}function hr(){return(Ht&6)===0?(qi(0),!1):!0}function Io(){if(wt!==null){if(Bt===0)var t=wt.return;else t=wt,Na=Hn=null,mo(t),Tl=null,ji=0,t=wt;for(;t!==null;)e0(t.alternate,t),t=t.return;wt=null}}function jl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Io(),Yt=t,wt=a=ja(t.current,null),zt=e,Bt=0,Ge=null,fn=!1,Cl=_n(t,e),$o=!1,Rl=na=Qo=Gn=dn=Pt=0,He=Vi=null,Zo=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-Gt(n),u=1<<i;e|=t[i],n&=~u}return Ga=e,Uu(),a}function T0(t,e){Et=null,O.H=tr,e===Ei||e===Xu?(e=kd(),Bt=3):e===Bd?(e=kd(),Bt=4):Bt=e===qh?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ge=e,wt===null&&(Pt=1,ir(t,Ie(e,t.current)))}function A0(){var t=O.H;return O.H=tr,t===null?tr:t}function w0(){var t=O.A;return O.A=k1,t}function Po(){Pt=4,fn||(zt&4194048)!==zt&&aa.current!==null||(Cl=!0),(dn&134217727)===0&&(Gn&134217727)===0||Yt===null||mn(Yt,zt,na,!1)}function ts(t,e,a){var n=Ht;Ht|=2;var i=A0(),u=w0();(Yt!==t||zt!==e)&&(dr=null,jl(t,e)),e=!1;var f=Pt;t:do try{if(Bt!==0&&wt!==null){var h=wt,v=Ge;switch(Bt){case 8:Io(),f=6;break t;case 3:case 2:case 9:case 6:aa.current===null&&(e=!0);var _=Bt;if(Bt=0,Ge=null,Ol(t,h,v,_),a&&Cl){f=0;break t}break;default:_=Bt,Bt=0,Ge=null,Ol(t,h,v,_)}}Y1(),f=Pt;break}catch(N){T0(t,N)}while(!0);return e&&t.shellSuspendCounter++,Na=Hn=null,Ht=n,O.H=i,O.A=u,wt===null&&(Yt=null,zt=0,Uu()),f}function Y1(){for(;wt!==null;)_0(wt)}function X1(t,e){var a=Ht;Ht|=2;var n=A0(),i=w0();Yt!==t||zt!==e?(dr=null,fr=We()+500,jl(t,e)):Cl=_n(t,e);t:do try{if(Bt!==0&&wt!==null){e=wt;var u=Ge;e:switch(Bt){case 1:Bt=0,Ge=null,Ol(t,e,u,1);break;case 2:case 9:if(Ld(u)){Bt=0,Ge=null,C0(e);break}e=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Ta(t)},u.then(e,e);break t;case 3:Bt=7;break t;case 4:Bt=5;break t;case 7:Ld(u)?(Bt=0,Ge=null,C0(e)):(Bt=0,Ge=null,Ol(t,e,u,7));break;case 5:var f=null;switch(wt.tag){case 26:f=wt.memoizedState;case 5:case 27:var h=wt;if(!f||cp(f)){Bt=0,Ge=null;var v=h.sibling;if(v!==null)wt=v;else{var _=h.return;_!==null?(wt=_,pr(_)):wt=null}break e}}Bt=0,Ge=null,Ol(t,e,u,5);break;case 6:Bt=0,Ge=null,Ol(t,e,u,6);break;case 8:Io(),Pt=6;break t;default:throw Error(o(462))}}$1();break}catch(N){T0(t,N)}while(!0);return Na=Hn=null,O.H=n,O.A=i,Ht=a,wt!==null?0:(Yt=null,zt=0,Uu(),Pt)}function $1(){for(;wt!==null&&!Eu();)_0(wt)}function _0(t){var e=Ph(t.alternate,t,Ga);t.memoizedProps=t.pendingProps,e===null?pr(t):wt=e}function C0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Zh(a,e,e.pendingProps,e.type,void 0,zt);break;case 11:e=Zh(a,e,e.pendingProps,e.type.render,e.ref,zt);break;case 5:mo(e);default:e0(a,e),e=wt=Rd(e,Ga),e=Ph(a,e,Ga)}t.memoizedProps=t.pendingProps,e===null?pr(t):wt=e}function Ol(t,e,a,n){Na=Hn=null,mo(e),Tl=null,ji=0;var i=e.return;try{if(N1(t,i,e,a,zt)){Pt=1,ir(t,Ie(a,t.current)),wt=null;return}}catch(u){if(i!==null)throw wt=i,u;Pt=1,ir(t,Ie(a,t.current)),wt=null;return}e.flags&32768?(Nt||n===1?t=!0:Cl||(zt&536870912)!==0?t=!1:(fn=t=!0,(n===2||n===9||n===3||n===6)&&(n=aa.current,n!==null&&n.tag===13&&(n.flags|=16384))),R0(e,t)):pr(e)}function pr(t){var e=t;do{if((e.flags&32768)!==0){R0(e,fn);return}t=e.return;var a=H1(e.alternate,e,Ga);if(a!==null){wt=a;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Pt===0&&(Pt=5)}function R0(t,e){do{var a=B1(t.alternate,t);if(a!==null){a.flags&=32767,wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){wt=t;return}wt=t=a}while(t!==null);Pt=6,wt=null}function z0(t,e,a,n,i,u,f,h,v){t.cancelPendingCommit=null;do mr();while(Se!==0);if((Ht&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=Yc,Tg(t,a,u,f,h,v),t===Yt&&(wt=Yt=null,zt=0),zl=e,pn=t,Dl=a,Wo=u,Fo=i,v0=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,W1(C,function(){return N0(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=O.T,O.T=null,i=K.p,K.p=2,f=Ht,Ht|=4;try{L1(t,e,a)}finally{Ht=f,K.p=i,O.T=n}}Se=1,D0(),j0(),O0()}}function D0(){if(Se===1){Se=0;var t=pn,e=zl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var n=K.p;K.p=2;var i=Ht;Ht|=4;try{d0(e,t);var u=ds,f=yd(t.containerInfo),h=u.focusedElem,v=u.selectionRange;if(f!==h&&h&&h.ownerDocument&&xd(h.ownerDocument.documentElement,h)){if(v!==null&&Lc(h)){var _=v.start,N=v.end;if(N===void 0&&(N=_),"selectionStart"in h)h.selectionStart=_,h.selectionEnd=Math.min(N,h.value.length);else{var k=h.ownerDocument||document,z=k&&k.defaultView||window;if(z.getSelection){var D=z.getSelection(),ht=h.textContent.length,ft=Math.min(v.start,ht),kt=v.end===void 0?ft:Math.min(v.end,ht);!D.extend&&ft>kt&&(f=kt,kt=ft,ft=f);var A=gd(h,ft),T=gd(h,kt);if(A&&T&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==T.node||D.focusOffset!==T.offset)){var w=k.createRange();w.setStart(A.node,A.offset),D.removeAllRanges(),ft>kt?(D.addRange(w),D.extend(T.node,T.offset)):(w.setEnd(T.node,T.offset),D.addRange(w))}}}}for(k=[],D=h;D=D.parentNode;)D.nodeType===1&&k.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<k.length;h++){var B=k[h];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}Cr=!!fs,ds=fs=null}finally{Ht=i,K.p=n,O.T=a}}t.current=e,Se=2}}function j0(){if(Se===2){Se=0;var t=pn,e=zl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var n=K.p;K.p=2;var i=Ht;Ht|=4;try{c0(t,e.alternate,e)}finally{Ht=i,K.p=n,O.T=a}}Se=3}}function O0(){if(Se===4||Se===3){Se=0,hc();var t=pn,e=zl,a=Dl,n=v0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Se=5:(Se=0,zl=pn=null,M0(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(hn=null),xc(a),e=e.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(lt,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=O.T,i=K.p,K.p=2,O.T=null;try{for(var u=t.onRecoverableError,f=0;f<n.length;f++){var h=n[f];u(h.value,{componentStack:h.stack})}}finally{O.T=e,K.p=i}}(Dl&3)!==0&&mr(),Ta(t),i=t.pendingLanes,(a&4194090)!==0&&(i&42)!==0?t===Jo?ki++:(ki=0,Jo=t):ki=0,qi(0)}}function M0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,bi(e)))}function mr(t){return D0(),j0(),O0(),N0()}function N0(){if(Se!==5)return!1;var t=pn,e=Wo;Wo=0;var a=xc(Dl),n=O.T,i=K.p;try{K.p=32>a?32:a,O.T=null,a=Fo,Fo=null;var u=pn,f=Dl;if(Se=0,zl=pn=null,Dl=0,(Ht&6)!==0)throw Error(o(331));var h=Ht;if(Ht|=4,x0(u.current),p0(u,u.current,f,a),Ht=h,qi(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(lt,u)}catch{}return!0}finally{K.p=i,O.T=n,M0(t,e)}}function U0(t,e,a){e=Ie(a,e),e=zo(t.stateNode,e,2),t=nn(t,e,2),t!==null&&(li(t,2),Ta(t))}function qt(t,e,a){if(t.tag===3)U0(t,t,a);else for(;e!==null;){if(e.tag===3){U0(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(hn===null||!hn.has(n))){t=Ie(a,t),a=Vh(2),n=nn(e,a,2),n!==null&&(kh(a,n,e,t),li(n,2),Ta(n));break}}e=e.return}}function es(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new q1;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||($o=!0,i.add(a),t=Q1.bind(null,t,e,a),e.then(t,t))}function Q1(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(zt&a)===a&&(Pt===4||Pt===3&&(zt&62914560)===zt&&300>We()-Ko?(Ht&2)===0&&jl(t,0):Qo|=a,Rl===zt&&(Rl=0)),Ta(t)}function H0(t,e){e===0&&(e=Of()),t=hl(t,e),t!==null&&(li(t,e),Ta(t))}function Z1(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),H0(t,a)}function K1(t,e){var a=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(e),H0(t,a)}function W1(t,e){return ai(t,e)}var gr=null,Ml=null,as=!1,xr=!1,ns=!1,Yn=0;function Ta(t){t!==Ml&&t.next===null&&(Ml===null?gr=Ml=t:Ml=Ml.next=t),xr=!0,as||(as=!0,J1())}function qi(t,e){if(!ns&&xr){ns=!0;do for(var a=!1,n=gr;n!==null;){if(t!==0){var i=n.pendingLanes;if(i===0)var u=0;else{var f=n.suspendedLanes,h=n.pingedLanes;u=(1<<31-Gt(42|t)+1)-1,u&=i&~(f&~h),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,k0(n,u))}else u=zt,u=wn(n,n===Yt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(u&3)===0||_n(n,u)||(a=!0,k0(n,u));n=n.next}while(a);ns=!1}}function F1(){B0()}function B0(){xr=as=!1;var t=0;Yn!==0&&(ix()&&(t=Yn),Yn=0);for(var e=We(),a=null,n=gr;n!==null;){var i=n.next,u=L0(n,e);u===0?(n.next=null,a===null?gr=i:a.next=i,i===null&&(Ml=a)):(a=n,(t!==0||(u&3)!==0)&&(xr=!0)),n=i}qi(t)}function L0(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var f=31-Gt(u),h=1<<f,v=i[f];v===-1?((h&a)===0||(h&n)!==0)&&(i[f]=Tu(h,e)):v<=e&&(t.expiredLanes|=h),u&=~h}if(e=Yt,a=zt,a=wn(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&Jn(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||_n(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&Jn(n),xc(a)){case 2:case 8:a=E;break;case 32:a=C;break;case 268435456:a=tt;break;default:a=C}return n=V0.bind(null,t),a=ai(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&Jn(n),t.callbackPriority=2,t.callbackNode=null,2}function V0(t,e){if(Se!==0&&Se!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(mr()&&t.callbackNode!==a)return null;var n=zt;return n=wn(t,t===Yt?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(S0(t,n,e),L0(t,We()),t.callbackNode!=null&&t.callbackNode===a?V0.bind(null,t):null)}function k0(t,e){if(mr())return null;S0(t,e,!0)}function J1(){rx(function(){(Ht&6)!==0?ai(ni,F1):B0()})}function ls(){return Yn===0&&(Yn=jf()),Yn}function q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ru(""+t)}function G0(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function I1(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var u=q0((i[Oe]||null).action),f=n.submitter;f&&(e=(e=f[Oe]||null)?q0(e.formAction):f.getAttribute("formAction"),e!==null&&(u=e,f=null));var h=new Ou("action","action",null,n,i);t.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Yn!==0){var v=f?G0(i,f):new FormData(i);Ao(a,{pending:!0,data:v,method:i.method,action:u},null,v)}}else typeof u=="function"&&(h.preventDefault(),v=f?G0(i,f):new FormData(i),Ao(a,{pending:!0,data:v,method:i.method,action:u},u,v))},currentTarget:i}]})}}for(var is=0;is<Gc.length;is++){var us=Gc[is],P1=us.toLowerCase(),tx=us[0].toUpperCase()+us.slice(1);oa(P1,"on"+tx)}oa(Sd,"onAnimationEnd"),oa(Ed,"onAnimationIteration"),oa(Td,"onAnimationStart"),oa("dblclick","onDoubleClick"),oa("focusin","onFocus"),oa("focusout","onBlur"),oa(x1,"onTransitionRun"),oa(y1,"onTransitionStart"),oa(v1,"onTransitionCancel"),oa(Ad,"onTransitionEnd"),nl("onMouseEnter",["mouseout","mouseover"]),nl("onMouseLeave",["mouseout","mouseover"]),nl("onPointerEnter",["pointerout","pointerover"]),nl("onPointerLeave",["pointerout","pointerover"]),Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gi));function Y0(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;t:{var u=void 0;if(e)for(var f=n.length-1;0<=f;f--){var h=n[f],v=h.instance,_=h.currentTarget;if(h=h.listener,v!==u&&i.isPropagationStopped())break t;u=h,i.currentTarget=_;try{u(i)}catch(N){lr(N)}i.currentTarget=null,u=v}else for(f=0;f<n.length;f++){if(h=n[f],v=h.instance,_=h.currentTarget,h=h.listener,v!==u&&i.isPropagationStopped())break t;u=h,i.currentTarget=_;try{u(i)}catch(N){lr(N)}i.currentTarget=null,u=v}}}}function _t(t,e){var a=e[yc];a===void 0&&(a=e[yc]=new Set);var n=t+"__bubble";a.has(n)||(X0(e,t,2,!1),a.add(n))}function rs(t,e,a){var n=0;e&&(n|=4),X0(a,t,n,e)}var yr="_reactListening"+Math.random().toString(36).slice(2);function cs(t){if(!t[yr]){t[yr]=!0,Bf.forEach(function(a){a!=="selectionchange"&&(ex.has(a)||rs(a,!1,t),rs(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yr]||(e[yr]=!0,rs("selectionchange",!1,e))}}function X0(t,e,a,n){switch(pp(e)){case 2:var i=Rx;break;case 8:i=zx;break;default:i=Es}a=i.bind(null,e,a,t),i=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function os(t,e,a,n,i){var u=n;if((e&1)===0&&(e&2)===0&&n!==null)t:for(;;){if(n===null)return;var f=n.tag;if(f===3||f===4){var h=n.stateNode.containerInfo;if(h===i)break;if(f===4)for(f=n.return;f!==null;){var v=f.tag;if((v===3||v===4)&&f.stateNode.containerInfo===i)return;f=f.return}for(;h!==null;){if(f=tl(h),f===null)return;if(v=f.tag,v===5||v===6||v===26||v===27){n=u=f;continue t}h=h.parentNode}}n=n.return}Jf(function(){var _=u,N=Cc(a),k=[];t:{var z=wd.get(t);if(z!==void 0){var D=Ou,ht=t;switch(t){case"keypress":if(Du(a)===0)break t;case"keydown":case"keyup":D=Wg;break;case"focusin":ht="focus",D=Mc;break;case"focusout":ht="blur",D=Mc;break;case"beforeblur":case"afterblur":D=Mc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Ig;break;case Sd:case Ed:case Td:D=kg;break;case Ad:D=t1;break;case"scroll":case"scrollend":D=Ug;break;case"wheel":D=a1;break;case"copy":case"cut":case"paste":D=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ad;break;case"toggle":case"beforetoggle":D=l1}var ft=(e&4)!==0,kt=!ft&&(t==="scroll"||t==="scrollend"),A=ft?z!==null?z+"Capture":null:z;ft=[];for(var T=_,w;T!==null;){var B=T;if(w=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||w===null||A===null||(B=ri(T,A),B!=null&&ft.push(Yi(T,B,w))),kt)break;T=T.return}0<ft.length&&(z=new D(z,ht,null,a,N),k.push({event:z,listeners:ft}))}}if((e&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",D=t==="mouseout"||t==="pointerout",z&&a!==_c&&(ht=a.relatedTarget||a.fromElement)&&(tl(ht)||ht[Pn]))break t;if((D||z)&&(z=N.window===N?N:(z=N.ownerDocument)?z.defaultView||z.parentWindow:window,D?(ht=a.relatedTarget||a.toElement,D=_,ht=ht?tl(ht):null,ht!==null&&(kt=d(ht),ft=ht.tag,ht!==kt||ft!==5&&ft!==27&&ft!==6)&&(ht=null)):(D=null,ht=_),D!==ht)){if(ft=td,B="onMouseLeave",A="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(ft=ad,B="onPointerLeave",A="onPointerEnter",T="pointer"),kt=D==null?z:ui(D),w=ht==null?z:ui(ht),z=new ft(B,T+"leave",D,a,N),z.target=kt,z.relatedTarget=w,B=null,tl(N)===_&&(ft=new ft(A,T+"enter",ht,a,N),ft.target=w,ft.relatedTarget=kt,B=ft),kt=B,D&&ht)e:{for(ft=D,A=ht,T=0,w=ft;w;w=Nl(w))T++;for(w=0,B=A;B;B=Nl(B))w++;for(;0<T-w;)ft=Nl(ft),T--;for(;0<w-T;)A=Nl(A),w--;for(;T--;){if(ft===A||A!==null&&ft===A.alternate)break e;ft=Nl(ft),A=Nl(A)}ft=null}else ft=null;D!==null&&$0(k,z,D,ft,!1),ht!==null&&kt!==null&&$0(k,kt,ht,ft,!0)}}t:{if(z=_?ui(_):window,D=z.nodeName&&z.nodeName.toLowerCase(),D==="select"||D==="input"&&z.type==="file")var nt=sd;else if(cd(z))if(fd)nt=p1;else{nt=d1;var At=f1}else D=z.nodeName,!D||D.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?_&&wc(_.elementType)&&(nt=sd):nt=h1;if(nt&&(nt=nt(t,_))){od(k,nt,a,N);break t}At&&At(t,z,_),t==="focusout"&&_&&z.type==="number"&&_.memoizedProps.value!=null&&Ac(z,"number",z.value)}switch(At=_?ui(_):window,t){case"focusin":(cd(At)||At.contentEditable==="true")&&(sl=At,Vc=_,mi=null);break;case"focusout":mi=Vc=sl=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,vd(k,a,N);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":vd(k,a,N)}var rt;if(Uc)t:{switch(t){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else ol?ud(t,a)&&(dt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(nd&&a.locale!=="ko"&&(ol||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&ol&&(rt=If()):(Pa=N,Dc="value"in Pa?Pa.value:Pa.textContent,ol=!0)),At=vr(_,dt),0<At.length&&(dt=new ed(dt,t,null,a,N),k.push({event:dt,listeners:At}),rt?dt.data=rt:(rt=rd(a),rt!==null&&(dt.data=rt)))),(rt=u1?r1(t,a):c1(t,a))&&(dt=vr(_,"onBeforeInput"),0<dt.length&&(At=new ed("onBeforeInput","beforeinput",null,a,N),k.push({event:At,listeners:dt}),At.data=rt)),I1(k,t,_,a,N)}Y0(k,e)})}function Yi(t,e,a){return{instance:t,listener:e,currentTarget:a}}function vr(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,u=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||u===null||(i=ri(t,a),i!=null&&n.unshift(Yi(t,i,u)),i=ri(t,e),i!=null&&n.push(Yi(t,i,u))),t.tag===3)return n;t=t.return}return[]}function Nl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $0(t,e,a,n,i){for(var u=e._reactName,f=[];a!==null&&a!==n;){var h=a,v=h.alternate,_=h.stateNode;if(h=h.tag,v!==null&&v===n)break;h!==5&&h!==26&&h!==27||_===null||(v=_,i?(_=ri(a,u),_!=null&&f.unshift(Yi(a,_,v))):i||(_=ri(a,u),_!=null&&f.push(Yi(a,_,v)))),a=a.return}f.length!==0&&t.push({event:e,listeners:f})}var ax=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Q0(t){return(typeof t=="string"?t:""+t).replace(ax,`
`).replace(nx,"")}function Z0(t,e){return e=Q0(e),Q0(t)===e}function br(){}function Vt(t,e,a,n,i,u){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||ul(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&ul(t,""+n);break;case"className":wu(t,"class",n);break;case"tabIndex":wu(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":wu(t,a,n);break;case"style":Wf(t,n,u);break;case"data":if(e!=="object"){wu(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ru(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Vt(t,e,"name",i.name,i,null),Vt(t,e,"formEncType",i.formEncType,i,null),Vt(t,e,"formMethod",i.formMethod,i,null),Vt(t,e,"formTarget",i.formTarget,i,null)):(Vt(t,e,"encType",i.encType,i,null),Vt(t,e,"method",i.method,i,null),Vt(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=Ru(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=br);break;case"onScroll":n!=null&&_t("scroll",t);break;case"onScrollEnd":n!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=Ru(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":_t("beforetoggle",t),_t("toggle",t),Au(t,"popover",n);break;case"xlinkActuate":za(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":za(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":za(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":za(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":za(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":za(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":za(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Au(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mg.get(a)||a,Au(t,a,n))}}function ss(t,e,a,n,i,u){switch(a){case"style":Wf(t,n,u);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof n=="string"?ul(t,n):(typeof n=="number"||typeof n=="bigint")&&ul(t,""+n);break;case"onScroll":n!=null&&_t("scroll",t);break;case"onScrollEnd":n!=null&&_t("scrollend",t);break;case"onClick":n!=null&&(t.onclick=br);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),u=t[Oe]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,i),typeof n=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break t}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Au(t,a,n)}}}function Ee(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var n=!1,i=!1,u;for(u in a)if(a.hasOwnProperty(u)){var f=a[u];if(f!=null)switch(u){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Vt(t,e,u,f,a,null)}}i&&Vt(t,e,"srcSet",a.srcSet,a,null),n&&Vt(t,e,"src",a.src,a,null);return;case"input":_t("invalid",t);var h=u=f=i=null,v=null,_=null;for(n in a)if(a.hasOwnProperty(n)){var N=a[n];if(N!=null)switch(n){case"name":i=N;break;case"type":f=N;break;case"checked":v=N;break;case"defaultChecked":_=N;break;case"value":u=N;break;case"defaultValue":h=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:Vt(t,e,n,N,a,null)}}$f(t,u,h,v,_,f,i,!1),_u(t);return;case"select":_t("invalid",t),n=f=u=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":u=h;break;case"defaultValue":f=h;break;case"multiple":n=h;default:Vt(t,e,i,h,a,null)}e=u,a=f,t.multiple=!!n,e!=null?il(t,!!n,e,!1):a!=null&&il(t,!!n,a,!0);return;case"textarea":_t("invalid",t),u=i=n=null;for(f in a)if(a.hasOwnProperty(f)&&(h=a[f],h!=null))switch(f){case"value":n=h;break;case"defaultValue":i=h;break;case"children":u=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Vt(t,e,f,h,a,null)}Zf(t,n,i,u),_u(t);return;case"option":for(v in a)if(a.hasOwnProperty(v)&&(n=a[v],n!=null))switch(v){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Vt(t,e,v,n,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(n=0;n<Gi.length;n++)_t(Gi[n],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(n=a[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Vt(t,e,_,n,a,null)}return;default:if(wc(e)){for(N in a)a.hasOwnProperty(N)&&(n=a[N],n!==void 0&&ss(t,e,N,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Vt(t,e,h,n,a,null))}function lx(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,u=null,f=null,h=null,v=null,_=null,N=null;for(D in a){var k=a[D];if(a.hasOwnProperty(D)&&k!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=k;default:n.hasOwnProperty(D)||Vt(t,e,D,null,n,k)}}for(var z in n){var D=n[z];if(k=a[z],n.hasOwnProperty(z)&&(D!=null||k!=null))switch(z){case"type":u=D;break;case"name":i=D;break;case"checked":_=D;break;case"defaultChecked":N=D;break;case"value":f=D;break;case"defaultValue":h=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,e));break;default:D!==k&&Vt(t,e,z,D,n,k)}}Tc(t,f,h,v,_,N,u,i);return;case"select":D=f=h=z=null;for(u in a)if(v=a[u],a.hasOwnProperty(u)&&v!=null)switch(u){case"value":break;case"multiple":D=v;default:n.hasOwnProperty(u)||Vt(t,e,u,null,n,v)}for(i in n)if(u=n[i],v=a[i],n.hasOwnProperty(i)&&(u!=null||v!=null))switch(i){case"value":z=u;break;case"defaultValue":h=u;break;case"multiple":f=u;default:u!==v&&Vt(t,e,i,u,n,v)}e=h,a=f,n=D,z!=null?il(t,!!a,z,!1):!!n!=!!a&&(e!=null?il(t,!!a,e,!0):il(t,!!a,a?[]:"",!1));return;case"textarea":D=z=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Vt(t,e,h,null,n,i)}for(f in n)if(i=n[f],u=a[f],n.hasOwnProperty(f)&&(i!=null||u!=null))switch(f){case"value":z=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==u&&Vt(t,e,f,i,n,u)}Qf(t,z,D);return;case"option":for(var ht in a)if(z=a[ht],a.hasOwnProperty(ht)&&z!=null&&!n.hasOwnProperty(ht))switch(ht){case"selected":t.selected=!1;break;default:Vt(t,e,ht,null,n,z)}for(v in n)if(z=n[v],D=a[v],n.hasOwnProperty(v)&&z!==D&&(z!=null||D!=null))switch(v){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Vt(t,e,v,z,n,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!n.hasOwnProperty(ft)&&Vt(t,e,ft,null,n,z);for(_ in n)if(z=n[_],D=a[_],n.hasOwnProperty(_)&&z!==D&&(z!=null||D!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:Vt(t,e,_,z,n,D)}return;default:if(wc(e)){for(var kt in a)z=a[kt],a.hasOwnProperty(kt)&&z!==void 0&&!n.hasOwnProperty(kt)&&ss(t,e,kt,void 0,n,z);for(N in n)z=n[N],D=a[N],!n.hasOwnProperty(N)||z===D||z===void 0&&D===void 0||ss(t,e,N,z,n,D);return}}for(var A in a)z=a[A],a.hasOwnProperty(A)&&z!=null&&!n.hasOwnProperty(A)&&Vt(t,e,A,null,n,z);for(k in n)z=n[k],D=a[k],!n.hasOwnProperty(k)||z===D||z==null&&D==null||Vt(t,e,k,z,n,D)}var fs=null,ds=null;function Sr(t){return t.nodeType===9?t:t.ownerDocument}function K0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function hs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ps=null;function ix(){var t=window.event;return t&&t.type==="popstate"?t===ps?!1:(ps=t,!0):(ps=null,!1)}var F0=typeof setTimeout=="function"?setTimeout:void 0,ux=typeof clearTimeout=="function"?clearTimeout:void 0,J0=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof J0<"u"?function(t){return J0.resolve(null).then(t).catch(cx)}:F0;function cx(t){setTimeout(function(){throw t})}function gn(t){return t==="head"}function I0(t,e){var a=e,n=0,i=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<n&&8>n){a=n;var f=t.ownerDocument;if(a&1&&Xi(f.documentElement),a&2&&Xi(f.body),a&4)for(a=f.head,Xi(a),f=a.firstChild;f;){var h=f.nextSibling,v=f.nodeName;f[ii]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=h}}if(i===0){t.removeChild(u),Ii(e);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=u}while(a);Ii(e)}function ms(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ms(a),vc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ox(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[ii])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=fa(t.nextSibling),t===null)break}return null}function sx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fa(t.nextSibling),t===null))return null;return t}function gs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fx(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function fa(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var xs=null;function P0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function tp(t,e,a){switch(e=Sr(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Xi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vc(t)}var la=new Map,ep=new Set;function Er(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ya=K.d;K.d={f:dx,r:hx,D:px,C:mx,L:gx,m:xx,X:vx,S:yx,M:bx};function dx(){var t=Ya.f(),e=hr();return t||e}function hx(t){var e=el(t);e!==null&&e.tag===5&&e.type==="form"?Sh(e):Ya.r(t)}var Ul=typeof document>"u"?null:document;function ap(t,e,a){var n=Ul;if(n&&typeof e=="string"&&e){var i=Je(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),ep.has(i)||(ep.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),Ee(e,"link",t),he(e),n.head.appendChild(e)))}}function px(t){Ya.D(t),ap("dns-prefetch",t,null)}function mx(t,e){Ya.C(t,e),ap("preconnect",t,e)}function gx(t,e,a){Ya.L(t,e,a);var n=Ul;if(n&&t&&e){var i='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Je(a.imageSizes)+'"]')):i+='[href="'+Je(t)+'"]';var u=i;switch(e){case"style":u=Hl(t);break;case"script":u=Bl(t)}la.has(u)||(t=b({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),la.set(u,t),n.querySelector(i)!==null||e==="style"&&n.querySelector($i(u))||e==="script"&&n.querySelector(Qi(u))||(e=n.createElement("link"),Ee(e,"link",t),he(e),n.head.appendChild(e)))}}function xx(t,e){Ya.m(t,e);var a=Ul;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Je(n)+'"][href="'+Je(t)+'"]',u=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Bl(t)}if(!la.has(u)&&(t=b({rel:"modulepreload",href:t},e),la.set(u,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Qi(u)))return}n=a.createElement("link"),Ee(n,"link",t),he(n),a.head.appendChild(n)}}}function yx(t,e,a){Ya.S(t,e,a);var n=Ul;if(n&&t){var i=al(n).hoistableStyles,u=Hl(t);e=e||"default";var f=i.get(u);if(!f){var h={loading:0,preload:null};if(f=n.querySelector($i(u)))h.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":e},a),(a=la.get(u))&&ys(t,a);var v=f=n.createElement("link");he(v),Ee(v,"link",t),v._p=new Promise(function(_,N){v.onload=_,v.onerror=N}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Tr(f,e,n)}f={type:"stylesheet",instance:f,count:1,state:h},i.set(u,f)}}}function vx(t,e){Ya.X(t,e);var a=Ul;if(a&&t){var n=al(a).hoistableScripts,i=Bl(t),u=n.get(i);u||(u=a.querySelector(Qi(i)),u||(t=b({src:t,async:!0},e),(e=la.get(i))&&vs(t,e),u=a.createElement("script"),he(u),Ee(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function bx(t,e){Ya.M(t,e);var a=Ul;if(a&&t){var n=al(a).hoistableScripts,i=Bl(t),u=n.get(i);u||(u=a.querySelector(Qi(i)),u||(t=b({src:t,async:!0,type:"module"},e),(e=la.get(i))&&vs(t,e),u=a.createElement("script"),he(u),Ee(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},n.set(i,u))}}function np(t,e,a,n){var i=(i=ot.current)?Er(i):null;if(!i)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=Hl(a.href),a=al(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Hl(a.href);var u=al(i).hoistableStyles,f=u.get(t);if(f||(i=i.ownerDocument||i,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,f),(u=i.querySelector($i(t)))&&!u._p&&(f.instance=u,f.state.loading=5),la.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},la.set(t,a),u||Sx(i,t,a,f.state))),e&&n===null)throw Error(o(528,""));return f}if(e&&n!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Bl(a),a=al(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Hl(t){return'href="'+Je(t)+'"'}function $i(t){return'link[rel="stylesheet"]['+t+"]"}function lp(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function Sx(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),Ee(e,"link",a),he(e),t.head.appendChild(e))}function Bl(t){return'[src="'+Je(t)+'"]'}function Qi(t){return"script[async]"+t}function ip(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Je(a.href)+'"]');if(n)return e.instance=n,he(n),n;var i=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),he(n),Ee(n,"style",i),Tr(n,a.precedence,t),e.instance=n;case"stylesheet":i=Hl(a.href);var u=t.querySelector($i(i));if(u)return e.state.loading|=4,e.instance=u,he(u),u;n=lp(a),(i=la.get(i))&&ys(n,i),u=(t.ownerDocument||t).createElement("link"),he(u);var f=u;return f._p=new Promise(function(h,v){f.onload=h,f.onerror=v}),Ee(u,"link",n),e.state.loading|=4,Tr(u,a.precedence,t),e.instance=u;case"script":return u=Bl(a.src),(i=t.querySelector(Qi(u)))?(e.instance=i,he(i),i):(n=a,(i=la.get(u))&&(n=b({},a),vs(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),he(i),Ee(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Tr(n,a.precedence,t));return e.instance}function Tr(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,u=i,f=0;f<n.length;f++){var h=n[f];if(h.dataset.precedence===e)u=h;else if(u!==i)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function ys(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ar=null;function up(t,e,a){if(Ar===null){var n=new Map,i=Ar=new Map;i.set(a,n)}else i=Ar,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var u=a[i];if(!(u[ii]||u[Te]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var f=u.getAttribute(e)||"";f=t+f;var h=n.get(f);h?h.push(u):n.set(f,[u])}}return n}function rp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function Ex(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function cp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Zi=null;function Tx(){}function Ax(t,e,a){if(Zi===null)throw Error(o(475));var n=Zi;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var i=Hl(a.href),u=t.querySelector($i(i));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=wr.bind(n),t.then(n,n)),e.state.loading|=4,e.instance=u,he(u);return}u=t.ownerDocument||t,a=lp(a),(i=la.get(i))&&ys(a,i),u=u.createElement("link"),he(u);var f=u;f._p=new Promise(function(h,v){f.onload=h,f.onerror=v}),Ee(u,"link",a),e.instance=u}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(n.count++,e=wr.bind(n),t.addEventListener("load",e),t.addEventListener("error",e))}}function wx(){if(Zi===null)throw Error(o(475));var t=Zi;return t.stylesheets&&t.count===0&&bs(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&bs(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function wr(){if(this.count--,this.count===0){if(this.stylesheets)bs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _r=null;function bs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_r=new Map,e.forEach(_x,t),_r=null,wr.call(t))}function _x(t,e){if(!(e.state.loading&4)){var a=_r.get(t);if(a)var n=a.get(null);else{a=new Map,_r.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<i.length;u++){var f=i[u];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(a.set(f.dataset.precedence,f),n=f)}n&&a.set(null,n)}i=e.instance,f=i.getAttribute("data-precedence"),u=a.get(f)||n,u===n&&a.set(null,i),a.set(f,i),this.count++,n=wr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),u?u.parentNode.insertBefore(i,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ki={$$typeof:$,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function Cx(t,e,a,n,i,u,f,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.hiddenUpdates=mc(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=u,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function op(t,e,a,n,i,u,f,h,v,_,N,k){return t=new Cx(t,e,a,f,h,v,_,k),e=1,u===!0&&(e|=24),u=Ve(3,null,null,e),t.current=u,u.stateNode=t,e=to(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:n,isDehydrated:a,cache:e},lo(u),t}function sp(t){return t?(t=pl,t):pl}function fp(t,e,a,n,i,u){i=sp(i),n.context===null?n.context=i:n.pendingContext=i,n=an(e),n.payload={element:a},u=u===void 0?null:u,u!==null&&(n.callback=u),a=nn(t,n,e),a!==null&&(Xe(a,t,e),Ai(a,t,e))}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function Ss(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function hp(t){if(t.tag===13){var e=hl(t,67108864);e!==null&&Xe(e,t,67108864),Ss(t,67108864)}}var Cr=!0;function Rx(t,e,a,n){var i=O.T;O.T=null;var u=K.p;try{K.p=2,Es(t,e,a,n)}finally{K.p=u,O.T=i}}function zx(t,e,a,n){var i=O.T;O.T=null;var u=K.p;try{K.p=8,Es(t,e,a,n)}finally{K.p=u,O.T=i}}function Es(t,e,a,n){if(Cr){var i=Ts(n);if(i===null)os(t,e,n,Rr,a),mp(t,n);else if(jx(i,t,e,a,n))n.stopPropagation();else if(mp(t,n),e&4&&-1<Dx.indexOf(t)){for(;i!==null;){var u=el(i);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var f=Ra(u.pendingLanes);if(f!==0){var h=u;for(h.pendingLanes|=2,h.entangledLanes|=2;f;){var v=1<<31-Gt(f);h.entanglements[1]|=v,f&=~v}Ta(u),(Ht&6)===0&&(fr=We()+500,qi(0))}}break;case 13:h=hl(u,2),h!==null&&Xe(h,u,2),hr(),Ss(u,2)}if(u=Ts(n),u===null&&os(t,e,n,Rr,a),u===i)break;i=u}i!==null&&n.stopPropagation()}else os(t,e,n,null,a)}}function Ts(t){return t=Cc(t),As(t)}var Rr=null;function As(t){if(Rr=null,t=tl(t),t!==null){var e=d(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=m(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Rr=t,null}function pp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Df()){case ni:return 2;case E:return 8;case C:case M:return 32;case tt:return 268435456;default:return 32}default:return 32}}var ws=!1,xn=null,yn=null,vn=null,Wi=new Map,Fi=new Map,bn=[],Dx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":xn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(e.pointerId)}}function Ji(t,e,a,n,i,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:u,targetContainers:[i]},e!==null&&(e=el(e),e!==null&&hp(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jx(t,e,a,n,i){switch(e){case"focusin":return xn=Ji(xn,t,e,a,n,i),!0;case"dragenter":return yn=Ji(yn,t,e,a,n,i),!0;case"mouseover":return vn=Ji(vn,t,e,a,n,i),!0;case"pointerover":var u=i.pointerId;return Wi.set(u,Ji(Wi.get(u)||null,t,e,a,n,i)),!0;case"gotpointercapture":return u=i.pointerId,Fi.set(u,Ji(Fi.get(u)||null,t,e,a,n,i)),!0}return!1}function gp(t){var e=tl(t.target);if(e!==null){var a=d(e);if(a!==null){if(e=a.tag,e===13){if(e=m(a),e!==null){t.blockedOn=e,Ag(t.priority,function(){if(a.tag===13){var n=Ye();n=gc(n);var i=hl(a,n);i!==null&&Xe(i,a,n),Ss(a,n)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Ts(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);_c=n,a.target.dispatchEvent(n),_c=null}else return e=el(a),e!==null&&hp(e),t.blockedOn=a,!1;e.shift()}return!0}function xp(t,e,a){zr(t)&&a.delete(e)}function Ox(){ws=!1,xn!==null&&zr(xn)&&(xn=null),yn!==null&&zr(yn)&&(yn=null),vn!==null&&zr(vn)&&(vn=null),Wi.forEach(xp),Fi.forEach(xp)}function Dr(t,e){t.blockedOn===e&&(t.blockedOn=null,ws||(ws=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Ox)))}var jr=null;function yp(t){jr!==t&&(jr=t,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){jr===t&&(jr=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(As(n||a)===null)continue;break}var u=el(a);u!==null&&(t.splice(e,3),e-=3,Ao(u,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Ii(t){function e(v){return Dr(v,t)}xn!==null&&Dr(xn,t),yn!==null&&Dr(yn,t),vn!==null&&Dr(vn,t),Wi.forEach(e),Fi.forEach(e);for(var a=0;a<bn.length;a++){var n=bn[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<bn.length&&(a=bn[0],a.blockedOn===null);)gp(a),a.blockedOn===null&&bn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],u=a[n+1],f=i[Oe]||null;if(typeof u=="function")f||yp(a);else if(f){var h=null;if(u&&u.hasAttribute("formAction")){if(i=u,f=u[Oe]||null)h=f.formAction;else if(As(i)!==null)continue}else h=f.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),yp(a)}}}function _s(t){this._internalRoot=t}Or.prototype.render=_s.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,n=Ye();fp(a,n,t,e,null,null)},Or.prototype.unmount=_s.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fp(t.current,2,null,t,null,null),hr(),e[Pn]=null}};function Or(t){this._internalRoot=t}Or.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<bn.length&&e!==0&&e<bn[a].priority;a++);bn.splice(a,0,t),a===0&&gp(t)}};var vp=r.version;if(vp!=="19.1.1")throw Error(o(527,vp,"19.1.1"));K.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=y(e),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Mx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mr.isDisabled&&Mr.supportsFiber)try{lt=Mr.inject(Mx),gt=Mr}catch{}}return tu.createRoot=function(t,e){if(!s(t))throw Error(o(299));var a=!1,n="",i=Uh,u=Hh,f=Bh,h=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=op(t,1,!1,null,null,a,n,i,u,f,h,null),t[Pn]=e.current,cs(t),new _s(e)},tu.hydrateRoot=function(t,e,a){if(!s(t))throw Error(o(299));var n=!1,i="",u=Uh,f=Hh,h=Bh,v=null,_=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(f=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(v=a.unstable_transitionCallbacks),a.formState!==void 0&&(_=a.formState)),e=op(t,1,!0,e,a??null,n,i,u,f,h,v,_),e.context=sp(null),a=e.current,n=Ye(),n=gc(n),i=an(n),i.callback=null,nn(a,i,n),a=n,e.current.lanes=a,li(e,a),Ta(e),t[Pn]=e.current,cs(t),new Or(e)},tu.version="19.1.1",tu}var zp;function Xx(){if(zp)return zs.exports;zp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(r){console.error(r)}}return l(),zs.exports=Yx(),zs.exports}var $x=Xx();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dp="popstate";function Qx(l={}){function r(s,d){let{pathname:m="/",search:x="",hash:y=""}=Wn(s.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Qs("",{pathname:m,search:x,hash:y},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(s,d){let m=s.document.querySelector("base"),x="";if(m&&m.getAttribute("href")){let y=s.location.href,g=y.indexOf("#");x=g===-1?y:y.slice(0,g)}return x+"#"+(typeof d=="string"?d:pu(d))}function o(s,d){ga(s.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(d)})`)}return Kx(r,c,o,l)}function Ft(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function ga(l,r){if(!l){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Zx(){return Math.random().toString(36).substring(2,10)}function jp(l,r){return{usr:l.state,key:l.key,idx:r}}function Qs(l,r,c=null,o){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof r=="string"?Wn(r):r,state:c,key:r&&r.key||o||Zx()}}function pu({pathname:l="/",search:r="",hash:c=""}){return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),c&&c!=="#"&&(l+=c.charAt(0)==="#"?c:"#"+c),l}function Wn(l){let r={};if(l){let c=l.indexOf("#");c>=0&&(r.hash=l.substring(c),l=l.substring(0,c));let o=l.indexOf("?");o>=0&&(r.search=l.substring(o),l=l.substring(0,o)),l&&(r.pathname=l)}return r}function Kx(l,r,c,o={}){let{window:s=document.defaultView,v5Compat:d=!1}=o,m=s.history,x="POP",y=null,g=b();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function b(){return(m.state||{idx:null}).idx}function R(){x="POP";let X=b(),W=X==null?null:X-g;g=X,y&&y({action:x,location:Y.location,delta:W})}function j(X,W){x="PUSH";let U=Qs(Y.location,X,W);c&&c(U,X),g=b()+1;let $=jp(U,g),at=Y.createHref(U);try{m.pushState($,"",at)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;s.location.assign(at)}d&&y&&y({action:x,location:Y.location,delta:1})}function V(X,W){x="REPLACE";let U=Qs(Y.location,X,W);c&&c(U,X),g=b();let $=jp(U,g),at=Y.createHref(U);m.replaceState($,"",at),d&&y&&y({action:x,location:Y.location,delta:0})}function G(X){return Wx(X)}let Y={get action(){return x},get location(){return l(s,m)},listen(X){if(y)throw new Error("A history only accepts one active listener");return s.addEventListener(Dp,R),y=X,()=>{s.removeEventListener(Dp,R),y=null}},createHref(X){return r(s,X)},createURL:G,encodeLocation(X){let W=G(X);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:j,replace:V,go(X){return m.go(X)}};return Y}function Wx(l,r=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Ft(c,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:pu(l);return o=o.replace(/ $/,"%20"),!r&&o.startsWith("//")&&(o=c+o),new URL(o,c)}function xm(l,r,c="/"){return Fx(l,r,c,!1)}function Fx(l,r,c,o){let s=typeof r=="string"?Wn(r):r,d=Ka(s.pathname||"/",c);if(d==null)return null;let m=ym(l);Jx(m);let x=null;for(let y=0;x==null&&y<m.length;++y){let g=cy(d);x=uy(m[y],g,o)}return x}function ym(l,r=[],c=[],o="",s=!1){let d=(m,x,y=s,g)=>{let b={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:x,route:m};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(o)&&y)return;Ft(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length)}let R=Za([o,b.relativePath]),j=c.concat(b);m.children&&m.children.length>0&&(Ft(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),ym(m.children,r,j,R,y)),!(m.path==null&&!m.index)&&r.push({path:R,score:ly(R,m.index),routesMeta:j})};return l.forEach((m,x)=>{if(m.path===""||!m.path?.includes("?"))d(m,x);else for(let y of vm(m.path))d(m,x,!0,y)}),r}function vm(l){let r=l.split("/");if(r.length===0)return[];let[c,...o]=r,s=c.endsWith("?"),d=c.replace(/\?$/,"");if(o.length===0)return s?[d,""]:[d];let m=vm(o.join("/")),x=[];return x.push(...m.map(y=>y===""?d:[d,y].join("/"))),s&&x.push(...m),x.map(y=>l.startsWith("/")&&y===""?"/":y)}function Jx(l){l.sort((r,c)=>r.score!==c.score?c.score-r.score:iy(r.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var Ix=/^:[\w-]+$/,Px=3,ty=2,ey=1,ay=10,ny=-2,Op=l=>l==="*";function ly(l,r){let c=l.split("/"),o=c.length;return c.some(Op)&&(o+=ny),r&&(o+=ty),c.filter(s=>!Op(s)).reduce((s,d)=>s+(Ix.test(d)?Px:d===""?ey:ay),o)}function iy(l,r){return l.length===r.length&&l.slice(0,-1).every((o,s)=>o===r[s])?l[l.length-1]-r[r.length-1]:0}function uy(l,r,c=!1){let{routesMeta:o}=l,s={},d="/",m=[];for(let x=0;x<o.length;++x){let y=o[x],g=x===o.length-1,b=d==="/"?r:r.slice(d.length)||"/",R=Wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:g},b),j=y.route;if(!R&&g&&c&&!o[o.length-1].route.index&&(R=Wr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},b)),!R)return null;Object.assign(s,R.params),m.push({params:s,pathname:Za([d,R.pathname]),pathnameBase:dy(Za([d,R.pathnameBase])),route:j}),R.pathnameBase!=="/"&&(d=Za([d,R.pathnameBase]))}return m}function Wr(l,r){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[c,o]=ry(l.path,l.caseSensitive,l.end),s=r.match(c);if(!s)return null;let d=s[0],m=d.replace(/(.)\/+$/,"$1"),x=s.slice(1);return{params:o.reduce((g,{paramName:b,isOptional:R},j)=>{if(b==="*"){let G=x[j]||"";m=d.slice(0,d.length-G.length).replace(/(.)\/+$/,"$1")}const V=x[j];return R&&!V?g[b]=void 0:g[b]=(V||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:m,pattern:l}}function ry(l,r=!1,c=!0){ga(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],s="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,x,y)=>(o.push({paramName:x,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(o.push({paramName:"*"}),s+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?s+="\\/*$":l!==""&&l!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,r?void 0:"i"),o]}function cy(l){try{return l.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ga(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),l}}function Ka(l,r){if(r==="/")return l;if(!l.toLowerCase().startsWith(r.toLowerCase()))return null;let c=r.endsWith("/")?r.length-1:r.length,o=l.charAt(c);return o&&o!=="/"?null:l.slice(c)||"/"}function oy(l,r="/"){let{pathname:c,search:o="",hash:s=""}=typeof l=="string"?Wn(l):l;return{pathname:c?c.startsWith("/")?c:sy(c,r):r,search:hy(o),hash:py(s)}}function sy(l,r){let c=r.replace(/\/+$/,"").split("/");return l.split("/").forEach(s=>{s===".."?c.length>1&&c.pop():s!=="."&&c.push(s)}),c.length>1?c.join("/"):"/"}function Ms(l,r,c,o){return`Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fy(l){return l.filter((r,c)=>c===0||r.route.path&&r.route.path.length>0)}function bm(l){let r=fy(l);return r.map((c,o)=>o===r.length-1?c.pathname:c.pathnameBase)}function Sm(l,r,c,o=!1){let s;typeof l=="string"?s=Wn(l):(s={...l},Ft(!s.pathname||!s.pathname.includes("?"),Ms("?","pathname","search",s)),Ft(!s.pathname||!s.pathname.includes("#"),Ms("#","pathname","hash",s)),Ft(!s.search||!s.search.includes("#"),Ms("#","search","hash",s)));let d=l===""||s.pathname==="",m=d?"/":s.pathname,x;if(m==null)x=c;else{let R=r.length-1;if(!o&&m.startsWith("..")){let j=m.split("/");for(;j[0]==="..";)j.shift(),R-=1;s.pathname=j.join("/")}x=R>=0?r[R]:"/"}let y=oy(s,x),g=m&&m!=="/"&&m.endsWith("/"),b=(d||m===".")&&c.endsWith("/");return!y.pathname.endsWith("/")&&(g||b)&&(y.pathname+="/"),y}var Za=l=>l.join("/").replace(/\/\/+/g,"/"),dy=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),hy=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,py=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l;function my(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}var Em=["POST","PUT","PATCH","DELETE"];new Set(Em);var gy=["GET",...Em];new Set(gy);var ti=L.createContext(null);ti.displayName="DataRouter";var nc=L.createContext(null);nc.displayName="DataRouterState";L.createContext(!1);var Tm=L.createContext({isTransitioning:!1});Tm.displayName="ViewTransition";var xy=L.createContext(new Map);xy.displayName="Fetchers";var yy=L.createContext(null);yy.displayName="Await";var Ca=L.createContext(null);Ca.displayName="Navigation";var xu=L.createContext(null);xu.displayName="Location";var Wa=L.createContext({outlet:null,matches:[],isDataRoute:!1});Wa.displayName="Route";var ff=L.createContext(null);ff.displayName="RouteError";function vy(l,{relative:r}={}){Ft(yu(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=L.useContext(Ca),{hash:s,pathname:d,search:m}=vu(l,{relative:r}),x=d;return c!=="/"&&(x=d==="/"?c:Za([c,d])),o.createHref({pathname:x,search:m,hash:s})}function yu(){return L.useContext(xu)!=null}function Fn(){return Ft(yu(),"useLocation() may be used only in the context of a <Router> component."),L.useContext(xu).location}var Am="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wm(l){L.useContext(Ca).static||L.useLayoutEffect(l)}function by(){let{isDataRoute:l}=L.useContext(Wa);return l?My():Sy()}function Sy(){Ft(yu(),"useNavigate() may be used only in the context of a <Router> component.");let l=L.useContext(ti),{basename:r,navigator:c}=L.useContext(Ca),{matches:o}=L.useContext(Wa),{pathname:s}=Fn(),d=JSON.stringify(bm(o)),m=L.useRef(!1);return wm(()=>{m.current=!0}),L.useCallback((y,g={})=>{if(ga(m.current,Am),!m.current)return;if(typeof y=="number"){c.go(y);return}let b=Sm(y,JSON.parse(d),s,g.relative==="path");l==null&&r!=="/"&&(b.pathname=b.pathname==="/"?r:Za([r,b.pathname])),(g.replace?c.replace:c.push)(b,g.state,g)},[r,c,d,s,l])}L.createContext(null);function vu(l,{relative:r}={}){let{matches:c}=L.useContext(Wa),{pathname:o}=Fn(),s=JSON.stringify(bm(c));return L.useMemo(()=>Sm(l,JSON.parse(s),o,r==="path"),[l,s,o,r])}function Ey(l,r){return _m(l,r)}function _m(l,r,c,o,s){Ft(yu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=L.useContext(Ca),{matches:m}=L.useContext(Wa),x=m[m.length-1],y=x?x.params:{},g=x?x.pathname:"/",b=x?x.pathnameBase:"/",R=x&&x.route;{let U=R&&R.path||"";Cm(g,!R||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let j=Fn(),V;if(r){let U=typeof r=="string"?Wn(r):r;Ft(b==="/"||U.pathname?.startsWith(b),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${U.pathname}" was given in the \`location\` prop.`),V=U}else V=j;let G=V.pathname||"/",Y=G;if(b!=="/"){let U=b.replace(/^\//,"").split("/");Y="/"+G.replace(/^\//,"").split("/").slice(U.length).join("/")}let X=xm(l,{pathname:Y});ga(R||X!=null,`No routes matched location "${V.pathname}${V.search}${V.hash}" `),ga(X==null||X[X.length-1].route.element!==void 0||X[X.length-1].route.Component!==void 0||X[X.length-1].route.lazy!==void 0,`Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let W=Cy(X&&X.map(U=>Object.assign({},U,{params:Object.assign({},y,U.params),pathname:Za([b,d.encodeLocation?d.encodeLocation(U.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?b:Za([b,d.encodeLocation?d.encodeLocation(U.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:U.pathnameBase])})),m,c,o,s);return r&&W?L.createElement(xu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...V},navigationType:"POP"}},W):W}function Ty(){let l=Oy(),r=my(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),c=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},d={padding:"2px 4px",backgroundColor:o},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=L.createElement(L.Fragment,null,L.createElement("p",null,"💿 Hey developer 👋"),L.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",L.createElement("code",{style:d},"ErrorBoundary")," or"," ",L.createElement("code",{style:d},"errorElement")," prop on your route.")),L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},r),c?L.createElement("pre",{style:s},c):null,m)}var Ay=L.createElement(Ty,null),wy=class extends L.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){this.props.unstable_onError?this.props.unstable_onError(l,r):console.error("React Router caught the following error during render",l)}render(){return this.state.error!==void 0?L.createElement(Wa.Provider,{value:this.props.routeContext},L.createElement(ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _y({routeContext:l,match:r,children:c}){let o=L.useContext(ti);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),L.createElement(Wa.Provider,{value:l},c)}function Cy(l,r=[],c=null,o=null,s=null){if(l==null){if(!c)return null;if(c.errors)l=c.matches;else if(r.length===0&&!c.initialized&&c.matches.length>0)l=c.matches;else return null}let d=l,m=c?.errors;if(m!=null){let g=d.findIndex(b=>b.route.id&&m?.[b.route.id]!==void 0);Ft(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),d=d.slice(0,Math.min(d.length,g+1))}let x=!1,y=-1;if(c)for(let g=0;g<d.length;g++){let b=d[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(y=g),b.route.id){let{loaderData:R,errors:j}=c,V=b.route.loader&&!R.hasOwnProperty(b.route.id)&&(!j||j[b.route.id]===void 0);if(b.route.lazy||V){x=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((g,b,R)=>{let j,V=!1,G=null,Y=null;c&&(j=m&&b.route.id?m[b.route.id]:void 0,G=b.route.errorElement||Ay,x&&(y<0&&R===0?(Cm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,Y=null):y===R&&(V=!0,Y=b.route.hydrateFallbackElement||null)));let X=r.concat(d.slice(0,R+1)),W=()=>{let U;return j?U=G:V?U=Y:b.route.Component?U=L.createElement(b.route.Component,null):b.route.element?U=b.route.element:U=g,L.createElement(_y,{match:b,routeContext:{outlet:g,matches:X,isDataRoute:c!=null},children:U})};return c&&(b.route.ErrorBoundary||b.route.errorElement||R===0)?L.createElement(wy,{location:c.location,revalidation:c.revalidation,component:G,error:j,children:W(),routeContext:{outlet:null,matches:X,isDataRoute:!0},unstable_onError:o}):W()},null)}function df(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ry(l){let r=L.useContext(ti);return Ft(r,df(l)),r}function zy(l){let r=L.useContext(nc);return Ft(r,df(l)),r}function Dy(l){let r=L.useContext(Wa);return Ft(r,df(l)),r}function hf(l){let r=Dy(l),c=r.matches[r.matches.length-1];return Ft(c.route.id,`${l} can only be used on routes that contain a unique "id"`),c.route.id}function jy(){return hf("useRouteId")}function Oy(){let l=L.useContext(ff),r=zy("useRouteError"),c=hf("useRouteError");return l!==void 0?l:r.errors?.[c]}function My(){let{router:l}=Ry("useNavigate"),r=hf("useNavigate"),c=L.useRef(!1);return wm(()=>{c.current=!0}),L.useCallback(async(s,d={})=>{ga(c.current,Am),c.current&&(typeof s=="number"?l.navigate(s):await l.navigate(s,{fromRouteId:r,...d}))},[l,r])}var Mp={};function Cm(l,r,c){!r&&!Mp[l]&&(Mp[l]=!0,ga(!1,c))}L.memo(Ny);function Ny({routes:l,future:r,state:c,unstable_onError:o}){return _m(l,void 0,c,o,r)}function Zs(l){Ft(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Uy({basename:l="/",children:r=null,location:c,navigationType:o="POP",navigator:s,static:d=!1}){Ft(!yu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=l.replace(/^\/*/,"/"),x=L.useMemo(()=>({basename:m,navigator:s,static:d,future:{}}),[m,s,d]);typeof c=="string"&&(c=Wn(c));let{pathname:y="/",search:g="",hash:b="",state:R=null,key:j="default"}=c,V=L.useMemo(()=>{let G=Ka(y,m);return G==null?null:{location:{pathname:G,search:g,hash:b,state:R,key:j},navigationType:o}},[m,y,g,b,R,j,o]);return ga(V!=null,`<Router basename="${m}"> is not able to match the URL "${y}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),V==null?null:L.createElement(Ca.Provider,{value:x},L.createElement(xu.Provider,{children:r,value:V}))}function Hy({children:l,location:r}){return Ey(Ks(l),r)}function Ks(l,r=[]){let c=[];return L.Children.forEach(l,(o,s)=>{if(!L.isValidElement(o))return;let d=[...r,s];if(o.type===L.Fragment){c.push.apply(c,Ks(o.props.children,d));return}Ft(o.type===Zs,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ft(!o.props.index||!o.props.children,"An index route cannot have child routes.");let m={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(m.children=Ks(o.props.children,d)),c.push(m)}),c}var Gr="get",Yr="application/x-www-form-urlencoded";function lc(l){return l!=null&&typeof l.tagName=="string"}function By(l){return lc(l)&&l.tagName.toLowerCase()==="button"}function Ly(l){return lc(l)&&l.tagName.toLowerCase()==="form"}function Vy(l){return lc(l)&&l.tagName.toLowerCase()==="input"}function ky(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function qy(l,r){return l.button===0&&(!r||r==="_self")&&!ky(l)}var Nr=null;function Gy(){if(Nr===null)try{new FormData(document.createElement("form"),0),Nr=!1}catch{Nr=!0}return Nr}var Yy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ns(l){return l!=null&&!Yy.has(l)?(ga(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yr}"`),null):l}function Xy(l,r){let c,o,s,d,m;if(Ly(l)){let x=l.getAttribute("action");o=x?Ka(x,r):null,c=l.getAttribute("method")||Gr,s=Ns(l.getAttribute("enctype"))||Yr,d=new FormData(l)}else if(By(l)||Vy(l)&&(l.type==="submit"||l.type==="image")){let x=l.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=l.getAttribute("formaction")||x.getAttribute("action");if(o=y?Ka(y,r):null,c=l.getAttribute("formmethod")||x.getAttribute("method")||Gr,s=Ns(l.getAttribute("formenctype"))||Ns(x.getAttribute("enctype"))||Yr,d=new FormData(x,l),!Gy()){let{name:g,type:b,value:R}=l;if(b==="image"){let j=g?`${g}.`:"";d.append(`${j}x`,"0"),d.append(`${j}y`,"0")}else g&&d.append(g,R)}}else{if(lc(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Gr,o=null,s=Yr,m=l}return d&&s==="text/plain"&&(m=d,d=void 0),{action:o,method:c.toLowerCase(),encType:s,formData:d,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pf(l,r){if(l===!1||l===null||typeof l>"u")throw new Error(r)}function $y(l,r,c){let o=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return o.pathname==="/"?o.pathname=`_root.${c}`:r&&Ka(o.pathname,r)==="/"?o.pathname=`${r.replace(/\/$/,"")}/_root.${c}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${c}`,o}async function Qy(l,r){if(l.id in r)return r[l.id];try{let c=await import(l.module);return r[l.id]=c,c}catch(c){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zy(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Ky(l,r,c){let o=await Promise.all(l.map(async s=>{let d=r.routes[s.route.id];if(d){let m=await Qy(d,c);return m.links?m.links():[]}return[]}));return Iy(o.flat(1).filter(Zy).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function Np(l,r,c,o,s,d){let m=(y,g)=>c[g]?y.route.id!==c[g].route.id:!0,x=(y,g)=>c[g].pathname!==y.pathname||c[g].route.path?.endsWith("*")&&c[g].params["*"]!==y.params["*"];return d==="assets"?r.filter((y,g)=>m(y,g)||x(y,g)):d==="data"?r.filter((y,g)=>{let b=o.routes[y.route.id];if(!b||!b.hasLoader)return!1;if(m(y,g)||x(y,g))return!0;if(y.route.shouldRevalidate){let R=y.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Wy(l,r,{includeHydrateFallback:c}={}){return Fy(l.map(o=>{let s=r.routes[o.route.id];if(!s)return[];let d=[s.module];return s.clientActionModule&&(d=d.concat(s.clientActionModule)),s.clientLoaderModule&&(d=d.concat(s.clientLoaderModule)),c&&s.hydrateFallbackModule&&(d=d.concat(s.hydrateFallbackModule)),s.imports&&(d=d.concat(s.imports)),d}).flat(1))}function Fy(l){return[...new Set(l)]}function Jy(l){let r={},c=Object.keys(l).sort();for(let o of c)r[o]=l[o];return r}function Iy(l,r){let c=new Set;return new Set(r),l.reduce((o,s)=>{let d=JSON.stringify(Jy(s));return c.has(d)||(c.add(d),o.push({key:d,link:s})),o},[])}function Rm(){let l=L.useContext(ti);return pf(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Py(){let l=L.useContext(nc);return pf(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var mf=L.createContext(void 0);mf.displayName="FrameworkContext";function zm(){let l=L.useContext(mf);return pf(l,"You must render this element inside a <HydratedRouter> element"),l}function t2(l,r){let c=L.useContext(mf),[o,s]=L.useState(!1),[d,m]=L.useState(!1),{onFocus:x,onBlur:y,onMouseEnter:g,onMouseLeave:b,onTouchStart:R}=r,j=L.useRef(null);L.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let Y=W=>{W.forEach(U=>{m(U.isIntersecting)})},X=new IntersectionObserver(Y,{threshold:.5});return j.current&&X.observe(j.current),()=>{X.disconnect()}}},[l]),L.useEffect(()=>{if(o){let Y=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let V=()=>{s(!0)},G=()=>{s(!1),m(!1)};return c?l!=="intent"?[d,j,{}]:[d,j,{onFocus:eu(x,V),onBlur:eu(y,G),onMouseEnter:eu(g,V),onMouseLeave:eu(b,G),onTouchStart:eu(R,V)}]:[!1,j,{}]}function eu(l,r){return c=>{l&&l(c),c.defaultPrevented||r(c)}}function e2({page:l,...r}){let{router:c}=Rm(),o=L.useMemo(()=>xm(c.routes,l,c.basename),[c.routes,l,c.basename]);return o?L.createElement(n2,{page:l,matches:o,...r}):null}function a2(l){let{manifest:r,routeModules:c}=zm(),[o,s]=L.useState([]);return L.useEffect(()=>{let d=!1;return Ky(l,r,c).then(m=>{d||s(m)}),()=>{d=!0}},[l,r,c]),o}function n2({page:l,matches:r,...c}){let o=Fn(),{manifest:s,routeModules:d}=zm(),{basename:m}=Rm(),{loaderData:x,matches:y}=Py(),g=L.useMemo(()=>Np(l,r,y,s,o,"data"),[l,r,y,s,o]),b=L.useMemo(()=>Np(l,r,y,s,o,"assets"),[l,r,y,s,o]),R=L.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let G=new Set,Y=!1;if(r.forEach(W=>{let U=s.routes[W.route.id];!U||!U.hasLoader||(!g.some($=>$.route.id===W.route.id)&&W.route.id in x&&d[W.route.id]?.shouldRevalidate||U.hasClientLoader?Y=!0:G.add(W.route.id))}),G.size===0)return[];let X=$y(l,m,"data");return Y&&G.size>0&&X.searchParams.set("_routes",r.filter(W=>G.has(W.route.id)).map(W=>W.route.id).join(",")),[X.pathname+X.search]},[m,x,o,s,g,r,l,d]),j=L.useMemo(()=>Wy(b,s),[b,s]),V=a2(b);return L.createElement(L.Fragment,null,R.map(G=>L.createElement("link",{key:G,rel:"prefetch",as:"fetch",href:G,...c})),j.map(G=>L.createElement("link",{key:G,rel:"modulepreload",href:G,...c})),V.map(({key:G,link:Y})=>L.createElement("link",{key:G,nonce:c.nonce,...Y})))}function l2(...l){return r=>{l.forEach(c=>{typeof c=="function"?c(r):c!=null&&(c.current=r)})}}var Dm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dm&&(window.__reactRouterVersion="7.9.3")}catch{}function i2({basename:l,children:r,window:c}){let o=L.useRef();o.current==null&&(o.current=Qx({window:c,v5Compat:!0}));let s=o.current,[d,m]=L.useState({action:s.action,location:s.location}),x=L.useCallback(y=>{L.startTransition(()=>m(y))},[m]);return L.useLayoutEffect(()=>s.listen(x),[s,x]),L.createElement(Uy,{basename:l,children:r,location:d.location,navigationType:d.action,navigator:s})}var jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Om=L.forwardRef(function({onClick:r,discover:c="render",prefetch:o="none",relative:s,reloadDocument:d,replace:m,state:x,target:y,to:g,preventScrollReset:b,viewTransition:R,...j},V){let{basename:G}=L.useContext(Ca),Y=typeof g=="string"&&jm.test(g),X,W=!1;if(typeof g=="string"&&Y&&(X=g,Dm))try{let St=new URL(window.location.href),Kt=g.startsWith("//")?new URL(St.protocol+g):new URL(g),$t=Ka(Kt.pathname,G);Kt.origin===St.origin&&$t!=null?g=$t+Kt.search+Kt.hash:W=!0}catch{ga(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let U=vy(g,{relative:s}),[$,at,Q]=t2(o,j),ct=o2(g,{replace:m,state:x,target:y,preventScrollReset:b,relative:s,viewTransition:R});function et(St){r&&r(St),St.defaultPrevented||ct(St)}let Dt=L.createElement("a",{...j,...Q,href:X||U,onClick:W||d?r:et,ref:l2(V,at),target:y,"data-discover":!Y&&c==="render"?"true":void 0});return $&&!Y?L.createElement(L.Fragment,null,Dt,L.createElement(e2,{page:U})):Dt});Om.displayName="Link";var u2=L.forwardRef(function({"aria-current":r="page",caseSensitive:c=!1,className:o="",end:s=!1,style:d,to:m,viewTransition:x,children:y,...g},b){let R=vu(m,{relative:g.relative}),j=Fn(),V=L.useContext(nc),{navigator:G,basename:Y}=L.useContext(Ca),X=V!=null&&p2(R)&&x===!0,W=G.encodeLocation?G.encodeLocation(R).pathname:R.pathname,U=j.pathname,$=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;c||(U=U.toLowerCase(),$=$?$.toLowerCase():null,W=W.toLowerCase()),$&&Y&&($=Ka($,Y)||$);const at=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Q=U===W||!s&&U.startsWith(W)&&U.charAt(at)==="/",ct=$!=null&&($===W||!s&&$.startsWith(W)&&$.charAt(W.length)==="/"),et={isActive:Q,isPending:ct,isTransitioning:X},Dt=Q?r:void 0,St;typeof o=="function"?St=o(et):St=[o,Q?"active":null,ct?"pending":null,X?"transitioning":null].filter(Boolean).join(" ");let Kt=typeof d=="function"?d(et):d;return L.createElement(Om,{...g,"aria-current":Dt,className:St,ref:b,style:Kt,to:m,viewTransition:x},typeof y=="function"?y(et):y)});u2.displayName="NavLink";var r2=L.forwardRef(({discover:l="render",fetcherKey:r,navigate:c,reloadDocument:o,replace:s,state:d,method:m=Gr,action:x,onSubmit:y,relative:g,preventScrollReset:b,viewTransition:R,...j},V)=>{let G=d2(),Y=h2(x,{relative:g}),X=m.toLowerCase()==="get"?"get":"post",W=typeof x=="string"&&jm.test(x),U=$=>{if(y&&y($),$.defaultPrevented)return;$.preventDefault();let at=$.nativeEvent.submitter,Q=at?.getAttribute("formmethod")||m;G(at||$.currentTarget,{fetcherKey:r,method:Q,navigate:c,replace:s,state:d,relative:g,preventScrollReset:b,viewTransition:R})};return L.createElement("form",{ref:V,method:X,action:Y,onSubmit:o?y:U,...j,"data-discover":!W&&l==="render"?"true":void 0})});r2.displayName="Form";function c2(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Mm(l){let r=L.useContext(ti);return Ft(r,c2(l)),r}function o2(l,{target:r,replace:c,state:o,preventScrollReset:s,relative:d,viewTransition:m}={}){let x=by(),y=Fn(),g=vu(l,{relative:d});return L.useCallback(b=>{if(qy(b,r)){b.preventDefault();let R=c!==void 0?c:pu(y)===pu(g);x(l,{replace:R,state:o,preventScrollReset:s,relative:d,viewTransition:m})}},[y,x,g,c,o,r,l,s,d,m])}var s2=0,f2=()=>`__${String(++s2)}__`;function d2(){let{router:l}=Mm("useSubmit"),{basename:r}=L.useContext(Ca),c=jy();return L.useCallback(async(o,s={})=>{let{action:d,method:m,encType:x,formData:y,body:g}=Xy(o,r);if(s.navigate===!1){let b=s.fetcherKey||f2();await l.fetch(b,c,s.action||d,{preventScrollReset:s.preventScrollReset,formData:y,body:g,formMethod:s.method||m,formEncType:s.encType||x,flushSync:s.flushSync})}else await l.navigate(s.action||d,{preventScrollReset:s.preventScrollReset,formData:y,body:g,formMethod:s.method||m,formEncType:s.encType||x,replace:s.replace,state:s.state,fromRouteId:c,flushSync:s.flushSync,viewTransition:s.viewTransition})},[l,r,c])}function h2(l,{relative:r}={}){let{basename:c}=L.useContext(Ca),o=L.useContext(Wa);Ft(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),d={...vu(l||".",{relative:r})},m=Fn();if(l==null){d.search=m.search;let x=new URLSearchParams(d.search),y=x.getAll("index");if(y.some(b=>b==="")){x.delete("index"),y.filter(R=>R).forEach(R=>x.append("index",R));let b=x.toString();d.search=b?`?${b}`:""}}return(!l||l===".")&&s.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:Za([c,d.pathname])),pu(d)}function p2(l,{relative:r}={}){let c=L.useContext(Tm);Ft(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Mm("useViewTransitionState"),s=vu(l,{relative:r});if(!c.isTransitioning)return!1;let d=Ka(c.currentLocation.pathname,o)||c.currentLocation.pathname,m=Ka(c.nextLocation.pathname,o)||c.nextLocation.pathname;return Wr(s.pathname,m)!=null||Wr(s.pathname,d)!=null}var _e=function(){return _e=Object.assign||function(r){for(var c,o=1,s=arguments.length;o<s;o++){c=arguments[o];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(r[d]=c[d])}return r},_e.apply(this,arguments)};function mu(l,r,c){if(c||arguments.length===2)for(var o=0,s=r.length,d;o<s;o++)(d||!(o in r))&&(d||(d=Array.prototype.slice.call(r,0,o)),d[o]=r[o]);return l.concat(d||Array.prototype.slice.call(r))}var Qt="-ms-",fu="-moz-",Ut="-webkit-",Nm="comm",ic="rule",gf="decl",m2="@import",Um="@keyframes",g2="@layer",Hm=Math.abs,xf=String.fromCharCode,Ws=Object.assign;function x2(l,r){return ve(l,0)^45?(((r<<2^ve(l,0))<<2^ve(l,1))<<2^ve(l,2))<<2^ve(l,3):0}function Bm(l){return l.trim()}function $a(l,r){return(l=r.exec(l))?l[0]:l}function bt(l,r,c){return l.replace(r,c)}function Xr(l,r,c){return l.indexOf(r,c)}function ve(l,r){return l.charCodeAt(r)|0}function Kl(l,r,c){return l.slice(r,c)}function wa(l){return l.length}function Lm(l){return l.length}function ou(l,r){return r.push(l),l}function y2(l,r){return l.map(r).join("")}function Up(l,r){return l.filter(function(c){return!$a(c,r)})}var uc=1,Wl=1,Vm=0,ua=0,ce=0,ei="";function rc(l,r,c,o,s,d,m,x){return{value:l,root:r,parent:c,type:o,props:s,children:d,line:uc,column:Wl,length:m,return:"",siblings:x}}function Tn(l,r){return Ws(rc("",null,null,"",null,null,0,l.siblings),l,{length:-l.length},r)}function Ll(l){for(;l.root;)l=Tn(l.root,{children:[l]});ou(l,l.siblings)}function v2(){return ce}function b2(){return ce=ua>0?ve(ei,--ua):0,Wl--,ce===10&&(Wl=1,uc--),ce}function ma(){return ce=ua<Vm?ve(ei,ua++):0,Wl++,ce===10&&(Wl=1,uc++),ce}function Zn(){return ve(ei,ua)}function $r(){return ua}function cc(l,r){return Kl(ei,l,r)}function Fs(l){switch(l){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S2(l){return uc=Wl=1,Vm=wa(ei=l),ua=0,[]}function E2(l){return ei="",l}function Us(l){return Bm(cc(ua-1,Js(l===91?l+2:l===40?l+1:l)))}function T2(l){for(;(ce=Zn())&&ce<33;)ma();return Fs(l)>2||Fs(ce)>3?"":" "}function A2(l,r){for(;--r&&ma()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return cc(l,$r()+(r<6&&Zn()==32&&ma()==32))}function Js(l){for(;ma();)switch(ce){case l:return ua;case 34:case 39:l!==34&&l!==39&&Js(ce);break;case 40:l===41&&Js(l);break;case 92:ma();break}return ua}function w2(l,r){for(;ma()&&l+ce!==57;)if(l+ce===84&&Zn()===47)break;return"/*"+cc(r,ua-1)+"*"+xf(l===47?l:ma())}function _2(l){for(;!Fs(Zn());)ma();return cc(l,ua)}function C2(l){return E2(Qr("",null,null,null,[""],l=S2(l),0,[0],l))}function Qr(l,r,c,o,s,d,m,x,y){for(var g=0,b=0,R=m,j=0,V=0,G=0,Y=1,X=1,W=1,U=0,$="",at=s,Q=d,ct=o,et=$;X;)switch(G=U,U=ma()){case 40:if(G!=108&&ve(et,R-1)==58){Xr(et+=bt(Us(U),"&","&\f"),"&\f",Hm(g?x[g-1]:0))!=-1&&(W=-1);break}case 34:case 39:case 91:et+=Us(U);break;case 9:case 10:case 13:case 32:et+=T2(G);break;case 92:et+=A2($r()-1,7);continue;case 47:switch(Zn()){case 42:case 47:ou(R2(w2(ma(),$r()),r,c,y),y);break;default:et+="/"}break;case 123*Y:x[g++]=wa(et)*W;case 125*Y:case 59:case 0:switch(U){case 0:case 125:X=0;case 59+b:W==-1&&(et=bt(et,/\f/g,"")),V>0&&wa(et)-R&&ou(V>32?Bp(et+";",o,c,R-1,y):Bp(bt(et," ","")+";",o,c,R-2,y),y);break;case 59:et+=";";default:if(ou(ct=Hp(et,r,c,g,b,s,x,$,at=[],Q=[],R,d),d),U===123)if(b===0)Qr(et,r,ct,ct,at,d,R,x,Q);else switch(j===99&&ve(et,3)===110?100:j){case 100:case 108:case 109:case 115:Qr(l,ct,ct,o&&ou(Hp(l,ct,ct,0,0,s,x,$,s,at=[],R,Q),Q),s,Q,R,x,o?at:Q);break;default:Qr(et,ct,ct,ct,[""],Q,0,x,Q)}}g=b=V=0,Y=W=1,$=et="",R=m;break;case 58:R=1+wa(et),V=G;default:if(Y<1){if(U==123)--Y;else if(U==125&&Y++==0&&b2()==125)continue}switch(et+=xf(U),U*Y){case 38:W=b>0?1:(et+="\f",-1);break;case 44:x[g++]=(wa(et)-1)*W,W=1;break;case 64:Zn()===45&&(et+=Us(ma())),j=Zn(),b=R=wa($=et+=_2($r())),U++;break;case 45:G===45&&wa(et)==2&&(Y=0)}}return d}function Hp(l,r,c,o,s,d,m,x,y,g,b,R){for(var j=s-1,V=s===0?d:[""],G=Lm(V),Y=0,X=0,W=0;Y<o;++Y)for(var U=0,$=Kl(l,j+1,j=Hm(X=m[Y])),at=l;U<G;++U)(at=Bm(X>0?V[U]+" "+$:bt($,/&\f/g,V[U])))&&(y[W++]=at);return rc(l,r,c,s===0?ic:x,y,g,b,R)}function R2(l,r,c,o){return rc(l,r,c,Nm,xf(v2()),Kl(l,2,-2),0,o)}function Bp(l,r,c,o,s){return rc(l,r,c,gf,Kl(l,0,o),Kl(l,o+1,-1),o,s)}function km(l,r,c){switch(x2(l,r)){case 5103:return Ut+"print-"+l+l;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ut+l+l;case 4789:return fu+l+l;case 5349:case 4246:case 4810:case 6968:case 2756:return Ut+l+fu+l+Qt+l+l;case 5936:switch(ve(l,r+11)){case 114:return Ut+l+Qt+bt(l,/[svh]\w+-[tblr]{2}/,"tb")+l;case 108:return Ut+l+Qt+bt(l,/[svh]\w+-[tblr]{2}/,"tb-rl")+l;case 45:return Ut+l+Qt+bt(l,/[svh]\w+-[tblr]{2}/,"lr")+l}case 6828:case 4268:case 2903:return Ut+l+Qt+l+l;case 6165:return Ut+l+Qt+"flex-"+l+l;case 5187:return Ut+l+bt(l,/(\w+).+(:[^]+)/,Ut+"box-$1$2"+Qt+"flex-$1$2")+l;case 5443:return Ut+l+Qt+"flex-item-"+bt(l,/flex-|-self/g,"")+($a(l,/flex-|baseline/)?"":Qt+"grid-row-"+bt(l,/flex-|-self/g,""))+l;case 4675:return Ut+l+Qt+"flex-line-pack"+bt(l,/align-content|flex-|-self/g,"")+l;case 5548:return Ut+l+Qt+bt(l,"shrink","negative")+l;case 5292:return Ut+l+Qt+bt(l,"basis","preferred-size")+l;case 6060:return Ut+"box-"+bt(l,"-grow","")+Ut+l+Qt+bt(l,"grow","positive")+l;case 4554:return Ut+bt(l,/([^-])(transform)/g,"$1"+Ut+"$2")+l;case 6187:return bt(bt(bt(l,/(zoom-|grab)/,Ut+"$1"),/(image-set)/,Ut+"$1"),l,"")+l;case 5495:case 3959:return bt(l,/(image-set\([^]*)/,Ut+"$1$`$1");case 4968:return bt(bt(l,/(.+:)(flex-)?(.*)/,Ut+"box-pack:$3"+Qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ut+l+l;case 4200:if(!$a(l,/flex-|baseline/))return Qt+"grid-column-align"+Kl(l,r)+l;break;case 2592:case 3360:return Qt+bt(l,"template-","")+l;case 4384:case 3616:return c&&c.some(function(o,s){return r=s,$a(o.props,/grid-\w+-end/)})?~Xr(l+(c=c[r].value),"span",0)?l:Qt+bt(l,"-start","")+l+Qt+"grid-row-span:"+(~Xr(c,"span",0)?$a(c,/\d+/):+$a(c,/\d+/)-+$a(l,/\d+/))+";":Qt+bt(l,"-start","")+l;case 4896:case 4128:return c&&c.some(function(o){return $a(o.props,/grid-\w+-start/)})?l:Qt+bt(bt(l,"-end","-span"),"span ","")+l;case 4095:case 3583:case 4068:case 2532:return bt(l,/(.+)-inline(.+)/,Ut+"$1$2")+l;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wa(l)-1-r>6)switch(ve(l,r+1)){case 109:if(ve(l,r+4)!==45)break;case 102:return bt(l,/(.+:)(.+)-([^]+)/,"$1"+Ut+"$2-$3$1"+fu+(ve(l,r+3)==108?"$3":"$2-$3"))+l;case 115:return~Xr(l,"stretch",0)?km(bt(l,"stretch","fill-available"),r,c)+l:l}break;case 5152:case 5920:return bt(l,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,d,m,x,y,g){return Qt+s+":"+d+g+(m?Qt+s+"-span:"+(x?y:+y-+d)+g:"")+l});case 4949:if(ve(l,r+6)===121)return bt(l,":",":"+Ut)+l;break;case 6444:switch(ve(l,ve(l,14)===45?18:11)){case 120:return bt(l,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ut+(ve(l,14)===45?"inline-":"")+"box$3$1"+Ut+"$2$3$1"+Qt+"$2box$3")+l;case 100:return bt(l,":",":"+Qt)+l}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(l,"scroll-","scroll-snap-")+l}return l}function Fr(l,r){for(var c="",o=0;o<l.length;o++)c+=r(l[o],o,l,r)||"";return c}function z2(l,r,c,o){switch(l.type){case g2:if(l.children.length)break;case m2:case gf:return l.return=l.return||l.value;case Nm:return"";case Um:return l.return=l.value+"{"+Fr(l.children,o)+"}";case ic:if(!wa(l.value=l.props.join(",")))return""}return wa(c=Fr(l.children,o))?l.return=l.value+"{"+c+"}":""}function D2(l){var r=Lm(l);return function(c,o,s,d){for(var m="",x=0;x<r;x++)m+=l[x](c,o,s,d)||"";return m}}function j2(l){return function(r){r.root||(r=r.return)&&l(r)}}function O2(l,r,c,o){if(l.length>-1&&!l.return)switch(l.type){case gf:l.return=km(l.value,l.length,c);return;case Um:return Fr([Tn(l,{value:bt(l.value,"@","@"+Ut)})],o);case ic:if(l.length)return y2(c=l.props,function(s){switch($a(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ll(Tn(l,{props:[bt(s,/:(read-\w+)/,":"+fu+"$1")]})),Ll(Tn(l,{props:[s]})),Ws(l,{props:Up(c,o)});break;case"::placeholder":Ll(Tn(l,{props:[bt(s,/:(plac\w+)/,":"+Ut+"input-$1")]})),Ll(Tn(l,{props:[bt(s,/:(plac\w+)/,":"+fu+"$1")]})),Ll(Tn(l,{props:[bt(s,/:(plac\w+)/,Qt+"input-$1")]})),Ll(Tn(l,{props:[s]})),Ws(l,{props:Up(c,o)});break}return""})}}var M2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},$e={},Fl=typeof process<"u"&&$e!==void 0&&($e.REACT_APP_SC_ATTR||$e.SC_ATTR)||"data-styled",qm="active",Gm="data-styled-version",oc="6.1.19",yf=`/*!sc*/
`,Jr=typeof window<"u"&&typeof document<"u",N2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&$e.REACT_APP_SC_DISABLE_SPEEDY!==""?$e.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&$e.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&$e!==void 0&&$e.SC_DISABLE_SPEEDY!==void 0&&$e.SC_DISABLE_SPEEDY!==""&&$e.SC_DISABLE_SPEEDY!=="false"&&$e.SC_DISABLE_SPEEDY),U2={},sc=Object.freeze([]),Jl=Object.freeze({});function Ym(l,r,c){return c===void 0&&(c=Jl),l.theme!==c.theme&&l.theme||r||c.theme}var Xm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),H2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,B2=/(^-|-$)/g;function Lp(l){return l.replace(H2,"-").replace(B2,"")}var L2=/(a)(d)/gi,Ur=52,Vp=function(l){return String.fromCharCode(l+(l>25?39:97))};function Is(l){var r,c="";for(r=Math.abs(l);r>Ur;r=r/Ur|0)c=Vp(r%Ur)+c;return(Vp(r%Ur)+c).replace(L2,"$1-$2")}var Hs,$m=5381,$l=function(l,r){for(var c=r.length;c;)l=33*l^r.charCodeAt(--c);return l},Qm=function(l){return $l($m,l)};function Zm(l){return Is(Qm(l)>>>0)}function V2(l){return l.displayName||l.name||"Component"}function Bs(l){return typeof l=="string"&&!0}var Km=typeof Symbol=="function"&&Symbol.for,Wm=Km?Symbol.for("react.memo"):60115,k2=Km?Symbol.for("react.forward_ref"):60112,q2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},G2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Y2=((Hs={})[k2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hs[Wm]=Fm,Hs);function kp(l){return("type"in(r=l)&&r.type.$$typeof)===Wm?Fm:"$$typeof"in l?Y2[l.$$typeof]:q2;var r}var X2=Object.defineProperty,$2=Object.getOwnPropertyNames,qp=Object.getOwnPropertySymbols,Q2=Object.getOwnPropertyDescriptor,Z2=Object.getPrototypeOf,Gp=Object.prototype;function Jm(l,r,c){if(typeof r!="string"){if(Gp){var o=Z2(r);o&&o!==Gp&&Jm(l,o,c)}var s=$2(r);qp&&(s=s.concat(qp(r)));for(var d=kp(l),m=kp(r),x=0;x<s.length;++x){var y=s[x];if(!(y in G2||c&&c[y]||m&&y in m||d&&y in d)){var g=Q2(r,y);try{X2(l,y,g)}catch{}}}}return l}function Il(l){return typeof l=="function"}function vf(l){return typeof l=="object"&&"styledComponentId"in l}function Xn(l,r){return l&&r?"".concat(l," ").concat(r):l||r||""}function Ps(l,r){if(l.length===0)return"";for(var c=l[0],o=1;o<l.length;o++)c+=l[o];return c}function gu(l){return l!==null&&typeof l=="object"&&l.constructor.name===Object.name&&!("props"in l&&l.$$typeof)}function tf(l,r,c){if(c===void 0&&(c=!1),!c&&!gu(l)&&!Array.isArray(l))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)l[o]=tf(l[o],r[o]);else if(gu(r))for(var o in r)l[o]=tf(l[o],r[o]);return l}function bf(l,r){Object.defineProperty(l,"toString",{value:r})}function bu(l){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(l," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var K2=(function(){function l(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return l.prototype.indexOfGroup=function(r){for(var c=0,o=0;o<r;o++)c+=this.groupSizes[o];return c},l.prototype.insertRules=function(r,c){if(r>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,d=s;r>=d;)if((d<<=1)<0)throw bu(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(o),this.length=d;for(var m=s;m<d;m++)this.groupSizes[m]=0}for(var x=this.indexOfGroup(r+1),y=(m=0,c.length);m<y;m++)this.tag.insertRule(x,c[m])&&(this.groupSizes[r]++,x++)},l.prototype.clearGroup=function(r){if(r<this.length){var c=this.groupSizes[r],o=this.indexOfGroup(r),s=o+c;this.groupSizes[r]=0;for(var d=o;d<s;d++)this.tag.deleteRule(o)}},l.prototype.getGroup=function(r){var c="";if(r>=this.length||this.groupSizes[r]===0)return c;for(var o=this.groupSizes[r],s=this.indexOfGroup(r),d=s+o,m=s;m<d;m++)c+="".concat(this.tag.getRule(m)).concat(yf);return c},l})(),Zr=new Map,Ir=new Map,Kr=1,Hr=function(l){if(Zr.has(l))return Zr.get(l);for(;Ir.has(Kr);)Kr++;var r=Kr++;return Zr.set(l,r),Ir.set(r,l),r},W2=function(l,r){Kr=r+1,Zr.set(l,r),Ir.set(r,l)},F2="style[".concat(Fl,"][").concat(Gm,'="').concat(oc,'"]'),J2=new RegExp("^".concat(Fl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),I2=function(l,r,c){for(var o,s=c.split(","),d=0,m=s.length;d<m;d++)(o=s[d])&&l.registerName(r,o)},P2=function(l,r){for(var c,o=((c=r.textContent)!==null&&c!==void 0?c:"").split(yf),s=[],d=0,m=o.length;d<m;d++){var x=o[d].trim();if(x){var y=x.match(J2);if(y){var g=0|parseInt(y[1],10),b=y[2];g!==0&&(W2(b,g),I2(l,b,y[3]),l.getTag().insertRules(g,s)),s.length=0}else s.push(x)}}},Yp=function(l){for(var r=document.querySelectorAll(F2),c=0,o=r.length;c<o;c++){var s=r[c];s&&s.getAttribute(Fl)!==qm&&(P2(l,s),s.parentNode&&s.parentNode.removeChild(s))}};function tv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Im=function(l){var r=document.head,c=l||r,o=document.createElement("style"),s=(function(x){var y=Array.from(x.querySelectorAll("style[".concat(Fl,"]")));return y[y.length-1]})(c),d=s!==void 0?s.nextSibling:null;o.setAttribute(Fl,qm),o.setAttribute(Gm,oc);var m=tv();return m&&o.setAttribute("nonce",m),c.insertBefore(o,d),o},ev=(function(){function l(r){this.element=Im(r),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){if(c.sheet)return c.sheet;for(var o=document.styleSheets,s=0,d=o.length;s<d;s++){var m=o[s];if(m.ownerNode===c)return m}throw bu(17)})(this.element),this.length=0}return l.prototype.insertRule=function(r,c){try{return this.sheet.insertRule(c,r),this.length++,!0}catch{return!1}},l.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},l.prototype.getRule=function(r){var c=this.sheet.cssRules[r];return c&&c.cssText?c.cssText:""},l})(),av=(function(){function l(r){this.element=Im(r),this.nodes=this.element.childNodes,this.length=0}return l.prototype.insertRule=function(r,c){if(r<=this.length&&r>=0){var o=document.createTextNode(c);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},l.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},l.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},l})(),nv=(function(){function l(r){this.rules=[],this.length=0}return l.prototype.insertRule=function(r,c){return r<=this.length&&(this.rules.splice(r,0,c),this.length++,!0)},l.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},l.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},l})(),Xp=Jr,lv={isServer:!Jr,useCSSOMInjection:!N2},Pr=(function(){function l(r,c,o){r===void 0&&(r=Jl),c===void 0&&(c={});var s=this;this.options=_e(_e({},lv),r),this.gs=c,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Jr&&Xp&&(Xp=!1,Yp(this)),bf(this,function(){return(function(d){for(var m=d.getTag(),x=m.length,y="",g=function(R){var j=(function(W){return Ir.get(W)})(R);if(j===void 0)return"continue";var V=d.names.get(j),G=m.getGroup(R);if(V===void 0||!V.size||G.length===0)return"continue";var Y="".concat(Fl,".g").concat(R,'[id="').concat(j,'"]'),X="";V!==void 0&&V.forEach(function(W){W.length>0&&(X+="".concat(W,","))}),y+="".concat(G).concat(Y,'{content:"').concat(X,'"}').concat(yf)},b=0;b<x;b++)g(b);return y})(s)})}return l.registerId=function(r){return Hr(r)},l.prototype.rehydrate=function(){!this.server&&Jr&&Yp(this)},l.prototype.reconstructWithOptions=function(r,c){return c===void 0&&(c=!0),new l(_e(_e({},this.options),r),this.gs,c&&this.names||void 0)},l.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},l.prototype.getTag=function(){return this.tag||(this.tag=(r=(function(c){var o=c.useCSSOMInjection,s=c.target;return c.isServer?new nv(s):o?new ev(s):new av(s)})(this.options),new K2(r)));var r},l.prototype.hasNameForId=function(r,c){return this.names.has(r)&&this.names.get(r).has(c)},l.prototype.registerName=function(r,c){if(Hr(r),this.names.has(r))this.names.get(r).add(c);else{var o=new Set;o.add(c),this.names.set(r,o)}},l.prototype.insertRules=function(r,c,o){this.registerName(r,c),this.getTag().insertRules(Hr(r),o)},l.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},l.prototype.clearRules=function(r){this.getTag().clearGroup(Hr(r)),this.clearNames(r)},l.prototype.clearTag=function(){this.tag=void 0},l})(),iv=/&/g,uv=/^\s*\/\/.*$/gm;function Pm(l,r){return l.map(function(c){return c.type==="rule"&&(c.value="".concat(r," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(r," ")),c.props=c.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Pm(c.children,r)),c})}function rv(l){var r,c,o,s=Jl,d=s.options,m=d===void 0?Jl:d,x=s.plugins,y=x===void 0?sc:x,g=function(j,V,G){return G.startsWith(c)&&G.endsWith(c)&&G.replaceAll(c,"").length>0?".".concat(r):j},b=y.slice();b.push(function(j){j.type===ic&&j.value.includes("&")&&(j.props[0]=j.props[0].replace(iv,c).replace(o,g))}),m.prefix&&b.push(O2),b.push(z2);var R=function(j,V,G,Y){V===void 0&&(V=""),G===void 0&&(G=""),Y===void 0&&(Y="&"),r=Y,c=V,o=new RegExp("\\".concat(c,"\\b"),"g");var X=j.replace(uv,""),W=C2(G||V?"".concat(G," ").concat(V," { ").concat(X," }"):X);m.namespace&&(W=Pm(W,m.namespace));var U=[];return Fr(W,D2(b.concat(j2(function($){return U.push($)})))),U};return R.hash=y.length?y.reduce(function(j,V){return V.name||bu(15),$l(j,V.name)},$m).toString():"",R}var cv=new Pr,ef=rv(),tg=pt.createContext({shouldForwardProp:void 0,styleSheet:cv,stylis:ef});tg.Consumer;pt.createContext(void 0);function af(){return L.useContext(tg)}var ov=(function(){function l(r,c){var o=this;this.inject=function(s,d){d===void 0&&(d=ef);var m=o.name+d.hash;s.hasNameForId(o.id,m)||s.insertRules(o.id,m,d(o.rules,m,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=c,bf(this,function(){throw bu(12,String(o.name))})}return l.prototype.getName=function(r){return r===void 0&&(r=ef),this.name+r.hash},l})(),sv=function(l){return l>="A"&&l<="Z"};function $p(l){for(var r="",c=0;c<l.length;c++){var o=l[c];if(c===1&&o==="-"&&l[0]==="-")return l;sv(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var eg=function(l){return l==null||l===!1||l===""},ag=function(l){var r,c,o=[];for(var s in l){var d=l[s];l.hasOwnProperty(s)&&!eg(d)&&(Array.isArray(d)&&d.isCss||Il(d)?o.push("".concat($p(s),":"),d,";"):gu(d)?o.push.apply(o,mu(mu(["".concat(s," {")],ag(d),!1),["}"],!1)):o.push("".concat($p(s),": ").concat((r=s,(c=d)==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||r in M2||r.startsWith("--")?String(c).trim():"".concat(c,"px")),";")))}return o};function An(l,r,c,o){if(eg(l))return[];if(vf(l))return[".".concat(l.styledComponentId)];if(Il(l)){if(!Il(d=l)||d.prototype&&d.prototype.isReactComponent||!r)return[l];var s=l(r);return An(s,r,c,o)}var d;return l instanceof ov?c?(l.inject(c,o),[l.getName(o)]):[l]:gu(l)?ag(l):Array.isArray(l)?Array.prototype.concat.apply(sc,l.map(function(m){return An(m,r,c,o)})):[l.toString()]}function ng(l){for(var r=0;r<l.length;r+=1){var c=l[r];if(Il(c)&&!vf(c))return!1}return!0}var fv=Qm(oc),dv=(function(){function l(r,c,o){this.rules=r,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&ng(r),this.componentId=c,this.baseHash=$l(fv,c),this.baseStyle=o,Pr.registerId(c)}return l.prototype.generateAndInjectStyles=function(r,c,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,c,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))s=Xn(s,this.staticRulesId);else{var d=Ps(An(this.rules,r,c,o)),m=Is($l(this.baseHash,d)>>>0);if(!c.hasNameForId(this.componentId,m)){var x=o(d,".".concat(m),void 0,this.componentId);c.insertRules(this.componentId,m,x)}s=Xn(s,m),this.staticRulesId=m}else{for(var y=$l(this.baseHash,o.hash),g="",b=0;b<this.rules.length;b++){var R=this.rules[b];if(typeof R=="string")g+=R;else if(R){var j=Ps(An(R,r,c,o));y=$l(y,j+b),g+=j}}if(g){var V=Is(y>>>0);c.hasNameForId(this.componentId,V)||c.insertRules(this.componentId,V,o(g,".".concat(V),void 0,this.componentId)),s=Xn(s,V)}}return s},l})(),Sf=pt.createContext(void 0);Sf.Consumer;var Ls={};function hv(l,r,c){var o=vf(l),s=l,d=!Bs(l),m=r.attrs,x=m===void 0?sc:m,y=r.componentId,g=y===void 0?(function(at,Q){var ct=typeof at!="string"?"sc":Lp(at);Ls[ct]=(Ls[ct]||0)+1;var et="".concat(ct,"-").concat(Zm(oc+ct+Ls[ct]));return Q?"".concat(Q,"-").concat(et):et})(r.displayName,r.parentComponentId):y,b=r.displayName,R=b===void 0?(function(at){return Bs(at)?"styled.".concat(at):"Styled(".concat(V2(at),")")})(l):b,j=r.displayName&&r.componentId?"".concat(Lp(r.displayName),"-").concat(r.componentId):r.componentId||g,V=o&&s.attrs?s.attrs.concat(x).filter(Boolean):x,G=r.shouldForwardProp;if(o&&s.shouldForwardProp){var Y=s.shouldForwardProp;if(r.shouldForwardProp){var X=r.shouldForwardProp;G=function(at,Q){return Y(at,Q)&&X(at,Q)}}else G=Y}var W=new dv(c,j,o?s.componentStyle:void 0);function U(at,Q){return(function(ct,et,Dt){var St=ct.attrs,Kt=ct.componentStyle,$t=ct.defaultProps,st=ct.foldedComponentIds,Tt=ct.styledComponentId,Mt=ct.target,Rt=pt.useContext(Sf),O=af(),K=ct.shouldForwardProp||O.shouldForwardProp,it=Ym(et,Rt,$t)||Jl,mt=(function(vt,ot,Jt){for(var jt,le=_e(_e({},ot),{className:void 0,theme:Jt}),ra=0;ra<vt.length;ra+=1){var ca=Il(jt=vt[ra])?jt(le):jt;for(var Ce in ca)le[Ce]=Ce==="className"?Xn(le[Ce],ca[Ce]):Ce==="style"?_e(_e({},le[Ce]),ca[Ce]):ca[Ce]}return ot.className&&(le.className=Xn(le.className,ot.className)),le})(St,et,it),S=mt.as||Mt,q={};for(var J in mt)mt[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&mt.theme===it||(J==="forwardedAs"?q.as=mt.forwardedAs:K&&!K(J,S)||(q[J]=mt[J]));var I=(function(vt,ot){var Jt=af(),jt=vt.generateAndInjectStyles(ot,Jt.styleSheet,Jt.stylis);return jt})(Kt,mt),ut=Xn(st,Tt);return I&&(ut+=" "+I),mt.className&&(ut+=" "+mt.className),q[Bs(S)&&!Xm.has(S)?"class":"className"]=ut,Dt&&(q.ref=Dt),L.createElement(S,q)})($,at,Q)}U.displayName=R;var $=pt.forwardRef(U);return $.attrs=V,$.componentStyle=W,$.displayName=R,$.shouldForwardProp=G,$.foldedComponentIds=o?Xn(s.foldedComponentIds,s.styledComponentId):"",$.styledComponentId=j,$.target=o?s.target:l,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(at){this._foldedDefaultProps=o?(function(Q){for(var ct=[],et=1;et<arguments.length;et++)ct[et-1]=arguments[et];for(var Dt=0,St=ct;Dt<St.length;Dt++)tf(Q,St[Dt],!0);return Q})({},s.defaultProps,at):at}}),bf($,function(){return".".concat($.styledComponentId)}),d&&Jm($,l,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function Qp(l,r){for(var c=[l[0]],o=0,s=r.length;o<s;o+=1)c.push(r[o],l[o+1]);return c}var Zp=function(l){return Object.assign(l,{isCss:!0})};function Kn(l){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];if(Il(l)||gu(l))return Zp(An(Qp(sc,mu([l],r,!0))));var o=l;return r.length===0&&o.length===1&&typeof o[0]=="string"?An(o):Zp(An(Qp(o,r)))}function nf(l,r,c){if(c===void 0&&(c=Jl),!r)throw bu(1,r);var o=function(s){for(var d=[],m=1;m<arguments.length;m++)d[m-1]=arguments[m];return l(r,c,Kn.apply(void 0,mu([s],d,!1)))};return o.attrs=function(s){return nf(l,r,_e(_e({},c),{attrs:Array.prototype.concat(c.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return nf(l,r,_e(_e({},c),s))},o}var lg=function(l){return nf(hv,l)},H=lg;Xm.forEach(function(l){H[l]=lg(l)});var pv=(function(){function l(r,c){this.rules=r,this.componentId=c,this.isStatic=ng(r),Pr.registerId(this.componentId+1)}return l.prototype.createStyles=function(r,c,o,s){var d=s(Ps(An(this.rules,c,o,s)),""),m=this.componentId+r;o.insertRules(m,m,d)},l.prototype.removeStyles=function(r,c){c.clearRules(this.componentId+r)},l.prototype.renderStyles=function(r,c,o,s){r>2&&Pr.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,c,o,s)},l})();function mv(l){for(var r=[],c=1;c<arguments.length;c++)r[c-1]=arguments[c];var o=Kn.apply(void 0,mu([l],r,!1)),s="sc-global-".concat(Zm(JSON.stringify(o))),d=new pv(o,s),m=function(y){var g=af(),b=pt.useContext(Sf),R=pt.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&x(R,y,g.styleSheet,b,g.stylis),pt.useLayoutEffect(function(){if(!g.styleSheet.server)return x(R,y,g.styleSheet,b,g.stylis),function(){return d.removeStyles(R,g.styleSheet)}},[R,y,g.styleSheet,b,g.stylis]),null};function x(y,g,b,R,j){if(d.isStatic)d.renderStyles(y,U2,b,j);else{var V=_e(_e({},g),{theme:Ym(g,R,m.defaultProps)});d.renderStyles(y,V,b,j)}}return pt.memo(m)}const je=Kn`
  ${l=>l.fontWeight&&`font-weight: ${l.fontWeight};`}
  color: ${l=>l.color?l.color.startsWith("--")?`var(${l.color})`:l.color:"var(--primary-color-text-grey)"};
  user-select: ${l=>l.nonSelect?"none":"auto"};
  text-align: ${l=>l.textAlign?l.textAlign:"initial"};
  white-space: ${l=>l.nowrap?"nowrap":"normal"};
  line-height: ${l=>l.lineHeight?`${l.lineHeight}px`:"normal"};
  text-transform: ${l=>l.textTransform?l.textTransform:"none"};
  word-break: ${l=>l.wordBreak?l.wordBreak:"normal"};
  overflow: ${l=>l.overflow||"visible"};
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  ${l=>l.letterSpacing&&`letter-spacing: ${l.letterSpacing}px;`}

  ${l=>l.withEllipsis?Kn`
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        `:""}
`,fc=H.h1`
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
`,xa=H.h2`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 45px;
  line-height: 1.1;
  font-weight: 400;
  font-variant-numeric: lining-nums;

  @media (max-width: 780px) {
    font-size: 34px;
  }

  @media (max-width: 490px) {
    font-size: 30px;
    text-align: center;
  }
`,Kp=H.h2`
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
`,Wp=H.h3`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 400;
  line-height: 1.1;

  @media (max-width: 780px) {
    font-size: 34px;
  }
`,Ql=H.h3`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  line-height: 1.2;
  letter-spacing: 0.84px;
`,su=H.h4`
  ${je}
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  line-height: 1.2;
  letter-spacing: 0.84px;
`,au=H.h6`
  ${je}
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;

  @media (max-width: 780px) {
    font-size: 20px;
  }
`;H.h6`
  ${je}
  font-size: 18px;
  line-height: 27px;
`;const gv=H.p`
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
`,lf=H.p`
  ${je}
  font-size: 24px;
  line-height: 1.3;

  @media (max-width: 1125px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`,xv=H.p`
  ${je}
  font-size: 22px;
  line-height: 1.1;

  @media (max-width: 1125px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,Br=H.p`
  ${je}
  font-size: 22px;
  line-height: 1.3;
  font-weight: 400;

  @media (max-width: 780px) {
    font-size: 20px;
  }
`,uf=H.p`
  ${je}
  font-size: 24px;
  line-height: 1.3;
  font-weight: 400;

  @media (max-width: 780px) {
    font-size: 22px;
  }
`,yt=H.p`
  ${je}
  font-size: ${l=>l.fontSize||16}px;
  line-height: ${l=>l.lineHeight||1.3};
`,rf=H.p`
  ${je}
  font-size: ${l=>l.fontSize||14}px;
  line-height: ${l=>l.lineHeight||"18px"};
  letter-spacing: ${l=>l.letterSpacing||.2}px;
`,yv="/startup-landing/assets/background-about-DnCb4yId.png",vv=H.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  padding: 50px 90px;
  background-image: url(${yv});
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
`,bv=H.div`
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
`,Sv=H.div`
  padding: 30px 25px;
  display: flex;
  max-width: 250px;
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
`,Ev=H.div`
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 282px;
  width: 100%;
  min-height: 230px;
  background-color: var(--primary-color-light-rose);
  border-radius: 10px;

  ${xa} {
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
`,Tv=H.div`
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
`,Av=H.div`
  padding: 30px 25px;
  display: flex;
  max-width: 327px;
  width: 100%;
  min-height: 225px;
  background-color: var(--primary-color-beige);
  border-radius: 10px;
  white-space: pre-line;

  > p {
    white-space: pre-line;
  }

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
`,Vl={Container:vv,Content:bv,Block1Wrapper:Sv,Block2Wrapper:Ev,Block3Wrapper:Tv,Block4Wrapper:Av},wv="Обо мне",_v="20+",Lr={block1:"Психолог, фасилитатор, преподаватель гештальт-подхода",block2:"лет опыта — в индивидуальной работе, в команде, в бизнесе",block3:`Мой метод — это комбинация гештальт-подхода, фасилитации,
    системного мышления и стратегического видения.`,block4:`Метод Азидеса — один из ориентиров в моей работе.
    Он помогает глубже понимать, как формируются смыслы, и как выстраиваются зрелые,
    живые системы — от команды до всей организации.`},Cv=()=>p.jsxs(Vl.Container,{id:"about",children:[p.jsx(xa,{lineHeight:1.1,children:wv}),p.jsxs(Vl.Content,{children:[p.jsx(Vl.Block1Wrapper,{children:p.jsx(yt,{children:Lr.block1})}),p.jsxs(Vl.Block2Wrapper,{children:[p.jsx(xa,{lineHeight:1.1,children:_v}),p.jsx(yt,{children:Lr.block2})]}),p.jsx(Vl.Block3Wrapper,{children:p.jsx(yt,{children:Lr.block3})}),p.jsx(Vl.Block4Wrapper,{children:p.jsx(yt,{children:Lr.block4})})]})]}),Rv=H.div`
  padding: ${l=>l.$padding||"15px 20px"};
  border-radius: 10px;
  background: ${l=>l.$backgroundColor?l.$backgroundColor.startsWith("--")?`var(${l.$backgroundColor})`:l.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${l=>l.$maxWidth&&`
    max-width: ${l.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`,ig={WidgetContainer:Rv},Ke=({text:l,backgroundColor:r,fontSize:c=16,maxWidth:o,padding:s,lineHeight:d,letterSpacing:m})=>p.jsx(ig.WidgetContainer,{$backgroundColor:r,$padding:s,$maxWidth:o,children:p.jsx(yt,{fontSize:c,lineHeight:d,letterSpacing:m,children:l})}),zv=H.div`
  padding: 40px;
  border-radius: 10px;
  background: ${l=>l.$backgroundColor?l.$backgroundColor.startsWith("--")?`var(${l.$backgroundColor})`:l.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${l=>l.$maxWidth&&`
    max-width: ${l.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;

  @media (max-width: 1150px) {
    padding: 35px;
  }

  @media (max-width: 490px) {
    padding: 25px;
  }
`,Dv={WidgetContainer:zv},kl=({text:l,backgroundColor:r,maxWidth:c})=>p.jsx(Dv.WidgetContainer,{$backgroundColor:r,$maxWidth:c,children:p.jsx(lf,{children:l})}),jv="/startup-landing/assets/4-CNYjYSST.png",Ov="/startup-landing/assets/iryna-1-8KFXe4Zb.png",Mv=H.div`
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
`,Nv=H.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`,Uv=H.div`
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
`,Hv=H.div`
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
`,Bv=H.div`
  max-width: 390px;
  width: 100%;
  min-height: 285px;
  border-radius: 10px;
  background-image: url(${Ov});
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
`,Lv=H.div`
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
`,Vv=H.div`
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
`,kv=H.div`
  max-width: 190px;
  width: 100%;
  min-height: 205px;
  border-radius: 10px;
  background-image: url(${jv});
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
`,qv=H.div`
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
`,Gv=H.div`
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
`,Yv=H.div`
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
`,Xv=H.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,ae={Container:Mv,ContentWrapper:Nv,FirstRow:Uv,SecondRow:Vv,FirstWidgetWrapper:Hv,Iryna1:Bv,MixWidgetContainer:Lv,Image4:kv,SecondWidgetWrapper:qv,LastWidgetWrapper:Gv,ThirdRow:Yv,WidgetWrapper:Xv},$v="О моем подходе",Fp=`Я помогаю собственникам бизнеса и командам выстраивать
  культуру взаимодействия, в которой энергия людей направлена на общее движение вперёд.`,Jp="Работа строится не на «чинить» и не на «учить жить»,",Ip=`Это не классический консалтинг и не терапия — это архитектура трансформаций,
  в которых сохраняется уникальность, а изменения происходят изнутри.`,Pp=`Подход основан на гештальт-методе, системном мышлении и принципах Адизеса — для
  тех, кто ищет не шаблоны, а живые решения.`,Qv=()=>{const[l,r]=L.useState(!1);return L.useEffect(()=>{const c=()=>{r(window.innerWidth<=1024)};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),p.jsxs(ae.Container,{id:"approach",children:[p.jsx(xa,{children:$v}),p.jsx(ae.ContentWrapper,{children:l?p.jsxs(p.Fragment,{children:[p.jsxs(ae.FirstRow,{children:[p.jsx(ae.FirstWidgetWrapper,{children:p.jsx(kl,{text:Fp,maxWidth:"100%"})}),p.jsx(ae.Iryna1,{})]}),p.jsxs(ae.SecondRow,{children:[p.jsx(ae.Image4,{}),p.jsxs(ae.MixWidgetContainer,{children:[p.jsx(lf,{fontSize:24,children:Jp}),p.jsxs(ae.WidgetWrapper,{children:[p.jsx(Ke,{text:"а на уважении к опыту, к процессу",fontSize:24,padding:"10px 15px",maxWidth:"fit-content"}),p.jsx(Ke,{text:"и к реальности бизнеса.",fontSize:24,padding:"10px 15px",backgroundColor:"--primary-color-medium-rose",maxWidth:"fit-content"})]})]})]}),p.jsxs(ae.ThirdRow,{children:[p.jsx(ae.SecondWidgetWrapper,{children:p.jsx(kl,{text:Ip,fontSize:24,backgroundColor:"--primary-color-super-light-beige",maxWidth:"100%"})}),p.jsx(ae.LastWidgetWrapper,{children:p.jsx(kl,{text:Pp,fontSize:24,backgroundColor:"linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)",maxWidth:"100%"})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs(ae.FirstRow,{children:[p.jsx(ae.FirstWidgetWrapper,{children:p.jsx(kl,{text:Fp,maxWidth:"100%"})}),p.jsx(ae.Iryna1,{}),p.jsxs(ae.MixWidgetContainer,{children:[p.jsx(lf,{fontSize:24,children:Jp}),p.jsxs(ae.WidgetWrapper,{children:[p.jsx(Ke,{text:"а на уважении к опыту, к процессу",fontSize:24,padding:"10px 15px",maxWidth:"fit-content"}),p.jsx(Ke,{text:"и к реальности бизнеса.",fontSize:24,padding:"10px 15px",backgroundColor:"--primary-color-medium-rose",maxWidth:"fit-content"})]})]})]}),p.jsxs(ae.SecondRow,{children:[p.jsx(ae.Image4,{}),p.jsx(ae.SecondWidgetWrapper,{children:p.jsx(kl,{text:Ip,fontSize:24,backgroundColor:"--primary-color-super-light-beige",maxWidth:"100%"})}),p.jsx(ae.LastWidgetWrapper,{children:p.jsx(kl,{text:Pp,fontSize:24,backgroundColor:"linear-gradient(0deg, #E6D2E1 0%, #F7F4F1 100%)",maxWidth:"100%"})})]})]})})]})},Zv="data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='41.59'%20height='41.59'%20rx='7'%20fill='white'/%3e%3cpath%20d='M24.6748%2021.8H22.3311V28.8H19.2061V21.8H16.6436V18.925H19.2061V16.7063C19.2061%2014.2063%2020.7061%2012.8%2022.9873%2012.8C24.0811%2012.8%2025.2373%2013.0188%2025.2373%2013.0188V15.4875H23.9561C22.7061%2015.4875%2022.3311%2016.2375%2022.3311%2017.05V18.925H25.1123L24.6748%2021.8Z'%20fill='%232D2D2D'/%3e%3ca%20href='https://www.figma.com/design/aXUfYSl5s2MZJU0GcGxzrX?node-id=47-451'%3e%3crect%20fill='black'%20fill-opacity='0'%20x='0.15625'%20y='-1.2'%20width='10'%20height='18.4'/%3e%3c/a%3e%3c/svg%3e",Kv="data:image/svg+xml,%3csvg%20width='43'%20height='42'%20viewBox='0%200%2043%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.859863'%20width='41.59'%20height='41.59'%20rx='7'%20fill='white'/%3e%3cpath%20d='M21.8409%2017.2063C23.8097%2017.2063%2025.4347%2018.8313%2025.4347%2020.8C25.4347%2022.8%2023.8097%2024.3938%2021.8409%2024.3938C19.8409%2024.3938%2018.2472%2022.8%2018.2472%2020.8C18.2472%2018.8313%2019.8409%2017.2063%2021.8409%2017.2063ZM21.8409%2023.1438C23.1222%2023.1438%2024.1534%2022.1125%2024.1534%2020.8C24.1534%2019.5188%2023.1222%2018.4875%2021.8409%2018.4875C20.5284%2018.4875%2019.4972%2019.5188%2019.4972%2020.8C19.4972%2022.1125%2020.5597%2023.1438%2021.8409%2023.1438ZM26.4034%2017.0813C26.4034%2017.55%2026.0284%2017.925%2025.5597%2017.925C25.0909%2017.925%2024.7159%2017.55%2024.7159%2017.0813C24.7159%2016.6125%2025.0909%2016.2375%2025.5597%2016.2375C26.0284%2016.2375%2026.4034%2016.6125%2026.4034%2017.0813ZM28.7784%2017.925C28.8409%2019.0813%2028.8409%2022.55%2028.7784%2023.7063C28.7159%2024.8313%2028.4659%2025.8%2027.6534%2026.6438C26.8409%2027.4563%2025.8409%2027.7063%2024.7159%2027.7688C23.5597%2027.8313%2020.0909%2027.8313%2018.9347%2027.7688C17.8097%2027.7063%2016.8409%2027.4563%2015.9972%2026.6438C15.1847%2025.8%2014.9347%2024.8313%2014.8722%2023.7063C14.8097%2022.55%2014.8097%2019.0813%2014.8722%2017.925C14.9347%2016.8%2015.1847%2015.8%2015.9972%2014.9875C16.8409%2014.175%2017.8097%2013.925%2018.9347%2013.8625C20.0909%2013.8%2023.5597%2013.8%2024.7159%2013.8625C25.8409%2013.925%2026.8409%2014.175%2027.6534%2014.9875C28.4659%2015.8%2028.7159%2016.8%2028.7784%2017.925ZM27.2784%2024.925C27.6534%2024.0188%2027.5597%2021.8313%2027.5597%2020.8C27.5597%2019.8%2027.6534%2017.6125%2027.2784%2016.675C27.0284%2016.0813%2026.5597%2015.5813%2025.9659%2015.3625C25.0284%2014.9875%2022.8409%2015.0813%2021.8409%2015.0813C20.8097%2015.0813%2018.6222%2014.9875%2017.7159%2015.3625C17.0909%2015.6125%2016.6222%2016.0813%2016.3722%2016.675C15.9972%2017.6125%2016.0909%2019.8%2016.0909%2020.8C16.0909%2021.8313%2015.9972%2024.0188%2016.3722%2024.925C16.6222%2025.55%2017.0909%2026.0188%2017.7159%2026.2688C18.6222%2026.6438%2020.8097%2026.55%2021.8409%2026.55C22.8409%2026.55%2025.0284%2026.6438%2025.9659%2026.2688C26.5597%2026.0188%2027.0597%2025.55%2027.2784%2024.925Z'%20fill='%232D2D2D'/%3e%3ca%20href='https://www.figma.com/design/aXUfYSl5s2MZJU0GcGxzrX?node-id=47-451'%3e%3crect%20fill='black'%20fill-opacity='0'%20x='0.18125'%20y='-1.2'%20width='14'%20height='18.4'/%3e%3c/a%3e%3c/svg%3e",Wv="data:image/svg+xml,%3csvg%20width='26'%20height='22'%20viewBox='0%200%2026%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.63053%2010.1169C1.68565%2010.0891%201.74079%2010.0628%201.79453%2010.0378C2.72874%209.60212%203.67535%209.19419%204.62058%208.78627C4.67156%208.78627%204.75697%208.72661%204.80519%208.70718C4.87822%208.67527%204.95126%208.64475%205.02429%208.61283L5.44455%208.43107C5.72564%208.31036%206.00534%208.18965%206.28642%208.06893C6.84723%207.82751%207.40802%207.58609%207.96882%207.34327C9.09042%206.86043%2010.2134%206.37619%2011.335%205.89334C12.4566%205.41049%2013.5796%204.92626%2014.7012%204.44341C15.8228%203.96056%2016.9458%203.47632%2018.0674%202.99348C19.189%202.51063%2020.312%202.02639%2021.4336%201.54354C21.683%201.43532%2021.953%201.27437%2022.2203%201.22719C22.4449%201.18696%2022.664%201.10926%2022.89%201.06625C23.3185%200.984383%2023.7911%200.951083%2024.2017%201.13007C24.3437%201.19251%2024.4746%201.27992%2024.5834%201.38953C25.1043%201.90845%2025.0312%202.76038%2024.921%203.4902C24.1535%208.57676%2023.386%2013.6647%2022.6172%2018.7513C22.5124%2019.4492%2022.3691%2020.2151%2021.8221%2020.6563C21.3591%2021.0295%2020.7005%2021.0712%2020.1287%2020.913C19.5569%2020.7534%2019.0526%2020.419%2018.5579%2020.0902C16.5062%2018.7221%2014.4532%2017.3541%2012.4015%2015.986C11.9137%2015.6613%2011.3709%2015.2367%2011.3764%2014.6471C11.3791%2014.2919%2011.5899%2013.9755%2011.8049%2013.6938C13.5879%2011.3518%2016.1604%209.74225%2018.0743%207.50839C18.3443%207.19343%2018.5565%206.62455%2018.1859%206.44279C17.9654%206.33457%2017.7119%206.48164%2017.5107%206.62178C14.9809%208.39083%2012.4525%2010.1613%209.92269%2011.9303C9.09734%2012.5075%208.23202%2013.1014%207.23719%2013.2429C6.34707%2013.3706%205.45145%2013.1208%204.59027%2012.8655C3.86826%2012.6518%203.1476%2012.4326%202.42972%2012.2064C2.04804%2012.0871%201.65396%2011.9581%201.35909%2011.6875C1.06423%2011.417%200.894768%2010.9619%201.07252%2010.6011C1.18412%2010.375%201.40046%2010.232%201.62781%2010.1155L1.63053%2010.1169Z'%20stroke='%232D2D2D'%20stroke-width='1.2'/%3e%3c/svg%3e",ug="/startup-landing/assets/logo-C87hXLyD.svg",Fv=H.a`
  display: flex;
  align-items: center;
  gap: ${l=>l.$hasText?"10px":"0"};
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`,Jv=H.img`
  width: ${l=>l.$hasText?"24px":"41px"};
  height: ${l=>l.$hasText?"20px":"41px"};
  object-fit: contain;
  ${l=>l.$hasText&&`
    color: var(--primary-color-text-grey);
    fill: currentColor;
  `}
`,Iv=H.span`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: var(--primary-color-text-grey);
`,Vs={IconLink:Fv,Icon:Jv,LinkText:Iv},ks=({icon:l,text:r,url:c})=>{const o=!!r,s=L.useCallback(d=>{d.preventDefault(),window.open(c,"_blank","noopener,noreferrer")},[c]);return p.jsxs(Vs.IconLink,{href:c,onClick:s,$hasText:o,children:[p.jsx(Vs.Icon,{src:l,$hasText:o,alt:r||"Иконка"}),r&&p.jsx(Vs.LinkText,{children:r})]})},rg=H.a`
  font-size: 14px;
  color: var(--primary-color-text-grey);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-80);
  }
`,Pv={ScrollLink:rg},Zl=({text:l,targetId:r,onClick:c,externalUrl:o})=>{const s=d=>{o?(d.preventDefault(),window.open(o,"_blank","noopener,noreferrer")):c&&(d.preventDefault(),c())};return p.jsx(Pv.ScrollLink,{href:o||(r?`#${r}`:"#"),onClick:s,children:l})},Pl="privacy-policy",tb=H.div`
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
`,eb=H.div`
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
`,ab=H.div`
  /* display: flex; вернуть как будут ссылки на TG */
  display: none;
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
`,nb=H.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,lb=H.div`
  margin-right: 20px;

  @media (max-width: 1175px) {
    margin-right: 0;
  }
`,ib=H.img`
  width: 223px;
  height: 40px;
  object-fit: contain;

  @media (max-width: 1175px) {
    width: 190px;
    height: 34px;
  }
`,ql={Container:tb,Content:eb,Links:ab,LinksWrapper:nb,LinksWithTextWrapper:lb,Logo:ib},ub="Политика обработки персональных данных",cg=()=>{const l=()=>{const c=window.location.href.split("#")[0];window.open(`${c}#/${Pl}`,"_blank")};return p.jsx(ql.Container,{children:p.jsxs(ql.Content,{children:[p.jsx(ql.Logo,{src:ug,alt:"Логотип"}),p.jsxs(ql.Links,{children:[p.jsxs(ql.LinksWrapper,{children:[p.jsx(ks,{icon:Zv,url:"https://facebook.com/******"}),p.jsx(ks,{icon:Kv,url:"https://instagram.com/*****"})]}),p.jsx(ql.LinksWithTextWrapper,{children:p.jsx(ks,{icon:Wv,text:"telegram",url:"https://t.me/****"})})]}),p.jsx(Zl,{text:ub,targetId:Pl,onClick:l})]})})},rb="/startup-landing/assets/elegantnyi-fon-evkalipta-BTey4mXO.png",cb=H.div`
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
`,ob=H.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-left: 45px;

  @media (max-width: 1200px) {
    margin-left: 0;
  }

  @media (max-width: 490px) {
    ${xa} {
      width: 100%;
      text-align: center;
    }
  }
`,sb=H.div`
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
`,fb=H.img`
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
`,Ef=H.div`
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
`,db=H(Ef)`
  background: var(--primary-color-super-light-rose);
`,hb=H(Ef)`
  background: linear-gradient(0deg, #e8d6e3 0%, #edebe6 87%, #edebe6 100%);
`,En={Container:cb,Content:ob,InfoWrapper:sb,Img:fb,Info:Ef,InfoLightBeige:db,InfoGradient:hb},pb="Для кого",mb="Собственники и управленцы",gb="которые уже вышли из фазы выживания и готовы к новому уровню зрелости",xb="Организации",yb=`стремящиеся к живой культуре,
  ясной коммуникации и долгосрочной устойчивости`,tm=["Партнёрские команды","(2-4 человека)"],vb="особенно в случаях, когда есть сложные связи (семья, дружба, история)",bb="Специалисты",Sb=`которые хотят освоить гештальт-подход в работе c бизнесом и
  изучить метод глубоко, осознанно`,Eb=()=>p.jsxs(En.Container,{children:[p.jsxs(En.Content,{children:[p.jsx(xa,{children:pb}),p.jsxs(En.InfoWrapper,{children:[p.jsxs(En.Info,{children:[p.jsx(au,{children:mb}),p.jsx(Br,{fontSize:22,children:gb})]}),p.jsxs(En.InfoGradient,{children:[p.jsx(au,{children:xb}),p.jsx(Br,{fontSize:22,children:yb})]}),p.jsxs(En.InfoLightBeige,{children:[p.jsxs("div",{children:[p.jsx(au,{children:tm[0]}),p.jsx(au,{children:tm[1]})]}),p.jsx(Br,{fontSize:22,children:vb})]}),p.jsxs(En.Info,{children:[p.jsx(au,{children:bb}),p.jsx(Br,{fontSize:22,children:Sb})]})]})]}),p.jsx(En.Img,{src:rb,alt:"Фон с эвкалиптом"})]});var Su=l=>l.type==="checkbox",$n=l=>l instanceof Date,De=l=>l==null;const og=l=>typeof l=="object";var oe=l=>!De(l)&&!Array.isArray(l)&&og(l)&&!$n(l),sg=l=>oe(l)&&l.target?Su(l.target)?l.target.checked:l.target.value:l,Tb=l=>l.substring(0,l.search(/\.\d+(\.|$)/))||l,fg=(l,r)=>l.has(Tb(r)),Ab=l=>{const r=l.constructor&&l.constructor.prototype;return oe(r)&&r.hasOwnProperty("isPrototypeOf")},Tf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function de(l){let r;const c=Array.isArray(l),o=typeof FileList<"u"?l instanceof FileList:!1;if(l instanceof Date)r=new Date(l);else if(!(Tf&&(l instanceof Blob||o))&&(c||oe(l)))if(r=c?[]:Object.create(Object.getPrototypeOf(l)),!c&&!Ab(l))r=l;else for(const s in l)l.hasOwnProperty(s)&&(r[s]=de(l[s]));else return l;return r}var dc=l=>/^\w*$/.test(l),ne=l=>l===void 0,Af=l=>Array.isArray(l)?l.filter(Boolean):[],wf=l=>Af(l.replace(/["|']|\]/g,"").split(/\.|\[/)),P=(l,r,c)=>{if(!r||!oe(l))return c;const o=(dc(r)?[r]:wf(r)).reduce((s,d)=>De(s)?s:s[d],l);return ne(o)||o===l?ne(l[r])?c:l[r]:o},Qe=l=>typeof l=="boolean",Xt=(l,r,c)=>{let o=-1;const s=dc(r)?[r]:wf(r),d=s.length,m=d-1;for(;++o<d;){const x=s[o];let y=c;if(o!==m){const g=l[x];y=oe(g)||Array.isArray(g)?g:isNaN(+s[o+1])?{}:[]}if(x==="__proto__"||x==="constructor"||x==="prototype")return;l[x]=y,l=l[x]}};const tc={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ha={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Xa={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},dg=pt.createContext(null);dg.displayName="HookFormContext";const _f=()=>pt.useContext(dg);var hg=(l,r,c,o=!0)=>{const s={defaultValues:r._defaultValues};for(const d in l)Object.defineProperty(s,d,{get:()=>{const m=d;return r._proxyFormState[m]!==ha.all&&(r._proxyFormState[m]=!o||ha.all),c&&(c[m]=!0),l[m]}});return s};const Cf=typeof window<"u"?pt.useLayoutEffect:pt.useEffect;function wb(l){const r=_f(),{control:c=r.control,disabled:o,name:s,exact:d}=l||{},[m,x]=pt.useState(c._formState),y=pt.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return Cf(()=>c._subscribe({name:s,formState:y.current,exact:d,callback:g=>{!o&&x({...c._formState,...g})}}),[s,o,d]),pt.useEffect(()=>{y.current.isValid&&c._setValid(!0)},[c]),pt.useMemo(()=>hg(m,c,y.current,!1),[m,c])}var Ze=l=>typeof l=="string",pg=(l,r,c,o,s)=>Ze(l)?(o&&r.watch.add(l),P(c,l,s)):Array.isArray(l)?l.map(d=>(o&&r.watch.add(d),P(c,d))):(o&&(r.watchAll=!0),c),cf=l=>De(l)||!og(l);function Qa(l,r,c=new WeakSet){if(cf(l)||cf(r))return l===r;if($n(l)&&$n(r))return l.getTime()===r.getTime();const o=Object.keys(l),s=Object.keys(r);if(o.length!==s.length)return!1;if(c.has(l)||c.has(r))return!0;c.add(l),c.add(r);for(const d of o){const m=l[d];if(!s.includes(d))return!1;if(d!=="ref"){const x=r[d];if($n(m)&&$n(x)||oe(m)&&oe(x)||Array.isArray(m)&&Array.isArray(x)?!Qa(m,x,c):m!==x)return!1}}return!0}function _b(l){const r=_f(),{control:c=r.control,name:o,defaultValue:s,disabled:d,exact:m,compute:x}=l||{},y=pt.useRef(s),g=pt.useRef(x),b=pt.useRef(void 0);g.current=x;const R=pt.useMemo(()=>c._getWatch(o,y.current),[c,o]),[j,V]=pt.useState(g.current?g.current(R):R);return Cf(()=>c._subscribe({name:o,formState:{values:!0},exact:m,callback:G=>{if(!d){const Y=pg(o,c._names,G.values||c._formValues,!1,y.current);if(g.current){const X=g.current(Y);Qa(X,b.current)||(V(X),b.current=X)}else V(Y)}}}),[c,d,o,m]),pt.useEffect(()=>c._removeUnmounted()),j}function Cb(l){const r=_f(),{name:c,disabled:o,control:s=r.control,shouldUnregister:d,defaultValue:m}=l,x=fg(s._names.array,c),y=pt.useMemo(()=>P(s._formValues,c,P(s._defaultValues,c,m)),[s,c,m]),g=_b({control:s,name:c,defaultValue:y,exact:!0}),b=wb({control:s,name:c,exact:!0}),R=pt.useRef(l),j=pt.useRef(void 0),V=pt.useRef(s.register(c,{...l.rules,value:g,...Qe(l.disabled)?{disabled:l.disabled}:{}}));R.current=l;const G=pt.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!P(b.errors,c)},isDirty:{enumerable:!0,get:()=>!!P(b.dirtyFields,c)},isTouched:{enumerable:!0,get:()=>!!P(b.touchedFields,c)},isValidating:{enumerable:!0,get:()=>!!P(b.validatingFields,c)},error:{enumerable:!0,get:()=>P(b.errors,c)}}),[b,c]),Y=pt.useCallback($=>V.current.onChange({target:{value:sg($),name:c},type:tc.CHANGE}),[c]),X=pt.useCallback(()=>V.current.onBlur({target:{value:P(s._formValues,c),name:c},type:tc.BLUR}),[c,s._formValues]),W=pt.useCallback($=>{const at=P(s._fields,c);at&&$&&(at._f.ref={focus:()=>$.focus&&$.focus(),select:()=>$.select&&$.select(),setCustomValidity:Q=>$.setCustomValidity(Q),reportValidity:()=>$.reportValidity()})},[s._fields,c]),U=pt.useMemo(()=>({name:c,value:g,...Qe(o)||b.disabled?{disabled:b.disabled||o}:{},onChange:Y,onBlur:X,ref:W}),[c,o,b.disabled,Y,X,W,g]);return pt.useEffect(()=>{const $=s._options.shouldUnregister||d,at=j.current;at&&at!==c&&!x&&s.unregister(at),s.register(c,{...R.current.rules,...Qe(R.current.disabled)?{disabled:R.current.disabled}:{}});const Q=(ct,et)=>{const Dt=P(s._fields,ct);Dt&&Dt._f&&(Dt._f.mount=et)};if(Q(c,!0),$){const ct=de(P(s._options.defaultValues,c));Xt(s._defaultValues,c,ct),ne(P(s._formValues,c))&&Xt(s._formValues,c,ct)}return!x&&s.register(c),j.current=c,()=>{(x?$&&!s._state.action:$)?s.unregister(c):Q(c,!1)}},[c,s,x,d]),pt.useEffect(()=>{s._setDisabledField({disabled:o,name:c})},[o,c,s]),pt.useMemo(()=>({field:U,formState:b,fieldState:G}),[U,b,G])}const qs=l=>l.render(Cb(l));var Rb=(l,r,c,o,s)=>r?{...c[l],types:{...c[l]&&c[l].types?c[l].types:{},[o]:s||!0}}:{},du=l=>Array.isArray(l)?l:[l],em=()=>{let l=[];return{get observers(){return l},next:s=>{for(const d of l)d.next&&d.next(s)},subscribe:s=>(l.push(s),{unsubscribe:()=>{l=l.filter(d=>d!==s)}}),unsubscribe:()=>{l=[]}}};function mg(l,r){const c={};for(const o in l)if(l.hasOwnProperty(o)){const s=l[o],d=r[o];if(s&&oe(s)&&d){const m=mg(s,d);oe(m)&&(c[o]=m)}else l[o]&&(c[o]=d)}return c}var Be=l=>oe(l)&&!Object.keys(l).length,Rf=l=>l.type==="file",pa=l=>typeof l=="function",ec=l=>{if(!Tf)return!1;const r=l?l.ownerDocument:0;return l instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},gg=l=>l.type==="select-multiple",zf=l=>l.type==="radio",zb=l=>zf(l)||Su(l),Gs=l=>ec(l)&&l.isConnected;function Db(l,r){const c=r.slice(0,-1).length;let o=0;for(;o<c;)l=ne(l)?o++:l[r[o++]];return l}function jb(l){for(const r in l)if(l.hasOwnProperty(r)&&!ne(l[r]))return!1;return!0}function re(l,r){const c=Array.isArray(r)?r:dc(r)?[r]:wf(r),o=c.length===1?l:Db(l,c),s=c.length-1,d=c[s];return o&&delete o[d],s!==0&&(oe(o)&&Be(o)||Array.isArray(o)&&jb(o))&&re(l,c.slice(0,-1)),l}var Ob=l=>{for(const r in l)if(pa(l[r]))return!0;return!1};function xg(l){return Array.isArray(l)||oe(l)&&!Ob(l)}function of(l,r={}){for(const c in l)xg(l[c])?(r[c]=Array.isArray(l[c])?[]:{},of(l[c],r[c])):De(l[c])||(r[c]=!0);return r}function Xl(l,r,c){c||(c=of(r));for(const o in l)xg(l[o])?ne(r)||cf(c[o])?c[o]=of(l[o],Array.isArray(l[o])?[]:{}):Xl(l[o],De(r)?{}:r[o],c[o]):c[o]=!Qa(l[o],r[o]);return c}const am={value:!1,isValid:!1},nm={value:!0,isValid:!0};var yg=l=>{if(Array.isArray(l)){if(l.length>1){const r=l.filter(c=>c&&c.checked&&!c.disabled).map(c=>c.value);return{value:r,isValid:!!r.length}}return l[0].checked&&!l[0].disabled?l[0].attributes&&!ne(l[0].attributes.value)?ne(l[0].value)||l[0].value===""?nm:{value:l[0].value,isValid:!0}:nm:am}return am},vg=(l,{valueAsNumber:r,valueAsDate:c,setValueAs:o})=>ne(l)?l:r?l===""?NaN:l&&+l:c&&Ze(l)?new Date(l):o?o(l):l;const lm={isValid:!1,value:null};var bg=l=>Array.isArray(l)?l.reduce((r,c)=>c&&c.checked&&!c.disabled?{isValid:!0,value:c.value}:r,lm):lm;function im(l){const r=l.ref;return Rf(r)?r.files:zf(r)?bg(l.refs).value:gg(r)?[...r.selectedOptions].map(({value:c})=>c):Su(r)?yg(l.refs).value:vg(ne(r.value)?l.ref.value:r.value,l)}var Mb=(l,r,c,o)=>{const s={};for(const d of l){const m=P(r,d);m&&Xt(s,d,m._f)}return{criteriaMode:c,names:[...l],fields:s,shouldUseNativeValidation:o}},ac=l=>l instanceof RegExp,nu=l=>ne(l)?l:ac(l)?l.source:oe(l)?ac(l.value)?l.value.source:l.value:l,um=l=>({isOnSubmit:!l||l===ha.onSubmit,isOnBlur:l===ha.onBlur,isOnChange:l===ha.onChange,isOnAll:l===ha.all,isOnTouch:l===ha.onTouched});const rm="AsyncFunction";var Nb=l=>!!l&&!!l.validate&&!!(pa(l.validate)&&l.validate.constructor.name===rm||oe(l.validate)&&Object.values(l.validate).find(r=>r.constructor.name===rm)),Ub=l=>l.mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate),cm=(l,r,c)=>!c&&(r.watchAll||r.watch.has(l)||[...r.watch].some(o=>l.startsWith(o)&&/^\.\w+/.test(l.slice(o.length))));const hu=(l,r,c,o)=>{for(const s of c||Object.keys(l)){const d=P(l,s);if(d){const{_f:m,...x}=d;if(m){if(m.refs&&m.refs[0]&&r(m.refs[0],s)&&!o)return!0;if(m.ref&&r(m.ref,m.name)&&!o)return!0;if(hu(x,r))break}else if(oe(x)&&hu(x,r))break}}};function om(l,r,c){const o=P(l,c);if(o||dc(c))return{error:o,name:c};const s=c.split(".");for(;s.length;){const d=s.join("."),m=P(r,d),x=P(l,d);if(m&&!Array.isArray(m)&&c!==d)return{name:c};if(x&&x.type)return{name:d,error:x};if(x&&x.root&&x.root.type)return{name:`${d}.root`,error:x.root};s.pop()}return{name:c}}var Hb=(l,r,c,o)=>{c(l);const{name:s,...d}=l;return Be(d)||Object.keys(d).length>=Object.keys(r).length||Object.keys(d).find(m=>r[m]===(!o||ha.all))},Bb=(l,r,c)=>!l||!r||l===r||du(l).some(o=>o&&(c?o===r:o.startsWith(r)||r.startsWith(o))),Lb=(l,r,c,o,s)=>s.isOnAll?!1:!c&&s.isOnTouch?!(r||l):(c?o.isOnBlur:s.isOnBlur)?!l:(c?o.isOnChange:s.isOnChange)?l:!0,Vb=(l,r)=>!Af(P(l,r)).length&&re(l,r),kb=(l,r,c)=>{const o=du(P(l,c));return Xt(o,"root",r[c]),Xt(l,c,o),l};function sm(l,r,c="validate"){if(Ze(l)||Array.isArray(l)&&l.every(Ze)||Qe(l)&&!l)return{type:c,message:Ze(l)?l:"",ref:r}}var Gl=l=>oe(l)&&!ac(l)?l:{value:l,message:""},fm=async(l,r,c,o,s,d)=>{const{ref:m,refs:x,required:y,maxLength:g,minLength:b,min:R,max:j,pattern:V,validate:G,name:Y,valueAsNumber:X,mount:W}=l._f,U=P(c,Y);if(!W||r.has(Y))return{};const $=x?x[0]:m,at=st=>{s&&$.reportValidity&&($.setCustomValidity(Qe(st)?"":st||""),$.reportValidity())},Q={},ct=zf(m),et=Su(m),Dt=ct||et,St=(X||Rf(m))&&ne(m.value)&&ne(U)||ec(m)&&m.value===""||U===""||Array.isArray(U)&&!U.length,Kt=Rb.bind(null,Y,o,Q),$t=(st,Tt,Mt,Rt=Xa.maxLength,O=Xa.minLength)=>{const K=st?Tt:Mt;Q[Y]={type:st?Rt:O,message:K,ref:m,...Kt(st?Rt:O,K)}};if(d?!Array.isArray(U)||!U.length:y&&(!Dt&&(St||De(U))||Qe(U)&&!U||et&&!yg(x).isValid||ct&&!bg(x).isValid)){const{value:st,message:Tt}=Ze(y)?{value:!!y,message:y}:Gl(y);if(st&&(Q[Y]={type:Xa.required,message:Tt,ref:$,...Kt(Xa.required,Tt)},!o))return at(Tt),Q}if(!St&&(!De(R)||!De(j))){let st,Tt;const Mt=Gl(j),Rt=Gl(R);if(!De(U)&&!isNaN(U)){const O=m.valueAsNumber||U&&+U;De(Mt.value)||(st=O>Mt.value),De(Rt.value)||(Tt=O<Rt.value)}else{const O=m.valueAsDate||new Date(U),K=S=>new Date(new Date().toDateString()+" "+S),it=m.type=="time",mt=m.type=="week";Ze(Mt.value)&&U&&(st=it?K(U)>K(Mt.value):mt?U>Mt.value:O>new Date(Mt.value)),Ze(Rt.value)&&U&&(Tt=it?K(U)<K(Rt.value):mt?U<Rt.value:O<new Date(Rt.value))}if((st||Tt)&&($t(!!st,Mt.message,Rt.message,Xa.max,Xa.min),!o))return at(Q[Y].message),Q}if((g||b)&&!St&&(Ze(U)||d&&Array.isArray(U))){const st=Gl(g),Tt=Gl(b),Mt=!De(st.value)&&U.length>+st.value,Rt=!De(Tt.value)&&U.length<+Tt.value;if((Mt||Rt)&&($t(Mt,st.message,Tt.message),!o))return at(Q[Y].message),Q}if(V&&!St&&Ze(U)){const{value:st,message:Tt}=Gl(V);if(ac(st)&&!U.match(st)&&(Q[Y]={type:Xa.pattern,message:Tt,ref:m,...Kt(Xa.pattern,Tt)},!o))return at(Tt),Q}if(G){if(pa(G)){const st=await G(U,c),Tt=sm(st,$);if(Tt&&(Q[Y]={...Tt,...Kt(Xa.validate,Tt.message)},!o))return at(Tt.message),Q}else if(oe(G)){let st={};for(const Tt in G){if(!Be(st)&&!o)break;const Mt=sm(await G[Tt](U,c),$,Tt);Mt&&(st={...Mt,...Kt(Tt,Mt.message)},at(Mt.message),o&&(Q[Y]=st))}if(!Be(st)&&(Q[Y]={ref:$,...st},!o))return Q}}return at(!0),Q};const qb={mode:ha.onSubmit,reValidateMode:ha.onChange,shouldFocusError:!0};function Gb(l={}){let r={...qb,...l},c={submitCount:0,isDirty:!1,isReady:!1,isLoading:pa(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},o={},s=oe(r.defaultValues)||oe(r.values)?de(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:de(s),m={action:!1,mount:!1,watch:!1},x={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},y,g=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let R={...b};const j={array:em(),state:em()},V=r.criteriaMode===ha.all,G=E=>C=>{clearTimeout(g),g=setTimeout(E,C)},Y=async E=>{if(!r.disabled&&(b.isValid||R.isValid||E)){const C=r.resolver?Be((await et()).errors):await St(o,!0);C!==c.isValid&&j.state.next({isValid:C})}},X=(E,C)=>{!r.disabled&&(b.isValidating||b.validatingFields||R.isValidating||R.validatingFields)&&((E||Array.from(x.mount)).forEach(M=>{M&&(C?Xt(c.validatingFields,M,C):re(c.validatingFields,M))}),j.state.next({validatingFields:c.validatingFields,isValidating:!Be(c.validatingFields)}))},W=(E,C=[],M,tt,F=!0,Z=!0)=>{if(tt&&M&&!r.disabled){if(m.action=!0,Z&&Array.isArray(P(o,E))){const lt=M(P(o,E),tt.argA,tt.argB);F&&Xt(o,E,lt)}if(Z&&Array.isArray(P(c.errors,E))){const lt=M(P(c.errors,E),tt.argA,tt.argB);F&&Xt(c.errors,E,lt),Vb(c.errors,E)}if((b.touchedFields||R.touchedFields)&&Z&&Array.isArray(P(c.touchedFields,E))){const lt=M(P(c.touchedFields,E),tt.argA,tt.argB);F&&Xt(c.touchedFields,E,lt)}(b.dirtyFields||R.dirtyFields)&&(c.dirtyFields=Xl(s,d)),j.state.next({name:E,isDirty:$t(E,C),dirtyFields:c.dirtyFields,errors:c.errors,isValid:c.isValid})}else Xt(d,E,C)},U=(E,C)=>{Xt(c.errors,E,C),j.state.next({errors:c.errors})},$=E=>{c.errors=E,j.state.next({errors:c.errors,isValid:!1})},at=(E,C,M,tt)=>{const F=P(o,E);if(F){const Z=P(d,E,ne(M)?P(s,E):M);ne(Z)||tt&&tt.defaultChecked||C?Xt(d,E,C?Z:im(F._f)):Mt(E,Z),m.mount&&Y()}},Q=(E,C,M,tt,F)=>{let Z=!1,lt=!1;const gt={name:E};if(!r.disabled){if(!M||tt){(b.isDirty||R.isDirty)&&(lt=c.isDirty,c.isDirty=gt.isDirty=$t(),Z=lt!==gt.isDirty);const Ct=Qa(P(s,E),C);lt=!!P(c.dirtyFields,E),Ct?re(c.dirtyFields,E):Xt(c.dirtyFields,E,!0),gt.dirtyFields=c.dirtyFields,Z=Z||(b.dirtyFields||R.dirtyFields)&&lt!==!Ct}if(M){const Ct=P(c.touchedFields,E);Ct||(Xt(c.touchedFields,E,M),gt.touchedFields=c.touchedFields,Z=Z||(b.touchedFields||R.touchedFields)&&Ct!==M)}Z&&F&&j.state.next(gt)}return Z?gt:{}},ct=(E,C,M,tt)=>{const F=P(c.errors,E),Z=(b.isValid||R.isValid)&&Qe(C)&&c.isValid!==C;if(r.delayError&&M?(y=G(()=>U(E,M)),y(r.delayError)):(clearTimeout(g),y=null,M?Xt(c.errors,E,M):re(c.errors,E)),(M?!Qa(F,M):F)||!Be(tt)||Z){const lt={...tt,...Z&&Qe(C)?{isValid:C}:{},errors:c.errors,name:E};c={...c,...lt},j.state.next(lt)}},et=async E=>{X(E,!0);const C=await r.resolver(d,r.context,Mb(E||x.mount,o,r.criteriaMode,r.shouldUseNativeValidation));return X(E),C},Dt=async E=>{const{errors:C}=await et(E);if(E)for(const M of E){const tt=P(C,M);tt?Xt(c.errors,M,tt):re(c.errors,M)}else c.errors=C;return C},St=async(E,C,M={valid:!0})=>{for(const tt in E){const F=E[tt];if(F){const{_f:Z,...lt}=F;if(Z){const gt=x.array.has(Z.name),Ct=F._f&&Nb(F._f);Ct&&b.validatingFields&&X([Z.name],!0);const Gt=await fm(F,x.disabled,d,V,r.shouldUseNativeValidation&&!C,gt);if(Ct&&b.validatingFields&&X([Z.name]),Gt[Z.name]&&(M.valid=!1,C))break;!C&&(P(Gt,Z.name)?gt?kb(c.errors,Gt,Z.name):Xt(c.errors,Z.name,Gt[Z.name]):re(c.errors,Z.name))}!Be(lt)&&await St(lt,C,M)}}return M.valid},Kt=()=>{for(const E of x.unMount){const C=P(o,E);C&&(C._f.refs?C._f.refs.every(M=>!Gs(M)):!Gs(C._f.ref))&&Jt(E)}x.unMount=new Set},$t=(E,C)=>!r.disabled&&(E&&C&&Xt(d,E,C),!Qa(S(),s)),st=(E,C,M)=>pg(E,x,{...m.mount?d:ne(C)?s:Ze(E)?{[E]:C}:C},M,C),Tt=E=>Af(P(m.mount?d:s,E,r.shouldUnregister?P(s,E,[]):[])),Mt=(E,C,M={})=>{const tt=P(o,E);let F=C;if(tt){const Z=tt._f;Z&&(!Z.disabled&&Xt(d,E,vg(C,Z)),F=ec(Z.ref)&&De(C)?"":C,gg(Z.ref)?[...Z.ref.options].forEach(lt=>lt.selected=F.includes(lt.value)):Z.refs?Su(Z.ref)?Z.refs.forEach(lt=>{(!lt.defaultChecked||!lt.disabled)&&(Array.isArray(F)?lt.checked=!!F.find(gt=>gt===lt.value):lt.checked=F===lt.value||!!F)}):Z.refs.forEach(lt=>lt.checked=lt.value===F):Rf(Z.ref)?Z.ref.value="":(Z.ref.value=F,Z.ref.type||j.state.next({name:E,values:de(d)})))}(M.shouldDirty||M.shouldTouch)&&Q(E,F,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&mt(E)},Rt=(E,C,M)=>{for(const tt in C){if(!C.hasOwnProperty(tt))return;const F=C[tt],Z=E+"."+tt,lt=P(o,Z);(x.array.has(E)||oe(F)||lt&&!lt._f)&&!$n(F)?Rt(Z,F,M):Mt(Z,F,M)}},O=(E,C,M={})=>{const tt=P(o,E),F=x.array.has(E),Z=de(C);Xt(d,E,Z),F?(j.array.next({name:E,values:de(d)}),(b.isDirty||b.dirtyFields||R.isDirty||R.dirtyFields)&&M.shouldDirty&&j.state.next({name:E,dirtyFields:Xl(s,d),isDirty:$t(E,Z)})):tt&&!tt._f&&!De(Z)?Rt(E,Z,M):Mt(E,Z,M),cm(E,x)&&j.state.next({...c,name:E}),j.state.next({name:m.mount?E:void 0,values:de(d)})},K=async E=>{m.mount=!0;const C=E.target;let M=C.name,tt=!0;const F=P(o,M),Z=Ct=>{tt=Number.isNaN(Ct)||$n(Ct)&&isNaN(Ct.getTime())||Qa(Ct,P(d,M,Ct))},lt=um(r.mode),gt=um(r.reValidateMode);if(F){let Ct,Gt;const In=C.type?im(F._f):sg(E),ya=E.type===tc.BLUR||E.type===tc.FOCUS_OUT,pc=!Ub(F._f)&&!r.resolver&&!P(c.errors,M)&&!F._f.deps||Lb(ya,P(c.touchedFields,M),c.isSubmitted,gt,lt),Fa=cm(M,x,ya);Xt(d,M,In),ya?(!C||!C.readOnly)&&(F._f.onBlur&&F._f.onBlur(E),y&&y(0)):F._f.onChange&&F._f.onChange(E);const Ja=Q(M,In,ya),Ra=!Be(Ja)||Fa;if(!ya&&j.state.next({name:M,type:E.type,values:de(d)}),pc)return(b.isValid||R.isValid)&&(r.mode==="onBlur"?ya&&Y():ya||Y()),Ra&&j.state.next({name:M,...Fa?{}:Ja});if(!ya&&Fa&&j.state.next({...c}),r.resolver){const{errors:wn}=await et([M]);if(Z(In),tt){const _n=om(c.errors,o,M),Tu=om(wn,o,_n.name||M);Ct=Tu.error,M=Tu.name,Gt=Be(wn)}}else X([M],!0),Ct=(await fm(F,x.disabled,d,V,r.shouldUseNativeValidation))[M],X([M]),Z(In),tt&&(Ct?Gt=!1:(b.isValid||R.isValid)&&(Gt=await St(o,!0)));tt&&(F._f.deps&&(!Array.isArray(F._f.deps)||F._f.deps.length>0)&&mt(F._f.deps),ct(M,Gt,Ct,Ja))}},it=(E,C)=>{if(P(c.errors,C)&&E.focus)return E.focus(),1},mt=async(E,C={})=>{let M,tt;const F=du(E);if(r.resolver){const Z=await Dt(ne(E)?E:F);M=Be(Z),tt=E?!F.some(lt=>P(Z,lt)):M}else E?(tt=(await Promise.all(F.map(async Z=>{const lt=P(o,Z);return await St(lt&&lt._f?{[Z]:lt}:lt)}))).every(Boolean),!(!tt&&!c.isValid)&&Y()):tt=M=await St(o);return j.state.next({...!Ze(E)||(b.isValid||R.isValid)&&M!==c.isValid?{}:{name:E},...r.resolver||!E?{isValid:M}:{},errors:c.errors}),C.shouldFocus&&!tt&&hu(o,it,E?F:x.mount),tt},S=(E,C)=>{let M={...m.mount?d:s};return C&&(M=mg(C.dirtyFields?c.dirtyFields:c.touchedFields,M)),ne(E)?M:Ze(E)?P(M,E):E.map(tt=>P(M,tt))},q=(E,C)=>({invalid:!!P((C||c).errors,E),isDirty:!!P((C||c).dirtyFields,E),error:P((C||c).errors,E),isValidating:!!P(c.validatingFields,E),isTouched:!!P((C||c).touchedFields,E)}),J=E=>{E&&du(E).forEach(C=>re(c.errors,C)),j.state.next({errors:E?c.errors:{}})},I=(E,C,M)=>{const tt=(P(o,E,{_f:{}})._f||{}).ref,F=P(c.errors,E)||{},{ref:Z,message:lt,type:gt,...Ct}=F;Xt(c.errors,E,{...Ct,...C,ref:tt}),j.state.next({name:E,errors:c.errors,isValid:!1}),M&&M.shouldFocus&&tt&&tt.focus&&tt.focus()},ut=(E,C)=>pa(E)?j.state.subscribe({next:M=>"values"in M&&E(st(void 0,C),M)}):st(E,C,!0),vt=E=>j.state.subscribe({next:C=>{Bb(E.name,C.name,E.exact)&&Hb(C,E.formState||b,We,E.reRenderRoot)&&E.callback({values:{...d},...c,...C,defaultValues:s})}}).unsubscribe,ot=E=>(m.mount=!0,R={...R,...E.formState},vt({...E,formState:R})),Jt=(E,C={})=>{for(const M of E?du(E):x.mount)x.mount.delete(M),x.array.delete(M),C.keepValue||(re(o,M),re(d,M)),!C.keepError&&re(c.errors,M),!C.keepDirty&&re(c.dirtyFields,M),!C.keepTouched&&re(c.touchedFields,M),!C.keepIsValidating&&re(c.validatingFields,M),!r.shouldUnregister&&!C.keepDefaultValue&&re(s,M);j.state.next({values:de(d)}),j.state.next({...c,...C.keepDirty?{isDirty:$t()}:{}}),!C.keepIsValid&&Y()},jt=({disabled:E,name:C})=>{(Qe(E)&&m.mount||E||x.disabled.has(C))&&(E?x.disabled.add(C):x.disabled.delete(C))},le=(E,C={})=>{let M=P(o,E);const tt=Qe(C.disabled)||Qe(r.disabled);return Xt(o,E,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:E}},name:E,mount:!0,...C}}),x.mount.add(E),M?jt({disabled:Qe(C.disabled)?C.disabled:r.disabled,name:E}):at(E,!0,C.value),{...tt?{disabled:C.disabled||r.disabled}:{},...r.progressive?{required:!!C.required,min:nu(C.min),max:nu(C.max),minLength:nu(C.minLength),maxLength:nu(C.maxLength),pattern:nu(C.pattern)}:{},name:E,onChange:K,onBlur:K,ref:F=>{if(F){le(E,C),M=P(o,E);const Z=ne(F.value)&&F.querySelectorAll&&F.querySelectorAll("input,select,textarea")[0]||F,lt=zb(Z),gt=M._f.refs||[];if(lt?gt.find(Ct=>Ct===Z):Z===M._f.ref)return;Xt(o,E,{_f:{...M._f,...lt?{refs:[...gt.filter(Gs),Z,...Array.isArray(P(s,E))?[{}]:[]],ref:{type:Z.type,name:E}}:{ref:Z}}}),at(E,!1,void 0,Z)}else M=P(o,E,{}),M._f&&(M._f.mount=!1),(r.shouldUnregister||C.shouldUnregister)&&!(fg(x.array,E)&&m.action)&&x.unMount.add(E)}}},ra=()=>r.shouldFocusError&&hu(o,it,x.mount),ca=E=>{Qe(E)&&(j.state.next({disabled:E}),hu(o,(C,M)=>{const tt=P(o,M);tt&&(C.disabled=tt._f.disabled||E,Array.isArray(tt._f.refs)&&tt._f.refs.forEach(F=>{F.disabled=tt._f.disabled||E}))},0,!1))},Ce=(E,C)=>async M=>{let tt;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let F=de(d);if(j.state.next({isSubmitting:!0}),r.resolver){const{errors:Z,values:lt}=await et();c.errors=Z,F=de(lt)}else await St(o);if(x.disabled.size)for(const Z of x.disabled)re(F,Z);if(re(c.errors,"root"),Be(c.errors)){j.state.next({errors:{}});try{await E(F,M)}catch(Z){tt=Z}}else C&&await C({...c.errors},M),ra(),setTimeout(ra);if(j.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Be(c.errors)&&!tt,submitCount:c.submitCount+1,errors:c.errors}),tt)throw tt},ai=(E,C={})=>{P(o,E)&&(ne(C.defaultValue)?O(E,de(P(s,E))):(O(E,C.defaultValue),Xt(s,E,de(C.defaultValue))),C.keepTouched||re(c.touchedFields,E),C.keepDirty||(re(c.dirtyFields,E),c.isDirty=C.defaultValue?$t(E,de(P(s,E))):$t()),C.keepError||(re(c.errors,E),b.isValid&&Y()),j.state.next({...c}))},Jn=(E,C={})=>{const M=E?de(E):s,tt=de(M),F=Be(E),Z=F?s:tt;if(C.keepDefaultValues||(s=M),!C.keepValues){if(C.keepDirtyValues){const lt=new Set([...x.mount,...Object.keys(Xl(s,d))]);for(const gt of Array.from(lt))P(c.dirtyFields,gt)?Xt(Z,gt,P(d,gt)):O(gt,P(Z,gt))}else{if(Tf&&ne(E))for(const lt of x.mount){const gt=P(o,lt);if(gt&&gt._f){const Ct=Array.isArray(gt._f.refs)?gt._f.refs[0]:gt._f.ref;if(ec(Ct)){const Gt=Ct.closest("form");if(Gt){Gt.reset();break}}}}if(C.keepFieldsRef)for(const lt of x.mount)O(lt,P(Z,lt));else o={}}d=r.shouldUnregister?C.keepDefaultValues?de(s):{}:de(Z),j.array.next({values:{...Z}}),j.state.next({values:{...Z}})}x={mount:C.keepDirtyValues?x.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},m.mount=!b.isValid||!!C.keepIsValid||!!C.keepDirtyValues,m.watch=!!r.shouldUnregister,j.state.next({submitCount:C.keepSubmitCount?c.submitCount:0,isDirty:F?!1:C.keepDirty?c.isDirty:!!(C.keepDefaultValues&&!Qa(E,s)),isSubmitted:C.keepIsSubmitted?c.isSubmitted:!1,dirtyFields:F?{}:C.keepDirtyValues?C.keepDefaultValues&&d?Xl(s,d):c.dirtyFields:C.keepDefaultValues&&E?Xl(s,E):C.keepDirty?c.dirtyFields:{},touchedFields:C.keepTouched?c.touchedFields:{},errors:C.keepErrors?c.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?c.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},Eu=(E,C)=>Jn(pa(E)?E(d):E,C),hc=(E,C={})=>{const M=P(o,E),tt=M&&M._f;if(tt){const F=tt.refs?tt.refs[0]:tt.ref;F.focus&&(F.focus(),C.shouldSelect&&pa(F.select)&&F.select())}},We=E=>{c={...c,...E}},ni={control:{register:le,unregister:Jt,getFieldState:q,handleSubmit:Ce,setError:I,_subscribe:vt,_runSchema:et,_focusError:ra,_getWatch:st,_getDirty:$t,_setValid:Y,_setFieldArray:W,_setDisabledField:jt,_setErrors:$,_getFieldArray:Tt,_reset:Jn,_resetDefaultValues:()=>pa(r.defaultValues)&&r.defaultValues().then(E=>{Eu(E,r.resetOptions),j.state.next({isLoading:!1})}),_removeUnmounted:Kt,_disableForm:ca,_subjects:j,_proxyFormState:b,get _fields(){return o},get _formValues(){return d},get _state(){return m},set _state(E){m=E},get _defaultValues(){return s},get _names(){return x},set _names(E){x=E},get _formState(){return c},get _options(){return r},set _options(E){r={...r,...E}}},subscribe:ot,trigger:mt,register:le,handleSubmit:Ce,watch:ut,setValue:O,getValues:S,reset:Eu,resetField:ai,clearErrors:J,unregister:Jt,setError:I,setFocus:hc,getFieldState:q};return{...ni,formControl:ni}}function Yb(l={}){const r=pt.useRef(void 0),c=pt.useRef(void 0),[o,s]=pt.useState({isDirty:!1,isValidating:!1,isLoading:pa(l.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:l.errors||{},disabled:l.disabled||!1,isReady:!1,defaultValues:pa(l.defaultValues)?void 0:l.defaultValues});if(!r.current)if(l.formControl)r.current={...l.formControl,formState:o},l.defaultValues&&!pa(l.defaultValues)&&l.formControl.reset(l.defaultValues,l.resetOptions);else{const{formControl:m,...x}=Gb(l);r.current={...x,formState:o}}const d=r.current.control;return d._options=l,Cf(()=>{const m=d._subscribe({formState:d._proxyFormState,callback:()=>s({...d._formState}),reRenderRoot:!0});return s(x=>({...x,isReady:!0})),d._formState.isReady=!0,m},[d]),pt.useEffect(()=>d._disableForm(l.disabled),[d,l.disabled]),pt.useEffect(()=>{l.mode&&(d._options.mode=l.mode),l.reValidateMode&&(d._options.reValidateMode=l.reValidateMode)},[d,l.mode,l.reValidateMode]),pt.useEffect(()=>{l.errors&&(d._setErrors(l.errors),d._focusError())},[d,l.errors]),pt.useEffect(()=>{l.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,l.shouldUnregister]),pt.useEffect(()=>{if(d._proxyFormState.isDirty){const m=d._getDirty();m!==o.isDirty&&d._subjects.state.next({isDirty:m})}},[d,o.isDirty]),pt.useEffect(()=>{l.values&&!Qa(l.values,c.current)?(d._reset(l.values,{keepFieldsRef:!0,...d._options.resetOptions}),c.current=l.values,s(m=>({...m}))):d._resetDefaultValues()},[d,l.values]),pt.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),r.current.formState=hg(o,d),r.current}function Xb({disabled:l,$isTransparent:r}){return l?Kn`
      background-color: var(--primary-color-80);
      color: #FFFFFF;
      cursor: not-allowed;
      opacity: 0.7;
    `:r?Kn`
      background-color: transparent;
      border: 1px solid var(--primary-color-button);
      color: var(--primary-color-button);
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(135, 169, 208, 0.2);
        transition: all 0.5s ease;
        color: #FFFFFF;
        background-color: var(--primary-color-button);
      }
      
      &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: 0 2px 6px rgba(135, 169, 208, 0.3);
        transition: all 0.1s ease;
        color: #FFFFFF;
        background-color: var(--primary-color-button);
      }
    `:Kn`
      background-color: var(--primary-color-deep-blue-button);
      color: #FFFFFF;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(135, 169, 208, 0.3);
        background-color: var(--primary-color-button);
        transition: all 0.3s ease;
      }
      
      &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: 0 2px 6px rgba(135, 169, 208, 0.4);
        transition: all 0.1s ease;
        background-color: var(--primary-color-button);
      }
    `}const $b=H.button`
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
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  line-height: 1.1;
  letter-spacing: 0;
  font-weight: 400;
  transform: translateY(0) scale(1);

  ${l=>Xb(l)}
`,Qb={StyledButton:$b},Qn=({text:l,isTransparent:r=!1,disabled:c=!1,type:o="button",onClick:s})=>p.jsx(Qb.StyledButton,{type:o,$isTransparent:r,disabled:c,onClick:c?void 0:s,children:l}),Zb=H.input`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border-radius: 10px;
  background: #FFFCFC;
  border: 1px solid ${l=>l.$hasError?"#ff4444":"#DBDBDB"};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  font-weight: 400;
  color: var(--primary-color-text-grey);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #A3A3A3;
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-medium-rose);
    box-shadow: 0 0 0 2px rgba(213, 181, 205, 0.2);
  }

  &:hover {
    border-color: var(--primary-color-60);
  }

  @media (max-width: 391px) {
    &::placeholder {
      font-size: 16px;
      letter-spacing: 0;
    }
  }
`,Kb=H.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,dm={Input:Zb,ErrorText:Kb},Vr=({error:l,...r})=>p.jsxs("div",{children:[p.jsx(dm.Input,{$hasError:!!l,...r}),l&&p.jsx(dm.ErrorText,{children:l})]}),Wb=H.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`,Fb=H.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Jb=H.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 1px solid #DBDBDB;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  ${l=>l.$checked&&`
    border-color: var(--primary-color-medium-rose);
  `}

  &::after {
    content: '';
    width: 17.56px;
    height: 17px;
    border-radius: 50%;
    background: var(--primary-color-medium-rose);
    opacity: ${l=>l.$checked?1:0};
    transform: ${l=>l.$checked?"scale(1)":"scale(0)"};
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
`,Ib=H.span`
  font-size: 14px;
  color: var(--primary-color-text-grey);
`,kr={RadioContainer:Wb,HiddenRadio:Fb,Radio:Jb,RadioLabel:Ib},Ys=({name:l,value:r,checked:c,onChange:o,label:s})=>p.jsxs(kr.RadioContainer,{children:[p.jsx(kr.HiddenRadio,{name:l,value:r,checked:c,onChange:o}),p.jsx(kr.Radio,{$checked:c}),p.jsx(kr.RadioLabel,{children:s})]}),Pb=H.textarea`
  width: 100%;
  height: 90px;
  min-height: 90px;
  max-height: 120px; /* примерно 6 строк */
  padding: 12px 15px;
  border-radius: 10px;
  background: #FFFFFF;
  border: 1px solid ${l=>l.$hasError?"#ff4444":"#DBDBDB"};
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
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2;
    font-weight: 400;
  }

  &:focus {
    outline: none;
    border-color: var(--primary-color-medium-rose);
    box-shadow: 0 0 0 2px rgba(213, 181, 205, 0.2);
  }

  &:hover {
    border-color: var(--primary-color-60);
  }

  @media (max-width: 391px) {
    &::placeholder {
      font-size: 16px;
      max-width: 165px;
    }
  }
`,tS=H.span`
  color: #ff4444;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`,hm={Textarea:Pb,ErrorText:tS},eS=({error:l,...r})=>p.jsxs("div",{children:[p.jsx(hm.Textarea,{$hasError:!!l,...r}),l&&p.jsx(hm.ErrorText,{children:l})]}),aS=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color-beige);
  width: 100%;
  padding: 50px 20px;
  box-sizing: border-box;

  @media (max-width: 391px) {
    padding: 47px 20px;
  }
`,nS=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  max-width: 572px;

  > ${yt} {
    text-align: center;
  }
`,lS=H.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`,iS=H.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45px 45px;
  row-gap: 20px;
  column-gap: 12px;

  @media (max-width: 391px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 12px;
  }
`,uS=H.div`
  margin-top: 15px;

  @media (max-width: 391px) {
    margin-top: 0;
  }
`,rS=H.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 28px;

  @media (max-width: 370px) {
    gap: 5px;
  }
`,cS=H.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,oS=H.div`
  width: 100%;
  border-radius: 10px;

  ${rf} {
    font-size: 12px;

    @media (max-width: 391px) {
      font-size: 13px;
    }
  }
  ${rg} {
    text-decoration: underline;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.3;
    letter-spacing: 0.2px;

    @media (max-width: 391px) {
      font-size: 13px;
      display: block;
      white-space: pre-line;
    }
  } 
`,sS=H.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`,da={Container:aS,Form:nS,DataFields:lS,Inputs:iS,LabelFormWrapper:uS,Massagers:rS,MassagerContainer:cS,InputMassage:oS,ButtonContainer:sS},fS="Хочу обсудить задачу",dS="Оставьте свои контакты и запрос и я вернусь к вам с предложением",hS="Свяжитесь со мной через",pS=`* Нажимая кнопку «Отправить», я даю согласие на обработку
  персональных данных и получение рекламных материалов. `,mS="Ознакомиться с политикой конфиденциальности.",gS=async l=>{const r=new FormData;return r.append("Имя",l.name),r.append("Telegram",l.telegram||"не указал"),r.append("Телефон",l.phone||"не указал"),r.append("E-mail",l.email||"не указал"),r.append("Метод для контакта",l.contactMethod||"не указал"),r.append("Сообщение",l.message),fetch("https://formsubmit.co/ajax/evgeny.chausov@kreo.net",{method:"POST",body:r})},xS=()=>{const{register:l,handleSubmit:r,control:c,watch:o,formState:{errors:s,isSubmitting:d},reset:m}=Yb({mode:"onChange"}),x=o(),y=!x.name||!x.email&&!x.phone&&!x.telegram||d,g=async V=>{try{if((await gS(V)).ok)alert("Сообщение отправлено! Я свяжусь с вами в ближайшее время."),m();else throw new Error("Ошибка отправки")}catch{alert(`Произошла ошибка при отправке сообщения.
        Пожалуйста, попробуйте еще раз или свяжитесь другим способом.`)}},b=()=>{const G=window.location.href.split("#")[0];window.open(`${G}#/${Pl}`,"_blank")},R={pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Введите корректный email"}},j={pattern:{value:/^\+?[\d\s\-()]+$/,message:"Введите корректный номер телефона"}};return p.jsx(da.Container,{id:"contacts",children:p.jsxs(da.Form,{as:"form",onSubmit:r(g),children:[p.jsx(xa,{children:fS}),p.jsx(yt,{fontSize:18,letterSpacing:.2,lineHeight:1.2,children:dS}),p.jsxs(da.DataFields,{children:[p.jsxs(da.Inputs,{children:[p.jsx(Vr,{placeholder:"Имя",...l("name",{required:"Имя обязательно"}),error:s.name?.message}),p.jsx(Vr,{placeholder:"Ник в Telegram",...l("telegram"),error:s.telegram?.message}),p.jsx(Vr,{placeholder:"Телефон",...l("phone",j),error:s.phone?.message}),p.jsx(Vr,{placeholder:"E-mail",...l("email",R),error:s.email?.message})]}),p.jsx(da.LabelFormWrapper,{children:p.jsx(rf,{children:hS})}),p.jsxs(da.Massagers,{children:[p.jsx(da.MassagerContainer,{children:p.jsx(qs,{name:"contactMethod",control:c,render:({field:V})=>p.jsx(Ys,{name:"contactMethod",value:"email",checked:V.value==="email",onChange:V.onChange,label:"e-mail"})})},"email-radio"),p.jsx(da.MassagerContainer,{children:p.jsx(qs,{name:"contactMethod",control:c,render:({field:V})=>p.jsx(Ys,{name:"contactMethod",value:"whatsapp",checked:V.value==="whatsapp",onChange:V.onChange,label:"whatsapp"})})},"whatsapp-radio"),p.jsx(da.MassagerContainer,{children:p.jsx(qs,{name:"contactMethod",control:c,render:({field:V})=>p.jsx(Ys,{name:"contactMethod",value:"telegram",checked:V.value==="telegram",onChange:V.onChange,label:"telegram"})})},"telegram-radio")]})]}),p.jsxs(da.InputMassage,{children:[p.jsx(eS,{placeholder:"Как я могу быть Вам полезна?",...l("message"),error:s.message?.message,rows:4}),p.jsxs(rf,{fontSize:12,lineHeight:1.3,letterSpacing:0,children:[pS,p.jsx(Zl,{text:mS,targetId:Pl,onClick:b})]})]}),p.jsx(da.ButtonContainer,{children:p.jsx(Qn,{text:d?"отправка...":"отправить",isTransparent:!0,disabled:y,type:"submit"})})]})})},ze=l=>{const r=l.split(":");return r.length>1?p.jsxs(p.Fragment,{children:[p.jsxs("span",{style:{fontWeight:700},children:[r[0],":"]}),r.slice(1).join(":")]}):l},Sg=["services","about","approach","contacts","myWork"],_a=l=>{if(Sg.includes(l))if(window.location.hash===`#/${Pl}`)sessionStorage.setItem("pendingScroll",l),window.location.hash="#/";else{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})}},yS=H.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 70px;
  margin-bottom: 25px;
  width: 100%;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`,vS=H.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 632px;
  width: 100%;
  height: 40px;

  @media (max-width: 630px) {
    justify-content: center;
  }
`,bS=H.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 630px) {
    display: none;
  }
`,SS=H.img`
  width: 223px;
  height: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 165px;
  }
`,lu={Container:yS,Content:vS,LinksWrapper:bS,Logo:SS},Eg=()=>p.jsx(lu.Container,{children:p.jsxs(lu.Content,{children:[p.jsxs(lu.LinksWrapper,{children:[p.jsx(Zl,{text:"услуги",targetId:"services",onClick:()=>_a("services")}),p.jsx(Zl,{text:"обо мне",targetId:"about",onClick:()=>_a("about")})]}),p.jsx(lu.Logo,{src:ug,alt:"Логотип"}),p.jsxs(lu.LinksWrapper,{children:[p.jsx(Zl,{text:"мой подход",targetId:"approach",onClick:()=>_a("approach")}),p.jsx(Zl,{text:"контакты",targetId:"contacts",onClick:()=>_a("contacts")})]})]})}),ES="/startup-landing/assets/plant-2-CMRYYjsu.png",pm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwSURBVHgB7ZTPDYIwFIcfUm4cGKFHLhBX6ASyghPgCDiBbIAj6AQ4QhMSwpERHIA/vprKwUhp0nIxfEnzmpD3+x7QFGBDlziOU1wnsMzusxnHMRmG4QCW2cHKGAuiKErCMKSwlgApPM8r5yTGgr7vGZZgTmIsqOuaqyRE1UwpDXzf34MGjuNkeBJzKWFN07SLAgzPsDEFDTB8mgslBVa2KCCE5F3X3UADHIRiueB6uq57nDJUTZzzFksLC4jvLqcW4Uz2vTH+yTK8FPvvcCsCVbiAgDlnDH/8CrciqKrqqnq++mU3vQEeszte17Dxf7wAZ2RM1AKStooAAAAASUVORK5CYII=",TS=H.div`
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
`,AS=H.div`
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
`,wS=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 160px;
  background: ${l=>l.$background?.includes(".png")?`url(${l.$background})`:l.$background||"var(--primary-color-super-light-beige)"};
  background-size: ${l=>l.$background?.includes(".png")?"cover":"auto"};
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
      background-image: url(${pm});
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
      background-image: url(${pm});
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      z-index: 2;
    }
  }
`,_S=H.div`
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
`,CS=H.div`
  display: none;
`,ia={Container:TS,TabsWrapper:AS,Tabs:_S,Tab:wS,ArrowIcon:CS},RS="Как устроена работа",zS=()=>p.jsxs(ia.Container,{children:[p.jsx(xa,{children:RS}),p.jsx(ia.TabsWrapper,{children:p.jsxs(ia.Tabs,{children:[p.jsxs(ia.Tab,{$background:"var(--primary-color-super-light-beige)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Встреча"}),p.jsx(ia.ArrowIcon,{})]}),p.jsxs(ia.Tab,{$background:"var(--primary-color-beige)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Диагностика"}),p.jsx(ia.ArrowIcon,{})]}),p.jsxs(ia.Tab,{$background:"var(--primary-color-super-light-rose)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Карта"}),p.jsx(ia.ArrowIcon,{})]}),p.jsxs(ia.Tab,{$background:"var(--primary-color-light-rose)",children:[p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Предложение"}),p.jsx(ia.ArrowIcon,{})]}),p.jsx(ia.Tab,{$background:ES,children:p.jsx(yt,{fontSize:26,lineHeight:1.1,fontWeight:400,children:"Запуск"})})]})})]}),DS="/startup-landing/assets/main-DOflBkP0.png",jS=H.div`
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
`,OS=H.div`
  display: flex;
  flex-direction: column;
  max-width: 544px;
  width: 100%;
  position: relative;
  z-index: 2;

  ${fc} {
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
`,MS=H.div`
  display: flex;
  flex-direction: column;
  gap: 70px;

  @media (max-width: 1125px) {
    gap: 50px;
  }

  @media (max-width: 720px) {
    gap: 25px;
  }
`,NS=H.div`
  margin-top: 25px;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 520px) {
    > button {
      font-size: 16px;
    }
  }
`,US=H.div`
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
`,HS=H.img`
  height: 150%;
  width: auto;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (max-width: 720px) {
    height: 110%;
  }
`,Yl={Container:jS,Content:OS,TextWrapper:MS,Buttons:NS,ImageContainer:US,Image:HS},iu={title:"СТРАТЕГИЧЕСКИЕ ИЗМЕНЕНИЯ",subtitle:"с уважением к людям",description:`Архитектор изменений для собственников и команд,
    которые выбирают путь осознанного роста.`,button1:"смотреть подробнее",button2:"запросить встречу"},BS=()=>p.jsxs(Yl.Container,{children:[p.jsxs(Yl.Content,{children:[p.jsx(fc,{children:iu.title}),p.jsxs(Yl.TextWrapper,{children:[p.jsx(gv,{children:iu.subtitle}),p.jsx(xv,{children:iu.description})]}),p.jsxs(Yl.Buttons,{children:[p.jsx(Qn,{text:iu.button1,isTransparent:!0,onClick:()=>_a("myWork")}),p.jsx(Qn,{text:iu.button2,onClick:()=>_a("contacts")})]})]}),p.jsx(Yl.ImageContainer,{children:p.jsx(Yl.Image,{src:DS,alt:"Стратегические изменения"})})]}),LS=H.div`
  padding: ${l=>l.$padding||"6px 15px"};
  border-radius: 10px;
  background: ${l=>l.$backgroundColor?l.$backgroundColor.startsWith("--")?`var(${l.$backgroundColor})`:l.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${l=>l.$maxWidth&&`
    max-width: ${l.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`,VS={WidgetContainer:LS},Xs=({text:l,backgroundColor:r,maxWidth:c,padding:o})=>p.jsx(VS.WidgetContainer,{$backgroundColor:r,$padding:o,$maxWidth:c,children:p.jsx(uf,{children:l})}),kS="/startup-landing/assets/iryna-2--ce0Vviq.png",qS=H.div`
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
`,GS=H.div`
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
`,YS=H.div`
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
`,XS=H.div`
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
`,$S=H.div`
  width: 100%;
  height: 100%;
  background-image: url(${kS});
  background-size: cover;
  background-position: center;
`,uu={Container:qS,Iryna:$S,MePhotoWrapper:XS,Block1Wrapper:GS,Block2Wrapper:YS},QS="Мой подход",ZS="Ключевая идея",ru={block1:{text1:"Не чиню — раскрываю",text2:"Не навязываю — синхронизирую",text3:"Не выстраиваю сверху — слушаю, замечаю, показываю"},block2:{text1:"синергия вместо соперничества",text2:"Именно это даёт команде силу. Когда нет внутренней войны — появляется энергия для движения."}},KS=()=>p.jsxs(uu.Container,{children:[p.jsxs(uu.Block1Wrapper,{children:[p.jsx(Wp,{children:QS}),p.jsx(uf,{children:ru.block1.text1}),p.jsx(Xs,{text:ru.block1.text2,backgroundColor:"--primary-color-super-light-rose"}),p.jsx(Xs,{text:ru.block1.text3,backgroundColor:"--primary-color-light-rose"})]}),p.jsx(uu.MePhotoWrapper,{children:p.jsx(uu.Iryna,{})}),p.jsxs(uu.Block2Wrapper,{children:[p.jsx(Wp,{children:ZS}),p.jsx(Xs,{text:ru.block2.text1,backgroundColor:"--primary-color-light-rose"}),p.jsx(uf,{children:ru.block2.text2})]})]}),WS=H.div`
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
`,FS=H.div`
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
`,JS=H.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 2px var(--primary-color-light-rose);
  overflow: hidden;
`,IS=H.div`
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

    ${Ql} {
      font-size: 30px;
    }
  }

  ${Ql} {
    width: 100%;
  }
  div {
    width: 100%;
  }
`,PS=H.div`
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
`,t4=H.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 500px) {
    div > p {
      font-size: 18px;
    }
  }
`,xe={Container:WS,ServiceWrapper:FS,Service:JS,ServiceHeader:IS,ServiceContent:PS,Description:t4},e4="Мои услуги",qr="записаться",a4="Анализ и диагностика",n4="1-2 сессии → карта состояния системы",l4=`Формат: 1-2 индивидуальные встречи с собственником
  или ключевыми фигурами.`,i4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,u4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,r4="Диагностика команды",c4="Интервью, наблюдение → отчёт и направления развития",o4=`Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`,s4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,f4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,d4="Архитектура изменений",h4="Проект 2-3 месяца → новая культура взаимодействия",p4=`Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`,m4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,g4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,x4="Сопровождение",y4="Контракты на 1-6 месяцев → устойчивость и автономия",v4=`Формат: 1-2 индивидуальные встречи с собственником или
  ключевыми фигурами.`,b4=`Цель: зафиксировать текущую точку, собрать контекст,
  увидеть риски и точки роста.`,S4=`На выходе: короткий документ с описанием ситуации и
  предложением следующих шагов.`,E4=()=>p.jsxs(xe.Container,{id:"services",children:[p.jsx(xa,{children:e4}),p.jsxs(xe.ServiceWrapper,{children:[p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx(Ql,{fontWeight:400,children:a4}),p.jsx(Ke,{text:n4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(l4)}),p.jsx(yt,{fontSize:18,children:ze(i4)}),p.jsx(yt,{fontSize:18,children:ze(u4)})]}),p.jsx(Qn,{text:qr,isTransparent:!0,onClick:()=>_a("contacts")})]})]}),p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx(Ql,{fontWeight:400,children:r4}),p.jsx(Ke,{text:c4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(o4)}),p.jsx(yt,{fontSize:18,children:ze(s4)}),p.jsx(yt,{fontSize:18,children:ze(f4)})]}),p.jsx(Qn,{text:qr,isTransparent:!0,onClick:()=>_a("contacts")})]})]}),p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx(Ql,{fontWeight:400,children:d4}),p.jsx(Ke,{text:h4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(p4)}),p.jsx(yt,{fontSize:18,children:ze(m4)}),p.jsx(yt,{fontSize:18,children:ze(g4)})]}),p.jsx(Qn,{text:qr,isTransparent:!0,onClick:()=>_a("contacts")})]})]}),p.jsxs(xe.Service,{children:[p.jsxs(xe.ServiceHeader,{children:[p.jsx(Ql,{fontWeight:400,children:x4}),p.jsx(Ke,{text:y4,fontSize:22,lineHeight:1.2,padding:"10px 20px",backgroundColor:"--primary-color-light-rose"})]}),p.jsxs(xe.ServiceContent,{children:[p.jsxs(xe.Description,{children:[p.jsx(yt,{fontSize:18,children:ze(v4)}),p.jsx(yt,{fontSize:18,children:ze(b4)}),p.jsx(yt,{fontSize:18,children:ze(S4)})]}),p.jsx(Qn,{text:qr,isTransparent:!0,onClick:()=>_a("contacts")})]})]})]})]}),T4=H.div`
  width: 100%;
  max-width: 970px;
  margin: 50px auto 90px;
  box-sizing: border-box;
`,A4=H.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: left;

  ${fc} {
    max-width: 780px;
  }
`,w4=H.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,_4=H.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--primary-color-text-grey);
  margin: 0;
  line-height: 1.3;
`,ye={Container:T4,Content:A4,Section:w4,SectionTitle:_4},C4=()=>p.jsxs(p.Fragment,{children:[p.jsx(Eg,{}),p.jsx(ye.Container,{children:p.jsxs(ye.Content,{children:[p.jsx(fc,{children:"Политика конфиденциальности"}),p.jsx(yt,{fontSize:18,lineHeight:1.3,children:"Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных, которые вы оставляете на этом сайте."}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"1. Какие данные собираются"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Мы можем собирать и обрабатывать следующие данные: — имя, адрес электронной почты и телефон — если вы заполняете форму обратной связи; — данные cookies и техническую информацию (IP-адрес, тип устройства, браузер, время посещения) для аналитики и улучшения работы сайта."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"2. Для чего используются данные"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Собранные данные мы используем исключительно для: — обратной связи по вашему запросу; — отправки информации о продуктах, услугах и событиях (только с вашего согласия); — анализа посещаемости сайта и улучшения качества материалов."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"3. Дети"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Наш сайт и услуги не предназначены для лиц младше 13 лет. Мы сознательно не собираем их данные. Если вы считаете, что ребёнок предоставил нам свои данные, пожалуйста, свяжитесь с нами — мы удалим их."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"4. Передача данных третьим лицам"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Мы не продаём и не передаём ваши данные третьим лицам, за исключением случаев, когда это требуется по закону. Для аналитики мы можем использовать внешние сервисы (например, Google Analytics), которые обрабатывают обезличенные данные."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"5. Хранение и защита данных"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Все персональные данные обрабатываются в соответствии с действующим законодательством. Мы принимаем разумные технические и организационные меры для защиты информации от несанкционированного доступа. Данные хранятся только столько времени, сколько это необходимо для целей, ради которых они были собраны."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"6. Ваши права"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Вы имеете право: — запросить копию своих персональных данных; — потребовать исправления или удаления данных; — отозвать согласие на их обработку. Для этого напишите нам на e-mail, указанный в разделе «Контакты»."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"7. Cookies"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"Наш сайт может использовать cookies для корректной работы и анализа посещаемости. Вы можете отключить cookies в настройках браузера, однако это может повлиять на корректность работы некоторых функций."})]}),p.jsxs(ye.Section,{children:[p.jsx(ye.SectionTitle,{children:"8. Контакты"}),p.jsx(yt,{fontSize:16,lineHeight:1.3,children:"По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами: info@irynaharelik.com"})]})]})}),p.jsx(cg,{})]}),R4=H.div`
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
`,z4={Container:R4},mm=({title:l,text1:r,text2:c})=>p.jsxs(z4.Container,{children:[p.jsx(Ke,{text:l,fontSize:22,lineHeight:1.1}),p.jsxs("div",{children:[p.jsx(Kp,{children:r}),p.jsx(Kp,{children:c})]})]}),D4="/startup-landing/assets/office-desk-essentials-1-CPq79vbf.png",j4="/startup-landing/assets/office-desk-essentials-2-CtkhdIHf.png",O4="/startup-landing/assets/office-desk-essentials-3-C8iUojV5.png",M4="/startup-landing/assets/office-desk-essentials-4-Cmp9txaO.png";H.a`
  font-size: 14px;
  color: var(--primary-color-text-grey);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-80);
  }
`;const N4=H.a`
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
`,U4=H.span`
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
`,gm={ExternalLink:N4,ExternalLinkDisabled:U4},$s=({url:l})=>l?p.jsx(gm.ExternalLink,{href:l,target:"_blank",rel:"noopener noreferrer",children:"Подробнее"}):p.jsx(gm.ExternalLinkDisabled,{children:"Подробнее"}),H4=H.div`
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
`,B4=H.div`
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
`,L4=H.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 25px 22px 34px;
  background-image: ${l=>`url(${l.$background})`};
  background-size: cover, cover;
  background-position: center bottom, center center;
  background-repeat: no-repeat;
  flex-shrink: 0;
  overflow: hidden;
  height: 620px;

  ${su} {
    height: 76px;
    margin-bottom: 12px;
    flex-shrink: 0;
  }
  ${ig.WidgetContainer} {
    margin-bottom: auto;
  }

  @media (max-width: 545px) {
    flex-shrink: 1;
    min-width: 316px; /* Фиксированная ширина для скролла */
  }
`;H.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: 25px;
`;const V4=H.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  margin-bottom: ${l=>l.$offset?`${45-l.$offset}px`:"45px"};
  height: 100%;
  justify-content: flex-end;
`;H.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;const k4=H.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;

  p {
    white-space: pre-line; /* Сохраняет переносы строк */
  }
`,Aa={Container:H4,TrainingWrapper:B4,Training:L4,DescriptionEnd:V4,DescriptionWithLineBreaks:k4},q4="Обучение",G4="Специализация",Y4="→ 1,5 года",X4=`Онлайн-программа по организационному консультированию.
  Глубокое погружение в гештальт-подход в работе с бизнесом, командами и лидерами.`,$4=`Формат: организации как живые системы, построение эффективных отношений,
  управление энергией внутри структур.`,Q4="http://psysevents.tilda.ws/gpo",Z4="Очный семинар",K4="→ 14-21.102025, Стамбул",W4=`Практика применения гештальт-подхода в
  организационной среде.`,F4=`Формат: проживание, групповая динамика, разбор кейсов,
  обучение через опыт и наблюдение.`,J4="http://orgconsalting-istanbul2025.tilda.ws/",I4="Супервизорская группа",P4="→ старт: ноябрь 2025",t3=`Программа профессиональной поддержки для практикующих
  консультантов и фасилитаторов.`,e3=`Формат: регулярные встречи, разбор случаев,
  развитие профессиональной позиции.`,a3="",n3="Новые программы",l3="→ старт: осень 2026",i3=`Готовятся новые курсы по гештальт-коучингу:
  — в работе с собственниками,
  — в построении командных практик.`,u3=()=>p.jsxs(Aa.Container,{children:[p.jsx(xa,{children:q4}),p.jsxs(Aa.TrainingWrapper,{children:[p.jsxs(Aa.Training,{$background:D4,children:[p.jsx(su,{fontWeight:400,children:G4}),p.jsx(Ke,{text:Y4,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsxs(Aa.DescriptionEnd,{$offset:25,children:[p.jsx(yt,{fontSize:18,children:X4}),p.jsx(yt,{fontSize:18,children:ze($4)})]}),p.jsx($s,{url:Q4})]}),p.jsxs(Aa.Training,{$background:j4,children:[p.jsx(su,{fontWeight:400,children:Z4}),p.jsx(Ke,{text:K4,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsxs(Aa.DescriptionEnd,{children:[p.jsx(yt,{fontSize:18,children:W4}),p.jsx(yt,{fontSize:18,children:ze(F4)})]}),p.jsx($s,{url:J4})]}),p.jsxs(Aa.Training,{$background:O4,children:[p.jsx(su,{fontWeight:400,children:I4}),p.jsx(Ke,{text:P4,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsxs(Aa.DescriptionEnd,{children:[p.jsx(yt,{fontSize:18,children:t3}),p.jsx(yt,{fontSize:18,children:ze(e3)})]}),p.jsx($s,{url:a3})]}),p.jsxs(Aa.Training,{$background:M4,children:[p.jsx(su,{fontWeight:400,children:n3}),p.jsx(Ke,{text:l3,fontSize:18,lineHeight:1.2,letterSpacing:.84,padding:"6px 20px",backgroundColor:"--primary-color-super-light-rose"}),p.jsx(Aa.DescriptionWithLineBreaks,{children:p.jsx(yt,{fontSize:18,children:i3})})]})]})]}),r3=H.div`
  padding: ${l=>l.$padding||"15px 20px"};
  border-radius: 10px;
  background: ${l=>l.$backgroundColor?l.$backgroundColor.startsWith("--")?`var(${l.$backgroundColor})`:l.$backgroundColor:"var(--primary-color-super-light-rose)"};
  ${l=>l.$maxWidth&&`
    max-width: ${l.$maxWidth};
  `}
  display: inline-block;
  word-wrap: break-word;
`,c3={WidgetContainer:r3},o3=({text:l,backgroundColor:r,fontSize:c=18,maxWidth:o,padding:s})=>p.jsx(c3.WidgetContainer,{$backgroundColor:r,$padding:s,$maxWidth:o,children:p.jsx(yt,{fontSize:c,lineHeight:1.1,children:l})}),s3="/startup-landing/assets/iryna-3-CZjkOX-M.png",f3=H.div`
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
`,d3=H.div`
  max-width: 570px;
  width: 100%;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`,h3=H.div`
  width: 100%;
  height: 100%;
  background-image: url(${s3});
  background-size: cover;
  background-position: center;
`,p3=H.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 495px;
  width: 100%;

  @media (max-width: 1000px) {
    max-width: 700px;
  }
`,m3=H.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 780px) {
    gap: 12px;
  }
`,cu={Container:f3,ContentWrapper:p3,Iryna:h3,WidgetWrapper:m3,MePhotoWrapper:d3},g3="Что я делаю",x3=["Синхронизирую ключевых людей и «архитекторов» бизнеса","Строю стратегическую картину взаимодействия и будущего","Помогаю пройти трансформационные этапы без потери субъектности","Показываю, как команда может быть не источником выгорания, а источником роста","Поддерживаю так, чтобы клиент не зависел от меня — а укреплялся"],y3=()=>{const l=x3.map(r=>p.jsx(o3,{text:r,fontSize:18,padding:"15px 20px"}));return p.jsxs(cu.Container,{id:"myWork",children:[p.jsx(cu.MePhotoWrapper,{children:p.jsx(cu.Iryna,{})}),p.jsxs(cu.ContentWrapper,{children:[p.jsx(xa,{lineHeight:1.1,children:g3}),p.jsx(cu.WidgetWrapper,{children:l})]})]})},v3=mv`
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
    --primary-color-deep-blue-button: #5c84b2;
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
`,b3=()=>{L.useEffect(()=>{const l=sessionStorage.getItem("pendingScroll");l&&Sg.includes(l)&&setTimeout(()=>{const r=document.getElementById(l);r&&r.scrollIntoView({behavior:"smooth"}),sessionStorage.removeItem("pendingScroll")},100)},[])},S3="БИЗНЕС С ЧЕЛОВЕЧЕСКИМ ЛИЦОМ",E3="Когда в центре — не контроль, а смыслы.",T3="И не борьба, а согласованность.",A3="С УВАЖЕНИЕМ К УЖЕ СУЩЕСТВУЮЩЕЙ СИСТЕМЕ",w3="Всегда начинается с понимания контекста.",_3="Не «внедрение», а выстраивание вместе с вами.";function C3(){return b3(),p.jsxs(p.Fragment,{children:[p.jsx(Eg,{}),p.jsx(BS,{}),p.jsx(mm,{title:S3,text1:E3,text2:T3}),p.jsx(Qv,{}),p.jsx(Eb,{}),p.jsx(y3,{}),p.jsx(E4,{}),p.jsx(u3,{}),p.jsx(zS,{}),p.jsx(mm,{title:A3,text1:w3,text2:_3}),p.jsx(KS,{}),p.jsx(Cv,{}),p.jsx(xS,{}),p.jsx(cg,{})]})}function R3(){return p.jsxs(i2,{children:[p.jsx(v3,{}),p.jsxs(Hy,{children:[p.jsx(Zs,{path:"/",element:p.jsx(C3,{})}),p.jsx(Zs,{path:`/${Pl}`,element:p.jsx(C4,{})})]})]})}$x.createRoot(document.getElementById("root")).render(p.jsx(L.StrictMode,{children:p.jsx(R3,{})}));
