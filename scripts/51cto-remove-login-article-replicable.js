// ==UserScript==
// @name         51CTO去掉登录弹框和文章可复制
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.1
// @description  没有登录，复制内容时，会复制失败和显示登录弹框，去掉登录弹框并可复制
// @author       yangxfan
// @match        *://blog.51cto.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=51cto.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/51cto-remove-login-article-replicable.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/51cto-remove-login-article-replicable.js
// ==/UserScript==

/**
 * 2024-02-02
 * 0.1
 * 首次提交
 */

($ => {
  // 添加新的样式规则
  const addStylesheetRules = () => {
    const styleEl = document.createElement('style')
    document.head.appendChild(styleEl)
    const stylesheet = styleEl.sheet
    // 隐藏登录弹框
    stylesheet.insertRule(`#login_iframe_mask {display: none !important}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()

  setTimeout(() => {
    if ($) {
      // 解绑文章的 copy 事件
      $("#result").unbind("copy")
    }
  }, 1000)
})(jQuery)
