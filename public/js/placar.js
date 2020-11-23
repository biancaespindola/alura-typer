$("#botao-placar").click(mostraPlacar);
$('#botao-sync').click(sincronizaPlacar);

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

function sincronizaPlacar() {
  var placar = [];
  var linhas = $("tbody>tr");


  linhas.each(function(){
    var usuario = $(this).find("td:nth-child(1)").text();
    var palavras = $(this).find("td:nth-child(2)").text();

    var score = {
      usuario: usuario,
      pontos: palavras
    };

    placar.push(score);

  });

  var dados = {
    placar: placar
  };

  $.post("http://localhost:3000/placar", dados, function(){
    console.log("salvou os dados no servidor");
  });

}

function atualizaPlacar (){
  $.get("http://localhost:3000/placar", function (data){
    $(data).each(function(){
       var linha = novaLinha(this.usuario, this.pontos);
       linha.find(".botao-remover").click(removeLinha);
       $("tbody").append(linha);
    })
  })
};