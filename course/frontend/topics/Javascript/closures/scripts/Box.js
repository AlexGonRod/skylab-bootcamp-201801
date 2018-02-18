function Box(secret, password) {
    this.getSecret = function (_password) {
        if (password === _password) return secret;
    }

    this.setSecret = function (_secret, _password) {
        if (password === _password)
            secret = _secret;
    }

    this.changePassword = function (newPassword, oldPassword) {
        if (password === oldPassword)
            password = newPassword;
    }
}

//callback

function accessBar(age, func_tion) {

    age >= 18 ? func_tion("access") : func_tion();


}

function advisor(permition) {
    var result;
    permition == "access" ? (result = "the entrance is allowed") : (result = "the entrance is not allowed");
    console.log(result);
}

accessBar(8, advisor);

// FIRST WAY, CALLED OTHER FUNCTION AS A CALLBACK

function entry(age, callback) {
    if (age > 18) {
        return callback(true)
    } else {
        return callback(false)
    }

}

function functionAllow(allow) {
    if (allow) {
        return 'entry!'
    } else {
        return 'nope u fu**** child.'
    }
}

entry(19, functionAllow) // entry!


//---------------------------------------
// SECOND WAY, CALL A ANONYMOUS FUNCTION AS A CALLBACK

function entry(age, callback) {
    if (age > 18) {
        return callback(true)
    } else {
        return callback(false)
    }

}

entry(16, function (allow) {
    if (allow) {
        return 'entry!'
    } else {
        return 'nope u fu**** child.'
    }
}) // 'nope u fu**** child.'


///

function calc(num, callback){



}

console.log(calc(4).sum(3).mult(2))

///

function text(source) {

    function wrap(elem1, elem2) {
        if (elem1 == undefined) {
            elem2 = elem1;
        }
        source = elem1 + source + elem2;

        return this;
    }

    function toString() {
        return source;
    }

    return {

        wrap: wrap,
        toString: toString
    };

}
console.log(text('Hola').wrap('$', '$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#', '#').toString())

///
function calc(num){

function sum(num2){
    
}
    var result = eval(num + sum * mult)
}


console.log(calc(4).sum(3).mult(2))
///

var text;
(function () {
    function wrap(text, before, after) {
        retun(before || '') + text + (after || before || '')
    }
    text = function (_text) {
        var __text = new String(_text);

        __text.wrap = function (before, after) {
            return text(wrap(_text, before, after));
        }
        return __text;
    }
})()