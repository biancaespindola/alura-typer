var api = {};

var frases = [
	{_id: 0, texto:'Ohana significa família, família significa que ninguém é deixado para trás ou esquecido.', tempo: 20 },
	{_id: 1, texto:'Eles dizem que se você sonhar com uma coisa mais de uma vez essa coisa se torna realidade.',tempo: 22 },
	{_id: 2, texto:'Olhe além do que você vê.', tempo: 5 },
	{_id: 3, texto:'Por mais que o vento sopre, uma montanha nunca irá se ajoelhar diante dele.', tempo: 17 },
	{_id: 4, texto:'Deixe seu coração lhe guiar. Ele sussurra, então preste atenção.', tempo: 13 },
	{_id: 5, texto:'Prenda-se àquilo que o faz diferente.', tempo: 7 },
	{_id: 6, texto:'A flor que nasce em meio a diversidade é a mais rara e bonita de todas.', tempo: 15 },
	{_id: 7, texto:'A jornada de mil quilômetros começa com o primeiro passo.', tempo: 10 },
	{_id: 8, texto:'O passado pode doer, mas da maneira que eu vejo, você pode fugir dele ou aprender com ele', tempo: 20},
	{_id: 9, texto:'Todos os seus sonhos podem se tornar realidade se você tiver a coragem para persegui-los', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
