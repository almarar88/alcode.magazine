var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function M(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function N(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,N(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),N(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=N(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=N(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return N(M(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function P(e,t,n){if(e==null)return e;var r=[],i=0;return N(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function F(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var te=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ne(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,te)}catch(e){te(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function re(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ne(re.bind(null,e))}var ie={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ie,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=re,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:F}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ne,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),p=o(((e,t)=>{t.exports=f()})),m=p(),h=l(d(),1),g=(0,h.createContext)({});function _(e){let t=(0,h.useRef)(null);return t.current===null&&(t.current=e()),t.current}var v=typeof window<`u`?h.useLayoutEffect:h.useEffect,y=(0,h.createContext)(null);function b(e,t){e.indexOf(t)===-1&&e.push(t)}function x(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var S=(e,t,n)=>n>t?t:n<e?e:n,C=()=>{},w=()=>{},T={},E=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),D=e=>typeof e==`object`&&!!e,O=e=>/^0[^.\s]+$/u.test(e);function ee(e){let t;return()=>(t===void 0&&(t=e()),t)}var k=e=>e,A=(...e)=>e.reduce((e,t)=>n=>t(e(n))),j=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},M=class{constructor(){this.subscriptions=[]}add(e){return b(this.subscriptions,e),()=>this.remove(e)}remove(e){x(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},N=e=>e*1e3,P=e=>e/1e3,F=(e,t)=>t?1e3/t*e:0,te=(e,t,n)=>e*(3*(1-e)*((1-e)*t+e*n)+e*e);function ne(e,t,n,r){return e===t&&n===r?k:i=>{let a=0,o=1,s=i;for(let t=0;;t++){s>=a&&s<=o||(s=(a+o)/2);let r=te(s,e,n)-i;if(r*r<1e-28||t===40)break;r>0?o=s:a=s,s-=r*1e-7/(te(s+1e-7,e,n)-i-r)}return te(s,t,r)}}var re=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ie=e=>t=>1-e(1-t),I=ne(.33,1.53,.69,.99),L=ie(I),ae=re(L),oe=e=>e>=1?1:(e*=2)<1?.5*L(e):.5*(2-2**(-10*(e-1))),R=e=>1-Math.sin(Math.acos(e)),se=ie(R),ce=re(R),le=ne(.42,0,1,1),ue=ne(0,0,.58,1),de=ne(.42,0,.58,1),fe=e=>Array.isArray(e)&&typeof e[0]!=`number`,pe=e=>Array.isArray(e)&&typeof e[0]==`number`,me={linear:k,easeIn:le,easeInOut:de,easeOut:ue,circIn:R,circInOut:ce,circOut:se,backIn:L,backInOut:ae,backOut:I,anticipate:oe},he=e=>typeof e==`string`,ge=e=>{if(pe(e)){e.length;let[t,n,r,i]=e;return ne(t,n,r,i)}return he(e)?(me[e],`${e}`,me[e]):e},z={delta:0,timestamp:0,isProcessing:!1},_e;function ve(){_e=void 0}var B={now:()=>(_e===void 0&&B.set(z.isProcessing||T.useManualTiming?z.timestamp:performance.now()),_e),set:e=>{_e=e,queueMicrotask(ve)}},ye=e=>Math.round(e*1e5)/1e5,be=e=>t=>typeof t==`string`&&t.startsWith(e),xe=be(`--`),Se=be(`var(--`),Ce=e=>Se(e)?we.test(e.split(`/*`)[0].trim()):!1,we=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Te(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Ee={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},De={...Ee,transform:e=>S(0,1,e)},Oe={...Ee,default:1},ke=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ae(e){return e==null}var je=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Me=(e,t)=>n=>!!(typeof n==`string`&&je.test(n)&&n.startsWith(e)||t&&!Ae(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ne=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(ke);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},Pe=e=>S(0,255,e),Fe={...Ee,transform:e=>Math.round(Pe(e))},Ie={test:Me(`rgb`,`red`),parse:Ne(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Fe.transform(e)+`, `+Fe.transform(t)+`, `+Fe.transform(n)+`, `+ye(De.transform(r))+`)`};function Le(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var Re={test:Me(`#`),parse:Le,transform:Ie.transform},ze=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Be=ze(`deg`),Ve=ze(`%`),V=ze(`px`),He=ze(`vh`),Ue=ze(`vw`),We={...Ve,parse:e=>Ve.parse(e)/100,transform:e=>Ve.transform(e*100)},Ge={test:Me(`hsl`,`hue`),parse:Ne(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Ve.transform(ye(t))+`, `+Ve.transform(ye(n))+`, `+ye(De.transform(r))+`)`},H={test:e=>Ie.test(e)||Re.test(e)||Ge.test(e),parse:e=>Ie.test(e)?Ie.parse(e):Ge.test(e)?Ge.parse(e):Re.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?Ie.transform(e):Ge.transform(e),getAnimatableNone:e=>{let t=H.parse(e);return t.alpha=0,H.transform(t)}},Ke=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,qe=new RegExp(ke.source),Je=new RegExp(Ke.source,`i`);function Ye(e){return isNaN(e)&&typeof e==`string`&&(qe.test(e)||Je.test(e))}var Xe=`number`,Ze=`color`,Qe=`var`,$e=`var(`,et="${}",tt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;function nt(e){let t=e.toString();return qe.test(t)||Je.test(t)}function rt(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(tt,e=>(H.test(e)?(r.color.push(a),i.push(Ze),n.push(H.parse(e))):e.startsWith($e)?(r.var.push(a),i.push(Qe),n.push(e)):(r.number.push(a),i.push(Xe),n.push(parseFloat(e))),++a,et)).split(et),indexes:r,types:i}}function it(e){return rt(e).values}function at({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===Xe?ye(r[a]):e===Ze?H.transform(r[a]):r[a]}return i}}function ot(e){return at(rt(e))}var st=e=>typeof e==`number`?0:H.test(e)?H.getAnimatableNone(e):e,ct=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:st(e);function lt(e){let t=rt(e);return at(t)(t.values.map((e,n)=>ct(e,t.split[n])))}var U={test:Ye,parse:it,createTransformer:ot,getAnimatableNone:lt};function ut(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function dt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=ut(s,r,e+1/3),a=ut(s,r,e),o=ut(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function ft(e,t){return n=>n>0?t:e}var W=(e,t,n)=>e+(t-e)*n,pt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},mt=[Re,Ie,Ge],ht=e=>mt.find(t=>t.test(e));function gt(e){let t=ht(e);if(!t)return`${e}`,!1;let n=t.parse(e);return t===Ge&&(n=dt(n)),n}var _t=(e,t)=>{let n=gt(e),r=gt(t);if(!n||!r)return ft(e,t);let i={...n};return e=>(i.red=pt(n.red,r.red,e),i.green=pt(n.green,r.green,e),i.blue=pt(n.blue,r.blue,e),i.alpha=W(n.alpha,r.alpha,e),Ie.transform(i))},vt=new Set([`none`,`hidden`]);function yt(e,t){return vt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function bt(e,t){return n=>W(e,t,n)}function xt(e){return typeof e==`number`?bt:typeof e==`string`?Ce(e)?ft:H.test(e)?_t:Tt:Array.isArray(e)?St:typeof e==`object`?H.test(e)?_t:Ct:ft}function St(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>xt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ct(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=xt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function wt(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var Tt=(e,t)=>{let n=U.createTransformer(t),r=rt(e),i=rt(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?vt.has(e)&&!i.values.length||vt.has(t)&&!r.values.length?yt(e,t):A(St(wt(r,i),i.values),n):(`${e}${t}`,ft(e,t))},Et=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function Dt(e,t){let n=Et.exec(e);if(!n)return;let r=Et.exec(t);if(!r||n[2]!==r[2])return;let i=n[2],a=parseFloat(n[1]),o=parseFloat(r[1]);return e=>ye(W(a,o,e))+i}function Ot(e,t,n){if(typeof e==`number`&&typeof t==`number`&&typeof n==`number`)return W(e,t,n);if(typeof e==`string`&&typeof t==`string`){let n=Dt(e,t);if(n)return n}return xt(e)(e,t)}var kt=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function At(e){let t=new Set,n=new Set,r=!1,i=!1,a=new Set,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(n.add(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var jt=40;function Mt(e,t,n={delta:0,timestamp:0,isProcessing:!1}){let r=!1,i=!0,a=()=>r=!0,o=kt.reduce((e,t)=>(e[t]=At(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=T.useManualTiming,o=a?n.timestamp:performance.now();r=!1,a||(n.delta=i?1e3/60:Math.max(Math.min(o-n.timestamp,jt),1)),n.timestamp=o,n.isProcessing=!0,s.process(n),c.process(n),l.process(n),u.process(n),d.process(n),f.process(n),p.process(n),m.process(n),n.isProcessing=!1,r&&t&&(i=!1,e(h))},g=()=>{r=!0,i=!0,n.isProcessing||e(h)};return{schedule:kt.reduce((e,t)=>{let n=o[t];return e[t]=(e,t=!1,i=!1)=>(r||g(),n.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<kt.length;t++)o[kt[t]].cancel(e)},state:n,steps:o}}var{schedule:G,cancel:Nt,steps:Pt}=Mt(typeof requestAnimationFrame<`u`?requestAnimationFrame:k,!0,z),Ft=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>G.update(t,e),stop:()=>Nt(t),now:()=>z.isProcessing?z.timestamp:B.now()}},It=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Lt=2e4;function Rt(e,t=50,n=Lt,r){let i=0,a=e.next(i);for(r?.push(a.value);!a.done&&i<n;)i+=t,a=e.next(i),r?.push(a.value);return i>=n?1/0:i}function zt(e,t=100,n){let{keyframes:r,velocity:i}=e,a=r&&r[r.length-1]-r[0],o=n({...e,velocity:i&&a?i*t/a:i,keyframes:[0,t]}),s=Math.min(Rt(o),Lt);return{type:`keyframes`,ease:e=>o.next(s*e).value/t,duration:P(s)}}var K={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},Bt=e=>e<0?1/Math.max(1+e,K.minDamping):Math.max(1-e,K.minDamping);function Vt(e,t){if(!(e>1))return 1;let n=Math.sqrt(e*e-1),r=e-n,i=e+n,a=2*n*Math.exp(-t)*(1+t);return Wt(e=>i*Math.exp(-r*e)-r*Math.exp(-i*e)-a,e=>Math.exp(-i*e)-Math.exp(-r*e),t)/t}function Ht(e,t){return e*Math.sqrt(1-t*t)}var Ut=12;function Wt(e,t,n){let r=n;for(let n=1;n<Ut;n++)r-=e(r)/t(r);return r}var Gt=.001;function Kt({duration:e=K.duration,bounce:t=K.bounce}){let n,r;K.maxDuration;let i=Bt(t);e=S(K.minDuration,K.maxDuration,P(e)),i<1?(n=t=>{let n=t*i,r=n*e,a=Ht(t,i),o=Math.exp(-r);return Gt-n/a*o},r=t=>{let r=t*i*e,a=i*i*t*t*e,o=Math.exp(-r),s=Ht(t*t,i);return(-n(t)+Gt>0?-1:1)*-a*o/s}):(n=t=>-.001+Math.exp(-t*e)*(t*e+1),r=t=>Math.exp(-t*e)*(-t*(e*e)));let a=5/e,o=Wt(n,r,a),s=o*Vt(i,o*e),c=s*s;return{stiffness:c,damping:i*2*Math.sqrt(c),duration:N(e)}}var qt=(e,t)=>(t?e>=0:e>0)&&e<1/0;function Jt(e,t){if(qt(e,t))return e}function Yt(e){let t=Jt(e.stiffness),n=Jt(e.damping,!0),r=Jt(e.mass),i={...e,stiffness:t??K.stiffness,damping:n??K.damping,mass:r??K.mass,isResolvedFromDuration:!1,isTimeDefined:(t??n??r)===void 0&&(e.duration!==void 0||e.bounce!==void 0)};if(i.isTimeDefined){if(e.visualDuration){let t=Bt(e.bounce||0),n=2*Math.PI/(e.visualDuration*1.2)*Vt(t,2*Math.PI/1.2);i.stiffness=n*n,i.damping=2*t*Math.sqrt(i.stiffness)}else Object.assign(i,Kt(i)),i.isResolvedFromDuration=!0;(!qt(i.stiffness)||!qt(i.damping,!0))&&(i.stiffness=K.stiffness,i.damping=K.damping)}return i}function Xt(e=K.visualDuration,t=K.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},r=n.keyframes[0],i=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:o,damping:s,mass:c,duration:l,isResolvedFromDuration:u,isTimeDefined:d}=Yt({...n}),f=e=>d?0:-P(e),p=s/(2*Math.sqrt(o*c)),m=P(Math.sqrt(o/c)),h=p*m,g={target:i,delta:i-r,velocity:f(n.velocity||0)||0,restSpeed:0,restDelta:0},_=()=>{let e=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(e?K.restSpeed.granular:K.restSpeed.default),g.restDelta=n.restDelta||(e?K.restDelta.granular:K.restDelta.default)};_();let v,y,b;if(p<1){let e=Ht(m,p),t={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};b=()=>{t.A=(g.velocity+h*g.delta)/e,t.sinC=h*t.A+g.delta*e,t.cosC=h*g.delta-t.A*e};let n=n=>{n!==t.t&&(t.t=n,t.env=Math.exp(-h*n),t.sin=Math.sin(e*n),t.cos=Math.cos(e*n))};v=e=>(n(e),g.target-t.env*(t.A*t.sin+g.delta*t.cos)),y=e=>(n(e),t.env*(t.sinC*t.sin+t.cosC*t.cos))}else if(p===1){v=e=>g.target-Math.exp(-m*e)*(g.delta+(g.velocity+m*g.delta)*e);let e={C:0};b=()=>{e.C=g.velocity+m*g.delta},y=t=>Math.exp(-m*t)*(m*e.C*t-g.velocity)}else{let e=m*Math.sqrt(p*p-1),t=h-e,n=h+e,r=d?1/0:300/e,i=(e,t)=>Math.exp(t>r?-e*r-h*(t-r):-e*t),a={S:0,F:0};b=()=>{let t=(g.velocity+h*g.delta)/e;a.S=(g.delta+t)/2,a.F=(g.delta-t)/2},v=e=>g.target-a.S*i(t,e)-a.F*i(n,e),y=e=>t*a.S*i(t,e)+n*a.F*i(n,e)}b();let x=u&&l||null,S={calculatedDuration:x,retarget:(e,t)=>{g.target=e[e.length-1],g.delta=g.target-e[0],g.velocity=f(t),n.restSpeed&&n.restDelta||_(),S.calculatedDuration=x,a.done=!1,b()},velocity:e=>N(y(e)),next:e=>{let t=v(e);if(u)a.done=e>=l;else{let n=N(y(e));a.done=Math.abs(n)<=g.restSpeed&&Math.abs(g.target-t)<=g.restDelta}return a.value=a.done?g.target:t,a},toString:()=>{let e=Math.min(Rt(S),Lt),t=It(t=>S.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return S}Xt.applyToOptions=e=>{let t=zt(e,100,Xt);return e.ease=t.ease,e.duration=N(t.duration),e.type=`keyframes`,e};function Zt({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>e<s||e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>{let t=v(e);f.done=Math.abs(t)<=l,f.value=f.done?_:_+t},b,x,S=e=>{p(f.value)&&(b=e,x=Xt({keyframes:[f.value,m(f.value)],velocity:-v(e)/r*1e3,damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return!x&&b===void 0&&(t=!0,y(e),S(e)),b!==void 0&&e>=b?x.next(e-b):(!t&&y(e),f)}}}function Qt(e,t,n){let r=[],i=n||T.mix||Ot,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=A(Array.isArray(t)?t[n]||k:t,a)),r.push(a)}return r}function $t(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Qt(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=j(e[r],e[r+1],n);return s[r](i)};return n?t=>l(S(e[0],e[a-1],t)):l}function en(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=j(0,t,r);e.push(W(n,1,i))}}function tn(e){let t=[0];return en(t,e.length-1),t}function nn(e,t){return e.map(e=>e*t)}function rn(e,t){return e.map(()=>t||de).splice(0,e.length-1)}function an({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=fe(r)?r.map(ge):ge(r)||de,a={done:!1,value:t[0]};if(t.length===2&&!Array.isArray(i)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){let[n,r]=t,o=n===r?void 0:(T.mix||Ot)(n,r);return{calculatedDuration:e,next:t=>(a.value=o?o(i(e>0?S(0,1,t/e):1)):r,a.done=t>=e,a)}}let o=$t(nn(n&&n.length===t.length?n:tn(t),e),t,{ease:Array.isArray(i)?i:rn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var on=5;function sn(e,t,n){let r=Math.max(t-on,0);return F(n-e(r),t-r)}function cn(e,t,n=0){return t<=0?n:e.velocity?e.velocity(t):sn(t=>e.next(t).value,t,e.next(t).value)}var ln=e=>e!==null;function un(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(ln),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var dn={decay:Zt,inertia:Zt,tween:an,keyframes:an,spring:Xt};function fn(e){typeof e.type==`string`&&(e.type=dn[e.type])}var pn=40,mn=(e,t)=>t-e>pn&&!T.useManualTiming?t:e;function hn(e,t){return{kind:e,animation:t,timestamp:B.now(),frameTimestamp:z.timestamp,frameIsProcessing:z.isProcessing}}function gn(e,t,n){let r=globalThis.__MOTION_INSPECT__;if(r)try{r({...hn(`animation-start`,e),options:n?{...t,...n}:t})}catch{}}function _n(e,t){let n=globalThis.__MOTION_INSPECT__;if(n)try{n({...hn(`layout-animation-start`,e),node:t})}catch{}}var vn=class{constructor(){this.isResolved=!1}get finished(){return this._finished||=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e}),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){this.isResolved=!0,this._resolve?.()}then(e,t){return this.finished.then(e,t)}},yn=e=>e/100,bn=e=>Math.round(e*1e4)/1e4,xn=class extends vn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==B.now()&&this.tick(B.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),gn(this,this.options)}initAnimation(){let{options:e}=this;fn(e);let{type:t=an,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||an;s!==an&&typeof o[0]!=`number`&&(this.mixKeyframes=A(yn,Ot(o[0],o[1])),o=[0,100]);let c=s(o===e.keyframes?e:{...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Rt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,calculatedDuration:i}=this;if(this.startTime===null)return n.next(0);let{delay:a=0,keyframes:o,type:s,onUpdate:c,finalKeyframe:l}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=mn(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let u=this.currentTime-a*(this.playbackSpeed>=0?1:-1),d=this.playbackSpeed>=0?u<0:u>r;this.currentTime=Math.max(u,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let f=this.generate(this.currentTime,d),{done:p}=f;!d&&i!==null&&(p=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let m=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&p);return m&&s!==Zt&&(f.value=un(o,this.options,l,this.speed)),c&&c(f.value),m&&this.finish(),f}at(e){return this.holdTime??bn((e-this.startTime)*this.playbackSpeed)}sampleAt(e,t){let{options:n,totalDuration:r}=this,i=this.at(e)-(n.delay||0);return i>=r&&n.type!==Zt?un(n.keyframes,n,t?void 0:n.finalKeyframe):this.generate(Math.max(i,0),i<0).value}generate(e,t){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o}=this,{keyframes:s,repeat:c,repeatType:l,repeatDelay:u}=this.options,d=e,f=n;if(c){let t=Math.min(e,r)/o,n=Math.floor(t),i=t%1;!i&&t>=1&&(i=1),i===1&&n--,n=Math.min(n,c+1),n%2&&(l===`reverse`?(i=1-i,u&&(i-=u/o)):l===`mirror`&&(f=a)),d=S(0,1,i)*o}let p;return t?(this.delayState.value=s[0],p=this.delayState):p=f.next(d),i&&!t&&(p.value=i(p.value)),p}then(e,t){return this.finished.then(e,t)}get duration(){return P(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+P(e)}get time(){return P(this.currentTime)}set time(e){e=N(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return cn(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(B.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=P(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Ft,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??(this.pendingStartTime=n):this.startTime=n-this.holdTime/(this.playbackSpeed||1),this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(B.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}},Sn=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Cn(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(ke)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Sn.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var wn=/\b([a-z-]*)\(.*?\)/gu,Tn={...U,getAnimatableNone:e=>{let t=e.match(wn);return t?t.map(Cn).join(` `):e}},En={...U,getAnimatableNone:e=>{let t=U.parse(e);return U.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Dn={...Ee,transform:Math.round},On={rotate:Be,pathRotation:Be,rotateX:Be,rotateY:Be,rotateZ:Be,scale:Oe,scaleX:Oe,scaleY:Oe,scaleZ:Oe,skew:Be,skewX:Be,skewY:Be,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:De,originX:We,originY:We,originZ:V},kn={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,top:V,right:V,bottom:V,left:V,inset:V,insetBlock:V,insetBlockStart:V,insetBlockEnd:V,insetInline:V,insetInlineStart:V,insetInlineEnd:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,paddingBlock:V,paddingBlockStart:V,paddingBlockEnd:V,paddingInline:V,paddingInlineStart:V,paddingInlineEnd:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,marginBlock:V,marginBlockStart:V,marginBlockEnd:V,marginInline:V,marginInlineStart:V,marginInlineEnd:V,fontSize:V,backgroundPositionX:V,backgroundPositionY:V,...On,zIndex:Dn,fillOpacity:De,strokeOpacity:De,numOctaves:Dn},An={...kn,color:H,backgroundColor:H,outlineColor:H,fill:H,stroke:H,borderColor:H,borderTopColor:H,borderRightColor:H,borderBottomColor:H,borderLeftColor:H,filter:Tn,WebkitFilter:Tn,mask:En,WebkitMask:En},jn=e=>An[e],Mn=new Set([Tn,En]);function Nn(e,t){let n=jn(e);return Mn.has(n)||(n=U),n.getAnimatableNone?n.getAnimatableNone(t):void 0}function Pn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Fn=e=>e*180/Math.PI,In=e=>Rn(Fn(Math.atan2(e[1],e[0]))),Ln={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scaleZ:()=>1,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:In,rotateZ:In,skewX:e=>Fn(Math.atan(e[1])),skewY:e=>Fn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Rn=e=>(e%=360,e<0&&(e+=360),e),zn=In,Bn=e=>Math.hypot(e[0],e[1]),Vn=e=>Math.hypot(e[4],e[5]),Hn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Bn,scaleY:Vn,scaleZ:e=>Math.hypot(e[8],e[9],e[10]),scale:e=>(Bn(e)+Vn(e))/2,rotateX:e=>Rn(Fn(Math.atan2(e[6],e[5]))),rotateY:e=>Rn(Fn(Math.atan2(-e[2],e[0]))),rotateZ:zn,rotate:zn,skewX:e=>Fn(Math.atan(e[4])),skewY:e=>Fn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Un(e){return+!!e.includes(`scale`)}function Wn(e,t){if(!e||e===`none`)return Un(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Hn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Ln,i=t}if(!i)return Un(t);let a=r[t],o=i[1].split(`,`).map(Kn);return typeof a==`function`?a(o):o[a]}var Gn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Wn(n,t)};function Kn(e){return parseFloat(e.trim())}var qn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`scaleZ`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],Jn=new Set([...qn,`pathRotation`]),Yn=e=>e===Ee||e===V,Xn=new Set([`x`,`y`,`z`]),Zn=qn.filter(e=>!Xn.has(e));function Qn(e){let t=[];return Zn.forEach(n=>{let r=e.getValue(n);if(r!==void 0){let e=r.get(),i=+!!n.startsWith(`scale`);if(e===i)return;t.push([n,e]),r.set(i)}}),t}var $n=new Set([`bottom`,`right`]);function er(e,t,n,r,i,a){let o=parseFloat(e);if(!isNaN(o))return o;let{min:s,max:c}=t()[n],l=c-s;return a===`border-box`?l:l-parseFloat(r)-parseFloat(i)}var tr={width:({width:e,paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r},i)=>er(e,i,`x`,t,n,r),height:({height:e,paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r},i)=>er(e,i,`y`,t,n,r),top:({top:e})=>parseFloat(e),left:({left:e})=>parseFloat(e),bottom:({top:e},t)=>{let{y:n}=t();return parseFloat(e)+(n.max-n.min)},right:({left:e},t)=>{let{x:n}=t();return parseFloat(e)+(n.max-n.min)},x:({transform:e})=>Wn(e,`x`),y:({transform:e})=>Wn(e,`y`)};tr.translateX=tr.x,tr.translateY=tr.y;var nr=new Set,rr=!1,ir=!1,ar=!1;function or(){if(ir){let e=[],t=new Set,n=new Set;nr.forEach(r=>{r.needsMeasurement&&(e.push(r),t.add(r.element),$n.has(r.name)&&n.add(r.element))});let r=new Map;n.forEach(e=>{let t=Qn(e);t.length&&(r.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=r.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}ir=!1,rr=!1,nr.forEach(e=>e.complete(ar)),nr.clear()}function sr(){nr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ir=!0)})}function cr(){ar=!0,sr(),or(),ar=!1}function lr(e,t,n){if(typeof e==`string`){if(E(e)||O(e))return parseFloat(e);if(!U.test(e)&&U.test(n))return Nn(t,n)}return e??void 0}var ur=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(nr.add(this),rr||(rr=!0,G.read(sr),G.resolveKeyframes(or))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=lr(n.readValue(t,a),t,a);r!==void 0&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Pn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),nr.delete(this)}cancel(){this.state===`scheduled`&&(nr.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},dr=e=>e.startsWith(`--`);function fr(e,t,n){dr(t)?e.style.setProperty(t,n):e.style[t]=n}var pr={};function mr(e,t){let n=ee(e);return()=>pr[t]??n()}var hr=mr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),gr=mr(()=>window.ViewTimeline!==void 0,`viewTimeline`),_r=mr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),vr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,yr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:vr([0,.65,.55,1]),circOut:vr([.55,0,1,.45]),backIn:vr([.31,.01,.66,-.59]),backOut:vr([.33,1.53,.69,.99])};function br(e,t){if(e)return typeof e==`function`?_r()?It(e,t):`ease-out`:pe(e)?vr(e):Array.isArray(e)?e.map(e=>br(e,t)||yr.easeOut):yr[e]}function xr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=br(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Sr(e){return typeof e==`function`&&`applyToOptions`in e}function Cr({type:e,...t}){return Sr(e)&&_r()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var wr=class extends vn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Cr(e);this.animation=xr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=un(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),fr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()},gn(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return P(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+P(e)}get time(){return P(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=N(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&hr()?(this.animation.timeline=e,t?.(this.animation),k):n(this)}},Tr={anticipate:oe,backInOut:ae,circInOut:ce};function Er(e){return e in Tr}function Dr(e){typeof e.ease==`string`&&Er(e.ease)&&(e.ease=Tr[e.ease])}var Or=class extends wr{constructor(e){Dr(e),fn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}elapsed(){return this.state===`running`?(B.now()-this.startTime)*this.speed:this.time*1e3}sample(e){if(!this.sampler){let{motionValue:e,onUpdate:t,onComplete:n,onPlay:r,onStop:i,element:a,...o}=this.options;this.sampler=new xn({...o,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){let{state:e}=this;if(e===`running`||e===`paused`)return this.sample(this.elapsed())}updateMotionValue(e){let{motionValue:t,element:n,name:r}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let{speed:i}=this,a=this.elapsed(),o=this.state===`running`&&i?S(0,10,a):0,s=this.sample(a);n&&r&&fr(n,r,s),t.setWithVelocity(this.sample(a-o*Math.sign(i)),s,o/Math.abs(i||1))}},kr=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(U.test(e)||e===`0`)&&!e.startsWith(`url(`));function Ar(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function jr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=kr(i,t),s=kr(a,t);return!o||!s?(o!==s&&`${t}${i}${a}${o?a:i}`,!1):Ar(e)||(n===`spring`||Sr(n))&&r}function Mr(e){e.duration=0,e.type=`keyframes`}var Nr=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),Pr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Fr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Pr.test(e[t]))return!0;return!1}var Ir=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Lr=ee(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Rr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!n||!(Nr.has(n)||Ir.has(n)))return!1;let c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Lr()&&(Nr.has(n)||Ir.has(n)&&Fr(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var zr=(e,t)=>t&&typeof e==`number`?t.transform(e):e,Br={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Vr=qn.length;function Hr(e,t,n){let r=``,i=!0;for(let a=0;a<Vr;a++){let o=qn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=zr(s,kn[o]);if(!c){i=!1;let t=Br[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${zr(a,kn.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}var Ur=new WeakMap,Wr=200,Gr=.001,Kr=.1,qr=.001,Jr=100,Yr=e=>/^(linear|ease(In|Out|InOut))$/.test(e),Xr=(e,t)=>e-t,Zr=(e,t,n)=>{let r=[];for(let i=0;i<=n;i++)r.push(W(e,t,i/n));return r},Qr=e=>e.motionValue.owner,$r=e=>Ur.get(e),ei=(e,t)=>e.latestValues?e.latestValues[t]:e.getValue(t)?.get(),ti=({name:e,motionValue:t})=>e&&qn.includes(e)&&t?.owner?.current instanceof HTMLElement&&Lr()&&_r();function ni(e){let t=Qr(e),{onUpdate:n,transformTemplate:r}=t.getProps();return!e.isHandoff&&!n&&!e.hasOnUpdate&&!r&&e.type!==`inertia`&&(ei(t,`transform`)||`none`)===`none`&&!ei(t,`pathRotation`)&&!t.projection?.isProjecting()}var ri=class extends xn{constructor(e){let t=Qr(e).current,{driver:n=Ft}=e,r,i=ni(e);e.driver=e=>{let i=n(e);return{js:i,now:i.now,start:(e=!0)=>{let n=$r(t);!n||n.isJS?i.start(e):n.schedule(!1,!e)},stop:()=>{i.stop();let e=$r(t);e&&!e.isFinishing&&e.release(r)}}},super(e),r=this,this.canAccelerate=i;let{stop:a}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),a()}}get group(){return $r(Qr(this.options).current)}get js(){return this.driver?.js}get name(){return this.options.name}timing(){let{startTime:e,speed:t,totalDuration:n}=this,{delay:r=0,repeatType:i}=this.options;return this.holdTime===null?n===1/0?[e+r/t,this.resolvedDuration*(i===`loop`?1:2)/t||1]:[e+(r+n)/t,0]:[1/0,0]}isAccelerated(){let{group:e,state:t}=this;return e?.tracks.has(this)&&!e.isJS&&this.canAccelerate&&(t===`running`||t===`paused`)}liveValue(){return this.isAccelerated()?this.sampleAt(B.now()):void 0}tween(){let{keyframes:e,type:t,ease:n,times:r,repeat:i,delay:a=0}=this.options,o=pe(n)?vr(n):Yr(n)&&yr[n];if(o&&!i&&!r&&e.length===2&&t===an&&this.holdTime===null){let e=this.startTime+a/this.speed;return[e,e+this.resolvedDuration/this.speed,o]}}boundaries(e,t){let{startTime:n,speed:r,resolvedDuration:i,options:a}=this,{delay:o=0,repeat:s=0,repeatDelay:c=0,repeatType:l,times:u,keyframes:d,type:f}=a,p=(f||an)===an?u||tn(d):[0,1],m=n+o/r,h=[];if(this.holdTime!==null||!(i>0))return h;for(let n=Math.max(0,Math.floor((e-m)*r/i));n<=s;n++){let a=m+n*i/r;if(a>t)break;for(let o of p){let s=a+(n%2&&l&&l!==`loop`?1-o:o)*(i-c)/r;s>e&&s<t&&h.push(s)}}return h}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){let e=B.now();this.options.motionValue.setWithVelocity(this.sampleAt(e-10,!0),this.sampleAt(e,!0),10)}play(){this.isStopped||((this.group||ii(Qr(this.options))).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&(this.sync(),this.group.schedule(!1))}complete(){super.complete();let{group:e}=this;e&&!e.isJS&&this.canAccelerate&&this.tick(B.now())}get time(){return this.isAccelerated()?P(S(0,this.totalDuration,this.at(B.now())-(this.options.delay||0))):super.time}set time(e){super.time=e,this.isAccelerated()&&this.sync()}attachTimeline(e){return this.canAccelerate=!1,this.group?.demote(!0),super.attachTimeline(e)}};function ii(e){let t=e.current,n=new Set,r=new Map,i={},a=[],o=new Map,s=[],c=!1,l=!1,u=!1,d=!1,f=-1/0,p=e=>{for(let t of n)if(t.name===e)return!0},m=(t,n)=>{let o={};for(let s of t===void 0?qn:a){let a=r.get(s),c=t===void 0?ei(e,s):a?a.sampleAt(n>t&&!a.timing()[1]?n:t):i[s];c!==void 0&&(o[s]=c)}return o},h=(e,t)=>{let n=``,r=m(e,t);for(let e in r)n+=(Br[e]||e)+`(`+zr(r[e],kn[e])+`) `;return n||`none`},g=(e=m())=>{t.style.transform=Hr(e,{})},_=(e=!0)=>{e&&g(),s.forEach(({animation:e})=>e.cancel()),s=[]},v=(e,t,n=1/0)=>{let r={animation:e,offset:t,end:n};e.startTime=B.now()+t,n<1/0&&(e.onfinish=()=>{r.isDone=!0,s.some(e=>e.end===1/0)&&(e.cancel(),s=s.filter(e=>e!==r)),O.schedule(!1)}),e.oncancel=()=>s.includes(r)&&O.demote(),s.push(r)},y=(e,t,n)=>{let r=(t,n)=>Math.abs(e(n)-e(t)),i=r(t,n);for(;n-t>.01;){let e=(t+n)/2;r(t,e)>r(e,n)?n=e:t=e}return r(t,n)>i/2?[t,n]:[]},b=(e,t,n,r)=>{let i=Math.min(Wr,Math.max(2,Math.ceil((n-t)/10)));if(r.length*4>i)return;let a=Zr(t,n,i).concat(r).sort(Xr),o=e=>j(t,n,e),s,c;for(let t of e){let e=a.map(e=>t.numberAt(e)),[n]=e,r=e.map(e=>e-n),i=r[r.length-1],o=r.some(e=>Math.abs(e)*Gr>Math.abs(i))?0:i,l=r.map(e=>o?e/o:e);if(!o){if(l.some(e=>!(Math.abs(e)<=Gr)))return}else if(!s)s=l,c=e=>(t.numberAt(e)-n)/o;else if(l.some((e,t)=>!(Math.abs(e-s[t])<=Gr)))return}if(!s||s.every((e,t)=>Math.abs(e-o(a[t]))<=Gr))return`linear`;let l=[],u=(e,t=c(e))=>l.push(bn(t)+` `+bn(o(e)*100)+`%`);return s.forEach((e,t)=>{t&&Math.abs(e-s[t-1])>.2&&y(c,a[t-1],a[t]).forEach(e=>u(e)),u(a[t],e)}),`linear(`+l+`)`},x=(e,t,n,r)=>{let i=[t],a=(t,n)=>e.every(e=>!(Math.abs(e.numberAt((t+n)/2)-(e.numberAt(t)+e.numberAt(n))/2)>(e.name.startsWith(`scale`)?qr:Kr))),o=(t,n,r)=>{if(n-t<1||a(t,n))i.push(n);else if(r<4)o(t,(t+n)/2,r+1),o((t+n)/2,n,r+1);else{for(let r of e)i.push(...y(e=>r.numberAt(e),t,n));i.push(n)}},s=Zr(t,n,Math.ceil((n-t)/100));for(let e of r)s.push(e,Math.min(e+.01,n));let c=t;for(let e of s.sort(Xr))e>c&&o(c,e,0),c=e;return i.sort(Xr)},S=e=>{let t;for(let n of e){let e=n.tween();if(!e||t?.some((t,n)=>n<2?Math.abs(e[n]-t)>1:e[n]!==t))return;t=e}return t},C=(e,n,r,i={fill:`both`},a,o)=>{let s=e.flatMap(e=>e.boundaries(n,r)),c=o||b(e,n,r,s),l=c?[n,r]:x(e,n,r,s),u=l.map(e=>h(e,a)),d={transform:u};return c||(d.offset=l.map(e=>j(n,r,e))),u.every(e=>e===u[0])&&(g(m(n,a)),d=null),t.animate(d,{...i,duration:r-n,easing:c||`linear`})},w=c=>{let l=c,u=0,d=0,f=[],p=[],m=new Set;r.clear(),o=new Map;for(let e of n){r.set(e.name,e);let[t,n]=e.timing(),i=t===1/0;if(o.set(e,[e.at(c),e.speed,i]),i)e.sync();else{if(e.speed<0)return;if(n){if(u){let e=(t-d)/n;if(Math.abs(n-u)>1||Math.abs(e-Math.round(e))*u>1)return}else u=n,d=t;p.push(e)}else m.add(t);f.push(e),l=Math.max(l,t)}}i={},a=qn.filter(t=>{if(r.has(t))return!0;let n=i[t]=ei(e,t);return n!==void 0&&parseFloat(n)!==+!!t.startsWith(`scale`)}),_(!1);let h=!u&&S(f);try{if(h&&h[1]>c){let[e,t,n]=h;v(C(f,e,t,void 0,void 0,n),e-c,t-e)}else l>c&&(v(C(f,c,l),0,l-c),m.forEach(e=>e<l-1&&v(t.animate(null,{duration:e-c}),0,e-c)));if(u){let e=d+Math.floor((l-d)/u)*u;v(C(p,e,e+u,{iterations:1/0,iterationStart:(l-e)/u,fill:`forwards`},l),l-c)}}catch{return}return s.length||_(),!0},T=e=>{let t,r=0;for(let i of n){let n=o.get(i);if(!n)return!1;let[a,s,c]=n,l=i.at(e),u=i.timing()[0]===1/0;if(c){if(u&&l===a)continue;return!1}let d=(l-a)/s,f=u?0:i.speed/s;if(t===void 0)t=d,r=f;else if(Math.abs(d-t)>1||f!==r)return!1}if(t===void 0)return!0;if(!s.length)return!1;for(let{offset:e,end:n,isDone:r}of s){let i=t-e;if(n<1/0&&(r?i<n-1:i<0||i>=n))return!1}for(let{animation:n,offset:i,isDone:a}of s){if(a)continue;let o=t-i;r?(n.playbackRate=r,n.startTime=e-o/r):(n.pause(),n.currentTime=o)}return!0},E=()=>!n.size&&(u=!0,$r(t)===O&&Ur.delete(t),O.isJS||_(),!0),D=()=>{let t=B.now();if(O.isJS||(O.isFinishing=!0,n.forEach(n=>{let[r,a]=n.timing();n.state===`running`&&n.speed>0&&!a&&r<=t+1&&(n.complete(),i[n.name]=ei(e,n.name),o.has(n)||(c=!0))}),O.isFinishing=!1),l=!1,u||(n.forEach(({state:e},t)=>{(e===`idle`||e===`finished`)&&n.delete(t)}),E()))return;for(let e of n)if(!e.canAccelerate)return O.demote(!0);O.isJS&&(O.isJS=!1,c=!0,n.forEach(e=>e.js?.stop()));let r=c,a=d;if(c=d=!1,r||!T(t)){if(a){if(t-f<Jr)return O.demote();f=t}if(!w(t))return O.demote()}},O={tracks:n,isJS:!1,isFinishing:!1,schedule(e,t){u||(c||=e,d||=!!t,l||(l=!0,z.isProcessing?G.render(D,!1,!0):queueMicrotask(D)))},release(e){let{state:t}=e;(t===`idle`||t===`finished`)&&n.delete(e),E()||O.schedule(!0)},check(){if(!O.isJS){for(let t in i)if(ei(e,t)!==i[t]&&!p(t))return O.schedule(!0,!0)}},demote(e){O.isJS||u||(n.forEach(t=>{t.isAccelerated()&&t.sync(),e||(t.canAccelerate=!1)}),O.isJS=!0,o=new Map,_(),n.forEach(e=>e.state===`running`&&e.js?.start()))}};return Ur.set(t,O),O}var ai=class extends vn{constructor(e){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=B.now();let{keyframes:t,name:n,motionValue:r,element:i}=e,a=e;a.autoplay??=!0,a.delay??=0,a.type??=`keyframes`,a.repeat??=0,a.repeatDelay??=0,a.repeatType??=`loop`;let o=i?.KeyframeResolver||ur;this.keyframeResolver=new o(t,(e,t,n)=>this.onKeyframesResolved(e,t,a,!n),n,r,i),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=B.now();let u=!0;jr(e,i,a,o)||(u=!1,(T.instantAnimations||!s)&&l?.(un(e,n,t)),e[0]=e[e.length-1],Mr(n),n.repeat=0);let{onComplete:d}=n;n.finalKeyframe=t,n.keyframes=e,n.onComplete=()=>{d?.(),this.notifyFinished()};let f=u&&!c&&Rr(n),p=!f&&ti(n);r&&(f||p||this.resolvedAt!==this.createdAt)&&(n.startTime??=mn(this.createdAt,this.resolvedAt));let m;if(f){n.element=n.motionValue?.owner?.current;try{m=new Or(n)}catch{m=new xn(n)}}else m=p?new ri(n):new xn(n);this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this._animation.finished:super.finished}then(e,t){return this.finished.finally(e).then(()=>{})}liveValue(){return this._animation?.liveValue?.()}get animation(){return this._animation||(this.keyframeResolver?.resume(),cr()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function oi(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var si=30,ci=e=>!isNaN(parseFloat(e)),li={current:void 0},ui=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=B.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=B.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ci(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){var n;return e===`change`?this.onChangeSubscribe(t):((n=this.events)[e]||(n[e]=new M)).add(t)}onChangeSubscribe(e){let{events:t}=this;return!t.change&&!this.changeSubscriber?this.changeSubscriber=e:(t.change||(t.change=new M,t.change.add(this.changeSubscriber),this.changeSubscriber=void 0),t.change.add(e)),()=>{this.changeSubscriber===e?this.changeSubscriber=void 0:t.change?.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){G.read(()=>{!this.changeSubscriber&&!this.events.change?.getSize()&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){let{current:e,changeSubscriber:t}=this;t?t(e):this.events.change?.notify(e)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){li.current&&li.current.push(this);let e=this.animation?.liveValue?.();return e===void 0?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){let e=B.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>si)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,si);return F(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0;let n=!1,r;r=e(()=>{n=!0,this.events.animationComplete?.notify(),this.animation===r&&this.clearAnimation(),t()}),n||(this.animation=r),this.events.animationStart?.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function di(e,t){return new ui(e,t)}function fi(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function pi(e,t){let n=e?.[t]??e?.default??e;return n===e?n:fi(n,e)}var mi={type:`spring`,stiffness:500,damping:25,restSpeed:10},hi=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),gi={type:`keyframes`,duration:.8},_i={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},vi=(e,{keyframes:t})=>t.length>2?gi:Jn.has(e)?e.startsWith(`scale`)?hi(t[1]):mi:_i,yi=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function bi(e){for(let t in e)if(!yi.has(t))return!0;return!1}var xi=(e,t,n,r={},i,a)=>o=>{let s=pi(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=N(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i,hasOnUpdate:!!s.onUpdate};bi(s)||Object.assign(u,vi(e,u)),u.duration&&=N(u.duration),u.repeatDelay&&=N(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Mr(u),u.delay===0&&(d=!0)),(T.instantAnimations||T.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Mr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=un(u.keyframes,s);if(e!==void 0){G.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new xn(u):new ai(u)},Si=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Ci(e){let t=Si.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function wi(e,t,n=1){`${e}`;let[r,i]=Ci(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return E(e)?parseFloat(e):e}return Ce(i)?wi(i,t,n+1):i}function Ti(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Ei(e,t,n,r){let i=t=>typeof t==`function`?t(n===void 0?e.custom:n,...Ti(r)):t;return t=i(t),typeof t==`string`&&(t=e.variants&&e.variants[t]),i(t)}function Di(e,t,n){return Ei(e.getProps(),t,n,e)}var Oi=(e,t)=>t===`exit`?e.presenceContext?.custom:void 0,ki=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...qn]),Ai=e=>Array.isArray(e);function ji(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,di(n))}function Mi(e){return Ai(e)?e[e.length-1]||0:e}function Ni(e,t){let{transitionEnd:n={},transition:r={},...i}=Di(e,t)||{};i={...i,...n};for(let t in i)ji(e,t,Mi(i[t]))}var q=e=>!!(e&&e.getVelocity);function Pi(e){return!!(q(e)&&e.add)}function Fi(e,t){let n=e.getValue(`willChange`);if(Pi(n))return n.add(t);if(!n&&T.WillChange){let n=new T.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Ii(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var Li=`data-`+Ii(`framerAppearId`);function Ri(e){return e.props[Li]}var zi=typeof window<`u`;function Bi({protectedKeys:e,needsAnimating:t},n){let r=n in e&&!t[n];return t[n]=!1,r}function Vi(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?fi(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState?.getState()[i],p=a?.path;p&&(p.animateValues?p.animateValues(t=>e.getValue(t,e.latestValues[t]??0),s,a,n,d):p.animateVisualElement?.(e,s,a,n,d));for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&Bi(f,t))continue;let o={delay:n,...pi(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){G.update(()=>r.set(i));continue}let p=!1;if(zi&&window.MotionHandoffAnimation){let n=Ri(e);if(n){let e=window.MotionHandoffAnimation(n,t,G);e!==null&&(o.startTime=e,p=!0)}}Fi(e,t);let m=l??e.shouldReduceMotion;r.start(xi(t,r,i,m&&ki.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>G.update(()=>{o&&Ni(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Hi(e,t,n={}){let r=Di(e,t,Oi(e,n.type)),i=n.transitionOverride||(r?.transition??(e.getDefaultTransition()||{})),a=()=>Promise.all(r?Vi(e,r,n):[]),o=(r=0)=>{let{variantChildren:a}=e,{delayChildren:o=0,staggerChildren:s,staggerDirection:c}=i,l=[];return a?.forEach(e=>{e.notify(`AnimationStart`,t),l.push(Hi(e,t,{...n,delay:r+(typeof o==`function`?0:o)+oi(a,e,o,s,c)}).then(()=>e.notify(`AnimationComplete`,t)))}),Promise.all(l)},{when:s}=i;return s?s===`beforeChildren`?a().then(()=>o()):o().then(a):Promise.all([a(),o(n.delay)])}function Ui(e,t,n={}){return e.notify(`AnimationStart`,t),(Array.isArray(t)?Promise.all(t.map(t=>Hi(e,t,n))):typeof t==`string`?Hi(e,t,n):Promise.all(Vi(e,Di(e,t,n.custom),n))).then(()=>{e.notify(`AnimationComplete`,t)})}var Wi={test:e=>e===`auto`,parse:e=>e},Gi=e=>t=>t.test(e),Ki=[Ee,V,Ve,Be,Ue,He,Wi],qi=e=>Ki.find(Gi(e));function Ji(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||O(e)}var Yi=new Set([`auto`,`none`,`0`]);function Xi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Yi.has(t)&&nt(t)&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]!==i&&(e[r]=Nn(n,i))}var Zi=class extends ur{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){let{unresolvedKeyframes:e,element:t,motionValue:n}=this,r=e[0]??n?.get();if(!t?.current||r===void 0)return!1;for(let t=0;t<e.length;t++)if(Te(t?e[t]:r))return!1;return!0}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ce(r))){let i=wi(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ki.has(n)||e.length!==2)return;let[r,i]=e;if(typeof r==`number`&&typeof i==`number`)return;let a=qi(r),o=qi(i);if(Te(r)!==Te(i)&&tr[n])this.needsMeasurement=!0;else if(a!==o){if(Yn(a)&&Yn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else tr[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Ji(e[t]))&&n.push(t);n.length&&Xi(e,n,t)}measure(){let{element:e,name:t}=this;return tr[t](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&this.motionValue?.jump(r,!1)}measureEndState(){let{element:e,unresolvedKeyframes:t}=this;if(!e||!e.current)return;this.motionValue?.jump(this.measuredOrigin,!1);let n=t.length-1,r=t[n];t[n]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},Qi=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function $i(e){return D(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function ea(e){return D(e)&&`ownerSVGElement`in e}function ta(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}function na(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(Jn.has(e))o=!0;else if(xe(e))i[e]=n;else{let t=zr(n,kn[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Hr(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}var ra={offset:`stroke-dashoffset`,array:`stroke-dasharray`},ia={offset:`strokeDashoffset`,array:`strokeDasharray`};function aa(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?ra:ia;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var oa=[`transform`,`opacity`,`clipPath`,`filter`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function sa(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(na(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of oa)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&aa(d,i,a,o,!1)}function ca({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function la({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function ua(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function da(e){return e===void 0||e===1}function fa({scale:e,scaleX:t,scaleY:n}){return!da(e)||!da(t)||!da(n)}function pa(e){return fa(e)||ma(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.rotateZ||e.skewX||e.skewY}function ma(e){return ha(e.x)||ha(e.y)}function ha(e){return e&&e!==`0%`}function ga(e,t,n){return n+t*(e-n)}function _a(e,t,n,r,i){return i!==void 0&&(e=ga(e,i,r)),ga(e,n,r)+t}function va(e,t=0,n=1,r,i){e.min=_a(e.min,t,n,r,i),e.max=_a(e.max,t,n,r,i)}function ya(e,{x:t,y:n}){va(e.x,t.translate,t.scale,t.originPoint),va(e.y,n.translate,n.scale,n.originPoint)}var ba=.999999999999,xa=1.0000000000001;function Sa(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Ca(e.x,-a.scroll.offset.x),Ca(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,ya(e,o)),r&&pa(a.latestValues)&&Ea(e,a.latestValues,a.layout?.layoutBox))}t.x<xa&&t.x>ba&&(t.x=1),t.y<xa&&t.y>ba&&(t.y=1)}function Ca(e,t){e.min+=t,e.max+=t}function wa(e,t,n,r,i=.5){va(e,t,n,W(e.min,e.max,i),r)}function Ta(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Ea(e,t,n){let r=n??e;wa(e.x,Ta(t.x,r.x),t.scaleX,t.scale,t.originX),wa(e.y,Ta(t.y,r.y),t.scaleY,t.scale,t.originY)}function Da(e,t){return ca(ua(e.getBoundingClientRect(),t))}function Oa(e,t,n){let r=Da(e,n),{scroll:i}=t;return i&&(Ca(r.x,i.offset.x),Ca(r.y,i.offset.y)),r}var{schedule:ka,cancel:Aa}=Mt(queueMicrotask,!1);function ja(e,t,n){let r=q(e)?e:di(e);return r.start(xi(``,r,t,n)),r.animation}var Ma={},Na={value:null,addProjectionMetrics:null};function Pa(e,t){let n=B.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Nt(r),e(a-t))};return G.setup(r,!0),()=>Nt(r)}function Fa(e){return ea(e)&&e.tagName===`svg`}function Ia(e){return q(e)?e.get():e}var La=e=>typeof e==`number`?e:parseFloat(e),Ra=Qi.length,za=[`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skewX`,`skewY`],Ba=za.length,Va=e=>typeof e==`number`||V.test(e);function Ha(e,t,n,r,i,a){i?(e.opacity=W(0,n.opacity??1,Wa(r)),e.opacityExit=W(t.opacity??1,0,Ga(r))):a&&(e.opacity=W(t.opacity??1,n.opacity??1,r));for(let i=0;i<Ra;i++){let a=Qi[i],o=Ua(t,a),s=Ua(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||Va(o)===Va(s)?(e[a]=Math.max(W(La(o),La(s),r),0),(Ve.test(s)||Ve.test(o))&&(e[a]+=`%`)):e[a]=s)}for(let i=0;i<Ba;i++){let a=za[i];(t[a]||n[a])&&(e[a]=W(t[a]||0,n[a]||0,r))}}function Ua(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Wa=Ka(0,.5,se),Ga=Ka(.5,.95,k);function Ka(e,t,n){return r=>r<e?0:r>t?1:n(j(e,t,r))}function qa(e,t){e.min=t.min,e.max=t.max}function Ja(e,t){qa(e.x,t.x),qa(e.y,t.y)}function Ya(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Xa=.9999,Za=1.0001,Qa=-.01,$a=.01;function J(e){return e.max-e.min}function eo(e,t,n){return Math.abs(e-t)<=n}function to(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=J(n)/J(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Xa&&e.scale<=Za||isNaN(e.scale))&&(e.scale=1),(e.translate>=Qa&&e.translate<=$a||isNaN(e.translate))&&(e.translate=0)}function no(e,t,n,r){to(e.x,t.x,n.x,r?r.originX:void 0),to(e.y,t.y,n.y,r?r.originY:void 0)}function ro(e,t,n,r=0){e.min=(r?W(n.min,n.max,r):n.min)+t.min,e.max=e.min+J(t)}function io(e,t,n,r){ro(e.x,t.x,n.x,r?.x),ro(e.y,t.y,n.y,r?.y)}function ao(e,t,n,r=0){let i=r?W(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+J(t)}function oo(e,t,n,r){ao(e.x,t.x,n.x,r?.x),ao(e.y,t.y,n.y,r?.y)}function so(e,t,n,r,i){return e-=t,e=ga(e,1/n,r),i!==void 0&&(e=ga(e,1/i,r)),e}function co(e,t=0,n=1,r=.5,i,a=e,o=e){if(Ve.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=W(a.min,a.max,r);e===a&&(s-=t),e.min=so(e.min,t,n,s,i),e.max=so(e.max,t,n,s,i)}function lo(e,t,[n,r,i],a,o){co(e,t[n],t[r],t[i],t.scale,a,o)}var uo=[`x`,`scaleX`,`originX`],fo=[`y`,`scaleY`,`originY`];function po(e,t,n,r){lo(e.x,t,uo,n?n.x:void 0,r?r.x:void 0),lo(e.y,t,fo,n?n.y:void 0,r?r.y:void 0)}var mo=()=>({translate:0,scale:1,origin:0,originPoint:0}),ho=()=>({x:mo(),y:mo()}),go=()=>({min:0,max:0}),Y=()=>({x:go(),y:go()});function _o(e){return e.translate===0&&e.scale===1}function vo(e){return _o(e.x)&&_o(e.y)}function yo(e,t){return e.min===t.min&&e.max===t.max}function bo(e,t){return yo(e.x,t.x)&&yo(e.y,t.y)}function xo(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function So(e,t){return xo(e.x,t.x)&&xo(e.y,t.y)}function Co(e){return J(e.x)/J(e.y)}function wo(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}var To=class{constructor(){this.members=[]}add(e){b(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(x(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(x(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}};function Eo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Do={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(V.test(e))e=parseFloat(e);else return e}return`${Eo(e,t.target.x)}% ${Eo(e,t.target.y)}%`}},Oo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=U.parse(e);if(i.length>5)return r;let a=U.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=W(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ko={borderRadius:{...Do,applyTo:[...Qi]},borderTopLeftRadius:Do,borderTopRightRadius:Do,borderBottomLeftRadius:Do,borderBottomRightRadius:Do,boxShadow:Oo};function Ao(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,rotateZ:s,skewX:c,skewY:l}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`rotateZ(${s}deg) `),c&&(r+=`skewX(${c}deg) `),l&&(r+=`skewY(${l}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}function jo(e){return[e(`x`),e(`y`)]}var Mo=(e,t)=>e.depth-t.depth,No=class{constructor(){this.children=[],this.isDirty=!1}add(e){b(this.children,e),this.isDirty=!0}remove(e){x(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Mo),this.isDirty=!1,this.children.forEach(e)}},Po={hasAnimatedSinceResize:!0,hasEverUpdated:!1};Object.assign(Ma,{...ko,...Ma});var Fo={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Io=[``,`X`,`Y`,`Z`],Lo=1e3,Ro=0;function zo(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}var Bo=({instance:e})=>e&&Ur.get(e)?.demote();function Vo(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Ri(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,G,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Vo(r)}function Ho({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Ro++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Na.value&&(Fo.nodes=Fo.calculatedTargetDeltas=Fo.calculatedProjections=0),this.nodes.forEach(Go),this.nodes.forEach(ns),this.nodes.forEach(rs),this.nodes.forEach(Ko),Na.addProjectionMetrics&&Na.addProjectionMetrics(Fo)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new No)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new M),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ea(t)&&!Fa(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;G.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Pa(i,250),Po.hasAnimatedSinceResize&&(Po.hasAnimatedSinceResize=!1,this.nodes.forEach(ts)))})}n&&this.root.registerSharedNode(n,this),this.addLayoutListener()}addLayoutListener(){let{layoutId:e,layout:t,visualElement:n,animate:r}=this.options;this.instance&&!this.hasLayoutListener&&r!==!1&&n&&(e||t)&&(this.hasLayoutListener=!0,this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:r,layout:i})=>{if(this.isAnimationBlocked){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||n.getDefaultTransition()||ls,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=n.getProps(),c=!this.targetLayout||!So(this.targetLayout,i),l=!t&&r;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...pi(a,`layout`),onPlay:o,onComplete:s};(n.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||ts(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),this.hasLayoutListener=!1,Nt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(is),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Vo(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;Bo(this),this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,Bo(t),(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1),t.isAnimationBlocked&&(t.dragSnapshot||=t.measure(),this.dragAncestor=t)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Yo),this.nodes.forEach(Jo);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Xo);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Qo),this.nodes.forEach($o),this.nodes.forEach(es),this.nodes.forEach(Uo),this.nodes.forEach(Wo)):this.nodes.forEach(Xo),this.clearAllSnapshots();let e=B.now();z.delta=S(0,1e3/60,e-z.timestamp),z.timestamp=e,z.isProcessing=!0,Pt.update.process(z),Pt.preRender.process(z),Pt.render.process(z),z.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ka.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(qo),this.sharedNodes.forEach((e,t)=>e.members.length?e.removeLeadSnapshot():this.sharedNodes.delete(t))}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,G.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){G.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!J(this.snapshot.measuredBox.x)&&!J(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutCorrected||=Y(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout;e&&Bo(this);let t=this.projectionDelta&&!vo(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||pa(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),ps(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return Y();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(hs))){let{scroll:e}=this.root;e&&(Ca(t.x,e.offset.x),Ca(t.y,e.offset.y))}return t}removeElementScroll(e){let t=Y();if(Ja(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Ja(t,e),Ca(t.x,i.offset.x),Ca(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||Y();Ja(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Ca(r.x,-n.scroll.offset.x),Ca(r.y,-n.scroll.offset.y)),pa(n.latestValues)&&Ea(r,n.latestValues,n.layout?.layoutBox)}return pa(this.latestValues)&&Ea(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=Y();Ja(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!pa(n.latestValues))continue;let r;n.instance&&(fa(n.latestValues)&&n.updateSnapshot(),r=Y(),Ja(r,n.measurePageBox())),po(t,n.latestValues,n.snapshot?.layoutBox,r)}return pa(this.latestValues)&&po(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade},this.addLayoutListener()}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==z.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=z.timestamp;let a=this.getClosestProjectingParent();!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),io(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ja(this.target,this.layout.layoutBox),ya(this.target,this.targetDelta)):Ja(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Na.value&&Fo.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||fa(this.parent.latestValues)||ma(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),oo(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),Ja(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===z.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;Ja(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;Sa(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=Y());let{target:s}=e;s?(!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ya(this.prevProjectionDelta.x,this.projectionDelta.x),Ya(this.prevProjectionDelta.y,this.projectionDelta.y)),no(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!wo(this.projectionDelta.x,this.prevProjectionDelta.x)||!wo(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Na.value&&Fo.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ho(),this.projectionDelta=ho(),this.projectionDeltaWithTransform=ho()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=ho();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=Y(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(cs));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=W(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=W(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(as(o.x,e.x,n),as(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(oo(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),ss(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&bo(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=Y(),Ja(f,this.relativeTarget)),c&&(this.animationValues=a,Ha(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Nt(this.pendingAnimation),void 0),this.pendingAnimation=G.update(()=>{Po.hasAnimatedSinceResize=!0,this.motionValue||=di(0),this.motionValue.jump(0,!1),this.currentAnimation=ja(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),_n(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Lo),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,layout:n,latestValues:r}=e,{target:i}=e;if(t&&i&&n){if(this!==e&&this.layout&&n&&ms(this.options.animationType,this.layout.layoutBox,n.layoutBox)){i=this.target||Y();let t=J(this.layout.layoutBox.x);i.x.min=e.target.x.min,i.x.max=i.x.min+t;let n=J(this.layout.layoutBox.y);i.y.min=e.target.y.min,i.y.max=i.y.min+n}Ja(t,i),Ea(t,r),no(this.projectionDeltaWithTransform,this.layoutCorrected,t,r)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new To),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&zo(`z`,e,r,this.animationValues);for(let t=0;t<Io.length;t++)zo(`rotate${Io[t]}`,e,r,this.animationValues),zo(`skew${Io[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Ia(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Ia(t?.pointerEvents)||``),this.hasProjected&&!pa(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Ao(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Ma){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Ma[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Ia(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=this.dragSnapshot=this.dragAncestor=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Jo),this.root.sharedNodes.clear()}}}function Uo(e){e.updateLayout(),Zo(e)}function Wo(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)jo(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=J(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;qa(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else ms(i,t.layoutBox,n)&&jo(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=J(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=ho();no(o,n,t.layoutBox);let s=ho();a?no(s,e.applyTransform(r,!0),t.measuredBox):no(s,n,t.layoutBox);let c=!vo(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=Y();oo(s,t.layoutBox,i.layoutBox,o);let c=Y();oo(c,n,a.layoutBox,o),So(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Go(e){Na.value&&Fo.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Ko(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function qo(e){e.clearSnapshot()}function Jo(e){e.clearMeasurements()}function Yo(e){e.isLayoutDirty=!0,e.updateLayout()}function Xo(e){e.isLayoutDirty=!1}function Zo(e){let{snapshot:t,dragAncestor:n}=e,r=n?.layout;if(!t||!r||e.resumeFrom||e.isAnimationBlocked)return;let i=n.dragSnapshot;jo(e=>Ca(t.layoutBox[e],r.layoutBox[e].min-i.layoutBox[e].min))}function Qo(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.dragSnapshot||e.layout,e.isLayoutDirty=!0)}function $o(e){e.relativeTarget&&e.relativeParent?.isLayoutDirty&&(e.currentAnimation?e.isLayoutDirty=!0:(e.targetDelta=void 0,e.removeRelativeTarget()))}function es(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function ts(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ns(e){e.resolveTargetDelta()}function rs(e){e.calcProjection()}function is(e){e.resetSkewAndRotation()}function as(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function os(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function ss(e,t,n,r){os(e.x,t.x,n.x,r),os(e.y,t.y,n.y,r)}function cs(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var ls={duration:.45,ease:[.4,0,.1,1]},us=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ds=us(`applewebkit/`)&&!us(`chrome/`)?Math.round:k;function fs(e){e.min=ds(e.min),e.max=ds(e.max)}function ps(e){fs(e.x),fs(e.y)}function ms(e,t,n){return e===`position`||e===`preserve-aspect`&&!eo(Co(t),Co(n),.2)}function hs(e){return e!==e.root&&e.scroll?.wasRoot}function gs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var _s=Ho({attachResizeListener:(e,t)=>gs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),vs={current:void 0},ys=Ho({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!vs.current){let e=new _s({});e.mount(window),e.setOptions({layoutScroll:!0}),vs.current=e}return vs.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),bs=new WeakMap;function xs(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ss(e){return typeof e==`string`||Array.isArray(e)}var Cs=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],ws=[`initial`,...Cs];function Ts(e){if(xs(e.animate))return!0;for(let t=0;t<ws.length;t++)if(Ss(e[ws[t]]))return!0;return!1}function Es(e){return!!(Ts(e)||e.variants)}function Ds(e,t,n){for(let r in t){let i=t[r],a=n[r];if(q(i))e.addValue(r,i);else if(q(a))e.addValue(r,di(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,di(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Os={current:null},ks={current:!1},As=typeof window<`u`;function js(){if(ks.current=!0,As){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Os.current=e.matches;e.addEventListener(`change`,t),t()}else Os.current=!1}}var Ms=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Ns={};function Ps(e){Ns=e}function Fs(){return Ns}var Is=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ur,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=B.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,G.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ts(t),this.isVariantNode=Es(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&q(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];if(this.current=e,bs.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.isVariantNode&&!this.isControllingVariants){let e=this;do e=e.props.inherit!==!1&&e.parent;while(e&&!e.isVariantNode);if(e){let{variantChildren:t}=e;t.add(this),this.removeFromVariantTree=()=>t.delete(this)}}this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(ks.current||js(),this.shouldReduceMotion=Os.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Nt(this.notifyUpdate),Nt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Nr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new wr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:N(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=Jn.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&G.preRender(this.notifyUpdate),n&&(this.projection&&(this.projection.isTransformDirty=!0),Ur.get(this.current)?.check()),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!e.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Ns){let t=Ns[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){let{transformTemplate:n,onUpdate:r}=this.props;(e.transformTemplate||n)&&this.scheduleRender(),(e.transformTemplate&&!n||e.onUpdate&&!r)&&Ur.get(this.current)?.demote(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ms.length;t++){let n=Ms[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Ds(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}addValue(e,t){let n=this.values.get(e);if(t!==n){n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t);let r=t.get();r!==void 0&&(this.latestValues[e]=r)}}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=di(t??this.getDefaultValue?.(e),{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(E(n)||O(n))?n=parseFloat(n):typeof n!=`number`&&!U.test(n)&&U.test(t)&&(n=Nn(e,t)),this.setBaseTarget(e,q(n)?n.get():n)),q(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}on(e,t){return this.events[e]||(this.events[e]=new M),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){ka.render(this.render)}},Ls=class extends Is{constructor(){super(...arguments),this.KeyframeResolver=Zi}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;q(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}};function Rs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function zs(e,{layout:t,layoutId:n}){return Jn.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Ma[e]||e===`opacity`)}function Bs(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(q(r[t])||i&&q(i[t])||zs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Vs(e){return window.getComputedStyle(e)}var Hs=class extends Ls{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Rs}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(Jn.has(t))return this.projection?.isProjecting?Un(t):Gn(e,t);{let n=Vs(e),r=(xe(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Da(e,t)}build(e,t,n){na(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Bs(e,t,n)}},Us=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1;function Ws(e){return{point:{x:e.pageX,y:e.pageY}}}var Gs=e=>t=>Us(t)&&e(t,Ws(t));function Ks(e,t,n,r){return gs(e,t,Gs(n),r)}var qs=new WeakMap,Js,Ys=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:ea(r)&&`getBBox`in r?r.getBBox()[t]:r[n],Xs=Ys(`inline`,`width`,`offsetWidth`),Zs=Ys(`block`,`height`,`offsetHeight`);function Qs({target:e,borderBoxSize:t}){qs.get(e)?.forEach(n=>{n(e,{get width(){return Xs(e,t)},get height(){return Zs(e,t)}})})}function $s(e){e.forEach(Qs)}function ec(){typeof ResizeObserver<`u`&&(Js=new ResizeObserver($s))}function tc(e,t){Js||ec();let n=ta(e);return n.forEach(e=>{let n=qs.get(e);n||(n=new Set,qs.set(e,n)),n.add(t),Js?.observe(e)}),()=>{n.forEach(e=>{let n=qs.get(e);n?.delete(t),n?.size||Js?.unobserve(e)})}}var nc=new Set,rc;function ic(){rc=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};nc.forEach(t=>t(e))},window.addEventListener(`resize`,rc)}function ac(e){return nc.add(e),rc||ic(),()=>{nc.delete(e),!nc.size&&typeof rc==`function`&&(window.removeEventListener(`resize`,rc),rc=void 0)}}function oc(e,t){return typeof e==`function`?ac(e):tc(e,t)}var sc=(e,t)=>Math.abs(e-t);function cc(e,t){let n=sc(e.x,t.x),r=sc(e.y,t.y);return Math.sqrt(n**2+r**2)}var lc=new Set([`auto`,`scroll`]),uc=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=dc(this.lastRawMoveEventInfo,this.transformPagePoint));let e=pc(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=cc(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e;this.history.push({...r,timestamp:B.now()});let{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=dc(t,this.transformPagePoint),this.hasPendingMove=!0,G.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.hasPendingMove&&this.updatePoint(),this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=pc(e.type===`pointercancel`?this.lastMoveEventInfo:dc(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Us(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=dc(Ws(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=z;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,pc(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=A(Ks(this.contextWindow,`pointermove`,this.handlePointerMove,d),Ks(this.contextWindow,`pointerup`,this.handlePointerUp,d),Ks(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(lc.has(e.overflowX)||lc.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),G.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Nt(this.updatePoint)}};function dc(e,t){return t?{point:t(e.point)}:e}function fc(e,t){return{x:e.x-t.x,y:e.y-t.y}}function pc({point:e},t){return{point:e,delta:fc(e,hc(t)),offset:fc(e,mc(t)),velocity:gc(t,.1)}}function mc(e){return e[0]}function hc(e){return e[e.length-1]}function gc(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=hc(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>N(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>N(t)*2&&(r=e[1]);let a=P(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}var _c=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function vc(e){return _c.has(e.tagName)||e.isContentEditable===!0}var yc=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function bc(e){return yc.has(e.tagName)||e.isContentEditable===!0}var xc={x:!1,y:!1};function Sc(){return xc.x||xc.y}function Cc(e){return e===`x`||e===`y`?xc[e]?null:(xc[e]=!0,()=>{xc[e]=!1}):xc.x||xc.y?null:(xc.x=xc.y=!0,()=>{xc.x=xc.y=!1})}function wc(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function Tc(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Ec(e,{top:t,left:n,bottom:r,right:i}){return{x:Tc(e.x,n,i),y:Tc(e.y,t,r)}}function Dc(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Oc(e,t){return{x:Dc(e.x,t.x),y:Dc(e.y,t.y)}}function kc(e,t){let n=.5,r=J(e),i=J(t);return i>r?n=j(t.min,t.max-r,e.min):r>i&&(n=j(e.min,e.max-i,t.min)),S(0,1,n)}function Ac(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var jc=.35;function Mc(e=jc){return e===!1?e=0:e===!0&&(e=jc),{x:Nc(e,`left`,`right`),y:Nc(e,`top`,`bottom`)}}function Nc(e,t,n){return{min:Pc(e,t),max:Pc(e,n)}}function Pc(e,t){return typeof e==`number`?e:e[t]||0}var Fc=new WeakMap,Ic=class{constructor(e,t=()=>e.getProps()){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e,this.readProps=t}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(e),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Cc(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),jo(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ce(t)&&(t=wi(t,this.visualElement.current)||0),V.test(t))t=parseFloat(t);else if(Ve.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=J(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&G.update(()=>i(e,t),!1,!0),Fi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){if(this.currentDirection=Hc(o),this.currentDirection===null)return;i&&i(this.currentDirection)}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&G.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new uc(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:this.visualElement.current?.ownerDocument.defaultView,element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&G.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Vc(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=wc(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;Lc(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?Ec(n.layoutBox,e):!1,this.elastic=Mc(t),r!==this.constraints&&!Lc(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&jo(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Ac(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!Lc(e))return!1;let n=Rc(e),{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Oa(n,r.root,this.visualElement.getTransformPagePoint()),a=Oc(r.layout.layoutBox,i);if(t){let e=t(la(a));this.hasMutatedConstraints=!!e,e&&(a=ca(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=jo(o=>{if(!Vc(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Fi(this.visualElement,e),n.start(xi(e,n,0,t,this.visualElement,!1))}stopAnimation(){jo(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.readProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:t}){let{drag:n}=this.getProps(),r={x:e,y:t},i=this.visualElement.getTransformPagePoint()?.(r)||r,a=this.visualElement.measureViewportBox();jo(e=>{if(!Vc(e,n,this.currentDirection))return;let t=this.getAxisMotionValue(e),{min:r,max:o}=a[e];t.set((t.get()||0)+i[e]-W(r,o,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Lc(t)||!n||!this.constraints)return;this.stopAnimation();let r=this.constraints,i={x:0,y:0};jo(e=>{let t=this.getAxisMotionValue(e).get();i[e]=kc({min:t,max:t},r[e])});let{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),jo(t=>{let n=this.getAxisMotionValue(t);if(!Vc(t,e,null)||!n.get())return;let{min:r,max:a}=this.constraints[t];n.set(W(r,a,i[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Fc.set(this.visualElement,this);let e=this.visualElement.current,t=Ks(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&bc(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps(),r=Lc(t)&&Rc(t);r&&(this.constraints=this.resolveRefConstraints(),n||=Bc(e,r,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),G.read(r);let o=gs(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(jo(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.readProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=jc,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Lc(e){return!!e&&typeof e==`object`&&(`current`in e||`nodeType`in e)}var Rc=e=>`current`in e?e.current:e;function zc(e){let t=!0;return()=>{t?t=!1:e()}}function Bc(e,t,n){let r=oc(e,zc(n)),i=oc(t,zc(n));return()=>{r(),i()}}function Vc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Hc(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}function Uc(e,t){let n=ta(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Wc(e){return!(e.pointerType===`touch`||Sc())}function Gc(e,t,n={}){let[r,i,a]=Uc(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{e.pointerType!==`touch`&&(n?r=!0:s(e))};e.addEventListener(`pointerenter`,n=>{if(!Wc(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Kc=(e,t)=>t?e===t||Kc(e,t.parentElement):!1,qc=new WeakSet;function Jc(e){return t=>{t.key===`Enter`&&e(t)}}function Yc(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Xc=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Jc(()=>{if(qc.has(n))return;Yc(n,`down`);let e=Jc(()=>{Yc(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Yc(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Zc(e){return Us(e)&&!Sc()}var Qc=new WeakSet;function $c(e,t,n={}){let[r,i,a]=Uc(e,n),o=e=>{let r=e.currentTarget;if(!Zc(e)||Qc.has(e))return;qc.add(r),n.stopPropagation&&Qc.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),qc.has(r)&&qc.delete(r),Zc(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||Kc(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),$i(e)&&(e.addEventListener(`focus`,e=>Xc(e,i)),!vc(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}var el=class{constructor(e){this.isMounted=!1,this.node=e}update(){}},tl=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),nl=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function rl(e,t,n,r){Rs(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(tl.has(n)?n:Ii(n),t.attrs[n])}function il(e,t,n){let r=Bs(e,t,n);for(let n in e)if(n!==`children`&&(q(e[n])||q(t[n]))){let t=qn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var al=class extends Ls{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(e,t){return Jn.has(t)?super.getBaseTargetFromProps(e,t)??Un(t):e[t]}getDefaultValue(e){return Jn.has(e)?this.latestValues[e]??Un(e):void 0}readValueFromInstance(e,t){if(Jn.has(t)){let e=jn(t);return e&&e.default||0}if(oa.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=tl.has(t)?t:Ii(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return il(e,t,n)}build(e,t,n){sa(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){rl(e,t,n,r)}mount(e){this.isSVGTag=nl(e.tagName),super.mount(e)}};function ol(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var sl=[...Cs].reverse();function cl(e){let t=t=>Promise.all(t.map(({animation:t,options:n})=>Ui(e,t,n))),n=ul(),r=!0,i=!1;function a(a){let{props:o,parent:s,manuallyAnimateOnMount:c}=e,l=r||i,u=[],d=new Set,f={},p=1/0,m=e;do m=m.props.inherit!==!1&&m.parent;while(m&&!m.isControllingVariants);if(sl.forEach((t,r)=>{let i=n[t],h=o[t],g=m&&m.props[t],_=h===void 0?Ss(g)||g===!1?g:void 0:h,v=Ss(_),y=t===a?i.isActive:null;y===!1&&(p=r);let b=v&&h===void 0&&!(l&&c);if(i.protectedKeys={...f},!i.isActive&&y===null||!_&&!i.prevProp||xs(_)||typeof _==`boolean`)return;if(t===`exit`&&i.isActive&&y!==!0){f={...f,...i.prevResolvedValues};return}let x=ll(i.prevProp,_),S=x||v&&(y&&!b||r>p),C=!1,w=Array.isArray(_)?_:[_],T={};if(y!==!1)for(let n of w){let{transition:r,transitionEnd:i,...a}=Di(e,n,Oi(e,t))||{};T={...T,...a,...i}}let{prevResolvedValues:E}=i;for(let t in{...E,...T}){if(t in f)continue;let n=T[t],r=E[t],a=Array.isArray(n)&&Array.isArray(r)?!ol(n,r)||x:n!==r;if(a&&n==null)d.add(t);else if(a||n!==void 0&&d.has(t)){S=!0,d.delete(t)&&(C=!0),i.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)}else i.protectedKeys[t]=!0}if(i.prevProp=_,i.prevResolvedValues=T,i.isActive&&(f={...f,...T}),S&&(!(b&&x)||C))for(let n of w){let r={type:t};if(typeof n==`string`&&l&&c&&s?.enteringChildren){let t=Di(s,n)?.transition?.delayChildren;r.delay=oi(s.enteringChildren,e,t)}u.push({animation:n,options:r})}}),d.size){let{initial:t}=o,n={},r=typeof t!=`boolean`&&Di(e,Array.isArray(t)?t[0]:t,e.presenceContext?.custom);r&&r.transition&&(n.transition=r.transition),d.forEach(i=>{let a=e.getValue(i);a&&(a.liveStyle=!0);let s=r&&!Array.isArray(t)?r[i]:void 0,c=e.getBaseTargetFromProps(o,i);n[i]=(s===void 0?c!==void 0&&!q(c)?c:e.initialValues[i]===void 0?e.baseTarget[i]:void 0:s)??null}),u.push({animation:n})}let h=l&&e.blockInitialAnimation||r&&!c&&(o.initial===!1||o.initial===o.animate);return r=i=!1,!h&&u.length?t(u):Promise.resolve()}function o(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=a(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:a,setActive:o,setAnimateFunction:n=>{t=n(e)},getState:()=>n,reset:()=>{n=ul(),i=!0}}}function ll(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!ol(t,e):!1}function ul(){let e={};for(let t of Cs)e[t]={isActive:t===`animate`,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}};return e}var dl=(0,h.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function fl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function pl(...e){return t=>{let n=!1,r=e.map(e=>{let r=fl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():fl(e[t],null)}}}}function ml(...e){return h.useCallback(pl(...e),e)}var hl=class extends h.Component{getSnapshotBeforeUpdate(e){let t=this.props.getElement();if($i(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=$i(e)&&e.offsetWidth||0,r=$i(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function gl({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a,popNode:o}){let s=(0,h.useId)(),c=(0,h.useRef)(null),l=(0,h.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:u}=(0,h.useContext)(dl),d=ml(c,a===!1?void 0:e.props?.ref??e?.ref),f=()=>c.current||o?.current?.current;return(0,h.useInsertionEffect)(()=>{let{width:e,height:o,top:c,left:d,right:p,bottom:m,direction:h}=l.current,g=f();if(t||a===!1||!g||!e||!o)return;let _=h===`rtl`,v=n===`left`?_?`right: ${p}`:`left: ${d}`:_?`left: ${d}`:`right: ${p}`,y=r===`bottom`?`bottom: ${m}`:`top: ${c}`;g.dataset.motionPopId=s;let b=g.ownerDocument,x=b.createElement(`style`);u&&(x.nonce=u);let S=i??b.head;return S.appendChild(x),x.sheet&&x.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            ${v}px !important;
            ${y}px !important;
          }
        `),()=>{g.removeAttribute(`data-motion-pop-id`),S.contains(x)&&S.removeChild(x)}},[t]),(0,m.jsx)(hl,{isPresent:t,getElement:f,sizeRef:l,pop:a,children:a===!1?e:h.cloneElement(e,{ref:d})})}var _l=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=_(vl),d=(0,h.useId)(),f=(0,h.useRef)(),p=(0,h.useRef)(n),g=(0,h.useRef)(r);v(()=>{p.current=n,g.current=r});let b=!0,x=(0,h.useMemo)(()=>(b=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:(e,t)=>(u.set(e,!1),t&&t.parent?.presenceContext?.id!==d&&(f.current=t),()=>{u.delete(e),!p.current&&!u.size&&g.current?.()})}),[n,u,r]);return a&&b&&(x={...x}),(0,h.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),h.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,m.jsx)(gl,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,popNode:f,children:e}),(0,m.jsx)(y.Provider,{value:x,children:e})};function vl(){return new Map}function yl(e=!0){let t=(0,h.useContext)(y);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,h.useId)();(0,h.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,h.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}function bl(){return xl((0,h.useContext)(y))}function xl(e){return e===null||e.isPresent}var Sl=e=>e.key||``;function Cl(e){let t=[];return h.Children.forEach(e,e=>{(0,h.isValidElement)(e)&&t.push(e)}),t}var wl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=yl(o),f=(0,h.useMemo)(()=>Cl(e),[e]),p=o&&!u?[]:f.map(Sl),y=(0,h.useRef)(!0),b=_(()=>new Map),x=(0,h.useRef)(new Set),[S,C]=(0,h.useState)(f),[w,T]=(0,h.useState)(f);v(()=>{o&&!u&&!w.length&&d?.()},[u,o,w.length,d]);let E=(0,h.useRef)();(0,h.useEffect)(()=>()=>{let e=E.current;E.current=void 0,e?.()},[w]),v(()=>{y.current=!1;for(let e=0;e<w.length;e++){let t=Sl(w[e]);p.includes(t)?(b.delete(t),x.current.delete(t)):b.get(t)!==!0&&b.set(t,!1)}},[w,p.length,p.join(`-`)]);let D=[];if(f!==S){let e=[...f],t=0;for(let n of w){let r=p.indexOf(Sl(n));r===-1?(e.splice(t++,0,n),D.push(n)):t=r+D.length+1}return D.every(e=>b.get(Sl(e)))?e=f:a===`wait`&&(e=D),T(Cl(e)),C(f),null}let{forceRender:O}=(0,h.useContext)(g);return(0,m.jsx)(m.Fragment,{children:w.map(e=>{let h=Sl(e),g=o&&!u?!1:f===w||p.includes(h);return(0,m.jsx)(_l,{isPresent:g,initial:!y.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:g?void 0:()=>{if(x.current.has(h))return;if(b.has(h))x.current.add(h),b.set(h,!0);else return;let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(O?.(),C([]),o&&d?.(),E.current=r)},anchorX:s,anchorY:c,children:e},h)})})},Tl=(0,h.createContext)({strict:!1}),El={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Dl=!1;function Ol(){if(Dl)return;let e={};for(let t in El)e[t]={isEnabled:e=>El[t].some(t=>!!e[t])};Ps(e),Dl=!0}function kl(){return Ol(),Fs()}function Al(e){let t=kl();for(let n in e)t[n]={...t[n],...e[n]};Ps(t)}var jl=(0,h.createContext)({});function Ml(e,t){if(Ts(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ss(t)?t:void 0,animate:Ss(n)?n:void 0}}return e.inherit===!1?{}:t}function Nl(e){let{initial:t,animate:n}=Ml(e,(0,h.useContext)(jl));return(0,h.useMemo)(()=>({initial:t,animate:n}),[Pl(t),Pl(n)])}function Pl(e){return Array.isArray(e)?e.join(` `):e}var Fl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Il(e,t,n){for(let r in t)!q(t[r])&&!zs(r,n)&&(e[r]=t[r])}function Ll({transformTemplate:e},t){return(0,h.useMemo)(()=>{let n=Fl();return na(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Rl(e,t){let n=e.style||{},r={};return Il(r,n,e),Object.assign(r,Ll(e,t)),r}function zl(e,t){let n={},r=Rl(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var Bl=()=>({...Fl(),attrs:{}});function Vl(e,t,n,r){let i=(0,h.useMemo)(()=>{let n=Bl();return sa(n,t,nl(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Il(t,e.style,e),i.style={...t,...i.style}}return i}var Hl=new Set(`animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Ul(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Hl.has(e)}function Wl(e,t){return e.startsWith(`on`)?!Ul(e):t?.(e)??!Ul(e)}function Gl(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(q(e[a])||(Wl(a,r)||n===!0&&Ul(a)||!t&&!Ul(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}var Kl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function ql(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Kl.indexOf(e)>-1||/[A-Z]/u.test(e))}function Jl(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??ql(e)?Vl:zl)(t,r,i,e),l=Gl(t,typeof e==`string`,a,s),u=e===h.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,h.useMemo)(()=>q(d)?d.get():d,[d]);return(0,h.createElement)(e,{...u,children:f})}function Yl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Xl(n,r,i,e),renderState:t()}}function Xl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Ia(a[e]);let{initial:o,animate:s}=e,c=Ts(e),l=Es(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!xs(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Ei(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Zl=e=>(t,n)=>{let r=(0,h.useContext)(jl),i=(0,h.useContext)(y),a=()=>Yl(e,t,r,i);return n?a():_(a)},Ql=Zl({scrapeMotionValuesFromProps:Bs,createRenderState:Fl}),$l=Zl({scrapeMotionValuesFromProps:il,createRenderState:Bl}),eu=Symbol.for(`motionComponentSymbol`);function tu(e,t,n){let r=(0,h.useRef)(n);(0,h.useInsertionEffect)(()=>{r.current=n});let i=(0,h.useRef)(null);return(0,h.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var nu=(0,h.createContext)({});function ru(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function iu(e,t,n,r,i,a){let{visualElement:o}=(0,h.useContext)(jl),s=(0,h.useContext)(Tl),c=(0,h.useContext)(y),l=(0,h.useContext)(dl),u=l.reducedMotion,d=l.skipAnimations,f=(0,h.useRef)(null),p=(0,h.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,g=(0,h.useContext)(nu);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&au(f.current,n,i,g);let _=(0,h.useRef)(!1);(0,h.useInsertionEffect)(()=>{m&&_.current&&m.update(n,c)});let b=n[Li],x=(0,h.useRef)(!!b&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(b)&&window.MotionHasOptimisedAnimation?.(b));return v(()=>{p.current&&m&&(m.animationState?.animateChanges(),m.enteringChildren=void 0)},[]),v(()=>{p.current=!0,m&&(_.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),x.current&&m.animationState&&m.animationState.animateChanges())}),(0,h.useEffect)(()=>{m&&(!x.current&&m.animationState&&m.animationState.animateChanges(),x.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(b)}),!1),m.enteringChildren=void 0)}),m}function au(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:ou(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&ru(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function ou(e){if(e)return e.options.allowProjection===!1?ou(e.parent):e.projection}function su(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Al(r);let a=n?n===`svg`:ql(e),o=a?$l:Ql;function s(n,s){let c,l={...(0,h.useContext)(dl),...n,layoutId:cu(n)},{isStatic:u,isValidProp:d}=l,f=Nl(n),p=o(n,u);if(!u&&typeof window<`u`){lu(l,r);let t=uu(l);c=t.MeasureLayout,f.visualElement=iu(e,p,l,i,t.ProjectionNode,a)}return(0,m.jsxs)(jl.Provider,{value:f,children:[c&&f.visualElement?(0,m.jsx)(c,{visualElement:f.visualElement,...l}):null,Jl(e,n,tu(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,h.forwardRef)(s);return c[eu]=e,c}function cu({layoutId:e}){let t=(0,h.useContext)(g).id;return t&&e!==void 0?t+`-`+e:e}function lu(e,t){(0,h.useContext)(Tl).strict}function uu(e){let{drag:t,layout:n}=kl();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function du(e,t){if(typeof Proxy>`u`)return su;let n=new Map,r=(n,r)=>su(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,su(a,void 0,e,t)),n.get(a))})}var fu=(e,t)=>t.isSVG??ql(e)?new al(t):new Hs(t,{allowProjection:e!==h.Fragment}),pu=class extends el{constructor(e){super(e),e.animationState||=cl(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();xs(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},mu=0,hu={animation:{Feature:pu},exit:{Feature:class extends el{constructor(){super(...arguments),this.id=mu++}update(){let{presenceContext:e,prevPresenceContext:t,animationState:n}=this.node;if(!e||!n)return;let{isPresent:r,onExitComplete:i}=e,a=t?.isPresent;if(r===a)return;if(r&&a===!1){if(this.exit===!0){let{initial:e}=this.node.getProps();if(e&&!Array.isArray(e)){let{transition:t,transitionEnd:n,...r}=Di(this.node,e)||{};for(let e in r)this.node.getValue(e)?.jump(r[e])}this.node.blockInitialAnimation=!1,n.reset(),n.animateChanges()}else n.setActive(`exit`,!1);this.exit=void 0;return}let o=this.exit=n.setActive(`exit`,!r);i&&!r&&o.then(()=>{this.exit===o&&(this.exit=!0,i(this.id))})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id,this.node))}unmount(){}}}},gu=class extends el{constructor(e){super(e),this.removeGroupControls=k,this.removeListeners=k,this.controls=new Ic(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||k}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},_u=({current:e})=>e?e.ownerDocument.defaultView:null,vu=e=>(t,n)=>{e&&G.update(()=>e(t,n),!1,!0)},yu=class extends el{constructor(){super(...arguments),this.removePointerDownListener=k}onPointerDown(e){this.session=new uc(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_u(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:vu(e),onStart:vu(t),onMove:vu(n),onEnd:(e,t)=>{delete this.session,r&&G.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Ks(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},bu=!1,xu=({layout:e,layoutDependency:t})=>({layout:e,layoutDependency:t,animationType:typeof e==`string`?e:`both`}),Su=class extends h.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),bu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,...xu(this.props),onExitComplete:()=>this.safeToRemove()})),Po.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layout:t,layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:o}=r;return o&&(o.isPresent=a,(e.layoutDependency!==n||e.layout!==t)&&o.setOptions({...o.options,...xu(this.props)}),bu=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==a?o.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?o.promote():o.relegate()||G.postRender(()=>{let e=o.getStack();(!e||!e.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),ka.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;bu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Cu(e){let[t,n]=yl(),r=(0,h.useContext)(g);return(0,m.jsx)(Su,{...e,layoutGroup:r,switchLayoutGroup:(0,h.useContext)(nu),isPresent:t,safeToRemove:n})}var wu={pan:{Feature:yu},drag:{Feature:gu,ProjectionNode:ys,MeasureLayout:Cu}};function Tu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&G.postRender(()=>i(t,Ws(t)))}var Eu=class extends el{mount(){let{current:e}=this.node;e&&(this.unmount=Gc(e,(e,t)=>(Tu(this.node,t,`Start`),e=>Tu(this.node,e,`End`))))}unmount(){}},Du=class extends el{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=A(gs(this.node.current,`focus`,()=>this.onFocus()),gs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Ou(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&G.postRender(()=>i(t,Ws(t)))}var ku=class extends el{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=$c(e,(e,t)=>(Ou(this.node,t,`Start`),(e,{success:t})=>Ou(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},Au=new WeakMap,ju=new WeakMap,Mu=e=>{let t=Au.get(e.target);t&&t(e)},Nu=e=>{e.forEach(Mu)};function Pu({root:e,...t}){let n=e||document;ju.has(n)||ju.set(n,{});let r=ju.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Nu,{root:e,...t})),r[i]}function Fu(e,t,n){let r=Pu(t);return Au.set(e,n),r.observe(e),()=>{Au.delete(e),r.unobserve(e)}}var Iu={some:0,all:1},Lu=class extends el{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Iu[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Fu(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Ru(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Ru({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var zu={inView:{Feature:Lu},tap:{Feature:ku},focus:{Feature:Du},hover:{Feature:Eu}},Bu={layout:{ProjectionNode:ys,MeasureLayout:Cu}},Vu=du({...hu,...zu,...wu,...Bu},fu),Hu=Vu,Uu={posts:[{slug:`21-kuwait-1916-stuhlmann`,title:`الكويت في كتابٍ ألماني من سنة 1916: الاسم والجون والمعاهدات`,author:`فرانتس شتولمان`,category:`التاريخ`,categorySlug:`history`,date:`2026-10-21`,cover:`articles/21/1.webp`,excerpt:`في سنة 1916، والحرب العالمية الأولى قائمة، نشر الألماني فرانتس شتولمان كتابه «الصراع على جزيرة العرب بين تركيا وإنجلترا».`,tags:[`الكويت`,`البصرة`],sample:!1,book:`الصراع على جزيرة العرب بين تركيا وإنجلترا`,coverCaption:`«مبارك، شيخ الكويت»: الشيخ مبارك بن صباح الصباح (حكم 1896–1915) ومن معه (صورة أضافها المحقق) — المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 277`,era:`1916`,eraSort:1916.2,words:1761,minutes:9,body:`في سنة 1916، والحرب العالمية الأولى قائمة، نشر الألماني فرانتس شتولمان كتابه «الصراع على جزيرة العرب بين تركيا وإنجلترا». وفي فصله عن العراق عنوانٌ فرعي هو «مسألة الكويت». يكتب المؤلف من وجهة نظر بلاده في زمن الحرب، فيحمل نصّه آراءً سياسية لا يقرّها المحقق، ويتعقّبها في الحواشي بتصحيحٍ وتعريف.

نقرأ في هذا المقال ما يحفظه الفصل من معلومات عن الكويت: اسمها، وموقعها على الجون، وعدد سكانها، وروايات أصل أهلها، والمعاهدات التي عُقدت في عهد الشيخ مبارك الصباح. ونترك جانبًا ما يعبّر عن مطامح الدول المتحاربة يومئذٍ.

## الاسم: الكوت والقرين

يشرح شتولمان اسم الكويت في حاشيته: «الكويت» تصغير «الكوت» (القرية المسوّرة). ويضيف: «وكان الموضع يُسمّى من قبلُ أيضًا «القرين» (تصغير «قرن»)، وهي كلمةٌ كتبها الإنجليز «Grane»».

<figure class="art-fig"><img src="articles/21/1.webp" alt="صورة جماعية قديمة من الكويت مطلع القرن العشرين" width="1600" height="1117" loading="lazy" /><figcaption><span class="fig-cap">«مبارك، شيخ الكويت»: الشيخ مبارك بن صباح الصباح (حكم 1896–1915) ومن معه (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 277</span><span class="fig-orig">طبيعة الصورة: صورة من كتابٍ آخر معاصر للمؤلف أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب هنري جيمس ويغام عن مسائل الخليج والعراق وإيران، لندن: إيزبستر، 1903</span></figcaption></figure>

وهذا الاسم الأخير هو ما نجده على الخرائط البحرية الإنجليزية القديمة. فالكويت عند الرحّالة الإنجليز في القرن التاسع عشر هي «القرين» أو «Grane».

## على الجون

يحدّد المؤلف موقع البلدة: «في الزاوية الشمالية الغربية من الخليج العربي يتوغّل جونٌ تقع على جانبه الجنوبي الكويت، وفيها نحو خمسين ألف نسمة».

ويذكر أن الجنرال تشيزني وصف الموضع من قبل بأنه «صالحٌ ليكون ميناء سكّة الفرات، وإن كانت أحوال الماء لا تسمح للبواخر الكبيرة بالرسوّ مباشرة».

وفي حاشيةٍ يذكر شتولمان موضعًا على الجون لعلّه «كاظمة»، ويقول إن فيه وقعت «سنة 633 معركةٌ للجيوش العربية الزاحفة على العراق، في قاع جون الكويت». ويفصّل المحقق: «كاظمة منطقةٌ في محافظة الجهراء بدولة الكويت، على أربعين كيلومترًا شمال مدينة الكويت». ويضيف أن فيها وقعت معركة «ذات السلاسل» في أبريل 633، «أولى المعارك بين جيش الخلافة الراشدة بقيادة خالد بن الوليد رضي الله عنه والدولة الساسانية».

## من أين جاء أهل الكويت؟

ينقل المؤلف روايتين في أصل أهل الكويت. الأولى: «فبحسب روايةٍ يُقال إنّ عرب الكويت هاجروا قبل نحو 250 سنةً من أمّ قصر على خور عبد الله». والثانية: «أمّا وثائق حكومة بومباي ومذكّرات مدحت باشا فتذكر أنهم جاؤوا من نجد».

<quote by="فرانتس شتولمان" source="«الصراع على جزيرة العرب بين تركيا وإنجلترا»">أن تحتفظ تركيا بالسيادة الاسمية على الكويت، ولها حقّ إبقاء ممثّلٍ تركيٍّ هناك، على ألّا تتدخّل في شؤون البلاد الداخلية والخارجية</quote>

ويوضح المحقق: «ينتمي آل صباح الكرام إلى حلف العتوب الذي هاجرت عشائره من نجد إلى شرق جزيرة العرب في أواخر القرن السابع عشر ومطلع الثامن عشر». ويقول في حاشيةٍ أخرى إن العتوب اختاروا سنة 1752 «صباح الأول بن جابر حاكمًا عليها».

## الشيخ مبارك الصباح

تدور «مسألة الكويت» في الكتاب حول عهد الشيخ مبارك. ويعرّفه المحقق: «الشيخ مبارك بن صباح الصباح، «مبارك الكبير» (نحو 1837–1915)، سابع حكّام الكويت، حكم من 18 مايو 1896 حتّى وفاته في نوفمبر 1915». ويضيف: «ويُعدّ من صنّاع الكويت الحديثة، ومنه ينحدر حكّام الكويت المتعاقبون، ومن أبنائه الحاكمان جابر وسالم».

ويذكر المحقق أن الحكومة البريطانية منحته «لقب فارس قائد فخريًّا في وسام الإمبراطورية الهندية سنة 1911، ثم في وسام نجمة الهند سنة 1914».

## معاهدة 1899

يقول شتولمان إن المقيم الإنجليزي في بوشهر، الكولونيل ميد، كُلّف بعقد معاهدة مع شيخ الكويت، «فتمّ ذلك في 23 يناير 1899». ويقول إن مضمونها بقي سرًّا إلى زمنه.

ويعرّف المحقق هذه المعاهدة: «الاتفاقية الإنجليزية الكويتية لسنة 1899: معاهدةٌ سرّيةٌ وُقّعت في 23 يناير 1899، تعهّدت فيها بريطانيا بحماية وحدة أراضي الكويت، مقابل تقييد وصول الدول الأجنبية إلى الشيخة».

ويروي المؤلف أنه حين جاء القنصل العام الألماني شتمريش سنة 1900 ليفاوض الشيخ على منتهى سكّة بغداد، «اضطرّ الشيخ إلى رفض المفاوضات بناءً على المعاهدة التي عقدها قبل ذلك بقليلٍ مع إنجلترا».

## الكويت وتركيا: آراءٌ متعارضة

ينقل المؤلف عن صحيفة «التايمز» في 28 يناير 1911 جمعًا لآراء زوّار مختلفين في علاقة الكويت بتركيا: «ففي القرن الثامن عشر يُقال إنّ الشيوخ هناك كانوا مستقلّين تمامًا». ثم يسرد ما قاله ضبّاط إنجليز في 1829 و1845 و1853. ويذكر أن بيلي علم «في 1863 و1865 أنّ الكويت تولّت التزام حماية مصبّ شطّ العرب».

ويقول إن كاتب «التايمز» يرى «أنّ سيادة تركيا لم تكن إلّا وهمًا»، وإن الشيخ «لم يكن يرفع العلم التركي إلّا مجاملةً وعلامةً على الانتماء إلى الإسلام».

ويحسم المحقق المسألة: «تعرض هذه الفقرة آراءً متعارضةً في وضع الكويت. والثابت في المصادر التي فتحناها أنّ الكويت أُدرجت إداريًّا في ولاية البصرة العثمانية سنة 1875 دون أن يُقيم فيها موظّفٌ عثماني، وأنّ الاتفاقية الإنجليزية العثمانية لسنة 1913 أرست أساس استقلال الكويت الرسمي وحدودها الحديثة».

## نخيل الفاو

ومن التفاصيل الاقتصادية التي يحفظها الكتاب أن للشيخ مبارك مزارع نخيل عند الفاو. يقول شتولمان إنها «كانت في أرضٍ تركيةٍ لا نزاع فيها، وكان يجني منها دخلًا قدره أربعة آلاف ليرةٍ تركيةٍ في السنة».

## المقيمية البريطانية في الكويت

يذكر المؤلف أن إنجلترا «نقلت سنة 1820 مقيميّتها من البصرة إلى الكويت، لأنّ خلافاتٍ نشأت في الأولى مع الأتراك». ثم سحبت قنصليتها، وأعادها اللورد كيرزن.

ويذكر من المقيمين في الكويت المقدّم و. ج. غراي، الذي وقّع تقرير 1913/1914، ثم الكابتن ويليام هنري شكسبير. ويعرّف المحقق شكسبير في موضعٍ آخر بأنه «الوكيل السياسي البريطاني في الكويت منذ 1909». ويقول المحقق: «كان الكابتن شكسبير مستشارًا عسكريًّا لابن سعود من 1910 إلى 1915، وقُتل في معركة جرّاب في 24 يناير 1915 على يد مقاتلٍ من رجال ابن رشيد، ودُفن في الكويت».

## سفن في الميناء سنة 1901

يروي المؤلف أحداث سنة 1901 بالتفصيل. فقد ظهرت أمام الكويت سفينة حربية تركية عليها جنود، لكن الحكومة الإنجليزية الهندية كانت قد أرسلت سفينة حربية، «فمنع قائدها، الكابتن بيرز، إنزال الجنود الأتراك». ثم ينقل عن «التايمز» أنه أُعلن في القسطنطينية لاحقًا «أنّ السفينة التركية لم يكن عليها جنودٌ أصلًا».

<figure class="art-fig"><img src="articles/21/2.webp" alt="خريطة قديمة للكويت وخور عبد الله وشطّ العرب" width="1013" height="1600" loading="lazy" /><figcaption><span class="fig-cap">خريطة الكويت وخور عبد الله وشطّ العرب، وتحتها في الأصل: «مواضع صفوان وأمّ قصر تقريبية… وأمّ قصر تتحكّم في خور عبد الله» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 280</span><span class="fig-orig">طبيعة الصورة: صورة من كتابٍ آخر معاصر للمؤلف أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب هنري جيمس ويغام عن مسائل الخليج والعراق وإيران، لندن: إيزبستر، 1903</span></figcaption></figure>

وفي آخر تلك السنة عادت السفينة ومعها موظّف تركي كبير، فمنع الكابتن سيمونز النزول إلى البرّ. ويذكر المؤلف كذلك أن بعض أبناء أخي مبارك، وكانوا منفيّين على شطّ العرب، حاولوا أخذ المدينة، فطردتهم السفينة الحربية الإنجليزية «لابوينغ».

ويذكر أنه في سنة 1906 «رفع القنصل الإنجليزي العلم الإنجليزي ببساطةٍ عند مدخل ميناء الكويت وعلى جزيرتين صغيرتين أمامه».

## المخافر على الحدود

حين ظهرت خطة لنقل ميناء سكّة بغداد إلى خور عبد الله وخور الزبير، أعلن الشيخ مبارك، بحسب المؤلف، هذه المناطق ملكًا له، «حتّى نقطةٍ على عشرين ميلًا شمال شرقيّ خور عبد الله، وكذلك جزيرة بوبيان الكبيرة».

ويضيف شتولمان: «ومع ذلك أرسلت تركيا سنة 1902 مخافر عسكريةً إلى صفوان وأمّ قصر وجزيرة بوبيان». وبعد شهرين أقامت مخفرًا في خليج المسلّمية (أبو علي)، على 180 ميلًا إنجليزيًّا جنوبيّ الكويت. ويقول إن اللورد كيرزن احتجّ، «لكنّ المخافر كانت لا تزال هناك سنة 1911».

## السكّة التي لم تصل

كانت الكويت في نظر الدول الكبرى يومئذٍ مرشّحة لتكون منتهى سكّة بغداد. ويذكر المؤلف أن الصحف أفادت سنة 1913 بأن القسم الأخير من السكّة، «حتّى الكويت أو حتّى نقطةٍ أخرى على الخليج»، تبنيه شركة إنجليزية جديدة. ثم يذكر أن المعاهدة لم يُصدَّق عليها، وأن الحرب العالمية اندلعت بعد توقيعها بالأحرف الأولى بستة أسابيع. ولم تصل السكّة إلى الكويت قطّ.

## الجهراء وبوبيان

يروي شتولمان أنه لمّا اقترب ابن رشيد من الكويت سنة 1901 حضرت ثلاث سفن إنجليزية، «احتلّت موقعًا على ثمانية عشر ميلًا إنجليزيًّا داخل البرّ عند الجهراء». ويعرّف المحقق المعركة التي سبقت ذلك: «هي معركة الصريف في 17 مارس 1901، في الحرب الرشيدية الكويتية (1900–1901)».

ويذكر المؤلف جزيرة بوبيان. ويعرّفها المحقق: «جزيرة بوبيان: أكبر الجزر الكويتية، في الزاوية الشمالية الغربية من الخليج، مساحتها 863 كيلومترًا مربّعًا». ويضيف أن قبول العراق في نوفمبر 1994 الحدودَ التي رسّمتها الأمم المتحدة أنهى «كلّ ادّعاءٍ عراقيٍّ سابقٍ فيها».

## اتفاقية 1913

يقول المؤلف إنه اتُّفق سنة 1913 على «أن تحتفظ تركيا بالسيادة الاسمية على الكويت، ولها حقّ إبقاء ممثّلٍ تركيٍّ هناك، على ألّا تتدخّل في شؤون البلاد الداخلية والخارجية».

ويبيّن المحقق مصير هذه الاتفاقية: «هي الاتفاقية الإنجليزية العثمانية لسنة 1913 (انظر الفصل العاشر)، التي وُقّعت في 29 يوليو 1913 ولم يُصدَّق عليها، وكان أثرها الباقي في وضع الكويت أنها أرست أساس استقلالها الرسمي وحدودها الحديثة».

وينقل المؤلف أيضًا برقية من لندن، قال فيها اللورد هاردينغ، نائب الملك في الهند، في سملا في 17 سبتمبر 1913، إن تركيا تلتزم «بعدم التدخّل في شؤون الكويت الداخلية، والاعتراف بالاتّفاقات المعقودة بين إنجلترا وشيخ الكويت». ويذكر أن الباب العالي تنازل كذلك عن مطالبه في قطر والبحرين ومسقط، واعترف لإنجلترا بحقّ إقامة الفنارات في الخليج العربي وتولّي أعمال الشرطة فيه.

## السلاح والقناصل

وفي فصل نجد يذكر شتولمان، نقلًا عن التقرير القنصلي الإنجليزي عن التجارة في مسقط، أن شحنات كبيرة من الأسلحة والذخائر أُرسلت في النصف الأول من 1912/1913 «إلى سلطان مسقط وإلى شيخ الكويت». ويذكر أيضًا أن القنصل الإنجليزي في البصرة، المستر كرو، سافر في 1911 «من الكويت إلى نجد». فقد كانت الكويت يومئذٍ بابًا إلى داخل الجزيرة، تنطلق منها رحلات الرحّالة والقناصل.

وينقل المؤلف عبارة لكاتب فرنسي تصف الشيخ مبارك بأنه تابع لتركيا. ويعلّق المحقق: «رأيٌ فرنسيٌّ في زمنه ينقله المؤلف، يعبّر عن الدعوى العثمانية؛ والكويت اليوم دولةٌ مستقلّةٌ ذات سيادة».

## خبر الوفاة

يختم شتولمان حديثه عن الكويت بخبر صحفي: «وبحسب خبرٍ لصحيفة «لو تان» في منتصف يناير 1916 تُوفّي شيخ الكويت مبارك بن صباح مؤخّرًا». والخبر سابق لأوانه، فالمحقق يذكر في ترجمته أن وفاة الشيخ مبارك كانت في نوفمبر 1915.

وفي فصل نجد يذكر المؤلف خبرًا من ديسمبر 1914 بأن «شيخ الكويت يشارك في الجهاد»، ويضع بعده علامة استفهام. ويؤكّد المحقق شكّ المؤلف: «كان الشيخ مبارك الصباح يومئذٍ مرتبطًا ببريطانيا بمعاهدة 1899، فالخبر — كما شكّ فيه المؤلف — غير صحيح».

## انتهاء الحماية

ويختم المحقق قصة المعاهدات بحاشية موجزة: «وانتهت اتّفاقات الحماية مع بريطانيا في يونيو 1961 حين صارت الكويت رسميًّا دولةً مستقلّة».

## خاتمة

كتب شتولمان عن الكويت وهو يرى فيها نهاية محتملة لسكّة بغداد، فجاء نصّه محمّلًا بحسابات الحرب. لكنه حفظ معلومات نافعة: اسم الكويت وأصله، وعدد سكانها نحو خمسين ألفًا، وروايات أصل أهلها، ونخيل الفاو، ومعاهدة 1899 واتفاقية 1913. وتأتي حواشي المحقق لتصحّح الأخبار وتعرّف الأعلام والمواضع، من كاظمة إلى بوبيان، ومن صباح الأول إلى مبارك الكبير.

## المصدر

- الكتاب: «الصراع على جزيرة العرب بين تركيا وإنجلترا» (Der Kampf um Arabien zwischen der Türkei und England، 1916)، تأليف: فرانتس شتولمان (Franz Stuhlmann)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثالث عشر «العراق»، فقرة «مسألة الكويت»، ص 274–283 (الاسم والموقع وكاظمة ص 274–275، معاهدة 1899 ص 275، أصل الأهل والآراء في وضع الكويت ونخيل الفاو ص 276، المقيمية ص 277، أحداث 1901 والمخافر ص 278–279، اتفاقية 1913 ص 279–281، خبر الوفاة ص 283)؛ وحواشي المحقق في الفصلين الحادي عشر والثاني عشر ص 252، 260–262، 265.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`04-kuwait-1831-stocqueler`,`25-basra-ahwaz-1831-stocqueler`,`28-bahrain-pearls-1618-silva`]},{slug:`22-sharjah-rak-1816-buckingham`,title:`من الشارقة إلى رأس الخيمة سنة 1816: الساحل والبلدات وجبال الشحوح`,author:`جيمس سلك بكنغهام`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-20`,cover:`articles/22/1.webp`,excerpt:`في نوفمبر 1816 كان الرحّالة جيمس سلك بكنغهام على متن السفينة «ميركوري» ضمن سرب بريطاني صغير قصد رأس الخيمة.`,tags:[`الشارقة`,`رأس الخيمة`,`البحرين`],sample:!1,book:`رحلة بكنغهام في الخليج العربي 1816`,coverCaption:`«رأس الخيمة سنة 1816» — المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 145`,era:`1816`,eraSort:1816.2,words:1693,minutes:8,body:`في نوفمبر 1816 كان الرحّالة جيمس سلك بكنغهام على متن السفينة «ميركوري» ضمن سرب بريطاني صغير قصد رأس الخيمة. وكان يتكلّم العربية ويلبس زيّ العرب، فطُلب منه أن يرافق قائد السرب مترجمًا. ودوّن في الفصل الثامن من رحلته وصفًا للساحل من الشارقة إلى رأس الخيمة، ولبلدة رأس الخيمة وشيخها، ولجبال رؤوس الجبال وأهلها.

ويقدّم المحقق هذا الفصل بتنبيه: إن المؤلف يروي الوقائع من وجهة النظر البريطانية في زمنها، وإن الشيخ الدكتور سلطان بن محمد القاسمي درس هذه الحادثة وما سبقها في كتابه «أسطورة القرصنة العربية في الخليج» (1986)، اعتمادًا على وثائق شركة الهند الشرقية نفسها، و«بيّن أنّ كثيرًا من التهم الموجّهة إلى القواسم لم تقم على بيّنة». ونقرأ الفصل هنا لما فيه من وصف للمكان والناس، مع حواشي المحقق التي تضبطه.

## الشارقة وأبو هيل

في صباح 26 نوفمبر طلع النهار صافيًا. ويقول المؤلف إن السرب تجاوز في الليل ميناء الشارقة، «وهي ليست جزيرةً كما رُسمت في خريطة نيبور». ويصفها بأنها «بلدةٌ صغيرةٌ على شاطئٍ رمليّ»، ويقدّر سكانها بخمسمئة إلى ستمئة. ويعلّق المحقق بأنها كانت يومئذٍ من بلاد القواسم، «وهي اليوم إحدى إمارات دولة الإمارات العربية المتحدة»، وأن عدد السكان المذكور ممّا بلغ المؤلف «ولا يُعتمد عليه إحصاءً».

<figure class="art-fig"><img src="articles/22/1.webp" alt="لوح محفور لبلدة رأس الخيمة من البحر سنة 1816" width="937" height="613" loading="lazy" /><figcaption><span class="fig-cap">«رأس الخيمة سنة 1816»</span><span class="fig-src">المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 145</span><span class="fig-orig">أصل الصورة: جيمس سلك بكنغهام، رحلات في آشور وميديا وفارس، ط2، لندن 1830، ج2، اللوح المحفور في صدر الفصل الثامن؛ نشرها هنري كولبرن، 1 يناير 1829</span></figcaption></figure>

ويذكر المؤلف إلى الجنوب الغربي من الشارقة موضعًا اسمه «أبو هيل». ويقول المحقق: «أبو هيل: موضعٌ على الساحل في ناحية دبي، وهو اليوم من أحيائها». ويضيف ملاحظة لافتة: «والملاحظ أنّ المؤلف لم يذكر دبي باسمها، وكانت يومئذٍ بلدةً صغيرة».

ويقول المؤلف إن البلدتين كلتيهما ترسلان القوارب إلى مغاص اللؤلؤ في البحرين في أشهر الصيف. أمّا طعامهم في الشتاء فالسمك والتمر ولبن القطعان. والقمح نادر، والأرزّ يجلبونه من مسقط والبحرين.

## فِشت وعجمان

بعد الشارقة تأتي «فِشت». ويعرّفها المحقق بأنها «موضعٌ على ساحل الشارقة، وهو اليوم من أحياء مدينة الشارقة». ثم عجمان، «بلدةٌ صغيرةٌ أخرى قرب الشاطئ»، يقدّر المؤلف سكّانها بأربعمئة إلى خمسمئة. ويقول إن أهلها لا يرسلون قوارب إلى مغاصات البحرين، بل يعيشون على الصيد في ساحلهم، وعلى نتاج نخيلهم وقطعانهم.

## أهل البادية

يصف المؤلف داخل البلاد بأنه سهل رملي منبسط يمتد إلى سفح سلسلة منخفضة من التلال المتقطّعة. وفيه أسر من قبيلتي «بني كتب» و«النعيم»، «تسكن بيوت الشعر، وتركب الإبل التي هي عمدة ثروتها». ويوضح المحقق أن النعيم «قبيلةٌ عربية كبيرة، ومنها آل النعيمي حكّام عجمان».

<quote by="جيمس سلك بكنغهام" source="«رحلة بكنغهام في الخليج العربي 1816»">وشوهدت على أحد الأبراج المستديرة سارية علم، رُفعت عليها الراية العربية برهةً قصيرة ثم أُنزلت</quote>

ثم يذكر بني ياس، ويقول إنهم أكثر عددًا من القبيلتين السابقتين مجتمعتين. ويعرّفهم المحقق: «بنو ياس: حلفٌ قبليٌّ كبير، ومنهم آل نهيان حكّام أبوظبي وآل مكتوم حكّام دبي». وينبّه إلى أن وصف المؤلف لمعيشتهم «منقولٌ عن السماع، وفيه مبالغة».

ويذكر المؤلف أن الماء في تلك البقاع قليل مالح. ويقول إن إبلهم «لا تشرب إلا مرّةً كلّ يومين أو ثلاثة».

## أمّ القيوين

على نحو عشرة أميال من عجمان تقع أمّ القيوين. ويصف المؤلف الساحل في الطريق إليها بأنه «خطًّا من الشاطئ الرمليّ الأبيض، مع بساتين النخيل في السهل». ووراءه، على عشرين إلى أربعين ميلًا، ترتفع سلسلة من التلال الشاهقة.

ويرى البلدة من البحر: «وكان منظر هذا الموضع منظر حظيرةٍ مربّعةٍ تكوّن قريةً مسوّرة». ويرى أبراجًا مستديرة على طول الشاطئ، وبقايا سور كان يصلها، وبيوتًا وأكواخًا تتخلّلها مجموعات من النخيل. ويقول: «وشوهدت على أحد الأبراج المستديرة سارية علم، رُفعت عليها الراية العربية برهةً قصيرة ثم أُنزلت». وفي خور إلى الشمال الشرقي ثلاثة قوارب كبيرة راسية، وقوارب أخرى مسحوبة على الشاطئ. واجتمع أكثر السكّان على الشاطئ حين مرّت السفن.

## بلدة رأس الخيمة

قبيل الغروب لمح السرب رأس الخيمة «ترتفع من خطّ الماء عند سفح الجبال الشاهقة». ويحدّد المؤلف موقعها بخط العرض 25° 47' شمالًا وخط الطول 55° 34' شرقًا.

ويصف البلدة: «وهي قائمةٌ على لسانٍ ضيّقٍ من الأرض الرملية متّجهٍ نحو الشمال الشرقيّ». يواجه هذا اللسان البحر المفتوح من جهة، وخورًا يوفّر مرفأً آمنًا للقوارب من الجهة الأخرى. ويقدّر طولها بنحو نصف ميل وعرضها بربع ميل.

ويقول إنه لم يرَ حولها سورًا متصلًا، «وإن كانت تُرى أبراجٌ مستديرةٌ وأجزاءٌ من أسوارٍ في عدّة مواضع». وأقوى مواضعها حصن عند الزاوية الشمالية الشرقية، وبرج مستدير مزدوج قرب وسط البلدة. أمّا سائر البلدة فمبانٍ من الحجر غير المنحوت، وأكواخ من الأسل والعشب الطويل، «تتعرّج بينها ممرّاتٌ ضيّقة». ويقدّر سكّانها «بعشرة آلافٍ على الأقلّ».

## النخيل والجبال

يقول المؤلف إن الأرض المجاورة للبلدة منبسطة رملية، لكن على الجانب الآخر من الخور «تبدو غاباتٌ واسعةٌ كثيفةٌ من النخيل، ثمرها عمدة الطعام للناس ومواشيهم معًا».

وعند نهاية السهل ترتفع سلسلة من الجبال، قُدّرت أعلى نقطة فيها بنحو ستة آلاف قدم فوق سطح البحر. ويصف ما رآه من بعيد: «وشوهدت طبقاتٌ بيضاء تمتدّ أفقيًّا قرب القمم». وتنخفض السلسلة نحو الشمال الشرقي حتى تنتهي برأسي خصب والشعم، وتتضاءل نحو الجنوب الغربي حتى «تضيع في صحراء العرب».

## الشحوح

يذكر المؤلف أن في هذه الجبال قومًا يسمّون «الشحوح»، يعيشون في القرى والخيام، «ويعترفون بشيخٍ منهم رئيسًا لهم». ولهم ثلاث بلدات قرب الساحل بين رأس الخيمة ورأس مسندم: الشعم وخصب وجادي. ويقول إنهم لا يملكون سفنًا للتجارة، «ولا يستعملون البحر إلا في الصيد لسدّ حاجاتهم المباشرة». ويذكر أن أكثرهم يتكلّمون العربية إلى جانب لغتهم.

<figure class="art-fig"><img src="articles/22/2.webp" alt="منظر محفور لبلدة رأس الخيمة والسفن قبالتها سنة 1809" width="1600" height="921" loading="lazy" /><figcaption><span class="fig-cap">«رأس الخيمة أثناء هجوم الحملة البريطانية سنة 1809» — من كتابٍ آخر للمحقق (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925)»، ص 157</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: حفر جون هيفيسايد كلارك عن رسم ريتشارد تمبل، لندن، 1813</span></figcaption></figure>

ويضبط المحقق ما رواه المؤلف: «الشحوح: قبيلةٌ عربية تسكن جبال رؤوس الجبال في مسندم وما يليها من رأس الخيمة». ويقول إن ما يذكره عن لغتهم «يشير إلى لهجتهم الخاصّة وإلى اللغة الكمزارية التي يتكلّمها أهل كمزار في مسندم». وينبّه إلى أن وصفه لسحنتهم «منقولٌ عن السماع».

## المرسى والمدّ

يصف المؤلف مرسى رأس الخيمة بأنه «مرسًى مكشوف»، معرّض لرياح الشمال والشمال الغربي الغالبة في الخليج. ويذكر حرفًا من الرمل يمتد موازيًا للشاطئ على بعد نصف ميل منه، يحمي القوارب الخفيفة الراسية داخله. أمّا مدخل الخور، حيث تُسحب السفن للأمان أو الإصلاح، فعليه حاجز «ليس عليه إلا إحدى عشرة قدمًا عند المدّ العالي».

ويذكر أن المدّ يجري على خط الساحل، وكان ارتفاعه وانخفاضه أثناء رسوّهم «نحو ستّ أقدام». وعلى نحو سبعة أميال إلى الشمال الشرقي بلدة الرمس، «ولها أيضًا خورٌ على مدخله حاجز»، وهي تابعة لرأس الخيمة.

## لقاء الشيخ حسن بن رحمة

في صباح 27 نوفمبر نزل المؤلف إلى البرّ مع الكابتن بريدجز، قائد السرب، ليتحقّقا من وصول رسالة المقيم البريطاني إلى الشيخ. ويعرّف المحقق الشيخ: «الشيخ حسن بن رحمة القاسميّ: شيخ رأس الخيمة في هذه المدّة حتى حملة 1819-1820م، ووقّع مع البريطانيين على معاهدة السلام العامّة سنة 1820م».

ويروي المؤلف أنهما قيدا في ممرّات ضيّقة إلى المبنى الرئيس في وسط البلدة، فاستقبلهما الشيخ في حاشية من نحو خمسين رجلًا. ويقول: «فحيّيته بتحية الإسلام، تحية السلام، فردّها عليّ بلا تردّد». ولم يكن في الطريق العام سجّاد ولا حُصر، «فجلسنا كلّنا على الأرض».

وسأله المترجم هل بلغته الرسالة، فأجاب بالإيجاب، «وأكّد لنا مرارًا أننا في أمانٍ تامّ، وأبدى رجاءه أن تُسوّى المسألة بالحسنى».

ويصف المؤلف الشيخ بأنه كان في نحو الأربعين، «وأسنانه بيضاء منتظمة بديعة». وكان يلبس الثياب العربية المعتادة مع عمامة من شال الكشمير و«بنيش» قرمزي. والبنيش كما يشرح المحقق «جبّةٌ واسعةٌ طويلة الأكمام تُلبس فوق الثياب». أمّا أتباعه فكانوا «بقمصانٍ طويلةٍ و«كوفيات» أي مناديل ملقاةٍ على الرأس بارتخاء».

## عاصفة إلى قشم وهنگام

في ليلة 27 نوفمبر اشتدّت الريح الشمالية الغربية، فخرج السرب إلى عرض البحر. ووجد نفسه عند الفجر قرب جزيرة قشم، فرسا في الخليج الصغير بين قشم وجزيرة هنگام. ويعرّف المحقق هنگام بأنها «جزيرةٌ صغيرة جنوب جزيرة قشم، وتسمّى في الخرائط الإنجليزية Angar».

ويقول المؤلف إن قشم «أكبر جزر الخليج العربيّ كلّها»، طولها نحو ستين ميلًا وأكبر عرضها نحو عشرين. ويضيف: «ويسمّيها العرب «جزيرة الطويلة»، ويقال إنهم كانوا يسكنونها يومًا بكثافة». ويذكر أن أوديتها خضراء، والتمر والماء فيها وافران.

وينقل المؤلف أنه كان في قشم قديمًا ثلاثمئة قرية، ويقول إنه لا يوجد فيها في زمنه «اثنتا عشرة قريةً صغيرةً مأهولة». ويذكر أن الكولونيل كينير لاحظ في هنگام أطلال بلدة كبيرة، «وصهاريج كثيرةً للماء مماثلةً لصهاريج هرمز». ويعلّق المحقق على ما يرويه المؤلف من أحوال قشم بأنه «رواية المؤلف عن السماع؛ وكانت قشم في هذه المدّة موضع نزاعٍ بين القواسم وسلطنة مسقط وحكّام فارس».

ويربط المؤلف هنگام بما ورد عند المؤرخين اليونانيين. فهي عنده الجزيرة التي ذكرها نيارخوس، قائد أسطول الإسكندر، على بعد أربعين غلوة من الجزيرة الكبرى، «ويقول إنها كانت مقدّسةً لنبتون». ويذكر أن قشم نفسها وردت بأسماء محرّفة عند نيارخوس وبطليموس وبلينيوس وسترابون. ويرى المحقق في حاشية قريبة أن اشتقاق المؤلف لاسم جزيرة لارك المجاورة «اشتقاقٌ ظنّيّ».

وفي 29 نوفمبر هدأت العاصفة، فعاد السرب عبر الخليج إلى رأس الخيمة.

## الجواب وما تلاه

حملت رسالة المقيم مطالب تتعلّق بسفن استُولي عليها في البحر الأحمر. ويعلّق المحقق بأن الشيخ سلطان القاسمي يناقش هذه المطالبات استنادًا إلى وثائق الشركة، «ويرى أنّ مسؤولية القواسم عنها لم تثبت على الوجه الذي صُوّر». ويضيف أن أكثر السفن المأخوذة كانت ملكًا لتجّار من الهنود.

وجاء جواب الشيخ يعرض إرسال مندوبين إلى بومباي للتفاوض، بشرط الأمان في ذهابهم وإيابهم. وقد وصف رجال البعثة الجواب بالوقاحة والمراوغة، فعلّق المحقق: «والجواب كما نقله هو نفسه لا يخرج عن المألوف في المراسلات بين طرفين متنازعين».

وانتهى الأمر في أول ديسمبر بتبادل للنار من بعيد، لم يُصب فيه أحد. ويقول المؤلف إنه من ثلاثمئة قذيفة أطلقها السرب «لم يبدُ أنّ واحدةً منها أصابت شيئًا». ويلاحظ المحقق: «يُلاحظ أنّ المؤلف نفسه ينتقد هذا القصف ويعدّه خطأً سياسيًّا». وقد أفضت هذه الأحداث إلى حملة 1819–1820، ثم إلى معاهدة السلام العامة سنة 1820.

## خاتمة

يحفظ الفصل الثامن من رحلة بكنغهام صورة لساحل الإمارات اليوم قبل أكثر من قرنين: الشارقة وأبو هيل وفِشت وعجمان وأمّ القيوين والرمس ورأس الخيمة، بأبراجها ونخيلها وخيرانها. وفيه وصف لقاء مباشر مع الشيخ حسن بن رحمة. وتأتي حواشي المحقق لتعرّف المواضع والقبائل، وتضع الرواية البريطانية في سياقها، مستندة إلى دراسة الشيخ الدكتور سلطان بن محمد القاسمي.

## المصدر

- الكتاب: «رحلة بكنغهام في الخليج العربي 1816»، تأليف: جيمس سلك بكنغهام (James Silk Buckingham)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثامن ص 137–158 (تنبيه المحقق والشارقة وأبو هيل ص 137–138، عجمان والبادية ص 138–139، أمّ القيوين ص 139–140، رأس الخيمة ص 141–147، لقاء الشيخ ص 143–144، الرمس ص 148، قشم وهنگام ص 149–153، الجواب وتبادل النار ص 149، 157–158).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`11-gulf-trade-1863-pelly`,`16-terrada-kung-basra-godinho`,`07-lower-gulf-islands-buckingham`]},{slug:`23-muscat-1816-buckingham`,title:`مسقط سنة 1816 في عين بكنغهام: المرفأ والجمرك والريال وأمان البلد`,author:`جيمس سلك بكنغهام`,category:`الاقتصاد والتجارة`,categorySlug:`economy-trade`,date:`2026-10-19`,cover:`articles/23/1.webp`,excerpt:`في أوائل ديسمبر 1816 رست السفينة التي تحمل جيمس سلك بكنغهام في مرفأ مسقط، وهو في طريقه إلى بومباي.`,tags:[`مسقط`,`مطرح`,`بومباي`,`التجارة`],sample:!1,book:`رحلة بكنغهام في الخليج العربي 1816`,coverCaption:`«مرفأ مسقط وبلدتها وتحصيناتها» — المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 167`,era:`1816`,eraSort:1816.3,words:1814,minutes:9,body:`في أوائل ديسمبر 1816 رست السفينة التي تحمل جيمس سلك بكنغهام في مرفأ مسقط، وهو في طريقه إلى بومباي. وكان قد عاش قبل ذلك بين عرب اليمن والحجاز والعراق، فقارن مسقط بما عرف من مدن الجزيرة العربية. وخصّ مسقط بالفصل التاسع من رحلته، فوصف المرفأ والبلدة والحكومة والتجارة والعملة والناس ومطرح.

## مرفأ بين الصخور

يحدّد المؤلف موقع المرفأ بخط العرض 23° 38' شمالًا وخط الطول 59° 15' شرقًا. ويصفه بأنه «خليجٍ صغيرٍ أو جونٍ نصف دائريّ»، تحيط به من كل الجهات، إلا عند مدخله، «صخورٌ شاهقةٌ شديدة الانحدار جرداء». ولا يزيد طوله على نصف ميل، ولا عرضه على ربع ميل «من حصنٍ إلى حصن، وهما يحرسان المدخل من الشرق والغرب».

<figure class="art-fig"><img src="articles/23/1.webp" alt="لوح محفور لمرفأ مسقط والبلدة والحصون على الصخور حولها" width="912" height="663" loading="lazy" /><figcaption><span class="fig-cap">«مرفأ مسقط وبلدتها وتحصيناتها»</span><span class="fig-src">المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 167</span><span class="fig-orig">أصل الصورة: جيمس سلك بكنغهام، رحلات في آشور وميديا وفارس، ط2، لندن 1830، ج2، اللوح المحفور في صدر الفصل التاسع؛ نشرها هنري كولبرن، 1 يناير 1829</span></figcaption></figure>

ويشرح مواضع الرسوّ. فالسفن الحربية والسفن العابرة ترسو عادةً في الخارج. أمّا السفن التجارية التي تتسلّم البضائع أو تفرغها فترسو أقرب إلى البلدة. وبين الحصنين مرسى أوسط، «وهو الموضع الذي ترسو فيه عادةً فرقاطات الإمام وسائر السفن الكبيرة».

ويعرّف المحقق «الإمام» في كلام المؤلف: «هو السيّد سعيد بن سلطان البوسعيديّ (حكم 1806-1856م)، الذي امتدّ ملكه إلى زنجبار وساحل شرق أفريقيا». ويضيف أن حكّام آل بوسعيد كانوا يُلقَّبون عند الأوروبيين بالإمام، «وإن كان السيّد سعيد يُلقّب بالسيّد والسلطان».

## البلدة والسور والحصون

تقع البلدة عند أسفل التلال في الربع الجنوبي الغربي من الجون. ويقول المؤلف إنها «غير منتظمة الشكل، متواضعة البناء»، ولا يبدو فيها مبنى جيد إلا مقرّ الإمام وبيوت قليلة لأقاربه وكبار رجال الحكومة. ويحيط بها سور من جهة البرّ وحدها، «أمّا الجزء المواجه للبحر فمفتوحٌ كلّه».

ويذكر أن للدفاع عنها من جهة البحر «ثلاثة حصونٍ رئيسة». ويعلّق المحقق: «أشهرها قلعتا الجلالي والميراني، اللتان بناهما البرتغاليون في أواخر القرن السادس عشر، ولا تزالان قائمتين على جانبي مرفأ مسقط».

ويقدّر المؤلف سكّان البلدة المسوّرة بعشرة آلاف، ويقول إن هذا التقدير مأخوذ، «كما يقولون هنا، من إحصاءٍ حديثٍ للسكّان المقيمين». ونحو تسعة أعشارهم عرب. والباقون في الغالب من البانيان وغيرهم من الكجرات وبومباي، «يُعامَلون بلينٍ وتسامحٍ كبيرين». ويعرّف المحقق البانيان بأنهم «طائفةٌ من التجّار الهندوس، أكثرهم من الكجرات والسند، كان لهم حضورٌ تجاريٌّ قديم في مسقط ومطرح». ووراء السور ضاحية من أكواخ القصب والعرائش يقدّر سكّانها بثلاثة آلاف.

## حدود الدولة واسم عُمان

يقول المؤلف إن سلطة الإمام تمتد «من رأس الحدّ في الجنوب الشرقيّ إلى خورفكّان قرب رأس مسندم في الشمال الغربيّ». ويذكر أن هذه الأراضي كلها تسمّى عُمان، ويربط الاسم بالأمان. ويصحّح المحقق: «هذا اشتقاقٌ شائعٌ عند الأوروبيين؛ واسم «عُمان» أقدم من ذلك، وقد اختلف المؤرّخون العرب في أصله، ولا صلة له في الأرجح بالأمان».

<quote by="جيمس سلك بكنغهام" source="«رحلة بكنغهام في الخليج العربي 1816»">ومع ذلك تُترك شحناتٌ كاملةٌ من البضائع، وأموالٌ من كلّ صنف، مكشوفةً على رصيف الجمرك وفي الطرق، بلا خوفٍ من النهب</quote>

ويصف المؤلف داخل البلاد بأنه جبلي، تحبس جباله السحب وتنزل الأمطار فتخصب الأودية. «وفي هذه الأودية حقول القمح، وبساتين الفاكهة، ومراعٍ ممتازةٌ للماشية». أمّا السهول قرب الساحل فتنتج «وفرةً من التمر»، وتمتد على حافتها بلدات صغيرة للصيد.

## الإيرادات والجمارك

يذكر المؤلف أن إيرادات الإمام تأتي في الغالب من تجارة الميناء: «فلا تُجبى ضرائب على الأرض ولا على الماشية في ممالكه كلّها». ويُؤدّى عن القمح والتمر العشر عينًا. أمّا رسوم التجارة فـ«خمسةٌ في المئة من القيمة، يدفعها الغرباء من كلّ صنف؛ واثنان ونصفٌ في المئة يدفعها العرب وسائر الأعلام الإسلامية». ولا رسوم على التصدير تقريبًا. وينقل أن الرأي العام يقدّر ما تجبيه الجمارك بعشرين لكًّا من الروبيات في السنة على الأقل.

## تجارة تمتد من البنغال إلى زنجبار

يقول المؤلف إن تجارة مسقط كانت في حياة والد الإمام أكبر كثيرًا. ويعرّف المحقق والد الإمام: «هو السيّد سلطان بن أحمد البوسعيديّ (حكم 1792-1804م)». ويشرح المؤلف السبب: كانت سفن مسقط يومئذٍ «ناقلي الهند تحت علمٍ محايد»، والإنجليز والفرنسيون في حرب بحرية، فصار ميناؤهم، «كمالطة في البحر المتوسّط»، مستودعًا للبضائع.

ويذكر أن تجارة مسقط في زمنه تقوم على نحو عشرين سفينة كبيرة وأربعين أو خمسين من البغلات والداوات. والسفن الكبيرة، من ثلاثمئة طن إلى ستمئة، تذهب إلى البنغال للموسلين والأقمشة، وإلى الجزر الشرقية للعقاقير والتوابل، وإلى ساحل مليبار «لخشب السفن والأرزّ والفلفل»، وإلى بومباي للسلع الأوروبية ومنتجات الصين. وتحمل السفن الأصغر هذه البضائع إلى البصرة وبوشهر والبحرين، «فتجلب منها التمر واللؤلؤ والريالات، مع قليلٍ من النحاس».

## ريال فرانسه وأبو طوب

يخصّ المؤلف العملة بفقرة. يقول إن الريال الألماني هنا أكثر تداولًا من الريال الإسباني. ويسمّي الأول «ريال فرانسه»، والثاني «أبو طوب»، أي «أبو المدفع». ويعلّل الاسم الثاني بأن عمودي الشعار الإسباني يُظنّ أنهما يمثّلان مدفعين.

ويوضح المحقق: «الريال الألمانيّ» هو «ريال ماريا تيريزا النمساويّ، الذي شاع في الجزيرة العربية وشرق أفريقيا، ويُسمّى «ريال فرانسه» أو «أبو طيرة»».

ويذكر المؤلف أن الريال الألماني يجري بواحد وعشرين «محمّدية»، «وهي عملةٌ صغيرةٌ من عملات مسقط». ويقول إن العملات كلها تنال قيمتها بمعدنها من الصرّافين، «وهم في الغالب من البانيان».

## النفير بدل الجيش الدائم

يقول المؤلف: «وليس عند العرب جيوشٌ دائمة؛ بل يُدعى كلّ رجلٍ قادرٍ على حمل السلاح إلى أن يصير جنديًّا متى احتيج إلى خدماته». والذين يُبقون على الدوام في الأجر قادة قليلون يتولّون حصون مسقط ومطرح وبركاء، ومعهم نحو مئة مدفعي.

ويشرح كيف يُجمع الجيش: يكتب الإمام إلى المشايخ ورؤوس العائلات في الناحية المهدّدة، فيحشدون الرجال. ومخازن الإمام تقدّم الذخيرة، ورؤساء النواحي يقدّمون القوت ويُعوَّضون بالمال أو بالإعفاء من العشور. ويذكر أن هذه النفقات تثقل على الإمام في وقت كتابته، «والإمام له جيشٌ من عشرين ألف رجلٍ في الميدان»، على إيرادات مينائه المتناقصة. ويذكر أن الوطنيين الأثرياء يقدّمون «هباتٍ طوعيةً من المال للمضيّ في الحرب».

## اللباس والخنجر

يقول المؤلف إن لباس الرجال «قميصٌ وسروالٌ من الموسلين الرقيق فحسب»، ونعال من الجلد المشغول، وعمامة من القطن ذي المربّعات الزرقاء الصغيرة بحاشية حمراء وصفراء. ويذكر أن هذه العمامة «صناعةٌ خاصّةٌ ببلدة «صحار»». وفي الحزام خنجر معقوف، يعرّفه المحقق: «هو الخنجر العُمانيّ، رمز الزيّ التقليديّ في عُمان، ويظهر اليوم في شعار السلطنة».

<figure class="art-fig"><img src="articles/23/2.webp" alt="لوح محفور لقوارب تدخل مرفأ بومباي، المحطة التي قصدها المؤلف بعد مسقط" width="944" height="620" loading="lazy" /><figcaption><span class="fig-cap">«مدخل القوارب إلى مرفأ بومباي» — من فصلٍ آخر في الكتاب (بومباي)، لا من فصل مسقط</span><span class="fig-src">المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 26</span><span class="fig-orig">أصل الصورة: جيمس سلك بكنغهام، رحلات في آشور وميديا وفارس، ط2، لندن 1830، ج2، اللوح المحفور في صدر الفصل الخامس؛ نشرها هنري كولبرن، 1 يناير 1829</span></figcaption></figure>

ويلاحظ المؤلف بساطة الثياب عند الجميع، حتى إن ثياب الأمير كلها، من غير سلاحه، لا يمكن أن تكون كلّفت «أكثر من نحو جنيهٍ إنجليزيّ».

## الجمرك والبورصة

يصف المؤلف الجمرك بأنه «ساحةً مكشوفةً مربّعةً من عشرين قدمًا»، حولها مصاطب، وسقفها مغطّى للوقاية من الشمس. ويقول إن موضع النزول هذا «هو أيضًا البورصة التجارية». ففيه يجتمع كبار التجّار في برد الصباح وبعد العصر، بعضهم على مدافع قديمة، وبعضهم على صوارٍ ولفائف حبال، «يمسحون لحاهم ويعدّون مسابحهم». ويضيف أن الغريب إذا صار بينهم «وجد التجارة تستغرق كلّ حديثهم وأفكارهم».

ويقول المؤلف إنه لم يرَ مسجدًا يُدرك بالقباب والمآذن. ويوضح المحقق: «يُفهم من عبارته أنّ مساجد مسقط لم تكن ذات قبابٍ ومآذن ظاهرة على الطراز العثمانيّ أو الفارسيّ، وهو شأن كثيرٍ من المساجد العُمانية التقليدية؛ لا أنها خلت من المساجد».

## أمان البلد

يرى المؤلف أن من أعظم ما تتميّز به مسقط على سائر المدن العربية «الاحترامُ واللطف اللذان تبديهما طبقات سكّانها كلّها للأوروبيين». ويقول إن كل أحد في البلدة، «حتى الإمام نفسه، يمشي على قدميه».

ويقول إن هذه السكينة ترجع إلى «وداعة طبع الناس، لا إلى إحكام نظام الشرطة». فليس في البلدة دوريات ولا حرّاس إلا عند الحصون. «ومع ذلك تُترك شحناتٌ كاملةٌ من البضائع، وأموالٌ من كلّ صنف، مكشوفةً على رصيف الجمرك وفي الطرق، بلا خوفٍ من النهب».

وينقل المؤلف عن الأب رينال قوله في أهل مسقط: «ليس في المشرق شعبٌ أُثني عليه عامّةً بالأمانة والاعتدال والأنس كما أُثني عليه». ويعقّب المؤلف بأن هذه الصفة «لا تزال تنطبق على حالهم الحاضرة».

## من ألبوكيرك إلى اليعاربة

يروي المؤلف تاريخ مسقط «على قدر ما هو معروفٌ في السجلّات الأوروبية». ففي أوج القوة البرتغالية في بحار الهند، كانت هرمز المخزن الرئيس لتجارة الخليج العربي، وكان ميناء مسقط ينافسها. فاستولى عليه ألبوكيرك «نحو سنة 1507»، وسعى إلى تحويل تجارته إلى هرمز. فلما فقد البرتغاليون هرمز سعوا إلى تركيز تجارتهم في مسقط.

ويقول المؤلف إن المصادر الأوروبية تتفق «على أنّ البرتغاليين طُردوا آخر الأمر من مسقط على يد العرب». ويحدّد المحقق التاريخ والقادة: «طُرد البرتغاليون من مسقط سنة 1650م على يد الإمام سلطان بن سيف اليعربيّ، بعد أن حاصرهم الإمام ناصر بن مرشد».

ويلاحظ المؤلف أنه لا توجد في زمنه بقايا ظاهرة لما وصفه بعض الكتّاب الأوروبيين من عظمة البرتغاليين في مسقط، «في التحصينات والكلّيات والكنائس والقصور والمنازل الخاصّة».

## مطرح والماء والمؤن

إلى الشمال الغربي من مسقط تقع مطرح، ويقول المؤلف إنها «مرفأٌ لا يقلّ جودةً عن مسقط». وهي أقلّ تجارة، لكن فيها بيوت حسنة البناء أكثر، «لأنها مقامٌ أبرد وأطيب».

ويقول إن اللحم والخضر والفاكهة وافرة في مواسمها، «ممتازة الجودة رخيصة الثمن؛ والسمك ليس في مكانٍ أوفر ولا أطيب منه هنا». والماء يُجلب من عيون في التلال إلى صهريج في مسقط، تُملأ منه براميل السفينة في ساعات قليلة.

## ألفاظ البحر

يختم المؤلف وصفه بملاحظة لغوية. فأسماء الصواري والأشرعة والحبال على سفن مسقط الكبيرة مزيج من العربية والفارسية والهندية والهولندية والبرتغالية والإنجليزية. ويذكر أن ألفاظ «بنديرا» و«بوسولا» و«أرمادا» بقايا من البرتغالية، معناها العلم والبوصلة والسرب، «وفي العربية «بيرق» و«ديرة» و«سنجار»».

ويذكر أيضًا أن البحّارة العرب يوجدون في مسقط دائمًا، وأن السفن تُسحب إلى الشاطئ عند المدّ العالي للإصلاح، وفي البلدتين «صنّاع سفنٍ وقلفاطون حاذقون في صناعاتهم».

وبعد خروج السفينة من مسقط لمح المؤلف علامة على الساحل يسمّيها البحّارة «فجوة الشيطان». ويشرحها المحقق بأنها «تسميةٌ ملاحية لانخفاضٍ في الجبال على الساحل جنوب شرق مسقط». ويذكر المؤلف بعدها قلهات، ويعرّفها المحقق بأنها «مدينةٌ تاريخية على ساحل عُمان قرب صور، كانت من أهمّ موانئ مملكة هرمز، وزارها ابن بطوطة».

## إلى بومباي

غادر المؤلف مسقط على السفينة «فستال». وبعد أيام دخل مرفأ بومباي ورسا «سالمين قبل الغروب». ويقول إنه نزل إلى البرّ ولقي أصدقاءه الذين تركهم قبل نحو اثني عشر شهرًا. وكانت بشرته قد تغيّرت بحرّ الصحراء، و«صارت لحيتي الكاملة الداكنة وثيابي الشرقية جزءًا منّي»، فاحتاج من عرفوه إلى وقت ليألفوا هيئته الجديدة.

ويذكر المؤلف في حاشية أن جزءًا من وصفه لمسقط نُشر سنة 1829 ليرافق منظرًا محفورًا لمسقط «عن رسمٍ للكولونيل جونسون من مهندسي بومباي»، وأن الصورة المرافقة للفصل نسخة أمينة منه.

## خاتمة

غادر بكنغهام مسقط في 5 ديسمبر 1816 بنسيم قوي إلى بومباي. وترك في فصله صورة مفصّلة لميناء عربي في عهد السيّد سعيد بن سلطان: مرفأ بين الصخور، وجمرك صغير هو بورصة المدينة، وريال فرانسه وأبو طوب والمحمّدية، وجيش يُجمع بالنفير، وأمان يترك الأموال على الرصيف. وتضبط حواشي المحقق الأعلام والمصطلحات، وتصحّح ما شاع عند الأوروبيين من اشتقاق اسم عُمان.

## المصدر

- الكتاب: «رحلة بكنغهام في الخليج العربي 1816»، تأليف: جيمس سلك بكنغهام (James Silk Buckingham)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل التاسع ص 166–196 (المرفأ ص 166–168، البلدة والحصون والسكان ص 168–169، الحدود والأودية ص 169–170، الإيرادات والتجارة ص 170–172، العملة ص 173، النفير ص 174، اللباس ص 177، الجمرك والمساجد ص 178، أمان البلد ص 179–180، التاريخ ص 180–182، مطرح والمؤن ص 183، ألفاظ البحر ص 185، فجوة الشيطان ص 185، قلهات ص 189، الوصول إلى بومباي ص 196؛ حاشية المؤلف عن اللوح ص 166).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`14-pearl-market-bombay-rosenthal`,`19-bushehr-port-1816-buckingham`,`08-muscat-1817-heude`]},{slug:`24-muscat-arabia-1663-godinho`,title:`مسقط وبلاد العرب في رحلة الأب غودينيو سنة 1663: الخيل والقهوة والقلاع`,author:`الأب مانويل غودينيو اليسوعي`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-18`,cover:`articles/24/1.webp`,excerpt:`في سنة 1663 عاد الأب اليسوعي البرتغالي مانويل غودينيو من الهند إلى البرتغال برًّا، فركب سفينة من سورت إلى الخليج العربي، ثم سار عبر العراق والبادية.`,tags:[`مسقط`,`الأحساء`,`الخيل`],sample:!1,book:`الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)`,coverCaption:`خريطةٌ هولنديةٌ مخطوطةٌ لخليج مسقط كما يبدو للقادم من بحر عُمان: مسقط القديمة بين قلعتي الجلالي والميراني، وإلى اليمين مطرح (صورة أضافها المحقق) — المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 31`,era:`1663`,eraSort:1663.2,words:1729,minutes:9,body:`في سنة 1663 عاد الأب اليسوعي البرتغالي مانويل غودينيو من الهند إلى البرتغال برًّا، فركب سفينة من سورت إلى الخليج العربي، ثم سار عبر العراق والبادية. وفي الفصل العاشر من رحلته توقّف عند بلاد العرب، فوصف خيلها وثمارها ولباس أهلها وسلاحهم، ثم وصف قلعة مسقط وصفًا مفصّلًا، وهو يذكر ما كان للبرتغاليين على ساحل عُمان قبل أن يُخرجهم الإمام سلطان بن سيف سنة 1650.

ويكتب المؤلف من موقعه راهبًا برتغاليًّا في القرن السابع عشر. ويحرص المحقق في حواشيه على تصحيح ما نقله من أخبار قديمة، وعلى تعريف المواضع التي ذكرها على ساحل عُمان والإمارات.

## أقسام بلاد العرب

يقول المؤلف إن بلاد العرب، إذا أُخذت على العموم، «تشغل تلك الرقعة الواسعة من الأرض التي تمتدّ كأنّها شبه جزيرةٍ بين البحر الأحمر، أو الإريتري، من جهة الغرب، والخليج العربي من جهة الشرق». ويقسمها ثلاثة أقسام: السعيدة والحجرية والصحراوية.

<figure class="art-fig"><img src="articles/24/1.webp" alt="خريطة هولندية مخطوطة لخليج مسقط وقلعتيه ومطرح" width="1600" height="1087" loading="lazy" /><figcaption><span class="fig-cap">خريطةٌ هولنديةٌ مخطوطةٌ لخليج مسقط كما يبدو للقادم من بحر عُمان: مسقط القديمة بين قلعتي الجلالي والميراني، وإلى اليمين مطرح (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 31</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: ديرك فان دير فِلدن، 1682، مكتبات جامعة لايدن</span></figcaption></figure>

ويشرح المحقق هذا التقسيم: «قسّم الجغرافيون الرومان جزيرة العرب ثلاثة أقسام: العربية الصحراوية (Arabia Deserta) وهي البادية الداخلية، والعربية السعيدة (Arabia Felix) وهي الجنوب، والعربية الحجرية (Arabia Petraea) وكانت ولايةً رومانيةً معظمها في الأردن اليوم».

ويذكر المؤلف أن العرب يسمّون الأرض التي بين البحرين «اليمن». وينبّه المحقق إلى أن المؤلف توسّع، تبعًا لمصادره، «فجعل «العربية السعيدة» كلّ ما بين البحر الأحمر والخليج العربي، فأدخل فيها الحجاز وعُمان».

## خيل الأحساء

يقول المؤلف عن العربية السعيدة إن فيها «تربيةٌ واسعةٌ للخيل الكريمة الأصل، الخفيفة القويّة الحسنة الخِلقة». ويضيف أنها تصبر على الجوع والعطش أكثر من سائر الخيل، وأنه «تمرّ سنون يخرج فيها من موانئهم إلى الهند خمسة عشر ألف فرسٍ أو عشرون ألفًا».

ويقول إن أغلاها ثمنًا خيل الأحساء ونواحيها، مقابل جزيرة البحرين. ويعرّف المحقق الأحساء بأنها «واحةٌ وناحيةٌ تاريخية في شرق المملكة العربية السعودية، تُعرف قديمًا بـ«هَجَر»». ويضيف: «وهي من أكبر مواطن النخيل في العالم».

ويذكر المؤلف أن الفرس الواحد من خيل الأحساء يُباع بألفي باتاكة، «إذا كان من الصنف الذي يسمّونه «خيل الملك»، لأنّ الملوك وحدهم هم الذين يشترونها». ويقول إن أكبر دخل لجمرك غوا في الزمن الماضي كان من رسوم تجّار الخيل. ويؤكد المحقق ذلك: «كانت تجارة الخيل العربية والفارسية إلى الهند من أكبر موارد هرمز وغوا في القرن السادس عشر».

## الثمار وبذر «الكاوه»

يعدّد المؤلف ثمار الأرض: «التمر بكلّ أصنافه، والعنب بأنواعٍ كثيرة، والبطّيخ والسفرجل، والرمّان والبرقوق، والتين طوال السنة». ويذكر أجود اللبان، وشيئًا من الزيت.

<quote by="الأب مانويل غودينيو اليسوعي" source="«الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»">تشغل تلك الرقعة الواسعة من الأرض التي تمتدّ كأنّها شبه جزيرةٍ بين البحر الأحمر، أو الإريتري، من جهة الغرب، والخليج العربي من جهة الشرق</quote>

ثم يذكر بذر «الكاوه». ويقول إنه يُشرب في بلاد المسلمين «بعد أن يُحمَّص ويُطحن ويُغلى في الماء»، ويعتقدون أنه يقوّي المعدة. لكنه يظنّه بذر الشوكولاتة نفسه. ويصحّح المحقق: «في الأصل caoe، وهو «القهوة» (البنّ). وقول المؤلف إنّه بذر الشوكولاتة نفسه خطأ، فالقهوة تُصنع من بذور شجر البنّ، والشوكولاتة من بذور الكاكاو».

ويقول المؤلف إن القطن قليل، فيأتيهم من الهند، وإن عامّة الناس يلبسون «الكمبلي». ويشرحه المحقق بأنها كلمة دخلت البرتغالية من الهند، «ومعناها كساءٌ أو بطانيةٌ من الصوف الخشن».

ويذكر أن قوتهم المعتاد «التمر والسمك وبعض البقول والجبن واللبن الرائب، ولحم الماعز». ويذكر الكباش «ذوات الأرباع الخمسة»، ويفسّرها المحقق: «يريد الأغنام ذوات الإلية الضخمة، كأنّ إليتها ربعٌ خامس».

## اللباس والسلاح

يقول المؤلف إن العرب «في لباسهم على غاية الاعتدال». فهم لا يلبسون، أغنياء كانوا أو فقراء، إلا قباءً أو ثوبًا طويلًا من الحلق إلى طرف القدم. وعلى الرأس قلنسوة حمراء، يسترون أكثرها بالعمامة، «فتتدلّى أطرافها من خلفهم على أكتافهم».

ويصف مهارتهم في الرمي بالبنادق. فإذا أرادوا الرمي أسندوا البندقية، فإن لم يجدوا ما يسندونها إليه «جلسوا وجعلوا من أصابع أقدامهم مِسندًا». ويقول: «ويُعدّ عندهم راميًا رديئًا من سدّد إلى العين فأصاب الحاجب». ويصفهم بأنهم «فرسانٌ مَهَرةٌ بالركاب وبغير ركاب».

## بنو جبر

يذكر المؤلف في العربية السعيدة قبيلة يسمّيها «بني جبر»، ويقول إنها من أقوى قبائلها، «إذ تبسط سلطانها على ما يقرب من ثلاثمئة فرسخٍ في الدائرة». ويضع المحقق الخبر في زمنه الصحيح: «بنو جبر (الجبريون): أسرةٌ عربية من أصلٍ عُقيلي حكمت الأحساء والقطيف والبحرين في القرنين الخامس عشر والسادس عشر، وأشهر أمرائها أجود بن زامل (ت. 1496)».

ويضيف المحقق أنه كان لهم شأن في إحياء الإمامة الإباضية في عُمان، «إذ نصّبوا عمر بن الخطاب الخروصي إمامًا سنة 1487». وينبّه إلى أن ما يرويه المؤلف عنهم منقول عن باروش، «فهو من أخبار القرن السادس عشر لا من أحوال زمن المؤلف».

## خبر الإمامة كما نقله

يقول المؤلف إن أقوى سيّد في بلاد العرب في وقته «يسمّى «الإمام»». وينقل عن المؤرخ البرتغالي جواو دي باروش خبرًا عن ثلاث مدن في داخل عُمان هي منح ونزوى وبهلا، «كلّها مسوّرةٌ بأسوارٍ قويّةٍ جدًّا من الطين المدكوك». ويروي أنها اتحدت واتخذت عالمًا من بهلا رأسًا لها.

<figure class="art-fig"><img src="articles/24/2.webp" alt="نقش قديم لمدينة مسقط من البحر والحصون على الجبال حولها" width="1600" height="1298" loading="lazy" /><figcaption><span class="fig-cap">منظر مدينة مسقط «Maskate» من البحر، والحصون على الجبال من حولها (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 35</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: نقشٌ لياكوب فان مُورس، نحو 1680، المكتبة الملكية الهولندية (أطلس التراث المشترك)</span></figcaption></figure>

ويعرّف المحقق المدن الثلاث: «منح ونزوى وبهلا: من مدن داخلية عُمان (محافظة الداخلية اليوم). ونزوى كانت قاعدة عُمان الداخلية ومركزًا للعلم، وفي بهلا قلعةٌ من القرن الثالث عشر مدرجةٌ في التراث العالمي».

ويضبط المحقق الخبر نفسه: «خبر باروش هذا عن نشأة الإمامة يتعلّق بالقرن الخامس عشر وأوائل السادس عشر. والإمامة في عُمان أقدم من ذلك بكثير، وهي عند الإباضية منصبٌ انتخابي». ويضيف أن الذين أخرجوا البرتغاليين من الساحل هم أئمة اليعاربة في القرن السابع عشر: «ناصر بن مرشد (حكم 1624–1649) ثم سلطان بن سيف».

## قلعة مسقط

يقول المؤلف إن قلعة مسقط بناها بلشيور كالاسا سنة 1588 بأمر الحاكم مانويل دي سوزا كوتينيو. ويضيف المحقق: «وفي ثمانينيات القرن السادس عشر بنى البرتغاليون في مسقط قلعتي الجلالي والميراني بعد أن نهبها الأسطول العثماني مرّتين». ويصحّح المحقق العرض الذي ذكره المؤلف: «عرض مسقط الصحيح نحو 23 درجة و37 دقيقة شمالًا».

ويصف المؤلف الخليج: «وهي داخل خليجٍ يقع بين جبلين عاليين عظيمين يحميانه من الرياح كلّها». ويقول إنه يتّسع «لأن يرسو فيه اثنا عشر غليونًا وستٌّ وعشرون غليوطة». ومدخله بعرض «قدر مرمى البندقية»، ثم يتّسع كلّما توغّل إلى الداخل. ويذكر أن العمق عند فمه من عشرين قامة إلى خمس وعشرين، وفي داخله اثنتا عشرة وثلاث عشرة، «حتى يبلغ ستًّا قرب الشاطئ». ويشرح المحقق القامة بأنها «وحدةٌ لقياس عمق الماء، وهي نحو 1.8 متر».

ثم يصف التحصينات واحدًا بعد واحد: برجًا على يمين الداخل فوق الصخور، ثم «الدرع»، ثم «الأُذُن» الذي فيه خمسة مدافع موجّهة إلى جبل «المقلّى». ويشرح المحقق المصطلحات: «فالـ«couraça» سورٌ يمتدّ من القلعة إلى الماء ليحمي الوصول إليه، والـ«orelhão» نتوءٌ مستديرٌ في كتف البرج يحمي المدافع».

ويذكر أن مخزن الذخائر والسجن «منقورٌ في الصخر نفسه». ويقدّر طول الخليج من طرف إلى طرف بثمانمئة خطوة، وعرض البلدة بمئة خطوة، ويقول إنها كانت «مسوّرةٌ من جهة البرّ ومن جهة الخليج بأسوارٍ عاليةٍ غليظة، فيها ستّة أبراجٍ».

وعلى يسار الخليج «حصن المُشرِف»، وإنما سمّي بذلك لأن موضعه يُشرف على القلعة. ويقول المؤلف إنه كان للبرتغاليين في القلعة وما حولها «مئةٌ وسبعة وعشرون مدفعًا بين كبيرٍ وصغير»، وألف جندي في الحامية.

## قلاع الساحل من قريات إلى مدحاء

يقول المؤلف إن قلعة مسقط كانت قاعدة ممتلكات البرتغاليين على الساحل، وكانت «سبعةً وثمانين فرسخًا من الساحل، تبدأ من رأس الحدّ وتنتهي برأس مسندم». ويعدّد عشر قلاع كانت تابعة لقائدها: قريات، ومطرح، والسيب، وبركاء، وصحار، وكلباء، وخورفكّان، و«ليبيديا»، ومدحاء، و«دوها». ويضيف: «وكان لبحر مسقط أيضًا قائده، وأسطولٌ من عشرين مركبًا بالمجاديف».

ويعرّف المحقق هذه المواضع في حاشية طويلة. فقريات «بلدةٌ ساحليةٌ على نحو 83 كم جنوب شرق مسقط». وصحار «كانت قاعدة عُمان القديمة وتسمّى «مزون»». وعن كلباء وخورفكّان يقول: «على ساحل بحر عُمان، وهما اليوم من إمارة الشارقة في دولة الإمارات».

ويقف المحقق عند «ليبيديا» خاصّة: «هي البدية على ساحل إمارة الفجيرة، وفيها مسجدٌ تاريخيٌّ يُعدّ أقدم مسجدٍ عامرٍ في الدولة». ويضيف أن علماء آثار أستراليين كشفوا فيها بقايا حصن من العهد البرتغالي كان يسمّى «ليبيديا»، وعُرف من خريطة من القرن السادس عشر.

## الإمام يأخذ مسقط

يقول المؤلف إنه لم يكفِ كل أولئك القادة والمدافع والحصون والجنود «لحمايتها من الإمام». فقد أخذها بعد أن استولى أولًا على الحصون التي تحمي الجبال وعلى القلاع الساحلية. ويحدّد المحقق: «أخذ الإمام سلطان بن سيف اليعربي مسقط من البرتغاليين في يناير 1650، فانتهى بذلك احتلالهم الطويل لها».

ويذكر المؤلف أن الإمام لم يقف عند ذلك، فحاصر ممباسا، وأخذ أسطوله سفن البرتغاليين في البحر. ويفصّل المحقق: «أغار أسطول الإمام سلطان بن سيف على البرتغاليين في بومباي سنة 1655 ثم سنة 1661، وعلى ديو بعد ذلك، وأرسل جيشًا حاصر قلعة ممباسا على ساحل شرق أفريقيا استجابةً لطلب أهلها».

## القربة: صورة الخليج عند مسندم

بعد مسقط سار المركب يومين على ساحل بلاد العرب حتى رأس مسندم. ويقول المؤلف إن مسندم ورأس جاسك المقابل له في فارس «يصنعان حلق المضيق». ويضيف: «إذ تقترب فيه أرض فارس من أرض العرب حتى يُخيَّل أنّ الجبال هناك تتصافح».

ويستعير تشبيهًا للخليج كلّه: «ولم يُخطئ من شبّه ذلك البحر، على سبيل التشبيه الغليظ، بقربةٍ لها فمٌ واسعٌ بعض الشيء، ثم تضيق عند العنق، ثم تتّسع في البطن».

ويصف جبال مسندم بعد أن نجا المركب من عاصفة: «وهو مؤلَّفٌ من جبالٍ كثيرةٍ عالية، غير ممتدّةٍ طولًا، بل كأنّها أنابيب الأرغن». ويقول: «فإذا جاوزت جبلًا ظهر لك آخر كان خلفه».

ويعرّف المحقق مسندم: «شبه جزيرةٍ جبليةٍ في أقصى الشمال الشرقي من جزيرة العرب، بين الخليج العربي وبحر عُمان، يطلّ عليها مضيق هرمز، وتتقاسمها اليوم سلطنة عُمان ودولة الإمارات العربية المتحدة».

## خاتمة

يجمع الفصل العاشر من رحلة غودينيو بين ما قرأه المؤلف في كتب البرتغاليين وما رآه أو سمعه في طريقه. ففيه خيل الأحساء التي كانت تُصدَّر بالآلاف إلى الهند، وبذر القهوة الذي ظنّه المؤلف شوكولاتة، ووصف دقيق لقلعة مسقط وحصونها، وقائمة بقلاع الساحل من قريات إلى البدية ومدحاء. وتربط حواشي المحقق هذه الأسماء القديمة بمواضعها اليوم في عُمان والإمارات، وتصحّح ما نقله المؤلف من أخبار الإمامة، وتثبت تاريخ تحرير مسقط على يد الإمام سلطان بن سيف اليعربي.

## المصدر

- الكتاب: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، تأليف: الأب مانويل غودينيو اليسوعي (Manuel Godinho)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل العاشر ص 23–32 (أقسام بلاد العرب ص 23–24، الخيل والثمار والقهوة ص 24–25، اللباس والسلاح وبنو جبر ص 26، الإمامة ص 28–29، قلعة مسقط ص 29–31، قلاع الساحل وأخذ مسقط ص 31–32)؛ والفصل الحادي عشر ص 36–38 (مسندم).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`29-shiraz-persepolis-basra-valentyn`,`30-godinho-desert-1663`,`10-bandarabbas-muscat-aucher-eloy`]},{slug:`25-basra-ahwaz-1831-stocqueler`,title:`من البصرة إلى الأهواز سنة 1831: داود باشا ومشروع البواخر وأطلال كارون`,author:`ج. هـ. ستوكيلر`,category:`التاريخ`,categorySlug:`history`,date:`2026-10-17`,cover:`articles/25/1.webp`,excerpt:`في ربيع 1831 كان الضابط الإنجليزي ج. هـ. ستوكيلر عالقًا في البصرة، يبحث عن طريق برّي إلى أوروبا.`,tags:[`البصرة`,`الأهواز`],sample:!1,book:`خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)`,coverCaption:`غرق الباخرة «تيغريس» في عاصفةٍ على الفرات، كما رُئيت من الباخرة «يوفريتس»، أثناء بعثة الفرات البريطانية (1835–1837) لتجربة الملاحة البخارية في النهر (صورة أضافها المحقق) — المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 50`,era:`1831`,eraSort:1831.2,words:1744,minutes:9,body:`في ربيع 1831 كان الضابط الإنجليزي ج. هـ. ستوكيلر عالقًا في البصرة، يبحث عن طريق برّي إلى أوروبا. وكانت المدينة قد أصابها الطاعون، وبغداد في نزاع بين واليها داود باشا والباب العالي. فخصّص المؤلف الفصل الثالث من كتابه لسيرة داود باشا ولمقترح تسيير البواخر في دجلة والفرات، ثم روى في الفصل الرابع رحلته صعودًا في نهر كارون إلى أطلال الأهواز.

نقرأ هنا ما في الفصلين من معلومات عن العراق وخوزستان في تلك السنة، مع حواشي المحقق التي تضبط التواريخ وتعرّف الأعلام والمواضع.

## البصرة في أيام الطاعون

عاد المؤلف إلى البصرة بعد رحلة قصيرة، فوجدها قد تبدّلت في سبعة أيام. يقول: «فقد انتشر خبر اقتراب الطاعون، فبثّ الذعر في أرجاء المدينة، ودفع الألوفَ من أهلها إلى الفرار منها». ويصف المشهد: «فالدكاكين مغلقة، والتجارة واقفة، والشوارع مقفرة، والبيوت خالية». والخور الذي كان يضجّ بالحركة «لا يكاد يتحرّك على صفحته قارب».

<figure class="art-fig"><img src="articles/25/1.webp" alt="رسم لباخرة تغرق في عاصفة على نهر الفرات وباخرة أخرى قريبة منها" width="1417" height="871" loading="lazy" /><figcaption><span class="fig-cap">غرق الباخرة «تيغريس» في عاصفةٍ على الفرات، كما رُئيت من الباخرة «يوفريتس»، أثناء بعثة الفرات البريطانية (1835–1837) لتجربة الملاحة البخارية في النهر (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 50</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: رسم إستكورت، 1836</span></figcaption></figure>

ويروي طرفة عن الآغا فارسيغ، وكيل المقيمية الأرمني. فقد أخبره المؤلف أن على مركب المقيم ثلاث «حالات» طاعون، فظنّ الرجل أن الكلمة الإنجليزية تعني «صندوقًا». ويشرح المحقق: «يلعب المؤلف على لفظ «case» في الإنجليزية، فهو يعني «الحالة» المرضية، ويعني كذلك «الصندوق» الذي تُعبّأ فيه البضاعة».

## من هو داود باشا؟

يقول المؤلف إنه منذ عهد سليمان باشا الكبير وخلفه علي باشا «لم يظهر على رأس الباشوية رجلٌ أوفر عقلًا، وأوسع سلطانًا وأشدّ استبدادًا من داود». ويعرّف المحقق سليمان باشا الكبير بأنه «من ولاة المماليك في العراق، تولّى ولاية بغداد والبصرة وشهرزور سنة 1780، وحكم إلى وفاته سنة 1802». ويضيف أنه «في عهده أُذن سنة 1798 بتعيين وكيلٍ بريطانيٍّ دائمٍ في بغداد».

ويروي المؤلف أن داود كان قبل نحو ستة عشر عامًا «الدفتردار أفندي». ويشرح المحقق اللقب: «الدفتردار: لقبٌ عثمانيٌّ أصله فارسيّ، معناه «صاحب الدفاتر»، وكان يُطلق على المسؤول عن الشؤون المالية وسجلّات الضرائب». ويقول المؤلف إن داود اعتزل زمنًا «متستّرًا بقناعٍ لا طموح فيه، هو قناع أستاذٍ للفقه». ثم خرج إلى إقليم الخالص، وعاد فتولّى الحكم. ويعرّف المحقق الخالص بأنها «بلدةٌ في محافظة ديالى بالعراق»، على نحو 55 كيلومترًا شمال شرق بغداد.

## بين كرمانشاه والسليمانية

يذكر المؤلف أن داود استعان في أول أمره بمحمد علي ميرزا، أمير كرمانشاه، ثم صار هذا الأمير خصمه، فزحف «حتى كاد يبلغ أسوار بغداد». ويروي المحقق القصة كاملة: «وفي الحرب العثمانية الفارسية (1821–1823) زحف على بغداد وحاصرها، فدافع عنها داود باشا، وفي طريق عودته إلى كرمانشاه أصيب بما يُظنّ أنه الهيضة (الكوليرا) فمات سنة 1821، ودُفن في كربلاء».

<quote by="ج. هـ. ستوكيلر" source="«خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»">وإنّ نفع هذين النهرين العظيمين بوصفهما طريقًا للنقل إلى رأس الخليج العربي أمرٌ واضحٌ لكلّ من يتأمّل لحظةً موقعهما الجغرافي</quote>

ويذكر المؤلف أيضًا صاحب السليمانية الكردي. ويعرّف المحقق السليمانية بأنها «قاعدة إمارة بابان الكردية التي قامت من القرن السادس عشر إلى سنة 1850». ويضيف أن البابانيين بنوا المدينة الحديثة سنة 1784. ويذكر المؤلف أن داود ضمن لمصلحته القبائل العربية الكبيرة في جنوب الباشوية، من المنتفق وبني لام. ويعرّف المحقق بني لام بأنها «قبيلةٌ عربيةٌ من وسط الجزيرة العربية وجنوب العراق، تنتسب إلى طيّئ».

## جيش وترسانة ومطبعة

يذكر المؤلف أن داود سعى «بكلّ وسيلةٍ ممكنةٍ إلى إنشاء قوّةٍ عسكريةٍ نافعة». ويقول: «فكان حرسه ثلاثة آلاف رجلٍ مسلّحين على الطريقة الأوروبية، يدرّبهم ضبّاطٌ إنجليز وفرنسيون». وجعل ترسانته تحت إدارة إيطالي، وطلب الصنّاع الأوروبيين. ويضيف: «وكانت التدابير جاريةً للشروع في الملاحة في دجلة والفرات بالسفن البخارية».

ويوسّع المحقق هذه الصورة: «من أعمال داود باشا التي تذكرها المصادر: تطهير الأنهار والقنوات، وإنشاء الصناعات، وإصلاح الجيش بمعونة مدرّبين أوروبيين، وإنشاء مطبعة».

## نهاية الحكم

يروي المؤلف أن الباب العالي طالب داود بالمال في أثناء الحرب مع روسيا، فوقع الخلاف. ثم أُرسلت قوّات من الباشويات المجاورة، «فقاوم، وصمد بضعة أشهر». ويضبط المحقق الوقائع: «سنة 1830 أصدر السلطان أمرًا بعزل داود باشا». ويضيف: «وفي سنة 1831 زحف الجيش العثماني بقيادة علي رضا باشا من حلب إلى العراق، فاستسلمت بغداد بعد حصارٍ دام عشرة أسابيع، وقد أنهكتها الفيضانات ووباء الطاعون».

ويظنّ المؤلف أن داود مقيم في مكان ما قرب البوسفور. ويكمل المحقق قصّته: «تذكر المصادر أنّ داود باشا عومل بعد استسلامه بالحسنى، وأنه توفّي سنة 1851 وهو شيخ الحرم النبوي في المدينة المنوّرة».

## مشروع البواخر

يرى المؤلف أن دجلة والفرات طريق طبيعي إلى رأس الخليج العربي: «وإنّ نفع هذين النهرين العظيمين بوصفهما طريقًا للنقل إلى رأس الخليج العربي أمرٌ واضحٌ لكلّ من يتأمّل لحظةً موقعهما الجغرافي». لكنه يرى أن المشروع أكبر من أن ينهض به الأفراد، «ولا يمكن أن يُشرع فيه بنجاحٍ إلا بالاشتراك بين الحكومتين البريطانية والبغدادية».

ويعدّد العقبات. فأولًا «لا بدّ من بذل عنايةٍ كبيرةٍ في إزالة الصخور الكثيرة في أعالي الفرات». ثم لا بدّ من استمالة القبائل الساكنة على ضفاف النهرين. ثم يأتي بناء البواخر نفسها، «ويجب أن تكون على هيئةٍ مختلفةٍ كلّ الاختلاف عن السفن التي تجري في أنهار أوروبا وقنواتها»، ولهذا يرى أنها يجب أن تُبنى في الموضع الذي ستُستعمل فيه.

ويذكر المؤلف في حاشية أن ضابطًا من المدفعية البريطانية اشتغل بمسح الفرات اخترع قاربًا يلائم النهرين. ويرجّح المحقق: «لعلّه يريد فرانسيس رودن تشيسني (Francis Rawdon Chesney) (1789–1872)، ضابط المدفعية الملكية البريطانية الذي أُرسل إلى القسطنطينية سنة 1829، واقترن اسمه باستكشاف وادي الفرات».

## قار هيت وقودًا

ويقترح المؤلف حلًّا لمشكلة الوقود في بلاد قليلة الحطب والفحم. يقول إن في جوار هيت على الفرات «عيونٌ كثيرةٌ من القار، يبدو أنه إذا مُزج بالزيت كان بديلًا ممتازًا من الوقود». ويعرّف المحقق هيت: «مدينةٌ في محافظة الأنبار بالعراق على الفرات، شمال غرب الرمادي، عُرفت منذ القدم بعيون القار». ويضيف أن قارها استُعمل «في بناء بابل قبل أكثر من ثلاثة آلاف سنة، وفي قلفطة القوارب».

<figure class="art-fig"><img src="articles/25/2.webp" alt="لوحة قاجارية لملك جالس بلباس مرصّع" width="724" height="1600" loading="lazy" /><figcaption><span class="fig-cap">فتح علي شاه القاجاري، ملك فارس (حكم 1797–1834) (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 60</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: لوحةٌ لمهر علي، 1813–1814 (متحف الإرميتاج)</span></figcaption></figure>

## صعودًا في كارون

في السابع من مايو 1831 غادر المؤلف البصرة في زيّ عربي، قاصدًا تستر عن طريق نهر كارون. ويعرّف المحقق تستر: «تُستَر (Shuster في الأصل)، وتسمّيها إيران اليوم «شوشتر»: مدينةٌ قديمةٌ حصينةٌ في محافظة خوزستان». ويضيف أنها «اشتهرت بنظامها المائي القديم المسجّل في قائمة التراث العالمي لليونسكو».

ومرّ المركب بقناة الحفّار. ويشرحها المحقق: «الحفّار (Hafar في الأصل): القناة التي تصل كارون بشطّ العرب عند المحمّرة، وتنسبها المصادر إلى عضد الدولة البويهي». وبعد أميال قليلة اختفت بساتين النخيل، «ولم تعد ضفّتا النهر تبديان إلا شريطًا ضيّقًا من الطرفاء وغيرها من الشجيرات البرّية».

ومشى المؤلف على البرّ والجرّارون يجرّون المركب في النهر، فعبر خمسة من مجاري القنوات القديمة الجافّة. ويقول: «ولولا ما يظهر بين حينٍ وآخر من الظباء والأرانب وبنات آوى والذئاب والأسود لظنّ المرء الضفّتين مقفرتين تمامًا». ويعلّق المحقق على ذكر الأسود: «يريد الأسد الآسيوي، وقد كان إلى القرن التاسع عشر منتشرًا من جزيرة العرب وشرق تركيا وإيران وبلاد ما بين النهرين إلى وسط الهند».

## أطلال الأهواز

في الحادي عشر من مايو بلغ المؤلف الأهواز. واستعان في ارتياد أطلالها بنجّار من «كَچ» مقيم هناك «يتكلّم الهندوستانية بإتقانٍ لافت». ويعرّف المحقق كَچ بأنها «إقليمٌ في غرب الهند، هو اليوم من ولاية گجرات».

ويعرّف المحقق الأهواز: «مدينةٌ على ضفّتي نهر كارون، وهي اليوم مركز محافظة خوزستان». ويشرح أصل اسمها: «والاسم في المصادر صيغة جمعٍ عربيةٌ من اسم «الهُوز» أهلِ الإقليم القدماء، ومنه اسم «خوزستان»».

ويقول المؤلف إنه قابل ملاحظاته بمخطّط الأهواز في كتاب الكابتن مينيان، وأشاد بدقّته. ثم يقول إنه توغّل شرقًا يطلب منتهى الأطلال، «ولكنّي بعد رحلةٍ تزيد على ثلاثين ميلًا عدلتُ عن الطلب».

ويذكر أنه وجد لاحقًا في بندر معشور أطلالًا على الطراز نفسه، «تكثر فيها الفخّاريات والزجاج البلّوري والفصوص المنقوشة بالخطّ الكوفي». ويعرّف المحقق بندر معشور بأنها «مدينةٌ ومرفأٌ في محافظة خوزستان، تسمّيها إيران اليوم «بندر ماهشهر»».

## اليوناني نيقولا

لم تكتمل الرحلة إلى تستر، فعاد المؤلف إلى المحمّرة في 16 مايو. وهناك علم أن البصرة صارت معزولة، والطريق إليها مقطوع. فاستشار يونانيًّا مقيمًا هناك اسمه نيقولا، ويلقّب نفسه «صاحب خان نيقولا» بموجب فرمان من فتح علي شاه. ويعرّف المحقق الشاه: «فتح علي شاه القاجاري (1772–1834): ثاني ملوك الأسرة القاجارية في فارس، حكم من سنة 1797 إلى وفاته».

ويروي المؤلف سيرة نيقولا العجيبة: وُلد في جزيرة كورفو لأب إنجليزي وأمّ يونانية، وعمل في البحر، ثم خدم في فوج صقلّي، ثم تاجر في الآثار الإغريقية، ثم دخل الجيش الفارسي، وصار قائدًا عند البختيارية، ثم عُيّن حاكمًا لتستر.

## طبيب بلا شهادة

أشار نيقولا على المؤلف أن يعرض خدماته طبيبًا على شيخ المحمّرة، ليظفر بعونه في اجتياز البلاد إلى فارس. فعرض المؤلف صندوق أدويته، وشرح «فضائل الكالوميل والأفيون المحلول (اللودنوم) والراوند». ويشرح المحقق هذين الدواءين. فالكالوميل «كلوريد الزئبق، استُعمل دواءً من القرن السادس عشر إلى أوائل القرن العشرين، مع أنه كثيرًا ما سبّب التسمّم بالزئبق». واللودنوم «صبغةٌ من الأفيون المذاب في الكحول، كانت تُستعمل مسكّنًا قويًّا للألم».

ويعترف المؤلف بأنه كان «يجهل أسرار الجراحة جهلًا تامًّا». ويقول إنه قضى سبعة أيام في هذا العمل، وإنه حرص «على أن أتجنّب إتلاف حياة إنسان، وإن لم أوفَّق إلى تخفيف آلامها».

## العيد والجرّاحي

ثم استأذن المؤلف في المضيّ إلى بهبهان، فوعده الشيخ بحراسة إلى الفلاحية. وفي صباح اليوم التالي تهيّأ للرحيل بعد فطور لحم الضأن، «إذ كان ذلك يوم العيد». ويحدّد المحقق اليوم: «والأرجح أنه عيد الأضحى، فقد وافق العاشر من ذي الحجّة 1246هـ بالحساب التقريبي نحو 22 مايو 1831».

وسار القارب صعودًا في كارون حتى مصبّ الجرّاحي، ثم شرقًا عبر مستنقعات «تسكنها الطيور البرّية، ويعجّ فيها البعوض». ويعرّف المحقق الجرّاحي بأنه «نهرٌ كبيرٌ في خوزستان، ينبع من جنوب جبال زاگروس، ويجري غربًا حتى يصبّ في أهوار الفلاحية (شادگان)».

## خاتمة

يجمع الفصلان الثالث والرابع من كتاب ستوكيلر صورة لسنة مضطربة في رأس الخليج العربي: البصرة يخيّم عليها الطاعون، وبغداد في آخر أيام داود باشا، ومشروع البواخر على دجلة والفرات لا يزال فكرة على الورق. وفيهما أيضًا رحلة صعودًا في كارون إلى أطلال الأهواز، وقصة يوناني جوّال، وطبيب بلا شهادة. وتضيف حواشي المحقق ما لم يعرفه المؤلف من مصير داود باشا، وتربط الأسماء القديمة بمواضعها اليوم.

## المصدر

- الكتاب: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، تأليف: ج. هـ. ستوكيلر (J. H. Stocqueler)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثالث ص 43–51 (البصرة والطاعون ص 43–44، سيرة داود باشا ص 44–48، مشروع البواخر وقار هيت ص 49–51)؛ والفصل الرابع ص 53–61 (كارون ص 53–54، الأهواز وبندر معشور ص 54–55، نيقولا والتطبّب ص 58–60، العيد والجرّاحي ص 61).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`21-kuwait-1916-stuhlmann`,`28-bahrain-pearls-1618-silva`,`08-muscat-1817-heude`]},{slug:`26-pearl-origin-history-rosenthal`,title:`من الفيدا إلى خليج أغو: تاريخ اللؤلؤ وأصله وأولى تجارب استزراعه`,author:`ليونار روزنتال`,category:`التراث`,categorySlug:`heritage`,date:`2026-10-16`,cover:`articles/26/1.webp`,excerpt:`كتب تاجر اللؤلؤ الفرنسي ليونار روزنتال كتابه «في مملكة اللؤلؤ» بعد سنوات قضاها في التجارة بين باريس وبومباي والخليج العربي.`,tags:[`اللؤلؤ`],sample:!1,book:`في مملكة اللؤلؤ`,coverCaption:`«مولد اللؤلؤة» (La Naissance de la Perle) — المصدر: «في مملكة اللؤلؤ»، ص 9`,era:``,eraSort:0,words:1666,minutes:8,body:`كتب تاجر اللؤلؤ الفرنسي ليونار روزنتال كتابه «في مملكة اللؤلؤ» بعد سنوات قضاها في التجارة بين باريس وبومباي والخليج العربي. وقبل أن يصف المغاصات والأسواق، خصّص الفصول الأولى لثلاثة أسئلة: متى عرف الإنسان اللؤلؤ؟ وكيف يتكوّن؟ وهل يمكن صنعه أو استزراعه؟

نقرأ هنا ما يقوله الفصل الأول «اللؤلؤ في التاريخ» والفصل الثاني «أصل اللؤلؤ» والفصل الخامس «تربية محار اللؤلؤ»، مع حواشي المحقق التي تعرّف الأعلام وتصحّح ما احتاج إلى تصحيح.

## أقدم الجواهر

يبدأ المؤلف بقوله: «اللؤلؤ هبةٌ غامضةٌ كاملةٌ من هبات الطبيعة، وقد ظهر منذ فجر التاريخ، ولعله كان من أوائل الجواهر التي عرفها الإنسان». ويرجّح أن رجلًا من آكلي السمك على سواحل الهند اكتشفه وهو يفتح المحار الذي يقتات به. ويشرح المحقق هذا الوصف: «في الأصل «ichthyophage»، أي آكلو السمك، وهو وصفٌ أطلقه الجغرافيون الإغريق على أقوامٍ من سكان السواحل كان السمك عمادَ طعامهم».

<figure class="art-fig"><img src="articles/26/1.webp" alt="لوحة ملوّنة من رسم إدمون دولاك تصوّر مولد اللؤلؤة كما تخيّلته الأساطير" width="1260" height="1600" loading="lazy" /><figcaption><span class="fig-cap">«مولد اللؤلؤة» (La Naissance de la Perle)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 9</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

ويقول المؤلف إن شعوب آسيا والفرس والمصريين كانوا يملكون أغنى المغاصات في المحيط الهندي والبحر الأحمر والخليج العربي، «كان من الطبيعي أن يكونوا أسبق الناس إلى إدراك سحر هذه الجواهر وقيمتها». ويوضح المحقق اختياره للاسم: «وآثرنا في الترجمة الاسم المستعمل عند أهل المنطقة: الخليج العربي».

## في الهند والصين

يقول المؤلف إن كتب الفيدا «تتغنى بجمال حُليّ اللؤلؤ قبل الميلاد بأكثر من ألف عام». وينقل أسطورة قديمة عن قرابين العناصر: «قدّم له الهواءُ قوسَ قزح، والنارُ الشهاب، والأرضُ ياقوتةً، والبحرُ لؤلؤة».

أمّا الصينيون فقد قدّروا اللؤلؤ مبكرًا، «فقد كانوا يقبلونه في أداء الضرائب قبل المسيح بأكثر من ألفين وثلاثمئة عام». ويذكر المؤلف أن في أدبهم القديم إشارات غريبة إلى لآلئ بلغ من بريق بعضها «أن نارها كانت تكفي لطهو الأرز على بعد ألف متر!».

## عقد من شوش

ويقول المؤلف: «وفي فارس عُرف الولع باللؤلؤ منذ أبعد العصور». ويذكر أن النقود القديمة التي تمثّل ملكات فارس تُري آذانهنّ مزدانة باللآلئ. ثم يذكر كشفًا أثريًّا: فقد جاءت بعثة دي مورغان «ببقايا عقدٍ بديعٍ من اللؤلؤ عُثر عليه في شوش (Suse)، في تابوت أميرةٍ أخمينية».

<quote by="ليونار روزنتال" source="«في مملكة اللؤلؤ»">أن العرب الساكنين على شواطئ الخليج العربي كانوا قد لاحظوا أن المحارة إذا جُرحت أفرزت سائلًا خاصًّا إذا جفّ كان له بريقٌ لامعٌ متقزّح</quote>

ويقول إن العقد يرجع على الأرجح إلى القرن الرابع قبل الميلاد، «وهو محفوظٌ اليوم في متحف اللوفر». ويعرّف المحقق شوش بأنها «مدينةٌ قديمة في سفوح جبال زاغروس الدنيا، على نحو 250 كيلومترًا شرق دجلة»، وأنها «كانت عاصمة عيلام، ثم العاصمة الشتوية للإمبراطورية الأخمينية».

## في الكتب المقدّسة

ويقول المؤلف إن اللؤلؤ يرد كثيرًا في العهد القديم والإنجيل، وإن العبرانيين في التلمود، «والعرب في القرآن»، اتخذوه «رمزًا للجمال المثالي النقي». ويورد المحقق في حاشيته الآيتين: ﴿يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ﴾ [الرحمن: 22]، و﴿كَأَمْثَالِ اللُّؤْلُؤِ الْمَكْنُونِ﴾ [الواقعة: 23].

## الإغريق والرومان

يقول المؤلف إن الإغريق عرفوا اللؤلؤ عن طريق التجّار الفينيقيين، لكن استعماله لم ينتشر بينهم إلا بعد الحروب الفارسية، ولا يكاد يرد ذكره «إلا ابتداءً من عهد الإسكندر، أي من فتح الهند التي هي منشؤه».

ومن بلاد الإغريق انتقل الولع باللؤلؤ إلى روما. ويذكر المؤلف أن الرومان سمّوا اللؤلؤة «أُونيو»، ويعلّل بلينيوس ذلك «بقوله إن كل لؤلؤةٍ تولد فريدةً، ولا تشبه أبدًا لؤلؤةً أخرى». ويروي أن موكب نصر بومبي كان فيه تمثال له مصوّر باللؤلؤ، «وثلاثةٌ وثلاثون تاجًا من اللؤلؤ».

ويذكر قانون الإنفاق الروماني: «فقد حرّم قيصر حُليَّ اللؤلؤ على النساء اللواتي ليس لهن أولادٌ ولا أزواج، ولم يبلغن الخامسة والخمسين من العمر». ثم يقول إن الشغف لم يفتر، «فكان كاليغولا (Caligula) يكسو به حذاءه». ويذكر أن نيرون كان يرصّع به صوالجة الممثلين وأقنعتهم، وأن تاج قسطنطين الكبير وخوذته كانا مرصّعين به.

## من بيزنطة إلى أوروبا

يتابع المؤلف رحلة اللؤلؤ عبر العصور. فبيزنطة جمعت منه مجموعات هائلة بسيطرتها على التجارة بين آسيا وأوروبا. وفي القرنين الثاني عشر والثالث عشر تعلّم صاغة أوروبا «أسرار الفن المغربي الأندلسي»، وأفادوا منها «في استعمال اللؤلؤ على الطريقة الشرقية». ويشرح المحقق أن المقصود «فنون المسلمين في الأندلس والمغرب».

ويقول إن اللآلئ والأحجار الكريمة كانت في العصور الوسطى «احتياطًا ماليًّا». فكان الأمراء يحملون كنوزهم إلى الحرب، «ولهذا السبب ضاعت كنوزٌ كثيرةٌ من كنوز العصور الوسطى وتلفت».

ويذكر أن كاترين دي ميديشي جاءت إلى فرنسا بأجمل لؤلؤة في العالم حين زُفّت سنة 1535. ويصحّح المحقق التاريخ: «والمعروف أن زواج كاترين دي ميديشي بهنري، الابن الثاني للملك فرنسوا الأول، كان سنة 1533».

## دموع الملائكة وندى السماء

ينتقل المؤلف في الفصل الثاني إلى أصل اللؤلؤ. ويقول إن الشعراء رأوا فيه «تارةً دموعَ الملائكة، وتارةً عَبَراتِ النايادات أو حوريات البحر وقد استحالت جواهر».

ويرى المؤلف أن فكرة الدموع لا تزال حيّة في اعتقاد يلقى القبول أحيانًا، «بأن اللؤلؤ نذيرٌ بالدموع، أو أنه يجلبها على أصحابه». ويذكر أن ماري دي ميديشي، ملكة فرنسا، رأت في منامها أن ماساتها استحالت لآلئ، «وذلك في الليلة التي سبقت اغتيال هنري الرابع». ويعرّف المحقق هنري الرابع بأنه «ملك نافار ثم ملك فرنسا (1589–1610)»، اغتيل في باريس في 14 مايو 1610.

ويشرح كيف فسّر القدماء تكوّنه. فلمّا كان بريقه قريبًا من بريق قطرات الندى، انتهوا إلى «أن اللؤلؤ يتكوّن من قطرات ندى متبلورة». وكانوا يقولون إنه يستمد لونه من السماء عند الفجر، وإنه إذا أرعدت السماء «انطبق الحيوان من فرط الرعب، فبقيت الحبّات فارغةً مُجهَضة».

ويذكر أنهم زعموا أن الأصداف تعيش جماعات تحت إمرة ملك، كما يعيش النحل. ويرى أن هذه المعتقدات «جُمعت على الأرجح من كتب البراهمة السنسكريتية ومن كثيرٍ من آداب الشرق»، ثم نقلها بلينيوس وغيره.

## حبّة رمل وجرح

يقول المؤلف إن النظرية التي يُدافَع عنها بأشدّ قوة في زمنه هي «النظرية الطفيلية». أمّا هو فيرى «أن اللؤلؤة تتكوّن عقب جرحٍ يصيب الرخويّ، إمّا بفعل حيوانٍ، وإمّا بحبّة رملٍ أو أية مادةٍ غريبةٍ أخرى». فتسارع المحارة إلى حبس هذا الجسيم «في سلسلةٍ من الأغلفة الكروية».

<figure class="art-fig"><img src="articles/26/2.webp" alt="لوحة ملوّنة من رسم إدمون دولاك تصوّر أسطورة هندية قديمة عن اللؤلؤ" width="1267" height="1600" loading="lazy" /><figcaption><span class="fig-cap">«لؤلؤة المحارب» (La Perle du Guerrier): «تظهرين على العربة، وتتلألئين على الكنانة» (من نشيد الأثرفا فيدا في الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 20</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

ويقول: «وهكذا يولد في الألم هذا الأثرُ البديع من آثار الطبيعة». وينقل عن دوبوا قوله: «أجمل لؤلؤةٍ ليست إلا تابوتًا لامعًا لدودة».

## ممّ يتكوّن اللؤلؤ؟

يقول المؤلف إنه لا فرق، على وجه الدقة، بين مادة اللؤلؤ والصدف اللؤلؤي، «وإنهما لا يختلفان إلا في نِسَب العناصر التي يتألفان منها». ويورد تحليلًا للؤلؤة يجعل نحو 91.6 في المئة منها من «كربيد الكالسيوم». ويصحّح المحقق: «كذا في الأصل (carbure de calcium)، والصواب كربونات الكالسيوم، وهي المادة التي تتكوّن منها الأصداف واللؤلؤ».

ويشرح المؤلف «الماء»، وهو أهمّ صفات اللؤلؤ: البريق «الناشئ عن تقوّس الطبقات المتراكزة المختلفة التي يتألف منها». ويقول إن جماله يتوقف على عدد الصفائح وثخانتها، «ولهذا السبب لا يمكن لقطعةٍ من الصدف العادي، تُنحت على شكل اللؤلؤة وتُصقل، أن تكتسب أبدًا ماء اللؤلؤ الحقيقي».

## أربعة أشكال

يميّز المؤلف أربعة أشكال: المستدير، و«الأزرار»، والكمّثري، والباروكي. فالمستدير يوجد داخل الرخوي، «ويدين بشكله للسهولة التي يتحرك بها هناك». والكمّثري يقع عند حافة المصراعين، والباروكي في الغالب قرب عضلة المحارة.

ويذكر أن اللؤلؤ يتكوّن «في سنةٍ أو سنتين، وفي ثلاثٍ على الأكثر». ويقول إن المحارة تبلغ تمام نموّها بعد أربع سنوات، ثم «في نحو السادسة يموت الحيوان، فتنفتح الصدفة ويضيع ما فيها».

## العمق والأمّ التي تطرد لؤلؤتها

يقول المؤلف إن الناس ظلّوا زمنًا يعتقدون أن أجمل اللؤلؤ يوجد في المياه العميقة، «غير أن نتائج التجارب التي أُجريت لم تكن مُرضيةً في الأعماق التي تزيد على عشرة أمتارٍ أو اثني عشر مترًا». فقد جُني منها صدف جميل، «ولكن القليل جدًّا من اللؤلؤ».

ويذكر أن كثيرًا من المحار، إذا تأذّى باللؤلؤة، «تمكّن من طردها من صدفته». ويستنتج من ذلك أن قيعان المحيطات تفترشها لآلئ كثيرة، من أجملها، «حيث لن تستطيع يدُ الإنسان، على الأرجح، أن تجنيه أبدًا».

## أقدم خبر عن عرب الخليج

يفتتح المؤلف الفصل الخامس بخبر ينسبه إلى أبولونيوس الرودسي: «أن العرب الساكنين على شواطئ الخليج العربي كانوا قد لاحظوا أن المحارة إذا جُرحت أفرزت سائلًا خاصًّا إذا جفّ كان له بريقٌ لامعٌ متقزّح». ويقول إنهم كانوا يضعون المحارة على غربال فوق إناء ماء، فيقطر السائل «قُطيراتٍ مستديرةً صدفية اللون». ويعلّق المؤلف بأنه منذ ذلك الحين «لم ينقطع البحث عن وسيلةٍ لصنع لؤلؤٍ مصطنع». ويعرّف المحقق أبولونيوس بأنه شاعر إغريقي قديم «اشتهر بملحمة «الأرغونوتيكا»».

## من الصين إلى اليابان

يقول المؤلف إن صناعة لآلئ الصدف قديمة جدًّا في الصين. ويضيف المحقق أن من أقدم ما دُوّن في تاريخ اللؤلؤ المستزرع «ما عُرف في الصين في عهد أسرة سونغ».

ويذكر المؤلف شركة في جزيرة قرب مِرغوي، تكتسي فيها الكرات الصدفية «في نحو عشرة أشهرٍ» طبقة من مادة اللؤلؤ. ويروي أن تجارب فيها أخفقت بسبب الأسلاك الحديدية، «فاضطُرّوا إلى استعمال أسلاكٍ حديديةٍ مطليّةٍ بالنيكل».

ويذكر أن السيد سالومون أقام في سيلان سنة 1916 مصنعًا «لتصوير المحار بالأشعة»، فيُفتح المحار الذي يحوي لآلئ كبيرة، ويُعاد الفارغ إلى البحر.

ثم يقول إن التربية تنتشر في اليابان، «ولا سيما في خليج «أغو» (Ago)». ويضيف المحقق: «وفيه ابتكر كوكيتشي ميكيموتو (1858–1954) طريقة استزراع اللؤلؤ سنة 1893، ثم رسخت في تلك الناحية صناعة اللؤلؤ المستزرع».

## شروط التربية وأعداء المحار

يضع المؤلف شروطًا لتربية محار اللؤلؤ. فالمحار حسّاس للبرد، فينبغي أن يُختار له موضع «تبلغ فيه الحرارة خمس عشرة درجةً على الأقل». وتُجتنب مصابّ الأنهار، لأن الماء العذب قد يضرّ بالحيوان. ويجب أن يكون القاع صخريًّا «على عمقٍ يتراوح بين ستة أمتارٍ وثلاثة عشر مترًا»، وافر النباتات البحرية التي يعيش عليها المحار.

ويعدّد أعداء المحار: الأخطبوط ونجم البحر والراي وسمك الزناد وغيرها. ويقول إن أخطرها الأخطبوط، «الذي يحمل كلّ ما يجده في طريقه من الأصداف ويفرغه». ويصف طريقة لصيده في دلاء قاعها من زجاج المرايا، «وهو الصيد بالمرآة».

## خاتمة

يتتبّع روزنتال اللؤلؤ من أساطير الفيدا وعقد شوش إلى تيجان روما وكنوز العصور الوسطى، ثم يشرح تكوّنه بلغة تاجر عارف بالعلم في زمنه. ويقف عند خبر قديم عن عرب الخليج العربي وهم يجرّبون استخراج بريق المحار، وعند أولى محاولات الاستزراع في الصين ومِرغوي وسيلان واليابان. وتصحّح حواشي المحقق ما ورد في النص من أخطاء في التواريخ والمصطلحات، وتعرّف الأعلام والمواضع.

## المصدر

- الكتاب: «في مملكة اللؤلؤ» (Au royaume de la perle)، تأليف: ليونار روزنتال (Léonard Rosenthal)، بلوحات إدمون دولاك؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الأول «اللؤلؤ في التاريخ» ص 10–15؛ الفصل الثاني «أصل اللؤلؤ» ص 17–23؛ الفصل الخامس «تربية محار اللؤلؤ» ص 45–49.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`13-batinah-musandam-dhaid-1902-cox`,`01-pearl-banks-rosenthal`,`27-famous-pearls-rosenthal`]},{slug:`27-famous-pearls-rosenthal`,title:`لؤلؤة إمام مسقط وسجّادة بارودا: لآلئ مشهورة وكيف لبسها الناس`,author:`ليونار روزنتال`,category:`الاقتصاد والتجارة`,categorySlug:`economy-trade`,date:`2026-10-15`,cover:`articles/27/1.webp`,excerpt:`يخصّص ليونار روزنتال الفصل الثاني عشر من كتابه «في مملكة اللؤلؤ» للآلئ المشهورة، والفصل الثالث عشر لطرائق لبس اللؤلؤ عند الأمم.`,tags:[`اللؤلؤ`,`مسقط`,`هرمز`],sample:!1,book:`في مملكة اللؤلؤ`,coverCaption:`لوحة لإدمون دولاك من فصل الأساطير، توضيحٌ لأسطورةٍ من أساطير اللؤلؤ: «لؤلؤة الحبّ» (La Perle de l'Amour): «كل هذه اللآلئ... تنيل كل ما يحبّه المرء ويتمنّاه» (الفصل الرابع عشر) — المصدر: «في مملكة اللؤلؤ»، ص 126`,era:``,eraSort:0,words:1699,minutes:8,body:`يخصّص ليونار روزنتال الفصل الثاني عشر من كتابه «في مملكة اللؤلؤ» للآلئ المشهورة، والفصل الثالث عشر لطرائق لبس اللؤلؤ عند الأمم. وفي الفصلين أخبار تتصل بالخليج العربي وعُمان، منها لؤلؤة كانت في حوزة إمام مسقط سنة 1670، ولؤلؤة اشتراها شاه فارس من تاجر عربي، وسجّادة من اللؤلؤ صارت اليوم في متحف قطر الوطني.

## هل المشهورة هي الأجمل؟

يبدأ المؤلف الفصل بسؤال: هل أجمل اللآلئ هي التي اشتهرت بأصحابها؟ ويجيب: «لا، بلا ريب؛ فالأرجح أن كثيرًا من اللآلئ المجهولة يفوق في الجمال تلك التي أسالت أكثر المداد».

<figure class="art-fig"><img src="articles/27/1.webp" alt="لوحة ملوّنة لإدمون دولاك بعنوان لؤلؤة الحبّ، تزيّن طبعة 1920 من الكتاب" width="1302" height="1600" loading="lazy" /><figcaption><span class="fig-cap">لوحة لإدمون دولاك من فصل الأساطير، توضيحٌ لأسطورةٍ من أساطير اللؤلؤ: «لؤلؤة الحبّ» (La Perle de l'Amour): «كل هذه اللآلئ... تنيل كل ما يحبّه المرء ويتمنّاه» (الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 126</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

ويستشهد بملكة تُدعى بوماريه كانت في زمانها «تلعب بالكُريات بلآلئ في حجم حبّات الكرز». ويعرّفها المحقق بأنها «ملكة تاهيتي من سنة 1827 إلى سنة 1877».

ويقول إن الوثائق الدقيقة عن الأحجار «حديثة المصدر نسبيًّا»، وإن الأساطير والروايات ظلّت زمنًا طويلًا وحدها تحدّث عن الجواهر الشهيرة. ويضيف أن كبر الحجم نفسه قد يكون سببًا للنقص، «فاللآلئ الكبيرة الكاملة الماء والشكل والصفاء قليلة العدد».

## قرطا كليوباترا

يقول المؤلف: «وأولى لآلئ التاريخ بلا ريبٍ هما اللؤلؤتان الكمّثريّتان اللتان كانتا قُرطين لكليوباترا». ويروي الخبر المشهور أنها أذابت إحداهما في الخلّ في مأدبة لمارك أنطونيو. لكنه يشكّ في التفاصيل: «إذ لو أُريد إذابة لؤلؤةٍ بهذا الكبر لاحتاج ذلك إلى أيامٍ عدّة، إلا أن تكون قد سُحقت أولًا أو نُقعت في حمضٍ شديد».

ويذكر أن الثانية حُملت إلى روما، «فأمر أوغسطس بنشرها شطرين ليجعل منهما قرطين لتمثال فينوس».

## البيريغرينا

ثم يذكر «البيريغرينا» التي اشتراها فيليب الثاني ملك إسبانيا سنة 1579. ويقول: «وكانت تزن أربعةً وثلاثين قيراطًا، في حجم بيضة الحمامة، على هيئة الكمّثرى». ويضيف المحقق تاريخها اللاحق: «من أشهر لآلئ العالم، تعاقب على ملكها ملوك إسبانيا، وامتدّ تاريخها قرابة خمسمئة سنة، وكانت في العصر الحديث للممثّلة إليزابيث تايلور». ويذكر أنها وُجدت في جزر اللؤلؤ قرب بنما.

<quote by="ليونار روزنتال" source="«في مملكة اللؤلؤ»">إذ لو أُريد إذابة لؤلؤةٍ بهذا الكبر لاحتاج ذلك إلى أيامٍ عدّة، إلا أن تكون قد سُحقت أولًا أو نُقعت في حمضٍ شديد</quote>

وينقل المؤلف عن الدوق دي سان سيمون أنه رآها ولمسها في البلاط، وأنها «من أجمل ماءٍ رُئي قط».

## من رودولف الثاني إلى ماري ستيوارت

ينقل المؤلف عن أنسلم بوئيس دي بوت أنه رأى لآلئ تحيط بتاج الإمبراطور رودولف الثاني. وقال إن كبراها كانت «في حجم الكمّثرى المسكية، تبدو كاملةً تامّة، تزن ثلاثين قيراطًا». ويقال إنها اشتُريت بألف إيكو من الذهب، «وهذا الثمن يبدو لي زهيدًا جدًّا».

ويذكر المؤلف، نقلًا عن بابست، أن كاترين دي ميديشي كانت تملك أجمل لآلئ الدنيا حين تزوّجت سنة 1533. وكان في حليّها لؤلؤتان كبيرتان كمّثريتان، «تزنان من 92 إلى 96 حبّة، أهداهما إليها فرنسوا الأول». ثم وهبتهما لماري ستيوارت ملكة اسكتلندا.

ويروي أن كثيرًا من لآلئ ماري ستيوارت بيع وضاع حين حلّت بها النكبات. وكلّفت كاترين سفير فرنسا أن يشتري لها ما كانت قد وهبته، «ولكن إليزابيث ملكة إنجلترا هي التي اقتنت جواهر عدوّتها».

## لؤلؤة في الثروة كلها

يروي المؤلف أن تاجرًا يدعى جورجيبوس الكاليسي جاء من الهند بلؤلؤة تزن مئة وستة وعشرين قيراطًا، فباعها إلى فيليب الرابع ملك إسبانيا بثمانين ألف دوكة. ويُروى أن الملك سأله: «كيف جرؤتَ على أن تضع ثروتك كلها في شيءٍ صغيرٍ كهذا؟» فأجاب التاجر: «مولاي، لقد ظننتُ أن في الدنيا ملكًا لإسبانيا يشتريها مني». فكافأه الملك بمنصب مستشار في مجلس الهند.

ويذكر المؤلف أيضًا أن السير توماس غريشام، في عهد الملكة إليزابيث، سحق لؤلؤة قيمتها خمسة عشر ألف جنيه وشربها في كأس، في يوم استقبل فيه سفير إسبانيا، «ليُريه أيّ ترفٍ يقدر عليه الإنجليز». ويذكر أيضًا أن البابا ليون العاشر كان يملك لؤلؤة «قيمتها ثلاثمئة وخمسون ألف فرنك، اشتراها من تاجرٍ بندقي».

## لؤلؤة الشاه صفي

يقول المؤلف إن الرحّالة والصائغ الفرنسي تافرنييه كان في القرن السابع عشر «من أوائل الخبراء الذين تبدو تقديراتهم سديدة». وقد فُتحت له أبواب قصور الأمراء في فارس والهند.

ومن اللآلئ التي يذكرها تافرنييه لؤلؤة الشاه صفي. ويصفها المؤلف بأنها «كمّثرية الشكل، أكبر لؤلؤةٍ وأكملها اكتُشفت قط، اشتُريت سنة 1633 من تاجرٍ عربي». ويقول إنها كلّفت الشاه اثنين وثلاثين ألف تومان. ويعرّف المحقق الشاه صفي بأنه «سادس شاهات الدولة الصفوية في إيران، حكم من 1629 إلى 1642».

## لؤلؤة إمام مسقط

ثم يذكر المؤلف لؤلؤة أخرى، «أصغر منها بكثير، وأجمل منها، أُعجب بها سنة 1670 في هرمز، وكانت في حوزة إمام مسقط». وينقل عن تافرنييه أنها لم تكن تزن إلا اثني عشر قيراطًا وجزءًا من ستة عشر، لكنها «كانت من الاستدارة والصفاء والبريق بحيث تبدو شفّافة، وتفوق في الجمال كل لآلئ الدنيا».

ويروي المشهد: «وفي آخر حفلٍ كبيرٍ أقامه له خان هرمز، أخرجها سلطان مسقط من كيسٍ صغيرٍ معلّقٍ في عنقه وأراها الحاضرين».

ويعرّف المحقق حكّام عُمان يومئذ: «كان الأئمة اليعاربة (آل يعرب) يحكمون عُمان يومئذٍ (1624–1742) بلقب الإمامة، وهم الذين أجلوا البرتغاليين من معاقلهم الساحلية في مسقط ووحّدوا البلاد». ويعرّف هرمز بأنها «جزيرةٌ عند مدخل الخليج العربي كانت قاعدة مملكة هرمز».

## عرش الطاووس

ويصف تافرنييه كذلك جواهر المغول الأعظم في الهند. ويقول المؤلف إن عرش الطاووس في دلهي كانت أجمل لآلئه «لؤلؤةً كمّثريةً صفراوية اللون تزن نحو خمسين قيراطًا». وكانت أعمدته الاثنا عشر محاطة بعناقيد من اللآلئ المستديرة. ويعرّف المحقق العرش بأنه «العرش الإمبراطوري لأباطرة المغول في الهند»، أمر بصنعه الإمبراطور شاه جهان.

## سجّادة بارودا

ومن كنوز الهند في زمن المؤلف كنوز «الغايكوار» صاحب بارودا. ويذكر منها «بساطٌ-شالٌ مصنوعٌ من اللؤلؤ المنظوم»، طوله عشرة أقدام ونصف وعرضه ستة أقدام. ويقول إنه كان، كما يروى، «معدًّا ليغطّي قبر النبي ﷺ».

<figure class="art-fig"><img src="articles/27/2.webp" alt="لوحة ملوّنة لإدمون دولاك بعنوان لؤلؤة الحيّة، تزيّن طبعة 1920 من الكتاب" width="1302" height="1600" loading="lazy" /><figcaption><span class="fig-cap">لوحة لإدمون دولاك من فصل الأساطير، توضيحٌ لأسطورةٍ من أساطير اللؤلؤ: «لؤلؤة الحيّة» (La Perle du Serpent): «فإذا أراد المرء أن يتعرّف هذه الجوهرة الممتازة... وضعها عارفون... على سطح قصر» (الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 93</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

ويكمل المحقق قصّتها إلى اليوم: «و«بساط اللؤلؤ» المذكور هو المعروف اليوم بـ«سجّادة بارودا اللؤلؤية»، وقد أمر بصنعه المهراجا خاندي راو غايكوار سنة 1865». ويضيف: «وهي اليوم في متحف قطر الوطني، الذي يعدّها من أبرز مقتنياته».

## لآلئ أوروبا

ويذكر المؤلف من لآلئ عصره لؤلؤة مجموعة «هوب»، «وهي أكبر لؤلؤةٍ في العالم، باروكيةٌ على هيئة القطرة، تزن 1800 حبّة». ويصحّح المحقق الاسم الذي جاء مشوّهًا في الأصل المصوّر، ويقول إن وزنها 1800 حبّة أي «90 غرامًا».

ويذكر لؤلؤة «الريجنت» التي جاء بها نابليون الأول من برلين، وتزن 337 حبّة، وقد زيّنت تاجًا لبسته الإمبراطورة ماري لويز. ويقول إن تاج فرنسا كان يملك، بحسب جرد سنة 1791، من اللؤلؤ ما قيمته مليون.

## «ملكة اللآلئ»

ويروي المؤلف أن مجموعة لآلئ تاج فرنسا لم تصبح ذات شأن حقيقي إلا في عهد لويس الرابع عشر. وفي سرقة ماس التاج سنة 1792 يُذكر خبر لؤلؤة محفوظة في علبة من ذهب كُتبت عليها عبارة «ملكة اللآلئ». ويقول إنها اشتُريت سنة 1669 بأربعين ألف ليرة، «وهي مقيّدةٌ في جرد سنة 1791 بمئتي ألف فرنك».

ويرجّح المؤلف أنها هي اللؤلؤة المستديرة التي صارت فيما بعد للأخوين زوزيما في موسكو، وسُمّيت «البيليغرينا». ثم قضى قانون 10 ديسمبر 1886 ببيع جزء كبير من جواهر التاج بالمزاد. فجرى البيع في 12 مايو 1887 في «جناح فلورا»، وكانت «الريجنت» من أجمل ما عُرض فيه. ويذكر المؤلف أن مجموع ما بيع من اللآلئ بلغ 1261800 فرنك.

## على السيوف وفي العمائم

ينتقل المؤلف في الفصل الثالث عشر إلى طرائق لبس اللؤلؤ. ويذكر عادة لافتة عند المحاربين الهنود: كانوا يحفرون في نصال السيوف مجرى، «ويُدخلون فيه من جهة المقبض لآلئ تمثّل مقدّمًا الدموع التي سيذرفها العدوّ».

ويقول إن الراجات كانوا يلبسون اللؤلؤ سلوكًا طويلة، «ويطرّزون به مناطقهم، ويلفّونه ضفائر غليظةً حول عمائمهم». ويذكر المسبحة ذات الأربع ومئة لؤلؤة التي حدّث عنها ماركو بولو. وينقل عن تافرنييه أنه لاحظ سنة 1670 أن أهل الوجاهة في الهند الغربية «يضعون في آذانهم لؤلؤةً تحيط بها حجرتان ملوّنتان».

ويصف المؤلف عادة من عادات العرس عند الهندوس: فالفتيات يلبسن يوم العرس عقدًا من اللؤلؤ الطبيعي ينزعه عنهن أزواجهن في المساء. ويقول إن النساء الهندوسيات يضعن كثيرًا لؤلؤة كبيرة في أعلى الأذن، ثم لآلئ تنحدر من الصدغين. ويذكر أن الحليّ المشتركة بين المسلمات هناك كانت العقود والأساور والخواتم والأقراط.

وفي فارس يقول المؤلف إن النقوش القديمة والمنمنمات تُري اللؤلؤ «صفوفًا على تيجان الملوك، وشراريب على العمائم، وعقودًا وأقراطًا». وفي الصين كانت تسريحة الإمبراطورة مرصّعة باللؤلؤ، وكان الصينيون يستعملونه أزرارًا «فيثقبونه بثقبين صغيرين».

## من البندقية إلى باريس

يروي المؤلف أن هنري الثالث، حين مرّ بالبندقية، بهره مشهد مئتي امرأة من النبيلات في قاعة المجلس الكبير، «وكانت زينة الرأس والعنق والصدر من اللؤلؤ». ويذكر أن الفلّاحات في فلورنسا كنّ يدّخرن من أجورهن ألف فرنك أو ألفًا وخمسمئة ليقتنين عقد اللؤلؤ.

وفي فرنسا يصف دخول إيزابو البافارية باريس سنة 1385، وثوبها «مطرّزًا كله باللؤلؤ الطبيعي والأحجار الكريمة». ويقول إن هنري دي لورين لُقّب «الأصغر ذي اللؤلؤة» لأنه كان يضع لؤلؤة في أذنه.

## ألوان تختارها البلاد

يلاحظ المؤلف، بعين التاجر، أن الأمم تختار ألوان اللؤلؤ بحسب لون البشرة. فإسبانيا والأرجنتين والبرازيل تشتري لآلئ قشدية اللون، «لأنها أوفق لبشرة السمراوات». والألمانيات والنمساويات والروسيات يؤثرن اللآلئ البيضاء. «وتختار الأمريكية والفرنسية اللآلئ الوردية والقشدية الخفيفة».

ويقول إن الولايات المتحدة «هي التي تشتري أجمل لآلئ الدنيا: اللآلئ الوردية». ولهذا فالعقد الذي قيمته في أوروبا عشرون ألف فرنك «كثيرًا ما يساوي فيها مئةً وخمسين ألفًا».

## العقد المتدرّج

ويصف المؤلف موضة جديدة في زمنه. فإلى ما قبل عشر سنين كان العقد يتألّف من لآلئ متساوية الحجم. أمّا العقود المتدرّجة فحديثة، «ونرى اليوم منها ما يبلغ تدرّجه ثمانين في المئة». فالعقد الذي تبدأ أطرافه بلؤلؤة من حبّتين تكون واسطته لؤلؤة من عشرين حبّة. ويقول إن الغاية من ذلك «ألّا ينقطع تناسق خطوط العنق»، وإن العقد صار يبلغ اثنين وأربعين سنتيمترًا بدل أربعة وثلاثين.

ويختم ملاحظًا أن الأنيقات في زمنه صرن «يلبسن اللؤلؤ على الموضة البدائية التقليدية عند الآسيويين».

## خاتمة

يجمع الفصلان قصص لآلئ تنقّلت بين الملوك والتجّار من كليوباترا إلى فيليب الثاني والشاه صفي. ومن بينها لؤلؤة صغيرة شفّافة أخرجها إمام مسقط من كيس في عنقه في هرمز سنة 1670، ولؤلؤة كبيرة اشتراها شاه فارس من تاجر عربي. وتربط حواشي المحقق هذه الأخبار بالحاضر، فتذكر أن سجّادة بارودا اللؤلؤية محفوظة اليوم في متحف قطر الوطني.

## المصدر

- الكتاب: «في مملكة اللؤلؤ» (Au royaume de la perle)، تأليف: ليونار روزنتال (Léonard Rosenthal)، بلوحات إدمون دولاك؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: 96–104 (الفصل الثاني عشر «اللآلئ المشهورة»)، 107–113 (الفصل الثالث عشر «كيف لُبس اللؤلؤ»)
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`28-bahrain-pearls-1618-silva`,`13-batinah-musandam-dhaid-1902-cox`,`20-oman-imams-aflaj-stuhlmann`]},{slug:`28-bahrain-pearls-1618-silva`,title:`البحرين ولؤلؤها في شروح سفارة غارسيا دي سيلفا (1617–1619)`,author:`دون غارسيا دي سيلفا إي فيغيروا`,category:`التاريخ`,categorySlug:`history`,date:`2026-10-14`,cover:`articles/28/1.webp`,excerpt:`كان دون غارسيا دي سيلفا إي فيغيروا سفيرًا لملك إسبانيا والبرتغال إلى الشاه عباس الأول.`,tags:[`البحرين`,`اللؤلؤ`,`البصرة`,`هرمز`],sample:!1,book:`هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)`,coverCaption:`الشاه عباس الأول الصفوي (صورة أضافها المحقق) — المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 89`,era:`1618`,eraSort:1618,words:1721,minutes:9,body:`كان دون غارسيا دي سيلفا إي فيغيروا سفيرًا لملك إسبانيا والبرتغال إلى الشاه عباس الأول. وقد قضى في فارس قرابة سنتين، وترك شروحًا طويلة لسفارته. وفي هذه الشروح فصل يصف فيه البصرة وجزيرة البحرين ومغاص اللؤلؤ والقطيف. وفيها أيضًا مقابلتان مع الشاه طالب فيهما السفير بردّ البحرين، الأولى في قزوين سنة 1618، والثانية في أصفهان سنة 1619.

ويقول المحقق في تمهيد الفصل إن المؤلف يبدأه بأطلال بابل والبطائح التي يصنعها فيضان الفرات، وإنه ترك ذلك كله، وبدأ الترجمة «من حيث يبلغ المؤلف ملتقى النهرين والبصرة، ثم يصف جزيرة البحرين ومغاص اللؤلؤ والقطيف».

## من بغداد إلى البصرة

يقول المؤلف إن الرحلة في النهر من بغداد إلى البصرة، والتيّار موافق، تستغرق «ثمانية أيّامٍ أو تسعة». أمّا الصعود في النهر فرحلة طويلة مضنية «تستغرق ثلاثين يومًا أو أربعين»، وينزل المسافرون كل ليلة للنوم على البرّ.

<figure class="art-fig"><img src="articles/28/1.webp" alt="صورة مرسومة للشاه عباس الأول الصفوي، الذي طالبه السفير بردّ البحرين" width="931" height="1600" loading="lazy" /><figcaption><span class="fig-cap">الشاه عباس الأول الصفوي (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 89</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: صورةٌ منسوبةٌ إلى الرسّام المغولي بِشن داس، نحو 1613–1619، المتحف البريطاني</span></figcaption></figure>

ويذكر أن التجّار يسمّون النهرين معًا، بعد التقائهما، باسم دجلة وحده. ويوضّح المحقق أنه يريد شطّ العرب، «وهو النهر الذي يتكوّن من ملتقى الفرات ودجلة عند القرنة في محافظة البصرة، وطوله نحو 200 كم، ويصبّ في الخليج العربي».

## البصرة: النخيل والمراوح

يصف المؤلف البصرة بأنها بلدة كبيرة «على مسيرة يومٍ طويلٍ من حيث يلتقي النهران الفرات ودجلة». ويقول إن فيها «خلقًا كثيرًا، ويقصدها التجّار دائمًا». وفي داخلها كثير من الحدائق وبساتين النخيل، «وأكثر من ذلك بكثيرٍ خارج العمران وحوله».

ويثني على تمر تلك الناحية، ويقول إن الأرض فيها تُخرج النخل وثمره «أكمل ممّا في أيّ موضعٍ آخر من الدنيا». ثم يستدرك أن التمر الذي وجده السفير في مدينة لار «لا يبدو أنّ غيره يُقارَن به».

ويعرّف المحقق وضع المدينة الإداري: «كانت البصرة منذ القرن السادس عشر قاعدة إيالةٍ عثمانية، هي إيالة البصرة».

ويقول إن في البصرة سنجقًا تابعًا لباشا بغداد، وإن جندها «يبلغون ثلاثة آلاف جندي، من الترك أنفسهم، وقد اختلطوا منذ سنين كثيرةٍ بأهل البلاد». ويذكر أنه لا يكاد يوجد فيها لقلّة الخشب إلا غليوطة واحدة.

ومن أطرف ما يذكره المؤلف عن البصرة صناعة المراوح. فهو يقول إن أهلها يصنعون «أشكالًا وأنواعًا كثيرةً من المراوح من خوص النخل الدقيق جدًّا، بألوانٍ كثيرةٍ وصورٍ متنوّعة». ويقول إنها تُحمل بمقادير كبيرة إلى بغداد والحويزة ولار وهرمز، «ومن هناك تنتشر كذلك إلى أنحاءٍ كثيرةٍ أخرى من الدنيا، ولا سيّما إلى إسبانيا، حيث تُستعمل كثيرًا».

ويذكر جزيرة صغيرة أسفل البصرة عند مصبّ النهر، «يزيد محيطها قليلًا على فرسخين». ويقول إنها خصبة جدًّا، وليس فيها إلا بعض الأكواخ «لقليلٍ من الصيّادين والملّاحين الفقراء».

## جزيرة البحرين

ينتقل المؤلف بعد ذلك إلى البحرين، فيقول: «وجزيرة البحرين، المشهورة في الدنيا بمغاص لؤلئها البالغ الغنى، إذ هو من أحسن لؤلؤ المشرق كلّه وأكمله». ويضعها في منتصف الطريق تقريبًا من هرمز إلى البصرة، وأقرب إلى ساحل جزيرة العرب منها إلى الساحل المقابل.

<quote by="دون غارسيا دي سيلفا إي فيغيروا" source="«هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»">إذ ليس من القطيف إلى مكّة إلّا خمس عشرة أو ستّ عشرة مرحلةً معتادةً من مراحل الإبل، وهي أقلّ من مئة فرسخ</quote>

ويقدّر طولها من الشرق إلى الغرب باثني عشر فرسخًا، وعرضها من ستّة فراسخ إلى ثمانية. ويعلّق المحقق: «ما يذكره المؤلف من أبعاد البحرين تقريبيّ، وهو يريد الجزيرة الكبرى (أوال)».

ويصف المؤلف خصبها، فيقول إنها «شديدة الخصب بالفاكهة والماشية». ويُجنى فيها كثير من الشعير والقمح، «ومقدارٌ عظيمٌ من التمر من نخيلها الكثير». ويقول إن أهمّ فواكهها «التين والعنب والرمّان، وهذه في غاية الكمال والجودة».

## حمّى الخريف

ويذكر المؤلف أن البحرين تصيبها في الخريف حمّيات. لكنه لا ينسبها إلى الماء نفسه بقدر ما ينسبها إلى المياه التي تُترك بعد سقي البساتين فتتجمّع في الأرض وتفسد بحرّ الصيف. ويقول إن الجزيرة «صحّيةٌ في بقية السنة».

وينقل في ذلك قول سيّد عرب الجزيرة نفسه. فقد كان السفير في شيراز في آخر سنة 1617 وأوّل سنة 1618، فزاره مرّات الشيخ محمد، «سيّد العرب الذين يسكنون الجزيرة». وكان الشيخ قد جاء إلى شيراز «باللؤلؤ الذي غيص عليه وجُمع في تلك السنة».

وقال الشيخ إن الحمّيات لا تصيب الجزيرة «إلّا من منتصف سبتمبر إلى آخر أكتوبر على الأكثر». وقال إن المرضى إذا تدثّروا جيّدًا وأخذوا بالحمية شُفوا بسهولة، «وقليلٌ جدًّا منهم من يموت».

ويقول المؤلف إن السفير سأل الشيخ أسئلة كثيرة، «فكان يجيب عنها بحكمةٍ وفطنة». وإن الشيخ أظهر «رغبته الكبيرة في الخروج من سلطان الفرس». وقال له السفير في آخر الأمر إنه إنما سأله «لمجرّد الاطّلاع»، لأن جزيرة البحرين كانت مشهورة في أوروبا بلؤلؤها «الغالي الجميل الذي يُقدَّر هناك تقديرًا كبيرًا».

## كيف أُخذت القلعة

يروي المؤلف أن الفرس أخذوا قلعة البحرين قبل نحو عشرين سنة من زمن السفارة. ويقول إن الله وردي خان، سلطان شيراز، أرسل إليها بعض رجاله متخفّين، «قائلين إنّهم تجّار»، فصاروا سادة الحصن والجزيرة.

لكن المحقق ينبّه إلى أن رواية المؤلف تخالف المراجع الحديثة. فهي تذكر «أنّ البرتغاليين أُخرجوا منها سنة 1602 بثورةٍ من أهلها استولت على قلعة البحرين، فبادر الشاه عبّاس إلى وضع حاميةٍ فارسيةٍ في القلعة». ويضيف أن البرتغاليين أخذوا البحرين سنة 1521، وأن والي الأحساء العثماني حاول احتلالها سنة 1559 «فرُدّ عنها».

ويقول المؤلف إن البحرين بقيت للشاه، «يأتيه من خيرها ومن مغاص اللؤلؤ أكثر من مئتي ألف دوكادو». ويذكر أن ذلك «عدا القيمة الكبيرة للّؤلؤ الذي يختاره قبل أن يشتري الباقي التجّار العرب والترك والبرتغاليون والفرس».

ويصف القلعة بأنها «صغيرةٌ جدًّا، من الطوب المدكوك». ويقول إن البحر يحيط بها من جهتين تقريبًا، وإن خندقها من جهة البرّ «ضيّقٌ جدًّا قليل العمق». ويقدّر حاميتها بأنها «لا يزيدون على مئتي فارسي».

## القطيف وطريق مكّة

ويذكر المؤلف مدينة يسمّيها Califa مقابل أقصى غرب البحرين. ويقول المحقق: «والراجح أنّه يريد القطيف، على ساحل جزيرة العرب مقابل البحرين». ويضيف أنها كانت قبل العهد العثماني «من إقليم البحرين التاريخي مع الأحساء وجزر البحرين».

ويقول المؤلف إن القطيف ليس لها نفع «إلّا من مغاص اللؤلؤ، ومن بعض القوافل التي تعبر من هذه البلدة إلى مكّة». ويرى أن هذه أقصر طريق إلى الحجّ، «إذ ليس من القطيف إلى مكّة إلّا خمس عشرة أو ستّ عشرة مرحلةً معتادةً من مراحل الإبل، وهي أقلّ من مئة فرسخ».

## المغاص: لؤلؤ البحرين ولؤلؤ الكاريبي

يقول المؤلف إن المغاص المعتاد الأكبر للّؤلؤ يكون «في القناة التي بين هذا الساحل من جزيرة العرب والجزيرة». ويذكر أن اللؤلؤ يوجد على سائر ساحل جزيرة العرب حتى رأس الحدّ، «ولكن بمقدارٍ أقلّ كثيرًا، وليس بجودة ما يوجد هنا».

<figure class="art-fig"><img src="articles/28/2.webp" alt="لوحة لروبرت شيرلي بزيّ شرقي" width="459" height="700" loading="lazy" /><figcaption><span class="fig-cap">السير روبرت شيرلي بزيٍّ شرقي، وكان سفير الشاه إلى إسبانيا (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 96</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: لوحةٌ لأنطوني فان دايك، روما 1622</span></figcaption></figure>

ولا يصف المؤلف طريقة الغوص لأنها في نظره «معروفةٌ أمرًا شائعًا جدًّا». لكنه يقارن لؤلؤ البحرين باللؤلؤ الذي يُغاص عليه في ساحل باريا من جزر الهند الغربية. ويعرّف المحقق كوباغوا ومارغريتا بأنهما جزيرتان في فنزويلا «كانتا مشهورتين بمغاص اللؤلؤ في العهد الإسباني».

ويقول المؤلف إن اللؤلؤ الغربي أشدّ بياضًا، ولذلك يُقدَّر عند كثير من نساء أوروبا، «فإنّه أدنى كثيرًا من اللؤلؤ الشرقي». ويقول إن لؤلؤ الخليج له «بلا مقارنةٍ بريقٌ أعظم، مع بياض العاج وصفائه». ويضيف أن قيمة اللؤلؤ في آسيا «أعلى كثيرًا منها في أوروبا».

## العين العذبة تحت البحر

ويصف المؤلف عينًا عجيبة على ربع فرسخ من الساحل الشرقي للجزيرة، «في داخل البحر نفسه». ويقول إنها تنبع على عمق عشر قامات، وإن العرب، لاعتيادهم الغوص على المحار، «لهم كذلك حيلةٌ في أن يغطسوا إلى قاع منبع العين، فيملؤوا قِرَبًا كبيرةً يحملونها معهم». ويقول إن السفن الذاهبة من هرمز إلى البصرة تتزوّد منها بالماء.

ويضيف المحقق أن هذه العيون «معروفةٌ منذ القدم»، وأن الملّاح العربي أحمد بن ماجد وصفها سنة 1489، «فذكر موضعًا يسمّى «القصاصير» يغوص فيه الرجل في البحر المالح بقربةٍ فيملؤها ماءً عذبًا».

## المطالبة بالبحرين في قزوين

ويروي المؤلف في الكتاب الخامس مقابلة صعبة مع الشاه في قزوين صيف سنة 1618. ويعرّف المحقق قزوين بأنها كانت «عاصمة الدولة الصفوية نحو أربعين سنة (1555–1598) قبل انتقال العاصمة إلى أصفهان».

وفي آخر المقابلة طلب السفير أن يقول كلمتين في شأن مملكة هرمز. فقال إن الشاه استولى، في وقت كانت السفارات تجري فيه بين الجانبين، «على جزيرة البحرين، أحسن تلك المملكة وأكبر جزءٍ منها»، ثم على مُغستان وكمرون وقشم.

فقاطعه الشاه وقال إن ما كسبه من مملكة هرمز ليس لملك إسبانيا، بل لرجال من أهل ملّته ورعاياه، «فهو إنّما استولى على ما هو له». ثم أدار فرسه وانصرف. ويذكر المحقق، نقلًا عن دائرة المعارف الإيرانية، أن الله وردي خان أخذ البحرين سنة 1602، وينبّه إلى أن المؤلف يعدّ البحرين ومُغستان وجمرون وقشم من «مملكة هرمز».

## الأخوان شيرلي

ويستطرد المؤلف في الفصل نفسه إلى سبب مجيء الإنجليز إلى فارس. فيقول إنه قبل وصول السفير بنحو عشرين سنة وصل إلى هذه الأنحاء «إنجليزيّان أخوان، يُدعيان أنطوني وروبرت شيرلي». ويقول إن الشاه قبلهما وأبقاهما في بلاطه، وإنهما عرضا أن يحملا عنه السفارات إلى أمراء أوروبا.

ويذكر أن روبرت شيرلي مضى بعد بضع سنين سفيرًا للشاه إلى أوروبا، فأقام في إسبانيا أربعة عشر شهرًا. ويقول إن ما أُنفق عليه وعلى أهل بيته في هذه المدّة بلغ «ثلاثون ألف دوكادو». ومن مشروعاته التي يرويها المؤلف أن يُحمل حرير فارس إلى ميناء جاسك ليُنقل بحرًا إلى أوروبا، بدل أن يُحمل في القوافل إلى حلب ودمشق. ولا يرى المؤلف في هذه المشروعات إلا وعودًا لا أساس لها.

## مقابلة الوداع سنة 1619

وفي الكتاب السابع يروي المؤلف مقابلة الوداع في أصفهان في الثاني من أغسطس 1619، وقد جرت ليلًا في الميدان «بمشاعل كثيرة». وعاد السفير فيها إلى طلب ردّ البحرين وقشم وكمرون.

ويقول المؤلف إن الشاه سمع المسألة هذه المرّة «بوجهٍ هادئٍ لطيف». وأجاب بأن ملك إسبانيا لا يعنيه أن يملك هو تلك الجزر والقلاع أو أن يملكها ملك هرمز، «إذ هما كلاهما مسلمان». ويعلّق المؤلف بأن الملوك لا يردّون ما أخذوه «إلّا أن تضطرّهم إلى ذلك ضرورةٌ ملحّة».

## خاتمة

يرسم هذا الفصل صورة للبحرين في أوائل القرن السابع عشر: جزيرة خصبة بالنخيل والتين والعنب، ولؤلؤ يراه المؤلف أحسن لؤلؤ المشرق، وعين عذبة يغوص إليها الغوّاصون بالقِرَب. ويروي الكتاب أيضًا كيف صارت البحرين موضوعًا في مفاوضات بين الشاه وسفير إسبانيا. وتضيف حواشي المحقق ما تقوله المراجع الحديثة، وشهادة أحمد بن ماجد عن عيون «القصاصير».

## المصدر

- الكتاب: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، تأليف: دون غارسيا دي سيلفا إي فيغيروا (García de Silva y Figueroa)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الكتاب السادس، الفصل التاسع: البصرة ص 117–118، البحرين ص 119–122، القطيف والمغاص ص 122–123؛ الكتاب الخامس، الفصل الخامس: قزوين ص 88، المقابلة ص 93، الأخوان شيرلي ص 95–100؛ الكتاب السابع، الفصل السابع: مقابلة الوداع ص 125–128.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`16-terrada-kung-basra-godinho`,`03-bahrain-awal-stuhlmann`,`27-famous-pearls-rosenthal`]},{slug:`29-shiraz-persepolis-basra-valentyn`,title:`من أطلال برسبوليس إلى البصرة وكُنگ: محطّات الطريق في كتاب فالنتاين`,author:`فرانسوا فالنتاين`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-13`,cover:`articles/29/1.webp`,excerpt:`كتب القسّ الهولندي فرانسوا فالنتاين في الجزء الخامس من موسوعته «الهند الشرقية القديمة والجديدة» (1726) وصفًا لفارس ولمكاتب الشركة الهولندية للهند الشرقية فيها.`,tags:[`شيراز`,`البصرة`,`مسقط`],sample:!1,book:`وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها`,coverCaption:`«أطلال قصر دارا في برسبوليس القديمة، الذي أحرقه الإسكندر الأكبر، مرسومةٌ عن الرسم الأصلي للسيد هربرت دي ياغر»، كما كُتب تحت اللوحة — المصدر: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»، ص 62`,era:`1726`,eraSort:1726.1,words:1727,minutes:9,body:`كتب القسّ الهولندي فرانسوا فالنتاين في الجزء الخامس من موسوعته «الهند الشرقية القديمة والجديدة» (1726) وصفًا لفارس ولمكاتب الشركة الهولندية للهند الشرقية فيها. وفي الفصل الثالث من هذا الوصف يتنقّل المؤلف بين موضوعات كثيرة: أهل العلم والشعر في فارس، ومدينة شيراز، وأطلال برسبوليس، ثم مدينة لار، فالبصرة، فمرفأ كُنگ على الساحل الشرقي للخليج العربي، وأخيرًا مسقط. ويضمّ الفصل لوحة مطويّة لأطلال برسبوليس، ونماذج من الكتابة المسمارية نُقلت من الأطلال.

## الشعراء: سعدي والفردوسي

يقول المؤلف: «ويوجد بين الفرس أيضًا محبّون لفنّ الشعر». ويذكر أن الشيخ سعدي اشتهر «بكتابه «گلستان» أي روضة الورد، وكتابه «بوستان» أي البستان، وهما كتابان تُرجما إلى الهولندية». ويعرّف المحقق سعدي بأنه «الشاعر الفارسي الصوفي، من أعظم شعراء الأدب الفارسي الكلاسيكي».

<figure class="art-fig"><img src="articles/29/1.webp" alt="لوحة محفورة لأطلال برسبوليس (چهل منار) من بعيد، بأعمدتها القائمة ودرجها" width="1600" height="893" loading="lazy" /><figcaption><span class="fig-cap">«أطلال قصر دارا في برسبوليس القديمة، الذي أحرقه الإسكندر الأكبر، مرسومةٌ عن الرسم الأصلي للسيد هربرت دي ياغر»، كما كُتب تحت اللوحة</span><span class="fig-src">المصدر: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»، ص 62</span><span class="fig-orig">أصل الصورة: فالنتاين، «الهند الشرقية القديمة والجديدة»، الجزء الخامس (دوردرخت وأمستردام، 1726)، لوحةٌ مطويّة في الكتاب الخامس (ورقة الصورة 240)</span></figcaption></figure>

ويروي المؤلف أن الفردوسي نظم لأحد ملوك فارس ستّين ألف بيت، أملًا في أن ينال على كل بيت دوكاتًا كما وعده الملك. ويصحّح المحقق هنا التباسًا وقع فيه المؤلف. فهو يقول إن «البيت» في الفارسية والعربية «يعني الدار ويعني بيت الشعر معًا»، وإن الأشبه أن الرواية في وعد السلطان محمود الغزنوي له «بدينارٍ عن كلّ بيتٍ من أبيات الشاهنامه (وهي نحو ستّين ألف بيت)».

## البستاني والمنجّم

ويقول المؤلف إن كثيرًا من الفرس كانوا مولعين بالتنجيم، فلا يبدؤون شيئًا حتى تُرصد «الساعة» السعيدة. ثم يروي حكاية عن أحد ملوك فارس تخلّص من هذه العادة «على يد بستانيٍّ».

فقد عزم الملك على إنشاء بستان جديد. فلمّا بلغ الموضع مع منجّمه قال له المنجّم إن الوقت هو الساعة الصحيحة لغرس الأشجار. فغرس الملك والمنجّم ما استطاعا من الأشجار «كيفما اتّفق»، لأن البستاني لم يكن حاضرًا. ثم جاء البستاني، ولم يكن يعلم من غرسها، فاقتلعها كلها ليعيد غرسها على وجه أحسن.

فغضب الملك واستدعاه. فأجاب البستاني بأنه اقتلعها «لأنها لم تُغرس كما ينبغي على قواعد علم الغرس». ثم قال إن المنجّم لو كان قد رصد ساعة سعيدة لتنبّأ بأن البستاني سيقتلع الأشجار. ويختم المؤلف: «فأدرك الملك قوّة حجّة البستانيّ إدراكًا تامًّا»، فطرد المنجّم من بلاطه، «ولم يستعمل بعده منجّمًا قطّ».

## مكتب أصفهان

وقبل أن يصل المؤلف إلى شيراز يصف مكتب الشركة في أصفهان، ويقول إنه «غير بعيدةٍ عن قصر الملك». ويذكر أن رئيسه كبير تجّار، وأنه كان في سنة 1706 رئيسان معًا، هما فيلم باكر والبارون فان لاريكس.

<quote by="فرانسوا فالنتاين" source="«وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»">والحروف لا تشبه حروف أيٍّ من لغات المشرق ولا كتاباته، وهي كتابةٌ مجهولةٌ عند جميع العلماء، وعند جميع شعوب المشرق أيضًا</quote>

ويقول إن تحت يد الرئيس موظّفين وتراجمة، «وكثيرٌ من سُعاة البريد (الذين كان عليهم في يوم امتحانهم أن يقطعوا مسيرة أربعٍ وعشرين ساعةً في اثنتي عشرة ساعة)».

ويرى المؤلف أن هذا الرئيس ينبغي أن يكون عالمًا باللغات، «ليستطيع أن يكلّمهم هو نفسه بلغتهم، وأن يرى كلّ شيءٍ بعينيه، دون أن يتّكل على التراجمة». ويعلّل ذلك بأن الشركة قد تلحقها أحيانًا «من جرّاء كلمةٍ أُسيء فهمها أو ترجمتها خسارةٌ كبيرةٌ جدًّا».

ويذكر أن للإنجليز والفرنسيين والبرتغاليين وغيرهم أيضًا وكلاء ورؤساء في أصفهان يتولّون أمورهم.

## شيراز: الورد والسرو

يقول المؤلف إنه لم يكن للهولنديين في شيراز مكتب، «بل بيتٌ فحسب، يستريح فيه المسافرون ذهابًا وإيابًا من أصفهان إلى غمرون». ويذكر أن المرء يحتاج عادة إلى «اثني عشر يومًا للوصول من أصفهان إلى شيراز». ويحتاج من هناك إلى ثلاثة وعشرين يومًا أو أربعة وعشرين للوصول إلى غمرون.

ويقول: «ويكثر هنا الورد الجميل على غير المألوف، ولذلك يُجمع هنا أجود «گلاب»، أي ماء الورد، وأكثره». ويرى أن كلمة «جُلّاب» الأوروبية أصلها من ذلك. ويؤيّد المحقق هذا الرأي: «هذا الاشتقاق صحيح: فالكلمة الأوروبية «julep» جاءت من العربية «جُلّاب»، وهي من الفارسية «گلاب» (ماء الورد)».

ويذكر المؤلف أن شيراز «موطن الشاعر الشهير الشيخ سعدي، وفيها دُفن أيضًا». ويقول إن محيطها نحو ميلين ونصف، وفيها «مماشٍ جميلة، وكثيرٌ من أشجار الدُّلب والسرو الجميلة».

## چهل منار: أطلال برسبوليس

ويقول المؤلف إن أهمّ ما جعل شيراز مشهورة منذ القدم «أطلال قصر دارا الشهير في برسبوليس». ويعرّف المحقق برسبوليس بأنها «العاصمة الاحتفالية للدولة الأخمينية (نحو 550–330 ق.م)، في سهل مرودشت شمال شرق شيراز».

ويتردّد المؤلف في نسبة البناء إلى قورش أو إلى دارا. ويحسم المحقق المسألة: «المعروف اليوم أنّ دارا الأوّل (522–486 ق.م) هو الذي بدأ بناء برسبوليس نحو سنة 518 ق.م، وأتمّ ابنه خشايارشا كثيرًا من أبنيتها».

ويقول المؤلف إن الأطلال تُسمّى «چهل منار»، أي الأبراج الأربعون، نسبة إلى أعمدتها الضخمة. وينقل عن الرسّام والرحّالة كورنيليس دي بروين أنه وجد أدلّة على أنه «كان فيه 205 أعمدة». ويقول إنه في زمن دون غارسيا دي سيلفا كان قد بقي منها عشرون، «ولم يبقَ الآن من هذه الأعمدة المدهشة، التي تبدو من بعيدٍ كأنها أبراج، إلّا تسعة عشر».

ويعرّف المحقق دون غارسيا بأنه سفير ملك إسبانيا إلى الشاه عبّاس، «وهو أوّل رحّالةٍ غربيٍّ عرّف أطلال تخت جمشيد تعريفًا صحيحًا بأنها برسبوليس».

ويروي المؤلف أن دي بروين عرض عليه رسومه في بتافيا، «فقضينا في ذلك نحو ثلاث ساعات». ويقول إن الحجر يبدو أكثره «مائلًا إلى الزرقة الفاتحة»، وإن صنّاعه أضفوا عليه «لمعانًا لا يقلّ عن لمعان المرآة».

## كتابة لا يقرؤها أحد

ويقول المؤلف عن النقوش: «والحروف لا تشبه حروف أيٍّ من لغات المشرق ولا كتاباته، وهي كتابةٌ مجهولةٌ عند جميع العلماء، وعند جميع شعوب المشرق أيضًا». ويوضّح المحقق: «هذه هي الكتابة المسمارية، وقد بقيت مجهولةً على العلماء حتى فُكّت رموز الفارسية القديمة منها في النصف الأوّل من القرن التاسع عشر».

ويذكر المؤلف أن الهولندي هربرت دي ياغر، العالم بلغات المشرق، زار الأطلال سنة 1693، «ودوّن عنها ملاحظاتٍ دقيقةً جدًّا». ويأسف لأنه لا يعلم أين صارت هذه الملاحظات. ثم ينقل وصف دي ياغر نفسه، ومعه رسم من رسومه.

## وصف دي ياغر

يقول دي ياغر إن أساس البناء زاوية بارزة من جبل، «يبلغ محيطها 1507 خطوات، كلّ خطوةٍ ثلاثة أقدام». ويصف الحجارة بأنها كبيرة، منها حجر في الصف الأعلى «طوله ثلاث عشرة خطوة، وعرضه أكثر من خمسة عشر قدمًا».

<figure class="art-fig"><img src="articles/29/2.webp" alt="نماذج من الكتابة المسمارية المنقولة من أطلال برسبوليس" width="1239" height="557" loading="lazy" /><figcaption><span class="fig-cap">«حروفٌ مختلفةٌ منقولةٌ من هنا وهناك من الأطلال»: نماذج من الكتابة المسمارية في برسبوليس كما طُبعت في المتن</span><span class="fig-src">المصدر: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»، ص 63</span><span class="fig-orig">أصل الصورة: فالنتاين، «الهند الشرقية القديمة والجديدة»، الجزء الخامس (دوردرخت وأمستردام، 1726)، في متن الفصل الثالث (ورقة الصورة 241)</span></figcaption></figure>

ويقول إن المدخل من جهة الغرب، وإن المرء يصعد درجًا ذا منعطف «ارتفاعه 55 درجة». ويضيف: «وقد صعدته ونزلته راكبًا». ويصف قاعة كبيرة كانت قائمة على ستّين عمودًا ارتفاعها 72 قدمًا، «ولا يزال قائمًا منها ستّة عشر، تتّخذ اللقالق رؤوسها أعشاشًا».

## لار: البازار والصهاريج

ثم ينتقل المؤلف إلى لار. ويقول إنها كانت عاصمة المملكة التي تحمل هذا الاسم، «والتي فتحها الشاه عبّاس الكبير سنة 1599 من أميرٍ مستقلّ». ويذكر أن فيها بازارًا من الحجر، «وطوله 216 خطوة، مسقوفٌ من أعلاه».

ويقول: «ويقدّرون أنّ فيها نحو أربعة آلاف بيت، كثيرٌ منها مزوّدٌ بأبراج الريح، ويقدّرون سكّانها بعشرين ألف نفس». ويقول إنها بلا أسوار، «لكنّ الجبال الضخمة تحيط بها من كلّ جانب، فتقوم مقام الأسوار». ويذكر أن ماءها في الغالب ماء آبار مالح، وفيها صهاريج مسقوفة كثيرة لجمع ماء المطر.

ويصف ما حولها: «عددًا كبيرًا من النخيل والبرتقال والليمون وغيرها من الأشجار». ويقول إن فيها تُنسج أقمشة حريرية جميلة، «وتُصنع فيها أيضًا أجود مواسير البنادق».

## من شيراز إلى لار

ويصف المؤلف الطريق: «ولكي يأتي المرء إلى هنا من شيراز يمرّ بقرية «فخرآباد» ومدينة جهرم». ثم يجد قرب الطريق قرية «آسيا رافي»، التي دُفن خارجها أحد المديرين الهولنديين، يوانس كايتس. ويعرّف المحقق جهرم بأنها «مدينةٌ في جنوب إقليم فارس، جنوب شرق شيراز».

ويقول المؤلف إنه لم يكن للهولنديين في لار مكتب، «بل بيتٌ يستريح فيه المرء عادةً». ويذكر أن لهم هناك أيضًا «بناءٌ خاصٌّ بنا وبستان».

## البصرة

ويذكر المؤلف أن الهولنديين كان لهم في الماضي مكتب ثابت في البصرة. ويقول إنها تقع على الفرات «حيث يصبّ في الخليج العربي». ويصحّح المحقق ذلك بأن البصرة تقع «على شطّ العرب، الذي يتكوّن من التقاء دجلة والفرات عند القرنة».

ويقول المؤلف إن طول المدينة من أحد جانبي النهر إلى الآخر «16400 خطوة، ولها عشرة حصونٍ مستديرة، وخمسةٌ وأربعون برجًا». ويذكر فيها قصرًا للباشا، وسوقًا مسقوفة، «فضلًا عن أنّ فيها أيضًا كثيرًا من الحمّامات والمقاهي». ويذكر حصنًا كبيرًا يُسمّى «المنارة».

ويقول المؤلف إن الهولنديين كان لهم في البصرة، بعد أن استولى عليها العثمانيون آخر مرّة، محطّة ورئيس سنين كثيرة، «وأنّ موظّفينا فيها ماتوا سنة 1689 إلّا رجلًا واحدًا». ويقول إنه لا يعلم هل بقي لهم هناك مكتب في زمنه، «وإن كنت أميل إلى الاعتقاد بأنه ليس لنا هناك مكتبٌ الآن».

ويضيف المحقق أن العثمانيين أخذوا البصرة في منتصف القرن السادس عشر، ثم باعها واليها سنة 1596 لأفراسياب، «فحكمتها أسرته شبه مستقلّةٍ إلى سنة 1668».

## الطريق البحري إلى كُنگ

ويعدّد المؤلف ما يلقاه المسافر بحرًا من غمرون إلى البصرة: مدينة كُنگ، وأبو شهر، وجزر خارك، وبندر ريك وغيرها. ويصحّح المحقق قول المؤلف إن أبا شهر قلعة تركية، فيقول: «مرفأٌ على الساحل الفارسي، قاعدة محافظة بوشهر اليوم؛ ولم تكن قلعةً تركية». ويذكر عن خارك أن الهولنديين أقاموا فيها سنة 1753 «مركزًا تجاريًّا محصّنًا».

ويقول المؤلف إن إلى كُنگ «ملاحةٌ كبيرةٌ من فارس وسورات ومليبار وكوروماندل وغيرها». ويذكر أن القوافل تأتيها من القسطنطينية وإزمير وحلب، «فتكون التجارة فيها لذلك كبيرةً جدًّا».

## الخيل العربية ومسقط

ويقول المؤلف: «وكانت الخيل العربية الجميلة توجد هنا». ويروي أن شاه جهان اشترى حصانًا عربيًّا بعشرة آلاف ريال، «لكنه نفق في الطريق»، وأن باشا دمشق دفع 2400 ريال في مُهر.

ويختم المؤلف الجولة بمسقط، «وهي مدينةٌ ذات شأنٍ في جزيرة العرب». ويذكر أن روبرت پادبروخه أُرسل إليها سنة 1672 سفيرًا ليعقد مع أميرها حلفًا أوثق. ويكمل المحقق الخبر: فقد لقي پادبروخه الإمام في 28 يونيو، «فإذا الإمام يطلب عون الشركة على البرتغاليين أكثر ممّا يطلب التجارة». فعاد دون أن يعقد شيئًا، «وترك في مسقط مساعد تاجرٍ يُطلع الشركة على الأخبار».

## خاتمة

يجمع هذا الفصل من كتاب فالنتاين مشاهد متنوّعة على الطريق بين أصفهان والخليج العربي: ماء الورد في شيراز، وأعمدة برسبوليس التي تعشّش عليها اللقالق، وكتابة مسمارية لم يكن يقرؤها أحد يومئذ، وبيوت لار ذات أبراج الريح، ثم البصرة وكُنگ ومسقط. وتصحّح حواشي المحقق ما أخطأ فيه المؤلف، وتضيف ما عرفه البحث الحديث.

## المصدر

- الكتاب: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها» (Beschryvinge van Persien، من «الهند الشرقية القديمة والجديدة»، الجزء الخامس، 1726)، تأليف: فرانسوا فالنتاين (François Valentijn)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثالث «علماء الفرس، ومكتب أصفهان، وشيراز وأطلال برسبوليس، ولار والبصرة»، ص 54–78 (الشعراء والبستاني ص 54–56؛ مكتب أصفهان ص 57–58؛ شيراز ص 58؛ برسبوليس ص 59–60؛ وصف دي ياغر ص 62–64؛ لار ص 73–75؛ البصرة ص 76؛ كُنگ والطريق البحري والخيل ص 77؛ مسقط ص 77–78).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`08-muscat-1817-heude`,`24-muscat-arabia-1663-godinho`,`30-godinho-desert-1663`]},{slug:`30-godinho-desert-1663`,title:`حصانٌ من الأحساء ودليلٌ اسمه حاجي ذيب: الأب غودينيو يقرّر عبور البادية من البصرة سنة 1663`,author:`الأب مانويل غودينيو اليسوعي`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-12`,cover:`articles/30/1.webp`,excerpt:`وصل الأب اليسوعي مانويل غودينيو إلى البصرة في ربيع سنة 1663، وهو في طريقه من الهند إلى البرتغال.`,tags:[`البصرة`,`الأحساء`],sample:!1,book:`الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)`,coverCaption:`«Arabiae Felicis, Petraeae et Desertae nova et accurata delineatio»: خريطة بلاد العرب بأقسامها الثلاثة، السعيدة والصخرية والصحراوية (صورة أضافها المحقق) — المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 101`,era:`1663`,eraSort:1663.3,words:1748,minutes:9,body:`وصل الأب اليسوعي مانويل غودينيو إلى البصرة في ربيع سنة 1663، وهو في طريقه من الهند إلى البرتغال. وكان أمامه طريقان إلى بغداد: النهر، أو البادية. فاختار البادية، وكتب في ذلك فصلين: الفصل السابع عشر يروي كيف اتّخذ قراره، والفصل الثامن عشر يصف فيه بادية العرب وسكّانها ولباسهم وخيلهم وطرق السفر فيها.

## في البصرة

يقول المؤلف: «كان اليوم التاسع والعشرون من مارس حين نزلت في البصرة». ونزل عند الأب براز دي سانتا باربرا الكرملي، وكان يحمل إليه رسائل من كُنگ. ويذكر أن الأب الكرملي لم يعرف في البداية أنه راهب، لأن الزيّ الذي كان يلبسه زيّ تركي. ويوضّح المحقق أن المؤلف كان «قد تزيّا بزيّ الترك في سفره».

<figure class="art-fig"><img src="articles/30/1.webp" alt="خريطة قديمة لبلاد العرب بأقسامها الثلاثة، ومنها البادية التي عبرها المؤلف" width="1198" height="1024" loading="lazy" /><figcaption><span class="fig-cap">«Arabiae Felicis, Petraeae et Desertae nova et accurata delineatio»: خريطة بلاد العرب بأقسامها الثلاثة، السعيدة والصخرية والصحراوية (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 101</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: يان يانسونيوس، أمستردام 1658، المكتبة الرقمية العالمية (World Digital Library)</span></figcaption></figure>

وأخبره الأب الكرملي بـ«دانكة»، وهي مركب من مراكب الفرات، ستقلع في الغد إلى بابل. ويوضّح المحقق أن المؤلف يريد بغداد. وكان في المركب برتغالي من إيفورا جال في داخل الهند ثم ركب إلى بغداد، «وليس معه كيسٌ غير كيس الثقة بالله». ويعرّف المحقق إيفورا بأنها «مدينةٌ في جنوب البرتغال، هي القاعدة التاريخية لإقليم ألنتيجو». وقد اتّخذ المؤلف هذا البرتغالي بعد ذلك خادمًا ورفيقًا في رحلته. فاتّفق المؤلف مع صاحب المركب، ثم وجد أن المركب ليس فيه بعدُ قوم ولا حمولة، وأن الإقلاع سيتأخّر. ففسخ الاتّفاق واستعاد ماله، «وكان خمسين عبّاسيًّا».

ويعرّف المحقق هذه العملة: «العبّاسي: اسمٌ لعملاتٍ من الذهب والفضّة في إيران، أوّل من ضربها الشاه عبّاس الأول، وبقي التعامل بها إلى أوائل القرن العشرين».

## فيلٌ وخمسة أفراس من الأحساء

ويروي المؤلف أنه كان يستطيع أن يذهب برًّا بلا خطر لو انتظر شهرًا. ذلك أن الباشا كان سيبعث هدية إلى السلطان العثماني، «فيها فيلٌ جاء من الهند، وخمسة أفراسٍ من الأحساء». وكانت الهدية ستمضي في حراسة فرسان من الإنكشارية.

لكنه رفض هذه الفرصة أيضًا، لأن المسير كان سيكون «على قدر بطء الفيلة في الحركة». ويقول عن نفسه: «وكنت ضيّق الصبر على التأخير». ويعرّف المحقق السلطان يومئذ بأنه «محمد الرابع (حكم 1648–1687)».

## التحذيرات

ثم سأل المؤلف بعض العرب هل يستطيع أن يمضي إلى بغداد عن طريق البادية. فقالوا له جميعًا «إنّها مغامرةٌ متهوّرة». وذكّروه بأن الأب سيبريانو الفرنسيسكاني مات عطشًا في اليوم الثاني من سفره قبل سنوات قليلة.

<quote by="الأب مانويل غودينيو اليسوعي" source="«الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»">وفي تلك البادية من الخيل ما يشمّ الماء على عمق قامةٍ تحت الأرض، فيحفر بيديه، ويشير إلى فارسه ليكشف عنه</quote>

وصوّروا له أيضًا صعوبة العثور على دليل أمين، وضعف صحّته يومئذ، وأن ذلك الطريق «يحتاج إلى أبدانٍ من حديد». وقالوا إنه لن يجد في الطريق من يداويه، ولا عمرانًا يأوي إليه.

ويقول المؤلف إنه بقي حائرًا: «وأخيرًا كنت أعزم على الذهاب، ثم أعود فأندم».

## خبر كوچين

وحسم الأمرَ ساعٍ وصل من كمرون. فقد أرسله الهولنديون بالرسائل التي يخبرون فيها بلادهم بسقوط كوچين، وقد وقع في العاشر من يناير سنة 1663. ويعرّف المحقق كوچين بأنها «مرفأٌ كبير على ساحل مليبار في جنوب غرب الهند»، أخذه الهولنديون من البرتغاليين في تلك السنة.

وكان على الأب الكرملي أن يبعث هذه الرسائل إلى حلب، لأنه كان يتقاضى أجرًا من الشركة الهولندية ليرسل رسائلها برًّا إلى قنصلها في الشام. فرأى المؤلف أن يسرع، «لكي يصل إلى جلالته خبر سقوط كوچين في الوقت نفسه الذي يصل فيه إلى هولندا خبر كسبها».

## حاجي ذيب

فاشترى المؤلف خيلًا له ولرفيقه البرتغالي ولترجمان. وبقي الدليل. ويقول: «فيسّر الله لي شيخًا اسمه «حاجي ذيب» (Agi Deb)». وقد أبى الشيخ أوّل الأمر، ثم قبل بعد توسّلات الأب الكرملي والأجر الحسن، واتّفق على أن يوصله إلى بغداد.

ولم يقبل الدليل أن يتّفق على حلب، «لأنّه قال إنّه لا يظنّ بي أنّي أستطيع أن أحتمل كلّ ذلك الطريق على تلك الحال». واتّفقا على أن يكون الرحيل يوم الإثنين التاسع من أبريل.

## البادية

ويبدأ المؤلف الفصل الثامن عشر بتعريف البادية: «بادية العرب (Arabia Deserta) أحد الأقسام الثلاثة التي تنقسم إليها بلاد العرب». ويقول إنه يحدّها من الشرق «جبال بابل وجزءٌ من الخليج العربي»، وإن طولها نحو ثلاثمئة فرسخ.

ويقول إن الجزء الذي يمتدّ نحو الجنوب «كلّه مغطًّى برمالٍ واسعةٍ متعِبة». ولذلك لا بدّ لمن يسير فيها «أن يراقب مسير الشمس والنجوم لئلّا يضلّ».

ويصف الآبار: فهي قليلة، وماؤها فاسد لأنه يبقى طويلًا لا يحرّكه أحد، «وبين البئر والأخرى دائمًا مسيرة يومين». ويقول إن الدليل إن لم يكن حاذقًا يعرف كيف يهتدي إليها، «فليس إلّا الموت عطشًا».

## الريح والرمل

ويقول المؤلف إن الرياح إذا هبّت من جهات كثيرة «رفعت الرمال إلى السحاب، ثم أسقطتها كالمطر فدفنت المسافرين». ويروي أنه رأى رجلًا قد تحنّط في هذه الرمال، وأن الأوروبيين كانوا يتداوون بما يسمّونه «موميا».

ويشرح المحقق الكلمة: «الموميا (mumia): كلمةٌ من العربية «موميا»، وهي في الأصل قارٌ صمغيٌّ كان يُستعمل في الطبّ القديم». ويقول إن الأوروبيين أطلقوها بعد ذلك على مسحوق الأجساد المحنّطة.

ويذكر المؤلف أن بعض الغدران تبقى فيها بعد الشتاء برك من الماء العذب مدّة من الزمن، لكن الحيوانات الكثيرة تستنفدها في أيام قليلة.

## حيوانات البادية وطيورها

ويذكر المؤلف أن البادية «مخطّطةٌ مقطّعةٌ بآثار أقدامها» من كثرة الحيوانات التي تأتي لتشرب من الفرات. ويعدّ منها الأسود والفهود والخنازير البرّية والذئاب. ويصحّح المحقق ما سمّاه المؤلف نمورًا مخطّطة: «وليس في بادية العرب نمورٌ مخطّطة، والذي يعيش في جزيرة العرب هو النمر العربي».

<figure class="art-fig"><img src="articles/30/2.webp" alt="خريطة قديمة لنواحي البصرة، يظهر فيها دير الكرمليين الذي نزل فيه المؤلف" width="1600" height="1287" loading="lazy" /><figcaption><span class="fig-cap">«Delineatio Regionis Bassora cum Pagis»: خريطة نواحي البصرة وقراها وجزرها، تظهر فيها مدينة البصرة ودير الكرمليين الحفاة، وملتقى دجلة والفرات عند القرنة — من الفصل السادس عشر عن البصرة، وقد وردت أيضًا في مقالٍ سابق (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 90</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: نقشٌ على النحاس، بين 1650 و1689، المتحف البريطاني (1898,0725.8.1475)</span></figcaption></figure>

ويذكر من الطيور النعام، والعقبان والصقور، وطيورًا «يسمّيها الترك «القطا»». ويقول إنها تبيض على الأرض لعدم الأشجار، فتكون «طعامًا طيّبًا لمن يسير في تلك البادية». ويصحّح المحقق: القطا «عربية الاسم، لا تركية».

ويلاحظ المؤلف أن الطيور والحيوانات في البادية لا تفرّ كثيرًا من الناس، «بل تبقى واقفةً تنظر إليهم، كأنّهم شيءٌ جديد». ويقول إن رؤية الإوزّ والبطّ «أحسن علامةٍ على وجود غديرٍ فيه ماءٌ قريبًا». ويذكر عن النعام العربي أنه كان يعيش في جزيرة العرب والشام «إلى منتصف القرن العشرين، ثم انقرض».

## التحية واللباس

ويصف المؤلف التحية عند أهل البادية: «وتحيّاتهم بالتقبيل على الوجه، والمصافحة باليمين». ويقول إن ما يقابل رفع القبّعة عندهم «هو عندهم وضع اليد اليمنى على القلب»، مع قولهم «السلام عليكم».

ويصف لباس الرجال: قمصانًا واسعة طويلة الأكمام، وفوقها أحيانًا «الكمبلي»، «وهي كالمعاطف الواسعة بلا أكمام، منسوجةٌ من وبر الجمال، تصلح جدًّا لدفع الماء». ويوضّح المحقق أن المؤلف يريد بها «العباءة أو «البشت» المنسوج من الوبر».

ويقول إن النساء يلبسن قمصانًا زرقاء، وعلى الرأس خمار. ويذكر أن حليّهن معلّقة «بخيطٍ ينزل من الرأس على الصدر الأيسر»، وأن الزوج يهديها لزوجته حين يتزوّجها.

## الكرم والوفاء بالعهد

ويقول المؤلف: «وأمّا ما يبعث على الدهشة فكرم أولئك القوم». ويصف كيف يستقبلون في خيامهم الحجّاج والمسافرين: «يطعمونهم كلّ ما في بيوتهم، ويعلفون دوابّهم بأنفسهم، ولا يطلبون على شيءٍ من ذلك ريالًا واحدًا». ويضيف: «ولو شئت أن تبقى عندهم شهرًا لما أروك وجهًا عابسًا».

ويقول عنهم أيضًا: «والكلمة التي يعطونها مرّةً يحفظونها حفظًا لا يُنقض». ويعلّق المحقق: «فالكرم والشجاعة والوفاء من أبرز ما عُرف به البدو».

## خيل البادية

ويخصّ المؤلف الخيل بوصف طويل. فيقول إنها «في العدو غزلان، وفي الوداعة حمائم، وفي الأكل قنوعةٌ جدًّا». ويذكر أنهم يعوّدونها منذ صغرها أن تأكل مرّة واحدة في اليوم، وأن تشرب كل يومين.

ويستشهد بفرسه هو، «وكان من ناحية الأحساء، حيث أحسن السلالات». ويقول إنه حمله ثلاثة وعشرين يومًا في البادية، «ويسير تسع عشرة ساعةً في اليوم والليلة». ويضيف: «ولم أمسّه بمهمازٍ قطّ، لأنّه لم يكن حاجةً إليه».

ويقول إن بعضها مدرّب على مقاتلة خيل الأعداء، «فما إن يبدأ القتال حتى تقوم بواجبها بالحوافر والأسنان». ويذكر أن هذه الخيل تعبر الأنهار سباحة وعليها فرسانها، وأنها «لا تنام تحت سقفٍ أبدًا». ويروي أن باشا حلب اشترى فرسًا «بألف پاتاكة»، وبعث به هدية إلى الصدر الأعظم. ويعرّف المحقق الپاتاكة بأنها الريال الإسباني الفضّي ذو الثمانية، «وكان من أوسع العملات تداولًا في التجارة العالمية في ذلك العصر».

ويروي المؤلف أيضًا: «وفي تلك البادية من الخيل ما يشمّ الماء على عمق قامةٍ تحت الأرض، فيحفر بيديه، ويشير إلى فارسه ليكشف عنه».

## أمير البادية

ويذكر المؤلف رأسًا واحدًا يحكم أهل البادية، ولكل قبيلة شيخها. ويشرح المحقق أنه «أمير العرب» أو «أمير البادية»، «رأس آل أبي ريشة من قبيلة الموالي». ويقول إن العثمانيين اعترفوا بهم سنة 1574، «وكلّفوهم بحماية الطرق بين الشام والعراق».

ويصف المؤلف الأمير في زمنه، واسمه الشيخ إسماعيل، «وعمره نحو أربعين سنة». ويقول إن على رأسه عمامة لها ذيل من الحرير، وإن قميصه «من حريرٍ أبيض رقيق، فيه خطوطٌ من الحرير نفسه زرقاء وحمراء». ويذكر أنه يستطيع، إن احتاج، «أن يُخرج إلى الميدان عشرين ألف فارس». ويذكر أن خاتميه معلّقان بسلسلتين من الذهب، وعليهما اسمه الذي يختم به، «وهو «الشيخ إسماعيل» (Xech Esamel)».

ويقول المؤلف إن أمراء البادية انسحبوا منذ نحو سنة 1580 إلى داخل البادية، على مسيرة يومين من عانة، «لأنّهم يحلفون يوم تتويجهم أن يعيشوا دائمًا في البادية في خيام». ويعرّف المحقق عانة بأنها «بلدةٌ عراقيةٌ قديمة على الفرات».

## على الجمال والهُجن

ويختم المؤلف الفصل بطرق السفر في البادية: الخيل، والجمال، والهُجن. ويقول إن الهُجن «تقطع ثلاثين فرسخًا في اليوم، والجمال تسعةً إلى عشرة لا أكثر». ويذكر أنه عُرض عليه هجين بمئتي پاتاكة في البصرة، لكنه لم يجرؤ على عبور البادية عليه. ويقول إن الهجين يأكل ما يجده من الشوك، «فإن لم يجده صام يومين وثلاثة، ولا يضعف لذلك»، وإن العرب يستعملونه في حمل الأخبار.

ويصف سفر القوافل على الجمال في صناديق «كصناديق المحفّات، يتّسع الواحد منها لفراشٍ بطوله». أما من يسافر على الخيل، كما فعل هو، فعليه أن يحمل الماء في «قِرَبًا مدبوغةً متينةً» تحت بطن الفرس.

## خاتمة

يجمع الفصلان مشاهد من البصرة سنة 1663: مركب نهري لا يقلع، وهدية فيها فيل من الهند وأفراس من الأحساء، وخبر سقوط كوچين يصل إلى البصرة. ثم تبدأ رحلة البادية بدليل اسمه حاجي ذيب وفرس من الأحساء حمل صاحبه ثلاثة وعشرين يومًا دون مهماز. وتصحّح حواشي المحقق بعض أحكام المؤلف، وتضيف ما يعرفه البحث الحديث عن حيوان البادية وأمرائها.

## المصدر

- الكتاب: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، تأليف: الأب مانويل غودينيو اليسوعي (Manuel Godinho)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل السابع عشر (قرار عبور البادية)، ص 96–99؛ الفصل الثامن عشر (وصف بادية العرب وسكّانها)، ص 100–110 (الحدود والرمال والآبار ص 100–101؛ الحيوان والطير ص 101–102؛ التحية واللباس ص 103–104؛ الكرم ص 106؛ الخيل ص 107–108؛ أمير البادية ص 108–109؛ الهجن والجمال ص 110).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`24-muscat-arabia-1663-godinho`,`29-shiraz-persepolis-basra-valentyn`,`16-terrada-kung-basra-godinho`]},{slug:`11-gulf-trade-1863-pelly`,title:`الريال والروبية والقران: تجارة موانئ الخليج العربي في تقرير بيلي سنة 1863`,author:`—`,category:`الاقتصاد والتجارة`,categorySlug:`economy-trade`,date:`2026-10-11`,cover:`articles/11/1.webp`,excerpt:`في السابع عشر من سبتمبر 1863 قُرئ أمام الجمعية الجغرافية في بومباي تقريرٌ طويل عنوانه «ملاحظات عن القبائل والتجارة والموارد حول ساحل الخليج العربي».`,tags:[`الكويت`,`البحرين`,`أبوظبي`,`رأس الخيمة`,`لنجة`,`بوشهر`,`اللؤلؤ`,`التجارة`],sample:!1,book:`ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة`,coverCaption:`«مخطّطٌ للخليج يبيّن أصناف الولايات السبعة المعدودة في رسالتي رقم 67 المؤرّخة في 13 أبريل 1863» (صورة أضافها المحقق) — المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 48`,era:`1863`,eraSort:1863,words:1742,minutes:9,body:`في السابع عشر من سبتمبر 1863 قُرئ أمام الجمعية الجغرافية في بومباي تقريرٌ طويل عنوانه «ملاحظات عن القبائل والتجارة والموارد حول ساحل الخليج العربي». كاتبه لويس بيلي، الذي كان قد نُقل حديثًا إلى الخليج مقيمًا سياسيًّا. وقد ترجم المحقق هذا التقرير وجعله القسم الثاني من كتاب «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925)»، وأضاف إليه حواشي تشرح الأسماء والعملات والمقاييس، وألحق به الجداول الإحصائية التي رافقته.

والتقرير وثيقةٌ اقتصادية قبل كل شيء: يطوف كاتبه بالخليج كله، مبتدئًا بالمحمّرة وبلاد بني كعب، فالساحل الفارسي، فمسندم، فساحل الإمارات، فالبحرين والقطيف والكويت، منتهيًا بالبصرة، ويسجّل في كل محطة ما يدخلها وما يخرج منها من بضائع، وما تملكه من سفن، وما يتداوله أهلها من نقود. وفي هذا المقال نقرأ التقرير من هذه الزاوية: كيف كان الخليج العربي يعيش ويتاجر قبل أكثر من قرن ونصف.

## الكاتب ومهمّته

يعرّف المحقق بيلي تعريفًا وافيًا: «كاتب هذا التقرير هو لويس بيلي (Lewis Pelly)، المولود في 14 نوفمبر 1825 والمتوفّى في 22 أبريل 1892». دخل خدمة شركة الهند الشرقية سنة 1840، وتنقّل في العمل السياسي بين بارودا والسند وطهران وزنجبار، ثم صار مقيمًا سياسيًّا في الخليج من سنة 1862 إلى سنة 1872. ويذكر المحقق أن أصل التقرير رسالةٌ رسمية رفعها بيلي إلى حكومة بومباي برقم 67 لسنة 1863، وأن «المكتبة البريطانية» تحفظ نسخةً منها، «وهي متاحةٌ في مكتبة قطر الرقمية».

<figure class="art-fig"><img src="articles/11/1.webp" alt="خريطة قديمة للخليج العربي أُلحقت بتقرير بيلي، تبيّن أصناف الولايات السياسية حول الخليج" width="797" height="580" loading="lazy" /><figcaption><span class="fig-cap">«مخطّطٌ للخليج يبيّن أصناف الولايات السبعة المعدودة في رسالتي رقم 67 المؤرّخة في 13 أبريل 1863» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 48</span><span class="fig-orig">طبيعة الصورة: خريطة لويس بيلي المرفقة بتقريره، أضافها المحقق إلى الكتاب (فهي من عمل المؤلف نفسه لكنها ليست في النص المترجم)</span><span class="fig-orig">أصل الصورة: الخريطة المرفقة بتقرير لويس بيلي، 1863</span></figcaption></figure>

ويفتتح بيلي تقريره بتواضعٍ لافت: «أقدّم بعض الملاحظات العاجلة، القائمة على المشاهدة الشخصية وعلى ما سمعته من الناس، عن القبائل والتجارة والموارد حول ساحل الخليج العربي». ويوضح المحقق أن من أغراض الكاتب أن يقترح على حكومته موضعًا تنتظم فيه خطوط البواخر والبرق بين الهند والعراق، وهو ما يفسّر عنايته بالموانئ والطرق والأرقام.

## ثلاث عملات في سوقٍ واحدة

من يقرأ التقرير يجد الأرقام تتنقّل بين ثلاث وحدات: الريال والروبية والقران. وحواشي المحقق هنا دليلٌ لا غنى عنه.

فالقران، كما يشرح المحقق، «عملة إيران من سنة 1825 إلى سنة 1932»، ويستخرج من كلام المؤلف أن «القرانين كانا يعادلان روبيةً هندية تقريبًا». أما الريال، فيحيل المحقق إلى ما علّق به في القسم الأول من الكتاب، حيث يقول: «المراد بالدولار في نصوص هذه الحقبة في الخليج «ريال ماريا تريزا» الفضّي، وهو عملةٌ نمساويةٌ ضُربت أول مرة سنة 1741 وتداولتها التجارة في هذه الأنحاء زمنًا طويلًا». وأما الأرقام الكبيرة بالروبية فيعبّر عنها بيلي بـ«اللكّ»، ويشرح المحقق أن اللكّ «وحدةٌ في نظام العدّ الهندي تساوي مئة ألف؛ فلكّ الروبيات مئة ألف روبية».

بهذه المفاتيح الثلاثة يصبح التقرير مقروءًا: فالرسوم في موانئ الساحل الفارسي تُحسب بالقران، والجباية على مراكب الغوص في الساحل العربي بالريال، والتجارة الكبرى مع الهند باللكّ من الروبيات.

## سوق بني كعب: التمر والصوف والحبوب

يبدأ بيلي من الشمال، من بلاد بني كعب حول المحمّرة والدورق، فيلاحظ أن تجارتهم «محدودة، وتجري في قنواتٍ مختلفةٍ بحسب فصول السنة»، ويقرّر أن «ثروة المحمّرة، كثروة شطّ العرب عامّة، قوامها التمر في الأساس». ثم يسرد قوائم دقيقة: الصوف بقيمة لكّ روبية، يُشحن إلى الكويت أو بوشهر ليُنقل في النهاية إلى الهند؛ والحبوب، ولا سيما القمح والشعير؛ والأرز من حقول الجرّاحي ورامهرمز؛ والروغن، أي السمن، إلى الكويت والبصرة. ويذكر رسومًا محددة: فالحبوب تدفع اثنين وثلاثين قرانًا عن الكارة، والروغن نصف قران عن الدبّة، وكل رأسٍ من الغنم ربع قران.

<quote by="—" source="«ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»">ها هنا بلدةٌ نظيفةٌ نشيطة، ذات سوقٍ رئيسٍ واسعٍ مفتوح، وبيوتٍ للسكنى كثيرةٍ متينةٍ من الحجر تمتدّ على هذا الشاطئ، وفيها نحو عشرين ألف نسمة، تجتذب التجّار العرب والفرس من كلّ ناحيةٍ بعدل حكمها وحرّية تجارتها</quote>

ويستوقف القارئَ تأمّلُ بيلي في أنماط العيش، إذ يميّز بين البدوي الرحّال الذي «يترفّع عن التجارة، ولكنه مع ذلك حريصٌ على المال، مستعدٌّ لأن يبيع سمنه وغنمه وحصانه»، وبين من استقرّ للزراعة، فتصبح عنده «التجارة ممكنة، ويُباع الحبّ، وتُنسج العباءات وتُصدَّر، ويُغرس النخيل».

## لنجة: سفنٌ كثيرة وطرقٌ شاقة

على الساحل الفارسي يتوقف بيلي عند لنجة، ويعدّها الميناء الذي يلي بوشهر في الأهمية في صنفه، ويحكي قصة صعودها: كانت قبل سنواتٍ قليلة «تكاد تكون مجهولة»، ثم ازدهرت ازدهارًا غير معتاد. ويلاحظ أن لها، فضلًا عن تجارتها البرية، تجارةً في النقل البحري؛ فهي تستورد الخشب من الهند، ولعلها تملك نحو اثنتي عشرة بغلةً حمولة كلٍّ منها من مئتين إلى ثلاثمئة طن، ونحو خمسين سفينة أصغر، «وخمسمئة أو ستمئة من «البقّارة» الساحلية الصغيرة».

ثم يقدّم ملاحظةً اقتصادية ذكية: «غير أنّ عدد القوارب التي يملكها ميناءٌ في الخليج ليس مقياسًا كافيًا لتجارته؛ فبندر عباس لا يكاد يملك قوارب، والسفن تمرّ به في طريقها شمالًا أو إلى الهند، فتنزل الشحنات وتأخذ غيرها ثم تمضي».

## الساحل العربي: اقتصادٌ يقوم على اللؤلؤ

حين يصل بيلي إلى ساحل الإمارات اليوم، يدوّن في حاشيةٍ جانبية أسماء الموانئ: رأس الخيمة، والشارقة، وأمّ القيوين، وعجمان، ودبي، و«أبوثابي» ويصحح: «وصوابه «بوظبي»». ويشرح المحقق أن المؤلف نبّه بذلك على أن النطق المحلي للاسم «بوظبي»، ويعرّف في حاشيته بني ياس بأنهم حلفٌ قبلي يقوده آل نهيان الأسرة الحاكمة في أبوظبي، وأن آل مكتوم حكّام دبي فرعٌ من آل بوفلاسة من بني ياس.

ويصف بيلي أساس العيش في هذه البلدات: «وتعتمد مستوطناتهم في معاشها أساسًا على ما يدرّه الغوص على اللؤلؤ». ويضيف أن مغاصات اللؤلؤ «مشاعةٌ بين القبائل، وتجتمع فيها آلاف المراكب في موسم الغوص، من أبريل إلى سبتمبر».

## تجارةٌ تمتد إلى زنجبار ومليبار

لم يكن أهل الساحل غوّاصين فحسب؛ يقول بيلي: «ويتّجر العرب البحريون كذلك مع زنجبار وساحل مليبار، وسمعتُ أنّ منغلور هي الميناء المفضّل لديهم على الساحل الأخير». ويعدّد البضائع: يصدّرون السمك المجفف، ويستوردون من مليبار الأرز وشيئًا من خشب الساج، ومن أفريقيا صواري مراكبهم، والقرنفل الذي يقول إن زنجبار تُنبت منه ما يكفي استهلاك العالم.

<figure class="art-fig"><img src="articles/11/2.webp" alt="صورة قديمة لمرفأ مسقط" width="1426" height="1200" loading="lazy" /><figcaption><span class="fig-cap">مرفأ مسقط ومقرّ القنصلية والوكالة البريطانية (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 50</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: صورةٌ فوتوغرافيةٌ لمصوّرٍ غير معروف، نحو 1870</span></figcaption></figure>

ويطرح بيلي سؤالًا طريفًا عن الأرز: لماذا يُفضَّل الأرز الهندي المستورد؟ ويجيب بأن «الأرزّ الهندي أخفّ، ويزداد انتفاخًا عند الطبخ، فهو أشدّ إشباعًا بثمنه، وأبطأ هضمًا».

## جدول السفن: أسطولٌ من الشارقة إلى أبوظبي

من أثمن ما في التقرير جدولٌ بالموارد البحرية للموانئ العربية، يحصي لكل ميناء البغلات العاملة في تجارة الهند وأفريقيا وحمولتها، والسفن الأصغر لتجارة الخليج، ومراكب اللؤلؤ. وفيه مثلًا أن لرأس الخيمة إحدى عشرة بغلة وخمس عشرة سفينة أصغر وخمسة عشر مركبًا للؤلؤ، وللشارقة ست بغلات وخمس وعشرون سفينة أصغر وأربعمئة مركب للؤلؤ، ولأمّ القيوين ثلاث بغلات وستون مركب لؤلؤ، ولعجمان أربع بغلات وخمسون، ولدبي أربع سفن أصغر وتسعون مركب لؤلؤ، ولأبوظبي بغلتان وعشر سفن أصغر وستمئة مركب للؤلؤ. ويلاحظ المحقق أنه نقل أرقام هذا الجدول من صورة الصفحة 68 من الأصل، وأن وحدة «المَوْرة» التي تُقاس بها الحمولة وحدةٌ لم يقف على تفسيرها.

ويختم بيلي الجدول بملاحظة عن الجباية: «والضريبة المفروضة على كلّ غوّاصٍ ومساعده تتفاوت عند شيوخ العرب المختلفين من ريالٍ وربعٍ إلى سبعة ريالات، ويتغيّر مقدارها أيضًا كلّ موسمٍ بحسب مشيئة الشيخ». ويقدّر أن موانئ أبوظبي والشارقة ورأس الخيمة قد تضمّ ثلاثة آلاف أسرة، وموانئ أمّ القيوين وعجمان ودبي ألفًا ومئتين أو نحو ذلك.

وينقل بيلي شهادةً أقدم لكمبل سنة 1845 تختصر العلاقة بين الغوص والمعاش: «على نجاح الغوص على اللؤلؤ، وعلى أرباح تجارة النقل التي يحرّكها، تتوقّف وسائلُ الحصول على ضرورات الحياة الأساسية، وعلى تلك الكماليات الصغيرة التي يرغب فيها العربي».

## البحرين: أغنى الإمارات البحرية

ينتقل بيلي إلى البحرين، فيقول: «ولكنّ أغنى إمارات العرب البحريين هي البحرين، وهي جزيرةٌ خصبةٌ في بعضها كثيرة الماء». ويدوّن في الهامش ميزانها التجاري: الصادرات اللؤلؤ والتمر المجفف والسبائك، والواردات من الهند في الأكثر: الأرز والقطن والأقمشة والتوابل، يُستهلك ربعها في البحرين ويعاد تصدير ثلاثة أرباعها. والصادرات ستة عشر لكًّا من الروبيات، والواردات اثنا عشر لكًّا، والمجموع ثمانية وعشرون لكًّا. ويذكر أن الإمارة قد ترسل نحو ألفٍ ومئتي مركب للغوص كل عام، وأن تجارتها تعتمد «في الأكثر على اللؤلؤ».

## الكويت: شاهدٌ على التجارة الحرة

أطول وقفات بيلي وأكثرها إعجابًا كانت عند الكويت. يقول: «وأعترف بأنّي، في رحلتي الأخيرة إلى الكويت، أُعجبت كثيرًا بالخُلق العربي؛ فوجدتُ فيه رباطةَ جأشٍ، وسدادَ رأي، وتبصّرًا، ونشاطًا حاضرًا». ويرى أن «كلّ ما يملكه العرب يبدو الأفضلَ من نوعه: خيلهم، وكلابهم، ودواجنهم، وبغالهم وحميرهم، وتمرهم، وقهوتهم، ولؤلؤهم، وتوابلهم، ولُبانهم».

ويرى أن تاريخ الكويت «شاهدٌ بليغٌ على ما يمكن أن يُصنع في الخليج بإعمال الحسّ السليم في خلق التجارة». ثم يرسم صورة البلدة: «ها هنا بلدةٌ نظيفةٌ نشيطة، ذات سوقٍ رئيسٍ واسعٍ مفتوح، وبيوتٍ للسكنى كثيرةٍ متينةٍ من الحجر تمتدّ على هذا الشاطئ، وفيها نحو عشرين ألف نسمة، تجتذب التجّار العرب والفرس من كلّ ناحيةٍ بعدل حكمها وحرّية تجارتها».

وتأتي الأرقام: تستورد الكويت من مليبار وبومباي ما قيمته نحو لكّين من الروبيات، أكثره من الأقمشة القطنية والأرز والبن والألواح والتوابل، وتصدّر نحو ثمانمئة رأسٍ من الخيل «بمتوسّط ثلاثمئة روبيةٍ للرأس»، وصوفًا بأربعين ألف روبية، وتمرًا بستين ألف روبية. ويذكر أنها ترسل نحو ثلاثين مركبًا في السنة إلى بومباي، كل مركب يحمل ألفي سلّة من التمر.

ويخصّ البحّارة والصنّاع بكلمة: «وبحّارة الكويت ذوو سمعةٍ عالية، ولعلّ منهم نحو أربعة آلافٍ يعملون في البحر». ويضيف تفصيلًا عن صناعة السفن في الخليج: «ولكنّ الكويت ترسل إلى مسقط في طلب بنّائي المراكب، لأنهم يُعدّون أمهر صنعة».

ويصف كيف يلتقي البر بالبحر في اقتصاد البلدة: فلحم الضأن والحليب والزبد يأتي من البدو الذين يتوافدون على البلدة وينصبون خيامهم على طول السور من خارجه، «ولكنهم يبيعون عند البوّابة، حيث يجلس الشيخ كلّ يومٍ ويراقب».

## خاتمة

يمرّ القارئ بتقرير بيلي فيجد الخليج العربي سوقًا واحدة متصلة الأطراف: صوفٌ من بلاد بني كعب يُشحن إلى الهند عبر الكويت، وأرزٌ من مليبار وقرنفل من زنجبار يصلان إلى الساحل العربي، ولؤلؤٌ يتجمّع في البحرين، وتمرٌ وخيلٌ تبحر من الكويت إلى بومباي، وعملاتٌ ثلاث تتعايش في ميزانٍ واحد. وقد جعل التحقيق هذه الأرقام الجافة مفهومة، حين شرح القران والريال واللكّ، وصحّح الأسماء، ونبّه إلى ما نقله من صور الأصل.

## المصدر

- الكتاب: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، القسم الثاني: تقرير لويس بيلي (Lewis Pelly) سنة 1863؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: تقديم المحقق وبداية التقرير ص 46–48؛ حاشيتا القران واللكّ ص 58؛ لنجة ص 72–73؛ الساحل العربي واللؤلؤ والتجارة مع زنجبار ص 88–90؛ جدول السفن والضريبة ص 91–92؛ البحرين ص 93؛ الكويت ص 95–99. وحاشية ريال ماريا تريزا من القسم الأول ص 18.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF، وبعضها تقريبي بصفحةٍ واحدة حيث تمتد الفقرة على صفحتين.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 18–99؛ المواضع الفرعية تقريبية بفارق صفحة إلى ثلاث صفحات، وبعض المقتبس في الفقرات التجارية يقع فعلًا في ص 55–57 (غير مذكورة أعلاه)، وفقرتان تمتدان على صفحتين (ص 55–56 وص 92–93).`,related:[`14-pearl-market-bombay-rosenthal`,`19-bushehr-port-1816-buckingham`,`22-sharjah-rak-1816-buckingham`]},{slug:`12-jebel-akhdar-1902-cox`,title:`من البريمي إلى الجبل الأخضر: الماء والنخيل والقرى في رحلة كوكس سنة 1902`,author:`—`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-10`,cover:`articles/12/1.webp`,excerpt:`في السادس من أبريل 1925 وقف بيرسي كوكس أمام الجمعية الجغرافية الملكية في لندن يروي رحلتين قام بهما قبل أكثر من عشرين عامًا، يوم كان وكيلًا سياسيًّا لحكومة الهند في مسقط.`,tags:[`البريمي`,`نزوى`,`الجبل الأخضر`,`الأفلاج`],sample:!1,book:`ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة`,coverCaption:`الحصن في نزوى — المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 174`,era:`1902`,eraSort:1902.1,words:1753,minutes:9,body:`في السادس من أبريل 1925 وقف بيرسي كوكس أمام الجمعية الجغرافية الملكية في لندن يروي رحلتين قام بهما قبل أكثر من عشرين عامًا، يوم كان وكيلًا سياسيًّا لحكومة الهند في مسقط. وقد ترجم المحقق هذه المحاضرة وجعلها القسم الثالث من كتاب «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925)». ويلخّص المحقق في تقديمه مسار الرحلة الأولى: أبحر كوكس في أبريل ومايو 1902 إلى أبوظبي، «ثم سار منها إلى البريمي والظاهرة والجبل الأخضر حتى بلغ مسقط في 29 مايو 1902».

لا نتوقف في هذا المقال عند أبوظبي، بل نتتبّع كوكس في الداخل: في الواحات والقرى والجبال. والخيط الذي يجمع هذه المحطات هو الماء: الأفلاج التي تحمله، والقحط الذي يحبسه، والمطر الذي ينتظره الناس.

## الراوي يعتذر

يبدأ كوكس محاضرته بتواضع: «حين دُعيتُ أخيرًا إلى إلقاء بحثٍ أصف فيه رحلاتٍ قصيرةً قمتُ بها منذ سنين كثيرة في داخل عُمان، تردّدتُ كثيرًا في القبول». ثم يحدد ما هو جديد في رحلته بعد أن يستعرض من سبقوه: «ومن هذا الاستعراض لما سبق من الرحلات يتبيّن أنّ المرحلة بين رأس الخيمة وضنك هي وحدها من طريقي التي لم يقطعها أوروبيٌّ من قبل».

<figure class="art-fig"><img src="articles/12/1.webp" alt="صورة قديمة لحصن نزوى" width="1142" height="653" loading="lazy" /><figcaption><span class="fig-cap">الحصن في نزوى</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 174</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1902؛ نُشرت سنة 1925</span></figcaption></figure>

## البريمي: ستون ألف نخلة تسقيها الأفلاج

بعد عبور الرمال من أبوظبي، يصل كوكس إلى واحة البريمي، ويصفها وصفًا مفصّلًا: «وكان سكان الواحة في زمن زيارتيّ يُقدّرون بنحو خمسة آلاف. ومساكنهم، المنتشرة في الغالب جماعاتٍ بين البساتين، مبنيّةٌ من الطين وسعف النخل معًا».

ثم يذكر مصدر الحياة فيها: «وماؤهم من أفلاجٍ كثيرةٍ تأتي من الجبال إلى الشرق، وفلجٍ أو فلجين من جبل حفيت أيضًا». ويشرح المحقق الفلج بأنه «قناةٌ تجري تحت الأرض أو على سطحها تجلب الماء من منابعه في الجبال إلى القرى والبساتين، وهو نظام ريٍّ قديمٌ في عُمان والإمارات».

وبفضل هذا الماء كانت الواحة غنية. يقول كوكس: «والتربة، على خفّتها، شديدة الخصب فيما يبدو، وقد قُدّر أنّ الواحة تحمل ما لا يقلّ عن ستين ألف نخلة». ويعدد بعد ذلك ما تنتجه من الفواكه والخضر: العنب والبطيخ والليمون والتين والرمان وقليل من المانجو، ومن المحاصيل القمح والشعير والذرة الرفيعة ومقادير من البرسيم.

ولا ينسى التجارة: «وتجارتها بعضها مع صحار على الساحل إلى الشرق، لكنّ معظمها اليوم مع الشارقة ودبي، وقد صارت دبي الآن ميناءً ترسو فيه بواخر شركة الهند البريطانية». وعن السوق يقول: «وليس في البريمي سوقٌ بالمعنى الصحيح؛ فالتجارة المحلّية تكاد تجري كلّها بالمقايضة في سوقٍ مكشوفةٍ تُقام في حيّ «الخضامة» من قرية البريمي».

ويذكر كوكس الحرّ الشديد في البريمي، إذ بلغت الحرارة وقت الإفطار 110 درجات فهرنهايت، ويوضح المحقق أنها «تعادل نحو 43 درجة مئوية».

## عبري: النخيل والنيلة

ويتوقف كوكس عند طريقة ركوب الإبل في المنطقة، فيقول: «وطريقة الركوب في عُمان، على مجرّد جلدٍ فوق أخفّ الأقتاب خلف السنام، تختلف تمامًا عن طريقتنا في الهند وغيرها، وهي وإن كانت أرفق بالناقة يقينًا، تحتاج من الراكب إلى براعةٍ أكبر».

<figure class="art-fig"><img src="articles/12/2.webp" alt="صورة قديمة لقرية بني حبيب على جانب مسيل في الجبل الأخضر" width="1165" height="930" loading="lazy" /><figcaption><span class="fig-cap">قرية بني حبيب في الجبل الأخضر</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 179</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1902؛ نُشرت سنة 1925</span></figcaption></figure>

<quote by="—" source="«ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»">وطريقة الركوب في عُمان، على مجرّد جلدٍ فوق أخفّ الأقتاب خلف السنام، تختلف تمامًا عن طريقتنا في الهند وغيرها، وهي وإن كانت أرفق بالناقة يقينًا، تحتاج من الراكب إلى براعةٍ أكبر</quote>

وفي عبري اختار أن ينزل في بستان نخل، ويروي أن الأهالي كانوا «ودودين جدًّا طيّبي النفس»، تحلّقوا حول خيمته النهار كله، ورافقه جمعٌ صغير حيثما ذهب. ومن قمة التل المشرف على البلدة يُرى منه «منظرٌ حسنٌ للسهل» الذي يضم قرى الغبّي والعراقي وبيت العينين والدريز.

من البريمي يتجه كوكس جنوبًا عبر إقليم الظاهرة، ويصف أكبر بلداته: «وعبري أهمّ مستوطنات إقليم الظاهرة، وفيها مساحةٌ هائلةٌ من غابات النخيل، وسوقٌ جيّد، ومسجدٌ جميل».

ويلفت نظره محصولٌ مختلف هو النيلة، التي تُزرع «على نطاقٍ واسعٍ للاستعمال المنزلي، حتى إنّ نصف أهل البلدة أصابعهم ووجوههم مصبوغةٌ بها». ويشرح المحقق أن النيلة «نباتٌ من الفصيلة البقولية (Indigofera tinctoria) كان من أقدم مصادر الصبغ الأزرق».

## كبارة: ثلاث سنين بلا مطر

لم تكن كل القرى في حال البريمي. ففي قرية كبارة، في كنف جبل الكور، رأى كوكس أثر القحط: «فوجدنا أهل هذه القرية في حالٍ سيّئةٍ جدًّا من القحط؛ فلم يصبهم المطر منذ ثلاث سنين، وأخذ ماؤهم يغور، والنخيل لا يحمل». ولم يمنعهم القحط من حسن الضيافة: «وجدناهم مهذّبين ودودين جدًّا، وعُرض علينا هنا لأوّل مرّةٍ في رحلتنا الدجاج والبيض للبيع من تلقاء أنفسهم».

ويلخّص المشهد في جملة واحدة: «وكان من المؤلم أن نرى آثار القحط الذي عمّ السنين الثلاث الأخيرة: أفلاجٌ تغور، ونخيلٌ يذبل، وأرضٌ كثيرةٌ خرجت من الزراعة».

## جبرين ونزوى: حصونٌ وأسواق

يمرّ كوكس بجبرين، ويعرّف المحقق حصنها: «حصن جبرين بناه الإمام بلعرب بن سلطان اليعربي، الذي حكم من 1679 إلى 1692، ودُفن فيه». ثم يصل إلى نزوى، فيخرج مبكرًا يلتقط الصور: صورةً «للسوق الفارسي القديم المعروف بـ«سوق الفارس»»، وصورةً «لمزارعٍ يخضّ أحواض النيلة في بساتين النخل»، ومنظرًا لاثنين من الشوارع الرئيسة والحصن.

<figure class="art-fig"><img src="articles/12/3.webp" alt="صورة قديمة لقرية الشريجة في الجبل الأخضر" width="1149" height="928" loading="lazy" /><figcaption><span class="fig-cap">الشريجة: منظرٌ نزولًا في وادي المعيدن نحو بركة الموز</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 180</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1902؛ نُشرت سنة 1925</span></figcaption></figure>

ويقول عن الحصن: «وهو حصنٌ منيعٌ جدًّا ذائع الصيت في تاريخ عُمان. وفيه خزّان ماءٍ واسع». ويضيف المحقق أن قلعة نزوى «من القرن السابع عشر، بُنيت في خمسينيات ذلك القرن في عهد الإمام سلطان بن سيف اليعربي، وإن كان أساسها أقدم، ويميّزها برجها الدائري الكبير». ويلفت كوكس إلى مدفع قديم في قبو الحصن يحمل شعار البرتغال، وحول فتحة إشعاله نقش فارسي، ويقول: «ويقول الوالي إنه يقال إنّ المدفع جُلب من جزيرة هرمز، ويبدو ذلك مرجّحًا».

## المطر في نزوى

في نزوى عاش كوكس لحظةً بقيت في ذاكرته بعد عشرين عامًا: «وفي ضحى هذا اليوم، 20 مايو، تلبّدت السماء بالغيوم، وفي العصر نزل مطرٌ لطيف. فطار الناس جميعًا فرحًا بهذه الزيارة المرحَّب بها، إذ كان القحط قد طال. وأقامت الطيور والضفادع احتفالًا صاخبًا، وكان من أعظم المتعة أن تحسّ المطر وتشمّ رائحته».

ويصف الطريق بعد نزوى: «وبين نزوى و«سمد الكندي»، محطّتي التالية، على ميلين فقط، رقعةٌ متّصلةٌ من بساتين النخل».

## الصعود إلى الجبل الأخضر

من تنوف يبدأ كوكس صعود الجبل الأخضر سيرًا على الأقدام، وأمتعته على الحمير. وفي الطريق يجد مثالًا على براعة الأهالي في حفظ الماء: «بلغنا صهريجًا لماء المطر في الصخور، صُنع بسدّ جانب شقٍّ عميقٍ في المسيل».

<figure class="art-fig"><img src="articles/12/4.webp" alt="صورة قديمة لقمة في الجبل الأخضر" width="1148" height="655" loading="lazy" /><figcaption><span class="fig-cap">جبل خضر: قمّةٌ من قمم الجبل الأخضر</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 183</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1902؛ نُشرت سنة 1925</span></figcaption></figure>

ثم يصل إلى قرية في وادي حبيب: «وفي أثناء ذلك بلغنا وادي حبيب، الذي يعطي اسمه لقريةٍ صغيرةٍ من نحو ثلاثين بيتًا لبني ريام، مبنيّةٍ على جانب مسيلٍ عميق، ذكّرتني كثيرًا بقرى كشمير». ويصف استقبال الأهالي: صعدوا إليهم واحدًا بعد واحد، كلٌّ منهم يقبض على أيديهم ويقول تحيته الريفية «مرحبًا بكم». وأُروا مصطبة مفروشة لإكرام الضيوف «تحيط بها كتلةٌ من أشجار الرمّان والجوز».

وفي تلك الليلة نزل المطر سيولًا وابتلّ متاعهم، لكن كوكس يقول: «ومع ذلك كان القرويون كرماء ودودين جدًّا، فأعانونا على حمل أشيائنا إلى المأوى، وجاؤونا بالماء والحطب».

## سيق والشريجة: زراعة المدرّجات

في الصباح بلغ كوكس سيق، ووصف بيوتها: «بيوتٌ من الحجر مطليّةٌ بطينٍ ضاربٍ إلى الحمرة، وسقوفٌ مسطّحةٌ من الطين، وأمامها بساتين متعاقبة». ويصف زراعتها: «وفيها قدرٌ من زراعة القمح والشعير في المدرّجات، ومحصولٌ حسنٌ من التوت والخوخ والمشمش، لكنّ الزراعة الرئيسة كانت محصولًا بديعًا من الرمّان». ويذكر أن رفاقه كانوا يسمّونها بصيغة التصغير «سويق». ويوضح المحقق أن الجبل الأخضر «سلسلةٌ من جبال الحجر طولها نحو ثمانين كيلومترًا، يبلغ ارتفاعها 3,018 مترًا».

ثم يواصل إلى الشريجة، وهي «قريةٌ أكبر من سيق وأجمل منظرًا، تقع عند رأس وادٍ عميقٍ بديعٍ يواجه الجنوب الغربي ويطلّ على بركة الموز». وينقل عن مايلز أن «مدرّجات الزراعة» تمتد نزولًا في وادي المعيدن ألف قدم أو أكثر.

وفي الشريجة بركة يغذيها نبع: «وتحت دار الضيافة مباشرةً بركةٌ مستديرةٌ جميلةٌ يغذّيها نبعٌ، كان يستحمّ فيها حينئذٍ عددٌ من الفتيان». نزل كوكس الماء، «لكنّ ماء النبع كان أشدّ برودةً من أن أمكث فيه طويلًا». ثم قال للقرويين مازحًا إنه يجلب المطر حيثما نزل، كما حدث في نزوى ووادي حبيب، «فما كادت الكلمات تخرج من فمي حتى أخذت عاصفةٌ تتجمّع فوقنا، وما لبثنا أن نزل علينا مطرٌ غزير، استمرّ العصر كلّه؛ فكان ذلك سارًّا لهم».

## على الذروة

من الشريجة صعد كوكس إلى ذروة السلسلة تحت القمة المسماة «خضر». ويصف المشهد: «ثم إذا وقفتَ عمليًّا على ذروة السلسلة، على ارتفاعٍ بين سبعة آلاف وثمانية آلاف قدم، انبسط أمامك مشهدٌ رائع». ويرى أسفله مطي وقاروت وبركة الموز، ومجاري السيول «تمتدّ كالأشرطة في السهل حتى تتلاشى في ضباب الصحراء البعيد».

<figure class="art-fig"><img src="articles/12/5.webp" alt="صورة قديمة لمطي عند سفح الجبل الأخضر" width="1146" height="922" loading="lazy" /><figcaption><span class="fig-cap">مطي عند سفح الجبل الأخضر</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 184</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1902؛ نُشرت سنة 1925</span></figcaption></figure>

وكان النزول شاقًّا: «ومن تلك النقطة ينحدر الطريق نحو ثلاثة آلاف قدمٍ إلى وادي حلفين على درجٍ شديد الانحدار (بل مفرط الانحدار) يقال إنّ الفرس صنعوه». ويصف التغير في الجو: «وفوق ذلك كنّا ننزل من مناخٍ لطيفٍ إلى أتون». ويختم المشهد بتفصيل صغير عن نباتات الجبل: «ولم نلقَ في نزولنا إلا امرأتين شابّتين تصعدان الجبل لجمع «البوت»، وهو ضربٌ من الكزبرة».

## حيوان عُمان وطيورها

يختم كوكس محاضرته بكلمة عن التاريخ الطبيعي لعُمان. ويذكر من الثدييات المها، و«طهر جاياكار»، وغزال مسقط، وغزال الريم، وأرنبًا بريًّا صغيرًا، والوبر وقط الزباد. ويوضح المحقق أن المها المذكورة «هي المها العربية (Oryx leucoryx)»، وأن الطهر «هو الطهر العربي، واسمه العلمي اليوم «Arabitragus jayakari»».

وعن الطيور يقول: «وأمّا الطيور، فلم يُجمع منها، على يد الكولونيل جاياكار والكولونيل مايلز وعلى يدي، إلا نحو 120 نوعًا، فما يزال أمامنا عملٌ كثير». ويختم بقوله: «ومتى صارت عُمان أيسر قليلًا على المسافرين، فإنها ستقدّم لعالم الطبيعة ميدانًا لم يُعمل فيه إلا قليلًا جدًّا».

## خاتمة

رحلة كوكس سجلّ لعلاقة الإنسان بالماء في داخل عُمان والإمارات: أفلاجٌ تسقي ستين ألف نخلة في البريمي، وقحطٌ يجفف أفلاج كبارة، وصهريجٌ يحفظ ماء المطر في الصخر، ومدرّجاتٌ تُنبت الرمان والخوخ والمشمش على سفوح الجبل الأخضر، وفرحٌ عامٌّ حين ينزل المطر في نزوى. وقد أضاف المحقق إلى النص حواشي تشرح الفلج والنيلة، وتعرّف بحصني جبرين ونزوى، وتصحح أسماء الحيوانات العلمية، فصار النص مدخلًا مفيدًا لقارئ اليوم.

## المصدر

- الكتاب: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، القسم الثالث: محاضرة السير بيرسي كوكس (Percy Cox) سنة 1925؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: تقديم المحقق ومطلع المحاضرة ص 133–137؛ حاشية الفلج ص 159؛ البريمي ص 161–162؛ الركوب وعبري وكبارة ص 166–169؛ جبرين ص 171؛ نزوى والمطر ص 173–174؛ وادي حبيب وسيق والشريجة ص 178–181؛ الذروة والنزول ص 182–183؛ التاريخ الطبيعي ص 184–186.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 133–186؛ بعض المواضع الفرعية تقريبية بفارق صفحة، ومنها مقتبس يقع فعلًا في ص 154 وص 175، وأربع فقرات تمتد على صفحتين (ص 161، 168، 169، 173 وما يليها).`,related:[`18-oman-plants-1838-aucher-eloy`,`20-oman-imams-aflaj-stuhlmann`,`22-sharjah-rak-1816-buckingham`]},{slug:`13-batinah-musandam-dhaid-1902-cox`,title:`على ساحل الباطنة ورؤوس الجبال: البحر والصيد والغوص في رحلة كوكس، ثم الطريق من رأس الخيمة إلى الذيد`,author:`—`,category:`التراث`,categorySlug:`heritage`,date:`2026-10-09`,cover:`articles/13/1.webp`,excerpt:`حين روى بيرسي كوكس رحلاته في عُمان أمام الجمعية الجغرافية الملكية سنة 1925، لم يبدأ من الصحراء بل من البحر.`,tags:[`مسقط`,`صحار`,`رأس الخيمة`,`الذيد`,`اللؤلؤ`,`الغوص`],sample:!1,book:`ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة`,coverCaption:`مسقط: حصن الجلالي — المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 138`,era:`1902`,eraSort:1902.2,words:1771,minutes:9,body:`حين روى بيرسي كوكس رحلاته في عُمان أمام الجمعية الجغرافية الملكية سنة 1925، لم يبدأ من الصحراء بل من البحر. فقد كان مقرّه في مسقط، ومنها أبحر إلى أبوظبي في رحلته الأولى سنة 1902، ثم حملته السفينة في رحلته الثانية إلى رأس الخيمة. وقد ترجم المحقق المحاضرة في القسم الثالث من كتاب «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925)».

نتبع في هذا المقال الجانب البحري من المحاضرة: المرفأ، والصيادين، والسفن الشراعية، وصناعة القديد من لحم القرش، والأخوار العميقة في مسندم، ومغاصات اللؤلؤ. ثم ننزل مع كوكس إلى البر في رأس الخيمة ونسير معه إلى واحة الذيد.

## مرفأ مسقط: بوابة البحر

يقول كوكس: «فالمرفأ ومداخل مسقط من البحر تؤلّف صورةً جذّابةً على نحوٍ غير عادي، ولها عندي سحرٌ خاصٌّ بها». ويحدد أول ما يراه القادم من الجنوب: «الحصنُ البرتغالي القديم عند الركن الجنوبي الشرقي من المرفأ، المعروف الآن بحصن الجلالي». ويعرّف المحقق هذا الحصن بأنه «حصن الجلالي، ويُسمّى أيضًا الحصن الشرقي»، بناه البرتغاليون في ثمانينيات القرن السادس عشر على حصن عماني أقدم.

<figure class="art-fig"><img src="articles/13/1.webp" alt="صورة قديمة لحصن الجلالي في مرفأ مسقط" width="1157" height="932" loading="lazy" /><figcaption><span class="fig-cap">مسقط: حصن الجلالي</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 138</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1902 أو قبلها؛ نُشرت سنة 1925</span></figcaption></figure>

ويصف كوكس عادة البحارة القدماء: إذا دار القادم حول رأس الجزيرة رأى «الصخورَ الجرداء التي تحمل السجلّ العريق للسفن التي زارت الميناء قديمًا وطلت أسماءها على تلك الصخور». ويضيف أن تجارة القوافل مع الداخل لا بد أن تمر بمطرح، «ميناء مسقط التجاري، الواقعة عند رأس خليجٍ أوسع منه وأقلّ حمايةً، على بعد ثلاثة أميالٍ إلى الشمال».

## صيادو سقطرى وقفّة الصيد

من مشاهد المرفأ التي بقيت في ذاكرة كوكس جماعات الصيادين الموسميين: «ففي الموسم الحارّ كانت تزوره دائمًا جماعاتٌ صغيرةٌ من صيّادي السمك من جزيرة سقطرى، يخيّمون في الخلجان المجاورة، ويكسبون عيشهم بالصيد من على أطوافهم».

ويصف أداة صيدهم: «وكان هؤلاء السقطريون يستعملون قفّة صيدٍ كبيرةً مستطيلة، يثبّتونها إلى القاع بحجارةٍ ثقيلة، ويصيدون بها البوري الأحمر والرمادي». وكانوا يغوصون أيضًا ليستخرجوا ما يسقط من السفن في المرفأ، ومن ذلك أحيانًا قصبات صيد أفلتت من أصحابها.

## آخر السفن الشراعية السريعة

ويتحسر كوكس على طرازٍ من السفن انقرض في زمنه: «وإلى سنواتٍ قريبةٍ جدًّا كانت البقيّةُ المتناقصة من طرازٍ قديمٍ جميلٍ من السفن الشراعية السريعة تتردّد بين مسقط وأنحاءٍ أخرى من الخليج وبين كلكتا، بل الصين». ويذكر أنه بقي منها نحو اثنتي عشرة سفينة حين جاء إلى الخليج أول مرة، ثم اختفت واحدة بعد أخرى.

<figure class="art-fig"><img src="articles/13/2.webp" alt="صورة قديمة لمدخل خور الشمّ (خور إلفنستون) في مسندم" width="1152" height="657" loading="lazy" /><figcaption><span class="fig-cap">مدخل خور إلفنستون (خور الشمّ)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 145</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس؛ نُشرت سنة 1925</span></figcaption></figure>

<quote by="—" source="«ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»">ومن الصناعات الساحلية المهمّة في كثيرٍ من هذه الموانئ إعدادُ لحم القرش لنقله إلى الداخل. فيُجفَّف في الشمس حتى يصير ضربًا من القديد، ويُحمل بكثرةٍ إلى الداخل، حيث هو من الأطعمة الأساسية</quote>

ويروي قصة عن سرعتها: «وادّعى الربّان العربي لإحداها مرّةً أنه قطع الرحلة من مسقط إلى كلكتا في سبعة عشر يومًا بريحٍ قويّةٍ من خلفه، وهذا يعني متوسّطًا قدره نحو سبع عقد».

## ساحل الباطنة: قرى الصيادين وأمواج الشاطئ

يبحر كوكس شمالًا على الساحل، ويصف ما بين مسقط وخورفكان: «فالداخل بين مسقط وخورفكان سهلٌ ساحليٌّ خصبٌ يقع تحت سفوح السلسلة الرئيسة، متوسّط عرضه نحو عشرين ميلًا. وعلى شطآنه عددٌ كبيرٌ من قرى الصيّادين». ويلاحظ أن البلدات تقع في الغالب قرب مصب وادٍ ينحدر من الجبال، «فيوفّر الماء للسقي».

ويذكر صعوبة النزول إلى البر: فمعظم الساحل «عرضةٌ لأمواجٍ متكسّرةٍ عنيفةٍ حين تهبّ الريح من البحر». فكان من عادته أن يلبس ثوب السباحة تحت ثيابه، وقد اضطر مرات عدة أن يخوض ويسبح «وثيابي على رأسي».

ويخص صحار بالذكر: «وأهمّ موانئ ساحل الباطنة صحار، مقرّ والي السلطان على الإقليم، وقاعدة قسمٍ إداري. ولها تاريخٌ مجيدٌ في سجلّات عُمان، ومنها نشأت أسرة سلاطين البوسعيد الحاكمة الحالية». ويضيف المحقق أن الأسرة تنحدر «من الإمام أحمد بن سعيد البوسعيدي (1694–1783)، الذي كان من كبار تجّار صحار».

## قديد القرش: طعامٌ للداخل

ومن الصناعات التي سجلها كوكس على هذا الساحل: «ومن الصناعات الساحلية المهمّة في كثيرٍ من هذه الموانئ إعدادُ لحم القرش لنقله إلى الداخل. فيُجفَّف في الشمس حتى يصير ضربًا من القديد، ويُحمل بكثرةٍ إلى الداخل، حيث هو من الأطعمة الأساسية». ويشرح المحقق أن الكلمة في الأصل «biltong»، «وهو اللحم المقدّد المجفّف المعروف في جنوب أفريقيا، فترجمناه بالقديد».

<figure class="art-fig"><img src="articles/13/3.webp" alt="صورة قديمة لقرية كمزار في مسندم" width="1600" height="1006" loading="lazy" /><figcaption><span class="fig-cap">كمزار على ساحل مسندم (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 146</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: تصوير هرمان بورخارت (1857–1909)، نحو 1908</span></figcaption></figure>

ويعترف كوكس بأن الطعم لم يعجبه، لكنه يقرّ بفائدته: «ولكنه، لمّا كان الأهالي يحبّونه فيما يبدو، زادٌ نافعٌ جدًّا سهل الحمل لأتباع المسافر».

## رؤوس الجبال وخور الشمّ

بعد خورفكان يتغير الساحل: «وكلّما اقتربنا من خورفكان انتهى السهل الساحلي، ودنونا من الموضع الذي تنحدر فيه التلال إلى البحر وتبدأ في تكوين الرأس الوعر الحديديّ الحافّة المعروف بـ«رؤوس الجبال»». ويذكر خليجين عميقين قرب طرف الرأس يعرفهما الإنجليز بخور «مالكوم» وخور «إلفنستون»، ويقول: «والمناظر في الخور تذكّر كثيرًا بالفيوردات النرويجية».

ويذكر كوكس أطلال محطة الكابل البريطانية في الخور، ويقول إنها كانت قائمة «في النصف الأول من القرن التاسع عشر». وهنا يصحح المحقق: «في هذا وهمٌ من المؤلف في التاريخ؛ فمحطّة تقوية الكابل البحري في خور الشمّ («خور إلفنستون») أُنشئت سنة 1864 على الجزيرة المعروفة بجزيرة التلغراف، وهُجرت في ديسمبر 1868 حين حُوّل الكابل إلى هنجام وجاسك».

## أهل الرأس: الصيد والصدف

يتحدث كوكس عن سكان هذا الجزء من الرأس، ويذكر أنهم يتبعون قبيلة الشحوح. ويوضح المحقق أن ما يقوله المؤلف عن أصلهم «رأيٌ له»، وأن «الشحوح قبيلةٌ عربيةٌ تسكن الإمارات وعُمان»، ويُرجَّح أن عنصرها العربي الغالب «يتّصل بهجرة مالك بن فهم من اليمن».

<figure class="art-fig"><img src="articles/13/4.webp" alt="صورة قديمة لغواصي اللؤلؤ" width="800" height="542" loading="lazy" /><figcaption><span class="fig-cap">غوّاصو اللؤلؤ العرب في عملهم في الخليج (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 148</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب جورج فريدريك كونز «كتاب اللؤلؤة» (The Book of the Pearl)، 1908</span></figcaption></figure>

ويصف كوكس معاشهم البحري: فهم يقتاتون بالسمك ومعه قليل من الأرز، «وفي القرى الأكثر عزلةً تعتمد خاصّةً على صدفٍ من جنس «سترومبس» يوجد بأعدادٍ كبيرةٍ في كلّ خلجانهم». ويضيف: «وإذا طفتَ في الخور خرج أحيانًا قاربٌ من قريةٍ صغيرةٍ على الشاطئ يعرض حطبًا أو سمكًا للبيع». ويصف بيوتهم بأنها «مبنيّةٌ من كتل الحجر غير المثبّتة».

## مغاصات اللؤلؤ: حياة الساحل

يترك كوكس الخور متجهًا إلى الجنوب الغربي: «وإذ نترك الخور ونمضي في طريقنا نحو الجنوب الغربي على الساحل المتصالح، نلامس حافّة مغاصات اللؤلؤ الكبرى». ويقدّر أن صناعة اللؤلؤ ترسل كل عام «لآلئ قيمتها في السوق نحو ثلاثة ملايين جنيه». ويقول: «فالغوص على اللؤلؤ هو في الواقع حياة سكّان الشواطئ الغربية للخليج كلّها، ويعمل فيه أكثر من عشرين ألفًا منهم». ويشير المحقق إلى أن هذه الأرقام «تقديرٌ منه لزمانه».

ويفرّق كوكس بين نوعين من الغوص: «ويجري الغوص على ضربين: الغوص في البحر العميق (بالمعنى النسبي) والغوص قرب الشاطئ». الأول تقوم به سفن شراعية متوسطة الحجم «تحمل زاد أسبوعين أو ثلاثة»، والثاني تخرج فيه القوارب لليوم وحده، «وتعود بصيدها عند الغسق».

ويصف أدوات الغواص: «فالعُدّة ليست إلا مِلقطًا من القرن للأنف، وأغطيةً من الجلد للأصابع، وسلّة، وسكّينًا، وحبلًا للإشارة. ويستعين الغوّاصون على النزول بحجرٍ ثقيلٍ يُسحب إلى أعلى ما إن يبلغوا القاع».

وهنا يضيف المحقق الأسماء المحلية لهذه الأدوات: «تسمّي سجلّات التراث في أبوظبي ملقط الأنف «الفطام»، والسلّة التي يجمع فيها الغيص المحار «الديين»، والحجرَ الذي ينزل به «الثقل» أو «الحجر»، والحبلَ الذي يصله بالسيب على ظهر السفينة «اليدا»».

## رأس الخيمة: مرسًى على لسانٍ رملي

في رحلته الثانية نزل كوكس في رأس الخيمة ليسلك طريقًا جديدًا إلى البريمي. ويصف موقع البلدة: «وبلدة رأس الخيمة مبنيّةٌ على لسانٍ رمليٍّ طويلٍ ضيّقٍ يوازي الساحل، ويحصر بينه وبين البرّ خورًا واسعًا يوفّر مرسًى ملائمًا جدًّا ومحميًّا». ويذكر أنه لم يجد صعوبة في الحصول على الإبل، وأنه بات ليلة واحدة في حصن الشيخ.

<figure class="art-fig"><img src="articles/13/5.webp" alt="صورة قديمة لموضع يسمّيه الأصل Idaiyeh" width="1156" height="662" loading="lazy" /><figcaption><span class="fig-cap">«إديّة» (كذا في الأصل: Idaiyeh)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 158</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس؛ نُشرت سنة 1925</span></figcaption></figure>

## من الصير إلى الذيد: الآبار والأفلاج

يقارن كوكس هذا الطريق بطريق أبوظبي: فهناك كان الطريق «قفرًا من الرمل»، أما هنا «فسهولٌ رمليةٌ أو حصويةٌ تكاد تكون مستوية»، معظمها تكسوه الأشجار البرية والنبات بوفرة، «وتنتشر فيه الآبار على مسافاتٍ متقاربةٍ نسبيًّا». ويلاحظ أن «أسماء الأماكن مأخوذةٌ في الغالب من أهمّ الآبار في الناحية».

وأول ما يمر به سهل الصير: «ويمتدّ نحو سبعة أميالٍ جنوب رأس الخيمة، وفيه عشر قرًى يسكنها نحو 2,500 نفس، وبساتين فيها نحو 10,000 نخلة، وريّها من الآبار».

ثم يصل إلى الذيد، ويقول إنها «من توابع الشارقة، كبرى إمارات القواسم على ساحل الإمارات المتصالحة». ويذكر أن من أهم مهام الوالي فيها «الإشراف على توزيع الماء من الفلج البديع، أي القناة الجوفية، الذي يسقي الواحة». ويحدد مصدر هذا الفلج: «ويأخذ هذا الفلج ماءه من وادي «حقلة» في سفوح السلسلة الجبلية الفقرية على ثمانية عشر ميلًا، ويمرّ بفناء الحصن عند دخوله المستوطنة». ويضيف أن القرية من نحو 150 أسرة، وأن محيط الأرض المزروعة نخلًا نحو ثلاثة أميال. وكانت الذيد مصيفًا: «وكان شيوخ القواسم وأسرهم يقضون فيما مضى بعض أشهر الصيف في الذيد، أمّا اليوم فيقال إنّ الرياح الحارّة تجتاحها على الدوام حتى كفّت عن أن تكون مصيفًا». ويذكر المحقق أن الذيد «اليوم قاعدة المنطقة الوسطى من إمارة الشارقة».

## سهل مساكن ونباتات الصحراء

في المرحلة الأخيرة قبل البريمي يصف كوكس سهل مساكن: «فسهل مساكن هذا يقع في منخفضٍ بين التلال الرملية، تنتشر فيه بوفرةٍ أشجار السَّمُر، وكُتَل نبات الأرطى، وغيرها من نبات الصحراء». ويشرح المحقق أن «السَّمُر ضربٌ من السنط (الأكاسيا)، والأرطى جنسٌ من النبات الصحراوي (Calligonum)». ومن هناك يبدو جبل حفيت أول مرة على نحو عشرين ميلًا.

<figure class="art-fig"><img src="articles/13/6.webp" alt="صورة قديمة لسهل مساكن" width="1159" height="664" loading="lazy" /><figcaption><span class="fig-cap">سهل مساكن</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 160</span><span class="fig-orig">أصل الصورة: تصوير بيرسي كوكس، 1905؛ نُشرت سنة 1925</span></figcaption></figure>

## خاتمة

يجمع هذا الجزء من محاضرة كوكس صورة الحياة البحرية على سواحل عُمان والإمارات في مطلع القرن العشرين: صيادون يأتون من سقطرى بقفافهم، وسفن شراعية تقطع الطريق إلى كلكتا في سبعة عشر يومًا، وقديد قرش يُحمل إلى الداخل، وقرى في رؤوس الجبال تعيش على السمك والصدف، وعشرون ألف غواص على مغاصات اللؤلؤ. ثم ينقلنا إلى البر، إلى الآبار والأفلاج والنخيل بين رأس الخيمة والذيد. وقد أضاف التحقيق إلى النص الأسماء المحلية لأدوات الغوص، وصحح تاريخ محطة الكابل، وعرّف بالقبائل والنباتات.

## المصدر

- الكتاب: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، القسم الثالث: محاضرة السير بيرسي كوكس (Percy Cox) سنة 1925؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: مرفأ مسقط والصيادون والسفن ص 137–141؛ ساحل الباطنة وصحار وقديد القرش ورؤوس الجبال ص 143–145؛ أهل الرأس ومغاصات اللؤلؤ ص 146–147؛ حاشية أسماء أدوات الغوص ص 147؛ رأس الخيمة والطريق إلى الذيد ومساكن ص 157–160.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 137–160؛ المواضع الفرعية تقريبية بفارق صفحة، ومنها مقتبس يقع فعلًا في ص 142 وص 160، وفقرات تمتد على صفحتين (ص 144، 146، 147، 159 وما يليها).`,related:[`01-pearl-banks-rosenthal`,`27-famous-pearls-rosenthal`,`11-gulf-trade-1863-pelly`]},{slug:`14-pearl-market-bombay-rosenthal`,title:`من مغاصات الخليج العربي إلى سوق بومباي: كيف كان اللؤلؤ يُوزن ويُسعَّر ويُباع`,author:`ليونار روزنتال`,category:`الاقتصاد والتجارة`,categorySlug:`economy-trade`,date:`2026-10-08`,cover:`articles/14/1.webp`,excerpt:`كتب ليونار روزنتال كتابه «في مملكة اللؤلؤ» بعين تاجر عاش من هذه التجارة.`,tags:[`اللؤلؤ`,`بومباي`,`البحرين`,`التجارة`],sample:!1,book:`في مملكة اللؤلؤ`,coverCaption:`لوحة رمزية لإدمون دولاك عن أساطير اللؤلؤ، وليست صورةً لتجارة اللؤلؤ: «لؤلؤة الخنزير البرّي» (La Perle du Sanglier): «واللؤلؤة التي تنتجها أنياب الخنزير البرّي هي وحدها التي تشبه طرف هذه الأنياب» (الفصل الرابع عشر) — المصدر: «في مملكة اللؤلؤ»، ص 66`,era:`1907`,eraSort:1907,words:1672,minutes:8,body:`كتب ليونار روزنتال كتابه «في مملكة اللؤلؤ» بعين تاجر عاش من هذه التجارة. ويقول المحقق في مقدمته إن قيمة الكتاب «في ما ينقله صاحبه من خبرة السوق في مطلع القرن العشرين: كيف كان اللؤلؤ يُشترى في مواطنه، وكيف يُوزن ويُسعَّر ويُقشَّر ويُنظم، وكيف كانت تتوزّع تجارته بين بومباي وباريس ولندن ونيويورك».

تناول مقالٌ سابق في هذه السلسلة مغاصات اللؤلؤ نفسها. أما هذا المقال فيتبع اللؤلؤة بعد خروجها من البحر: إلى أي سوق تُحمل، وبأي ميزان تُوزن، وكيف يُحسب ثمنها، ومن هم التجار الذين يتداولونها.

## التاجر وصلته بالخليج

يعرّف المحقق بالمؤلف: ترك ليونار أهله في الرابعة عشرة قاصدًا باريس، «فاشتغل فيها بتجارة اللؤلؤ الطبيعي». ويضيف: «وفي مطلع القرن العشرين أخذ مع إخوته الأصغر منه يشترون اللؤلؤ من فنزويلا ثم من البحرين».

<figure class="art-fig"><img src="articles/14/1.webp" alt="لوحة ملوّنة لإدمون دولاك من طبعة 1920 تصوّر أسطورة لؤلؤة الخنزير البرّي" width="1322" height="1600" loading="lazy" /><figcaption><span class="fig-cap">لوحة رمزية لإدمون دولاك عن أساطير اللؤلؤ، وليست صورةً لتجارة اللؤلؤ: «لؤلؤة الخنزير البرّي» (La Perle du Sanglier): «واللؤلؤة التي تنتجها أنياب الخنزير البرّي هي وحدها التي تشبه طرف هذه الأنياب» (الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 66</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

وينقل المحقق عن ليونار بويي، أمين معرض «باريس مدينة اللؤلؤ»، تفصيلًا عن صلة الأسرة بالخليج: «وكان أخوه فيكتور، وهو يُحسن العربية، هو الذي قصد البحرين سنة 1906، وتجاوز سلسلة الوسطاء المعتادة، ثم أقام بعد ذلك في بومباي».

ويذكر المحقق في منهجه أنه ترجم عبارة «Golfe Persique» حيث وردت «بـ«الخليج العربي»، جريًا على الاستعمال العربي».

## أكبر مغاصات العالم

يضع روزنتال مغاصات الخليج العربي في المقدمة دون منازع. يقول: «ولعلّ القارئ سيدهش إذا علم أن أهمّ مغاصات الدنيا، مغاصات الخليج العربي، تُخرج وحدها ما متوسطه أربعون إلى خمسين مليونًا من اللآلئ، على حين لا تُخرج المغاصات الأخرى مجتمعةً إلا عشرين مليونًا في الأكثر». ويصحح المحقق قراءة هذه الأرقام: «المراد، فيما يدلّ عليه السياق، قيمة المحصول بالفرنكات، لا عدد اللآلئ».

ويكرر المؤلف الفكرة في فصل لاحق: «فمغاصات الخليج العربي تُنتج في العام ما متوسطه 40 إلى 60 مليونًا من اللآلئ، والمغاصات الأخرى مجتمعةً من 15 إلى 20 مليونًا».

## نصيب الغواص

قبل أن نصل إلى السوق، يتوقف روزنتال عند من يُخرج اللؤلؤ من البحر: «ولننظر، مثلًا، في حال غوّاصي الخليج العربي: فهم أربعون إلى خمسين ألفًا، بأسرهم، يعيشون من مغاصات اللؤلؤ وحدها». ثم يحسب نصيبهم: صاحب السفينة يتقاضى نحو أربعين في المئة من حصيلة البيع، فيبقى للغواصين وأسرهم ما يقارب «خمسمئة فرنكٍ للفرد في الجملة»، ويضيف أن الغواص «يدفع أحيانًا ثمن الأرز والقهوة والسكّر أغلى مما يدفعه الأوروبي».

<quote by="ليونار روزنتال" source="«في مملكة اللؤلؤ»">ويجلس هؤلاء على الأرض في حجرةٍ صغيرةٍ مغلقة، على الرغم من الحرارة التي تبلغ في الغالب خمسًا وأربعين درجةً في تلك البلاد. وهم على مهارةٍ قلّ نظيرها، يثقبون اللآلئ من جانبٍ إلى جانبٍ بسرعةٍ خارقة، لا يخطئون أبدًا</quote>

## سوق بومباي

يقول روزنتال: «أهمّ أسواق اللؤلؤ سوقُ بومباي». ويشرح المحقق أن بومباي هي «الاسم الرسمي لمدينة مومباي إلى سنة 1995، وهي اليوم عاصمة ولاية مهاراشترا في الهند».

ويصف المؤلف السوق: «وهي، ككل أسواق الشرق، مجموعةٌ من الحوانيت الصغيرة الواطئة يعجّ فيها جمعٌ من التجار والسماسرة». ويصف طريقة الفحص: «وتُعقد الصفقات فيها والقوم جلوسٌ على الأرض، وتُفحص البضائع على ظاهر الكفّ. والمشتري الحاذق يدرس كل لؤلؤةٍ على حدة».

ويحدد من يأتي إلى هذه السوق: «وإلى بومباي يأتي العرب من الخليج العربي، ومن مصوّع، ومن سيلان، ومن جزر الهند الهولندية، ومن سائر المغاصات المجاورة في المحيط الهندي، ليبيعوا لآلئهم». وفي المقابل يأتي الهندوس، «وهم عارفون مشهورون، أبًا عن جدّ، ليشتروا صفقاتٍ كبيرة».

## لغة الأصابع تحت المنديل

من أطرف ما يرويه روزنتال طريقة التفاوض الصامتة: «فإذا حان وقت العروض غطّى البائع والمشتري أيديهما بمنديل، وتعارفا أثمانهما بالضغط على هذه السُّلامى أو تلك من الأصابع». ويرى أن «لغة الأصابع واليد مستعملةٌ في الهند وفي الشرق كله منذ أبعد العصور».

ويستشهد بالرحالة الفرنسي تافرنييه، الذي يعرّفه المحقق بأنه «تاجر جواهر ورحّالةٌ فرنسي، قام على نفقته بستّ رحلاتٍ إلى فارس والهند بين سنتي 1630 و1668». وينقل عنه تفاصيل هذه اللغة: «إذا أخذ البائع يد المشتري كلها فمعناه ألف، وكلّما ضغطها كان ذلك آلافًا من الباغودات أو من الروبيات، بحسب العملة التي يدور عليها الكلام». ثم: «وإذا لم يأخذ إلا الأصابع الخمس فمعناه خمسمئة، وإن لم يأخذ إلا إصبعًا واحدةً فمعناه مئة». ويشرح المحقق الباغودا بأنها «عملةٌ من الذهب أو نصف الذهب، ضربتها دولٌ هنديةٌ في جنوب الهند».

ومع ذلك فالسر لا يدوم: «وهذه المفاوضة الخفيّة لا تمنع السوق كلها من أن تعلم بالصفقة المعقودة بعد دقائق قليلة».

## الغربال والثقّاب

يتابع روزنتال الصفقة بعد شرائها: «وهذه الصفقات المسمّاة «الأصلية» تُعرض في مناديل من القطن الأحمر، وتحوي لآلئ من كل الأحجام، الجيّد منها والرديء، كما خرجت من المغاصات». ثم يُفرز اللؤلؤ بالغرابيل: يبدأ المشتري «بتمريرها في الغربال رقم 6، فيمرّ منه أصغرها، وهو مخصّصٌ للصيدلة»، ثم في غربال آخر، فتُصنَّف بحسب الجودة واللون.

ثم تأتي مرحلة الثقب، ويُعهد بها «إلى فرقةٍ من الثقّابين، تتألف أحيانًا من خمسين إلى ستين عاملًا». ويصف عملهم: «ويجلس هؤلاء على الأرض في حجرةٍ صغيرةٍ مغلقة، على الرغم من الحرارة التي تبلغ في الغالب خمسًا وأربعين درجةً في تلك البلاد. وهم على مهارةٍ قلّ نظيرها، يثقبون اللآلئ من جانبٍ إلى جانبٍ بسرعةٍ خارقة، لا يخطئون أبدًا».

## نقابة بومباي وتجفيف اللؤلؤ

يذكر روزنتال كيانًا كان يتحكم في السوق كلها: «منذ عشر سنين أو اثنتي عشرة سنة تقريبًا كانت لا تزال في بومباي مخزوناتٌ كبيرةٌ من اللؤلؤ تحوزها نقابة. وكانت هذه النقابة، المؤلفة في معظمها من أغنياء التجار العرب والهنود، هي المنظّم الحقيقي لسوق اللؤلؤ العالمية». ويضيف أنها كانت تشتري وحدها جزءًا كبيرًا من محصول مغاصات الخليج العربي، ولا ترسل إلى أوروبا إلا ما يكفي «لئلّا تُثقَل الأسواق».

<figure class="art-fig"><img src="articles/14/2.webp" alt="لوحة ملوّنة لإدمون دولاك من طبعة 1920 تصوّر أسطورة لؤلؤة الخيزران" width="1322" height="1600" loading="lazy" /><figcaption><span class="fig-cap">لوحة رمزية لإدمون دولاك عن أساطير اللؤلؤ، وليست صورةً لتجارة اللؤلؤ: «لؤلؤة الخيزران» (La Perle du Bambou): «وهذا الخيزران لا ينبت في كل الأرض» (الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 74</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

ويشرح سبب شراء النقابة بآجال طويلة: «وظلّت هذه النقابة زمنًا طويلًا تشتري لآلئ الخليج العربي إلى أجلٍ قدره سنتان أو ثلاث». ولم يكن للتأجيل من غرض «إلا إتاحة تجفيف اللآلئ التي كانت تزداد بياضًا مع الزمن».

## أزمة 1907: الشراء من الغواصين مباشرة

ويروي روزنتال كيف تغير ميزان هذه التجارة في زمنه: «ومنذ عشر سنين كانت تجارة اللؤلؤ الكبرى كلها في أيدي الإنجليز، وهو أمرٌ طبيعيٌّ إلى حدٍّ ما، إذ كانت أهمّ المغاصات في مستعمراتهم». ثم جاءت الأزمة المالية سنة 1907، فطالب الإنجليز الهندوس بردّ الأموال المسلَّفة، واضطر هؤلاء إلى البيع في وقت عصيب.

وبعد الأزمة سعت بيوت فرنسية «إلى الشراء من الغوّاصين مباشرةً دون المرور بوساطة بومباي». ويقول: «وعندئذٍ رأينا، لأوّل مرّة، تاجرًا فرنسيًّا يشتري وحده من اللؤلؤ ما قيمته عشرون مليونًا في الخليج العربي، وعشرون مليونًا أخرى في بومباي». ويتفق هذا مع ما نقله المحقق عن رحلة فيكتور روزنتال إلى البحرين سنة 1906 وتجاوزه سلسلة الوسطاء.

## موازين اللؤلؤ: من البَصري إلى حبّة القمح

ينتقل روزنتال إلى الأوزان: «وحدة الوزن المستعملة في اللؤلؤ هي القيراط، وهو يساوي أربع حبّات». ويذكر المحقق أن أصل الكلمة الأوروبية «من الإيطالية carato، وهي من العربية «قيراط»، المأخوذة بدورها من اليونانية kerátion، أي «بذرة الخرّوب»».

ولكل سوق ميزانها. ففي بومباي «الوزن المسمّى «رَتّي» (Rati) أو «بونا» (Poonah)»، ويشرح المحقق أن الرتّي «وحدة وزنٍ هنديةٌ تقليدية، أساسها الوزن الاسمي لبذرة نبات «الغُنجا»». أما في الخليج: «وفي الخليج العربي يُستعمل «البَصري» (Basri)، وهو أثقل من «البونا» بخمسة عشر في المئة».

ويذكر روزنتال طريقة أبسط: «وكثيرًا ما تُوزن اللآلئ المفردة بحبّات القمح المسمّاة «حبّة» (Habba)، أو بحبّات الأرز؛ فالحبّة من القمح توافق قيراطًا، وحبّة الأرز توافق حبّة (grain)».

## الثمن: مربّع الوزن

يقول روزنتال إن التاجر حين يفحص صفقة يسأل البائع دائمًا: «كم تساوي هذه الصفقة بمرّةٍ واحدةٍ من وزنها؟». ويشرح القاعدة: «فثمن اللؤلؤة يتناسب مع مربّع وزنها (مقدّرًا بالحبّات)؛ فاللؤلؤة التي تزن عشر حبّاتٍ مثلًا تساوي بمرّةٍ واحدةٍ من وزنها: 10 × 10 = 100 فرنك». ويشرح المحقق هذا الاصطلاح ويذكر أنه أعاد رسم جدول المثال «من صورة الصفحة 58 من طبعة 1920، لأن النص الإلكتروني قد شوّههما».

ويضيف أن قيمة اللؤلؤ لا ترتفع مع الحجم بلا حد: «فإلى حبّتين تكون قيمتها ضعيفةً إلى حدٍّ ما، وتكاد هذه القيمة تتضاعف فيما بين حبّتين وأربع حبّات. وأعلاها قيمةً اللآلئ التي تزن من خمس عشرة حبّةً إلى خمسٍ وثلاثين (لا سيما إذا كانت مستديرة)».

ويقارن بين الماضي وزمنه: «وليس نادرًا اليوم أن تُقدَّر اللآلئ الجميلة كل الجمال بثلاثمئة ضعف وزنها، وقد كانت تُقدَّر منذ عشرين سنةً بخمسة أضعاف الوزن». ويضيف أن «اللآلئ الأزرار، مع تساوي الجودة، تُقدَّر بنحو ثلث قيمة المستديرة».

## تاجر اللؤلؤ: عمرٌ من التعلم

يختم روزنتال حديثه عن التجارة بوصف المهنة نفسها: «تجارة اللؤلؤ الطبيعي من تلك التجارات التي تقتضي دراستها عمرًا كاملًا». ويرى أن النجاح فيها لا يأتي إلا بعد خبرة طويلة، ويضيف: «وتجارة اللؤلؤ لا صلة لها بالتجارات المنتظمة أو الصناعية؛ فالتاجر لا يستطيع أن ينيب عنه أحدًا، بل هو الذي ينبغي أن يشتري ويبيع. فما من صفقتين من اللؤلؤ تتشابهان».

وتنقسم التجارة اختصاصات: «فبعض التجار لا يتعاطون إلا العقود الجيّدة، وبعضهم لا يُعنى إلا بالعقود العاديّة، والمختصّون بالأزرار، أو بأزواج الأزرار، لا يعملون شيئًا غير ذلك». ويعرّف العقد المثالي: «فالعقد الكامل هو الذي يكون لونه واحدًا من أوّله إلى آخره، وتدرّجه منتظمًا». ويلاحظ رواج العقود في زمنه: «فما من زواجٍ إلا ويحلّ فيه عقد اللؤلؤ محلّ الشال الهندي التقليدي الذي كان أجدادنا يقدّمونه هديةً في العرس».

## خاتمة

يرسم كتاب روزنتال رحلة اللؤلؤة من مغاصات الخليج العربي، حيث يعيش عشرات الآلاف من الغواصين على محصولها، إلى سوق بومباي، حيث تُفاوَض عليها الأصابع تحت المناديل، وتُفرز بالغرابيل، وتُثقب في حجرات حارة، وتُخزَّن سنوات لتبيضّ، ثم تُوزن بالبصري أو بحبّة القمح، ويُحسب ثمنها بمربّع وزنها. وقد أضاف المحقق إلى هذا الوصف تعريفات للمدن والعملات والأوزان، وصحّح قراءة الأرقام، وأعاد رسم الجداول من الطبعة الأصلية.

## المصدر

- الكتاب: «في مملكة اللؤلؤ» (Au royaume de la perle)، تأليف: ليونار روزنتال (Léonard Rosenthal)، بلوحات إدمون دولاك؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: مقدمة التحقيق ص 3–6؛ الفصل السادس «معالجة اللؤلؤ» (نقابة بومباي) ص 59–60؛ الفصل السابع «الوزن والثمن» ص 63–67؛ الفصل الثامن «أسواق اللؤلؤ» ص 69–75 (وأزمة 1907 ص 72)؛ الفصل التاسع «مستقبل اللؤلؤ» ص 79؛ الفصل العاشر «التجارة والتجار» ص 83–86؛ والفصل الحادي عشر.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- الصورتان لوحتان رمزيتان من طبعة 1920 تصوّران أساطير اللؤلؤ الهندية، ولا تصوّران الخليج العربي.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 3–90؛ بعض المواضع الفرعية تقريبية بفارق صفحة، ومنها مقتبس يقع فعلًا في ص 80 وص 90، وعدة فقرات تمتد على صفحتين (ص 63–64، 70–72، 75، 86).`,related:[`11-gulf-trade-1863-pelly`,`23-muscat-1816-buckingham`,`19-bushehr-port-1816-buckingham`]},{slug:`15-bani-kaab-1831-stocqueler`,title:`في بلاد بني كعب سنة 1831: بيوت القصب والمجلس والزيّ والخيل`,author:`ج. هـ. ستوكيلر`,category:`التراث`,categorySlug:`heritage`,date:`2026-10-07`,cover:`articles/15/1.webp`,excerpt:`في ربيع سنة 1831 ترك الرحالة الإنجليزي ستوكيلر الخليج العربي واتجه شمالًا إلى بلاد بني كعب، القبيلة العربية التي كانت تسكن السهول بين شط العرب وجبال البختيارية.`,tags:[`بنو كعب`,`الفلاحية`,`الخيل`],sample:!1,book:`خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)`,coverCaption:`«شيخٌ من بني كعب» (Chabean Sheikh) — المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 67`,era:`1831`,eraSort:1831.1,words:1627,minutes:8,body:`في ربيع سنة 1831 ترك الرحالة الإنجليزي ستوكيلر الخليج العربي واتجه شمالًا إلى بلاد بني كعب، القبيلة العربية التي كانت تسكن السهول بين شط العرب وجبال البختيارية. وقد خصص لهذه المرحلة الفصل الخامس من كتابه «خمسة عشر شهرًا في دروب خوزستان وفارس»، وعنوانه: «بلاد بني كعب والفلاحية، والطريق إلى بهبهان». ويلخص المؤلف محتواه في رأس الفصل: «لمحةٌ عن البلاد ومواردها وأهلها وغير ذلك».

يبدو الفصل لمن يقرؤه اليوم سجلًّا اجتماعيًّا قبل أن يكون وصف رحلة: بيوت الناس وعمارتها، ومجلس الشيخ وآدابه، والطعام الذي قُدّم للضيف، وزيّ الرجال والنساء، والخيل التي اشتهرت بها البلاد.

## الرحالة

يعرّف المحقق المؤلف: «يواكيم هيوارد ستوكيلر (Joachim Hayward Stocqueler) صحفيٌّ وكاتبٌ ومحاضرٌ إنجليزي، وُلد في لندن في 21 يوليو 1801، وتوفّي في واشنطن في 14 مارس 1886». وقد عمل في بومباي في الصحافة، وتولّى تحرير صحيفة «بومباي كورير» (Bombay Courier)، ثم غادرها في مركب عربي صغير متجه إلى الخليج العربي. ويذكر المحقق أنه أثبت اسمه «ستوكيلر» «قريبًا من نطقه الإنجليزي»، بعد أن كُتب في المصادر على صور مختلفة.

<figure class="art-fig"><img src="articles/15/1.webp" alt="لوحة ملوّنة قديمة لشيخ من بني كعب بزيّه" width="901" height="1600" loading="lazy" /><figcaption><span class="fig-cap">«شيخٌ من بني كعب» (Chabean Sheikh)</span><span class="fig-src">المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 67</span><span class="fig-orig">أصل الصورة: من الطبعة الأصلية للكتاب، لندن: سوندرز وأوتلي، 1832</span></figcaption></figure>

## الفلاحية: بلدة بين النخيل والرمان

يبدأ ستوكيلر بوصف قاعدة بني كعب: «الفلاحية، أو «الدورق» كما يسمّيها السير جون ماكدونالد كينير، بلدةٌ واسعةٌ جدًّا، إذ إنّ بيوتها متفرّقةٌ على رقعةٍ كبيرةٍ من الأرض، تظلّلها بساتين وارفةٌ من النخيل والرمّان». ويعرّف المحقق الدورق بأنها «بلدةٌ قديمةٌ في خوزستان على نحو 78 كيلومترًا جنوب شرق الأهواز».

## بيوتٌ من القصب والقش

ما لفت نظر ستوكيلر أولًا عمارة البيوت: «وهيئة البيوت تخالف كلّ ما رأيتُه في القرى القائمة على ضفاف الفرات أو على سواحل الخليج العربي. فهي تشبه الأكواخ الإنجليزية، لها سقفٌ مائلٌ من القشّ المتراصّ». ويصف الجدران: «فجدرانها ليست إلا طبقاتٍ كثيفةً من القصب الطويل، تُضفر أطرافه العليا بالقشّ».

<quote by="ج. هـ. ستوكيلر" source="«خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»">ومبادر خان، أمير كعب، أقوى الزعماء في جنوب غرب فارس. وقد تبلغ موارده، الناشئة من تصدير التمر، وصناعة العباءات، والمكوس المفروضة على الواردات الهندية، نحو ستين ألف تومان في السنة</quote>

ويرسم صورة البلدة كلها: «والبلدة تشغل ضفّتي الجرّاحي بضعة أميال، ويُعرف عنها أنها صحّية في الجملة». وفي داخلها قلعة يحميها «سورٌ عالٍ غليظٌ محيطه نحو ميلٍ ونصف»، وفيها «الكوت»، أي قصر الشيخ، وفي وسطه ميدان فسيح تقوم في أحد جوانبه مدافع «مزدانةٌ بشعار البرتغال نقشًا بارزًا». ويوضح المحقق أن هذا الشعار «يدلّ» على أنها «من مدافع البرتغاليين»، الذين ملكوا قلعة هرمز من سنة 1507.

وحين يصل إلى قرية «غريبة» يصفها بأنها «قريةٌ صغيرةٌ من أكواخ القصب وبضعة بيوتٍ من الطين». وفي «ده ملّا» يلاحظ عنصرًا معماريًّا يتكرر: فوق البوابة «برجٌ عالٍ مستدير، فيه مزاغلُ للدفاع عن البلدة»، ويقول: «والحقّ أنّ هذا البرج سمةٌ مميّزةٌ لكلّ بلدةٍ وقريةٍ في بلاد كعب، ويهدي المسافرَ إلى مقصده عبر القفار التي لا أثر فيها لطريق».

## المجلس: الصقور والسلوقية واحترام السن

يصف ستوكيلر مجلس الشيخ مبادر خان، أمير بني كعب: «وكان الشيخ يعقد ما يشبه المجلس العامّ في رواقٍ فسيحٍ أمام حريمه، يطلّ على صحن القصر ويرتفع عنه نحو ثلاثة أقدام». ويرسم المشهد: «وكانت ثلاثةٌ أو أربعةٌ من الصقور الجميلة جاثمةً قرب الشيخ، وهو يربّت على كلبين سلوقيّين أثيرين لديه».

وكان الشيخ يجلس على «النَّمَد»، ويشرح المحقق أنه «النَّمَد» أو «اللبّاد»، «بساطٌ من الصوف المضغوط».

ويصف آداب السلام في المجلس: «فأصحاب المراتب العليا يكتفون بالانحناء ثم يأخذون أماكنهم، وآخرون يتقدّمون فيقبّلون يد الشيخ». ثم يذكر ملاحظة تكشف عن قيمة اجتماعية: «غير أنّي لاحظتُ أنّ الاحترام العظيم كان يُبذل دائمًا للسنّ في هذا البلاط الصغير؛ فإنه لمّا أقبل رئيس قريةٍ طاعنٌ في السنّ يعرج نحو النَّمَد، نهض الشيخ فعانقه».

وحين أراد ستوكيلر الرحيل، لقي من الشيخ عناية بضيفه: «فأمر من فوره بأن يُهيّأ لي قاربٌ يحملني إلى أقرب قريةٍ وافرة الخيل، وعيّن شابًّا مليحًا يرافقني حارسًا»، وأوصاه بأن «يرعى قضاء حاجاتي كلّها طوال المسير إلى بهبهان دون مقابل». وفي المقابل عرض ستوكيلر خدماته الطبية على الشيخ وأتباعه، وأهدى الوزير نظّارتين خضراوين.

## الصيد بالصقور

لم يكن الحديث في المجلس عن السياسة وحدها. يقول ستوكيلر: «ولمّا جرى الحديث عن الصيد، ولا سيما الصيد بالصقور، أخبرني أنّ صحاريه تعجّ بالطرائد، وأنّي إن بقيتُ عنده رأيتُ قطعان الظباء تسقط أمام صقوره الكريمة».

## اقتصاد الإمارة: التمر والعباءة

يلخّص ستوكيلر موارد الإمارة في جملة واحدة: «ومبادر خان، أمير كعب، أقوى الزعماء في جنوب غرب فارس. وقد تبلغ موارده، الناشئة من تصدير التمر، وصناعة العباءات، والمكوس المفروضة على الواردات الهندية، نحو ستين ألف تومان في السنة». ويشرح المؤلف نفسه العباءة في حاشيته بأنها «عباءةٌ كبيرةٌ من الصوف، تُلبس في أنحاء جزيرة العرب وتركيا وبعض نواحي فارس». ويعترف بأنه «يصعب تحديد قيمة التومان، فقيمته في التبادل متقلّبةٌ على الدوام».

ويصف المؤلف الشيخ نفسه: «ويُعرف عنه أنه طيّب القلب جدًّا، وأنه مع ذلك شجاعٌ شجاعةَ الأسد. وهو كريمٌ، متسامحٌ، حريصٌ على الإصلاح».

## اللغة: تصحيح المحقق

يتحدث ستوكيلر عن لغة بني كعب ويقول إنها كلما أوغل المسافر شرقًا «تمتزج بالفارسية شيئًا فشيئًا». وهنا يعلق المحقق: «هذا انطباع المؤلف، ولم يكن متمكّنًا من العربية؛ وبنو كعب قبيلةٌ عربية، ولسانهم العربية». وهي ملاحظة تضع كلام الرحالة في حدوده.

## الزيّ: القبا والكمر والعمامة

يصف ستوكيلر لباس الرجال وصفًا دقيقًا: «فهم يلبسون «القَبا» الفارسي، أي السترة الخضراء، والسراويل الواسعة والخُفّ، و«الكَمَر»، أي الحزام، وعمامةً من الجوخ الليلكي على هيئة عمائم العرب».

<figure class="art-fig"><img src="articles/15/2.webp" alt="لوحة ملوّنة قديمة لامرأة من بني كعب بزيّها" width="901" height="1600" loading="lazy" /><figcaption><span class="fig-cap">«امرأةٌ من بني كعب» (Chabean Woman)</span><span class="fig-src">المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 71</span><span class="fig-orig">أصل الصورة: من الطبعة الأصلية للكتاب، لندن: سوندرز وأوتلي، 1832</span></figcaption></figure>

ويذكر ثياب الشيوخ: «ويلبس الشيوخ في المناسبات غير العادية ثيابًا من الديباج القرمزي المقصّب بالذهب، ويكتفون في الاستعمال العادي بالقماش القطني المطبوع القرمزي المنقوش بزهورٍ صفراء تحاكي الذهب». وفي الكتاب لوحة ملوّنة لشيخ من بني كعب بزيّه، يذكر تعليقها أنها «اللوحة الملوّنة في صدر المجلّد الأوّل من الطبعة الأصلية».

ويذكر الخِلعة، ويشرح المحقق أنها «ثيابٌ فاخرةٌ كان الحكّام في البلاد الإسلامية يمنحونها رعاياهم علامةً على التكريم».

## نساء بني كعب وزيّهن

يخص ستوكيلر النساء بفقرة: «ونساء بني كعب ينعمن بقدرٍ من الحرّية أكبر بكثيرٍ ممّا تنعم به نساء الفرس أو الترك». ثم يقول عن زيّهن: «وزيّهنّ، فيما أرى، جميل المنظر إلى حدٍّ ما. وقد حاولتُ أن أعطي فكرةً عنه في الرسم الذي جعلتُه صورةً في صدر المجلّد الثاني». ويذكر المحقق أن هذه الصورة «أُدرجت» في هذه الطبعة، وهي «امرأةٌ من بني كعب».

## الضيافة في الطريق

يتتبع ستوكيلر طريقه بالقارب في الأنهار ثم على الخيل، ويسجل مشاهد من كرم أهل القرى. فحين اعترض قاربه سدّ من القصب قرب قرية «كرينة»، دخل الدليل القرية يطلب رجالًا يرفعون القارب: «فظهر على الفور خمسة عشر رجلًا يحملون معهم الفاكهة واللبن لي ولبحّارتي يتبلّغون بها أثناء العمل».

وفي «غريبة» قُدّم له فطورٌ يصفه: «من الأقراص الحارّة، والزبدة الطازجة الممتازة، واللبن، والبيض المسلوق».

وفي قرية «گادي» واجه ستوكيلر مسألة العملة، فقد اكترى خيلًا «ولكن لا دون شيءٍ من العناء، إذ كانت نقودي كلّها فارسية، وأبى الأهالي إلا القرش التركي». وهي إشارة صغيرة إلى تعدد العملات في أسواق رأس الخليج العربي يومئذ.

ويصف خداع البصر في السهول المنبسطة حين ظن أن معشور على أقل من نصف ميل، ثم وجد «أنّ هذا لم يكن إلا خداعًا بصريًّا مألوفًا في هذه الصحاري المنبسطة، يُضني المسافرَ المكدود كما يُضنيه السرابُ الخادع».

## معشور: بلدة التجار

يصل ستوكيلر إلى بندر معشور ويصفها: «ومعشور بلدةٌ مسوّرةٌ محيطها نحو ميل. ويقال إنّ فيها نحو ألف نسمة، أكثرهم مشتغلون بالتجارة». ويلاحظ رخاء أهلها: «فبيوتهم، وإن كانت صغيرة، مؤثّثةٌ تأثيثًا حسنًا بكماليّات المنزل الأوروبي، وثيابهم غالية». لكن الماء كان مشكلتها: «ولا ماء فيها إلا ما يُستقى من آبارٍ قليلةٍ خارج أسوار البلدة مباشرةً، وهو مِلحٌ غير صحّي».

## مخيم الرحّل

في «ده ملّا» زار ستوكيلر مخيّمًا من «الإيلات»، ويشرح المحقق أنها جمع «إيل» في الفارسية، «ويُراد بها القبائل الرحّل». ويصف المخيم باختصار: «فقد كان فيه ما يُعهد من الإبل والبقر والغنم والخيل؛ والخيام سود، والسكّان أربعة آلاف». واستُقبل «في خيمةٍ طويلةٍ مفروشةٍ بالسجّاد، ملأى برجالٍ من بني كعب مبتهجين حسني الثياب».

## الخيل والجريد

يختم ستوكيلر حديثه عن البلاد بخيلها: «وبلاد كعب مشهورةٌ بسلالة خيلها». ويقارنها بما رآه في الهند من الخيل النجدية، ويقول: «والأغلب الأعظم منها أشهب، وهي كالحصان التركماني قادرةٌ على احتمال التعب الشديد».

ويروي حوارًا يكشف عن تعلّق الفارس بفرسه: «فإنّي لمّا قلتُ لأحد الحرس إنّي على يقينٍ من أنه سينال ألفي روبيةٍ على الأقلّ في جواده، أجاب: «لن أبيعه بعشرة آلاف.»».

ويصف فروسية مرافقيه في الطريق: «فقد كان الشيخ والحرس على أكرم الخيل التي رأيتُها في حياتي». وكانوا يتبارون «بـ«الجريد»»، ويشرح المحقق أن الجريد «لعبةٌ فروسيةٌ تقليدية، يرمي فيها الفرسان بعضهم بعضًا بعصًا خشبيةٍ غير مدبّبة».

## أرضٌ تكتسي بالخصب

بعد مرحلة جدباء، يصف ستوكيلر أرضًا تتغير: «وعلى ميلين جنوب شرق البلدة دخلنا حقولًا واسعةً من القمح، تتخلّلها أعشابٌ غنيّةٌ وشجيراتٌ عالية. وكانت الحجول والزقازيق الكثيرة تجري أو تطير أمامنا مباشرةً لا تكاد تشعر بالخوف».

## خاتمة

يقدم هذا الفصل من كتاب ستوكيلر صورة لمجتمع عربي على الضفة الشرقية من رأس الخليج العربي قبل نحو قرنين: بيوت من القصب بسقوف من القش، ومجلس فيه الصقور والسلوقية ويُكرم فيه الكبير، واقتصاد يقوم على التمر والعباءات، وزيّ له ألوانه، وخيل لا يبيعها صاحبها بعشرة آلاف. وقد أضاف المحقق حواشي تصحح انطباع المؤلف عن لغة القوم، وتشرح النمد والخلعة والإيلات والجريد، وأدرج لوحتي الشيخ والمرأة من بني كعب من الطبعة الأصلية، فصار القارئ يرى الزيّ الذي يصفه النص بالألوان كما رسمه المؤلف قبل نحو قرنين.

## المصدر

- الكتاب: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، تأليف: ج. هـ. ستوكيلر (J. H. Stocqueler)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: التعريف بالمؤلف في مقدمة التحقيق ص 3–5؛ الفصل الخامس «بلاد بني كعب والفلاحية، والطريق إلى بهبهان»: الفلاحية وبيوتها ص 62؛ المجلس والصيد ص 64–65؛ الموارد والزيّ وحاشية اللغة ص 65؛ الطريق والضيافة ص 68؛ معشور ص 69؛ النساء ص 70؛ ده ملّا ومخيم الإيلات ص 72؛ الخيل والجريد والحقول ص 73.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 3–73؛ المواضع الفرعية في الفصل الخامس تقريبية بفارق صفحة، ومنها مقتبس يقع فعلًا في ص 63 و66 و67.`,related:[`24-muscat-arabia-1663-godinho`,`26-pearl-origin-history-rosenthal`,`13-batinah-musandam-dhaid-1902-cox`]},{slug:`16-terrada-kung-basra-godinho`,title:`على ظهر «الترّادة»: رحلة الأب غودينيو من كُنگ إلى البصرة سنة 1663`,author:`الأب مانويل غودينيو اليسوعي`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-06`,cover:`articles/16/1.webp`,excerpt:`في ربيع سنة 1663 كان الأب اليسوعي مانويل غودينيو يقطع طريقه من الهند إلى البرتغال عبر الخليج العربي.`,tags:[`البحرين`,`خارك`,`البصرة`,`اللؤلؤ`,`المراكب`],sample:!1,book:`الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)`,coverCaption:`خريطةٌ هولنديةٌ مخطوطةٌ لكمرون (بندر عباس) وهرمز وطرفٍ من قشم ورأس مسندم (صورة أضافها المحقق) — المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 72`,era:`1663`,eraSort:1663.1,words:1657,minutes:8,body:`في ربيع سنة 1663 كان الأب اليسوعي مانويل غودينيو يقطع طريقه من الهند إلى البرتغال عبر الخليج العربي. وقد ترك لنا في كتابه وصفًا لمرحلتين متتاليتين: الأولى برًّا من كمرون (بندر عباس) إلى بلدة كُنگ على الساحل الشرقي للخليج، والثانية بحرًا من كُنگ إلى البصرة على ظهر مركب خليجي يسميه «الترّادة». وقد خصص للمرحلتين الفصلين الرابع عشر والخامس عشر من كتابه الذي صدر محققًا بعنوان «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)».

وتكمن قيمة هذين الفصلين في أنهما يصفان المركب الذي عاش عليه أهل الخليج، وبحّارته العرب، والرياح التي كانوا يبحرون بها، والعواصف التي تعرّضوا لها، والمرافئ والجزر التي مروا بها، ومنها البحرين ولؤلؤها.

## الطريق البري: صهاريج المطر وجبال الملح

يبدأ غودينيو الفصل الرابع عشر بالرحلة من كمرون إلى كُنگ، ويقول: «وقضينا في الطريق ثلاثة أيامٍ ونصفًا، سرناها كلّها بمحاذاة الشاطئ الذي يسكنه صيّادون من العرب في أكواخهم».

<figure class="art-fig"><img src="articles/16/1.webp" alt="خريطة هولندية مخطوطة قديمة لكمرون (بندر عباس) وهرمز وطرف من قشم ورأس مسندم" width="1600" height="1168" loading="lazy" /><figcaption><span class="fig-cap">خريطةٌ هولنديةٌ مخطوطةٌ لكمرون (بندر عباس) وهرمز وطرفٍ من قشم ورأس مسندم (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 72</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: أواخر القرن السابع عشر (نحو 1700)، الأرشيف الوطني الهولندي</span></figcaption></figure>

ويلفت نظره نظام حفظ الماء: «وكنّا نجد كلّ ربع فرسخٍ صهاريج من الحجر والجصّ مملوءةً بماء الشتاء، يجري إليها في سواقٍ يشقّونها في الأرض». غير أن هذه الصهاريج كانت مكشوفة، «فلذلك يكون الماء دائمًا عكرًا قليل الصفاء».

ثم يصف مشهدًا أدهشه: «وكنّا نلقى كلّ يومٍ جبالًا شاهقةً جدًّا، لا من الحجر ولا من الطين، بل من ملحٍ ناصع البياض»، جرداء ليس فيها عشب. ويصف العاملين فيها: «ورأيت عند أسفلها رجالًا كثيرين يقطعون حجارة الملح بالمعاول والفؤوس، ويحمّلونها الجمال؛ ورأيت جملًا محمّلًا بحجرٍ واحدٍ من الملح، وحمله العادل ثلاثون أرّوبة». ويحسب المحقق هذا الحمل: الأرّوبة «وحدة وزنٍ برتغالية تعادل 32 رطلًا، أي نحو 14.7 كغ، والكلمة من العربية «الرُّبع»»، «فثلاثون أرّوبة نحو 440 كغ».

## كُنگ: مرفأ اللؤلؤ

يعرّف المحقق البلدة: «كُنگ (Kong): بلدةٌ على الساحل الإيراني للخليج العربي، قرب بندر لنجة، وهي اليوم من محافظة هرمزگان».

ويروي غودينيو قصة نموّها: «وكُنگ اليوم غيرها فيما مضى؛ فقد كانت من قبلُ قريةً فقيرةً للصيّادين»، ثم صارت مأهولة «بتجّارٍ أغنياء أتوا إليها من بلادٍ أخرى، تدعوهم المنفعة، بسبب التجارة والسفن التي تأتيها من الهند».

ويصف عمرانها: «وهي بلدةٌ غير مسوّرة، قائمةٌ على شاطئٍ مجدب، فيها نحو ثلاثمئة بيتٍ من الفرس والعرب، وبعض البانيان والبرتغاليين». ويضيف: «وخارج العمران، على امتداد الشاطئ وإلى الداخل، يعيش عددٌ لا يُحصى من العرب في خيامهم على طريقتهم».

ويلاحظ تفاصيل العمارة: «والبيوت من الحجر والجصّ، ولكنّها مسطّحة السقوف، وعليها ملاقف الهواء كما في كمرون». وعن الماء والطعام يقول: «وليس في كُنگ ماءٌ عذبٌ إلّا ما يكفي للشرب في بعض الصهاريج، ويغسلون الثياب بماء البحر». ومع أنه ليس فيها بساتين، فإنها «لا تخلو مع ذلك من الفاكهة، تأتيها من داخل البلاد»، ولا ينقصها التمر، مما ينبت في نواحيها ومما يأتيها من البصرة.

وكان مرفؤها نشطًا: «ويتردّد على مرفئها كثيرٌ من الغليوطات من السند ودمن وديو وسورت وغيرها من موانئ الهند، فضلًا عن الترّادات، وهي مراكب ذلك المضيق».

وسرّ ثرائها اللؤلؤ: «وكلّ اللؤلؤ الذي يُغاص عليه في جزيرة البحرين يُحمل ليُباع في كُنگ، وهذا ما يجعل تلك البلدة غنيّةً واسعة التجارة».

ويذكر غودينيو سببًا آخر لاختيار هذا الطريق، فقد كان يريد أن يستشير البرتغاليين في كُنگ في طريق رحلته: «أطريق فارس أم طريق بلاد العرب؟». وفي كُنگ أيضًا اتخذ رفيقًا جديدًا من أهل مسقط يحسن الفصد، بعد أن عاد رفيقه السابق إلى الهند.

## الترّادة: وصف مركب خليجي

يفتتح غودينيو الفصل الخامس عشر بوصف المركب قبل أن يصف الرحلة. ويقول إن «سكّان موانئ الخليج العربي كلّه وشواطئه لا يركبون البحر إلّا في الترّادات والطرّانكيات». ويشرح المحقق الترّادة بأنها «ضربٌ من المراكب المحلّية في الخليج العربي يصفه المؤلف هنا».

<quote by="الأب مانويل غودينيو اليسوعي" source="«الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»">والبحّارة كلّهم من العرب، يستعملون هذه الترّادات في الغوص على اللؤلؤ في موسمه بجزيرة البحرين، وفي سائر السنة في التجارة بين موانئ هذا المضيق، وإن كانت بعض الترّادات الكبيرة تمضي إلى السند</quote>

ويقارنها غودينيو بمراكب الصيد البرتغالية التي تُسمّى «المُوليتات»، ويقول إنها أعرض منها، «وليس لها قاعدةٌ (quilha)؛ مقدّمها منخفض، ومؤخّرها عالٍ جدًّا، ويقيمون عليه مظلّةً تتّسع لفراش». ويشرح المحقق القاعدة بأنها «الجائز الطولي الذي يُبنى عليه هيكل السفينة من أسفل».

ويتابع وصف تجهيزاتها: «والدفّة تُدار بحبالٍ تخرج إلى وسط الترّادة؛ والمركب كلّه مكسوٌّ بأصدافٍ صغيرة، إمّا للزينة وإمّا لاعتقادٍ عند أولئك القوم». ويوضح المحقق أن الكلمة في الأصل تعني الودع، «وهو صدفٌ صغيرٌ كثيرٌ في المحيط الهندي، استُعمل في الزينة وفي التبادل نقدًا».

أما الشراع: «ولها ساريةٌ واحدة، وشراعٌ مثلّث، يُنزعونه كلّه من العارضة كلّما تغيّرت الريح». ويشرح المحقق أن الشراع في الأصل «vela latina، أي الشراع اللاتيني، وهو شراعٌ مثلّث يُشدّ على عارضةٍ طويلةٍ مائلةٍ على الساري».

ويذكر أدوات الحياة على المركب: «والموقد سلّةٌ مطليّةٌ بالطين؛ وخزّانات الماء جرّتان صغيرتان، لا يحملون فيهما من الماء إلّا ما يكفي يومين». ولذلك كانوا يضطرون إلى النزول إلى البر للماء والحطب.

## البحّارة العرب ومواسمهم

يصف غودينيو عمل البحارة على مدار السنة: «والبحّارة كلّهم من العرب، يستعملون هذه الترّادات في الغوص على اللؤلؤ في موسمه بجزيرة البحرين، وفي سائر السنة في التجارة بين موانئ هذا المضيق، وإن كانت بعض الترّادات الكبيرة تمضي إلى السند».

وكان قائد المركب الذي ركبه غودينيو يُسمّى بالكلمة المحلية: «فركبت إذن واحدةً من هذه الترّادات، وقد أوصى بي ربّانَها (necoda) شيخُه، وهو رجلٌ عربيٌّ رئيس قبيلة، يسكن في كُنگ». ويستعمل المؤلف بعد ذلك لفظ «الناخذا» للربّان.

## الرياح: الكوس والشمال

يذكر غودينيو الرياح بأسمائها العربية: «وأبحرنا بريح «الكوس» (causim)، وهي الجنوب بالعربية، حتى بلغنا رأس «نابان» (Nabão)، وبينه وبين كُنگ ستّةٌ وثلاثون فرسخًا».

<figure class="art-fig"><img src="articles/16/2.webp" alt="خريطة قديمة لمملكة فارس الصفوية يظهر فيها الخليج العربي وجزره وسواحله" width="1600" height="1090" loading="lazy" /><figcaption><span class="fig-cap">خريطة مملكة فارس الصفوية «Persici vel Sophorum Regni Typus»، ويظهر فيها الخليج العربي وجزره وسواحله، وساحل عُمان (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 22</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: يودوكوس هونديوس ويان يانسونيوس، من أطلس مركاتور-هونديوس، الطبعة الإنجليزية، أمستردام 1636</span></figcaption></figure>

ثم يلقى الريح الأخرى: «وفي هذه الناحية لقينا هبّاتٍ من الريح الشمالية الغربية، التي يسمّونها «الشمال» (Xamal) (وهذه الريح و«الكوس» أغلب الرياح في ذلك المضيق)». ويشرح المحقق أن الشمال «ريحٌ شماليةٌ غربية تهبّ على العراق ودول الخليج العربي، وتشتدّ نهارًا، وتثير العواصف الرملية».

ويسير المركب محاذيًا الساحل، ويمرّ بجزيرة قيس، التي يقول عنها إنها «كانت فيما مضى قاعدة المملكة». وينزل البحارة إلى البر في بلدات عدة، منها ريشهر، التي يعرّفها المحقق بأنها «مدينةٌ قديمة على الخليج العربي، هي اليوم موقعٌ أثريٌّ قرب بوشهر».

## عاصفة قرب خارك: خبرة الناخذا

من ريشهر قرر الناخذا أن يدخل عرض البحر قاصدًا البصرة، «كي لا نضيّع وقتًا طويلًا في محاذاة الساحل». ومرّوا بجزيرة خارك، ويعرّفها المحقق بأنها «جزيرةٌ في شمال الخليج العربي»، فيها «آثار ديرٍ نصرانيٍّ قديم، وقبورٌ ومعابد، ونقشٌ أخمينيٌّ بالخطّ المسماري».

تمنّى غودينيو أن ينزل إلى الجزيرة، «ولكنّ الناخذا رأى في الجوّ شيئًا لا أدري ما هو، فأبى أن يتوقّف عند الجزيرة، إذ يقولون إنّ العواصف هناك أمرٌ مؤكّد، ولا مأوى فيها للمراكب، لأنّ الأرض منخفضةٌ جدًّا».

وصدق حدس الربان: «ولم يخطئ الناخذا؛ فما كدنا نبتعد عن خارك، وقد غربت الشمس، حتى هبّت علينا عاصفةٌ شديدة». ويشرح سبب الخطر: «لأنّ الأمواج هناك عظيمةٌ جدًّا لقلّة عمق الماء».

ثم يصف تصرف البحارة: «فكان علاج العرب أن أنزلوا الساري، وغطّوا الترّادة بالشراع، وتركوها لمشيئة الأمواج». وبينما كان غودينيو خائفًا، كان البحارة هادئين: «وأمّا العرب فعلى العكس، مضوا يضطجعون للنوم تحت الغطاء الذي صنعه لهم الشراع، فبعضهم يغطّ، وبعضهم يصيح عند دخول الموجة: «الله، الله!»».

ومرّت الليلة بسلام، فأصبحوا «والريح ساكنةٌ والبحر هادئ»، فنزح البحارة الماء من المركب، وواصلوا طريقهم حتى بلغوا في أربعة أيام مصب الفرات.

## البحرين: أغنى الجزر

يتوقف غودينيو ليخص البحرين بالذكر: «وإلى الجنوب من هذه الجزيرة تقع جزيرة البحرين، وقد رأيت أن أخصّها بالذكر، لأنّها أغنى جزر المضيق كلّها وأطيبها». ويحدد أبعادها: «وطول البحرين سبعة فراسخ، ومحيطها ثلاثون؛ وهي قبالة القطيف».

ويصف أرضها: «وأرض الجزيرة نفسها منخفضة، فيها نخيلٌ عظيم، رطبةٌ خصبة؛ وفي أيّ موضعٍ حفروا وجدوا الماء على الفور». ويذكر ثمارها: «ودخلها من الجزيرة كثير، لكثرة ما تجنيه من التمر على أنواعه، ولأنّ فيها كلّ أصناف فواكه إسبانيا، ولا سيّما فواكه البساتين، كالرمّان والخوخ والتين، وكلّ أنواع الخضر». ويقول عن عمرانها: «وسكّانها مسلمون من العرب، ومدينتها جميلة الأبنية من الحجر والجصّ. وفي الجزيرة كلّها ثلاثمئة قرية». وكان هواؤها يثقل في بعض الشهور، «ولا سيّما من سبتمبر إلى فبراير، ففي هذه الأشهر ينتقل أكثر أعيانها إلى القطيف لئلّا يمرضوا».

## لؤلؤ البحرين

يقول غودينيو: «وأكثر ما يشرّفها الغوص على اللؤلؤ صغيره وكبيره، ويكون في بحرها من يونيو إلى أغسطس». ويقارن بما رآه في الهند، فيقول إنه رأى في كُنگ حبّات من لؤلؤ البحرين «بدت لي أحسن بما لا يقاس من كلّ ما رأيته في «ساحل المغاصات» (costa da Pescaria) وراء رأس كُماري». ويقدّر قيمة المحصول: «ويُستخرج من هذه المغاصات كلّ سنةٍ ما قيمته خمسمئة ألف كروزادو، عدا العدد الكبير من اللؤلؤ الذي يُخفى ويُكتم». ويشرح المحقق الكروزادو بأنه «نقدٌ برتغاليٌّ من الذهب ثم من الفضّة».

ويصف بداية الموسم: «يجتمع ألفا مركبٍ وثلاثة آلاف في الموضع الذي عيّنوه، وينصبون معسكرهم بجوار البحر بما يلزمهم من الأقوات للمدّة التي سيقضونها في الغوص». ويذكر صنفي الرجال في كل مركب: الغواصين، والجاذبين الذين يرفعونهم. ويضيف المحقق الاسم المحلي لهؤلاء: «هم الذين يسمّيهم أهل الخليج «السيب» (seeb)، أي الجاذب الذي يرفع الغوّاص». وينبّه المحقق إلى أن المؤلف يجمع في الوصف بين ما سمعه أو شاهده في مغاصات منار وما يخص مغاصات البحرين.

## خاتمة

يقدّم الفصلان صورة للملاحة في الخليج العربي في القرن السابع عشر من داخل المركب نفسه: ترّادة بلا قاعدة، بشراع مثلث ودفة تُدار بالحبال، وجرّتين للماء لا تكفيان أكثر من يومين، يقودها ناخذا يقرأ الجو فيتجنب الخطر، وبحّارة يواجهون العاصفة بخبرة وسكينة. وحولها مرافئ ومدن: كُنگ التي يُباع فيها لؤلؤ البحرين، والبحرين بنخيلها وقراها الثلاثمئة. وقد شرح التحقيق المصطلحات البحرية، من القاعدة والشراع اللاتيني إلى الودع والسيب، وعرّف بالأماكن والرياح.

## المصدر

- الكتاب: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، تأليف: الأب مانويل غودينيو اليسوعي (Manuel Godinho)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الرابع عشر (الطريق البري وكُنگ) ص 68–70؛ الفصل الخامس عشر (الترّادة والبحارة والرياح) ص 74–75؛ خارك والعاصفة ص 76؛ البحرين واللؤلؤ ص 77–79.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 68–79؛ بعض المواضع الفرعية تقريبية بفارق صفحة، ومنها مقتبس يقع فعلًا في ص 73.`,related:[`28-bahrain-pearls-1618-silva`,`11-gulf-trade-1863-pelly`,`14-pearl-market-bombay-rosenthal`]},{slug:`17-lar-caravan-1617-silva`,title:`من ساحل الخليج العربي إلى لار سنة 1617: الخانات والصهاريج والبازار`,author:`دون غارسيا دي سيلفا إي فيغيروا`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-10-05`,cover:`articles/17/1.webp`,excerpt:`في الثاني عشر من أكتوبر 1617 نزل السفير الإسباني دون غارسيا دي سيلفا إي فيغيروا من سفينته على الساحل المقابل لهرمز، وبدأ رحلة برية طويلة نحو بلاط الشاه عباس.`,tags:[`لار`,`هرمز`,`الخانات`],sample:!1,book:`هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)`,coverCaption:`«خريطةٌ دقيقةٌ لكمرون أو بندر عباس، وهرمز، والجزر المجاورة»، وفوقها منظر «شجرة البانيان» (صورة أضافها المحقق) — المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 107`,era:`1617`,eraSort:1617,words:1619,minutes:8,body:`في الثاني عشر من أكتوبر 1617 نزل السفير الإسباني دون غارسيا دي سيلفا إي فيغيروا من سفينته على الساحل المقابل لهرمز، وبدأ رحلة برية طويلة نحو بلاط الشاه عباس. وكانت أولى مراحلها الطريق الصاعد من «البندر» إلى مدينة لار. وقد خصص غارسيا لهذه المرحلة فصلين من شروحه: «من ساحل فارس إلى لار»، و«مدينة لار».

ويعرّف المحقق «البندر» بأنه «ميناء جمرون (Gamrūn) على البرّ المقابل لهرمز»، «وهو بندر عبّاس اليوم». أما لار فكانت قاعدة الإقليم الذي يمتد على ساحل الخليج العربي، ومحطة القوافل التي تحمل تجارة الخليج إلى الداخل.

هذا المقال لا يتابع السفارة وسياستها، بل يقرأ ما سجله غارسيا عن البنية التي قامت عليها تجارة القوافل: الخانات التي ينزل فيها المسافرون، والصهاريج التي تحفظ ماء المطر، والبازار الذي تُباع فيه البضائع، والعملة التي حملت اسم المدينة.

## أرضٌ جافة وجبالٌ بيضاء

يصف غارسيا الطريق بعد مغادرة الساحل: «ويكون البحر دائمًا عن اليد اليسرى، ولا يبعد عن هذا الخان نصف فرسخ». وعلى جانبي الطريق «جبالٌ عظيمةٌ جرداء، لا أثر فيها لعشبٍ ولا كلأ، كلّها من ترابٍ أبيض». ويصف النبات القليل: «إلّا قليلًا من الشجيرات الصغيرة الدقيقة الورق، كلّها شائكةٌ كئيبة»، ويضيف أنها «لقلّة العشب مرعًى للإبل».

<figure class="art-fig"><img src="articles/17/1.webp" alt="خريطة قديمة لكمرون (بندر عباس) وهرمز والجزر المجاورة، وفوقها منظر شجرة البانيان" width="1600" height="1038" loading="lazy" /><figcaption><span class="fig-cap">«خريطةٌ دقيقةٌ لكمرون أو بندر عباس، وهرمز، والجزر المجاورة»، وفوقها منظر «شجرة البانيان» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 107</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: نقشٌ هولندي، نحو 1682، متحف ريكس في أمستردام (RP-P-OB-47.376)</span></figcaption></figure>

ومع فقر الأرض، يذكر غارسيا ميزة لأهلها: «ومع أنّ هذه الأرض شديدة الفقر والجفاف، فإنّه يُربّى فيها أحسن الجداء وأطيبها في آسيا كلّها، عند بعض أحياء العرب ومنازلهم».

## الصهاريج: ماء المطر صدقةً جارية

الماء هو همّ المسافر الأول في هذا الطريق. يقول غارسيا: «وما إن يُترك البندر، وفيه آبار ماءٍ عذب، حتى تنعدم هذه النعمة كلّ الانعدام، فلا ماء إلّا ما يُجمع من المطر في صهاريج عظيمةٍ توجد من هذا الخان، خان گيچي، على طول الطريق إلى لار وشيراز».

ويصف صهريجًا جديدًا وجده قبل الخان، كان فيه «مقدارٌ من الماء البارد الصافي جدًّا يكفي جميع المسافرين وبعض منازل العرب القريبة». ثم يذكر من بناه: «وكان قد بُني من صدقةٍ أوصى بها تاجرٌ من لار، وسائر الصهاريج كلّها مبنيّةٌ من أعمال البرّ والوصايا التي يتركها الأتقياء عند موتهم، وكذلك أكثر الخانات أو بيوت النزول في آسيا كلّها».

## الدلو الجلدي: حيلةٌ لاستخراج الماء الصافي

ويتوقف غارسيا عند أداة لفتت نظره. كان الماء قبل الأمطار قليلًا في الصهاريج، وتحته طمي كثير، فاستعمل أهل المنطقة «حيلةً بارعةً مريحةً لاستخراج الماء، وهي جلدٌ مستديرٌ مسطّح، قطره قدمان»، تُشدّ في محيطه حبال رقيقة كثيرة. وتجتمع الحبال في عقدة في مركز الجلد، ويُربط فيها حبل غليظ طويل.

<quote by="دون غارسيا دي سيلفا إي فيغيروا" source="«هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»">يحقّ أن يكون المقام الأوّل للتمر الذي يُخرجه ذلك النخل في ناحيتها، فهو في حجمه ولونه وكمال طعمه يفوق كلّ تمرٍ يُزرع في سائر أنحاء الدنيا</quote>

ثم يشرح طريقة عملها: يُلقى الجلد على سطح الماء فيقع مبسوطًا، فإذا شُدّ الحبل الغليظ اجتمعت الحبال الصغيرة، «فيصير الجلد، بثقل الماء الذي يجتمع في وسطه، على هيئة كيسٍ عظيمٍ يسع جرّةً كبيرةً من الماء». والنتيجة: «وبهذا يخرج الماء نظيفًا صافيًا، ولو لم يكن في الصهريج منه أقلّ من شبر، دون أن يتعكّر أو يبلغ الحمأة التي تحته».

## الخان: عمارةٌ للهواء

يعرّف المحقق الخان بأنه «بناءٌ على طرق القوافل لنزول المسافرين ودوابّهم، وقد كثر بناؤها في إيران في العهد الصفوي تشجيعًا للتجارة».

ويصف غارسيا تصميم خانات هذا الطريق: «وخان گيچي، وسائر الخانات حتى لار، على هيئةٍ تخالف هيئة ما بعدها، فهو على شكل تقاطع الكنيسة (cruzero)، بأربعة أبواب في أطراف التقاطع الأربعة، وفي وسطه قبّة، وهي أحسن موضعٍ فيه، لأنّ الهواء يدخلها من كلّ جهة، وهو ما يُحتاج إليه في أكثر السنة».

ويصف الخارج: «وهو من الخارج مربّع، مرتفعٌ عن الأرض قدمين أو ثلاثًا لئلّا تدخله الإبل ولا غيرها من الدوابّ، ويدور حوله كلّه مصطبةٌ تُتّخذ معالف». وفي زواياه الأربع سبع حجيرات أو ثمان صغيرة تنفتح على المصطبة.

## عشاءٌ في كهورستان

في بلدة كهورستان، التي يرجّح المحقق أنها «قريةٌ في مقاطعة خمير بمحافظة هرمزگان في إيران»، دعا الحاكم السفير إلى العشاء على سطح بيته. ويصف غارسيا المائدة: جيء «بقنديلٍ عظيمٍ من المعدن»، «ومعه قِدرٌ عظيمةٌ جدًّا فيها دجاجٌ ولحم ضأنٍ وأرزٌ كثير». وكان خادم يوزّع الطعام بمغرفة طويلة من الخشب «في صحونٍ كبيرةٍ من القصدير والنحاس الأصفر»، ثم جاء آخرون «بأوانٍ من الخزف الصيني»، «وخُتم العشاء بالتمر والبطّيخ».

ويذكر أن آبار كهورستان كان ماؤها شبه مالح، ويشرح المحقق أن الماء كان يُستخرج بالنواعير، والكلمة في الأصل «norias، وهي من العربية «ناعورة»».

## صخور البحر في الجبال

لاحظ غارسيا في الطريق صخورًا تبدو «كأنّها قطعٌ من ملاط البناء الروماني، لأنّها مؤلّفةٌ من حصًى كبيرٍ وصغير». ووجد أحد رجاله أصدافًا ملتحمة بالصخر. ويعلق المحقق بأن تأمل المؤلف «قريبٌ ممّا يقرّره الجيولوجيون اليوم، فجبال زاغروس التي تمتدّ إلى الخليج العربي تكوّنت من التواء طبقاتٍ رسوبيةٍ قديمةٍ». ويضيف أن الأصداف «هي من أحافير الأحياء البحرية التي تحفل بها الطبقات الرسوبية لجبال زاغروس».

## جغرافية الخليج كما رآها غارسيا

يشرح غارسيا لماذا غاب البحر عن نظره رغم أن الطريق يحاذي الساحل. فالخليج يمتد من مدخله «الذي يصنعه رأس مسندم والساحل المقابل له من مُغستان قرب هرمز»، ثم ينعطف نحو البصرة ومصب الفرات، «وفي وسط هذا الخليج، وهو أطول كثيرًا ممّا هو عريض، جزيرة البحرين الخصيبة، التي يسمّيها سترابون وبلينيوس «تيلوس»، وهي مشهورةٌ في المشرق كلّه بمغاص لؤلئها البالغ الغنى». ويوضح المحقق أن تيلوس هو «الاسم الذي عرف به اليونانيون البحرين في العصر الكلاسيكي، ويُرجَّح أنّه صيغةٌ يونانيةٌ من «تلمون» أي دلمون».

## لار: محطة القوافل

يصل غارسيا إلى لار في الثامن والعشرين من أكتوبر، ويصفها: «مدينة لار، قاعدة كرمانيا الصحراوية، قديمةٌ جدًّا، عظيمة القدر عند جميع هؤلاء العرب». ويصف بيوتها بأنها «من الطوب المدكوك»، وأن داخلها في أكثره «مبيّضةً بالجير، وكثيرٌ منها منقوشٌ بزخارف عربية، وأرضها من الآجرّ المحكوك المتلاصق». ويذكر أن «بعضها، لأهل الوجاهة، له ملاقف هواء (البراجيل)».

ويحدد مكانتها التجارية: «وهي هنا محطّةٌ معتادةٌ للقوافل التي تمرّ من فارس وكرمان وغيرهما إلى هرمز، والتي تمرّ من هناك ومن بلاد العرب إلى الولايات المذكورة، ولذلك فيها كثيرٌ من التجّار الفرس والعرب والوثنيين واليهود، ولهذه المدينة خاناتٌ كبيرةٌ لإيوائهم وإيواء بضائعهم».

## البازار: عشرون شارعًا تحت القباب

أكثر ما أعجب غارسيا في لار سوقها: «ولكنّ أكثر ما يزيّن هذه المدينة اليوم ويشرّفها سوقٌ عظيمٌ فخمٌ جدًّا للبضائع، يسمّونه في العامّة باللسان العربي «بازار»». ويذكر أنه من عمل الله وردي خان، ويعرّفه المحقق بأنه قائد صفوي كان «أقوى رجال الدولة بعد الشاه عبّاس، ووالي فارس».

ويصف تصميمه بدقة: «وهذا البناء كلّه من خارجٍ مربّع، جدرانه عاليةٌ جدًّا من الحجر المنحوت الأبيض الشديد الصلابة، مئةٌ وخمسون خطوةً في كلّ جانبٍ من جوانبه الأربعة». ومن كل باب يمتد شارع إلى الوسط، «حيث يكون تقاطعٌ تُرى منه على استواءٍ الأبوابُ الأربعة كلّها؛ وفوق هذا التقاطع ترتفع قبّةٌ عاليةٌ جدًّا». وفي الأرباع الأربعة تقاطعات أصغر، «فتكون الشوارع كلّها عشرين: الأربعة الكبار التي يُدخل إليها من الأبواب الأربعة، والستّة عشر الصغار».

ويصف تنظيم التجارة فيه: «ويُباع في هذا البازار كلّ صنفٍ من البضائع، في الدكاكين المتّصلة على طول الشوارع كلّها»، وفوقها غرف يضع فيها التجار الغرباء أموالهم، «ثم يُغلق الجميع ليلًا ويكون في عهدة ناظر البازار وحرّاسه».

ويصف حياة السوق اليومية: كانت فيه دكاكين «للفاكهة الطريّة واليابسة ولخبزهم المعتاد»، والباعة الذين لا دكاكين لهم يضعون بضاعتهم «في سلالٍ على جانبي الشوارع». ويذكر قاعدة لافتة: «ولا يسمحون لأحدٍ أن يدخل البازار راكبًا، ويلتزم بهذا القانون حتى حاكمهم نفسه». وفي جانب من البناء «دار الحلوى»، وفيها عقود سفلى «يُكرَّر فيها السكّر ويُصنع كلّ صنفٍ من الحلوى».

## صهاريج لار

في لار نفسها كثرت الصهاريج: فإلى جانب ما بناه الملوك والحكام «منفعةً عامّةً لازمةً لأهل المدينة وللعدد الكثير من المسافرين»، كان «كثيرٌ من الأتقياء المتديّنين في ملّتهم يبنون هذه الصهاريج بوصايا يتركونها في وصاياهم، كلٌّ بحسب قدرته». ويذكر عناية أهلها بنظافتها: «لأنّ لهم في هذه المدينة عنايةً ويقظةً خاصّةً في تنظيف الصهاريج كلّها كلّ سنةٍ قبل أن تأتي الأمطار، وهي عادةً في يناير وفبراير».

## اللاري: عملة باسم المدينة

يذكر غارسيا أن السفير كان يأمر بأن يوزَّع على الفقراء والعازفين «من المرابطيات (maravedís) واللاريات الفضّية». ويشرح المحقق العملتين، فالمرابطي «عملةٌ إسبانيةٌ صغيرة، اسمها من «المرابطين»»، أما اللاري فهو: «نقدٌ من سلكٍ فضّيٍّ طوله نحو عشرة سنتيمترات، يُثنى عادةً على هيئة حرف C، كان متداولًا في البلاد المطلّة على بحر العرب والخليج العربي، ونُسب إلى مدينة لار التي تقول الرواية إنّها أوّل من ضربه».

## تمر لار

ويختم غارسيا حديثه عن ثمار المدينة بالتمر: «يحقّ أن يكون المقام الأوّل للتمر الذي يُخرجه ذلك النخل في ناحيتها، فهو في حجمه ولونه وكمال طعمه يفوق كلّ تمرٍ يُزرع في سائر أنحاء الدنيا». ويصف لونه بأنه «أشدّ اتّقادًا، كأنّه ذهبٌ خالص».

## القصور والحدائق

وفي لار بدأ الله وردي خان «بناء دارٍ بالغة الإتقان والحسن»، أتمّها ابنه، «لها في أسفلها عقودٌ بديعةٌ جدًّا فيها نوافير، وفي الطبقة نفسها حديقةٌ نضرةٌ جدًّا فيها كثيرٌ من البرتقال والليمون والأترجّ». ويلاحظ غارسيا عناية أهل المدينة بالماء لبركهم ونوافيرهم، «وهي لذّاتهم الخاصّة ومُتَعهم».

## خاتمة

يرسم هذا القسم من شروح غارسيا صورة البنية التي حملت تجارة الخليج العربي إلى الداخل في مطلع القرن السابع عشر: صهاريج يبنيها التجار والأتقياء صدقةً لكل مسافر، ودلو جلدي يستخرج الماء صافيًا من شبر واحد، وخانات مصممة ليدخلها الهواء من كل جهة، وبازار بعشرين شارعًا مسقوفًا تحرسه القوانين، وعملة فضية حملت اسم المدينة وتداولتها بلاد الخليج. وقد شرح المحقق المصطلحات المعمارية والنقدية، وربط ملاحظات المؤلف عن الصخور بما يقرره علم الجيولوجيا اليوم.

## المصدر

- الكتاب: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، تأليف: دون غارسيا دي سيلفا إي فيغيروا (García de Silva y Figueroa)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الكتاب الرابع، الفصل الأول «من ساحل فارس إلى لار»: الطريق والنبات ص 62–64؛ الصهاريج والدلو الجلدي ص 64؛ الخان ص 63–65؛ كهورستان ص 67؛ الأحافير ص 68 و73؛ جغرافية الخليج ص 69. الفصل الثاني «مدينة لار»: المدينة والبازار ص 77–79؛ الصهاريج ص 80؛ اللاري ص 81؛ دار الله وردي خان والتمر ص 85.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 59–85؛ بعض المواضع الفرعية تقريبية بفارق صفحة إلى ثلاث، ومنها مقتبس يقع فعلًا في ص 59 وص 66.`,related:[`07-lower-gulf-islands-buckingham`,`27-famous-pearls-rosenthal`,`28-bahrain-pearls-1618-silva`]},{slug:`18-oman-plants-1838-aucher-eloy`,title:`عالم نباتٍ على الأقدام: نبات عُمان وزروعها وطعامها في يوميات أوشيه-إلوا سنة 1838`,author:`بيير مارتان ريمي أوشيه-إلوا`,category:`التراث`,categorySlug:`heritage`,date:`2026-10-04`,cover:`articles/18/1.webp`,excerpt:`في الرابع عشر من مارس 1838 غادر عالم النبات الفرنسي أوشيه-إلوا مسقط ليتوغّل في داخل عُمان، وعاد إليها بعد نحو أربعة أسابيع وقد جمع مئات العينات من النبات، بعضها لم يكن معروفًا لعلماء أوروبا.`,tags:[`نزوى`,`الجبل الأخضر`,`مسقط`,`النبات`],sample:!1,book:`رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)`,coverCaption:`خريطة عُمان التي رسمها جون أروسميث (John Arrowsmith) لرحلات ولستد (صورة أضافها المحقق) — المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 60`,era:`1838`,eraSort:1838.1,words:1746,minutes:9,body:`في الرابع عشر من مارس 1838 غادر عالم النبات الفرنسي أوشيه-إلوا مسقط ليتوغّل في داخل عُمان، وعاد إليها بعد نحو أربعة أسابيع وقد جمع مئات العينات من النبات، بعضها لم يكن معروفًا لعلماء أوروبا. وقد سجّل رحلته يومًا بيوم في الفصل الخامس من يومياته، التي صدرت محققة بعنوان «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)».

ويصف المحقق الكتاب في مقدمته: «فهذا كتابٌ يضمّ يوميات عالم نبات فرنسي جاب سواحل الخليج العربي وعُمان في شتاء سنة 1838 وربيعها». ويرى أنه مصدر في علم النبات خاصة، لأن صاحبه رحل ليجمع النبات.

تناول مقال سابق في هذه السلسلة رحلة هذا العالم من بندر عباس إلى مسقط. أما هذا المقال فيتبعه في الداخل، ويقرأ يومياته من زاوية النبات والزراعة والطعام والحيوان.

## الرحالة

يعرّف المحقق المؤلف: «هو بيير مارتان ريمي أوشيه-إلوا (Pierre Martin Rémi Aucher-Éloy)»، وُلد في مدينة بلوا بفرنسا، ودرس الصيدلة في أورليان ثم في باريس، «فشغفه علم النبات». ويذكر أنه تزوج سنة 1817 الآنسة إلوا، «فضمّ اسمها إلى اسمه، فصار يُعرف بأوشيه-إلوا».

<figure class="art-fig"><img src="articles/18/1.webp" alt="خريطة قديمة لعُمان رسمها جون أروسميث لرحلات ولستد" width="1541" height="1600" loading="lazy" /><figcaption><span class="fig-cap">خريطة عُمان التي رسمها جون أروسميث (John Arrowsmith) لرحلات ولستد (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 60</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب جيمس ريموند ولستد «رحلات في جزيرة العرب» (Travels in Arabia)، المجلد الأول، لندن 1838</span></figcaption></figure>

وكان يمشي على قدميه طوال الطريق، ويقول في يومياته: «أما أنا فأمشي دائمًا على قدميّ، ولم أركب دابة مرة واحدة منذ مسقط». ويشرح السبب في موضع آخر، فهي عادة «مرهقة جدًّا حقًّا، ولكنها ضرورية لعالم النبات إن لم يرد أن يُهمل شيئًا».

## ساحل الباطنة: الآبار والجراد

في الأيام الأولى سار أوشيه-إلوا محاذيًا البحر، ولاحظ طريقة السقي: «والبلاد كلها لا تُسقى إلا بالماء الذي يُستخرج من الآبار بلا انقطاع». ويوضح المحقق الفرق بين الساحل والداخل: «كان أهل ساحل الباطنة يسقون نخيلهم بالآبار، بخلاف الداخل الذي يُسقى أكثره بالأفلاج».

وفي قرية على وادي الخوض شهد مشهدًا يتكرر في الجزيرة العربية: كان الأهالي «يطلقون صيحات مروّعة، ويقرعون كل أواني مطابخهم، ليطردوا سحابة من الجراد كانت تحجب الهواء وتهدّد بإتلاف محاصيلهم». ويعرّف المحقق هذا الجراد بأنه «الجراد الصحراوي (Schistocerca gregaria)، الذي تجتاح أسرابه في بعض السنين أفريقيا وجزيرة العرب وجنوب غرب آسيا فتُتلف الزرع».

ثم بلغ قرية الخوض نفسها، ووصفها بأنها «الحسنة الريّ بماء العيون، التي يحيط بها نبات بديع؛ فالنخيل والأنبا (Mangifera indica) يؤلّفان فيها غابة جميلة».

## نخل: النبات الجديد

في نخل، التي يعرّفها المحقق بأنها «ولاية في محافظة جنوب الباطنة بعُمان، عند سفوح جبال الحجر، تشتهر بقلعتها الكبيرة المبنية على مرتفع صخري»، أقام أوشيه-إلوا أيامًا. ويقول: «وفي نخل زروع جميلة، ونخيل كثير، وموز، وأنبا». ويضيف: «واكتشفت فيها شجرة جميلة من جنس Niebuhria». ويشرح المحقق أن هذا الجنس «يُعرف اليوم باسم Maerua، ويسمى بالعربية المَرْو».

<quote by="بيير مارتان ريمي أوشيه-إلوا" source="«رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»">فيُزرع فيه عادةً تحت النخيل الـMedicago sativa لعلف الحيوانات، والقطن في الوادي وفي كل القرى تقريبًا؛ ولاحظت أنوالًا لغزله ونسجه، وهي الصناعة الوحيدة في البلاد</quote>

ويذكر قصب السكر، ويلاحظ أنه لا يُصنع منه سكر في نخل: «بل يُكتفى بمصّه». وكان يرسل البذور إلى «حديقة النبات» في باريس، ويقول عن إحدى الشجيرات: «فإن نجحت البذور التي أرسلها إلى حديقة النبات كانت فرصة جميلة لأهل البستنة عندنا».

وفي رحلاته إلى جبل شبه القريب جمع نباتات كثيرة، ومنها «Moringa arabica، الذي يسكن أصعب الصخور مرتقًى». ويوضح المحقق أنه «هو المعروف اليوم باسم Moringa peregrina، ويسمى بالعربية البان».

ويذكر في يومه الثاني على جبل شبه أنه وجد نباتات يعرفها من بلاد بعيدة: إذ وجد هنا Iphiona scabra وjuniperifolia المعروفين من سيناء، ونوعًا جديدًا من الجنس نفسه. ويشرح المحقق أن Iphiona «جنس من الفصيلة النجمية يسمى بالعربية اللَّغَب، ومنه أنواع صحراوية في سيناء وجزيرة العرب». وفي جولة ثالثة اكتشف «نوع صغير من Linaria، دقيق جدًّا أنيق جدًّا». وفي لهيغر وجد «نوع جديد من Boerhavia»، وهو جنس يسمى بالعربية «الحَثْرة» كما يذكر المحقق.

## الخريطة

يشكو أوشيه-إلوا من خريطته: «والأسماء في خريطتي محرّفة، والمواضع الرئيسة، ونخل نفسها، مُهملة فيها». وقد علّق ناشر الكتاب الأصلي بأن خريطته مأخوذة في هذا الجزء من خريطة الربّان ولستد. ويعرّف المحقق ولستد بأنه الملازم جيمس ريموند ولستد، «الضابط في البحرية الهندية، الذي طاف في داخل عُمان بإذن السيد سعيد منذ نوفمبر سنة 1835»، ويحيل إلى الخريطة المنشورة في الكتاب.

وفي سهل نخل نفسه يذكر قرى أخرى، «وكلها ذات مزارع نخيل واسعة وزروع جميلة، وهم يحصدون في هذا الوقت»، أي في أواخر مارس.

## الطعام العُماني

يصف أوشيه-إلوا الطعام الذي كان الشيخ يرسله إليه مرتين في اليوم: «وكان الفطور خبزًا شديد البياض رقيقًا كالدانتيلا، لا يجرؤ المرء على لمسه خشية أن يصير مسحوقًا. ويُقدَّم على سلّة صغيرة لا تُستعمل في غير ذلك». ويذكر مكوناته: «يُصنع من لباب الدقيق وبياض البيض؛ وسائر الفطور قدح من اللبن الحامض قليلًا».

<figure class="art-fig"><img src="articles/18/2.webp" alt="لوحة نباتية قديمة لزهرة Primula Aucheri التي جمعها المؤلف في الجبل الأخضر" width="650" height="890" loading="lazy" /><figcaption><span class="fig-cap">اللوحة 49: Primula Aucheri، من النباتات التي جمعها المؤلف في الجبل الأخضر (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 65</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب جوبير وسباك «صور النباتات الشرقية» (Illustrationes plantarum orientalium)، المجلد الأول، باريس</span></figcaption></figure>

أما العشاء: «وفي المساء أرزٌّ مطبوخ بالسمن (پلاو) وشيء من «التوبيا» (Tobias) (Phaseolus lablab) مسلوقة في الماء بقرونها الجلدية». ويشرح المحقق أن الپلاو «الأرز المطبوخ بالسمن أو المرق على الطريقة الفارسية والتركية»، وأن النبات الآخر «يسمى بالعربية اللُّبْلاب، وهو نوع من الفول»، ويرجّح أن «التوبيا» «تحريفٌ لـ«اللوبيا»». ويختم المؤلف: «هذا هو الطعام العربي المعتاد، وهو كافٍ في هذه البلاد المحرقة».

## الضيافة

عاد أوشيه-إلوا من إحدى جولاته في الجبل متعبًا، فوجد رجلًا ينتظره: «فجاءني بماء اللبن وبالتمر، وكل ذلك بدافع الإحسان والضيافة، من غير أدنى تفكير في جني أي منفعة من هذا العمل الصالح». ويضيف: «ولم تخطر لي حتى فكرة أن أعرض عليه بعض النقود، لأني كنت سأسيء إليه». ويعلق المحقق بأن «ما ذكره من كرم العرب فشهادة يوافقه عليها كثير من الرحالة».

## الصعود إلى الجبل الأخضر: من النخيل إلى الكرمة

في الطريق إلى الجبل الأخضر قضى ليلة «تحت شجرة رائعة من التمر الهندي (Tamarindus indica)»، ويذكر المحقق أن من أسمائها «العرديب». ثم احتاج إلى اثني عشر حمارًا لنقل متاعه، لأن الطريق لا تصلح للجمال.

وفي قرية لهيغر لاحظ الزراعة: «وفي لهيغر زروع للحبوب، وبخاصة بساتين كبيرة من الرمان، تعطي ثمارًا كبيرة جدًّا ممتازة».

ومع الصعود تغيّر النبات: «وقد اختفى النخيل، وأخذت فواكه المناطق المعتدلة تظهر. وتُزرع الكرمة؛ وهي تؤلّف عرائش جميلة تعطي ظلًّا لذيذًا».

وفي سيق، حيث حلّت أشجار المناطق المعتدلة محلّ أشجار المناطق الحارة، قال: «فلاحظت الجوز، والتين، والمشمش، والكرز، والكرمة، والرمان. وكان الهواء حادًّا طوال الليل». ويقدّر المؤلف ارتفاع ما مرّ به من الجبل بـ800 إلى 900 قامة، ويصحح المحقق: القامة «مقياس فرنسي قديم للطول يساوي نحو 1.949 متر»، «فتقدير المؤلف لما مرّ به من الجبل دون الواقع»، إذ تبلغ أعلى القمم 3018 مترًا.

## نباتان باسم المؤلف

من أهم ما جمعه أوشيه-إلوا في الجبل الأخضر نباتان حملا اسمه بعد ذلك. يقول: «وعدت من هذه الجولة ببنفسجة جميلة تنبت على أشدّ الصخور جفافًا»، وبخاصة بنبات «له هيئة الـPrimula، وسيكوّن على الأرجح جنسًا جديدًا». ويشرح المحقق أن هذا هو النبات الذي وُصف بعد ذلك «باسم Primula Aucheri، أي «زهرة الربيع الأوشيهية»»، وأن واصفيه قالا إن المؤلف جمعه «على الصخور الرطبة في جبل الأخضر».

والنبات الثاني: «ووجدت قرب قرية أوكند نوعًا جديدًا فاتنًا من Lonicera ذا أزهار جميلة، صفراء زاهية، وقد سمّيته aurea». ويذكر المحقق أنه وُصف بعد ذلك «باسم Lonicera Aucheri، في اللوحة 73»، وأن جنس Lonicera «يسمى بالعربية العَسَلة أو صريمة الجدي». وقد أثبت التحقيق اللوحتين النباتيتين لهذين النوعين.

وعند تنوف، عند السفح، لاحظ عند باب الحصن شجرتين رائعتين من جنس Cissus، ظنّها نوعًا جديدًا، يسميها العرب «زرو». ويلاحظ أن «كل قرية محمية بالأسوار والأبراج». ويعرّف المحقق تنوف بأنها «قرية قديمة عند السفح الجنوبي للجبل الأخضر قريبة من نزوى».

## نزوى وإزكي: قصب السكر والقطن

نزل أوشيه-إلوا من الجبل إلى نزوى، ووصفها بأنها «قرية كبيرة أو بالأحرى مدينة صغيرة، ذات زروع واسعة». ويعدد زروعها: «ويُرى فيها كثير من قصب السكر الذي يُصنع منه دبسٌ أسود رديء، والنخيل، والموز، والقطن، والأنبا، والرمان، والليمون الذي يعطي ثمرًا صغيرًا، لكنه ملآن بالعصير».

<figure class="art-fig"><img src="articles/18/3.webp" alt="لوحة نباتية قديمة لنبات Lonicera Aucheri من الجبل الأخضر" width="650" height="928" loading="lazy" /><figcaption><span class="fig-cap">اللوحة 73: Lonicera Aucheri، وقد ذكر المؤلفان أن أوشيه-إلوا وجدها في جبل الأخضر بإمامة مسقط (عيّنته رقم 4640) (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 66</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب جوبير وسباك «صور النباتات الشرقية»، المجلد الأول، باريس</span></figcaption></figure>

وحين أصابته الحمى، جاءه شيخ المكان «بقالب من السكر، وهو شيء نادر في البلاد، مع أن البلاد مغطاة بقصب السكر».

وفي وادي بني رواحة لاحظ زراعة العلف والقطن: «فيُزرع فيه عادةً تحت النخيل الـMedicago sativa لعلف الحيوانات، والقطن في الوادي وفي كل القرى تقريبًا؛ ولاحظت أنوالًا لغزله ونسجه، وهي الصناعة الوحيدة في البلاد». ويشرح المحقق أن هذا النبات «هو البرسيم الحجازي، المعروف في عُمان والخليج باسم «القَتّ»، ويُزرع علفًا للمواشي».

## الحيوان والخضر

يسجّل أوشيه-إلوا ما لاحظه من الحيوانات الأليفة: «والحيوانات الأليفة الوحيدة التي لاحظتها في بلاد مسقط هي الجمل والحمار والكلب والقط والدجاجة والمعزى». ويذكر أن في مرتفعات الجبل الأخضر بعض البقر. وهنا ينبّه المحقق: «هذا ما لاحظه المؤلف في مسيره القصير، ولا يصحّ تعميمه على عُمان كلها، فالمعروف أن الأغنام والأبقار كانت تُربّى في نواحٍ كثيرة منها».

وعن الخضر يقول: «والخضر الوحيدة من خضرنا التي رأيتها مزروعة هي البصل، والفجل، الذي يؤكل منه الجذر والورق كذلك، والبازلاء الصغيرة». ويضيف من خضر البلاد اللبلاب والملوخية، ويشرح المحقق أن Corchorus olitorius «هو المُلوخية، تؤكل أوراقها مطبوخة».

## ملاحظة على الطريق

وكانت الطرق الجبلية شاقة على الدواب، فيذكر أن الحمار الواحد لا يحمل فيها «أكثر من خمسة وعشرين رطلًا إلى ثلاثين»، وأنه «بحسب عادة البلاد، لا بدّ لكل دابة حمل من رجل». ويصف طريق الصعود من أوكند إلى القمة بأنها «ما يشبه السلّم أكثر مما يشبه الطريق».

## خاتمة

تقدّم يوميات أوشيه-إلوا صورة نادرة لنبات عُمان وزراعتها في الثلث الأول من القرن التاسع عشر، بعين عالم يمشي على قدميه ليجمع كل نبتة: من نخيل الباطنة المسقي بالآبار، إلى الأنبا والموز في نخل، إلى الكرمة والجوز والمشمش في سيق، إلى قصب السكر والقطن والقتّ في نزوى ووادي بني رواحة. وفيها أيضًا الطعام اليومي والضيافة. وقد أضاف المحقق الأسماء العربية لعشرات النباتات التي لم يذكر المؤلف إلا أسماءها اللاتينية، وصحّح تقديراته للارتفاع، وأثبت لوحتي النباتين اللذين حملا اسمه.

## المصدر

- الكتاب: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، تأليف: بيير مارتان ريمي أوشيه-إلوا (Pierre Martin Rémi Aucher-Éloy)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: مقدمة التحقيق ص 3–4؛ الفصل الخامس «في داخل عُمان»: الباطنة والجراد والخوض ص 57–58؛ نخل ونباتها ص 59؛ الطعام والضيافة والبان ص 61–62؛ الصعود إلى الجبل ص 62–63؛ Primula وLonicera ص 63–64؛ سيق والقامة ص 67؛ نزوى ص 68–69؛ الحيوان والخضر ووادي بني رواحة ص 71.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 57–71 (والمقدمة ص 3–4)؛ بعض المواضع الفرعية تقريبية بفارق صفحة، ومنها مقتبس يقع فعلًا في ص 60 وص 66.`,related:[`12-jebel-akhdar-1902-cox`,`20-oman-imams-aflaj-stuhlmann`,`13-batinah-musandam-dhaid-1902-cox`]},{slug:`19-bushehr-port-1816-buckingham`,title:`بوشهر سنة 1816: مدينة الملاقف والمرفأ الصعب وتجارة الهند`,author:`جيمس سلك بكنغهام`,category:`الاقتصاد والتجارة`,categorySlug:`economy-trade`,date:`2026-10-03`,cover:`articles/19/1.webp`,excerpt:`في خريف سنة 1816 أقام الرحالة الإنجليزي جيمس سلك بكنغهام في بوشهر، على الساحل الشرقي للخليج العربي، ينتظر سفينة تحمله إلى الهند.`,tags:[`بوشهر`,`ملاقف الهواء`,`التجارة`,`بومباي`],sample:!1,book:`رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط» و«رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)`,coverCaption:`مدينة بوشهر كما تبدو للقادم إليها من البرّ — المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 10`,era:`1816`,eraSort:1816.1,words:1685,minutes:8,body:`في خريف سنة 1816 أقام الرحالة الإنجليزي جيمس سلك بكنغهام في بوشهر، على الساحل الشرقي للخليج العربي، ينتظر سفينة تحمله إلى الهند. وخصّص لها الفصل الرابع من رحلته، فوصف موقعها وعمارتها ومرفأها وحكمها وتجارتها وصفًا مفصلًا بالأرقام. ويقدّم المحقق الكتاب بأنه «يضع بين يدي القارئ صورةً حيّةً للخليج العربيّ في خريف سنة 1816م». وبعد اثنتين وعشرين سنة مرّ بالمدينة عالم النبات الفرنسي أوشيه-إلوا، فترك عنها ملاحظات قصيرة تكمل الصورة.

يعرّف المحقق بوشهر بأنها «مدينةٌ ومرفأٌ على الساحل الشرقي للخليج العربي، وهي اليوم مركز محافظة بوشهر في جنوب إيران. وكانت في أوائل القرن التاسع عشر ميناء فارس الرئيس، وفيها مقرّ المقيم البريطاني في الخليج منذ 1778».

## وداع الدرويش

يبدأ بكنغهام الفصل بقصة رفيقه الدرويش إسماعيل، الذي صحبه من بغداد عبر فارس. فلما افترقا في بوشهر «أبى أن يأخذ قرشًا واحدًا أجرًا على سفره»، وقال إنه صحبه عن محبة خالصة ومودة. ولم يطلب إلا تذكارًا. ويذكر المحقق أن المؤلف كان قد سافر من بغداد متخفيًا باسم «الحاج عبد الله»، فكان رفيقه يعرفه بالحاج المصري لأنه قدم من مصر. وعلم بكنغهام بعدُ برسالة عربية وصلته في الهند أن رفيقه «رجع سالمًا والتقى بأحبّته في بغداد».

<figure class="art-fig"><img src="articles/19/1.webp" alt="منظر قديم محفور لمدينة بوشهر من جهة البر" width="945" height="636" loading="lazy" /><figcaption><span class="fig-cap">مدينة بوشهر كما تبدو للقادم إليها من البرّ</span><span class="fig-src">المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 10</span><span class="fig-orig">أصل الصورة: جيمس سلك بكنغهام، رحلات في آشور وميديا وفارس، ط2، لندن 1830، ج2، اللوح المحفور في صدر الفصل الرابع؛ نشرها هنري كولبرن، 1 يناير 1829</span></figcaption></figure>

## الموقع والمنظر

يقول بكنغهام: «تقع مدينة بوشهر، أو «أبو شهر» كما يسمّيها أهلها، على شبه جزيرةٍ منخفضةٍ من الرمل تمتدّ خارجةً عن خطّ الساحل العامّ، فتكوّن خليجًا صغيرًا على كلٍّ من جانبيها». ويحدد موقعها: «فهي على خطّ العرض 29° 0' شمالًا وخطّ الطول 50° 48' شرقًا».

ويفسر المؤلف الاسم بأنه من «أبو شهر»، «ومعناها حرفيًّا: أبو المدن». ويعلّق المحقق: «هذا تفسير المؤلف، و«شهر» بالفارسية: المدينة».

ووراء المدينة سهل منبسط «مسافةً تزيد على أربعين ميلًا في خطٍّ مستقيم، ثم ينتهي عند سفح أوّل سلسلةٍ من التلال بين بوشهر وشيراز». ويرى أن هذه التلال «خلفيةٌ جميلةٌ للمنظر في الجوّ الصافي».

## الملاقف والحجر المرجاني

المدينة قريبة جدًّا من مستوى الماء، «حتى إنّ أعالي البيوت تُرى أوّلًا كأنها تطلع من البحر». وأبرز ما يُرى فيها: «عددٌ من الأبراج المربّعة العالية تسمّى «بادگير» أو ملاقف الهواء، وهي مبنيّةٌ بممرّاتٍ للهواء لتهوية البيوت التي أُقيمت فوقها في أثناء حرّ الصيف الشديد».

<quote by="جيمس سلك بكنغهام" source="«رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط» و«رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»">هي اليوم أحسن مدينةٍ في الخليج العربي كلّه ما عدا البصرة وحدها</quote>

ويشرح المحقق أن البادگير هو «البرج الذي يلتقط الريح ويوجّهها إلى داخل البيت للتبريد، وهو المعروف في الإمارات وسائر الخليج بـ«البارجيل»».

ويصف مادة البناء: فالمساكن كلها مسطحة السقوف، وأكثرها مبني من حجر مرجاني فاتح اللون سهل التفتت. ويوضح المحقق أنه «الحجر المرجانيّ البحريّ، وهو المعروف في الخليج بـ«الفروش»، كان يُقطع من الشعاب ويُبنى به». ويضيف المؤلف أن البيوت مبنية في الغالب «من حجرٍ سهل التفتّت مؤلّفٍ من رملٍ وأصدافٍ مطمورةٍ في الطين، وأحسنها مبنيٌّ بالآجرّ المحروق المجلوب من البصرة».

ويقدّر حجم المدينة: «ولا يزيد عدد المساكن كلّها على ألفٍ وخمسمئة». وعن عمارتها يقول: «وطراز العمارة هو السائد في بلاد العرب عامّة، مع إضافاتٍ يسيرةٍ من الطراز الفارسيّ؛ فالمباني كبيرةٌ مربّعةٌ مسطّحة السقوف، مرتّبةٌ حول أفنيةٍ وسطى وغرفٍ صغيرة».

ويصف الأسواق بأنها «مصاطبَ مسقوفةً بسقفٍ من العوارض المغطّاة بالحُصر»، ويذكر أن «هناك خانٌ أو خانان حسنان قرب مرسى القوارب، يشغلهما تجّارٌ أرمن ويملكونهما».

## السور والمدافع

لم تكن بوشهر محصنة تحصينًا حقيقيًا. يقول بكنغهام إنه لا يحيط بها «إلا سورٌ رديءٌ يعترض شبه الجزيرة من البحر إلى البحر، وفيه البوّابة التي يُخرج منها إلى فارس ويُدخل منها». ويعدّد ما فيها من دفاع: مدافع قليلة خارج البوابة، و«بطاريةٌ من ستّة مدافع أو ثمانية تكاد تحاذي الوكالة»، و«نصف دزينةٍ أخرى منصوبةٌ أمام دار الجمرك».

أما أوشيه-إلوا، الذي وصلها في يناير 1838، فرآها على صورة أحسن: «فالمدينة صغيرة، لكنها لا تبدو شديدة الخراب، على خلاف المعهود في مدن فارس. وتحيط بها من جهة البرّ أسوارٌ في حالٍ مقبولة».

## السكان واللباس

يقول بكنغهام إن «أكثر الروايات سخاءً في الوقت الحاضر» لا تجعل عدد السكان «أكثر من عشرة آلاف، ولعلّ العدد الحقيقيّ أقلّ من ذلك». ويذكر من أشغالهم: «التجارة على نطاقٍ ضيّق، وصيد السمك، والإرشاد البحريّ، وتسيير سفن الميناء الخاصّة بهم».

<figure class="art-fig"><img src="articles/19/2.webp" alt="منظر قديم محفور لمرفأ بوشهر من جهة البحر" width="937" height="603" loading="lazy" /><figcaption><span class="fig-cap">مرفأ بوشهر كما يبدو للقادم من البحر من جهة الجنوب الغربي</span><span class="fig-src">المصدر: «رحلة بكنغهام في الخليج العربي 1816»، ص 68</span><span class="fig-orig">أصل الصورة: جيمس سلك بكنغهام، رحلات في آشور وميديا وفارس، ط2، لندن 1830، ج2، اللوح المحفور في صدر الفصل السادس؛ نشرها هنري كولبرن، 1 يناير 1829</span></figcaption></figure>

ويصف لباسهم بأنه مزيج: «فالقميص والسروال و«الزُّبون» أو الثوب الخارجيّ فارسيّة، وأمّا العمامة والعباءة فعربيّتان». ويذكر مصادر القماش: العمامة «من القماش الأزرق المربّع النقش المصنوع في مسقط أو من القماش البنيّ المصنوع في شوشتر»، والعباءة «من صنع الأحساء والقطيف والكويت على الشاطئ المقابل».

ويلاحظ أوشيه-إلوا أيضًا أن زيّ الأهالي وسحناتهم تختلف عن الفرس، «ويبدو أن أكثرهم من أصل عربي».

## التجار والحاكم

يقول بكنغهام: «وتجّار بوشهر فرسٌ وأرمن بالتساوي تقريبًا». ويذكر أن الأرمن كانت لهم «صلاتٍ أوسع بالهند»، وأنهم كانوا «دلّالين ووكلاء لغيرهم وتجّارًا لحسابهم في آنٍ واحد»، لأنهم يكتبون الإنجليزية والهندستانية.

وكان حاكم المدينة الشيخ عبد الرسول، ويعرّفه المحقق بأنه «من آل مذكور، الأسرة العربية التي تولّت حكم بوشهر في القرنين الثامن عشر والتاسع عشر تحت السيادة الفارسية». ويصف بكنغهام عادة الحاكم وعمّه الشيخ محمد: كانا ينزلان كل يوم إلى شاطئ البحر، فيجلسان «على مصطبة كوخٍ حقيرٍ من الحصير أُقيم لهذا الغرض». فإذا حضر العمّ وقف ابن أخيه «أوّلًا على مسافةٍ تأدّبًا، ويداه مطويّتان تحت عباءته». ويعلق المحقق بأن هذا «وصفٌ لعرفٍ معروفٍ في توقير الكبير».

وكان الحاكم «تابعٌ اسمًا لأمير شيراز، وبواسطته لملك فارس، يؤدّي إليه جزيةً سنوية».

## ميناء فارس الوحيد

يرى بكنغهام أن بوشهر «هي اليوم أحسن مدينةٍ في الخليج العربي كلّه ما عدا البصرة وحدها». ويفسر أهميتها بأنها الميناء الوحيد لإمبراطورية واسعة كفارس، تأتيها منه جميع مؤنها من الهند بحرًا. ويقارنها بهرمز وبندر عباس، اللتين جاء بهاؤهما السالف «من تجارتهما وحدها».

## الواردات من الهند

يقول بكنغهام إن التجارة بين فارس والهند «تتيح وصول اثنتي عشرة سفينةً تجاريةً إلى خمس عشرة في المتوسّط كلّ سنةٍ من البنغال وبومباي». ويعدد الواردات: «فمن البنغال يُجلب الأرزّ والسكّر والنيلة والفلفل والتوابل، مع تشكيلةٍ صغيرةٍ من الموسلين والأقمشة». ومن بومباي الحديد والفولاذ والقصدير والرصاص والأجواخ الصوفية، ومنتجات الصين والتوابل. «وتُحمل هذه كلّها إلى داخل فارس بقوافل البغال التي تتردّد بانتظامٍ بين هذا المكان وشيراز».

ويلاحظ أن بعض السلع تذهب إلى الخليج العربي: كثيرًا ما يجد أرز البنغال وسكرها طريقهما إلى البحرين وغيرها من جزر الخليج العربي، وكذلك بنّ المخا الذي يُشحن في مسقط.

وبعد اثنتين وعشرين سنة كتب أوشيه-إلوا: «ولا ترد إلى بوشهر إلا البضائع الآتية من بومباي».

## الصادرات والنقود

يعدد بكنغهام الصادرات: «الخيول الفارسية التي تُورَّد بعقودٍ لفرسان شركة الهند الشرقية، وبالنحاس القديم الذي يُجمع من الداخل من أواني البيوت وغيرها ويُرسل إلى البنغال، وبالحِلتيت». ويضيف الفواكه المجففة، «وبالسجّاد من صنع البلاد»، وعطر الورد وماء الورد. ويشرح المحقق أن الحلتيت «صمغٌ راتنجيٌّ نفّاذ الرائحة»، يُستعمل في الطبخ الهندي.

لكن الصادرات «لا تبلغ ثلث قيمة الواردات، فيُسدَّد الباقي نقدًا». والنقد من الريالات الإسبانية والألمانية، ولكن أكثره من الروبيات الفارسية. ويرجّح المحقق أن الريال الألماني هو «ريال ماريا تيريزا النمساوي الذي شاع في الجزيرة العربية والخليج».

## أجرة النقل والرسوم

يلاحظ بكنغهام أن أجرة نقل النقود من بوشهر إلى بومباي وكلكتا واحدة، «ثلاثةً في المئة فقط»، مع أن المسافة إلى كلكتا أطول بكثير. ويقول: إن التفسير الوحيد لهذا التناقض «أنه عرفٌ قديم لا يمكن خرقه».

<figure class="art-fig"><img src="articles/19/3.webp" alt="منظر قديم لبوشهر" width="1216" height="905" loading="lazy" /><figcaption><span class="fig-cap">منظر بوشهر (Bushire)، رسمه جيمس موريير (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 18</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب جيمس جستنيان موريير «رحلة عبر فارس وأرمينيا وآسيا الصغرى إلى القسطنطينية في سنتي 1808 و1809»، لندن 1812</span></figcaption></figure>

وكانت الرسوم الجمركية تُقدَّر «بحسب الطرد ونوع البضاعة، لا بنسبةٍ مئويةٍ ثابتةٍ من قيمتها». فالأرز والسكر «يدفع كلٌّ منهما نصف روبيةٍ عن الكيس»، و«النيلة خمس عشرة روبيةً عن الصندوق»، و«بنّ المخا روبيتين عن البالة».

وكان من العادات أن يأخذ الحاكم ما يناسبه من البضائع، ويسدد ثمنها بإعفاء أصحابها من الرسوم على وارداتهم اللاحقة. ويروي بكنغهام قصة سفينة كانت تحمل ألواح رصاص إلى بوشهر، فخشي صاحبها أن تؤخذ بهذه الطريقة، فدفع أجرة إضافية لحملها إلى البصرة.

## المرفأ الصعب

يقول بكنغهام عن المرسى الخارجي: «فمرساة المرسى الخارجيّ، في عمق أربع قامات، على بعد ستّة أميالٍ من الشاطئ على الأقلّ». ويشرح المحقق أن القامة مقياس لعمق الماء يساوي ست أقدام، أي نحو 1.83 م. وإذا هبّت الريح «لم تستطع القوارب أن تتصل بين المدينة والسفينة».

أما المرسى الداخلي «لا يدخله إلا ما كان غاطسه أقلّ من ثمانية عشر قدمًا من السفن»، ومدخله «فوق حاجزٍ رمليٍّ يعترض مجرًى عرضه أقلّ من نصف ميل». وكانت للمراكب المحلية مراسٍ «خلف جزرٍ صغيرةٍ عند الطرف الشمالي الشرقي من المرسى الداخليّ».

## الموقع الحرج للمدينة

ويتأمل بكنغهام مصير المدن التجارية في الخليج: فهرمز وبندر عباس «كانت مدنًا زاهرة، ثم لم يبق منها شيء». ويرى أن بوشهر، لأن تجارتها مثقلة بالمغارم المتصلة من البحر إلى العاصمة، لن تبلغ غنى هرمز، ولن تهوي إلى الخراب التام الذي صارت إليه تلك الأسواق. ويعرّف المحقق هرمز بأنها «جزيرةٌ صغيرةٌ عند مدخل الخليج العربي في مضيق هرمز، كانت قاعدة مملكة هرمز التجارية».

## الريح والسهل

يذكر أوشيه-إلوا أنه حين اقترب من بوشهر هبّت «ريحٌ غربية شديدة تُعرف في البلاد باسم الشمال (chemal)، فأذاقتنا بردًا قارسًا». ويصف السهل حولها بأنه من «أرض الطَّمْي، يتزهّر الملح على سطحه فلا يدع النبات ينمو فيه إلا عددًا يسيرًا جدًّا من الأنواع».

## خاتمة

يقدّم بكنغهام صورة مفصلة لبوشهر في 1816: مدينة صغيرة على شبه جزيرة رملية، بيوتها من الحجر المرجاني وفوقها الملاقف، يحكمها شيخ من آل مذكور، وهي ميناء فارس الرئيس لتجارة الهند، مع مرفأ صعب على السفن الكبيرة. وتضيف ملاحظات أوشيه-إلوا سنة 1838 أسوارًا في حال مقبولة وأهلًا أكثرهم من أصل عربي. وقد أضاف المحقق تعريفات للبارجيل والفروش والنقود والمقاييس.

## المصدر

- الكتاب الأول: «رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط»، تأليف: جيمس سلك بكنغهام (James Silk Buckingham)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب. الصفحات: مقدمة التحقيق؛ الفصل الرابع ص 9–20 (الموقع ص 10، الملاقف ص 11، السور ص 12، السكان واللباس ص 13، التجار ص 14، الحاكم ص 15–16، التجارة ص 16–19، المرفأ ص 20).
- الكتاب الثاني: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، تأليف: بيير مارتان ريمي أوشيه-إلوا؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب. الصفحات: الفصل الأول ص 17–19.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`23-muscat-1816-buckingham`,`11-gulf-trade-1863-pelly`,`14-pearl-market-bombay-rosenthal`]},{slug:`20-oman-imams-aflaj-stuhlmann`,title:`عُمان من الأزد إلى آل بو سعيد: الأئمة والأفلاج والبحر في كتاب شتولمان`,author:`فرانتس شتولمان`,category:`التاريخ`,categorySlug:`history`,date:`2026-10-02`,cover:`articles/20/1.webp`,excerpt:`في سنة 1916 نشر الباحث الألماني فرانتس شتولمان كتابه «الصراع على جزيرة العرب بين تركيا وإنجلترا»، وخصّص فصله العاشر لمسقط وعُمان.`,tags:[`مسقط`,`نزوى`,`الأفلاج`,`هرمز`],sample:!1,book:`الصراع على جزيرة العرب بين تركيا وإنجلترا`,coverCaption:`«مسقط من المرفأ» (صورة أضافها المحقق) — المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 205`,era:`1916`,eraSort:1916.1,words:1645,minutes:8,body:`في سنة 1916 نشر الباحث الألماني فرانتس شتولمان كتابه «الصراع على جزيرة العرب بين تركيا وإنجلترا»، وخصّص فصله العاشر لمسقط وعُمان. ويتتبع في الجزء الأول من هذا الفصل تاريخ عُمان من أقدم ما تذكره الروايات إلى عهد الإمام أحمد بن سعيد، ويقف في حاشية طويلة عند نظام الأفلاج. يعرض هذا المقال ذلك الجزء، مع ما أضافه المحقق من تصحيح وتعريف.

## البلاد

يبدأ شتولمان بوصف موقع عُمان: «في أقصى الجنوب الشرقي من جزيرة العرب تقع منطقةٌ معزولة، تحجزها الصحراء الكبرى «الدهناء» عن الداخل». ويذكر أنها ملكت، بحسب قوة حكامها، «رقعًا من السواحل غربًا وشمالًا تطول أو تقصر».

<figure class="art-fig"><img src="articles/20/1.webp" alt="منظر قديم لمسقط من المرفأ" width="1024" height="726" loading="lazy" /><figcaption><span class="fig-cap">«مسقط من المرفأ» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 205</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: حفر جون هيفيسايد كلارك عن رسم ريتشارد تمبل، من مجموعة «ستّة عشر منظرًا لأماكن في الخليج»، لندن، 1813</span></figcaption></figure>

ويرى أن الجبال تمنح البلاد خصبًا: «وتتيح الجبال العالية في الداخل خصوبةً لا بأس بها (زراعة النخيل، وشيءٌ من الزراعة) وإقامة مستوطناتٍ ثابتة». ويذكر ما يقال عن معادنها: «ويقال إنّ في عُمان النحاس والرصاص والحديد والكهرمان، وعند «بهلا» الذهب أيضًا».

ويقارنها باليمن: «فظروف عُمان المحلّية إذن تشبه ظروف اليمن، لكنّ تاريخها جرى على نحوٍ مختلف، إذ بقيت البلاد مستقلّةً في الظاهر على الأقلّ».

## الخليج في العصور القديمة

يقول شتولمان: «وكان الخليج العربي في العصور القديمة أبعد عن مواطن الثقافة الكلاسيكية من البحر الأحمر. فمن المفهوم إذن أننا نسمع عنه في الزمن القديم أقلّ بكثير». ويذكر أن الجزء الجنوبي من الخليج كثيرًا ما سُمّي «البحر الإريتري»، «نسبةً إلى ملكٍ أسطوريٍّ اسمه «إريثراس»».

ويذكر أن نيارخوس، أميرال الإسكندر، كان يعرف رأس «أسابون»، «وهو مسندم الحالية في عُمان». وأن رفيقه أندروستينيس زار أحد مواضع البخور، «ولعلّها جزر البحرين، فقد حمل منها شحنة سفينةٍ كاملةً من هذه المادّة المطلوبة».

ويذكر من سكان عُمان في زمن بطليموس «آكلو السمك» في الشمال، و«الساخاليتاي» (Sachalitae، أي «أهل الساحل») على شاطئ منطقة البخور. ويذكر أن جزيرة «أوغيرا»، التي قيل إن قبر إريثراس فيها، يظن شبرنغر أنها جزيرة قشم.

## الأزد والهجرة من اليمن

يعتمد شتولمان في تاريخ عُمان على كتاب سليل بن رزيق الذي نشره بادجر. ويذكر الرواية التي تجعل «يعرب»، من نسل قحطان، حاكمًا لليمن وعُمان. ويلاحظ صلة البلدين: «فلعلّ اليمن وعُمان انتميا إذن إلى طبقةٍ ثقافيةٍ واحدة. وقد جرت بينهما صلاتٌ نشطة».

<quote by="فرانتس شتولمان" source="«الصراع على جزيرة العرب بين تركيا وإنجلترا»">ومن 1435 إلى 1624 حكم أئمّةٌ من أسر الأزد وبني نبهان وبني هناءة. ثم تولّى الحكم مع ناصر بن مرشد اليعاربةُ، الذين هم من نسل أقدم المهاجرين القحطانيين من اليمن. وكانت عاصمتهم الرستاق</quote>

ثم يذكر هجرة الأزد: رُدّت سيادة الفرس عن عُمان «بمعونة مهاجرين جددٍ من اليمن من قبيلة الأزد». ويقول إن هجرة هذه القبيلة «رُبطت» بانهيار سد مأرب، لكنه يرى أن هذا الحدث «لا يُتّخذ على الأرجح في الرواية إلّا تحديدًا زمنيًّا غير موثوقٍ جدًّا».

ويذكر من المهاجرين بني نبهان، ويضيف في حاشية: «لا يزال بنو نبهان يؤدّون في عُمان اليوم دورًا محترمًا».

ويلاحظ شتولمان أن في عُمان إلى يومه، «كما في جزيرة العرب كلّها تقريبًا، التقابل بين الحضر المستقرّين بزراعتهم والبدو الرحّل».

## الإسلام في عُمان

يقول شتولمان: «لكنّ النبيّ محمدًا ﷺ أرسل نحو سنة 630 رجلًا يُدعى عمرًا إلى عُمان، حيث كان يحكم الأخوان الأزديّان «جيفر» و«عبد» ابنا «الجلندى». فأسلما».

ويذكر أن الخليفة عمر عيّن نحو سنة 636 «عثمانَ بن أبي العاص واليًا على عُمان والبحرين، فقاد منها حملةً على السند».

## الإمامة

يقول شتولمان: «وفي سنة 751 استقلّت البلاد، واختارت حاكمها بنفسها في شخص الجلندى بن مسعود، أوّل أئمّة عُمان».

ويشرح نظام الإمامة عند الإباضية: «وكان سلطان عُمان عند هذا المذهب «الإمام»، أي الرئيس الديني والدنيوي. ولا يُشترط في فقههم لانتخاب الإمام وراثةٌ في النسب ولا في العلم. بل يجب أن يكون الإمام مختار الأمّة، التي لها أن تعزله أيضًا».

ثم صار الاختيار بيد هيئة: «لكن ما لبث الأمر أن صار الانتخاب لا يتولّاه الشعب كلّه، بل هيئةٌ من الأعيان والشيوخ، ثم يُقدَّم الإمام إلى الشعب فيقرّه بالهتاف».

ويذكر أن هارون الرشيد حاول فتح عُمان: «وقد حاول هارون الرشيد (786–809) عبثًا أن يفتح عُمان، التي امتدّ نفوذها إلى المهرة في جنوب جزيرة العرب». وأنه «بعد سنة 1000، حين ضعفت الخلافة العبّاسية، انتهت التبعية أيضًا، واستقلّت عُمان».

## نزوى وبنو نبهان

بعد استقلال عُمان عن بغداد، يقول شتولمان: «فحكم في نزوى خمسة أئمّةٍ متعاقبين من أسرٍ أزديةٍ مختلفة، ثم جاءت فترةٌ دامت 260 سنة بلا إمامة، كسب فيها بنو نبهان السلطة وأقاموا أسرة ملوك». ويوضح أنهم حكموا جزءًا كبيرًا من الداخل «دون أن يكونوا أيضًا الأئمّة الدينيين للإباضية». ويقول: «ولم تُستعد الإمامة إلّا نحو سنة 1435».

ويذكر أن ملوك هرمز، وأصل إمارتهم عربي، انتقلوا من البرّ إلى الجزيرة القريبة «جرون» أو «زرون»، «التي سُمّيت بعد ذلك هرمز أيضًا». ومع أنهم طُردوا من عُمان سريعًا، فقد ظلّوا يدّعون الولاية عليها حتى مجيء البرتغاليين.

## اليعاربة والبرتغاليون

يقول شتولمان: «ومن 1435 إلى 1624 حكم أئمّةٌ من أسر الأزد وبني نبهان وبني هناءة. ثم تولّى الحكم مع ناصر بن مرشد اليعاربةُ، الذين هم من نسل أقدم المهاجرين القحطانيين من اليمن. وكانت عاصمتهم الرستاق».

وكان البرتغاليون قد دخلوا الخليج في أوائل القرن السادس عشر، فأخذوا هرمز سنة 1515. فلما أخذ الفرس هرمز منهم، فرّت بقية الحامية البرتغالية إلى مسقط، «التي صارت حينئذٍ معقل البرتغاليين».

ويذكر حالًا خاصة في جلفار: «وكانت في موضع «جلفار» على الجانب الغربي من الرأس حالٌ غريبة، إذ كان لكلٍّ من البرتغاليين والفرس من هرمز قلعةٌ وحاميةٌ هناك».

ثم بدأ الإمام حملته: «وتحرّك الإمام، مشجَّعًا بنجاح الفرس في هرمز، على البرتغاليين في مسقط (1640)». وفي 1648 ترك البرتغاليون قلاع قريات ومطرح وسور مسقط، «وفي 26 يناير 1650 سقطت قلعة مسقط أيضًا في يد الإمام سلطان بن سيف». ولم يبق للبرتغاليين إلا وكالة محصنة في صحار مدة من الزمن، مقابل جزية يدفعونها للإمام، الذي بنى هناك قلعة خاصة به. ويختم: «وعلى أيّ حالٍ كان البرتغاليون عند وفاة سلطان بن سيف (1668) قد طُردوا من عُمان كلّها».

## الأسطول وشرق أفريقيا

يقول شتولمان: «وكان عرب عُمان منذ مطلع القرن السابع عشر قد أنشؤوا مستوطناتٍ على الساحل الشرقي لأفريقيا أيضًا. فقد اعتاد سكّان السواحل العربية الملاحة منذ القدم».

<figure class="art-fig"><img src="articles/20/2.webp" alt="صورة قديمة لمسقط وقلعة الجلالي" width="1600" height="855" loading="lazy" /><figcaption><span class="fig-cap">«منظرٌ لمسقط»، وفي الأصل: «القنصلية البريطانية تحجبها قلعة الجلالي في المقدّمة» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 226</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب هنري جيمس ويغام «المسألة الفارسية»، لندن: إيزبستر، 1903</span></figcaption></figure>

ويشرح نشأة الأسطول: «فلمّا وقعت في يد إمام عُمان سنة 1651 بعض السفن الحربية والتجارية البرتغالية، وُضع أساس أسطولٍ زيد بالشراء».

ويذكر نتائجه: «ففي 1652 أغار العرب على زنجبار، وظهروا سنة 1660 أمام ممباسا». ثم: «وفي ديسمبر 1698 سقطت ممباسا، القلعة البرتغالية القوية، بعد حصارٍ دام ثلاث سنين، في يد عرب عُمان».

## ترميم الأفلاج وإلغاء الجمارك

يقول شتولمان: «وأمر أحد خلفاء سلطان بن سيف، سيف بن سلطان، المتوفّى سنة 1711، بترميم عددٍ كبيرٍ من القنوات المائية الجوفية في عُمان».

ويذكر أن خليفته سلطان بن سيف الثاني فتح جزر البحرين من الفرس. ويضيف عن الاقتصاد: «وفي عهد إمامٍ يُدعى «مهنّا»، تولّى الحكم سنة 1718، أُلغيت الجمارك في مسقط، فازدهرت التجارة».

## نظام الفلج

في حاشية طويلة ينقل شتولمان وصفًا لنظام الري في عُمان من تقرير إيطالي صدر سنة 1912. يقول: «يجري الريّ في المناطق الجبلية، كما ذكرنا، بالماء الجاري، يُحوَّل من ينابيع غزيرةٍ خاصّة ويُجمع في قنواتٍ جوفية».

ويشرح المصطلحات: «ومجموع هذه القنوات هو ما يسمّيه الأهالي «فَلَج» (جمعه «أفلاج»)». وتُقاس قدرة الفلج بـ«الغيز»، أي بعدد القنوات التي يتألف منها. ويقول: «والفلج ملكٌ جماعي».

ويشرح وحدة الماء: «ومقدار الماء الذي يستطيع الغيز توزيعه في ساعةٍ من النهار (تُحسب تقريبًا بالشمس والنجوم) يسمّى «أثر»، وهو يكفي لريّ نحو مئة نخلة».

ويذكر طريقة تمويل الفلج: «والتسع من الماء، أي ماء يومٍ من كلّ دورةٍ من تسعة أيام، محفوظٌ للفلج، ويُباع لمن يدفع أكثر». ويُخصّص ريعه «لصيانة الفلج وتوسيعه، ولدفع راتب القائم عليه، الذي يُختار بالانتخاب». ويضيف: «وكثيرًا ما تُوقف أوقافٌ على الفلج».

## الآبار في الباطنة

ويقارن النص بين الفلج والبئر: في الباطنة يجري الري بالآبار، و«على خلاف الفلج، الذي يجمع كلّ الأراضي التي يرويها ويربطها بالترتيبات الناشئة عن الانتفاع المشترك، يكوّن كلّ «طويّ» مع البستان الذي يرويه ملكًا مستقلًّا منفصلًا».

ويذكر تكاليفها: «وأعمق الآبار في السيب، وتكلّف حفرًا وتبطينًا نحو أربعمئة فرنك». ويضيف: «ويُشترى في الباطنة بستانٌ من 150 نخلةً في كامل إثمارها مع بئره بنحو ستمئة ريال».

ويعلّق المحقق: «أفلاج عُمان منظوماتٌ قديمةٌ لجمع المياه ونقلها وتخزينها وتوزيعها، في الداخلية والشرقية والباطنة، ولنمط الريّ هذا في المنطقة تاريخٌ يرجع إلى خمسة آلاف سنة».

## أحمد بن سعيد

يقول شتولمان إن قوة اليعاربة ضعفت بالنزاعات الداخلية، «حتّى اختير سنة 1741 أحمد بن سعيد من أسرة آل بو سعيد إمامًا». ويذكر من أعماله: «وجاء أحمد بن سعيد بقوّةٍ كبيرة لنجدة البصرة التي كان الفرس قد أخذوها». ويروي أن العدو مدّ سلسلة حديدية على مدخل شط العرب، «فكسرها أحمد بسفنه الحربية وحرّر البصرة».

ويذكر أن السلطان العثماني رتّب له «راتبًا يقال إنه ظلّ يُدفع حتّى زمن السيّد سعيد بن سلطان». ويقول: «وتوفّي سنة 1775».

## الخلافة

يلاحظ شتولمان تغيّر نظام الخلافة: «فقد كان الأئمّة طوال نحو تسعمئة سنة يُنتخبون بكفاءتهم، بغضّ النظر عن الاعتبارات الأسرية». ثم صار الحكم في الأسرة منذ اليعاربة. «ولم يُرجع إلى مبدأ الانتخاب القديم إلّا في اختيار أحمد بن سعيد من أسرة آل بو سعيد».

ويذكر أن لقب «السيّد» صار لأبناء الأسرة الحاكمة، «ويُلقَّب به أبناء أسرة زنجبار أيضًا».

## خاتمة

يقدّم الفصل العاشر من كتاب شتولمان عرضًا مختصرًا لتاريخ عُمان من الهجرات القديمة إلى منتصف القرن الثامن عشر: من الأزد ودخول الإسلام، إلى الإمامة المنتخبة، إلى طرد البرتغاليين على يد اليعاربة، إلى بناء الأسطول والوصول إلى شرق أفريقيا، إلى عهد أحمد بن سعيد. ويحفظ في حاشيته وصفًا دقيقًا لنظام الأفلاج، بوحداته وطرق تمويله، كما كان في أوائل القرن العشرين.

## المصدر

- الكتاب: «الصراع على جزيرة العرب بين تركيا وإنجلترا» (Der Kampf um Arabien zwischen der Türkei und England، 1916)، تأليف: فرانتس شتولمان (Franz Stuhlmann)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل العاشر «مسقط أو عُمان» ص 195–208 (البلاد ص 195–196، العصور القديمة ص 196، الأزد ص 197–198، الإسلام والإمامة ص 199–201، اليعاربة والبرتغاليون ص 202–204، شرق أفريقيا ص 205، الأفلاج وحاشيتها ص 206، أحمد بن سعيد ص 207، الخلافة ص 208).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`27-famous-pearls-rosenthal`,`12-jebel-akhdar-1902-cox`,`18-oman-plants-1838-aucher-eloy`]},{slug:`01-pearl-banks-rosenthal`,title:`أعظم مغاصات العالم: موسم اللؤلؤ في الخليج العربي كما رآه روزنتال`,author:`ليونار روزنتال`,category:`التراث`,categorySlug:`heritage`,date:`2026-09-30`,cover:`articles/01/1.webp`,excerpt:`حين جلس تاجر اللؤلؤ الباريسي ليونار روزنتال يكتب كتابه «في مملكة اللؤلؤ»، كان يعرف أنه يكتب عن عالمٍ يمتدّ من سواحل فنزويلا إلى جزر المحيط الهادئ.`,tags:[`اللؤلؤ`,`الغوص`,`البحرين`],sample:!1,book:`في مملكة اللؤلؤ`,coverCaption:`لوحة خيالية لإدمون دولاك عن أساطير اللؤلؤ، وليست مشهدًا من الخليج: «لؤلؤة الفيل» (La Perle de l'Éléphant): «والأصداف التي تنتمي إلى سلالة ملكة الأصداف... والفيلة الأصيلة، هي التي تُنتج اللآلئ» (الفصل الرابع عشر) — المصدر: «في مملكة اللؤلؤ»، ص 35`,era:`طبعة 1920`,eraSort:1920,words:1649,minutes:8,body:`حين جلس تاجر اللؤلؤ الباريسي ليونار روزنتال يكتب كتابه «في مملكة اللؤلؤ»، كان يعرف أنه يكتب عن عالمٍ يمتدّ من سواحل فنزويلا إلى جزر المحيط الهادئ. غير أن قلمه كان يعود في كل مرة إلى بقعةٍ واحدة يضعها فوق سائر البقاع: الخليج العربي. ففي الفصل الذي خصّصه لمغاصات اللؤلؤ يقرّر بعبارةٍ صريحة: «وأعظم مغاصات العالم شأنًا مغاصات الخليج العربي، التي تُخرج في كل عامٍ من اللؤلؤ ما قيمته أربعون إلى ستين مليون فرنك».

## تاريخٌ أقدم من الذاكرة

لا يبدأ روزنتال حديثه عن الخليج من زمنه هو، بل يعود به إلى الأزمنة القديمة؛ فيذكر أن الإغريق عرفوا هذه المغاصات في زمن سلوقس ملك سوريا، وأن ميغاستينس تحدّث عن مغاصاتٍ للؤلؤ على السواحل الشرقية للخليج. ثم يقفز إلى القرن السادس عشر، فيذكر أن تجارة اللؤلؤ في هذه المنطقة كانت من سنة 1515 حتى القرن السابع عشر في أيدي البرتغاليين الذين استولوا على الجزر ذات المغاصات، ثم استعادها منهم الشيوخ الساحليون. ويضيف المحقق في حاشيته أن البرتغاليين استولوا على هرمز سنة 1515 وبقوا فيها حتى سنة 1622، وأن قوةً برتغالية هرمزية غزت البحرين سنة 1521، وظل البرتغاليون يسيطرون عليها حتى طُردوا منها سنة 1602.

<figure class="art-fig"><img src="articles/01/1.webp" alt="لوحة ملوّنة من لوحات الكتاب، من رسم إدمون دولاك، توضّح أسطورةً من أساطير اللؤلؤ التي يرويها المؤلف" width="1312" height="1600" loading="lazy" /><figcaption><span class="fig-cap">لوحة خيالية لإدمون دولاك عن أساطير اللؤلؤ، وليست مشهدًا من الخليج: «لؤلؤة الفيل» (La Perle de l'Éléphant): «والأصداف التي تنتمي إلى سلالة ملكة الأصداف... والفيلة الأصيلة، هي التي تُنتج اللآلئ» (الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 35</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

أما في زمن المؤلف فالبحرين في قلب المشهد؛ إذ يقول إن «جزر البحرين هي اليوم مستودع المغاصات كلها»، ومنها يُرسل اللؤلؤ إلى بمباي، والغوص فيها حرّ إلا من إتاوةٍ زهيدة تؤدّى إلى شيخ الميناء. ويذكّر المحقق القارئ بأن منظمة اليونسكو أدرجت سنة 2012 في قائمة التراث العالمي موقع «صناعة اللؤلؤ، شاهدٌ على اقتصاد جزيرة» في مدينة المحرّق.

## روزنامة الموسم

يرسم الكتاب للموسم إطارًا زمنيًا واضحًا: «ويبدأ الغوص في الخليج العربي في شهر أبريل، وقد لا ينتهي إلا في أكتوبر أو حتى نوفمبر، إذا كان الجو حارًّا والريح مواتية»، ويتخلّل هذه المدة شهر رمضان. ويقدّر المؤلف عدد المتفرّغين للغوص وحده بنحو ستين ألفًا إلى ثمانين ألفًا من الأهالي.

وقبل أن يُرفع الشراع تبدأ الحكاية الاقتصادية للموسم: يتزوّد ربّان المركب بالأرز والتمر المجفف والقهوة والسكر، ويسلّفه إياها أحد الأغنياء بزيادةٍ تبلغ ثلاثين أو أربعين في المئة، ويحتفظ لنفسه بحقّ شراء اللؤلؤ عند عودة الغواص. وهنا يتدخّل المحقق ليعيد إلى الكلمات أسماءها المحلية؛ فربّان سفينة الغوص وصاحبها يُعرف عند أهل الخليج بـ«النوخذة»، والغواص يسمّى «الغيص»، وتاجر اللؤلؤ «الطوّاش» ومهنته «الطواشة».

## على ظهر مركب الغوص

أجمل ما في هذا الفصل شهادةٌ ينقلها روزنتال عن مشترٍ فرنسي كان على صلةٍ دائمة بأهل الخليج ويتكلم لغتهم. يصف الرجل صباحًا وصل فيه في الرابعة إلى مركبٍ شراعي فيه ثمانون غواصًا، يسوده صمتٌ مهيب ونظامٌ تام، و«في كل دقيقتين أو ثلاث كان نحو ثلاثين رجلًا يغوصون، معلَّقين بحبالٍ يمسك بها رفاقهم».

<quote by="ليونار روزنتال" source="«في مملكة اللؤلؤ»">ومن سنة 1515 حتى القرن السابع عشر كانت تجارة اللؤلؤ في هذه المنطقة في أيدي البرتغاليين الذين استولوا على الجزر التي كانت في مياهها مغاصاتٌ للؤلؤ. ثم استعادها منهم الشيوخ الساحليون بعد ذلك</quote>

ويعدّد الشاهد أدوات الغواص القليلة: ملقطٌ صغير من العظم يضغط به أنفه، وأغطيةٌ جلدية للأصابع، وسلةٌ صغيرة، وحجرٌ يُربط إليه. وتأتي حواشي المحقق هنا كأنها معجمٌ صغير لمفردات الغوص: فالملقط هو «الفطام»، وأغطية الأصابع «الخبط»، والسلة «الديين»، والحجر «الحصاة» أو «الثقل»، ومن يمسك الحبل ويسحب الغواص هو «السيب»، والحبل الواصل بينهما «اليدا».

وتدوم الغطسة، كما يروي، من دقيقتين إلى ثلاث، ويبلغ الغواصون الذين رآهم عمق عشرين مترًا. ولا يخفي الشاهد قسوة هذا العمل؛ فيصف الإعياء الذي يبدو على الغواصين عند صعودهم، ويروي حادثةً رأى فيها غواصًا يُسحب فاقد الوعي، ثم يعجب حين يراه بعد فنجانٍ من القهوة يعود إلى الغوص بعد ساعة. والقهوة، كما يقول، هي الشيء الوحيد الذي يتناوله الغواصون طوال النهار، فإذا جاء الليل أكلوا الأرز والتمر قبل النوم.

## فرحة الدانة

ليست كل الأيام شقاءً. فالمحار يُفتح على ظهر المركب أو على البر، والمعدّل نحو خمسين صدفةً لبضع لآلئ صغيرة، أما الجميلة فنادرة. لكن حين تُكتشف إحداها يعمّ المركب فرحٌ عظيم، فتدوّي الطلقات معلنةً البشرى التي تنتقل من مركبٍ إلى مركب حتى تبلغ الساحل، فلا يتحدث الناس إلا عن ماء هذه الأعجوبة وجمالها ولونها وشكلها. ويلخّص روزنتال مكانة اللؤلؤ في نفوس أهل تلك الأنحاء بقوله: «فالعربي في تلك الأنحاء يكاد يعبد اللؤلؤ، بل يؤثره على فرسه». ويضيف المحقق أن أهل الخليج يسمّون اللؤلؤة الكبيرة الثمينة «الدانة».

ومن طريف ما ينقله الشاهد أن غواصًا وجد لؤلؤةً جميلة فوضعها في فمه، كعادتهم، ليقيها تغيّر الحرارة، لكن انفعاله اشتدّ حتى عضّها، فانكسر أحد أسنانه وخُدشت اللؤلؤة.

## البحرين: سوقٌ لا تُفتح إلا بالصبر

في الفصل الرابع، «في طلب اللؤلؤ»، يعود المؤلف إلى البحرين ليقول: «ففي البحرين، في الخليج العربي، على مقربةٍ من ساحل جزيرة العرب، توجد أهمّ مغاصات العالم». ويصف أهلها بأنهم يرون الصيد حقًّا قديمًا موروثًا عازمين على صونه، فيقول: «وهم، إذ يتّصفون باللطف وكرم الضيافة، شديدو الغيرة على امتيازاتهم، والويل لمن يحاول التعدي عليها!».

ثم يروي قصة مشترٍ فرنسي جاء إلى الخليج ثلاث سنواتٍ متتالية دون أن يُعرض عليه لؤلؤ، حتى خطرت له في السنة الرابعة فكرةٌ طريفة: حمل ماله كله قطعًا فضيةً صغيرة، فظلّت اثنا عشر حمارًا طوال يوم وصوله تنقل صناديق الفضة من المركب إلى مسكنه، فجاء الناس من تلقاء أنفسهم يعرضون اللؤلؤ. وفي الحاشية يكشف المحقق خيطًا آخر للقصة: فقد ذكر ليونار بويي في حديثٍ منشور سنة 2024 أن فيكتور روزنتال، أخا المؤلف، وكان يحسن العربية، قصد البحرين سنة 1906، وأن الرواية في مذكرات المؤلف تجعل الحمير خمسين، بينما هي في هذا الكتاب اثنا عشر.

## خريطة المغاصات في العالم

يضع روزنتال مغاصات الخليج العربي في سياقها العالمي. فهو يذكر أن «مغاصات اللؤلؤ كلها تقريبًا في المنطقة المدارية»، ويرسم دائرة واسعة تبدأ من الخليج العربي حتى جزيرة مرغريتا في فنزويلا، تشتمل على مغاصات مصوّع وأستراليا وتاهيتي وبنما وكاليفورنيا وغيرها. ويلاحظ أن محار اللؤلؤ «يُصاد في كل مكانٍ تقريبًا، ولكن لا يُستغلّ إلا ما عُرف من المغاصات منذ قرون، لأن غيرها قليل الغلّة سريع النفاد».

ويضيف أن لون اللؤلؤ ومظهره يختلفان من مغاص إلى آخر «بحسب حجم الأصداف، وبحسب تركيب قاع البحر خاصة». ثم يقدّر غلّة الخليج: فهي «تُخرج في كل عامٍ من اللؤلؤ ما قيمته أربعون إلى ستين مليون فرنك».

## من البرتغاليين إلى الشيوخ

ويمرّ المؤلف سريعًا بتاريخ هذه التجارة في العصر الحديث: «ومن سنة 1515 حتى القرن السابع عشر كانت تجارة اللؤلؤ في هذه المنطقة في أيدي البرتغاليين الذين استولوا على الجزر التي كانت في مياهها مغاصاتٌ للؤلؤ. ثم استعادها منهم الشيوخ الساحليون بعد ذلك».

<figure class="art-fig"><img src="articles/01/2.webp" alt="لوحة ملوّنة أخرى من لوحات دولاك في الكتاب، عن أسطورة لؤلؤة السمكة" width="1322" height="1600" loading="lazy" /><figcaption><span class="fig-cap">لوحة خيالية لإدمون دولاك عن أساطير اللؤلؤ، وليست مشهدًا من الخليج: «لؤلؤة السمكة» (La Perle du Poisson): «ولؤلؤة السمكة لونها كلون ظهر السِّلَّوْر... تولد في أفواه الأسماك» (الفصل الرابع عشر)</span><span class="fig-src">المصدر: «في مملكة اللؤلؤ»، ص 43</span><span class="fig-orig">أصل الصورة: لوحةٌ ملوّنةٌ لإدمون دولاك (1882–1953) من طبعة هـ. بياتسا لكتاب «في مملكة اللؤلؤ»، باريس، 1920</span></figcaption></figure>

ويوضح المحقق في حاشيته أن البرتغاليين استولوا على هرمز سنة 1515 وبقوا فيها حتى سنة 1622، وأنهم فرضوا على السفن التجارية في الخليج نظام تصاريح.

## مغاصات بعيدة عن الساحل

يحدد روزنتال موضع المغاصات: «والمغاصات تقع عمومًا على مسافة مئةٍ وخمسين ميلًا أو مئتي ميلٍ من ساحل جزيرة العرب». ويذكر أن الذين يسلّفون أرباب المراكب مؤونتهم قلة من الأغنياء، «ولعلهم عشرةٌ أو خمسة عشر يمسكون البلاد كلها بأيديهم». ويشرح عاقبة الموسم الرديء على الغواص: «وحينئذٍ، إذا كان المحصول رديئًا، تبدأ مصائب هذا الأخير، بينما تتراكم فوائد دَينه».

## حادثةٌ في عرض البحر

ومن أكثر ما في شهادة المشتري الفرنسي تأثيرًا وصفه لحادث وقع أمامه. يقول: «وفجأةً لمحتُ على أحد جانبي المركب شيئًا من الاضطراب، إذ كان نحو عشرة غواصين يغوصون في الموضع نفسه». وقال له الربّان بهدوء إن غواصًا «لم يعد يعطي إشارةً بحبله، ولعل سمكةً عضّته، أو لعله أُغمي عليه».

ثم ظهر غواص «وهو يجرّ رفيقه فاقد الوعي مضرَّجًا بالدماء، وقد جرفه التيار إلى ثلاثين مترًا من المركب». وقيل للشاهد إن سمكة «يسمّونها هنا «الشيطان» (وهي الأخطبوط)» هي التي أصابته.

ويذكر أن أكثر الغواصين يحملون معهم تميمة يرون أنها تحميهم من هذه السمكة. ويختم القصة بما أدهشه: فبعد أن شرب المصاب فنجانًا من القهوة، «وهي الشيء الوحيد الذي يتناوله الغواصون طوال أربع عشرة ساعةً من النهار»، عاد إلى الغوص بعد ساعة. «فإذا جاء الليل أكل الغواصون الأرز والتمر قبل أن يناموا».

## من الصدفة إلى السوق

ويصف الشاهد ما يجري للمحار بعد صيده: «فيُبسط في الشمس حيث يتعفن، فتنتشر منه رائحةٌ كريهةٌ إلى مسافة عدة كيلومترات. وتُنزع على الفور اللآلئ الكبيرة القليلة إن وُجدت، أمّا الباقي فيُغلى ويُغربل لجمع ما قد يبقى فيه من اللؤلؤ».

ويذكر طريقة لصون المغاصات: «وتُلقى الأصداف الصغيرة الفارغة في البحر، وبذلك تُصان المغاصات بتمكين المحار من التكاثر فيها من جديد». لكنه يستدرك بأن هذه الطريقة لا تُتّبع إلا في المغاصات الخاصة.

أما مسار اللؤلؤ بعد ذلك فيلخّصه الشاهد في جملة واحدة: «فإذا عاد رئيس الغواصين إلى القرية باع محصوله للعربي الذي سلّفه الطعام، ويمضي هذا بدوره فيبيعه في سوق الخليج الكبيرة أو في بمباي».

## لماذا كان اللؤلؤ عسير المنال؟

يفتتح روزنتال الفصل الرابع بتأمل في طبيعة هذه التجارة: «إن اللؤلؤ، وهو مستترٌ في أحضان البحار المدارية، أعسرُ اكتشافًا من سائر الجواهر». ويرى أن «النجاح فيه كالفوز في اليانصيب».

ويفسر بذلك ما يسميه احتكار الغواصين لهذه المهنة منذ قرون: فصيد اللؤلؤ «يقتضي من جهةٍ أخرى ممن يزاولونه تنظيمًا متكاملًا». ويضيف: «وكثيرًا ما لا تفي الحصيلة بمتاعب الغواصين ولا بنفقات المتعهد. وكلهم يعيشون على أمل أن يُثروا باكتشاف لؤلؤةٍ جميلة».

## خاتمة

يقرأ المرء هذين الفصلين فيرى الخليج العربي من نافذةٍ غير مألوفة: نافذة تاجرٍ أوروبي يعرف قيمة اللؤلؤ في أسواق باريس، لكنه يدرك أن هذه القيمة تبدأ من صبر غواصٍ في عرض البحر، وحكمة نوخذةٍ يدير مركبه، وسوقٍ في البحرين لها أعرافها وأهلها. وتأتي حواشي التحقيق لتعيد إلى المشهد لغته المحلية، فتصير القراءة رحلةً بين عينٍ غريبة تصف، وذاكرةٍ خليجية تسمّي.

## المصدر

- الكتاب: «في مملكة اللؤلؤ» (Au royaume de la perle)، تأليف: ليونار روزنتال (Léonard Rosenthal)، بلوحات إدمون دولاك؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثالث «مغاصات اللؤلؤ» ص 24–31 (والمادة المستعملة ص 24–28: خريطة المغاصات والبرتغاليون ص 24؛ موضع المغاصات ص 25؛ الحادثة ص 26–27؛ المحار والسوق ص 27–28)، والفصل الرابع «في طلب اللؤلؤ» ص 32–34.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`13-batinah-musandam-dhaid-1902-cox`,`28-bahrain-pearls-1618-silva`,`11-gulf-trade-1863-pelly`]},{slug:`02-abudhabi-baniyas-whitelock`,title:`ستة أسابيع بين أبوظبي وصير بني ياس: ضابط مساحة يدوّن ما رأى`,author:`—`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-09-29`,cover:`articles/02/1.webp`,excerpt:`في فبراير 1824 غادر الملازم هـ. هـ. وايتلوك، أحد ضباط البحرية الهندية، سفينته «سايكي» مع فرقةٍ من قواربها، مجهّزين بما يكفي ستة أسابيع، لمسح المياه الواقعة بين أبوظبي وجزيرة صير بني ياس.`,tags:[`أبوظبي`,`صير بني ياس`,`المسح البحري`],sample:!1,book:`ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة`,coverCaption:`قصر الحصن في أبوظبي، حصن آل نهيان الذي بُني في القرن الثامن عشر (صورة أضافها المحقق) — المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 23`,era:`1824`,eraSort:1824,words:1687,minutes:8,body:`في فبراير 1824 غادر الملازم هـ. هـ. وايتلوك، أحد ضباط البحرية الهندية، سفينته «سايكي» مع فرقةٍ من قواربها، مجهّزين بما يكفي ستة أسابيع، لمسح المياه الواقعة بين أبوظبي وجزيرة صير بني ياس. كانت الملاحة هناك، كما يقول، «شديدة التعقيد»، فاحتاج المسّاحون إلى أن يتركوا السفينة الكبيرة ويمضوا بين الجزر والأخوار بقواربهم. ومن هذه الرحلة، ومن سنواتٍ أخرى قضاها في مسح السواحل، خرج نصٌّ نشرته «أعمال الجمعية الجغرافية في بومباي» في مجلدها الأول، فترجمه المحقق كاملًا وجعله القسم الأول من كتاب «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين».

## من هو الكاتب؟

يقدّم المحقق وايتلوك بأمانة؛ فيقول إنه لم يقف على ترجمةٍ له في المصادر التي رجع إليها، ولذلك يكتفي بما يذكره الرجل عن نفسه: أنه كان من ضباط المسح البحري لسواحل الخليج العربي بعد سنة 1820، وأنه عمل على السفينة «ديسكفري» في مسح سنة 1822، ثم على «سايكي» سنة 1824، وكان قائده في الحالين الكابتن غاي. ويلاحظ المحقق أن وايتلوك يذكر الشيخ طحنون بن شخبوط حاكم أبوظبي في موضعٍ كأنه حي، ثم يسمّيه «الشيخ الراحل» في موضعٍ آخر، والشيخ طحنون حكم أبوظبي من سنة 1818 إلى سنة 1833، فالأرجح أن النص كُتب في صورته الأخيرة بعد ذلك التاريخ.

<figure class="art-fig"><img src="articles/02/1.webp" alt="صورة قديمة لقصر الحصن في أبوظبي كما تظهر في الكتاب" width="1024" height="736" loading="lazy" /><figcaption><span class="fig-cap">قصر الحصن في أبوظبي، حصن آل نهيان الذي بُني في القرن الثامن عشر (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 23</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: تصوير هرمان بورخارت (1857–1909)، 1904</span></figcaption></figure>

## أهل الساحل: الشيخوخة موقّرة والكرم مضرب المثل

يفتتح وايتلوك وصفه بملاحظةٍ تكشف عن إيقاع الحياة على الساحل: ففي موسم الغوص على اللؤلؤ «تكاد البلدات تخلو من الرجال»، فيتركون نساءهم وأطفالهم في رعاية من جاوزوا سنّ العمل. ويقدّر عدد السكان بأحد عشر ألفًا أو اثني عشر ألفًا، ينتمي أكثرهم إلى قبائل القواسم والمناصير وبني ياس.

ثم يرسم صورة أخلاقهم كما رآها: «فالمشاجرات قلّما يُسمع بها، والشيخوخة مُوقَّرة دائمًا، وبرّ الوالدين قائم، والكرم عندهم مضرب المثل». ويضيف أن كبار السنّ يُستشارون في الأمور المهمة ولفضّ الخصومات، وأن صلابة البدن وقوة العزيمة هما الصفتان اللتان تكسبان صاحبهما الاحترام.

## زيارة الشيخ طحنون

من أجمل مشاهد النص وصف وايتلوك لزيارةٍ رسمية قام بها الشيخ طحنون للكابتن غاي، يصحبه عشرون أو ثلاثون من رجاله على هجنٍ يقول عنها: «وهي بلا ريبٍ أجود ما رأيت من الإبل». اندفع الركب في صفٍّ منتظم، ثم توقّف فجأة على بعد نحو ثلاثمئة ياردة، فبركت الإبل عند صدور الأمر، وتقدّم طحنون أمام رجاله المصطفّين خلفه على هيئة نصف دائرة. وكانت المرطبات والقهوة والحلوى قد أُعدّت في الخيمة، وفي المساء ردّ الكابتن غاي الزيارة.

<quote by="—" source="«ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»">أمّا أبوظبي فموضعٌ متواضعٌ جدًّا، لا يكاد يكون فيه بناءٌ من حجر؛ غير أنّ لها مزايا، من مرساها القريب من البرّ، والأخوار على جانبيها، قد تجعلها في النهاية ذات شأنٍ أكبر</quote>

ويصف وايتلوك الشيخ بأنه «صغير الجسم، ولكنه حسن البنية، يُعرف بالشجاعة والسخاء»، وأنه كان على رأس قبيلة بني ياس. ويذكر أيضًا أن الشيخ زوّد فرقة المسح «عن طيب خاطرٍ بسفينتين محليّتين جيدتين، وبأدلّاء، وبحرسٍ قويٍّ من العرب».

## سمرٌ حول النار وجمالٌ تعبر البحر

لم تكن أسابيع المسح عملًا جافًّا كلها. فالكاتب يروي أن مرافقيهم من أهل البلاد كانوا يشاركون المسّاحين ألعابهم عن طيب نفس، كما كان المسّاحون يشاركونهم ألعابهم، فكانت المصارعة والوثب واللعب بالعصيّ تسلية الأصيل، وفي المساء يجتمعون في حلقةٍ حول نارٍ كبيرة من الحطب ويحتسون القهوة. ويعترف بأسفه أنه لم يكن يحسن العربية، لأنه كان يعتقد أن بين القوم «واحدٌ أو اثنان من الرواة البارعين».

ومن طريف ما يرويه أنهم حصلوا في أول مخيّمٍ لهم على جزيرة على حمارٍ وسبعة جمال، فخشي أن يضطروا إلى تركها عند الرحيل، إذ لا تتّسع قواربهم لهذه البهائم الضخمة. فلما سأل أهل البلاد ضحكوا، وقالوا إنه سيرى كيف يتدبرون الأمر: اختاروا جملًا مطواعًا يتقدّم، وربطوا الجمال واحدًا بعد الآخر في قطار، ثم دفعوا الأول إلى الماء ورفعوا شراع القارب الكبير. إنها صورةٌ صغيرة، لكنها تحكي الكثير عن خبرة أهل الساحل بالبر والبحر معًا.

## أبوظبي: موضعٌ متواضع ذو مستقبل

لم تكن أبوظبي يومئذٍ مدينة حجر؛ يقول وايتلوك: «أمّا أبوظبي فموضعٌ متواضعٌ جدًّا، لا يكاد يكون فيه بناءٌ من حجر؛ غير أنّ لها مزايا، من مرساها القريب من البرّ، والأخوار على جانبيها، قد تجعلها في النهاية ذات شأنٍ أكبر». وهي عبارةٌ يقرؤها القارئ اليوم بعينٍ مختلفة.

## موسم الغوص في مياه بني ياس

يخصّص وايتلوك فصلًا للغوص على اللؤلؤ، فيقول إنه يبدأ في يونيو ويستمر حتى الاعتدال في سبتمبر، وإن المغاصات تمتد من الشارقة إلى جزيرة بِدَلف، نحو ثلاثمئة وثلاثين ميلًا في خطٍّ مستقيم. ويذكر أنه يقال إن عدد القوارب العاملة في الغوص كله ثلاثة آلاف، «لأنّ حقّ الغوص مباحٌ للجميع في الخليج».

ويصف طريقة العمل: ينقسم الرجال فريقين، فريقٌ يبقى في القارب يتسلّم المحار ويسحب الغاصة، وفريقٌ يغوص واضعًا قدميه على ثقلٍ من الحجر مربوطٍ بحبل، ومع كلٍّ منهم سلة أو شبكة. ويسدّون أنوفهم بقطعةٍ من القرن، ويبقون تحت الماء نحو أربعين ثانية في الأعماق المعتادة، ثم يتعلّقون بالقارب ليستريحوا نحو ثلاث دقائق. وطعامهم في الموسم التمر والسمك، و«السمك كثيرٌ جيدٌ في كلّ مكان».

أما الجزر فكانت محطات العمل: فقوارب الساحل تبقى في البحر حتى تمتلئ بالمحار، ثم تقصد جزيرةً مناسبة تفلق عليها الأصداف، ويستنتج الكاتب مما رآه من الأكوام الكبيرة على صير بني ياس وزركوه وصير بونعير أنها أنسب الجزر لذلك. ويصف في صير بني ياس «خورٌ جميلٌ عمق مائه خمس قامات»، آمنٌ تمامًا، يقصده الغاصة كثيرًا لأن سطحه هادئ دائمًا.

## اللباس والسلاح

يصف وايتلوك لباس أهل الساحل وصفًا مفصلًا. فغطاء الرأس «منسوجٌ نسجًا كثيفًا من الحرير الفاخر والقطن، مخطّطٌ بالأحمر أو الأخضر مع الأصفر الزاهي، طوله نحو أربع أقدام وعرضه ثلاث». ويذكر أنه لبس زيّهم مرة أو مرتين إرضاءً لهم، «فبدا أنهم استظرفوا ذلك من قلوبهم».

<figure class="art-fig"><img src="articles/02/2.webp" alt="لوحة محفورة قديمة لمغاصات اللؤلؤ في الخليج: الغوّاص وأسطول المراكب والغوّاصون في القاع وأدوات الغوص" width="829" height="650" loading="lazy" /><figcaption><span class="fig-cap">«مغاصات اللؤلؤ في الخليج»: الغوّاص، وأسطول المراكب راسيًا، والغوّاصون في القاع، وأدوات الغوص (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، ص 27</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: نقشٌ لحفّارٍ غير معروف في مجلّة «ذا غرافيك» (The Graphic)، لندن، 1 أكتوبر 1881</span></figcaption></figure>

ومن لباسهم المعتاد، كما يعدّد، جراب للتبغ أو للخرطوش، وقرن للبارود، «وبندقية فتيلٍ يُزيَّن أخمصها بالفضة في الغالب، ورمحٌ طوله نحو سبع أقدام، وخنجرٌ نفيسٌ في الحزام لا يفارقهم».

أما الثوب الخارجي فيسميه «الكَمْلين»، ويقول إنه «يُصنع من غزلٍ صوفيّ مفتول، إمّا كثيفًا محكم النسج، وإمّا رقيقًا جدًّا متباعد النسج». ويذكر أن الأنواع الكثيفة أكثرها أسود، وأن أثمانها تتراوح «بين دولارين وثلاثين دولارًا».

## البيوت والطعام

ويقول عن المساكن: «وبيوت الطبقات الميسورة مبنيّةٌ من الحجر، ذات سطوحٍ مستويةٍ ينامون عليها»، أما الفقراء فيسكنون العشش.

ويصف طعامهم بأنه «بسيطٌ ولكنه صحّي: فالتمر والسمك وأقراص الخبز من الدقيق واللبن هي أهمّ أصنافه». ويذكر أن الأرز ترف عند الفقراء لغلاء ثمنه، وأن «البلاو المطبوخ بالدجاج أو بلحم الجدي، مع الفاكهة، هو عشاء علية القوم».

ويصف القهوة: «وتُشرب القهوة في كلّ الأوقات في فناجين صغيرةٍ من الخزف الصيني». ويصف طريقة طبخ لافتة: يضعون السمك على الجمر في قدر من الفخار، «وفي الوقت نفسه تُلصق بجوانب القدر أقراصُ القمح فلا تلبث أن تنضج، والسمك المطبوخ على هذا النحو طيّبٌ جدًّا».

ويذكر من السمك البيَاح، «الذي يُصاد بالشباك في الأخوار بأعدادٍ كبيرة»، ومن صيد البحر سمك الصخور الأحمر والكنعد وصغار القروش.

## عادات في التحية والوداع

ويسجّل وايتلوك أدبًا من آداب السؤال عن الأهل: «ومن العادة إذا أردت أن تسأل رجلًا عن صحّة زوجته وأهله أن تسأله هكذا: «كيف حال بيتك؟»». ويقول: «والعرب في المجاملة يلتزمون الرسوم، ولا يُغفلون أبدًا السلام المعتاد حين يلقون غيرهم أول مرة».

ويصف مقابرهم: «ومقابرهم في العادة خارج القرية، وكثيرًا ما تكون في بقاعٍ منعزلةٍ نظيفة». ويذكر أن الميت يُوجَّه دائمًا نحو مكة، وأن الأهل يضعون «حجرٌ مسطّحٌ عند رأسه وآخر عند قدميه».

## ساحلٌ خطر وشيخٌ يأمر بالإنقاذ

يصف وايتلوك الساحل بأنه «عميق المياه قريبًا من البرّ، ولكنه ساحلٌ خطِرٌ إذا هبّت الريح الشمالية الغربية فدفعت السفن نحوه». ويروي أن سفينتهم كادت تغرق في عاصفة، ولم يكن تحتها من الماء إلا أربع قامات، وكان الأهالي مصطفّين على الساحل. ويقول: «ولكنّي سمعت بعد ذلك أنّ الشيخ أمر ببذل كلّ جهدٍ لإنقاذ البحّارة». ثم ابتعدت السفينة عن الساحل بعد ست ساعات من القلق.

## طريقة الغوص

ويفصّل وايتلوك طريقة العمل على المغاص. فالسفن ترسو «في أعماقٍ مختلفةٍ من الماء، من خمس قاماتٍ إلى ستّ عشرة قامة». وينقسم الرجال فريقين: فريق يبقى في القارب ليتسلّم المحار ويسحب الغاصة، والآخرون ينزلون على ثقل من الحجر مربوط بحبل. ومع كل غواص سلة «تسع سبع محاراتٍ أو ثمانيًا»، فإذا ملأها «هزّ الحبل إشارةً إلى من على القارب أن يسحبوه».

ويصف أداة الأنف: «قطعةً من القرن يسدّون بها المنخرين، لتمكّنهم من حبس النَّفَس مدّةً أطول». ويقول: «ويبقون تحت الماء نحو أربعين ثانية في الأعماق المعتادة، ولم أرَ أحدًا منهم يبقى أكثر من دقيقة».

ويذكر أن الغاصة كانوا يفلقون المحار على الجزر بسكين مطوية عادية، وأنهم «في ذلك سريعون حاذقون جدًّا». ويروي أنهم سُئلوا عن خطر القرش، فوصفوه بأنه «لا شيء إذا قيس بالخطر الذي يلقونه من سمك المنشار».

## أرقام الموسم

يقدّم وايتلوك جدولًا بقوارب الغوص: من البحرين وتوابعها 2430 قاربًا، ومن الشارقة ورأس الخيمة 350، ومن أبوظبي وغيرها من بلدات الساحل نحو 350، فيكون المجموع 3230 قاربًا. ويقدّر متوسط الرجال في القارب بتسعة، فيبلغ عدد العاملين 29,070 رجلًا. ويقول: «وتُقدَّر قيمة اللؤلؤ الذي يُستخرج في الخليج كلّه في موسمٍ واحدٍ بأربعين لكًّا من الروبيات».

ويذكر أن البحّارة لا يُستأجرون أبدًا بأجر ثابت، بل لهم حصص من الحصيلة، وأن كل قارب يدفع ضريبةً بحسب حجمه وعدد رجاله، من دولارٍ إلى دولارين، لشيخ البلدة التي ينتمي إليها.

## خاتمة

قيمة نص وايتلوك أنه شهادة عينٍ عاشت أسابيع بين الجزر، فرأت أبوظبي في بداياتها المتواضعة، وجالست رجال بني ياس حول النار، وراقبت الغاصة في مواسمهم. وقد جاء التحقيق ليضع هذه الشهادة في سياقها، ويبيّن حدود ما يُعرف عن كاتبها، فيقرأها القارئ واثقًا من مصدرها.

## المصدر

- الكتاب: «ساحل أبوظبي وبني ياس في عيون الرحالة البريطانيين (1836–1925): ثلاث وثائق مترجمة ومحققة»، القسم الأول: نص الملازم هـ. هـ. وايتلوك (H. H. Whitelock)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: تقديم المحقق والنص ص 9–31 تقريبًا (أهل الساحل ص 11؛ اللباس ص 17–18؛ البيوت والطعام ص 19–20؛ العاصفة ص 21–22؛ التحية والمقابر ص 25؛ طريقة الغوص ص 27–29؛ أرقام الموسم ص 30–31؛ زيارة الشيخ طحنون ص 12–13؛ رحلة المسح والجمال ص 15–16؛ أبوظبي ص 22؛ الغوص على اللؤلؤ وجزر بني ياس ص 25–29).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- **أرقام الصفحات تقريبية:** الصفحات المذكورة تقريبية؛ النطاق: ص 9–31؛ النص المقتبس يقع فعلًا في ص 10–31، والمواضع الفرعية المذكورة تقريبية بفارق صفحة واحدة.`,related:[`07-lower-gulf-islands-buckingham`,`11-gulf-trade-1863-pelly`,`22-sharjah-rak-1816-buckingham`]},{slug:`03-bahrain-awal-stuhlmann`,title:`أوال: جزر البحرين بين تلال الأقدمين ومغاصات اللؤلؤ`,author:`فرانتس شتولمان`,category:`التاريخ`,categorySlug:`history`,date:`2026-09-28`,cover:`articles/03/1.webp`,excerpt:`حين وصل الجغرافي الألماني فرانتس شتولمان، في كتابه «الصراع على جزيرة العرب بين تركيا وإنجلترا» الصادر سنة 1916، إلى جزر البحرين، لم يبدأ بالحديث عن السياسة التي شغلت كتابه، بل عاد إلى أعماق التاريخ.`,tags:[`البحرين`,`أوال`,`اللؤلؤ`],sample:!1,book:`الصراع على جزيرة العرب بين تركيا وإنجلترا`,coverCaption:`«تجّار اللؤلؤ في البحرين» (صورة أضافها المحقق) — المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 245`,era:`1916`,eraSort:1916,words:1548,minutes:8,body:`حين وصل الجغرافي الألماني فرانتس شتولمان، في كتابه «الصراع على جزيرة العرب بين تركيا وإنجلترا» الصادر سنة 1916، إلى جزر البحرين، لم يبدأ بالحديث عن السياسة التي شغلت كتابه، بل عاد إلى أعماق التاريخ. فالبحرين عنده أرضٌ قديمة قِدَم الحضارات الأولى، وجزرٌ عرفها الإغريق والرومان، ومركزٌ للؤلؤ لم ينقطع شأنه منذ زمن بلينيوس. وفي هذا المقال نتتبّع ما كتبه عن البحرين، مع ما أضافه المحقق من حواشٍ تصحّح وتوضّح.

## جزرٌ في حضن قطر

يحدّد المؤلف موقع الجزر بعبارة موجزة: «تقع جزر البحرين على الساحل الشرقي لجزيرة العرب، في الخليج الذي تكوّنه شبه جزيرة قطر». ثم يذكر أن بعض المؤرخين طابقوها بـ«ددان» المذكورة في التوراة، وبجزيرة «تيلوس» عند اليونان، وأنه يقال إن حملة الإسكندر اكتشفت هناك شجيرة القطن. وهنا يتدخّل المحقق ليقول إن هذه المطابقات أقوالٌ قديمة ينقلها المؤلف، وإن المشهور اليوم ربط البحرين بحضارة «دلمون».

<figure class="art-fig"><img src="articles/03/1.webp" alt="صورة قديمة لمجموعة من تجّار اللؤلؤ في البحرين، كما وردت في الكتاب" width="1600" height="1105" loading="lazy" /><figcaption><span class="fig-cap">«تجّار اللؤلؤ في البحرين» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الصراع على جزيرة العرب بين تركيا وإنجلترا»، ص 245</span><span class="fig-orig">طبيعة الصورة: صورة من كتابٍ آخر معاصر للمؤلف أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: من كتاب هنري جيمس ويغام «المسألة الفارسية»، لندن: إيزبستر، 1903</span></figcaption></figure>

## آلاف التلال

أكثر ما شدّ انتباه شتولمان في البحرين القديمة تلك التلال التي تغطي داخل الجزيرة؛ يقول: «فعلى سهلٍ واسعٍ في داخل الجزيرة تقوم آلاف التلال القبورية الضخمة، يبلغ ارتفاع بعضها ثلاثين مترًا وأكثر، تضمّ مدافن هائلةً من صناديق حجريةٍ في طابقين». ويذكر أنه لم يُعثر فيها إلا على جماجم طويلة، وقطعٍ من سوارٍ ذهبي، وبعض الأواني الفخارية، ومنحوتةٍ عاجية لثور، ثم يختم بأمنيةٍ أن يُجرى فيها بحثٌ أدق، «إذ لا شكّ أننا أمام أرضٍ ذات حضارةٍ موغلةٍ في القدم».

ويضيف المحقق ما يعطي هذه الفقرة معناها اليوم: فهذه هي «مدافن دلمون»، وهي من مواقع التراث العالمي لليونسكو، تضمّ مقابر على الجزيرة الرئيسة للبحرين تعود إلى حضارتي دلمون وأم النار، وكانت من أكبر المقابر في العالم القديم.

## جرّهاء وطرق القوافل

ينتقل المؤلف من الجزر إلى البر المقابل، فيذكر مدينة التجارة القديمة «جرّهاء» التي لم يُتّفق على موضعها؛ فبعضهم يبحث عنها عند القطيف، وآخرون في قاع خليج قطر، والأرجح عنده أنها كانت في واحة الهفوف. ومنها كانت تنطلق، كما يقول، إحدى أهم طرق التجارة عبر جزيرة العرب، بعضها إلى مكة، وبعضها إلى اليمن، ونحو الشرق كانت الطرق تمضي «عبر الخليج إلى فارس، وعلى الأرجح حتّى الصين». ويعرّف المحقق جرّهاء بأنها مدينة قديمة شهيرة في شرق جزيرة العرب تعرفها المصادر اليونانية، وأرجح المواضع المقترحة لها «هجر» (الهفوف الحالية) و«ثاج».

<quote by="فرانتس شتولمان" source="«الصراع على جزيرة العرب بين تركيا وإنجلترا»">فعلى سهلٍ واسعٍ في داخل الجزيرة تقوم آلاف التلال القبورية الضخمة، يبلغ ارتفاع بعضها ثلاثين مترًا وأكثر، تضمّ مدافن هائلةً من صناديق حجريةٍ في طابقين</quote>

## مغاصاتٌ لا تنضب

وفي قلب هذا التاريخ يقف اللؤلؤ. يقول شتولمان: «ومنذ زمن بلينيوس كانت جزر البحرين مشهورةً بمغاصات اللؤلؤ، التي ما زالت مزدهرةً إلى اليوم». ويقدّر أن نحو تسعمئة قارب تنصرف من هناك من يونيو إلى أكتوبر إلى الغوص في الخليج العربي، ويرى أن هذه المغاصات الغنية جعلت الجزر مرغوبةً لدى من حولها على مرّ العصور.

ويورد المؤلف في حاشيته أرقامًا لتجارة اللؤلؤ في البحرين بالروبية بين سنتي 1909 و1914، ويبلغ التصدير فيها ذروته في 1911–1912 بنحو تسعة وعشرين مليونًا وتسعمئة وعشرين ألف روبية، ويشرح أن الفرق بين التصدير والاستيراد هو قيمة اللؤلؤ المستخرج في منطقة البحرين نفسها. ويلاحظ المحقق بأمانة أن هذا الجدول جاء في النسخة المصوّرة مضطرب الترتيب، فرتّبه على أرجح قراءة.

## من أوال إلى البحرين

ويتوقف المؤلف عند الاسم نفسه: «وكان اسمها القديم «أوال»؛ أمّا تسمية «البحرين»، أي «البحرين الاثنين»، فلم تظهر إلّا فيما بعد». ويذكر أن قاعدتها القديمة كانت تُسمّى «دارين»، فيصحّح المحقق بأن دارين بلدةٌ في جزيرة تاروت بمحافظة القطيف في المنطقة الشرقية من المملكة العربية السعودية، لا في البحرين.

ويروي شتولمان أن قبيلة العتوب من الزبارة دخلت البحرين سنة 1783، وأن أسرة شيخها لا تزال هناك. ويوسّع المحقق هذه الإشارة في حاشيته، فيعرّف آل خليفة الكرام بأنهم الأسرة الحاكمة في مملكة البحرين، من قبيلة عنزة، وأن بعض أفرادها انضمّوا إلى حلف العتوب الذي هاجر من نجد إلى الكويت، ثم حكموا الزبارة التي بنوها، قبل أن يفتحوا البحرين سنة 1783 بقيادة الشيخ أحمد بن محمد بن خليفة. ويذكر أيضًا الشيخ عيسى بن علي آل خليفة (1848–1932) الذي حكم البحرين من 1869 حتى وفاته، فدام حكمه ثلاثًا وستين سنة.

## المنامة والمحرّق وتجارة الصدف

يقدّر المؤلف سكان جزر البحرين بنحو مئة ألف نسمة، وللمنامة نحو خمسة وعشرين ألفًا، وللمحرّق نحو عشرين ألفًا، وينبّه المحقق إلى أن هذه أرقامٌ تقديرية من المؤلف.

ثم يروي حكاية تجارية طريفة: شركةٌ من هامبورغ ظهرت في الخليج العربي سنة 1898، «فاشتغلت أوّلًا بشراء أصداف اللؤلؤ (عرق اللؤلؤ) في لنجة على الساحل الفارسي، وهي سلعةٌ كانت مهملةً هناك تمامًا»، ثم نقلت مركز أعمالها إلى البحرين سنة 1901، وصارت لها وكالات في المحمّرة والبصرة وبندر عباس. ويقول المؤلف إنها أفلحت في نقل السوق الرئيسة لأصداف اللؤلؤ من لندن إلى هامبورغ. والحكاية تكشف أن الخليج لم يكن يصدّر اللؤلؤ وحده، بل الصدف الذي يحمله أيضًا.

## الإسلام في البحرين

يقول شتولمان: «ودخل الإسلام مبكّرًا جدًّا». ويقول إن أكثر سكان البحرين في زمن النبي ﷺ كانوا «من بني عبد القيس بن أفصى، الذين جاؤوا من تهامة وطردوا إيادًا». ويعرّف المحقق عبد القيس بأنها «قبيلةٌ عربيةٌ قديمةٌ من ربيعة، من شرق جزيرة العرب، ينتمي إليها أكثر البحارنة».

ويروي المؤلف أن رسولًا أُرسل إلى البحرين يدعو المنذر بن ساوى إلى الإسلام، ويسميه «علي بن عبد الله الحضرمي». وهنا يصحّح المحقق: «والصواب العلاء بن الحضرمي»، الصحابي الذي كان عامل النبي ﷺ على صدقات البحرين، ثم واليها لأبي بكر وعمر رضي الله عنهما. ويضيف أن المنذر بن ساوى التميمي «كان زعيمًا عربيًّا من بني تميم»، لا فارسيًا كما في الأصل.

ويذكر المؤلف أن البحرين كانت نحو سنة 900 معقل القرامطة، «الذين بنوا سنة 922 مدينة الأحساء (الهفوف)». ويعرّف المحقق القرامطة بأنهم حركة «أقامت في الأحساء بشرق جزيرة العرب دولةً سنة 899م».

## آل خليفة

يقول شتولمان إن الفرس عادوا إلى البحرين بعد رحيل البرتغاليين سنة 1622، «وآخر ذلك من 1735 إلى 1783». ثم احتلّ العتوب من الزبارة البحرين سنة 1783، «ومن قبيلة العتوب لا تزال أسرة شيخها هناك إلى اليوم».

ويفصّل المحقق في حاشيته: آل خليفة الكرام هم «الأسرة الحاكمة في مملكة البحرين، على المذهب المالكي، من قبيلة عنزة»، وقد حكموا الزبارة التي بنوها، «قبل أن يفتحوا البحرين سنة 1783 بقيادة الشيخ أحمد بن محمد بن خليفة».

ويذكر المؤلف أن الشيخ سلمان بن أحمد انضمّ سنة 1820 إلى المعاهدة العامة. ويوضح المحقق أن الشيخ سلمان «ابن الشيخ أحمد بن محمد بن خليفة؛ وبعد وفاة أبيه سنة 1796 انتقل هو وأخوه عبد الله إلى البحرين واشتركا في حكمها».

وفي سنة 1869 تولى الحكم الشيخ عيسى بن علي. ويقول المحقق عنه: «حاكم البحرين من 1869 حتّى وفاته، دام حكمه ثلاثًا وستّين سنة، وتذكر المصادر أنه تولّى «بإرادة أهل البحرين ورغبتهم»».

## السكان

يقدّر شتولمان سكان جزر البحرين «نحو مئة ألف نسمة»، ويقول: «وللقاعدة المنامة نحو خمسةٍ وعشرين ألف نسمة، وللمحرّق نحو عشرين ألفًا». ويعلّق المحقق بأن هذه «أرقامٌ تقديريةٌ من المؤلف»، وأن «أهل البحرين من سنّةٍ وشيعةٍ عرب في أكثرهم».

## أرقام تجارة اللؤلؤ

يورد المؤلف في حاشية جدولًا لتجارة اللؤلؤ في البحرين بالروبية. فالتصدير بلغ سنة 1909–1910 نحو 10,990,000 روبية، وسنة 1911–1912 نحو 29,920,000، ثم هبط سنة 1913–1914 إلى 1,451,293. ويقول: «والفرق بين التصدير والاستيراد هو على أيّ حالٍ قيمة اللؤلؤ المستخرج في منطقة البحرين نفسها». ويذكر المحقق أن هذا الجدول جاء «في النسخة المصوَّرة مضطرب الترتيب، فرتّبناه على أرجح قراءة».

ويقول المؤلف عن موسم الغوص: «فنحو تسعمئة قاربٍ تنصرف من هناك من يونيو إلى أكتوبر إلى الغوص على اللؤلؤ في الخليج العربي».

## الأحساء: الاسم والواحة

ينتقل شتولمان إلى البرّ المقابل، فيذكر أن قاعدة الأحساء الهفوف، «وتُسمّى أيضًا الأحساء واللحسا وهجر». ويشرح الاسم: «واسم الأحساء جمع «حِسْي»، ومعناه «سهلٌ واسعٌ ذو أرضٍ رملية، يجري تحتها ماء المطر، فيظهر عند الحفر»».

ويقول إن الهفوف «واحةٌ قد يبلغ سكّانها بحسب بورشارت نحو ثلاثين ألفًا». ويرى أن وجود الواحة «في أرضٍ عديمة الماء في غير ذلك يدلّ على أنّ الموضع كان مأهولًا دائمًا». ويربط ذلك بجرّهاء: «ولعلّ الأبحاث المقبلة تُظهر أنّ جرّهاء القديمة كانت في الناحية نفسها، لا على الساحل مباشرة».

ويذكر أن الهفوف «على مسيرة خمس عشرة إلى ثماني عشرة ساعةً من مركز الجمارك على الساحل «العقير»». ويختم بملاحظة لغوية: «ويُسمّى الشريط الساحلي كلّه «الخطّ». وقد كانت الرماح «الخطّية» من القصب الهندي مشهورةً في جزيرة العرب القديمة».

## الأحساء في التقويم العثماني

ويذكر شتولمان أن الأتراك يسمّون هذه النواحي في تقويم الدولة الرسمي «سنجق نجد»، «ونواحيه المبرّز والجفر والعيون والعقير، وقضاءا القطيف وقطر». ويلاحظ أن الإدارة التركية «لم تبلغ قطّ نجدًا في داخل جزيرة العرب». ويذكر أن الأحساء كانت ولاية تركية مرة من قبل، «زمن محمد علي (1838–1840)»، ثم احتلّ مدحت باشا، والي بغداد، القطيف سنة 1871. ويقول إن تركيا أعلنت يومئذٍ لإنجلترا «أنها لا تدّعي سيادةً على البحرين ومسقط والشيوخ المتصالحين، ولن تقوم بعملياتٍ بحرية».

## خاتمة

يكتب شتولمان بعين رجلٍ مشغولٍ بصراعات زمانه، ولذلك يحرص المحقق على أن يفصل بين ما ينقله المؤلف وما ثبت اليوم، فيصحّح الأسماء والمواضع والتواريخ. وما يبقى للقارئ صورةٌ لجزرٍ صغيرة المساحة، عظيمة الأثر: تلالٌ تحفظ ذاكرة دلمون، ومغاصاتٌ ذكرها بلينيوس، وأسواقٌ وصلت بين الخليج العربي وأسواق العالم.

## المصدر

- الكتاب: «الصراع على جزيرة العرب بين تركيا وإنجلترا» (Der Kampf um Arabien zwischen der Türkei und England، 1916)، تأليف: فرانتس شتولمان (Franz Stuhlmann)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الحادي عشر «جزر البحرين والولاية التركية الأحساء»، ص 240–251 (الإسلام والقرامطة ص 241–242؛ آل خليفة ص 242–244؛ أرقام اللؤلؤ ص 241؛ الأحساء ص 250–251؛ التلال وجرّهاء واللؤلؤ ص 240–241؛ أوال وآل خليفة ص 242؛ السكان وتجارة الصدف ص 245–246).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`28-bahrain-pearls-1618-silva`,`11-gulf-trade-1863-pelly`,`14-pearl-market-bombay-rosenthal`]},{slug:`04-kuwait-1831-stocqueler`,title:`أيامٌ في القرين: الكويت وشطّ العرب في يوميات ستوكيلر سنة 1831`,author:`ج. هـ. ستوكيلر`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-09-27`,cover:`articles/04/1.webp`,excerpt:`في الأول من أبريل 1831 كان الرحّالة الإنجليزي ج. هـ. ستوكيلر على ظهر «بغلة»، وهي مركبٌ شراعي كبير، يتأهب للإقلاع من بوشهر نحو رأس الخليج العربي.`,tags:[`الكويت`,`شط العرب`,`البصرة`],sample:!1,book:`خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)`,coverCaption:`رأس الخليج العربي: جون الكويت (Grane Harbour) وجزيرتا بوبيان وفيلكا، وشطّ العرب، والساحل حتى جزيرة خارك. جزءٌ من خريطة الخليج المبنيّة على المسح المثلّثي لبحرية شركة الهند الشرقية (صورة أضافها المحقق) — المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 29`,era:`1831`,eraSort:1831,words:1684,minutes:8,body:`في الأول من أبريل 1831 كان الرحّالة الإنجليزي ج. هـ. ستوكيلر على ظهر «بغلة»، وهي مركبٌ شراعي كبير، يتأهب للإقلاع من بوشهر نحو رأس الخليج العربي. كانت وجهة المركب الأخيرة «القرينَ أو الكويت، في أقصى الساحل الغربي من الخليج»، أما هو فكان يريد البصرة، فاشترط على أصحاب المركب أن يبعثوا به إليها بعد ذلك. ومن هذا الشرط الصغير وُلدت صفحاتٌ من أقدم ما كُتب بالإنجليزية في وصف الكويت، ضمّها كتابه «خمسة عشر شهرًا في دروب خوزستان وفارس».

## وصولٌ تحيّيه المدافع

استغرقت الرحلة ثلاثة أيام لأن الريح كانت معاكسة. ويصف ستوكيلر بروحٍ مرحة كيف أُعلن وصولهم من المركب بطلقاتٍ من مدفعٍ قديم منصوبٍ على عربةٍ خشبية؛ فأطاحت الطلقة الأولى بإحدى العجلات، وذهبت الثانية بعجلتين، وشقّت الثالثة العربة شطرين، ثم تُرك المدفع على ظهر المركب. ويعلّق بأن ذلك كان «لهوًا طريفًا عند البحّارة، وهم بلا ريبٍ لا يعوزهم الإقدام والجرأة».

<figure class="art-fig"><img src="articles/04/1.webp" alt="خريطة بحرية قديمة لرأس الخليج العربي يظهر فيها جون الكويت وجزيرتا بوبيان وفيلكا وشطّ العرب" width="1100" height="900" loading="lazy" /><figcaption><span class="fig-cap">رأس الخليج العربي: جون الكويت (Grane Harbour) وجزيرتا بوبيان وفيلكا، وشطّ العرب، والساحل حتى جزيرة خارك. جزءٌ من خريطة الخليج المبنيّة على المسح المثلّثي لبحرية شركة الهند الشرقية (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 29</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: خريطة جورج بارنز بروكس، 1830، حفر ر. بيتمان، لندن، 1832</span></figcaption></figure>

ثم هبّت في الرابع من أبريل ريحٌ عاصفة طوال النهار، «وبدت البلدة كأنها ملتفّةٌ تمامًا في غبار الصحراء المحيطة بها». فلما أعقبها السكون بعث خادمه إلى البر، فعاد بحليبٍ وزبد.

## في دار صاحب المركب

نزل ستوكيلر إلى البر بعد الإفطار، فاقتيد إلى دار صاحب المركب، ومرّ بفناءين أو ثلاثة حتى بلغ حجرةً معقودة السقف، فيها صاحب المركب وأخواه جالسين يدخّنون. وبعد التحيات المعتادة طلب أن يمضي إلى البصرة في الغد، فوُعد بأن تُهيّأ له «بقّارة» في الحال، وتناول القهوة والحليب والخبز.

## صورة البلدة

يرسم المؤلف للكويت صورةً دقيقة: «والكويت، أو القرين كما تُسمّى في الخرائط، يبلغ طولها نحو ميل، وعرضها نحو ربع ميل». ويوضح المحقق أن ذلك يعني نحو 1.6 كيلومتر طولًا ونحو 400 متر عرضًا. وبيوتها، كما يقول، مبنية بالطين والحجر، يُكسى بعضها بطبقةٍ خشنة من النورة، ولعل سكانها نحو أربعة آلاف نسمة. وهي في الغالب مربعة الشكل في وسطها فناء تطلّ عليه النوافذ، شأنها شأن جميع البيوت في الخليج، وسقوفها مسطحة مصنوعة من جذوع النخل.

<quote by="ج. هـ. ستوكيلر" source="«خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»">فالنهر، الذي لا يرتفع في العادة قبل شهر يونيو، ارتفع الآن بسرعةٍ لا تُصدّق، تسبقه عاصفةٌ هوجاء، فأغرق في ساعاتٍ قليلةٍ العراقَ كلّه</quote>

ويلفت نظره أن «شوارع الكويت أوسع من شوارع مسقط وبوشهر، يجري في وسطها مسيلٌ للماء». ويحيط بالبلدة من جهة الصحراء سور له ثلاثة أبواب، يحمي كل بابٍ منها مدفعان. وهنا يضيف المحقق حاشيةً ثمينة: فقد عرفت مدينة الكويت في تاريخها ثلاثة أسوار، واستدلّ المؤرخ الكويتي خالد طعمة بوصف ستوكيلر لهذا السور وأبوابه الثلاثة على أن السور ذا الأبواب الثلاثة كان قائمًا سنة 1831. وهكذا تتحول ملاحظة رحّالةٍ عابر إلى شاهدٍ يستند إليه مؤرخو البلد.

## حاكمٌ بلا جند

يقول ستوكيلر: «ويحكم الكويتَ شيخٌ لا يحتفظ بقوّةٍ مسلّحة، ويتقاضى رسمًا قدره اثنان في المئة على جميع الواردات». ويعرّف المحقق هذا الحاكم بأنه الشيخ جابر الأول بن عبد الله بن صباح، ثالث حكّام الكويت من آل الصباح، حكم من سنة 1814 إلى سنة 1859، وعُرف بـ«جابر العيش»، وينبّه إلى أن وصف المؤلف قائمٌ على ما رآه في زيارةٍ قصيرة.

ويروي المؤلف أن العرب، كما أُخبر، لم يملكوا الموضع إلا منذ نحو مئة وخمسين سنة، فيصحح المحقق ذلك بأن المعروف أن العتوب استقروا فيها في أوائل القرن الثامن عشر أو منتصفه، وأن اختيار الشيخ صباح الأول بن جابر حاكمًا لها يؤرَّخ في الغالب بسنة 1752.

## زائرٌ يتفرّج عليه الناس

من أجمل لحظات النص أن الرحّالة يجد نفسه موضع فضولٍ لا يقل عن فضوله. يقول: «وأغرب ما استوقفني في الكويت التماثلُ التامّ في الزيّ بين جميع الطبقات والأعمار». ثم يغادر البر في الثالثة بعد الظهر، فيتبعه المئات إلى الشاطئ يحدّقون في ثيابه الأوروبية بأشد الدهشة، ويعزو ذلك إلى أنه كان يكاد يكون الأوروبي الوحيد الذي زار المكان منذ سنواتٍ كثيرة. ويعترف بلطف بأنه أتاح للناس بمنظره الغريب «من التسلية مثل ما نلتُه أنا من زيارتي».

## مراكب الخليج: البغلة والبقّارة والبتيل

تكشف الأيام التالية عن عالم المراكب الخليجية؛ فالبقّارة، كما يصفها، «مركبٌ أصغر من البغلة»، لكن خلافًا على حمل البضاعة إلى جانب المسافرين جعلها تنصرف دونه. وفي فجر السابع من أبريل جاء «بتيل» استُؤجر له، فوضعوا فيه أمتعتهم وهيّأوا مؤخّرته لتكون شبه حجرة، وأقلعوا نحو الرابعة بعد الظهر. ويصف إيقاع الإبحار في تلك المياه: يسيرون بالمدّ، ويرسون حين ينقلب، ويبدأ النهار «بعد صلاة الصبح والغليون والقهوة المعتادين».

## صباحٌ في شطّ العرب

ثم تأتي اللحظة التي يكتبها بفرحٍ ظاهر: استيقظ عند انبلاج الفجر في التاسع من أبريل فوجد أنهم ودّعوا البحر وصاروا «في نهرٍ تصطفّ على ضفّتيه بساتين النخيل والحشائش العالية». ويقول إن منظر الضفاف ونضارة الهواء وسكون الماء عوّضته «خير عوضٍ عن كلّ ما لقيته من مخاطر وحرمانٍ ومشقّةٍ في الإبحار في الخليج على بغلة». وفي العاشر من أبريل بلغ المحمّرة، ثم بلغ البصرة في العاشرة ليلًا.

## روايةٌ عن ماضي الكويت ومراجعة المحقق

يذكر ستوكيلر ما أُخبر به عن تاريخ البلدة: «وقد أُخبرتُ أنّ العرب لم يملكوا هذا الموضع إلا منذ نحو مئةٍ وخمسين سنة». ويرى أن الموضع «بلا ريبٍ مرفأٌ رحبٌ للسفن الصغيرة»، وأن البرتغاليين لعلّهم احتلّوه «لما يمنحه من سيطرةٍ على مصبّ شطّ العرب».

ويراجع المحقق هذه الرواية: فما رُوي للمؤلف من أن الإنجليز ملكوا الكويت قبل العرب «لا أصل له، وقد ردّه هو نفسه». ويضيف أن العتوب استقرّوا فيها في أوائل القرن الثامن عشر أو منتصفه، «وأنّ اختيار الشيخ صباح الأول بن جابر حاكمًا لها يؤرَّخ في الغالب بسنة 1752».

## أسوار الكويت

ويقول المؤلف إن البلدة يحيط بها من جهة الصحراء سور. ويعلّق المحقق بحاشية مفصّلة: «عرفت مدينة الكويت في تاريخها ثلاثة أسوار». ويذكر أن الثالث «بُني سنة 1920 في عهد الشيخ سالم المبارك الصباح، وهُدم سنة 1957». ويضيف أن المؤرخ الكويتي خالد طعمة استدلّ بوصف ستوكيلر هذا على أن السور ذا الأبواب الثلاثة كان قائمًا سنة 1831.

<figure class="art-fig"><img src="articles/04/2.webp" alt="خريطة مسح بحري قديمة لمصابّ الأنهار في رأس الخليج العربي، وفيها شطّ العرب" width="1417" height="963" loading="lazy" /><figcaption><span class="fig-cap">«المسح المثلّثي لمداخل الأنهار في رأس الخليج العربي»: شطّ العرب وما جاوره من مصابّ الأنهار (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، ص 54</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: مسح الملازمَين ج. ب. بروكس و س. ب. هينز من بحرية شركة الهند الشرقية، 1827؛ نشره جيمس هورسبرغ، لندن، 1831</span></figcaption></figure>

ويلاحظ المؤلف أن الكويت داخل السور مجدبة، وأن ماءها «بعيدٌ عن العذوبة»، ويتساءل كيف اختير مثل هذا الموضع «لإقامة أربعمئة أسرة». وينبّه المحقق إلى أن المؤلف قدّر السكان قبل ذلك بنحو أربعة آلاف نسمة، «وهو هنا يذكر أربعمئة أسرة، وكذا في الأصل».

## مخيّمٌ خارج الأسوار

ويصف ستوكيلر جماعة نازلة خارج الأسوار «بخيامها السود وإبلها وحميرها البيض»، ويذكر أن كثيرًا من رجالها «يضفرون شعورهم ضفائرَ صغيرةً تتدلّى حول الوجه». ويرجّح المحقق أن المقصود «بدوٌ من أهل نجد نزلوا قرب الكويت».

## المحمّرة

بعد دخول شطّ العرب بلغ المركب المحمّرة. يقول ستوكيلر: «وهي البلدة الرئيسة والمرفأ الرئيس في بلاد بني كعب. وجانبها الغربي يواجه شطّ العرب، وجانبها الشمالي يُشرف على مصبّ نهر كارون». ويصف المنظر بعدها: «بساتين النخيل، والحشائش الخصبة، والقصب الأخضر على الضفّتين، والقوارب من كلّ حجمٍ وصنفٍ تغطّي سطح النهر».

## حديقةٌ في البصرة

وفي البصرة قضى ستوكيلر ساعات كثيرة في حديقة المقيمية البريطانية، ويقول إنها «خصبةٌ خصبًا عجيبًا، تُخرج كثيرًا من محاصيل أوروبا، ومن محاصيل أنحاء آسيا كلّها». ويعدّد ما فيها: المشمش والخوخ والتفاح والكمثرى والبرقوق والسفرجل، والعنب والليمون والموز والتوت والتين والورد والآس.

ويذكر المؤلف في حاشية، نقلًا عن ماكدونالد كينير، «أنّ في البصرة ما لا يقلّ عن أربعين نوعًا من النخيل».

## الجرّارون على الفرات

ثم خرج ستوكيلر من البصرة في قارب صاعدًا في النهر. ويصف الجرّارين الذين يسحبون القوارب حين تعاكس الريح: فهم يتجرّدون من ثيابهم ويضعونها على رؤوسهم، ثم يُمدّ «حبلٌ من رأس الصاري إلى حزامٍ حول وسط كلٍّ منهم». ويقول: «وعلى هذا النحو تجري المواصلات كلّها صعدًا في دجلة والفرات إذا هبّت الريح على اتّجاه مجرييهما».

ويمرّ بالقرنة ويدخل الفرات، ويصف الطريق: «وكان مسارنا طوال هذا اليوم بين بساتين النخيل الغنيّة المتنوّعة التي هي فخر العربي، وتكاد تكون قوتَه الوحيد». ويذكر في اليوم التالي سهولًا واسعة «مكسوّةٌ بالأرزّ والشعير والقمح»، وجزرًا عليها السلاحف والإوز البري والبجع.

## سوق الشيوخ وقناة البُرج

ونحو الظهر بلغ القارب «سوق الشيوخ»، ويقول ستوكيلر إنه سمعه يُسمّى أيضًا «سوق السوق»، «أي سوق الشيخ أو سوق الأسواق». ويذكر أن النوتيّة اشتروا منه أرزًّا، ثم استأنفوا الرحلة. ويصف ما فوقه: «فأشجار الرمّان في تمام إزهارها، وأشجار المشمش، وبساتين النخيل، تؤلّف غابةً متّصلة».

وفي اليوم التالي كان القارب يُجرّ في «البُرْج»، «أوّل فرعٍ من قناةٍ ضيّقةٍ ملتويةٍ تصل الفرات بدجلة». ثم دخلوا نهر «الحيّ»، فبدت ضفافه «مكسوّةً إلى حافّة الماء بالشجيرات والطرفاء». ويلاحظ المؤلف أن حظائر الماشية على هذه الأنهار تشبه الحصون، «فكما يجمعون بين حرفة المحارب وحرفة الراعي المسالمة، تجمع حظائرهم بين ظاهر الحصن والغرض البسيط من حبس القطعان».

## الطاعون والفيضان

غير أن الرحلة انقطعت. فقد لقي قارب المقيم البريطاني فارًّا من بغداد، ونصحه المقيم بألا يقترب «لأنّ «الطاعون على متنه»». فعاد ستوكيلر إلى البصرة، وشهد في طريق العودة فيضانًا مفاجئًا. يقول: «فالنهر، الذي لا يرتفع في العادة قبل شهر يونيو، ارتفع الآن بسرعةٍ لا تُصدّق، تسبقه عاصفةٌ هوجاء، فأغرق في ساعاتٍ قليلةٍ العراقَ كلّه». ويصف آثاره: «فجرف قرًى لا تُحصى من الأكواخ المكسوّة بالحُصُر، وصار الرجال والنساء والأطفال في لحظةٍ بلا مأوى».

## خاتمة

صفحاتٌ قليلة من يوميات رحّالةٍ عابر، لكنها تحفظ صورة الكويت سنة 1831: بلدةٌ من الطين والحجر، بسورٍ له ثلاثة أبواب، وشوارع أوسع من شوارع جاراتها، ومراكب تصلها بالبصرة وبوشهر والهند. ويزيدها التحقيق قيمة حين يصحح ما سمعه المؤلف ولم يتثبّت منه، ويصلها بما كتبه مؤرخو الكويت أنفسهم.

## المصدر

- الكتاب: «خمسة عشر شهرًا في دروب خوزستان وفارس: رحلةٌ من الهند إلى إنجلترا عبر الخليج العربي والعراق وفارس وأرمينية وروسيا وألمانيا (1831–1832)»، تأليف: ج. هـ. ستوكيلر (J. H. Stocqueler)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثاني «الكويت والبصرة والفرات»، ص 27–42 (الإبحار إلى الكويت ص 27؛ وصف البلدة والأسوار ص 28–29؛ تاريخ البلدة والحاكم والزيّ والمخيّم ص 30؛ شطّ العرب والمحمّرة ص 32؛ حديقة المقيمية ص 35؛ الجرّارون ص 37؛ القرنة والفرات وسوق الشيوخ ص 38–39؛ البرج والحيّ ص 40–41؛ الطاعون والفيضان ص 41–42).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`21-kuwait-1916-stuhlmann`,`29-shiraz-persepolis-basra-valentyn`,`30-godinho-desert-1663`]},{slug:`05-hormuz-gamron-valentyn`,title:`من هرمز إلى غمرون: حكاية مملكةٍ تجارية في مدخل الخليج العربي`,author:`فرانسوا فالنتاين`,category:`التاريخ`,categorySlug:`history`,date:`2026-09-26`,cover:`articles/05/1.webp`,excerpt:`في سنة 1726 أصدر الهولندي فرانسوا فالنتاين الجزء الخامس من موسوعته الكبيرة «الهند الشرقية القديمة والجديدة»، وخصّص كتابًا منه لوصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها.`,tags:[`هرمز`,`غمرون`,`البرتغاليون`],sample:!1,book:`وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها`,coverCaption:`خريطة فارس وما حولها، من بحر قزوين إلى الخليج العربي وبلاد العرب، وهي اللوحة 9 A التي يذكرها المؤلف (أُديرت لتناسب الصفحة) — المصدر: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»، ص 237`,era:`1507–1622`,eraSort:1507,words:1578,minutes:8,body:`في سنة 1726 أصدر الهولندي فرانسوا فالنتاين الجزء الخامس من موسوعته الكبيرة «الهند الشرقية القديمة والجديدة»، وخصّص كتابًا منه لوصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها. وفي الفصل الرابع منه يحكي قصةً تدور على جزيرةٍ صغيرة عند مدخل الخليج العربي: هرمز. إنها قصة مملكةٍ ازدهرت بالتجارة، ثم تعاقبت عليها القوى، حتى انتقلت حركة المكوس منها إلى البر المقابل في غمرون، وهي «بندر عبّاس» كما يبيّن المحقق في مقدمته؛ إذ أبقى تسمية المؤلف للمدن على حالها «كغمرون لبندر عبّاس».

## جزيرةٌ ملحيةٌ قاحلة ومدينةٌ شهيرة

يبدأ فالنتاين بتحديد الموقع: هرمز «تقع في الخليج العربي على 90 درجةً و20 دقيقةً طولًا، و29 درجةً و30 دقيقةً عرضًا شماليًّا، على نحو ثلاثة أميالٍ من غمرون، في جزيرةٍ يبلغ محيطها نحو ستّة آلاف إلى سبعة آلاف خطوة». ويصفها بأن فيها جبلًا عاليًا، وأنها «في كلّ مكانٍ تقريبًا ملحيّةٌ قاحلة». ثم يضيف ملاحظة رجلٍ يكتب بعد أن تغيّر الزمان: «والمدينة ليست كبيرة، وهي الآن قليلة الشأن».

<figure class="art-fig"><img src="articles/05/1.webp" alt="خريطة قديمة لفارس وما حولها، من بحر قزوين إلى الخليج العربي وبلاد العرب، من لوحات الكتاب الأصلي" width="1324" height="1600" loading="lazy" /><figcaption><span class="fig-cap">خريطة فارس وما حولها، من بحر قزوين إلى الخليج العربي وبلاد العرب، وهي اللوحة 9 A التي يذكرها المؤلف (أُديرت لتناسب الصفحة)</span><span class="fig-src">المصدر: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»، ص 237</span><span class="fig-orig">أصل الصورة: فالنتاين، «الهند الشرقية القديمة والجديدة»، الجزء الخامس (دوردرخت وأمستردام، 1726)، لوحةٌ مطويّة في الكتاب الخامس (ورقة الصورة 306)</span></figcaption></figure>

لكن هذه الجزيرة القاحلة كانت، كما يسمّيها المؤلف، «مدينة هرمز التجارية الفارسية الشهيرة». ويعرّف المحقق مملكة هرمز بأنها «مملكةٌ يحكمها بيتٌ من أصلٍ عربيٍّ جنوبي، قامت في القرن الحادي عشر، وامتدّ سلطانها في أوجه إلى البحرين وسواحل عُمان».

## موانئ المملكة على ساحل عُمان

حين يروي فالنتاين مسير الأسطول البرتغالي سنة 1507 نحو هرمز، يرسم لنا من غير قصدٍ خريطةً لموانئ المملكة على الساحل العُماني: قلهات، وقريات، ومسقط، وصحار. ويقف المحقق عند قلهات ليقول إنها «بلدةٌ قديمةٌ على ساحل عُمان شمال صور، كانت من أعظم موانئ مملكة هرمز، ويذكرها ماركو پولو». ويرى في الاسم الغامض «أونتاز» الذي ورد في الأصل أنه قد يكون خورفكّان، لأن المعروف أن الحملة سارت من صحار إلى خورفكّان ثم إلى هرمز.

## ملكٌ صبيّ ووزيرٌ يدبّر الأمر

حين ظهرت السفن البرتغالية أمام هرمز سنة 1507 كان ملكها سيف الدين الثاني «لا يزال طفلًا»، تحت وصاية أمه وأحد كبار رجال البلاط الذي يسمّيه المؤلف عطارًا، ويعرّفه المحقق بأنه «خواجه عطار»، وزير هرمز في عهد سيف الدين. ويحفظ لنا فالنتاين جوابه المعتزّ حين طولب بالتسليم: «أنّ ملوك هرمز لم يعتادوا أداء الجزية، بل اعتادوا أن يطلبوها من غيرهم».

<quote by="فرانسوا فالنتاين" source="«وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها»">وكانت تلك نهاية مملكة هرمز هذه، المملكة الجليلة المزدهرة</quote>

ويوجز المحقق مسار الأحداث في حاشيةٍ واضحة: حاصر ألبوكيرك هرمز سنة 1507 فأخضع ملكها للجزية، لكن محاولته الأولى لم تتم بانصراف قادته عنه، ثم عاد سنة 1515 فاستولى عليها وبنى قلعة «سيّدة الحَبَل»، وبقيت في يد البرتغاليين إلى 1622.

## قرنٌ من الازدهار

يقول فالنتاين: «ومنذ ذلك الوقت ازدهرت تلك المدينة»، ويذكر أن البرتغاليين بنوا فيها قلعةً من أحسن قلاعهم في الهند، وعقدوا مع ملوك فارس معاهداتٍ عدة. ويسرد أسماء عددٍ من حكّام القلعة بين 1522 و1532. ويشير أيضًا إلى أنه كان لهم في جزيرة البحرين حصن، وكانت لهم السلطة على مغاص اللؤلؤ فيها، لكنهم طُردوا من هناك أيضًا.

## سنة 1622: نهاية مملكة

ثم يروي المؤلف أحداث سنة 1622: استيلاء الفرس بمعونة الإنجليز على جزيرة قشم أولًا، ثم على هرمز. وقد ساق المؤلف تفاصيل الحصار والغنائم والمدافع، ويهمّنا منها ما يتصل بمصير التجارة: فالشاه عباس وعد الإنجليز «بنصف مكوس هرمز (التي نقلها بعد ذلك إلى البرّ في غمرون)»، وأمر بهدم المدينة في معظمها، وأبقى القلعة. ويختم فالنتاين هذا الجزء بعبارةٍ فيها شيء من الرثاء: «وكانت تلك نهاية مملكة هرمز هذه، المملكة الجليلة المزدهرة»، ثم يورد جدولًا بأسماء ملوكها.

ويعرّف المحقق قائد الفرس في أخذ هرمز، إمام قلي خان (1582–1632)، بأنه قائدٌ صفوي كرجيّ الأصل، كان والي فارس ولار والبحرين للشاه عباس الكبير والشاه صفي.

## غمرون: مرسى الشركات

بعد سقوط هرمز صارت غمرون على البرّ المقابل محطّ التجارة. ويذكر فالنتاين أن الشاه عباس أذن للإنجليز وللهولنديين «بالتجارة في بلاده، وبأن يكون لنا في غمرون وفي أصفهان مكتبٌ ومحطّةٌ ورؤساء». ثم يروي بداية التجارة الهولندية هناك، ويرجع شرف إقامتها إلى بيتر فان دن بروك الذي عُيّن سنة 1620 مديرًا للتجارة على المكاتب في جزيرة العرب والهند وفارس.

وتتوالى بعد ذلك يومياتٌ تجارية دقيقة: ففي فبراير 1626 جاءت السفن الهولندية من فارس إلى سورات «بثلاثمئةٍ واثنتين وخمسين بالةً من الحرير»، وفي فبراير 1629 وصل فان دن بروك مع سفير الشاه موسى بيك إلى غمرون، فأظهر له الدوق وغيره من عظماء الفرس إكرامًا كثيرًا. ومن التفاصيل الإنسانية الصغيرة التي يحفظها النص قوله عن سنة 1632: «وفي الثاني عشر من ديسمبر بدأ المطر يهطل هنا، ولم يكن قد هطل منذ ثلاث سنين».

## شروط الصلح الأول سنة 1507

يذكر فالنتاين أن ألبوكيرك هاجم المدينة سنة 1507 «واستولى عليها سريعًا، وأحرق سفنها». ثم عقد عطار معه الصلح، على أن يؤدّي إليه «كلّ سنةٍ خمسة عشر ألف «سرافين» أو دوكات»، وأن يعيّن موضعًا لبناء حصن. ويشرح المحقق لفظ السرافين بأنه «نقدٌ فضّيٌّ ضربه البرتغاليون في الهند، أصل اسمه «الأشرفي» المملوكي».

لكن العمل في الحصن مضى ببطء، لأن عطارًا لاحظ أن ألبوكيرك ليس معه إلا أربعمئة رجل؛ فهاجمه ألبوكيرك مرة أخرى وغلبه، غير أن أكثر قادته تخلّوا عنه وذهبوا يشكونه إلى نائب الملك ألميدا. وفي أثناء ذلك سار إلى جزيرة قشم، ثم إلى سقطرى في يناير 1508. ويعرّف المحقق سقطرى بأنها «جزيرةٌ يمنيةٌ في المحيط الهندي بين خليج عدن وبحر العرب».

## العودة سنة 1515

بعد رحيل ألبوكيرك مات عطار، وخلفه رجل يُدعى حامدًا. فعاد ألبوكيرك سنة 1515 «باثنتين وعشرين سفينةً كبيرة، متظاهرًا بأنه يريد عدن». ويصحّح المحقق ما في الأصل من خلط في التواريخ: «المعروف أنّ ألبوكيرك لم يتمكّن من هرمز تمكّنًا تامًّا وبناء قلعتها إلّا في حملته الثانية سنة 1515». ويذكر في حاشية أخرى أن القلعة هي «سيّدة الحَبَل»، وأنها بقيت في يد البرتغاليين إلى 1622.

ويسرد المؤلف أسماء عدد من حكّام القلعة البرتغاليين بعد ذلك، منهم «جواو رودريغيز دي نورونيا سنة 1522، وهنريكي دي مينيزيس سنة 1524».

## قشم قبل هرمز

يقول فالنتاين إن الفرس استولوا أوّل سنة 1622، بمعونة الإنجليز، على جزيرة قشم، «وكان روي فريري البرتغالي يتولّى فيها القيادة حاكمًا للقلعة». ويعرّف المحقق روي فريري دي أندرادي بأنه «قائدٌ برتغاليٌّ بنى قلعةً في قشم»، وأنه أُسر سنة 1622، «ثم فرّ وظلّ يقاتل في الخليج إلى وفاته».

ويذكر المؤلف شروط الحلف بين الإنجليز والفرس: أن يتولّى الفرس أمر الحصار في البرّ، وأن يهاجم الإنجليز في البحر بسبع سفن، وأن يقتسموا الغنيمة. ويعرّف المحقق إمام قلي خان، قائد الفرس، بأنه «قائدٌ صفويٌّ كرجيّ الأصل». ويوجز المحقق مجرى الحصار: «تمرّدت حامية قلعة هرمز البرتغالية في 22 أبريل 1622 واستسلمت القلعة واحتُلّت في اليوم التالي».

## مدافع القلعة وغنيمةٌ في البحر

يعدّد فالنتاين ما وُجد في المدينة والحصن من سلاح: «ثلاثة وأربعون مدفعًا من مدافع الحصار الكبيرة»، ومدافع أخرى بأسماء غريبة منها «الحيّات» و«الأراغن» و«البازيليسك». ويشرح المحقق أن البازيليسك «مدفعٌ برونزيٌّ ثقيلٌ جدًّا من مدافع أواخر العصور الوسطى، سُمّي باسم الحيّة الأسطورية».

ويروي المؤلف أن الربّان الإنجليزي وودكوك رحل بسفينتين محمّلتين بنصيب الإنجليز من الغنيمة، «وكان فيها من اللؤلؤ وغيره من الجواهر ما يساوي مليون ريال». لكنه «غرق بعد ذلك بسفينته «الحوت» ومعها هذه الغنيمة».

ويذكر أن الفرس قلّما اهتمّوا بأمر حلفائهم بعد النصر، «فلم يحصل هؤلاء من جميع نفقات حربهم على أكثر من عشرين ألف جنيهٍ إسترليني».

## قائمة ملوك هرمز

يورد فالنتاين جدولًا بتسعة وعشرين ملكًا لهرمز، أوّلهم «الشاه محمد الأوّل، باني مدينة هرمز سنة 700 للميلاد»، وآخرهم سيد محمد شاه سنة 1622. وينبّه المحقق: «في قائمة ملوك هرمز التي يوردها المؤلف أخطاءٌ في الأسماء والتواريخ، وقد نقلها كما وجدها».

## بدايات التجارة الهولندية

ويقول فالنتاين إن شرف إقامة التجارة الهولندية في فارس يرجع إلى بيتر فان دن بروك، الذي عُيّن «في السادس عشر من يونيو سنة 1620 مديرًا للتجارة على جميع المكاتب في جزيرة العرب والهند وفارس». وفي سنة 1622 أُرسل التاجر هويبرت فيسنيخ إلى فارس.

ويقول: «وفي فبراير سنة 1626 جاءت سفننا من فارس إلى سورات بثلاثمئةٍ واثنتين وخمسين بالةً من الحرير». ويقول عن فان دن بروك إنه رحل إلى بتافيا «بأسطولٍ تبلغ قيمته اثني عشر طنًّا من الذهب».

## أسين: ظلّ النخيل قرب غمرون

ويصف فالنتاين في الفصل الأول موضعًا قريبًا من غمرون يلجأ إليه الناس من الحرّ: «وفي هذا الموضع، وإلى مسافة ميلٍ أو ميلين في داخل البلاد، يكون الجوّ أبرد كثيرًا وأطيب، والمنظر أكثر خضرةً ونضارة، لأنّ هناك ظلًّا جميلًا من النخيل». ويقول إن هذا الموضع لا يبعد عن غمرون «إلّا ثلاثة أميالٍ فارسية أو فراسخ»، وإنه «يُسمّى «أسين» أو «أتشين»».

أمّا تجارة غمرون فيقول عنها إنها، مع الحرّ الذي لا يُطاق، على قدر من الأهمية يجعل كثيرين يحتملون المقام فيها، «أملًا في أن يصيروا أغنياء في سنواتٍ قليلة». ثم يضيف: «غير أنّ أكثرهم يذهب فيها بحياته، ويبدو أنّ أطولهم عمرًا هو أحسنهم حظًّا».

## خاتمة

يقرأ المرء هذا الفصل فيرى كيف كان مدخل الخليج العربي محورًا لتجارة العالم: مملكةٌ عربية الأصل على جزيرةٍ قاحلة، تمدّ سلطانها إلى البحرين وعُمان، ثم تتبدل أحوالها، فتنتقل التجارة إلى غمرون حيث ترسو سفن الشركات محمّلةً بالحرير. وتأتي حواشي التحقيق لتصحّح الأسماء وتضبط التواريخ، فتجعل رواية القرن الثامن عشر قريبةً من قارئ اليوم.

## المصدر

- الكتاب: «وصف فارس ومكتب الشركة الهولندية للهند الشرقية فيها» (Beschryvinge van Persien، من «الهند الشرقية القديمة والجديدة»، الجزء الخامس، 1726)، تأليف: فرانسوا فالنتاين (François Valentijn)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الرابع «البرتغاليون في هرمز، وملوك هرمز، وبدايات تجارتنا في فارس»، ص 80–91 (موقع هرمز وموانئ عُمان ص 81؛ الملك الصبيّ ووزيره وشروط الصلح ص 82؛ العودة سنة 1515 ص 83؛ الازدهار وحكّام القلعة وقشم ص 84؛ سنة 1622 والمدافع وغنيمة وودكوك وقائمة الملوك ص 84–87؛ حصن البحرين ونفقات الإنجليز ص 88؛ التجارة الهولندية في غمرون ص 89–91)؛ والفصل الأول «فارس ومكتبنا فيها، وغمرون وأصفهان»، ص 17–18 (أسين وتجارة غمرون).
- الخريطة من الفصل العاشر، ص 237.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`28-bahrain-pearls-1618-silva`,`20-oman-imams-aflaj-stuhlmann`,`27-famous-pearls-rosenthal`]},{slug:`06-hormuz-windcatchers-silva`,title:`صيفٌ في جَرون: هرمز وملاقف الهواء بعين سفيرٍ إسباني`,author:`دون غارسيا دي سيلفا إي فيغيروا`,category:`التراث`,categorySlug:`heritage`,date:`2026-09-25`,cover:`articles/06/1.webp`,excerpt:`في مطلع القرن السابع عشر خرج دون غارسيا دي سيلفا إي فيغيروا سفيرًا من ملك إسبانيا فيليب الثالث إلى الشاه عباس، وكانت طريقه من غوا إلى مسقط، ثم إلى هرمز، فبلاد فارس.`,tags:[`هرمز`,`ملاقف الهواء`,`مسقط`],sample:!1,book:`هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)`,coverCaption:`منظر مدينة هرمز وقلعتها (صورة أضافها المحقق) — المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 43`,era:`1614–1624`,eraSort:1614,words:1696,minutes:8,body:`في مطلع القرن السابع عشر خرج دون غارسيا دي سيلفا إي فيغيروا سفيرًا من ملك إسبانيا فيليب الثالث إلى الشاه عباس، وكانت طريقه من غوا إلى مسقط، ثم إلى هرمز، فبلاد فارس. وقد ترك «شروحًا» مفصّلة عن سفارته، اختار المحقق منها الفصول المتعلقة بالخليج العربي وترجمها في كتاب «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)». وفي الفصل الثاني من الكتاب الثالث يصحبنا السفير في رحلةٍ بطيئة من مسقط إلى هرمز، ثم يصف الجزيرة ومدينتها وصفًا يكاد يُرى بالعين.

## على امتداد ساحلٍ صخري

يبدأ الإبحار من مسقط و«ساحل جزيرة العرب» عن يسار السفينة، تظهر فيه قرى صغيرة بين شعاب الصخور العظيمة قرب البحر. ويلفت نظر السفير أن بعض هذه الشعاب فيها نخيل وبرتقال وأشجار أخرى، فيكتب: «فكانت هذه الأودية الضيّقة، التي تبدو غير مزروعة، تُظهر بين المنظر الكئيب لصخورها الشديدة الجفاف خضرةً بهيجةً لطيفة».

<figure class="art-fig"><img src="articles/06/1.webp" alt="منظر قديم محفور لمدينة هرمز وقلعتها" width="1071" height="943" loading="lazy" /><figcaption><span class="fig-cap">منظر مدينة هرمز وقلعتها (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 43</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: جزءٌ من لوحة «Calechut… Ormus… Canonor» في أطلس المدن «Civitates Orbis Terrarum» لجورج براون وفرانس هوخنبرغ (صدر بين 1572 و1617)، من نسخة المكتبة الوطنية الفرنسية</span></figcaption></figure>

ثم تأتي الأيام العسيرة. فقد أصبحوا «على مرأًى من جبال ليما الشاهقة جدًّا»، وهي، كما يقول، أعلى ما رأوه وأشدّه انحدارًا إلى البحر، والبحر عند سفحها من العمق بحيث لا يمكن إلقاء المرساة على سبعين قامة ولا على مئة. وتوالت أيام السكون والحرّ، حتى اضطرّ البحّارة إلى جرّ السفينة بالقارب، وأعانهم في التجذيف بعض خدم السفير والركّاب. ويشرح السفير أن هذا الموضع أصعب ما في الإبحار من غوا إلى هرمز، لأن البحّارة العارفين يحرصون على الاحتماء بالساحل الوعر خشية أن تفاجئهم ريح «الشمال» في وسط القناة.

ومن معالم الطريق التي يحفظها النص صخرٌ كبير مستدير قرب الساحل «يسمّونه «جزيرة الفئران»، ويرون أنهم قد أحسنوا السير إذا بلغوا موضعه»، وهو على ستة فراسخ أو سبعة من رأس مسندم. ثم ظهرت جزيرة لارك أمام المقدّم، ومن ورائها أعلى أرض جزيرة قشم الكبيرة. ويعرّف المحقق لارك بأنها جزيرة صغيرة شرقي قشم وجنوبي هرمز، وبينها وبين جزيرة السلامة العُمانية أضيق موضعٍ في مضيق هرمز، نحو 39 كم.

## جزيرةٌ يسمّيها العرب «جَرون»

يقول السفير: «وجزيرة هرمز في الخليج العربي، على اثني عشر فرسخًا داخل فم مضيقه»، ويذكر أن العرب يسمّونها «جَرون». ويوضح المحقق أن «جَرون» هو اسم الجزيرة القديم قبل أن ينتقل إليها أهل هرمز القديمة نحو سنة 1300، فغلب عليها اسم هرمز، وظلّ اسم «جرون» يُطلق على المدينة التي فيها.

ويصف السفير الجزيرة بأنها مثلّثة الشكل، فيها جبلٌ إلى جواره تلٌّ مستدير «كلّه من سفحه إلى رأسه ملحٌ أبيضُ ناصعٌ نقيٌّ جدًّا، على هيئة جبلٍ مستديرٍ كساه الثلج كلَّه».

## الماء: صهاريج المطر وآبار تورونباكي

الماء هو هاجس الحياة في هرمز. فبين المدينة والجبل سهلٌ فيه «صهاريج كثيرةٌ مسقوفةٌ بقبابها، لأهل المدينة، مغلقةٌ بأقفالها»، يُجمع فيها ماء المطر، وهو إذا ركد أجود كثيرًا من ماء الآبار. وفي الجهة الأخرى من الجزيرة موضع «تورونباكي»، وفيه، كما يقول، بئران عميقتان واسعتان غزيرتا الماء، ودار نزهةٍ لملوك هرمز الأقدمين فيها نحو خمسين نخلة. ويضيف أن كثيرًا من أهل المدينة يأتون، وإن كانت لهم بيوت حسنة، ليقضوا الصيف في تورونباكي في بيوتٍ من سعف النخل يبنونها لهذا الغرض.

<quote by="دون غارسيا دي سيلفا إي فيغيروا" source="«هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»">ومن العجيب أن ترى وتحسّ أنه مهما قلّت الريح أُحسّت في الحال في الحجرة التي لها هذا الواقي، فينتعش من فيها ويتنفّسون بما يأتي به من الاعتدال، ولولا هذه الحيلة لما بدا ممكنًا أن يُعاش في هرمز</quote>

## ملاقف الهواء: حيلةٌ تجعل الحياة ممكنة

أجمل ما في هذا الفصل وصف السفير لملاقف الهواء التي تعلو بيوت هرمز. فهي «مفتوحةٌ من جوانبها إلى الجهات الأربع»، يقسمها حاجزٌ رقيق على طولها، ثم تقسمها حواجز أصغر إلى ثلاثة أقسام أو أكثر. ويصف كيف ينزل الهواء فيها باردًا، ثم يعترف بإعجابه: «ومن العجيب أن ترى وتحسّ أنه مهما قلّت الريح أُحسّت في الحال في الحجرة التي لها هذا الواقي، فينتعش من فيها ويتنفّسون بما يأتي به من الاعتدال، ولولا هذه الحيلة لما بدا ممكنًا أن يُعاش في هرمز».

ويكشف السفير سرًّا آخر من أسرار البناء: فتحت الماء على ساحل الجزيرة كلّه مقدارٌ كبير من حجر الخفاف الأبيض الإسفنجي الخفيف، «وتُستعمل عمومًا في بناء ملاقف الهواء، لأنها لخفّتها، ولشدّة تشبّث الجير بها لما فيها من الفراغات، تُثقل البيوت أقلّ».

## مدينةٌ على السطوح

في الصيف تتحول سطوح هرمز إلى عالمٍ ثانٍ؛ يقول السفير إن ما يتّخذونه على السطوح لقضاء الصيف الطويل «يبدو كأنه بلدةٌ جديدةٌ أخرى»، إذ يرفعون موضعًا للأسرّة تحيط به سواتر من حصر القصب وسعف النخل لا تحجب الهواء. ولكل البيوت ممرّاتٌ من بعضها إلى بعض عبر السطوح، ومع ذلك يشهد السفير بأن الناس «يحافظون فيما بينهم عمومًا، كأنها شعيرةٌ من دينٍ مرعيّ، على حسن الجوار والمعاملة».

## أهل هرمز وتجارتها

يقدّر السفير بيوت المدينة بألفين وخمسمئة إلى ثلاثة آلاف بيت، وسكانها بأكثر من أربعين ألف نفس، أكثرهم مسلمون عرب وإن كانوا يتكلمون الفارسية عمومًا، ومعهم تجّار من الهند وجماعات أخرى. ويقول إن أكثرهم «تجّارٌ أغنياء يتّجرون في فارس وجزيرة العرب»، وإن صنّاعهم من المهارة والفطنة بحيث لو كانت لهم قدرة على الابتكار «لكانوا أمهر صنّاع الدنيا». ويصف المرسى في الخليج الصغير قبالة المدينة، حيث ينحسر الماء عند الجزر حتى يُمشى فيه أكثر من مئة وخمسين خطوة والماء إلى الركبة.

## صخرة «النصر»

وقبل لارك، في أوّل الطريق من مسقط، مرّت السفينة قرب البرّ بجزيرة «النصر». يقول غارسيا: «وهي صخرةٌ صغيرةٌ حولها قليلٌ جدًّا من الرمل». ويذكر أنها مشهورة لأن دون فرناندو دي نورونيا غنم بقربها، «منذ أكثر من خمسين سنة، تسعَ غليراتٍ للترك في القتال». ويعلّق المحقق بأن أنطاو دي نورونيا، أبا هذا القائد، كان نائب الملك في الهند البرتغالية من 1564 إلى 1568، ويقول: «ولم نقف على خبر الواقعة التي يذكرها المؤلف».

ويشرح المحقق في الفصل نفسه وحدة «القامة» التي يقيس بها البحّارة العمق، فهي «نحو 1.8 متر في القياس الإنجليزي».

## جزيرة لارك على مدخل الطريق

قبل أن تظهر هرمز، مرّت السفينة بجزيرة لارك. يقول غارسيا إن لارك «أكبر كثيرًا من جزيرة هرمز»، ولذلك لم يكن يمكن أن يُرى شيءٌ من هرمز حتى خلّفوها، فأخذت جبالها الملحية «تبيضّ على ثلاثة فراسخ». ويعرّف المحقق لارك بأنها جزيرة صغيرة شرقي قشم وجنوبي هرمز، «وبينها وبين جزيرة السلامة العُمانية أضيق موضعٍ في مضيق هرمز، نحو 39 كم».

<figure class="art-fig"><img src="articles/06/2.webp" alt="رسم قديم لسفن أمام جزيرة هرمز سنة 1629، وفيه كمرون على برّ فارس" width="1600" height="1008" loading="lazy" /><figcaption><span class="fig-cap">سفنٌ أمام جزيرة هرمز سنة 1629: «جزيرة هرمز، وكمرون على برّ فارس» (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، ص 141</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: نقشٌ هولندي إخباري، نحو 1632، متحف ريكس في أمستردام (RP-P-OB-75.464)</span></figcaption></figure>

## سهل «أردميرا» ولعبة الصولجان

بين الجبل والمدينة سهلٌ يقول المؤلف إن المسلمين يسمّونه «أردميرا»، «ومعناه بالفارسية السهل المستوي الحسن المنظر». وفيه يلعب رجال دار الملك ودار الوزير «بالصولجان على ظهور الخيل». ويشرح المحقق أنها لعبة «الچوگان» أو البولو، «من أقدم الألعاب الجماعية المعروفة».

ويخالف غارسيا من سبقه في وصف الجزيرة، فيقول إن فيها في مواضع كثيرة «أشجارًا كثيفةً بعضها كبير، خلافًا لرأي جميع من وصفوها غيرنا فقالوا إنه لا يوجد فيها كلّها شيءٌ أخضر». ويذكر أن في شعاب الجبل كثيرًا من الغزلان وبعض الأرانب.

## القلعة والجامع الكبير

يقول المؤلف إن القلعة لم تكن حين أسّسها ألبوكيرك «إلا برجين صغيرين»، ثم وسّعها البرتغاليون على مدى سنين كثيرة. ويصف أسوارها بأنها «من حجارةٍ صغيرةٍ وجيرٍ معجونٍ بماء البحر».

وفي صدر المدينة كان الجامع الكبير للمسلمين. ويقول غارسيا إنه كان أكثره مهدّمًا، لكنه «يبدو مما يُظهره الآن أنه كان بناءً عظيمًا فخمًا». ويضيف: «وقد بقيت قائمةً منارةٌ شاهقةٌ جدًّا محكمة الزخرفة من الخارج، تبدو من بعيدٍ جدًّا». ثم يذكر أن الجامع هُدم «منذ سنواتٍ قليلة، لقلّة حكمة بعض الوزراء»، فاشتدّ لذلك ألم المسلمين وسخطهم في المدينة والبرّ المجاور، وأن ذلك أضرّ بالمدينة.

ويذكر المحقق أن لفظ الجمرك في الأصل «alfandiga»، وأنها «كلمةٌ أخذها البرتغاليون والإسبان من العربية».

## خشبٌ تحت الماء

ويصف غارسيا ظاهرة غريبة في خليج المدينة الصغير: يُستخرج من تحت الماء «حطبٌ كثير، وإن كان أكثره دقيقًا، سليمًا غير متعفّن». ويقول إن أكثره «دقيقٌ ملتوٍ على هيئة الجذور»، حتى إن العامة تعتقد أن هذا الخشب ينبت تحت الماء. ويرجّح المحقق أن المؤلف «يصف جذوع أشجار القرم (المانغروف) وجذورها»، وأن أهل الساحل يسمّونها «الحرا».

## هل كان جبل هرمز بركانًا؟

لاحظ السفير أحجار الخفاف البيضاء في البحر حول الجزيرة، فحكم بأن الجبل «كان في بعض الأزمنة الماضية يقذف النار». ويذكر أنهم كانوا يشمّون في ليالي الصيف «رائحةٌ ثقيلةٌ جدًّا من الكبريت» حين تهبّ الريح من جهة الجبل. ورأى عند سفح الجبل «مقدارًا كبيرًا من الحجارة السوداء كالفحم». ويفسّر بياض الحجارة في البحر بأن «المدّ والجزر المتواليين غسلاها على مدى كلّ تلك السنين».

لكن المحقق يصحّح هذا الرأي: «ما ذهب إليه المؤلف من أنّ جبل هرمز بركانٌ خامدٌ لا يوافق ما يقوله الجيولوجيون اليوم، فالجزيرة في الحقيقة قبّةٌ ملحيةٌ صعدت فيها رواسب الملح القديمة إلى السطح على مدى آلاف السنين».

## حرٌّ شديد بلا مبالغة

ويرى غارسيا أن ما يُقال عن حرّ هرمز فيه مبالغة. فليس الحرّ، كما أذاع كثيرون، يضطرّ الناس «إلى النوم نهارًا وليلًا في أحواضٍ من الماء». ويقول إن ماء الآبار «شديد الطينية حتى إنه إذا صُبّ في الحوض حديثًا بدا أبيض كاللبن». ويخلص إلى أن أكثر ما يُقال عن الحرّ فيه مبالغة.

ويلاحظ اختلاف رياح الصيف: «منها ما يُكثر العرق، ومنها ما يُحدث الزكام، وما يجفّف الآبار». أمّا الريح الجنوبية فهي أقلّها حرارة، «فإذا مسّت الماء الذي في الآنية جعلته باردًا بقدرٍ كافٍ».

## خاتمة

يكتب غارسيا دي سيلفا بعين رجلٍ دقيق الملاحظة، يسجّل الريح والقامات والمسافات، لكنه لا يغفل عن الإنسان: البحّار الذي يعرف ساحله، وصاحب البيت الذي ابتكر الملقف، والجيران الذين يتقاسمون السطوح بأمان. وبهذه العين تعود إلينا هرمز مدينةً حيّة، صنع أهلها من جزيرةٍ ملحية قاحلة سوقًا من أعظم أسواق زمانها.

## المصدر

- الكتاب: «هرمز والخليج العربي في شروح سفارة غارسيا دي سيلفا (1614–1624)»، تأليف: دون غارسيا دي سيلفا إي فيغيروا (García de Silva y Figueroa)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الكتاب الثالث، الفصل الثاني «من مسقط إلى هرمز»، ص 35–57 (الساحل وجبال ليما ص 35–36؛ صخرة النصر والقامة ص 36؛ جزيرة الفئران ص 40؛ لارك ص 41؛ وصف الجزيرة واسم جرون ص 43؛ الصهاريج وتورونباكي وأردميرا ص 45–46؛ الأشجار والقلعة ص 47–48؛ الجامع والجمرك ص 48؛ ملاقف الهواء ص 49–50؛ السطوح وحسن الجوار ص 51؛ حجر الخفاف والبيوت والسكان ص 52–53؛ الخشب تحت الماء ص 52؛ مسألة البركان ص 54–56؛ الحرّ والرياح ص 56–57).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF. (ترد داخل النص أيضًا أرقام صفحات الطبعة الإسبانية بين معقوفين، وليست هي المقصودة هنا.)
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`27-famous-pearls-rosenthal`,`20-oman-imams-aflaj-stuhlmann`,`13-batinah-musandam-dhaid-1902-cox`]},{slug:`07-lower-gulf-islands-buckingham`,title:`جزرٌ على دفتر الملّاح: من قيس إلى صير بني ياس والبحرين في رحلة بكنغهام`,author:`جيمس سلك بكنغهام`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-09-24`,cover:`articles/07/1.webp`,excerpt:`في التاسع عشر من نوفمبر 1816 كان الرحّالة الإنجليزي جيمس سلك بكنغهام على ظهر سفينةٍ في سربٍ يبحر من بوشهر نزولًا في الخليج العربي.`,tags:[`صير بني ياس`,`البحرين`,`هرمز`],sample:!1,book:`رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط`,coverCaption:`أطلال هرمز، مع جزيرتها وخليجها، عن رسمٍ لجيمس بيلي فريزر — المصدر: «رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط»، ص 131`,era:`1816`,eraSort:1816,words:1565,minutes:8,body:`في التاسع عشر من نوفمبر 1816 كان الرحّالة الإنجليزي جيمس سلك بكنغهام على ظهر سفينةٍ في سربٍ يبحر من بوشهر نزولًا في الخليج العربي. كانت الريح خفيفة، لكنه يكتب أن «الجوّ كان في غاية اللطف»، وأن الوفاق التام ساد الجماعة المزدحمة على السفينة. ومن هذه الرحلة البطيئة خرج الفصل السابع من كتابه، الذي ترجمه المحقق ضمن «رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط». والفصل أشبه بدفتر ملّاح: خطوط عرض وطول، وأعماق بالقامات، وجزر تُرسم واحدةً بعد أخرى.

## يومياتٌ على إيقاع الريح

يكتب بكنغهام يومياته بالتاريخ: ففي العشرين من نوفمبر انفجرت قبيل الفجر عاصفة من الشمال الغربي «يصحبها الرعد والبرق والمطر»، فطُويت الأشرعة، ثم استقرت الريح عند الشروق نسيمًا ثابتًا. وفي الحادي والعشرين يلاحظ أنهم لم يروا إلا قليلًا من السمك، لكنهم رأوا قناديل البحر التي يسمّيها البحّارة «الشحم»، وثعابين بحرٍ مطوّقة بالأسود والأبيض. وفي كل يوم يسجّل موقع السفينة عند الظهر، والجبال التي تُرى على الساحل، والعمق الذي يتغيّر من سبعٍ وعشرين قامة إلى أربعين.

<figure class="art-fig"><img src="articles/07/1.webp" alt="لوحة محفورة قديمة لأطلال هرمز مع جزيرتها وخليجها، عن رسم لجيمس بيلي فريزر، من لوحات الفصل نفسه" width="904" height="617" loading="lazy" /><figcaption><span class="fig-cap">أطلال هرمز، مع جزيرتها وخليجها، عن رسمٍ لجيمس بيلي فريزر</span><span class="fig-src">المصدر: «رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط»، ص 131</span><span class="fig-orig">أصل الصورة: جيمس سلك بكنغهام، رحلات في آشور وميديا وفارس، ط2، لندن 1830، ج2، اللوح المحفور في صدر الفصل السابع؛ نشرها هنري كولبرن، 1 يناير 1829</span></figcaption></figure>

## قيس: أخصب جزر الخليج

في الثالث والعشرين من نوفمبر كانوا قبالة جبل چارك على الساحل الفارسي، الذي «يتخذه الملّاحون علامةً بحريةً في الخليج». وقبالته جزيرة قيس الصغيرة، ويصفها بأنها «منخفضة، أكثف شجرًا من أيّ جزيرةٍ في الخليج، خصبةٌ عامرةٌ بالسكّان». ويذكر أنه يمكن الحصول فيها على المؤن والماء، وأن في ظلّها ملجأً من العواصف الشمالية الغربية في مرسًى جيد عمقه تسع قامات.

ويبحث بكنغهام هنا عن سيراف التي يذكرها الإدريسي مركزًا للتجارة، فلا يجدها. ويأتي المحقق ليحسم الأمر: سيراف ميناءٌ عظيم على الساحل الفارسي ازدهر في القرنين الثالث والرابع الهجريين، وكانت تنطلق منه السفن إلى الهند والصين، ثم انحطّ بعد زلزالٍ نحو سنة 366هـ/977م وتحوّلت التجارة إلى قيس، وأطلاله عند بلدة طاهري الحالية.

## «بثوبي»: اسمٌ محرّف لأبوظبي

حين يصل الكاتب إلى الجون الواقع على الساحل العربي يقول: «وأقصى الجزر غربًا في هذا الجون تسمّى «جزيرة بثوبي»، من بلدةٍ بهذا الاسم تقع قبالتها». ويذكر أن للبلدة مرفأ، وأنها موضع ذو شيءٍ من التجارة، على صداقة مع إمام مسقط، تستقبل السفن والإمدادات من سوقها.

<quote by="جيمس سلك بكنغهام" source="«رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط»">وتُقسَم أرباح الغوص كلّها بأعدل طريقة، بحصصٍ على قدر رأس المال الموضوع في القوارب؛ والذين لم يسهموا في تجهيزها البتّة يُعطَون كذلك حصصًا متناسبة؛ فيكون للجميع مصلحةٌ في أرباح العمل، ويمضي الجميع في عملهم راغبين</quote>

وهنا يقدّم المحقق إضاءةً تجعل الفقرة كلها تتغيّر في عين القارئ: فـ«بثوبي» و«بوثبيان» تحريفان لاسم «أبوظبي»، يؤيد ذلك موقعها على خط العرض الذي يذكره المؤلف، وذكره بني ياس فيها، «وهي يومئذٍ مقرّ آل نهيان شيوخ بني ياس، وهي اليوم عاصمة دولة الإمارات العربية المتحدة».

## جزر مود: ثماني جزرٍ في مغاصٍ واسع

ثم ينقل بكنغهام وصف مجموعةٍ من الجزر اكتُشفت، كما يقول، بسفينة «فيفوريت» وسُمّيت باسم قائدها «جزر مود»، ويعدّدها: حالول، وشراعوه، وداس، وجُمَعين، وداني، وأرزنة، ودلما، وجزيرة بني ياس، «فتلك ثمانٍ». ويحدّد المحقق مواضعها اليوم: هذه الجزر كلها في مياه دولة الإمارات العربية المتحدة، عدا حالول وشراعوه التابعتين لدولة قطر، وجزيرة صير بني ياس تُعرف اليوم بهذا الاسم.

ويحفظ الوصف المنقول ملامح كل جزيرة؛ فدلما «طولها من الشمال إلى الجنوب نحو ستّة أميال»، وعلى طرفها الشمالي تلٌّ مستدير، أما جزيرة بني ياس فهي «مرتفعةٌ نوعًا ما في الوسط، وعرةٌ جدًّا»، تمتد إلى الجنوب الغربي في نقطة منخفضة تكاد تتصل بالبر. ويخلص الوصف إلى قوله: «وتقع هذه الجزر في وسط مغاصٍ واسعٍ للؤلؤ، يمتدّ نحو مئتي ميلٍ طولًا، ونحو سبعين ميلًا من الشمال إلى الجنوب، ومن هذا المغاص يُجمع كلّ سنةٍ مقدارٌ عظيمٌ من اللؤلؤ».

## البحرين: ثلاثمئة قرية ومرسى المنامة

من رأس ركّان يمضي الساحل ليكوّن خليج البحرين، ويذكر الكاتب الزبارة وقلعتها قريبًا منه. ويعرّف المحقق الزبارة بأنها بلدة على الساحل الشمالي الغربي لقطر، كانت مقرّ آل خليفة قبل انتقالهم إلى البحرين سنة 1783م، وأطلالها اليوم مدرجة في قائمة التراث العالمي لليونسكو.

أما البحرين فيشرح اسمها بأنه مثنّى، فكبرى الجزيرتين تحمل الاسم، والصغرى تحتفظ باسم «عراد». ويصف الجزيرة الرئيسة بأنها منخفضة «ولكنها خصبةٌ في كلّ مكان، وافرة الماء، تحمل سكّانًا كثيرين»، ويقدّر أن فيها ما لا يقل عن ثلاثمئة قرية منتشرة. وبين الجزيرتين معبرٌ بالقوارب «التي تغدو وتروح ليلًا ونهارًا بلا انقطاع». ويشير إلى مرسى قريب من المنامة على نصف ميل، ترسو فيه الداوات والسفن المحلية كلها.

## لؤلؤٌ يصل إلى عواصم أوروبا

يقدّر بكنغهام أن مغاص اللؤلؤ الذي مركزه هذه الجزر يدرّ كل سنة نحو عشرين لكًّا من الروبيات للتصدير، يجد أكثره طريقه إلى الهند، ويتفرّق الباقي عبر بوشهر والبصرة وبغداد حتى القسطنطينية والشام ومصر، «بل إلى عواصم أوروبا الكبرى». ويصف الغوّاصين الذين يبدؤون عملهم عند الشروق ويستمرون حتى الغروب، وينزلون من خمس قامات إلى خمس عشرة.

ويستوقفه نظام توزيع الأرباح: «وتُقسَم أرباح الغوص كلّها بأعدل طريقة، بحصصٍ على قدر رأس المال الموضوع في القوارب؛ والذين لم يسهموا في تجهيزها البتّة يُعطَون كذلك حصصًا متناسبة؛ فيكون للجميع مصلحةٌ في أرباح العمل، ويمضي الجميع في عملهم راغبين». وطعام الغوّاصين في الموسم، كما يقول، السمك والتمر وقليل من الخبز والأرز والزيت.

## عيونٌ عذبة في قاع البحر

يقول بكنغهام: «والبحرين مشهورةٌ أيضًا بعيون الماء العذب النابعة في البحر». ويصف إحداها: «فواحدةٌ منها تنبع في عمق ثلاث قامات، حيث يتدفّق الماء العذب من رمل القاع بقوّةٍ عظيمة». ويشرح طريقة الاستقاء: «وقد رُكّبت جرّةٌ على فم هذه العين، والذي يستقي الماء منها يغوص ومعه قربةٌ فارغةٌ من جلد الماعز ملفوفةٌ تحت إبطه». فإذا وضعها على فم الجرّة امتلأت في ثوانٍ وطفت به إلى السطح.

ويذكر أن حول الجزيرة أربع عيون أو خمسًا من هذا النوع، وأن الماء الوحيد الذي يُشرب في عراد يُستقى من إحداها. ويقول: «وماء هذه العيون كلّها عذبٌ جدًّا في ذاته». ويعرّفها المحقق بأنها العيون «المعروفة في البحرين بـ«الكواكب»، ومنها عين «أبو ماهر» قرب المحرّق».

## العقير ميناء الأحساء

ثم ينتقل المؤلف إلى قاع خليج البحرين، حيث «يقع خور «لغير» ومرفؤها». ويوضح المحقق أن «لغير» هو «العُقير، ميناء الأحساء التاريخيّ على الخليج». ويقول بكنغهام: «وفي هذا الخور تُحفظ قوارب الغوص على اللؤلؤ في الشتاء، وعددها عدّة مئاتٍ من الأشرعة، إذ الخور واسعٌ يمتدّ أميالًا كثيرةً إلى الداخل».

ويذكر أن الأحساء كانت في أثناء حملات البرتغاليين «مقرّ ملكٍ تخضع له جزر البحرين وميناء القطيف كلاهما». ويعرّف المحقق هؤلاء الملوك: «هم الجبور (بنو جبر)، حكموا الأحساء والقطيف والبحرين في القرنين التاسع والعاشر الهجريين»، وآخر ملوكهم البارزين مقرن بن زامل الجبري، الذي قُتل في البحرين سنة 1521م في حملة برتغالية.

## القطيف

ويقول بكنغهام عن القطيف: «وهي بلدةٌ تجاريةٌ كبيرة، وثيقة الصلة بجزر البحرين، تشاركها في غوص اللؤلؤ وفي تجارتها العامّة». ويضيف: «ولها جونٌ عميق تُحفظ فيه سفن الغوص على اللؤلؤ أيضًا في فصل الشتاء».

## بحرٌ بلا ديدان

ويسجّل المؤلف ملاحظة يقول إن كل من يعرف الخليج يؤكّدها: «أنه لا توجد في مياهه كلّها ديدانٌ تضرّ بقيعان السفن أو الخشب الغارق». ويقارن بين ساحلي الخليج: في الجانب العربي «تكثر الضحاضح المرجانية والمياه الضحلة، كما في البحر الأحمر، مع سبرٍ شديد عدم الانتظام، وقاعٍ صخريٍّ ورمليّ، وماءٍ بديع الصفاء».

## القرين أو الكويت

ويصعد بكنغهام بوصفه إلى الكويت، فيقول إنها «القرين» في الخرائط الإنجليزية، «وإن كان لا يُعرف عند العرب إلا باسم «الكويت»». ويصفها: «وهو ميناءٌ ذو شأن، يقع في جونٍ جميل؛ والبلدة كبيرةٌ آهلة». ويقول إنها حافظت على استقلالها حين هوجمت مواضع كثيرة في الخليج بالسلاح البرتغالي، وإن أهلها لا يزالون يحملون «صيت أنهم أكثر الناس حرّيةً وأشجعهم في الخليج كلّه».

ويقول: «ويُخرج الميناء مئة شراعٍ على الأقلّ من السفن الكبيرة والصغيرة»، ويذكر وأن لقادتها وأصحابها «أرفع سمعةٍ في الأمانة والمهارة والثبات والشجاعة». ويضيف المحقق أن الكويت كانت يومئذٍ تحت حكم آل صباح، «وحاكمها في زمن الرحلة الشيخ جابر بن عبد الله الصباح».

ويقول بكنغهام: «ويتيح الجون مرسًى ممتازًا في أعماقٍ مناسبة»، ويذكر أنه استُعمل حينًا محطّةً لطرّادات شركة الهند الشرقية لإنزال الرسائل المتبادلة بين الهند وأوروبا. ويحدّد المحقق ذلك: «انتقلت وكالة شركة الهند الشرقية من البصرة إلى الكويت مرّتين: في 1793-1795م، وفي 1821-1822م».

## فيلكا وإيكاروس

ويسمّي المؤلف الجزر التي تستر مدخل جون الكويت: «مسكان» و«فيلكا» و«عُوهة»، ويقول إن فيلكا أكبرها، «لا يزيد محيطها على سبعة أميال». ويقارنها بجزيرة «إيكاروس» التي ذكرها أريانوس. ويؤكّد المحقق ذلك بما ثبت بعد زمن المؤلف: «أثبتت الحفريات الأثرية في فيلكا منذ خمسينيات القرن العشرين، ومنها نقشٌ يونانيّ يذكر اسم «إيكاروس» ومعبدًا لأرتميس، أنّ فيلكا هي إيكاروس القدماء».

## الطنب الكبرى

وفي الخامس والعشرين من نوفمبر مرّت السفينة بجزر وسط الخليج. ويصف بكنغهام الطنب الكبرى بأنها «جزيرةٌ منخفضة، طولها من الشرق إلى الغرب يزيد قليلًا على فرسخ». ويذكر أن «قرب طرفها الغربيّ جونٌ صغيرٌ ملائمٌ للنزول». ويعلّق المحقق: الطنب الكبرى والطنب الصغرى ومعهما أبوموسى «جزرٌ عربية تتبع دولة الإمارات العربية المتحدة (الطنبان لرأس الخيمة وأبوموسى للشارقة)».

## خاتمة

يكتب بكنغهام كمن يرسم خريطةً بالكلمات، فيمرّ القارئ معه على قيس الخضراء، وعلى «بثوبي» التي يكشف التحقيق أنها أبوظبي، وعلى جزرٍ ما تزال أسماؤها حيّة: دلما وداس وصير بني ياس، حتى يبلغ البحرين بقراها الثلاثمئة. ويختم الفصل بالوصول إلى هرمز وأطلالها، التي تصوّرها اللوحة المرافقة.

## المصدر

- الكتاب: «رحلة بكنغهام في الخليج العربي 1816: من بوشهر والبصرة إلى رأس الخيمة ومسقط»، تأليف: جيمس سلك بكنغهام (James Silk Buckingham)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل السابع «الإبحار من بوشهر نزولًا في الخليج العربي، وأطلال هرمز»، ص 89–131 (بداية الإبحار والعاصفة ص 89–91؛ جبل چارك وقيس وسيراف ص 100–102؛ بثوبي وجزر مود ص 108–111؛ البحرين ومغاص اللؤلؤ ص 112–115؛ عيون البحرين والعقير والجبور ص 117–119؛ القطيف وخلوّ الخليج من الديدان ص 120؛ الكويت ص 122–123؛ فيلكا ص 124–125؛ الطنب الكبرى ص 127؛ لوحة أطلال هرمز ص 131).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`28-bahrain-pearls-1618-silva`,`22-sharjah-rak-1816-buckingham`,`16-terrada-kung-basra-godinho`]},{slug:`08-muscat-1817-heude`,title:`مسقط سنة 1817: سوقٌ تؤمّها السفن من كل صوب`,author:`الملازم وليم هيود`,category:`التاريخ`,categorySlug:`history`,date:`2026-09-23`,cover:`articles/08/1.webp`,excerpt:`في ربيع 1817 ركب الملازم الإنجليزي وليم هيود سفينةً عربية من بومباي قاصدًا البصرة، في أول مراحل رحلةٍ طويلة عاد فيها إلى إنجلترا برًّا.`,tags:[`مسقط`,`التجارة`,`البصرة`],sample:!1,book:`رحلة في الخليج العربي والطريق البري من الهند إلى إنجلترا (1817)`,coverCaption:`القرنة قرب البصرة (وليست مسقط): «القرنة، أو جنّة عدن»: ملتقى دجلة والفرات، من رسم المؤلف، حفر ت. فيلدنغ — المصدر: «رحلة في الخليج العربي والطريق البري من الهند إلى إنجلترا (1817)»، ص 76`,era:`1817`,eraSort:1817,words:1536,minutes:8,body:`في ربيع 1817 ركب الملازم الإنجليزي وليم هيود سفينةً عربية من بومباي قاصدًا البصرة، في أول مراحل رحلةٍ طويلة عاد فيها إلى إنجلترا برًّا. وقد دوّن رحلته في كتابٍ ترجمه المحقق كاملًا بعنوان «رحلة في الخليج العربي والطريق البري من الهند إلى إنجلترا (1817)». وفي الفصل الثالث يتوقف هيود أيامًا في مسقط، فيرسم لها صورةً حيّة: مرفأ مزدحم، وأسواق مسقوفة، وناس من كل قبيلة وبلد، ورحلة قصيرة إلى الداخل يلقى فيها كرم أهل القرى.

## سفينةٌ كأنها مدينة صغيرة

يبدأ هيود بتعريف القارئ بسفينته: «فليُعلم إذن أنّ «فضل كريم» كانت سفينةً عربيةً حمولتها 350 طنًّا، فيها طاقمٌ من خمسين بحّارًا من اللسكر، وتسعون راكبًا». ويصف الركّاب بأنهم من كل صفة ومنزلة: تجّار، وحجّاج، وتجّار خيل، وجنود، ووجهاء. ويذكر أن «الناخذاه» أو وكيل الشحنة، السيد قادر، ومعه تركيٌّ أو اثنان، كانوا رجالًا «على قدرٍ كبيرٍ من الذكاء»، قد سافروا وأفادوا ما يكفي لأن ينقلوا إليه معلوماتٍ نافعة متنوعة.

<figure class="art-fig"><img src="articles/08/1.webp" alt="لوحة محفورة من رسم المؤلف للقرنة عند ملتقى دجلة والفرات، من الفصل التالي الذي يواصل فيه رحلته بعد البصرة" width="1600" height="1047" loading="lazy" /><figcaption><span class="fig-cap">القرنة قرب البصرة (وليست مسقط): «القرنة، أو جنّة عدن»: ملتقى دجلة والفرات، من رسم المؤلف، حفر ت. فيلدنغ</span><span class="fig-src">المصدر: «رحلة في الخليج العربي والطريق البري من الهند إلى إنجلترا (1817)»، ص 76</span><span class="fig-orig">أصل الصورة: هيود، رحلة في الخليج العربي، لندن 1819، مقابل ص56</span></figcaption></figure>

## الوصول إلى المرفأ

يكتب هيود: «وفي الثاني عشر عند الظهر بلغنا مسقط»، ويصف مشهد الدخول: خمسٌ وعشرون «غرابًا» خارجة إلى بومباي في حراسة فرقاطة عربية ذات أربعين مدفعًا، وسفينتان كبيرتان أخريان، وثلاثون أو أربعون مركبًا صغيرًا تشحن أو تفرغ حمولاتها «من التمر والملح والأرزّ وغيرها من البضائع المتنوّعة». ويشرح المحقق أن الغراب ضربٌ من السفن الشراعية كان شائعًا على ساحل الهند الغربي والخليج، ذو صاريين أو ثلاثة، ويضيف أن السيد سعيد بن سلطان كان له أسطول تجاري وحربي يحمي قوافل السفن التجارية العُمانية إلى الهند.

## موقعٌ صنع تجارة

يحدّد المؤلف موقع مسقط على خط العرض 23° 38′ شمالًا وخط الطول 57° 27′ شرقًا، ويرى أن سرّ شأنها موقعها «في قاع خليجٍ صغيرٍ مشهودٍ له بالأمان والملاءمة وجودة المرسى». ويعرّف المحقق مسقط بأنها عاصمة سلطنة عُمان اليوم، على ساحل بحر عُمان، وقد صارت قاعدة حكم البوسعيديين منذ أواخر القرن الثامن عشر.

<quote by="الملازم وليم هيود" source="«رحلة في الخليج العربي والطريق البري من الهند إلى إنجلترا (1817)»">إنّما ينبغي أن تقدَّر بوصفها السوق الرئيسة لتجارةٍ كبيرة</quote>

## أسواقٌ غاصّة بالناس

ثم ينزل هيود إلى البلدة، فيجد أن دار الجمرك والقصر وما حوله والأسواق والشوارع الرئيسة كانت «غاصّةً بعربٍ من كلّ صنفٍ وقبيلة، وبيهودٍ وهندوسٍ وبلوشٍ وتركٍ وأفارقة». ويتجوّل في الأسواق المسقوفة بالعقود، ويزور قريتين صغيرتين في الجوار، ومسجدًا أُذن له بدخوله دون عناء. ويعلّل ذلك بأن أهل مسقط من المذهب الإباضي، ويصفهم بأنهم «شديدو التسامح». ويعرّف المحقق الإباضية بأنها مذهب إسلامي يُنسب إلى عبد الله بن إباض التميمي، ومن أئمته الأوائل جابر بن زيد الأزدي العُماني، «وهو مذهب أكثر أهل عُمان وحكّامها».

## رحلةٌ إلى الداخل وكرمٌ في قرية

لم يكتفِ هيود بالبلدة، بل عزم على أن يزور بعض البساتين والعيون الحارّة التي كثر الحديث عنها، فخرج بلباسٍ ودليلٍ وحصان دبّرها له البانيان الذي تتعامل معه السفينة. ويعرّف المحقق البانيان بأنهم التجّار الهندوس من الكجرات والسند، وكانت لهم جاليات تجارية قديمة في مسقط وموانئ الخليج.

ومن أجمل لحظات هذه الرحلة ما رواه عن صباحٍ في قرية: طلب من دليله قليلًا من الماء مع بضع تمرات، فأضافت امرأةٌ «قطعةً صغيرةً من أشدّ خبز الشعير سوادًا رأيته في حياتي لتُتمّ الوجبة، وأبت أن تأخذ قرشًا عرضتُه عليها مقابل ذلك». ثم يصف المكان حوله: بناءٌ أمامه حوض ماء تمدّه عيون، وحوله قليل من النخيل وشجر الرمان، «بما يكفي ليستحقّ اسم «بيت البستان»».

## السوق الرئيسة لتجارة كبيرة

قبل أن يغادر مسقط يقف هيود ليقوّمها، فيرى أن قيمتها «إنّما ينبغي أن تقدَّر بوصفها السوق الرئيسة لتجارةٍ كبيرة». أما صادراتها الخاصة فيذكر منها التمر، وسبعة آلاف أو ثمانية آلاف كيس من البن، والكبريت، وقليلًا من الخيل والإبل. ويلاحظ أن الحركة والنشاط الدائمين وكثرة توافد الغرباء تجعل البلدة تبدو أكبر مما هي.

ويختم وصفه بصورةٍ جامعة: فمنظر البلدة ومبانيها متواضع بعض الشيء، «غير أنّ التجارة التي تمارسها بوصفها سوقًا، والسفن التي تؤمّ مرفأها، وعدد الناس الذين يقصدونها من كلّ أنحاء بلاد العرب، مع أسواقها المسقوفة المزوّدة بكلّ صنفٍ من البضائع بوفرةٍ مطلقة، كلّ ذلك يسهم في الجملة في أن يطبع في الذهن صورة ثروتها ورخائها ونشاطها التجاري». ويسجّل الحرارة عند الظهر: 82 درجة في البحر، و86 في الخليج الصغير، و90 في البلدة.

## حاكم مسقط

يتحدث هيود عن «الإمام» الذي يقيم في قصرٍ قرب البحر، ويصفه بأنه أمير ذو شأن كبير. ويصحّح المحقق اسمه ونسبه: هو السيد سعيد بن سلطان البوسعيدي (1791–1856)، حاكم عُمان وزنجبار، تولّى الحكم سنة 1806، وعُرف بسعة تجارته وأسطوله، ونقل قاعدته إلى زنجبار، وهو حفيد الإمام أحمد بن سعيد مؤسس دولة البوسعيد، لا ابنه كما في الأصل.

## الإبحار شمالًا

في الثامن عشر غادرت السفينة مسقط. وفي التاسع عشر شاهد الركّاب كسوفًا للشمس، ويروي هيود أن العرب والفرس والترك تسلّوا بمشاهدته «منعكسًا في أحواض ماءٍ على سطح المؤخّر». ثم مضت السفينة صعدًا في الخليج العربي نحو بوشهر، فالبصرة، حيث يبدأ القسم البري من رحلته.

## عاصفةٌ في مرسى مسقط

في السادس عشر من الشهر نزل هيود إلى البرّ مرّة أخيرة، فاشتدّ الموج والريح «فصارا عاصفةً تامّة». واستأجر زورقًا ليعود إلى سفينته، فلم يستطع الزورق أن يمضي في الموج. ويقول إنهم كانوا سيهلكون جميعًا «لولا أن أنقذنا بلطف الله»، إذ انتشلهم من زورقهم المثقل رجال سفينة وصلت لحسن الحظ.

ولمّا بلغ سفينته وجدها تنجرف نحو صخرة شاهقة، لأن الربّان ألقى المرساة قريبًا جدًّا من الشاطئ. غير أن معاون الربّان كان «واقفًا يدخّن بلامبالاة البحّار الحقيقي». وقال لهيود إن المرساة جرّت وعلقت مرّتين أو ثلاثًا، فقد تثبت. ثم صاح بعد سكتة: «لقد ثبتت! فإلى العمل الآن». ويقول هيود إنه روى الحكاية بطولها «لأنّها تشرّف كثيرًا طبعَ بحّارٍ شجاع». وقضوا ليلة من القلق، «لكنّ الصبح طلع أخيرًا، وأشرقت الشمس بكلّ بهائها، وعمّ السلام».

## من البرتغاليين إلى اليعاربة والبوسعيديين

يقول هيود إن البرتغاليين حصّنوا مسقط سنة 1650، «الذين كانوا قد استقرّوا فيها قرابة ثلاثين سنة». ويصحّح المحقق هذا: «كذا في الأصل، والثابت خلافه: فقد احتلّ البرتغاليون مسقط سنة 1507، وبنوا قلعتي الجلالي والميراني في ثمانينيّات القرن السادس عشر، وفي سنة 1650 أخرجهم منها الإمام سلطان بن سيف اليعربي».

ويذكر المؤلف أن العرب استعادوا مسقط بقيادة رجل يسمّيه «يوسف بن علي، أمير نورنواي». ويعلّق المحقق بأن هذا الاسم كذا في الأصل، وأن البرتغاليين أُخرجوا من مسقط سنة 1650 «في عهد الإمام سلطان بن سيف اليعربي (حكم 1649–1679)، بعد أن ضيّق عليهم سلفه الإمام ناصر بن مرشد مؤسّس دولة اليعاربة».

ويقول هيود إن مسقط بقيت بعد ذلك حرّة، إلا مدّة قصيرة في عهد نادر شاه، ثم أخرج الفرسَ «أحمد بن سعيد، والي صُحار»، «فولّاه أبناء وطنه الممتنّون الحكم لأنّه خلّصهم من نيرٍ أجنبي». ويعرّفه المحقق: «هو الإمام أحمد بن سعيد البوسعيدي، مؤسّس دولة البوسعيد في عُمان»، بويع بالإمامة نحو سنة 1744، وتوفّي سنة 1783.

## جزيرة خَرْج

وفي الصعود في الخليج بلغت السفينة جزيرة خرج، «وهي جزيرةٌ رمليةٌ منخفضة يُؤخذ منها الأدلّاء». ويذكر هيود أن في الطريق إلى أحد مزاراتها قناة طويلة تحت الأرض، «كانت تُعدّ فيما مضى لجلب الماء من سفح تلٍّ مقابل». ويذكر أيضًا أن للجزيرة ذكرًا في تاريخ المستوطنات الأوروبية، إذ لجأ إليها البارون كنيبهاوزن، المقيم الهولندي في البصرة، «مع نحو خمسين من الأتباع العازمين». ويعرّفه المحقق بأنه «وكيل الشركة الهولندية في البصرة».

ويوضح المحقق أن القناة «من القنوات الجوفية المعروفة في إيران بالقنوات أو «الكاريز»، وفي عُمان والإمارات بالأفلاج».

ويصف المؤلف القلعة بأنها «مبنيّةٌ بالحجر في الغالب، لها حصنٌ عند كلٍّ من زواياها الأربع». ويضيف المحقق أن القلعة «هولندية البناء»، وأن في الجزيرة «دَيرٌ نسطوريٌّ يعود إلى القرون الأولى للميلاد كُشف في القرن العشرين». ويصحّح ظنّ المؤلف في المغارات المنحوتة في جنوب الجزيرة، فهي «مدافن لا مساكن كما ظنّ المؤلف».

## لؤلؤ البحرين

ويقول هيود إن البحرين لا تشتهر «إلا بمغاص اللؤلؤ، وببعض عيون الماء العذب في قاع البحر». ويضيف: «وأُخبرتُ أنّ اللآلئ أجود من لآلئ سيلان وأشدّ استدارة». ويعرّف المحقق تلك العيون بأنها «المعروفة في البحرين بالكواكب، كعين «القوع» وغيرها».

## البصرة

وفي البصرة يذكر هيود روايتين عن نشأتها. ويردّهما المحقق: «كلا القولين لا يصحّ: فالبصرة مدينةٌ إسلاميةٌ أسّسها عتبة بن غزوان بأمر عمر بن الخطاب رضي الله عنه سنة 14هـ أو 16هـ».

ويقول هيود إن نهرًا صغيرًا يقسمها، وإن محيطها «ثمانية أميالٍ كاملة»، لكن «لا يزيد المبنيّ منها على نصف المساحة الداخلة فيه». ويصف المؤلف المدينة بأن «القسم الأكبر من المساحة بين النهر والسور لا تشغله إلا البساتين ومزارع النخيل». ويقول إنها «صمدت مرّتين أمام ملوك الفرس، ولم يأخذها كريم خان إلا بعد حصارٍ طويل». ويذكر أن المقيم البريطاني كان له إسطبل «من أربعين أو خمسين من أجود الخيل العربية التي رأيتها في حياتي». ويشهد لأهل البصرة: «لم نلقَ قطّ داخل الأسوار أدنى مضايقةٍ أو قلّة أدب».

## خاتمة

يرى هيود مسقط بعين ضابطٍ يحصي المدافع والسفن، لكنه لا يملك إلا أن يعجب بحيويتها التجارية وتسامح أهلها، ويحفظ في دفتره امرأةً قروية أبت أن تأخذ ثمن خبزها. وتأتي حواشي المحقق لتضبط الأسماء والأنساب، فتصير الصفحات شهادةً موثوقة على مسقط في مطلع القرن التاسع عشر.

## المصدر

- الكتاب: «رحلة في الخليج العربي والطريق البري من الهند إلى إنجلترا (1817)»، تأليف: الملازم وليم هيود (William Heude)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثالث «مسقط والصعود في الخليج العربي إلى البصرة»، ص 32–69 (السفينة وركّابها ص 34؛ الوصول إلى مسقط ووصفها ص 37–38؛ الأسواق والمذهب الإباضي ص 38–40؛ الرحلة إلى الداخل ص 45؛ العاصفة في المرسى ص 46–47؛ مسقط سوقًا ص 47–48؛ تاريخ مسقط وتصحيحات المحقق ص 48–50؛ الإمام ص 50؛ مغادرة مسقط ص 51؛ خرج ص 63–65؛ البحرين ص 65–66؛ البصرة ص 68–69).
- الصورة من الفصل الرابع، ص 76.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`09-basra-1663-godinho`,`23-muscat-1816-buckingham`,`29-shiraz-persepolis-basra-valentyn`]},{slug:`09-basra-1663-godinho`,title:`البصرة سنة 1663: مرفأٌ يأتيه كلّ طيّبٍ من الشرق والغرب`,author:`الأب مانويل غودينيو اليسوعي`,category:`التاريخ`,categorySlug:`history`,date:`2026-09-22`,cover:`articles/09/1.webp`,excerpt:`في سنة 1663 عاد الأب اليسوعي البرتغالي مانويل غودينيو من الهند إلى البرتغال من طريقٍ «جديد» يجمع البر والبحر، فمرّ بمسقط وبندر عباس وهرمز، ثم صعد إلى البصرة، ومنها مضى في الصحراء.`,tags:[`البصرة`,`التجارة`],sample:!1,book:`الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)`,coverCaption:`«Delineatio Regionis Bassora cum Pagis»: خريطة نواحي البصرة وقراها وجزرها، تظهر فيها مدينة البصرة ودير الكرمليين الحفاة، وملتقى دجلة والفرات عند القرنة (صورة أضافها المحقق) — المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 90`,era:`1663`,eraSort:1663,words:1582,minutes:8,body:`في سنة 1663 عاد الأب اليسوعي البرتغالي مانويل غودينيو من الهند إلى البرتغال من طريقٍ «جديد» يجمع البر والبحر، فمرّ بمسقط وبندر عباس وهرمز، ثم صعد إلى البصرة، ومنها مضى في الصحراء. وقد اختار المحقق من كتابه الفصول المتعلقة بالخليج العربي، فترجمها في «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)». وفي الفصل السادس عشر يخصّ غودينيو البصرة بوصفٍ مفصّل، يبدو فيه مأخوذًا بحيويتها التجارية وبساتين نخلها.

## مدينةٌ من كل الأمم

يبدأ غودينيو بالحديث عن سكّان المدينة: «وهي كثيرة السكّان جدًّا، يزيد أهلها على مئة ألف بيت، من العرب والترك والفرس والأرمن واليعاقبة والصابئة والهنود، ومن كلّ أمّة، يأتونها لأجل التجارة مع الهند». ويصف أبنيتها بأنها في الغالب من الطين المخلوط بالقار، «وهو صلبٌ حتى لَيبدو آجرًّا»، أما بيوت الأغنياء فأساساتها من الحجر يجلبونه من فارس، إذ ليس في أرض البصرة حجر. ويذكر أن فيها نحو خمسين مسجدًا، وأن المدينة محاطة بأسوار عالية من الطين.

<figure class="art-fig"><img src="articles/09/1.webp" alt="خريطة قديمة لنواحي البصرة وقراها وجزرها، كما وردت في الكتاب" width="1600" height="1287" loading="lazy" /><figcaption><span class="fig-cap">«Delineatio Regionis Bassora cum Pagis»: خريطة نواحي البصرة وقراها وجزرها، تظهر فيها مدينة البصرة ودير الكرمليين الحفاة، وملتقى دجلة والفرات عند القرنة (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، ص 90</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: نقشٌ على النحاس، بين 1650 و1689، المتحف البريطاني (1898,0725.8.1475)</span></figcaption></figure>

ويعود المحقق إلى البصرة القديمة التي يذكرها المؤلف، فيعرّف مؤسسها عتبة بن غزوان المازني رضي الله عنه، ويصحح بأنه قاد في خلافة عمر بن الخطاب رضي الله عنه الجيش الذي فتح الأُبُلّة سنة 635م، وهو الذي اختطّ البصرة.

## أقفالٌ من خشب

من الملاحظات الطريفة في النص أن الخشب في البصرة قليل جدًّا، يأتيها كله من الهند ويباع بالذراع، وكذلك الحديد، «ولهذا يكثرون من استعمال المفاتيح والأقفال من الخشب، وهو أمرٌ ظريفٌ جدًّا». ويصف شوارعها الكثيرة المسقوفة، وفيها دكاكين الصنّاع ومتاجر التجّار. ويروي أنه رأى في سوقها أول مرة الجراد يُباع، والناس يتخاطفونه، يطبخونه في الماء والملح، ويحملونه زادًا مجففًا إذا ركبوا البحر، ويعترف بأنه أكله فوجده طيّبًا.

## «أمتع نزهةٍ في الدنيا»

يبلغ إعجاب غودينيو ذروته حين يصف ضواحي البصرة: «والخروج من البصرة، في رأيي، أمتع نزهةٍ في الدنيا كلّها». ويمضي في الوصف: فأنت تسير، برًّا أو بالقارب في النهر، في ظلال الأشجار، «ترى النخيل الأخضر، والبساتين العظيمة، والحدائق النضرة، والأزهار الجميلة». ويرى أن الدخول ليس دون الخروج بهجةً؛ فإذا بلغ المرء الماء العذب «لم تقع العين على ضفّتي النهر إلّا على نخيلٍ متّصلٍ وأشجارٍ متتابعة».

<quote by="الأب مانويل غودينيو اليسوعي" source="«الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»">وهي كثيرة السكّان جدًّا، يزيد أهلها على مئة ألف بيت، من العرب والترك والفرس والأرمن واليعاقبة والصابئة والهنود، ومن كلّ أمّة، يأتونها لأجل التجارة مع الهند</quote>

## أدلّاء يعرفون النهر من رائحة الطين

يصف المؤلف المرفأ بأنه «آمنٌ جدًّا، وواسعٌ»، فيه عمقٌ كافٍ لرسوّ السفن الكبيرة على امتداد أربعة عشر فرسخًا، لكن الدخول ليس سهلًا؛ فلا بد للسفن من أدلّاء يُؤتى بهم من جزيرة خارك. ويشرح أن في وسط المصبّ جزيرتين صغيرتين تتفرّع حولهما المجاري، وأن مجرى «نهر البصرة» وحده فيه عمقٌ للسفن الكبيرة، وقد جعلوا له علامات يسمّونها «البُويات». ثم يضيف جملةً تختصر خبرة الملّاحين: «ومن الأدلّاء من بلغ من الحذق أن يعرف في أيّ نهرٍ هو من رائحة الطين». وينبّه المحقق إلى أن مجاري المنطقة تغيّرت كثيرًا منذ ذلك الحين.

## أغنى مرافئ ذلك البحر

يعدّد غودينيو ما تحمله إلى البصرة «أربعون سفينةً أو أكثر من الهند» كل سنة: الثياب الرقيقة، والحديد، والخشب، والفلفل، والعنبر، والقرفة، والقرنفل، وجوز الطيب، واللبان الجاوي وغيرها، ويذكر أنها تجد منفذًا إلى تركيا ومنها إلى إيطاليا وفرنسا. ولا تأتيها بضائع الهند وحدها، بل بضائع فارس وأرمينية والشام وغيرها، ولذلك يقول: «وفي رأيي أنّ البصرة أغنى مرافئ ذلك البحر، لأنّ إليها يأتي كلّ طيّبٍ من الغرب والشرق».

ويصف تجّارها بأنهم «بلغوا من سعة المال أن لو جاءتها مئتا سفينة لأعطوها كلّها حمولتها في شهر». ومن بضائع البلد نفسه صناديق مربّى السفرجل، والتمر الكثير، وأكثر اللؤلؤ الصغير الذي يُغاص عليه في البحرين.

## التمر: قوت العرب جميعًا

يخصّ المؤلف التمر بفقرةٍ ممتعة: فبعضه يُجنى حين يبدأ يحمرّ، فيُطبخ في قدورٍ كبيرة ثم يجفف في الشمس حتى يصير صلبًا حلوًا، ومن بعضه يصنعون الدبس، وأكثره يتركونه حتى ينضج ويكبسونه ويدّخرونه، «وهو قوت العرب جميعًا».

ويروي كيف عرف في سوق البصرة سرّ النخل: رأى طلع النخل يُباع وهو في الزهر، فسأل عنه، فأجابوه بأنه زهر النخيل الذكور الذي لا تثمر الإناث بدونه. ويشرح المحقق أن هذا هو «التنبيت» أو «التأبير» المعروف عند أهل النخل منذ القدم.

## فرسانٌ ونهران

ويصف غودينيو أهل البصرة بأنهم «فرسانٌ عظام»، تقام كل يوم بعد الظهر مطاردة عامة في ساحات معيّنة يحضرها الأعيان والجند بخيولهم. ثم يتحدث عن النهرين العظيمين، دجلة والفرات، اللذين يجعلان ما على ضفافهما صالحًا للسكنى، وهما صالحان للملاحة إلى «بابل»، ويريد بها بغداد كما يبيّن المحقق، بمراكب كبيرة عريضة مسطّحة تحمل بضاعة كثيرة، «وفي الصعود تُجرّ بالحبال، وفي النزول بالمجذاف والشراع».

## بساتين على أبواب البيوت

يقول غودينيو إن أكثر شوارع البصرة «صالحةٌ للملاحة بجداول تتفرّع من الفرات»، تسقي البساتين والحدائق وتمدّ البيوت بالماء، «إذ تجري عند أبوابها». ويصف البساتين بأنها «نضرةٌ بهيجة، ملأى بالأشجار والأزهار والورود والآس». ويضيف: «وما في إسبانيا فاكهةٌ إلّا وتوجد في تلك المدينة بوفرة، وفوق ذلك تمرٌ كثير».

ويذكر أن من بضائع البلد نفسه «صناديق مربّى السفرجل، وتمرٌ كثير، وأكثر اللؤلؤ الصغير»، الذي يغوص عليه في البحرين «عربُ القطيف والبصرة».

## الصابئة المندائيون

يذكر غودينيو جماعة يسمّيها البرتغاليون «نصارى القدّيس يوحنّا»، ويقول إن أهل تلك النواحي يسمّونهم «الصابئة». ويصحّح المحقق التسمية: الصابئة المندائيون «جماعةٌ دينيةٌ قديمة في جنوب العراق والأهواز، يعدّون يحيى بن زكريا (يوحنّا المعمدان) آخر أنبيائهم وأعظمهم». ويضيف أن البرتغاليين سمّوهم نصارى القدّيس يوحنّا، «وهي تسميةٌ غير دقيقة، فليسوا نصارى».

ويقول المؤلف إن معاشهم «من كلّ الحِرف اليدوية، ولا سيّما الصياغة، من الذهب والفضّة». ويؤيّد المحقق ذلك: «وقد اشتهر الصابئة المندائيون في العراق بصياغة الذهب والفضّة، ولا سيّما في بغداد». ويذكر في حاشية أخرى أنهم يشترطون في التعميد الماء الجاري، «ويسمّون كلّ نهرٍ «يردنا»، أي الأردنّ».

## البصرة بين الأمراء والعثمانيين

يقول غودينيو إن البصرة كان لها سنين كثيرة «ملوكٌ من أهلها»، وإن الترك أخذوها سنة 1547 في عهد ملك يسمّيه «محمد بن سنان». ويصحّح المحقق: «والمعروف أنّ أمير البصرة البدوي راشد بن مغامس خضع للعثمانيين سنة 1534، فصارت البصرة ولايةً عثمانيةً سنة 1538».

ويذكر المؤلف أن الترك أرادوا أن يصيروا سادة المضيق، فأرسلوا القوادس إلى القطيف والبحرين ومسقط. ويوضح المحقق أن المقصود حملات الأسطول العثماني في منتصف القرن السادس عشر، «ومنها حملة پيري ريس التي أخذت مسقط بعد حصارٍ دام شهرًا، ثم حاصرت هرمز ولم تأخذها».

ويشرح المحقق حال البصرة في زمن الرحلة: ففي سنة 1596 باع الوالي العثماني ولاية البصرة لرجل من أهلها اسمه أفراسياب، «فبقيت البصرة نحو سبعين سنة ولايةً وراثيةً في أفراسياب وذرّيته، تحت سيادة العثمانيين الاسمية، إلى سنة 1668».

ويقول غودينيو إن الباشا «يستطيع أن يُخرج إلى الميدان عشرة آلاف فارس، وأربعين ألف راجل». ويضيف أنه رأى له في دار الصناعة ما يجهّز به «مئة ترّادة، وثلاث قوادس أو أربعًا».

## من أين ينبع النهران؟

يقول المؤلف إن الفرات ينبع «من بحيرةٍ تسمّى «چيلدير گول»». ويصحّح المحقق: «والصحيح أنّ الفرات لا ينبع منها، بل يتكوّن من التقاء فرعين في شرق تركيا، هما «قره صو» أو الفرات الغربي، و«مراد صو» أو الفرات الشرقي».

وفي دجلة يذكر غودينيو أن الميديين سمّوه «تيگريس»، «ومعناه عندهم السهم». ويشرح المحقق أصل الاسم: «أصل اسم دجلة في اليونانية Tigris من الفارسية القديمة «تيگرا»، ومن الأكّادية «إديگلات»، ومنه جاء الاسم العربي «دجلة»». ويذكر أن دجلة ينبع «من بحيرة هزار في جبال طوروس قرب ألازيغ».

ويقول المؤلف إن النهرين يلتقيان عند جزيرة القرنة، وإن تيار الفرات «من القوّة بحيث يُحسّ به على عشرين فرسخًا قبل أن تبلغ المراكب مصبّه». ويعرّف المحقق القرنة بأنها «بلدةٌ في جنوب العراق، على نحو 74 كم شمال غرب البصرة، عند ملتقى دجلة والفرات حيث يتكوّن شطّ العرب».

## صناعة التمر

ويفصّل غودينيو طرق إصلاح التمر: «فبعضه يجنونه حين يبدأ يحمرّ، فيطبخونه على النار في قدورٍ كبيرة، ثم يجفّفونه في الشمس حتى يصير صلبًا». ويقول إنهم يسمّون هذا «كونگوس»، «وهو لذيذٌ حلوٌ جدًّا». ويذكر أنهم يصنعون من بعضه المعقود والخلّ والدبس، وأن أكثره يُترك حتى ينضج، ثم يُكبس ويُدّخر قوتًا.

ويقول عن المناخ إنه «بين الحسن والسيّئ: ففي الصيف حرٌّ مفرط». ويذكر أن البصرة يأتيها من البلاد التي في أعلى النهر «قمحٌ وشعيرٌ وبقولٌ كثيرة، فتجعل تلك المدينة وافرة الأقوات».

## أول قائدٍ برتغالي في النهرين

ويذكر المؤلف أن أوّل قائد برتغالي دخل النهرين بقوّة مسلّحة كان بلشيور دي سوزا، جاء نجدةً لملك البصرة على صاحب «الجزائر». ويعرّف المحقق الجزائر بأنها «إمارة «الجزائر» في منطقة الأهوار شمال البصرة». ويضيف: «كان البرتغاليون قد تدخّلوا في البصرة سنة 1529 في عهد حاكم الهند نونو دا كونيا».

## الأرض بين النهرين

ويقول غودينيو إن النهرين «يجعلان جزءًا من البادية صالحًا للسكنى، وهو ما على ضفافهما». ويصف الأرض بأنها «خصبةٌ جدًّا بالقمح والشعير، لأنّها مقطّعةٌ بقنواتٍ من الفرات تسقيها وتخصبها». ويقول عن النهرين: «ومياههما دائمًا عكرةٌ موحلة، والسمك فيهما طريٌّ طيّب الطعم».

## خاتمة

يرسم الأب غودينيو صورةً لبصرة القرن السابع عشر: مدينة من كل الأمم، وسوقٌ يلتقي فيه الشرق بالغرب، وبساتين نخلٍ لا تنتهي، وأدلّاء يقرؤون الماء بأنوفهم. وتقف حواشي المحقق إلى جانب النص، فتصحّح التواريخ، وتعرّف الجماعات والأسماء، وتنبّه إلى ما تغيّر من معالم المكان.

## المصدر

- الكتاب: «الخليج العربي في رحلة الأب غودينيو من الهند إلى البرتغال (1663)»، تأليف: الأب مانويل غودينيو اليسوعي (Manuel Godinho)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل السادس عشر «وصف البصرة ومرفئها، ومن أين ينبع النهران دجلة والفرات وأين ينتهيان، وكيف تُحمل عليهما توابل الهند إلى تركيا وفرنسا وإيطاليا»، ص 84–95 (السكان والأبنية ص 84؛ المساجد والأقفال والجراد والنزهة ص 85؛ المرفأ والأدلّاء والسفن ص 86؛ التجّار والتمر والتأبير ص 87؛ الفروسية والصابئة ص 88–91؛ الأمراء والعثمانيون وأفراسياب ص 91–92؛ منابع النهرين ص 92–93؛ القرنة ص 94؛ النهران والمراكب والبرتغاليون ص 95؛ الخريطة ص 90).
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`08-muscat-1817-heude`,`21-kuwait-1916-stuhlmann`,`25-basra-ahwaz-1831-stocqueler`]},{slug:`10-bandarabbas-muscat-aucher-eloy`,title:`على مركبٍ مكشوف: من بندر عباس إلى مسقط مع عالم النبات أوشيه-إلوا سنة 1838`,author:`بيير مارتان ريمي أوشيه-إلوا`,category:`المخطوطات والرحالة`,categorySlug:`manuscripts-travelers`,date:`2026-09-21`,cover:`articles/10/1.webp`,excerpt:`في الثاني والعشرين من فبراير 1838 وصل عالم النبات الفرنسي بيير مارتان ريمي أوشيه-إلوا إلى بندر عباس، وفي حقيبته أوراقٌ لتجفيف النبات، وفي نيّته أن يبلغ مسقط ومنها داخل عُمان.`,tags:[`بندر عباس`,`مسقط`,`مطرح`,`المراكب`],sample:!1,book:`رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)`,coverCaption:`رسم هندسي لمركب «البغلة» (Baggala or Budgerow)، من المراكب الشراعية الكبيرة في الخليج العربي وبحر العرب، بمقاطعه ومسقطه (صورة أضافها المحقق) — المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 42`,era:`1838`,eraSort:1838,words:1781,minutes:9,body:`في الثاني والعشرين من فبراير 1838 وصل عالم النبات الفرنسي بيير مارتان ريمي أوشيه-إلوا إلى بندر عباس، وفي حقيبته أوراقٌ لتجفيف النبات، وفي نيّته أن يبلغ مسقط ومنها داخل عُمان. وقد ترجم المحقق القسم الخاص بالخليج العربي وعُمان من رحلاته في كتاب «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)». والفصل الثالث منه يومياتٌ قصيرة، مكتوبة يومًا بيوم، عن أسبوعين بين بندر عباس وقشم وساحل الباطنة، فيها البحر والريح، والنخيل والطيور، وأهل المراكب.

## بندر عباس: مدينة صغيرة وتمرٌ ممتاز

يفتتح أوشيه-إلوا يومياته بوصفٍ موجز: «بندر عباس (Bender-Abassy) أصغر من بوشهر؛ والمدينة بمعناها الحقيقي مسوّرة، فيها سوق ليس حسن التزويد جدًّا، ونحو مئة بيت». وعلى ربع ساعة منها قرية صغيرة يسكنها الصيادون، وأكثر السكان عرب، ومعهم عددٌ من الفرس والبانيان.

<figure class="art-fig"><img src="articles/10/1.webp" alt="رسم هندسي قديم لمركب البغلة، من المراكب الشراعية الكبيرة في الخليج العربي" width="1600" height="1224" loading="lazy" /><figcaption><span class="fig-cap">رسم هندسي لمركب «البغلة» (Baggala or Budgerow)، من المراكب الشراعية الكبيرة في الخليج العربي وبحر العرب، بمقاطعه ومسقطه (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 42</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: جون إيدي (John Edye)، في مجلة الجمعية الآسيوية الملكية لبريطانيا العظمى وأيرلندا، المجلد الأول، 1834</span></figcaption></figure>

ويضع المحقق المدينة في سياقها: فبندر عباس ميناءٌ على الساحل الشمالي لمضيق هرمز قبالة شبه جزيرة مسندم، كانت تُعرف قديمًا باسم «جَمْرون»، ثم سُمّيت باسم الشاه عباس الأول بعد سنة 1622، «وكانت من سنة 1794 إلى سنة 1868 في يد سلطنة مسقط بعقد إيجار مع حكومة فارس». ولذلك يقول المؤلف إن بندر عباس «للشيخ سعيد»، وهو الذي يعيّن واليها، ويعرّفه المحقق بأنه السيد سعيد بن سلطان البوسعيدي (1791–1856).

ولعالم النبات عينٌ على الطعام والنبات: حول المدينة بعض النخيل وبساتين يُزرع فيها الفجل الذي تؤكل أوراقه سلطة، والرِّجلة، والبصل. ويقول: «والسمك هو القوت المعتاد للناس بل للحيوانات أيضًا، وهو كثير جدًّا هناك رخيص الثمن»، ويضيف بإيجاز: «والتمر ممتاز». ويشرح المحقق أن الرجلة هي البقلة الحمقاء، وتعرف في الخليج أيضًا باسم الفرفحين.

وينبّه المؤلف إلى أن مناخ بندر عباس في ذلك الوقت من السنة «جيد جدًّا، والماء صالح للشرب تمامًا»، لكن أكثر السكان يفرّون منها في الصيف إلى الجبال المجاورة طلبًا للهواء النقي.

## ضيافة الوالي

بعد أيامٍ قضاها في ترتيب مجموعاته وسلخ الطيور البحرية، عزم أوشيه-إلوا على زيارة الوالي، فيقول: «فأكرم ضيافتي أعظم إكرام». ويصف الديوان: الوالي جالس في زاوية القاعة، ورجال حاشيته على جانبيها، وقد نهض لاستقباله وحين استأذن في الانصراف، وسأله كثيرًا عن فرنسا. ولما أخبره برغبته في الرحيل إلى مسقط في أسرع وقت، «تفضّل فأمر بأن يقلع المركب بعد غد».

## مركبٌ محمّل بورق الآس

في الأول من مارس انتقل بأمتعته إلى مركب الشيخ بعد أن دفع أربعة تومانات أجرة. ويصف المركب بأنه متوسط الحجم، وأشدّ ما ضايقه أنه «غير مسقوف (غير ذي سطح)». ويوضح المحقق أن ذلك يعني سفينةً مكشوفة لا سطح لها يقي الركاب والحمولة، «وهي حال كثير من السفن الشراعية الصغيرة والمتوسطة في الخليج يومئذٍ».

<quote by="بيير مارتان ريمي أوشيه-إلوا" source="«رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»">مدخل المرسى تحميه قلاعٌ رديئة البناء نوعًا ما؛ ولكن في صدره، على أعلى الجبال، قلعة محكمة البناء جدًّا، بناها قديمًا البرتغاليون</quote>

أما الحمولة فطريفة: أكياسٌ مملوءة بأوراق الآس تُصدّر إلى مسقط، وحين سأل عنها علم أنهم يصنعون منها ماءً للغسول. ويضيف المحقق أن ورق الآس كان يُدقّ ويُستعمل في الخليج وجزيرة العرب في غسل الشعر والجسد وتطييبهما، ويُعرف عند العامة باسم «المرسين» أو «الياس».

## يومٌ في قشم

وصل المركب في المساء إلى جزيرة قشم، ولما كان رجاله كلهم من الجزيرة، ولهم فيها نساؤهم، لم يكن بدٌّ من الإقامة. فانتهز عالم النبات الفرصة للتجوّل، وجمع نباتات وأصدافًا متحجّرة من جبالها الجيرية. ويقول: «وفي جزيرة قشم قرى عدة ومزارع نخيل كبيرة»، والقرية الرئيسة فيها سوق، ومنظرها أحسن كثيرًا من بندر عباس. ويعرّف المحقق قشم بأنها أكبر جزر الخليج العربي، مساحتها نحو 1500 كيلومتر مربع. ويذكر المؤلف أن أهلها لا يتكلمون إلا الفارسية، فيستدرك المحقق: «والمعروف أن العربية كانت ولا تزال من لغات أهل قشم وسواحل الخليج الشمالية إلى جانب الفارسية ولهجاتها».

<figure class="art-fig"><img src="articles/10/2.webp" alt="منظر قديم لمسقط من المرسى" width="1024" height="726" loading="lazy" /><figcaption><span class="fig-cap">«مسقط من المرسى» (Muskat from the Harbour) (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 48</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: حفر جون هيفيسايد كلارك (John Heaviside Clark) عن رسم ريتشارد تمبل (Richard Temple)، اللوحة 3 من مجموعة «ستة عشر منظرًا لأماكن في الخليج»، لندن 1813</span></figcaption></figure>

## عبر المضيق

في الثالث من مارس أقلعوا قبل طلوع النهار، فتركوا هرمز على يسارهم، ومرّوا قريبًا جدًّا من لارك، ثم بلغوا قرب جزيرة «سلامة» التي لا يفصلها عن رأس مسندم إلا ممرٌّ ضيق جدًّا. ويتساءل العالم الفرنسي بفضولٍ ظريف: هل في تشابه اسمي مسندم وسلامة بأسماءٍ يونانية مصادفة، أم لهما علاقة بحملة الإسكندر؟

وفي ليلة الخامس من مارس جاءت اللحظة الأصعب: هبّت ريح الشمال فجأة، وصاح الريّس بالملاحين أن ينزلوا الشراع، فأدركتهم العاصفة، ويكتب المؤلف أنه تلقّى «هزّة ظننت حقًّا أنها آخر هزّة في حياتي». ثم أُنزل الشراع أخيرًا واستقام المركب.

## صوت الدفّ على ساحل الباطنة

في صباح السادس من مارس استيقظ أوشيه-إلوا قرب صحار على صوت الدفّ، فقد كانت أيام العيد. ويكتب: «فما إن يقترب المرء من قرية عربية حتى يكون على يقين من أن يسمع صوت الدفّ، وزغاريد النساء العربيات وهنّ يُظهرن فرحهن». ويصف الساحل بأنه «مكسوّ بغابات من النخيل لا تنقطع»، ويذكر أن في صحار قلعة في حال حسنة.

وفي السابع بلغوا بركاء، وفي الثامن كان الجبل يقترب كثيرًا من البحر والنخيل فيه كثير، ومرّوا بصخرةٍ بحرية تسمّى «صفال» قريبة جدًّا من مسقط، «التي لا نلبث أن نراها، ونرى معها ثلاث قرى يمكن عدّها من أرباضها».

## مرسى مسقط وأسطول السيد سعيد

في الفصل التالي يصف أوشيه-إلوا مسقط كما رآها عند وصوله. يقول: «مدخل المرسى تحميه قلاعٌ رديئة البناء نوعًا ما؛ ولكن في صدره، على أعلى الجبال، قلعة محكمة البناء جدًّا، بناها قديمًا البرتغاليون». ويضيف: «والمرسى واسع عميق، محميّ من الرياح كلها».

<figure class="art-fig"><img src="articles/10/3.webp" alt="منظر قديم لمطرح من جهة الشرق" width="1024" height="724" loading="lazy" /><figcaption><span class="fig-cap">«منظر مطرح من جهة الشرق» (A View of Mutra from the East) (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 55</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: حفر جون هيفيسايد كلارك عن رسم ريتشارد تمبل، اللوحة 4 من المجموعة نفسها، لندن 1813</span></figcaption></figure>

ويوضح المحقق أن المقصود «إحدى القلعتين التوأمين على جانبي مرسى مسقط: الجلالي في الشرق والميراني في الغرب». ويذكر أن العُمانيين استعادوها سنة 1650 «في عهد الإمام سلطان بن سيف اليعربي».

ويقول المؤلف إنه كان راسيًا في المرسى «ثلاثة مراكب حربية كبيرة للإمام»، وإن سائر الأسطول «مؤلف من أكثر من عشرين مركبًا بُنيت على الطراز الأوروبي في بومباي، وفي زنجبار». ويعلّق المحقق: «كان للسيد سعيد بن سلطان أسطول كبير، بُني كثير منه في أحواض بومباي، وكان من أقوى أساطيل المحيط الهندي في عصره من غير الأوروبيين». ويذكر أن السيد سعيد كان يومئذٍ في شرق أفريقيا، فقد «استولى على ممباسا سنة 1837 بعد صراع طويل مع أسرة المزاريع، ثم نقل مقرّه إلى زنجبار سنة 1840»، «وكان ابنه السيد ثويني نائبه في عُمان في غيبته».

## حرّ مسقط بلا مبالغة

ويصف المؤلف موقع المدينة: «ومسقط، المبنية كأنها في قمع، عند سفح جبال جرداء محرقة وأمامها، لا يصلها نسيم البحر من أي جهة». لكنه يرى أن ما قيل له من خطر الإقامة فيها مبالغ فيه: «ومع ذلك يبدو أنهم بالغوا كثيرًا فيما وصفوه لي من خطر الإقامة فيها». فقد وجد فيها غرباء يقيمون منذ زمن طويل «وصحّتهم على أحسن ما يرام». ويقول: «وعلى كل حال فأشهر يناير وفبراير ومارس وأبريل محتملة نوعًا ما».

## الحمير والفواكه

ويذكر أوشيه-إلوا من تجارة مسقط: «وتصدّر مسقط إلى فارس كثيرًا من الحمير، وهي ضخمة قوية جدًّا». ويقول إن فواكهها مستحسنة، وإنها من فواكه الهند، كالموز والأنبا. ويشرح المحقق أن الأنبا هو المانجو، «واسمه العربي القديم الأَنْبَج، ويسمى في الخليج «الأمبا» أو «الهمبا» أخذًا عن اسمه الهندي».

## أيام العيد

وخرج المؤلف في نزهة قصيرة في وادٍ قرب المدينة، وكانت أيام العيد: «كان السكان كلهم في أفراح، يلبسون أجمل ثيابهم». ويصف الطبول الطويلة التي يضربونها باليد، والقرن الطويل الذي ينفخون فيه، والتصفيق على إيقاع مصحوب بالغناء. ويعلّق المحقق بأن ما يصفه أشبه «بالفنون الشعبية الجماعية المعروفة في عُمان وسواحل الخليج في الأعياد، كالرزحة والعيالة والمديما وغيرها».

<figure class="art-fig"><img src="articles/10/4.webp" alt="منظر محفور قديم لمرسى مسقط من صخرة الصيادين" width="1024" height="707" loading="lazy" /><figcaption><span class="fig-cap">«مرسى مسقط من صخرة الصيادين» (Muskat Harbour from the Fisher-men's Rock) (صورة أضافها المحقق)</span><span class="fig-src">المصدر: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، ص 49</span><span class="fig-orig">طبيعة الصورة: صورة تاريخية أضافها المحقق إلى الكتاب، وليست من رسوم المؤلف أو صوره</span><span class="fig-orig">أصل الصورة: حفر جون هيفيسايد كلارك عن رسم ريتشارد تمبل، اللوحة 2 من مجموعة «ستة عشر منظرًا لأماكن في الخليج»، لندن 1813</span></figcaption></figure>

ويلاحظ المؤلف أن العرب يرافقون عملهم بالغناء: «فيبدأ أحدهم لحنًا ويجيبه الآخرون؛ وهذا ما يفعلونه وهم يشحنون البضائع ويفرغونها في المرسى». ويقارن المحقق ذلك بأغاني العمل البحرية في الخليج، «ومنها فنّ «الفِجري» المعروف في البحرين والكويت وقطر».

## نباتات الجبال الجرداء

ولأن أوشيه-إلوا عالم نبات، فقد سجّل ما رآه: «ولاحظت في النزهة القصيرة التي قمت بها عددًا قليلًا من النباتات الطريفة». ومنها على الجبال نوع من جنس Crozophora «يبدو لي جديدًا». ويذكر المحقق أن هذا الجنس «يُسمّى بالعربية التَّنُّوم، ومنه أنواع في جزيرة العرب».

## إلى مطرح

وفي الثاني عشر من مارس تهيّأ كل شيء لرحلة المؤلف في الداخل. يقول إن الوكيل الإنجليزي حصل له «على كتب توصية إلى كبار شيوخ الداخل»، ووفّر له دليلًا عربيًّا يتكلّم الفارسية ويعرف داخل البلاد. ويذكر المحقق أن لبريطانيا يومئذٍ معاهدات مع السيد سعيد، «أقدمها المعاهدة التي عقدها والده السيد سلطان بن أحمد مع شركة الهند الشرقية سنة 1798». ولم تكن في مسقط مطايا، فاستأجر المؤلف قاربًا إلى مطرح ليحصل عليها. ويقول إنهم حاذوا الساحل، «وفي كل خليج صغير منه قرى؛ منها «كلبوه» (Kalbou)، وهي قرية حسنة المنظر». ويعرّف المحقق كلبوه بأنها «قرية على الساحل بين مسقط ومطرح».

ويصف مطرح: «ومطرح على كل حال بحجم مسقط، فيها سوق كبير، وأسوار وأبواب محكمة الحراسة». ويضيف: «وحول المدينة بعض البساتين، وماء طيب يُستخرج من الآبار». ويذكر المحقق أن مطرح «كانت قبل النفط مركز التجارة في عُمان، وفيها اليوم أحد أكبر موانئ المنطقة، وسوقها القديم معروف».

## خاتمة

هذه الصفحات القليلة تحمل نكهة السفر في الخليج العربي قبل البخار: مركبٌ مكشوف ينتظر أن يودّع بحّارته أهلهم في قشم، وحمولةٌ من ورق الآس، وريحٌ تهدأ نهارًا وتعصف ليلًا، وقرى تستقبل العيد بالدفوف. وقد رافق المحقق النص بحواشٍ تعرّف الأماكن والنباتات والأسماء المحلية، وبصورٍ قديمة لمراكب الخليج ولمسقط ومطرح، فصارت اليوميات نافذةً واضحة على ذلك الزمن.

## المصدر

- الكتاب: «رحلة عالم النبات أوشيه-إلوا إلى عُمان وبندر عباس (1838)»، تأليف: بيير مارتان ريمي أوشيه-إلوا (Pierre Martin Rémi Aucher-Éloy)؛ تحقيق: أحمد علي المرر؛ مؤسسة الكود لنشر الكتب.
- الصفحات: الفصل الثالث «بندر عباس وقشم، والإبحار إلى صحار وبركاء (22 فبراير – 8 مارس 1838)»، ص 38–46 (بندر عباس ص 38–39؛ زيارة الوالي ص 40؛ المركب وورق الآس ص 42؛ قشم ص 43؛ عبور المضيق والعاصفة ص 44؛ صحار وبركاء والوصول إلى مسقط ص 46)؛ والفصل الرابع «في مسقط ومطرح (8 – 13 مارس 1838)»، ص 47–56 (المرسى والقلاع والأسطول ص 47؛ الحرّ ص 49؛ الحمير والفواكه والعيد ص 51–52؛ النباتات ص 53؛ كتب التوصية ومطرح ص 54؛ المعاهدة ص 56). والصور الثانية والثالثة والرابعة من الفصل الرابع، ص 48 و55 و49.
- أرقام الصفحات بحسب ملف الكتاب المحوَّل من DOCX إلى PDF.
- تحقّقنا من مواضع المقتبس في ملف PDF، وما يمتد منه على صفحتين نُسب إلى صفحة بدايته.`,related:[`23-muscat-1816-buckingham`,`24-muscat-arabia-1663-godinho`,`29-shiraz-persepolis-basra-valentyn`]}],categories:[{name:`التاريخ`,slug:`history`,blurb:`قراءات في تاريخ الخليج والمنطقة.`},{name:`التراث`,slug:`heritage`,blurb:`العمارة والحِرف والعادات والذاكرة الشعبية.`},{name:`المخطوطات والرحالة`,slug:`manuscripts-travelers`,blurb:`عن المخطوطات وكتب الرحلات والوثائق.`},{name:`الاقتصاد والتجارة`,slug:`economy-trade`,blurb:`الأسواق والعملات والموانئ وتجارة اللؤلؤ.`}],tags:[{name:`الكويت`,slug:`الكويت`,count:3},{name:`البصرة`,slug:`البصرة`,count:9},{name:`الشارقة`,slug:`الشارقة`,count:1},{name:`رأس الخيمة`,slug:`رأس-الخيمة`,count:3},{name:`البحرين`,slug:`البحرين`,count:8},{name:`مسقط`,slug:`مسقط`,count:10},{name:`مطرح`,slug:`مطرح`,count:2},{name:`بومباي`,slug:`بومباي`,count:3},{name:`التجارة`,slug:`التجارة`,count:6},{name:`الأحساء`,slug:`الأحساء`,count:2},{name:`الخيل`,slug:`الخيل`,count:2},{name:`الأهواز`,slug:`الأهواز`,count:1},{name:`اللؤلؤ`,slug:`اللؤلؤ`,count:9},{name:`هرمز`,slug:`هرمز`,count:7},{name:`شيراز`,slug:`شيراز`,count:1},{name:`أبوظبي`,slug:`أبوظبي`,count:2},{name:`لنجة`,slug:`لنجة`,count:1},{name:`بوشهر`,slug:`بوشهر`,count:2},{name:`البريمي`,slug:`البريمي`,count:1},{name:`نزوى`,slug:`نزوى`,count:3},{name:`الجبل الأخضر`,slug:`الجبل-الأخضر`,count:2},{name:`الأفلاج`,slug:`الأفلاج`,count:2},{name:`صحار`,slug:`صحار`,count:1},{name:`الذيد`,slug:`الذيد`,count:1},{name:`الغوص`,slug:`الغوص`,count:2},{name:`بنو كعب`,slug:`بنو-كعب`,count:1},{name:`الفلاحية`,slug:`الفلاحية`,count:1},{name:`خارك`,slug:`خارك`,count:1},{name:`المراكب`,slug:`المراكب`,count:2},{name:`لار`,slug:`لار`,count:1},{name:`الخانات`,slug:`الخانات`,count:1},{name:`النبات`,slug:`النبات`,count:1},{name:`ملاقف الهواء`,slug:`ملاقف-الهواء`,count:2},{name:`صير بني ياس`,slug:`صير-بني-ياس`,count:2},{name:`المسح البحري`,slug:`المسح-البحري`,count:1},{name:`أوال`,slug:`أوال`,count:1},{name:`شط العرب`,slug:`شط-العرب`,count:1},{name:`غمرون`,slug:`غمرون`,count:1},{name:`البرتغاليون`,slug:`البرتغاليون`,count:1},{name:`بندر عباس`,slug:`بندر-عباس`,count:1}],photos:[{slug:`pearl-divers-1908`,group:`pearls`,file:`photos/pearl-divers-1908.webp`,thumb:`photos/pearl-divers-1908-sm.webp`,w:800,h:542,title:`Arab pearl divers in the Persian Gulf.jpg`,caption:`Arab pearl-divers at work in the Persian Gulf from: George Frederick Kunz, The Book of the Pearl`,date:`1908`,author:`George Frederick Kunz`,credit:`http://www.qdl.qa/sites/default/files/styles/standard_content_image/public/arab_pearl-divers_at_work_in_the_persian_gulf_resized.jpg?itok=O5gNsX6C`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Arab_pearl_divers_in_the_Persian_Gulf.jpg`,label:`غواصو اللؤلؤ في الخليج`,groupLabel:`اللؤلؤ`,kind:`photo`},{slug:`pearl-fishery-1881`,group:`pearls`,file:`photos/pearl-fishery-1881.webp`,thumb:`photos/pearl-fishery-1881-sm.webp`,w:829,h:650,title:`The Pearl Fishery in the Persian Gulf - The Graphic 1881.jpg`,caption:`The Pearl Fishery in the Persian Gulf. Illustration for The Graphic, 1 October 1881. 1. Sidi Arab Diver with. 2. The Mosquito Fleet at anchor. 3. The divers at work below. 4. Apparatus used by the divers. The Graphic, volume XXIV, no 618, October 1, 1881.`,date:`1 October 1881`,author:`Unidentified engraver`,credit:`The Graphic`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:The_Pearl_Fishery_in_the_Persian_Gulf_-_The_Graphic_1881.jpg`,label:`مغاصات اللؤلؤ في الخليج (رسم صحفي)`,groupLabel:`اللؤلؤ`,kind:`art`},{slug:`muscat-harbor-1903`,group:`ports`,file:`photos/muscat-harbor-1903.webp`,thumb:`photos/muscat-harbor-1903-sm.webp`,w:1400,h:1088,title:`Muscat harbor.jpg`,caption:`This is an image of Muscat harbor, taken from a book published in 1903 (PD). Refer to page 744 in the book for the image.`,date:`1903`,author:`Hermann Vollrat Hilprecht, Immanuel Benzinger, Fritz Hommel, Peter Jensen, Peter Christian Albrecht Jensen, Georg Steindorff`,credit:`https://archive.org/details/bub_gb_6i4wAAAAYAAJ`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Muscat_harbor.jpg`,label:`ميناء مسقط`,groupLabel:`الموانئ`,kind:`photo`},{slug:`muskat-harbour-1813`,group:`ports`,file:`photos/muskat-harbour-1813.webp`,thumb:`photos/muskat-harbour-1813-sm.webp`,w:1024,h:707,title:`No. 2. Muskat Harbour from Fishermens Rock RMG PW4794.jpg`,caption:`Plate 2 of Sixteen Views of Places in the Persian Gulph... Forces... Against the Arabian Pirates No. 2 'Muskat Harbour from Fishermens Rock'`,date:`1813`,author:`John Heaviside Clark / After Richard Temple`,credit:`Royal Museums Greenwich: identifier 23083 (PW4794 — National Maritime Museum) . https://prints.rmg.co.uk/products/no-2-muskat-harbour-from-fishermens-rock-pw4794`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:No._2._Muskat_Harbour_from_Fishermens_Rock_RMG_PW4794.jpg`,label:`ميناء مسقط (لوحة محفورة)`,groupLabel:`الموانئ`,kind:`art`},{slug:`mascate-1680`,group:`ports`,file:`photos/mascate-1680.webp`,thumb:`photos/mascate-1680-sm.webp`,w:1400,h:1136,title:`AMH-6607-KB View of the city of Mascate.jpg`,caption:`View of the city of Maskate. Maskate. Key: 1. Vis-marckt. / 2 Strant versien met veel Koopmans waren. / 3. Hollantse Scheepen. / 4. Streckte op een klip tot bevrijdingh van de Star. / 5 Stercktens op bergen tegen aen loop der Arabieren.`,date:`circa 1680`,author:`Jacob van Meurs`,credit:`This is an image from the Atlas of Mutual Heritage and the Koninklijke Bibliotheek, the Dutch National Library. The metadata of this file is public domain under a Creative Commons Public Domain Dedication (CC-ZERO). This permission has been`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:AMH-6607-KB_View_of_the_city_of_Mascate.jpg`,label:`منظر مدينة مسقط (حفر قديم)`,groupLabel:`الموانئ`,kind:`art`},{slug:`doha-1904`,group:`towns`,file:`photos/doha-1904.webp`,thumb:`photos/doha-1904-sm.webp`,w:771,h:410,title:`Olddoha2-771x410.jpg`,caption:`Old city of Doha in Qatar by Hermann Burchardt, January 1904.`,date:`1904-01`,author:`Hermann Burchardt`,credit:`http://dohanews.co/wp-content/uploads/2013/12/olddoha2-771x410.jpg`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Olddoha2-771x410.jpg`,label:`الدوحة القديمة`,groupLabel:`المدن والأسواق`,kind:`photo`},{slug:`doha-1908`,group:`towns`,file:`photos/doha-1908.webp`,thumb:`photos/doha-1908-sm.webp`,w:654,h:384,title:`Doha1908.jpg`,caption:`Picture of Doha by Hermann Burchardt. Obtained from Volume II of the Gazetteer of the Persian Gulf , ’Omān and Central Arabia (Government of India: 1908) compiled by John Gordon Lorimer`,date:`Picture taken in 1904; published in 1908`,author:`Burchardt, Hermann`,credit:`http://www.qdl.qa/en/archive/81055/vdc_100023515713.0x00008b`,licence:`CC0`,licenceUrl:`http://creativecommons.org/publicdomain/zero/1.0/deed.en`,source:`https://commons.wikimedia.org/wiki/File:Doha1908.jpg`,label:`الدوحة`,groupLabel:`المدن والأسواق`,kind:`photo`},{slug:`joassamee-dow-1837`,group:`dhows`,file:`photos/joassamee-dow-1837.webp`,thumb:`photos/joassamee-dow-1837-sm.webp`,w:819,h:845,title:`A Joassamee Dow in full chase.jpg`,caption:`A Joassamee dow in full chase (An Al Qasimi dhow in full chase). From the book: THE REMARKABLE HISTORY OF THE JOASSAMEE PIRATES OF THE PERSIAN GULF Containing a description of their chief town Ras El Khyma and an account of the capture of several European vessels and the barbarous treatment of their crews With interesting details of the several expeditions sent against them and their final submiss`,date:`1837`,author:`Charles Ellms`,credit:`Ellms, Charles (1837). The Pirates Own Book, Or, Authentic Narratives of the Lives, Exploits, and Executions of the Most Celebrated Sea Robbers: With Historical Sketches of the Joassamee, Spanish, Ladrone, West India, Malay, and Algerine Pi`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:A_Joassamee_Dow_in_full_chase.jpg`,label:`سفينة شراعية (رسم من كتاب)`,groupLabel:`السفن`,kind:`art`},{slug:`dhow-nestor-sander`,group:`dhows`,file:`photos/dhow-nestor-sander.webp`,thumb:`photos/dhow-nestor-sander-sm.webp`,w:400,h:231,title:`CAL Arabia Launch and Dhow by Nestor Sander 11 52.jpg`,caption:`CAL Arabia Launch and Dhow`,date:`between 1930 and 1950`,author:`Nestor Sander`,credit:`Saudi Aramco`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:CAL_Arabia_Launch_and_Dhow_by_Nestor_Sander_11_52.jpg`,label:`قارب ومركب شراعي`,groupLabel:`السفن`,kind:`photo`},{slug:`bahrain-fort-1870`,group:`forts`,file:`photos/bahrain-fort-1870.webp`,thumb:`photos/bahrain-fort-1870-sm.webp`,w:1400,h:934,title:`Old Portuguese Fort, Bahrein.png`,caption:`The Old Portuguese Fort in Bahrain in 1870`,date:`1870-01-01`,author:`Unknown author`,credit:`Qatar Digital Library / British Library`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Old_Portuguese_Fort,_Bahrein.png`,label:`القلعة البرتغالية في البحرين`,groupLabel:`القلاع`,kind:`photo`},{slug:`hawar-fort-1938`,group:`forts`,file:`photos/hawar-fort-1938.webp`,thumb:`photos/hawar-fort-1938-sm.webp`,w:795,h:513,title:`Hawar Fort 1938.png`,caption:`The photographs accompany a statement and evidence submitted to the British Government by the Government of Bahrain in 1938 relating to Bahrain's claim to sovereignty over the Hawar Islands`,date:`1938`,author:`Government of Bahrain`,credit:`https://www.qdl.qa/en/archive/81055/vdc_100076666399.0x000037`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Hawar_Fort_1938.png`,label:`قلعة في جزر حوار`,groupLabel:`القلاع`,kind:`photo`},{slug:`bahrain-market-1930s`,group:`towns`,file:`photos/bahrain-market-1930s.webp`,thumb:`photos/bahrain-market-1930s-sm.webp`,w:609,h:331,title:`Vegetable market in Bahrain, circa 1930s.png`,caption:`The Vegetable Market of Bahrain in the 1930s.`,date:`1930s`,author:`Anonymous photographer in the 1930s.`,credit:`Bahrain newspaper`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Vegetable_market_in_Bahrain,_circa_1930s.png`,label:`سوق الخضار في البحرين`,groupLabel:`المدن والأسواق`,kind:`photo`},{slug:`kuwait-camel-1938`,group:`towns`,file:`photos/kuwait-camel-1938.webp`,thumb:`photos/kuwait-camel-1938-sm.webp`,w:500,h:336,title:`Camel in Kuwait carrying fuel for cooking (1938).jpg`,caption:`Camel in Kuwait carrying fuel for cooking.`,date:`1938`,author:`National Maritime Museum from Greenwich, United Kingdom`,credit:`originally posted to Flickr as Camel in Kuwait carrying fuel for cooking`,licence:`No restrictions`,licenceUrl:`https://www.flickr.com/commons/usage/`,source:`https://commons.wikimedia.org/wiki/File:Camel_in_Kuwait_carrying_fuel_for_cooking_(1938).jpg`,label:`جمل في الكويت يحمل الوقود`,groupLabel:`المدن والأسواق`,kind:`photo`},{slug:`arabia-map-1771`,group:`maps`,file:`photos/arabia-map-1771.webp`,thumb:`photos/arabia-map-1771-sm.webp`,w:1400,h:944,title:`1771 Bonne Map of Arabia - Geographicus - Arabia-bonne-1771.jpg`,caption:`A beautiful example of Rigobert Bonne's 1771 decorative map of the Arabian Peninsula. Covers from the Mediterranean to the Indian Ocean and from the Red Sea to the Persian Gulf. Includes the modern day nations of Saudi Arabia, Palestine, Jordan, Kuwait, Iraq, Yemen, Oman, the United Arab Emirates, and Bahrain. Names Mt. Sinai, Mecca and Jerusalem as well as countless other cities and desert oases.`,date:`1771 (dated)`,author:`Rigobert Bonne`,credit:`This file was provided to Wikimedia Commons by Geographicus Rare Antique Maps, a specialist dealer in rare maps and other cartography of the 15th, 16th, 17th, 18th and 19th centuries, as part of a cooperation project.`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:1771_Bonne_Map_of_Arabia_-_Geographicus_-_Arabia-bonne-1771.jpg`,label:`خريطة شبه الجزيرة العربية`,groupLabel:`الخرائط`,kind:`map`},{slug:`golfe-persique-carte`,group:`maps`,file:`photos/golfe-persique-carte.webp`,thumb:`photos/golfe-persique-carte-sm.webp`,w:1400,h:943,title:`Carte du Golfe Persique - btv1b532624230 (1 of 3).jpg`,caption:`Sujet : Sondages sous-marins Bassora Būshehr Bandar'Abbâs Djâsk Persique, Golfe Perse -- Côtes Oman -- Côtes Qeshm, Île de Ormuz, Détroit d' Mascate Chaṭṭ al-ʿarab (cours d'eau) Échelle(s) : [1:1 156 967] Couverture : Golfe Persique Iran Irak Oman Langue : français`,date:`17th century`,author:``,credit:`Bibliothèque nationale de France`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Carte_du_Golfe_Persique_-_btv1b532624230_(1_of_3).jpg`,label:`خريطة الخليج`,groupLabel:`الخرائط`,kind:`map`},{slug:`hidaya-school-1919`,group:`towns`,file:`photos/hidaya-school-1919.webp`,thumb:`photos/hidaya-school-1919-sm.webp`,w:600,h:358,title:`Hidaya Al Khalifa Boys School Bahrain 1919.jpg`,caption:`The first public school of Bahrain, Al-Hidaya Al-Khalifia Boys school, in the island of Muharraq in 1919`,date:`1919`,author:`Anonymous photographer`,credit:`http://www.bna.bh/portal/photos/669106/745959`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:Hidaya_Al_Khalifa_Boys_School_Bahrain_1919.jpg`,label:`مدرسة الهداية الخليفية`,groupLabel:`المدن والأسواق`,kind:`photo`},{slug:`mutra-1813`,group:`ports`,file:`photos/mutra-1813.webp`,thumb:`photos/mutra-1813-sm.webp`,w:1024,h:724,title:`No. 4. A View of Mutra from the east RMG PW4796.jpg`,caption:`Plate 4 of Sixteen Views of Places in the Persian Gulph... Forces... Against the Arabian Pirates No. 4 'A View of Mutra from the east' PAF4796 PW4796 23085`,date:`1813`,author:`John Heaviside Clark / After Richard Temple`,credit:`Royal Museums Greenwich: identifier 23085 (PW4796 — National Maritime Museum) https://prints.rmg.co.uk/products/no-4-a-view-of-mutra-from-the-east-pw4796`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:No._4._A_View_of_Mutra_from_the_east_RMG_PW4796.jpg`,label:`منظر مطرح من الشرق (لوحة محفورة)`,groupLabel:`الموانئ`,kind:`art`},{slug:`ras-al-khaimah-1813`,group:`ports`,file:`photos/ras-al-khaimah-1813.webp`,thumb:`photos/ras-al-khaimah-1813-sm.webp`,w:1024,h:741,title:`No. 5. Rus ul Khyma, with the attack of the H C-s Cruisers on the evening of 11 November 1809 RMG PW4797.jpg`,caption:`Plate 5 of Sixteen Views of Places in the Persian Gulph... Forces... Against the Arabian Pirates No. 5 'Rusul Khyma, with the attack of the H C-s Cruisers on the evening of 11 November 1809' RMG PW4797 Rus Ul Khyma with the Attack of the HC’s Cruisers Library typo: No._5._Rusul_Khyma,_with_the_attack_of_the_H_C-s_Cruisers_on_the_evening_of_11_November_1809 PAF4797 PW4797 23086`,date:`1813`,author:`John Heaviside Clark / After Richard Temple`,credit:`Royal Museums Greenwich: identifier 23086 (PW4797 — National Maritime Museum) https://prints.rmg.co.uk/products/no-5-rusul-khyma-with-the-attack-of-the-h-c-s-cruisers-on-the-evening-of-11-november-1809-pw4797`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:No._5._Rus_ul_Khyma,_with_the_attack_of_the_H_C-s_Cruisers_on_the_evening_of_11_November_1809_RMG_PW4797.jpg`,label:`رأس الخيمة (لوحة محفورة)`,groupLabel:`الموانئ`,kind:`art`},{slug:`shinas-1813`,group:`ports`,file:`photos/shinas-1813.webp`,thumb:`photos/shinas-1813-sm.webp`,w:1024,h:725,title:`No. 13. Schinaass from the sea RMG PW4805.jpg`,caption:`Plate 13 of Sixteen Views of Places in the Persian Gulph... Forces... Against the Arabian Pirates No. 13 'Schinaass from the sea' Schinaass, Oman. A pirate stronghold on the Straits of Hormuz.`,date:`April 1813`,author:`John Heaviside Clark / After Richard Temple`,credit:`Royal Museums Greenwich: identifier 128940 (PAF4807 — National Maritime Museum). https://www.rmg.co.uk/collections/objects/rmgc-object-128940. https://prints.rmg.co.uk/products/no-13-schinaass-from-the-sea-pw4805`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:No._13._Schinaass_from_the_sea_RMG_PW4805.jpg`,label:`شناص من البحر (لوحة محفورة)`,groupLabel:`الموانئ`,kind:`art`},{slug:`gulf-map-dutch`,group:`maps`,file:`photos/gulf-map-dutch.webp`,thumb:`photos/gulf-map-dutch-sm.webp`,w:1400,h:993,title:`AMH-5116-NA Map of part of the Persian Gulf.jpg`,caption:`Title in Leupe catalogue (National Archives): Kaart van een gedeelte van den Perzische Golf; aan de Arabische Kust van I. de Curia Muria tot Caap Rasalgate, en van daar tot Caap Monsado; en aan de Perzische kust van Caap de jasques tot Lary Banda. Numbered top right: 13.a. Notes on reverse: 19 [pencilled in top right corner] / 219 [in red pencil].`,date:`between 1690 and 1743`,author:`Isaak de Graaf`,credit:`This is an image from the Atlas of Mutual Heritage and the Nationaal Archief, the Dutch National Archives. The metadata of this file is public domain under a Creative Commons Public Domain Dedication (CC-ZERO). This permission has been arch`,licence:`Public domain`,licenceUrl:``,source:`https://commons.wikimedia.org/wiki/File:AMH-5116-NA_Map_of_part_of_the_Persian_Gulf.jpg`,label:`خريطة هولندية لجزء من الخليج`,groupLabel:`الخرائط`,kind:`map`}]},Wu=Uu.posts,Gu=Uu.categories,Ku=Uu.tags,qu=location.origin+`/`,Ju=e=>/^https?:/.test(e)?e:`/`+e.replace(/^\//,``),Yu=e=>e.trim().replace(/\s+/g,`-`),Xu=e=>Wu.find(t=>t.slug===e),Zu=new Intl.DateTimeFormat(`ar-AE-u-nu-arab`,{day:`numeric`,month:`long`,year:`numeric`}),Qu=e=>{try{return Zu.format(new Date(e+`T12:00:00`))}catch{return e}},$u=e=>e.toLocaleString(`ar-AE-u-nu-arab`),ed=e=>e===1?`دقيقة واحدة`:e===2?`دقيقتان`:e<=10?`${$u(e)} دقائق`:`${$u(e)} دقيقة`;function td(e){let t=e.replace(/```[\s\S]*?```/g,` `).replace(/<[^>]+>/g,` `).split(/\s+/).filter(Boolean).length;return{words:t,minutes:Math.max(1,Math.round(t/200))}}var nd=Uu.photos,rd=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function id(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:rd(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var ad=e=>{let t=``,n=!1;for(let r of e)r===`-`||r===`_`||r<=` `?n=t.length>0:(t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1);return t},od=e=>{let t=ad(e);return t.charAt(0).toUpperCase()+t.slice(1)},sd=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),cd={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function ld(e){return e!=null}function ud(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??cd.width,a=e.size??e.height??cd.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?sd(...c):sd(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??cd[`stroke-width`])*Number(e.size??e.width??cd.width)/Number(t.size??t.width??cd.width):t.strokeWidth??cd[`stroke-width`];return[`svg`,{...Object.entries(cd).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&ld(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&ld(t.width)&&{[r(`width`)]:t.width},...`height`in t&&ld(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function dd(e,t={}){return ud(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var fd=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},pd=(0,h.createContext)({}),md=()=>(0,h.useContext)(pd),hd=(0,h.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:g=!1,nonScalingStroke:_=!1,color:v=`currentColor`,className:y=``}=md()??{},b=!!c||fd(d),[x,S,C=[]]=dd(u,{color:e??v,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??g,nonScalingStroke:o??_,className:sd(y,s),hasA11yProp:b,attributes:d});return(0,h.createElement)(x,{ref:f,...S},[...C.map(([e,t])=>(0,h.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function gd(e,t=[],n=[]){let r=typeof e==`string`?id(e,t,n):e,i=(0,h.forwardRef)(({className:e,...t},n)=>(0,h.createElement)(hd,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=od(r.name)),i}var _d=(e,t)=>{try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},vd=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t)),dispatchEvent(new CustomEvent(`alcode-store`,{detail:e}))}catch{}};function yd(e,t){let[n,r]=(0,h.useState)(()=>_d(e,t));return(0,h.useEffect)(()=>{let n=n=>{n.detail===e&&r(_d(e,t))};return addEventListener(`alcode-store`,n),()=>removeEventListener(`alcode-store`,n)},[e]),[n,n=>{let i=typeof n==`function`?n(_d(e,t)):n;vd(e,i),r(i)}]}var bd=()=>({id:Math.random().toString(36).slice(2,10),slug:``,title:``,author:``,category:`التاريخ`,date:new Date().toISOString().slice(0,10),cover:``,excerpt:``,tags:[],body:`## عنوان فرعي

ابدأ الكتابة هنا…
`,updated:Date.now()});function xd(e){let t=e=>JSON.stringify(e??``);return`---\ntitle: ${t(e.title)}\nauthor: ${t(e.author)}\ncategory: ${t(e.category)}\ndate: ${t(e.date)}\ncover: ${t(e.cover)}\nexcerpt: ${t(e.excerpt)}\ntags: [${e.tags.map(t).join(`, `)}]\n---\n\n${e.body.trim()}\n`}function Sd(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Sd(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function Cd(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Sd(e))&&(r&&(r+=` `),r+=t);return r}var wd=(e,t)=>{let n=Array(e.length+t.length);for(let t=0;t<e.length;t++)n[t]=e[t];for(let r=0;r<t.length;r++)n[e.length+r]=t[r];return n},Td=(e,t)=>({classGroupId:e,validator:t}),Ed=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Dd=`-`,Od=[],kd=`arbitrary..`,Ad=e=>{let t=Nd(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{if(e.startsWith(`[`)&&e.endsWith(`]`))return Md(e);let n=e.split(Dd);return jd(n,+(n[0]===``&&n.length>1),t)},getConflictingClassGroupIds:(e,t)=>{if(t){let t=r[e],i=n[e];return t?i?wd(i,t):t:i||Od}return n[e]||Od}}},jd=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;let r=e[t],i=n.nextPart.get(r);if(i){let n=jd(e,t+1,i);if(n)return n}let a=n.validators;if(a===null)return;let o=t===0?e.join(Dd):e.slice(t).join(Dd),s=a.length;for(let e=0;e<s;e++){let t=a[e];if(t.validator(o))return t.classGroupId}},Md=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);return r?kd+r:void 0})(),Nd=e=>{let{theme:t,classGroups:n}=e;return Pd(n,t)},Pd=(e,t)=>{let n=Ed();for(let r in e){let i=e[r];Fd(i,n,r,t)}return n},Fd=(e,t,n,r)=>{let i=e.length;for(let a=0;a<i;a++){let i=e[a];Id(i,t,n,r)}},Id=(e,t,n,r)=>{typeof e==`string`?Ld(e,t,n):typeof e==`function`?Rd(e,t,n,r):zd(e,t,n,r)},Ld=(e,t,n)=>{let r=e===``?t:Bd(t,e);r.classGroupId=n},Rd=(e,t,n,r)=>{Vd(e)?Fd(e(r),t,n,r):(t.validators===null&&(t.validators=[]),t.validators.push(Td(n,e)))},zd=(e,t,n,r)=>{let i=Object.entries(e),a=i.length;for(let e=0;e<a;e++){let[a,o]=i[e];Fd(o,Bd(t,a),n,r)}},Bd=(e,t)=>{let n=e,r=t.split(Dd),i=r.length;for(let e=0;e<i;e++){let t=r[e],i=n.nextPart.get(t);i||(i=Ed(),n.nextPart.set(t,i)),n=i}return n},Vd=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Hd=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))};return{get(e){let t=n[e];if(t!==void 0)return t;if((t=r[e])!==void 0)return i(e,t),t},set(e,t){e in n?n[e]=t:i(e,t)}}},Ud=`!`,Wd=`:`,Gd=[],Kd=(e,t,n,r,i)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i}),qd=e=>{let{prefix:t,experimentalParseClassName:n}=e,r=e=>{let t=[],n=0,r=0,i=0,a,o=e.length;for(let s=0;s<o;s++){let o=e[s];if(n===0&&r===0){if(o===Wd){t.push(e.slice(i,s)),i=s+1;continue}if(o===`/`){a=s;continue}}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--}let s=t.length===0?e:e.slice(i),c=s,l=!1;s.endsWith(Ud)?(c=s.slice(0,-1),l=!0):s.startsWith(Ud)&&(c=s.slice(1),l=!0);let u=a&&a>i?a-i:void 0;return Kd(t,l,c,u)};if(t){let e=t+Wd,n=r;r=t=>t.startsWith(e)?n(t.slice(e.length)):Kd(Gd,!1,t,void 0,!0)}if(n){let e=r;r=t=>n({className:t,parseClassName:e})}return r},Jd=e=>{let t=new Map;return e.orderSensitiveModifiers.forEach((e,n)=>{t.set(e,1e6+n)}),e=>{let n=[],r=[];for(let i=0;i<e.length;i++){let a=e[i],o=a[0]===`[`,s=t.has(a);o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)}return r.length>0&&(r.sort(),n.push(...r)),n}},Yd=e=>({cache:Hd(e.cacheSize),parseClassName:qd(e),sortModifiers:Jd(e),postfixLookupClassGroupIds:Xd(e),...Ad(e)}),Xd=e=>{let t=Object.create(null),n=e.postfixLookupClassGroups;if(n)for(let e=0;e<n.length;e++)t[n[e]]=!0;return t},Zd=/\s+/,Qd=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o}=t,s=[],c=e.trim().split(Zd),l=``;for(let e=c.length-1;e>=0;--e){let t=c[e],{isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(t);if(u){l=t+(l.length>0?` `+l:l);continue}let h=!!m,g;if(h){g=r(p.substring(0,m));let e=g&&o[g]?r(p):void 0;e&&e!==g&&(g=e,h=!1)}else g=r(p);if(!g){if(!h||(g=r(p),!g)){l=t+(l.length>0?` `+l:l);continue}h=!1}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Ud:_,y=v+g;if(s.indexOf(y)>-1)continue;s.push(y);let b=i(g,h);for(let e=0;e<b.length;++e){let t=b[e];s.push(v+t)}l=t+(l.length>0?` `+l:l)}return l},$d=(...e)=>{let t=0,n,r,i=``;for(;t<e.length;)(n=e[t++])&&(r=ef(n))&&(i&&(i+=` `),i+=r);return i},ef=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=ef(e[r]))&&(n&&(n+=` `),n+=t);return n},tf=(e,...t)=>{let n,r,i,a,o=o=>(n=Yd(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{let t=r(e);if(t)return t;let a=Qd(e,n);return i(e,a),a};return a=o,(...e)=>a($d(...e))},nf=[],X=e=>{let t=t=>t[e]||nf;return t.isThemeGetter=!0,t.themeKey=e,t},rf=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,af=/^\((?:(\w[\w-]*):)?(.+)\)$/i,of=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,sf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,cf=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,lf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,uf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,df=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ff=e=>of.test(e),Z=e=>!!e&&!Number.isNaN(Number(e)),pf=e=>!!e&&Number.isInteger(Number(e)),mf=e=>e.endsWith(`%`)&&Z(e.slice(0,-1)),hf=e=>sf.test(e),gf=()=>!0,_f=e=>cf.test(e)&&!lf.test(e),vf=()=>!1,yf=e=>uf.test(e),bf=e=>df.test(e),xf=e=>!Q(e)&&!$(e),Sf=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),Cf=e=>Rf(e,Hf,vf),Q=e=>rf.test(e),wf=e=>Rf(e,Uf,_f),Tf=e=>Rf(e,Wf,Z),Ef=e=>Rf(e,Kf,gf),Df=e=>Rf(e,Gf,vf),Of=e=>Rf(e,Bf,vf),kf=e=>Rf(e,Vf,bf),Af=e=>Rf(e,qf,yf),$=e=>af.test(e),jf=e=>zf(e,Uf),Mf=e=>zf(e,Gf),Nf=e=>zf(e,Bf),Pf=e=>zf(e,Hf),Ff=e=>zf(e,Vf),If=e=>zf(e,qf,!0),Lf=e=>zf(e,Kf,!0),Rf=(e,t,n)=>{let r=rf.exec(e);return r?r[1]?t(r[1]):n(r[2]):!1},zf=(e,t,n=!1)=>{let r=af.exec(e);return r?r[1]?t(r[1]):n:!1},Bf=e=>e===`position`||e===`percentage`,Vf=e=>e===`image`||e===`url`,Hf=e=>e===`length`||e===`size`||e===`bg-size`,Uf=e=>e===`length`,Wf=e=>e===`number`,Gf=e=>e===`family-name`,Kf=e=>e===`number`||e===`weight`,qf=e=>e===`shadow`,Jf=tf(()=>{let e=X(`color`),t=X(`font`),n=X(`text`),r=X(`font-weight`),i=X(`tracking`),a=X(`leading`),o=X(`breakpoint`),s=X(`container`),c=X(`spacing`),l=X(`radius`),u=X(`shadow`),d=X(`inset-shadow`),f=X(`text-shadow`),p=X(`drop-shadow`),m=X(`blur`),h=X(`perspective`),g=X(`aspect`),_=X(`ease`),v=X(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),$,Q],S=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],C=()=>[`auto`,`contain`,`none`],w=()=>[$,Q,c],T=()=>[ff,`full`,`auto`,...w()],E=()=>[pf,`none`,`subgrid`,$,Q],D=()=>[`auto`,{span:[`full`,pf,$,Q]},pf,$,Q],O=()=>[pf,`auto`,$,Q],ee=()=>[`auto`,`min`,`max`,`fr`,$,Q],k=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],A=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],j=()=>[`auto`,...w()],M=()=>[ff,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...w()],N=()=>[s,ff,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...w()],P=()=>[ff,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...w()],F=()=>[e,$,Q],te=()=>[...b(),Nf,Of,{position:[$,Q]}],ne=()=>[`no-repeat`,{repeat:[``,`x`,`y`,`space`,`round`]}],re=()=>[`auto`,`cover`,`contain`,Pf,Cf,{size:[$,Q]}],ie=()=>[mf,jf,wf],I=()=>[``,`none`,`full`,l,$,Q],L=()=>[``,Z,jf,wf],ae=()=>[`solid`,`dashed`,`dotted`,`double`],oe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],R=()=>[Z,mf,Nf,Of],se=()=>[``,`none`,m,$,Q],ce=()=>[`none`,Z,$,Q],le=()=>[`none`,Z,$,Q],ue=()=>[Z,$,Q],de=()=>[ff,`full`,...w()];return{cacheSize:500,theme:{animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[hf],breakpoint:[hf],color:[gf],container:[hf],"drop-shadow":[hf],ease:[`in`,`out`,`in-out`],font:[xf],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[hf],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[hf],shadow:[hf],spacing:[`px`,Z],text:[hf],"text-shadow":[hf],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]},classGroups:{aspect:[{aspect:[`auto`,`square`,ff,Q,$,g]}],container:[`container`],"container-type":[{"@container":[``,`normal`,`size`,$,Q]}],"container-named":[Sf],columns:[{columns:[Z,`auto`,Q,$,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:x()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{"inset-s":T(),start:T()}],end:[{"inset-e":T(),end:T()}],"inset-bs":[{"inset-bs":T()}],"inset-be":[{"inset-be":T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[pf,`auto`,$,Q]}],basis:[{basis:[ff,`full`,`auto`,s,...w()]}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`nowrap`,`wrap`,`wrap-reverse`]}],flex:[{flex:[Z,ff,`auto`,`initial`,`none`,Q]}],grow:[{grow:[``,Z,$,Q]}],shrink:[{shrink:[``,Z,$,Q]}],order:[{order:[pf,`first`,`last`,`none`,$,Q]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":ee()}],"auto-rows":[{"auto-rows":ee()}],gap:[{gap:w()}],"gap-x":[{"gap-x":w()}],"gap-y":[{"gap-y":w()}],"justify-content":[{justify:[...k(),`normal`]}],"justify-items":[{"justify-items":[...A(),`normal`]}],"justify-self":[{"justify-self":[`auto`,...A()]}],"align-content":[{content:[`normal`,...k()]}],"align-items":[{items:[...A(),{baseline:[``,`last`]}]}],"align-self":[{self:[`auto`,...A(),{baseline:[``,`last`]}]}],"place-content":[{"place-content":k()}],"place-items":[{"place-items":[...A(),`baseline`]}],"place-self":[{"place-self":[`auto`,...A()]}],p:[{p:w()}],px:[{px:w()}],py:[{py:w()}],ps:[{ps:w()}],pe:[{pe:w()}],pbs:[{pbs:w()}],pbe:[{pbe:w()}],pt:[{pt:w()}],pr:[{pr:w()}],pb:[{pb:w()}],pl:[{pl:w()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mbs:[{mbs:j()}],mbe:[{mbe:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":w()}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":w()}],"space-y-reverse":[`space-y-reverse`],size:[{size:M()}],"inline-size":[{inline:[`auto`,...N()]}],"min-inline-size":[{"min-inline":[`auto`,...N()]}],"max-inline-size":[{"max-inline":[`none`,...N()]}],"block-size":[{block:[`auto`,...P()]}],"min-block-size":[{"min-block":[`auto`,...P()]}],"max-block-size":[{"max-block":[`none`,...P()]}],w:[{w:[s,`screen`,...M()]}],"min-w":[{"min-w":[s,`screen`,`none`,...M()]}],"max-w":[{"max-w":[s,`screen`,`none`,`prose`,{screen:[o]},...M()]}],h:[{h:[`screen`,`lh`,...M()]}],"min-h":[{"min-h":[`screen`,`lh`,`none`,...M()]}],"max-h":[{"max-h":[`screen`,`lh`,`none`,...M()]}],"font-size":[{text:[`base`,n,jf,wf]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[r,Lf,Ef]}],"font-stretch":[{"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,mf,Q]}],"font-family":[{font:[Mf,Df,t]}],"font-features":[{"font-features":[Q]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[i,$,Q]}],"line-clamp":[{"line-clamp":[Z,`none`,$,Tf]}],leading:[{leading:[`none`,a,...w()]}],"list-image":[{"list-image":[`none`,$,Q]}],"list-style-position":[{list:[`inside`,`outside`]}],"list-style-type":[{list:[`disc`,`decimal`,`none`,$,Q]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"placeholder-color":[{placeholder:F()}],"text-color":[{text:F()}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...ae(),`wavy`]}],"text-decoration-thickness":[{decoration:[Z,`from-font`,`auto`,$,wf]}],"text-decoration-color":[{decoration:F()}],"underline-offset":[{"underline-offset":[Z,`auto`,$,Q]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:w()}],"tab-size":[{tab:[pf,$,Q]}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,$,Q]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],wrap:[{wrap:[`break-word`,`anywhere`,`normal`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,$,Q]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:te()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:re()}],"bg-image":[{bg:[`none`,{linear:[{to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},pf,$,Q],radial:[``,$,Q],conic:[``,pf,$,Q]},Ff,kf]}],"bg-color":[{bg:F()}],"gradient-from-pos":[{from:ie()}],"gradient-via-pos":[{via:ie()}],"gradient-to-pos":[{to:ie()}],"gradient-from":[{from:F()}],"gradient-via":[{via:F()}],"gradient-to":[{to:F()}],rounded:[{rounded:I()}],"rounded-s":[{"rounded-s":I()}],"rounded-e":[{"rounded-e":I()}],"rounded-t":[{"rounded-t":I()}],"rounded-r":[{"rounded-r":I()}],"rounded-b":[{"rounded-b":I()}],"rounded-l":[{"rounded-l":I()}],"rounded-ss":[{"rounded-ss":I()}],"rounded-se":[{"rounded-se":I()}],"rounded-ee":[{"rounded-ee":I()}],"rounded-es":[{"rounded-es":I()}],"rounded-tl":[{"rounded-tl":I()}],"rounded-tr":[{"rounded-tr":I()}],"rounded-br":[{"rounded-br":I()}],"rounded-bl":[{"rounded-bl":I()}],"border-w":[{border:L()}],"border-w-x":[{"border-x":L()}],"border-w-y":[{"border-y":L()}],"border-w-s":[{"border-s":L()}],"border-w-e":[{"border-e":L()}],"border-w-bs":[{"border-bs":L()}],"border-w-be":[{"border-be":L()}],"border-w-t":[{"border-t":L()}],"border-w-r":[{"border-r":L()}],"border-w-b":[{"border-b":L()}],"border-w-l":[{"border-l":L()}],"divide-x":[{"divide-x":L()}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":L()}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{border:[...ae(),`hidden`,`none`]}],"divide-style":[{divide:[...ae(),`hidden`,`none`]}],"border-color":[{border:F()}],"border-color-x":[{"border-x":F()}],"border-color-y":[{"border-y":F()}],"border-color-s":[{"border-s":F()}],"border-color-e":[{"border-e":F()}],"border-color-bs":[{"border-bs":F()}],"border-color-be":[{"border-be":F()}],"border-color-t":[{"border-t":F()}],"border-color-r":[{"border-r":F()}],"border-color-b":[{"border-b":F()}],"border-color-l":[{"border-l":F()}],"divide-color":[{divide:F()}],"outline-style":[{outline:[...ae(),`none`,`hidden`]}],"outline-offset":[{"outline-offset":[Z,$,Q]}],"outline-w":[{outline:[``,Z,jf,wf]}],"outline-color":[{outline:F()}],shadow:[{shadow:[``,`inner`,`none`,u,If,Af]}],"shadow-color":[{shadow:F()}],"inset-shadow":[{"inset-shadow":[`none`,d,If,Af]}],"inset-shadow-color":[{"inset-shadow":F()}],"ring-w":[{ring:L()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:F()}],"ring-offset-w":[{"ring-offset":[Z,wf]}],"ring-offset-color":[{"ring-offset":F()}],"inset-ring-w":[{"inset-ring":L()}],"inset-ring-color":[{"inset-ring":F()}],"text-shadow":[{"text-shadow":[`none`,f,If,Af]}],"text-shadow-color":[{"text-shadow":F()}],opacity:[{opacity:[Z,$,Q]}],"mix-blend":[{"mix-blend":[...oe(),`plus-darker`,`plus-lighter`]}],"bg-blend":[{"bg-blend":oe()}],"mask-clip":[{"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]},`mask-no-clip`],"mask-composite":[{mask:[`add`,`subtract`,`intersect`,`exclude`]}],"mask-image-linear-pos":[{"mask-linear":[Z]}],"mask-image-linear-from-pos":[{"mask-linear-from":R()}],"mask-image-linear-to-pos":[{"mask-linear-to":R()}],"mask-image-linear-from-color":[{"mask-linear-from":F()}],"mask-image-linear-to-color":[{"mask-linear-to":F()}],"mask-image-t-from-pos":[{"mask-t-from":R()}],"mask-image-t-to-pos":[{"mask-t-to":R()}],"mask-image-t-from-color":[{"mask-t-from":F()}],"mask-image-t-to-color":[{"mask-t-to":F()}],"mask-image-r-from-pos":[{"mask-r-from":R()}],"mask-image-r-to-pos":[{"mask-r-to":R()}],"mask-image-r-from-color":[{"mask-r-from":F()}],"mask-image-r-to-color":[{"mask-r-to":F()}],"mask-image-b-from-pos":[{"mask-b-from":R()}],"mask-image-b-to-pos":[{"mask-b-to":R()}],"mask-image-b-from-color":[{"mask-b-from":F()}],"mask-image-b-to-color":[{"mask-b-to":F()}],"mask-image-l-from-pos":[{"mask-l-from":R()}],"mask-image-l-to-pos":[{"mask-l-to":R()}],"mask-image-l-from-color":[{"mask-l-from":F()}],"mask-image-l-to-color":[{"mask-l-to":F()}],"mask-image-x-from-pos":[{"mask-x-from":R()}],"mask-image-x-to-pos":[{"mask-x-to":R()}],"mask-image-x-from-color":[{"mask-x-from":F()}],"mask-image-x-to-color":[{"mask-x-to":F()}],"mask-image-y-from-pos":[{"mask-y-from":R()}],"mask-image-y-to-pos":[{"mask-y-to":R()}],"mask-image-y-from-color":[{"mask-y-from":F()}],"mask-image-y-to-color":[{"mask-y-to":F()}],"mask-image-radial":[{"mask-radial":[$,Q]}],"mask-image-radial-from-pos":[{"mask-radial-from":R()}],"mask-image-radial-to-pos":[{"mask-radial-to":R()}],"mask-image-radial-from-color":[{"mask-radial-from":F()}],"mask-image-radial-to-color":[{"mask-radial-to":F()}],"mask-image-radial-shape":[{"mask-radial":[`circle`,`ellipse`]}],"mask-image-radial-size":[{"mask-radial":[{closest:[`side`,`corner`],farthest:[`side`,`corner`]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Z]}],"mask-image-conic-from-pos":[{"mask-conic-from":R()}],"mask-image-conic-to-pos":[{"mask-conic-to":R()}],"mask-image-conic-from-color":[{"mask-conic-from":F()}],"mask-image-conic-to-color":[{"mask-conic-to":F()}],"mask-mode":[{mask:[`alpha`,`luminance`,`match`]}],"mask-origin":[{"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]}],"mask-position":[{mask:te()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:re()}],"mask-type":[{"mask-type":[`alpha`,`luminance`]}],"mask-image":[{mask:[`none`,$,Q]}],filter:[{filter:[``,`none`,$,Q]}],blur:[{blur:se()}],brightness:[{brightness:[Z,$,Q]}],contrast:[{contrast:[Z,$,Q]}],"drop-shadow":[{"drop-shadow":[``,`none`,p,If,Af]}],"drop-shadow-color":[{"drop-shadow":F()}],grayscale:[{grayscale:[``,Z,$,Q]}],"hue-rotate":[{"hue-rotate":[Z,$,Q]}],invert:[{invert:[``,Z,$,Q]}],saturate:[{saturate:[Z,$,Q]}],sepia:[{sepia:[``,Z,$,Q]}],"backdrop-filter":[{"backdrop-filter":[``,`none`,$,Q]}],"backdrop-blur":[{"backdrop-blur":se()}],"backdrop-brightness":[{"backdrop-brightness":[Z,$,Q]}],"backdrop-contrast":[{"backdrop-contrast":[Z,$,Q]}],"backdrop-grayscale":[{"backdrop-grayscale":[``,Z,$,Q]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Z,$,Q]}],"backdrop-invert":[{"backdrop-invert":[``,Z,$,Q]}],"backdrop-opacity":[{"backdrop-opacity":[Z,$,Q]}],"backdrop-saturate":[{"backdrop-saturate":[Z,$,Q]}],"backdrop-sepia":[{"backdrop-sepia":[``,Z,$,Q]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":w()}],"border-spacing-x":[{"border-spacing-x":w()}],"border-spacing-y":[{"border-spacing-y":w()}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,$,Q]}],"transition-behavior":[{transition:[`normal`,`discrete`]}],duration:[{duration:[Z,`initial`,$,Q]}],ease:[{ease:[`linear`,`initial`,_,$,Q]}],delay:[{delay:[Z,$,Q]}],animate:[{animate:[`none`,v,$,Q]}],backface:[{backface:[`hidden`,`visible`]}],perspective:[{perspective:[h,$,Q]}],"perspective-origin":[{"perspective-origin":x()}],rotate:[{rotate:ce()}],"rotate-x":[{"rotate-x":ce()}],"rotate-y":[{"rotate-y":ce()}],"rotate-z":[{"rotate-z":ce()}],scale:[{scale:le()}],"scale-x":[{"scale-x":le()}],"scale-y":[{"scale-y":le()}],"scale-z":[{"scale-z":le()}],"scale-3d":[`scale-3d`],skew:[{skew:ue()}],"skew-x":[{"skew-x":ue()}],"skew-y":[{"skew-y":ue()}],transform:[{transform:[$,Q,``,`none`,`gpu`,`cpu`]}],"transform-origin":[{origin:x()}],"transform-style":[{transform:[`3d`,`flat`]}],translate:[{translate:de()}],"translate-x":[{"translate-x":de()}],"translate-y":[{"translate-y":de()}],"translate-z":[{"translate-z":de()}],"translate-none":[`translate-none`],zoom:[{zoom:[pf,$,Q]}],accent:[{accent:F()}],appearance:[{appearance:[`none`,`auto`]}],"caret-color":[{caret:F()}],"color-scheme":[{scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,$,Q]}],"field-sizing":[{"field-sizing":[`fixed`,`content`]}],"pointer-events":[{"pointer-events":[`auto`,`none`]}],resize:[{resize:[`none`,``,`y`,`x`]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scrollbar-thumb-color":[{"scrollbar-thumb":F()}],"scrollbar-track-color":[{"scrollbar-track":F()}],"scrollbar-gutter":[{"scrollbar-gutter":[`auto`,`stable`,`both`]}],"scrollbar-w":[{scrollbar:[`auto`,`thin`,`none`]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mbs":[{"scroll-mbs":w()}],"scroll-mbe":[{"scroll-mbe":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pbs":[{"scroll-pbs":w()}],"scroll-pbe":[{"scroll-pbe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,$,Q]}],fill:[{fill:[`none`,...F()]}],"stroke-w":[{stroke:[Z,jf,wf,Tf]}],stroke:[{stroke:[`none`,...F()]}],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`start`,`end`,`right`,`left`],"inset-y":[`inset-bs`,`inset-be`,`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`ps`,`pe`,`pr`,`pl`],py:[`pbs`,`pbe`,`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`ms`,`me`,`mr`,`ml`],my:[`mbs`,`mbe`,`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-s`,`border-w-e`,`border-w-r`,`border-w-l`],"border-w-y":[`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-s`,`border-color-e`,`border-color-r`,`border-color-l`],"border-color-y":[`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-ms`,`scroll-me`,`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-ps`,`scroll-pe`,`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]}});function Yf(...e){return Jf(Cd(e))}export{dr as $,ja as A,_ as At,q as B,dl as C,k as Ct,Os as D,S as Dt,ks as E,C as Et,ta as F,s as Ft,li as G,xi as H,ea as I,l as It,Br as J,di as K,$i as L,ka as M,p as Mt,Da as N,d as Nt,bs as O,x as Ot,oa as P,o as Pt,gr as Q,Zi as R,bl as S,j as St,js as T,w as Tt,fi as U,ki as V,ui as W,Sr as X,zr as Y,hr as Z,Yu as _,z as _t,yd as a,vn as at,Vu as b,F as bt,$u as c,tn as ct,Gu as d,Xt as dt,qn as et,Qu as f,zt as ft,td as g,B as gt,Wu as h,W as ht,xd as i,On as it,Aa as j,g as jt,La as k,v as kt,Ju as l,en as lt,nd as m,G as mt,Cd as n,Gn as nt,gd as o,mn as ot,ed as p,Nt as pt,Ur as q,bd as r,kn as rt,qu as s,cn as st,Yf as t,Jn as tt,Xu as u,$t as ut,Ku as v,fe as vt,oc as w,D as wt,wl as x,N as xt,Hu as y,ie as yt,Ii as z};