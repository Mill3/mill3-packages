var BarbaScripts=function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SCRIPTS_SELECTOR",(function(){return SCRIPTS_SELECTOR})),__webpack_require__.d(__webpack_exports__,"INLINE_SCRIPTS_SELECTOR",(function(){return INLINE_SCRIPTS_SELECTOR})),__webpack_require__.d(__webpack_exports__,"Scripts",(function(){return Scripts}));var version="0.2.2",SCRIPTS_SELECTOR='script[type="text/javascript"]',INLINE_SCRIPTS_SELECTOR='script:not([src]):not([type="application/ld+json"]):not([type="application/json"]):not([type="text/html"])',Scripts=function(){function Scripts(){_classCallCheck(this,Scripts),this.name="@barba/scripts",this.version=version,this.barba,this.logger,this._parser,this._source}return _createClass(Scripts,[{key:"install",value:function(e){this.logger=new e.Logger(this.name),this.logger.info(this.version),this.barba=e,this._parser=new DOMParser}},{key:"init",value:function(){this.barba.hooks.beforeEnter(this._beforeEnter,this),this.barba.hooks.after(this._after,this)}},{key:"add",value:function(e){var r=this;if(!e||0===e.length)return Promise.resolve();var t=document.querySelector("head"),n=this._getScripts(document).map((function(e){return r._getScriptNamespace(e)})),i=[];return e.forEach((function(e){if(!n.includes(r._getScriptNamespace(e))){var t=document.createElement("script");r._copyAttributes(t,e),e.text&&t.appendChild(document.createTextNode(e.text)),i.push(t)}})),i.length>0?i.reduce((function(e,n){return e.then((function(){return n.text?r._inlineScript(n,t):r._loadScript(n,t)}))}),Promise.resolve()):Promise.resolve()}},{key:"run",value:function(e){var r=this;if(!e||0===e.length)return Promise.resolve();var t=[];return e.forEach((function(e){var n=document.createElement("script");r._copyAttributes(n,e),e.text?(n.appendChild(document.createTextNode(e.text)),t.push({script:n,target:e.parentNode}),e.parentNode.removeChild(e)):r.logger.warn("Unable to execute this script because it does not contains inlined code.",e)})),t.reduce((function(e,t){var n=t.script,i=t.target;return e.then((function(){return r._inlineScript(n,i)}))}),Promise.resolve())}},{key:"_getScripts",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:SCRIPTS_SELECTOR,t=e.querySelector("head"),n=e.querySelector("body");return[].concat(_toConsumableArray(t.querySelectorAll(r)),_toConsumableArray(n.querySelectorAll(r)))}},{key:"_loadScript",value:function(e,r){return new Promise((function(t,n){e.onload=t,e.onerror=n,r.appendChild(e)}))}},{key:"_inlineScript",value:function _inlineScript(script,target){var _this3=this;return new Promise((function(resolve){target.appendChild(script);try{eval(script.innerHTML)}catch(e){_this3.logger.error(e)}resolve()}))}},{key:"_getScriptNamespace",value:function(e){return e.src?e.src:e.text}},{key:"_copyAttributes",value:function(e,r){if(r.hasAttributes())for(var t=r.attributes,n=t.length-1;n>=0;n--)e.setAttribute(t[n].name,t[n].value)}},{key:"_beforeEnter",value:function(e){this._source=this._parser.parseFromString(e.next.html,"text/html");var r=this._getScripts(this._source);return this.add(r)}},{key:"_after",value:function(e){var r=this._parser.parseFromString(e.next.html,"text/html"),t=this._getScripts(r,INLINE_SCRIPTS_SELECTOR);return this.run(t)}}]),Scripts}(),scripts=new Scripts;__webpack_exports__.default=scripts}]);const _BarbaScripts$SCRIPTS_SELECTOR=BarbaScripts.SCRIPTS_SELECTOR,_BarbaScripts$INLINE_SCRIPTS_SELECTOR=BarbaScripts.INLINE_SCRIPTS_SELECTOR,_BarbaScripts$Scripts=BarbaScripts.Scripts;export default BarbaScripts.default;export{_BarbaScripts$SCRIPTS_SELECTOR as SCRIPTS_SELECTOR,_BarbaScripts$INLINE_SCRIPTS_SELECTOR as INLINE_SCRIPTS_SELECTOR,_BarbaScripts$Scripts as Scripts};