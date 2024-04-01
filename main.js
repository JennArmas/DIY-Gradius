const board = document.getElementById('container')
const nave_Jugador = new Nave_Player(100,300,board)


let arrayEnemigos = []
let arrayEnemigos2 = []
let arrayEnemigos3 = []
let arrayMeteorito = []
let timerNave;
let timerEnemigo;
let timerEnemigo2;
let timerEnemigo3;
let timerMeteorito;
let timerMuerte;
let timerReloj;
let suma = 0;
let resta = 120;
let vidas = 3;

//Sonidos
const sonido_Explosion = document.getElementById("explosion")
const sonido_musica = document.getElementById("musica")
const sonido_colision = document.getElementById("colission")

//botones start reply
let inicio = document.getElementById('start-game')
let boton_inicio = document.getElementById('start-try')
let boton_final = document.getElementById('try-again')

//Score , vida y reloj
let points = document.getElementById('puntos')
let reloj = document.getElementById('clock')
let lifes = document.getElementById('lifes')



//Inicia el game
function startGame(){
    musica()
    nave_Jugador.addShip() 
    timerMuerte= setInterval(function() {
        Muerte(); 
    }, 20); 
    timerEnemigo = setInterval(function() {
        crearEnemigos(); 
    }, 4500);
    timerEnemigo2 = setInterval(function() {
        crearEnemigos2(); 
    }, 9000);
    timerEnemigo3 = setInterval(function() {
        crearEnemigos3(); 
    }, 2000);
    timerMeteorito = setInterval(function() {
        crearMeteorito(); 
    }, 6000); 

    timerReloj = setInterval(function(){
        cronometro()
    },1000);
}
 //Reloj 
function cronometro(){
    resta -= 1
    reloj.innerHTML = resta
    if(resta <= 100 && resta > 50){
        reloj.style.color = 'orange'
    } else if (resta < 50 ){
        reloj.style.color = 'red'
    }  
    if(resta <=0){
        nave_Jugador.isDead = true
        board.removeChild(nave_Jugador.sprite)
        sonido_Explosion.play()
        clearInterval(timerMuerte)
        clearInterval(timerEnemigo)
        alert("Game over")
        clearInterval(timerReloj)
    }
 }

function Muerte(){
   if(nave_Jugador.isDead === false){
    nave_Jugador.move()
   } else {
    board.removeChild(nave_Jugador.sprite)
    sonido_Explosion.play()
    clearInterval(timerMuerte)
    clearInterval(timerEnemigo)
    clearInterval(timerEnemigo2)
    clearInterval(timerEnemigo3)
    clearInterval(timerMeteorito) 
    clearInterval(timerReloj)
    alert("Game over")
   }
}


//Sonidos
function reproducirDisparo(){  
    const sonido1 = document.getElementById("sonido_laser") 
    sonido1.play()
    sonido1.playBackRate = 1;
}

//Reproducir Musica
function musica(){
    sonido_musica.volume = 0.3;
    sonido_musica.play()
}



//Crear enemigos en bucle 
function crearEnemigos(){
    let numeroRandom = Math.floor(Math.random() * 8) * 63;
    numeroRandom += 100
    let nave_Enemigo = new Enemigos(900,numeroRandom,board)
    arrayEnemigos.push(nave_Enemigo)
    nave_Enemigo.addEnemy()  
}
function crearEnemigos2(){
    let numeroRandom = Math.floor(Math.random() * 8) * 63;
    numeroRandom += 100
    let nave_Enemigo2 = new Enemigos2(900,numeroRandom,board)
    arrayEnemigos2.push(nave_Enemigo2)
    nave_Enemigo2.addEnemy2()  
    console.log(arrayEnemigos2)
}   
function crearEnemigos3(){
    let numeroRandom = Math.floor(Math.random() * 8) * 63;
    numeroRandom += 100
    let nave_Enemigo3 = new Enemigos3(900,numeroRandom,board)
    arrayEnemigos3.push(nave_Enemigo3)
    nave_Enemigo3.addEnemy3()  
    console.log(arrayEnemigos3)
}
    
function crearMeteorito(){
    let numeroRandom = Math.floor(Math.random() * 8) * 63;
    numeroRandom += 100
    let nave_Meteorito = new Meteorito(900,numeroRandom,board)
    arrayMeteorito.push(nave_Meteorito)
    nave_Meteorito.addMeteorito()  
    console.log(arrayMeteorito)
}

boton_inicio.addEventListener('click', function(e) {
    inicio.style.display = 'none'
    board.style.display = 'block'
    nave_Jugador.isDead = false
    lifes.innerText = 3
    vidas = 3
    resta = 120
    reloj.innerHTML = 120
    reloj.style.color = "white"
    suma = 0
    points.innerHTML = "000"
    startGame()
})

boton_final.addEventListener('click', function(e) {
    inicio.style.display = 'block'   
    board.style.display = 'none'
    retry.style.display = 'none'    
})
    
//Eventos del teclado para el movimiento del jugador
window.addEventListener('keydown',function(evento){
    if(nave_Jugador.isDead === false){

    switch(evento.key){

        case  'w':
        nave_Jugador.directionY = -1
        break;

        case  's':
        nave_Jugador.directionY = 1
        break;

        case  'a':
        nave_Jugador.directionX = -1
        break;

        case  'd' :
        nave_Jugador.directionX = 1
        break;

        case ' ' :
        reproducirDisparo()
        let bala = new Bala(nave_Jugador.x, nave_Jugador.y, board)
        let bala2 = new Bala(nave_Jugador.x, nave_Jugador.y + 55, board)
        bala2.addBala();
        bala.addBala();
        break;   
 
        default:
         nave_Jugador.directionX = 0 
         nave_Jugador.directionY = 0
    }
    nave_Jugador.move()
    }
})

//Limpia la direccion del enemigo
window.addEventListener('keyup',function(evento){
    this.clearInterval(timerNave)
    nave_Jugador.directionX = 0
    nave_Jugador.directionY = 0
})

 
