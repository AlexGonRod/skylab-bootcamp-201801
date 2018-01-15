
var card = [];
var bombo =[];
var lineas = [false, false, false]
var contadorAciertos = 0;
var contadorTurnos = 0;

function bingo(){

var name = prompt("What's your name?: ");

        if(name === null || name === ''){
            return "BYE!"
        }else{
            cardGenerator()
        }

function cardGenerator(){
  for(var i=0; i<15; i++){
  var random = (Math.floor(Math.random()*100)+1);
  if(card.indexOf(random) === -1){
  card.push(random)
  }else{
  i--
  }
  }
confirm("Hola " + name + ", esta es tu carta:\n"  + card)

}

function getRandom(){
  var bola = (Math.floor(Math.random()*100)+1);
  if(bombo.indexOf(bola) === -1){
  bombo.push(bola);
  contadorTurnos++

  }else{
  bola = getRandom()
    }

return bola;
}

function getMatch(){
  if(contadorAciertos === 15){

            return 0
    }
      var randomN = getRandom();
      for(var i=0; i<card.length; i++){

      if(card[i] === randomN){

      console.log('Coincide');
      card[i] = 'X';
    contadorAciertos++;

      alert("Tienes una coincidencia. Esta es tu carta:\n " + card)
    contadorTurnos--
      if(lineas[0] === false){
        linea(0,4,0)

      }

      if(lineas[1]=== false){
        linea(5,9,1)

        }
      if(lineas[2]=== false){
      linea(10,14, 2)

      }
      }
      }
      var confirmar = confirm("Este es tu número: " + randomN +       "\nContinuar" )
        if(confirmar === true){
        getMatch()
        }else{
        return 0
        }



}

function linea(inicio, fin, linea){
  for(var i=inicio; i<fin; i++){
    if(card[i] !== 'X'){
      return 0
    }

  }

  alert("LINEA")

  lineas[linea] = true;

}


for(var i=0; i<99; i++){
  var newTurn = getMatch()
  newTurn
  if(newTurn === 0){
    return 'Has acabado o retirado del juego en ' + contadorTurnos + ' turnos'

  }
  }

}
bingo()
