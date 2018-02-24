
(Puedes utilizar tanto CURL como Chrome para hacer las consultas al puerto donde est\'e9 alojado express)\
\
### 1. \
Crea una app en express.js con dos endpoints:\
    - /hello\
    - /goodbye\
En el endpoint, devolver\'e1s un log en consola 'hello!', en el segundo endpoint cerrar\'e1s la conexi\'f3n y dir\'e1s 'goodbye!'.\
\
### 1.2\
Crea un objeto global llamada Messages con las siguientes propiedades\
    - hello: 'hello!',\
    - goodbye: 'goodbye!'\
Como en el ejercicio anterior, devuelve el mensaje encapsulado en el objeto en cada endpoint.\
\
### 1.3\
Utiliza el params ':' para que, cuando consultes los endpoints /hello:name y /goobye:name devuelva los mismos mensajes a\'f1adiendole tu nombre\
    - ex: /hello:pepe => 'hello pepe!'\
\
### 2\
Crea una calculadora, dos variables globales (n1 y n2) y con 4 endpoints:\
    - /sum (devolver\'e1 la suma de n1 y n2 por consola)\
    - /subs\
    - /mult\
    - /div\
    - /all (devuelve todas las operaciones)\
\
### 2.1\
Utiliza .env para pasar n1 y n2 como variables de entorno.\
\
### 2.2\
Haz un refactor del codigo para que acepte n1 y n2 por par\'e1metro\
\
### 2.3\
Utiliza body-parser para poder recibir n1 y n2 mediante el req.body}