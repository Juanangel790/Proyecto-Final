document.addEventListener('click', function() {
    var audio = document.getElementById('audio-fondo');
    audio.muted = false; // Desactivar el mudo para que se reproduzca
    audio.play(); // Reproducir el audio si no lo ha hecho
});
