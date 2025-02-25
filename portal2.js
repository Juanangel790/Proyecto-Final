document.addEventListener('click', function() {
    var audio = document.getElementById('audio-fondo');
    audio.muted = false; // Desactivar el mudo para que se reproduzca
    audio.play(); // Reproducir el audio si no lo ha hecho
});
// Obtener todos los elementos <li> dentro del menú
const menuItems = document.querySelectorAll('.menu li');

// Función para mostrar la alerta
function mostrarAlerta() {
    alert("Iniciando partida");
}

// Añadir el evento de clic a cada uno de los elementos del menú
menuItems.forEach(item => {
    item.addEventListener('click', mostrarAlerta);
});

function reproducirSonido() {
    var sonido = document.getElementById("son-desp");
    sonido.play(); // Reproduce el sonido cuando el mouse pasa sobre el elemento
}