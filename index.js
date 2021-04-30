function setup() {
    createCanvas(1920,1060)
}

class rectangle {
    constructor(x,y,w,h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
    }
}

function draw() {
    // thank you for the free collision script moz://a
    background(255,255,255)
    noStroke()
    let rect1 = new rectangle(mouseX-125,mouseY-125,250,250)
    let rect2 = new rectangle(500,500,250,250)
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y) {
            fill(0,0,0)
            rect(rect2.x,rect2.y,rect2.width,rect2.height)
            fill(255,0,0)
            rect(rect1.x,rect1.y,rect1.width,rect1.height)
     } else {
            fill(0,0,0)
            rect(rect2.x,rect2.y,rect2.width,rect2.height)
            fill(130, 255, 138)
            rect(rect1.x,rect1.y,rect1.width,rect1.height)
     }
}