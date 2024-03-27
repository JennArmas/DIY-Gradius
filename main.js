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
let inicio = document.getElementById('start-game')
let boton_inicio = document.getElementById('start-try')
let boton_final = document.getElementById('try-again')


function startGame(){
    nave_Jugador.addShip() 
    timerMuerte= setInterval(function() {
        Muerte(); 
    }, 20); 
    timerEnemigo = setInterval(function() {
        crearEnemigos(); 
    }, 4000);
    timerEnemigo2 = setInterval(function() {
        crearEnemigos2(); 
    }, 2000);
    timerEnemigo3 = setInterval(function() {
        crearEnemigos3(); 
    }, 3000);
    timerMeteorito = setInterval(function() {
        crearMeteorito(); 
    }, 8000); 
}

function Muerte(){
    console.log(nave_Jugador.isDead )
   if(nave_Jugador.isDead === false){
    nave_Jugador.move()
   } else {
    board.removeChild(nave_Jugador.sprite)
    clearInterval(timerMuerte)
    clearInterval(timerEnemigo)
    clearInterval(timerEnemigo2)
    clearInterval(timerEnemigo3)
    clearInterval(timerMeteorito) 
    alert("Game over")
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
    console.log(arrayEnemigos)
}
function crearEnemigos2(){
    let numeroRandom = Math.floor(Math.random() * 10) * 65;
    let nave_Enemigo2 = new Enemigos2(900,numeroRandom,board)
    arrayEnemigos2.push(nave_Enemigo2)
    nave_Enemigo2.addEnemy2()  
    console.log(arrayEnemigos2)
}   
function crearEnemigos3(){
    let numeroRandom = Math.floor(Math.random() * 10) * 65;
    let nave_Enemigo3 = new Enemigos3(900,numeroRandom,board)
    arrayEnemigos3.push(nave_Enemigo3)
    nave_Enemigo3.addEnemy3()  
    console.log(arrayEnemigos3)
}
    
function crearMeteorito(){
    let numeroRandom = Math.floor(Math.random() * 10) * 65;
    let nave_Meteorito = new Meteorito(900,numeroRandom,board)
    arrayMeteorito.push(nave_Meteorito)
    nave_Meteorito.addMeteorito()  
    console.log(arrayMeteorito)
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
        let bala2 = new Bala(nave_Jugador.x, nave_Jugador.y + 55, board,)
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



