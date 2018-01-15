//a) Puedes contar cuantas letras tiene tu nombre?
function showLetters(name){
    console.log("My name has " + name.length + " letters");
}
showLetters("Alejandro")

//b) Añade tu apellido e indica en que posición se encuentra
function showLetters(name){
    console.log("My name has " + name.length + " letters");
    console.log("Your first last name starts on position " + name.indexOf("Gonzalez"));
}
showLetters("Alejandro Gonzalez")
//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
function showLetters(name){
    var me = name.substr(0, name.indexOf(" "));
    console.log(me);


}
showLetters("Alejandro Gonzalez")
//d) Ahora, solo tu apellido.
function showLetters(name){
    var me = name.substr(name.indexOf(" "));
    console.log(me);
}
showLetters("Alejandro Gonzalez")
// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
function showLetters(name){
    var me = name.substr(name.indexOf(" "));
    console.log("Hellow Mr. " + me);
}
showLetters("Alejandro Gonzalez")

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function showLetters(name){
    var me = name.substr(name.indexOf(" "));
    var surname = me.toUpperCase();
    console.log("My last name is" + surname);
}
showLetters("Alejandro Gonzalez")

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
function showLetters(name){
    var me = name.substr(0, name.indexOf(" "));
    var added = me + " is awesome";
    console.log(added);
}
showLetters("Alejandro Gonzalez")

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
function showLetters(name){
    var me = name.substr(0, 1);
    var surname = name.substr(name.indexOf(" "), 2);
    var newString = me + surname;
    console.log(newString);
}
showLetters("Alejandro Gonzalez")

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
var name = ["Alex Gonzalez"];

function splitArray(name){
var me = name.split("").join('/');
console.log(me);
}

splitArray(name)

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var name = ["Alex Gonzalez"];

function splitArray(name){
var nombre = name.substr(name.indexOf(" "));
var me = nombre.split("").join('|');
console.log(me);
}

splitArray(name)

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)
var Alex = ["Alex Gonzalez"]
var onlyName = Alex.substr(0, 4);
var result = [];
for(var i = 0; i < onlyName.length; i++){
    result.push((i+1) + "º " + onlyName[i]);
}

console.log(result.join(", "))

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var data = ["Alex", "Gonzalez", "34"];

function newData(data){
    data.push("Barcelona");
    console.log("City added to array! " + "=> " + data.join());

}

newData(data)

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
var data = ["Alex", "Gonzalez", "34"];

function newData(){
    data.push("Barcelona");
    console.log("City added to array! " + "=> " + data.join());
}
newData(data)

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

var data = ["Alex", "Gonzalez", "34"];

function newData(){
    data.push("Barcelona");
    console.log("City added to array! " + "=> " + data.join());
}
function dataErase(){
    data.pop();
    console.log("City deleted! " + "=> " + data.join());
}

newData(data)
dataErase(data)


//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numbers = [1,2,3,4,5,6,7,8,9];
var doubles = numbers.map(function(num){
    return num * 2
});

console.log(doubles)

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
var myNumbers = [0,1,2,3,4,5,6,7,8,9];
var numMult = 5;

var multBy = myNumbers.map(function(num, x){
    return num * numMult;
});
console.log(multBy)

function multBy(num, x){
    var doubles = num.map(function(num){
    return num * x
});
console.log(doubles)
}

//m) Podrías mostrarlos en el orden inverso?

var numbers = [1,2,3,4,5,6,7,8,9];
numbers.sort(function(a, b){ //sort(funcion de comparacion(compara a y b y lo devuelve al reves))
return b-a;
})
console.log(numbers);

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

function repeatLetters(str) {
    var strToArr = str.split('') //separa en comas
    var biblio = {} // el objeto donde se añade el resultado
    for (var i = 0; i < strToArr.length; i++) { // crea el primer ciclo para comparar con los siguientes (j,k,l,m,n,m,ñ...)
        var count = 0 //cuenta a partir de esta cifra
        for (var j = 0; j < strToArr.length; j++) { // otro ciclo para compararlo ( este lo haría con k,l,m,n,ñ... )
            if (strToArr[i] === strToArr[j]) {
                count++ //
                biblio[strToArr[i]] = count
            } else {
                biblio[strToArr[i]] = count
            }
        }
    }
    return biblio
}

repeatLetters('holaquetalamigo')

//a) Que hora es? Declara la hora como número y devuelvela como String



//b) Nono, que hora exactamente? Dime la hora sin minutos

var today = new Date();
var hours = today.getHours();

console.log(" Its around " + hours + " in the morning");

//d) Hagamos una calculadora. Primero, la suma.
function calc(num1, num2){
    var sum =  num1 + num2;

console.log("The sum and rest of " + num1 + " and " + num2  + " is " + sum);

}

calc(7, 3)

//Añade la resta...





