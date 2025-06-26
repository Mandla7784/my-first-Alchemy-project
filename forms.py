from flask_wtf import FlaskForm 
from wtforms.validators import DataRequired , Length ,Email ,EqualTo 
from wtforms import StringField , PasswordField ,SubmitField ,BooleanField




class RegistrationForm(FlaskForm):
    username = StringField("Username" , validators=[DataRequired(),Length(min=2 , max=20)])
    email = StringField("Email" ,validators=[DataRequired(), Email()])
    password = PasswordField("Password" , validators=[DataRequired()])
    confirmPasswird = PasswordField("Confirm Password" , validators=[DataRequired() , EqualTo("password")])
    
    submit= SubmitField("Sign Up")
    
    
    
class LoginForm(FlaskForm):
    email = StringField("email" ,validators=[DataRequired() , Email()])
    password = PasswordField("password" , validators=[DataRequired()])
    remeber = BooleanField("Rememebr Me ?")
       
    submit= SubmitField("Log In")
    
    
class PayBillForm(FlaskForm):
    card_number = ""
    card_cvc = ""
    card_name = ""
    