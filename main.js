const track = document.querySelector('.carrosselMulheres__track');
const botaoAvancar = document.getElementById('botaoAvancar');
const botaoVoltar = document.getElementById('botaoVoltar');
const itens = track.children;
const itensVisiveis = 3;
const cards = document.querySelectorAll('.dicas');
const trackItems = document.querySelectorAll('.track__item');

function itemLargura() {
    return itens[0].offsetWidth;
}

function avancar() {
    track.scrollLeft += itemLargura();
}

function voltar() {
    track.scrollLeft -= itemLargura();
}

function iniciarRolagem(direcao) {
    pararRolagem();
    intervalId = setInterval(() => {
        if (direcao === 'avancar') {
            track.scrollLeft += itemLargura();
        } else {
            track.scrollLeft -= itemLargura();
        }
    }, 300);
}

let intervalId = null;

function pararRolagem() {
    clearInterval(intervalId);
    intervalId = null;
}

botaoAvancar.addEventListener('mouseenter', () => iniciarRolagem('avancar'));
botaoAvancar.addEventListener('mouseleave', pararRolagem);

botaoVoltar.addEventListener('mouseenter', () => iniciarRolagem('voltar'));
botaoVoltar.addEventListener('mouseleave', pararRolagem);

botaoAvancar.addEventListener('click', avancar);
botaoVoltar.addEventListener('click', voltar);

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation();
        cards.forEach(c => c.classList.remove('ativo'));
        card.classList.add('ativo');
    });
});

document.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('ativo'));
});

trackItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        trackItems.forEach(i => i.classList.remove('ativo'));
        item.classList.add('ativo');
    });
});

document.addEventListener('click', () => {
    trackItems.forEach(item => item.classList.remove('ativo'));
});

document.querySelectorAll('.dicasCard__elementos').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
        const href = card.getAttribute('data-href');
        if (href) {
            window.location.href = href;
        }
    });
});
