//las funciones pueden ir en el mismo archivo html, en cuyo caso deben ir
//entre tags script, o en archivos separados
//
//Las funciones es recomendle declararlas arriba, en el head, como ocurre
//como ocurre con los archivos que linkeamos

//Esto es una funciçon que siempre ejecutará lo mismo
function diHola(){
    alert("ola k ase");
    //Aquí podemos incluir todas las declaraciones que queramos ejecutar
}

//En este caso podemos pasar argumentos a la función. Los argumentos se separan por comas (,)
function cubo(x){
    alert(x*x*x);
}

//la llamaríamos y le pasaríamos un 3 asi:
// cubo(3);

//----------------------------------------

//función con retorno

function cubo(x){
    return(x*x*x);
}

//lo más sencillo que haríamos al llamarlo sería guardarlo en una variable
//es decir:

//var resultadoAqui=cubo(x);