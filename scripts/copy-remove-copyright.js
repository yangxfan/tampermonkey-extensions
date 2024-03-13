// ==UserScript==
// @name         复制文本时去掉版权声明
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      0.1
// @description  去掉复制内容的版权声明，支持知乎、掘金
// @author       yangxfan
// @match        *://*.zhihu.com/*
// @match        *://juejin.cn/post/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/copy-remove-copyright.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/copy-remove-copyright.js
// ==/UserScript==

/**
 * 2024-03-13
 * 0.1
 * 首次提交
 */

(() => {
  /**
   * 监听 window 和文 document 的 copy 事件，以防止事件冒泡。
   * 使用捕获模式处理事件。
   */

  try {
    // 定义监听的事件类型
    const eventType = 'copy'
    // 定义事件监听器
    const listener = event => event.stopPropagation()
    // 使用捕获模式
    const useCapture = true

    // 为 window 添加事件监听器
    window.addEventListener(eventType, listener, useCapture)
    // 为 document 添加事件监听器
    document.addEventListener(eventType, listener, useCapture)
  } catch (error) {
    console.error('Error adding copy event listeners:', error);
  }
})()
