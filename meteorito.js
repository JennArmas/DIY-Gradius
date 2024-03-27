function Meteorito(x,y,board){
    let self = this;
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction_E = -1
    this.speed = 5
    this.sprite_Meteorito = document.createElement('div')

    //Aqui creamos la nave y la guardamos en la class = nave_enemigos
    this.addMeteorito = function (){
        this.sprite_Meteorito.setAttribute('class','meteorito')
        this.sprite_Meteorito.style.top = this.y + 'px'
        this.sprite_Meteorito.style.left = this.x + 'px'
        board.appendChild(this.sprite_Meteorito)
    }
    //Movimiento del Meteorito
    this.moveMeteorito = function(){
        self.checkbox()
        let moveX = self.x + self.speed * self.direction_E
        if (moveX <= 10){
            clearInterval(self.timerMeteorito)
            board.removeChild(self.sprite_Meteorito);
            arrayMeteorito.shift()     
        }  
        if(moveX <= 930){
            self.x = moveX
            this.sprite_Meteorito.style.left = self.x + 'px'
        } 
    }

    this.checkbox = function(){
        if (self.x < nave_Jugador.x + nave_Jugador.width &&
            self.y < nave_Jugador.y + nave_Jugador.height &&
            self.x + self.width > nave_Jugador.x &&
            self.y + self.height > nave_Jugador.y) {
            lifes.innerHTML = 0
            nave_Jugador.isDead = true
        }
    }  

    this.timerMeteorito = setInterval(function() {
        self.moveMeteorito(); 
    },7); 

}

    
 