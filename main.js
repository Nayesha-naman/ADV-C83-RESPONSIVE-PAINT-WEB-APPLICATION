var nosex=0
var nosey=0
var leftWristx=0
var rightWristx=0
var difference=0


function setup(){
canvas=createCanvas(300,300);
canvas.position(900,200)
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.position(190,100)
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}




function modelLoaded() {
  console.log("model has been Loaded");
}

function draw(){
background("grey");
fill(66, 135, 245)
stroke(66, 245, 242)
square(nosex,nosey,difference)

}

function preload (){

}

function gotPoses(result) {
  if (result.length>0) {
    console.log(result);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("nosex="+results[0].pose.nosex);
    console.log("nosey="+results[0].pose.nosey);
    rightWristx=results[0].pose.rightWrist.x;
    leftWristx=results[0].pose.leftWrist.x;
    console.log("rightWristx="+results[0].pose.rightWristx);
    console.log("leftWristx="+results[0].pose.leftWristx);
  difference=floor(leftWristx-rightWristx)
   }
}
