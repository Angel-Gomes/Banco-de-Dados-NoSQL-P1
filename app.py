from flask import Flask, request, jsonify
from flask_mysqldb import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    idade = db.Column(db.Float, nullable=False)

# Routes
@app.route('/produtos', methods=['GET', 'POST'])
def produtos():
    if request.method == 'POST':
        data = request.json
        novo_produto = Produto(nome=data['nome'], idade=data['idade'])
        db.session.add(novo_produto)
        db.session.commit()
        return jsonify({'message': 'Produto criado com sucesso'})
    else:
        produtos = Produto.query.all()
        produtos_json = [{'id': p.id, 'nome': p.nome, 'idade': p.idade} for p in produtos]
        return jsonify(produtos_json)

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
