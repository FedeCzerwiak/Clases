alert("Hola mundo desde archivo");
console.log("Mensaje desde consola");

//TIPOS DE DATOS 

/* 
STRING
NUMERO
BOOLEANO 
NULL
UNDERFIELD
*/

var primer = 12;
console.log("Nuevo Mensaje")
var segundo = primer + 'a';
let primera; //permite tener mayor control. nos prohibe volver a crear la variable con ese nombre
const primero = 5; //constante, no puede cambiar su valor

//CONTROL DE FLUJO

{var mascota = 'perro';
console.log (mascota);
}
//                  0       1         2
{var mascotas = ["perro", "gato", "conejo"]; //array
console.log(mascotas[0]);
}

{   var ingresos = 300000;
    var emancipado = true;
    var edad = 20;
    if(edad >= 18) { //&& "y" || "o"
        console.log("podes acceder a un paquete");
    }
    else {
        console.log("no podes acceder a un paquete");
    }
}

{   
    var evaluacion; 

    switch (edad) {
        case 15:
            evaluacion = "Tenes 15 años";
            break;
        
        case 20:
            evaluacion = "Tenes 20 años";
            break;

        default:
            evaluacion = "No tenes ninguna de las edades";
            break;
    }
    
    console.log("Pudimos evaluar que, " + evaluacion);
}

{
    var cheques = [0, 1, 2, 3];
    var valorescheques = [213, 432, 5432, 43]

    for (let i=0; i <= cheques.length; i=i+1) {
        if (cheques[i] == 3){
            console.log(valorescheques[i]);
        }
    }

}

//Clase 26 05

var i = 5;

while (i>0) {
    console.log ("i es igual a " + i);
    i--;
}

var i = 0;

while (i<5) {
    console.log ("i es igual a " + i);
    i++;
}

do {
    console.log ("i es igual a " + i);
    i--;
} while (i>0);

var texto = 'Aguante la C2';
function ponerleonda (mensaje){
    return mensaje + '!!';
} ponerleonda ('Agunate el ITBA');

var cheques = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function comisiones (lista){
    for(let i=0; i <= lista.length; i++){
        console.log(lista[i]);
    }
}

comisiones(cheques);

function cuento (lista){
    var contador = 0;
    for(let i=0; i < lista.length; i++){
        contador++;
    }
    return contador;
}

var cantidad = cuento(cheques);
console.log(cantidad);



