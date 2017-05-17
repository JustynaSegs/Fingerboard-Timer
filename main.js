var timerBox = {
  boxEl: document.getElementById("TimerBox"),
  changeColour: function changeColourFn() {
    //var myVar = setInterval(timer, 4000);
    var timer = setInterval(function() {
      var total = 12000;
      var numOfCalls = 0;
      console.log("Hello");

      var smInterval = setInterval(function() {
        
        var secCount = setTimeout(function() {
          numOfCalls++;
          //console.log("on");
          boxEl.className = "on";
        }, 700);
        
        var secCountTwo = setTimeout(function() {
          numOfCalls++;
          //console.log("off");
          boxEl.className = "off";
        }, 300);
        
      }, 1000);
      
        var laInterval = setInterval(function() {
          boxEl.className = "rest";
      }, 11000);
      
        clearTimeout(secCount);
        clearTimeout(secCountTwo);
      if (numOfCalls == 6) {
        console.log("lap finished");
      }
      window.clearInterval(smInterval);
      clearInterval(laInterval);

    }, 12000);
  }
};

timerBox.changeColour();
