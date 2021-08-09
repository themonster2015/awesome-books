let title = document.getElementById('title');
let author = document.getElementById('author');
let addBtn = document.getElementById('addBtn');
let booksList = document.getElementById('booksList');


let books = [
    { title: 'Book One', author: 'James' },
    { title: 'Book One', author: 'James' }
];

function display() {
    books.forEach(val => {

        console.log(val)

        let li = document.createElement('li');
        let text = `<div>
            <strong>${val.title}</strong><br>
            <small>${val.author}</small>
        </div><br>`;

        li.innerHTML= text;
        booksList.appendChild(li);
    })
}

display();