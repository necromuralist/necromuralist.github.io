/** The main sketch
 * this gets passed to p5 so it defines the setup and draw functions
 * that p5 expects
*/
let starfield_sketch = function(p) {
  let star_count = 800;
  let parent_div_id = "schiffman-starfield";
  p.BLACK = 0;
  p.WHITE = 255;
  p.ALPHA = 100;

  p.setup = function() {
    p.stars = [];
    this.canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true), 800);
    for (let i=0; i < star_count; i++) {
      p.stars[i] = new Star(p);
    }
  } // end setup

  p.draw = function() {
    p.background(p.BLACK, p.ALPHA);
    speed = p.map(p.mouseX, 0, p.width, 0, 50);
    p.translate(p.width/2, p.height/2);
    for (let i=0; i < p.stars.length; i++){
      p.stars[i].update(speed);
      p.stars[i].show();
    }
  } //end draw
}; //end starfield_sketch

function Star(p) {
  this.x = p.random(-p.width, p.width);
  this.y = p.random(-p.height, p.height);
  this.z = p.random(p.width);

  this.update = function(speed) {
    this.z = this.z - speed
    
    if (this.z < 1) {
      this.x = p.random(-p.width, p.width);
      this.y = p.random(-p.height, p.height);
      this.z = p.random(p.width);
    }
  } //end update

  this.show = function() {
    p.fill(p.WHITE);
    var x_now = p.map(this.x/this.z, 0, 1, 0, p.width);
    var y_now = p.map(this.y/this.z, 0, 1, 0, p.height);

    var radius = p.map(this.z, 0, p.width, 16, 0);
    p.ellipse(x_now, y_now, radius, radius);

    p.stroke(p.WHITE);
  } // end show
}; //end class Star

// Attach the starfield_sketch function at the top to the div with ID
// schiffman-starfield
sketch_container = new p5(starfield_sketch, 'schiffman-starfield');
