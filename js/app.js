const topNav = document.getElementById('top-nav');
const menu = document.getElementById('menu-items');
const burger = document.querySelectorAll('.line');

topNav.addEventListener('mouseover', () => {
    burger.forEach(line => {
    line.style.background = "#272727";

});

});
topNav.addEventListener('mouseout', () => {
    burger.forEach(line => {
    line.style.background = "#f2f3f7";

});
});


topNav.addEventListener('click', () =>  {

    if (menu.style.opacity === "1") {
        menu.style.opacity ="0"   
          
    } else {
        menu.style.opacity="1"
       
    };
});

const navText = document.querySelectorAll('#nav-text')
const nav = document.getElementById('nav');


nav.addEventListener('mouseover', function handleMouseOver(){
    nav.style.width = "4em"
    nav.style.transition =".25s ease-in"
  navText.forEach((icon) => {
      icon.style.opacity = "100%" 
     
     
  });
  
    
});

nav.addEventListener('mouseout', function handleMouseOut(){
    nav.style.width = "2em"
    nav.style.transition =".25s ease-in"
    navText.forEach((e) => {
        e.style.opacity = "0"
    });
})

//Styrer aktiv nav class



const textFieldIcon = document.getElementById('turn-text')
const iconToTurn = document.getElementById('turn-icon')

textFieldIcon.addEventListener('mouseover', () =>  {

    iconToTurn.style.transform ="rotate(45deg)"

});


textFieldIcon.addEventListener('mouseout', () =>  {

    iconToTurn.style.transform ="rotate(0deg)"

});

//onscroll events her 
window.onscroll = function() {hideNav()};

function hideNav() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   nav.style.opacity = "0";
   topNav.style.opacity="1"
  } else {
   nav.style.opacity="1";
   topNav.style.opacity="0"
   menu.style.opacity="0"
  }
}
window.onload = hideNav();

window.onscroll

const aboutMeSection = document.getElementById('about-me-section');

aboutMeSection.addEventListener("scroll", (event) => {
    let scroll = scrollY;
    console.log(scroll)
});
