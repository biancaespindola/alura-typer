var tempoInicial = $("#tempo-digitacao").text();

$(function () {
  console.log("pagina carregada");
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  inicializaMarcadores();
  $("#botao-reiniciar").click(reiniciaJogo);
});

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
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
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

function finalizaJogo(){
  campo.attr("disabled", true);
  campo.toggleClass("campo-digitacao-desativado");
  inserePlacar();
};


function inicializaMarcadores(){
  var frase = $(".frase").text();
  campo.on("input", function() {
    var digitado = campo.val();
    var comparavel = frase.substr(0,digitado.length);
    // console.log(comparavel);
    // console.log("Digitado: " + digitado);
    // console.log("Comparavel: " + comparavel);
    if(digitado == comparavel){
      // console.log("esta certo");
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
};

$(".botao-remover").click(function(event){
  event.preventDefault();
  $(this).parent().parent().remove();
});

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

function inserePlacar (){
  var corpoTabela = $(".placar").find("tbody");
  // console.log(tabela);
  var nomeUsuario = "Bibi";
  var numPalavras = $("#contador-palavras").text();
  var botaoRemover = '<a href="#"><i class="small material-icons">delete</i></a>';

  var linha = "<tr>"+
                  "<td>" + nomeUsuario  + "</td>" +
                  "<td>" + numPalavras  + "</td>" +
                  "<td>" + botaoRemover + "</td>" +
              "</tr>";
  corpoTabela.prepend(linha);
};
