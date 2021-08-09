const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const booksList = document.getElementById('booksList');

const books = [];

sessionStorage.books = JSON.stringify(books);

addBtn.addEventListener('click', () => {
  const data = { title: title.value, author: author.value };
  if (data.title && data.author) {
    books.unshift(data);

    localStorage.books = JSON.stringify(books);

    booksList.innerHTML = '';
    /* eslint-disable */
    display();
    title.value = '';
    author.value = '';
  } else {
      alert('Title or Author cannot be blank!');
      /* eslint-enable */
  }
});

function display() {
  const strBooks = localStorage.books;
  if (strBooks) {
    JSON.parse(strBooks).forEach((val, index) => {
      const li = document.createElement('li');
      const text = `<div id="${index}">
        <strong>${val.title}</strong><br>
        <small>${val.small}</small><br>
        <button class="delete">Remove</button>
      </div>`;

      li.innerHTML = text;

      booksList.appendChild(li);
    });
  }

  const buttons = document.querySelectorAll('.delete');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const bookIndex = e.target.parentNode.id;
      const newBooks = JSON.parse(strBooks);
      newBooks.splice(bookIndex, 1);

      localStorage.books = JSON.stringify(newBooks);
      booksList.innerHTML = '';
      display();
    });
  });
}

display();
