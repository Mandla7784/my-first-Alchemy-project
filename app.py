#imports

from flask import Flask ,render_template

from flask_sqlalchemy import SQLAlchemy

#My App

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db = SQLAlchemy(app)

db.init_app(app)



class TaskModel(db.Model):
    
    id = db.Column(db.Integer , primary_key = True)
    task_Name = db.Column(db.String(50) , nullable=False)
    
    
    def __repr__(self):
        return f"Task({self.task_Name})"
    

with app.app_context():
    db.create_all()
    

"""_summary_
    here we using flask like a hub for our paged 
 
    Returns:
        _type_: _description_
    """

#Routes
@app.route("/" , methods=['GET'])
def index():
    
    return render_template("index.html")


#create a new task

@app.route("/tasks/create/" , methods=['GET','POST'])
def create_task():
    pass




#Takss getting all tasks
@app.route("/tasks/")
def task_list():
    tasks = db.session.execute(db.select(TaskModel).order_by(TaskModel.task_Name)).scalars()
    return render_template("user/list.html", tasks = tasks)

def main():
    app.run(debug=True);
    
if __name__=="__main__":
    main()