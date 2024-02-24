let isDarkThemeOn = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');

changeThemeBtn.addEventListener('click', () => {
    if (isDarkThemeOn === false) {
        body.classList.remove('lightThemeBody');
        body.classList.add('darkThemeBody');
        isDarkThemeOn = true;
    } else {
        body.classList.remove('darkThemeBody');
        body.classList.add('lightThemeBody');
        isDarkThemeOn = false;
    }
})