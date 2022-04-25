const textInput = document.getElementById("text_input");
const textOutput = document.getElementById("text_output");


function convert(){
    const text = textInput.value.trim();
    const lines = Array.from(text.split('\n'));
    const arr = lines.map(e => e.trim())
    const joined = arr.join('\\n')
    textOutput.value = joined
}