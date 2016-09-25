var diameter;

function setup() {
    canvas = createCanvas(0.8 * windowWidth, 200);
    canvas.parent("get_started")
    background(255);
    strokeWeight(3);
    stroke(0, 0, 255);
    fill(255);
}

function mousePressed() {
    /* set background to blue */
    background(0, 0, 255);
}

function mouseReleased() {
    /* set background to white */
    background(255);
}

function draw() {
    /* Draw circles that change diameter based on mouse speed */
    /* and color based on if mouse-pressed (or not pressed)   */
    if (mouseIsPressed) {
        fill(0, 0, 255);
        stroke(255);
    } else {
        fill(255);
        stroke(0, 0, 255);
    }
    diameter = pow(dist(pmouseX, pmouseY, mouseX, mouseY), 1.5);
    ellipse(mouseX, mouseY, diameter, diameter);
}
