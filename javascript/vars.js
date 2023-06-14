/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Barman','Psíquico','Imitador de celebridades','Modelo','Mago','Autor','Escolta','Reina','Sargento de instrucción','Anfitrión del programa de juegos','Enfermera de la escuela','Orador motivacional','Atleta profesional','Interno','Científico loco','Conductor de taxi','Detective privado','Actor de película clase B','Plomero','Cantante','Mímico','Superhéroe','Concursante de reality show','Animador','Presentador de noticias','Terapeuta','Mayordomo','Niñera','Arqueólogo','Profesor de gimnasia','Cazarrecompensas','Actor infantil','Comedor competitivo','Vendedor de autos usados','Jugador de rol de acción en vivo','Doble de acción','Político','Capitalista de riesgo','Entrenador personal','Pirata','Abogado','Auxiliar de vuelo','Gángster','Titular del récord mundial','Fabricante de helados','Ama de casa','Subastador','Carnicero','Barista','Soltero','Astronauta','Súper villano','Agente secreto'];
var jobs_used = [];
var quals = ['Astronave','Medalla al mérito','Confesión','Agujero negro','Ambidextro','Pata de palo','Dragón','Vino en caja','Perfil de redes sociales','Cinturón de herramientas','Nacido en las calles','Miedo','Experto','Emocionalmente vacio','Préstamos estudiantiles','Caja','Abierto','Historia triste','Identidad secreta','Profundo','Anillo decodificador','Turbio','Capa','Chocolate','Monóculo','Manopla (Nudillos de bronce)','Filtrar','Espacio para crecer','Crédito adicional','Roca','La coartada perfecta','Bumerang','Receso','Furtivo','Inmunidad diplomática','Acento australiano','Convicción','No tiene sentido del humor','Acento alemán','Respeto a ti mismo','Minivan','Película','Acento británico','Dientes falsos','Habitación insonorizada','Espíritu','Habilidades de supervivencia','Katana','Un dolar','Caña','Conducir','Risa malvada','Problemas paternales','Pereza','Bigote de manillar','Sombrero elegante','Inestable','Sonrisa de un millón de dólares','Nunchakus','Agallas','Lector de mente','Escopeta de caño recortado','Absolutamente adorable','Licencia','No puedo mentir','Tijeras','Experiencia de campo','Alas','Cámara','Medicamento','Ve gente muerta','Cinta negra','Voz suave','Golosinas','Vision nocturna','Diseñado genéticamente','Manos suaves','Paquetes de propulsión','Gancho','Acento ruso','Puede desactivar bombas','No puedo sentir','Bisturí','Nada que perder','Final feliz','Orgullo','Envidiar','Vives con los peces','Consejo','Taburete','Cara de póquer','Compañero','Dulce','Mazo','Periodo de atención corto','Vela aromática','Espada llameante','Indeciso','Incendiario','Manzanas','Escupiendo fuego','Perfil de citas en línea','Traje de tres piezas','Dia de trabajo','Bola de cristal','Premio de consolación','Pasivo agresivo','Inteligencia artificial','Lluvia','Cincuenta tatuajes','Ron','Ética de trabajo','Experimentos','Coche deportivo','Caminante','Fondo fiduciario','Abogado del diablo','1%','Máquina del tiempo','Manos de jazz','Todos los problemas de la historia','Rasgado','Grado asociado','Corazón negro y frío','Garra','Sin sentido del olfato','Cobertizo','Muy mala puntería','Alturas','Acento sureño','Falta de criterio','Varita mágica','Codicia','Paciente','Aerotabla','Complejo de dios','Esbelta figura','Estilo','Tinta invisible','Peinado para cubrir la calvicie','Cadena','Tesoro','Gas incontrolable','Descortés','Reflejo nauseoso','Excusas','Decencia','El antídoto','Barba','Lío caliente','Cosas bonitas','Hocus pocus','Privilegio','Camuflaje','Visión de rayos x','Cascanueces','Cincuenta gatos','Espada de espuma','Poco profundo','Autotitulado','Gabardina','Sudor','Barcos','Polvo de hadas','Avión privado','Cuartos apretados','Acento italiano','Protegido','Pantalones de yoga','Club','Ladrillo','Pedazo de pastel','Paquete','Glotonería','Apocalipsis','Esbirro','Emocionalmente inestable','Grado en línea','Mala suerte','Acento francés','Alucinógenos','Mentiroso patológico','Probador de juegos','Orgánico','Archivos','Capitán','Perchero','Oye voces'];
var quals_used = [];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length); //random var
	var result = quals[index]; //returns result later
	quals_used = quals_used.concat(quals.splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

