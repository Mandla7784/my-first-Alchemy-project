#imports

from flask import Flask ,render_template

from flask_sqlalchemy import SQLAlchemy

#My App

app = Flask(__name__)
# app.config("SQLALCHEMY_DATABASE_URI") = ""


"""_summary_
    here we using flask like a hub for our paged 
 
    Returns:
        _type_: _description_
    """

#Routes
@app.route("/")
def index():
    
    return render_template("index.html")



def main():
    app.run(debug=True);
    
if __name__=="__main__":
    main()