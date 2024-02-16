let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = ""; // empty string for giving result.
let arr = Array.from(buttons); //creating an array for passing all the buttons.
arr.forEach(button => {                                      // foreach loop for buttons
button.addEventListener("click", (e)=>{ //e is for event handler or a function you can say and click event is triggered on it.
if(e.target.innerHTML == '='){ //checking if it is clicked an key or equal button,if it is equal then it is the condition for equal button.
    string = eval(string); //eval is a inbuilt() in javascript which evaluates mathematically as per the input occurs.
input.value = string; //stores the input value in string.
}
else if(e.target.innerHTML == 'AC'){
    string = "";
    input.value = string;
}
else if(e.target.innerHTML == 'DEL'){
    string = string.substring(0,string.length-1); // it will remove last digit.
    input.value = string;
}
else{
   string +=  e.target.innerHTML;
   input.value = string;
}
});
});