// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function itsMe(name){
console.log('Hello ' + name)
}
itsMe("Alex")

//b) Intenta retornar los valores en lugar de usar console.log
function itsMe(name){
return 'Hello  '+ name
}
itsMe("Alex")

// c) Ahora, añade tu edad y concaténala al return

function itsMe(name, age){
var message = "Hello  "+ name + ", you're " + age  +" years old"
return message
}
itsMe("Alex", 34)

// d) Iguala tu función a una variable y ejecútala

var me = function itsMe(name, age){
var message = "Hello  "+ name + ", you're " + age  +" years old"
return message
}
itsMe("Alex", 34)

// e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados
var me = function itsMe(name, years){
var message =  "Hello  "+ name
return message
}

var years = function myYears(age){
var myAge = ", you're " + age  +" years old"
return myAge

}

me("Alex") + years(34)

// e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

var me = function itsMe(name, years){
var message =  "Hello  "+ name
return message
}

var years = function myYears(age){
var myAge = ", you're " + (age  + Math.random().toFixed())  +" years old"
return myAge

}

me("Alex") + (years(34)).toString()

// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50

function global(){

var random = function(){

    return (Math.random()*50).toFixed();
}

var a = function name(myName){
    return myName + "...AKA IRONMAN, ";
}

var b = function age(num){

    if(random() <= 20){
    return random() + "...Sure you're Alex?"
    }else{
    return random() + " OK"
    }
}

return a("alex") +  b(random());


}
global()

// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

function global(){

var random = function(){

    return (Math.random()*50).toFixed();
}

var a = function name(myName){
    return myName + "...AKA IRONMAN, ";
}

var b = function age(num){

    if(random() <= 20){
    return random() + "...Sure you're Alex?"
    }else{
    return random() + " OK"
    }
}

return "The first function returns " + a("alex") + "and the second one returns " +  b(random());


}
global()

// l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

function global(){

var random = function(){

    return (Math.random()*50).toFixed();
}

var a = function name(myName){
    if(myName === "Alex"){
    return myName + "...AKA IRONMAN, ";
    }else{
    return "The first function returns: " + myName + "...You're not Alex!";
    // no Acaba de hacer break
}
}

var b = function age(num){

    if(random() <= 20){
    return random() + "...Sure you're Alex?"
    }else{
    return random() + " OK"
    }
}

return a("Alex") + "and the second one returns " +  b(random())


}
global()


// m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre
function random(){

    return (Math.random()*50).toFixed();
}

function global(){

var a = function name(myName){
    if(myName === "Alex"){
    return myName + "...AKA IRONMAN, ";
    }else{
    return "The first function returns: " + myName + "...You're not Alex!";

}
}

var b = function age(num){

    if(random() <= 20){
    return random() + "...Sure you're Alex?"
    }else{
    return random() + " OK"
    }
}
var rNumber = random()
return a("Alex") + "and the second one returns " +  b(rNumber)


}
global()

// n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

function random(){

    return (Math.random()*50).toFixed();
}

function name(myName){
    if(myName === "Alex"){
    return "The first function returns: " + myName + "...AKA IRONMAN, ";
    }else{
    return "The first function returns: " + myName + "...You're not Alex!";

}
}

function age(num){

    if(random() <= 20){
    return random() + "...Sure you're Alex?"
    }else{
    return random() + " OK"
    }
}

function global(){
var rNumber = random()

random()
name()
age()
return name("Alex") + "and the second one returns " +  age(rNumber)
}
global()
