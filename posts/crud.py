"""_summary_
Making a CRUD application 
    
"""
from posts import app



def main():
    app.run(debug=True , host="0.0.0.0")

if __name__=="__main__":
    main()