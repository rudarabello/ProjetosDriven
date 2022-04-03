let prato;
let bebida;
let sobremesa;


function escolherFrango() {
    document.getElementById("frango").style.borderColor = "#32b72f";
    document.getElementById("carne").style.borderColor = "#e5e5e5";
    document.getElementById("peixe").style.borderColor = "#e5e5e5";
    prato = "Frango";
    habilitarBotao();
    
}
function escolherCarne() {
    document.getElementById("carne").style.borderColor = "#32b72f";
    document.getElementById("frango").style.borderColor = "#e5e5e5";
    document.getElementById("peixe").style.borderColor = "#e5e5e5";
    prato = "Carne";
    habilitarBotao();
}
function escolherPeixe() {
    document.getElementById("peixe").style.borderColor = "#32b72f";
    document.getElementById("carne").style.borderColor = "#e5e5e5";
    document.getElementById("frango").style.borderColor = "#e5e5e5";
    prato = "Peixe";
    habilitarBotao();
}
function escolherCocaN() {
    document.getElementById("normal").style.borderColor = "#32b72f";
    document.getElementById("zero").style.borderColor = "#e5e5e5";
    document.getElementById("laranja").style.borderColor = "#e5e5e5";
    bebida = "Coca Normal";
    habilitarBotao();
}
function escolherCocaZ() {
    document.getElementById("zero").style.borderColor = "#32b72f";
    document.getElementById("normal").style.borderColor = "#e5e5e5";
    document.getElementById("laranja").style.borderColor = "#e5e5e5";
    bebida = "Coca Zero";
    habilitarBotao();
}
function escolherSuco() {
    document.getElementById("laranja").style.borderColor = "#32b72f";
    document.getElementById("normal").style.borderColor = "#e5e5e5";
    document.getElementById("zero").style.borderColor = "#e5e5e5";
    bebida = "Suco de Laranja";
    habilitarBotao();
}
function escolherPetit() {
    document.getElementById("petit").style.borderColor = "#32b72f";
    document.getElementById("brigadeiro").style.borderColor = "#e5e5e5";
    document.getElementById("sorvete").style.borderColor = "#e5e5e5";
    sobremesa = "Petit Gateau";
    habilitarBotao();
}
function escolherBrigadeiro() {
    document.getElementById("brigadeiro").style.borderColor = "#32b72f";
    document.getElementById("sorvete").style.borderColor = "#e5e5e5";
    document.getElementById("petit").style.borderColor = "#e5e5e5";
    sobremesa = "Brigadeiro";
    habilitarBotao();
}
function escolherSorvete() {
    document.getElementById("sorvete").style.borderColor = "#32b72f";
    document.getElementById("brigadeiro").style.borderColor = "#e5e5e5";
    document.getElementById("petit").style.borderColor = "#e5e5e5";
    sobremesa = "Sorvete";
    habilitarBotao();
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
function novotexto(){
    const novoTexto = document.querySelector(".finalizar");
    novoTexto.innerHTML = "Fechar Pedido";
   
}


function fecharPedido(){
  alert(teste);
  const mensagem = `Olá, gostaria de fazer o pedido:\n
  - Prato: ${prato}\n
  - Bebida: ${bebida}\n
  - Sobremesa: ${sobremesa}\n\n
  Total: ${total}`;
    const uri = encodeURIComponent(mensagem);
  window.open(`https://wa.me/5512988635939?text=${uri}`);
}










/*var pedido ="";
var quantFrango = 0;
var quantCarne =0;
var quantCocaNormal =0;
var quantCocaZero =0;
var quantSucoLaranja =0;
var quantPetitGateau =0;
var quantBrigadeiro =0;

function fecharPedido(){
    alert(pedido);

}
function addFrango(){
pedido += " + 1 x Frango";
updateDisplayF(++quantFrango);

}
function decFrango(){
pedido += " - 1 x Frango";
updateDisplayF(--quantFrango);
}
function updateDisplayF(quantFrango){
document.getElementById("frango").innerHTML = quantFrango;        
}
/*function addCarne(){
pedido += " + 1 x Frango";
quantFrango += 1;
}
function decCarne(){
pedido += " - 1 x Frango";
quantFrango -= 1;
}
function addCocaNormal(){
pedido += " + 1 x Frango";
quantFrango += 1;
}
function decCocaNormal(){
pedido += " - 1 x Frango";
quantFrango -= 1;
}
function addCocaZero(){
pedido += " + 1 x Frango";
quantFrango += 1;
}
function decCocaZero(){
pedido += " - 1 x Frango";
quantFrango -= 1;
}
function addSucoLaranja(){
pedido += " + 1 x Frango";
quantFrango += 1;
}
function decSucoLaranaja(){
pedido += " - 1 x Frango";
quantFrango -= 1;
} 
function addPetitGateau(){
pedido += " + 1 x Frango";
quantFrango += 1;
}
function decPetitGateau(){
pedido += " - 1 x Frango";
quantFrango -= 1;
}
function addBrigadeiro(){
pedido += " + 1 x Frango";
quantFrango += 1;
}
function decBrigadeiro(){
pedido += " - 1 x Frango";
quantFrango -= 1;
}
*/