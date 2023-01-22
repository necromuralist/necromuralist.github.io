const ROTATE_TRANSLATE_ID = "rotate-translate";

let rotate_translate_sketch = function(p5js) {
  const WHITE = 255;
  const BLUE = p5js.color(0, 0, 255);

  let angle = 0.0;
  let side;

  p5js.mousePressed = function() {
    p5js.background(WHITE);
  }; // mouse_pressed

  p5js.setup = function(){
    let canvas = p5js.createCanvas(0.8 * p5js.windowWidth, 200);
    canvas.parent(ROTATE_TRANSLATE_ID);
    p5js.strokeWeight(3);
    p5js.smooth();
  }; //setup

  p5js.draw = function(){
    p5js.stroke(BLUE);
    p5js.translate(p5js.mouseX, p5js.mouseY);
    side = p5js.pow(p5js.dist(p5js.pmouseX, p5js.pmouseY,
                              p5js.mouseX, p5js.mouseY), 1.5);
    p5js.rotate(angle);
    p5js.square(-15, -15, side);
    angle += 0.1;
  } // draw
}; // rotate_translate_sketch

new p5(rotate_translate_sketch, ROTATE_TRANSLATE_ID);
