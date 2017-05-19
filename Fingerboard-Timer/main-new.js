var timerBox = {
  boxEl: document.getElementById("TimerBox"),
  total: 120000,
  numOfCalls: 0,  
  fullLap: setInterval(function () {

   var countOn = setInterval(function() {
        //console.log("on");
        timerBox.boxEl.className = "on";
      }, 7000);
    var countOff = setInterval(function() {
      //console.log("on");
      timerBox.boxEl.className = "off";
    }, 3000);
  ++timerBox.numOfCalls;
     

   if (++timerBox.numOfCalls === 6) {
     window.clearInterval(timerBox.fullLap);
     timerBox.boxEl.className = "rest";
   }
}, timerBox.total);
    
    
    
     /*  var countOn = setInterval(function() {
        //console.log("on");
        timerBox.boxEl.className = "on";
        setTimeout(countOff, 3000);
        timerBox.numOfCalls++;
      }, 7000);

      function countOff() {
        //console.log("off");
        timerBox.boxEl.className = "off";
      } */
  };


timerBox.fullLap();
