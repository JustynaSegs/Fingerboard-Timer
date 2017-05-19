window.onload = function () {
  var timerBox = {
    boxEl: document.getElementById("TimerBox"),
    fullLap: function () {
      setInterval();
    },
    setInterval: setInterval(function () {
        var box = this.boxEl;
        var countOn = setTimeout(function() {
          box.className = "on";
        }, 7000);
        
        var countOff = setInterval(function() {
          box.className = "off";
        }, 3000);      

        if (timerBox.numOfCalls++ === 6) {
          window.clearInterval(timerBox.fullLap);
          box = "reset";
        }
    }, 120000),
  
  };
  timerBox.fullLap();
};
