#imports

from flask import Flask
from flask_sqlalchemy import SQLAlchemy



#My App

app = Flask(__name__)
# app.config("SQLALCHEMY_DATABASE_URI") = ""

def index():
    
    return "Testing 123"



