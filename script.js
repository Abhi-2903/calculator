let string = "";
let buttons = document.querySelectorAll('.keys');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const display = document.querySelector(".displays");
        
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string); // Note: eval is still used here for simplicity, but consider using a safer alternative
                display.value = string;
            } catch (error) {
                display.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML === 'c') {
            string = "";
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});