const menuBtn = document.querySelector('.m-btn');
const closeBtn = document.querySelector('.close-btn')
const cmenu = document.querySelector('.collapsable-menu')

// dropdown menu
const menu1 = document.querySelector('.menu-1');
const dropdown1 = document.querySelector('.dropdown-1');

// dropdown inside the menu
const menu2 = document.querySelector('.menu-2');
const dropdown2 = document.querySelector('.dropdown-2');

const bg = document.querySelector('.bg');

menuBtn.addEventListener('click', () => {
    if(cmenu.classList.contains('hidden') == true) {
        cmenu.classList.remove('hidden')
        bg.classList.remove('hidden')
    }
})
closeBtn.addEventListener('click', () => {
    if(cmenu.classList.contains('hidden') == false) {
        cmenu.classList.add('hidden')
        bg.classList.add('hidden')
    }
})

menu1.addEventListener('click', () => {
    const down = document.querySelector('.one');
    dropdown1.classList.contains('hidden') == true ?
        (dropdown1.classList.remove('hidden'),
        down.src = 'images/icon-arrow-up.svg')
    :
        (dropdown1.classList.add('hidden'),
        down.src = 'images/icon-arrow-down.svg')
    
})

menu2.addEventListener('click', () => {
    const down = document.querySelector('.two');

    dropdown2.classList.contains('hidden') == true ?
        (dropdown2.classList.remove('hidden'),
        down.src = 'images/icon-arrow-up.svg')
    :
        (dropdown2.classList.add('hidden'),
        down.src = 'images/icon-arrow-down.svg')
    
})
