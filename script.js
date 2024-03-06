let result = "";
let display = document.querySelector("input");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        if(e.target.innerHTML == "DEL") {
            result = result.slice(0, -1);
            display.value = result;
        }else if (e.target.innerHTML == "AC"){
            result = "";
            display.value = result;
        }else if (e.target.innerHTML == "="){
            result = eval(result);
            display.value = result ? result : 0;
        }
        else {
            result += e.target.innerHTML;
            display.value = result;
        }
    })
});
