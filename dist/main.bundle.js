webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_sass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_sass__);


var member = [
	{
		name: '羅于晴',
		work: '工作分配,簡報', 
		skills: '金工,木工,皮革 , SW, Rhions',
		msg: '感恩的心',
		imgUrl: './img/member0.png'
	},
	{
		name: '蔡帛融',
		work: '網站架設,資料視覺化', 
		skills: '繪畫、影片剪輯',
		msg: '我要回美國～',
		imgUrl: './img/member1.png'
	},
	{
		name: '李雨珊',
		work: '文化與觀光嚮導', 
		skills: ' Ai,威力導演',
		msg: '全盤端走～',
		imgUrl: './img/member2.png'
	},
	{
		name: '張家瑜',
		work: '攝影、影片剪輯', 
		skills: '日文、智財相關法規',
		msg: '回家倒垃圾',
		imgUrl: './img/member3.png'
	},
	{
		name: '黃昱豪',
		work: '田野調查 , 口頭報告', 
		skills: 'Ps、口說',
		msg: '我家還沒搬完',
		imgUrl: './img/member4.png'
	},
	{
		name: '陳靜淳',
		work: '繪畫，展版製作', 
		skills: 'Ai、Ps、平面繪畫、SW',
		msg: '我有事先走了',
		imgUrl: './img/member5.png'
	},
	{
		name: '尤威理',
		work: '簡報,資訊圖像化', 
		skills: '簡報設計,資訊設計',
		msg: '很臭，不要',
		imgUrl: './img/member6.png'
	},
	{
		name: '邱芊頻',
		work: '排版編輯、文字內容', 
		skills: ' Ai, Id, 攝影,日文',
		msg: '從缺',
		imgUrl: './img/member7.png'
	},	
	{
		name: '連建榮',
		work: '攝影,影片剪輯', 
		skills: 'Ai, Ps, 土木',
		msg: '我要晾衣服',
		imgUrl: './img/member8.png'
	},
	{
		name: '林亞逸',
		work: '會議記錄,財務管理', 
		skills: 'Ai, Ps, 土木',
		msg: '....XD',
		imgUrl: './img/member9.png'
	},
	{
		name: '林菀婷',
		work: '簡報,企劃發想', 
		skills: '簡報設計,創意思考',
		msg: '我要玩楓之谷',
		imgUrl: './img/member10.png'
	},
]

var app = new Vue({
		el: "#app",
		data: {
			mainBoardCss: {
				logo: {
					marginTop: '0px'
				},
				puzzleBox: {
					marginTop: '200px'
				},
				experienceBox: {
					marginLeft: '0px'
				},
				picnicBox: {
					marginRight: '0px'
				}
			},
			members: member
		},
		methods: {
			move() {
				let scrollY = body.scrollTop 
				let width = window.innerWidth //get screen width
				let experienceMove = (scrollY / 200)*(width*0.5*0.2)
				let picnicMove = (scrollY / 200)*(width*0.5*0.4)
				if( scrollY <= 200){
					this.mainBoardCss.logo.marginTop = `${scrollY*1.5}px`
					this.mainBoardCss.puzzleBox.marginTop = `${200-scrollY*0.8}px`
					this.mainBoardCss.experienceBox.marginLeft = `${experienceMove}px`
					this.mainBoardCss.picnicBox.marginRight = `${picnicMove}px`
				}else if(scrollY <= 250 && scrollY > 200){
					// to asure these block move to the end 
					this.mainBoardCss.picnicBox.marginRight = `${width*0.5*0.4}px`
					this.mainBoardCss.experienceBox.marginLeft = `${width*0.5*0.2}px`
				}
			}
		}
	})

const body = document.querySelector('body')

window.addEventListener("scroll",app.move)

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  border: 0px;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  background-color: #f7eddf; }\n\nbody {\n  overflow-y: hidden; }\n\n#app {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n  #app #banner {\n    position: fixed;\n    width: 100vw;\n    left: 0px;\n    top: 0px;\n    z-index: -1; }\n  #app .mainBox {\n    display: inline-flex;\n    width: 100vw;\n    max-width: 1800px;\n    position: relative; }\n    #app .mainBox .leftSide {\n      display: flex;\n      width: 50%; }\n      #app .mainBox .leftSide .leftBox {\n        display: flex;\n        width: 60%;\n        height: 600px;\n        flex-direction: column;\n        justify-content: flex-start; }\n        #app .mainBox .leftSide .leftBox .logoBox {\n          display: flex;\n          width: calc(100% - 60px);\n          justify-content: center;\n          padding: 40px 30px;\n          background-color: white; }\n          #app .mainBox .leftSide .leftBox .logoBox img {\n            width: calc(100% - 20px);\n            max-width: 180px;\n            align-self: center; }\n      #app .mainBox .leftSide .rightBox {\n        display: flex;\n        width: 40%; }\n        #app .mainBox .leftSide .rightBox .puzzleBox {\n          display: flex;\n          width: calc(100% - 16px);\n          height: 400px;\n          justify-content: center;\n          align-items: center;\n          align-self: flex-start;\n          background-color: rgba(3, 53, 81, 0.5);\n          border: 8px solid white;\n          font-size: 25px;\n          color: white;\n          transition: background-color 0.5s; }\n          #app .mainBox .leftSide .rightBox .puzzleBox:hover {\n            background-color: rgba(3, 53, 81, 0.7); }\n    #app .mainBox .rightSide {\n      display: flex;\n      flex-direction: column;\n      width: 50%; }\n      #app .mainBox .rightSide .topBox {\n        display: flex;\n        width: 100%;\n        height: auto; }\n        #app .mainBox .rightSide .topBox .experienceBox {\n          display: flex;\n          width: 80%;\n          height: 400px;\n          align-self: flex-start;\n          background-color: white;\n          position: relative; }\n          #app .mainBox .rightSide .topBox .experienceBox .container {\n            position: absolute;\n            display: flex;\n            bottom: 0px;\n            left: 0px;\n            margin: 10px;\n            width: calc(100% - 20px);\n            height: 300px;\n            justify-content: center;\n            align-items: center; }\n            #app .mainBox .rightSide .topBox .experienceBox .container #experienceImg {\n              position: absolute;\n              top: 0px;\n              left: 0px;\n              width: 100%;\n              height: 100%; }\n            #app .mainBox .rightSide .topBox .experienceBox .container h2 {\n              color: white;\n              z-index: 1; }\n      #app .mainBox .rightSide .downBox {\n        display: flex;\n        width: 100%;\n        flex-direction: row-reverse; }\n        #app .mainBox .rightSide .downBox .picnicBox {\n          display: inline-flex;\n          width: 60%;\n          height: 200px;\n          background-color: white;\n          justify-content: center;\n          align-items: center; }\n          #app .mainBox .rightSide .downBox .picnicBox .title {\n            display: flex;\n            width: 25%;\n            justify-content: center;\n            align-items: center; }\n            #app .mainBox .rightSide .downBox .picnicBox .title > div {\n              font-size: 22px;\n              width: 30px;\n              padding: 5px;\n              text-align: center;\n              border: 1px solid black; }\n          #app .mainBox .rightSide .downBox .picnicBox #picnicBasket {\n            width: calc(75% - 20px);\n            padding: 10px;\n            height: 180px; }\n\n.membersBoard {\n  display: flex;\n  width: calc(100% - 100px);\n  flex-direction: column;\n  max-width: 1800px;\n  padding: 150px 50px 250px 50px; }\n  .membersBoard h2 {\n    font-family: serif;\n    font-size: 40px;\n    width: 200px;\n    transform: rotate(-20deg) translatex(30px); }\n  .membersBoard .members {\n    display: inline-flex;\n    width: 100%;\n    height: 250px;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: flex-end; }\n    .membersBoard .members .member {\n      position: relative;\n      display: flex;\n      width: 100px;\n      height: 200px;\n      flex-direction: column;\n      transform: translateY(50px);\n      transition: transform 0.4s; }\n      .membersBoard .members .member:hover {\n        transform: translateY(0px); }\n        .membersBoard .members .member:hover .intro {\n          opacity: 1;\n          transform: translateY(-15px); }\n        .membersBoard .members .member:hover img {\n          opacity: 1; }\n        .membersBoard .members .member:hover .arrow-box {\n          opacity: 1; }\n      .membersBoard .members .member .arrow-box {\n        position: absolute;\n        display: flex;\n        background-color: white;\n        right: -40px;\n        top: -40px;\n        width: 90px;\n        height: 50px;\n        border-radius: 10px;\n        justify-content: center;\n        align-items: center;\n        opacity: 0;\n        transition: all 0.5s; }\n        .membersBoard .members .member .arrow-box .arrow {\n          position: absolute;\n          border: transparent;\n          border-top: white;\n          border-style: solid;\n          border-width: 10px;\n          height: 0;\n          width: 0;\n          top: 100%;\n          right: 50px; }\n      .membersBoard .members .member img {\n        width: 100%;\n        opacity: 0.5; }\n      .membersBoard .members .member .intro {\n        display: flex;\n        width: calc(100%);\n        padding: 10px;\n        margin-top: 15px;\n        flex-wrap: wrap;\n        opacity: 0;\n        transition: all 1s; }\n        .membersBoard .members .member .intro h3 {\n          margin-bottom: 0px; }\n        .membersBoard .members .member .intro h5 {\n          margin: 5px 0px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[0]);