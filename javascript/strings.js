var textDir = "ltr"; // LTR or RTL

var gameRules = `
			<h5>The first player is chosen to start the game as the Employer. Everyone else starts as an Applicant.
			The Applicants get 4 qualifications each. <br><br>

			Starting to the left of the Employer, each Applicant “interviews” by explaining why their qualifications make
			them the best fit for the Job. Applicants reveal their qualifications to the Employer, one at a time, and
			describe how each one makes them qualified for the Job. Because these qualifications are chosen at random and not revealed
			to the player until they are chosen, the applicants have to think on their feet. <br><br>

			After all Applicants have had a turn, the Employer chooses which Applicant they feel is the most qualified and
			the Applicant gets a point. A new employer is chosen and the cycle begins again.</h5>
`;

var strings = {
	app_welcome: "Bienvenido a ",
	app_name: "Empleado Divertido",
	player_count: "¿Cuantos jugadores?",
	num_1: "1",
	num_2: "2",
	num_3: "3",
	num_4: "4",
	num_5: "5",
	num_6: "6",
	num_7: "7",
	num_8: "8",
	num_9: "9",
	num_10: "10",
	player: "Jugador",
	player_name: "Nombre del jugador ",
	start_game: "¡Comenzar el juego!",
	how_do_i_play: "¿Cómo juego?",
	game_rules: $.parseHTML(gameRules),
	applicant: "Solicitante",
	qualification: "Competencias",
	employer: "Empleador (Jefe)",
	next_qualification: "Próxima calificación",
	quals: "Competencias",
	who_is_new_employee: "¿Quién es su nuevo empleado?",
	past_quals: "Cualificaciones de nuestros entrevistados",
	player_won: "¡El jugador 1 es el nuevo conserje!",
	next_round: "Proxima ronda",
	end_game: "Termina este juego",
	wanted: "buscando a un",
	next_applicant: "Próximo solicitante",
	next_qualification: "Próxima competencia",
	is_the_new: " es el nuevo ",
	current_scores: "El marcador",
	reset: "Resetear el "
};

$(function() {	
	$("[data-localize]").each(function( i ) {
		keys = $(this).data( "localize" ).split(" ");
		replacement = "";
		for (i = 0; i < keys.length; i++) {
		  replacement += strings[keys[i]];
		}
	  $(this).text(replacement);
		if( $(this).prop("tagName").toLowerCase() == "input" ) {
		  $(this).attr("placeholder", replacement);
		}
	});
	
	$('body').attr("dir", textDir);
	if( textDir == "rtl" ) {
		$('.timer-container:first').css('float','left');
	}
});