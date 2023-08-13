number = 0;
function start(){
    size = screen.width;
    console.log("size:" + size);
    if (size < 760) {

        location.href = "video2.html";
        number = 2;
    } else {
      return;
    }
}

function start2(){
    document.getElementById("div11").style.display="none";
    document.getElementById("div11").style.opacity=0;
    document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.opacity=1;
}
function start3(){
    document.getElementById("p1").style.fontWeight = "600";
    document.getElementById("p2").style.fontWeight = "500";
    document.getElementById("div11").style.display="none";
    document.getElementById("div11").style.opacity=0;
    document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.opacity=1;
}
function start4(){
    document.getElementById("p2").style.fontWeight = "600";
    document.getElementById("p1").style.fontWeight = "500";
    document.getElementById("div11").style.display="none";
    document.getElementById("div11").style.opacity=0;
    document.getElementById("div1").style.display="flex";
    document.getElementById("div1").style.opacity=1;
}
function pp11(){
    document.getElementById("p1").style.fontWeight = "600";
    document.getElementById("p2").style.fontWeight = "500";
    size = screen.width;
    if(size < 760){
        location.href="canada2.html";
    }else{
        document.getElementById("ca").style.display = "block";
        document.getElementById("ca").style.opacity = 1;
        document.getElementById("jp").style.display = "none"
        document.getElementById("jp").style.opacity = 0;
    }
    
}
function pp22(){
    document.getElementById("p2").style.fontWeight = "600";
    document.getElementById("p1").style.fontWeight = "500";
        size = screen.width;
    if(size < 760){
        location.href="japan2.html";
    }else{
        document.getElementById("ca").style.display = "none";
        document.getElementById("ca").style.opacity = 0;
        document.getElementById("jp").style.display = "block"
        document.getElementById("jp").style.opacity = 1;
    }
}