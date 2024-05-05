let countDown = function() {
    let timer = document.getElementById("timer");
    timer.textContent --;
    if (timer.textContent === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(clear);
    };
};
let clear = setInterval(countDown, 1000);