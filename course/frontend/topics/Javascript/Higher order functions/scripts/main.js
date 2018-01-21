function Box(secret, password) {
    this.getSecret = function (_password) { // si lo haces
        if (password === _password) {
            return secret;
        }
    }

    this.setSecret = function (_secret, _pswd) {
        if (_pswd === password) {
            secret = _secret;
        }
    }
        this.changePassword = function (newPassword, oldPassword) {
            if (password === oldPassword) {
                password = newPassword;
            }

        }

    }
        var box = new Box("a secret", "a password");
        box.getSecret()
        box.setSecret()
        box.changePassword()

        // los metodos son propios de cada instancia.
        //llamas a getScret y tiene todo el scope dentro de la funcion BOX. siempre que llames desde dentro <<clousures>>



        function HangMan(palabra, attemps) {

            var word = palabra.split('');
            var guiones = ['_', '_', '_', '_', '_'];


            //Busca la letra y la rechaza
            this.try = function (letra) {
                if (word.indexOf(letra) === -1) {
                    attemps--;
                    console.log('Ups!');
                
                } else {
                    // acepta la letra y la cambia en los guiones
                    console.log("It's in!");
                    for (i = 0; i < word.length; i++) {
                        if (word[i] === letra) {
                            guiones[i] = letra;
                        }
                    }
                }
                //si los intentos llegan a cero, refresca el juego
                if(attemps === 0){
                    console.log('Game Over');
                    window.location.reload(true)
                   
                }

            }
            this.wholeWord = function(_palabra){
                if(_palabra === palabra){
                    console.log('Well Done');
                }
                console.log(attemps + ' ' + guiones)
            }

        console.log(attemps + ' ' + guiones)
        }
        var game = new HangMan("hello", 9);

       

