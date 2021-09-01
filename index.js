borger = document.querySelector('.burger')
navbar = document.querySelector('.navbar ')
navList = document.querySelector('.nav-list ')
rightNav = document.querySelector('.rightNav')

borger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

document.getElementById('search').value = "";
document.getElementById('name').value = "";
document.getElementById('phone no').value = "";
document.getElementById('email').value = "";
document.getElementById('text').value = "";


let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.toLocaleTimeString();
    document.getElementById('time').innerHTML = time + "<br>" + date;
},1000)