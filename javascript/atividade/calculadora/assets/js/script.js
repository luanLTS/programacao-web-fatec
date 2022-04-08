function validaNumeros(n1, n2) {
    if (isNaN(n1) || n1 === ""){
        alert("informe um número para o primeiro parametro!");
        num1.value = "";
        num1.focus();
        return [0, 0];
    }
    if (isNaN(n2) || n2 === ""){
        alert("informe um número para o segundo parametro!");
        num2.value = "";
        num2.focus();
        return [0, 0];
    }
    return [parseFloat(n1), parseFloat(n2)];
}

function limparCampos () {
    num1.value = "";
    num2.value = "";
}

function soma()  {
let [n1, n2] = validaNumeros(num1.value, num2.value);
    resultado.value = n1 + n2;
    limparCampos();
}

function subtracao() {
    let [n1, n2] = validaNumeros(num1.value, num2.value);
    resultado.value = n1 - n2;
    limparCampos ()
}

function divisao() {
    let [n1, n2] = validaNumeros(num1.value, num2.value);
    if (n2 === 0) {
        resultado.value = "Divisão por zero!";
        limparCampos ()
        return;
    }
    resultado.value = n1 / n2;
    limparCampos ()
}

function multiplicacao() {
    let [n1, n2] = validaNumeros(num1.value, num2.value);
    resultado.value = n1 * n2;
    limparCampos ()   
}