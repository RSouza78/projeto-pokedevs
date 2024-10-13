const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        esconderCartaoPokedev();
        const idPokedevSelecionado = mostrarCartaoPokedevselecionado(pokedev);
        removeAtivoNaListagem();
        adicionaAtivo(idPokedevSelecionado);
    })
})

function adicionaAtivo(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function removeAtivoNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevselecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    CartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
