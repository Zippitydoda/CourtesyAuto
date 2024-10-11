chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getTabs") {
        chrome.tabs.query({}, function (tabs) {
            sendResponse(tabs);
        });
    }
    return true; // Keep the message channel open for asynchronous response
});
