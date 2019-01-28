/* Select DOM elements */
const navbar = document.querySelector('.navbar');
const topOfNav = navbar.offsetTop;
const textContainer = document.querySelector('.text-container');


function fixNav() {
    // console.log(topOfNav, this.scrollY);
    if (this.scrollY >= topOfNav) {
        textContainer.style.paddingTop = navbar.offsetHeight + 'px';
        navbar.classList.add('navbar-fixed');
    } else {
        textContainer.style.paddingTop = 0;
        navbar.classList.remove('navbar-fixed');
    }
}

window.addEventListener('scroll', fixNav);

/* Define callback functions */ 
/*function stickOnScroll(e) {
    // console.count(e);
    console.log(navbar.offsetTop);
    //console.log(navbar.outerHeight); - DNE
    // console.log(window.innerHeight); - static number of px (671)
}*/

/* Add event listeners */ 
//window.addEventListener('scroll', stickOnScroll);

/*window.addEventListener("scroll", function(event) {
    // console.log(`x: ${this.scrollX}, y: ${this.scrollY}`);
    const distanceToTop = (navbar.offsetTop) - this.scrollY;
    console.log(distanceToTop);
    distanceToTop <= 0 ? navbar.classList.add('navbar-fixed') : navbar.classList.remove('navbar-fixed');
  */  
    
/*    let didWeScrollPast = false; 
    didWeScrollPast = distanceToTop <= 0 ? true : false; 
    
    if (didWeScrollPast != di)*/
    
/*    if (distanceToTop <= 0) {
        //navbar.style.color = 'red'; // this works 
        // should probably make this a CSS class
        navbar.style.position = 'fixed';
        navbar.style.width = '100%';
    }*/
/*});*/