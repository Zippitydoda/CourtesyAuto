chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getTabs") {
        chrome.tabs.query({}, function (tabs) {
            sendResponse(tabs);
        });
    }

    if (request.action === "focus window") {
        tabId = request.tabId;
        windowId = request.windowId;

        console.log("hello background", chrome.tabs.query({}), tabId, windowId);
        chrome.tabs.remove(tabId);
        // TODO open new chat window get window id from, the front end
        chrome.windows.create({
            url: "https://app.omnique.com/company/427900/shop/1/messaging",
        });
    }
    return true;
});
