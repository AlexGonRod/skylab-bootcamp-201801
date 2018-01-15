
var arrPlayers = []

function pasapalabra(){
var nombres = {}
var corr = 0;
var incorr = 0;
var count = 0;


var questions = [
        {letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")},
        {letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")},
        {letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé")}
    ]

var player = prompt("What's your name?: ");

        if(player == null || player === ''){
            return "BYE!"
        }else{
        nombres.nombre = player;
        console.log(player)
        preguntas()
        }

function preguntas(){
    do {

        questions.forEach(function(obj){
        if(obj.status === 0){
        var answer = prompt(obj.question);
        if(answer === obj.answer){
        console.log("Correcta");
        count++;
        corr++;
        nombres.points = corr;
        }else if(answer === 'pasapalabra' || answer === ''){
        console.log('Siguiente');

        }else if(answer === null){
        return('Tienes ' + corr + ' preguntas acertadas y ' + incorr + ' equivocadas');
        console.log('false')
        }else{
        console.log('Incorrecta');
        count++;
        incorr++;
        }}

        });
    }

    while(count < questions.length)

    console.log('Tienes ' + corr + ' preguntas acertadas y ' + incorr + ' equivocadas');

    console.log(arrPlayers)
    arrPlayers.push(nombres)
    arrPlayers.sort(function(a, b){
    var keyA = a.points,
        keyB = b.points;
    // Compare the 2 dates
    if(keyA > keyB) return -1;
    if(keyA < keyB) return 1;
    return 0;
});

console.log('Ranking:\n')
arrPlayers.forEach(function(obj){
    console.log(obj.nombre + ": " + obj.points);
    });

    var confirmar = confirm(" Quieres volver a jugar?" )
        if(confirmar === true){
        pasapalabra()
        }else{
        return 0
        }

}

}
pasapalabra()
