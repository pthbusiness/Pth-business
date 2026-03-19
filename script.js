const themeSwitch = document.getElementById('themeSwitch');

let darkTheme = localStorage.getItem('darkTheme');

const enableDarkmode = () => {
    document.body.classList.add('darkTheme');
    localStorage.setItem('darkTheme', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkTheme');
    localStorage.setItem('darkTheme', null);
    console.clear();
}

if (darkTheme === 'active') enableDarkmode();

themeSwitch.addEventListener('click', () => {
    darkTheme = localStorage.getItem('darkTheme');
    darkTheme !== 'active' ? enableDarkmode() : disableDarkmode();
    
});


const scrollToTopButton = document.querySelector(".scrollToTopButton");
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add("visible");
    } else {
        scrollToTopButton.classList.remove("visible");
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});