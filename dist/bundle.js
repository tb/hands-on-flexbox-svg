/**
 * Load svg via ajax
 * @param  {string} url path to svg sprite
 * @generator: webpack-svgstore-plugin
 * @see: https://www.npmjs.com/package/webpack-svgstore-plugin
 * @return {[type]}     [description]
 */
function svgXHR(url, baseUrl) {
  var _ajax = new XMLHttpRequest();

  if (typeof XDomainRequest !== 'undefined') {
    _ajax = new XDomainRequest();
  }

  if (typeof baseUrl === 'undefined') {
    if (typeof window.baseUrl !== 'undefined') {
      baseUrl = window.baseUrl;
    } else {
      baseUrl = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
  }

  _ajax.open('GET', baseUrl + url, true);
  _ajax.send();
  _ajax.onload = function() {
    var div = document.createElement('div');
    div.innerHTML = _ajax.responseText;
    document.body.insertBefore(div, document.body.childNodes[0]);
  };
}
document.addEventListener('DOMContentLoaded', svgXHR('/sprites/4d80561f697ad95bd4a8c8b96c655f1a.sprite.svg'), false);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	document.write(__webpack_require__(5));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* > Core\n-------------------------------- */\n/* > Rest\n-------------------------------- */\nbody {\n  background-color: #F5F8FA;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1em; }\n\nhtml {\n  box-sizing: border-box; }\n\n*, *:before, *:after {\n  box-sizing: inherit; }\n\n/* > Base\n-------------------------------- */\nbutton,\ninput[type=button] {\n  font-size: 0.88em;\n  padding: 0.5em 1.46em;\n  font-weight: 700;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 0.1em 0 #1B4672;\n  background-color: #30669D;\n  color: #fff; }\n\ninput[type=text]:focus, input[type=text]:active,\nbutton:focus,\nbutton:active,\ninput[type=button]:focus,\ninput[type=button]:active {\n  outline: none; }\n\n.layout {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n/* > Components\n-------------------------------- */\n.header {\n  flex: 1 1 auto;\n  align-self: stretch;\n  background-color: #fff; }\n  .header__wrapper {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 0;\n    width: 800px;\n    margin: auto; }\n\n/* > Menu\n-------------------------------- */\n.menu {\n  font-size: 0.88em;\n  display: flex;\n  flex-wrap: wrap;\n  font-weight: 700;\n  align-items: center; }\n  .menu__item {\n    color: #657480;\n    text-decoration: none; }\n  .menu__item:not(:last-child) {\n    margin-right: 1.5em; }\n\n/* >Shortcuts\n-------------------------------- */\n.shortcuts {\n  display: flex;\n  align-items: center; }\n\n.profile {\n  width: 3.13em;\n  height: 3.13em;\n  margin-right: 1.06em; }\n  .profile img {\n    border-radius: 4px;\n    width: 100%; }\n  .profile--tweet {\n    margin-right: 1.3em;\n    width: 3.75em;\n    height: 3.75em; }\n\n/* > Logo\n-------------------------------- */\n/* @todo review once svg icons implemented */\n.logo {\n  font-size: 30px;\n  color: #4BAAF4; }\n\n.content {\n  flex: 0 1 auto;\n  display: flex;\n  width: 800px;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 1.88em 0;\n  flex-wrap: wrap; }\n\n.user {\n  font-size: 1.13em;\n  flex: 0 1 300px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  background-color: #fff;\n  border-radius: 6px;\n  margin-bottom: 2em; }\n  .user__cover {\n    flex: 0 0 auto;\n    max-width: 100%; }\n  .user__info {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    flex: 0 0 70%;\n    padding-top: 0.28em; }\n    .user__info__name {\n      font-size: 1em;\n      font-weight: 700; }\n    .user__info__handle {\n      font-size: 0.67em;\n      font-weight: 300; }\n  .user__avatar {\n    flex: 0 0 30%;\n    text-align: center; }\n    .user__avatar img {\n      width: 4.17em;\n      height: 4.17em;\n      border-radius: 4.17em;\n      border: solid #fff 0.22em;\n      margin-top: -2.085em; }\n  .user .stats {\n    display: flex;\n    flex: 1 1 auto;\n    justify-content: space-between;\n    padding: 1em;\n    cursor: pointer; }\n    .user .stats__item {\n      font-size: 1em;\n      font-weight: 700; }\n      .user .stats__item__text {\n        font-size: 0.78em;\n        font-weight: 300;\n        text-transform: uppercase; }\n      .user .stats__item:hover {\n        color: #30669D; }\n\n.feed {\n  flex: 0 1 460px;\n  border-radius: 6px;\n  overflow: hidden; }\n  .feed__issue {\n    background-color: #fff;\n    padding: 2.5em;\n    text-align: center; }\n    .feed__issue__title {\n      font-size: 1.13em;\n      /* 18px */\n      font-weight: 300;\n      margin-bottom: 0.75em; }\n    .feed__issue__message {\n      font-size: 0.75em;\n      /* 12px */ }\n\n/* > Tweet-box\n-------------------------------- */\n.tweet-box {\n  font-size: 0.88em;\n  padding: 0.86em;\n  background-color: #E5ECF2;\n  display: flex; }\n  .tweet-box__input {\n    flex: 1;\n    border-radius: 4px;\n    border: none;\n    padding: 0 1em; }\n\n/* > Tweet\n-------------------------------- */\n.tweet {\n  font-size: 0.88em;\n  /* 14px */\n  background-color: #fff;\n  padding: 1.25em;\n  display: flex; }\n  .tweet:not(:last-child) {\n    border-bottom: solid 0.14em #E5ECF2; }\n  .tweet__content-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column; }\n  .tweet__info {\n    display: flex; }\n    .tweet__info > * {\n      margin-right: 0.4em; }\n    .tweet__info__user-name {\n      font-weight: 700; }\n    .tweet__info__user-handle, .tweet__info__time {\n      font-weight: 300;\n      font-size: 0.86em; }\n    .tweet__info__time {\n      color: #8899A6; }\n  .tweet__content {\n    margin-top: 0.5em; }\n  .tweet__actions {\n    display: flex;\n    color: #AAB8C2;\n    margin-top: 0.8em; }\n    .tweet__actions > * {\n      margin-right: 3em; }\n    .tweet__actions i {\n      font-size: 1em;\n      /* @todo remove this once we migrate to SVG */ }\n\n.footer {\n  flex: 1 1 auto;\n  font-size: 1em;\n  font-weight: 700;\n  color: #AAB8C2;\n  text-shadow: -0.04em 0.04em 0 #FFFFFF;\n  text-align: center;\n  margin-bottom: 0.83em; }\n\n/* > Mobile\n-------------------------------- */\n@media (max-width: 800px) {\n  .header__wrapper {\n    width: auto;\n    padding: 1em;\n    flex-direction: column;\n    align-items: center; }\n  .content {\n    width: 100%; }\n  .user {\n    flex-grow: 1;\n    flex-basis: auto;\n    border-radius: 0; }\n  .feed {\n    flex-grow: 1;\n    flex-basis: auto;\n    border-radius: 0; }\n  .shortcuts {\n    align-self: stretch; }\n    .shortcuts .profile {\n      display: none; }\n    .shortcuts button {\n      width: 100%; }\n  .menu {\n    flex-direction: column;\n    margin-bottom: 40px; }\n    .menu__item:not(:last-child) {\n      margin-bottom: 20px;\n      margin-right: 0; }\n  .logo {\n    order: -1;\n    margin-bottom: 40px; }\n    .logo > i {\n      font-size: 40px; } }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"layout\">\n    <header class=\"header\">\n        <div class=\"header__wrapper\">\n            <div class=\"menu\">\n                <a href=\"#\" class=\"menu__item\">\n                    Home\n                </a>\n                <a href=\"#\" class=\"menu__item\">\n                    Notifications\n                </a>\n                <a href=\"#\" class=\"menu__item\">\n                    Messages\n                </a>\n            </div>\n\n            <div class=\"logo\">\n                <i class=\"fa fa-twitter\"></i>\n            </div>\n\n            <div class=\"shortcuts\">\n                <a href=\"#\" class=\"profile\">\n                    <img src=\"" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/imgs/avatar.png\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "\" alt=\"\">\n                </a>\n\n                <button>Tweet</button>\n            </div>\n        </div>\n    </header>\n\n    <div class=\"content\">\n        <div class=\"user\">\n            <!-- <img src=\"assets/imgs/user-profile-cover.png\" alt=\"User's profile cover\" class=\"user__cover\"> -->\n\n            <div class=\"user__avatar\">\n                <!-- <img src=\"assets/imgs/avatar.png\" alt=\"\"> -->\n            </div>\n\n            <div class=\"user__info\">\n                <div class=\"user__info__name\">Rick Sanchez</div>\n                <div class=\"user__info__handle\">@ricky_invader</div>\n            </div>\n\n            <div class=\"stats\">\n                <div class=\"stats__item\">\n                    <div class=\"stats__item__text\">\n                        Tweets\n                    </div>\n                    1,674\n                </div>\n\n                <div class=\"stats__item\">\n                    <div class=\"stats__item__text\">\n                        Following\n                    </div>\n                    884\n                </div>\n\n                <div class=\"stats__item\">\n                    <div class=\"stats__item__text\">\n                        Followers\n                    </div>\n                    305\n                </div>\n            </div>\n        </div>\n\n        <div class=\"feed\">\n            <div class=\"tweet-box\">\n                <a href=\"#\" class=\"profile\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n                <input type=\"text\" class=\"tweet-box__input\">\n            </div>\n\n            <div class=\"tweet\">\n                <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                <div class=\"tweet__content-wrapper\">\n                    <div class=\"tweet__info\">\n                        <div class=\"tweet__info__user-name\">Internet of shit</div>\n                        <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                        <div class=\"tweet__info__time\">• 34 mins</div>\n                    </div>\n\n                    <div class=\"tweet__content\">\n                        The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                    </div>\n\n                    <div class=\"tweet__actions\">\n                        <div class=\"tweet__actions__reply\">\n                            <i class=\"fa fa-mail-reply\"></i>\n                        </div>\n\n                        <div class=\"tweet__actions__retweet\">\n                            <i class=\"fa fa-retweet\"></i>\n                        </div>\n\n                        <div class=\"tweet__actions__like\">\n                            <i class=\"fa fa-heart\"></i>\n                        </div>\n\n                        <!-- @todo search for icon for this one -->\n                        <!-- <div class=\"tweet__actions__other\">\n                            <i class=\"fa fa-heart\"></i>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n\n            <!-- START:BLOCK -->\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tweet\">\n                    <a href=\"#\" class=\"profile profile--tweet\"> <!-- <img src=\"/assets/imgs/avatar.png\" alt=\"\"> --> </a>\n\n                    <div class=\"tweet__content-wrapper\">\n                        <div class=\"tweet__info\">\n                            <div class=\"tweet__info__user-name\">Internet of shit</div>\n                            <div class=\"tweet__info__user-handle\">@internetofshit</div>\n                            <div class=\"tweet__info__time\">• 34 mins</div>\n                        </div>\n\n                        <div class=\"tweet__content\">\n                            The Internet of Shitty Things is here. Have all of your best home appliances ruined by putting the internet in them!\n                        </div>\n\n                        <div class=\"tweet__actions\">\n                            <div class=\"tweet__actions__reply\">\n                                <i class=\"fa fa-mail-reply\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__retweet\">\n                                <i class=\"fa fa-retweet\"></i>\n                            </div>\n\n                            <div class=\"tweet__actions__like\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div>\n\n                            <!-- @todo search for icon for this one -->\n                            <!-- <div class=\"tweet__actions__other\">\n                                <i class=\"fa fa-heart\"></i>\n                            </div> -->\n                        </div>\n                    </div>\n                </div>\n            <!-- END:BLOCK -->\n\n            <div class=\"feed__issue\">\n                <div class=\"feed__issue__title\">Loading seems to be taking a while...</div>\n                <div class=\"feed__issue__message\">But seriouslly this’s a static page you’re not expecting it to work don’t you?</div>\n            </div>\n        </div>\n    </div>\n\n    <footer class=\"footer\">\n        Hands-on Series: Flexbox & SVG by Tomas and Motaqui brought to you by CN Group.\n    </footer>\n</div>";

/***/ }
/******/ ]);