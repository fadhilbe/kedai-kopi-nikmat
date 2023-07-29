//toggle class active
const navbarnav =document.querySelector
('.navbar-nav');
//ketika humberger menu di klik
document.querySelector('#humberger-menu').
onclick = () =>{
    navbarnav.classList.toggle('active');

};

//klik  diluar sidebar untuk menghilngkan nav
const humberger= document.querySelector
('#humberger-menu');

document.addEventListener('click' , function (e){
    if(!humberger.contains(e.target)&& !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }

});