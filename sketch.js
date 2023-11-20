let pg;

function setup() {
    // Create an off-screen graphics buffer
    pg = createGraphics(400, 400);

    // Draw something on the buffer
    pg.background(100);
    pg.fill(255);
    pg.noStroke();
    pg.ellipse(pg.width / 2, pg.height / 2, 200, 200);

    // Convert the buffer to an image
    let imageElement = createImg(pg.elt.toDataURL());

    // Replace the entire body content with the image
    document.body.innerHTML = '';
    imageElement.parent(document.body);

    // Remove the default canvas created by p5.js
    noCanvas();
}