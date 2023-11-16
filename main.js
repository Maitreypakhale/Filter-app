noseX = 0
noseY = 0


function preload()
{
    moustache = loadImage('https://i.postimg.cc/cC4QW46r/moustche-removebg-preview.png')

}

function take_snapshot()
{
    save('Maitrey.png')
}

function setup()
{
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet = ml5.poseNet(video,model_loaded)
    poseNet.on('pose', got_poses)
}

function draw()
{
    image(video,0,0,300,300)
    image(moustache,noseX,noseY,30,30)
}

function model_loaded()
{
    console.log('poseNet')
}

function got_poses(results)
{
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-2;
    }
}