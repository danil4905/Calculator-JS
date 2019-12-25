function insert(num) {
    document.form.result.value = document.form.result.value + num;
}

function clean() {
    document.form.result.value = "";
}

function back() {
    let exp = document.form.result.value;
    document.form.result.value = exp.substring(0, exp.length - 1);
}

function equal() {
    let exp = document.form.result.value;
    if (exp) {
        document.form.result.value = eval(exp);
    }
}