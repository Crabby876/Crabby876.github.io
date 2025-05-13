const codeText = `\nprint("Doruk Güler")\nprint(""IMS student on a mission to become a coding expert"")`;
const typingElement = document.getElementById("typing-code");
const outputElement = document.getElementById("code-output");

let i = 0;

function typeCode() {
    if (i < codeText.length) {
        typingElement.innerHTML += codeText.charAt(i);
        i++;
        setTimeout(typeCode, 50); 
    } else {
        setTimeout(() => {
            outputElement.style.display = "block";
        }, 500); 
    }
}

window.addEventListener('load', typeCode);