const dolarLista = document.querySelector(".dolar-list");

fetch ('https://dolarsi.com/api/api.php?type=valoresprincipales')
    .then(data => data.json())
    .then(data => data.forEach(element => {
        console.log(element);
        const li = document.createElement("li");
        li.textContent = `Nombre: ${element.casa.nombre} Compra: ${element.casa.compra} Venta: ${element.casa.venta}`;
        dolarLista.appendChild(li);
    }));
