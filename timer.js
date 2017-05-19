window.onload = function () {
    var timerBox = {
    boxEl: document.getElementById("TimerBox"),
    fullLap: function () {
        this.increaseCalls();
        this.startLap = setInterval(this.increaseCalls.bind(this), 120000);
    },
    increaseCalls: function () {
        this.numOfCalls = 0;
        this.countReps();
        this.smInterval = setInterval(this.countReps.bind(this), 10000);
    },
    countReps: function() {
        this.numOfCalls++;
        if(this.numOfCalls == 6) {
        this.boxEl.className = 'rest';
        clearInterval(this.smInterval);
        } else {
        this.boxEl.className = 'on';
        var addOff = setTimeout(function() {
            timerBox.boxEl.className = "off";
            clearTimeout(addOff);
        }, 7000);
        }
    }
    
    };
    timerBox.fullLap();
};