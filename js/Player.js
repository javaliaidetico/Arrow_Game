class Player{
    constructor(x, y, img){
        this.x = x
        this.y = y
        this.heigh = 60
        this.large = 30

        this.color = color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)))
        this.asset = img
    }   

    show(){
        fill(this.color)
        image(this.asset, this.x, this.y, this.large, this.heigh)
    }

    die(flecha){
        this.inLarge = flecha.pos.x > this.x && flecha.pos.x < this.x + this.large
        this.inHeigh = flecha.pos.y > this.y && flecha.pos.y < this.y + this.heigh

        if(this.inLarge && this.inHeigh){
            console.log('ACERTOU')
            gameOver = this
        }
    }

}