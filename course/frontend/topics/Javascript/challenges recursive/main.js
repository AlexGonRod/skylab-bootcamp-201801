function word(_word) {
    chain = '';
    for (i = 0; i < _word.length; i++) {
        reverse(_word.charAt(i))
    }
    return chain;
}

function reverse(letter) {
    chain = letter + chain;

}
console.log(word('hello'))

///

function Reduce(str, num) {
    var num2 = str.toString().split('');
    var char = num.toString();

    var result = num2.reduce(function (el, current) {
       
        if (char.indexOf(current) != -1) {
            return el + 1;
        } else {
            return el;
        }
    }, 0);
    return char + ' its ' + result + ' times';
}
console.log(Reduce(2536228324, 2))

///
function Dpl(params) {
    param = params.split('');
    dupl = [];
    for (var i = 0; i < param.length; i++) {
        duplicate(param[i]);
    }
    return dupl;
}

function duplicate(params2) {

    if (dupl.indexOf(params2) == -1) {
        dupl.push(params2);
    }

}
console.log(Dpl('aabcbcb'))


//
function Dpl(str){
    Str = str.split('');
    result = [];
    for(var i=0; i < Str.length; i++){
        resolve(Str[i]);
    }
    return result;
}

function resolve(Str2){
    if(result.indexOf(Str2) == -1){
        result.push(Str2);
    }
}
console.log(Dpl('aabcbcb'))


///
function calc(num){
    return 
}
