// ==UserScript==
// @name         Eureka个人博客文章可复制
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.1
// @description  博客内容不可选中和复制，该脚本可以选中和复制内容
// @author       yangxfan
// @match        *://lin64850.github.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=lin64850.github.io
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/eureka-blog-article-replicable.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/eureka-blog-article-replicable.js
// ==/UserScript==

/**
 * 2024-02-21
 * 0.1
 * 首次提交
 */

(() => {
  // 添加新的样式规则
  const addStylesheetRules = () => {
    const styleEl = document.createElement('style')
    document.head.appendChild(styleEl)
    const stylesheet = styleEl.sheet
    stylesheet.insertRule(`body {user-select: auto;}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()
})()
