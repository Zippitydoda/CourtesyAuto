setTimeout(checkSms(), 5000);

function checkSms() {
    const targetNode = document.getElementById("smsnotifications");
    const config = { childList: true, characterData: true, subtree: true };
    let msgCount = document
        .getElementById("smsnotifications")
        .getElementsByClassName("badge badge-notify")[0].innerHTML;
    console.log("Msg count is", msgCount);

    if (msgCount.innerHTML !== "0") {
        console.log("a window will open");
    }
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            console.log("mutationsObserver is working", msgCount);
            if (mutation.type === "childList" && msgCount != "0") {
                console.log("The Sms window should open");

                window.open(
                    "https://app.omnique.com/company/427900/shop/1/messaging",
                    "_blank"
                );
                console.log("Msg count is", msgCount);
                return;
            }
            console.log("You have", msgCount, "new messages");
        }
    };

    const observer = new MutationObserver(callback);

    setInterval(observer.observe(targetNode, config), 500);
}
