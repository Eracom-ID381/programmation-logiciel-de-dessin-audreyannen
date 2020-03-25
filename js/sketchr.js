let x = 0
let osc, freq, amp;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    osc = new p5.Oscillator('triangle');
}

function draw() {
    rcolor = color(random(200, 255), random(0, 100), random(0, 255));
    bcolor = color(random(0, 0), random(0, 200), random(255, 255));
    ycolor = color(random(150, 200), random(130, 150), random(0, 0));


    stroke(rcolor);
    freq = map(mouseX, 0, width, 100, 500);
    amp = map(mouseY, 0, height, 0, 1);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, 0, 0);
        osc.freq(freq, 0.2);
        osc.amp(amp, 0.2);
    }
}

function mousePressed() {
    osc.start();
}



function keyPressed() {
    if (keyCode === BACKSPACE) {
        background(0);
    }
}

function mouseReleased() {
    osc.stop();
}