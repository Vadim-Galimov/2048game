


function drawScore() {
   
   ctx.clearRect(0, 0, canvasHead.width, canvasHead.height);
     ctxH.font = 'bold 35px sans-serif'; 
	 
 
 metrics = ctxH.measureText('SCORE:'+score);
 fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
 actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
   

ctxH.fillStyle='#bbada0';



   roundRect(ctxH,(((4*stepMargin+minMargin)-metrics.width-30)/2)-25, 20, metrics.width+(((4*stepMargin+minMargin)-metrics.width-30+10)/2)+25, actualHeight+15+30, 20);
  

   ctxH.strokeStyle = '#776e65';
   
 roundRectStroke(ctxH,(((4*stepMargin+minMargin)-metrics.width-30)/2)-25, 20, metrics.width+(((4*stepMargin+minMargin)-metrics.width-30+10)/2)+25, actualHeight+15+30, 20, 5);
 
ctxH.fillStyle = "#ebe4da";

   ctxH.fillText("SCORE: "+score,(((4*stepMargin+minMargin)-metrics.width-30)/2),55);
   
}  
 