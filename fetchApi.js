let url_base_path = " http://127.0.0.1:5000/books";

async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Respnse stat: ${response.status}`);
    }
    const data = await response.json();
    const books = data.Books;

    for (let book of books) {
      console.log(book);
    }
  } catch (error) {
    console.error(error.message);
  }
}
getData(url_base_path);

export default getData;
