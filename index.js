var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

add = () => {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }

    h1.textContent = (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") + ":" + (min ? (min > 9 ? min : "0" + min) : "00") + ":" + (sec > 9 ? sec : "0" + sec);

    timer();
}

timer = () => {
    t = setTimeout(add, 1000);
}


start.onclick = timer;


stop.onclick = () => {
    clearTimeout(t);
}


reset.onclick = () => {
    h1.textContent = "00:00:00";
    sec = 0;
    min = 0;
    hrs = 0;
}