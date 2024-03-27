function Bala(x, y, board) {
    let self = this;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;
    this.directionX = 1;
    this.speed = 5;
    this.sprite = document.createElement("div");

    // Esto añade la bala
    this.addBala = function() {
        this.sprite.setAttribute('class', 'disparo');
        this.sprite.style.top = this.y + 'px';
        this.sprite.style.left = this.x + 'px'
        board.appendChild(this.sprite)
    }

    // Esto mueve la bala
    this.moveBala = function() {
        let newCoordX = self.x + self.directionX * self.speed;
        if (self.x >= 950) {
            self.removeBala()  
        }
        if (newCoordX < 980) {
            self.x = newCoordX;
            self.sprite.style.left = self.x + 'px';
            checkCollision();
            checkCollision2()
            checkCollision3()
        }
    }

    //Esto genera la colision de la bala con los enemigos 
    function checkCollision() {
        arrayEnemigos.forEach((enemy,index) => {
        if (self.x < enemy.x + enemy.width &&
            self.y < enemy.y + enemy.height &&
            self.x + self.width > enemy.x &&
            self.y + self.height > enemy.y) {
                
                self.removeBala()
                arrayEnemigos.splice(index,1)
                clearInterval(enemy.timerEnemy)
                board.removeChild(enemy.sprite_Enemy)

            suma +=100
            points.innerHTML = suma
         }
     });
 }

 
 function checkCollision2() {
    arrayEnemigos2.forEach((enemy2,index) => {
     if (self.x < enemy2.x + enemy2.width &&
         self.y < enemy2.y + enemy2.height &&
         self.x + self.width > enemy2.x &&
         self.y + self.height > enemy2.y) {
             self.removeBala()
             console.log(arrayEnemigos2)
             arrayEnemigos2.splice(index,1)
             clearInterval(enemy2.timerEnemy2)
             console.log(arrayEnemigos2)
             board.removeChild(enemy2.sprite_Enemy2);
         }
     });
 }
 
 function checkCollision3() {
    arrayEnemigos3.forEach((enemy3,index) => {
     if (self.x < enemy3.x + enemy3.width &&
         self.y < enemy3.y + enemy3.height &&
         self.x + self.width > enemy3.x &&
         self.y + self.height > enemy3.y) {
             self.removeBala()
             console.log(arrayEnemigos3)
             arrayEnemigos3.splice(index,1)
             clearInterval(enemy3.timerEnemy3)
             console.log(arrayEnemigos3)
             board.removeChild(enemy3.sprite_Enemy3);
         }
     });
 }

    //Esto borra la bala y su intervalo

    this.removeBala = function() {
        clearInterval(self.timerBala);
        board.removeChild(self.sprite);
    } 
    
    
    this.timerBala = setInterval(this.moveBala, 2);

}
