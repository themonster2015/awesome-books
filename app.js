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

  JSON.parse(strBooks).forEach((val, index) => {
    const li = document.createElement('li');
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', index);

    wrapper.innerHTML = `
            <strong>${val.title}</strong><br>
            <small>${val.author}</small><br>
        `;
    li.appendChild(wrapper);

    const button = document.createElement('button');
    button.innerText = 'Remove';

    wrapper.appendChild(button);

    li.appendChild(wrapper);

    button.addEventListener('click', (e) => {
      const bookIndex = e.target.parentNode.id;
      const newBooks = JSON.parse(strBooks);

      newBooks.splice(bookIndex, 1);

      localStorage.books = JSON.stringify(newBooks);
      booksList.innerHTML = '';
      window.location.reload();
    });

    booksList.appendChild(li);
  });
}

display();
