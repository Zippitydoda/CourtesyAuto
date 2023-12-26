window.onload = function () {
    // Function that waits an amount of time before running the code so the a the page is fully rendered

    setTimeout(checkSms, 500);
    setTimeout(checkEmail, 10000);
};

function checkSms() {
    let msgCount = document
        .getElementById("smsnotifications")
        .getElementsByClassName("badge badge-notify")[0];

    // Opens the SMS chat in a new window
    function openPage() {
        window.open(
            "https://app.omnique.com/company/427900/shop/1/messaging",
            "_blank"
        );
    }

    //The number off current sms notifications
    let count = document.getElementsByClassName("badge badge-notify")[0];

    console.log(msgCount.innerHTML, msgCount);

    // This alerts the console of new messages
    if (msgCount.innerHTML === "0") {
        console.log("No New SMS");
    } else {
        console.log("You got SMS!");

        openPage();

        return;
    }
    console.log("The SMS count is", msgCount.innerHTML);
}

// checks for new email upon reload

function checkEmail() {
    let msgCount = document
        .getElementById("emailnotifications")
        .getElementsByClassName("badge badge-notify")[0];

    // Opens the E-mail in a new window
    function openPage() {
        window.open(
            "https://webmail.omnique.com/a/webmail.php?wsid=3a1cfe9de638481fba6754ed256494ef-29908f6d860448feb07208ef33020759",
            "_blank"
        );
    }

    //The number off current sms notifications
    let count = document.getElementsByClassName("badge badge-notify")[0];

    console.log(msgCount.innerHTML, msgCount);

    // This alerts the console of new messages
    if (msgCount.innerHTML === "0") {
        console.log("No New E-mail");
    } else {
        console.log("You got E-mail!");

        openPage();
    }
    console.log("The E-mail count is", msgCount.innerHTML);
    return;
}
