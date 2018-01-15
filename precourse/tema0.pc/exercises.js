//a) Declara tu nombre y muéstralo por consola:
var name = "Alex";
console.log(name);
//b) Declara tu edad y muéstralo por consola:
var age = 34;
console.log(age)
//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
var me = ["Alex", "Gonzalez", 34];
console.log(me);
//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var object = {name:"alex", age:34}
console.log(object);
//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
for(var i = me.length; i < 0; i ++){
    console.log(me[i]);
}
//f) Crea una estructura condicional que imprima el número mayor entre dos números.
var uno = 1;
var dos = 2;
if( uno <=  dos){
    console.log( dos)
}else{
    console.log( uno);
}
//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
var uno = 1;
var datos = 2;
if( uno <=  dos){
    console.log(dos);
}else if ( uno ==  dos){
    console.log(uno + dos);
}else{
    console.log(uno);
}
//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
var numbers = [1, 2, 3, 4, 5,];

for(var i = 0; i < news.length; i++){
  if (news[i]/2 == 3){
console.log("at the middle");
}else{
console.log(news[i]);
            }
}
//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
var myName = "Alex";
var myAge = 34;
if(myName =="John" && myAge == 35 ){
    console.log("this is not you!")
}else{
    console.log("Hi!! Glad to see u again!")}
//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

var data = ["Alex", 34, "alexgonrod83@gmail.com", "Arenys de munt"];
for(var i = 0; i < data.length; i++){
    if (data === "Alex", 34, "alexgonrod83@gmail.com", "Arenys de munt"){
        console.log("We find your data " + data[i]);
    }
}

