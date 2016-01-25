function setup() {
    canvas = createCanvas(windowWidth, 200);
    canvas.parent("get_started")
    background(255);
    strokeWeight(5);
    stroke(0, 0, 255);
    fill(255)
}

function draw() {
  if (mouseIsPressed) {
      fill(0, 0, 255);
      stroke(255);
  } else {
      fill(255);
      stroke(0, 0, 255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
