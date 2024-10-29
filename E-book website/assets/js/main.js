

    /* For animation ScrollReveal */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})       













const searchButton = document.getElementById('search-button'),
     searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/* Menu show */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent .classList.add('show-search')
    })
}

/* Menu hidden */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
     loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/* Menu show */

if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent .classList.add('show-login')
    })
}

/* Menu hidden */
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}
/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
    :header.classList.remove('shadow-header')
    }
    window.addEventListener('scroll', shadowHeader)
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },

    
    breakpoints: {
    1220: {
    spaceBetween: -32,
    }
    }
    })

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    breakpoints: {
    1150:{
    slidesPerView: 4,
    centeredSlides: false,
    }
    }
    })

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
    1150:{
    slidesPerView: 3,
    }
}
    })

/*=============== TESTIMONIAL SWIPER ===============*/

let swiperTestimonial = new Swiper('.testimonial__swiper', {
loop: true,
spaceBetween: 16,
grabCursor: true,
slidesPerView: 'auto',
centeredSlides: 'auto',
breakpoints: {
1150:{
slidesPerView: 3,
centeredSlides: false,
}
}
})






const scrollup = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
const scrollDown = window.scrollY

sections.forEach(current =>{
const sectionHeight = current.offsetHeight,
sectionTop = current.offsetTop - 58,
sectionId = current.getAttribute('id'),
 sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
sectionsClass.classList.add('active-link')
}else{
sectionsClass.classList.remove('active-link')
}
})
}
window.addEventListener('scroll', scrollActive) 




const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, // Animations repeat
    })

 sr.reveal('.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer')
sr.reveal('.home__images', {delay: 600})
sr.reveal('.services__card', {interval: 100})
sr.reveal('.discount__data', {origin: 'left'})
sr.reveal('.discount_images',{ origin : 'right'})  