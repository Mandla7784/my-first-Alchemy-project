let url_base_path = " http://127.0.0.1:5000/books";

/**
 *
 * @param {*} url
 * @param {*} name
 * @returns
 */
async function getData(url, name) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Respnse stat: ${response.status}`);
    }
    const data = await response.json();
    const books = data.Books;

    for (let book of books) {
      if (book.name === name) console.log(book);
      return "Not found", 401;
    }
  } catch (error) {
    console.error(error.message);
  }
}

/**
 *
 * @param {*} id
 * @param {*} url
 * @returns {String} error  when no book found
 */
async function getBook_by_ID(id, url) {
  try {
    const response = await fetch(url);
    if (!response.status === "ok") {
      throw new Error(`Response stat: ${response.statusText}`);
    } else {
      const data = await response.json();
      const available_books = data.Books;

      for (const b of available_books) {
        if (b["id"] === id) return b;
        return "Book not found", 401;
      }
    }
  } catch (error) {
    console.error("Error", error.message);
  }
}

function diplayBooks(books = new Array()) {
  books.forEach((b) => {
    console.log(b["name"] + b["title"] + b["author"]);
  });
}

const worker = new Worker("worker.js");

function sendingMessage() {
  worker.postMessage("Hello worker");
}
worker.onmessage() = function(){
  
}