var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
// console.log(tamanhoFrase);

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
// console.log(campo);
campo.on("input", function () {
  var conteudo = campo.val();

  var qtdPalavras = conteudo.split(/\S+/).length - 1;
  $("#contador-palavras").text(qtdPalavras);

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus", function () {
  var cronometroID = setInterval(function () {
    tempoRestante--;
    // console.log(tempoRestante);
    $("#tempo-digitacao").text(tempoRestante);
    if (tempoRestante < 1) {
      campo.attr("disabled", true);
      clearInterval(cronometroID);
    }
  }, 1000);
});

// $("#botao-reiniciar").on("click", function(){
//   console.log("Botao clicado");
// });

$("#botao-reiniciar").click(function(){
  campo.attr("disabled", false);
  campo.val("");
});