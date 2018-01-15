//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

var avengers = {
    name: "Tony",
    class: "VII",
    id : 1
};

function showName(){
    for(var i in avengers){
    console.log(i);
}

}
showName()

//b) Ahora, crea una función que liste solo los valores de las propiedades.

var avengers = {
    name: "Tony",
    class: "VII",
    id : 1
};

function showName(){
    for(var i in avengers){
    console.log(avengers[i]);
}

}
showName()

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

var avengers = {
    name: "Tony",
    class: "VII",
    id : 1
};

avenger.class = "XI"

//d) Ahora, elimina la propiedad ID y asegura los cambios.

var avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};

avenger.class = "XI";
delete avenger.id;

true
console.log(avenger)

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

var avengers = {
    name: "Tony",
    class: "VII",
    id : 1
};
avengers.class = "XII";
delete avengers.id;
avengers.city = "L.A";

function showName(){
    for(var i in avengers){
    console.log(avengers[i]);
}

}
showName()

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
  var avengers = {
    name: "Tony",
    class: "VII",
    id : 1
};
avengers.class = "XII";
delete avengers.id;
avengers.city = "L.A";

function showName(){
    for(var i in avengers){
    console.log(avengers.city);
}

}
showName()

//f) Lista el numero de propiedades que contiene el objeto.
var avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};

function numbers(){
    var cont = 0;
    for(prop in avenger){

    cont = cont+1
    }
console.log(cont)
}

numbers()


//g) Cambia la propiedad name por fullName.
var avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};
avenger.fullName = avenger.name;
delete avenger.name
//g1) Asegura los cambios.

var avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};
avenger.fullName = avenger.name;
delete avenger.name
function name(){
    for(prop in avenger){
    console.log(avenger[prop]);
    }
    }

name();

//h) Lista todas las propiedades del objeto a través de un console.log()

var avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};
avenger.fullName = "Tony Stark";
delete avenger.name
avenger.class = "XI";
delete avenger.id;
avenger.city = "L.A";

function name(){
    for(prop in avenger){
    console.log("hi I'm " + avenger.fullName + " with a class "  + avenger.class + " and I'm from " + avenger.city);
    }
    }

name();

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...


//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function avenger(fullName, classRoom, job, city, country, studies){
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.job = job;
    this.city = city;
    this.country = country;
    this.studies = studies;

}
var tonyStark = new avenger ("Tony Stark", "XI", "Ingeneer", "NYC", "USA", "MIT");

    function showTony(){
    for(var i in tonyStark){
        console.log(tonyStark[i]);
        }
    }

//j) Crea otro objeto y imprime sus propiedades por pantalla.

function avenger(fullName, classRoom, job, city, country, studies){
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.job = job;
    this.city = city;
    this.country = country;
    this.studies = studies;

}
var tonyStark = new avenger ("Tony Stark", "XI", "Ingeneer", "NYC", "USA", "MIT");

    function showTony(){
    for(var i in tonyStark){
        console.log(tonyStark[i]);
        }
    }
console.log("");

var hulk = new avenger("Hulk","XI", "Ingeneer", "NYC", "USA", "MIT");

function showHulk(){
    for(var j in hulk){
        console.log(hulk[j]);
    }
}
showTony()
showHulk()

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:

function avenger(fullName, classRoom, job, city, country, studies){
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.job = job;
    this.city = city;
    this.country = country;
    this.studies = studies;
    this.listProperties = function(){
    console.log(this.fullName + ',  ' + this.classRoom + ',  ' + this.job + ',  ' + this.city + ',  ' + this.country + ',  ' + this.studies);
    }

}
var tonyStark = new avenger ("Tony Stark", "XI", "Ingeneer", "NYC", "USA", "MIT");
tonyStark.listProperties();

var hulk = new avenger("Hulk","XI", "Ingeneer", "NYC", "USA", "MIT");
hulk.listProperties();

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

function onlyNames(){


function avenger(fullName, classRoom, job, city, country, studies){
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.job = job;
    this.city = city;
    this.country = country;
    this.studies = studies;
    this.listProperties = function(){
    console.log(this.fullName + ',  ' + this.classRoom + ',  ' + this.job + ',  ' + this.city + ',  ' + this.country + ',  ' + this.studies);
    }

}
var tonyStark = new avenger ("Tony Stark", "XI", "Ingeneer", "NYC", "USA", "MIT");


var hulk = new avenger("Hulk","XI", "Ingeneer", "NYC", "USA", "MIT");

var thor = new avenger("Thor","XI", "Ingeneer", "NYC", "USA", "MIT");


var names = [];
names.push(tonyStark);
names.push(hulk);
names.push(thor);

var onlyNames = [];
names.forEach(function(oAvengers){
onlyNames.push(oAvengers.fullName);
})


console.log("The name of the avengers created are: " + onlyNames.join(', '));
}
onlyNames()

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
function onlyNames(){


function avenger(ID, fullName, classRoom, job, city, country, studies, markAv){
    this.ID = ID;
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.job = job;
    this.city = city;
    this.country = country;
    this.studies = studies;
    this.markAv = markAv;
    this.listProperties = function(){
    console.log(this.fullName + ',  ' + this.classRoom + ',  ' + this.job + ',  ' + this.city + ',  ' + this.country + ',  ' + this.studies);
    }

}
var tonyStark = new avenger (0, "Tony Stark", "XI", "Ingeneer", "NYC", "USA", "MIT", 10);


var hulk = new avenger(1, "Hulk","XV", "Ingeneer", "NYC", "USA", "MIT", 20);

var thor = new avenger(2, "Thor","II", "Ingeneer", "Asgaard", "USA", "MIT", 15);

var me = new avenger(3, "Alex Gonzalez", "XX", "Developer", "BCN", "Spain", "SkyLab", 50);


var avengers = [];
avengers.push(tonyStark);
avengers.push(hulk);
avengers.push(thor);
avengers.push(me);

var filterAvengers = avengers.filter(function(oAvenger){
    return oAvenger.city === 'NYC'
})

console.log(filterAvengers.length)
}

onlyNames()

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

function onlyNames(){


function avenger(ID, fullName, classRoom, job, city, country, studies, markAv){
    this.ID = ID;
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.job = job;
    this.city = city;
    this.country = country;
    this.studies = studies;
    this.markAv = markAv;
    this.listProperties = function(){
    console.log(this.fullName + ',  ' + this.classRoom + ',  ' + this.job + ',  ' + this.city + ',  ' + this.country + ',  ' + this.studies);
    }

}
var tonyStark = new avenger (0, "Tony Stark", "XI", "Ingeneer", "NYC", "USA", "MIT", 10);


var hulk = new avenger(1, "Hulk","XV", "Ingeneer", "NYC", "USA", "MIT", 20);

var thor = new avenger(2, "Thor","II", "Ingeneer", "Asgaard", "USA", "MIT", 15);

var me = new avenger(3, "Alex Gonzalez", "XX", "Developer", "BCN", "Spain", "SkyLab", 50);


var avengers = [];
avengers.push(tonyStark);
avengers.push(hulk);
avengers.push(thor);
avengers.push(me);

var onlyAv = [];
var countAv = 0;
avengers.forEach(function(oAvengers){
    countAv += oAvengers.markAv;
    onlyAv.push(oAvengers.markAv);
})
console.log("La media de todas las markAv son " + countAv / onlyAv.length);

}
onlyNames()

// ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

function avenger (id,fullName,city, job, studies, markAv) {
    this.id = id;
    this.fullName = fullName;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    this.description = function() {
        console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
    }
    avengers.push({id,fullName,markAv});
}

var avengers = []
var ironMan = new avenger (1,"Tony Stark", "NY", "Millionaire","engineer",9);
var thor = new avenger (2,"Thor Odinson", "Asgard", "god of thunder", "no studies", 7);
var hulk = new avenger (3,"Bruce Banner", "NY", "scientist", "science", 7);
var captainAmerica = new avenger (4,"Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger (5,"Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger (6,"Clint Barton","Iowa", "archer", "Martial Arts", 7);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

avengers = shuffle(avengers)
console.log(avengers)

for(var i = 0; i < avengers.length; i=i+2){
    console.log( avengers[i].fullName + ' VS ' + avengers[i+1].fullName)
    if(avengers[i].markAv > avengers[i+1].markAv){
        console.log('the winner is ' + avengers[i].fullName)
    }else{
        console.log('the winner is ' + avengers[i+1].fullName)
    }
}

