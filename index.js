const library = [];
let isDarkThemeOn = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const svgs = document.querySelectorAll('svg');
const footer = document.querySelector('footer');
const addBookBtn = document.querySelector('#addBookBtn');
const main = document.querySelector('main');

const cardSoundEffect = new Audio('Drawing Playing Cards Sound Effect.mp3');

function Book(title, author, totPages, haveFinished) {
    this.title = title;
    this.author = author;
    this.totPages = totPages;
    this.haveFinished = haveFinished
}

const defaultBook1 = new Book('Shoe Dog', 'Phil Knight', 413, 'In progress');
library.push(defaultBook1);
const defaultBook2 = new Book('Mindset', 'Carol Dweck', 352, 'Completed');
library.push(defaultBook2);

displayBooks();

addBookBtn.addEventListener('click', () => {
    let title = prompt('book title', 'harry potter');
    let author = prompt('author');
    let totPages = prompt('pages');
    let haveFinished = prompt('finished?');
    let newBook = new Book(title, author, totPages, haveFinished);
    library.push(newBook);
    removeCardsFromDom();
    displayBooks();
})

function removeCardsFromDom() {
    let cards = document.querySelectorAll('.bookCard');
    cards.forEach(card => {
        card.remove();
    })
}

function displayBooks() {
    for(let i = 0; i < library.length; i++) {
        let newCard = document.createElement('div');
        let bookTitle = document.createElement('h2');
        let bookAuthor = document.createElement('p');
        let numOfPages = document.createElement('p');
        let finished = document.createElement('p');

        bookTitle.textContent = library[i].title;
        bookAuthor.textContent = 'by ' + library[i].author;
        numOfPages.textContent = 'Pages: ' + library[i].totPages;
        finished.textContent = 'Status: ' + library[i].haveFinished;

        main.appendChild(newCard);
        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.appendChild(numOfPages);
        newCard.appendChild(finished);

        giveStyleAndTheme(newCard);
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

addBookBtn.addEventListener('click', () => {
    addBookBtn.classList.add('addBtnAnimation');
    console.log('eafds')
})















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
    cardSoundEffect.currentTime = 5.65;
    cardSoundEffect.play();
}