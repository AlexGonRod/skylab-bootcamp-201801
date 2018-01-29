'use strict';

$('.Word, .Play, .Win, .Lost, #fail').addClass('hidden');

$('#play').click(function(e){
    e.preventDefault();
    $('.Card').addClass('hidden');
    $('.Word').removeClass('hidden');

function Hangman(palabra, attemps) {

$('.ok').click(function(e){
    var word = $('.inputP').val();
    this.try = function (letra) {
        if(word === 'null' || word === 'undefined' || word === '1234567890'){
            $('#fail').textContent('Please enter a correct word!')
            console.log('Push')
        }
    
    $('.Word').addClass('hidden');
    $('.Play').removeClass('hidden');
    }
})
}
})
