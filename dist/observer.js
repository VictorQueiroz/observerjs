function baseToString(e){return null==e?"":e+""}function iteratee(e){return isObjectLike(e)&&!isArray(e)?matches(e):baseIteratee(e)}function baseIteratee(e){var t=typeof e;return"function"==t?e:null==e?identity:"object"==t?isArray(e)?baseMatchesProperty(e[0],e[1]):baseMatches(e):property(e)}function getIteratee(){var e=iteratee;return e=e===iteratee?baseIteratee:e,arguments.length?e(arguments[0],arguments[1]):e}function arrayMap(e,t){for(var r=-1,n=e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}function baseIsEqualDeep(e,t,r,n,i,s){var a=isArray(e),o=isArray(t),u=arrayTag,c=arrayTag;a||(u=getTag(e),u==argsTag?u=objectTag:u!=objectTag&&(a=isTypedArray(e))),o||(c=getTag(t),c==argsTag?c=objectTag:c!=objectTag&&(o=isTypedArray(t)));var h=u==objectTag&&!isHostObject(e),f=c==objectTag&&!isHostObject(t),l=u==c;if(l&&!a&&!h)return equalByTag(e,t,u,r,n,i);var v=i&PARTIAL_COMPARE_FLAG;if(!v){var p=h&&hasOwnProperty.call(e,"__wrapped__"),g=f&&hasOwnProperty.call(t,"__wrapped__");if(p||g)return r(p?e.value():e,g?t.value():t,n,i,s)}if(!l)return!1;s||(s=new Stack);var d=s.get(e);if(d)return d==t;s.set(e,t);var b=(a?equalArrays:equalObjects)(e,t,r,n,i,s);return s["delete"](e),b}function baseMap(e,t){var r=-1,n=isArrayLike(e)?Array(e.length):[];return baseEach(e,function(e,i,s){n[++r]=t(e,i,s)}),n}function baseIsEqual(e,t,r,n,i){return e===t?!0:null==e||null==t||!isObject(e)&&!isObjectLike(t)?e!==e&&t!==t:baseIsEqualDeep(e,t,baseIsEqual,r,n,i)}function isEqual(e,t){return baseIsEqual(e,t)}function map(e,t){var r=isArray(e)?arrayMap:baseMap;return r(e,getIteratee(t,3))}function toString(e){return"string"==typeof e?e:null==e?"":e+""}function last(e){var t=e?e.length:0;return t?e[t-1]:void 0}function isIndex(e,t){return e="number"==typeof e||reIsUint.test(e)?+e:-1,t=null==t?MAX_SAFE_INTEGER:t,e>-1&&e%1==0&&t>e}function toPath(e){if(isArray(e))return e;var t=[];return baseToString(e).replace(rePropName,function(e,r,n,i){t.push(n?i.replace(reEscapeChar,"$1"):r||e)}),t}function toObject(e){return isObject(e)?e:Object(e)}function createCaseFirst(e){return function(t){t=toString(t);var r=reHasComplexSymbol.test(t)?stringToArray(t):void 0,n=r?r[0]:t.charAt(0),i=r?r.slice(1).join(""):t.slice(1);return n[e]()+i}}function capitalize(e){return upperFirst(toString(e).toLowerCase())}function deburr(e){return e=toString(e),e&&e.replace(reLatin1,deburrLetter).replace(reComboMark,"")}function deburrLetter(e){return deburredLetters[e]}function words(e,t,r){return e=toString(e),t=r?void 0:t,void 0===t&&(t=reHasComplexWord.test(e)?reComplexWord:reBasicWord),e.match(t)||[]}function arrayReduce(e,t,r,n){var i=-1,s=e.length;for(n&&s&&(r=e[++i]);++i<s;)r=t(r,e[i],i,e);return r}function createCompounder(e){return function(t){return arrayReduce(words(deburr(t)),e,"")}}function toFunction(e){return"function"==typeof e?e:identity}function createBaseFor(e){return function(t,r,n){for(var i=Object(t),s=n(t),a=s.length,o=e?a:-1;e?o--:++o<a;){var u=s[o];if(r(i[u],u,i)===!1)break}return t}}function baseForOwn(e,t){return e&&baseFor(e,t,keys)}function createBaseEach(e,t){return function(r,n){if(null==r)return r;if(!isArrayLike(r))return e(r,n);for(var i=r.length,s=t?i:-1,a=Object(r);(t?s--:++s<i)&&n(a[s],s,a)!==!1;);return r}}function arrayEach(e,t){for(var r=-1,n=e.length;++r<n&&t(e[r],r,e)!==!1;);return e}function forEach(e,t){return"function"==typeof t&&isArray(e)?arrayEach(e,t):baseEach(e,toFunction(t))}function keys(e){var t=isPrototype(e);if(!t&&!isArrayLike(e))return baseKeys(e);var r=initKeys(e),n=r.length,i=!!n;for(var s in e)!baseHas(e,s)||i&&isIndex(s,n)||t&&"constructor"==s||r.push(s);return r}function copyArray(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function isObjectLike(e){return!!e&&"object"==typeof e}function isString(e){return"string"==typeof e||!isArray(e)&&isObjectLike(e)&&objToString.call(e)==stringTag}function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&MAX_SAFE_INTEGER>=e}function isFunction(e){var t=isObject(e)?objToString.call(e):"";return t==funcTag||t==genTag}function isUndefined(e){return void 0===e}function iteratorToArray(e){for(var t,r=[];!(t=e.next()).done;)r.push(t.value);return r}function toArray(e){if(!e)return[];if(isArrayLike(e))return isString(e)?stringToArray(e):copyArray(e);if(iteratorSymbol&&e[iteratorSymbol])return iteratorToArray(e[iteratorSymbol]());var t=getTag(e),r=t==mapTag?mapToArray:t==setTag?setToArray:values;return r(e)}function isArrayLike(e){return null!=e&&!("function"==typeof e&&isFunction(e))&&isLength(getLength(e))}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function baseTimes(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function initKeys(e){var t=e?e.length:0;return t=t&&isLength(t)&&(isArray(e)||isString(e)||isArguments(e))&&t||0,baseTimes(t,String)}function baseKeys(e){return nativeKeys(Object(e))}function baseKeysIn(e){e=null==e?e:Object(e);var t=[];for(var r in e)t.push(r);return t}function baseKeysIn(e){e=null==e?e:Object(e);var t=[];for(var r in e)t.push(r);return t}function isPrototype(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||objectProto;return e===r}function keysIn(e){for(var t=-1,r=isPrototype(e),n=baseKeysIn(e),i=n.length,s=initKeys(e),a=s.length,o=!!a;++t<i;){var u=n[t];o&&isIndex(u,a)||"constructor"==u&&(r||!hasOwnProperty.call(e,u))||s.push(u)}return s}function assignValue(e,t,r){var n=e[t];(r===r?r===n:n!==n)&&(void 0!==r||t in e)||(e[t]=r)}function copyObjectWith(e,t,r,n){r||(r={});for(var i=-1,s=t.length;++i<s;){var a=t[i],o=n?n(r[a],e[a],a,r,e):e[a];assignValue(r,a,o)}return r}function copyObject(e,t,r){return copyObjectWith(e,t,r)}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&MAX_SAFE_INTEGER>=e}function baseToPath(e){return isArray(e)?e:stringToPath(e)}function stringToPath(e){var t=[];return toString(e).replace(rePropName,function(e,r,n,i){t.push(n?i.replace(reEscapeChar,"$1"):r||e)}),t}function baseSlice(e,t,r){var n=-1,i=e.length;t=null==t?0:toInteger(t),0>t&&(t=-t>i?0:i+t),r=void 0===r||r>i?i:toInteger(r),0>r&&(r+=i),i=t>r?0:r-t>>>0,t>>>=0;for(var s=Array(i);++n<i;)s[n]=e[n+t];return s}function toInteger(e){return e==INFINITY||e==-INFINITY?(0>e?-1:1)*MAX_INTEGER:e-e%1||0}function parent(e,t){return 1==t.length?e:get(e,baseSlice(t,0,-1))}function hasPath(e,t,r){if(null==e)return!1;var n=r(e,t);return n||isKey(t)||(t=baseToPath(t),e=parent(e,t),null!=e&&(t=last(t),n=r(e,t))),n||isLength(e&&e.length)&&isIndex(t,e.length)&&(isArray(e)||isString(e)||isArguments(e))}function baseSet(e,t,r,n){t=isKey(t,e)?[t+""]:baseToPath(t);for(var i=-1,s=t.length,a=s-1,o=e;null!=o&&++i<s;){var u=t[i];if(isObject(o)){var c=r;if(i!=a){var h=o[u];c=n?n(h,u,o):void 0,void 0===c&&(c=null==h?isIndex(t[i+1])?[]:{}:h)}assignValue(o,u,c)}o=o[u]}return e}function set(e,t,r){return null==e?e:baseSet(e,t,r)}function has(e,t){return hasPath(e,t,baseHas)}function isNumber(e){return"number"==typeof e||isObjectLike(e)&&objToString.call(e)==numberTag}function rest(e,t){if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return t=nativeMax(void 0===t?e.length-1:toInteger(t),0),function(){for(var r=arguments,n=-1,i=nativeMax(r.length-t,0),s=Array(i);++n<i;)s[n]=r[t+n];switch(t){case 0:return e.call(this,s);case 1:return e.call(this,r[0],s);case 2:return e.call(this,r[0],r[1],s)}var a=Array(t+1);for(n=-1;++n<t;)a[n]=r[n];return a[t]=s,e.apply(this,a)}}function createAssigner(e){return rest(function(t,r){var n=-1,i=null==t?0:r.length,s=i>1?r[i-1]:void 0,a=i>2?r[2]:void 0;for(s="function"==typeof s?(i--,s):void 0,a&&isIterateeCall(r[0],r[1],a)&&(s=3>i?void 0:s,i=1),t=Object(t);++n<i;){var o=r[n];o&&e(t,o,s)}return t})}function isKey(e,t){return"number"==typeof e?!0:!isArray(e)&&(reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t))}function baseHas(e,t){return hasOwnProperty.call(e,t)||"object"==typeof e&&t in e&&null===getPrototypeOf(e)}function baseGet(e,t,r){if(null!=e){void 0!==r&&r in toObject(e)&&(t=[r]);for(var n=0,i=t.length;null!=e&&i>n;)e=e[t[n++]];return n&&n==i?e:void 0}}function get(e,t,r){var n=null==e?void 0:baseGet(e,toPath(t),t+"");return void 0===n?r:n}function baseValues(e,t){return arrayMap(t,function(t){return e[t]})}function values(e){return e?baseValues(e,keys(e)):[]}function valueFn(e){return function(){return e}}function createMap(){return Object.create(null)}function noop(){return void 0}function isDefined(e){return!isUndefined(e)}function inherits(e,t,r){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),isObject(r)&&extend(e.prototype,r)}function EventEmitter(){EventEmitter.init.call(this)}function Observer(e,t,r){EventEmitter.call(this);var n=this;this.object=e,t&&(this.parentObserver=t),r&&(this.property=r),this.cachedPath=this.getPath(),this.childObservers={},this.propertiesListener=new EventEmitter,this.on("updated",function(){this.deliverChangeRecords()}).on("changed",function(e){var t,r,n;for(i=0;i<e.length;i++){switch(change=e[i],r=change.name,t=change.object[r],change.type){case"add":isObject(t)&&this.createChildObserver(r,t);break;case"update":case"delete":isObject(change.oldValue)&&(n=this.getChildObserver(change.name))&&n.destroy(),isObject(t)&&this.createChildObserver(r,t)}change.hasOwnProperty("name")&&this.deliverChangedProperty(change)}this.emit("updated")}).on("childChanged",function(e,t){this.emit("updated")}),this.listener=function(e){n.emit("changed",e)},Object.observe(this.object,this.listener),this.walkInto(this.object)}var context=window,stringTag="[object String]",genTag="[object GeneratorFunction]",funcTag="[object Function]",objectProto=context.Object.prototype,nativeMax=Math.max,objToString=objectProto.toString,reLatin1=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,rsAstralRange="\\ud800-\\udfff",rsComboRange="\\u0300-\\u036f\\ufe20-\\ufe23",rsDingbatRange="\\u2700-\\u27bf",rsLowerRange="a-z\\xdf-\\xf6\\xf8-\\xff",rsMathOpRange="\\xac\\xb1\\xd7\\xf7",rsNonCharRange="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",rsQuoteRange="\\u2018\\u2019\\u201c\\u201d",rsSpaceRange=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsUpperRange="A-Z\\xc0-\\xd6\\xd8-\\xde",rsVarRange="\\ufe0e\\ufe0f",rsBreakRange=rsMathOpRange+rsNonCharRange+rsQuoteRange+rsSpaceRange,rsAstral="["+rsAstralRange+"]",rsBreak="["+rsBreakRange+"]",rsCombo="["+rsComboRange+"]",rsDigits="\\d+",rsDingbat="["+rsDingbatRange+"]",rsLower="["+rsLowerRange+"]",rsMisc="[^"+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+"]",rsModifier="(?:\\ud83c[\\udffb-\\udfff])",rsNonAstral="[^"+rsAstralRange+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="["+rsUpperRange+"]",rsZWJ="\\u200d",reComboMark=RegExp(rsCombo,"g"),rsLowerMisc="(?:"+rsLower+"|"+rsMisc+")",rsUpperMisc="(?:"+rsUpper+"|"+rsMisc+")",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange+"]?",rsOptJoin="(?:"+rsZWJ+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reHasComplexSymbol=RegExp("["+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+"]"),reBasicWord=/[a-zA-Z0-9]+/g,reComplexWord=RegExp([rsUpper+"?"+rsLower+"+(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsUpperMisc+"+(?="+[rsBreak,rsUpper+rsLowerMisc,"$"].join("|")+")",rsUpper+"?"+rsLowerMisc+"+",rsDigits+"(?:"+rsLowerMisc+"+)?",rsEmoji].join("|"),"g"),reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,reHasComplexWord=/[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,arrayProto=context.Array.prototype,objectProto=context.Object.prototype,stringProto=context.String.prototype,nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeIsFinite=context.isFinite,nativeKeys=Object.keys,nativeMax=Math.max,nativeMin=Math.min,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse,INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1e308,reIsUint=/^\d+$/,baseEach=createBaseEach(baseForOwn),lowercase=createCompounder(function(e,t,r){return e+(r?" ":"")+t.toLowerCase()}),camelCase=createCompounder(function(e,t,r){return t=t.toLowerCase(),e+(r?capitalize(t):t)}),upperFirst=createCaseFirst("toUpperCase"),baseFor=createBaseFor(),isArray=Array.isArray,MAX_SAFE_INTEGER=9007199254740991,getLength=baseProperty("length"),extend=createAssigner(function(e,t){copyObject(t,keysIn(t),e)}),domain;EventEmitter.EventEmitter=EventEmitter,EventEmitter.usingDomains=!1,EventEmitter.prototype.domain=void 0,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.init=function(){this.domain=null,EventEmitter.usingDomains&&(domain=domain||require("domain"),!domain.active||this instanceof domain.Domain||(this.domain=domain.active)),this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events={}),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function(e){if(!isNumber(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},EventEmitter.prototype.emit=function(e){var t,r,n,i,s,a;if(this._events||(this._events={}),"error"===e&&!this._events.error){if(t=arguments[1],!this.domain)throw t instanceof Error?t:Error('Uncaught, unspecified "error" event.');return t||(t=new Error('Uncaught, unspecified "error" event.')),t.domainEmitter=this,t.domain=this.domain,t.domainThrown=!1,this.domain.emit("error",t),!1}if(r=this._events[e],isUndefined(r))return!1;if(this.domain&&this!==process&&this.domain.enter(),isFunction(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(n=arguments.length,i=new Array(n-1),s=1;n>s;s++)i[s-1]=arguments[s];r.apply(this,i)}else if(isObject(r)){for(n=arguments.length,i=new Array(n-1),s=1;n>s;s++)i[s-1]=arguments[s];for(a=r.slice(),n=a.length,s=0;n>s;s++)a[s].apply(this,i)}return this.domain&&this!==process&&this.domain.exit(),!0},EventEmitter.prototype.addListener=function(e,t){var r;if(!isFunction(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,isFunction(t.listener)?t.listener:t),this._events[e]?isArray(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,isObject(this._events[e])&&!this._events[e].warned){var r;r=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d %s listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length,e),console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!isFunction(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},EventEmitter.prototype.removeListener=function(e,t){var r,n,i,s;if(!isFunction(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],i=r.length,n=-1,r===t||isFunction(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(isObject(r)){for(s=i;s-->0;)if(r[s]===t||r[s].listener&&r[s].listener===t){n=s;break}if(0>n)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},EventEmitter.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],isFunction(r))this.removeListener(e,r);else if(Array.isArray(r))for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},EventEmitter.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?isFunction(this._events[e])?[this._events[e]]:this._events[e].slice():[]},EventEmitter.listenerCount=function(e,t){var r;return r=e._events&&e._events[t]?isFunction(e._events[t])?1:e._events[t].length:0},inherits(Observer,EventEmitter,{getPath:function(){for(var e=[],t=this.parentObserver;t;)t.hasOwnProperty("property")&&e.push(t.property),t=t.hasOwnProperty("parentObserver")?t.parentObserver:null;return this.property&&e.unshift(this.property),e.join(".")},deliverChangedProperty:function(e){var t=e.name,r=this.cachedPath.split(".").filter(function(e){return e.match(/\S/)});r.unshift(t),r.reverse(),r=r.join("."),this.emit("changedProperty",r,e.object[e.name])},deliverChangeRecords:function(e){var t,r,n,i=Object.keys(this.childObservers);for(r=0;r<i.length;r++)n=i[r],this.childObservers.hasOwnProperty(n)&&(t=this.childObservers[n],t.deliverChangeRecords());return Object.deliverChangeRecords(this.listener),this},getChildObserver:function(e){return this.childObservers[e]},createChildObserver:function(e,t){var r=this;this.childObservers.hasOwnProperty(e)&&this.childObservers[e].destroy();var n=new Observer(t,this,e);return Object.deliverChangeRecords(this.listener),this.childObservers[e]=n,n.on("updated",function(t){r.emit("childChanged",e,t)}).on("changedProperty",function(e,t){r.emit("changedProperty",e,t)}),this},destroy:function(){var e=this;return Object.unobserve(this.object,this.listener),forEach(this.childObservers,function(t,r){e.childObservers[r].destroy()}),this.property&&delete this.parentObserver.childObservers[this.property],this},walkInto:function(e){var t=this;return forEach(e,function(e,r){isObject(e)&&t.createChildObserver(r,e)}),this}});