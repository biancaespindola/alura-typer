$("#botao-placar").click(mostraPlacar);

function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  // console.log(tabela);
  var nomeUsuario = "Bibi";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(nomeUsuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.prepend(linha);

  $(".placar").slideDown(500);
  scrollPlacar();
}

function scrollPlacar(){
  var posicaoPlacar = $(".placar").offset().top;
  console.log(posicaoPlacar);
  $("body").animate(
  {
    scrollTop: posicaoPlacar + "px"
  },1000);
}

function removeLinha() {
  event.preventDefault();
  var linha = $(this).parent().parent();
  linha.fadeOut(500);
  setTimeout(function(){
    linha.remove();
  },500);  
}

function novaLinha(nomeUsuario, numPalavras) {
  var linha = $("<tr>");

  var colunaUsuario = $("<td>").text(nomeUsuario);
  var colunaPalavras = $("<td>").text(numPalavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  var icone = $("<i>")
    .addClass("small")
    .addClass("material-icons")
    .text("delete");

  link.append(icone);

  colunaRemover.append(link);

  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  console.log(linha);

  return linha;
}


function mostraPlacar(){
  $(".placar").stop().slideToggle(600);
}