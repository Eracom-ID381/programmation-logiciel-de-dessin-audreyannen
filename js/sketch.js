let yPos = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    frameRate(30);
}

function draw() {
    rcolor = color(random(200, 255), random(0, 200), random(0, 255));

    stroke(rcolor);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, 0, 0);
    }
    yPos = yPos - 1;
    if (yPos < 0) {
        yPos = height;
    }
    stroke(255);
    line(0, yPos, width, yPos);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}