leftWristX=0
rightWristX=0
difference=0



function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("red");
   
    text("HI",150,150);
    span.style.fontSize= difference;

}

function modelLoaded(){
    console.log("initialized")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        console.log("lx="+leftWristX);
        rightWristX=results[0].pose.rightWrist.x;
        console.log("rx="+rightWristX);
        
        difference=rightWristX=leftWristX;
        console.log(difference);
    }

   
}