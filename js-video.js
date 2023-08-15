number = 0;
id3= '';
texta = '';
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
    texta = "video-canada";
    gas3();
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
    texta = "video-japan";
    gas3();
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
function gas3(){
    dataaa = document.cookie;
    id=dataaa.indexOf("dataa=");
    if(id <0){
        console.log("cookie error")
        return;
    }
    id = parseInt(id)+6;
    id2=dataaa.indexOf("<>");
    id3 = dataaa.substring(id,id2);
    url="https://script.google.com/macros/s/AKfycbz3MOKot1jgJW-BI1uh_CG8M18d3I2GvATo8Oha_pIn0PyT5LYRqTyxuBPP7JSbfSAE/exec";
    data = [{
      "data1":id3,
      "data2":texta,
      "data3":"activity"
    }]
    params = {
      "method":"post",
      "mode":"no-cors",
      "Content-Type":"application/json",
      "body":JSON.stringify(data)
    }
    fetch(url,params);
  }