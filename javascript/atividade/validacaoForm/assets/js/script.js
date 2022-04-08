function validarNome(valor) {
    console.log(valor);
    let regex = /[A-z]{2,50}/g;
    if (!regex.test(valor)) {
        alert("Informe um nome maior que 2 caracteres e menor que 50.");
        txtNome.focus();
        return;
    }
}

function validarEmail(valor) {
    console.log(valor);
    let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    if (!regex.test(valor)) {
        alert("Informe um e-mail válido!");
        txtEmail.focus();
        return;
    }
}

function validarTelefone(valor) {
    console.log(valor);
    let regex = /9{1}\d{4}-\d{4}/g;
    if (!regex.test(valor)) {
        alert("Informe um telefone válido! (9xxxx-xxxx)");
        numTelefone.focus();
        return;
    }
}

function validarCampos() {
    validarNome(txtNome.value);
    validarEmail(txtEmail.value);
    validarTelefone(numTelefone.value);
}