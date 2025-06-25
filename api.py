#REST API in Python Flask light weight frame work


from flask import Flask, request, jsonify , render_template


app = Flask(__name__)

book_list = [
    {
    "id":0,
    "author":"China quel",
    "language":"English",
    "title":"Things fall apart"
    
},
        {
    "id":1,
    "author":"China quel",
    "language":"English",
    "title":"Things fall apart"
    
},
            {
    "id":3,
    "author":"China quel",
    "language":"China",
    "title":"Things fall apart"
    
}
]
@app.route("/")
def index():
    return render_template("books.html")


@app.route('/books', methods=["GET","POST"])
def books():
    
    books = {
        "Books":book_list
    }
    
    if request.method == "GET":
        if len(books["Books"]) > 0:
           return jsonify(books)
        else:
            "Nothing Found" , 404
            
    if request.method == "POST":
        new_author = request.form['author']
        new_lang = request.form['language']
        new_title = request.form['title']
        ID = books["Books"][-1]["id"]+1
        
        new_Book = {
            "id":ID,
            'author':new_author,
            'language':new_lang,
            'title':new_title
        }
        books["Books"].append(new_Book)
        print(f"Book {new_Book['title']} succefully added")
        return jsonify(books["Books"]) , 201
        

   
@app.route('/<name>' , methods=["GET"])
def print_name(name):
    name ="King"
    return 'Hi ,{}'.format(name)

@app.route("/<int:id>", methods=["GET","PUT","DELETE"])
def single_book(id):
    if request.method  == "GET":
        for b in books[book_list]:
            if id == b["id"]:
                return b
            return "Not found" , 404
        
        
    if request.method == "PUT":
        for book in books[book_list]:
            if book["id"] == id:
                
                new_author = request.form['author']
                new_lang = request.form['language']
                new_title = request.form['title']
                ID = books["Books"][-1]["id"]+1
                
                new_Book = {
                    "id":ID,
                    'author':new_author,
                    'language':new_lang,
                    'title':new_title
                }
                books["Books"].append(new_Book)
                print(f"Book {new_Book['title']} succefully added")
            else:
                "Book not found" , 401
       
        
def main() -> str:
    try:
        app.run(debug=True)
    except Exception as e:
        return "Error ,{}".format(e)
    
      
if __name__=="__main__":
    main()
  
    """_summary_
       Request Response Cycle 
       what is REST API
       BD inegration 
       in Memeory 
       Lst 
       SQL Database
       Rest is steless
       Layered
       Cachable
       
       Important  Terms
    
       Endpoint/Resource
       HTTP Method:GET Domain , Port , Path  ,  Query
       HTTP Headers:Aunthetication Token  Cookies 
    """
