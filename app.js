let title = document.getElementById('title');
let author = document.getElementById('author');
let addBtn = document.getElementById('addBtn');
let booksList = document.getElementById('booksList');


let books = [];

sessionStorage.books = JSON.stringify(books);

addBtn.addEventListener('click', function (e) {
    let data = { title: title.value, author: author.value };
    if (data.title && data.author) {

        books.unshift(data)
        
        localStorage.books = JSON.stringify(books);

        booksList.innerHTML = ''
        display();

        title.value = ''
        author.value = ''

    } else {
        alert('Title or Author cannot be blank!')
    }
});

function display() {
    let str_books = localStorage.books;

    JSON.parse(str_books).forEach((val, index) => {
    
        let li = document.createElement('li');
        let wrapper = document.createElement('div')
        wrapper.setAttribute('id', index)

        wrapper.innerHTML = `
            <strong>${val.title}</strong><br>
            <small>${val.author}</small><br>
        `;
        li.appendChild(wrapper);

        var button = document.createElement("button");
        button.innerText = 'Remove';

        wrapper.appendChild(button)

        li.appendChild(wrapper)
        
        button.addEventListener("click", function (e) {
            let book_index = e.target.parentNode.id;
            let new_books = JSON.parse(str_books)

            new_books.splice(book_index, 1)

            localStorage.books = JSON.stringify(new_books);
            booksList.innerHTML = ''
            location.reload();
        })

        booksList.appendChild(li);
    })
}

display();

