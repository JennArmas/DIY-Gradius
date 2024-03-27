function Enemigos2(x,y,board){
    let self = this;
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction_E = -1
    this.speed = 5
    this.sprite_Enemy2 = document.createElement('div')

    //Aqui creamos la nave y la guardamos en la class = nave_enemigos
    this.addEnemy2 = function (){
        this.sprite_Enemy2.setAttribute('class','nave_Enemigos2')
        this.sprite_Enemy2.style.top = this.y + 'px'
        this.sprite_Enemy2.style.left = this.x + 'px'
        board.appendChild(this.sprite_Enemy2)
    }
    //Movimiento del Enemigo
    this.moveEnemy2 = function(){
        self.checkbox()
        let moveX = self.x + self.speed * self.direction_E
        if (moveX <= 10){
            clearInterval(self.timerEnemy2)
            board.removeChild(self.sprite_Enemy2);
            arrayEnemigos2.shift()     
        }  
        if(moveX <= 930){
            self.x = moveX
            this.sprite_Enemy2.style.left = self.x + 'px'
        } 
    }

    this.checkbox = function(){
        if (self.x < nave_Jugador.x + nave_Jugador.width &&
            self.y < nave_Jugador.y + nave_Jugador.height &&
            self.x + self.width > nave_Jugador.x &&
            self.y + self.height > nave_Jugador.y) {

            board.removeChild(self.sprite_Enemy2)
            clearInterval(self.timerEnemy2)
            
            vidas = vidas -1
            lifes.innerHTML = vidas
            if(vidas <= 0){
                nave_Jugador.isDead = true 
                sonido_musica.pause()
            } 
        }
    }  

    this.timerEnemy2 = setInterval(function() {
        self.moveEnemy2(); 
    },7); 

}
