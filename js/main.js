let arrowImg
let soldierA
let soldierB
let pointer
let scene

let actualPlayer
let gameOver

function preload(){ 
    arrowImg = loadImage('assets/flecha.png')
    soldierA = loadImage('assets/soldierA.png')
    soldierB = loadImage('assets/soldierB.png')
    pointer  = loadImage('assets/pointer.png')
    scene    = loadImage('assets/scene.png')
}

function setup(){
    createCanvas(800, 400)
    flechaE = new Flecha(185, 320, 1)
    playerE = new Player(180, 290, soldierA)
    
    flechaD = new Flecha(615, 320, -1)
    playerD = new Player(620, 290, soldierB)

    actualPlayer = 1
    gameOver = false

    textStyle(BOLD)
    textAlign(CENTER)
}

function draw(){
    if(gameOver == playerE){
        background(0)
        textSize(28)
        fill(200)
        text('Vencedor:', width/2, height/3);
        textSize(42)
        fill(30, 10, 200)
        text('AZUL', width/2, height/2);
    }
    else if(gameOver == playerD){
        background(0)
        textSize(28)
        fill(200)
        text('Vencedor:', width/2, height/3);
        textSize(42)
        fill(200, 10, 30)
        text('VERMELHO', width/2, height/2);
    }
    else{
        background(scene)
        showPointer()
        playerE.show()
        flechaE.update()
        flechaE.show()
        playerE.die(flechaD)
        
        playerD.show()
        flechaD.update()
        flechaD.show()
        playerD.die(flechaE)
        
        fill(70, 200, 60)
        rect(0, 350, width, height )
    }
}

function showPointer(){
    pos = playerE.x
    if(actualPlayer == 1) pos = playerD.x
    image(pointer, pos, 200, 30, 60)
}


window.addEventListener("keydown", ev=>{
    if (ev.code == "Space") {
        if(actualPlayer == 1){
            flechaD.aim()
        }
        else{
            flechaE.aim()
        }
    }
})

window.addEventListener("keyup", ev=>{
    if(gameOver) setup()

    if (ev.code == "Space") {
        if(actualPlayer == 1){
            flechaD.throw()
        }
        else{
            flechaE.throw()
        }
    }
    actualPlayer *= -1
})