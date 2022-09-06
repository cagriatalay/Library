let addButton = document.querySelector("#add");
let wrapper = document.querySelector(".wrapper2");
let sltName = document.querySelector("#name");
let sltAuthor = document.querySelector("#author");
let sltPage = document.querySelector("#pages");

let library = [];

function Book(id, name, author, page) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.page = page;
}


addButton.addEventListener('click', logic);

function logic(x) {
    console.log("test");
    x.preventDefault();

    if (sltName.value.length <= 0 || sltAuthor.value.length <= 0 || sltPage.value.length <= 0) {
        alert('Please fill in all fields!');
    } else {
        boxCreate();
        sltName.value = "";
        sltAuthor.value = "";   
        sltPage.value = "";
    }
}


function boxCreate(x , y) {

    y = Math.floor(Math.random() * 10);
    x = new Book(y, sltName.value, sltAuthor.value, sltPage.value);
    library.push(x);

    let box = document.createElement('div');
    box.classList.add('boxes');
    wrapper.appendChild(box);

    let name = document.createElement('h4');
    name.innerHTML = sltName.value;
    box.appendChild(name);

    let author = document.createElement('p');
    author.innerHTML = sltAuthor.value;
    box.appendChild(author);

    let page = document.createElement('p');
    page.innerHTML = sltPage.value;
    box.appendChild(page);

    let remove = document.createElement('button');
    remove.classList.add('cardBtn');
    remove.textContent = "Remove";
    box.appendChild(remove);
    remove.setAttribute('book-id', y);

    remove.addEventListener('click', function(e){
        e.preventDefault();
        let id = e.target.getAttribute('book-id');
        let removeBook = library.find(x => x.id == id);
        library.splice(library.indexOf(removeBook), 1);
        box.remove();
    });
}