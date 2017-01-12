var canvas = document.getElementById("maincanvas");
var ctx = canvas.getContext('2d');

var img[3];
img[0] = new Image();
img[0].src = "bigfont/k.png";
img[1] = new Image();
img[1].src = "bigfont/y.png";
img[2] = new Image();
img[2].src = "bigfont/p.png";

for(var i = 0;i < 3;i++)
	ctx.drawImage(img[i],180 * i,120 * i);
