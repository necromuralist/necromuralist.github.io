let random_walker_sketch = function(p) {
    p.setup = function() {
        let parent_div_id = "random-walker-vectorized";
        this.canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true), 300);
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
  
    this.walk = function() {
        velocity = p.createVector(p.random(-5, 5), p.random(-5, 5));
        this.position = this.position.add(this.velocity)
  }
  
  this.display = function() {
      p.stroke(0);
      p.noFill();
      p.background(255, 255, 255, 100);
      p.ellipse(this.position.x, this.position.y, 48, 48);
  }
}

sketch_container = new p5(random_walker_sketch, 'random-walker-vectorized');
