function Enemigos(x,y,board){
    let self = this;
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.direction_E = -1
    this.speed = 10
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
        let moveX = self.x + self.speed * self.direction_E
        if(moveX >= 0 && moveX <= 930){
            self.x = moveX
            this.sprite_Enemy.style.left = self.x + 'px'
        } 
    } 

    this.timerEnemy = setInterval(function() {
        self.moveEnemy(); 
    }, 30); 
}

    
 