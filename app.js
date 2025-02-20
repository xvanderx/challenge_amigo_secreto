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
function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return; // Encerra a função se não houver amigos
    }

    // 2. Gerar um índice aleatório
    var indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    var amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar o resultado
    var elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}


