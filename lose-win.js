



function makeLose() {



	ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
	
ctx.fillRect(0, 0, fullSize, fullSize);

ctx.fillStyle = "#776e65";
		 ctx.font = 'bold 50px sans-serif';

 metrics = ctx.measureText('GAME OVER!');
fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


	 addWidth=(fullSize-metrics.width)/2;
	addHeight=(fullSize-actualHeight)/2;
   ctx.fillText("GAME OVER!",addWidth,addHeight+actualHeight);
   
   
   
   
   

   
   
   
   
   
   
     ctx.font = 'bold '+size/4+'px sans-serif'; 
	 
 
 metrics = ctx.measureText('try again');
 fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
 actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
   

ctx.fillStyle = "#8f7a66";
textWithMarginsWidth=metrics.width+textMargin;

   roundRect(ctx,(fullSize-textWithMarginsWidth)/2, 220, metrics.width+30+(fullSize-textWithMarginsWidth)/2, actualHeight+15+220, 3);


ctx.fillStyle = "#f9f6f2";

   ctx.fillText("Try again",((fullSize-metrics.width-10)/2)+2,244);
   
   
   buttonStatus=1;
   
   elem=document.getElementById('canvasBody');

   btnXstart=(fullSize-textWithMarginsWidth)/2+elem.offsetLeft;
   btnXend=(fullSize-textWithMarginsWidth)/2+metrics.width+30+elem.offsetLeft;
   btnYstart=220+elem.offsetTop;
   btnYend=220+actualHeight+15+elem.offsetTop;
   
}



 function checkLose() {

	 loseStatus=1;

	 if (cellArray.length<16) {
		  loseStatus=0;
		 return 0;
	 }

	 for (i1=0; i1<4; i1++) {
	 for (i=0; i<3; i++) {

		 	if (getCellFromNumber(downColumnArr[i1][i])?.value==getCellFromNumber(downColumnArr[i1][i+1])?.value) loseStatus=0;
		 
	 }
	 } 

	 for (i1=0; i1<4; i1++) {
	 for (i=0; i<3; i++) {

		 	if (getCellFromNumber(rightColumnArr[i1][i])?.value==getCellFromNumber(rightColumnArr[i1][i+1])?.value) loseStatus=0;
		 
	 }
	 } 


if (loseStatus==1) setTimeout(makeLose,turnTime);


	


 }
 
 
 function checkWin() {
	 valueArray=cellArray.map(function (item) {
		 return item.value;
		 
	 });
	 
	 
	if (valueArray.includes(2048)) winStatus=1;
	
	if(winStatus==1) setTimeout(makeWin,turnTime);;
	 
	 
 }
 
 
 function makeWin() {



	ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
ctx.fillRect(0, 0, fullSize, fullSize);

ctx.fillStyle = "#f9f6f2";
		 ctx.font = 'bold 50px sans-serif';

 metrics = ctx.measureText('YOU WIN!');
fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


	 addWidth=(fullSize-metrics.width)/2;
	addHeight=(fullSize-actualHeight)/2;
   ctx.fillText("YOU WIN!",addWidth,addHeight+actualHeight);
   
   
   
   
   

   
   
   
   
   
   
     ctx.font = 'bold 20px sans-serif'; 
	 
 
 metrics = ctx.measureText('try again');
 fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
 actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
   

ctx.fillStyle = "#8f7a66";
textWithMarginsWidth=metrics.width+textMargin;
  roundRect(ctx,(fullSize-textWithMarginsWidth)/2, 220, textWithMarginsWidth+(fullSize-textWithMarginsWidth)/2, actualHeight+15+220, 3);

ctx.fillStyle = "#f9f6f2";

   ctx.fillText("Try again",((fullSize-metrics.width-10)/2)+2,244);
   
   
   buttonStatus=1;
   
   elem=document.getElementById('canvasBody');

   btnXstart=(fullSize-textWithMarginsWidth)/2+elem.offsetLeft;
   btnXend=(fullSize-textWithMarginsWidth)/2+metrics.width+30+elem.offsetLeft;
   btnYstart=220+elem.offsetTop;
   btnYend=220+actualHeight+15+elem.offsetTop;
	 
	 
	 
	 
	 
	 
	 
 }