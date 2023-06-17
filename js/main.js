const controles = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');

controles.forEach((controle) => {
    controle.addEventListener('click', (event) => {
        var contador = event.target.parentNode.querySelector('[data-contador]');
        var operacao = event.target.dataset.controle;
        var peca = event.target.parentNode.querySelector('[data-peca]').dataset.peca;
        manipulaValor(contador, operacao, peca);
    });
});

function atualizarEstatisticas(peca, operacao) {
    estatisticas.forEach((elem) => {
        if (operacao === '+')
            elem.textContent = parseInt(elem.textContent) + pecas[peca][elem.dataset.estatistica];
        else
            elem.textContent = parseInt(elem.textContent) - pecas[peca][elem.dataset.estatistica];
    });
}

function manipulaValor(contador, operacao, peca) {
    if (operacao === '-') {
        if (parseInt(contador.value) > 0){
            contador.value = (parseInt(contador.value) - 1).toString().padStart(2, '0');
            atualizarEstatisticas(peca, operacao);
        }
    } else {
        contador.value = (parseInt(contador.value) + 1).toString().padStart(2, '0');
        atualizarEstatisticas(peca, operacao);
    }
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}