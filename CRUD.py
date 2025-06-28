"""_summary_
Making a CRUD application 
    
"""
from flask import flash

from flask import Flask , jsonify , redirect , render_template , url_for
from _sqlite3 import sqlite_version
from posts import posts
from flask_sqlalchemy import SQLAlchemy

from forms import RegistrationForm , LoginForm , PayBillForm
#app init 
app = Flask(__name__ , template_folder="templates")
app.config['SECRET_KEY'] = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'

#Database instance
db = SQLAlchemy(app)
#Creating a Model

class User(db.Model):
    id= db.Column(db.Integer , primary_key=True)
    username = db.Column(db.String(20) , unique=True , nullable=False)
    email = db.Column(db.String(120) , unique=True , nullable=False)
 
    image =db.Column(db.String(20)  , nullable=False,default="default.jpeg")
    password = db.Column(db.String(60) , uniqu = True ,nullable=False)
    
    def __repr__(self):
        return f"User:{self.username} + {self.email} +{self.id}"
    
    
    
from datetime import datetime
class PostModel(db.Model):
    id = db.Column(db.Integer , primary_key=True)
    author = db.Column(db.String(20) , nullable=False)
    title = db.Column(db.String(20) , unique=True , nullable=False)
    content = db.Column(db.Text , nullable=False)
    date_posted = db.Column(db.DateTime , nullable=False , default=datetime.utcnow)
    
    
    def __repr__(self):
        return f"Posts:{self.author }:  {self.title} : {self.id} "
    


#ROUTES
@app.route("/home", )
def index():
    return  "hi"

@app.route("/posts" , methods=["GET","POST"])
def get_posts():
    return render_template('posts.html' , posts=posts)

#Registration TRoute
@app.route("/register",methods=["GET","POST"])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f"Acount created  for {form.username.data}!", 'success')
        return redirect(url_for("home"))

        
    return render_template("register.html" , title="register" , form = form)
    
   
#Log in Route
@app.route("/login")
def logIn():
    form =LoginForm()
    if form.validate_on_submit():
        if form.email.data == "admin@logui.com" and form.password.data =="pasword":
            flash(f"Loged in as {form.username.data}",'success')
            return redirect(url_for(("home")))
        else:
            flash("Log in unssrssful . Please check passowrd or username","danger")

    return render_template("login.html" , title="login" , form = form)
    
#Payment Route
@app.route("/payment" , methods=["GET"])
def checkout():
    form = PayBillForm()
    
    return render_template("paybill.html" , form=form)

def main():
    app.run(debug=True , host="0.0.0.0")

if __name__=="__main__":
    main()