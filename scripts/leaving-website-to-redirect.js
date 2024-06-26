// ==UserScript==
// @name         正在离开网站，即将跳转到外部网站
// @namespace    https://github.com/yangxfan/tampermonkey-extensions
// @version      1.4
// @description  进入站点后，不需要手动点击“跳转”按钮，自动跳转到外部网站，支持知乎、简书、码云、少数派、掘金、天眼查、CSDN、腾讯文档、OSCHINA、腾讯云开发者社区
// @author       yangxfan
// @match        *://link.zhihu.com/*
// @match        *://www.jianshu.com/go-wild*
// @match        *://gitee.com/link*
// @match        *://sspai.com/link*
// @match        *://link.juejin.cn/*
// @match        *://www.tianyancha.com/security/*
// @match        *://link.csdn.net/?target=*
// @match        *://docs.qq.com/scenario/link.html?url=*
// @match        *://www.oschina.net/action/GoToLink?url=*
// @match        *://cloud.tencent.com/developer/tools/blog-entry?target=*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/leaving-website-to-redirect.js
// @downloadURL  https://raw.githubusercontent.com/yangxfan/tampermonkey-extensions/main/scripts/leaving-website-to-redirect.js
// ==/UserScript==

/**
 * 2024-03-29
 * 1.4
 * 添加腾讯云开发者社区
 *
 * 2024-03-20
 * 1.3
 * OSCHINA
 *
 * 2024-03-07
 * 1.2
 * 添加腾讯文档
 *
 * 2024-01-11
 * 1.1
 * 添加 CSDN
 *
 * 2024-01-09
 * 1.0
 * 首次提交
 */

(() => {
  if (URL) {
    /**
     * 网站跳转外部网站 url 的 key 值
     * 知乎 target
     * 简书 url
     * 码云 link
     * 少数派 target
     * 掘金 target
     * 天眼查 target
     * CSDN target
     * 腾讯文档 url
     * OSCHINA url
     * 腾讯云开发者社区 target
     */
    const keys = ['target', 'url', 'link']
    // 获取到外部网站 url
    const getParam = params => {
      for (const i of keys) {
        let link = params.get(i)
        if (link) {
          return link
        }
      }
    }
    const searchParams = new URL(location.href).searchParams
    let link = getParam(searchParams)
    link && (location.href = link)
  }
})()
