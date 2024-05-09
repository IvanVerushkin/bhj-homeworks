let cookie = document.querySelector(".clicker img");
let clicker__counter = document.getElementById("clicker__counter");

cookie.addEventListener('click', () => {
    if (cookie.width !== 220) {
        cookie.width = 220
        cookie.height = 180
        clicker__counter.textContent++
    } else {
        cookie.width = 200
        cookie.height = 150
        clicker__counter.textContent++
    };
});