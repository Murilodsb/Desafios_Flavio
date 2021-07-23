function calcular() {

    let qtd = document.getElementById('litros').value;
    if (qtd == null || qtd == 0) {
        alert('Selecione a quantidade de litros primeiro!')
    } else {
        class Posto {
            constructor() {
                this.gasolina = 4;
                this.alcool = 2.5;
            }
            abastecer() {
                let tipo = document.querySelector('input[name=comb]:checked').value;
                let gas = document.querySelector('input[id=gasolina]').value;
                let alc = document.querySelector('input[id=alcool]').value;

                if (tipo == 'gas') {
                    var comb = this.gasolina;
                    var tipoComb = 'gasolina';
                } else if (tipo == 'alc') {
                    var comb = this.alcool;
                    var tipoComb = 'alcool';
                } else {
                    alert('erro grave coomb');
                }

                let qtd = document.getElementById('litros').value;
                let resultado = comb * qtd;
                return { resultado, tipoComb, qtd };

            }
            pagamento() {
                let tipo = document.querySelector('input[name=formapag]:checked').value;
                let cartao = document.querySelector('input[id=cartao]').value;
                let dinheiro = document.querySelector('input[id=dinheiro]').value;

                if (tipo == 'cartao') {
                    var pag = 'Cartão';
                } else if (tipo == 'dinheiro') {
                    var pag = 'Dinheiro';
                } else {
                    alert('erro grave formapag');
                }
                return pag;
            }
            Resumo() {
                let abastece = this.abastecer();
                let pagando = this.pagamento();
                var final = document.getElementById('final');
                if (abastece.qtd <= 1 && abastece.qtd > 0) {
                    final.value = 'Você colocará ' + abastece.qtd + ' litro de ' + abastece.tipoComb + ' e pagará ' + abastece.resultado + ' reais no ' + pagando;
                } else if (abastece.qtd < 0) {
                    final.value = 'Selecione um valor maior que zero "0"';
                } else {
                    final.value = 'Você colocará ' + abastece.qtd + ' litros de ' + abastece.tipoComb + ' e pagará ' + abastece.resultado + ' reais no ' + pagando;
                }
            };
        }

        let usuario = new Posto();
        usuario.Resumo();
    }
}
