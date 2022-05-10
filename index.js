let input = document.querySelector("#input");

function display(num) {
    input.value += num;
}

function cal() {
    try {
        input.value = eval(input.value);
    }
    catch(err) {
        alert("invalid");
    }
}

function clear() {
    input.value = "";
}

function del() {
    input.value = input.value.slice(0, -1);
}
