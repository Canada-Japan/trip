ipad = '';
textb= '';
textd= '';
function starta() {
  document.getElementById("allll1").style.display = "block"
  document.getElementById("allll1").style.opacity = 1;
   document.getElementById("all1").style.display = "none;
  document.getElementById("all1").style.opacity = 0;
   document.getElementById("al1").style.display = "none;
       document.getElementById("al1").style.opacity = 0;
  
  num = 0;
  fetch('https://ipinfo.io?callback')
  .then(res => res.json())
  .then(json => nexti(json.ip))
  textd = "メンテナンス";
  textb = "メンテ";
gas();
  setInterval(()=>{
    num++;
    if(num == 1){
      document.getElementById("h1").innerHTML = "ただいまメンテナンス中・・・";
    }else{
      num =0;
      document.getElementById("h1").innerHTML = "The system is currently under maintenance・・・";
    }
  },2000)
  /*cookie = document.cookie;
  cookie = cookie.indexOf("load=1");
  if (cookie == -1) {
    start();
    fetch('https://ipinfo.io?callback')
      .then(res => res.json())
      .then(json => nexti(json.ip))
      $("#pic2").animate({
        'opacity': 1,
      }, {
        'duration': 1000
      })
      $("#pic2").animate({
        'opacity': 1,
      }, {
        'duration': 2000
      })
      $("#pic2").animate({
        'opacity': 0,
      }, {
        'duration': 1000
      })
      $("#pic").animate({
        'opacity': 0,
      }, {
        'duration': 4000
      })
    $("#pic").animate({
      'opacity': 1,
    }, {
      'duration': 1000
    })
    $("#pic").animate({
      'opacity': 1,
    }, {
      'duration': 2000
    })
    $("#pic").animate({
      'top': '0vh'
    }, {
      'duration': 1500
    })
    setTimeout(() => {
      document.getElementById("pic2").style.width = "25vw";
      document.getElementById("pic2").style.height = "auto";
      $("#pic2").animate({
        'top': '90vh',
        'left': '75vw'
      }, {
        'duration': 0
      })
      $("#pic2").animate({
'opacity':1
      }, {
        'duration': 1500
      })
      $("#p1").animate({
        'top': '30vh',
        'left': '0'
      }, {
        'duration': 0
      })
      $("#p2").animate({
        'top': '37.5vh',
        'left': '0'
      }, {
        'duration': 0
      })
      $("#p3").animate({

        'top': '42.5vh',
        'left': '0'
      }, {
        'duration': 0
      })
      $("#p1").animate({
        'opacity': 1,
        'top': '30vh',
        'left': '10vw'
      }, {
        'duration': 1500
      })
      $("#p2").animate({
        'opacity': 1,
        'top': '37.5vh',
        'left': '50vw'
      }, {
        'duration': 1500
      })
      $("#p3").animate({
        'opacity': 1,
        'top': '42.5vh',
        'left': '65vw'
      }, {
        'duration': 1500
      })


      setTimeout(() => {
        $("#bt").animate({
          'top': '50vh',
          'left': '25vw'
        }, {
          'duration': 0
        })
        $("#bt").animate({
          'opacity': 1,
          'top': '80vh',
          'left': '25vw'
        }, {
          'duration': 2000
        })
      }, 1500)
      setTimeout(() => {
        $("#p4").animate({
          'opacity': 1,
        }, {
          'duration': 1000
        })
        $("#p5").animate({
          'opacity': 1,
        }, {
          'duration': 1250
        })
        $("#p6").animate({
          'opacity': 1,
        }, {
          'duration': 1500
        })
        $("#p4").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
        $("#p5").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
        $("#p6").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
        $("#p4").animate({
          'opacity': 1,
        }, {
          'duration': 1000
        })
        $("#p5").animate({
          'opacity': 1,
        }, {
          'duration': 1250
        })
        $("#p6").animate({
          'opacity': 1,
        }, {
          'duration': 1500
        })
        $("#p4").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
        $("#p5").animate({
          'opacity': 0,
        }, {
          'duration': 750
        })
        $("#p6").animate({
          'opacity': 0,
        }, {
          'duration': 500
        })


        $("#p4").animate({
          'opacity': 1,
        }, {
          'duration': 1000
        })
        $("#p5").animate({
          'opacity': 1,
        }, {
          'duration': 1250
        })
        $("#p6").animate({
          'opacity': 1,
        }, {
          'duration': 1500
        })
        $("#p4").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
        $("#p5").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
        $("#p6").animate({
          'opacity': 0,
        }, {
          'duration': 1000
        })
      },2000)
    }, 7000)
  } else {
    start();
    document.getElementById("al1").style.display = "none";
    document.getElementById("al1").style.opacity = 0;
    document.getElementById("all1").style.display = "block";
    document.getElementById("all1").style.opacity = 1;
  }
  */
}
number = 0;
blocklist = 3;
function jump() {
  if(blocklist == 1){
   alert("あなたは運営からアクセスを禁止されています");
  }else if(blocklist == 0){
  number++;
  if(number < 2){

  if (ipad.length < 1) {
    setTimeout(() => {
      jump();
      console.log("retry")
    }, 2000)
  } else {
    dataa = "dataa="+ipad+"<>";
    document.cookie = dataa;
    textb = "access";
    textd= "none";
    gas();
    $.ajax({
      url: "https://maker.ifttt.com/trigger/hello/with/key/c_vpO05zoegXWA3suVbXNy",
      type: "POST",
      data: { value1: "訪問者IPアドレス", value2: ipad },
      complete: function () { console.log("success") }
    })
    setTimeout(() => {
      document.getElementById("bt").innerHTML = "VISI"
      setTimeout(() => {
        document.getElementById("bt").innerHTML = "VIS"
        setTimeout(() => {
          document.getElementById("bt").innerHTML = "VI"
          setTimeout(() => {
            document.getElementById("bt").innerHTML = "V"
            setTimeout(() => {
              document.getElementById("bt").innerHTML = "."
              setTimeout(() => {
                document.getElementById("bt").innerHTML = "wait..."
              setTimeout(() => {
                document.getElementById("bt").innerHTML = "Let's Go"
                setTimeout(() => {
                  next();
                 }, 1500)
                }, 3000)
              }, 1500)
            }, 750)
          }, 750)
        }, 750)
      }, 750)
    }, 750)
  }
}else{
  return;
}
  }
}
function nexti(json) {
  ipad = json;
  console.log("get")
  blockcheck();
}
function next() {
  $("#pic2").animate({
    'opacity':0
          }, {
            'duration': 1500
          })
  $("#bt").animate({
    'left': '5vw',
  }, {
    'easing': 'swing',
    'duration': 1000
  })
  $("#bt").animate({
    'left': '50vw',
    'opacity': 0
  }, {
    'duration': 1000
  })
  $("#p1").animate({
    'left': '10vw',
  }, {
    'duration': 1000
  })
  $("#p1").animate({
    'left': '0vw',
    'opacity': 0
  }, {
    'duration': 1000
  })
  $("#p2").animate({
    'left': '50vw',
  }, {
    'duration': 1000
  })
  $("#p2").animate({
    'left': '60vw',
    'opacity': 0
  }, {
    'duration': 1000
  })
  $("#p3").animate({
    'left': '65vw',
  }, {
    'duration': 1000
  })
  $("#p3").animate({
    'left': '70vw',
    'opacity': 0
  }, {
    'duration': 1000
  })
  $("#al1").animate({
    'opacity': 1
  }, {
    'duration': 2000
  })
  $("#al1").animate({
    'height': 0

  }, {
    'easing': 'swing',
    'duration': 2500
  })
  $("#pic").animate({
    'opacity': 1
  }, {
    'easing': 'swing',
    'duration': 2500
  })
  $("#pic").animate({
    'top': '100vh',
    'opacity': 0
  }, {
    'easing': 'swing',
    'duration': 2500
  })
  document.getElementById("p4").style.display = "none"
  document.getElementById("p5").style.display = "none"
  document.getElementById("p6").style.display = "none"
  document.getElementById("p4").style.opacity = 0
  document.getElementById("p5").style.opacity = 0
  document.getElementById("p6").style.opacity = 0
  setTimeout(next22, 4500);
}
function next22() {
  document.getElementById("all1").style.display = "block"
  $("#all1").animate({
    'opacity': 0
  }, {
    'easing': 'swing',
    'duration': 2500
  })
  $("#all1").animate({
    'opacity': 1,
    'display': "block"
  }, {
    'easing': 'swing',
    'duration': 2500
  })
  textd = "load";
  textb = "activity";
gas();
}
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
function gas(){
  url="https://script.google.com/macros/s/AKfycbz3MOKot1jgJW-BI1uh_CG8M18d3I2GvATo8Oha_pIn0PyT5LYRqTyxuBPP7JSbfSAE/exec";
  data = [{
    "data1":ipad,
    "data2":textd,
    "data3":textb
  }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
  }
  fetch(url,params);
}
function blockcheck(){
  console.log("blockcheck START")
  textb = 'block'
  url="https://script.google.com/macros/s/AKfycbz3MOKot1jgJW-BI1uh_CG8M18d3I2GvATo8Oha_pIn0PyT5LYRqTyxuBPP7JSbfSAE/exec";
  data = [{
    "data1":ipad,
    "data3":textb
  }]
  params = {
    "method":"post",
    "mode":"no-cors",
    "Content-Type":"application/json",
    "body":JSON.stringify(data)
  }
  fetch(url,params);
  console.log("blockcheck FIN")
  setTimeout(blockcheck2,7000)
}
function blockcheck2(){
  console.log("blockcheck2 START")
  url="https://script.google.com/macros/s/AKfycbz3MOKot1jgJW-BI1uh_CG8M18d3I2GvATo8Oha_pIn0PyT5LYRqTyxuBPP7JSbfSAE/exec";
  fetch(url,{
    "method":'GET',
    "mode":"cors",
  })
  .then(response =>{
    if(response.ok){
      return response.json()
    }
  })
  .then(resJson =>{
    data = resJson[1];
    console.log(data);
    data2 = JSON.stringify(data);
    data2 = data2.indexOf("result");
    if(data == "blocked"){
    blocklist = 1;
    }else if(data == "unblocked"){
      blocklist = 0;
    }else if(data2 ==-1){
     console.log("Error (other Data)");
     blockcheck2();
    }
  })
  .catch(error=>{
console.log("Error Log:"+error);
  })
  console.log("blockcheck2 FIN")
}
bn1=0;
bn2=0;
function b1(){
bn1++;
}
function b2(){
 bn2++;
}
function b3(){
  if(bn1 == 4 && bn2 == 2){
    location.href="admin.html"
  }
}
