/*var i = 0;
var k = 0;

var time1;
*/

// var j = 30; //休息完毕的时间，单位分钟
// var g = 1; //该休息了的时间，单位分钟
var worker1;
const music = new Audio("Ring07.wav");
function timeToRest() {
  // var i=1;
  // var j = document.getElementById("button1").getAttribute("value");
  // for (let i = 0; i < 3; i++) {
  //   //   setTimeout(() => {
  //   //      alert(i)
  //   //   }, 5000 * i)
  //   console.log(i);
  //  };
  /*document.getElementById("button1").disabled = true;
  time1 = setTimeout(() => {
    if (k < j) {
      i++;
      // console.log(i);
      if (i === 60) {
        i = 0;
        k = k + 1;
      }
      // console.log(k);
      document.getElementById("p2").innerHTML = k + ":" + i;
      timeToRest();
    } else {
      i = 0;
      k = 0;
      music.play();
      timeToRest();
    }

  }, 1000);*/
  // setTimeout(() => {
  //   music.play();
  //   alert("注意休息，现在开始休息十分钟");
  //   console.log(i);
  //   timeToRest();
  // }, j);
  var time2 = Number(document.getElementById("p1").value);
  document.getElementById("button1").disabled = true;
  worker1 = new Worker("worker.js");
  worker1.onmessage = (e) => {
    console.log(e.data);
    if (e.data !== undefined) {
      document.getElementById("p2").innerHTML =
        parseInt(e.data / 60) + ":" + (e.data % 60);
    }
    if (e.data / 60 === time2) {
      console.log("播放音乐");
      music.play();
      worker1.postMessage("restart");
    }
  };
}

function timeToStop() {
  worker1.terminate();
  document.getElementById("button1").disabled = false;
  // clearTimeout(time1);
  // i = 0;
  // k = 0;
  document.getElementById("p2").innerHTML = "0:0";
}
// function setTime(i){
//     setTimeout(console.log(i),4000);
// }
// function myFun(){
//     var obj =document.getElementById("p1");
//     obj.innerHTML='开始放松';
// }
