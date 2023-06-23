const express = require('express');
const mongoose = require('mongoose');

// Configuração do MongoDB
mongoose.connect('mongodb://localhost:27017/usersDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexão com o MongoDB estabelecida'))
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Definição do esquema do usuário
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Modelo de usuário baseado no esquema
const User = mongoose.model('User', userSchema);

// Configurações do Express
const app = express();
app.use(express.json());

// Rotas da API

// Rota para obter todos os usuários
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar os usuários no banco de dados' });
    }
});

// Rota para obter um usuário pelo ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar o usuário no banco de dados' });
    }
});

// Rota para criar um novo usuário
app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao salvar o usuário no banco de dados' });
    }
});

// Rota para atualizar um usuário existente
app.put('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            res.json(user);
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar o usuário no banco de dados' });
    }
});

// Rota para excluir um usuário
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir o usuário do banco de dados' });
    }
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
