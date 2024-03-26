const board = document.getElementById('container')
const nave_Jugador = new Nave_Player(100,300,board)
let arrayEnemigos = []
let timerNave;
let timerEnemigo;
let timerMuerte;




function startGame(){
    nave_Jugador.addShip() 
    timerMuerte= setInterval(function() {
        Muerte(); 
    }, 20); 
    timerEnemigo = setInterval(function() {
        crearEnemigos(); 
    }, 1500); 
}

function Muerte(){
    console.log(nave_Jugador.isDead )
   if(nave_Jugador.isDead === false){
    nave_Jugador.move()
   } else {
    board.removeChild(nave_Jugador.sprite)
    clearInterval(timerMuerte)
   }
}

function reproducirDisparo(){
    const sonido1 = document.getElementById("sonido_laser")
    sonido1.play()
    sonido1.playBackRate = 4;
}

function crearEnemigos(){
    
    let numeroRandom = Math.floor(Math.random() * 10) * 65;
    let nave_Enemigo = new Enemigos(900,numeroRandom,board)
    arrayEnemigos.push(nave_Enemigo)
    nave_Enemigo.addEnemy()
    
}

window.addEventListener('keydown',function(evento){
    switch(evento.key){

        case  'ArrowUp':
        nave_Jugador.directionY = -1
        break;

        case  'ArrowDown':
        nave_Jugador.directionY = 1
        break;

        case  'ArrowLeft':
        nave_Jugador.directionX = -1
        break;

        case  'ArrowRight' :
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
})


window.addEventListener('keyup',function(evento){
    this.clearInterval(timerNave)
    nave_Jugador.directionX = 0
    nave_Jugador.directionY = 0
})

startGame()

