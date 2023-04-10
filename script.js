let screen = document.getElementById("screen");
let btns = document.querySelectorAll("button");
let screenValue = '';
for (item of btns) {
    item.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        console.log(btnText);
        if (btnText == "X") {
            btnText = '*';
            screenValue += btnText;
            screen.value = screenValue;
        }
        else if (btnText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }

        else if (btnText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += btnText;
            screen.value = screenValue;
        }

    })
}