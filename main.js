var start  = document.getElementById('start');
var stop = document.getElementById('stop');
var reset  = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

// store a reference to a timer variable
var starTimer;

start.addEventListener('click', function() {
    if (starTimer === undefined) {
        starTimer = setInterval(Timer, 1000);
    }
    else {
        alert('Timer is already running');
    }
})

stop.addEventListener('click', function() {
    stopInterval()
    starTimer = undefined;
}) 
    
reset.addEventListener('click', function() {
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopInterval()
    starTimer = undefined;
})




function Timer() {
    // Work Timer countdown
    if (ws.innerText != 0) {
        ws.innerText--;
    }
    else if (ws.innerText == 0 && wm.innerText != 0) {
        ws.innerText = 59;     // we are decrementing it by a second so it will start again from 59 when it comes to 0
        wm.innerText--;
    }

    // Break timer countdown
    if (wm.innerText == 0 && ws.innerText == 0) {
        if (bs.innerText != 0) {
            bs.innerText--;
        }
        else if (bs.innerText == 0 && bm.innerText != 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    // Increment counter by 1 if 1 full cycle is completed
    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        wm.innerText = 25;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";      // we can placed 00 in quotation which means a string because we write it without quotation then it will be a number and then 00 will be considered as only one zero and not 2 zeroes
        document.getElementById('counter').innerText++;
    }
}

function stopInterval() {
    clearInterval(starTimer);
}