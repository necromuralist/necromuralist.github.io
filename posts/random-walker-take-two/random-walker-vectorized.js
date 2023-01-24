const VECTOR_WALKER_DIV_ID = "random-walker-vectorized";


function random_walker_sketch (p5js) {
  const colors = {
    BLACK: 0,
    WHITE: 255,
    TRANSPARENCY: 50
  }; // colors

  const line_stroke = {
    color: colors.BLACK,
    weight: 4
  }; //line_stroke

  let walker;
  
  p5js.setup = function() {
    let canvas = p5js.createCanvas($("#" + VECTOR_WALKER_DIV_ID).outerWidth(true), 300);
    canvas.parent(VECTOR_WALKER_DIV_ID);
    walker = new VectorWalker(p5js, line_stroke.color, line_stroke.weight);
  } //setup

  p5js.draw = function() {
    p5js.background(colors.WHITE, colors.TRANSPARENCY);
    walker.walk();
    walker.display();
  } //draw
}; //random_walker_sketch


class VectorWalker {
  constructor(p5js, color, weight){
    this.p5js = p5js;
    this.color = color;
    this.weight = weight;
    this.position = p5js.createVector(p5js.width/2, p5js.height/2);
    } //constructor
  
  walk() {
    let velocity = this.p5js.createVector(this.p5js.random(-5, 5),
                                                this.p5js.random(-5, 5));
    this.position = this.position.add(velocity);
  }; // walk
  
  display() {
    this.p5js.stroke(this.color);
    this.p5js.strokeWeight(this.weight);
    this.p5js.noFill();
    this.p5js.ellipse(this.position.x, this.position.y, 48, 48);
  }; // display
} // Walker

new p5(random_walker_sketch, VECTOR_WALKER_DIV_ID);
