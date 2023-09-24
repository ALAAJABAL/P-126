function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center()

    video = createCapture(VIDEO);
    video.hide();

    model = ml5.poseNet(video, modelLoaded);
    model.on("pose", showResult)
}

function modelLoaded()
{
  console.log("Model is Loaded")
}

lwx = 0;
lwy = 0;
rwy = 0;
rwx = 0;

function preload()
{
  song = loadSound("song.mp3")
}

function showResult(result)
{
  console.log(result);
  lwx = result[0].pose.leftWrist.x
  lwy = result[0].pose.leftWrist.y
  rwx = result[0].pose.rightWrist.x
  rwy = result[0].pose.rightWrist.y
}

function draw()
{
  image(video, 0, 0, 600, 500);
  fill("yellow")
  circle(lwx, lwy, 20)
  circle(rwx, rwy, 20)
}