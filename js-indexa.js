function start(){
    size = screen.width;
    console.log("size:" + size);

    if (size < 760) {

        location.href = "index2.html";
    } else {
        document.getElementById("setimg").src = "https://matsuoka18.github.io/Canada-Photos/pic/img921.jpg"
        document.getElementById("setimg2").src = "https://matsuoka18.github.io/Canada-Photos/pic/img986.jpg"
        document.getElementById("setimg3").src = "https://matsuoka18.github.io/Canada-Photos/pic/img589.jpg"
    }
    /*for(var a =0; a<=135; a++){
        data = "<img src=" + "\""  + "\"" + "id="+"\""+"ims"+a+"\""+">";
        pics22p.insertAdjacentHTML('beforeend', data);
    }*/
starta();
}
ipad = '';
function starta(){
  cookie = document.cookie;
  cookie = cookie.indexOf("load=1");

  if(cookie == -1){
    fetch('https://ipinfo.io?callback')
    .then(res => res.json())
    .then(json => nexti(json))
    $("#pic").animate({
        'opacity':0,
        'top':'0vh',
        'left':'35vw'
      },{
          'duration':0
      })    
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
        'top':'0vh',
        'left':'0'
      },{
          'duration':1500
      })
setTimeout(()=>{

    $("#al1").animate({
        'height':'200vh'
      },{
          'duration':0
      })
      $("#p1").animate({
        'top':'20vh',
        'left':'0'
      },{
          'duration':0
      })
      $("#p2").animate({
        'top':'30vh',
        'left':'0'
      },{
          'duration':0
      })
      $("#p3").animate({
        'top':'40vh',
        'left':'0'
      },{
          'duration':0
      })
      $("#p1").animate({
        'opacity':1,
        'top':'20vh',
        'left':'20vw'
      },{
          'duration':1500
      })
      $("#p2").animate({
        'opacity':1,
        'top':'30vh',
        'left':'45vw'
      },{
          'duration':1500
      })
      $("#p3").animate({
        'opacity':1,
        'top':'40vh',
        'left':'60vw'
      },{
          'duration':1500
      })
      setTimeout(()=>{
        $("#bt").animate({
        'top':'50vh',
        'left':'35vw'
        },{
    'duration':0
        })
        $("#bt").animate({
            'opacity':1,
          'top':'125vh',
          'left':'35vw'
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
      },2000)
},3000)

  }else{
  
    document.getElementById("al1").style.display = "none";
    document.getElementById("al1").style.opacity = 0;
    document.getElementById("all1").style.display = "block";
    document.getElementById("all1").style.opacity = 1;
  }
}
function jump(){
  if (ipad.length < 1) {
    setTimeout(() => {
      jump();
      console.log("retry")
    }, 2000)
  } else {
    $.ajax({
      url: "https://maker.ifttt.com/trigger/hello/with/key/c_vpO05zoegXWA3suVbXNy",
      type: "POST",
      data: { value1: "訪問者IPアドレス", value2: ipad },
      complete: function () { console.log("success") }
    })
      $.ajax({
      url: "https://maker.ifttt.com/trigger/hello/with/key/c_vpO05zoegXWA3suVbXNy",
      type: "POST",
      data: { value1: "訪問者の国", value2: country },
      complete: function () { console.log("success") }
    })
 
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
}
function nexti(json){
  ipad = json.ip;
  country = json.country;
  console.log("get")
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
    scrollTo(0,0)
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
