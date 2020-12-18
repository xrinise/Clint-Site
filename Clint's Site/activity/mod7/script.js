function main(){
    var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight, ctx = canvas.getContext('2d');

function drawHeart(context, x, y, width, height){
        context.save();
                context.beginPath();
        var topCurveHeight = height * 0.3;
                context.moveTo(x, y + topCurveHeight);
                // top left curve
                context.bezierCurveTo(
          x, y, 
          x - width / 2, y, 
          x - width / 2, y + topCurveHeight
        );
                
                // bottom left curve
                context.bezierCurveTo(
          x - width / 2, y + (height + topCurveHeight) / 2, 
          x, y + (height + topCurveHeight) / 2, 
          x, y + height
        );
                
                // bottom right curve
                context.bezierCurveTo(
          x, y + (height + topCurveHeight) / 2, 
          x + width / 2, y + (height + topCurveHeight) / 2, 
          x + width / 2, y + topCurveHeight
        );
                
                // top right curve
                context.bezierCurveTo(
          x + width / 2, y, 
          x, y, 
          x, y + topCurveHeight
        );
                
                context.closePath();
                context.fillStyle = "red";
                context.fill();
        context.restore();
            }

var drawBase = function(pos){
  ctx.fillStyle = '#FFDA6A';
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawBaseRage = function(pos){
  var grd=ctx.createRadialGradient(pos.x, pos.y+10,0,pos.x, pos.y+10,50);
  grd.addColorStop(0,"#FFDA6A");
  grd.addColorStop(1,"#D5234C");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x, pos.y, 50, 0, Math.PI * 2, true);
  ctx.fill();
}

var drawSmiley = function(pos) {
  
  drawBase(pos);
  
  //mouth
  ctx.beginPath();
  ctx.strockStyle = '#000';
  ctx.lineWidth   = 4;
  ctx.arc(pos.x, pos.y, 30,0,Math.PI,   false);
  ctx.stroke();
  
  
  //left blush
  var grd=ctx.createRadialGradient(pos.x-30, pos.y,0,pos.x-30, pos.y,10);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"#FFDA6A");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x-30, pos.y, 10, 0, Math.PI * 2, true);
  ctx.fill();
  
  //right blush
  var grd=ctx.createRadialGradient(pos.x+30, pos.y,0,pos.x+30, pos.y,10);
  grd.addColorStop(0,"red");
  grd.addColorStop(1,"#FFDA6A");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.arc(pos.x+30, pos.y, 10, 0, Math.PI * 2, true);
  ctx.fill();
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-10, 8, 0, Math.PI, true);
  ctx.stroke();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-10, 8, 0, Math.PI, true);
  ctx.stroke();
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Blush",pos.x-25,pos.y+75);
}

var drawHaha = function(pos){
  
  drawBase(pos);
  
  
  //mouth
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.arc(pos.x,pos.y, 40,  0, Math.PI, false);
  ctx.fill();
  
  //tongue
  ctx.beginPath();
  ctx.fillStyle = '#F55064';
  ctx.arc(pos.x, pos.y+45, 30,  -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.fill();
  
  //left eye
  ctx.beginPath();
  ctx.moveTo(pos.x-40, pos.y-10);
  ctx.lineTo(pos.x-20, pos.y-15 );
  ctx.lineTo(pos.x-40, pos.y-20);
  ctx.stroke();
  
  //right eye
  ctx.beginPath();
  ctx.moveTo(pos.x+40, pos.y-10);
  ctx.lineTo(pos.x+20, pos.y-15);
  ctx.lineTo(pos.x+40, pos.y-20);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Ha Ha",pos.x-25,pos.y+75);
}

var drawWow = function(pos){
  drawBase(pos);
  
  //left eyebrow
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-15, 8, -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  //right eyebrow
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-15, 8, -30*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  ctx.scale(1, 2);
  ctx.beginPath();
  ctx.arc(pos.x, pos.y-25, 8, 0, 2*Math.PI, true);
  ctx.fill();
}

var drawHeartSmiley = function(pos) {
  drawBase(pos);
  
  //left heart
  drawHeart(ctx, pos.x-20, pos.y-15,16,16);
  //right heart
  drawHeart(ctx, pos.x+20, pos.y-15,16,16);
  
  //lower lip arc
  ctx.beginPath();
  ctx.fillStyle = '#995710';
  ctx.arc(pos.x,pos.y+10, 30,  0, Math.PI, false);
  ctx.fill();
  
  //upper lip arc
  ctx.beginPath();
  ctx.fillStyle = '#FFDA6A';
  ctx.arc(pos.x,pos.y-20, 40,  45*Math.PI/180, 135*Math.PI/180, false);
  ctx.fill();
  
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Love",pos.x-25,pos.y+75);
}

var drawGrinning = function(pos){
  drawBase(pos);
  
  ctx.fillStyle='#995710';
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-20, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-20, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //mouth
  ctx.beginPath();
  ctx.arc(pos.x,pos.y, 40,  0, Math.PI, false);
  ctx.fill();
  
  //teeth
  ctx.fillStyle='#fff';
  ctx.fillRect(pos.x-38,pos.y+2,75,8);
  
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Grinning",pos.x-25,pos.y+75);
  
}

var drawAngry = function(pos){
  drawBase(pos);
  
  //left eyebrow
  ctx.beginPath();
  ctx.arc(pos.x-25, pos.y-10, 15, -30*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  //right eyebrow
  ctx.beginPath();
  ctx.arc(pos.x+25, pos.y-10, 15, -60*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //mouth
  ctx.beginPath();
  ctx.arc(pos.x, pos.y+50, 30, -60*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Angry",pos.x-25,pos.y+75);
}

var drawRage = function(pos){
  drawBaseRage(pos);
  
  //left eyebrow
  ctx.beginPath();
  ctx.arc(pos.x-25, pos.y-10, 15, -30*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  //right eyebrow
  ctx.beginPath();
  ctx.arc(pos.x+25, pos.y-10, 15, -60*Math.PI/180, -150*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  
  //left eye
  ctx.beginPath();
  ctx.arc(pos.x-20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //right eye
  ctx.beginPath();
  ctx.arc(pos.x+20, pos.y-5, 8, 0, 2*Math.PI, true);
  ctx.fill();
  
  //mouth
  ctx.beginPath();
  ctx.arc(pos.x, pos.y+50, 30, -60*Math.PI/180, -120*Math.PI/180, true);
  ctx.stroke();
  
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Rage",pos.x-25,pos.y+75);
}


var drawExpressionless = function(pos){
  drawBase(pos);
  
  ctx.fillStyle='#000';
  ctx.fillRect(pos.x-30, pos.y-20,20,8);
  ctx.fillRect(pos.x+10,pos.y-20,20,8);
  ctx.fillRect(pos.x-20,pos.y+10,40,8);
  
  ctx.fillStyle='#000';
  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Expressionless",pos.x-50,pos.y+75);
}


drawSmiley({x:75,y:75});

drawHaha({x:275,y:75});

drawWow({x:475,y:75});

ctx.scale(1,0.5);
ctx.fillStyle='#000';
ctx.font = "20px Comic Sans MS";
ctx.fillText("WoW",450,150);

drawHeartSmiley({x:75,y:275});

drawGrinning({x:275,y:275});

drawAngry({x:475,y:275});

drawRage({x:275, y:475});

drawExpressionless({x:475,y:475});

}