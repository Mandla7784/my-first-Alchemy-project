#imports

from flask import Flask
from flask_sqlalchemy import SQLAlchemy



#My App

app = Flask(__name__)
# app.config("SQLALCHEMY_DATABASE_URI") = ""






#Routes
@app.route("/")
def index():
    
    return "Testing 123"



def main():
    app.run(debug=True);
    
if __name__=="__main__":
    main()