const email = "contact@j-theriault.ca";
const emailElement = document.querySelector(".copier");


function emailCopied() {   
    navigator.clipboard.writeText(email);
    console.log("Email copied to clipboard: " + email);
}