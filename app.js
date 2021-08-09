let title = document.getElementById('title');
let author = document.getElementById('author');
let addBtn = document.getElementById('addBtn');
let booksList = document.getElementById('booksList');


let books = [
    { title: 'Book One', author: 'James' }
];

localStorage.setItem("lastname", "Smith");

addBtn.addEventListener('click', function (e) {
    let data = { title: title.value, author: author.value };
    if (data.title && data.author) {

        books.unshift(data)
        booksList.innerHTML = ''
        display();

        title.value = ''
        author.value = ''

    } else {
        alert('Title or Author cannot be blank!')
    }
});

function display() {
    books.forEach((val, index) => {
    
        let li = document.createElement('li');
        let text = `<div id=${index}>
            <strong>${val.title}</strong><br>
            <small>${val.author}</small><br>
            <button id='removeBook'>Remove</button>
            </div>
        `;

        li.innerHTML = text;
        booksList.appendChild(li);

        let remove = document.getElementById('removeBook')
        remove.addEventListener('click', removeBook1);
        function removeBook1(e) {
            console.log(e.target)
        }
    })


}

display();

