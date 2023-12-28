// Select the node that will be observed for mutations
const targetNode = document.getElementById("smsnotifications");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            if (
                Number(
                    targetNode.getElementsByClassName("badge badge-notify")[0]
                        .innerHTML
                ) > 0
            ) {
                window.open(
                    "https://app.omnique.com/company/427900/shop/1/messaging",
                    "_blank"
                );

                return;
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
