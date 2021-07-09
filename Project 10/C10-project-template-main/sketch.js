var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  
  btn_red = createButton("red")
  btn_red.position(100,50)
  btn_red.mousePressed(red_bgn)

  btn_green = createButton("green")
  btn_green.position(250,50)
  btn_green.mousePressed(green_bgn)
}

function draw() {
  background(r,g,b);
}


function green_bgn()
{r = 0;
 g = 255 ;
 b = 0;
}













function red_bgn()
{r = 255;
 g = 0 ;
 b = 0;
}