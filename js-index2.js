size = '';
anic = '';
ipad = '';
texta = '';
id3= '';
accessToken = '';
function start() {
    size = screen.width;
    document.getElementById("setimg").src = "https://matsuoka18.github.io/Canada-Photos/pic/Img999.JPG";
    document.getElementById("setimg2").src = "https://matsuoka18.github.io/Canada-Photos/pic2/img1029.jpg";
    document.getElementById("setimg3").src = "https://matsuoka18.github.io/Canada-Photos/pic/img953.jpg";
    /*for(var a =0; a<=135; a++){
        data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
        pics22p.insertAdjacentHTML('beforeend', data);
    }*/
}
function startc() {
    message2 = "canada";
    texta = "canada-pic";
    gas2();
    for (var a = 0; a <= 135; a++) {
        data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
        pics22p.insertAdjacentHTML('beforeend', data);
    }
    bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
    pics22p.insertAdjacentHTML('beforeend', bt);
    document.getElementById("pics22p").style.display = "none"
    document.getElementById("pics22p").style.opacity = 0
    scrollTo(0, 0);
}
function startj() {
    message2 = "japan";
    texta = "canada-pic";
    gas2();
    for (var a = 0; a <= 135; a++) {
        data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
        pics22pa.insertAdjacentHTML('beforeend', data);
    }
    bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
    pics22pa.insertAdjacentHTML('beforeend', bt);
    document.getElementById("pics22pa").style.display = "none"
    document.getElementById("pics22pa").style.opacity = 0
    scrollTo(0, 0);
}

function next1() {
    texta = "canada-pic";
    gas2();
    location.href = "canada-2.html";
}
function next2() {
    texta = "japan-pic";
    gas2();
    location.href = "japan-2.html"
}
function next3() {
    if (size < 760) {
        texta = "video";
        gas2();
        location.href = "video2.html";
    } else {
        location.href = "video.html";
    }
}
function test1() {
    document.getElementById("img").src = "https://matsuoka18.github.io/Canada-Photos/pic/img010.jpg";
}

/*document.getElementById("text").addEventListener('keyup', search);
document.getElementById("text2").addEventListener('keyup', search2);*/
function search() {
    text = document.getElementById("text").value;
    textlast = String(text).length
    console.log("log:" + textlast);
    if (textlast == 3) {
        console.log("search");
        text = "https://matsuoka18.github.io/Canada-Photos/https://matsuoka18.github.io/Canada-Photos/pic/img" + text + ".jpg";
        textt = text;
        document.getElementById("img").src = text;
        document.getElementById("down").style.display = "block";
        DownLoad();
    }
}

function search2() {
    text = document.getElementById("text2").value;
    textlast = String(text).length
    if (textlast > 1) {
        text2 = 100 - text;
        text2 = text2 / 2;
        text = text + "vw";
        text2 = text2 + "vw";
        document.getElementById("img").style.width = text;
        document.getElementById("img").style.marginRight = text2;
        document.getElementById("img").style.marginLeft = text2;
    }

}
function back() {
    document.cookie = "load=1; max-age=10";
    location.href = "index.html";
    del();
    document.getElementById("name").innerHTML = "";
    document.getElementById("namea").innerHTML = "";

}
function DownLoad() {
    document.getElementById("down2").href = textt;
    document.getElementById("down2").download = textt;
}
num = 0;
function search3() {
    anic = 0;
    num++;
    if (message2 == "canada") {
        if (num == 1) {
            document.getElementById("search2").style.display = "block";
            document.getElementById("search2").style.opacity = "1";
            //  document.getElementById("tables").style.display = "block";
            // document.getElementById("tables").style.opacity = "1";
        } else {
            document.getElementById("search2").style.display = "none";
            document.getElementById("search2").style.opacity = "0";
            document.getElementById("tables").style.display = "none";
            document.getElementById("tables").style.opacity = "0";
            num = 0;
        }
    } else if (message2 == "japan") {
        if (num == 1) {
            document.getElementById("search21").style.display = "block";
            document.getElementById("search21").style.opacity = "1";
            //  document.getElementById("tables").style.display = "block";
            // document.getElementById("tables").style.opacity = "1";
        } else {
            document.getElementById("search21").style.display = "none";
            document.getElementById("search21").style.opacity = "0";
            document.getElementById("tables22").style.display = "none";
            document.getElementById("tables22").style.opacity = "0";
            num = 0;
        }
    }

}
message = '';
function people() {

    message = "people";
    if (message2 == "canada") {
        document.getElementById("pics22p").style.display = "block"
        document.getElementById("pics22p").style.opacity = 1;
        document.getElementById("search2").style.display = "block";
        document.getElementById("search2").style.opacity = "1";
        num = 1;
        document.getElementById("tables").style.display = "block";
        document.getElementById("tables").style.opacity = "1";
        document.getElementById("search3").style.display = "block";
        document.getElementById("search3").style.opacity = "1";
        document.getElementById("span2").style.borderBottom = "1px solid white";
        document.getElementById("span2").style.paddingRight = "9.6vw";
        document.getElementById("search4").style.display = "none";
        document.getElementById("search4").style.opacity = "0";
        document.getElementById("search5").style.display = "none";
        document.getElementById("search5").style.opacity = "0";
        document.getElementById("span22").style.borderLeft = "0.4vw solid white";
        document.getElementById("span22").style.borderBottom = "0vw solid white";
        document.getElementById("span22").style.paddingRight = "0px";
        document.getElementById("span222").style.borderLeft = "0.4vw solid white";
        document.getElementById("span222").style.borderBottom = "0vw solid white"
        document.getElementById("span222").style.paddingRight = "0px";
    } else {
        document.getElementById("pics22pa").style.display = "block"
        document.getElementById("pics22pa").style.opacity = 1;
        document.getElementById("search21").style.display = "block";
        document.getElementById("search21").style.opacity = "1";
        num = 1;
        document.getElementById("tables22").style.display = "block";
        document.getElementById("tables22").style.opacity = "1";
        document.getElementById("search33").style.display = "block";
        document.getElementById("search33").style.opacity = "1";
        document.getElementById("span21").style.borderBottom = "1px solid white";
        document.getElementById("span21").style.paddingRight = "9.6vw";
        document.getElementById("search44").style.display = "none";
        document.getElementById("search44").style.opacity = "0";
        document.getElementById("search55").style.display = "none";
        document.getElementById("search55").style.opacity = "0";
        document.getElementById("span221").style.borderLeft = "0.4vw solid white";
        document.getElementById("span221").style.borderBottom = "0vw solid white";
        document.getElementById("span221").style.paddingRight = "0px";
        document.getElementById("span2221").style.borderLeft = "0.4vw solid white";
        document.getElementById("span2221").style.borderBottom = "0vw solid white"
        document.getElementById("span2221").style.paddingRight = "0px";
    }
}
function place() {

    message = "place";
    if (message2 == "canada") {
        document.getElementById("pics22p").style.display = "block"
        document.getElementById("pics22p").style.opacity = 1;
        document.getElementById("search2").style.display = "block";
        document.getElementById("search2").style.opacity = "1";
        num = 1;
        document.getElementById("tables").style.display = "block";
        document.getElementById("tables").style.opacity = "1";
        document.getElementById("search3").style.display = "none";
        document.getElementById("search3").style.opacity = "0";
        document.getElementById("search4").style.display = "block";
        document.getElementById("search4").style.opacity = "1";
        document.getElementById("span22").style.borderBottom = "1px solid white";
        document.getElementById("span22").style.paddingRight = "9.6vw";
        document.getElementById("search5").style.display = "none";
        document.getElementById("search5").style.opacity = "0";
        document.getElementById("span2").style.borderLeft = "0.4vw solid white";
        document.getElementById("span2").style.borderBottom = "none";
        document.getElementById("span2").style.paddingRight = "0";
        document.getElementById("span222").style.borderLeft = "0.4vw solid white";
        document.getElementById("span222").style.borderBottom = "none";
        document.getElementById("span222").style.paddingRight = "0";
    } else {
        document.getElementById("pics22pa").style.display = "block"
        document.getElementById("pics22pa").style.opacity = 1;
        document.getElementById("search21").style.display = "block";
        document.getElementById("search21").style.opacity = "1";
        num = 1;
        document.getElementById("tables22").style.display = "block";
        document.getElementById("tables22").style.opacity = "1";
        document.getElementById("search33").style.display = "none";
        document.getElementById("search33").style.opacity = "0";
        document.getElementById("search44").style.display = "block";
        document.getElementById("search44").style.opacity = "1";
        document.getElementById("span221").style.borderBottom = "1px solid white";
        document.getElementById("span221").style.paddingRight = "9.6vw";
        document.getElementById("search55").style.display = "none";
        document.getElementById("search55").style.opacity = "0";
        document.getElementById("span21").style.borderLeft = "0.4vw solid white";
        document.getElementById("span21").style.borderBottom = "none";
        document.getElementById("span21").style.paddingRight = "0";
        document.getElementById("span2221").style.borderLeft = "0.4vw solid white";
        document.getElementById("span2221").style.borderBottom = "none";
        document.getElementById("span2221").style.paddingRight = "0";
    }
}
function other() {

    message = "other";
    if (message2 == "canada") {
        document.getElementById("pics22p").style.display = "block"
        document.getElementById("pics22p").style.opacity = 1;
        document.getElementById("search2").style.display = "block";
        document.getElementById("search2").style.opacity = "1";
        num = 1;
        document.getElementById("tables").style.display = "block";
        document.getElementById("tables").style.opacity = "1";
        document.getElementById("search3").style.display = "none";
        document.getElementById("search3").style.opacity = "0"
        document.getElementById("search4").style.display = "none";
        document.getElementById("search4").style.opacity = "0";
        document.getElementById("search5").style.display = "block";
        document.getElementById("search5").style.opacity = "1";
        document.getElementById("span222").style.borderBottom = "1px solid white";
        document.getElementById("span222").style.paddingRight = "9.6vw";
        document.getElementById("span2").style.borderLeft = "0.4vw solid white";
        document.getElementById("span2").style.borderBottom = "none";
        document.getElementById("span2").style.paddingRight = "0";
        document.getElementById("span22").style.borderLeft = "0.4vw solid white";
        document.getElementById("span22").style.borderBottom = "none";
        document.getElementById("span22").style.paddingRight = "0";
    } else {
        document.getElementById("pics22pa").style.display = "block"
        document.getElementById("pics22pa").style.opacity = 1;
        document.getElementById("search21").style.display = "block";
        document.getElementById("search21").style.opacity = "1";
        num = 1;
        document.getElementById("tables22").style.display = "block";
        document.getElementById("tables22").style.opacity = "1";
        document.getElementById("search33").style.display = "none";
        document.getElementById("search33").style.opacity = "0"
        document.getElementById("search44").style.display = "none";
        document.getElementById("search44").style.opacity = "0";
        document.getElementById("search55").style.display = "block";
        document.getElementById("search55").style.opacity = "1";
        document.getElementById("span2221").style.borderBottom = "1px solid white";
        document.getElementById("span2222").style.paddingRight = "9.6vw";
        document.getElementById("span21").style.borderLeft = "0.4vw solid white";
        document.getElementById("span21").style.borderBottom = "none";
        document.getElementById("span21").style.paddingRight = "0";
        document.getElementById("span221").style.borderLeft = "0.4vw solid white";
        document.getElementById("span221").style.borderBottom = "none";
        document.getElementById("span221").style.paddingRight = "0";
    }
}
function del() {
    document.getElementById("backk").remove();
    document.getElementById("ims0").remove();
    document.getElementById("ims1").remove();
    document.getElementById("ims2").remove();
    document.getElementById("ims3").remove();
    document.getElementById("ims4").remove();
    document.getElementById("ims5").remove();
    document.getElementById("ims6").remove();
    document.getElementById("ims7").remove();
    document.getElementById("ims8").remove();
    document.getElementById("ims9").remove();
    document.getElementById("ims10").remove();
    document.getElementById("ims11").remove();
    document.getElementById("ims12").remove();
    document.getElementById("ims13").remove();
    document.getElementById("ims14").remove();
    document.getElementById("ims15").remove();
    document.getElementById("ims16").remove();
    document.getElementById("ims17").remove();
    document.getElementById("ims18").remove();
    document.getElementById("ims19").remove();
    document.getElementById("ims20").remove();
    document.getElementById("ims21").remove();
    document.getElementById("ims22").remove();
    document.getElementById("ims23").remove();
    document.getElementById("ims24").remove();
    document.getElementById("ims25").remove();
    document.getElementById("ims26").remove();
    document.getElementById("ims27").remove();
    document.getElementById("ims28").remove();
    document.getElementById("ims29").remove();
    document.getElementById("ims30").remove();
    document.getElementById("ims31").remove();
    document.getElementById("ims32").remove();
    document.getElementById("ims33").remove();
    document.getElementById("ims34").remove();
    document.getElementById("ims35").remove();
    document.getElementById("ims36").remove();
    document.getElementById("ims37").remove();
    document.getElementById("ims38").remove();
    document.getElementById("ims39").remove();
    document.getElementById("ims40").remove();
    document.getElementById("ims41").remove();
    document.getElementById("ims42").remove();
    document.getElementById("ims43").remove();
    document.getElementById("ims44").remove();
    document.getElementById("ims45").remove();
    document.getElementById("ims46").remove();
    document.getElementById("ims47").remove();
    document.getElementById("ims48").remove();
    document.getElementById("ims49").remove();
    document.getElementById("ims50").remove();
    document.getElementById("ims51").remove();
    document.getElementById("ims52").remove();
    document.getElementById("ims53").remove();
    document.getElementById("ims54").remove();
    document.getElementById("ims55").remove();
    document.getElementById("ims56").remove();
    document.getElementById("ims57").remove();
    document.getElementById("ims58").remove();
    document.getElementById("ims59").remove();
    document.getElementById("ims60").remove();
    document.getElementById("ims61").remove();
    document.getElementById("ims62").remove();
    document.getElementById("ims63").remove();
    document.getElementById("ims64").remove();
    document.getElementById("ims65").remove();
    document.getElementById("ims66").remove();
    document.getElementById("ims67").remove();
    document.getElementById("ims68").remove();
    document.getElementById("ims69").remove();
    document.getElementById("ims70").remove();
    document.getElementById("ims71").remove();
    document.getElementById("ims72").remove();
    document.getElementById("ims73").remove();
    document.getElementById("ims74").remove();
    document.getElementById("ims75").remove();
    document.getElementById("ims76").remove();
    document.getElementById("ims77").remove();
    document.getElementById("ims78").remove();
    document.getElementById("ims79").remove();
    document.getElementById("ims80").remove();
    document.getElementById("ims81").remove();
    document.getElementById("ims82").remove();
    document.getElementById("ims83").remove();
    document.getElementById("ims84").remove();
    document.getElementById("ims85").remove();
    document.getElementById("ims86").remove();
    document.getElementById("ims87").remove();
    document.getElementById("ims88").remove();
    document.getElementById("ims89").remove();
    document.getElementById("ims90").remove();
    document.getElementById("ims91").remove();
    document.getElementById("ims92").remove();
    document.getElementById("ims93").remove();
    document.getElementById("ims94").remove();
    document.getElementById("ims95").remove();
    document.getElementById("ims96").remove();
    document.getElementById("ims97").remove();
    document.getElementById("ims98").remove();
    document.getElementById("ims99").remove();
    document.getElementById("ims100").remove();
    document.getElementById("ims101").remove();
    document.getElementById("ims102").remove();
    document.getElementById("ims103").remove();
    document.getElementById("ims104").remove();
    document.getElementById("ims105").remove();
    document.getElementById("ims106").remove();
    document.getElementById("ims107").remove();
    document.getElementById("ims108").remove();
    document.getElementById("ims109").remove();
    document.getElementById("ims110").remove();
    document.getElementById("ims111").remove();
    document.getElementById("ims112").remove();
    document.getElementById("ims113").remove();
    document.getElementById("ims114").remove();
    document.getElementById("ims115").remove();
    document.getElementById("ims116").remove();
    document.getElementById("ims117").remove();
    document.getElementById("ims118").remove();
    document.getElementById("ims119").remove();
    document.getElementById("ims120").remove();
    document.getElementById("ims121").remove();
    document.getElementById("ims122").remove();
    document.getElementById("ims123").remove();
    document.getElementById("ims124").remove();
    document.getElementById("ims125").remove();
    document.getElementById("ims126").remove();
    document.getElementById("ims127").remove();
    document.getElementById("ims128").remove();
    document.getElementById("ims129").remove();
    document.getElementById("ims130").remove();
    document.getElementById("ims131").remove();
    document.getElementById("ims132").remove();
    document.getElementById("ims133").remove();
    document.getElementById("ims134").remove();
    document.getElementById("ims135").remove();
}
pushnum = 1;

function ani() {
    anic++;
    if (anic == 1) {
        document.getElementById("ld").style.display = "block"
    } else {
        anic = 0;
        document.getElementById("ld").style.display = "none"
    }
}
function p1() {
    ani();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }


    del();
    if (message == "people") {
        if (message2 == "canada") {
            texta = "aaron";
            gas2();
            document.getElementById("name").innerHTML = "Aaron";
            dataa = [19, 396, 716, 753, 782, 802, 870, 941];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }

            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);

        } else if (message2 == "japan") {
            /*document.getElementById("namea").innerHTML = "Ao";
 dataa = []
 last = dataa.length;
 te = "Total:"+last;
 document.getElementById("suma").innerHTML = te;
 console.log("last:"+last);
 for (var a = 0; a < last; a++) {
     num = dataa[a];
     console.log("datal:"+num);
     numl = String(num).length;
     console.log("numl:"+numl);
     if (numl== 1) {
         num = "00" + String(num);
         console.log("newnum:"+num);
     } else if (numl== 2) {
         num = "0" + String(num);
         console.log("newnum:"+num);
     }
     if(num < 984){
     num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
     }else{
         num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
     }
     data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
     pics22pa.insertAdjacentHTML('beforeend', data);
 }
 if(last <135){
     for(var a = last; a<=135; a++){
         data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
         pics22pa.insertAdjacentHTML('beforeend', data);
     }
 }*/
            alert("No data")
            for (var a = 0; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }

    } else if (message == "place") {
        if (message2 == "canada") {
            texta = "house";
            gas2();
            document.getElementById("name").innerHTML = "House";
            dataa = [132, 216, 247, 299, 341, 402, 447, 449, 450, 458, 459, 460, 461, 462, 600, 749, 754, 785, 787];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }

            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);

        } else if (message2 == "japan") {
            /*  document.getElementById("namea").innerHTML = "House";
   dataa = []

   last = dataa.length;
   te = "Total:"+last;
   document.getElementById("suma").innerHTML = te;
   console.log("last:"+last);
   for (var a = 0; a < last; a++) {
       num = dataa[a];
       console.log("datal:"+num);
       numl = String(num).length;
       console.log("numl:"+numl);
       if (numl== 1) {
           num = "00" + String(num);
           console.log("newnum:"+num);
       } else if (numl== 2) {
           num = "0" + String(num);
           console.log("newnum:"+num);
       }
                   if(num < 984){
   num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
   }else{
       num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
   }
       data = "<img src=" + "\"" + num + "\"" + "id="+"\""+"ims"+a+"\""+">";
       pics22pa.insertAdjacentHTML('beforeend', data);
   }
   if(last <135){
       for(var a = last; a<=135; a++){
           data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
           pics22pa.insertAdjacentHTML('beforeend', data);
       }
   }
}*/
            alert("No data");
            for (var a = 0; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);

        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        data = [];
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p2() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        if (message2 == "canada") {
            texta = "ao";
            gas2();
            document.getElementById("name").innerHTML = "Ao";
            dataa = [2, 4, 7, 9, 13, 19, 29, 33, 53, 59, 63, 68, 74, 80, 93, 94, 95, 105, 114, 116, 123, 124, 127, 133, 138, 154, 157, 158, 162, 163, 170, 196, 197, 200, 202, 209, 228, 234, 238, 252, 255, 259, 266, 268, 270, 274, 283, 295, 310, 313, 314, 327, 349, 350, 354, 355, 356, 379, 381, 416, 427, 429, 431, 493, 587, 598, 608, 609, 611, 635, 643, 650, 664, 677, 685, 688, 691, 694, 701, 737, 741, 744, 770, 781, 803, 808, 823, 830, 871, 884, 888, 898, 899, 902, 905, 906, 911, 923, 929, 942, 945, 946, 948, 950, 952, 956, 957, 958, 962, 965, 969, 977, 980];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);

        } else if (message2 == "japan") {
            texta = "aoto:jp";
            gas2();
            document.getElementById("namea").innerHTML = "Aoto";
            dataa = [1027, 1028, 1055, 1058, 1064];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);

        }
    } else if (message == "place") {
        if (message2 == "canada") {
            texta = "ghs";
            gas2();
            document.getElementById("name").innerHTML = "GHS";
            dataa = [87, 469, 470, 471, 475, 476, 477, 481, 482, 483, 484, 485];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "yokohama";
            gas2();
            document.getElementById("namea").innerHTML = "Yokohama";
            dataa = [987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999,];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "other") {
        texta = "cycling";
        gas2();
        document.getElementById("name").innerHTML = "Cycling";
        dataa = [119, 362, 674, 924];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p3() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        if (message2 == "canada") {
            texta = "aoto";
            gas2();
            document.getElementById("name").innerHTML = "Aoto";
            dataa = [19, 55, 74, 105, 108, 114, 116, 143, 150, 157, 163, 170, 180, 192, 252, 268, 300, 348, 365, 380, 427, 428, 493, 497, 498, 592, 632, 661, 676, 677, 721, 750, 775, 782, 951];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "brandon:jp";
            gas2();
            document.getElementById("namea").innerHTML = "Brandon";
            dataa = [992, 996, 997, 1059, 1061, 1063]
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "place") {
        if (message2 == "canada") {
            texta = "science";
            gas2();
            document.getElementById("name").innerHTML = "Science .M";
            dataa = [540, 541, 542, 543, 544, 545, 546, 547];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "nissan";
            gas2();
            document.getElementById("namea").innerHTML = "Nissan Head Office";
            dataa = [993, 994, 995, 996, 997, 998, 999];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "other") {
        texta = "cats";
        gas2();
        document.getElementById("name").innerHTML = "Cats and Dogs";
        dataa = [23, 52, 101, 112, 134, 140, 171, 187, 189, 194, 195, 215, 233, 261, 280, 301, 317, 318, 391, 448, 450, 508, 509, 510, 523, 524, 525, 534, 535, 536, 537, 538, 539, 548, 549, 550, 551, 552, 554, 556, 557, 558, 559, 560, 562, 591, 624, 671, 675, 681, 736, 811, 834, 854, 872, 908, 919, 953, 955];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p4() { //処理の見直しが必要かも　7月31日
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        if (message2 == "canada") {
            texta = "brandon";
            gas2();
            document.getElementById("name").innerHTML = "Brandon";
            dataa = [3, 36, 59, 65, 74, 80, 88, 89, 117, 163, 170, 186, 190, 196, 230, 234, 235, 252, 268, 293, 294, 309, 311, 335, 373, 410, 482, 603, 610, 628, 654, 715, 744, 808, 831, 879, 928, 931];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "colin:jp";
            gas2();
            document.getElementById("namea").innerHTML = "Colin";
            dataa = [19, 36, 80, 173, 196, 234, 266, 293, 297, 303, 373, 482, 695, 700, 701, 721, 744, 831];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "place") {
        if (message2 == "canada") {
            alert("No data");
            for (var a = 0; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        } else if (message2 == "japan") {
            texta = "akihabara";
            gas2();
            document.getElementById("namea").innerHTML = "Akihabara";
            dataa = [1040, 1039, 1038, 1037, 1036, 1035, 1034, 1033, 1032, 1031, 1030, 1029]
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }

    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p5() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }

    if (message == "people") {
        if (message2 == "canada") {
            texta = "colin";
            gas2();
            document.getElementById("name").innerHTML = "Colin";
            dataa = [19, 36, 80, 173, 196, 234, 266, 293, 303, 373, 482, 695, 700, 701, 721, 744, 831];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "ethan";
            gas2();
            document.getElementById("namea").innerHTML = "Ethan";
            dataa = [1006, 1007, 1010, 1015, 1016, 1017, 1021, 1022, 1023, 1035, 1040, 1058]
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "place") {
        if (message2 == "canada") {
            alert("No data");
            for (var a = 0; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "kokkai";
            gas2();
            document.getElementById("namea").innerHTML = "House of Parliament";
            dataa = [1002, 1003, 1004, 1005, 1006, 1007, 1001, 1008, 1066, 1067, 1068, 1069, 1070];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            //表示処理なし
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    }
    //May be mistaked
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p6() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "kota";
        gas2();
        document.getElementById("name").innerHTML = "Kota";
        dataa = [440, 632, 816];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "place") {
        if (message2 == "canada") {
            texta = "ice";
            gas2();
            document.getElementById("name").innerHTML = "Ice Hockey";
            dataa = [35, 103, 231, 248, 272, 320, 322, 344, 385, 403, 426, 466, 467, 468, 607, 649, 730, 752, 839, 841];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "museum";
            gas2();
            document.getElementById("namea").innerHTML = "Museums";
            dataa = [1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025]
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22pa.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p7() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "rui";
        gas2();
        document.getElementById("name").innerHTML = "Rui";
        dataa = [19, 144, 178, 256, 266, 296, 409, 425, 644, 680, 721, 815, 905, 965, 986];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "place") {
        if (message2 == "canada") {
            texta = "pink";
            gas2();
            document.getElementById("name").innerHTML = "Pink .L";
            dataa = [25, 36, 37, 40, 43, 50, 53, 71, 169, 214, 244, 249, 284, 289, 298, 319, 359, 404, 422, 456, 626, 664, 717, 735, 766, 767, 776, 790, 805, 840, 880, 895, 896, 915, 939, 968];
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("sum").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a] - 1;
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22p.insertAdjacentHTML('beforeend', bt);
        } else if (message2 == "japan") {
            texta = "shinjuku";
            gas2();
            document.getElementById("namea").innerHTML = "Shinjuku";
            dataa = [];
            for (var a = 1041; a <= 1057; a++) {
                dataa.push(a);
            }
            last = dataa.length;
            te = "Total:" + last;
            document.getElementById("suma").innerHTML = te;
            console.log("last:" + last);
            for (var a = 0; a < last; a++) {
                num = dataa[a];
                console.log("datal:" + num);
                numl = String(num).length;
                console.log("numl:" + numl);
                if (numl == 1) {
                    num = "00" + String(num);
                    console.log("newnum:" + num);
                } else if (numl == 2) {
                    num = "0" + String(num);
                    console.log("newnum:" + num);
                }
                if (num < 984) {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
                } else {
                    num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
                }
                data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22pa.insertAdjacentHTML('beforeend', data);
            }
            if (last < 135) {
                for (var a = last; a <= 135; a++) {
                    data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                    pics22p.insertAdjacentHTML('beforeend', data);
                }
            }
            bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
            pics22pa.insertAdjacentHTML('beforeend', bt);
        }

    } else if (message == "other") {
        alert("No data")
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p8() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "shogo";
        gas2();
        document.getElementById("name").innerHTML = "Shogo";
        dataa = [3, 6, 19, 65, 74, 89, 100, 159, 163, 170, 237, 252, 266, 268, 286, 300, 348, 358, 365, 401, 410, 604, 611, 745, 769, 775, 780, 813, 876, 974];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "place") {
        texta = "ottawa";
        gas2();
        document.getElementById("name").innerHTML = "Ottawa .D";
        dataa = [14, 24, 27, 31, 39, 48, 49, 51, 54, 70, 75, 94, 105, 116, 131, 141, 142, 151, 161, 168, 182, 201, 203, 204, 210, 213, 219, 221, 222, 232, 278, 281, 288, 290, 315, 325, 333, 345, 351, 364, 372, 373, 374, 383, 386, 394, 395, 396, 397, 398, 399, 405, 408, 427, 457, 464, 499, 500, 501, 502, 503, 504, 505, 506, 586, 597, 606, 615, 616, 617, 623, 625, 635, 637, 642, 662, 687, 704, 779, 800, 812, 836, 844, 881, 887, 913, 938, 941, 971];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p9() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "shun";
        gas2();
        document.getElementById("name").innerHTML = "Shun";
        dataa = [6, 8, 9, 13, 15, 19, 33, 43, 58, 63, 67, 74, 80, 95, 97, 99, 109, 114, 116, 120, 126, 133, 158, 163, 170, 193, 197, 225, 228, 235, 252, 253, 259, 262, 265, 268, 274, 293, 300, 303, 306, 321, 323, 331, 348, 356, 365, 369, 376, 379, 392, 396, 409, 414, 416, 427, 428, 588, 599, 610, 627, 643, 652, 657, 663, 664, 669, 677, 688, 700, 711, 737, 741, 744, 746, 769, 770, 773, 775, 778, 780, 794, 823, 831, 838, 842, 843, 846, 849, 861, 863, 876, 884, 902, 903, 904, 905, 914, 929, 930, 941, 942, 952, 957, 961, 964, 965, 975];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "place") {
        texta = "montreal";
        gas2();
        document.getElementById("name").innerHTML = "Montreal";
        dataa = [5, 10, 11, 12, 17, 20, 21, 28, 30, 32, 34, 38, 46, 57, 60, 61, 64, 66, 98, 107, 115, 129, 145, 146, 148, 155, 156, 165, 174, 176, 177, 185, 199, 205, 206, 218, 220, 224, 226, 229, 239, 245, 264, 269, 271, 279, 304, 307, 312, 332, 336, 346, 347, 353, 360, 366, 368, 387, 389, 393, 400, 411, 413, 420, 421, 432, 514, 515, 516, 517, 518, 519, 590, 595, 613, 618, 619, 620, 633, 639, 640, 648, 653, 666, 673, 678, 679, 684, 698, 702, 705, 714, 731, 732, 733, 748, 753, 757, 765, 771, 772, 791, 792, 809, 810, 817, 820, 821, 824, 826, 827, 837, 847, 848, 852, 856, 859, 862, 877, 878, 886, 910, 912, 918, 921, 926, 933, 934, 943, 954, 959, 967, 970, 981, 985];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "other") {
        alert("No data")
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p10() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "shuwa";
        gas2();
        document.getElementById("name").innerHTML = "Shuwa";
        dataa = [42, 88, 144, 197, 228, 381, 409, 412, 604, 644, 663, 801, 815, 816, 823, 846, 879, 905, 928, 942, 944, 948, 965, 972];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "place") {
        texta = "airport";
        gas2();
        document.getElementById("name").innerHTML = "Air Port";
        dataa = [436, 437, 438, 439, 440, 441, 442, 443, 579, 580, 581, 583, 584, 585];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "other") {
        alert("No data")
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p11() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "taisei";
        gas2();
        document.getElementById("name").innerHTML = "Taisei";
        dataa = [9, 22, 67, 95, 123, 137, 144, 197, 217, 228, 253, 262, 265, 381, 409, 440, 622, 630, 644, 663, 709, 711, 724, 758, 786, 815, 823, 835, 846, 863, 866, 867, 869, 882, 893, 903, 905, 923, 929, 932, 940, 942, 948, 965, 982, 984];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "place") {
        texta = "other";
        gas2();
        document.getElementById("name").innerHTML = "Other";
        dataa = [16, 18, 26, 41, 69, 73, 79, 90, 110, 118, 119, 125, 149, 153, 175, 184, 223, 240, 241, 258, 267, 287, 324, 330, 340, 352, 362, 388, 444, 451, 452, 453, 454, 463, 465, 473, 474, 478, 479, 480, 511, 512, 522, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 577, 578, 594, 614, 621, 660, 674, 683, 703, 738, 747, 756, 784, 793, 818, 819, 829, 832, 833, 845, 853, 860, 873, 874, 875, 891, 892, 907, 916, 922, 924, 925, 935, 937, 947, 976];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
function p12() {
    ani();
    del();
    if (message2 == "canada") {
        document.getElementById("search2").style.display = "none";
        document.getElementById("search2").style.opacity = "0";
        document.getElementById("tables").style.display = "none";
        document.getElementById("tables").style.opacity = "0";
        document.getElementById("pics2").style.display = "none";
        document.getElementById("pics2").style.opacity = "0";
        document.getElementById("pics22").style.display = "block";
        document.getElementById("pics22").style.opacity = "1";
    } else if (message2 == "japan") {
        document.getElementById("search21").style.display = "none";
        document.getElementById("search21").style.opacity = "0";
        document.getElementById("tables22").style.display = "none";
        document.getElementById("tables22").style.opacity = "0";
        document.getElementById("pics2a").style.display = "none";
        document.getElementById("pics2a").style.opacity = "0";
        document.getElementById("pics22a").style.display = "block";
        document.getElementById("pics22a").style.opacity = "1";
    }
    if (message == "people") {
        texta = "yuki";
        gas2();
        document.getElementById("name").innerHTML = "Yuki";
        dataa = [482, 632, 816];
        last = dataa.length;
        te = "Total:" + last;
        document.getElementById("sum").innerHTML = te;
        console.log("last:" + last);
        for (var a = 0; a < last; a++) {
            num = dataa[a] - 1;
            console.log("datal:" + num);
            numl = String(num).length;
            console.log("numl:" + numl);
            if (numl == 1) {
                num = "00" + String(num);
                console.log("newnum:" + num);
            } else if (numl == 2) {
                num = "0" + String(num);
                console.log("newnum:" + num);
            }
            if (num < 984) {
                num = "https://matsuoka18.github.io/Canada-Photos/pic/img" + num + ".jpg";
            } else {
                num = "https://matsuoka18.github.io/Canada-Photos/pic2/img" + num + ".jpg";
            }
            data = "<img src=" + "\"" + num + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        if (last < 135) {
            for (var a = last; a <= 135; a++) {
                data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
                pics22p.insertAdjacentHTML('beforeend', data);
            }
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "place") {
        document.getElementById("name").innerHTML = "House";
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    } else if (message == "other") {
        document.getElementById("name").innerHTML = "Bowling";
        for (var a = 0; a <= 135; a++) {
            data = "<img src=" + "\"" + "\"" + "id=" + "\"" + "ims" + a + "\"" + ">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }
        bt = "<div class=" + "\"" + "back" + "\"" + "id=" + "\"" + "backk" + "\"" + "onclick=" + "\"" + "back()" + "\"" + ">back</div>";
        pics22p.insertAdjacentHTML('beforeend', bt);
    }
    lt = "ims" + last;
    btm = document.getElementById(lt).getBoundingClientRect().bottom;
    btm2 = document.getElementById("ims135").getBoundingClientRect().bottom;
    btn = parseInt(btm2) - parseInt(btm) + "px";
    document.getElementById("backk").style.position = "relative";
    document.getElementById("backk").style.bottom = btn;
    ani();
}
document.getElementById("image-input").addEventListener('change', write);
function write() {
    alert("File is ready");
    fetch('https://ipinfo.io?callback')
        .then(res => res.json())
        .then(json => next(json.ip))
    url="https://script.google.com/macros/s/AKfycbz3MOKot1jgJW-BI1uh_CG8M18d3I2GvATo8Oha_pIn0PyT5LYRqTyxuBPP7JSbfSAE/exec";
fetch(url,{
    "method":"GET",
    "mode":"cors"
    })
    .then(response =>{
      if(response.ok){
        return response.json();
        }
      })
      .then(resJson =>{
          accessToken = resJson[0];
})
            }
function next(json) {
    ipad = json;
}
fileName = '';
async function uploadImage() {
    texta = "file upload";
    gas2();
    const fileInput = document.getElementById('image-input');
    const file = fileInput.files[0];

    if (!file) {
        alert('画像ファイルを選択してください');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (event) {
        const imageData = event.target.result;
        fileName = file.name;

        const uploadUrl = `https://api.github.com/repos/canada-japan/datas/contents/${fileName}`;
        
        //最新コード8月15日
        const uploadData = {
            message: '画像のアップロード',
            content: imageData.split(',')[1],
        };

        try {
            const response = await fetch(uploadUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify(uploadData),
            });

            if (response.ok) {
                alert('File is Uploaded');
                $.ajax({
                    url: "https://maker.ifttt.com/trigger/hello/with/key/c_vpO05zoegXWA3suVbXNy",
                    type: "POST",
                    data: { value1: fileName, value2: ipad },
                    complete: function () { alert("更新まで最大24時間かかります") }
                })
            } else {
                alert('Faild...');
            }
        } catch (error) {
            console.error('ネットワークエラー:', error);
        }
    };

    reader.readAsDataURL(file);
}
function send() {
    texta = "message";
    gas2();
    data = "メッセージ：" + document.getElementById("co").value;
    $.ajax({
        url: "https://maker.ifttt.com/trigger/hello/with/key/c_vpO05zoegXWA3suVbXNy",
        type: "POST",
        data: { value1: data, value2: ipad },
        complete: function () { alert("送信しました") }
    })
}
function gas2(){
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
