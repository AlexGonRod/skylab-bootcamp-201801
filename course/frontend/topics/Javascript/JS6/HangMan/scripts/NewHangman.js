class Hangman {
    constructor(palabra, attemps) {

        const word = palabra.toUpperCase().split('');
        const guiones = Array(word.length).fill('_');

        const msgs = {
            ok: 'You have guessed the word, well done!',
            notOk: 'Sorry, you have not guessed... the correct word is ',
            over: 'GAME OVER.',
            notCorrect: 'Please, enter a valid character or word!'
        }

        this.isNumeric = num => isNaN(num);
        

        //Busca la letra y la rechaza
        this.try = function (letra) {

            // si no es > 1, es una letra sola, 
            // si no es un string, salta un msg de error
            if (typeof letra !== 'string' || !this.isNumeric(letra)) { //TODO a test with a % in the string
                return `${msgs.notCorrect}`
            }

            //Primero si no hay más intentos disponibles, salimos.
            if (attemps === 0) {
                return `${msgs.over}`;
            }
            // si la letra introducida es > 1, es una palabra
            if (letra.length > 1) {
                //miramos si es igual a word.
                if (letra === word.join('').toLowerCase()) {
                    attemps = 0;
                    return `${msgs.ok}`;
                }
                //si no, quita todos los intentos y fuerza el GAME OVER en el siguiente turno.
                else {
                    attemps = 0;
                    return `${msgs.notOk} + word.join('').toUpperCase() + '.'`;
                }
                return `${attemps} ${guiones.join(' ')}`;
            }



            // si no existe la letra introducida, quita un attempt
            if (word.indexOf(letra.toUpperCase()) === -1) {
                attemps--;
                // console.log('Ups!');

            }
            // si existe, miramos CUANTAS coincidencias hay
            else {
                // console.log("It's in!");
                // acepta la letra y la cambia a MAYUS en la posición de los guiones.
                for (let i = 0; i < word.length; i++) {
                    if (word[i] === letra.toUpperCase()) {
                        guiones[i] = letra.toUpperCase();
                    }
                }
            }
            return `${attemps} ${guiones.join(' ')}`
        }

    }
}

//var game = new Hangman('hello', 10);
