function calcular() {

    var numero1 = Number(document.getElementById('numero1').value);
    var numero2 = Number(document.getElementById('numero2').value);

    var operacao = document.getElementById('operacao');
    var opcoes = operacao.options[operacao.selectedIndex].value;

    if (opcoes == 'Ad') {
        var resultado = numero1 + numero2;
    }
    else if (opcoes == 'Sub') {
        var resultado = numero1 - numero2;
    }
    else if (opcoes == 'Mult') {
        var resultado = numero1 * numero2;
    }
    else if (opcoes == 'Div') {
        var resultado = numero1 / numero2;
    }
    else {
        alert('Selecione uma operação')
    }

    document.getElementById('resultado').value = resultado;

};
