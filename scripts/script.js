
var pedido ="";
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