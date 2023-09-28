let bobbel = [ ];
let numBobbel = 5;
let hspeed = 5;
let lspeed = 2;

function setup() {
    createCanvas(400,400);

    for(let i = 0; i < numBobbel; i++) {
        bobbel.push(new Bobbel(random(20,width-20),y+random(lspeed,hspeed)))
    }
}

function draw() {
    background(255);

    for(let j = 0; j < bobbel.length; j++) {
        bobbel[j].show();
        bobbel[j].update();
    }
}