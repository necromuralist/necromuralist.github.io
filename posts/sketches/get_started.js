function setup() {
    createCanvas(640, 480);
    background(255);
    stroke(0, 0, 255);
    fill(255)
}

function draw() {
  if (mouseIsPressed) {
      fill(0, 0, 255);
      stroke(255);
      background(0, 0, 255);
  } else {
      fill(255);
      stroke(0, 0, 255);
      background(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
