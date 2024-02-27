const library = [];
let isDarkThemeOn = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const svgs = document.querySelectorAll('svg');
const footer = document.querySelector('footer');
const addBookBtn = document.querySelector('#addBookBtn');

const cardSoundEffect = new Audio('Drawing Playing Cards Sound Effect.mp3');

function Book(title, author, totPages, haveFinished) {
    this.title = title;
    this.author = author;
    this.totPages = totPages;
    this.haveFinished = haveFinished
}

const testBook = new Book('shoeDog', 'Phil Knight', 413, 'not yet');
const testBook2 = new Book('shoeDog2', 'Phil Knight2', 13, 'Yes');
library.push(testBook);
library.push(testBook2);

displayBooks();

addBookBtn.addEventListener('click', () => {
    let title = prompt('book title', 'harry porrter');
    let author = prompt('author');
    let totPages = prompt('pages');
    let haveFinished = prompt('finished?');
    let newBook = new Book(title, author, totPages, haveFinished);
    library.push(newBook);
    displayBooks();
})



function displayBooks() {
    let currentCars = main.querySelectorAll('div');
    currentCars.forEach(card => {
        console.log(card);
    })
    for(let i = 0; i < library.length; i++) {
        let card = document.createElement('div');
        giveStyleAndTheme(card);
        card.textContent = library[i].title;
        main.appendChild(card);
    }
}

function giveStyleAndTheme(card) {
    card.classList.add('bookCard');
    if (isDarkThemeOn === false) {
        card.classList.add('lightThemeCard');
    } else {
        card.classList.add('darkThemeCard');
    }
    card.addEventListener('mouseenter', playSoundEffect);
}

















changeThemeBtn.addEventListener('click', () => {
    let cards = document.querySelectorAll('.bookCard');
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
        cards.forEach(card => {
            card.classList.remove('lightThemeCard');
            card.classList.add('darkThemeCard');
        })
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
        cards.forEach(card => {
            card.classList.remove('darkThemeCard');
            card.classList.add('lightThemeCard');
        })
        isDarkThemeOn = false;
    }
});

function playSoundEffect() {
    cardSoundEffect.currentTime = 5.6;
    cardSoundEffect.play();
}