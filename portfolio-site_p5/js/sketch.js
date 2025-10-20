let canvas;
function setup(){
    canvas = createCanvas(windowWidth,windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style("z-index", -2);
    angleMode(DEGREES);
    background(30);
}
function windowResized(){
    console.log("bigg small");
    resizeCanvas(windowWidth, windowHeight);

}
function draw(){
   
    rotateX(60);
    noFill();
    stroke(255);

    for(let i = 0; i < 100; i++){
        let r = map(sin(frameCount /2), -1 ,1, 100,200);
        let g = map(i, 0, 50, 100, 200);
        let b = map(cos(frameCount), -1, 1, 200, 100);

        stroke(r,g,b);

        rotate(frameCount/ 50)

        beginShape();
        for( let j = 0; j < 270; j += 20){
            let rad = i *3;
            let x = rad *cos(j);
            let y = rad * sin(j);
            let z = sin(frameCount * 2 + i * 5)* 50;

            vertex(x, y, z);


        }
        endShape(close);

    }


}
// function mouseMoved(){
//     drawthing(mouseX,mouseY);
// }
// function drawthing(x,y){
//      strokeWeight(0);
//     fill(random(200,255),random(200,255),random(200,255));
//     ellipse(x, y, 30, 30);
// }