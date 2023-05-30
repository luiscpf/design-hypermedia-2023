//Make Light and Dark Theme Work
const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme

    newTheme = (dataTheme === 'light') ? 'dark' : 'light'

    rootElem.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)

}

document.querySelector('#theme-switcher').addEventListener('click', switchTheme)

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
headerEl.classList.toggle("nav-open");
});

// Log in/Sign up

$(window, document, undefined).ready(function() {

    $('.input').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });
    
});
  
  
$('#tab1').on('click' , function(){
        $('#tab1').addClass('login-shadow');
    $('#tab2').removeClass('signup-shadow');
});
  
$('#tab2').on('click' , function(){
        $('#tab2').addClass('signup-shadow');
    $('#tab1').removeClass('login-shadow');


});

