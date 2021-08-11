const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const booksList = document.getElementById('booksList');

const addNewSection = document.getElementById('addNewSection');
const contactSection = document.getElementById('contactSection');
const addNewBtn = document.getElementById('addNewBtn');
const addContactBtn = document.getElementById('addContactBtn');
const displayArea = document.getElementById('displayArea');
const dateArea = document.getElementById('dateArea');

/* eslint-disable */
dateArea.innerHTML = luxon.DateTime.now().toFormat('LLL dd yyyy, HH:mm:ss a');
/* eslint-disable */
dateArea.classList.add('float-end', 'm-2');

addNewBtn.addEventListener('click', () => {
  displayArea.classList.add('d-none');
  addNewSection.classList.remove('d-none');
  contactSection.classList.add('d-none');
});

addContactBtn.addEventListener('click', () => {
  displayArea.classList.add('d-none');
  addNewSection.classList.add('d-none');
  contactSection.classList.remove('d-none');
});

const books = [];

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
    this.delBtns = [];
  }

  addBook() {
    const data = { title: this.title, author: this.author };
    books.push(data);
    localStorage.books = JSON.stringify(books);
  }

  displayBooks() {
    const strBooks = localStorage.books;

    if (strBooks) {
      JSON.parse(strBooks).forEach((val, index) => {
        const li = document.createElement('li');
        const text = `<div id=${index} class="p-2">
        <div>
        <strong>${val.title}</strong> by
        <small>${val.author}</small></div>
        <button class="delete">Remove</button>
      </div>`;
        li.classList.add('book-li');
        li.innerHTML = text;
        booksList.appendChild(li);
      });
    }
    // collecting the delete buttons array from the generated books list
    this.delBtns = document.querySelectorAll('.delete');
    this.removeBook(strBooks);
  }

  removeBook(arr) {
    this.delBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const bookIndex = e.target.parentNode.id;
        const newBooks = JSON.parse(arr);
        newBooks.splice(bookIndex, 1);
        localStorage.books = JSON.stringify(newBooks);
        booksList.innerHTML = '';
        this.displayBooks();
      });
    });
  }
}

const bookList = new Book();

function validateInput(title, author) {
  return title && author;
}

function refreshBooksList() {
  booksList.innerHTML = '';
  bookList.displayBooks();
  title.value = '';
  author.value = '';
}

addBtn.addEventListener('click', () => {
  if (validateInput(title.value, author.value)) {
    const book = new Book(title.value, author.value);
    book.addBook();
    refreshBooksList();
    displayArea.classList.remove('d-none');
    addNewSection.classList.add('d-none');
    contactSection.classList.add('d-none');
  } else {
    /* eslint-disable */
    alert('Title or Author cannot be blank!');
    /* eslint-enable */
  }
});

bookList.displayBooks();