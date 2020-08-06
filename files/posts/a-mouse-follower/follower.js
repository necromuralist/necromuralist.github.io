let mouse_follower_sketch = function(p) {
    p.setup = function() {
        let parent_div_id = "mouse-follower";
        this.canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true), 800);
        //this.canvas.parent(parent_div_id);
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
        mouse = p.createVector(p.mouseX, p.mouseY);
        // calling sub on the vectors does an in-place update
        // using p5.Vector.sub creates a new vector
        // This is a static method so we use the module (p5) not the instance (p)
        acceleration = mouse.sub(this.position);
       
        // setMag always produces the same magnitude (but the orientation stays the same)
        acceleration.setMag(0.5);
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

sketch_container = new p5(mouse_follower_sketch, 'mouse-follower');
