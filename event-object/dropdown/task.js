const menu = document.querySelector('.dropdown__list');

function menuAction () {
    menu.classList.toggle('dropdown__list_active') 
};

const value = document.querySelector('.dropdown__value');
value.addEventListener('click', menuAction);
const takeItem = Array.from(document.querySelectorAll('.dropdown__item'));

takeItem.forEach((elem, index) => {
    elem.onclick = () => {
        menuAction()
        value.textContent = takeItem[index].textContent
        return false
    };
});