var tempoInicial = $("#tempo-digitacao").text();

$(function () {
  console.log("pagina carregada");
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
  atualizaPlacar();
  //no main.js no final da função inicial do jQuery  
  $("#usuarios").selectize({
    create: true,
    sortField: 'text'
  });
});

function atualizaTempoInicial(tempo){
  tempoInicial = tempo;

  $("#tempo-digitacao").text(tempo);
};

//função que atualiza o tempo que a frase leva para ser digitadae quantas letras tem
function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numPalavras = frase.split(/\S+/).length - 1;
  var tamanhoFrase = $("#tamanho-frase");
  console.log(numPalavras);
  tamanhoFrase.text(numPalavras);
}

var campo = $(".campo-digitacao");

function inicializaContadores() {
  campo.on("input", function () {
    var conteudo = campo.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro() {
  campo.one("focus", function () {
    var tempoRestante = $("#tempo-digitacao").text();
    var cronometroID = setInterval(function () {
      tempoRestante--;
      // console.log(tempoRestante);
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        clearInterval(cronometroID);
        finalizaJogo();
      }
    }, 1000);
  });
}

function finalizaJogo() {
  campo.attr("disabled", true);
  campo.toggleClass("campo-digitacao-desativado");
  inserePlacar();
}

function inicializaMarcadores() {
  
  campo.on("input", function () {
    var frase = $(".frase").text();
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    // console.log(comparavel);
    // console.log("Digitado: " + digitado);
    // console.log("Comparavel: " + comparavel);
    if (digitado == comparavel) {
      // console.log("esta certo");
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  campo.toggleClass("campo-digitacao-desativado");
  campo.removeClass("borda-vermelha");
  campo.removeClass("borda-verde");
  inicializaCronometro();
}
