var questions = [
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

// Inicializamos variables
var p1 = 'jugador 1';
var p2 = 'Jugador 2';
var player1 = 0; // Contador de aciertos player 1
var player2 = 0; // Contador de aciertos player 2
var i = 0; // Indice
var cont = 0; // Contador de preguntas respondidas bien o mal
var timeOut = 0;

// Mostramos el jugador del turno (player1 ó player2)
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

	document.getElementById('info').style.display = 'none';
	document.getElementById('question').style.display = 'block';
	document.getElementById('playername').style.display = 'block';
	document.getElementById('thequestion').style.display = 'block';
	document.getElementById('theanswer').style.display = 'block';
	document.getElementById('buttonanswer').style.display = 'block';
	document.getElementById('buttonpass').style.display = 'block';
	document.getElementById('answer').style.display = 'block';
	document.getElementById('pass').style.display = 'block';
	// Inicializamos la pregunta

	document.getElementById('thequestion').value = questions[i].question;
	document.getElementById("theanswer").focus(); // situamos el cursor en el campo de texto
	document.getElementById('countdown').style.display = 'block';
	document.getElementById('countdown').innerHTML = '15 segundos';
	backcount(); // Llamamos a la función de cuenta atrás
	document.getElementById(questions[i].letter).style.color = 'white';
	document.getElementById(questions[i].letter).style.background = '#0000ff';
}

// TRATAMOS UNA RESPUESTA (CORRECTA / INCORRECTA)
function checkanswer(){
	
	//clearInterval(f); // Paramos Interval y ...
	focus(i); // llamamos a función para la letra intermitente

	timeOut = 0;
	timeOut = setTimeout(function(){ pasapalabra(); }, 15000); // 15 segundos para contestar
	var respuesta = document.getElementById('theanswer').value;
	if (respuesta  == questions[i].answer){
		document.getElementById(questions[i].letter).style.background = "green";
		questions[i].status = 1;

		if (juega == 1){
	      	document.getElementById('playername').style.background = 'orange';
	      	player1++;
	    }else{
	      	document.getElementById('playername').style.background = 'orange';
	      	player2++;
      	}
     	cont++;
     	if (cont > 26){
      		exit(); // si hemos contestado todas las preguntas, salimos
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
			i == ii;
			document.getElementById('thequestion').value = questions[i].question;
			document.getElementById('theanswer').value = "";
			document.getElementById("theanswer").focus(); // situamos el cursor en el campo de texto

			clearInterval(f); // Paramos Interval y ...
			document.getElementById(questions[i].letter).style.color = 'white';
			document.getElementById(questions[i].letter).style.background = '#0000ff';
			focus(i);
		}

   	}else if (respuesta != 'pasapalabra'){
   		document.getElementById(questions[i].letter).style.background = "red";
   		questions[i].status = 1;
   	
	   	if (juega == 1){
	      	juega = 2;
	    }else if (juega == 2){
	      	juega = 1;
	    }
		cont++;
		if (cont > 26){
	    	exit(); // si hemos contestado todas las preguntas, salimos
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
		}
   	}
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
	
	// Ponemos la letra de color azul
	document.getElementById(questions[i].letter).style.color = 'white';
	document.getElementById(questions[i].letter).style.background = '#0000ff';
}

// TRATAMOS UNA RESPUESTA PASAPALABRA (POR EVENTO O POR SOBREPASAR EL TIEMPO)
function pasapalabra(){
	clearTimeout(timeOut); // Paramos setTimeout

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
   	exit(); // si hemos contestado todas las preguntas, salimos
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

// SALIDA DEL JUEGO POR COMPLETAR TODAS LAS LETRAS
function exit(){
	document.getElementById('thequestion').style.display = 'none'; // Ocultar campo
	document.getElementById('theanswer').style.display = 'none'; // Ocultar campo
	document.getElementById('pass').style.display = 'none'; // Ocultar campo
	document.getElementById('answer').style.display = 'none'; // Ocultar campo
	document.getElementById('playername').style.display = 'none'; // Ocultar campo
	document.getElementById('info').style.height = '100px';
	document.getElementById('info').style.display = 'block'; // Mostrar campo
	if (player1 >= player2) {
		var message = 'PASAPALABRA TERMINADO<br><br>Jugador 1: ' + player1 + ' aciertos<br>Jugador 2: ' + player2 + ' aciertos';
	}else{
		var message = 'PASAPALABRA TERMINADO<br>Jugador 2: ' + player2 + ' aciertos<br>Jugador 1: ' + player1 + ' aciertos';
	}
	document.getElementById('info').innerHTML = message; // Introducir texto en campo
	document.getElementById('question').style.display = 'none';
	clearInterval(count);
	document.getElementById('countdown').style.display = 'none';
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

