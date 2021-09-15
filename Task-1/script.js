let header = document.getElementById('header')

let header__sticky = header.offsetTop

window.onscroll = function(){
    if(window.scrollY > header__sticky){
        header.classList.add("header__sticky")
    }
    else{
        header.classList.remove("header__sticky")
    }
}
let mobileMenu = false
const handleMobileMenu = () =>{
    mobileMenu = !mobileMenu

    let hamIcon = document.getElementsByClassName('hamburger-icon')

    let crossIcon = document.getElementsByClassName('cross-icon')

    let mobileNavMenu = document.getElementsByClassName("mobile__nav__menu")[0];

    if(mobileMenu){
        mobileNavMenu.classList.add('active')
        crossIcon.classList.add('icon__active')

    }
    else{
        mobileNavMenu.classList.remove('active')
        hamIcon.classList.add('icon__active')
    }   
}

