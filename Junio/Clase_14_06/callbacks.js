function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function division(n1, n2) {
    return n1 / n2;
}

function multiplicacion(n1 ,n2) {
    return n1 * n2;
}

suma(4, 5);

function calculadora(n1, n2, operacion) {
    return operacion(n1, n2);
}

console.log(suma(4, 5));
console.log(calculadora(4, 5, resta));