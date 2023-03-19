let cookie = document.getElementById('cookie');
let speed = document.getElementById('speed');
let clickerCounter = document.getElementById('clicker__counter');
let start = 0;
let end;
cookie.onmousedown = () => {
    end = new Date();
    if (start !== 0) {
        let speedNow = 1000 / (end - start);
        speed.textContent = speedNow.toFixed(2).toString();
    }
    start = new Date();
    let counter = parseInt(clickerCounter.textContent);
    cookie.style.width = '250px';
    counter += 1;
    clickerCounter.textContent = counter;
};
cookie.onmouseup = () => {
    cookie.style.width = '';
};