const textInput = document.getElementById("text_input");
const textOutput = document.getElementById("text_output");
const tooltip = document.getElementById("myTooltip");

function convert(){
    const text = textInput.value.trim();
    const lines = Array.from(text.split('\n'));
    const arr = lines.map(e => e.trim());
    const joined = arr.join('\\n');
    textOutput.value = joined;
}

function copyToClipboard() {
    navigator.clipboard.writeText(textOutput.value);
    tooltip.innerHTML = "Copied!";
  }
  
function outFunc() {
    tooltip.innerHTML = "Copy to clipboard";
  }