let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let eyerX = 0;
let eyerY = 0;
let wristlX = 0;
let wristlY = 0;
let wristrX = 0;
let wristrY = 0;


function setup(){
  //makes canvas
  createCanvas(640, 480);
  //creates video below canvas
  video = createCapture(VIDEO);
  //creates video and hides
  video.hide();
  //check to see if ml5 library is working
  //console.log(ml5);
  //load poseNet model and connect to video
  poseNet = ml5.poseNet(video, modelReady);
  //when pose is detected, gotPoses function will be called
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  //check to see if gotPoses function is getting called
  //console.log(poses);
  
  //change it to greater than 0, because without it can run without any poses
  if(poses.length > 0){
    //look at console log to see that 0 is for nose
    //0, pose, keypoints, 0, position
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    //look at console log to see that 1 is for left eye
    let elX = poses[0].pose.keypoints[1].position.x;
    let elY = poses[0].pose.keypoints[1].position.y;
    //look at console log to see that 2 is for right eye
    let erX = poses[0].pose.keypoints[2].position.x;
    let erY = poses[0].pose.keypoints[2].position.y;
    //look at console log to see that 9 is for left wrist
    let wlX = poses[0].pose.keypoints[9].position.x;
    let wlY = poses[0].pose.keypoints[9].position.y;
    //look at console log to see that 10 is for left wrist
    let wrX = poses[0].pose.keypoints[10].position.x;
    let wrY = poses[0].pose.keypoints[10].position.y;
    
    //lerp finds point in between two other points
    //0.5 smooths the movement of the nose
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, elX, 0.5);
    eyelY = lerp(eyelY, elY, 0.5);
    eyerX = lerp(eyerX, erX, 0.5);
    eyerY = lerp(eyerY, erY, 0.5);
    wristlX = lerp(wristlX, wlX, 0.5);
    wristlY = lerp(wristlY, wlY, 0.5);
    wristrX = lerp(wristrX, wrX, 0.5);
    wristrY = lerp(wristrY, wrY, 0.5);

  }
}

function modelReady(){
  console.log('model ready');
}

function draw(){
  background(220);
  //draws video at (0,0)
  image(video, 0, 0);
  
  fill(255, 0, 0);
  ellipse(noseX, noseY, 50);
  
  fill(0, 0, 255);
  ellipse(eyelX, eyelY, 40);
  
  fill(0, 0, 255);
  ellipse(eyerX, eyerY, 40);
  
  fill(0, 255, 0);
  ellipse(wristlX, wristlY, 40);
  
  fill(0, 255, 0);
  ellipse(wristrX, wristrY, 40);
    
}