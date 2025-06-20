from app import db
from datetime import datetime



class TaskModel(db.Model):
    
    id = db.Column(db.Integer , primary_key = True)
    task_Name = db.Column(db.String(50) , nullable=False)
    created = db.Column(db.DateTime  , default=datetime.utcnow) 
    content = db.Column(db.String(100) , nullable = False)
    
    
    def __repr__(self):
        return f"Task({self.task_Name} , {self.id})"
