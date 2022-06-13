const payments = [];
const list = document.getElementById("list-group");
const resultBox= document.getElementById("total");
const user = document.getElementById("nombre");
const payment = document.getElementById("pago");
const cash = document.getElementById("ft");

//llamo a mis funciones con esta funcion
function repartir(){
    addElementToList();
    lastAddedToScreen(); 
    showPaymentInHTML();
}

//agrega elementos a la lista
function addElementToList(){
    payments.push({
        //añado atributos
        name: user.value,
        payment: payment.value,
        date: new Date().toLocaleDateString(),
    });
}

//añade elementos de la lista al html
function lastAddedToScreen(){
    const li = document.createElement("li"); 
    //<li> </li>
    li.classList.add("list-group-item"); 
    //<li class="list-group-item"> </li>
    const last = payments.length - 1; 
    //ultimo indice 
    const current = payments [last]; 
    //un texto que concatena con los elementos
    li.textContent = `${current.name} : $${current.payment}, ${current.date}`; 
    //<li class="list-group-item"> TEXTO </li>
    //current es el indice del objeto
    list.appendChild(li);
}

function sumValues(){
    let total = 0;
    for (const user of payments) total+=parseFloat(user.payment);
    return total; 
}

function showPaymentInHTML(){
    const total = sumValues();
    const importe = total/payments.length;
    const subTotal = importe.toFixed(2);
    //con strong ponemos negrita
    resultBox.innerHTML = `<strong>Total: $${total}</strong>
    . A cada uno le toca aportar: $${subtotal};`;
}

function download(){
    let a = document.createElement('a');
    //creamos un archivo JSON
    //Blob => creamos un fichero con datos planos
    let file = new Blob([JSON.stringify(payments)], {type: 'text/plain'})
    a.href = URL.createObjectURL(file);
    //nombrando y creando el archivo
    a.download = 'sesión.json';
    a.click();
}