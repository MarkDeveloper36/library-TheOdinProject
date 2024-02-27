let isDarkThemeOn = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const logo = document.querySelector('svg');

changeThemeBtn.addEventListener('click', () => {
    if (isDarkThemeOn === false) {
        body.classList.remove('lightThemeBody');
        body.classList.add('darkThemeBody');
        header.classList.remove('lightThemeHeader');
        header.classList.add('darkThemeHeader');
        btns.forEach(btn => {
            btn.classList.remove('lightThemeBtn');
            btn.classList.add('darkThemeBtn');
        });
        logo.classList.add('darkThemeSvg');
        isDarkThemeOn = true;
    } else {
        body.classList.remove('darkThemeBody');
        body.classList.add('lightThemeBody');
        header.classList.remove('darkThemeHeader');
        header.classList.add('lightThemeHeader');
        btns.forEach(btn => {
            btn.classList.remove('darkThemeBtn');
            btn.classList.add('lightThemeBtn');
        });
        logo.classList.remove('darkThemeSvg');
        isDarkThemeOn = false;
    }
})