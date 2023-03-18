// Comentário teste
/*
OBJETIVO > quando clicarmso no botão do carrossel, mostrar imagem correspondente.
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionado
    - passo 5 - esconder a imagem ativa anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
 */
// passo 1 - dar um jeito de pegar o elemento HTML dos botões:
const carrosselButtons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image');
// - passo 2 - dar um jeito de identificar o clique do usuário no botão:
carrosselButtons.forEach ((button,index) => {
    button.addEventListener('click', () => {
        // - passo 3 - desmarcar o botão selecionado anterior:
        const buttonSelected = document.querySelector('.selected');
        buttonSelected.classList.remove('selected')
        // - passo 4 - marcar o botão clicado como se estivesse selecionado:
        button.classList.add('selected');
        // - passo 5 - esconder a imagem ativa anterior:
        const activeImage = document.querySelector('.active');
        activeImage.classList.remove('active')
        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado:
        images[index].classList.add('active');
    })
})



