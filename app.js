let imagenes = [{
        "url": "img/hero.jpg",
        "nombre": "Proyecto 01",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
    {
        "url": "img/hero.jpg",
        "nombre": "Proyecto 01",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
    {
        "url": "img/hero.jpg",
        "nombre": "Proyecto 01",
        "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
    },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto-c');
let actual = 0;

atras.addEventListener('click', function() {
    actual -= 1
    if (actual == -1) {
        actual = imagenes.length - 1
    }
    imagen.innerHTML = `<img src="img/hero.jpg" alt="imagen1" class="img" loading="lazy">`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].nombre}</p>
    `
})
adelante.addEventListener('click', function() {
    actual += 1
    if (actual == imagenes.length) {
        actual = 0
    }
    imagen.innerHTML = `<img src="img/hero.jpg" alt="imagen1" class="img" loading="lazy">`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].nombre}</p>
    `
})
fuction posicionCarrusel() {
    for (var i = 0; i < imagenes.length; i++)
        if >

}