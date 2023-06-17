const controles = document.querySelectorAll('[data-controle]');

controles.forEach((controle) => {
    controle.addEventListener('click', (event) => {
        var elem = event.target.parentNode.querySelector('[data-contador]');
        var operacao = event.target.dataset.controle;
        manipulaValor(elem, operacao);
    });
});

function manipulaValor(elem, operacao) {
    if (operacao === '-') {
        if (parseInt(elem.value) > 0)
            elem.value = (parseInt(elem.value) - 1).toString().padStart(2, '0');
    } else {
        elem.value = (parseInt(elem.value) + 1).toString().padStart(2, '0');
    }
}