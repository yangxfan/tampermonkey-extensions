// ==UserScript==
// @name         知乎去掉没有登录时的登录弹框
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.2
// @description  查看知乎文章时，不想登录，又不想看到登录弹框，又不想点击"x"关闭或者"ESC"关闭，所以写了样式隐藏登录弹框；去掉复制内容的版权声明
// @author       yangxfan
// @match        *://*.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

/**
 * 2024-01-10
 * 0.2
 * 去掉复制内容的版权声明
 */

/**
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

  setTimeout(() => {
    // 去掉“复制字符大于 140 时，追加版权声明”逻辑，是通过替换节点移除事件监听来实现的
    // 延迟时间，是因为解决网站打不开并显示“出了一点问题”
    const oldContainer = document.querySelector('.RichText')
    if (oldContainer) {
      const newContainer = oldContainer.cloneNode(true)
      oldContainer.parentNode.replaceChild(newContainer, oldContainer)
    }
  }, 100)
})()
