$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria()  {
  // console.log("botão foi clicado");
  $("#spinner").toggle();

  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
  .fail(function(){
    $("#erro").toggle();
    setTimeout(function(){
      $("#erro").toggle();
    },2000);
   
  })
  .always(function(){
    $("#spinner").toggle();
  });
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numAleatorio = Math.floor(Math.random() * data.length);
  // tempoInicial = data[numAleatorio].tempo;

  frase.text(data[numAleatorio].texto);

  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numAleatorio].tempo);
};

function buscaFrase(){  
  $("#spinner").toggle();
  var fraseID = $("#frase-id").val();
  console.log("o ID da minha frase é " + fraseID);
  var dados = {id: fraseID};

  $.get("http://localhost:3000/frases",dados,trocaFrase)
  .fail(function(){
    $("#erro").toggle();
    setTimeout(function(){
      $("#erro").toggle();
    },2000);
   
  })
  .always(function(){
    $("#spinner").toggle();
  });
};

function trocaFrase(data){
  var frase = $(".frase");
  frase.text(data.texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data.tempo);
};