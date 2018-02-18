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
function calc(num) {
    function sum(num2){
        num = num + num2;
        return this;
    }
    function rest(num3){
        num = num - num3;
        return this;
    }
    function mult(num3){
        num = num * num3;
        return this;
    }
    function result(){
    return num;
    }

    return {
        sum: sum,
        rest: rest,
        mult: mult,
        result: result
    };
}
console.log(calc(4).sum(3).rest(5).mult(2).result())



///

var text;
(function () {
function wrap(text, before, after){
    retun (before || '') + text + (after || before || '')
}
text = function (_text) {
    var __text = new String(_text);

    __text.wrap = function (before, after) {
        return text(wrap(_text, before, after));
    }
    return __text;
    }
})()

console.log(text('Hola').wrap('$', '$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#', '#').toString())

//

