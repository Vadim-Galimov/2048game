



function makeLose() {



	ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	
ctx.fillRect(0, 0, 4*stepMargin+minMargin, 4*stepMargin+minMargin);

ctx.fillStyle = "#776e65";
		 ctx.font = 'bold 50px sans-serif';

 metrics = ctx.measureText('GAME OVER!');
fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


	 addWidth=((4*stepMargin+minMargin)-metrics.width)/2;
	addHeight=((4*stepMargin+minMargin)-actualHeight)/2;
   ctx.fillText("GAME OVER!",addWidth,addHeight+actualHeight);
   
   
   
   
   

   
   
   
   
   
   
     ctx.font = 'bold 20px sans-serif'; 
	 
 
 metrics = ctx.measureText('try again');
 fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
 actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
   

ctx.fillStyle = "#8f7a66";


   roundRect(ctx,((4*stepMargin+minMargin)-metrics.width-30)/2, 220, metrics.width+30+((4*stepMargin+minMargin)-metrics.width-30)/2, actualHeight+15+220, 3);


ctx.fillStyle = "#f9f6f2";

   ctx.fillText("Try again",(((4*stepMargin+minMargin)-metrics.width-10)/2)+2,244);
   
   
   loseAnimation=1;
   
   elem=document.getElementById('canvasBody');

   btnXstart=((4*stepMargin+minMargin)-metrics.width-30)/2+elem.offsetLeft;
   btnXend=((4*stepMargin+minMargin)-metrics.width-30)/2+metrics.width+30+elem.offsetLeft;
   btnYstart=220+elem.offsetTop;
   btnYend=220+actualHeight+15+elem.offsetTop;
   
}



 function checkLose() {
	 loseStatus=1;

	 if (cellArray.length<16) {
		  loseStatus=0;
		 return 0;
	 }
	 	 console.log('checklose');

	 
	 for (i1=0; i1<4; i1++) {
	 for (i=0; i<3; i++) {
		 console.log(getCellFromNumber(downColumnArr[i1][i])?.value);
		  console.log(getCellFromNumber(downColumnArr[i1][i+1])?.value);
		 	if (getCellFromNumber(downColumnArr[i1][i])?.value==getCellFromNumber(downColumnArr[i1][i+1])?.value) loseStatus=0;
		 
	 }
	 } 
 console.log('checklose2');
	 for (i1=0; i1<4; i1++) {
	 for (i=0; i<3; i++) {
		  console.log(getCellFromNumber(rightColumnArr[i1][i])?.value);
		   console.log(getCellFromNumber(rightColumnArr[i1][i+1])?.value);
		 	if (getCellFromNumber(rightColumnArr[i1][i])?.value==getCellFromNumber(rightColumnArr[i1][i+1])?.value) loseStatus=0;
		 
	 }
	 } 


if (loseStatus==1) makeLose();


	


 }
 
 
 function checkWin() {
	 valueArray=cellArray.map(function (item) {
		 return item.value;
		 
	 });
	 
	 
	if (valueArray.includes(2048)) winStatus=1;
	
	if(winStatus==1) makeWin();
	 
	 
 }
 
 
 function makeWin() {
	 console.log('win');
	 


	ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
ctx.fillRect(0, 0, 4*stepMargin+minMargin, 4*stepMargin+minMargin);

ctx.fillStyle = "#f9f6f2";
		 ctx.font = 'bold 50px sans-serif';

 metrics = ctx.measureText('YOU WIN!');
fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


	 addWidth=((4*stepMargin+minMargin)-metrics.width)/2;
	addHeight=((4*stepMargin+minMargin)-actualHeight)/2;
   ctx.fillText("YOU WIN!",addWidth,addHeight+actualHeight);
   
   
   
   
   

   
   
   
   
   
   
     ctx.font = 'bold 20px sans-serif'; 
	 
 
 metrics = ctx.measureText('try again');
 fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
 actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
   

ctx.fillStyle = "#8f7a66";

  roundRect(ctx,((4*stepMargin+minMargin)-metrics.width-30)/2, 220, metrics.width+30+((4*stepMargin+minMargin)-metrics.width-30)/2, actualHeight+15+220, 3);

ctx.fillStyle = "#f9f6f2";

   ctx.fillText("Try again",(((4*stepMargin+minMargin)-metrics.width-10)/2)+2,244);
   
   
   loseAnimation=1;
   
   elem=document.getElementById('canvasBody');

   btnXstart=((4*stepMargin+minMargin)-metrics.width-30)/2+elem.offsetLeft;
   btnXend=((4*stepMargin+minMargin)-metrics.width-30)/2+metrics.width+30+elem.offsetLeft;
   btnYstart=220+elem.offsetTop;
   btnYend=220+actualHeight+15+elem.offsetTop;
	 
	 
	 
	 
	 
	 
	 
 }