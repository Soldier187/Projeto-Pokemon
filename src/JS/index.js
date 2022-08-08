//Passo1 - dar um jeito de pegar o elemento HTML da seta avacar
const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;
//Passo 2 - Dar um jeito de identeficar o clique do usuário na seta avaçar
    btnAvancar.addEventListener('click', function (){
     if(cartaoAtual ===cartoes.length -1) return;
    
     console.log(cartaoAtual)
     cartoes[cartaoAtual].classList.add('selecionado');
     if(cartaoAtual === cartoes.length - 1) return;

     console.log('blah')

     cartaoAtual++;
     console.log(cartaoAtual);
     cartoes[cartaoAtual].classList.add('selecionado')

     //Passo 4 - Buscar o cartão que está selecionado e tirar a classe dele 
      const cartaSelecionado = document.querySelector('selecionado');
      cataoSelecionado.classList.remove('selecionado');
    });