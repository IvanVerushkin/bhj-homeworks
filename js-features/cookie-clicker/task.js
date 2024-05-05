let cookie = document.querySelector(".clicker img");
let clicker__counter = document.getElementById("clicker__counter");

cookie.addEventListener('click', () => {
    if (document.querySelector(".clicker img").width !== 220) {
        document.querySelector(".clicker img").width = 220
        document.querySelector(".clicker img").height = 180
        clicker__counter.textContent++
    } else {
        document.querySelector(".clicker img").width = 200
        document.querySelector(".clicker img").height = 150
        clicker__counter.textContent++
    };
});