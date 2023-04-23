// ==UserScript==
// @name         new Bing 样式修复
// @namespace    https://www.bing.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setInterval(() => {
        const pops = document.getElementsByTagName("cib-serp")[0].shadowRoot.getRootNode().getElementById("cib-conversation-main").shadowRoot.getRootNode().getElementById("cib-chat-main").children
        // console.log("pops", pops)
        for (let pop of pops) {
            if (pop.tagName === "CIB-CHAT-TURN") {
                const children = pop.shadowRoot.getRootNode().children
                for (let child of children) {
                    if (child.tagName === "CIB-MESSAGE-GROUP") {
                        if (child.getAttribute("source") === "user") {
                            const textBlock = child.shadowRoot.getRootNode().children[0].shadowRoot.getRootNode().children[0].children[0]
                            textBlock.style.whiteSpace = "break-spaces"
                        } else {
                            const blocks = child.shadowRoot.getRootNode().children
                            for (let block of blocks) {
                                if (block.getAttribute("type") === "text") {
                                    for (let messageBolck of block.shadowRoot.getRootNode().children) {
                                        if (messageBolck.tagName === "CIB-SHARED") {
                                            console.log("messageBolck", messageBolck)
                                            const textBlock = messageBolck.children[0]
                                            textBlock.style.whiteSpace = "break-spaces"
                                            const sups = textBlock.getElementsByTagName("sup")
                                            for (let sup of sups) {
                                                sup.style.userSelect = "none"
                                            }
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, 1000);
})();
