function updateClock() {
    const hoursSpan = document.querySelector('.hours');
    const minutesSpan = document.querySelector('.minutes');
    const secondsSpan = document.querySelector('.seconds');
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
}

setInterval(updateClock, 1000);

updateClock();