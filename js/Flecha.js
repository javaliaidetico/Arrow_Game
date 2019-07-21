class Flecha{
    constructor(x, y, side){
        this.init = createVector(x, y)
        this.pos = createVector(x, y)
        this.vel = createVector(0, 0)
        this.state = 0 

        this.side = side

        this.angle = 0
        this.velocity = 0

        this.gravity = 0.2
        this.thickness = 15
        this.size = 30

    }

    show(){
        fill(255)

        push()
        if(this.side == 1){
            this.head = this.size
        }
        else{
            this.head = 0
        }
        translate(this.pos.x + this.head, this.pos.y)
        rotate(-this.angle * this.side)
        // rect(-this.head, 0, this.size, this.thickness)
        image(arrowImg, -this.head, 0, this.size, this.thickness)
        pop()
    }

    update(){
        if(this.state == 1){
            this.pos.x += this.vel.x * this.side
            this.pos.y -= this.vel.y
            this.vel.y -= this.gravity
            this.angle = atan(this.vel.y, this.vel.x) * 0.9
        }
        if(this.pos.y > 350){
            this.state = 2
        }
    }

    throw(){
        if(this.state == 0){
            this.state = 1
            this.vel.x = cos(this.angle) * this.velocity
            this.vel.y = sin(this.angle) * this.velocity
        }
    }

    aim(){
        if(this.state == 0 && this.angle < HALF_PI){
            this.angle += 0.1
            this.velocity += 1
        }
        if(this.state == 2){
            this.pos.x = this.init.x
            this.pos.y = this.init.y
            this.angle = 0
            this.velocity = 0
            this.state = 0
        }
    }
}