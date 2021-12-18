var estrelaV1 = document.getElementById('estrela-vazia-1')
var estrelaV2 = document.getElementById('estrela-vazia-2')
var estrelaV3 = document.getElementById('estrela-vazia-3')
var estrelaV4 = document.getElementById('estrela-vazia-4')
var estrelaV5 = document.getElementById('estrela-vazia-5')
var btnConf = document.querySelector('btn_Confirmar')

function habilitBot () {
    estrelaV1.addEventListener('click', () =>{
        if (estrelaV1.src = './img/estrela_cheia_1.svg') {
            btnConf.removeAttribute('disabled');
        }else {
            btnConf.setattributes('disabled','disabled');
        }
    });
}

estrelaV1.onclick = function () {
    estrelaV1.src = './img/estrela_cheia_1.svg';
    estrelaV2.src = './img/estrela_vazia_2.svg';
    estrelaV3.src = './img/estrela_vazia _3.svg';
    estrelaV4.src = './img/estrela_vazia _4.svg';
    estrelaV5.src = './img/estrela_vazia _5.svg';
    estrelaV1.value = 1
    console.log(estrelaV1.value + ' ' + 'estrela')
}
estrelaV2.onclick = function () {
    estrelaV1.src = './img/estrela_cheia_1.svg';
    estrelaV2.src = './img/estrela_cheia _2.svg';
    estrelaV3.src = './img/estrela_vazia _3.svg';
    estrelaV4.src = './img/estrela_vazia _4.svg';
    estrelaV5.src = './img/estrela_vazia _5.svg';
    estrelaV2.value = 2
    console.log(estrelaV2.value + ' ' + 'estrelas')
}
estrelaV3.onclick = function () {
    estrelaV1.src = './img/estrela_cheia_1.svg';
    estrelaV2.src = './img/estrela_cheia _2.svg';
    estrelaV3.src = 'img/estrela_cheia _3.svg';
    estrelaV4.src = './img/estrela_vazia _4.svg';
    estrelaV5.src = './img/estrela_vazia _5.svg';
    estrelaV3.value = 3
    console.log(estrelaV3.value + ' ' + 'estrelas')
}
estrelaV4.onclick = function () {
    estrelaV1.src = './img/estrela_cheia_1.svg';
    estrelaV2.src = './img/estrela_cheia _2.svg';
    estrelaV3.src = 'img/estrela_cheia _3.svg';
    estrelaV4.src = './img/estrela_cheia _ 4.svg';
    estrelaV5.src = './img/estrela_vazia _5.svg';
    estrelaV4.value = 4
    console.log(estrelaV4.value + ' ' + 'estrelas')
}
estrelaV5.onclick = function () {
    estrelaV1.src = './img/estrela_cheia_1.svg';
    estrelaV2.src = './img/estrela_cheia _2.svg';
    estrelaV3.src = 'img/estrela_cheia _3.svg';
    estrelaV4.src = './img/estrela_cheia _ 4.svg';
    estrelaV5.src = './img/estrela_cheia _ 5.svg';
    estrelaV5.value = 5
    console.log(estrelaV5.value + ' ' + 'estrelas')
}


