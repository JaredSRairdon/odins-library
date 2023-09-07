// const myLibrary = [];

class Library {
    constructor(name) {
        this.name = name;
        this.bookList = [];
    }

    addBook(book) {
        this.bookList.push(book);
        this.updateUI();
    }

    removeBook(button) {
        const li = button.parentNode;
        const bookIndex = parseInt(li.id.split('-')[1]);
        this.bookList.splice(bookIndex, 1);
        this.updateUI();
    }

    changeReadStatus(button) {
        const li = button.parentNode.parentNode; // Selects li due to it being the parentNode of the button
        const bookIndex = parseInt(li.id.split('-')[1]); // Extracting boox index from the id (book-0, book-1)
        const book = this.bookList[bookIndex];
        book.read = !book.read;
        button.textContent = book.read ? 'Read':'Not Read';
    }

    updateUI() {
        const ul = document.getElementById('book-list')
        ul.innerHTML = ''; // Resets Unordered List UI
    
        // Loop through myLibrary array and create li (list item) elements
        this.bookList.forEach((item, i) => {
            const li = document.createElement('li');
            li.id = `book-${i}`; // Sets unique ID for each book li
            li.innerHTML = `
                <div class="li-container">
                    <div class="title-author">
                        <h3>${item.title}</h3>
                        <p>${item.author}</p>
                    </div>
                    <div class="pages">
                        <p>${item.pages}</p>
                        <p>Pages</p>
                    </div>
                    <button onClick="changeReadStatus(this)" id="read-btn">
                        ${item.read ? "Read":"Not Read"}
                    </button>
                </div>
                <button onClick="removeBook(this)" id="cancel-btn">
                    X
                </button>`
            
            ul.appendChild(li);
        });
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    getBookInfo() {
        return(`${this.title}, by ${this.author}, ${this.pages} pages, ${this.read ? 'read.':'not read yet.'}`)
    }
}

let myLibrary = new Library("Odin's Library");
console.log(myLibrary.name)

let newBook = new Book("Jared's Diary", "Jared", 599, false);
myLibrary.addBook(newBook);
console.log(myLibrary.bookList[0].getBookInfo()) // Accesses first book in bookList and calls the bookInfo() method

myLibrary.updateUI();

function changeReadStatus(button) {
    myLibrary.changeReadStatus(button);
}

function removeBook(button) {
    myLibrary.removeBook(button);
}

document.addEventListener('DOMContentLoaded', () => {
    const addBookButton = document.getElementById('')
});


// Handling sidebar form displaying
const newBookBtn = document.getElementById("new-book-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

newBookBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});

// Handling Form Submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form behavior

    // Get input values
    const title = document.getElementById("title-input").value;
    const author = document.getElementById("author-input").value;
    const pages = document.getElementById("pages-input").value;
    const read = document.getElementById("read-input").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.addBook(newBook);

    // Clear form fields
    document.getElementById("title-input").value = "";
    document.getElementById("author-input").value = "";
    document.getElementById("pages-input").value = "";
    document.getElementById("read-input").checked = false;
    console.log(myLibrary);
    myLibrary.updateUI();
}

const form = document.getElementById("sidebar-form");
form.addEventListener("submit", handleFormSubmit);