function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    fill(random(255), random(255), random(255));
    ellipse(width / 2, height / 2, 50, 50);
}
