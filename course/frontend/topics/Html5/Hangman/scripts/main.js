'use strict';

$('.Word, .Play, .Win, .Lost, #fail').addClass('hidden');

$('#play').click(function (e) {
    e.preventDefault();
    $('.Card').addClass('hidden');
    $('.Word').removeClass('hidden');

    $('.ok').click(function Hangman(a) {

        var word = $('#word').val().toUpperCase();
        // if(word == undefined || word == null){
        //     console.log('NOOOOO')
        //     $('#fail').removeClass('hidden');
        // }else{
            console.log(word);
        $('.Word').addClass('hidden');
        $('.Play').removeClass('hidden');
        //}

        $('.try').click(function (a) {
            this.try = function (letter) {
                var letter = $('#letter').val().toUpperCase();
                var attemps = $('.strong');
                var guiones = $('.guiones');

                //Primero si no hay más intentos disponibles, salimos.
                if (attemps === 0) {
                    $('.Play').addClass('hidden');
                    $('.Lost').removeClass('hidden');
                }
                // si la letra introducida es > 1, es una palabra
                if (letter.length > 1) {
                    //miramos si es igual a word.
                    if (letter === word.join('').toLowerCase()) {
                        attemps = 0;
                        $('.Play').addClass('hidden');
                        $('.Win').removeClass('hidden');
                    }
                    //si no, quita todos los intentos y fuerza el GAME OVER en el siguiente turno.
                    else {
                        attemps = 0;
                        $('.Play').addClass('hidden');
                        $('.Lost').removeClass('hidden');
                    }
                    if (word.indexOf(letter.toUpperCase()) === -1) {
                        attemps--;
                         console.log('Ups!');

                    }
                    // si existe, miramos CUANTAS coincidencias hay
                    else {
                        console.log("It's in!");
                        // acepta la letra y la cambia a MAYUS en la posición de los guiones.
                        for (i = 0; i < word.length; i++) {
                            if (word[i] === letter.toUpperCase()) {
                                guiones[i] = letter.toUpperCase();
                            }
                        }
                    }
                }
            }
        })
    
    })
})
