let amigos;
let listaAmigos = [];
let jaSorteado = [];
let i = 0;

function exibirTextoTela(id, texto) {
  let li = document.createElement("li"); // Cria um elemento li
  li.appendChild(document.createTextNode(texto)); // Aqui, uso o método createTextNode para criar um nó de texto com o valor do input e o método appendChild para adicionar esse nó de texto como filho do <li>
  document.getElementById(id).appendChild(li); // Aqui, seleciono o elemento <ul> com o ID listaAmigos e adiciono o novo <li> como um de seus filhos
}

function exibirAmigoSorteado(amigoSecreto) {
  let texto = `Seu amigo secreto é ${amigoSecreto}!`;
  exibirTextoTela("resultado", texto);
}

function adicionarAmigo() {
  let amigos = document.querySelector("input").value.trim(); // Pega o valor do input
  if (amigos === "") {
    exibirTextoTela("valor-invalido", "Por favor, insira um nome válido");
    return;
  }

  document.getElementById("valor-invalido").innerHTML = "";
  console.log(amigos);
  exibirTextoTela("listaAmigos", amigos);
  listaAmigos.push(amigos);
  console.log(listaAmigos);
  limparCampo("input");
}

function limparCampoLista(id) {
  const lista = document.getElementById(id);
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild); // Remove todos os filhos do elemento <ul>
  }
}

function limparCampo(tag) {
  amigos = document.querySelector(tag);
  amigos.value = "";
}

function sortearAmigo() {
  let tam = listaAmigos.length;
  let numSorteado = parseInt(Math.random() * tam);

  if (jaSorteado.length < tam) {
    while (jaSorteado.includes(listaAmigos[numSorteado])) {
      numSorteado = parseInt(Math.random() * tam);
    }
    jaSorteado.push(listaAmigos[numSorteado]);
    limparCampoLista("listaAmigos");
    exibirAmigoSorteado(listaAmigos[numSorteado]);
  } else {
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  limparCampoLista("resultado");
  limparCampoLista("listaAmigos");
  listaAmigos = [];
  jaSorteado = [];
}
