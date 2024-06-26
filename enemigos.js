function Enemigos(x,y,board){
    let self = this;
    this.x = x
    this.y = y
    this.width = 50
    this.height = 40
    this.direction_E = -1
    this.speed = 7
    this.sprite_Enemy = document.createElement('div')

    //Aqui creamos la nave y la guardamos en la class = nave_enemigos
    this.addEnemy = function (){
        this.sprite_Enemy.setAttribute('class','nave_Enemigos')
        this.sprite_Enemy.style.top = this.y + 'px'
        this.sprite_Enemy.style.left = this.x + 'px'
        board.appendChild(this.sprite_Enemy)
    }

    //Movimiento del Enemigo
    this.moveEnemy = function(){
        self.checkbox()
        let moveX = self.x + self.speed * self.direction_E
        if (moveX <= 10){
            clearInterval(self.timerEnemy)
            board.removeChild(self.sprite_Enemy);
            arrayEnemigos.shift()     
        }  
        if(moveX <= 930){
            self.x = moveX
            this.sprite_Enemy.style.left = self.x + 'px'
        } 
    }

    //Coliciones de los enemigos con el jugador
    this.checkbox = function(){
        if (self.x < nave_Jugador.x + nave_Jugador.width &&
            self.y < nave_Jugador.y + nave_Jugador.height &&
            self.x + self.width > nave_Jugador.x &&
            self.y + self.height > nave_Jugador.y){

            board.removeChild(self.sprite_Enemy)
            clearInterval(self.timerEnemy)

            vidas = vidas -1
            lifes.innerHTML = vidas
            if(vidas <= 0){
                nave_Jugador.isDead = true 
                sonido_musica.pause()
            }       
        }
    } 

    this.timerEnemy = setInterval(function() {
        self.moveEnemy(); 
    },15); 

}

    
 