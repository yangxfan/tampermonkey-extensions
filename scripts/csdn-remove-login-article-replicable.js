// ==UserScript==
// @name         CSDN去掉登录弹框和文章可复制
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.2
// @description  没有登录，复制内容时，会复制失败和显示登录弹框，去掉登录弹框并可复制；去掉复制内容的版权声明
// @author       yangxfan
// @match        *://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/csdn-remove-login-article-replicable.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/csdn-remove-login-article-replicable.js
// ==/UserScript==

/**
 * 2024-02-02
 * 0.2
 * 代码块可复制
 *
 * 2024-01-11
 * 0.1
 * 首次提交
 */

(($) => {
  // 添加新的样式规则
  const addStylesheetRules = () => {
    const styleEl = document.createElement('style')
    document.head.appendChild(styleEl)
    const stylesheet = styleEl.sheet
    // 隐藏登录弹框
    stylesheet.insertRule(`.passport-login-container {display: none !important}`, stylesheet.cssRules.length)
    // 代码块修改为可复制样式
    stylesheet.insertRule(`#content_views pre {user-select: auto;}`, stylesheet.cssRules.length)
    stylesheet.insertRule(`#content_views pre code {user-select: auto;}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()

  if ($) {
    // 解绑文章的 copy 事件
    $("#content_views").unbind("copy")
  }
  // 去掉“复制字符大于 140 时，追加版权声明”逻辑，是通过替换节点移除事件监听来实现的
  const oldContainer = document.querySelector('.blog-content-box')
  if (oldContainer) {
    const newContainer = oldContainer.cloneNode(true)
    oldContainer.parentNode.replaceChild(newContainer, oldContainer)
  }
})(jQuery)
