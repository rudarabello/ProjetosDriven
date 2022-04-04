let prato;
let bebida;
let sobremesa;
let total = 0;
total.toFixed(2);


function escolherFrango() {
    document.getElementById("frango").style.borderColor = "#32b72f";
    document.getElementById("carne").style.borderColor = "#e5e5e5";
    document.getElementById("peixe").style.borderColor = "#e5e5e5";
    prato = "Frango";
    habilitarBotao();
    total+=19.95;
}
function escolherCarne() {
    document.getElementById("carne").style.borderColor = "#32b72f";
    document.getElementById("frango").style.borderColor = "#e5e5e5";
    document.getElementById("peixe").style.borderColor = "#e5e5e5";
    prato = "Carne";
    habilitarBotao();
    total+=29.99;
}
function escolherPeixe() {
    document.getElementById("peixe").style.borderColor = "#32b72f";
    document.getElementById("carne").style.borderColor = "#e5e5e5";
    document.getElementById("frango").style.borderColor = "#e5e5e5";
    prato = "Peixe";
    habilitarBotao();
    total+=39.92;
}
function escolherCocaN() {
    document.getElementById("normal").style.borderColor = "#32b72f";
    document.getElementById("zero").style.borderColor = "#e5e5e5";
    document.getElementById("laranja").style.borderColor = "#e5e5e5";
    bebida = "Coca Normal";
    habilitarBotao();
    total+=5.91;
}
function escolherCocaZ() {
    document.getElementById("zero").style.borderColor = "#32b72f";
    document.getElementById("normal").style.borderColor = "#e5e5e5";
    document.getElementById("laranja").style.borderColor = "#e5e5e5";
    bebida = "Coca Zero";
    habilitarBotao();
    total+=5.93;
}
function escolherSuco() {
    document.getElementById("laranja").style.borderColor = "#32b72f";
    document.getElementById("normal").style.borderColor = "#e5e5e5";
    document.getElementById("zero").style.borderColor = "#e5e5e5";
    bebida = "Suco de Laranja";
    habilitarBotao();
    total+=8.95;
}
function escolherPetit() {
    document.getElementById("petit").style.borderColor = "#32b72f";
    document.getElementById("brigadeiro").style.borderColor = "#e5e5e5";
    document.getElementById("sorvete").style.borderColor = "#e5e5e5";
    sobremesa = "Petit Gateau";
    habilitarBotao();
    total+=15.97;
}
function escolherBrigadeiro() {
    document.getElementById("brigadeiro").style.borderColor = "#32b72f";
    document.getElementById("sorvete").style.borderColor = "#e5e5e5";
    document.getElementById("petit").style.borderColor = "#e5e5e5";
    sobremesa = "Brigadeiro";
    habilitarBotao();
    total+=4.95;
}
function escolherSorvete() {
    document.getElementById("sorvete").style.borderColor = "#32b72f";
    document.getElementById("brigadeiro").style.borderColor = "#e5e5e5";
    document.getElementById("petit").style.borderColor = "#e5e5e5";
    sobremesa = "Sorvete";
    habilitarBotao();
    total+=19.99;
}

function habilitarBotao() {
    if (prato && bebida && sobremesa) {
        const elemento = document.querySelector(".selecione");
        elemento.classList.remove("selecione");
        elemento.classList.toggle("finalizar");
        elemento.disabled = false;
        novotexto()
    }
}
function novotexto() {
    const novoTexto = document.querySelector(".finalizar");
    novoTexto.innerHTML = "Fechar Pedido";
valorTotalPedido()

}


function fecharPedido() {
    const uri = `Olá, gostaria de fazer o pedido:
  - Prato: ${prato}
  - Bebida: ${bebida}
  - Sobremesa: ${sobremesa}
  Total: R$ ${total}`

    const uriEncoded = encodeURIComponent(uri);
    window.open(`https://wa.me/5512988635939?text=${uriEncoded}`, '_blank');
}



