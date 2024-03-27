const board = document.getElementById('container')
const nave_Jugador = new Nave_Player(100,300,board)


let arrayEnemigos = []
let timerNave;
let timerEnemigo;
let timerMuerte;
let timerReloj;
let suma = 0;
let resta = 120;
let vidas = 3;

//Sonidos
const sonido_Explosion = document.getElementById("explosion")
const sonido_musica = document.getElementById("musica")

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
    }, 800);
    timerReloj = setInterval(function(){
        cronometro()
    },1000);
}
 
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

boton_inicio.addEventListener('click', function(e) {
    inicio.style.display = 'none'
    board.style.display = 'block'
    nave_Jugador.isDead = false
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


