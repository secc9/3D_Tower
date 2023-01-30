/////////////////////////my variables
let pg;
let mv = 0;
let xx =  -1000;
let alpha;
//////////////////////////////
//////////////////
//variables copied from the responsive-dom_fullscreen-3D sketch
let canvas;
let button;
let sliderX;
let sliderY;
let sliderZ;

let displayState;


function setup() {
    // background(255);
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-container"); // move our canvas inside this HTML element 
    pg = createGraphics(200, 200);

    createEasyCam();

    addGUI();
}


function draw() {
    // always redraw
    background(127);

   

    //////////////////////////////////////////////////////
    //coded added here is from responsive_dom_fullscreen_3D sketch
   // lights();
   // ambientMaterial(slider.value(), 0, 100);

    //////////////////////////////////////////////////////


    
directionalLight(200, 250, 250, 1000, 10, -1000);
    camera(0, sliderY.value(), sliderZ.value());
rotateX(0);
//rotateZ(mv)
    rotateZ(sliderX.value());
mv = mv + 0.001;

    console.log(sliderX.value(), sliderY.value(), sliderZ.value())


    //ground
    translate(0, 0, -1000)
    fill(100, 200, 50);
    plane(2000, 2000,2);
    //tower
    push();
    translate(0, 100, 1000);
    fill(100, 100, 110)
    box(100, 100, 2000,2);
    translate(0, 100, -500);
    box(400, 300, 1000,1);

    translate(-200, 0, 1900);
    rotateX(radians(45));
    ellipsoid(500, 1000,500);
    pop();


//Cone
    push();
    strokeWeight(2);
    stroke(0);
// camera(1000, 10, 1000);
    translate(-200, -200, 250);
    fill(100, 100, 110);
//   noFill();
    rotateX(radians(-90));
    cone(1500, 200, 20);
    pop();

//walking ring
    push();
    rotate((mv-0.1));
    translate(500,0, 1300);
    noFill();
    strokeWeight(2);
    stroke(100, 0, 230);
    torus(800, 100, 24);
    pop();


    fill(0, 0, 100, 100);
    //planet1
    push();
    // ambientMaterial(100, 100, 100);
    rotateX(mv);
    translate(500, 500, -3000);
    ellipsoid(300, 300, 300, 20,);
    pop();

    planet(500, 1500, 1500, -2500, 200-mv-mv);



    //cylinders

    // i tried a forloop for this but couldnt get it to work
    fill(100, 100, 300);
    push();
    rotateX(30)
    translate(xx-0, -1500, -1200);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);
    translate(100, 0, 0);
    fill(100, 100, 110);
    cylinder(20, 1900);

    pop();




    //Ad sign
    translate(700, 5500, 2500);
    rotate(4);
    rotateY(20);
    rotateZ(5);

    pg.alpha = frameCount % 255;
    pg.background(100, 0, 200, 1);
    pg.textSize(70);
    pg.noFill();
    pg.stroke(205, 0, 255, alpha);
    pg.text("Your ", 20,70);
    pg.text("Ad", 40,130);
    pg.text("Here!", 20,190);
    texture(pg);
    plane(4000,4000, 2);





}

function planet(size, x, y, z, rt){
    push();
    rotate(rt);
    translate(x, y, -z);
    ellipsoid(300, 300, 300, 20,);
    pop();
}

function addGUI(){

    // add a sliderX
    sliderX = createSlider(1, 10);
    sliderX.addClass("sliderX");
    //add slider to the parent gui HTML element
    sliderX.parent("gui-container");
    
    
    //add a sliderY
    sliderY = createSlider(10, 4000);
    sliderY.addClass("sliderY");
    //add slider to the parent gui HTML element
    sliderY.parent("gui-container");

    //add a sliderZ
    sliderZ = createSlider(10, 5000);
    sliderZ.addClass("sliderZ");
    //Add the slider to the parent gui HTML element
    sliderZ.parent("gui-container");
    
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
