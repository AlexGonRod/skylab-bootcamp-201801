# Curso Web development Skylab 2018


## Dia 1

### Primeros pasos con la consola

Uso básico de la consola, intalación del tree de bash con homebrew para listar directorios y archivos en forma de árbol

``` bh
skylab
├── course
│   └── frontend
└── precourse
```

Nuestro primer ejercicio era modificar este árbol de directorios en:

``` bh
skylab
├── course
│   └── frontend
│       └── hiWorld
│           ├── deleteMePlease
│           │   └── meToo.js
│           ├── indice.html
│           └── scripts.js
└── precourse
```

### **Primeros pasos con GIT**

### Comandos a tener en cuenta

1. Iniciar git en el directorio.

- **git init**.
- **git status** para ver que archivos estan preparados para ser versionado.
- **git add** para añadir los archivos a ser versionados.
**si modificas el archivo después de hacer *add*, deveras volver a ejecutar el comando para actualizar.**

2. Lo normal es crear branches **Master** y **Develop**

- **git checkout -b develop**
- **git checkout master** (cambia a la rama master)
- **git branch -d** (borra la rama)

3. **git diff** *(--cached y --staged)*

Este comando te da una versión más exacta de los canvios realizados y compara entre area de trabajo y la de realización.

4. **Commit**

- **Git commit -m ""** 

Este comando hace un commit con un comentario entre ""

- **Git log**

Muestra el histórico de confirmaciones

- **Git push -u origin develop**

Con este código pusheas al repo* origin*s

5. **Git branch -d**

Elimina la rama una vez ya la hemos pusheado al master.

6. **Git fork**

Hacer una copia de otra repo que luego puedes trabajar en local.

7. **Git fetge y git merge**

Es posible que la repo original tenga muchos cambios en referencia a tu fork, y necesitas hacer un fetge para luego pushear al tuyo y hacer un *pull request* pidiendo incluir en el repo original. 


## Dia 2

### Variables

Debemos pensar en las variables como *flechas*, que siempre apuntan a un valor.

Si no declaramos una variable con **var**, esta se queda en el scope global, asignado a **window**.

1. Operadores

Dos iguales solo compara el valor, si se utilizan 3, iguala también el tipo.

a = 1 => 1
b = '1'

a == b => true / a === b => false
b + b = 11;


typeof a => "number" / typeof a === 'number' => true;


  ++
 ++a suma e incrementa en 1

 a++ primero ejecuta y luego suma al llamar "a" porsegunda vez

 -+= incrementa 

a += 4 => 8

-/ 

a/2 => 2

- %

a % 3 => 1

2. Operadores lógicos

5 >> 2 => 1
5 >> 1 => 2

el operador *!* transforma un valor a booleano.

3. Control de flujo

Ternario '?', return (num1 > num2) ? num1 : num2
Si la condición es true, devuelve la primera parte, de lo contrario devuelve la segunda.

if/else 

En caso de tener un solo estatement, puedes no poner las {}

Se pueden obviar {}:

function largerInteger(num1, num2)
    if (num1>num2)
        return num1;

    return num2

}

En caso de varios else if se usa Switch

```javascript

switch(a){
    case 1;
    ...
    break;
    case 2;
    ...
    break;

    default:
    console.log()

}
``` 

while

```javascript

var counter = 10;
while(--count) { console.log(counter) }
```

Contador hacia atras desde 10.
La expresión --count devuelve un booleano que saca true, hasta que llega a 0, que es false.

Si se usa counter-- Te muestra el 0.


### Arrays

```javascript 

for(var i=0; i <a.length; i++){
    console.log(a[i]);
    if (i === 3 ) break;
}
}
```

### Objetos

```javascript

var o = {}
o.arr[1] = 1;
o.arr[2] = [];
o.arr[2].arr[5] = {}
o.arr[2].arr[5].arr 

function hello() { console.log('hi')}
var o = hello
hello ==> hello() { console.log('hi') }
o.saluda() ==> hi (crea una funcion dentro del objeto O)






