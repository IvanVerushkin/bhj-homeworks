const menu = document.querySelector('.dropdown__list');

function menu_action () {
    menu.classList.toggle('dropdown__list_active') 
};

const value = document.querySelector('.dropdown__value');
value.addEventListener('click', menu_action);
const take_item = Array.from(document.querySelectorAll('.dropdown__item'));

take_item.forEach((elem, index) => {
    elem.onclick = () => {
        menu_action()
        value.textContent = take_item[index].textContent
        console.log(index)
        return false
    };
});