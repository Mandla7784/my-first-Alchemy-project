from posts import db



class User(db.Model):
    id= db.Column(db.Integer , primary_key=True)
    username = db.Column(db.String(20) , unique=True , nullable=False)
    email = db.Column(db.String(120) , unique=True , nullable=False)
 
    image =db.Column(db.String(20)  , nullable=False,default="default.jpeg")
    password = db.Column(db.String(60) , uniqu = True ,nullable=False)
    posts = db.relationship("PostModel" , backref="author" , lazy=True)
    
    
    @staticmethod
    def __repr__(self):
        return f"User:{self.username} + {self.email} +{self.id}"
    
    
    
from datetime import datetime
class PostModel(db.Model):
    id = db.Column(db.Integer , primary_key=True)
    author = db.Column(db.String(20) , nullable=False)
    title = db.Column(db.String(20) , unique=True , nullable=False)
    content = db.Column(db.Text , nullable=False)
    date_posted = db.Column(db.DateTime , nullable=False , default=datetime.utcnow)
    user_id = db.Column(db.Integer , db.Foreignkey('user.id') , nullable=False)
    
    @staticmethod
    def __repr__(self):
        return f"Posts:{self.author }:  {self.title} : {self.id} "
    