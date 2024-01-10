// ==UserScript==
// @name         知乎去掉没有登录时的登录弹框
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.1
// @description  查看知乎文章时，不想登录，又不想看到登录弹框，又不想点击"x"关闭或者"ESC"关闭，所以写了样式隐藏登录弹框
// @author       yangxfan
// @match        *://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(() => {
  const addStylesheetRules = () => {
    const styleEl = document.createElement('style')
    document.head.appendChild(styleEl)
    const stylesheet = styleEl.sheet
    stylesheet.insertRule(`html {overflow: auto !important}`, stylesheet.cssRules.length)
    stylesheet.insertRule(`.Modal-wrapper {display: none !important}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()
})()
