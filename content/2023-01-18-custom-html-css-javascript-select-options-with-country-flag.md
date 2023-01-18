---
title: "A Custom Vanilla Javascript Select"
cover: "advent-of-code-day-one-solution.jpg"
date: "2022-01-18"
category: "javascript"
slug: "custom-html-css-javascript-select-options-with-country-flag"

tags:
  - javascript
  - html
  - css
---



<div class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="RwBLQoG" data-preview="true" data-editable="true" data-user="Vinny92"  data-prefill='{"title":"Custom Javascript Select","description":"Customizable select with country flags","tags":["select","vanilla","javascript"],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="html">&lt;STYLE>
	.fsb-button {
 			 padding: unset !important;
  }

   [data-value] {
    position:relative;
  }

   [data-value]::after {
    content: "";
    position: absolute;
    left: 7px;
	  margin-right:7px;
    width: 29px;
    height: 19px;
    }
	
	[data-value="it"]::after {
    background-position: center;
    bottom: -webkit-calc(22%);
    bottom: -moz-calc(22%);
    bottom: calc(22%);
    -webkit-background-size: 100% 100% !important;
       -moz-background-size: 100% 100% !important;
         -o-background-size: 100% 100% !important;
            background-size: 100% 100% !important;
    background: url('https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Italy.svg') no-repeat;
}

[data-value="en"]::after {
     background-position: center;
    bottom: -webkit-calc(26%);
    bottom: -moz-calc(26%);
    bottom: calc(26%);
    -webkit-background-size: 100% 100% !important;
       -moz-background-size: 100% 100% !important;
         -o-background-size: 100% 100% !important;
            background-size: 100% 100% !important;
    background: url(https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Spain.svg) no-repeat;
}
  body {
display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
      color: #404040;
  background: #282537;
  background-image: -webkit-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
  background-image: -moz-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
  background-image: -o-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
  background-image: radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);
   
  }
&lt;/STYLE>
&lt;body>
&lt;select id="lang">
  &lt;option value="en">English&lt;/option>
  &lt;option value="it">Italiano&lt;/option>
&lt;/select>
&lt;/body></pre>
  <pre data-lang="css">.nice-select {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	background-color: #fff;
	border-radius: 5px;
	border: solid 1px #e8e8e8;
	box-sizing: border-box;
	clear: both;
	cursor: pointer;
	display: block;
	float: left;
	font-family: inherit;
	font-size: 14px;
	font-weight: normal;
	height: 38px;
	line-height: 36px;
	outline: none;
	padding-left: 18px;
	padding-right: 30px;
	position: relative;
	text-align: left !important;
	transition: all 0.2s ease-in-out;
	user-select: none;
	white-space: nowrap;
	width: auto;
}
.nice-select:hover {
	border-color: #dbdbdb;
}
.nice-select:active,
.nice-select.open,
.nice-select:focus {
	border-color: #999;
}
.nice-select:after {
	border-bottom: 2px solid #999;
	border-right: 2px solid #999;
	content: "";
	display: block;
	height: 5px;
	margin-top: -4px;
	pointer-events: none;
	position: absolute;
	right: 12px;
	top: 50%;
	transform-origin: 66% 66%;
	transform: rotate(45deg);
	transition: all 0.15s ease-in-out;
	width: 5px;
}
.nice-select.open:after {
	transform: rotate(-135deg);
}
.nice-select.open .nice-select-dropdown {
	opacity: 1;
	pointer-events: auto;
	transform: scale(1) translateY(0);
    z-index: 8000;
  width:100%;
}
.nice-select.disabled {
	border-color: #ededed;
	color: #999;
	pointer-events: none;
}
.nice-select.disabled:after {
	border-color: #ccc;
}
.nice-select.wide {
	width: 100%;
}
.nice-select.wide .nice-select-dropdown {
	left: 0 !important;
	right: 0 !important;
}
.nice-select.right {
	float: right;
}
.nice-select.right .nice-select-dropdown {
	left: auto;
	right: 0;
}
.nice-select.small {
	font-size: 12px;
	height: 36px;
	line-height: 34px;
}
.nice-select.small:after {
	height: 4px;
	width: 4px;
}
.nice-select.small .option {
	line-height: 34px;
	min-height: 34px;
}
.nice-select .nice-select-dropdown {
	margin-top: 4px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
	pointer-events: none;
	position: absolute;
	top: 100%;
	left: 0;
	transform-origin: 50% 0;
	transform: scale(0.75) translateY(19px);
	transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
	z-index: 9;
	opacity: 0;
}
.nice-select .list {
	border-radius: 5px;
	box-sizing: border-box;
	overflow: hidden;
	padding: 0;
	max-height: 210px;
	overflow-y: auto;
}
.nice-select .list:hover .option:not(:hover) {
	background-color: rgba(0, 0, 0, 0) !important;
}
.nice-select .option {
	cursor: pointer;
	font-weight: 400;
	list-style: none;
	outline: none;
	padding-left: 43px;
	padding-right: 8px;
	text-align: left;
	transition: all 0.2s;
}
.nice-select .option:hover,
.nice-select .option.focus,
.nice-select .option.selected.focus {
	background-color: #f6f6f6;
}
.nice-select .option.selected {
	font-weight: bold;
}
.nice-select .option.disabled {
	background-color: rgba(0, 0, 0, 0);
	color: #999;
	cursor: default;
}
.nice-select .optgroup {
	font-weight: bold;
}
.no-csspointerevents .nice-select .nice-select-dropdown {
	display: none;
}
.no-csspointerevents .nice-select.open .nice-select-dropdown {
	display: block;
}
.nice-select .list::-webkit-scrollbar {
	width: 0;
}
.nice-select .has-multiple {
	white-space: inherit;
	height: auto;
	padding: 7px 12px;
	min-height: 36px;
	line-height: 22px;
}
.nice-select .has-multiple span.current {
	border: 1px solid #ccc;
	background: #eee;
	padding: 0 10px;
	border-radius: 3px;
	display: inline-block;
	line-height: 24px;
	font-size: 14px;
	margin-bottom: 3px;
	margin-right: 3px;
}
.nice-select .has-multiple .multiple-options {
	display: block;
	line-height: 24px;
	padding: 0;
}
.nice-select .nice-select-search-box {
	box-sizing: border-box;
	width: 100%;
	padding: 5px;
	pointer-events: none;
	border-radius: 5px 5px 0 0;
}
.nice-select .nice-select-search {
	box-sizing: border-box;
	background-color: #fff;
	border: 1px solid #e8e8e8;
	border-radius: 3px;
	color: #444;
	display: inline-block;
	vertical-align: middle;
	padding: 7px 12px;
	margin: 0 10px 0 0;
	width: 100%;
	min-height: 36px;
	line-height: 22px;
	height: auto;
	outline: 0 !important;
	font-size: 14px;
}
.current {
    position:relative;
    padding-left: 2rem;
}

.current::after {
    content: "";
    position: absolute;
    left: -10px;
    bottom: -webkit-calc(0%);
    bottom: -moz-calc(0%);
    bottom: calc(0%);
    width: 29px;
    height: 18px;
    background-repeat: no-repeat !important;
}</pre>
  <pre data-lang="js">!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.NiceSelect = t())
    : (e.NiceSelect = t());
})(self, () =>
  (() => {
    "use strict";
    var e = {
        d: (t, i) => {
          for (var s in i)
            e.o(i, s) &&
              !e.o(t, s) &&
              Object.defineProperty(t, s, { enumerable: !0, get: i[s] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }
      },
      t = {};
    function i(e) {
      var t = document.createEvent("MouseEvents");
      t.initEvent("click", !0, !1), e.dispatchEvent(t);
    }
    function s(e) {
      var t = document.createEvent("HTMLEvents");
      t.initEvent("change", !0, !1), e.dispatchEvent(t);
    }
    function o(e) {
      var t = document.createEvent("FocusEvent");
      t.initEvent("focusin", !0, !1), e.dispatchEvent(t);
    }
    function n(e) {
      var t = document.createEvent("FocusEvent");
      t.initEvent("focusout", !0, !1), e.dispatchEvent(t);
    }
    function d(e) {
      var t = document.createEvent("UIEvent");
      t.initEvent("modalclose", !0, !1), e.dispatchEvent(t);
    }
    function l(e, t) {
      "invalid" == t
        ? (c(this.dropdown, "invalid"), h(this.dropdown, "valid"))
        : (c(this.dropdown, "valid"), h(this.dropdown, "invalid"));
    }
    function r(e, t) {
      return null != e[t] ? e[t] : e.getAttribute(t);
    }
    function a(e, t) {
      return !!e && e.classList.contains(t);
    }
    function c(e, t) {
      if (e) return e.classList.add(t);
    }
    function h(e, t) {
      if (e) return e.classList.remove(t);
    }
    e.r(t), e.d(t, { bind: () => f, default: () => u });
    var p = { data: null, searchable: !1, showSelectedItems: !1 };
    function u(e, t) {
      (this.el = e),
        (this.config = Object.assign({}, p, t || {})),
        (this.data = this.config.data),
        (this.selectedOptions = []),
        (this.placeholder =
          r(this.el, "placeholder") ||
          this.config.placeholder ||
          "Select an option"),
        (this.searchtext =
          r(this.el, "searchtext") || this.config.searchtext || "Search"),
        (this.selectedtext =
          r(this.el, "selectedtext") || this.config.selectedtext || "selected"),
        (this.dropdown = null),
        (this.multiple = r(this.el, "multiple")),
        (this.disabled = r(this.el, "disabled")),
        this.create();
    }
    function f(e, t) {
      return new u(e, t);
    }
    return (
      (u.prototype.create = function () {
        (this.el.style.opacity = "0"),
          (this.el.style.width = "0"),
          (this.el.style.padding = "0"),
          (this.el.style.height = "0"),
          this.data ? this.processData(this.data) : this.extractData(),
          this.renderDropdown(),
          this.bindEvent();
      }),
      (u.prototype.processData = function (e) {
        var t = [];
        e.forEach((e) => {
          t.push({
            data: e,
            attributes: {
              selected: !!e.selected,
              disabled: !!e.disabled,
              optgroup: "optgroup" == e.value
            }
          });
        }),
          (this.options = t);
      }),
      (u.prototype.extractData = function () {
        var e = this.el.querySelectorAll("option,optgroup"),
          t = [],
          i = [],
          s = [];
        e.forEach((e) => {
          if ("OPTGROUP" == e.tagName)
            var s = { text: e.label, value: "optgroup" };
          else
            s = {
              text: e.innerText,
              value: e.value,
              selected:
                null != e.getAttribute("selected") || this.el.value == e.value,
              disabled: null != e.getAttribute("disabled")
            };
          var o = {
            selected: e.selected,
            disabled: e.disabled,
            optgroup: "OPTGROUP" == e.tagName
          };
          t.push(s), i.push({ data: s, attributes: o });
        }),
          (this.data = t),
          (this.options = i),
          this.options.forEach((e) => {
            e.attributes.selected && s.push(e);
          }),
          (this.selectedOptions = s);
      }),
      (u.prototype.renderDropdown = function () {
        var e = [
          "nice-select",
          r(this.el, "class") || "",
          this.disabled ? "disabled" : "",
          this.multiple ? "has-multiple" : ""
        ];
        let t = '&lt;div class="nice-select-search-box">';
        (t += `&lt;input type="text" class="nice-select-search" placeholder="${this.searchtext}..." title="search"/>`),
          (t += "&lt;/div>");
        var i = `&lt;div class="${e.join(" ")}" tabindex="${
          this.disabled ? null : 0
        }">`;
        (i += `&lt;span class="${
          this.multiple ? "multiple-options" : "current"
        }">&lt;/span>`),
          (i += '&lt;div class="nice-select-dropdown">'),
          (i += `${this.config.searchable ? t : ""}`),
          (i += '&lt;ul class="list">&lt;/ul>'),
          (i += "&lt;/div>"),
          (i += "&lt;/div>"),
          this.el.insertAdjacentHTML("afterend", i),
          (this.dropdown = this.el.nextElementSibling),
          this._renderSelectedItems(),
          this._renderItems();
      }),
      (u.prototype._renderSelectedItems = function () {
        if (this.multiple) {
          var e = "";
          this.config.showSelectedItems ||
          this.config.showSelectedItems ||
          "auto" == window.getComputedStyle(this.dropdown).width ||
          this.selectedOptions.length &lt; 2
            ? (this.selectedOptions.forEach(function (t) {
                e += `&lt;span class="current">${t.data.text}&lt;/span>`;
              }),
              (e = "" == e ? this.placeholder : e))
            : (e = this.selectedOptions.length + " " + this.selectedtext),
            (this.dropdown.querySelector(".multiple-options").innerHTML = e);
        } else {
          var t =
            this.selectedOptions.length > 0
              ? this.selectedOptions[0].data.text
              : this.placeholder;
          this.dropdown.querySelector(".current").innerHTML = t;
        }
      }),
      (u.prototype._renderItems = function () {
        var e = this.dropdown.querySelector("ul");
        this.options.forEach((t) => {
          e.appendChild(this._renderItem(t));
        });
      }),
      (u.prototype._renderItem = function (e) {
        var t = document.createElement("li");
        if (((t.innerHTML = e.data.text), e.attributes.optgroup))
          c(t, "optgroup");
        else {
          t.setAttribute("data-value", e.data.value);
          var i = [
            "option",
            e.attributes.selected ? "selected" : null,
            e.attributes.disabled ? "disabled" : null
          ];
          t.addEventListener("click", this._onItemClicked.bind(this, e)),
            t.classList.add(...i);
        }
        return (e.element = t), t;
      }),
      (u.prototype.update = function () {
        if ((this.extractData(), this.dropdown)) {
          var e = a(this.dropdown, "open");
          this.dropdown.parentNode.removeChild(this.dropdown),
            this.create(),
            e && i(this.dropdown);
        }
        r(this.el, "disabled") ? this.disable() : this.enable();
      }),
      (u.prototype.disable = function () {
        this.disabled || ((this.disabled = !0), c(this.dropdown, "disabled"));
      }),
      (u.prototype.enable = function () {
        this.disabled && ((this.disabled = !1), h(this.dropdown, "disabled"));
      }),
      (u.prototype.clear = function () {
        this.resetSelectValue(),
          (this.selectedOptions = []),
          this._renderSelectedItems(),
          this.update(),
          s(this.el);
      }),
      (u.prototype.destroy = function () {
        this.dropdown &&
          (this.dropdown.parentNode.removeChild(this.dropdown),
          (this.el.style.display = ""));
      }),
      (u.prototype.bindEvent = function () {
        this.dropdown.addEventListener("click", this._onClicked.bind(this)),
          this.dropdown.addEventListener(
            "keydown",
            this._onKeyPressed.bind(this)
          ),
          this.dropdown.addEventListener("focusin", o.bind(this, this.el)),
          this.dropdown.addEventListener("focusout", n.bind(this, this.el)),
          this.el.addEventListener("invalid", l.bind(this, this.el, "invalid")),
          window.addEventListener("click", this._onClickedOutside.bind(this)),
          this.config.searchable && this._bindSearchEvent();
      }),
      (u.prototype._bindSearchEvent = function () {
        var e = this.dropdown.querySelector(".nice-select-search");
        e &&
          e.addEventListener("click", function (e) {
            return e.stopPropagation(), !1;
          }),
          e.addEventListener("input", this._onSearchChanged.bind(this));
      }),
      (u.prototype._onClicked = function (e) {
        var t, i;
        if (
          (e.preventDefault(),
          a(this.dropdown, "open")
            ? this.multiple || (h(this.dropdown, "open"), d(this.el))
            : (c(this.dropdown, "open"),
              (t = this.el),
              (i = document.createEvent("UIEvent")).initEvent(
                "modalopen",
                !0,
                !1
              ),
              t.dispatchEvent(i)),
          a(this.dropdown, "open"))
        ) {
          var s = this.dropdown.querySelector(".nice-select-search");
          s && ((s.value = ""), s.focus());
          var o = this.dropdown.querySelector(".focus");
          h(o, "focus"),
            c((o = this.dropdown.querySelector(".selected")), "focus"),
            this.dropdown.querySelectorAll("ul li").forEach(function (e) {
              e.style.display = "";
            });
        } else this.dropdown.focus();
      }),
      (u.prototype._onItemClicked = function (e, t) {
        var i = t.target;
        a(i, "disabled") ||
          (this.multiple
            ? a(i, "selected")
              ? (h(i, "selected"),
                this.selectedOptions.splice(this.selectedOptions.indexOf(e), 1),
                this.el
                  .querySelector(`option[value="${i.dataset.value}"]`)
                  .removeAttribute("selected"))
              : (c(i, "selected"), this.selectedOptions.push(e))
            : (this.selectedOptions.forEach(function (e) {
                h(e.element, "selected");
              }),
              c(i, "selected"),
              (this.selectedOptions = [e])),
          this._renderSelectedItems(),
          this.updateSelectValue());
      }),
      (u.prototype.updateSelectValue = function () {
        if (this.multiple) {
          var e = this.el;
          this.selectedOptions.forEach(function (t) {
            var i = e.querySelector(`option[value="${t.data.value}"]`);
            i && i.setAttribute("selected", !0);
          });
        } else
          this.selectedOptions.length > 0 &&
            (this.el.value = this.selectedOptions[0].data.value);
        s(this.el);
      }),
      (u.prototype.resetSelectValue = function () {
        if (this.multiple) {
          var e = this.el;
          this.selectedOptions.forEach(function (t) {
            var i = e.querySelector(`option[value="${t.data.value}"]`);
            i && i.removeAttribute("selected");
          });
        } else this.selectedOptions.length > 0 && (this.el.selectedIndex = -1);
        s(this.el);
      }),
      (u.prototype._onClickedOutside = function (e) {
        this.dropdown.contains(e.target) ||
          (h(this.dropdown, "open"), d(this.el));
      }),
      (u.prototype._onKeyPressed = function (e) {
        var t = this.dropdown.querySelector(".focus"),
          s = a(this.dropdown, "open");
        if (13 == e.keyCode) i(s ? t : this.dropdown);
        else if (40 == e.keyCode) {
          if (s) {
            var o = this._findNext(t);
            o &&
              (h(this.dropdown.querySelector(".focus"), "focus"),
              c(o, "focus"));
          } else i(this.dropdown);
          e.preventDefault();
        } else if (38 == e.keyCode) {
          if (s) {
            var n = this._findPrev(t);
            n &&
              (h(this.dropdown.querySelector(".focus"), "focus"),
              c(n, "focus"));
          } else i(this.dropdown);
          e.preventDefault();
        } else if (27 == e.keyCode && s) i(this.dropdown);
        else if (32 === e.keyCode && s) return !1;
        return !1;
      }),
      (u.prototype._findNext = function (e) {
        for (
          e = e
            ? e.nextElementSibling
            : this.dropdown.querySelector(".list .option");
          e;

        ) {
          if (!a(e, "disabled") && "none" != e.style.display) return e;
          e = e.nextElementSibling;
        }
        return null;
      }),
      (u.prototype._findPrev = function (e) {
        for (
          e = e
            ? e.previousElementSibling
            : this.dropdown.querySelector(".list .option:last-child");
          e;

        ) {
          if (!a(e, "disabled") && "none" != e.style.display) return e;
          e = e.previousElementSibling;
        }
        return null;
      }),
      (u.prototype._onSearchChanged = function (e) {
        var t = a(this.dropdown, "open"),
          i = e.target.value;
        if ("" == (i = i.toLowerCase()))
          this.options.forEach(function (e) {
            e.element.style.display = "";
          });
        else if (t) {
          var s = new RegExp(i);
          this.options.forEach(function (e) {
            var t = e.data.text.toLowerCase(),
              i = s.test(t);
            e.element.style.display = i ? "" : "none";
          });
        }
        this.dropdown.querySelectorAll(".focus").forEach(function (e) {
          h(e, "focus");
        }),
          c(this._findNext(null), "focus");
      }),
      t
    );
  })()
);

NiceSelect.bind(document.getElementById("lang"), {});

let current = document.querySelector(".current").textContent;

if (current == "English") {
  document.head.innerHTML +=
    "&lt;style type='text/css' class='en-flag'>.current:after { background:url('https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Spain.svg') no-repeat; background-position: center; background-size: contain !important; }&lt;/style>";
}

if (current == "Italiano") {
  document.head.innerHTML +=
    "&lt;style type='text/css' class='it-flag'>.current:after { background:url('https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Italy.svg') no-repeat; background-position: center; background-size: contain !important; }&lt;/style>";
}

document
  .querySelector(".current")
  .addEventListener("DOMSubtreeModified", function (e) {
    console.log(e);
    if (document.querySelector(".current").textContent == "Italiano") {
      const elements = document.getElementsByClassName("en-flag");
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
        document.head.innerHTML +=
    "&lt;style type='text/css' class='it-flag'>.current:after { background:url('https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Italy.svg') no-repeat; background-position: center; background-size: contain !important; }&lt;/style>";
    }
    if (document.querySelector(".current").textContent == "English") {
      const elements = document.getElementsByClassName("it-flag");
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
        document.head.innerHTML +=
    "&lt;style type='text/css' class='it-flag'>.current:after { background:url('https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_Spain.svg') no-repeat; background-position: center; background-size: contain !important; }&lt;/style>";
    }
  });
</pre></div>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>