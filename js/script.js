let img = document.getElementById("bg-desktop")

window.onresize = function(){
    img.src = "./images/bg-mobile.svg"
    if(screen.availWidth < 760){
    }else{
        img.src = "./images/bg-desktop.svg"
    }
}

window.onload = function(){
    if(screen.availWidth < 760){
        img.src = "./images/bg-mobile.svg"
    }else{
        img.src = "./images/bg-desktop.svg"
    }
}