let mobilenet;
let video;
let label = '';



function modelReady() {
    console.log('Image Classification');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        label = results[0].className;
        mobilenet.predict(gotResults);
    }
}

// setup function
function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    // load the MobileNet and apply it on video feed
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    background(0);
    // show video 
    image(video, 0, 0);
    fill(255);
    textSize(32);
    // show prediction label 
    text(label, 10, height - 20);
}