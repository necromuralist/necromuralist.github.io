function get_started(p5js){
  const WHITE = 255;
  const COLOR = p5js.color(0, 0, 255);
  let diameter;
  
  p5js.setup = function() {
    let canvas = p5js.createCanvas(0.8 * p5js.windowWidth, 200);
    p5js.background(WHITE);
    p5js.strokeWeight(3);
    p5js.stroke(COLOR);
    p5js.fill(WHITE);
  }; // setup

  p5js.mousePressed = function() {
    p5js.background(COLOR);
  }; // mouse_pressed

  p5js.mouseReleased = function() {
    p5js.background(WHITE);
  }; // mouse_released

  p5js.draw = function() {
    /* Draw circles that change diameter based on mouse speed */
    /* and color based on if mouse-pressed (or not pressed)   */
    if (p5js.mouseIsPressed) {
        p5js.fill(COLOR);
        p5js.stroke(WHITE);
    } else {
        p5js.fill(WHITE);
        p5js.stroke(COLOR);
    }
    diameter = p5js.pow(p5js.dist(p5js.pmouseX, p5js.pmouseY,
                                  p5js.mouseX, p5js.mouseY), 1.5);
    p5js.ellipse(p5js.mouseX, p5js.mouseY, diameter, diameter);
}
}; // get started

new p5(get_started, "get-started");
