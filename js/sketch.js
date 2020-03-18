function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    rcolor = color(random(200, 255), random(0, 200), random(0, 255));

    stroke(rcolor);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, 0, 0);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}