function starta(){
  cookie = document.cookie;
  cookie = cookie.indexOf("load=1");
  if(cookie == -1){
    start();
    $("#pic").animate({
      'opacity':1,
    },{
        'duration':1000
    })
    $("#pic").animate({
        'opacity':1,
      },{
          'duration':2000
      })
    $("#pic").animate({
        'top':'0vh'
      },{
          'duration':1500
      })
setTimeout(()=>{
    $("#p1").animate({
        'top':'30vh',
        'left':'0'
      },{
          'duration':0
      })
      $("#p2").animate({
        'top':'37.5vh',
        'left':'0'
      },{
          'duration':0
      })
      $("#p3").animate({
        
        'top':'42.5vh',
        'left':'0'
      },{
          'duration':0
      })
      $("#p1").animate({
        'opacity':1,
        'top':'30vh',
        'left':'10vw'
      },{
          'duration':1500
      })
      $("#p2").animate({
        'opacity':1,
        'top':'37.5vh',
        'left':'50vw'
      },{
          'duration':1500
      })
      $("#p3").animate({
        'opacity':1,
        'top':'42.5vh',
        'left':'65vw'
      },{
          'duration':1500
      })
      setTimeout(()=>{
        $("#bt").animate({
        'top':'50vh',
        'left':'25vw'
        },{
    'duration':0
        })
        $("#bt").animate({
            'opacity':1,
          'top':'80vh',
          'left':'25vw'
          },{
    'duration':2000
          })
      },1500)
      setTimeout(()=>{
        $("#p4").animate({
            'opacity':1,
          },{
    'duration':1000
          })
          $("#p5").animate({
            'opacity':1,
          },{
    'duration':1250
          })
          $("#p6").animate({
            'opacity':1,
          },{
    'duration':1500
          })
          $("#p4").animate({
            'opacity':0,
          },{
    'duration':1000
          })
          $("#p5").animate({
            'opacity':0,
          },{
    'duration':1000
          })
          $("#p6").animate({
            'opacity':0,
          },{
    'duration':1000
          })
          $("#p4").animate({
            'opacity':1,
          },{
    'duration':1000
          })
          $("#p5").animate({
            'opacity':1,
          },{
    'duration':1250
          })
          $("#p6").animate({
            'opacity':1,
          },{
    'duration':1500
          })
          $("#p4").animate({
            'opacity':0,
          },{
    'duration':1000
          })
          $("#p5").animate({
            'opacity':0,
          },{
    'duration':750
          })
          $("#p6").animate({
            'opacity':0,
          },{
    'duration':500
          })


          $("#p4").animate({
            'opacity':1,
          },{
    'duration':1000
          })
          $("#p5").animate({
            'opacity':1,
          },{
    'duration':1250
          })
          $("#p6").animate({
            'opacity':1,
          },{
    'duration':1500
          })
          $("#p4").animate({
            'opacity':0,
          },{
    'duration':1000
          })
          $("#p5").animate({
            'opacity':0,
          },{
    'duration':1000
          })
          $("#p6").animate({
            'opacity':0,
          },{
    'duration':1000
          })
      },2000)
},3000)
  }else{
    start();
    document.getElementById("al1").style.display = "none";
    document.getElementById("al1").style.opacity = 0;
    document.getElementById("all1").style.display = "block";
    document.getElementById("all1").style.opacity = 1;
  }
}
function jump(){
    setTimeout(()=>{
        document.getElementById("bt").innerHTML = "VISI"
    setTimeout(()=>{
        document.getElementById("bt").innerHTML = "VIS"
    setTimeout(()=>{
        document.getElementById("bt").innerHTML = "VI"
        setTimeout(()=>{
            document.getElementById("bt").innerHTML = "V"
            setTimeout(()=>{
                document.getElementById("bt").innerHTML = "・・・・・"
                setTimeout(()=>{
                    document.getElementById("bt").innerHTML = "Let's Go"
                    setTimeout(()=>{
                        next();
                    },1500)
    },1500)
    },750)        
    },750)   
    },750)
    },750)
    },750)
}
function next(){
    $("#bt").animate({
        'left':'5vw',
      },{
 'easing':'swing',
'duration':1000
      })
      $("#bt").animate({
        'left':'50vw',
        'opacity':0
      },{
'duration':1000
      })
      $("#p1").animate({
        'left':'10vw',
      },{
'duration':1000
      })
      $("#p1").animate({
        'left':'0vw',
        'opacity':0
      },{
'duration':1000
      })
      $("#p2").animate({
        'left':'50vw',
      },{
'duration':1000
      })
      $("#p2").animate({
        'left':'60vw',
        'opacity':0
      },{
'duration':1000
      })
      $("#p3").animate({
        'left':'65vw',
      },{
'duration':1000
      })
      $("#p3").animate({
        'left':'70vw',
        'opacity':0
      },{
'duration':1000
      })
      $("#al1").animate({
'opacity':1
      },{
'duration':2000
      })
      $("#al1").animate({
        'height':0
        
      },{
        'easing':'swing',
'duration':2500
      })
      $("#pic").animate({
        'opacity':1
      },{
        'easing':'swing',
'duration':2500
      })
      $("#pic").animate({
        'top':'100vh',
        'opacity':0
      },{
        'easing':'swing',
'duration':2500
      })
      document.getElementById("p4").style.display = "none"
      document.getElementById("p5").style.display = "none"
      document.getElementById("p6").style.display = "none"
      document.getElementById("p4").style.opacity = 0
      document.getElementById("p5").style.opacity = 0
      document.getElementById("p6").style.opacity = 0
setTimeout(next22,4500);
}
function next22(){
    document.getElementById("all1").style.display = "block"
    $("#all1").animate({
        'opacity':0
      },{
        'easing':'swing',
'duration':2500
      })
      $("#all1").animate({
        'opacity':1,
        'display':"block"
      },{
        'easing':'swing',
'duration':2500
      })

}
function start(){
        size = screen.width;
        document.getElementById("setimg").src = "https://matsuoka18.github.io/Canada-Photos/pic/Img999.JPG";
        document.getElementById("setimg2").src = "https://matsuoka18.github.io/Canada-Photos/pic2/img1029.jpg";
        document.getElementById("setimg3").src = "https://matsuoka18.github.io/Canada-Photos/pic/img953.jpg";
        /*for(var a =0; a<=135; a++){
            data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
            pics22p.insertAdjacentHTML('beforeend', data);
        }*/
    }
