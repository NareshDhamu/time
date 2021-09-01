borger = document.querySelector('.burger')
navbar = document.querySelector('.navbar ')
navList = document.querySelector('.nav-list ')
rightNav = document.querySelector('.rightNav')

borger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

document.getElementById('search').value="";
document.getElementById('name').value="";
document.getElementById('phone no').value="";
document.getElementById('email').value="";
document.getElementById('text').value="";


