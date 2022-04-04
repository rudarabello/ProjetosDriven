let prato;
let bebida;
let sobremesa;
let total = 0;
//let total = precoTotal();

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
function novotexto() {
    const novoTexto = document.querySelector(".finalizar");
    novoTexto.innerHTML = "Fechar Pedido";
    valorTotalPedido()
    //somarpreco()
}


//function somarpreco() {
    //let precoC = Number(document.querySelector(preco1.replace("R$", "").replace(",", "."));
    //let precoB = Number(document.querySelector(preco2.replace("R$", "").replace(",", "."));
    //let precoS = Number(document.querySelector(preco3.replace("R$", "").replace(",", "."));
    //let precoTotal = precoC+precoB+precoS;
    //total += precoTotal;
     
//}

function valorTotalPedido() {
    let precoPrato = valorConversivel(document.querySelector(".product .prato .preco").innerHTML)
    let precoBebida = valorConversivel(document.querySelector(".product .bebida .preco").innerHTML)
    let precoSobremesa = valorConversivel(document.querySelector(".product .sobremesa .preco").innerHTML)
    let precoTotal = (precoPrato+precoBebida+precoSobremesa)
    return precoTotal.toFixed(2)

function valorConversivel(string) {
    let numero = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ',') {
        numero += '.'
      }
      else if (string[i] === 'R') {
        numero += ''
      }
      else if (string[i] === '$') {
        numero += ''
      }
      else {
        numero += string[i]
      }
    }
    return Number(numero)
  }
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



