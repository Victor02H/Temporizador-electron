let moreMinutes = document.getElementById('moreMinutes'),
    lessMinutes = document.getElementById('lessMinutes'),
    moreSeconds = document.getElementById('moreSeconds'),
    lessSeconds = document.getElementById('lessSeconds'),
    startBtn = document.getElementById('startBtn'),
    reset = document.getElementById('reset'),
    sound = document.getElementById('sound');

var minutesArea = document.getElementById('minutes'),
    secondsArea = document.getElementById('seconds'),
    minutes = 0, seconds = 0;

minutesArea.innerHTML = '0' +minutes+ ':';
secondsArea.innerHTML = '0' +seconds;

function chronometer() {

    if (seconds == 0 && minutes == 0) {
        seconds = 59;
        secondsArea.innerHTML = seconds;
    }

    let timer = setInterval(() => {
        seconds--;
        secondsArea.innerHTML = '0' +seconds;
        
        if (seconds >= 10) {
            secondsArea.innerHTML = seconds;
        } else if (seconds == -1) {
            minutes--;
            minutesArea.innerHTML = minutes+ ':';

            seconds = 59;
            secondsArea.innerHTML = seconds;
        } else if (seconds == 0 && minutes == 0) {
            minutesArea.innerHTML = '0' +minutes+ ':';
            secondsArea.innerHTML = seconds+ '0';

            clearInterval(timer);

            sound.play();
            showNotification();
        }
    }, 1000)

    // resetar cronometro
    reset.addEventListener("click", () => {
        if (secondsArea != 0 && minutesArea != 0) {
            seconds = 0, minutes = 0;
            secondsArea.innerHTML = seconds+ '0',
            minutesArea.innerHTML = '0' +minutes+ ':';

            clearInterval(timer);
        }
    })
}

function addMinutes() {
    minutes++;
    minutesArea.innerHTML = minutes+ ':';

    if (minutes >= 10) {
        minutesArea.innerHTML = minutes+ ':';
    }
}

function removeMinutes() {
    if (minutes >= 1) {
      minutes--;
        minutesArea.innerHTML = '0' +minutes+ ':';  
    } else if (minutes == 0) {
        minutesArea.innerHTML = '0' +minutes+ ':';
    }
}

function addSeconds() {
    seconds++;
    secondsArea.innerHTML = '0'+ seconds;

    if (seconds >= 10) {
        secondsArea.innerHTML = seconds;
    }
}

function removeSeconds() {
    if (seconds >= 1) {
        seconds--;
        secondsArea.innerHTML = '0' +seconds;
    } else if (seconds <= 9) {
        secondsArea.innerHTML = '0' +seconds;
    }
}

startBtn.addEventListener("click", chronometer);
moreMinutes.addEventListener("click", addMinutes);
lessMinutes.addEventListener("click", removeMinutes); 
moreSeconds.addEventListener("click", addSeconds);
lessSeconds.addEventListener("click", removeSeconds);
