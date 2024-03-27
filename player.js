function Nave_Player(x,y,board){
    let self = this;
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.directionX = 0
    this.directionY = 0
    this.speed = 10
    this.isDead = false
    this.sprite = document.createElement('div')

    //Aqui creamos la nave y la guardamos en el id = container
    this.addShip = function (){
        this.sprite.setAttribute('id','nave_Player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }
    //Movimiento del Jugador
    this.move = function(){
        let moveInY = self.y + self.speed * self.directionY
        let moveInX = self.x + self.speed * self.directionX

        if(moveInY >= 75 && moveInY <= 620){
           self.y = moveInY
           this.sprite.style.top = self.y + 'px'
        }
        if(moveInX >= 0 && moveInX <= 930){
            self.x = moveInX
            this.sprite.style.left = self.x + 'px'
        }     
    }
    
}