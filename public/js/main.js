var tempoInicial = $("#tempo-digitacao").text();

$(document).ready(function() {
  console.log("pagina carregada");
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botao-reiniciar").click(reiniciaJogo);
});

//função que atualiza o tempo que a frase leva para ser digitadae quantas letras tem
function atualizaTamanhoFrase(){
  var frase = $(".frase").text();
  var numPalavras = frase.split(/\S+/).length - 1;
  var tamanhoFrase = $("#tamanho-frase");
  console.log(numPalavras);
  tamanhoFrase.text(numPalavras);
  
};

var campo = $(".campo-digitacao");

function inicializaContadores(){
  campo.on("input", function () {
    var conteudo = campo.val();
    
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
  
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
    var cronometroID = setInterval(function(){
      tempoRestante--;
      // console.log(tempoRestante);
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
      }
    }, 1000);
  });
}

// $("#botao-reiniciar").on("click", function(){
//   console.log("Botao clicado");
// });

function reiniciaJogo(){
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
}

