var clock = document.getElementById('clock');
var hexClk = document.getElementById('hexclock');

function hexClock(){
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if(hours.length < 2){
        hours = '0' + hours;
    }
    if(minutes.length <2){
        minutes = '0' + minutes
    }
    if(seconds.length <2){
        seconds = '0' + minutes
    }

    var Clock = hours + ':' + minutes + ':' + seconds;
    var hex = '#' + hours+minutes+seconds;


    clock.textContent = Clock;
    hexclock.textContent = hex;

    document.body.style.backgroundColor = hex;
}
hexClock();
setInterval(hexClock, 1000)
