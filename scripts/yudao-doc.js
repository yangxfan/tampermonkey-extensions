// ==UserScript==
// @name         芋道文档和博客去掉关注公众号弹框、仅VIP可见、阅读全文等
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.1
// @description  芋道官方文档访问时，有些文档需关注公众号和仅 VIP 可见，该脚本可以跳过这一步。博客文章跳过关注公众号和阅读全文。
// @author       yangxfan
// @match        *://*.iocoder.cn/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/yudao-doc.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/yudao-doc.js
// @run-at       document-end
// ==/UserScript==

/**
 * 2024-04-25
 * 0.1
 * 首次提交
 */

(() => {
  // 添加新的样式规则
  const addStylesheetRules = () => {
    GM_addStyle(`body {overflow: auto !important}`)
    // 去掉弹框遮罩层
    GM_addStyle(`.alert-modal {display: none !important}`)
    // 去掉弹框
    GM_addStyle(`.alert-container {display: none !important}`)
  }
  const contentWrapper = document.querySelector('.content-wrapper')
  if (contentWrapper) {
    // 官方文档
    // 文档去掉关注公众号弹框和仅 VIP 可见
    contentWrapper.className = 'content-wrapper-custom'
  }
  const articleContent = document.querySelector('.article-content')
  if (articleContent) {
    // 博客文章
    // 去掉关注公众号弹框
    GM_addStyle(`.article-content {height: auto !important}`)
    // 去掉阅读全文
    GM_addStyle(`#locker {display: none !important}`)
  }
  addStylesheetRules()
})()
