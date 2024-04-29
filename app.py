from flask import Flask, request, jsonify
from flask_mysqldb import SQLAlchemy 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Angel27051991$@127.0.0.1:3306/Login'
db = SQLAlchemy(app)

class Login(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

# Routes
@app.route('/produtos', methods=['GET', 'POST'])
def produtos():
    if request.method == 'POST':
        data = request.json
        novo_login = Login(nome=data['nome'], idade=data['idade'])
        db.session.add(novo_login)
        db.session.commit()
        return jsonify({'message': 'Produto criado com sucesso'})
    else:
        produtos = Login.query.all()
        produtos_json = [{'id': p.id, 'nome': p.nome, 'idade': p.idade} for p in produtos]
        return jsonify(produtos_json)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
