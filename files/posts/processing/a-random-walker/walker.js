let sketch = function(p) {
    p.setup = function() {
        let parent_div_id = "random-walk-container";
        this.canvas = p.createCanvas($("#" + parent_div_id).outerWidth(true), 300);
        this.canvas.parent();
        p.walker = new Walker(p);
    }

    p.draw = function() {
        p.background(255);
        p.walker.walk();
        p.walker.display();
    }
};

function Walker(p) {
  this.x = p.width/2;
  this.y = p.height/2;
  
  this.walk = function() {
    this.x = this.x + p.random(-1, 1) * 10;
    this.y = this.y + p.random(-1, 1) * 10;
  }
  
  this.display = function() {
    p.fill(0);
    p.ellipse(this.x, this.y, 48, 48);
  }
}

//let node = document.getElementById("random-walk")
//window.document.getElementsByTagName("body")[0].appendChild(node);
sketch_container = new p5(sketch, 'random-walk-container');
