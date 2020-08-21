var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var i = 0;
var text = "";
var res = "";
var j = 0;
var res1 = "";
var x;
var y;
var equ = document.getElementById('equa');
var k = parseInt("x+5");
console.log(k);
function showCoords(event) {
   x = event.clientX;
   y = event.clientY;

  console.log(x);
  console.log(y);
}

function clearCoor() {

  console.log("mouse is out");

}

function zoom(){

  ctx.scale(10,10);
    single();
}
function single(){


  ctx.clearRect(0, 0, 600, 600);
  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 600);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(600, 300);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
ctx.fillText("x", 590, 310);
ctx.fillText("y", 290, 10);
ctx.fillText("-x", 8, 310);
ctx.fillText("-y", 285, 590);
ctx.fillText("O", 305, 315);


  ctx.translate(300, 300)
  text = equ.value;
  var n =text.includes("x*x + y*y")
  res = text.toUpperCase();

 console.log(res);

if(res === ""){
  window.alert("equation required!!");
  ctx.translate(-300, -300);
  ctx.clearRect(0, 0, 600, 600);
}
else if(res === "X"){
  ctx.save();
  ctx.save();
  ctx.beginPath();


  ctx.scale(1, 1);
  ctx.moveTo(-300, 300 );
  for(i = -300; i < 300; i++)
  {
  ctx.lineTo(i , -i);
  }

  ctx.restore();
  ctx.lineJoin = "round";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  ctx.translate(-300, -300)
}
else if (n) {
 var a = text.replace(/\s*[-+\/*]\s*/g, '');
 var b = a.replace(/=/, '');
 var c = b.replace(/x/g, '');
 var d = c.replace(/y/g, '');
  console.log(d);
  var e = Math.sqrt(parseInt(d));
  ctx.save();
  ctx.save();
  ctx.beginPath();
  ctx.scale(90, 90);
 ctx.arc(0, 0, e, 0, (Math.PI / 180) * 360, false);
 ctx.restore();
 ctx.lineWidth = 2;
 ctx.strokeStyle = "red";
 ctx.stroke();
 ctx.restore();
 ctx.translate(-300, -300)
}
else if (res === "-X") {
  ctx.save();
  ctx.save();
  ctx.beginPath();


  ctx.scale(1, 1);
  ctx.moveTo(-300, -300 );
  for(i = -300; i < 300; i++)
  {
  ctx.lineTo(i , i);
  }

  ctx.restore();
  ctx.lineJoin = "round";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  ctx.translate(-300, -300)
}
 else if(res === "X*X")
 {ctx.save();
 ctx.save();
 ctx.beginPath();


 ctx.scale(15, 40);
 ctx.moveTo(-76, -19 * 19);
 for(i = -76; i < 76; i++)
 {
 ctx.lineTo(i , -i/4 * i/4);
 }

 ctx.restore();
 ctx.lineJoin = "round";
 ctx.strokeStyle = "red";
 ctx.lineWidth = 2;
 ctx.stroke();
 ctx.restore();
 ctx.translate(-300, -300)
 }

 else if (res === "SINX") {
   ctx.save();
   ctx.save();
   ctx.beginPath();


   ctx.scale(15, 40);
   ctx.moveTo(-76, -Math.sin(19));
   for(i = -76; i < 76; i++)
   {
   ctx.lineTo(i , -Math.sin(i/4));
   }

   ctx.restore();
   ctx.lineJoin = "round";
   ctx.strokeStyle = "red";
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.restore();
   ctx.translate(-300, -300)
 }
 else if (res === "COSX") {
   ctx.save();
   ctx.save();
   ctx.beginPath();


   ctx.scale(15, 40);
   ctx.moveTo(-76, -Math.cos(19));
   for(i = -76; i < 76; i++)
   {
   ctx.lineTo(i , -Math.cos(i/4));
   }

   ctx.restore();
   ctx.lineJoin = "round";
   ctx.strokeStyle = "red";
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.restore();
   ctx.translate(-300, -300)
 }
 else if (res === "X*X*X") {
   ctx.save();
   ctx.save();
   ctx.beginPath();


   ctx.scale(17, 40);
   ctx.moveTo(-76, -19 * 19 * 19);
   for(i = -76; i < 76; i++)
   {
   ctx.lineTo(i , -i/4 * i/4 * i/4);
   }

   ctx.restore();
   ctx.lineJoin = "round";
   ctx.strokeStyle = "red";
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.restore();
   ctx.translate(-300, -300)
 }

}

function multiple(){

  ctx.beginPath();
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 600);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 300);
  ctx.lineTo(600, 300);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();
ctx.fillText("x", 590, 310);
ctx.fillText("y", 290, 10);
ctx.fillText("-x", 8, 310);
ctx.fillText("-y", 285, 590);
ctx.fillText("O", 305, 315);


  ctx.translate(300, 300)
  text = equ.value;
  var n =text.includes("x*x + y*y")
  res = text.toUpperCase();

 console.log(res);

if(res === ""){
  window.alert("equation required!!")
  ctx.translate(-300, -300)
  ctx.clearRect(0, 0, 600, 600);
}
 if(res === "X"){
  ctx.save();
  ctx.save();
  ctx.beginPath();


  ctx.scale(1, 1);
  ctx.moveTo(-300, 300 );
  for(i = -300; i < 300; i++)
  {
  ctx.lineTo(i , -i);
  }

  ctx.restore();
  ctx.lineJoin = "round";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  ctx.translate(-300, -300)
}
 if (n) {
 var a = text.replace(/\s*[-+\/*]\s*/g, '');
 var b = a.replace(/=/, '');
 var c = b.replace(/x/g, '');
 var d = c.replace(/y/g, '');
  console.log(d);
  var e = Math.sqrt(parseInt(d));
 ctx.save();
  ctx.save();
  ctx.beginPath();
  ctx.scale(90, 90);
 ctx.arc(0, 0, e, 0, (Math.PI / 180) * 360, false);
 ctx.restore();
 ctx.lineWidth = 2;
 ctx.strokeStyle = "green";
 ctx.stroke();
 ctx.restore();
 ctx.translate(-300, -300)
}
 if (res === "-X") {
  ctx.save();
  ctx.save();
  ctx.beginPath();


  ctx.scale(1, 1);
  ctx.moveTo(-300, -300 );
  for(i = -300; i < 300; i++)
  {
  ctx.lineTo(i , i);
  }

  ctx.restore();
  ctx.lineJoin = "round";
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  ctx.translate(-300, -300)
}
  if(res === "X*X")
 {ctx.save();
 ctx.save();
 ctx.beginPath();


 ctx.scale(15, 40);
 ctx.moveTo(-76, -19 * 19);
 for(i = -76; i < 76; i++)
 {
 ctx.lineTo(i , -i/4 * i/4);
 }

 ctx.restore();
 ctx.lineJoin = "round";
 ctx.strokeStyle = "grey";
 ctx.lineWidth = 2;
 ctx.stroke();
 ctx.restore();
 ctx.translate(-300, -300)
 }

  if (res === "SINX") {
   ctx.save();
   ctx.save();
   ctx.beginPath();


   ctx.scale(15, 40);
   ctx.moveTo(-76, -Math.sin(19));
   for(i = -76; i < 76; i++)
   {
   ctx.lineTo(i , -Math.sin(i/4));
   }

   ctx.restore();
   ctx.lineJoin = "round";
   ctx.strokeStyle = "#073f2b";
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.restore();
   ctx.translate(-300, -300)
 }
  if (res === "COSX") {
   ctx.save();
   ctx.save();
   ctx.beginPath();


   ctx.scale(15, 40);
   ctx.moveTo(-76, -Math.cos(19));
   for(i = -76; i < 76; i++)
   {
   ctx.lineTo(i , -Math.cos(i/4));
   }

   ctx.restore();
   ctx.lineJoin = "round";
   ctx.strokeStyle = "#2c073f";
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.restore();
   ctx.translate(-300, -300)
 }
  if (res === "X*X*X") {
   ctx.save();
   ctx.save();
   ctx.beginPath();


   ctx.scale(17, 40);
   ctx.moveTo(-76, -19 * 19 * 19);
   for(i = -76; i < 76; i++)
   {
   ctx.lineTo(i , -i/4 * i/4 * i/4);
   }

   ctx.restore();
   ctx.lineJoin = "round";
   ctx.strokeStyle = "#662205";
   ctx.lineWidth = 2;
   ctx.stroke();
   ctx.restore();
   ctx.translate(-300, -300)
 }
}
