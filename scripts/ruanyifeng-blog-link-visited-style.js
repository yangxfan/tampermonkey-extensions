// ==UserScript==
// @name         阮一峰博客里点击过的文章链接的文字颜色修改
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.2
// @description  文章列表过多时，不好确认哪些文章点击访问过，该插件为了区分这种情况，突出已点击过的文章链接的文字颜色为红色
// @author       yangxfan
// @match        *://*.ruanyifeng.com/blog/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ruanyifeng.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/ruanyifeng-blog-link-visited-style.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/ruanyifeng-blog-link-visited-style.js
// ==/UserScript==

/**
 * 2024-03-29
 * 0.2
 * 优化匹配地址
 *
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
    stylesheet.insertRule(`#content a:visited {color: #f00 !important;}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()
})()
