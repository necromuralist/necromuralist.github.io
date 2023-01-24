let rotate_translate_sketch = function(p5js) {
  const WHITE = 255;
  const COLOR = p5js.color(255, 0, 0);

  let angle = 0.0;
  let side;

  p5js.mousePressed = function() {
    p5js.background(WHITE);
  }; // mouse_pressed

  p5js.setup = function(){
    p5js.createCanvas(0.8 * p5js.windowWidth, 200);
    p5js.strokeWeight(3);
    p5js.smooth();
  }; //setup

  p5js.draw = function(){
    p5js.stroke(COLOR);
    p5js.translate(p5js.mouseX, p5js.mouseY);
    side = p5js.pow(p5js.dist(p5js.pmouseX, p5js.pmouseY,
                              p5js.mouseX, p5js.mouseY), 1.5);
    p5js.rotate(angle);
    p5js.square(-15, -15, side);
    angle += 0.1;
  } // draw
}; // end of rotate_translate_sketch

new p5(sketch=rotate_translate_sketch, node="rotate-translate");
