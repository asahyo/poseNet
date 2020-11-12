let video;
let poseNet;
let pose;

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  //refrence ml5 library with video element and callback
  poseNet = ml5.poseNet(video, modelLoaded);
  //on pose, I want this function to be called
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses){
  console.log(poses);
  if(poses.length > 0){
    //object of array has two properties; pose and skeleton
    pose = poses[0];
    
  }
}
 
function modelLoaded(){
  console.log('poseNet ready');
}

function draw(){
  image(video, 0, 0);
  //check if there is a valid pose, then draw circle on nose
  if(pose){
    fill(255, 0, 0);
    ellipse(pose.nose.x, pose.nose.y, 50);
    fill(0, 255, 0);
    ellipse(pose.rightWrist.x, pose.rightWrist.y, 30);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 30);

  }
    
}