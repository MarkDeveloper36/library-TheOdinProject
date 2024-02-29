const library = [];
let isDarkThemeOn = false;
let isSideBarShown = false;

const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const header = document.querySelector('header');
const btns = document.querySelectorAll('button');
const svgs = document.querySelectorAll('svg');
const footer = document.querySelector('footer');
const addBookBtn = document.querySelector('#addBookBtn');
const main = document.querySelector('main');
const cardTable = document.querySelector('#cardTable');
const sideBar = document.querySelector('#sideBar');
const submitBtn = document.querySelector('#submitInfo');
const form = document.querySelector('#form');
const cardSoundEffect = new Audio('Drawing Playing Cards Sound Effect.mp3');

function Book(title, author, totPages, status) {
    this.title = title;
    this.author = author;
    this.totPages = totPages;
    this.status = status
}

const defaultBook1 = new Book('Shoe Dog', 'Phil Knight', 413, 'In progress');
library.push(defaultBook1);
const defaultBook2 = new Book('Mindset', 'Carol Dweck', 352, 'Completed');
library.push(defaultBook2);

displayBooks();

submitBtn.addEventListener('click', event => {
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let totPages = document.querySelector('#numOfPages').value;
    let status;
    if (document.querySelector('#completed').checked === true) {
        status = 'Completed';
    } else {
        status = 'In progress';
    }
    let newBook = new Book(title, author, totPages, status);
    library.push(newBook);
    form.reset();
    removeCardsFromDom();
    displayBooks();
})

addBookBtn.addEventListener('click', () => {

    if (isSideBarShown === false) {
        addBookBtn.classList.add('addBtnAnimation');
        sideBar.classList.remove('hideSideBar');
        setTimeout(function() {
            sideBar.classList.remove('visuallyhidden');
        }, 20);
        isSideBarShown = true;
    } else {
        addBookBtn.classList.remove('addBtnAnimation');
        sideBar.classList.add('visuallyhidden');
        sideBar.addEventListener('transitionend', event => {
            sideBar.classList.add('hideSideBar');
        },  {
            capture: false,
            once: true,
            passive: false
          });
        isSideBarShown = false;
    }

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
        sideBar.classList.remove('sideBarLightTheme');
        sideBar.classList.add('sideBarDarkTheme');

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
        sideBar.classList.remove('sideBarDarkTheme');
        sideBar.classList.add('sideBarLightTheme');

        isDarkThemeOn = false;
    }
});

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
        let deleteBtn =  document.createElement('button');
        let numOfPages = document.createElement('p');
        let toggleStatusBtn = document.createElement('button');
        if (library[i].status == 'Completed') {
            toggleStatusBtn.textContent = 'Mark as in progress';
            toggleStatusBtn.style.backgroundColor = '#40E0D0';
        } else {
            toggleStatusBtn.textContent = 'Mark as finished';
            toggleStatusBtn.style.backgroundColor = '#87CEEB';           
        }
        toggleStatusBtn.addEventListener('click', toggleStatus);
        let finished = document.createElement('p');
        bookTitle.textContent = library[i].title;
        bookAuthor.textContent = 'by ' + library[i].author;
        deleteBtn.textContent = 'X';
        deleteBtn.id = 'cardDeleteBtn';
        deleteBtn.addEventListener('click', deleteParentCard);
        numOfPages.textContent = 'Pages: ' + library[i].totPages;
        finished.textContent = 'Status: ' + library[i].status;

        cardTable.appendChild(newCard);
        newCard.appendChild(bookTitle);
        newCard.appendChild(bookAuthor);
        newCard.append(deleteBtn);
        newCard.appendChild(numOfPages);
        newCard.appendChild(toggleStatusBtn);
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

function deleteParentCard(e) {
    let toBeDeleted = e.target.previousElementSibling.previousElementSibling.textContent;
    let indexToDelete;
    for (let i = 0; i < library.length; i++) {
        if (library[i].title == toBeDeleted) {
            indexToDelete = i;
        }
    }
    library.splice(indexToDelete, 1);
    removeCardsFromDom();
    displayBooks();
}

function toggleStatus(e) {
    let bookTitle = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

    for (let i = 0; i < library.length; i++){
        if (library[i].title === bookTitle) {
            if (library[i].status == 'Completed') {
                library[i].status = 'In progress';
            } else {
                library[i].status = 'Completed';
            }
        }
    }

    removeCardsFromDom();
    displayBooks();
}

function playSoundEffect() {
    cardSoundEffect.currentTime = 5.65;
    cardSoundEffect.play();
}