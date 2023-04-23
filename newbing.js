setInterval(() => {
    const pops = document.getElementsByTagName("cib-serp")[0].shadowRoot.getRootNode().getElementById("cib-conversation-main").shadowRoot.getRootNode().getElementById("cib-chat-main").children
    console.log("pops", pops)
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
                                        const textBlock = messageBolck.children[0]

                                        textBlock.style.whiteSpace = "break-spaces"
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
