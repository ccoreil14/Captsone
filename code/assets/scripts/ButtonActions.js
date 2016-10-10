var arrowIsVisible = true;



function toggleDynSizePrism(){
    if(arrowIsVisible === false){
        document.getElementById("toggleBtn").innerText = "Arrows Off";
        for(i = 0; i <3; i++){
            arrows[i].visible = true;
        }
        lineX.visible = true;
        lineY.visible = true;
        lineZ.visible = true;
        arrowIsVisible = true;
    }else{
        document.getElementById("toggleBtn").innerText = "Arrows On";
        for(i = 0; i <3; i++){
            arrows[i].visible = false;
        }
        lineX.visible = false;
        lineY.visible = false;
        lineZ.visible = false;
        arrowIsVisible = false;    
    }
}


function toggleDynSizeRect(){
    if(arrowIsVisible === false){
        document.getElementById("toggleBtn").innerText = "Arrows Off";
        for(i = 0; i <2; i++){
            arrows[i].visible = true;
        }
        lineX.visible = true;
        lineY.visible = true;
        arrowIsVisible = true;
    }else{
        document.getElementById("toggleBtn").innerText = "Arrows On";
        for(i = 0; i <2; i++){
            arrows[i].visible = false;
        }
        lineX.visible = false;
        lineY.visible = false;
        arrowIsVisible = false;    
    }
}