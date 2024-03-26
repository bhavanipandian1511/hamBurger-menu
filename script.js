const menu = document.querySelector('.menu')
const menuList = document.querySelector('nav ul')
const close = document.querySelector('.close')
menu.addEventListener('click',()=>{
    menuList.classList.toggle('showMenu')
    menuList.classList.remove('menu')
    menu.style.display='none'
    close.style.display='block'
})
close.addEventListener('click',()=>{
    console.log("click")
    menuList.classList.remove('showMenu')
    close.style.display='none'
    menu.style.display='block'

})