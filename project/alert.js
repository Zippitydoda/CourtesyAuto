console.log(document.getElementById("emailnotifications"));

const targetNode = document.getElementById("emailnotifications");
const config = { childList: true, characterData: true, subtree: true };

const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        console.log(
            document
                .getElementById("emailnotifications")
                .getElementsByClassName("badge badge-notify")[0]
        );
        console.log(mutationList);

        if (mutation.type === "characterData") {
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
