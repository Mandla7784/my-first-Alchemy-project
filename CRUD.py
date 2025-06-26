"""_summary_
Making a CRUD application 
    
"""

from flask import Flask , jsonify , redirect , render_template
from _sqlite3 import sqlite_version

#app init 
app = Flask(__name__ , template_folder=".")
#ROUTES

@app.route("/", methods=[])
def index():
    return jsonify({"message":"Hello Home "})

@app.route("/posts" , methods=["GET","POST"])
def get_Posts():
    pass




def main():
    app.run(debug=True , host="0.0.0.0")

if __name__=="__main__":
    main()