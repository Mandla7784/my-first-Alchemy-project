"""_summary_
Making a CRUD application 
    
"""

from flask import Flask , jsonify , redirect , render_template
from _sqlite3 import sqlite_version
from posts import posts
from forms import RegistrationForm , LoginForm
#app init 
app = Flask(__name__ , template_folder="templates")

app.config['SECRET_KEY'] = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'

#ROUTES
@app.route("/home", )
def index():
    return  "hi"

@app.route("/posts" , methods=["GET","POST"])
def get_posts():
    return render_template('posts.html' , posts=posts)



#Registration TRoute
@app.route("/register")
def register():
    form = RegistrationForm()
    return render_template("register.html" , title="register" , form = form)
    
   
#Log in Route
@app.route("/login")
def logIn():
    form =LoginForm()
    return render_template("login.html" , title="login" , form = form)
    
    

def main():
    app.run(debug=True , host="0.0.0.0")

if __name__=="__main__":
    main()