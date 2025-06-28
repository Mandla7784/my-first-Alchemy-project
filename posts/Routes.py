
from posts import (posts , redirect,render_template , RegistrationForm , url_for , flash , app  , LoginForm , PayBillForm)


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
