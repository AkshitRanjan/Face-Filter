noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/ZKTS0GSx/clown-nose.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);

    //circle(noseX, noseY, 20);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);

    image(clown_nose, noseX, noseY, 40, 40);
}

function take_snapshot() {
    save('MyFilterImage.png');
}

function modelLoaded() {
    console.log('PoseNet Initialized');
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}