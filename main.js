function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150)
    video = createCapture(VIDEO);
    video.hide();
    
    }
    
    function draw() {
        image(video, 230, 150, 220, 200);
        Fill(255, 0 , 0);
        stroke(255, 0 , 0);
        circle(50, 50, 50);s
    }