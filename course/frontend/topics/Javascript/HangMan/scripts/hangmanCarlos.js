function Hangman(word, attemps) {
    var cadena = [];

    for (var i = 0; i < word.length; i++) {
        cadena.push('_');
    }
    var play = true;
    var ok = false;

    this.try = function (_word) {
        var message = '';

        if (play) {
            if (_word.length <= 1) {
                for (var i = 0; i < word.length; i++) {
                    if (_word.toLowerCase() === word.charAt(i).toLowerCase()) {
                        ok = true;
                        cadena.splice(i, 1, _word.toUpperCase());
                    }
                }

                if (ok) {
                    (cadena.indexOf('_') === -1) ?
                        (message = 'You have guessed the word, well done!', play = false) :
                        (ok = false, message = attemps + " " + cadena.join(" "));
                }
                else {
                    --attemps;
                    (attemps === 0) ?
                        (message = 'Sorry, you have not guessed... the correct word is HELLO.', play = false) :
                        (message = attemps + " " + cadena.join(" "));
                }
            }
            else {
                play = false;
                return (_word === word ? 'You have guessed the word, well done!' : 'Sorry, you have not guessed... the correct word is HELLO.');
            }
        }
        else {
            message = 'GAME OVER.';
        }
        return message
    }
}