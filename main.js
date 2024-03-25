const board = document.getElementById('container')
const nave_Jugador = new Nave_Player(100,300,board)  
let timerBala 


function startGame(){
    nave_Jugador.addShip()
    nave_Jugador.move()
}

window.addEventListener('keydown',function(evento){
    console.log(evento.key)
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
        let bala = new Bala(nave_Jugador.x, nave_Jugador.y, board)
        let bala2 = new Bala(nave_Jugador.x, nave_Jugador.y + 55, board)
        bala2.addBala();
        bala.addBala();
        break;   

        default:
         nave_Jugador.directionX = 0 
         nave_Jugador.directionY = 0
    }
    startGame()

})


window.addEventListener('keyup',function(evento){

    nave_Jugador.directionX = 0
    nave_Jugador.directionY = 0
})

startGame()