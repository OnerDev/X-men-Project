const personagens = document.querySelectorAll('.personagem');

// Laço para selecionar os itens da LI (Lista) e colocar uma classe
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }
        
        // Verificar se existe um personagem selecionado

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        
        personagem.classList.add('selecionado');


        // Quando passar o mouse em cima selecionar e mostrar o personagem grande

        // Pegar elementos do personagem grande

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // Alterar a imagem
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // Alterar o nome

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // Alterar descrição personagem

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })


})

