const board = document.getElementById('container')
const nave_Jugador = new Nave_Player(100,300,board)
//const bala = new Bala(player.x, player.y, board)

function startGame(){
    nave_Jugador.addShip()
    //bala.addBala()
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