function Bala(x, y, board){

    let self = this
    this.x = x
    this.y = y
    this.width = 20
    this.height = 10
    this.directionX = 0
    this.speed = 5
    this.sprite = document.createElement("div")


    this.addBala = function (){

        this.sprite.setAttribute('class', 'disparo')
        

        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'

        board.appendChild(this.sprite)
    }
}