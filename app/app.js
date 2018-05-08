var questions = new Array(); // Array para la copia temporal de questions1, questions2 y questions3
var questions1 = [ // Array 1 de preguntas
	{ letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
	{ letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
	{ letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
	{ letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
	{ letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
	{ letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
	{ letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
	{ letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
	{ letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
	{ letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
	{ letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
	{ letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
	{ letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
	{ letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
	{ letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
	{ letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
	{ letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
	{ letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
	{ letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
	{ letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
	{ letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
	{ letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
	{ letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
	{ letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
	{ letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
	{ letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
	{ letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
];

var questions2 = [ // Array 2 de preguntas
	{ letter: "a", answer: "arquimedes", status: 0, question: ("CON LA A. Quien dijo: 'Dadme un punto de apoyo y moveré el mundo'") },
	{ letter: "b", answer: "buitre", status: 0, question: ("CON LA B. Ave rapaz de mayor tamaño en España") },
	{ letter: "c", answer: "cacahuete", status: 0, question: ("CON LA C. Fruto seco que se utiliza en la fabricación de la dinamita") },
	{ letter: "d", answer: "dos", status: 0, question: ("CON LA D. (en letras)Cuántos caballos de la baraja española miran a la izquierda?") },
	{ letter: "e", answer: "español", status: 0, question: ("CON LA E. Equipo de fútbol cuyos jugadores se apodan 'los periquitos'") },
	{ letter: "f", answer: "francia", status: 0, question: ("CON LA F. País del cual es oiginaria la marca de coches Citroen") },
	{ letter: "g", answer: "guiñol", status: 0, question: ("CON LA G. Cómo se denomina el teatro de títeres") },
	{ letter: "h", answer: "hipocrates", status: 0, question: ("CON LA H. Padre griego de la medicina") },
	{ letter: "i", answer: "igor", status: 0, question: ("CON LA I. Personaje de El Jovencito Frankenstein con una joroba movible") },
	{ letter: "j", answer: "juegos olimpicos", status: 0, question: ("CON LA J. (dos palabras)Competición deportiva cuyo lema es 'más digno, más alto, más fuerte'") },
	{ letter: "k", answer: "kiwi", status: 0, question: ("CON LA K. Nombre de una fruta y un animal") },
	{ letter: "l", answer: "libra", status: 0, question: ("CON LA L. Signo del zodíaco representado por una balanza") },
	{ letter: "m", answer: "merlin", status: 0, question: ("CON LA M. Mago que deslumbró a la corte del Rey Arturo") },
	{ letter: "n", answer: "nuez", status: 0, question: ("CON LA N. Fruto del nogal") },
	{ letter: "ñ", answer: "maño", status: 0, question: ("CONTIENE LA Ñ. Ciudadano de la comunidad de Aragón") },
	{ letter: "o", answer: "obstinado", status: 0, question: ("CON LA O. Que se mantiene excesivamente firme en una idea") },
	{ letter: "p", answer: "pluto", status: 0, question: ("CON LA P. Nombre de la mascota de Mikey Mouse") },
	{ letter: "q", answer: "queroseno", status: 0, question: ("CON LA Q. Líquido inflamable, compuesto de hidrocarburos, que se emplea en los motores de los aviones") },
	{ letter: "r", answer: "rupia", status: 0, question: ("CON LA R. Moneda utilizada en la India") },
	{ letter: "s", answer: "san francisco", status: 0, question: ("CON LA S. (dos palabras)En qué ciudad se encuentra el célebre puente 'Golden Gate'") },
	{ letter: "t", answer: "torpedo", status: 0, question: ("CON LA T. Proyectil autopropulsado que se desplaza por debajo del agua") },
	{ letter: "u", answer: "utero", status: 0, question: ("CON LA U. Extraído de una histerectomía") },
	{ letter: "v", answer: "villano", status: 0, question: ("CON LA V. Que actúa o es capaz de actuar de forma ruin o cruel") },
	{ letter: "w", answer: "whisky ", status: 0, question: ("CONTIENE LA W. Bebida alcohólica obtenida por la destilación de la malta fermentada de cereales") },
	{ letter: "x", answer: "extorsionar", status: 0, question: ("CONTIENE LA X. Obtener una cosa de una persona mediante el uso de la violencia, las amenazas o la intimidación") },
	{ letter: "y", answer: "yate", status: 0, question: ("CON LA Y. Embarcación de recreo a motor o a vela, de manga o anchura mayor que un velero") },
	{ letter: "z", answer: "zoquete", status: 0, question: ("CON LA Z. Que tiene dificultad para comprender las cosas, aunque sean sencillas") },
];

var questions3 = [ // Array 3 de preguntas
	{ letter: "a", answer: "aconcagua", status: 0, question: ("CON LA A. Cumbre más elevada de Sudamérica") },
	{ letter: "b", answer: "belgica", status: 0, question: ("CON LA B. En qué país se encuentra Waterloo?") },
	{ letter: "c", answer: "cleopatra", status: 0, question: ("CON LA C. Reina de Egipto que fue amante de Marco Antonio") },
	{ letter: "d", answer: "diez", status: 0, question: ("CON LA D. (en letras)Cuántos jugadores, incluyendo los suplentes, integran un equipo de baloncesto en partidos oficiales?") },
	{ letter: "e", answer: "enebro", status: 0, question: ("CON LA E. Arbusto del que provienen las bayas por las que está aromatizada la ginebra") },
	{ letter: "f", answer: "filipinas", status: 0, question: ("CON LA F. País cuya capital es Manila") },
	{ letter: "g", answer: "gaditano", status: 0, question: ("CON LA G. Natural de Cádiz") },
	{ letter: "h", answer: "haiti", status: 0, question: ("CON LA H. País del Caribe cuya capital es Puerto Príncipe") },
	{ letter: "i", answer: "isaac peral", status: 0, question: ("CON LA I. (dos palabras)Español inventor del submarino") },
	{ letter: "j", answer: "jaque mate", status: 0, question: ("CON LA J. (dos palabras)Lance que pone fin al juego de ajedrez") },
	{ letter: "k", answer: "euskadi", status: 0, question: ("CONTIENE LA K. Comunidad autónoma del norte de España") },
	{ letter: "l", answer: "lisboa", status: 0, question: ("CON LA L. Capital situada en el estuario del Tajo") },
	{ letter: "m", answer: "marte", status: 0, question: ("CON LA M. Planeta con un cielo rosa") },
	{ letter: "n", answer: "nairobi", status: 0, question: ("CON LA N. Capital de Kenia") },
	{ letter: "ñ", answer: "pañuelo", status: 0, question: ("CONTIENE LA Ñ. Utilizado para sonarse la naríz") },
	{ letter: "o", answer: "obstruido", status: 0, question: ("CON LA O. Sinónimo de atascado") },
	{ letter: "p", answer: "planeta", status: 0, question: ("CON LA P. Cuerpo celeste que orbita alrededor de una estrella o remanente de ella.") },
	{ letter: "q", answer: "quirofano", status: 0, question: ("CON LA Q. Sala de un hospital especialmente acondicionada para realizar operaciones quirúrgica") },
	{ letter: "r", answer: "rascar", status: 0, question: ("CON LA R. Refregar la piel o una parte del cuerpo con una cosa aguda o áspera, especialmente con las uñas para aliviar un picor o escozor") },
	{ letter: "s", answer: "sahara", status: 0, question: ("CON LA S. Desierto con más arena del mundo") },
	{ letter: "t", answer: "trabalenguas", status: 0, question: ("CON LA T. Palabras o frases difíciles de pronunciar que se utilizan como juego al intentar pronunciarlas bien") },
	{ letter: "u", answer: "uvas", status: 0, question: ("CON LA U. Se comen frescas o se utilizan para producir agraz, mosto, vino, vinagre y pisco") },
	{ letter: "v", answer: "virus", status: 0, question: ("CON LA V. Microorganismo compuesto de material genético protegido por un envoltorio proteico, que causa diversas enfermedades") },
	{ letter: "w", answer: "washington", status: 0, question: ("CONTIENE LA W. Capital cuyo nombre conmemora al primer presidente del país") },
	{ letter: "x", answer: "exhausto", status: 0, question: ("CONTIENE LA X. Que está muy cansado, débil y sin fuerzas") },
	{ letter: "y", answer: "yelmo", status: 0, question: ("CON LA Y. Parte de la armadura que resguardaba la cabeza y el rostro") },
	{ letter: "z", answer: "zulo", status: 0, question: ("CON LA Z. Habitáculo oculto, generalmente subterráneo y de dimensiones reducidas, que se usa para esconder a alguien o algo") },
];

// Centramos tablero
var screenwidth = window.innerWidth;
var marginleft = ((screenwidth - 550) / 2).toString() + 'px';
document.getElementById('tablero').style.marginLeft = marginleft;

// Inicializamos variables
var p1 = 'Jugador 1';
var p2 = 'Jugador 2';
var player1 = 0; // Contador de aciertos player 1
var player2 = 0; // Contador de aciertos player 2
var i = 0; // Indice
var cont = 0; // Contador de preguntas respondidas bien o mal
var timeOut = 0; // Valor inicial para setTimeOut()
var array = 1; // Identificador de Array(1 para questions1, 2 para questions2 ó 3 para questions3)

// Mostramos el jugador del turno (player 1 ó player 2)
var juega = 1;
if (juega == 1){
	document.getElementById('playername').innerHTML = p1;
	document.getElementById('playername').style.background = 'orange';
}else if (juega == 2){
	document.getElementById('playername').innerHTML = p2;
	document.getElementById('playername').style.background = 'yellow';
}

// INICIALIZAMOS EL TABLERO
function start(){
	timeOut = setTimeout(function(){ pasapalabra(); }, 15000); // 15 segundos para contestar
	focus(i); // llamamos a función para la letra intermitente
	backcount(); // Llamamos a la función de cuenta atrás
	document.getElementById('info').style.display = 'none';
	document.getElementById('question').style.display = 'block';
	document.getElementById('playername').style.display = 'block';
	document.getElementById('thequestion').style.display = 'block';
	document.getElementById('theanswer').style.display = 'block';
	document.getElementById('buttonanswer').style.display = 'block';
	document.getElementById('buttonpass').style.display = 'block';
	document.getElementById('buttonend').style.display = 'block';
	document.getElementById('buttonleave').style.display = 'block';
	document.getElementById('parcialp1').style.background = 'orange';
	document.getElementById('parcialp2').style.background = 'yellow';

	// Inicializamos la pregunta y guardamos en el array temporal questions el array de preguntas que corresponda según el valor aleatorio
	array = Math.floor(Math.random() * (4 - 1)) + 1; // Random entre 1 y 3
	if (array == 1){
		questions = questions1.slice();
	}else if (array == 2){
		questions = questions2.slice();
	}else if (array == 3){
		questions = questions3.slice();
	}
	document.getElementById('thequestion').value = questions[i].question; // Mostramos la pregunta
	document.getElementById("theanswer").focus(); // situamos el cursor en el campo de texto(foco)
	document.getElementById('countdown').style.display = 'block';
	document.getElementById('countdown').innerHTML = '15 segundos';
	document.getElementById(questions[i].letter).style.color = 'white';
	document.getElementById(questions[i].letter).style.background = '#0000ff';
}

// TRATAMOS UNA RESPUESTA (CORRECTA / INCORRECTA)
function checkanswer(){
	clearTimeout(timeOut); // Paramos setTimeout
	cont++; // Incrementamos el contador de preguntas respondidas
	// Guardamos en el array temporal questions el array de preguntas que corresponda a la pregunta
	if (array == 1){
		questions = questions1.slice();
	}else if (array == 2){
		questions = questions2.slice();
	}else if (array == 3){
		questions = questions3.slice();
	}

	// Ponemos la letra de color azul
	document.getElementById(questions[i].letter).style.color = 'white';
	document.getElementById(questions[i].letter).style.background = '#0000ff';

	timeOut = 0;
	timeOut = setTimeout(function(){ pasapalabra(); }, 15000); // 15 segundos para contestar

	var respuesta = document.getElementById('theanswer').value; // Recogemos el valor del campo de texto con la respuesta

	// Pasamos la respuesta a minúsculas, comparamos con la respuesta correcta y, si coincide ...
	if (respuesta.toLowerCase()  == questions[i].answer){
		document.getElementById(questions[i].letter).style.background = "green"; // Ponemos el color de la letra en verde
		// Ponemos el 'status' de la letra a 1 en las 3 matrices para no volver a coger la misma letra
		questions1[i].status = 1;
		questions2[i].status = 1;
		questions3[i].status = 1;

		if (juega == 1){
	      	//document.getElementById('playername').style.background = 'orange';
	      	player1++;
	      	document.getElementById('parcialp1').innerHTML = player1 + ' aciertos'; // Actualizamos el contador parcial de Player 1
	    }else{
	      	//document.getElementById('playername').style.background = 'orange';
	      	player2++;
	      	document.getElementById('parcialp2').innerHTML = player2 + ' aciertos'; // Actualizamos el contador parcial de Player 2
      	}
     	if (cont > 26){
      		exit('exit'); // si hemos contestado todas las preguntas, salimos
     	}else{
			status = 1; // para que comience el while
			// Buscamos la próxima pregunta con status=0
	     	while (status == 1){
	      		i++;
				if (i <= 26){
			      	if (questions[i].status == 0){
			      		status = 0;
			      		var ii = i;
			      	}
		    	}else{ // Si hemos llegado al final de la matriz, volvemos al la primera letra
			      	i = 0;
			      	if (questions[i].status == 0){
			      		status = 0;
			      		var ii = i;
			      	}
		    	}
	      	}
			i == ii; // Asignamos el índice de la próxima letra con el índice que acabamos de encontrar

			// Decidimos el próximo array con el que vamos a trabajar
			array = Math.floor(Math.random() * (4 - 1)) + 1; // Random entre 1 y 3
			if (array == 1){
				questions = questions1.slice();
			}else if (array == 2){
				questions = questions2.slice();
			}else if (array == 3){
				questions = questions3.slice();
			}
			document.getElementById('thequestion').value = questions[i].question;
			document.getElementById('theanswer').value = "";
			document.getElementById("theanswer").focus(); // situamos el cursor en el campo de texto
			clearInterval(f); // Paramos Interval y ...
			focus(i); // Ponemos la letra a parpadear
		}

	// Si la respuesta es incorrecta no es 'pasapalabra' ...
   	}else if (respuesta != 'pasapalabra'){
   		document.getElementById(questions[i].letter).style.background = "red"; // Ponemos el color de la letra en rojo
   		// Ponemos el 'status' de la letra a 1 en las 3 matrices para no volver a coger la misma letra
   		questions1[i].status = 1;
		questions2[i].status = 1;
		questions3[i].status = 1;

   		// Cambiamos el turno
	   	if (juega == 1){
	      	juega = 2;
	    }else if (juega == 2){
	      	juega = 1;
	    }
		if (cont > 26){
	    	exit('exit'); // si hemos contestado todas las preguntas, salimos
	    }else{
      		status = 1; // para que comience el while
      		// Buscamos la próxima pregunta con status=0
	      	while (status == 1){
	      		i++;
	      		if (i <= 26){
	      			if (questions[i].status == 0){
			      		status = 0;
			      		var ii = i;
			      	}
	      		}else{
			      	i = 0;
			      	if (questions[i].status == 0){
			      		status = 0;
			      		var ii = i;
			      	}
			    }
	      	}
      		i = ii; // Asignamos el índice de la próxima letra con el índice que acabamos de encontrar

      		// Decidimos el próximo array con el que vamos a trabajar
      		array = Math.floor(Math.random() * (4 - 1)) + 1; // Random entre 1 y 3
			if (array == 1){
				questions = questions1.slice();
			}else if (array == 2){
				questions = questions2.slice();
			}else if (array == 3){
				questions = questions3.slice();
			}
			document.getElementById('thequestion').value = questions[i].question;
			document.getElementById('theanswer').value = "";
			document.getElementById("theanswer").focus(); // situamos el cursor en el campo de texto
			clearInterval(f); // Paramos Interval y ...
			focus(i); // Ponemos la letra a parpadear
		}
   	}
   	// Ponemos el color del div y ponemos el jugador
	if (juega == 1){
		document.getElementById('playername').innerHTML = p1;
		document.getElementById('playername').style.background = 'orange';
	}else if (juega == 2){
		document.getElementById('playername').innerHTML = p2;
		document.getElementById('playername').style.background = 'yellow';
	}
	clearInterval(count);
	document.getElementById('countdown').innerHTML = '15 segundos';
	backcount(); // Llamamos a la función de cuenta atrás
}

// TRATAMOS UNA RESPUESTA PASAPALABRA (POR EVENTO O POR SOBREPASAR EL TIEMPO)
function pasapalabra(){
	clearTimeout(timeOut); // Paramos setTimeout

	// Inicializamos la pregunta
	array = Math.floor(Math.random() * (4 - 1)) + 1; // Random entre 1 y 3
	if (array == 1){
		questions = questions1.slice();
	}else if (array == 2){
		questions = questions2.slice();
	}else if (array == 3){
		questions = questions3.slice();
	}

	// Ponemos la letra de color azul
	document.getElementById(questions[i].letter).style.color = 'white';
	document.getElementById(questions[i].letter).style.background = '#0000ff';

	timeOut = 0;
	timeOut = setTimeout(function(){ pasapalabra(); }, 15000); // 15 segundos para contestar
	if (juega == 1){
		juega = 2;
	}else if (juega == 2){
		juega = 1;
	}
	if (juega == 1){
		document.getElementById('playername').innerHTML = p1;
		document.getElementById('playername').style.background = 'orange';
	}else if (juega == 2){
		document.getElementById('playername').innerHTML = p2;
		document.getElementById('playername').style.background = 'yellow';
	}
	
	if (cont > 26){
   	exit('exit'); // si hemos contestado todas las preguntas, salimos
  	}else{
   	status = 1; // para que comience el while
   	while (status == 1){
   		i++;
   		if (i <= 26){
   			if (questions[i].status == 0){
	      		status = 0;
	      		var ii = i;
	      	}
   		}else{
	      	i = 0;
	      	if (questions[i].status == 0){
	      		status = 0;
	      		var ii = i;
	      	}
	      }
   	}
   	i = ii;
   	document.getElementById('thequestion').value = questions[i].question;
	document.getElementById('theanswer').value = "";
	document.getElementById("theanswer").focus(); // situamos el cursor en el campo de texto
	clearInterval(count);
	document.getElementById('countdown').innerHTML = '15 segundos';
	backcount(); // Llamamos a la función de cuenta atrás
	document.getElementById(questions[i].letter).style.color = 'white';
	document.getElementById(questions[i].letter).style.background = '#0000ff';
	clearInterval(f); // Paramos Interval y ...
	focus(i); // llamamos a función para la letra intermitente
	}
}

// SALIDA DEL JUEGO POR EVENTO(ABANDONAR / TERMINAR) O POR COMPLETAR TODAS LAS LETRAS
function exit(action){
	clearTimeout(timeOut); // Paramos setTimeout
	clearInterval(count);
	clearInterval(f);
	document.getElementById('thequestion').style.display = 'none'; // Ocultar campo
	document.getElementById('theanswer').style.display = 'none'; // Ocultar campo
	document.getElementById('pass').style.display = 'none'; // Ocultar campo
	document.getElementById('buttonanswer').style.display = 'none'; // Ocultar campo
	document.getElementById('buttonpass').style.display = 'none'; // Ocultar campo
	document.getElementById('buttonend').style.display = 'none'; // Ocultar campo
	document.getElementById('buttonleave').style.display = 'none'; // Ocultar campo
	document.getElementById('playername').style.display = 'none'; // Ocultar campo
	document.getElementById('info').style.height = '100px';
	document.getElementById('info').style.display = 'block'; // Mostrar campo
	document.getElementById('parcialp1').style.display = 'none'; // Ocultar campo
	document.getElementById('parcialp2').style.display = 'none'; // Ocultar campo

	if (action == 'exit'){ // Si terminamos o completamos ...
		if (player1 >= player2) {
			var message = '<u>RANKING</u><br>Jugador 1: ' + player1 + ' aciertos<br>Jugador 2: ' + player2 + ' aciertos';
		}else{
			var message = '<u>RANKING</u><br>Jugador 2: ' + player2 + ' aciertos<br>Jugador 1: ' + player1 + ' aciertos';
		}
	}else if (action == 'leave'){ // Si abandonamos
		if (juega == 1){
			message = p1 + ' eliminado con ' + player1 + ' aciertos.';
			message += '<br><br><u>RANKING</u><br>Jugador 2: ' + player2 + ' aciertos';
		}else{
			message = p2 + ' eliminado con ' + player2 + ' aciertos.';
			message += '<br><br><u>RANKING</u><br>Jugador 1: ' + player1 + ' aciertos';
		}
	}
	document.getElementById('info').innerHTML = message; // Introducir texto en campo
	document.getElementById('question').style.display = 'none';
	clearInterval(count);
	document.getElementById('countdown').style.display = 'none';
	document.getElementById('buttonrestart').style.display = 'block';
}

// FUNCIÓN PARA VOLVER A JUGAR
function restart(){
	location.reload();
}

// FUNCIÓN CUENTA ATRÁS SEGUNDOS
function backcount(){
	var i = 1;
	count = setInterval(
		function(){
			document.getElementById('countdown').innerHTML = (15-i) + ' segundos';
			i++;
			if (i > 15){
				clearInterval(count);
			}
		}, 1000
	);
}

// FUNCIÓN LETRA ACTIVA
function focus(i){
	var foc = 1;
	var j = 1;
	var color = '#0000ff';
	var background = 'white';
	f = setInterval(
		function(){
			if (foc == 1){
				color = '#0000ff';
				bg = 'white';
				foc = 2;
			}else if (foc == 2){
				color = 'white';
				bg = '#0000ff';
				foc = 1;
			}
			document.getElementById(questions[i].letter).style.color = color;
			document.getElementById(questions[i].letter).style.background = bg;
			
			j++;
			if (j > 6){
				clearInterval(f);
			}
		}, 1000
	);
}