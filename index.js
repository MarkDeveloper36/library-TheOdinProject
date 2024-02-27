let isDarkThemeOn = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const svgs = document.querySelectorAll('svg');
const footer = document.querySelector('footer');

changeThemeBtn.addEventListener('click', () => {
    if (isDarkThemeOn === false) {
        body.classList.remove('lightThemeBody');
        body.classList.add('darkThemeBody');
        header.classList.remove('lightThemeHeader');
        header.classList.add('darkThemeHeader');
        footer.classList.remove('lightThemeHeader');
        footer.classList.add('darkThemeHeader');
        btns.forEach(btn => {
            btn.classList.remove('lightThemeBtn');
            btn.classList.add('darkThemeBtn');
        });
        svgs.forEach(svg => {
            svg.classList.add('darkThemeSvg');
        });
        isDarkThemeOn = true;
    } else {
        body.classList.remove('darkThemeBody');
        body.classList.add('lightThemeBody');
        header.classList.remove('darkThemeHeader');
        header.classList.add('lightThemeHeader');
        footer.classList.remove('darkThemeHeader');
        footer.classList.add('lightThemeHeader');
        btns.forEach(btn => {
            btn.classList.remove('darkThemeBtn');
            btn.classList.add('lightThemeBtn');
        });
        svgs.forEach(svg => {
            svg.classList.remove('darkThemeSvg');
        });
        isDarkThemeOn = false;
    }
})