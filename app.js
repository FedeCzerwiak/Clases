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





