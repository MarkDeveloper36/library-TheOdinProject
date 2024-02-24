let isDarkThemeOn = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const header = document.querySelector('header')

changeThemeBtn.addEventListener('click', () => {
    if (isDarkThemeOn === false) {
        body.classList.remove('lightThemeBody');
        body.classList.add('darkThemeBody');
        header.classList.remove('lightThemeHeader');
        header.classList.add('darkThemeHeader');
        isDarkThemeOn = true;
    } else {
        body.classList.remove('darkThemeBody');
        body.classList.add('lightThemeBody');
        header.classList.remove('darkThemeHeader');
        header.classList.add('lightThemeHeader');
        isDarkThemeOn = false;
    }
})