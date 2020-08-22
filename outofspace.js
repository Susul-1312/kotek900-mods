const keyPressed_cache = keyPressed;
const draw_cache = draw;

keyPressed = function() {
    modKeys(keyCode)
    var result = keyPressed_cache.apply(this, arguments);
    return result;
}

draw = function() {
    var result = draw_cache.apply(this, arguments);
    modCode();
    return result;
}



function modCode() {
    manualMovement();
    if (end) {
        background(0);
        fill(255);
        noStroke();
        textSize(50);
        text("The end.", 20, 100);
        textSize(20);
        text("Mod by Susul", 255, 300);
        text("Game by kotek900", 200, 350);
        textSize(12);
        text("Press enter to restart.", 20, 350);
        stroke(0);
    }
}


function modKeys(id) {
    console.log(id)
    if (id == 32) win = !win;
    if (id == 225) Sys32 = !Sys32;
    if (id <= 57 && id >= 49) bar = map(keyCode, 49, 57, 0, 180);
    if (id == 65) deletbox1 = !deletbox1;
    if (id == 83) deletbox2 = !deletbox2;
}

function manualMovement() {
    if (keyIsDown(171)) bar++;
    if (keyIsDown(173)) bar--;
}
