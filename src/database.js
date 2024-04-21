const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://angelikgomes27:Angel27051991$@cluster0.7w1xtlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', () => {
    console.log('Conexão bem-sucedida como banco de dados MongoDB!');
});
