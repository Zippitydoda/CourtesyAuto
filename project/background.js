chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // get all the tabs
    if (request.action === "getTabs") {
        chrome.tabs.query({}, function (tabs) {
            sendResponse(tabs);
        });
    }

    if (request.action === "open chat") {
        tabId = request.tabId;
        windowId = request.windowId;
        chatWindowIsOpen = request.chatWindowIsOpen;

        console.log("hello background", chrome.tabs.query({}), tabId, windowId);
        if (chatWindowIsOpen == true) {
            //Closes the current chat window in order to not have an abundant number of them open
            chrome.tabs.remove(tabId);
        }

        chrome.windows.create({
            url: "https://app.omnique.com/company/427900/shop/1/messaging",
        });
    }
    return true;
});
