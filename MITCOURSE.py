from flask import Flask, request, jsonify, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///system.db"
database = SQLAlchemy(app)

# ---------------- MOCK CLASSES ( Gonna remove when using real DB) ---------------- #

class User:
    def __init__(self, name, surname, age, bank_account, password, id):
        self.name = name
        self.surname = surname
        self.password = password
        self.age = age
        self.bank_account = bank_account
        self.id = id

    def __repr__(self):
        return f"User: {self.name} {self.surname} | Age: {self.age} | Bank: {self.bank_account}"

class Product:
    def __init__(self, name, price, id):
        self.id = id
        self.name = name
        self.price = price

    def __repr__(self):
        return f"Product: {self.name} | Price: {self.price}"

# ---------------- MOCK DATA ---------------- #

mock_users = [
    User("Mandla", "Dyonase", 23, "10545456", "password123", 1),
    User("Kiu", "Don", 21, "10545456", "password456", 2),
]

mock_products = [
    Product("Burger", 20, 12),
    Product("Chicken", 5000, 13),
]

# ---------------- DATABASE MODELS ---------------- #

class UserModel(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    name = database.Column(database.String(50), nullable=False)
    surname = database.Column(database.String(50), nullable=False)
    age = database.Column(database.Integer)
    password = database.Column(database.String(100), unique=True)

class ProductModel(database.Model):
    __tablename__ = 'product_model'
    id = database.Column(database.Integer, primary_key=True)
    product_name = database.Column(database.String(100), nullable=False)
    price = database.Column(database.Integer, nullable=False)
    inStock = database.Column(database.Boolean, default=True)
    date_sold = database.Column(database.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Product {self.id} | {self.product_name} | Price: {self.price} | In Stock: {self.inStock}>"

class ReturnedProduct(database.Model):
    __tablename__ = 'returned_product'
    id = database.Column(database.Integer, database.ForeignKey('product_model.id'), primary_key=True)
    date_returned = database.Column(database.DateTime, default=datetime.utcnow)
    product = database.relationship('ProductModel')

    def __repr__(self):
        return f"<ReturnedProduct {self.id} | Returned Date: {self.date_returned}>"

# ---------------- ROUTES ---------------- #

@app.route("/", methods=["GET"])
def index():
    user_list = []
    for u in mock_users:
        user_list.append({
            "name": u.name,
            "surname": u.surname,
            "age": u.age,
            "bank_account": u.bank_account
        })
    return jsonify({"users": user_list})

@app.route("/mock_api/users", methods=["GET"])
def get_all_users():
    users = []
    for user in mock_users:
        users.append({
            "id": user.id,
            "name": user.name,
            "surname": user.surname,
            "age": user.age,
            "bank_account": user.bank_account
        })
    return jsonify({"users": users})

@app.route("/mock_api/user/<int:id>", methods=["GET"])
def get_user_by_id(id):
    for user in mock_users:
        if user.id == id:
            return jsonify({
                "id": user.id,
                "name": user.name,
                "surname": user.surname,
                "age": user.age,
                "bank_account": user.bank_account
            })
    return jsonify({"error": "User not found"}), 404

@app.route("/mock_api/products", methods=["GET"])
def get_all_products():
    products = []
    for product in mock_products:
        products.append({
            "id": product.id,
            "name": product.name,
            "price": product.price
        })
    return jsonify({"products": products})

@app.route("/mock_api/product/<int:id>", methods=["GET"])
def get_product_by_id(id):
    for product in mock_products:
        if product.id == id:
            return jsonify({
                "id": product.id,
                "name": product.name,
                "price": product.price
            })
    return jsonify({"error": "Product not found"}), 404

# ---------------- RUN SERVER ---------------- #

if __name__ == "__main__":
    # database.create_all() 
    app.run(debug=True)
try:
    print("Debugg successfully!")
finally:
    print("Debuge   Done!")
    
