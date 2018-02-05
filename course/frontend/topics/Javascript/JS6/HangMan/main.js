function Hangman(palabra, attemps) {

    var word = palabra.toUpperCase().split('')
    var guiones = Array(word.length).fill('_')

    //Busca la letra y la rechaza
    this.try = function (letra) {
        //Primero si no hay más intentos disponibles, salimos.
        if (attemps === 0) {
            return 'GAME OVER';
        }
        // si la letra introducida es > 1, es una palabra
        if (letra.length > 1) {
            //miramos si es igual a word.
            if (letra === word.join('').toLowerCase()) {
                return 'You have guessed the word, well done!'
            }
            //si no, quita todos los intentos y fuerza el GAME OVER en el siguiente turno.
            else {
                attemps = 0
                return 'Sorry, you have not guessed... the correct word is ' + word.join('').toUpperCase() + '.'
            }
            return attemps + ' ' + guiones.join(' ')
        }

        // si no es > 1, es una letra sola, 
        // si no existe la letra introducida, quita un attempt
        if (word.indexOf(letra.toUpperCase()) === -1) {
            attemps--;
            console.log('Ups!');

        }
        // si existe, miramos CUANTAS coincidencias hay
        else {
            console.log("It's in!");
            // acepta la letra y la cambia a MAYUS en la posición de los guiones.
            for (i = 0; i < word.length; i++) {
                if (word[i] === letra.toUpperCase()) {
                    guiones[i] = letra.toUpperCase();
                }
            }
        }
        return attemps + ' ' + guiones.join(' ')
    }
}

//var game = new Hangman('hello', 10);
