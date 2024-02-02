// ==UserScript==
// @name         jb51文章可复制
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.1
// @description  没有登录，复制内容时，会复制失败，该脚本可以复制内容
// @author       yangxfan
// @match        *://www.jb51.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jb51.net
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/jb51-article-replicable.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/jb51-article-replicable.js
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
    // 代码块修改为可复制样式
    stylesheet.insertRule(`.jb51code {user-select: auto;}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()

  if ($) {
    // 解绑文章的 copy 事件
    $(".jb51code").unbind("copy")
  }
})(jQuery)
