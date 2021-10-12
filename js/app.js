const countdown = () => {
    const currentDate = new Date().getTime();
    const currentYear = new Date().getFullYear();
    const nyDate = new Date(`Jan 01, ${currentYear + 1} 00:00:00`).getTime();
    const gap = nyDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dateDay = Math.floor(gap / day);
    const dateHour = Math.floor((gap % day) / hour);
    const dateMinute = Math.floor((gap % hour) / minute);
    const dateSecond = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = addZero(dateDay);
    document.getElementById('hours').innerText = addZero(dateHour);
    document.getElementById('minutes').innerText = addZero(dateMinute);
    document.getElementById('seconds').innerText = addZero(dateSecond);
};

function addZero(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    };
};

setInterval(() => {
    countdown();
}, 1000);