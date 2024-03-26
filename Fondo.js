// Obtener el canvas y el contexto
var canvas = document.getElementById("container");
var ctx = canvas.getContext("2d");

// Definir propiedades del fondo
var backgroundImage = new Image();
backgroundImage.src = "imagenes/fondo.avif"; // Ruta a la imagen de fondo
var backgroundSpeed = 0.5; // Velocidad de desplazamiento del fondo

var backgroundX = 0;
var backgroundY = 0;

// Función para dibujar el fondo
function drawBackground() {
    ctx.drawImage(backgroundImage, backgroundX, backgroundY);
    ctx.drawImage(backgroundImage, backgroundX + canvas.width, backgroundY);
}

// Función para actualizar el fondo
function updateBackground() {
    backgroundX -= backgroundSpeed;
    if (backgroundX <= -canvas.width) {
        backgroundX = 0;
    }
}

// Función principal de dibujo
function draw() {
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar fondo
    drawBackground();

    // Dibujar otros elementos del juego aquí

    // Actualizar fondo
    updateBackground();

    // Solicitar el próximo frame de animación
    requestAnimationFrame(draw);
}

// Iniciar el bucle de dibujo
draw();
