//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];
let listaAmigos = [];
function adicionarAmigo() {
    // Obtém o campo de entrada pelo ID
    let amigo = document.getElementById('amigo');
    let valor = amigo.value.trim(); // Remove espaços em branco no início e no fim

    // Verifica se o valor não está vazio
    if (valor !== '') {
        // Adiciona o nome à array
        amigos.push(valor);

        // Atualiza a lista de amigos no HTML
         atualizarListaAmigos();

        // Limpa o campo de entrada
        amigo.value = '';
    } else {
        alert('Por favor, digite um nome válido.');
    }
}
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}



