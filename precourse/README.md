# Concepts of precourse

## Javascript Basics

Lo que más he aprendido en el precurso es a programar algo desde cero, sin "Copy/paste", y utilizando la lógica que me pide un código de programación.

Darse de cabeza contra una pared es algo con lo que también aprendes a lidiar en tu día a día y, sobretodo, cuando está solo en casa.

Funciones, variables, arrays... eran conceptos totalmente desconocidos para mí, y que ahora ya no.

## Calculadora

La parte principal de este ejercicio no me dió dolores de cabeza pero, por el contrario, la parte PRO fué algo diferente.

```javascript 

function substract(){
        var totalRest = 0;
        for(num in arguments){
            if(totalRest === 0){
                totalRest += arguments[num];
                totalRest !== 0;

            }else{
                totalRest -= arguments[num];
            }
        }
        console.log(totalRest.toFixed(2));
    }
```

Este código tan simple me dió problemas por utilizar como primer argumento un "0", y la resta no me la hacía bien.

## Skylab Airlines

Este quizás fué una de los ejercicios que más fáciles me resultaron de ejecutar junto con el pasapalabra en JS.

un Simple *for.Each()* me solucionó casi la totalidad del mismo.

```javascript

function showFlightsInfo(){
    flights.forEach(function(obj){
        if(obj.scale === true){
        console.log("El vuelo con origen: " +  obj.from + " y destino: " + obj.to + ", tiene un coste de: " + obj.cost + " con escalas");
        }else{
    console.log("El vuelo con origen: " +  obj.from + " y destino: " + obj.to + ", tiene un coste de: " + obj.cost + " sin escalas")
        }
    });
    }
```

## BINGO

Seguramente, es el proyecto que más tiempo y quebraderos de cabeza me ha causado, tuve varias sesiones con los profesores, a causa, entre otras cosas, por no utilizar este flow chart.

![image](https://raw.githubusercontent.com/agandia9/Subjects-PreCourse/master/img/bingo-flow.png)


## Pasapalabra

Un simple **do while** me hizo falta para tirar adelante con este mini-proyecto.

## Html y Css

Al venir de diseño, el trabajar en la parte de cliente no me supuso ningún problema, y me encuentro con mucha fluidez.

[image](calculadora/calculadora.jpg)

