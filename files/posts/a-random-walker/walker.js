const RANDOM_WALK_DIV_ID = "random-walk-container";


function random_walk_sketch(p5js) {
    const colors = {
      BLACK: 0,
      WHITE: 255,
      TRANSPARENCY: 50
    }; // colors

    const line_stroke = {
      color: colors.BLACK,
      weight: 4
    }; //line_stroke

    p5js.setup = function() {
      let canvas = p5js.createCanvas($("#" + RANDOM_WALK_DIV_ID).outerWidth(true), 300);
      canvas.parent(RANDOM_WALK_DIV_ID);
      p5js.walker = new Walker(p5js, line_stroke.color, line_stroke.weight);
    }; //sketch

    p5js.draw = function() {
      p5js.background(colors.WHITE, colors.TRANSPARENCY);
      p5js.walker.walk();
      p5js.walker.display();
    }; // draw
}; // random_walk_sketch


class Walker {
  constructor(p5js, color, weight, width=48, height=48) {
    this.p5js = p5js;
    this.color = color;
    this.weight = weight;
    this.width = width;
    this.height = height;
    this.x = p5js.width/2;
    this.y = p5js.height/2;
  } //constructor
  
  walk() {
    this.x = this.x + this.p5js.random(-1, 1) * 10;
    this.y = this.y + this.p5js.random(-1, 1) * 10;
  }
  
  display() {
    this.p5js.stroke(this.color);
    this.p5js.strokeWeight(this.weight);
    this.p5js.noFill();
    this.p5js.ellipse(this.x, this.y, this.width, this.height);
  }
}

new p5(random_walk_sketch, RANDOM_WALK_DIV_ID);
