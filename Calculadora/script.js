let input = document.querySelector("#inputText");
let textvalue = "";

function addNumber(number){
    textvalue += number;
    updateText();

}

function addOperator(operator){
    textvalue += operator;
    updateText();
}


function addDecimal(){
    textvalue += ".";
    updateText();
}
function clearText(){
    textvalue = "";
    updateText();
}
function updateText(){
    input.value = textvalue;
}

function calculate(){
   textvalue = eval(textvalue);
   updateText();
}