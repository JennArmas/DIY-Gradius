function Enemigos3(x,y,board){
    let self = this;
    this.x = x
    this.y = y
    this.width = 40
    this.height = 40
    this.direction_E = -1
    this.speed = 5
    this.sprite_Enemy3 = document.createElement('div')

    //Aqui creamos la nave y la guardamos en la class = nave_enemigos
    this.addEnemy3 = function (){
        this.sprite_Enemy3.setAttribute('class','nave_Enemigos3')
        this.sprite_Enemy3.style.top = this.y + 'px'
        this.sprite_Enemy3.style.left = this.x + 'px'
        board.appendChild(this.sprite_Enemy3)
    }
    //Movimiento del Enemigo
    this.moveEnemy3 = function(){
        self.checkbox()
        let moveX = self.x + self.speed * self.direction_E
        if (moveX <= 10){
            clearInterval(self.timerEnemy3)
            board.removeChild(self.sprite_Enemy3);
            arrayEnemigos3.shift()     
        }  
        if(moveX <= 930){
            self.x = moveX
            this.sprite_Enemy3.style.left = self.x + 'px'
        } 
    }

    this.checkbox = function(){
        if (self.x < nave_Jugador.x + nave_Jugador.width &&
            self.y < nave_Jugador.y + nave_Jugador.height &&
            self.x + self.width > nave_Jugador.x &&
            self.y + self.height > nave_Jugador.y) {
            nave_Jugador.isDead = true
        }
    }  

    this.timerEnemy3 = setInterval(function() {
        self.moveEnemy3(); 
    },15); 

}
