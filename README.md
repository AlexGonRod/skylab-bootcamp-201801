# Curso Web development Skylab

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

- **git commit -m ""** 

Este comando hace un commit con un comentario entre ""

- **git log**

Muestra el histórico de confirmaciones

- **git push -u origin develop**

Con este código pusheas al repo* origin*s

5. **Git branch -d**

Elimina la rama una vez ya la hemos pusheado al master.