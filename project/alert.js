// Sms notification handler

// Select the node that will be observed for mutations
const targetNodeSms = document.getElementById("smsnotifications");

// Options for the observer (which mutations to observe)
const configSms = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callbackSms = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            if (
                Number(
                    targetNodeSms.getElementsByClassName(
                        "badge badge-notify"
                    )[0].innerHTML
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
const observerSms = new MutationObserver(callbackSms);

// Start observing the target node for configured mutations
observerSms.observe(targetNodeSms, configSms);

//--------------------------------------------------------------------------------
// E-mail notification handler

// Select the node that will be observed for mutations
const targetNodeEmail = document.getElementById("emailnotifications");
console.log(
    targetNodeEmail.getElementsByClassName("badge badge-notify")[0].innerHTML
);
// Options for the observer (which mutations to observe)
const configEmail = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callbackEmail = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            window.open(
                "https://app.omnique.com/Company/427900/Shop/1/Notification/RedirectToWebmail"
            );

            return;
        }
    }
};

// Create an observer instance linked to the callback function
const observerEmail = new MutationObserver(callbackEmail);

// Start observing the target node for configured mutations
observerEmail.observe(targetNodeEmail, configEmail);
