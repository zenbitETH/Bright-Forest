
const timer = {
    time:0,
    timerID:null
}

async function startTimer(){
    if (timer.timerID != null) {
        return
    }
    timer.timerID = setInterval(setTime, 10)
}
function clearTimer(){
    clearInterval(timer.timerID)
    timer.timerID = null;
}

function setTime(){
    timer.time += 1; 
    console.log(formatTimer());
}

function formatTimer(){
    const snapshot = timer.time % 100
    var hours, minutes, seconds, centiseconds, currentTime
    
    if (snapshot > 360000) {
        currentTime = timer.time
        centiseconds = currentTime % 100;
        seconds = Math.trunc(currentTime / 100) % 60;
        minutes = Math.trunc(currentTime / (100*60) % 60) 
        hours = Math.trunc(currentTime / (100*60*60) % 24) 
        return `${hours}:${minutes}:${seconds}.${centiseconds}`
    } else  {
        currentTime = timer.time
        centiseconds = currentTime % 100;
        seconds = Math.trunc(currentTime / 100) % 60;
        minutes = Math.trunc(currentTime / (100*60) % 60) 
        return `${minutes}:${seconds}.${centiseconds}`
    }
}

export {timer, startTimer, clearTimer, setTime, formatTimer}