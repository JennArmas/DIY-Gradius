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
        this.sprite.style.left = this.x + 'px';
        board.appendChild(this.sprite);
        console.log(arrayEnemigos)
    };

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
        }
    }
    
function checkCollision() {
    arrayEnemigos.forEach((enemy,index) => {
     if (self.x < enemy.x + enemy.width &&
         self.y < enemy.y + enemy.height &&
         self.x + self.width > enemy.x &&
         self.y + self.height > enemy.y) {
             self.removeBala()
             console.log(arrayEnemigos)
             arrayEnemigos.splice(index,1)
             clearInterval(enemy.timerEnemy)
             console.log(arrayEnemigos)
             board.removeChild(enemy.sprite_Enemy);
         }
     });
 }
    this.removeBala = function() {
        clearInterval(self.timerBala);
        board.removeChild(self.sprite);
    }; 
    
    
    this.timerBala = setInterval(this.moveBala, 2);

}
