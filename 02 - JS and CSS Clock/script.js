const hourHand = document.querySelector(`.hour-hand`);
const minHand = document.querySelector(`.min-hand`);
const secondHand = document.querySelector(`.second-hand`);

setDate();

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours()%12 || 12;
    
    secondHand.style.transform = `rotate(${(second * 6) + 90}deg)`;
    minHand.style.transform = `rotate(${(min * 6) + 90 }deg)`;
    hourHand.style.transform = `rotate(${(hour * 30) + 90}deg)`;

}


setInterval(setDate, 1000);
