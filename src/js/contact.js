const email = "contact@jtheriault.dev";
const emailElement = document.querySelector(".copier");


function emailCopied() {   
    navigator.clipboard.writeText(email);
    console.log("Email copied to clipboard: " + email);
}