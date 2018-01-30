'use strict';

$(document).ready(function () {

    
    var game;

    // Reset alls section to hidden but .Card
    $('.Word, .Play, .Win, .Lost, #fail').addClass('hidden');

    // Get #play button function and show .Word
    $('#play').click(function (e) {
        e.preventDefault();
        $('.Card').addClass('hidden');
        $('.Word').removeClass('hidden');
    });

    // Get .ok button function and hide/show .Card/.Play
    $('.ok').click(function (e) {
        e.preventDefault();
        var word = $('#word').val().toUpperCase();
        var attemps = $(".attemps").text('10');

        // Initialize the game
        game = new Hangman(word, attemps);
        console.log(guiones);
        // Get the .word length and show as lashes
        $('.guiones').text(guiones.toString());
        console.log(word);
        
        $('.Word').addClass('hidden');
        $('.Play').removeClass('hidden');
    });
   

    // Try a letter
    $('#try').click(function (e) {
        e.preventDefault();
        
        var Try = $('#letter').val();
        var res = game.try(Try);
        
        $('.guiones').text(res.toString());
        //console.log(Try);
        $('.attemps').text(res.attemps);
        console.log(attemps)
    
        
    });
    
});