//Passo1 - dar um jeito de pegar o elemento HTML da seta avacar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar') 
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado')
}


//Passo 2 - Dar um jeito de identeficar o clique do usuário na seta avaçar
    btnAvancar.addEventListener('click', function(){
        if(cartaoAtual === cartoes.length - 1) return;

     cartaoAtual++;
     mostrarCartao(cartaoAtual);

     //Passo 4 - Buscar o cartão que está selecionado e tirar a classe dele 
     esconderCartaoSelecionado();
    });

    // Objetivo 5 implementar o botão Voltar:
btnVoltar.addEventListener('click', function (){
    if(cartaoAtual === 0) return;

   esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
    });
