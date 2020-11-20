$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria()  {
  // console.log("botão foi clicado");
  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
  .fail(function(){
    $("#erro").toggle();
    setTimeout(function(){
      $("#erro").toggle();
    },2000);
   
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