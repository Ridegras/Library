const section = document.querySelector('section');
const close = document.querySelector('#cross');
const adding = document.querySelector('.add-a-book');
const submit = document.querySelector('.button');
const form = document.querySelector('.bg-form');

adding.addEventListener('click',()=>{
    form.style.display = 'flex';
})

submit.addEventListener('click',()=>{
    showNewBook(submitNewBook());
    form.style.display = 'none';
    console.table(library);
    resetForm();
});

close.addEventListener('click',()=> form.style.display = 'none');


/*Segun The Odin Project*/

let library = [];

function Book(title,author,pages,description,read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.description = description,
    this.read = read
};

const submitNewBook = ()=>{
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let description = document.getElementById('description').value;
    let read = document.getElementById('read').checked;

    let book = new Book(title,author,pages,description,read)
    library.push(book);

    return book;
};

const resetForm = ()=>{
    title.value = '';
    author.value = '';
    pages.value = undefined;
    description.value = '';
    read.checked = false;
};

const showNewBook = (book)=>{
    section.insertBefore(createDiv(book.title,book.author,book.read) ,adding);
};

const createDiv = (title,author,read)=>{
    const div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute('data-index',library.length -1);

    const h1 = document.createElement('h1');
    h1.textContent = title;
    const h2 = document.createElement('h2');
    h2.textContent = author;
    const readOrNot = document.createElement('p');

    if (read) {
        readOrNot.textContent = `(Already read)`;
    }else{
        readOrNot.textContent = `(Unread)`;
    };

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(readOrNot);

    const books = document.querySelectorAll('.book');
    renderSpecifies(books);

    return div;
}


/*Show Specifies*/

/*const editForm = ()=>{
    let formContainer = document.getElementsByClassName('form-container');
    let inputs = document.getElementsByClassName('form');
    formContainer.removeChild(inputs);
};*/

const editForm = ()=>{
    document.getElementsByClassName('form-container').removeChild(document.getElementsByClassName('form'));
};

const renderSpecifies = (books)=>{
    books.forEach(book => {
        book.addEventListener('click',()=>{
            editForm();
            form.style.display = 'flex';
        })
    });
}