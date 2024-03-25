function Bala(x, y, board){

    let self = this
    this.x = x
    this.y = y
    this.width = 20
    this.height = 10
    this.directionX = 1
    this.speed = 5
    this.sprite = document.createElement("div")

    //Esto añade la bala
    this.addBala = function (){

        this.sprite.setAttribute('class', 'disparo')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }
    //Esto mueve la bala
    this.moveBala = function () {
        let newCoordX = self.x + self.directionX * self.speed;
        if (self.x >= 950){
            clearInterval(this.timerBala)
            board.removeChild(self.sprite);
        }
        if (newCoordX < 980){
            self.x = newCoordX
            self.sprite.style.left = self.x + 'px'   
            console.log(self.x)
        
        }       

    }
      this.timerBala = setInterval(this.moveBala,2);

}