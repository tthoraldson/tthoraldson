function setup() {
    let pg = createGraphics(400, 400);

    // Draw on the off-screen graphics buffer
    pg.background(100);
    pg.fill(255);
    pg.noStroke();
    pg.ellipse(pg.width / 2, pg.height / 2, 200, 200);

    // No need to create a canvas
    noCanvas();
    
    // Redirect to the image data URL
    window.location.href = pg.elt.toDataURL();
}