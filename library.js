// const myLibrary = [];

class Library {
    constructor(name, bookList) {
        this.name = name;
        this.bookList = bookList;
    }

    addBook(book) {
        this.bookList.push(book);
    }
}

let myLibrary = new Library("Odin's Library", []);
console.log(myLibrary.name)

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleReadStatus() {
        this.read = !this.read;
    }

    bookInfo() {
        return(`${this.title}, by ${this.author}, ${this.pages} pages, ${this.read ? 'read.':'not read yet.'}`)
    }
}

let newBook = new Book("Jared's Dictionary", "Jared", 599, false);
myLibrary.addBook(newBook);
newBook.toggleReadStatus(); // Toggling book read status after it is added to the library
console.log(myLibrary.bookList[0].bookInfo()) // Accesses first book in bookList and calls the bookInfo() method

// // Classic method: Constructor object
// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;

//     this.info = function() {
//         return(`${title}, by ${author}, ${pages} pages, ${read ? 'read.':'not read yet.'}`)
//     }
// }

// // Better method: Factory Function
// const bookFactory = (title, author, pages, read) => {
//     info = () => {return(`${title}, by ${author}, ${pages} pages, ${read ? 'read.':'not read yet.'}`)}
//     return {title, author, pages, read, info}
// } 

// function changeReadStatus(button) {
//     const li = button.parentNode.parentNode; // Selects li due to it being the parentNode of the button
//     const bookIndex = parseInt(li.id.split('-')[1]); // Extracting boox index from the id (book-0, book-1)
//     const book = myLibrary[bookIndex];
//     console.log(bookIndex);
//     book.read = !book.read;
//     button.textContent = book.read ? 'Read':'Not Read';

// }

// function removeBook(button) {
//     const li = button.parentNode;
//     const bookIndex = parseInt(li.id.split('-')[1]);

//     myLibrary.splice(bookIndex, 1);
//     updateUI();
// }

// theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// theHobbit2 = bookFactory('The Hobbit', 'J.R.R. Tolkien', 295, false);
// myLibrary.push(theHobbit);
// myLibrary.push(theHobbit2);

// Get reference to book-list element by id
// const bookListElement = document.getElementById('book-list');
// console.log(bookListElement);

// Create an ul (unordered list) element
// const ul = document.createElement('ul');

// function updateUI() {
//     const ul = document.getElementById('book-list')
//     ul.innerHTML = ''; // Resets Unordered List UI

//     // Loop through myLibrary array and create li (list item) elements
//     myLibrary.forEach((item, i) => {
//         const li = document.createElement('li');
//         li.id = `book-${i}`; // Sets unique ID for each book li
//         li.innerHTML = `
//             <div class="li-container">
//                 <div class="title-author">
//                     <h3>${item.title}</h3>
//                     <p>${item.author}</p>
//                 </div>
//                 <div class="pages">
//                     <p>${item.pages}</p>
//                     <p>Pages</p>
//                 </div>
//                 <button onClick="changeReadStatus(this)" id="read-btn">
//                     ${item.read ? "Read":"Not Read"}
//                 </button>
//             </div>
//             <button onClick="removeBook(this)" id="cancel-btn">
//                 X
//             </button>`
        
//         ul.appendChild(li);
//     });
// }

// updateUI();

// // Append the ul element to the book-list element
// // bookListElement.appendChild(ul);

// console.log(myLibrary);

// // Handling sidebar form displaying
// const newBookBtn = document.getElementById("new-book-btn");
// const sidebar = document.querySelector(".sidebar");
// const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

// newBookBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("show");
// });

// sidebarCloseBtn.addEventListener("click", () => {
//     sidebar.classList.toggle("show");
// });

// // Handling Form Submission
// function handleFormSubmit(event) {
//     event.preventDefault(); // Prevent default form behavior

//     // Get input values
//     const title = document.getElementById("title-input").value;
//     const author = document.getElementById("author-input").value;
//     const pages = document.getElementById("pages-input").value;
//     const read = document.getElementById("read-input").checked;

//     const newBook = new Book(title, author, pages, read);
//     myLibrary.push(newBook);

//     // Clear form fields
//     document.getElementById("title-input").value = "";
//     document.getElementById("author-input").value = "";
//     document.getElementById("pages-input").value = "";
//     document.getElementById("read-input").checked = false;
//     console.log(myLibrary);
//     updateUI();
// }

// const form = document.getElementById("sidebar-form");
// form.addEventListener("submit", handleFormSubmit);