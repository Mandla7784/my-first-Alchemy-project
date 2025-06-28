from flask_wtf import FlaskForm 

from flask import flash

from flask import Flask , jsonify , redirect , render_template , url_for
from _sqlite3 import sqlite_version
from posts.posts import posts
from flask_sqlalchemy import SQLAlchemy

from posts.forms import RegistrationForm , LoginForm , PayBillForm
#app init 
app = Flask(__name__ , template_folder="templates")
app.config['SECRET_KEY'] = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'

#Database instance
db = SQLAlchemy(app)
#Creating a Model