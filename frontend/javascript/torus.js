// const nonFictionDiv = document.getElementById("non-fiction-books")
// const fictionDiv = document.getElementById("fiction-books")

let myData
fetchJSON("data/torus.json")

// console.log(myData.wantToRead)

function renderTorus() {
  console.log("here")
  const {projects, cards, highlights, journals, books} = myData.users.mlehr;

  for (const type in books.wantToRead) {
    console.log(type)
    // get parent element that each book will go into
    const divEl = document.getElementById(`${type}-books`);


    // Create divs for each book
    for (const bookId in books.wantToRead[type]) {
      book = books.wantToRead[type][bookId]
      console.log(book.title)
      const bookCard = document.createElement("div");
      bookCard.classList.add("card");
      bookCard.id = `${type}-${bookId}`;
      bookCard.innerHTML = `
        <h4>${book.title}</h4>
      `

      divEl.append(bookCard);

    }


  }
  // render
  console.log(books)
}

// console.log(myData["users"])