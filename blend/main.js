
window.onload = function() {
    var width = 3000;
    var height = 2000;
    var canvas = $('#canvas');
    var context = canvas[0].getContext('2d');
    /* globalCompositeOperation :
  normal | multiply | screen | overlay |
  darken | lighten | color-dodge | color-burn | hard-light |
  soft-light | difference | exclusion | hue | saturation |
  color | luminosity
*/
    context.globalCompositeOperation = 'difference';
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image1');
    context.drawImage(image1, -3000/2, -2000/2, width, height);
    //context.drawImage(image2, -3000, -2010, width, height);


    var canvasOffset=$("#canvas").offset();
    var offsetX=canvasOffset.left;
    var offsetY=canvasOffset.top;
    var canvasWidth=canvas.width;
    var canvasHeight=canvas.height;
    var isDragging=false;

    function handleMouseDown(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // set the drag flag
        isDragging=true;
    }

    function handleMouseUp(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // clear the drag flag
        isDragging=false;
    }

    function handleMouseOut(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // user has left the canvas, so clear the drag flag
        //isDragging=false;
    }

    function handleMouseMove(e){
        canMouseX=parseInt(e.clientX-offsetX);
        canMouseY=parseInt(e.clientY-offsetY);
        // if the drag flag is set, clear the canvas and draw the image
        if(!isDragging){
            context.clearRect(0,0,canvasWidth,canvasHeight);
            context.drawImage(image2, canMouseX - 3000 /2, canMouseY - 2000/2, width, height);
        }
    }

    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});

}