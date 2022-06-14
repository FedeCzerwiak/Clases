let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor");
let post = null;

boton.addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            post = data;
            mostrarDatos(post);
        })
});

function mostrarDatos(post) {
    post.map((posts, i) => {
        let titulo = document.createElement("h1");
        let contenido = document.createElement("p");

        titulo.innerHTML = (i + 1) + "-" + posts.title;
        contenido.innerHTML = posts.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}