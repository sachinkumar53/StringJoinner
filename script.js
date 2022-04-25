const textInput = document.getElementById("text_input");
const textOutput = document.getElementById("text_output");


function convert(){
    const text = textInput.value.trim();
    const arr = text.split('\n');
    const joined = arr.join('\\n')
    textOutput.value = joined
}