let random_accelerator_sketch = function(p) {
    p.setup = function() {
        let parent_div_id = "random-accelerator";
        this.canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true), 800);
        this.canvas.parent(parent_div_id);
        p.walker = new Walker(p);
    }

    p.draw = function() {
        p.background(255);
        p.walker.walk();
        p.walker.display();
    }
};

function Walker(p) {
    this.position = p.createVector(p.width/2, p.height/2);
    this.velocity = p.createVector(0, 0)

    this.walk = function() {
        acceleration = p.createVector(p.random(-1, 1), p.random(-1, 1));
        acceleration = acceleration.mult(0.1)
        this.velocity = this.velocity.add(acceleration)
        this.position = this.position.add(this.velocity)
  }
  
  this.display = function() {
      p.stroke(0);
      p.noFill();
      p.background(255, 255, 255, 25);
      p.ellipse(this.position.x, this.position.y, 48, 48);
  }
}

sketch_container = new p5(random_accelerator_sketch, 'random-accelerator');
