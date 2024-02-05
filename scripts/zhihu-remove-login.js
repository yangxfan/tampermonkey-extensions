// ==UserScript==
// @name         知乎去掉没有登录时的登录弹框
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.3
// @description  查看知乎文章时，不想登录，又不想看到登录弹框，又不想点击"x"关闭或者"ESC"关闭，所以写了样式隐藏登录弹框；去掉复制内容的版权声明
// @author       yangxfan
// @match        *://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/zhihu-remove-login.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/zhihu-remove-login.js
// ==/UserScript==

/**
 * 2024-02-15
 * 0.3
 * 修复文章中图片懒加载失败的问题
 * 添加 jQuery 依赖，改用 jQuery 方式解绑复制监听事件
 *
 * 2024-01-10
 * 0.2
 * 去掉复制内容的版权声明
 *
 * 2024-01-09
 * 0.1
 * 首次提交
 */

(() => {
  // 添加新的样式规则
  const addStylesheetRules = () => {
    const styleEl = document.createElement('style')
    document.head.appendChild(styleEl)
    const stylesheet = styleEl.sheet
    stylesheet.insertRule(`html {overflow: auto !important}`, stylesheet.cssRules.length)
    stylesheet.insertRule(`.Modal-wrapper {display: none !important}`, stylesheet.cssRules.length)
  }

  addStylesheetRules()

  if (jQuery) {
    jQuery('.RichText').unbind('copy')
  }
})()
