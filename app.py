#imports

from flask import Flask ,render_template ,request ,redirect , url_for

from flask_sqlalchemy import SQLAlchemy

#My App

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///SchoolTask.db"
db = SQLAlchemy(app)


from datetime import datetime

class TaskModel(db.Model):
    
    id = db.Column(db.Integer , primary_key = True)
    task_Name = db.Column(db.String(50) , nullable=False)
    completed = db.Column(db.DateTime  , default=datetime.utcnow) 
    content = db.Column(db.String(100) , nullable = False)
    
    
    def __repr__(self):
        return f"Task({self.task_Name} , {self.id})"
    



"""_summary_
    here we using flask like a hub for our paged 
 
    Returns:
        _type_: _description_
    """

#Routes
@app.route("/" , methods=['GET'])
def index():
    
    return render_template("index.html")
#Takss getting all tasks
@app.route("/tasks/")
def task_list():
    tasks = db.session.execute(db.select(TaskModel).order_by(TaskModel.task_Name)).scalars()
    return render_template("/list.html", tasks = tasks)
#create a new task

@app.route("/tasks/create/" , methods=['GET','POST'])
def create_task():
    
        if request.method == "POST":
            task = TaskModel(
            task_name=request.form["taskName"],
            task_id=request.form["id"],
        )
            db.session.add(task)
            db.session.commit()
            return redirect(url_for("user_detail", id=task.id))
        return render_template(url_for("task/create.html"))

@app.route("/tasks/<int:task_id>" ,methods=['GET'])
def get_task(task_id):
    pass

def main():
    app.run(debug=True);
    
if __name__=="__main__":
    with app.app_context():
        db.create_all()
        
    main()