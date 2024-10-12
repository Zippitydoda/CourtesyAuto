chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    let tabs;
    if (request.action === "getTabs") {
        chrome.tabs.query({}, function (tabs) {
            sendResponse(tabs);
        });
    }

    if (request.action === "focus window") {
        tabId = request.tabId;

        console.log("hello background");

        chrome.windows.update(tabId, { focused: true });
    }
    return true;
});
