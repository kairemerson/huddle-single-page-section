let img = document.getElementById("bg-desktop")

window.onresize = function(){
    loadImg()
}

window.onload = function(){
    loadImg()
}

function loadImg(){
    if(screen.availWidth < 760){
        img.src = "./images/bg-mobile.svg"
    }else{
        img.src = "./images/bg-desktop.svg"
    }
}